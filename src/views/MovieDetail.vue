<template>
  <main>
    <div class="w-full relative">
        <div class="flex justify-between   top-16 px-8 absolute  z-50">
           <img src="@/assets/images/arrow_back.svg" alt="" class="cursor-pointer py-4" @click="goBack">
        </div>
      <div class="absolute bg-black bg-opacity-70 w-full h-full">
          
      </div>
      <img
        :src="`https://image.tmdb.org/t/p/w500${movieDetail.backdrop_path}`"
        alt=""
        class="w-full h-80 object-cover object-top"
      />
    </div>

    <div class="relative w-full rounded-t-lg bg-white -top-10 p-8">
      <div class="relative -top-36">
        <img
          :src="`https://image.tmdb.org/t/p/w500${movieDetail.backdrop_path}`"
          alt=""
          class="w-1/2 h-60 object-cover object-top mx-auto rounded-lg "
        />
         <p class="font-bold text-center text-3xl  my-4  leading-0 text-gray-700">
            {{movieDetail.original_title?`${movieDetail.original_title}`:`${movieDetail.name}`}}
          </p>
       <div class="flex justify-between space-x-4 mb-6 px-16">
           <div class="h-1 rounded full bg-yellow-600  w-full"></div>
            <div class="h-1 rounded full bg-yellow-600  w-full"></div>
             <div class="h-1 rounded full bg-yellow-600  w-full"></div>
              <div class="h-1 rounded full bg-yellow-600  w-full"></div>
       </div>

        <div class="flex justify-between mb-6">
            <div>
                <p class="text-sm text-gray-400 font-bold">
                    Rating
                </p>
                <p class="text-2xl text-gray-800 font-bold text-center">
                {{ movieDetail.vote_average }}
                </p>
            </div>
            <div>
                <p class="text-sm text-gray-400 font-bold ">
                    Trending spot
                </p>
                <p class="text-2xl text-gray-800 font-bold text-center">
                {{ movieDetail.key }}
                </p>
            </div>
        </div>

        <p class="text-base text-gray-600">
                {{movieDetail.overview}}

        </p>
      </div>
    </div>
  </main>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      movieDetail: "getMovieDetail",
    }),
  },
  methods: {
      goBack(){
          this.$router.push("/");
      }
  }
};
</script>
