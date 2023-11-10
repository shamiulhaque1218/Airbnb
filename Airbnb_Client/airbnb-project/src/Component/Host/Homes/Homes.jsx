import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import WorldMap from "react-svg-worldmap";

const Homes = () => {
  const perNightCost = 52; // Fixed per-night cost
  const [nights, setNights] = useState(1); // Default number of nights
  const [totalCost, setTotalCost] = useState(perNightCost); // Default total cost

  const handleSliderChange = (newNights) => {
    setNights(newNights);
    setTotalCost(newNights * perNightCost);
  };

  // map data start
  const data = [
    { country: "cn", value: 1389618778 }, // china
    { country: "in", value: 1311559204 }, // india
    { country: "us", value: 331883986 }, // united states
    { country: "id", value: 264935824 }, // indonesia
    { country: "pk", value: 210797836 }, // pakistan
    { country: "br", value: 210301591 }, // brazil
    { country: "ng", value: 208679114 }, // nigeria
    { country: "bd", value: 161062905 }, // bangladesh
    { country: "ru", value: 141944641 }, // russia
    { country: "mx", value: 127318112 }, // mexico
  ];
  return (
    <div>
      <container className="grid grid-cols-2">
        <div className="text-5xl mt-44 ml-20 font-semibold text-center">
          <span className="color1"> Airbnb it. </span>
          <br />
          You could earn
           <p className="text-7xl font-bold"> ${totalCost}</p>
           <p className="text-lg font-normal"> <span className="font-semibold underline">{nights} night</span>  at an estimated $52 a night</p>

        </div>
        <div className="mt-16">
          <WorldMap
            color="red"
            title="Explore rates near you"
            value-suffix="people"
            size="lg"
            data={data}
          />
        </div>

        <div className="mx-24">
          
          <Slider
            min={1}
            max={30} // Set your maximum number of nights
            value={nights}
            onChange={handleSliderChange}
            size={5}
          />
          <p className="underline mt-5 text-center text-gray-500">Learn how we estimate your earnings</p>
        </div>
      </container>
    </div>
  );
};

export default Homes;
