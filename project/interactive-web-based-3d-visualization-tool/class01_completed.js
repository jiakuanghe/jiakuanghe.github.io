// Grab the canvas and get the WebGL context
const canvas = document.getElementById('canvas');
const gl = canvas.getContext('webgl');

// If we don't have a GL context, WebGL is not supported
if (!gl) {
    alert('WebGL not supported');
}

// Define the vertices for the triangle
// const vertices = new Float32Array([
//     // triangle 1.
//     0.0, 0.5, 0.0,
//    -0.5, -0.5, 0.0,
//     0.5, -0.5, 0.0,
//     0.5, 0.5, 0.0,
//     -0, -0.5, 0.0,
//     1.5, -0.5, 0.0,
// ]);

const vertices = new Float32Array([
    // Central point (repeated for each triangle)
    0.0, 0.0, 0.0, // Center
    0.5, 0.0, 0.0, // Vertex 1
    0.25, 0.433, 0.0, // Vertex 2

    0.0, 0.0, 0.0, // Center
    0.25, 0.433, 0.0, // Vertex 2
    -0.25, 0.433, 0.0, // Vertex 3

    0.0, 0.0, 0.0, // Center
    -0.25, 0.433, 0.0, // Vertex 3
    -0.5, 0.0, 0.0, // Vertex 4

    0.0, 0.0, 0.0, // Center
    -0.5, 0.0, 0.0, // Vertex 4
    -0.25, -0.433, 0.0, // Vertex 5

    0.0, 0.0, 0.0, // Center
    -0.25, -0.433, 0.0, // Vertex 5
    0.25, -0.433, 0.0, // Vertex 6

    0.0, 0.0, 0.0, // Center
    0.25, -0.433, 0.0, // Vertex 6
    0.5, 0.0, 0.0, // Vertex 1 (to close the hexagon)
]);

// const vertices = new Float32Array([
//     // Central point (repeated for each triangle)
//     0.0, 0.0, 0.0, // Center
//     Math.cos(0), Math.sin(0), 0.0, // Vertex 1
//     Math.cos(Math.PI / 3), Math.sin(Math.PI / 3), 0.0, // Vertex 2

//     0.0, 0.0, 0.0, // Center
//     Math.cos(Math.PI / 3), Math.sin(Math.PI / 3), 0.0, // Vertex 2
//     Math.cos(2 * Math.PI / 3), Math.sin(2 * Math.PI / 3), 0.0, // Vertex 3

//     0.0, 0.0, 0.0, // Center
//     Math.cos(2 * Math.PI / 3), Math.sin(2 * Math.PI / 3), 0.0, // Vertex 3
//     Math.cos(Math.PI), Math.sin(Math.PI), 0.0, // Vertex 4

//     0.0, 0.0, 0.0, // Center
//     Math.cos(Math.PI), Math.sin(Math.PI), 0.0, // Vertex 4
//     Math.cos(4 * Math.PI / 3), Math.sin(4 * Math.PI / 3), 0.0, // Vertex 5

//     0.0, 0.0, 0.0, // Center
//     Math.cos(4 * Math.PI / 3), Math.sin(4 * Math.PI / 3), 0.0, // Vertex 5
//     Math.cos(5 * Math.PI / 3), Math.sin(5 * Math.PI / 3), 0.0, // Vertex 6

//     0.0, 0.0, 0.0, // Center
//     Math.cos(5 * Math.PI / 3), Math.sin(5 * Math.PI / 3), 0.0, // Vertex 6
//     Math.cos(0), Math.sin(0), 0.0, // Vertex 1 (to close the hexagon)
// ]);

// Create a buffer and put the vertices in it
const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

// Define the vertex shader
const vsSource = `
    attribute vec3 a_position;
    uniform float uTimeVert;
    void main() {
        mat3 matrixY;
        // column order
        matrixY[0] = vec3(cos(uTimeVert), 0.0, sin(uTimeVert)); // first column
        matrixY[1] = vec3(0.0, 1.0, 0.0); // second column
        matrixY[2] = vec3(-sin(uTimeVert), 0.0, cos(uTimeVert));
        vec3 translation = vec3(0.5*sin(uTimeVert), 0.5*cos(uTimeVert), 0);
        //vec3 transformedP = a_position;
        vec3 transformedP = matrixY * a_position + translation;
        gl_Position = vec4(transformedP, 1.0);
    }
`;

// Define the fragment shader
// gl_FragCoord.x and gl_FragCoord.y give the pixel coordinates
// gl_FragCoord.z is the depth value, and gl_FragCoord.w is 1.0/w where w is the clip-space w-coordinate
const fsSource = `
    precision mediump float;
    uniform float uTimeFrag;
    uniform vec2 screenSize; // screen resolution.
    void main() {
        float colorR = abs(cos(uTimeFrag  * 2.0));
        float pixelCordX = gl_FragCoord.x/screenSize.x;
        float pixelCordY = gl_FragCoord.y/screenSize.y;
        vec2 cord = vec2(pixelCordX, pixelCordY);
        mat2 matrix;
        float timeNew = uTimeFrag;
        matrix[0] = vec2(cos(timeNew), sin(timeNew));
        matrix[1] = vec2(-sin(timeNew), cos(timeNew));
        cord = matrix * cord;
        float colorG = abs(sin(cord.x * 30.0));
        float colorB = abs(cos(cord.y * 30.0));
        gl_FragColor = vec4(colorR, colorG, colorB, 1.0);  // Red color
    }
`;

// Create and compile the vertex shader
const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, vsSource);
gl.compileShader(vertexShader);
if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
    const errorMsg = gl.getShaderInfoLog(vertexShader);
    console.error("Shader compilation failed: " + errorMsg);
}

// Create and compile the fragment shader
const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, fsSource);
gl.compileShader(fragmentShader);
if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
    const errorMsg = gl.getShaderInfoLog(fragmentShader);
    console.error("Shader compilation failed: " + errorMsg);
}

// Create the shader program
const program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);

// Use the program
gl.useProgram(program);

// Get the location of the attribute
const positionLocation = gl.getAttribLocation(program, "a_position");
const uTimeVLocation = gl.getUniformLocation(program, "uTimeVert");
const uTimeFLocation = gl.getUniformLocation(program, "uTimeFrag");
const screenSizeLocation = gl.getUniformLocation(program, "screenSize");
const screenWidth = canvas.width; // Assuming 'canvas' is your WebGL canvas
const screenHeight = canvas.height;

// Enable the attribute
gl.enableVertexAttribArray(positionLocation);

// Tell the attribute how to get data out of the buffer
gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);

// Function to update time uniform
function render() {
    const currentTime = performance.now() * 0.001; // Current time in seconds

    // Set the time uniform
    gl.uniform1f(uTimeVLocation, currentTime);
    gl.uniform1f(uTimeFLocation, currentTime);
    gl.uniform2f(screenSizeLocation, screenWidth, screenHeight);

    // Clear the canvas
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Draw the triangle
    gl.drawArrays(gl.TRIANGLES, 0, vertices.length/3);

    // Loop the render function to animate
    requestAnimationFrame(render);
}

// Start the rendering loop
render();