<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
  * {
    padding: 0;
    margin: 0;
  }
  .flex-column-center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .flex-row-center {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  body {
    overflow-x: hidden;
  }
</style>
