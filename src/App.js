import './App.css';
import ApiRouter from './apiRouter/ApiRouter';
import { Provider } from 'react-redux';
import { ContextProvider } from './context/Mode-context';
import Store from './redux/Store';
function App() {
  return (
    <div className="App">
<ContextProvider>
         <ApiRouter /> 
</ContextProvider>

    </div>
  );
}

export default App;
