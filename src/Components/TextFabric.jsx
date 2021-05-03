import React, { useState, useEffect } from 'react'
import { fabric } from 'fabric'
import '../App.css'


const TextFabric = () => {
    const [canvas, setCanvas] = useState('')
    const [userText, setuserText] = useState('Hy Fabrics')
    const [userText2, setuserText2] = useState('Hy Fabrics')
    const [userText3, setuserText3] = useState('Hy Fabrics')
    const [userText4, setuserText4] = useState('Hy Fabrics')

    useEffect(() => {
        setCanvas(initCanvas())
    }, [])
    const initCanvas = () => (
        new fabric.Canvas('canvas', {
            height: 120,
            width: 300,
            backgroundColor: 'rgba( 212, 177, 177, 0.20)',


        })
    )
    const addRect = canvi => {
        setCanvas(initCanvas())
        var text = new fabric.Text(userText, {
            stroke: '#ff1318',
            strokeWidth: 2
        })
        // console.log(canvi.onGesture())
        canvi.add(text)
    }

    const Text2 = canvi => {
        setCanvas(initCanvas())
        var text = new fabric.Text(userText2, {
            textAlign: 'right',
            shadow: 'green -5px -5px 3px',
        })
        // text._fontSizeMult()
        canvi.add(text)
    }


    const Text3 = canvi => {
        setCanvas(initCanvas())
        var text = new fabric.Text(userText3, {
            fontStyle: 'italic',
            fontFamily: 'https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@450',

            stroke: 'orange',
            strokeWidth: 2
        })
        text.animate('angle', 8, {
            onChange: canvas.renderAll.bind(canvas),
        })
        text.animate('left', 50, {
            onChange: canvas.renderAll.bind(canvas),
            duration: 1000,
            easing: fabric.util.ease.easeOutBounce
        })
        // text.set({ color: 'red' })
        canvi.add(text)
    }



    const Text4 = canvi => {
        setCanvas(initCanvas())
        var text = new fabric.Text(userText4, {
            left: 100,
            top: 10,
            fill: '#f55',
            angle: 25,
            fontStyle: 'italic',
            fontFamily: 'Delicious'

        })

        // var text = new fabric.Color('rgb(100,100,100)').toHex()

        canvi.add(text)

    }
    return (
        <div>
            <aside className='asideBar'>
                <div className='grid'>
                    <button className='text1' onClick={() => addRect(canvas)}></button>
                    <button className='text4' onClick={() => Text4(canvas)}></button>
                    <button className='text2' onClick={() => Text2(canvas)}></button>
                    <button className='text3' onClick={() => Text3(canvas)}></button>
                </div>
            </aside>
            <br /><br />
            <main >
                <canvas id="canvas" />
            </main>
        </div>
    )
}
export default TextFabric