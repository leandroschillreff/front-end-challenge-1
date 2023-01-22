import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalProvider from './contexts';
import { RoutesMain } from './routes';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <GlobalProvider>
      <GlobalStyle />
      <ToastContainer />
      <RoutesMain />
    </GlobalProvider>
  );
}

export default App;
