import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dilogs/Dialogs';
import { Route } from 'react-router';
import Dialog from './Components/Dilogs/Dialogs';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';

function App() {
  return (
    <div className='app-wrapper'>
      <Header> </Header>
      <Navbar> </Navbar>
      
      <div className="app-wrapper-content">
        <Route path="/news" component={News}/>
        <Route path="/messages" component={Dialog}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/settings" component={Settings}/>
      </div>
    </div>
  );
}

export default App;
