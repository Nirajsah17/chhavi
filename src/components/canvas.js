import { Stage, Layer, Image, Line } from "react-konva";
import { useState, useEffect, useRef } from "react";
import { getImageOptions } from "../utils/utills";
import { useSelector, useDispatch } from "react-redux";

function Canvas({ activeBitmap }) {
  const [dims, setDims] = useState({ width: 200, height: 200 });

  const [panning, setPanning] = useState(false);
  const [imgOptions, setImgOptions] = useState({});

  const stage = useRef(null);
  const layer = useRef(null);
  const imageRef = useRef(0);
  const scaleBy = 1.08;

  const keyDownHandler = (e) => {
    setPanning(true);
  };

  const keyUpHandler = (e) => {
    setPanning(false);
  };

  const filters = useSelector((state) => state.filterReducer);

  useEffect(() => {
    const el = document.getElementById("canvas");
    setDims({ width: el.clientWidth, height: el.clientHeight });
    window.addEventListener("keydown", keyDownHandler);
    window.addEventListener("keyup", keyUpHandler);
  }, []);

  useEffect(() => {
    if (!activeBitmap) return;
    const options = {
      imgWidth: activeBitmap.width,
      imgHeight: activeBitmap.height,
      imgBitmap: activeBitmap,
      stage: stage.current,
    };
    const imgOptions = getImageOptions(options);
    setImgOptions(imgOptions);
  }, [activeBitmap]);

  const handleWheel = (e) => {
    e.evt.preventDefault();

    const _stage = stage.current;
    const oldScale = _stage.scaleX();
    const pointer = _stage.getRelativePointerPosition();

    const mousePointTo = {
      x: (pointer.x - _stage.x()) / oldScale,
      y: (pointer.y - _stage.y()) / oldScale,
    };

    let direction = e.evt.deltaY > 0 ? 1 : -1;

    if (e.evt.ctrlKey) {
      direction = -direction;
    }

    const newScale = direction > 0 ? oldScale * scaleBy : oldScale / scaleBy;

    _stage.scale({ x: newScale, y: newScale });

    const newPos = {
      x: pointer.x - mousePointTo.x * newScale,
      y: pointer.y - mousePointTo.y * newScale,
    };
    _stage.position(newPos);
  };

  return (
    <>
      <Stage
        width={dims.width}
        height={dims.height}
        onWheel={handleWheel}
        ref={stage}
      >
        <Layer name="background" ref={layer} draggable={panning}>
          {activeBitmap && (
            <Image
              x={imgOptions.x}
              y={imgOptions.y}
              width={imgOptions.width}
              height={imgOptions.height}
              image={activeBitmap}
              ref={imageRef}
            />
          )}
        </Layer>
      </Stage>
    </>
  );
}

export default Canvas;
