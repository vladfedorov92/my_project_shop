import React from 'react';
import LoginForm from "../forms/LoginForm";
import {useDispatch} from "react-redux";
import {login} from "../../redux/authSlice";
import {signInFirebase} from "../../firebase/authService";
import {useNavigate} from "react-router-dom";
import {AUTH_USER} from "../../utils/constants";
import {setCode} from "../../redux/codeSlice";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const submitFn = async (data) => {
        try {
            let email = await signInFirebase(data);
            dispatch(login(await email));
            navigate("/");
            localStorage.setItem(AUTH_USER, email);
            } catch (e) {
           dispatch(setCode("Wrong credentyials"));
        }
    }
    return <LoginForm submit={submitFn}/>
};

export default Login;