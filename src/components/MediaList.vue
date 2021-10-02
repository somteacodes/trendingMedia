<template>
 <div class="relative">
      <div class="h-screen w-full flex justify-center items-center absolute top-0" v-if="movieList.length<1">
        <p>loading...</p>
      </div>

      
    <div class="grid grid-cols-2 gap-2 p-2">

        <!-- movie card item -->
      <div 
   
      class="bg-white h-72 relative cursor-pointer moveup-zoomin  sm:h-96" v-for="(item,key) in movieList" :key="key"
         @click="goToMovie(item,key)"
      >
        <img
        v-if="!item.backdrop_path"
          src="@/assets/images/placeholder1.jpg"
          alt=""
          class="w-full h-full object-cover object-top"
        />
<img
          :src="`https://image.tmdb.org/t/p/w500${item.backdrop_path}`"
          alt=""
          class="w-full h-full object-cover object-top"
        />
        <!-- rating -->
        <div
          class="absolute rounded-full p-4 h-8 w-8 bg-blue-600 top-0 left-0 flex justify-center items-center text-white m-2 shadow-lg"
        >
          <p>{{item.vote_average}}</p>
        </div>
        <!-- rating -->
        <div
          class="absolute rounded-full p-1 top-0 right-0 flex justify-center items-center   m-2 shadow-lg"
        >
          <p class="text-6xl font-bold text-white opacity-70 shadow-md">{{key+1}}</p>
        </div>

        <div
          class="absolute w-full bottom-0 bg-gradient-to-b from-transparent  to-black"
        >
          <!-- title -->
          <p class="font-bold text-center text-white p-4 mb-2 leading-0">
            {{item.original_title?`${item.original_title}`:`${item.name}`}}
          </p>
        </div>
      </div> 
    </div>


  </div>
</template>

<script>
import axios from 'axios';
import {mapMutations} from 'vuex'
export default {
  props:["media","length"],
    data() {
        return {
            movieList:[],
        }
    },

    mounted() {
        this.fetchMovies()
    },

    methods:{
      ...mapMutations({
        setMedia:"setCurrentMedia",
      }),
        async fetchMovies(){
        
                  const results = await axios.get(`https://api.themoviedb.org/3/trending/${this.media}/${this.length}?api_key=b32d45b2c231eb8ff04cf2172ed01f85`)
           console.log(results.data.results);
           this.movieList=results.data.results
        },

      async goToMovie(item,key){
        console.log('movie id', item.id);
        item.key=key+1
        this.setMedia(item)
        this.$router.push({path:'/movie-detail'})
      }
    }
}
</script>
