console.log("Welcome to song");

let songIndex = 0;
let audioElement = new Audio('ramsong/shambhu.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressbar = document.getElementById("myProgressbar");
let masterSongName = document.getElementById("masterSongName");
// let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName('songitem'));
let songs = [
    {songName: "Har Har Shambhu Shiv Mahadeva", filePath: "ramsong/shambhu.mp3", coverPath: "ramimage/harshambhu.jpg"},
    {songName: "Babam Bam Paradox", filePath: "ramsong/bambam.mp3", coverPath: "ramimage/mahdev.jpg"},
    {songName: "Shree ram janki bathe hai", filePath: "ramsong/ramjanki.mp3", coverPath: "ramimage/jakiimage.jpg"},
    {songName: "Keejo Kesari Ke Laal", filePath: "ramsong/keejolal.mp3", coverPath: "ramimage/keshrilal.jpg"},
    {songName: "Ram Siya Ram (Lyrical) Adipurush", filePath: "ramsong/ramsiyaram.mp3", coverPath: "ramimage/ramsiyaimg.jpg"},
    {songName: "आरंभ है प्रचंड बोले मस्तको के झुंड ", filePath: "ramsong/arambhhai.mp3", coverPath: "ramimage/rachnadimg.jpg"},
    {songName: "Mere Ghar Ram Aaye Hain", filePath: "ramsong/meregharram.mp3", coverPath: "ramimage/mereghaimg.jpg"},
    {songName: "Aasman Ko Chukar Dekha", filePath: "ramsong/aasamako.mp3", coverPath: "ramimage/asakoimg.jpg"},
    {songName: "भारत का बच्चा बच्चा जय श्री राम बोलेगा", filePath: "ramsong/baccharam.mp3", coverPath: "ramimage/rambolega.jpg"},
    {songName: "Jai Shree Ram", filePath: "ramsong/siyasiya.mp3", coverPath: "ramimage/jaishreram.jpg"},
    {songName: "Raam Aayenge || Swati Mishra Bhajan", filePath: "ramsong/ramayenge.mp3", coverPath: "ramimage/ramayenge.jpg"},
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
            audioElement.src = `ramsong/shambhu.mp3`;
            masterSongName.innerText = "Har Har Shambhu";
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
            audioElement.src = `ramsong/bambam.mp3`;
            masterSongName.innerText = "Babam Bam Paradox";
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
            masterSongName.innerText = "Shree ram janki bathe hai";
            audioElement.src = `ramsong/ramjanki.mp3`;
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
            masterSongName.innerText = "Keejo Kesari Ke Laal";
            audioElement.src = `ramsong/keejolal.mp3`;
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
            masterSongName.innerText = "Ram Siya Ram (Lyrical) Adipurush";
            audioElement.src = `ramsong/ramsiyaram.mp3`;
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
            masterSongName.innerText = "आरंभ है प्रचंड बोले मस्तको के झुंड";
            audioElement.src = `ramsong/arambhhai.mp3`;
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
            audioElement.src = `ramsong/meregharram.mp3`;
            masterSongName.innerText = "Mere Ghar Ram Aaye Hain";
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
            audioElement.src = `ramsong/aasamako.mp3`;
            masterSongName.innerText = "Aasman Ko Chukar Dekha";
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
            audioElement.src = `ramsong/baccharam.mp3`;
            masterSongName.innerText = "भारत का बच्चा बच्चा जय श्री राम बोलेगा";
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
        audioElement.src = `ramsong/siyasiya.mp3`;
        masterSongName.innerText = "Jai Shree Ram";
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
        audioElement.src = `ramsong/ramayenge.mp3`;
        masterSongName.innerText = "Raam Aayenge || Swati Mishra Bhajan";
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})