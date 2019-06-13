<template>
  <div class="searchBoxContainer flex-column-center">
    <Logo name="Deezer Vue"></Logo>
    <SearchBox @resultsFound="showResults"></SearchBox>
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
    methods: {
      showResults() {
        let searchBox = document.querySelector(".searchBoxContainer")
        searchBox.classList.add("exitSearchBox")
        setTimeout(() => {
          this.$router.push({name: 'results'})
        }, 1000)
      }
    }
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
  .exitSearchBox {
    animation: AnimSearchBoxLogoExit 1s ease forwards;
  }
  @keyframes AnimSearchBoxLogo {
    from { padding-top: 33vh }
    to { padding-top: 0 }
  }
  @keyframes AnimSearchBoxLogoExit {
    from { padding-top: 0; opacity: 1 }
    to { padding-top: 33vh; opacity: 0 }
  }
</style>