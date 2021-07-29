const videoElement=document.getElementById("video");
const button=document.getElementById("button");

async function selectMediaStream()
{
    try
    {
        const mediaStream=await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject=mediaStream;
        videoElement.onloadedmetadata=()=>{
            videoElement.play();
        }
    }
    catch(error)
    {
        console.log(error);
    }
}

button.addEventListener("click",async ()=>{
    button.disabled=true;
    await videoElement.requestPictureInPicture();
    button.disabled=false;
});

selectMediaStream();

// var constraints={
//     video: true,
//     audio:true 
// };

// async function getMedia(constraint) {
//     let stream = null;
  
//     try {
//         stream = await navigator.mediaDevices.getUserMedia(constraint);
//         videoElement.srcObject=stream;
//         videoElement.onloadedmetadata=()=>{
//           videoElement.play();
//         }  
//     } catch(err) {
//       console.log(err);
//     }
// }

// getMedia(constraints);
