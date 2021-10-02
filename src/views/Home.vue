<template>
  <div class="bg-gray-50 w-full h-screen">

    <div class="px-2 shadow-lg py-4 flex justify-center mb-4">
      <p class="font-bold">Trending Media</p>
    </div>
    <!-- selector -->

    <div class="flex justify-around">

      <div class="border px-4 py-px rounded-lg flex justify-center items-center border-blue-600 cursor-pointer mb-2 hover:bg-blue-600 hover:text-white active">
        <p class="text-sm">Movies</p>
      </div>
      <div class="border px-4 py-px rounded-lg flex justify-center items-center border-blue-600 cursor-pointer mb-2 hover:bg-blue-600 hover:text-white ">
        <p class="text-sm">Series</p>
      </div>
    </div>

    <Movies/>

    <!-- footer -->
    <div class="flex items-center justify-center w-full py-4">
      <p class="text-sm">  Movie list curated from &nbsp; </p>
      <a href="https://www.themoviedb.org/"> <img src="@/assets/images/tmdb.svg" alt="" class="w-20"></a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Movies from '@/components/Movies.vue'

export default {
  name: 'Home',
  components: {
    Movies
  }
}
</script>
