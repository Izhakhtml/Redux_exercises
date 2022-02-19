import './App.css';
import ApiRouter from './apiRouter/ApiRouter';
import { Provider } from 'react-redux';
import Store from './redux/Store';
function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <ApiRouter />
      </Provider>
    </div>
  );
}

export default App;
