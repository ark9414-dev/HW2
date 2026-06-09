<template>
  <article class="login-panel">
    <div class="login-panel__heading">
      <h2 class="login-panel__title">登入買動漫</h2>
    </div>

    <form class="login-panel__form">
      <div class="login-panel__field">
        <label for="account">帳號:</label>
        <input type="text" id="account" name="account" autocomplete="username" />
      </div>

      <div class="login-panel__field">
        <label for="password">密碼:</label>
        <input
          type="password"
          id="password"
          name="password"
          autocomplete="current-password"
          placeholder="密碼需8個字元以上，包含1個英文大寫"
        />
      </div>

      <div class="login-panel__meta">
        <label class="login-panel__remember">
          <input type="checkbox" name="remember" />
          <span>記住我的帳號</span>
        </label>
      </div>

      <div class="login-panel__actions">
        <button class="login-panel__button login-panel__button--blue" type="button">登入</button>
      </div>

      <div class="login-panel__quick-actions">
        <button class="login-panel__btn-white" type="button">加入會員</button>
      </div>

      <div class="login-panel__divider">
        <span>快速登入</span>
      </div>

      <div class="login-panel__actions">
        <button class="login-panel__button login-panel__button--line" type="button">
          LINE登入
        </button>
      </div>
    </form>

    <aside class="login-panel__tips">
      <p class="login-panel__tips-title">貼心小提示</p>
      <p>買動漫不會以電子郵件、或任何方式，要求網友提供或認證帳號和密碼資料。若您收到要求提供帳號密碼的信件，請務必聯絡買動漫客服中心，並請定期更改您的帳號密碼確保帳號安全</p>
    </aside>
  </article>
</template>

<style scoped>
.login-panel {
  display: grid;
  gap: 1rem;
}

.login-panel__title {
  font-size: 1.15rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.login-panel__form {
  display: grid;
  gap: 0.75rem;
}

.login-panel__field {
  display: grid;
  gap: 0.25rem;
}

.login-panel__field label {
  font-size: 0.9rem;
  color: #666;
}

.login-panel__field input {
  width: 100%;
  border: 1px solid #ccc;
  padding: 0.5rem;
  font-size: 0.9rem;
  outline: none;
}

.login-panel__remember {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #666;
}

.login-panel__actions {
  display: grid;
}

.login-panel__button {
  border: none;
  padding: 0.75rem;
  color: white;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;
}

.login-panel__button--blue {
  background-color: #8cd4ff;
}

.login-panel__button--line {
  background-color: #00c300;
}

.login-panel__quick-actions {
  display: grid;
  gap: 0.5rem;
}

.login-panel__btn-white {
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 0.5rem;
  cursor: pointer;
  font-size: 0.85rem;
}

.login-panel__divider {
  display: flex;
  align-items: center;
  text-align: center;
  color: #999;
  font-size: 0.75rem;
}

.login-panel__divider::before,
.login-panel__divider::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid #eee;
}

.login-panel__divider span {
  padding: 0 10px;
}

.login-panel__tips {
  background-color: #ffffd0;
  border: 1px solid #f0e68c;
  padding: 0.75rem;
  font-size: 0.75rem;
  color: #8a6d3b;
  line-height: 1.4;
}

.login-panel__tips-title {
  font-weight: bold;
  margin-bottom: 0.25rem;
}
</style>