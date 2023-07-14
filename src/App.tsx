import './App.css';
import { Application } from './components/application/Application';
import { Counter } from './components/counter/Counter';
import { MuiMode } from './components/mui/MuiMode';
import { AppProviders } from './providers/AppProviders';

function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
