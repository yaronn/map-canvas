
var Canvas = require('drawille-canvas-blessed-contrib').Canvas
var Map = require('../map')

var size = {height: 200, width: 260}
canvas = new Canvas(size.width, size.height)
var ctx = canvas.getContext()
ctx.strokeStyle="green"
ctx.fillStyle="green"
ctx.clearRect(0, 0, canvas.width, canvas.height);

var options = { excludeAntartica: true
              , disableBackground: true
              , disableMapBackground: true
              , disableGraticule: true
              , disableFill: true
              , height: size.height
              , width: size.width
              , startLon: 50
              , endLon: 110
              , startLat: 115
              , endLat: 140 }

var map = new Map(options, canvas)
map.draw()

console.log(ctx._canvas.frame());
