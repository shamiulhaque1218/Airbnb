import { NavLink } from "react-router-dom";
import { FaBars, FaGlobe, FaUserAlt } from 'react-icons/fa';

const Menu = () => {
    return (
        <div className="flex" >
                <NavLink to="/host/homes" > <p className="pt-2 pl-2 mt-5 ml-32 w40 pb-2 hover:shadow-md rounded-3xl hover:bg-gray-100 font font-medium">Airbnb your home</p>
                 </NavLink>

                 
                 <NavLink className="w-10 h-10 pt-3 pl-3 mt-5 pb-2 mr-2 hover:bg-gray-100 rounded-full"> <FaGlobe className="text-lg "> </FaGlobe>
                  </NavLink>

{/* 
                  <button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}> */}
                  <NavLink className="flex pt-2 pl-3 mt-5 pb-2 h-10 w-20 border hover:bg-gray-100 rounded-3xl">
                     <FaBars > </FaBars> 
                     <FaUserAlt className="ml-3 mb-5 bg-gray-500 p-1 rounded-full text-white text-2xl"> </FaUserAlt>
                   </NavLink>
                  {/* </button> */}
{/* <dialog id="my_modal_2" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click outside to close</p>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog> */}
                
                 
                
            </div>
    );
};

export default Menu;