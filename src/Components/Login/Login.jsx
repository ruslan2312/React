import React from "react";
import TextField from '@mui/material/TextField';
import Button from "@restart/ui/esm/Button";


const Login = (props) => {
    let loginV = React.createRef();
    let passV = React.createRef()

    const onChangeAuth = {

    }
    const auth = () => {
        let login = loginV.current.value;
        let password = passV.current.value;
        console.log(login);
        props.authDate(login, password);
    }

    return <div>
        <div>
        </div>
        <span>Login</span>
        <TextField id="Email" label="Login" inputRef={loginV} variant="outlined" />
        <br />
        <span>Password</span>
        <TextField id="Password" label="Password"  inputRef={passV} variant="outlined" />

        <Button onClick={auth}> Отправить</Button>
    </div >
}

export default Login;