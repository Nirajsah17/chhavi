const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
const imageLoader = document.getElementById('imageLoader');
const drawModeButton = document.getElementById('drawMode');
const eraseModeButton = document.getElementById('eraseMode');
const clipModeButton = document.getElementById('clipMode');
const applyFilterButton = document.getElementById('applyFilter');
const filterTypeSelect = document.getElementById('filterType');
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
canvas.addEventListener('mouseup', () => {
    isDrawing = false;
    if (!isClipping) {
        polygonPoints = [];
    }
});
canvas.addEventListener('mouseout', () => isDrawing = false);

drawModeButton.addEventListener('click', () => {
    isErasing = false;
    isClipping = false;
    polygonPoints = [];
    canvas.style.cursor = 'crosshair';
});

eraseModeButton.addEventListener('click', () => {
    isErasing = true;
    isClipping = false;
    polygonPoints = [];
    canvas.style.cursor = 'pointer';
});

clipModeButton.addEventListener('click', () => {
    isErasing = false;
    isClipping = true;
    canvas.style.cursor = 'crosshair';
});

applyFilterButton.addEventListener('click', applyFilter);

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
    if (!isDrawing) return;

    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    if (isClipping && polygonPoints.length) {
        ctx.putImageData(ctx.getImageData(0, 0, canvas.width, canvas.height), 0, 0);
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

function applyFilter() {
    if (polygonPoints.length > 2) {
        const path = new Path2D();
        path.moveTo(polygonPoints[0].x, polygonPoints[0].y);
        for (let point of polygonPoints) {
            path.lineTo(point.x, point.y);
        }
        path.closePath();

        // Apply filter only within the polygon
        ctx.save();
        ctx.clip(path);
        applyFilterToCanvas(filterTypeSelect.value);
        ctx.restore();
    }
}

function applyFilterToCanvas(filterType) {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
        let r = data[i];
        let g = data[i + 1];
        let b = data[i + 2];
        let gray = (r + g + b) / 3;

        switch (filterType) {
            case 'grayscale':
                data[i] = gray;
                data[i + 1] = gray;
                data[i + 2] = gray;
                break;
            case 'sepia':
                data[i] = Math.min(255, gray + 100);
                data[i + 1] = Math.min(255, gray + 50);
                data[i + 2] = gray;
                break;
            case 'invert':
                data[i] = 255 - r;
                data[i + 1] = 255 - g;
                data[i + 2] = 255 - b;
                break;
        }
    }

    ctx.putImageData(imageData, 0, 0);
}
