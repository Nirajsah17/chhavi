const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
const imageLoader = document.getElementById('imageLoader');
const drawModeButton = document.getElementById('drawMode');
const eraseModeButton = document.getElementById('eraseMode');
const clipModeButton = document.getElementById('clipMode');
const finishPolygonButton = document.getElementById('finishPolygon');
const eraseColorPicker = document.getElementById('eraseColor');
const clippedImagesContainer = document.getElementById('clippedImages');

let isDrawing = false;
let isErasing = false;
let isClipping = false;
let lastX = 0;
let lastY = 0;
let polygonPoints = [];

imageLoader.addEventListener('change', handleImage, false);
canvas.addEventListener('mousedown', (e) => {
    if (isClipping) {
        polygonPoints.push({ x: e.offsetX, y: e.offsetY });
    } else {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
    }
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

drawModeButton.addEventListener('click', () => {
    isErasing = false;
    isClipping = false;
    polygonPoints = [];
    clearCanvas();
    drawImage();
    canvas.style.cursor = 'crosshair';
});

eraseModeButton.addEventListener('click', () => {
    isErasing = true;
    isClipping = false;
    polygonPoints = [];
    clearCanvas();
    drawImage();
    canvas.style.cursor = 'pointer';
});

clipModeButton.addEventListener('click', () => {
    isErasing = false;
    isClipping = true;
    polygonPoints = [];
    canvas.style.cursor = 'crosshair';
});

finishPolygonButton.addEventListener('click', () => {
    if (isClipping && polygonPoints.length > 2) {
        clipPolygon();
        polygonPoints = [];
        isClipping = false;
        clearCanvas();
        drawImage();
    }
});

function handleImage(e) {
    const reader = new FileReader();
    reader.onload = function(event) {
        const img = new Image();
        img.onload = function() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
}

function draw(e) {
    if (!isDrawing && !isClipping) return;

    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    if (isClipping && polygonPoints.length) {
        clearCanvas();
        drawImage();
        drawPolygonOutline(e);
    } else if (isErasing) {
        erasePixel(e.offsetX, e.offsetY);
    } else {
        ctx.globalCompositeOperation = 'source-over';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }

    [lastX, lastY] = [e.offsetX, e.offsetY];
}

function drawPolygonOutline(e) {
    ctx.setLineDash([6]);
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 1;

    ctx.beginPath();
    ctx.moveTo(polygonPoints[0].x, polygonPoints[0].y);
    for (let point of polygonPoints) {
        ctx.lineTo(point.x, point.y);
    }
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    ctx.closePath();
}

function erasePixel(x, y) {
    const size = 10; // Size of the eraser
    const eraseColor = hexToRgb(eraseColorPicker.value);
    const imageData = ctx.getImageData(x - size / 2, y - size / 2, size, size);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
        data[i] = eraseColor.r;     // Red
        data[i + 1] = eraseColor.g; // Green
        data[i + 2] = eraseColor.b; // Blue
        data[i + 3] = 255;          // Alpha
    }

    ctx.putImageData(imageData, x - size / 2, y - size / 2);
}

function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
}

function clipPolygon() {
    if (polygonPoints.length > 2) {
        const path = new Path2D();
        path.moveTo(polygonPoints[0].x, polygonPoints[0].y);
        for (let point of polygonPoints) {
            path.lineTo(point.x, point.y);
        }
        path.closePath();

        // Get the bounding box of the polygon
        const minX = Math.min(...polygonPoints.map(p => p.x));
        const minY = Math.min(...polygonPoints.map(p => p.y));
        const maxX = Math.max(...polygonPoints.map(p => p.x));
        const maxY = Math.max(...polygonPoints.map(p => p.y));
        const width = maxX - minX;
        const height = maxY - minY;

        // Create a new canvas to extract the clipped image
        const canvasClipped = document.createElement('canvas');
        const ctxClipped = canvasClipped.getContext('2d');
        canvasClipped.width = width;
        canvasClipped.height = height;

        // Draw the polygon on the new canvas
        ctxClipped.translate(-minX, -minY);
        ctxClipped.clip(path);
        ctxClipped.drawImage(canvas, 0, 0);

        // Create an image from the clipped area
        const img = new Image();
        img.src = canvasClipped.toDataURL();
        clippedImagesContainer.appendChild(img);

        // Erase the polygon area on the original canvas
        ctx.save();
        ctx.clip(path);
        ctx.clearRect(minX, minY, width, height);
        ctx.restore();
    }
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawImage() {
    const img = new Image();
    img.src = imageLoader.files[0] ? URL.createObjectURL(imageLoader.files[0]) : '';
    img.onload = () => ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}
