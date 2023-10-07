import { FaSearch } from 'react-icons/fa';
import Menu from './Menu';
import { NavLink } from 'react-router-dom';

const Search = () => {
  const closeModal = () => {
    const modal = document.getElementById("my_modal");
    if (modal) {
      modal.close();
    }
  };

  const openModal = () => {
    const modal = document.getElementById("my_modal");
    if (modal) {
      modal.showModal();
    }
  };

  // Add an event listener to close the modal when clicking outside of it
  window.addEventListener('click', (event) => {
    const modal = document.getElementById("my_modal");
    if (modal && event.target === modal) {
      closeModal();
    }
  });

  return (
    
    <div className="ml-10">
      <button
        className="mt-4 border pl-6 pr-2 py5 rounded-3xl font-medium font shadow hover:shadow-md"
        onClick={openModal}> Anywhere
         <span className="text-slate-300 px-2 vertical-bar"> | </span>  Any week  
        <span className="text-slate-300 px-2 vertical-bar"> | </span>
        <span className="text-gray-500 font-normal pr-3 margin"> Add guests </span> <FaSearch className='inline text-white bgColor rounded-full' />
      </button>
      <dialog id="my_modal" className="modal custom-modal text-black h-40 w-full bg-white border">
        <div className="This is myModal pb-48" >
          
      
        <div className="grid grid-cols-3">   
           <div>
            <NavLink> 
                        <img className="h-14 pt-5" src="BigLogo.png" alt="" />
            </NavLink>
           </div>

            <div className='mt-20 text-2xl font-bold text-red-800 ml-10'>
            This is under construction
            </div>

           <div className='pl-5'>
           <Menu> </Menu>
           </div>

            </div>

         
        </div>
        <form method="dialog" className="modal-backdrop h-0">
          <button onClick={closeModal}>close</button>
        </form>
      
      </dialog>
    </div>
  );
};

export default Search;