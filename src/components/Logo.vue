<template>
    <div class="logo">
        {{name}}
    </div>
</template>
<script>
    export default {
        props: {
            name: {default: "Vue"}
        }
    }
</script>
<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Lobster&display=swap');
    .logo {
        font-family: 'Lobster', cursive;
        font-size: 40px;
        color: whitesmoke;
        border-color: red;
        margin: 50px 0;
    }
</style>