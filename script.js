console.log("Welcome to Javas")
let songs=[
    {name:"shada",path:"songs/1.mp3",cover:"covers/1.webp"},
    {name:"snapchat story",path:"songs/2.mp3",cover:"covers/2.webp"},
    {name:"raani",path:"songs/3.mp3",cover:"covers/3.webp"},
    {name:"rang gora",path:"songs/4.mp3",cover:"covers/4.webp"},
    {name:"roi na",path:"songs/5.mp3",cover:"covers/5.webp"},
    {name:"saareya nu",path:"songs/6.mp3",cover:"covers/6.webp"},
    {name:"sab tum ho",path:"songs/7.mp3",cover:"covers/7.webp"},
    {name:"sare kro dab",path:"songs/8.mp3",cover:"covers/8.webp"},
    {name:"sang hu tere",path:"songs/9.mp3",cover:"covers/9.webp"},
    {name:"safar",path:"songs/10.mp3",cover:"covers/10.webp"},
    {name:"famous",path:"songs/11.mp3",cover:"covers/1.webp"}
]
let audioElement=new Audio('famous.mp3');
let masterplay=document.getElementById('masterplay');
let progressbar=document.getElementById('progressbar')
let songItems=Array.from(document.getElementsByClassName('songItem'));
console.log(songItems[0].getElementsByTagName('img')[0].src);
songItems.forEach((element,i) => {
    // console.log(element.innerHTML,i);
    element.getElementsByTagName('img')[0].src=songs[i].cover;
    element.getElementsByClassName('songname')[0].innerHTML=songs[i].name;
});
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {   
        // console.log("hellllooooooooooooooooo")
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');

    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');

    }
})
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt(audioElement.currentTime/audioElement.duration*100);
    progressbar.value=progress;
})
progressbar.addEventListener('change',()=>{
    audioElement.currentTime=progressbar.value*audioElement.duration/100;
})
// audioElement.play();