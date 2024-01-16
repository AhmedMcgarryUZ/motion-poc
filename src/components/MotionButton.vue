<script setup lang="ts">
import ArrowRight from "./ArrowRight.vue";
import { timeline } from "motion";
import {
  openingSequence,
  closingSequence,
  closingOptions,
} from "../animations/motionTimeline";
import { ref } from "vue";

const isExpanded = ref(false);

const handleHover = async () => {
  await timeline(openingSequence, {
    duration: 1,
    direction: "normal",
  }).finished.then(() => {
    isExpanded.value = true;
  });
};

const handleExit = async () => {
  await timeline(closingSequence, closingOptions).finished.then(() => {
    isExpanded.value = false;
  });
};
</script>

<template>
  <div class="container">
    <h4>Motion Button</h4>
    <button class="button" @mouseover="handleHover" @mouseleave="handleExit">
      <p class="button__text" v-show="isExpanded">Read More</p>
      <ArrowRight class="button__icon" />
    </button>
  </div>
</template>

<style scoped>
.container {
  margin: 20px;
}
.button {
  margin: 20px;
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  padding: 10px 14px;
  font-weight: 700;
  font-size: 14;
  border-radius: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  min-width: 45px;
  width: 100%;
  max-width: 45px;
}

.button__text {
  flex-shrink: 1;
  transform-origin: bottom;
}

.button__icon {
  min-width: 16px;
  margin-left: auto;
}

.button > * {
  pointer-events: none;
}
</style>
