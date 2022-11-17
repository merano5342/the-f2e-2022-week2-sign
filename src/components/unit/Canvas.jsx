
import { useState, useRef, useEffect } from "react"

const Canvas = () => {
  const [drawing, setDrawing] = useState(false);
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const startDraw = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(offsetX, offsetY);
    setDrawing(true);
  };

  const stopDraw = () => {
    ctxRef.current.closePath();
    setDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!drawing) return;
    const { offsetX, offsetY } = nativeEvent;
    ctxRef.current.lineTo(offsetX, offsetY);
    ctxRef.current.stroke();
  };

  const clear = () => {
    ctxRef.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
  };
  useEffect(() => {
    const canvas = canvasRef.current;

    // canvas.width = window.innerWidth * 2;
    // canvas.height = window.innerHeight * 2;
    // canvas.style.height = `${window.innerHeight}px`;
    canvas.width = 1000;
    canvas.height = 1000;
    canvas.style.width = `${500}px`;
    canvas.style.height = `${500}px`;

    const ctx = canvas.getContext('2d');
    ctx.scale(2, 2);
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctxRef.current = ctx;
  }, []);
  return (
    <>
      <canvas
        onMouseDown={startDraw}
        onMouseUp={stopDraw}
        onMouseMove={draw}
        ref={canvasRef}
      />
    </>
  )
}

export default Canvas