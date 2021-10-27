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
import DialogsContainer from './Components/Dilogs/DialogsContainer';
import NavbarContainer from './Components/Navbar/NavbarContainer';



function App(props) {

    return (
        <div className='app-wrapper'>
            <Header> </Header>
            <NavbarContainer> </NavbarContainer>
            <div className="app-wrapper-content">
                <Route exact path="/news" render={() => <News></News>} />
                <Route exact path="/messages" render={() => <DialogsContainer> </DialogsContainer>} />
                <Route exact path="/profile" render={() => <Profile ></Profile>} />
                <Route exact path="/settings" render={() => <Settings></Settings>} />
            </div>
        </div>
    );
}

export default App;
