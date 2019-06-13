<template>
  <div class="searchBoxContainer flex-column-center">
    <Logo name="Deezer Vue"></Logo>
    <SearchBox></SearchBox>
  </div>
</template>

<script>
  import Logo from '../components/Logo'
  import SearchBox from '../components/SearchBox'
  export default {
    components: {
      SearchBox,
      Logo
    },
    data: () => ({
    })
  }
</script>

<style scoped>
  .searchBoxContainer {
    width: 100vw;
    height: 100vh;
    background-image: url("../assets/searchbg.jpg");
    background-size: cover;
    justify-content: center;
    z-index:-1;
    animation: AnimSearchBoxLogo 1s ease forwards;
  }
  @keyframes AnimSearchBoxLogo {
    from { padding-top: 33vh }
    to { padding-top: 0 }
  }
</style>