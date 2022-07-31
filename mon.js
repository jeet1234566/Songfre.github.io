console.log("Welcome to song");

let songIndex = 0;
let audioElement = new Audio('song/Bizzey.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressbar = document.getElementById("myProgressbar");
let masterSongName = document.getElementById("masterSongName");
// let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName('songitem'));
let songs = [
    {songName: "Bizzey - Traag ft. Jozo & Kraantje Pappie", filePath: "song/Bizzey.mp3", coverPath: "img/bizzzey.png"},
    {songName: "CJ - WHOOPTY", filePath: "song/Beleiver.mp3", coverPath: "img/cj.png"},
    {songName: "Arabic Remix - Khalouni N3ich", filePath: "song/Let.mp3", coverPath: "img/bic.png"},
    {songName: "Spice, Sean Paul, Shaggy - Go Down Deh", filePath: "song/Need.mp3", coverPath: "img/go.png"},
    {songName: "Kosandra - Miyagi & Andy Panda", filePath: "song/Ignite.mp3", coverPath: "img/sandra.png"},
    {songName: "Joker BGM", filePath: "song/Legend.mp3", coverPath: "img/jobgm.png"},
    {songName: "Busta Rhymes - Touch It", filePath: "song/Unstoppable.mp3", coverPath: "img/topuch.png"},
    {songName: "Acharuli Popuri - Peaky Blinders", filePath: "song/Lovely.mp3", coverPath: "img/peaky.png"},
    {songName: "Afara e Frig - Mihaita Piticu", filePath: "song/into.mp3", coverPath: "img/afarae.png"},
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

masterPlay.addEventListener('click', () =>{
        if(audioElement.paused || audioElement.currentTime<=0){
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
        }
        else{
            audioElement.pause();
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            gif.style.opacity = 0;
        }
});

audioElement.addEventListener('timeupdate', () =>{
        progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
        myProgressbar.value = progress;
});

myProgressbar.addEventListener('change', () =>{
    audioElement.currentTime = myProgressbar.value * audioElement.duration/100;
});
 
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle')
    })
};

let index = 0;
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.addEventListener('click', (e)=>{
            makeAllPlays();
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = `song/Bizzey.mp3`;
            masterSongName.innerText = "Bizzey - Traag ft. Jozo & Kraantje Pappie";
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        })
})
Array.from(document.getElementsByClassName('songPlay1')).forEach((element)=>{
        element.addEventListener('click', (e)=>{
            makeAllPlays();
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = `song/WHOOPTY.mp3`;
            masterSongName.innerText = "CJ - WHOOPTY";
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        })
})
Array.from(document.getElementsByClassName('songPlay2')).forEach((element)=>{
        element.addEventListener('click', (e)=>{
            makeAllPlays();
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            masterSongName.innerText = "Arabic Remix - Khalouni N3ich";
            audioElement.src = `song/Arabic.mp3`;
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        })
})
Array.from(document.getElementsByClassName('songPlay3')).forEach((element)=>{
        element.addEventListener('click', (e)=>{
            makeAllPlays();
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            masterSongName.innerText = "Spice, Sean Paul, Shaggy - Go Down Deh";
            audioElement.src = `song/Spice.mp3`;
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        })
})
Array.from(document.getElementsByClassName('songPlay4')).forEach((element)=>{
        element.addEventListener('click', (e)=>{
            makeAllPlays();
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            masterSongName.innerText = "Kosandra - Miyagi & Andy Panda";
            audioElement.src = `song/Kosandra.mp3`;
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        })
})
Array.from(document.getElementsByClassName('songPlay5')).forEach((element)=>{
        element.addEventListener('click', (e)=>{
            makeAllPlays();
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            masterSongName.innerText = "Joker BGM";
            audioElement.src = `song/Joker.mp3`;
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        })
})
Array.from(document.getElementsByClassName('songPlay6')).forEach((element)=>{
        element.addEventListener('click', (e)=>{
            makeAllPlays();
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = `song/Busta.mp3`;
            masterSongName.innerText = "Busta Rhymes - Touch It";
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        })
})
Array.from(document.getElementsByClassName('songPlay7')).forEach((element)=>{
        element.addEventListener('click', (e)=>{
            makeAllPlays();
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = `song/AUD.mp3`;
            masterSongName.innerText = "Acharuli Popuri - Peaky Blinders";
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        })
})
Array.from(document.getElementsByClassName('songPlay8')).forEach((element)=>{
        element.addEventListener('click', (e)=>{
            makeAllPlays();
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = `song/Afara.mp3`;
            masterSongName.innerText = "Afara e Frig - Mihaita Piticu";
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        })
})