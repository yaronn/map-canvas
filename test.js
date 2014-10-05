
var Canvas = require('../node-drawille-canvas').Canvas
var Map = require('./map')

var size = {height: 100, width: 140}
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
              , width: size.width }

var map = new Map(options, canvas)
map.draw()
map.addMarker( {"lon" : "37", "lat" : "-122" })

console.log(ctx._canvas.frame());
