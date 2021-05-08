import React from 'react';
import { render, screen } from '@testing-library/react';
import Sample2 from './Sample2';

describe('This will test MyComponent', () => {
  it('renders correctly', () => {
    const { container } = render(<Sample2 firstName="Alejandro" lastName="Roman" />);
    expect(container).toMatchSnapshot();
  });

  it('renders message', () => {
    render(<Sample2 firstName="Alejandro" lastName="Roman" />);
    expect(screen.getByText('Hi Alejandro Roman!')).toBeInTheDocument();
  });
});
