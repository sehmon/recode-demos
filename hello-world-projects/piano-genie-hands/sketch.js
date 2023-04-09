let synth;
let audioEnabled = false;

const mpHands = window;
const drawingUtils = window;
const controls = window;
const controls3d = window;

// const config = { locateFile: (file) => {
//     return `https://cdn.jsdelivr.net/npm/@mediapipe/hands@${mpHands.VERSION}/${file}`;
// }};

let playTone = false;
let fingerUp = true;

// index, middle, ring, pinky
let fingerStates = [
    false,
    false,
    false,
    false,
]

const fingerValues = [
    [20, 17],
    [16, 13],
    [12, 9],
    [8, 5],
]

const tones = [
    "C4",
    "E4",
    "G4",
    "C5",
]

// function onResults(results){
//     console.log("Results");
// }

// const options = {
//     maxNumHands: 2,
//     minDetectionConfidence: 0.5,
//     minTrackingConfidence: 0.5,
//     modelComplexity: 1,
//     selfieMode: true,
// }

// const hands = new mpHands.Hands(config);
// hands.setOptions(options);
// hands.onResults(onResults);

// let videoDataLoaded = false; // is webcam capture ready?

// let vision;
// let handLandmarker;

// function setup() {
//     createCanvas(800, 800);
//     capture = createCapture(VIDEO);
//     capture.size(320, 240);

//     capture.elt.onloadeddata = function(){
//         console.log("video initialized");
//         videoDataLoaded = true;
//     }

//     console.log("Starting vision setup");
//     vision = await FilesetResolver.forVisionTasks(
//         // path/to/wasm/root
//         "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
//       );
//     handLandmarker = await HandLandmarker.createFromOptions(
//         vision,
//         {
//         baseOptions: {
//             modelAssetPath: "hand_landmarker.task"
//         },
//         numHands: 2
//     });
//     console.log("Vision setup complete");
// }
  
// function draw() {
//     image(capture, 0, 0, width, width * capture.height / capture.width);
//     ellipse(mouseX, mouseY, 40, 40);
// }

