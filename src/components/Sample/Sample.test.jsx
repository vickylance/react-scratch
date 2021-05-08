import React from 'react';
import { render, screen } from '@testing-library/react';
import Sample from './Sample';

describe('This will test MyComponent', () => {
  it('renders correctly', () => {
    const { container } = render(<Sample firstName="Alejandro" lastName="Roman" />);
    expect(container).toMatchSnapshot();
  });

  it('renders message', () => {
    render(<Sample firstName="Alejandro" lastName="Roman" />);
    expect(screen.getByText('Hi Alejandro Roman!')).toBeInTheDocument();
  });
});
