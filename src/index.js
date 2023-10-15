import "./styles.css";

console.log("Init")

const PANOLENS = require("panolens");

var app, panorama, viewer, infospot;



// function askPermission() {
//     alert("Running");
//     // feature detect
//     if (typeof DeviceOrientationEvent.requestPermission === "function") {
//     DeviceOrientationEvent.requestPermission()
//         .then(permissionState => {
//         if (permissionState === "granted") {
//             console.log("working")
//             alert("Success");
//             window.addEventListener("deviceorientation", () => {});
//         }
//         })
//         .catch(console.error);
//     } else {
//         // handle regular non iOS 13+ devices
//     }
// }

// askPermission();


app = document.querySelector("#app");

// const btn = document.querySelector("#gyro");
// console.log("1")
// console.log(btn)
// btn.addEventListener("click", function() { DeviceMotionEvent.requestPermission(); });

viewer = new PANOLENS.Viewer({
    enableReticle: false,
    container: app,
    output: "console",
    viewIndicator: true,
});

panorama = new PANOLENS.ImagePanorama(
    'https://firebasestorage.googleapis.com/v0/b/memoryscape-59213.appspot.com/o/result.jpg?alt=media&token=bcba86c2-59fc-4d5e-a14b-9ed336dbbbdf&_gl=1*5ay5h*_ga*MjkyNzgzNDQuMTY5NzIzNzI3OQ..*_ga_CW55HF8NVT*MTY5NzM2OTgzNi4xMy4xLjE2OTczNzE2MDEuNjAuMC4w'
    /* The commented line `//
    "https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/tunnel.jpg"` is
    specifying the URL of an equirectangular image that will be used as the panorama for the viewer. */
    // "https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/tunnel.jpg"
    // '/Users/dhruvroongta/Downloads/a-landscape-with-hills-and-trees-hvwpfxfz.jpeg'
//    ' http://127.0.0.1:8080/Unknown-8.jpeg'
// 'Unknown-8.jpg'
// 'https://images.unsplash.com/photo-1596263576925-d90d63691097?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8MzYwfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60'
    //"https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/tunnel.jpg"
);

infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
infospot.position.set(0, 0, 0);

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


