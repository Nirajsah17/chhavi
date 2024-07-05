import { Stage, Layer, Image, Line } from "react-konva";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setCanvasDims } from "../redux/actions/canvasActions";

import { setStage } from "../redux/actions/appAction";

function Canvas() {
  const activeBitmap = useSelector((state) => state.appReducer.activeBitMap);

  const { scale, canvasDims, isPanning, } = useSelector((state) => state.canvasReducer);
  const filters = useSelector((state) => state.filterReducer);

  const dispatch = useDispatch();
  const [imgOptions, setImgOptions] = useState({});

  const stage = useRef(null);
  const layer = useRef(null);
  const imageRef = useRef(0);
  const scaleBy = 1.08;

  // const keyDownHandler = (e) => {
  //   setPanning(true);
  // };

  // const keyUpHandler = (e) => {
  //   setPanning(false);
  // };

  useEffect(() => {
    const el = document.getElementById("canvas");
    const dims = {
      width: el.clientWidth,
      height: el.clientHeight,
    };
    console.log(dims);
    dispatch(setCanvasDims(dims));
    // window.addEventListener("keydown", keyDownHandler);
    // window.addEventListener("keyup", keyUpHandler);
  }, []);

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
        width={canvasDims.width}
        height={canvasDims.height}
        onWheel={handleWheel}
        scaleX={scale}
        scaleY={scale}
        ref={stage}
      >
        <Layer name="background" ref={layer} draggable={isPanning}>
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
