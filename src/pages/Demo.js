import React, { useEffect, useRef, useState } from 'react';
import '../css/demo.css';
import * as tf from '@tensorflow/tfjs';

export default function Demo() {

    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const imageRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [prediction, setPrediction] = useState(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.width = 280;
        canvas.style.width = '140px';
        canvas.height = 280;
        canvas.style.height = '140px';
        context.lineCap = 'round';
        context.strokeStyle = 'gray';
        context.scale(2, 2);
        context.lineWidth = 10;
        contextRef.current = context;

        const canvas2 = imageRef.current;
        canvas2.width = 28;
        canvas2.style.width = '28px';
        canvas2.height = 28;
        canvas2.style.height = '28px';
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
        getImageData();
      };

      const clearCanvas = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        contextRef.current.clearRect(0, 0, context.canvas.height * 10, context.canvas.width * 10);
      };

      const getImageData = () => {
        const canvas = imageRef.current;
        const context = canvas.getContext('2d');
        canvas.width = 28;
        canvas.style.width = '28px';
        canvas.height = 28;
        canvas.style.height = '28px';
        context.drawImage(canvasRef.current, 0, 0, 28, 28);
        let imgData = context.getImageData(0, 0, context.canvas.height, context.canvas.width);
        predict(imgData);
      };

      async function predict(imageData) {
        const model = await tf.loadLayersModel('model.json');
        await tf.tidy(() => {

          // Convert the canvas pixels to a Tensor of the matching shape
          let img = tf.browser.fromPixels(imageData, 1);
          img = img.reshape([1, 28, 28, 1]);
          img = tf.cast(img, 'float32');
    
          // Make and format the predications
          const output = model.predict(img);
    
          // Save predictions on the component
        const predictions = Array.from(output.dataSync())
          console.log(predictions);
          let max = 0;
          for (let i = 0; i < predictions.length; i++) {
              if (predictions[i] > max) max = i;
          }
          setPrediction(max);
        });
    
      }    

    return (
        <div className='canvasDiv'>
            <h1 className='title'>Digit Recognizer AI</h1>
            <div className='canvasFlex'>
                <div className='canvasColumn'>
                    <h2>Draw a digit 0-9 here:</h2>
                    <canvas id='canvas'
                        onMouseDown={startDrawing}
                        onMouseUp={finishDrawing}
                        onMouseMove={draw}
                        ref={canvasRef}
                    />

                    <br />
                    <button className='clearButton' onClick={clearCanvas}>Clear</button>
                </div>
                <div className='predictionColumn'>
                    <canvas id='smallCanvas'
                        ref={imageRef} />
                    <h1>Prediction: {prediction}</h1>
                </div>
            </div>
            <p className='post-body'>This artificial intelligence model predicts handwritten digits that are written by you. This model is not amazing, but in the real world, models like these are almost perfect. This just shows the power of artifical intelligence.</p>
        </div>
    )
}
