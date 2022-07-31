console.log("Welcome to song");

let songIndex = 0;
let audioElement = new Audio('song/Faded.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressbar = document.getElementById("myProgressbar");
let masterSongName = document.getElementById("masterSongName");
// let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName('songitem'));
let songs = [
    {songName: "Faded - Alan Walker", filePath: "song/Faded.mp3", coverPath: "faded(6).png"},
    {songName: "Imagine Dragons - Believer", filePath: "song/Beleiver.mp3", coverPath: "beleiver.png"},
    {songName: "Alec Benjamin - Let Me Down Slowly", filePath: "song/Let.mp3", coverPath: "letme.png"},
    {songName: "Mihaela Marinova - Need You", filePath: "song/Need.mp3", coverPath: "need.png"},
    {songName: "K-391 & Alan Walker - Ignite", filePath: "song/Ignite.mp3", coverPath: "ignite.png"},
    {songName: "Legends Never Die", filePath: "song/Legend.mp3", coverPath: "legend.png"},
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
            audioElement.src = `song/Faded.mp3`;
            // masterSongName.innerText = songs[songIndex].songName;
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
            audioElement.src = `song/Believer.mp3`;
            masterSongName.innerText = "Imagine Dragons - Believer";
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
            masterSongName.innerText = "Alec Benjamin - Let Me Down Slowly";
            audioElement.src = `song/Let.mp3`;
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
            masterSongName.innerText = "Mihaela Marinova - Need You";
            audioElement.src = `song/Need.mp3`;
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
            masterSongName.innerText = "K-391 & Alan Walker - Ignite";
            audioElement.src = `song/Ignite.mp3`;
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
            masterSongName.innerText = "Legends Never Die";
            audioElement.src = `song/Legend.mp3`;
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