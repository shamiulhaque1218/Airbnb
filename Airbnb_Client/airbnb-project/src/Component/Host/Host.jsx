import { NavLink, Outlet } from "react-router-dom";
import {  MdOutlineAddHome } from 'react-icons/md';


const Host = () => {
    return (
        <div>
            <container className="flex">
            <img className="h-9 w-8 ml-20 mt-6" src="/logo.png" alt="logo" />
            <p className="mt-7 font2"> Ready to Airbnb it? </p>
            <NavLink className="mt-5 flex ml-5 bg2 text-white px-5 py-2 rounded-md font-normal" to='/'>  <MdOutlineAddHome className="mr-1 text-3xl"> </MdOutlineAddHome> Airbnb Setup </NavLink>
        </container>

        <Outlet> </Outlet>
        </div>
    );
};

export default Host;