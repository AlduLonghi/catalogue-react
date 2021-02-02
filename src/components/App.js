import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes />
      </main>
    </BrowserRouter>
  );
}

export default App;
