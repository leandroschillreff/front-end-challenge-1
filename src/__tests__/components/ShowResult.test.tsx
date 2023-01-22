import { render, screen } from '@testing-library/react';

import { ShowResult } from '../../components/ShowResult';

describe('ShowResult Component', () => {
  test('should be able to render an input', () => {
    render(<ShowResult text='Amanhã: ' value={1000} />);
    expect(screen.getAllByText('Amanhã:')).toBeTruthy();
    expect(screen.getAllByText('R$ 10,00')).toBeTruthy();
  });
});
