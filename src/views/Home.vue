<template>
  <div class="bg-gray-200 w-full h-screen">
    <div class="px-2 shadow-lg py-4 flex justify-center mb-4 bg-white">
      <img src="@/assets/images/logo.svg" class="w-6 mr-6" alt="">
      <p class="font-bold">Trending Media</p>
    </div>
    <!-- selector -->

    <TabGroup @change="changedTab" :defaultIndex="0">
      <TabList class="flex justify-around bg-gray-300 mx-6 rounded-lg font-bold">
        <Tab v-slot="{ selected }" as="template">
          <div
            class=" py-4 px-6 w-1/2  text-blue-600 rounded-t-lg flex justify-center items-center   cursor-pointer hover:bg-blue-600 hover:text-white"
            :class="[selected ? 'active-l' : '']"
          >
            <p class="text-sm">Movies</p>
          </div>
        </Tab>
        <Tab v-slot="{ selected }" as="template">
          <div
            class=" py-4 px-6 w-1/2  text-blue-600 rounded-t-lg flex justify-center items-center   cursor-pointer hover:bg-blue-600 hover:text-white"
            :class="[selected ? 'active-r' : '']"
          >
            <p class="text-sm">Series</p>
          </div>
        </Tab>
      </TabList>
      <TabPanels class="bg-white">
        <TabPanel>
          <MediaList :length="'day'" :media="'movie'"></MediaList>
        </TabPanel>
        <TabPanel>
           <MediaList :length="'day'" :media="'tv'"></MediaList>
        </TabPanel>
      </TabPanels>
    </TabGroup>

    <!-- footer -->
    <div class="flex items-center justify-center w-full py-4">
      <p class="text-sm">Movie list curated from &nbsp;</p>
      <a href="https://www.themoviedb.org/">
        <img src="@/assets/images/tmdb.svg" alt="" class="w-20"
      /></a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src 
import MediaList from "@/components/MediaList.vue"; 
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
export default {
  name: "Home",
  components: { 
    MediaList,
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel, 
  },
  methods: {
    changedTab(index) {
      console.log("Changed active tab to:", index);
    },
  },
};
</script>
