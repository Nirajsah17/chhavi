import { useState } from "react";

export default function FreeHand({}) {
  const [color, setColor] = useState("");

  const handlePenColor = (e) => {
    console.log(e.target.value);
    setColor(e.target.value);
  };

  return (
    <>
      <div className="w-full flex flex-col p-2 justify-between items-center">
        <div className="w-full flex flex-col justify-between items-center">
          <div className="p-1">Pen color</div>
          <div className="flex flex-row justify-between items-center">
            <input
              type="color"
              className="w-12 h-8 border-1 border-border-default shadow-md hover:shadow-lg cursor-pointer"
              onChange={handlePenColor}
            ></input>
            <div className="p-4">{color}</div>
          </div>
        </div>
      </div>
    </>
  );
}
