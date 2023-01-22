import { ReactNode } from 'react';
import { CalculateMdrProvider } from './CalculateMdrContext';

interface IGlobalProvider {
  children: ReactNode;
}

function GlobalProvider({ children }: IGlobalProvider) {
  return <CalculateMdrProvider>{children}</CalculateMdrProvider>;
}

export default GlobalProvider;
