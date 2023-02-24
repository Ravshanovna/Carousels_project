import './App.css';
import Header from './components/Header'
import Kateg from './components/Kateg';

import { useSelector } from 'react-redux';

function App() {
  const malumot = useSelector(state => state)
  console.log(malumot, 'hammasi');
  return (
    <div>
      <Header/>
    </div>
  );
}

export default App;