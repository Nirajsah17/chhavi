export default function Filter({ }) {
  return (
    <>
      <div className="flex flex-col w-full h-full overflow-y-auto">

        <div className="flex flex-col p-1">
          <div className="p-2">Brightness</div>
          <div className="flex flex-row p-1">
            <input type="range" max={100} min={1} value={20}></input>
            <div className="p-2">8</div>
          </div>
        </div>

        <div className="flex flex-col p-1">
          <div className="p-2">Brightness</div>
          <div className="flex flex-row p-1">
            <input type="range" max={100} min={1} value={20}></input>
            <div className="p-2">8</div>
          </div>
        </div>

        <div className="flex flex-col p-1">
          <div className="p-2">Contrast</div>
          <div className="flex flex-row p-1">
            <input type="range" max={100} min={1} value={20}></input>
            <div className="p-2">8</div>
          </div>
        </div>

        <div className="flex flex-col p-1">
          <div className="p-2">Saturation</div>
          <div className="flex flex-row p-1">
            <input type="range" max={100} min={1} value={20}></input>
            <div className="p-2">8</div>
          </div>
        </div>

        <div className="flex flex-col p-1">
          <div className="p-2">Brightness</div>
          <div className="flex flex-row p-1">
            <input type="range" max={100} min={1} value={20}></input>
            <div className="p-2">8</div>
          </div>
        </div>

        <div className="flex flex-col p-1">
          <div className="p-2">Blur</div>
          <div className="flex flex-row p-1">
            <input type="range" max={100} min={1} value={20}></input>
            <div className="p-2">8</div>
          </div>
        </div>

        <div className="flex flex-col p-1">
          <div className="p-2">Noise</div>
          <div className="flex flex-row p-1">
            <input type="range" max={100} min={1} value={20}></input>
            <div className="p-2">8</div>
          </div>
        </div>

        <div className="flex flex-col p-1">
          <div className="p-2">Pixelate</div>
          <div className="flex flex-row p-1">
            <input type="range" max={100} min={1} value={20}></input>
            <div className="p-2">8</div>
          </div>
        </div>

        <div className="flex flex-col p-1">
          <div className="p-2">Mask</div>
          <div className="flex flex-row p-1">
            <input type="range" max={100} min={1} value={20}></input>
            <div className="p-2">8</div>
          </div>
        </div>

        <div className="flex flex-col p-1">
          <div className="p-2">Gray scale</div>
          <div className="flex flex-row p-1">
            <input type="checkbox"></input>
            <div className="p-2">8</div>
          </div>
        </div>

        <div className="flex flex-col p-1">
          <div className="p-2">Invert</div>
          <div className="flex flex-row p-1">
            <input type="checkbox"></input>
            <div className="p-2">8</div>
          </div>
        </div>

        <div className="flex flex-col p-1">
          <div className="p-2">Kaleidoscope</div>
          <div className="flex flex-row p-1">
            <input type="range" max={100} min={1} value={20}></input>
            <div className="p-2">8</div>
          </div>
        </div>

      </div>
    </>
  );
}
