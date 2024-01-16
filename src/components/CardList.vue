<script lang="ts" setup>
import SampleCard from "./SampleCard.vue";

const props = defineProps<{
  dummyList: number[];
  animateEnter: (item: any) => void;
  package: "Motion" | "Animejs";
}>();
</script>

<template>
  <div class="list">
    <h1 class="list__title">Matchday Live</h1>
    <p class="list__package">{{ props.package }}</p>

    <TransitionGroup
      name="group"
      tag="ul"
      class="list__container"
      @enter="(item) => props.animateEnter(item)"
    >
      <SampleCard v-for="item in props.dummyList" :key="item" />
    </TransitionGroup>

    <button class="list__trigger" @click="$emit('triggered')">
      Animate Me!
    </button>
  </div>
</template>

<style scoped>
.group-move {
  transition: all 0.3s ease;
}
.list {
  margin: 20px;
  background-color: black;
  max-width: 400px;
  border-radius: 8px;
  overflow: hidden;
  flex: 1;
}

.list__title {
  color: white;
  padding: 16px 16px 0;
}

.list__container {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-height: 525px;
  min-height: 525px;
  height: 100%;
  overflow-y: scroll;
  padding: 0 16px;
}

.list__trigger {
  padding: 4px 12px;
  font-weight: 700;
  margin: 16px;
  cursor: pointer;
}

.list__package {
  padding-left: 16px;
  margin-bottom: 8px;
}
</style>
