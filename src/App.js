import logo from './logo.svg';
import './App.css';
import RouterComponent from './routes';
import { ThemeProvider } from './contexts/theme';

function App() {
  return (
    <ThemeProvider>
      <RouterComponent />
    </ThemeProvider>
  );
}

export default App;
