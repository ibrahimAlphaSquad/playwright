import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../app/page';

// describe('Home', () => {
//     it('renders welcome message', () => {
//         render(<Home />);

//         expect(screen.getByText('Welcome to home page')).toBeInTheDocument();
//     });

//     it('The home page should contain "deployment"', () => {
//         render(<Home />);

//         const myElement = screen.getByRole('paragraph', { name: /deployment/i });

//         expect(myElement).toBeInTheDocument();
//     });

//     it('renders link to about page', () => {
//         render(<Home />);

//         expect(screen.getByRole('link', { name: /about/i })).toHaveAttribute('href', '/about');
//     });
// });

describe('Home', () => {
    beforeEach(() => {
        render(<Home />);
    });

    it('Renders welcome message', () => {
        expect(screen.getByText('Welcome to home page')).toBeInTheDocument();
    });

    it('The home page should contain "deployment"', () => {
        const deploymentText = screen.getByText(/deployment/i);
        expect(deploymentText).toBeInTheDocument();
    });

    it('Renders link to about page', () => {
        const aboutLink = screen.getByRole('link', { name: /about/i });
        expect(aboutLink).toHaveAttribute('href', '/about');
    });
});