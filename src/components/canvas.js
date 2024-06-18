import { Stage, Layer, Image, Line } from "react-konva";
import { useState, useEffect, useRef } from "react";

function Canvas({ activeBitmap }) {
  const [dims, setDims] = useState({ width: 200, height: 200 });
  const [elements, setElements] = useState([]);
  const [fill, setFill] = useState("red");
  const [points, setPoints] = useState([]);
  const [isDrawEnable, setIsDrawEnable] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const stage = useRef(null);
  const count = useRef(0);

  const onDown = (e) => {
    setIsDrawEnable(true);
    const pos = stage.current.getPointerPosition();
    setPoints((prevPoints) => [...prevPoints, pos.x, pos.y]);
  };

  const onUp = (e) => {
    count.current += 1;
    setIsDrawEnable(false);
    setElements((prevElements) => [
      ...prevElements,
      { points: points, fill: fill, key: count.current },
    ]);
    setPoints([]);
  };

  const onMove = (e) => {
    if (!isDrawEnable) return;
    const pos = stage.current.getPointerPosition();
    setPoints((prevPoints) => [...prevPoints, pos.x, pos.y]);
  };

  useEffect(() => {
    const el = document.getElementById("canvas");
    setDims({ width: el.clientWidth, height: el.clientHeight });
  }, []);

  const handleWheel = (event) => {
    event.evt.preventDefault();
    const currentStageRef = stage.current;
    if (currentStageRef) {
      const stage = currentStageRef.getStage();

      if (event.evt.ctrlKey) {
        const oldScale = stage.scaleX();

        const mousePointTo = {
          x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
          y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale,
        };

        const unboundedNewScale = oldScale - event.evt.deltaY * 0.01;
        let newScale = unboundedNewScale;
        if (unboundedNewScale < 0.1) {
          newScale = 0.1;
        } else if (unboundedNewScale > 10.0) {
          newScale = 10.0;
        }

        const newPosition = {
          x:
            -(mousePointTo.x - stage.getPointerPosition().x / newScale) *
            newScale,
          y:
            -(mousePointTo.y - stage.getPointerPosition().y / newScale) *
            newScale,
        };

        setScale(newScale);
        setPosition(newPosition);
      } else {
        const dragDistanceScale = 0.75;
        const newPosition = {
          x: position.x - dragDistanceScale * event.evt.deltaX,
          y: position.y - dragDistanceScale * event.evt.deltaY,
        };

        setPosition(newPosition);
      }
    }
  };

  return (
    <>
      <Stage
        width={dims.width}
        height={dims.height}
        onMouseDown={onDown}
        onDblClick={onUp}
        onMouseMove={onMove}
        onWheel={handleWheel}
        scaleX={scale}
        scaleY={scale}
        ref={stage}
      >
        <Layer name="background" />
        <Layer name="foreground" x={30} y={30} height={400} width={600}>
          {activeBitmap && <Image x={0} y={0} image={activeBitmap} />}
          {elements.map((element) => (
            <Line
              key={element.key}
              points={element.points}
              fill={element.fill}
              strokeWidth={2}
              stroke="blue"
              closed
            />
          ))}
          {points.length >= 2 && (
            <Line
              points={points}
              fill={fill}
              strokeWidth={2}
              stroke="blue"
              closed
            />
          )}
        </Layer>
      </Stage>
    </>
  );
}

export default Canvas;
