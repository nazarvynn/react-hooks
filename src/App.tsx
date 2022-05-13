import AppRouter from './AppRouter';
import Navigation from './common/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <AppRouter />
      </main>
    </div>
  );
}

export default App;
