<script setup lang="ts">
import { onMounted } from "vue";
import AnimeButton from "./components/AnimeButton.vue";
import MotionButton from "./components/MotionButton.vue";
import Vidiprinter from "./components/Vidiprinter.vue";

import { animate, inView } from "motion";

onMounted(() => {
  document.querySelectorAll(".motion-fade-in").forEach((section) => {
    inView(section, () => {
      // also get an arg passed from this function which is the intersection observer
      // callback is only fired once
      animate(
        section,
        {
          opacity: [0, 1],
          y: [20, 0],
          scale: [0.9, 1],
        },
        { delay: 0.3, easing: "ease-in" }
      );
    });
  });
});
</script>

<template>
  <div class="container">
    <Vidiprinter />
    <MotionButton />
    <AnimeButton />

    <div class="pages">
      <div class="page">
        <div class="motion-fade-in">Motion</div>
        <div class="motion-fade-in">Motion</div>
        <div class="motion-fade-in">Motion</div>
        <div class="motion-fade-in">Motion</div>
      </div>
      <div class="page break-top">
        <div class="fade-in">Anime</div>
        <div class="fade-in">Anime</div>
        <div class="fade-in">Anime</div>
        <div class="fade-in">Anime</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1440px;
  justify-content: center;
  margin: auto;
  gap: 100px;
}

.pages {
  margin-top: 400px;
}

.fade-in,
.motion-fade-in {
  width: 100%;
  height: 500px;
  background-color: white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 24px;
  opacity: 0;
  border-radius: 8px;
}

.break-top {
  padding-top: 200px;
}
</style>
