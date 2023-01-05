// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });


import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render, screen } from '@testing-library/react'
import axios from 'axios';
import { mount } from 'enzyme';


jest.mock('axios');

Enzyme.configure({ adapter: new Adapter() });

test("renders without crashing", () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


// describe('About', () => {
//   test('About renders correctly', () => {
//     render( <App /> )
//     expect(screen.getByText("Votes:")).toBeInTheDocument()
//   })
// })


//To test is there this h1 title named Hello World React
describe('Test App Entry point', function () {
  it('should have a h1 tag with Hello world React!', function () {
    const wrapper = shallow(<App />);
    expect(wrapper.find("h1").text()).toEqual("Hello world React!");
  });
});


test("renders Nav Title", () => {
  const wrapper = shallow(<App />);
  const welcome = <strong className="navbar-item">Movie Voting App 2022</strong>;
  expect(wrapper.contains(welcome)).toEqual(true);
});



// describe('Test fetchMoview function', () => {
//   it('should fetch list of moviews from API, and update application state ', async () =>{
//     jest.mock('axios');
//     const movies = [{movie_id: 3}];
//     const resp = {data: movies};
//     axios.get.mockResolvedValue(resp);

//     const wrapper = shallow(<App />);
//     const instance = wrapper.instance();
  
//     call fetch movie function
//     await instance.fetchMovies()
//     assert state = movie
//     const states = instance.state;

//     expect(states.contains(movies)).toEqual(movies);
//     expect(states.movies).toEqual(movies);
//   })

//   it('should do some other things ', () => {
//     expect(true).toEqual(true);
//   })
// })


// Onjective. Want to test vote of Movies

//Initially the state is empty, due wrapper passing an empty values
// Pass values to empty state

//1) Create new instance of APP component, can access things like state, functions, variable

//2) Get current state and pass it into originally movies: []

//3) Create a Mock response service of the API. Then, Call voteMovie func

//4) Create newState array

//5) Compare between currentState and newState



describe('Test voteMovie function', () => {
  it('should fetch updated state after voteMovie', async () =>{
    jest.mock('axios');
    //1) Create new instance of APP component, can access things like state, functions, variable
    const initialStates = [{"movie_id":2,"votes":3},{"movie_id":1,"votes":3},{"movie_id":3,"votes":3}];

    const wrapper = mount(<App initialValue={ initialStates } />);
    const instance = wrapper.instance();

    //2) Get current state and pass it into originally movies: []
    //const initialStates = [{"movie_id":2,"votes":3},{"movie_id":1,"votes":3},{"movie_id":3,"votes":3}];
    //instance.setState({movies: initialStates});


    //3) Create a Mock response service of the API. Then, Call voteMovie func
    const resp = {data: {"movie_id":1,"votes":4}};
    axios.post.mockResolvedValue(resp);
    //call fetch movie function
    //await instance.voteMovie(1,1)
    await instance.voteMovie(1,1);
    const current = instance.state;

    //4) Create newState array
    const newStates = [{"movie_id":2,"votes":3},{"movie_id":1,"votes":4},{"movie_id":3,"votes":3}];

    //5) Compare between currentState and newState
    expect(current.movies).toEqual(newStates);

  })

  it('should do some other things ', () => {
    expect(true).toEqual(true);
  })
})

