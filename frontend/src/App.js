import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage';

function App() {
  return (
    <div className='App'>
     <BrowserRouter>
     <Switch>
       <Route exact path='/films' component={MainPage} />
     </Switch> 
     </BrowserRouter>
    </div>
  );
}

export default App;
