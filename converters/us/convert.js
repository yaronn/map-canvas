var fs = require('fs')
  , parseString = require('xml2js').parseString;

var xml = fs.readFileSync('./us.xml')

var res = {
   shapes: []
  }

parseString(xml, function (err, result) {
    var states = result.svg.svg[0].g[0].g
    for (var i=0; i<states.length; i++) {
      var state = result.svg.svg[0].g[0].g[i].$.id
      var shapes = result.svg.svg[0].g[0].g[i].polygon
      for (var j=0; j<shapes.length; j++) {      
         var points = result.svg.svg[0].g[0].g[i].polygon[j].$.points.trim();
         var arr = points.split(' ')
         var shape = []
         for (var k=0; k<arr.length; k++) {
            var point = arr[k].split(',')
            shape.push({"lon": point[0], "lat": point[1]})
         }
         res.shapes.push(shape)

      }
    }

    fs.writeFileSync('./us.js', JSON.stringify(res, null, 2))
});