<script setup>
import SiteTopBar from './components/SiteTopBar.vue'
import BrandHeader from './components/BrandHeader.vue'
import PromoCard from './components/PromoCard.vue'
import LoginPanel from './components/LoginPanel.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <div class="login-page">
    <SiteTopBar />

    <div class="login-page__shell">
      <BrandHeader />

      <main class="login-page__main">
        <section class="login-box" aria-label="登入主區">
          <PromoCard />
          <LoginPanel id="login" />
        </section>
      </main>

      <SiteFooter />
    </div>
  </div>
</template>

<style scoped>
.login-page {
  min-height: 100vh;
  color: var(--app-text);
}

.login-page__shell {
  width: min(1180px, calc(100% - 2rem));
  margin: 0 auto;
  padding: 1.25rem 0 2rem;
}

.login-page__main {
  display: grid;
  gap: 1.25rem;
  margin-top: 2rem;
}

.login-box {
  display: grid;
  padding: 0;
  background-color: #ffffff;
  border: 4px solid #f0f0f0;
  border-radius: 4px;
}

@media (min-width: 920px) {
  .login-page__shell {
    width: 1000px;
    padding-top: 1rem;
  }

  .login-box {
    grid-template-columns: 1fr 340px;
    gap: 0;
  }
}
</style>
