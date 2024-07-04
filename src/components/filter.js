import { useSelector, useDispatch } from "react-redux";
import {
  brightness,
  contrast,
  saturation,
  hue,
  sepia,
  blur,
  noise,
  pixelate,
  mask,
  grayScale,
  invert,
  kaleidoscope,
} from "../redux/actions/filterAction";

const handlers = {
  'brightness': brightness,
  'contrast': contrast,
  'saturation': saturation,
  'hue': hue,
  'sepia': sepia,
  'blur': blur,
  'noise': noise,
  'pixelate': pixelate,
  'mask': mask,
  'grayScale': grayScale,
  'invert': invert,
  'kaleidoscope': kaleidoscope,
}

export default function Filter() {
  const filters  = useSelector(state => state.filterReducer);
  const dispatch = useDispatch();
  const handleSlider = (e) => {
    const fname = e.target.id;
    const value = e.target.value;
    dispatch(handlers[fname](value));
  };

  return (
    <>
      <div className="flex flex-col w-full h-full justify-between items-center overflow-y-auto">
        <div className="flex flex-col p-1">
          <div className="p-2">Brightness</div>
          <div className="flex flex-row p-1 justify-between items-center">
            <input
              type="range"
              onChange={handleSlider}
              id="brightness"
              className="slider"
              max={100}
              min={1}
              value={filters.brightness}
            ></input>
            <div className="p-2">{filters.brightness}</div>
          </div>
        </div>

        <div className="flex flex-col p-1">
          <div className="p-2">Contrast</div>
          <div className="flex flex-row p-1 justify-between items-center">
            <input
              type="range"
              onChange={handleSlider}
              id="contrast"
              className="slider"
              max={100}
              min={1}
              value={filters.contrast}
            ></input>
            <div className="p-2">{filters.contrast}</div>
          </div>
        </div>

        <div className="flex flex-col p-1">
          <div className="p-2">Saturation</div>
          <div className="flex flex-row p-1 justify-between items-center">
            <input
              type="range"
              onChange={handleSlider}
              id="saturation"
              className="slider"
              max={100}
              min={1}
              value={filters.saturation}
            ></input>
            <div className="p-2">{filters.saturation}</div>
          </div>
        </div>

        <div className="flex flex-col p-1">
          <div className="p-2">Blur</div>
          <div className="flex flex-row p-1 justify-between items-center">
            <input
              type="range"
              onChange={handleSlider}
              id="blur"
              className="slider"
              max={100}
              min={1}
              value={filters.blur}
            ></input>
            <div className="p-2">{filters.blur}</div>
          </div>
        </div>

        <div className="flex flex-col p-1">
          <div className="p-2">Noise</div>
          <div className="flex flex-row p-1 justify-between items-center">
            <input
              type="range"
              onChange={handleSlider}
              id="noise"
              className="slider"
              max={100}
              min={1}
              value={filters.noise}
            ></input>
            <div className="p-2">{filters.noise}</div>
          </div>
        </div>

        <div className="flex flex-col p-1">
          <div className="p-2">Pixelate</div>
          <div className="flex flex-row p-1 justify-between items-center">
            <input
              type="range"
              onChange={handleSlider}
              id="pixelate"
              className="slider"
              max={100}
              min={1}
              value={filters.pixelate}
            ></input>
            <div className="p-2">{filters.pixelate}</div>
          </div>
        </div>

        <div className="flex flex-col p-1">
          <div className="p-2">Mask</div>
          <div className="flex flex-row p-1 justify-between items-center">
            <input
              type="range"
              onChange={handleSlider}
              id="mask"
              className="slider"
              max={100}
              min={1}
              value={filters.mask}
            ></input>
            <div className="p-2">{filters.mask}</div>
          </div>
        </div>

        <div className="flex flex-col p-1">
          <div className="p-2">Gray scale</div>
          <div className="flex flex-row p-1 justify-between items-center">
            <input
              id="grayScale"
              type="checkbox"
              checked={filters.grayScale}
            ></input>
          </div>
        </div>

        <div className="flex flex-col p-1">
          <div className="p-2">Invert</div>
          <div className="flex flex-row p-1 justify-between items-center">
            <input id="invert" type="checkbox" checked={filters.invert}></input>
          </div>
        </div>

        <div className="flex flex-col p-1">
          <div className="p-2">Kaleidoscope</div>
          <div className="flex flex-row p-1 justify-between items-center">
            <input
              type="range"
              onChange={handleSlider}
              id="kaleidoscope"
              className="slider"
              max={100}
              min={1}
              value={filters.kaleidoscope}
            ></input>
            <div className="p-2">{filters.kaleidoscope}</div>
          </div>
        </div>
      </div>
    </>
  );
}
