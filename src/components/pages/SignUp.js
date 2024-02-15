import React from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {signUpInFirebase} from "../../firebase/authService";
import {login} from "../../redux/authSlice";
import {AUTH_USER} from "../../utils/constants";
import {setCode} from "../../redux/codeSlice";
import SignUpForm from "../forms/SignUpForm";


const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const registration = async (data) => {
        try {
            let email = await signUpInFirebase(data);
            dispatch(login(await email));
            navigate("/");
            localStorage.setItem(AUTH_USER, email);
        } catch (e) {
            dispatch(setCode("Wrong credentyials"));
        }
    }
    return <SignUpForm registration={registration}/>
};

export default SignUp;