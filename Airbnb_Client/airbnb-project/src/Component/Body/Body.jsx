/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import MainBody from "./MainBody";
import { MdCabin, MdOutlineBed } from "react-icons/md";
import { GiPalmTree, GiWaterMill, GiRiver } from "react-icons/gi";
import { LiaUmbrellaBeachSolid } from "react-icons/lia";
import { FaCity, FaSwimmingPool } from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const minPrice = 10; // Default minimum price
const maxPrice = 1000; // Maximum price
const Body = () => {
  const [room, setRoom] = useState([]);
  const [country, setCountry] = useState("");
  const [value, setValue] = useState("");
  const [selectedType, setSelectedType] = useState("Any");
  const [filteredRoom, setFilteredRoom] = useState("");
  const [filteredRoom1, setFilteredRoom1] = useState("");
  const [filteredRoom0, setFilteredRoom0] = useState("");

  useEffect(() => {
    axios.get(`https://airbnb-server-672orrv2n-shamiulhaque1218.vercel.app/rooms`).then((data) => {
      const result = data.data;
      // console.log(result);
      setRoom(result);
      //  const myRoom = result.map(data =>{
      //     console.log(data);
      //     setRoom(data)
      //  } )
    });
  }, []);
  console.log(country);

  // handel search
  const handelSearch = (country) => {
    fetch(`https://airbnb-server-672orrv2n-shamiulhaque1218.vercel.app/rooms/${country}`)
      .then((res) => res.json())
      .then((data) => {
        setRoom(data);
      });
  };
  const any = "c";
  const rooms = "rooms";
  const cabins = "cabins";
  const handelSearchType = (type) => {
    
    setSelectedType(type);
    // Construct the URL based on the selected type
    const finalPrice = maxValue ? maxValue : 10000;
    const finalFilteredRoom0 = filteredRoom0 ? filteredRoom0 : 0;
    const finalFilteredRoom1 = filteredRoom1 ? filteredRoom1 : 0;
    const finalFilteredRoom = filteredRoom ? filteredRoom : 0;

    let typeUrl;
    switch (type) {
      case "Any": 
        typeUrl = `${any}/${finalPrice}/${finalFilteredRoom0}/${finalFilteredRoom}/${finalFilteredRoom1}`;
      //  console.log(typeUrl)
        break;
      case "Room":
        typeUrl = `${rooms}/${finalPrice}/${finalFilteredRoom0}/${finalFilteredRoom}/${finalFilteredRoom1}`;
        break;
      case "Entire home":
        typeUrl = `${cabins}/${finalPrice}/${finalFilteredRoom0}/${finalFilteredRoom}/${finalFilteredRoom1}`;
        break;
      default:
        typeUrl = ""; // Handle other types if needed
    }
    setCountry(handelSearch(typeUrl)) ;
  };
  
  const [isChecked, setIsChecked] = useState(true);

  // Event handler to toggle the state
  const handleToggle = () => {
    // setIsChecked(!isChecked);
    console.log(value);
  };

  // slider

  const [maxValue, setMaxValue] = useState(maxPrice);

  // Event handler for changing the maximum price
  const handleMaxSliderChange = (newValue) => {
    setMaxValue(newValue);
  };

  // Create a reference to the dialog element
  const dialogRef = useRef(null);

  // Function to close the dialog
  const closeDialog = () => {
    // Check if the dialog reference exists and if the showModal method is supported
    if (dialogRef.current && typeof dialogRef.current.showModal === "function") {
      // Close the dialog
      dialogRef.current.close();
    }
  };

  return (
    <div>
      <div className="flex">
        {/* filter design start  */}
        <div>
          <button
            className="m-6"
            onClick={() =>
              handelSearch("country_side/100000/0/0/0")
            }
          >
            <img
              className="h-10 w-10 ml-3"
              src="/coastline_10541666.png"
              alt=""
            />
            <p className="font-semibold text-xs text-gray-500 hover:text-black">
              CountrySides
            </p>
          </button>

          <button
            className="m-6 text-gray-500 hover:text-black"
            onClick={() => handelSearch("cabins/100000/0/0/0")}
          >
            <MdCabin className="h-7 w-7 ml-1 mb-1"> </MdCabin>
            <p className="font-semibold text-xs">Cabins</p>
          </button>

          <button
            className="m-6 text-gray-500 hover:text-black"
            onClick={() => handelSearch("tropical/100000/0/0/0")}
          >
            <GiPalmTree className="h-7 w-7 ml-3 mb-1"> </GiPalmTree>
            <p className="font-semibold text-xs">Tropical</p>
          </button>

          <button
            className="m-6 text-gray-500 hover:text-black"
            onClick={() => handelSearch("windmills/100000/0/0/0")}
          >
            <GiWaterMill className="h-7 w-7 ml-3 mb-1"> </GiWaterMill>
            <p className="font-semibold text-xs">Windmills</p>
          </button>

          <button
            className="m-6 text-gray-500 hover:text-black"
            onClick={() => handelSearch("lakefront/100000/0/0/0")}
          >
            <GiRiver className="h-7 w-7 ml-3 mb-1"> </GiRiver>
            <p className="font-semibold text-xs">Lakefront</p>
          </button>

          <button
            className="m-6 text-gray-500 hover:text-black"
            onClick={() => handelSearch("rooms/100000/0/0/0")}
          >
            <MdOutlineBed className="h-7 w-7 ml-3 mb-1"> </MdOutlineBed>
            <p className="font-semibold text-xs">Rooms</p>
          </button>

          <button
            className="m-6 text-gray-500 hover:text-black"
            onClick={() => handelSearch("luxe/100000/0/0/0")}
          >
            <LiaUmbrellaBeachSolid className="h-7 w-7 ml-3 mb-1"></LiaUmbrellaBeachSolid>
            <p className="font-semibold text-xs">Luxe</p>
          </button>

          <button
            className="m-6 text-gray-500 hover:text-black"
            onClick={() =>
              handelSearch("amazing_pools/100000/0/0/0")
            }
          >
            <FaSwimmingPool className="h-7 w-7 ml-3 mb-1"> </FaSwimmingPool>
            <p className="font-semibold text-xs">Amazing pools</p>
          </button>

          <button
            className="m-6 text-gray-500 hover:text-black"
            onClick={() =>
              handelSearch("iconic_cities/100000/0/0/0")
            }
          >
            <FaCity className="h-7 w-7 ml-3 mb-1"> </FaCity>
            <p className="font-semibold text-xs">Iconic cities</p>
          </button>
        </div>
        {/* filter design end */}

        <div className="">
          {/* <button className="m-6 flex border p-3 rounded-xl pr-5 pl-1">
            <img className="h-6 w-5 ml-3" src="/filter.png" alt="" />
            <p className="font-semibold text-xs"> Filters</p>
          </button> */}
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="m-6 flex border-gray-300 border p-3 rounded-xl pr-5 pl-1"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            <img className="h-6 w-5 ml-3" src="/filter.png" alt="" />
            <p className="font-semibold text-xs"> Filters</p>
          </button>
          <dialog id="my_modal_3" ref={dialogRef} className="modal w-full">
            <div className="modal-box pl-0 pr-0 w-full">
              <div className="1234">
              <form method="dialog ">
                <button className="flex">
                  <p className="btn btn-sm btn-circle btn-ghost"> ✕ </p>
                  <p className="pl-44 pb-5 font-bold"> Filters </p>
                </button>
              </form>
              </div>

              <hr />
              
              <div className="4567">

              <div className="pt-5 px-5">
                <h3 className="font-bold text-lg"> Type of place </h3>
                {/* <p className="text-xs py-3">Search rooms, entire homes and more. Nightly prices do not include fees or taxes.</p> */}
              </div>

              <div className="pt-1 border-b px-5">
                <container className="">
                  <Tabs className="">
                    <TabPanel className="pb-4">
                      <h2 className="text-xs">
                        Search rooms, entire homes and more. Nightly prices do
                        not include fees or taxes.
                      </h2>
                    </TabPanel>
                    <TabPanel className="">
                      <h2 className="text-xs">
                        A room in a home, plus access to shared spaces. Nightly
                        prices do not include fees or taxes.
                      </h2>
                    </TabPanel>
                    <TabPanel className="pb-4">
                      <h2 className="text-xs">
                        A home all to yourself. Nightly prices do not include
                        fees or taxes.
                      </h2>
                    </TabPanel>

                    <TabList className="ml-28 flex pb-4 pt-2">
                      <Tab className="border rounded-l-lg">
                      <button
            className={`m-6 ${selectedType === "Any" ? "font-semibold" : "text-gray-500 hover:text-black"}`}
            onClick={() => handelSearchType("Any")}
          >
            Any
          </button>
                      </Tab>
                      <Tab className="border">                    
                      <button
            className={`m-6 ${selectedType === "Room" ? "font-semibold" : "text-gray-500 hover:text-black"}`}
            onClick={() => handelSearchType("Room")}
          >
            Room
          </button>
                      </Tab>
                      <Tab className="border rounded-r-lg">                       
                       <button
            className={`m-6 ${selectedType === "Entire home" ? "font-semibold" : "text-gray-500 hover:text-black"}`}
            onClick={() => handelSearchType("Entire home")}
          >
            Entire home
          </button>
                      </Tab>
                    </TabList>
                  </Tabs>
                </container>
              </div>

              <div className="pt-1 border-b px-5">
                <container>
                  <div className="pt-3 pb-5">
                    <h3 className="font-bold text-lg"> Price range </h3>
                    <p className="text-xs"> The average nightly price is $71, not including fees or taxes. </p>
                  </div>
                  <div className="pb-8">
                    <Slider
                      min={minPrice}
                      max={maxPrice}
                      value={maxValue}
                      onChange={handleMaxSliderChange}
                     // onClick={handelSearchType(maxValue)}
                      step={1}
                    />
                  </div>
                  <div className="flex gap-5 pb-5">
                    <p className="pl-2 pr-32 border border-black py-1 rounded-lg">
                       <span className="text-xs"> Minimum  </span> <br /> $ 10 </p>
                    <span className="text-4xl"> - </span>
                    <p className="pl-2 pr-32 border border-black py-1 rounded-lg">
                       <span className="text-xs"> Maximum  </span> <br /> $ {maxValue} </p>
                  </div>
                </container>
              </div>
              <div className="pt-1 border-b px-5">
                <container>
                <div className="pt-5">
                <h3 className="font-bold text-lg"> Beds and bathrooms </h3>
              </div>

              <div>
                <p className="pb-3"> Bedrooms</p>
              <Tabs className="">
                    

                    <TabList className="flex gap-5 pb-4 pt-2">
                      <Tab className="border rounded-l-lg">
                     
                        <button onClick={()=>handelSearch(setFilteredRoom0("0"))}
                         className="border  hover:border-black py-1 px-3">
                          Any
                        </button>
                      </Tab>
                      <Tab className="border rounded-lg">
                        <button onClick={()=>handelSearch(setFilteredRoom0("1"))}
                         className="border  hover:border-black py-1 px-3">
                       1
                        </button>
                      </Tab>
                      <Tab className="border rounded-lg">
                        <button onClick={()=>handelSearch(setFilteredRoom0("2"))}
                         className="border  hover:border-black py-1 px-3">
                       2
                        </button>
                      </Tab>
                      <Tab className="border">
                     
                        <button onClick={()=>handelSearch(setFilteredRoom0("3"))}
                         className="border  hover:border-black py-1 px-3">
                        3
                        </button>
                      </Tab>
                      <Tab className="border rounded-lg">
                        <button onClick={()=>handelSearch(setFilteredRoom0("4"))}
                        className="border  hover:border-black py-1 px-3">
                       4
                        </button>
                      </Tab>
                      <Tab className="border rounded-lg">
                        <button onClick={()=>handelSearch(setFilteredRoom0("5"))}
                         className="border  hover:border-black py-1 px-3">
                       5
                        </button>
                      </Tab>
                      <Tab className="border rounded-lg">
                        <button onClick={()=>handelSearch(setFilteredRoom0("6"))}
                        className="border  hover:border-black py-1 px-3">
                       6
                        </button>
                      </Tab>
                      <Tab className="border rounded-lg">
                        <button onClick={()=>handelSearch(setFilteredRoom0("7"))}
                         className="border  hover:border-black py-1 px-3">
                       7
                        </button>
                      </Tab>
                      <Tab className="border rounded-lg">
                        <button onClick={()=>handelSearch(setFilteredRoom0("8"))}
                        className="border  hover:border-black py-1 px-3">
                       8+
                        </button>
                      </Tab>
                      
                    </TabList>
                  </Tabs>
              </div>

              <div>
                <p className="pb-3"> Beds</p>
              <Tabs className="">
                    

                    <TabList className="flex gap-5 pb-4 pt-2">
                      <Tab className="border rounded-l-lg">
                     
                        <button onClick={()=>handelSearch(setFilteredRoom("0"))}
                         className="border  hover:border-black py-1 px-3">
                          Any
                        </button>
                      </Tab>
                      <Tab className="border rounded-lg">
                        <button onClick={()=>handelSearch(setFilteredRoom("1"))}
                         className="border  hover:border-black py-1 px-3">
                       1
                        </button>
                      </Tab>
                      <Tab className="border rounded-lg">
                        <button onClick={()=>handelSearch(setFilteredRoom("2"))}
                         className="border  hover:border-black py-1 px-3">
                       2
                        </button>
                      </Tab>
                      <Tab className="border">
                     
                        <button onClick={()=>handelSearch(setFilteredRoom("3"))}
                         className="border  hover:border-black py-1 px-3">
                        3
                        </button>
                      </Tab>
                      <Tab className="border rounded-lg">
                        <button onClick={()=>handelSearch(setFilteredRoom("4"))}
                        className="border  hover:border-black py-1 px-3">
                       4
                        </button>
                      </Tab>
                      <Tab className="border rounded-lg">
                        <button onClick={()=>handelSearch(setFilteredRoom("5"))}
                         className="border  hover:border-black py-1 px-3">
                       5
                        </button>
                      </Tab>
                      <Tab className="border rounded-lg">
                        <button onClick={()=>handelSearch(setFilteredRoom("6"))}
                        className="border  hover:border-black py-1 px-3">
                       6
                        </button>
                      </Tab>
                      <Tab className="border rounded-lg">
                        <button onClick={()=>handelSearch(setFilteredRoom("7"))}
                         className="border  hover:border-black py-1 px-3">
                       7
                        </button>
                      </Tab>
                      <Tab className="border rounded-lg">
                        <button onClick={()=>handelSearch(setFilteredRoom("8"))}
                        className="border  hover:border-black py-1 px-3">
                       8+
                        </button>
                      </Tab>
                      
                    </TabList>
                  </Tabs>
              </div>

              <div className="pb-3">
                <p className="pb-3"> Bath</p>
              <Tabs className="">
                    

              <TabList className="flex gap-5 pb-4 pt-2">
                      <Tab className="border rounded-l-lg">
                     
                        <button onClick={()=>handelSearch(setFilteredRoom1("0"))}
                         className="border  hover:border-black py-1 px-3">
                          Any
                        </button>
                      </Tab>
                      <Tab className="border rounded-lg">
                        <button onClick={()=>handelSearch(setFilteredRoom1("1"))}
                         className="border  hover:border-black py-1 px-3">
                       1
                        </button>
                      </Tab>
                      <Tab className="border rounded-lg">
                        <button onClick={()=>handelSearch(setFilteredRoom1("2"))}
                         className="border  hover:border-black py-1 px-3">
                       2
                        </button>
                      </Tab>
                      <Tab className="border">
                     
                        <button onClick={()=>handelSearch(setFilteredRoom1("3"))}
                         className="border  hover:border-black py-1 px-3">
                        3
                        </button>
                      </Tab>
                      <Tab className="border rounded-lg">
                        <button onClick={()=>handelSearch(setFilteredRoom1("4"))}
                        className="border  hover:border-black py-1 px-3">
                       4
                        </button>
                      </Tab>
                      <Tab className="border rounded-lg">
                        <button onClick={()=>handelSearch(setFilteredRoom1("5"))}
                         className="border  hover:border-black py-1 px-3">
                       5
                        </button>
                      </Tab>
                      <Tab className="border rounded-lg">
                        <button onClick={()=>handelSearch(setFilteredRoom1("6"))}
                        className="border  hover:border-black py-1 px-3">
                       6
                        </button>
                      </Tab>
                      <Tab className="border rounded-lg">
                        <button onClick={()=>handelSearch(setFilteredRoom1("7"))}
                         className="border  hover:border-black py-1 px-3">
                       7
                        </button>
                      </Tab>
                      <Tab className="border rounded-lg">
                        <button onClick={()=>handelSearch(setFilteredRoom1("8"))}
                        className="border  hover:border-black py-1 px-3">
                       8+
                        </button>
                      </Tab>
                      
                    </TabList>
                  </Tabs>
              </div>

                </container>
                </div>

              </div>
              
              <div className=" p-4 bg-white shadow-md">
        <button
          className="ml-72 px-5 py-2 border rounded-lg text-white font-semibold bg-stone-900"
          onClick={() => {
            handelSearchType(selectedType, maxValue);
            closeDialog(); // Call closeDialog function to close the dialog
          }}
        >
          Show {room.length} places
        </button>
      </div>
             
            </div>
            <hr />
          </dialog>
         
        </div>

        {/* Toggle button start */}
        <div className="m-6 flex border font-semibold p-3 rounded-xl pr-5 pl-3 gap-2">
          <p className="text-xs mt-2">
            {isChecked
              ? "Display total before taxes"
              : "Display total before taxes"}
          </p>
          <input
            type="checkbox"
            className="toggle w-12 mt-2"
            checked={isChecked}
            onChange={handleToggle}
          />
        </div>
        {/* Toggle button end */}
      </div>

      <div className="grid grid-cols-4 gap-6 mx-9 ">
        {room.map((result) => (
          <MainBody key={result._id} result={result}></MainBody>
        ))}
      </div>
    </div>
  );
};

export default Body;
