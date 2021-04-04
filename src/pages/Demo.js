import React, { useEffect, useRef, useState } from 'react';
import '../css/demo.css';

export default function Demo() {

    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.width = 500;
        canvas.style.width = '250px';
        canvas.height = 500;
        canvas.style.height = '250px';
        context.lineCap = 'round';
        context.strokeStyle = 'gray';
        context.scale(2, 2);
        context.lineWidth = 10;
        contextRef.current = context;
    }, [])

    const startDrawing = ({ nativeEvent }) => {
        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);
        setIsDrawing(true);
    };

    const draw = ({ nativeEvent }) => {
        if (!isDrawing) return;
        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
      };

      const finishDrawing = () => {
        setIsDrawing(false);
        contextRef.current.closePath();
      };

      const clearCanvas = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
      };

    return (
        <div className='canvasDiv'>
            <canvas id='canvas'
            onMouseDown = {startDrawing}
            onMouseUp = {finishDrawing}
            onMouseMove = {draw}
            ref = {canvasRef}
            />
            <button onClick={clearCanvas}>Clear</button>
        </div>
    )
}
