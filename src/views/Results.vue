<template>
  <div class="flex-column-center results-container">
    <div class="results">
      <div class="grid-item" :key="item.id" v-for="item in this.$store.state.searchResults.data">
        <img :src="item.album.cover_medium"/>
        <div class="title">{{item.title}}</div>
        <div class="artist">{{item.artist.name}}</div>
        <div class="album">{{item.album.title}}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Playfair+Display|Yrsa&display=swap');

  .results {
    display: grid;
    grid-template-columns: repeat(auto-fit, 250px);
    grid-auto-columns: 400px;
    grid-auto-rows: 400px;
    grid-gap: 10px;
  }
  .grid-item {
    background-color: lightcyan;
    border-radius: 20px;
    padding: 20px;
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
  .results-container {
    width: 100vw;
  }
</style>