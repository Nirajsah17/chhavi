import { Stage, Layer, Image, Line } from "react-konva";
import { useState, useEffect, useRef } from "react";
import { getImageOptions } from "../utils/utills";

function Canvas({ activeBitmap }) {
  const [dims, setDims] = useState({ width: 200, height: 200 });
  const [elements, setElements] = useState([]);
  const [fill, setFill] = useState("");
  const [points, setPoints] = useState([]);
  const [isDrawEnable, setIsDrawEnable] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [panning, setPanning] = useState(false);
  const [imgOptions, setImgOptions] = useState({});
  const [isClosed, setIsClosed] = useState(false);
  const stage = useRef(null);
  const layer = useRef(null);
  const count = useRef(0);
  const imageRef = useRef(0);
  const scaleBy = 1.08;

  const keyDownHandler = (e) => {
    console.log(e);
    setPanning(true);
  };
  const keyUpHandler = (e) => {
    console.log(e);
    setPanning(false);
  };

  const MODES = {
    DRAW: "DRAW",
    EDIT: "EDIT",
    MOVE: "MOVE",
    LOCK: "LOCK",
    PAINT: "PAINT"
  };

  const [MODE, SETMODE] = useState(MODES.DRAW);

  const onDown = (e) => {
    if (panning) return;
    setIsDrawEnable(true);
    const pos = stage.current.getRelativePointerPosition();
    const normalizedX = (pos.x * imgOptions.ratio) + imgOptions.x;
    const normalizedY = (pos.y * imgOptions.ratio) + imgOptions.y;

    switch(MODE){
      case MODES.PAINT :
        setPoints((prevPoints) => [...prevPoints, pos.x, pos.y]);
        break;
      case MODES.DRAW :
        setPoints((prevPoints) => [...prevPoints, pos.x, pos.y]);
        break;
    }

  };

  const onUp = (e) => {
    count.current += 1;

    switch(MODE){
      case MODES.PAINT :
        setIsDrawEnable(false);
        setElements((prevElements) => [
          ...prevElements,
          { points: points, fill: fill, key: count.current },
        ]);
        setPoints([]);
        break;
    }
  };

  const onMove = (e) => {
    if (!isDrawEnable) return;
    const pos = stage.current.getRelativePointerPosition();
    const normalizedX = (pos.x * imgOptions.ratio) + imgOptions.x;
    const normalizedY = (pos.y * imgOptions.ratio) + imgOptions.y;
    switch(MODE){
      case MODES.PAINT :
        setPoints((prevPoints) => [...prevPoints, pos.x, pos.y]);
        break;
      case MODES.DRAW :
        let pts = points;
        pts[pts.length - 2] = pos.x;
        pts[pts.length - 1] = pos.y;
        setPoints(pts);
        break;
    }
  };

  const onDblClick = (e)=>{
    if(MODE === MODES.PAINT){
      setIsDrawEnable(false);
      setElements((prevElements) => [
       ...prevElements,
        { points: points, fill: fill, key: count.current },
      ]);
      setPoints([]);
    }
  }

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

  const onDragStart = (e) => {
    if (e.evt.ctrlKey) {
      layer.draggable = true;
    } else {
      layer.draggable = false;
    }
    // if(MODE !== "")
  };

  const onDragMove = (e) => {};
  const onDragEnd = (e) => {};

  return (
    <>
      <Stage
        width={dims.width}
        height={dims.height}
        onMouseDown={onDown}
        onMouseUp={onUp}
        onMouseMove={onMove}
        onWheel={handleWheel}
        onDblClick={onDblClick}
        scaleX={scale}
        scaleY={scale}
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
          {elements.map((element) => (
            <Line
              key={element.key}
              points={element.points}
              fill={element.fill}
              strokeWidth={8}
              stroke="gray"
              closed={element.closed}
            />
          ))}
          {points.length >= 2 && (
            <Line points={points} fill={fill} strokeWidth={8} stroke="gray" closed={isClosed}/>
          )}
        </Layer>
      </Stage>
    </>
  );
}

export default Canvas;
