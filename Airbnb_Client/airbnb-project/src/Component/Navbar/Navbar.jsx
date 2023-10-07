import { NavLink } from "react-router-dom";
import Search from "../Form/Search";
import Menu from "../Form/Menu";


const Navbar = () => {
    return (
        <div className="py- border-b-[1px]">
         <div className="grid grid-cols-3">   
           <div className="logo">
            <NavLink> 
                        <img className="h-14 pt-5 pl-12" src="BigLogo.png" alt="" />
            </NavLink>
           </div>

            <div >
               <Search> </Search>
            </div>

            <Menu> </Menu>

            </div>

        </div>
    );
};

export default Navbar;