import React from 'react';
import NetworkDashboard from '../../components/NetworkDashboard';

import { cleanup, render } from '@testing-library/react';


afterEach(cleanup);

describe('<NetworkBashboard />', () => {

    it('renders without crashing', () => {
        render(<NetworkDashboard />);
    });

    it('renders an information panel about the network ', () => {
        const { getByTestId } = render(<NetworkDashboard />);
    
        getByTestId('info-box');
    });

    it('renders a \"Network Dashboard\" header', () => {
        const { getByText } = render(<NetworkDashboard />);

        getByText(/network dashboard/i);
    });
});