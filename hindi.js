console.log("Welcome to song");

let songIndex = 0;
let audioElement = new Audio('song/Excuses.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressbar = document.getElementById("myProgressbar");
let masterSongName = document.getElementById("masterSongName");
// let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName('songitem'));
let songs = [
    {songName: "Excuses-AP Dhillon", filePath: "song/Rauf.mp3", coverPath: "img/childhood.png"},
    {songName: "Dewaane Hum Nahi Hote", filePath: "song/Beleiver.mp3", coverPath: "img/sathi.png"},
    {songName: "Dilbar", filePath: "song/Let.mp3", coverPath: "img/ummon.png"},
    {songName: "Tujh Mein Rab Dikhta Hai", filePath: "song/Need.mp3", coverPath: "img/maktoub.png"},
    {songName: "Vampire-Korean Mix Hindi", filePath: "song/Ignite.mp3", coverPath: "img/beni.png"},
    {songName: "Illegal Weapon 2.0-Street Dancer", filePath: "song/Legend.mp3", coverPath: "img/taqdeer.png"},
    {songName: "Indian Remix-Teri Meri Yusuf Eksioglu", filePath: "song/Unstoppable.mp3", coverPath: "sai.png"},
    {songName: "Dr Zeus - Woofer", filePath: "song/Lovely.mp3", coverPath: "lovely.png"},
    {songName: "Dil Lutiya - Jazzy B", filePath: "song/into.mp3", coverPath: "into.png"},
    {songName: "Pasoori - Ali Sethi x Shae Gill", filePath: "song/into.mp3", coverPath: "into.png"},
    {songName: "Dil Lutiya - Jazzy B", filePath: "song/into.mp3", coverPath: "into.png"},
    {songName: "Dil Lutiya - Jazzy B", filePath: "song/into.mp3", coverPath: "into.png"},
    {songName: "Dil Lutiya - Jazzy B", filePath: "song/into.mp3", coverPath: "into.png"},
    {songName: "Dil Lutiya - Jazzy B", filePath: "song/into.mp3", coverPath: "into.png"},
    {songName: "Dil Lutiya - Jazzy B", filePath: "song/into.mp3", coverPath: "into.png"},
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
            audioElement.src = `song/Excuses.mp3`;
            masterSongName.innerText = "Excuses-AP Dhillon";
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
            audioElement.src = `song/Dewaane.mp3`;
            masterSongName.innerText = "Dewaane Hum Nahi Hote";
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
            masterSongName.innerText = "DILBAR";
            audioElement.src = `song/Dilbar.mp3`;
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
            masterSongName.innerText = "Tujh Mein Rab Dikhta Hai";
            audioElement.src = `song/Tujh.mp3`;
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
            masterSongName.innerText = "Vampire-Korean Mix Hindi";
            audioElement.src = `song/Vampire.mp3`;
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
            masterSongName.innerText = "Illegal Weapon 2.0-Street Dancer";
            audioElement.src = `song/Illegal.mp3`;
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
            audioElement.src = `song/Indian.mp3`;
            masterSongName.innerText = "Indian Remix-Teri Meri Yusuf Eksioglu";
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
            audioElement.src = `song/Woofer.mp3`;
            masterSongName.innerText = "Dr Zeus - Woofer";
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
            audioElement.src = `song/Jine.mp3`;
            masterSongName.innerText = "Dil Lutiya - Jazzy B";
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        })
})
Array.from(document.getElementsByClassName('songPlay9')).forEach((element)=>{
        element.addEventListener('click', (e)=>{
            makeAllPlays();
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = `song/Pasoori.mp3`;
            masterSongName.innerText = "Pasoori - Ali Sethi x Shae Gill";
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        })
})
Array.from(document.getElementsByClassName('songPlay10')).forEach((element)=>{
        element.addEventListener('click', (e)=>{
            makeAllPlays();
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = `song/Gaj.mp3`;
            masterSongName.innerText = "52 Gaj Ka Daman";
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        })
})
Array.from(document.getElementsByClassName('songPlay11')).forEach((element)=>{
        element.addEventListener('click', (e)=>{
            makeAllPlays();
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = `song/Lut.mp3`;
            masterSongName.innerText = "Lut Gaye-Emraan Hashmi, Yukti";
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        })
})
Array.from(document.getElementsByClassName('songPlay12')).forEach((element)=>{
        element.addEventListener('click', (e)=>{
            makeAllPlays();
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = `song/Dil.mp3`;
            masterSongName.innerText = "Dil Galti Kar Baitha Hai";
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        })
})