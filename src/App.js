import './App.css';
import Head from './components/Head/Head.tsx';
import Explanation from './components/body/Explanation/Explanation.tsx';
import Heart from './components/body/Heart/Heart.tsx';
import What from './components/body/What/What.tsx';

function App() {
  return (
    <div className="App">
      <Head />
      <div className="background"></div>

      <Explanation />
      <Heart />
      <What />
    </div>
  );
}

export default App;
