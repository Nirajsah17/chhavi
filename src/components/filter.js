export default function Filter({ }) {

  const handleSlider = (e)=>{
    console.log(e.target.value);
  }

  return (
    <>
      <div className="flex flex-col w-full h-full justify-between items-center overflow-y-auto">

        <div className="flex flex-col p-1">
          <div className="p-2">Brightness</div>
          <div className="flex flex-row p-1 justify-between items-center">
            <input type="range" onChange={handleSlider} id="brightness" className="slider" max={100} min={1} value={20}></input>
            <div className="p-2">8</div>
          </div>
        </div>

        <div className="flex flex-col p-1">
          <div className="p-2">Brightness</div>
          <div className="flex flex-row p-1 justify-between items-center">
            <input type="range" onChange={handleSlider} id="brightness" className="slider" max={100} min={1} value={20}></input>
            <div className="p-2">8</div>
          </div>
        </div>

        <div className="flex flex-col p-1">
          <div className="p-2">Contrast</div>
          <div className="flex flex-row p-1 justify-between items-center">
            <input type="range" onChange={handleSlider} id="contrast" className="slider" max={100} min={1} value={20}></input>
            <div className="p-2">8</div>
          </div>
        </div>

        <div className="flex flex-col p-1">
          <div className="p-2">Saturation</div>
          <div className="flex flex-row p-1 justify-between items-center">
            <input type="range" onChange={handleSlider} id="saturation" className="slider" max={100} min={1} value={20}></input>
            <div className="p-2">8</div>
          </div>
        </div>

        <div className="flex flex-col p-1">
          <div className="p-2">Brightness</div>
          <div className="flex flex-row p-1 justify-between items-center">
            <input type="range" onChange={handleSlider} id="brightness" className="slider" max={100} min={1} value={20}></input>
            <div className="p-2">8</div>
          </div>
        </div>

        <div className="flex flex-col p-1">
          <div className="p-2">Blur</div>
          <div className="flex flex-row p-1 justify-between items-center">
            <input type="range" onChange={handleSlider} id="blur" className="slider" max={100} min={1} value={20}></input>
            <div className="p-2">8</div>
          </div>
        </div>

        <div className="flex flex-col p-1">
          <div className="p-2">Noise</div>
          <div className="flex flex-row p-1 justify-between items-center">
            <input type="range" onChange={handleSlider} id="noise" className="slider" max={100} min={1} value={20}></input>
            <div className="p-2">8</div>
          </div>
        </div>

        <div className="flex flex-col p-1">
          <div className="p-2">Pixelate</div>
          <div className="flex flex-row p-1 justify-between items-center">
            <input type="range" onChange={handleSlider} id="pixelate" className="slider" max={100} min={1} value={20}></input>
            <div className="p-2">8</div>
          </div>
        </div>

        <div className="flex flex-col p-1">
          <div className="p-2">Mask</div>
          <div className="flex flex-row p-1 justify-between items-center">
            <input type="range" onChange={handleSlider} id="mask" className="slider" max={100} min={1} value={20}></input>
            <div className="p-2">8</div>
          </div>
        </div>

        <div className="flex flex-col p-1">
          <div className="p-2">Gray scale</div>
          <div className="flex flex-row p-1 justify-between items-center">
            <input type="checkbox"></input>
            <div className="p-2">8</div>
          </div>
        </div>

        <div className="flex flex-col p-1">
          <div className="p-2">Invert</div>
          <div className="flex flex-row p-1 justify-between items-center">
            <input type="checkbox"></input>
            <div className="p-2">8</div>
          </div>
        </div>

        <div className="flex flex-col p-1">
          <div className="p-2">Kaleidoscope</div>
          <div className="flex flex-row p-1 justify-between items-center">
            <input type="range" onChange={handleSlider} id="kaleidoscope" className="slider" max={100} min={1} value={20}></input>
            <div className="p-2">8</div>
          </div>
        </div>

      </div>
    </>
  );
}
