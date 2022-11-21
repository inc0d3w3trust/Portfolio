import { BrowserRouter as Router } from 'react-router-dom';
import RootComponent from './components/RootComponent';

function App() {

  return (
    <>
      <Router>
          <RootComponent />
      </Router>
    </>
  );
}

export default App;