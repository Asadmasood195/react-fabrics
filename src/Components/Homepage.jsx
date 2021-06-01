/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import './TextFabric.css'
import { fabric } from 'fabric'

import Pic from './images/dragon.jpg'


const Homepage = () => {
    const [canvas, setCanvas] = useState('')
    const [image, setImage] = useState(Pic)

    // var canvas = new __WEBPACK_IMPORTED_MODULE_2_fabric__default.a.Canvas('my-canvas')

    useEffect(() => {
        setCanvas(initCanvas())
    }, [])

    const initCanvas = () => (
        new fabric.Canvas('canvas', {
            height: 400,
            width: 700,
            // backgroundImage: image,
            backgroundColor: 'rgba( 212, 177, 177, 0.20)',
        })
    )










    const changeImg = (e) => {
        const newImg = URL.createObjectURL(e.target.files[0])
        setImage(newImg)

        fabric.Image.fromURL(image, function (img) {
            canvas.add(img)
        })

    }

    const filterImage = () => {
        fabric.Image.fromURL(image, function (img) {


            // add filter
            // img.filters.push(new fabric.Image.filters.Grayscale())

            // // apply filters and re-render canvas when done
            // img.applyFilters()
            // // add image onto canvas (it also re-render the canvas)
            // canvas.add(img)

            img.filters.push(
                new fabric.Image.filters.Sepia(),
                new fabric.Image.filters.Contrast())
            // new fabric.Image.filters.Brightness(100))
            // new fabric.Image.filters.Brightness({ brightness: 100 }));

            img.applyFilters()
            canvas.add(img)
        })

    }


    // var URL = window.webkitURL || window.URL
    // var url = URL.createObjectURL(e.target.files[0])
    // let img = new Image()
    // img.src = url
    // img.onload = function () {
    //     var canvas = new fabric.Canvas("c")
    //     fabric.Image.fromURL(img.src, function (img) {
    //         // add filter
    //         img.filters.push(new fabric.Image.filters.Grayscale())

    //         // apply filters and re-render canvas when done
    //         img.applyFilters(canvas.renderAll.bind(canvas))
    //         // add image onto canvas
    //         img.width = canvas.width
    //         img.height = canvas.height
    //         canvas.add(img)
    //     })
    // }

    return (
        <div>
            <input type="file" onChange={changeImg} id="my-image" />
            <canvas id="canvas" />
            {/* </canvas> */}
            <button onClick={filterImage}>Filter</button>
            {/* <img src={image} width="400px" height="200px" alt='pic' id="my-image" /> */}
            {/* <table>
                <tbody><tr>
                    <td width="50%">  <input type="file" id="file" onChange={changeImg} /><br />
                        <canvas id="canvas" width={450} height={450} /></td>
                    <td width="25%">
                        <p>
                            <label><span>Invert:</span> <input type="checkbox" id="invert" /></label>
                        </p>
                        <p>
                            <label><span>Brightness:</span> <input type="checkbox" id="brightness" /></label>
                            <br />
                            <label>Value: <input type="range" id="brightness-value" defaultValue="0.1" min={-1} max={1} step="0.003921" /></label>
                        </p>
                        <p>
                            <label><span>Gamma:</span> <input type="checkbox" id="gamma" /></label>
                            <br />
                            <label>Red: <input type="range" id="gamma-red" defaultValue={1} min="0.2" max="2.2" step="0.003921" /></label>
                            <br />
                            <label>Green: <input type="range" id="gamma-green" defaultValue={1} min="0.2" max="2.2" step="0.003921" /></label>
                            <br />
                            <label>Blue: <input type="range" id="gamma-blue" defaultValue={1} min="0.2" max="2.2" step="0.003921" /></label>
                        </p>
                        <p>
                            <label><span>Contrast:</span> <input type="checkbox" id="contrast" /></label>
                            <br />
                            <label>Value: <input type="range" id="contrast-value" defaultValue={0} min={-1} max={1} step="0.003921" /></label>
                        </p>
                    </td>
                    <td width="25%">
                        <p>
                            <label><span>Saturation:</span> <input type="checkbox" id="saturation" /></label>
                            <br />
                            <label>Value: <input type="range" id="saturation-value" defaultValue={0} min={-1} max={1} step="0.003921" /></label>
                        </p>
                        <p>
                            <label><span>Hue:</span> <input type="checkbox" id="hue" /></label>
                            <br />
                            <label>Value: <input type="range" id="hue-value" defaultValue={0} min={-2} max={2} step="0.002" /></label>
                        </p>
                        <p>
                            <label><span>Blend Color:</span> <input type="checkbox" id="blend" /></label>
                            <br />
                            <label>Mode:</label>
                            <select id="blend-mode" name="blend-mode">
                                <option selected value="add">Add</option>
                                <option value="diff">Diff</option>
                                <option value="subtract">Subtract</option>
                                <option value="multiply">Multiply</option>
                                <option value="screen">Screen</option>
                                <option value="lighten">Lighten</option>
                                <option value="darken">Darken</option>
                                <option value="overlay">Overlay</option>
                                <option value="exclusion">Exclusion</option>
                                <option value="tint">Tint</option>
                            </select>
                            <br />
                            <label>Color: <input type="color" id="blend-color" defaultValue="#00f900" /></label><br />
                            <label>Alpha: <input type="range" id="blend-alpha" min={0} max={1} defaultValue={1} step="0.01" /></label><br />
                        </p>
                    </td>
                </tr>
                </tbody></table> */}

        </div>
    )
}

