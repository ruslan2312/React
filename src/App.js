import './App.css';
import ProfileContainer from './Components/Profile/ProfileContainer';
import { Route } from 'react-router';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import DialogsContainer from './Components/Dilogs/DialogsContainer';
import NavbarContainer from './Components/Navbar/NavbarContainer';
import UsersContainer from './Components/Users/UsersContainer';
import { HeaderContainer } from './Components/Header/HeaderContainer';
import LoginContainer from './Components/Login/LoginContainer';

function App(props) {
    return (
        <div className='app-wrapper'>
            <HeaderContainer> </HeaderContainer>
            <NavbarContainer> </NavbarContainer>
            <div className="app-wrapper-content">
                <Route path="/news" render={() => <News></News>} />
                <Route path="/messages" render={() => <DialogsContainer> </DialogsContainer>} />
                <Route path="/profile/:userId?" render={() => <ProfileContainer ></ProfileContainer>} />
                <Route path="/settings" render={() => <Settings></Settings>} />
                <Route path="/users" render={() => < UsersContainer></UsersContainer>} />
                <Route path="/login" render={() => < LoginContainer></LoginContainer>} />
            </div>
        </div >
    );
}

export default App;
