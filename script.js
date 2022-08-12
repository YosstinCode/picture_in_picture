const $video = document.querySelector('video')
const $button = document.querySelector('#pictureinpicture')

const pictureInPicture = (e)=>{

   const pipWindow = e.target
   console.log(`The floating window dimensions are: ${pipWindow.width}x${pipWindow.height}px`);
}

$button.addEventListener('click', async ()=>{

   const pictureInPictureWindow = await $video.requestPictureInPicture()
   pictureInPictureWindow.onresize = pictureInPicture
})