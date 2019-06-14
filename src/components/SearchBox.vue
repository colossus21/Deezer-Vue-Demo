<template>
    <div class="wrap">
        <div class="search">
            <input v-model="searchTerm" type="text" class="searchTerm" @keyup.enter="search" placeholder="Search your favourite music...">
            <button @click="search" class="searchButton">
                <!--Search Icon-->
                <svg class="svg-icon" viewBox="0 0 20 20">
                    <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        data:()=>({
            searchTerm:""
        }),
        methods: {
            search() {
                let search = document.querySelector(".svg-icon")
                search.classList.add("animate-search")
                this.$store.commit('setSearchTerm', this.searchTerm)
                this.$store.dispatch('searchTrack').then(res => {
                    this.$emit('resultsFound')
                    console.log('SearchBox.vue', res)
                }).catch(err => {
                    search.classList.remove("animate-search")
                    alert(err)
                })
            }
        }
    }
</script>

<style scoped>
    .search {
        width: 100%;
        position: relative;
        display: flex;
    }

    .searchTerm {
        width: 100%;
        border: 3px solid orangered;
        border-right: none;
        padding: 5px;
        height: 40px;
        border-radius: 5px 0 0 5px;
        outline: none;
        color: lightsalmon;
    }

    .searchTerm:focus{
        color: orangered;
    }

    .searchButton {
        width: 50px;
        height: 56px;
        border: 1px solid orangered;
        background: orangered;
        text-align: center;
        color: #fff;
        border-radius: 0 5px 5px 0;
        cursor: pointer;
        font-size: 20px;
    }

    .wrap{
        width: 30%;
    }

    /*Search Icon*/

    .svg-icon {
        width: 1em;
        height: 1em;
    }

    .svg-icon path,
    .svg-icon polygon,
    .svg-icon rect {
        fill: white;
    }

    .svg-icon circle {
        stroke: white;
        stroke-width: 1;
    }

    .svg-icon:hover {
        stroke: lightyellow;
    }

    .animate-search {
        animation: AnimateSearch 1s infinite linear;
    }

    @keyframes AnimateSearch {
        1%,33% { stroke: white; transform: translateY(0px) }
        33%, 66% { stroke: lightgrey; transform: translateY(2px) }
        66%, 99% { stroke: slategrey; transform: translateY(-2px) }
        /*66.66%, 100% { stroke: lightblue; transform: translateY(2px) }*/
    }
</style>