export default Homepage











// var canvas = new fabric.Canvas('canvas');
// document.getElementById('file').addEventListener("change", function (e) {
//   var file = e.target.files[0];
//   var reader = new FileReader();
//   reader.onload = function (f) {
//     var data = f.target.result;                    
//     fabric.Image.fromURL(data, function (img) {
//       var oImg = img.set({left: 0, top: 0, angle: 0}).scale(0.9);
//       canvas.add(oImg).renderAll();
//       var a = canvas.setActiveObject(oImg);
//       var dataURL = canvas.toDataURL({format: 'png', quality: 0.8});
//     });
//   };
//   reader.readAsDataURL(file);
// });


// (function() {
//   // manually initialize 2 filter backend to give ability to switch:
//   var webglBackend;
//   try {
//     webglBackend = new fabric.WebglFilterBackend();
//   } catch (e) {
//     console.log(e)
//   }
//   var canvas2dBackend = new fabric.Canvas2dFilterBackend()

//   fabric.filterBackend = fabric.initFilterBackend();
//   fabric.Object.prototype.transparentCorners = false;
//   var $ = function(id){return document.getElementById(id)};

//   function applyFilter(index, filter) {
//     var obj = canvas.getActiveObject();
//     obj.filters[index] = filter;
//     var timeStart = +new Date();
//     obj.applyFilters();
//     var timeEnd = +new Date();
//     var dimString = canvas.getActiveObject().width + ' x ' +
//       canvas.getActiveObject().height;
//     $('bench').innerHTML = dimString + 'px ' +
//       parseFloat(timeEnd-timeStart) + 'ms';
//     canvas.renderAll();
//   }

//   function getFilter(index) {
//     var obj = canvas.getActiveObject();
//     return obj.filters[index];
//   }

//   function applyFilterValue(index, prop, value) {
//     var obj = canvas.getActiveObject();
//     if (obj.filters[index]) {
//       obj.filters[index][prop] = value;
//       var timeStart = +new Date();
//       obj.applyFilters();
//       var timeEnd = +new Date();
//       var dimString = canvas.getActiveObject().width + ' x ' +
//         canvas.getActiveObject().height;
//       $('bench').innerHTML = dimString + 'px ' +
//         parseFloat(timeEnd-timeStart) + 'ms';
//       canvas.renderAll();
//     }
//   }

