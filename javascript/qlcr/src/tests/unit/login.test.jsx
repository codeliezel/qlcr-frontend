/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Login from '../../components/authentication/login.component';

describe('Test case for Login', () => {
  let wrapper;
  test('email check', () => {
    wrapper = shallow(<Login />);
    wrapper.find('input[type="text"]').simulate('change', { target: { name: 'email', value: 'tomori@gmail.com' } });
    expect(wrapper.state('email')).toEqual('tomori@gmail.com');
  });
  it('password check', () => {
    wrapper = shallow(<Login />);
    wrapper.find('input[type="password"]').simulate('change', { target: { name: 'password', value: 'tomori.5H' } });
    expect(wrapper.state('password')).toEqual('tomori.5H');
  });
  it('login check with right data', () => {
    wrapper = shallow(<Login />);
    wrapper.find('input[type="text"]').simulate('change', { target: { name: 'email', value: 'tomori@gmail.com' } });
    wrapper.find('input[type="password"]').simulate('change', { target: { name: 'password', value: 'tomori.5H' } });
    wrapper.find('button').simulate('click');
  });
//   it('login check with wrong data', () => {
//     wrapper = shallow(<Login />);
// eslint-disable-next-line max-len
//     wrapper.find('input[type="text"]').simulate('change', { target: { name: 'username', value: 'krishankantsinghal' } });
// eslint-disable-next-line max-len
//     wrapper.find('input[type="password"]').simulate('change', { target: { name: 'password', value: 'krishankant1234' } });
//     wrapper.find('button').simulate('click');
//     expect(wrapper.state('isLogined')).toBe(false);
//   });
});
