const vm = new Vue({
    el:'#app',
    data:{
        name: 'tiago',
        animes: [],
        anime: {},
        loadImg: true,
        load: true, 
        modal :false,
    },

    created(){
        this.modal = false;
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
            this.anime = anime;
            this.modal = true
        },
        loadImage(){
           this.loadImg = false;
        },
        handleCloseModal(){
            this.modal = false;
        }
    }
})