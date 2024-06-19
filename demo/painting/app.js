// Initialize Konva Stage and Layer
var stage = new Konva.Stage({
  container: 'container',
  width: window.innerWidth,
  height: window.innerHeight - 20, // Adjust height to accommodate controls
});

var layer = new Konva.Layer();
stage.add(layer);

var imageObj = null; // Variable to hold the image object

// Function to load and display image
function loadImage(url) {
  imageObj = new Image();
  imageObj.onload = function () {
      var konvaImage = new Konva.Image({
          x: 0,
          y: 0,
          image: imageObj,
          width: stage.width(),
          height: stage.height(),
      });

      layer.removeChildren(); // Clear previous content
      layer.add(konvaImage);
      layer.batchDraw();

      // Initialize Polygon Drawing
      var polygon = null;
      var isDrawing = false;
      var polygonPoints = [];

      stage.on('mousedown touchstart', function (e) {
          if (imageObj) {
              isDrawing = true;
              var pos = stage.getPointerPosition();
              polygonPoints.push(pos.x, pos.y);
              polygon = new Konva.Line({
                  points: polygonPoints,
                  stroke: 'blue',
                  strokeWidth: 2,
                  closed: false, // Keep the polygon open while drawing
                  draggable: true, // Make the polygon draggable for demo purposes
              });
              layer.add(polygon);
          }
      });

      stage.on('mousemove touchmove', function () {
          if (!isDrawing || !polygon) {
              return;
          }
          var pos = stage.getPointerPosition();
          polygonPoints[polygonPoints.length - 2] = pos.x;
          polygonPoints[polygonPoints.length - 1] = pos.y;
          polygon.points(polygonPoints);
          layer.batchDraw();
      });

      stage.on('mouseup touchend', function () {
          isDrawing = false;
          // Close the polygon after finishing drawing
          if (polygon) {
              polygon.closed(true);
              layer.batchDraw();
          }
      });
  };

  imageObj.onerror = function () {
      console.error('Error loading image:', url);
  };

  imageObj.src = url;
}

// Handle Image Upload
var imageUpload = document.getElementById('imageUpload');
imageUpload.addEventListener('change', function (e) {
  var file = e.target.files[0];
  var reader = new FileReader();
  reader.onload = function (event) {
      var imageUrl = event.target.result;
      loadImage(imageUrl);
  };
  reader.readAsDataURL(file);
});

// Apply Grayscale Filter Checkbox
var applyFilterCheckbox = document.getElementById('applyFilterCheckbox');
applyFilterCheckbox.addEventListener('change', function () {
  if (imageObj) {
      var konvaImage = layer.findOne('Image');
      if (konvaImage) {
          var filter = new Konva.Filters.Grayscale();
          if (this.checked) {
              konvaImage.filters([filter]);
          } else {
              konvaImage.filters([]);
          }
          layer.batchDraw();
      } else {
          console.error('No image found on the layer.');
      }
  }
});
