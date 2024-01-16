<script setup lang="ts">
import ArrowRight from "./ArrowRight.vue";
import anime from "animejs";
import { ref } from "vue";

const isExpanded = ref(false);

const t = anime.timeline({
  duration: 100,
  delay: 0,
});

const t2 = anime.timeline({
  duration: 100,
  delay: 0,
});

const handleEnter = () => {
  t.add({
    targets: ".anim-button__text",
    scaleY: [1, 0],
  })
    .add({
      targets: ".anim-button",
      maxWidth: ["45px", "120px"],
      scale: [1.2, 1],
      justifyContent: "flex-end",
      duration: 300,
      easing: "spring(1, 100, 10, 0)",
      begin: () => {
        isExpanded.value = true;
      },
    })
    .add(
      {
        targets: ".anim-button__text",
        display: "block",
        scaleY: 1,
        duration: 200,
      },
      400
    );
};

const handleLeave = () => {
  t2.add({
    targets: ".anim-button__text",
    scale: [1, 0],
  }).add({
    targets: ".anim-button",
    maxWidth: ["120px", "45px"],
    justifyContent: "flex=end",
    duration: 200,
    easing: "spring(1, 100, 10, 0)",
    begin: () => {
      isExpanded.value = false;
    },
  });
};
</script>

<template>
  <div class="container">
    <h4>Anime Button</h4>
    <button
      class="anim-button"
      @mouseover="handleEnter()"
      @mouseleave="handleLeave()"
    >
      <p class="anim-button__text" v-show="isExpanded">Read More</p>
      <ArrowRight class="anim-button__icon" />
    </button>
  </div>
</template>

<style scoped>
.container {
  margin: 20px;
}
.anim-button {
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

.anim-button__text {
  flex-shrink: 1;
  transform-origin: bottom;
}

.anim-button__icon {
  min-width: 16px;
  margin-left: auto;
}

.anim-button > * {
  pointer-events: none;
}
</style>
