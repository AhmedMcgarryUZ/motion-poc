<script setup lang="ts">
import { ref } from "vue";
import CardList from "../components/CardList.vue";
import motionListEnter from "../animations/motionListEnter";
import animeListEnter from "../animations/animeListEnter";

const motionList = ref([-1]);
const animeList = ref([-1]);

const handleAddMotion = () => {
  motionList.value.unshift(motionList.value.length);
};

const handleAddAnime = () => {
  animeList.value.unshift(animeList.value.length);
};
</script>

<template>
  <div class="container">
    <CardList
      @triggered="handleAddMotion"
      :animateEnter="motionListEnter"
      :dummyList="motionList"
      package="Motion"
    />

    <CardList
      @triggered="handleAddAnime"
      :animateEnter="animeListEnter"
      :dummyList="animeList"
      package="Animejs"
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  gap: 16px;
  width: 100%;
}
</style>
