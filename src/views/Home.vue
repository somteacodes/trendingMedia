<template>
 
    <!-- selector -->

  <div class="pt-16">
      <TabGroup @change="changedTab" :defaultIndex="0">
      <TabList class="flex justify-around  mx-6 rounded-lg font-bold  ">
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
