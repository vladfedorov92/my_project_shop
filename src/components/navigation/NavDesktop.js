import React, {useEffect, useState} from 'react';
import {AppBar, Box, Tab, Tabs} from "@mui/material";
import {Link, Outlet} from "react-router-dom";

const NavDesktop = (props) => {
    const [value, setValue] = useState(0);
    const handleChange =(event,newValue)=>{
        setValue(newValue);
    }
    return (
        <Box sx={{marginTop: "10vh"}}>
            <AppBar sx={{backgroundColor: "lightgrey"}}>
                <Tabs value={value} onChange={handleChange}>
                    {props.routes.map(item =>
                        <Tab key={item.route} component={Link} to={item.route} label={item.title}/>)}
                </Tabs>
            </AppBar>
            <Outlet/>
        </Box>
    );
};

export default NavDesktop;