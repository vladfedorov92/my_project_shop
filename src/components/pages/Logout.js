import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authSlice";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { signOutFirebase } from "../../firebase/authService";
import { AUTH_USER } from "../../utils/constants";
import { resetCode } from "../../redux/codeSlice";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.authUser);

  let signOut = async () => {
    await signOutFirebase();
    dispatch(logout());
    navigate("/");
    localStorage.removeItem(AUTH_USER);
    dispatch(resetCode());
  };
  return (
    <div>
      <h1>
        <Button variant="contained" onClick={signOut}>
          Sign Out {user}
        </Button>
      </h1>
    </div>
  );
};

export default Logout;
