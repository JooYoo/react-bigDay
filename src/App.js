import './App.css';
import Grid from './components/Grid/Grid';
import SlideUp from './components/SlideUp/SlideUp';
import { BigDayProvider } from './share/BigDayContext';

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
