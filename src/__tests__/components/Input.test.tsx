import { render, screen } from '@testing-library/react';

import { ThemeInput } from '../../components/Form';

describe('Input Component', () => {
  test('should be able to render an input', () => {
    render(
      <ThemeInput
        type='text'
        id='amount'
        placeholder='R$ 1000,00'
        borderColor='success'
      />,
    );
    expect(screen.getByPlaceholderText('R$ 1000,00')).toBeTruthy();
  });
});
