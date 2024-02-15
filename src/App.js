import './App.css';
import {Route, Routes} from "react-router-dom";
import {navItemArray, navProductArray} from "./utils/constants";
import Home from "./components/pages/Home";
import Customers from "./components/pages/Customers";
import Orders from "./components/pages/Orders";
import ShoppingCart from "./components/pages/ShoppingCart";
import Login from "./components/pages/Login";
import Logout from "./components/pages/Logout";
import SignUp from "./components/pages/SignUp";
import ErrorPage from "./components/pages/ErrorPage";
import Dairy from "./components/pages/Dairy";
import Bread from "./components/pages/Bread";
import NavDesktop from "./components/navigation/NavDesktop";
import Back from "./components/pages/Back";
import {useState} from "react";
import {useSelector} from "react-redux";

function App() {
    const authUser = useSelector(state => state.auth.authUser);
    const getRoutes = ()=>{
        return navItemArray.filter((item) => item.forAll
            || item.forUsers && authUser
            || item.forAdmin &&  authUser.includes("admin")
            || item.noAuthenticated && !authUser
        )
    }
    return (
        <Routes>
            {/*<Route path={navItemArray[0].route} element={<Layout/>}>*/}
            <Route path={navItemArray[0].route} element={<NavDesktop routes={getRoutes()}/>}>
                <Route index element={<Home/>}/>
                <Route path={navItemArray[1].route} element={<Customers/>}/>
                <Route path={navItemArray[2].route} element={<NavDesktop routes={navProductArray}/>}>
                    <Route path={navProductArray[0].route} element={<Dairy/>}/>
                    <Route path={navProductArray[1].route} element={<Bread/>}/>
                </Route>
                <Route path={navItemArray[3].route} element={<Orders/>}/>
                <Route path={navItemArray[4].route} element={<ShoppingCart/>}/>
                <Route path={navItemArray[5].route} element={<Login/>}/>
                <Route path={navItemArray[6].route} element={<Logout/>}/>
                <Route path={navItemArray[7].route} element={<SignUp/>}/>
            </Route>
            <Route path={"*"} element={<ErrorPage/>}/>
        </Routes>

    );
}

export default App;
