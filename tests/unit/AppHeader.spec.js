// Two tests has to be made for this component
// 1- If user is not logged in, do not show logout button
// 2- If user is logged in show logout button

import AppHeader from '@/components/AppHeader.vue';
import { mount } from "@vue/test-utils";


// Jest Funtions :
// describe --> Create a block of tests, aka a "test suite"
// test -->   1rt argument : what the test should test
//            2nd argument : function which run for that test
// expect --> Create an assertion about the expected outcome
//  we put The value to apply matchers against
// toBe() --> Jest matcher which checks the value is what you expect
// toEqual(), not.toBe() ...

// Wrapper : In addition to mount this component, it giving us access functions that helps us testing the component.


// describe used to do multiply tests
describe('AppHeader', () => {
  // test OR it
  test('If user is not logged in, do not show logout button', () => {
    const wrapper = mount(AppHeader)
    expect(wrapper.find('button').isVisible()).toBe(false)
  }),

  // Thanks to Wrapper, we can use setData method in order to change loggedIn value
  test('If user is logged in show logout button', async () => {
    const wrapper = mount(AppHeader)
    // we can change loggedIn to true - and we need to make our test asynchronous to wait until DOM is loaded
    await wrapper.setData({ loggedIn: true})
    expect(wrapper.find('button').isVisible()).toBe(true)
  })
})