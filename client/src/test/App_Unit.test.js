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



describe('Test fetchMoview function', () => {
  it('should fetch list of moviews from API, and update application state ', async () =>{
    jest.mock('axios');
    const movies = [{movie_id: 2}];
    const resp = {data: movies};
    axios.get.mockResolvedValue(resp);

    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
  
    //call fetch movie function
    await instance.fetchMovies()

    //assert state = movie
    const states = instance.state;

    //expect(states.contains(movies)).toEqual(movies);
    expect(states.movies).toEqual(movies);


  })

  it('should do some other things ', () => {
    expect(true).toEqual(true);
  })
})