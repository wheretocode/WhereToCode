import React from 'react';
import App from './App';
import Firebase, { FirebaseContext } from './Firebase/index';
import * as firebase from 'firebase/app'

import { cleanup, render } from '@testing-library/react';

beforeEach(cleanup);
afterEach(cleanup);

jest.mock('axios')
jest.mock('firebase/app')
jest.mock('firebase/auth')


describe("<App />", () => {
  afterEach(cleanup);

  it('renders with firebase auth', async () => {
    firebase.auth = jest.fn().mockReturnValue({
      onAuthStateChanged: cb => () => cb()
    })
  })

  it('should render without crashing', () => {
    render(<FirebaseContext.Provider value={new Firebase()}>
      <App />
    </FirebaseContext.Provider>);
  });


  it('should render a navigation bar', () => {
    const { getByText } = render(<FirebaseContext.Provider value={new Firebase()}>
      <App />
    </FirebaseContext.Provider>);

    getByText(/sign in/i);
  })

  it('should render Landing Page by Default', () => {
    const { getByText } = render(<FirebaseContext.Provider value={new Firebase()}>
      <App />
    </FirebaseContext.Provider>);

    getByText(/landing/i);
  });

});