import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import { Route } from 'react-router';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import DialogsContainer from './Components/Dilogs/DialogsContainer';



function App(props) {
  return (
    <div className='app-wrapper'>
      <Header> </Header>
      <Navbar state={props.state.DialogsPage}> </Navbar>
      <div className="app-wrapper-content">
        <Route exact path="/news" render={() => <News></News>} />
        <Route exact path="/messages" render={() => <DialogsContainer state={props.state.DialogsPage} dispatch={props.dispatch}> </DialogsContainer>} />
        <Route exact path="/profile" render={() => <Profile state={props.state.PostPage} dispatch={props.dispatch}></Profile>} />
        <Route exact path="/settings" render={() => <Settings></Settings>} />
      </div>
    </div>
  );
}

export default App;
