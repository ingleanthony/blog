import React from 'react'
import Canvas from '../components/Canvas'
import '../css/demo.css'

export default function Demo() {

    const draw = (ctx, frameCount) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = '#000000'
        ctx.beginPath()
        ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
        ctx.fill()
      }

    return (
        <div className='canvasDiv'>
            <Canvas draw={draw} />
            <p>Work in progress...</p>
        </div>
    )
}
