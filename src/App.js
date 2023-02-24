import './App.css';
import Aksesuar from './components/Aksesuar';
import Header from './components/Header'
import Kateg from './components/Kateg';
import Kiyim from './components/Kiyim';
import Obuv from './components/Obuv';

function App() {
  return (
    <div>
      <Header/>
      <Kateg/>
      <Obuv/>
      <Kiyim/>
      <Aksesuar/>
    </div>
  );
}

export default App;