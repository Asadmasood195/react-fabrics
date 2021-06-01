/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react'
import { fabric } from 'fabric'
import Pic from './images/dragon.jpg'
import '../App.css'

var deleteIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E"

const TextFabric = () => {
    const [canvas, setCanvas] = useState('')
    const [userText, setuserText] = useState('Hy Fabrics')
    const [image, setImage] = useState(Pic)


    var img = document.createElement('img')
    img.src = deleteIcon

    useEffect(() => {
        setCanvas(initCanvas())
        fabric.Object.prototype.objectCaching = false
    }, [])

    const initCanvas = () => (
        new fabric.Canvas('canvas', {
            // isDrawingMode: true,
            centeredRotation: true,
            controlsAboveOverlay: true,
            selection: true,
            // backgroundImage: image,
            renderOnAddRemove: true,
            imageSmoothingEnabled: true,
            // selectionColor: 'blue',
            // freeDrawingBrush: new fabric.PencilBrush({ decimate: 8 }),
            height: 400,
            width: 700,
            backgroundColor: 'rgba( 212, 177, 177, 0.20)',
        })
    )



    // style text function
    const textStyle = (canvi, col, font, fontWeight, shadow, degree) => {
        var text = new fabric.Text(userText, {
            fontFamily: font,
            fontWeight: fontWeight,
            left: 100,
            top: 50,
            width: 200,
            height: 100,
            // flipX: true,

            objectCaching: false,
            stroke: col,
            shadow: shadow ? 'green -5px -5px 3px' : '',
            angle: degree ? degree : '',
            hasRotatingPoint: true,

            // scaleY: '3'
            // fill: 'blue',
            // strokeWidth: 4,
        })
        canvi.add(text)
    }



    // delete activeObject function
    const deleteObject = () => {
        var activeObject = canvas.getActiveObject()
        if (activeObject) {
            canvas.remove(activeObject)
        }
        if (canvas.getActiveGroup) {
            canvas.getActiveGroup().forEachObject(function (o) { canvas.remove(o) })
            canvas.discardActiveGroup().renderAll()
        } else {
            canvas.remove(canvas.getActiveObject())
        }
    }

    fabric.Object.prototype.controls.deleteControl = new fabric.Control({
        x: 0.5,
        y: -0.5,
        offsetY: 16,
        cursorStyle: 'pointer',
        mouseUpHandler: deleteObject,
        render: renderIcon,
        cornerSize: 24
    })

    // show delete button on active object function
    function renderIcon(ctx, left, top, styleOverride, fabricObject) {
        var size = this.cornerSize
        ctx.save()
        ctx.translate(left, top)
        ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle))
        ctx.drawImage(img, -size / 2, -size / 2, size, size)
        ctx.restore()
    }



    const changeText = (e) => {
        if (e.target.value.length >= 1) {
            setuserText(e.target.value)
        } else {
            setuserText('Hy Fabrics')

        }
    }



    const changeImg = (e) => {
        const newImg = URL.createObjectURL(e.target.files[0])
        setImage(newImg)

        canvas.setBackgroundColor('', canvas.renderAll.bind(canvas))
        canvas.setBackgroundImage(0, canvas.renderAll.bind(canvas))
        var file = e.target.files[0]
        var reader = new FileReader()
        reader.onload = function (f) {
            var data = f.target.result
            fabric.Image.fromURL(data, function (img) {
                canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
                    scaleX: canvas.width / img.width,
                    scaleY: canvas.height / img.height
                })
            })
        }
        reader.readAsDataURL(file)
    }

    const filterImage = (contrast, brightness, Grayscale, blendImage, saturation, invert, blendColor, gradient) => {
        fabric.Image.fromURL(image, function (img) {
            canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
                scaleX: canvas.width / img.width,
                scaleY: canvas.height / img.height
            })
            img.filters.push(
                // cimg.filters[0].brightness = parseInt(10),
                // new fabric.Image.filters.Sepia(),
                contrast ? new fabric.Image.filters.Contrast({ contrast: 10 }) : null,
                brightness ? new fabric.Image.filters.Brightness({
                    brightness: 0.05
                }) : null,
                Grayscale ? new fabric.Image.filters.Grayscale() : null,
                blendImage ? new fabric.Image.filters.BlendImage({
                    image,
                    mode: 'multiply',
                    alpha: 0.5
                }) : null,
                saturation ? new fabric.Image.filters.Saturation({ saturation: 1 }) : null,
                invert ? new fabric.Image.filters.Invert() : null,
                blendColor ? new fabric.Image.filters.BlendColor({
                    color: 'green',
                    mode: 'multiply'
                }) : null,
                gradient ? new fabric.Image.filters.GradientTransparency({
                    type: 'linear',
                    gradientUnits: 'pixels', // or 'percentage'
                    coords: { x1: 0, y1: 0, x2: 0, y2: canvas.height },
                    colorStops: [
                        { offset: 0, color: '#000' },
                        { offset: 1, color: '#fff' }
                    ]
                }) : null,

            )

            img.applyFilters()
            canvas.renderAll()
            // canvas.add(img)
        })
    }



    return (
        <div>
            <aside className='asideBar'>
                <div className='grid'>
                    <button className='text1' onClick={() => textStyle(canvas, "red", 'Roboto Mono', 'normal', 'shadow', '-10')}></button>
                    <button className='text2' onClick={() => textStyle(canvas, 'lightgreen', 'Poppins', 'italic', '', '30')}></button>
                    <button className='text3' onClick={() => textStyle(canvas, 'blue', 'Pattaya', '900')}></button>
                    <button onClick={() => filterImage('contrast')}>contrast</button>
                    <button onClick={() => filterImage('', 'brightness')}>Brightness</button>
                    <button onClick={() => filterImage('', '', 'Grayscale')}>Grayscale</button>
                    {/* <button onClick={() => filterImage('', '', '', 'blendImage')}>BlendImage</button> */}
                    <button onClick={() => filterImage('', '', '', '', 'saturation')}>Saturation</button>
                    <button onClick={() => filterImage('', '', '', '', '', 'invert')}>Invert</button>
                    <button onClick={() => filterImage('', '', '', '', '', '', 'blendColor')}>BlendColor</button>
                    {/* <button onClick={() => filterImage('', '', '', '', '', '', '', 'gradient')}>Gradient</button> */}

                </div>
            </aside>
            <br /><br />
            <main >
                <div>
                    <input className='input' type="text" placeholder='Enter text here' onChange={changeText} />
                </div>
                <br />
                <input type="file" onChange={changeImg} id="my-image" />
                <canvas id="canvas" >
                    {/* <img src={Pic} alt="" width='200px' srcset="" /> */}
                </canvas>

                {/* <input onChange={changeImage} type="file" id="file" /> */}
            </main>
        </div>
    )
}
export default TextFabric