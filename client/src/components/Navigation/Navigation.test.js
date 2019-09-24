import React from 'react';
import Navigation from './index.jsx';
import Navigation2 from './index.jsx';

import { BrowserRouter as Router } from 'react-router-dom';

import { cleanup, render } from '@testing-library/react';

afterEach(cleanup);

describe('<Navigation />', () => {
    it('should render without crashing', () => {
        render( <Router>
                    <Navigation />
                </Router> );
    });

    
  it('should render a sign in button', () => {
    const { getByText } = render( <Router>
                                    <Navigation />
                                  </Router> );

    getByText(/sign in/i);
  });

  
  it('should render a sign up button', () => {
    const { getByText } = render( <Router>
                                    <Navigation />
                                  </Router> );

    getByText(/sign up/i);
  });
});

describe('<Navigation2 />', () => {
  it('should render without crashing', () => {
      render( <Router>
                  <Navigation2 />
              </Router> );
  });

  
it('should render a sign in button', () => {
  const { getByText } = render( <Router>
                                  <Navigation2 />
                                </Router> );

  getByText(/sign in/i);
});


it('should render a sign up button', () => {
  const { getByText } = render( <Router>
                                  <Navigation2 />
                                </Router> );

  getByText(/sign up/i);
});
});