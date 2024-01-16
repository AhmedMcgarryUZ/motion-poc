<script setup lang="ts"></script>

<template>
  <li class="card">
    <div class="card__circle"></div>
    <div class="card__container">
      <span class="card__line"></span>
      <span class="card__line"></span>
      <span class="card__line"></span>
      <span class="card__line"></span>
    </div>
  </li>
</template>

<style scoped>
.card {
  background-color: white;
  width: 100%;
  border-radius: 8px;
  padding: 8px;
  display: flex;
  gap: 8px;
}

.card__circle {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: whitesmoke;
}

.card__container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4px;
  flex: 1;
}

.card__line {
  height: 10px;
  width: 100%;
  background: whitesmoke;
  border-radius: 10px;
}
</style>
