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