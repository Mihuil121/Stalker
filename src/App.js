import './App.css';
import Head from './components/Head/Head.tsx';
import Explanation from './components/body/Explanation/Explanation.tsx';
import Heart from './components/body/Heart/Heart.tsx';

function App() {
  return (
    <div className="App">
      <Head />
      <div className="background"></div>

      <Explanation />
      <Heart />

    </div>
  );
}

export default App;
