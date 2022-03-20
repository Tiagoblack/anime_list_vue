const vm = new Vue({
    el:'#app',
    data:{
        name: 'tiago',
        animes: [],
        loadImg: true,
        load: true
    },

    created(){
        (async()=>{
            this.load = true
            const req = await fetch(`https://api.jikan.moe/v3/anime/1/recommendations`);
            const res = await req.json();
            this.animes = res.recommendations;
            this.load = false;
        })();
        
    },

    methods:{
        handleAnimeModal(anime){
            console.log(anime);
        },
        loadImage(){
           this.loadImg = false;
        }
    }
})