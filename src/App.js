import './App.css';
import Grid from './components/Grid/Grid';
import SlideUp from './components/SlideUp/SlideUp';
import { BigDayProvider } from './context/GlobalState';

function App() {
  return (
    <div className="App">
      <BigDayProvider>
        <Grid />
        <SlideUp />
      </BigDayProvider>
    </div>
  );
}

export default App;
