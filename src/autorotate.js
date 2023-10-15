import "./styles.css";
const PANOLENS = require("panolens");

var app, panorama, viewer, infospot;

app = document.querySelector("#app");

viewer = new PANOLENS.Viewer({
  enableReticle: false,
  container: app,
  output: "console",
  viewIndicator: true,
  autoRotate: true,
  autoRotateSpeed: 2,
  autoRotateActivationDuration: 5000,
  dwellTime: 1000
});

panorama = new PANOLENS.ImagePanorama(
    'https://firebasestorage.googleapis.com/v0/b/chalk-bot.appspot.com/o/res.jpg?alt=media&token=1b96c6ea-a503-49cb-9c17-adcc2afd5d25&_gl=1*e1f3ay*_ga*MTk4MjI3NzU5OC4xNjk0NjU0MzUz*_ga_CW55HF8NVT*MTY5NzI0NjQzNy4yMS4xLjE2OTcyNDY0NzkuMTguMC4w'
//   "https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/tunnel.jpg"
);

infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
infospot.position.set(0, -2000, -5000);

panorama.add(infospot);

viewer.add(panorama);

// viewer_main.enableControl(PANOLENS.CONTROLS.DEVICEORIENTATION);
// viewer_main.enableEffect(PANOLENS.MODES.CARDBOARD);
// viewer_main.enableControl(PANOLENS.CONTROLS.ORBIT);
// viewer_main.enableEffect(PANOLENS.MODES.NORMAL);

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use Parcel to bundle this sandbox, you can find more info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;
