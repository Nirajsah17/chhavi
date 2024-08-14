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
  brightness: brightness,
  contrast: contrast,
  saturation: saturation,
  hue: hue,
  sepia: sepia,
  blur: blur,
  noise: noise,
  pixelate: pixelate,
  mask: mask,
  grayScale: grayScale,
  invert: invert,
  kaleidoscope: kaleidoscope,
};

export default function Filter() {
  const {
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
  } = useSelector((state) => state.filterReducer);
  const files = useSelector((state) => state.appReducer.files);

  const dispatch = useDispatch();

  const handleSlider = (e) => {
    const fname = e.target.id;
    
    const value = Number(e. target.value);
    const eventName = handlers[fname](value);
    console.log(eventName);
    dispatch(eventName);
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
              value={brightness}
            ></input>
            <div className="p-2">{brightness < 10 ? `0${brightness}`: brightness}</div>
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
              value={contrast}
            ></input>
            <div className="p-2">{contrast < 10 ? `0${contrast}`:  contrast}</div>
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
              value={saturation}
            ></input>
            <div className="p-2">{saturation < 10 ? `0${saturation}`: saturation}</div>
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
              value={blur}
            ></input>
            <div className="p-2">{blur < 10 ? `0${blur}`: blur}</div>
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
              value={noise}
            ></input>
            <div className="p-2">{noise < 10 ? `0${noise}`: noise}</div>
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
              value={pixelate}
            ></input>
            <div className="p-2">{pixelate < 10 ? `0${pixelate}`: pixelate}</div>
          </div>
        </div>
      </div>
    </>
  );
}
