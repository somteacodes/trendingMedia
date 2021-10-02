<template> 
  
   <div class="bg-gray-200 relative h-screen ">
    <div class="px-2 shadow-lg py-4 flex justify-center bg-white fixed top-0 z-50 w-full">
      <img src="@/assets/images/logo.svg" class="w-6 mr-6" alt="">
      <p class="font-bold">Trending Media</p>
    </div>
    <!-- selector -->
    <router-view/>

    <!-- footer -->
    <div class="text-white flex items-center justify-center w-full py-4 sticky bottom-0 bg-gradient-to-b from-transparent  to-black">
      <p class="text-sm">Movie list curated from &nbsp;</p>
      <a href="https://www.themoviedb.org/">
        <img src="@/assets/images/tmdb.svg" alt="" class="w-20"
      /></a>
    </div>
  </div>
</template>

 