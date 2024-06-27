// CheckBoxComponent.test.tsx

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import CheckBoxComponent from '.';
import theme from '../../../Theme/theme';
import { ThemeProvider } from '@emotion/react';

describe('CheckBoxComponent', () => {
  it('renders unchecked checkbox', () => {
    render(
      <ThemeProvider theme={theme}>
        <CheckBoxComponent checked={false} onChange={() => {}} />
      </ThemeProvider>
    );

    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBe(false);
  });

  it('renders checked checkbox', () => {
    render(
      <ThemeProvider theme={theme}>
        <CheckBoxComponent checked onChange={() => {}} />
      </ThemeProvider>
    );

    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBe(true);
  });

  it('triggers onChange handler', () => {
    const handleChange = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <CheckBoxComponent checked={false} onChange={handleChange} />
      </ThemeProvider>
    );

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(handleChange).toHaveBeenCalled();
  });

  it('renders indeterminate checkbox', () => {
    render(
      <ThemeProvider theme={theme}>
        <CheckBoxComponent indeterminate onChange={() => {}} />
      </ThemeProvider>
    );

    // Add assertions for indeterminate rendering if necessary
  });

  // Add more test cases as needed
});
