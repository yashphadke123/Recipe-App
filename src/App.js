import './index.css';
import Pages from './pages/Pages';
import Search from './components/search';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
          <Search/>
          <div className="App">
          <Pages/>
          </div>
    </BrowserRouter>
  );
}

export default App;