//   fabric.Object.prototype.padding = 5;
//   fabric.Object.prototype.transparentCorners = false;

//   var canvas = this.__canvas = new fabric.Canvas('c'),
//       f = fabric.Image.filters;

//   canvas.on({
//     'object:selected': function() {
//       fabric.util.toArray(document.getElementsByTagName('input'))
//                           .forEach(function(el){ el.disabled = false; })

//       var filters = ['grayscale', 'invert', 'remove-color', 'sepia', 'brownie',
//                       'brightness', 'contrast', 'saturation', 'noise', 'vintage',
//                       'pixelate', 'blur', 'sharpen', 'emboss', 'technicolor',
//                       'polaroid', 'blend-color', 'gamma', 'kodachrome',
//                       'blackwhite', 'blend-image', 'hue', 'resize'];

//       for (var i = 0; i < filters.length; i++) {
//         $(filters[i]) && (
//         $(filters[i]).checked = !!canvas.getActiveObject().filters[i]);
//       }
//     },
//     'selection:cleared': function() {
//       fabric.util.toArray(document.getElementsByTagName('input'))
//                           .forEach(function(el){ el.disabled = true; })
//     }
//   });

//   var indexF;

//   $('invert').onclick = function() {
//     applyFilter(1, this.checked && new f.Invert());
//   };


//   $('brightness').onclick = function () {
//     applyFilter(5, this.checked && new f.Brightness({
//       brightness: parseFloat($('brightness-value').value)
//     }));
//   };
//   $('brightness-value').oninput = function() {
//     applyFilterValue(5, 'brightness', parseFloat(this.value));
//   };
//   $('gamma').onclick = function () {
//     var v1 = parseFloat($('gamma-red').value);
//     var v2 = parseFloat($('gamma-green').value);
//     var v3 = parseFloat($('gamma-blue').value);
//     applyFilter(17, this.checked && new f.Gamma({
//       gamma: [v1, v2, v3]
//     }));
//   };
//   $('gamma-red').oninput = function() {
//     var current = getFilter(17).gamma;
//     current[0] = parseFloat(this.value);
//     applyFilterValue(17, 'gamma', current);
//   };
//   $('gamma-green').oninput = function() {
//     var current = getFilter(17).gamma;
//     current[1] = parseFloat(this.value);
//     applyFilterValue(17, 'gamma', current);
//   };
//   $('gamma-blue').oninput = function() {
//     var current = getFilter(17).gamma;
//     current[2] = parseFloat(this.value);
//     applyFilterValue(17, 'gamma', current);
//   };
//   $('contrast').onclick = function () {
//     applyFilter(6, this.checked && new f.Contrast({
//       contrast: parseFloat($('contrast-value').value)
//     }));
//   };
//   $('contrast-value').oninput = function() {
//     applyFilterValue(6, 'contrast', parseFloat(this.value));
//   };
//   $('saturation').onclick = function () {
//     applyFilter(7, this.checked && new f.Saturation({
//       saturation: parseFloat($('saturation-value').value)
//     }));
//   };
//   $('saturation-value').oninput = function() {
//     applyFilterValue(7, 'saturation', parseFloat(this.value));
//   };
//   $('noise').onclick = function () {
//     applyFilter(8, this.checked && new f.Noise({
//       noise: parseInt($('noise-value').value, 10)
//     }));
//   };
//   $('noise-value').oninput = function() {
//     applyFilterValue(8, 'noise', parseInt(this.value, 10));
//   };
//   $('pixelate').onclick = function() {
//     applyFilter(10, this.checked && new f.Pixelate({
//       blocksize: parseInt($('pixelate-value').value, 10)
//     }));
//   };
//   $('pixelate-value').oninput = function() {
//     applyFilterValue(10, 'blocksize', parseInt(this.value, 10));
//   };
//   $('blur').onclick = function() {
//     applyFilter(11, this.checked && new f.Blur({
//       value: parseFloat($('blur-value').value)
//     }));
//   };
//   $('blur-value').oninput = function() {
//     applyFilterValue(11, 'blur', parseFloat(this.value, 10));
//   };
//   $('sharpen').onclick = function() {
//     applyFilter(12, this.checked && new f.Convolute({
//       matrix: [  0, -1,  0,
//                 -1,  5, -1,
//                  0, -1,  0 ]
//     }));
//   };
//   $('emboss').onclick = function() {
//     applyFilter(13, this.checked && new f.Convolute({
//       matrix: [ 1,   1,  1,
//                 1, 0.7, -1,
//                -1,  -1, -1 ]
//     }));
//   };
//   $('blend').onclick= function() {
//     applyFilter(16, this.checked && new f.BlendColor({
//       color: document.getElementById('blend-color').value,
//       mode: document.getElementById('blend-mode').value,
//       alpha: document.getElementById('blend-alpha').value
//     }));
//   };

