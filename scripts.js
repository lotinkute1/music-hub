

//index.html

const $=document.querySelector.bind(document);
const $$=document.querySelectorAll.bind(document);
const audio =$("#audio");
const main__left_mid=$(".main__left-mid");
const playlist_top10 =$(".playlist-top10__songs");
const btnPlay=$(".play-pause");
const btnNext=$(".next");
const btnPrev=$(".previous");
const playsong_box=$(".playsong-box__songplay");
const playsong_ava=$(".playsong-box__songava img");
const playsong_name=$(".playsong-box__songname");
const playsong_singer=$(".playsong-box__singer");
const btnRamdom=$(".random");
const btnRePlay=$(".replay");
const progress=$(".progress-bar .progress");
const progress_bar=$(".progress-bar");
const boxAnimation=$(".playsong-box__animation");
const currentTime=$(".currentTime");
const durationTime=$(".durationTime");
const header=$(".header");
// top10.html
const top10__list_songs=$(".top10__list-songs");

function checkHTML() {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    return page;
};


const app= {
    currentSongIndex:0,
    isPlaying:false,
    isRandom:false,
    isRePlay:false,
    randomHis:[],
    
    song:[
        {   id:'001',
            name:'Như bài tình ca',
            tacGia:'Vinh Khuất',
            theLoai:'pop',
            diaChi:'./assets/songs/song1.mp3',
            img:'./assets/songs/song1.jfif',
            luotNghe:2180,
            quocGia:'Việt Nam'
        },
        {   id:'002',
            name:'Drunk',
            tacGia:'Keshi',
            theLoai:'Ballad',
            diaChi:'./assets/songs/song2.mp3',
            img:'./assets/songs/song2.jfif',
            luotNghe:4290,
            quocGia:'Korean'
        },
        {   id:'003',
            name:'She',
            tacGia:'Jami Soul',
            theLoai:'Jazz',
            diaChi:'./assets/songs/song3.mp3',
            img:'./assets/songs/song3.jfif',
            luotNghe:5000,
            quocGia:'Japan'
        },
        {   id:'004',
            name:'Moon and Stars',
            tacGia:'Moon and Stars',
            theLoai:'Hiphop',
            diaChi:'./assets/songs/song4.mp3',
            img:'./assets/songs/song4.jfif',
            luotNghe:2333,
            quocGia:'American'
        },
        {   id:'005',
            name:'Lời nói điêu trên môi',
            tacGia:'Đỗ Nguyên Phúc',
            theLoai:'Ballad',
            diaChi:'./assets/songs/song5.mp3',
            img:'./assets/songs/song5.jfif',
            luotNghe:3210,
            quocGia:'Việt Nam'
        },
        
        {   id:'006',
            name:'Lemon',
            tacGia:'Yonezu',
            theLoai:'Pop',
            diaChi:'./assets/songs/song6.mp3',
            img:'./assets/songs/song6.jfif',
            luotNghe:1322,
            quocGia:'Japan'
        },
        {   id:'007',
            name:'Hoang hon',
            tacGia:'Cheung',
            theLoai:'Ballad',
            diaChi:'./assets/songs/song7.mp3',
            img:'./assets/songs/song7.jfif',
            luotNghe:4200,
            quocGia:'Việt Nam'
        },
        {   id:'008',
            name:'Danh mat em',
            tacGia:'Tinh Lung',
            theLoai:'pop',
            diaChi:'./assets/songs/song8.mp3',
            img:'./assets/songs/song8.jfif',
            luotNghe:3042,
            quocGia:'Việt Nam'
        },
        {   id:'009',
            name:'Chờ anh nhé',
            tacGia:'Nguyễn Hoàng Dũng',
            theLoai:'Ballad',
            diaChi:'./assets/songs/song9.mp3',
            img:'./assets/songs/song9.jfif',
            luotNghe:1200,
            quocGia:'Việt Nam'
        },
        {   id:'0010',
            name:'Kẹo',
            tacGia:'Andree Right Hand',
            theLoai:'pop',
            diaChi:'./assets/songs/song10.mp3',
            img:'./assets/songs/song10.jfif',
            luotNghe:4200,
            quocGia:'Việt Nam'
        },
        {   id:'0011',
            name:'Cilu',
            tacGia:'Jkid',
            theLoai:'pop',
            diaChi:'./assets/songs/song11.mp3',
            img:'./assets/songs/song11.jfif',
            luotNghe:3800,
            quocGia:'Việt Nam'
        },
        {   id:'0012',
            name:'Không sao mà em đây rồi',
            tacGia:'Suni Hạ Linh',
            theLoai:'Ballad',
            diaChi:'./assets/songs/song12.mp3',
            img:'./assets/songs/song12.jfif',
            luotNghe:2200,
            quocGia:'Việt Nam'
        },
        {   id:'0013',
            name:'Sinh ra đã là thứ đối lập',
            tacGia:'Emcee',
            theLoai:'pop',
            diaChi:'./assets/songs/song13.mp3',
            img:'./assets/songs/song13.jfif',
            luotNghe:1000,
            quocGia:'Việt Nam'
        },
        {   id:'0014',
            name:'Internet Love',
            tacGia:'Hnhngan',
            theLoai:'pop',
            diaChi:'./assets/songs/song14.mp3',
            img:'./assets/songs/song14.jfif',
            luotNghe:2200,
            quocGia:'Việt Nam'
        },
        {   id:'0015',
            name:'Em xinh',
            tacGia:'Bray',
            theLoai:'pop',
            diaChi:'./assets/songs/song15.mp3',
            img:'./assets/songs/song15.PNG',
            luotNghe:3020,
            quocGia:'Việt Nam'
        },
        {   id:'0016',
            name:'7 Years',
            tacGia:'Lukas Graham',
            theLoai:'pop',
            diaChi:'./assets/songs/song16.mp3',
            img:'./assets/songs/song16.jpg',
            luotNghe:3020,
            quocGia:'American'
        },
        {   id:'0017',
            name:'Baby',
            tacGia:'Justin Bieber',
            theLoai:'pop',
            diaChi:'./assets/songs/song17.mp3',
            img:'./assets/songs/song17.jpg',
            luotNghe:3020,
            quocGia:'American'
        },
        {   id:'0018',
            name:'Closer',
            tacGia:'The Chainsmokers',
            theLoai:'Ballad',
            diaChi:'./assets/songs/song18.mp3',
            img:'./assets/songs/song18.png',
            luotNghe:3020,
            quocGia:'American'
        },
        {   id:'0019',
            name:'Shape of you',
            tacGia:'Ed Sheeran',
            theLoai:'pop',
            diaChi:'./assets/songs/song19.mp3',
            img:'./assets/songs/song19.jpg',
            luotNghe:3020,
            quocGia:'American'
        },
        {   id:'0020',
            name:'Roar',
            tacGia:'Katy Perry',
            theLoai:'pop',
            diaChi:'./assets/songs/song20.mp3',
            img:'./assets/songs/song20.jpg',
            luotNghe:3020,
            quocGia:'American'
        },
        {   id:'0021',
            name:'Sorry',
            tacGia:'Justin Bieber',
            theLoai:'pop',
            diaChi:'./assets/songs/song21.mp3',
            img:'./assets/songs/song21.jpg',
            luotNghe:3020,
            quocGia:'American'
        },
        {   id:'0022',
            name:'Yummi',
            tacGia:'Justin Bieber',
            theLoai:'pop',
            diaChi:'./assets/songs/song22.mp3',
            img:'./assets/songs/song22.png',
            luotNghe:3020,
            quocGia:'American'
        },
        {   id:'0023',
            name:'Bang Bang Bang',
            tacGia:'BigBang',
            theLoai:'pop',
            diaChi:'./assets/songs/song23.mp3',
            img:'./assets/songs/song23.jpg',
            luotNghe:3020,
            quocGia:'Korean'
        },
        {   id:'0024',
            name:'DDU-DU DDU-DU',
            tacGia:'BLACKPINK',
            theLoai:'pop',
            diaChi:'./assets/songs/song24.mp3',
            img:'./assets/songs/song24.jpg',
            luotNghe:3020,
            quocGia:'Korean'
        },
        {   id:'0025',
            name:'Fake Love',
            tacGia:'BTS',
            theLoai:'pop',
            diaChi:'./assets/songs/song25.mp3',
            img:'./assets/songs/song25.jpg',
            luotNghe:3020,
            quocGia:'Korean'
        },
        {   id:'0026',
            name:'Stay With Me',
            tacGia:'Park Chanyeol',
            theLoai:'Ballad',
            diaChi:'./assets/songs/song26.mp3',
            img:'./assets/songs/song26.jpg',
            luotNghe:3020,
            quocGia:'Korean'
        },
        {   id:'0027',
            name:'Mượn Rượu Tỏ Tình',
            tacGia:'BIGDADDY, EMILY',
            theLoai:'Hiphop',
            diaChi:'./assets/songs/song27.mp3',
            img:'./assets/songs/song27.jpg',
            luotNghe:3020,
            quocGia:'Việt Nam'
        },
        {   id:'0028',
            name:'Chân ái',
            tacGia:'ORANGE, KHÓI ',
            theLoai:'Ballad',
            diaChi:'./assets/songs/song28.mp3',
            img:'./assets/songs/song28.jpg',
            luotNghe:3020,
            quocGia:'Việt Nam'
        },
        {   id:'0029',
            name:'Dù Cho Mai Về Sau',
            tacGia:'Bui Truong Linh',
            theLoai:'Ballad',
            diaChi:'./assets/songs/song29.mp3',
            img:'./assets/songs/song29.jpg',
            luotNghe:3020,
            quocGia:'Việt Nam'
        },
        {   id:'0030',
            name:'Muộn rồi mà sao còn',
            tacGia:'Sơn Tùng MTP',
            theLoai:'pop',
            diaChi:'./assets/songs/song30.mp3',
            img:'./assets/songs/song30.jpg',
            luotNghe:7450,
            quocGia:'Việt Nam'
        },
        {   id:'0031',
            name:'Đau để trưởng thành',
            tacGia:'OnlyC',
            theLoai:'Ballad',
            diaChi:'./assets/songs/song31.mp3',
            img:'./assets/songs/song31.jpg',
            luotNghe:3020,
            quocGia:'Việt Nam'
        },
        {   id:'0032',
            name:'Bật nhạc lên',
            tacGia:'Hiếu thứ hai',
            theLoai:'pop',
            diaChi:'./assets/songs/song32.mp3',
            img:'./assets/songs/song32.jpg',
            luotNghe:3020,
            quocGia:'Việt Nam'
        },
        {   id:'0033',
            name:'Sóng gió',
            tacGia:'K-ICM, JACK',
            theLoai:'pop',
            diaChi:'./assets/songs/song33.mp3',
            img:'./assets/songs/song33.jpg',
            luotNghe:3020,
            quocGia:'Việt Nam'
        },
        {   id:'0034',
            name:'Anh thanh niên',
            tacGia:'HuyR',
            theLoai:'pop',
            diaChi:'./assets/songs/song34.mp3',
            img:'./assets/songs/song34.jpg',
            luotNghe:3020,
            quocGia:'Việt Nam'
        },
        {   id:'0035',
            name:'Thằng điên',
            tacGia:'JUSTATEE, PHƯƠNG LY',
            theLoai:'pop',
            diaChi:'./assets/songs/song35.mp3',
            img:'./assets/songs/song35.jpg',
            luotNghe:3020,
            quocGia:'Việt Nam'
        },
        {   id:'0036',
            name:'Phải chăng em đã yêu',
            tacGia:'JUKY SAN',
            theLoai:'pop',
            diaChi:'./assets/songs/song36.mp3',
            img:'./assets/songs/song36.jpg',
            luotNghe:3020,
            quocGia:'Việt Nam'
        },
        {   id:'0037',
            name:'Dừng lại đây thôi',
            tacGia:'Hoa Vinh',
            theLoai:'pop',
            diaChi:'./assets/songs/song37.mp3',
            img:'./assets/songs/song37.jpg',
            luotNghe:3020,
            quocGia:'Việt Nam'
        },
        {   id:'0038',
            name:'Hoa nở không màu',
            tacGia:'Hoài Lâm',
            theLoai:'Ballad',
            diaChi:'./assets/songs/song38.mp3',
            img:'./assets/songs/song38.jpg',
            luotNghe:3020,
            quocGia:'Việt Nam'
        },
        {   id:'0039',
            name:'Khóc cùng em',
            tacGia:'MrSiro',
            theLoai:'Ballad',
            diaChi:'./assets/songs/song39.mp3',
            img:'./assets/songs/song39.jpg',
            luotNghe:3020,
            quocGia:'Việt Nam'
        },
        {   id:'0040',
            name:'Nắm Đôi Bàn Tay',
            tacGia:'Kay Trần',
            theLoai:'Ballad',
            diaChi:'./assets/songs/song40.mp3',
            img:'./assets/songs/song40.jpg',
            luotNghe:8000,
            quocGia:'Việt Nam'
        },
        {   id:'0041',
            name:'Thích Em Hơi Nhiều',
            tacGia:'Wren Evans',
            theLoai:'pop',
            diaChi:'./assets/songs/song41.mp3',
            img:'./assets/songs/song41.jpg',
            luotNghe:7100,
            quocGia:'Việt Nam'
        }


    ],
    songCountryFilter:[],
    songTop5: [],
    songTop100:[],
    filterAll: function(country){
        console.log("cc2");
        if(country=="VN"){
            this.songCountryFilter=this.song.filter(function (song) {
                return song.quocGia=="Việt Nam";
            })
        }else if(country=="AU"){
            this.songCountryFilter=this.song.filter(function (song) {
                return song.quocGia=="American";
            })
        }else if(country=="CA"){
            this.songCountryFilter=this.song.filter(function (song) {
                return song.quocGia=="Korean"||song.quocGia=="Japan";
            })
        }

    },
    filterTop100: function(country){
        this.songTop100=this.song.sort(function (a, b) {
            return b.luotNghe -  a.luotNghe ;
        }).slice();//slice phương thức giúp copy từ array này sang array khác của ES6
        if(country=="VN"){
            this.songTop100=this.songTop100.filter(function (song) {
                return song.quocGia=="Việt Nam";
            })
        }else if(country=="AU"){
            this.songTop100=this.songTop100.filter(function (song) {
                return song.quocGia=="American";
            })
        }else if(country=="CA"){
            this.songTop100=this.songTop100.filter(function (song) {
                return song.quocGia=="Korean"||song.quocGia=="Japan";
            })
        }
        this.resetSongAr();
        
    } ,
    filterTop5: function(){
        this.songTop5=this.song.sort(function (a, b) {
            return b.luotNghe -  a.luotNghe ;
        }).slice(0,5);//slice phương thức giúp copy từ array này sang array khác của ES6
        this.resetSongAr();
    } ,
    resetSongAr: function(){
        this.song.sort(function (a, b) {
            return a.id - b.id  ;
        })
    },
    // tao ra thuộc tính cho app
    defineproperties:function(){
        Object.defineProperty(this,'currentSong',{
            get:function(){
                return this.song[this.currentSongIndex];
            }
        })
    },
    loadCurrentSong: function(){
        audio.src=this.currentSong.diaChi;
        
        playsong_ava.src=this.currentSong.img;
        playsong_name.innerHTML=this.currentSong.name;
        playsong_singer.innerHTML=this.currentSong.tacGia;
        
    },
    
    nextSong: function(){
        this.currentSongIndex++;
            if(this.currentSongIndex>=this.song.length){
                this.currentSongIndex=0;
            }
            this.loadCurrentSong();
    },
    prevSong: function(){
        this.currentSongIndex--;
            if(this.currentSongIndex<0){
                this.currentSongIndex=this.song.length-1;
            }
            this.loadCurrentSong();
    },
    replaySong: function(){
        audio.play();
    },
    randomSong: function(){
        let randomIndex ;
        console.log(this.randomHis);
        if(this.randomHis.length==this.song.length) this.randomHis=[];//clear nếu đã chơi hết các bài trong ds
       
        
        do {
            randomIndex=Math.floor(Math.random()*100);
           
        }while( randomIndex>this.song.length-1||this.randomHis.includes(randomIndex));
        
        this.randomHis.push(randomIndex);
        this.currentSongIndex=randomIndex;

        this.loadCurrentSong();
    },
    eventHandler: function(){
        const _this=this;
        headerIsHided=false;
        window.addEventListener("scroll",()=>{
            let scrollH=window.scrollY||document.documentElement.scrollTop;
            if(scrollH>70 && !headerIsHided){
                header.classList.add("header--hide");
                headerIsHided=true;
            }
            if(scrollH<=70 && headerIsHided){
                header.classList.remove("header--hide");
                headerIsHided=false;
            }
            
        })

        const top10SongBox=$$( ".top10__list-song");
        for (const song of top10SongBox) {
            song.onclick=function(e){
                const songNode=e.target.closest('.top10__list-song')
                const songId=Number(songNode.getAttribute("data-index"));
                _this.currentSongIndex=songId-1;
                console.log(songId);
                _this.loadCurrentSong();
                audio.play();
            }
        }
        
        //song box click
        const songBox=$$(".main__item");
        for (const song of songBox) {
            song.onclick=function(e){
                const songNode=e.target.closest('.main__item')
                const songId=Number(songNode.getAttribute("data-index"));
                _this.currentSongIndex=songId-1;
                _this.loadCurrentSong();
                audio.play();
            }
        }
        
        //songtop click 
        const songBoxTop10=$$( ".playlist-top10__song");
        for(const song of songBoxTop10){
            
            song.onclick=function(e){
                
                const songNode=e.target.closest('.playlist-top10__song');
                const songId=Number(songNode.getAttribute("data-index"));
                _this.currentSongIndex=songId-1;
                _this.loadCurrentSong();
                audio.play();
            }
        }

        btnPlay.onclick=function(){
            if(_this.isPlaying){
                audio.pause();
            }else audio.play();
            
        }
        audio.onplay=function(){
            _this.isPlaying=true;
            playsong_box.classList.add("playing");
            boxAnimation.classList.add("pba--animation");
        }
        audio.onpause=function(){
            _this.isPlaying=false;
            playsong_box.classList.remove("playing");
            boxAnimation.classList.remove("pba--animation");
            
        }
        btnNext.onclick=function(){
            if(_this.isRandom){
                _this.randomSong();
                
            }else{
                _this.nextSong();
            } 
            audio.play();
            
        }
        btnPrev.onclick=function(){
            _this.prevSong();
            audio.play();
        }
        btnRePlay.onclick=function(){
            _this.isRePlay=!_this.isRePlay;
            btnRePlay.classList.toggle("replay--active");
        }
        btnRamdom.onclick=function(){
            _this.isRandom=!_this.isRandom;
            btnRamdom.classList.toggle("random--active");
            if(_this.isRandom)    _this.randomHis.push(_this.currentSongIndex);
            
        }
        audio.onended=function(){
            if(_this.isRePlay){
                _this.replaySong();
            }else btnNext.click();
        }
        audio.ontimeupdate=function(){
            if(!_this.isPlaying){
                progress.value=0;
            }else {
                const seekTime=audio.currentTime*100/audio.duration;
                progress.style.width=`${seekTime}%`;

                const totalMin=Math.floor( audio.duration/60 );
                const totalSec=Math.round(audio.duration%60);
                if(!isNaN(audio.duration)){
                    if(totalSec<10){
                        durationTime.innerHTML= `${totalMin}:0${totalSec}` ;
                    }else{
                        durationTime.innerHTML=`${totalMin}:${totalSec}`;
                    }
                }

                const currentMin=Math.floor( audio.currentTime/60 );
                const currentSec=Math.round(audio.currentTime%60);

                if(currentSec<10){
                    currentTime.innerHTML= `0:0${currentSec}` ;
                }else{
                    currentTime.innerHTML=`${currentMin}:${currentSec}`;
                }
                

            }
            
        }
        progress_bar.onclick=function(e){
            const barWidth=progress_bar.clientWidth;
            const slickedOffsetX= e.offsetX;
            const songDuration=audio.duration;
            audio.currentTime=(slickedOffsetX/barWidth)*songDuration;
            if(!_this.isPlaying) btnPlay.click();
            
        }

        
    },
    render:function(){
    
        
       
        
        if(checkHTML()=="index.html"||checkHTML()=="allmusic.html"||checkHTML()=="allmusicAU.html"||checkHTML()=="allmusicCA.html"||checkHTML()=="allmusicVN.html"){
            let html;
            if(checkHTML()=="allmusicCA.html")  this.filterAll("CA");
            else if(checkHTML()=="allmusicVN.html") this.filterAll("VN");
                else if(checkHTML()=="allmusicAU.html") this.filterAll("AU");
            
            if(checkHTML()!="index.html" && checkHTML()!="allmusic.html"){
                console.log("cc");
                html= this.songCountryFilter.map((song,index) =>{
                    return `
                    <div class="main__item " data-index="${song.id}">
                        <img src="${song.img}" alt="">
                        <div class="main__item-text"> ${song.name}</div>
                    </div>
                    `
                });
            }else{
                
                html= this.song.map((song,index) =>{
                    return `
                    <div class="main__item " data-index="${song.id}">
                        <img src="${song.img}" alt="">
                        <div class="main__item-text"> ${song.name}</div>
                    </div>
                    `
                });
            }
            
    
            
            main__left_mid.innerHTML = html.join('\n');
            this.filterTop5();
            const htmlTop5=this.songTop5.map((song,index) =>{
    
                return `
                <div class="playlist-top10__song" data-index="${song.id}">
                <div class="stt set-index">${index+1}</div>
                <div class="img-song set-index">
                    <img src="${song.img}" alt="">
                </div>
                <div class="info-song set-index">
                    <p class="info-song__namesong">${song.name}</p>
                    <p class="info-song__singer">${song.tacGia}</p>
                </div>
                <div class="icon-eyes set-index"><i class="fa fa-eye" aria-hidden="true"></i></div>
                <div class="views set-index">${song.luotNghe}</div>
                </div>
                `
            });
            playlist_top10.innerHTML =htmlTop5.join('\n');
            
        }


        if(checkHTML()=="top10.html"||checkHTML()=="top10VN.html"||checkHTML()=="top10AU.html"||checkHTML()=="top10CA.html"){
            if(checkHTML()=="top10.html") this.filterTop100();
            else if(checkHTML()=="top10VN.html") this.filterTop100("VN");
                else if(checkHTML()=="top10AU.html") this.filterTop100("AU");
                    else this.filterTop100("CA");
            console.log(this.songTop100);
            const htmlTop100=this.songTop100.map((song,index)=>{
                return `
                <a href="#" class="top10__list-song" data-index="${song.id}">
                    <div class="songs__serial ">${index+1}</div>
                    <div class="songs__img">
                        <img src="${song.img}" alt="">
                    </div>
                    <div class="songs__info">
                        <div class="songs__info-name-song">${song.name}</div>
                        <div class="songs__info-singer">${song.tacGia}</div>
                    </div>
    
                    <div class="songs__plays">${song.luotNghe}</div>
                    <div class="songs__icon-action">
                        <!-- like/ not : songs__icon-action--liked -->
                        <i class="action__like-empty far fa-heart"></i>
                        <i class="action__like-fill fas fa-heart"></i>
                    </div>
                </a>
                `
            })
            
            top10__list_songs.innerHTML=htmlTop100.join('\n');
            
        }
        
    },
    start: function(){
        this.defineproperties();
       
        this.render();
        this.loadCurrentSong();
        this.eventHandler();
        
        
        
        
    }
}

app.start();
