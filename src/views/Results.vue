<template>
  <div class="results-container">
    <div class="nav">
      <Logo name="Deezer Vue"></Logo>
      <div class="link" @click="$router.go(-1)">SEARCH AGAIN</div>
    </div>
    <div class="results">
      <div class="grid-item" :key="item.id" v-for="item in items">
        <img :src="item.album.cover_medium"/>
        <div class="title">{{item.title}}</div>
        <div class="artist">{{item.artist.name}}</div>
        <div class="album">{{item.album.title}}</div>
        <audio controls class="audio">
          <source :src="item.preview" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
      </div>
      <div class="load-more" @click="loadMore">Load more...</div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Logo from '../components/Logo'
  export default {
    components: {
      Logo
    },
    data:()=>({
      results: {},
      items: []
    }),
    methods: {
      loadMore() {
        console.log('Old Results.vue', this.results)
        console.log('Old Results.vue', this.items)
        if (this.results.next) {
          axios.get(`${this.$store.getters.getCorHackAPI}${this.results.next}`).then(res => {
            this.results = res.data
            this.items.push(...res.data.data)
            console.log('New Results.vue', this.results)
            console.log('New Results.vue', this.items)
            console.log('Results.vue', res)
          })
        } else {
          let loadMoreDiv = document.querySelector(".load-more")
          loadMoreDiv.style.display = "none"
        }
      }
    },
    mounted() {
      this.results = this.$store.getters.getResults
      this.items =this.results.data
      // console.log('Results.vue', this.results.next)
      // console.log('Results.vue', this.items)
      window.addEventListener("scroll", function () {
        let nav = document.querySelector(".nav")
        if (window.scrollY>50) {
          nav.style.position = "fixed"
        } else {
          nav.style.position = ""
        }
      })
    }
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Playfair+Display|Yrsa&display=swap');\
  .quickfix {
    height: 8vh;
    width: 200px;
  }
  .results {
    top: 100px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
    grid-gap: 10px;
  }
  .grid-item {
    background-color: lightcyan;
    border-radius: 5px;
    padding: 0 10px;
  }
  .title {
    font-family: 'Playfair Display', serif;
    font-size: 18px;
  }
  .artist {
    color: grey;
    font-size: 14px;
    font-family: 'Yrsa', serif;
  }
  .album {
    font-size: 16px;
    font-family: 'Yrsa', serif;
  }
  .audio {
    width: 100px;
  }
  .results-container {

  }
  .load-more {
    bottom:0;
    width: 100vw;
    background-color: coral;
    text-align: center;
    color: whitesmoke;
  }
  .load-more:hover {
    cursor: pointer;
    color: lightsalmon;
  }
  .nav {
    opacity: 0.9;
    z-index: 10;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    height: 50px;
    align-items: center;
    background: #fc4a1a;
    background: -webkit-linear-gradient(to right, #f7b733, #fc4a1a);
    background: linear-gradient(to right, #f7b733, #fc4a1a);
  }
  .link {
    color: whitesmoke;
    font-family: "Open Sans", sans-serif;
  }
  .link:hover {
    color: lightyellow;
    cursor: pointer;
  }
</style>