//   $('blend-mode').onchange = function() {
//     applyFilterValue(16, 'mode', this.value);
//   };

//   $('blend-color').onchange = function() {
//     applyFilterValue(16, 'color', this.value);
//   };

//   $('blend-alpha').oninput = function() {
//     applyFilterValue(16, 'alpha', this.value);
//   };

//   $('hue').onclick= function() {
//     applyFilter(21, this.checked && new f.HueRotation({
//       rotation: document.getElementById('hue-value').value,
//     }));
//   };

//   $('hue-value').oninput = function() {
//     applyFilterValue(21, 'rotation', this.value);
//   };

//   $('blend-image').onclick= function() {
//     applyFilter(20, this.checked && new f.BlendImage({
//       image: fImage,
//     }));
//   };

//   $('blend-image-mode').onchange = function() {
//     applyFilterValue(20, 'mode', this.value);
//   };

// })();















// import React, {useEffect, useState} from 'react'
// import fabric from 'fabric'
// const Homepage = () => {
//     const [canvas, setCanvas] = useState('')


//     // var canvas = new fabric.Canvas('c'),
//     // var f = fabric.Image.filters


//     var webglBackend
//     useEffect(() => {
//         try {
//             webglBackend = new fabric.WebglFilterBackend()
//         } catch (e) {
//             console.log(e)
//         }
//         var canvas2dBackend = new fabric.Canvas2dFilterBackend()

//     }, [])

//     fabric.filterBackend = fabric.initFilterBackend()
//     fabric.Object.prototype.transparentCorners = false
//     var $ = function (id) { return document.getElementById(id) }

//     function applyFilter(index, filter) {
//         var obj = canvas.getActiveObject()
//         obj.filters[index] = filter
//         var timeStart = +new Date()
//         obj.applyFilters()
//         var timeEnd = +new Date()
//         var dimString = canvas.getActiveObject().width + ' x ' +
//             canvas.getActiveObject().height
//         $('bench').innerHTML = dimString + 'px ' +
//             parseFloat(timeEnd - timeStart) + 'ms'
//         canvas.renderAll()
//     }



//     const brightness = () => {
//         // applyFilter(5, this.checked && new f.Brightness({
//         //     brightness: parseFloat($('brightness-value').value)
//         // }))
//     }
//     return (
//         <div>
//             <button onClick={brightness}>brightness</button>
//         </div>
//     )
// }

// export default Homepage









// // import React, { useEffect, useState } from 'react'
// // import { fabric } from 'fabric'
// // import Pic from './images/dragon.jpg'



// // const Homepage = () => {
// //     const [canvas, setCanvas] = useState('')
// //     const [image, setimage] = useState(Pic)

// //     useEffect(() => {
// //         setCanvas(fabricInIt())
// //     }, [])

// //     const fabricInIt = () => {
// //         var canvas = new fabric.Canvas('c')
// //         var imgElement = document.getElementById('my-image')
// //         var imgInstance = new fabric.Image(imgElement, {
// //             // left: 100,
// //             // top: 100,
// //             // width: 1000,
// //             // height: 300,
// //             // angle: 30,
// //             opacity: 0.85,

