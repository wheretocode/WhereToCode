import React from 'react';
import App from './App';
import Firebase, { FirebaseContext } from './Firebase/index';

import { cleanup, render } from '@testing-library/react';

beforeEach(cleanup);
afterEach(cleanup);

describe("<App />", () => {
  it('should render without crashing', () => {
    render( <FirebaseContext.Provider value={new Firebase()}>
              <App />
            </FirebaseContext.Provider> );
  });

  it('should render a navigation bar', () => {
    const { getByText } = render( <FirebaseContext.Provider value={new Firebase()}>
                                    <App />
                                  </FirebaseContext.Provider> );

    getByText(/sign in/i);
  });

  it('should render Landing Page by Default', () => {
    const { getByText } = render( <FirebaseContext.Provider value={new Firebase()}>
                                    <App />
                                  </FirebaseContext.Provider> );

    getByText(/landing/i);
  });
});