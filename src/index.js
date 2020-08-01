import { Animation}  from "./worker";
// let animationWorker = new Animation( document.getElementById("root").getContext("2d"));
const canvas = document.getElementById('root');
canvas.width = window.screen.width;
canvas.height = window.screen.height;
let animationWorker = new Animation(canvas.getContext("2d"));
animationWorker.start();

const Offscreen = canvas.transferControlToOffscreen();
console.log(Offscreen)
let workers = new Worker();
workers.postMessage({ canvas: Offscreen }, [Offscreen]);
console.log(workers)