// //         })
// //         canvas.add(imgInstance)
// //     }

// //     const changeImage = (e) => {
// //         setimage(e.target.files[0])
// //     }

// //     return (
// //         <div>
// //             <canvas id="c">

// //                 <img src={image} width='0px' alt='pic' id="my-image" />
// //             </canvas>
// //             {/* <input type="file" onChange={changeImage} name="image" /> */}
// //         </div>
// //     )
// // }

// // export default Homepage




// // (function() {
// //     // manually initialize 2 filter backend to give ability to switch:
// //     var webglBackend;
// //     try {
// //       webglBackend = new fabric.WebglFilterBackend();
// //     } catch (e) {
// //       console.log(e)
// //     }
// //     var canvas2dBackend = new fabric.Canvas2dFilterBackend()

// //     fabric.filterBackend = fabric.initFilterBackend();
// //     fabric.Object.prototype.transparentCorners = false;
// //     var $ = function(id){return document.getElementById(id)};

// //     function applyFilter(index, filter) {
// //       var obj = canvas.getActiveObject();
// //       obj.filters[index] = filter;
// //       var timeStart = +new Date();
// //       obj.applyFilters();
// //       var timeEnd = +new Date();
// //       var dimString = canvas.getActiveObject().width + ' x ' +
// //         canvas.getActiveObject().height;
// //       $('bench').innerHTML = dimString + 'px ' +
// //         parseFloat(timeEnd-timeStart) + 'ms';
// //       canvas.renderAll();
// //     }

// //     function getFilter(index) {
// //       var obj = canvas.getActiveObject();
// //       return obj.filters[index];
// //     }

// //     function applyFilterValue(index, prop, value) {
// //       var obj = canvas.getActiveObject();
// //       if (obj.filters[index]) {
// //         obj.filters[index][prop] = value;
// //         var timeStart = +new Date();
// //         obj.applyFilters();
// //         var timeEnd = +new Date();
// //         var dimString = canvas.getActiveObject().width + ' x ' +
// //           canvas.getActiveObject().height;
// //         $('bench').innerHTML = dimString + 'px ' +
// //           parseFloat(timeEnd-timeStart) + 'ms';
// //         canvas.renderAll();
// //       }
// //     }

// //     fabric.Object.prototype.padding = 5;
// //     fabric.Object.prototype.transparentCorners = false;

// //     var canvas = this.__canvas = new fabric.Canvas('c'),
// //         f = fabric.Image.filters;

// //     canvas.on({
// //       'selection:created': function() {
// //         fabric.util.toArray(document.getElementsByTagName('input'))
// //                             .forEach(function(el){ el.disabled = false; })

// //         var filters = ['grayscale', 'invert', 'remove-color', 'sepia', 'brownie',
// //                         'brightness', 'contrast', 'saturation', 'noise', 'vintage',
// //                         'pixelate', 'blur', 'sharpen', 'emboss', 'technicolor',
// //                         'polaroid', 'blend-color', 'gamma', 'kodachrome',
// //                         'blackwhite', 'blend-image', 'hue', 'resize'];

// //         for (var i = 0; i < filters.length; i++) {
// //           $(filters[i]) && (
// //           $(filters[i]).checked = !!canvas.getActiveObject().filters[i]);
// //         }
// //       },
// //       'selection:cleared': function() {
// //         fabric.util.toArray(document.getElementsByTagName('input'))
// //                             .forEach(function(el){ el.disabled = true; })
// //       }
// //     });

