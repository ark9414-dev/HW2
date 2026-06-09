<template>
  <header class="brand-header">
    <div class="brand-container">
      <div class="logo-area">
        <img src="../assets/logo.svg" alt="買動漫" class="logo-img" v-if="hasLogo" />
        <span class="logo-text" v-else>買動漫</span>
        <span class="logo-sub">No.1動漫拍賣網站</span>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const hasLogo = ref(true)
</script>

<style scoped>
.brand-header {
  padding: 20px 0;
}

.brand-container {
  max-width: 1000px;
  margin: 0 auto;
}

.logo-area {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-img {
  height: 60px;
}

.logo-text {
  font-size: 2.2rem;
  font-weight: bold;
  color: #0076cc;
  letter-spacing: 2px;
}

.logo-sub {
  background-color: #0076cc;
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 11px;
  margin-top: 10px;
}
</style>