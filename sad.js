console.log("Welcome to song");

let songIndex = 0;
let audioElement = new Audio('song/Rauf.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressbar = document.getElementById("myProgressbar");
let masterSongName = document.getElementById("masterSongName");
// let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName('songitem'));
let songs = [
    {songName: "Rauf & Faik - childhood", filePath: "song/Rauf.mp3", coverPath: "img/childhood.png"},
    {songName: "YAMA BUDDHA - SATHI", filePath: "song/Beleiver.mp3", coverPath: "img/sathi.png"},
    {songName: "Ummon Hiyonat", filePath: "song/Let.mp3", coverPath: "img/ummon.png"},
    {songName: "Mehdi Mouelhi - Maktoub", filePath: "song/Need.mp3", coverPath: "img/maktoub.png"},
    {songName: "Beni Neden Sevmedin", filePath: "song/Ignite.mp3", coverPath: "img/beni.png"},
    {songName: "HELLO !!", filePath: "song/Legend.mp3", coverPath: "img/taqdeer.png"},
    {songName: "Sia - Unstoppable", filePath: "song/Unstoppable.mp3", coverPath: "sai.png"},
    {songName: "Billie Eilish, Khalid - lovely", filePath: "song/Lovely.mp3", coverPath: "lovely.png"},
    {songName: "Witt Lowry - Into Your Arms", filePath: "song/into.mp3", coverPath: "into.png"},
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
            audioElement.src = `song/Rauf.mp3`;
            masterSongName.innerText = "Rauf & Faik - childhood";
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
            audioElement.src = `song/Yama.mp3`;
            masterSongName.innerText = "YAMA BUDDHA - SATHI";
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
            masterSongName.innerText = "Ummon Hiyonat";
            audioElement.src = `song/Ummon.mp3`;
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
            masterSongName.innerText = "Mehdi Mouelhi - Maktoub";
            audioElement.src = `song/AUD2411.mp3`;
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
            masterSongName.innerText = "Beni Neden Sevmedin";
            audioElement.src = `song/beni.mp3`;
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
            masterSongName.innerText = "HELLO !!";
            audioElement.src = `song/HELLO.mp3`;
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
            audioElement.src = `song/Unstoppable.mp3`;
            masterSongName.innerText = "Sia - Unstoppable";
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
            audioElement.src = `song/Lovely.mp3`;
            masterSongName.innerText = "Billie Eilish, Khalid - lovely";
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
            audioElement.src = `song/into.mp3`;
            masterSongName.innerText = "Witt Lowry - Into Your Arms";
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        })
})