// //     fabric.Image.fromURL('../assets/pug.jpg', function(img) {
// //       var oImg = img.set({ left: 0, top: 0}).scale(0.25);
// //       canvas.add(oImg);
// //     });
// //     fabric.Image.fromURL('../assets/printio.png', function(img) {
// //       var oImg = img.set({ left: 150, top: 0}).scale(0.4);
// //       canvas.add(oImg);
// //     });
// //     fabric.Image.fromURL('../assets/dragon.jpg', function(img) {
// //       var oImg = img.set({ left: 0, top: 270}).scale(0.2);
// //       canvas.add(oImg);
// //     });
// //     fabric.Image.fromURL('../assets/dragon2.jpg', function(img) {
// //       var oImg = img.set({ left: 0, top: 500}).scale(0.2);
// //       canvas.add(oImg);
// //     });
// //     fabric.Image.fromURL('../assets/frame.png', function(img) {
// //       var oImg = img.set({ left: 150, top: 500}).scale(0.2);
// //       canvas.add(oImg);
// //     });
// //     var indexF;
// //     $('webgl').onclick = function() {
// //       if (this.checked) {
// //         fabric.filterBackend = webglBackend;
// //       } else {
// //         fabric.filterBackend = canvas2dBackend;
// //       }
// //     };
// //     $('brownie').onclick = function() {
// //       applyFilter(4, this.checked && new f.Brownie());
// //     };
// //     $('vintage').onclick = function() {
// //       applyFilter(9, this.checked && new f.Vintage());
// //     };
// //     $('technicolor').onclick = function() {
// //       applyFilter(14, this.checked && new f.Technicolor());
// //     };
// //     $('polaroid').onclick = function() {
// //       applyFilter(15, this.checked && new f.Polaroid());
// //     };
// //     $('kodachrome').onclick = function() {
// //       applyFilter(18, this.checked && new f.Kodachrome());
// //     };
// //     $('blackwhite').onclick = function() {
// //       applyFilter(19, this.checked && new f.BlackWhite());
// //     };
// //     $('grayscale').onclick = function() {
// //       applyFilter(0, this.checked && new f.Grayscale());
// //     };
// //     $('average').onclick = function() {
// //       applyFilterValue(0, 'mode', 'average');
// //     };
// //     $('luminosity').onclick = function() {
// //       applyFilterValue(0, 'mode', 'luminosity');
// //     };
// //     $('lightness').onclick = function() {
// //       applyFilterValue(0, 'mode', 'lightness');
// //     };
// //     $('invert').onclick = function() {
// //       applyFilter(1, this.checked && new f.Invert());
// //     };
// //     $('remove-color').onclick = function () {
// //       applyFilter(2, this.checked && new f.RemoveColor({
// //         distance: $('remove-color-distance').value,
// //         color: $('remove-color-color').value,
// //       }));
// //     };
// //     $('remove-color-color').onchange = function() {
// //       applyFilterValue(2, 'color', this.value);
// //     };
// //     $('remove-color-distance').oninput = function() {
// //       applyFilterValue(2, 'distance', this.value);
// //     };
// //     $('sepia').onclick = function() {
// //       applyFilter(3, this.checked && new f.Sepia());
// //     };
// //     $('brightness').onclick = function () {
// //       applyFilter(5, this.checked && new f.Brightness({
// //         brightness: parseFloat($('brightness-value').value)
// //       }));
// //     };
// //     $('brightness-value').oninput = function() {
// //       applyFilterValue(5, 'brightness', parseFloat(this.value));
// //     };
// //     $('gamma').onclick = function () {
// //       var v1 = parseFloat($('gamma-red').value);
// //       var v2 = parseFloat($('gamma-green').value);
// //       var v3 = parseFloat($('gamma-blue').value);
// //       applyFilter(17, this.checked && new f.Gamma({
// //         gamma: [v1, v2, v3]
// //       }));
// //     };
// //     $('gamma-red').oninput = function() {
// //       var current = getFilter(17).gamma;
// //       current[0] = parseFloat(this.value);
// //       applyFilterValue(17, 'gamma', current);
// //     };
// //     $('gamma-green').oninput = function() {
// //       var current = getFilter(17).gamma;
// //       current[1] = parseFloat(this.value);
// //       applyFilterValue(17, 'gamma', current);
// //     };
// //     $('gamma-blue').oninput = function() {
// //       var current = getFilter(17).gamma;
// //       current[2] = parseFloat(this.value);
// //       applyFilterValue(17, 'gamma', current);
// //     };
// //     $('contrast').onclick = function () {
// //       applyFilter(6, this.checked && new f.Contrast({
// //         contrast: parseFloat($('contrast-value').value)
// //       }));
// //     };
// //     $('contrast-value').oninput = function() {
// //       applyFilterValue(6, 'contrast', parseFloat(this.value));
// //     };
// //     $('saturation').onclick = function () {
// //       applyFilter(7, this.checked && new f.Saturation({
// //         saturation: parseFloat($('saturation-value').value)
// //       }));
// //     };
// //     $('saturation-value').oninput = function() {
// //       applyFilterValue(7, 'saturation', parseFloat(this.value));
// //     };
// //     $('noise').onclick = function () {
// //       applyFilter(8, this.checked && new f.Noise({
// //         noise: parseInt($('noise-value').value, 10)
// //       }));
// //     };
// //     $('noise-value').oninput = function() {
// //       applyFilterValue(8, 'noise', parseInt(this.value, 10));
// //     };
// //     $('pixelate').onclick = function() {
// //       applyFilter(10, this.checked && new f.Pixelate({
// //         blocksize: parseInt($('pixelate-value').value, 10)
// //       }));
// //     };
// //     $('pixelate-value').oninput = function() {
// //       applyFilterValue(10, 'blocksize', parseInt(this.value, 10));
// //     };
// //     $('blur').onclick = function() {
// //       applyFilter(11, this.checked && new f.Blur({
// //         value: parseFloat($('blur-value').value)
// //       }));
// //     };
// //     $('blur-value').oninput = function() {
// //       applyFilterValue(11, 'blur', parseFloat(this.value, 10));
// //     };
// //     $('sharpen').onclick = function() {
// //       applyFilter(12, this.checked && new f.Convolute({
// //         matrix: [  0, -1,  0,
// //                   -1,  5, -1,
// //                    0, -1,  0 ]
// //       }));
// //     };
// //     $('emboss').onclick = function() {
// //       applyFilter(13, this.checked && new f.Convolute({
// //         matrix: [ 1,   1,  1,
// //                   1, 0.7, -1,
// //                  -1,  -1, -1 ]
// //       }));
// //     };
// //     $('blend').onclick= function() {
// //       applyFilter(16, this.checked && new f.BlendColor({
// //         color: document.getElementById('blend-color').value,
// //         mode: document.getElementById('blend-mode').value,
// //         alpha: document.getElementById('blend-alpha').value
// //       }));
// //     };

// //     $('blend-mode').onchange = function() {
// //       applyFilterValue(16, 'mode', this.value);
// //     };

// //     $('blend-color').onchange = function() {
// //       applyFilterValue(16, 'color', this.value);
// //     };

// //     $('blend-alpha').oninput = function() {
// //       applyFilterValue(16, 'alpha', this.value);
// //     };

// //     $('hue').onclick= function() {
// //       applyFilter(21, this.checked && new f.HueRotation({
// //         rotation: document.getElementById('hue-value').value,
// //       }));
// //     };

// //     $('hue-value').oninput = function() {
// //       applyFilterValue(21, 'rotation', this.value);
// //     };

// //     $('blend-image').onclick= function() {
// //       applyFilter(20, this.checked && new f.BlendImage({
// //         image: fImage,
// //       }));
// //     };

// //     $('blend-image-mode').onchange = function() {
// //       applyFilterValue(20, 'mode', this.value);
// //     };
// //     var imageElement = document.createElement('img');
// //     imageElement.src = '../assets/printio.png';
// //     var fImage = new fabric.Image(imageElement);
// //     fImage.scaleX = 1;
// //     fImage.scaleY = 1;
// //     fImage.top = 15;
// //     fImage.left = 15;
// //   })();