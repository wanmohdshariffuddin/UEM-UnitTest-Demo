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
import axios from 'axios';

// Unit Test for Return Value or Exception: 
const sum = require('../Sum');
test('adds 1 + 2 to equal 3', () => {
  expect(sum(2, 2)).toBe(4);
});



jest.mock('axios');

Enzyme.configure({ adapter: new Adapter() });

test("renders without crashing", () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});



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



describe('Test fetchMoview function', () => {
  it('should fetch list of moviews from API, and update application state ', async () =>{
    jest.mock('axios');
    const movies = [{movie_id: 3}];
    const resp = {data: movies};
    axios.get.mockResolvedValue(resp);

    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
  
    //call fetch movie function
    await instance.fetchMovies()
    //assert state = movie
    const states = instance.state;

    expect(states.movies).toEqual(movies);
  })

  it('should do some other things ', () => {
    expect(true).toEqual(true);
  })
})


// Objective. Want to test vote of Movies
// Unit Test for Change in State
describe('Test voteMovie function', () => {
  it('should fetch updated state after voteMovie', async () =>{
    jest.mock('axios');
    //1) Create new rendering of APP component, can access things like state, functions, variable
    const wrapper = shallow(<App />);
    console.log("INIT"+wrapper.state().movies,wrapper.instance().state.movies);

    //2) Create a Mock response service of the API. Then, Call voteMovie func
    const updatedMovie = {"movie_id":1,"votes":4}
    const resp = {data: updatedMovie};
    axios.post.mockResolvedValue(resp);
    //call fetch movie function
    await wrapper.instance().voteMovie(2,1);
    console.log("Updated:"+wrapper.state().movies,wrapper.instance().state.movies)

    //3) Compare between currentState and newState
    expect(wrapper.state().movies).toContain(updatedMovie);

  })

  it('should do some other things ', () => {
    expect(true).toEqual(true);
  })
})

