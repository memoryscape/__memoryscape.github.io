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
    'https://firebasestorage.googleapis.com/v0/b/memoryscape-59213.appspot.com/o/result.jpg?alt=media&token=f8ca405c-3a57-40f7-873d-aa50845a5183&_gl=1*1u83alq*_ga*MTk4MjI3NzU5OC4xNjk0NjU0MzUz*_ga_CW55HF8NVT*MTY5NzM2MDI0NC4yNS4xLjE2OTczNjE2MjYuMzYuMC4w'
    // 'https://firebasestorage.googleapis.com/v0/b/memoryscape-59213.appspot.com/o/result.png?alt=media&token=47e21619-08c9-43e3-8aea-76a197458e54&_gl=1*6qnzgq*_ga*MTk4MjI3NzU5OC4xNjk0NjU0MzUz*_ga_CW55HF8NVT*MTY5NzM2MDI0NC4yNS4xLjE2OTczNjA1NTguMzkuMC4w'
    // 'https://cdn.discordapp.com/attachments/1162198902280302614/1163032492631146596/result.png?ex=653e196a&is=652ba46a&hm=5de9673ece49a12edb36291e7e3405b18973144eddd2a4ef42930a01f0149f66&'
    // 'https://firebasestorage.googleapis.com/v0/b/chalk-bot.appspot.com/o/res.jpg?alt=media&token=1b96c6ea-a503-49cb-9c17-adcc2afd5d25&_gl=1*e1f3ay*_ga*MTk4MjI3NzU5OC4xNjk0NjU0MzUz*_ga_CW55HF8NVT*MTY5NzI0NjQzNy4yMS4xLjE2OTcyNDY0NzkuMTguMC4w'
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
