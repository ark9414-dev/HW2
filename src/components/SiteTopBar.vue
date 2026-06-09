<template>
  <header class="topbar">
    <div class="topbar__inner">
      <div class="topbar__left">
        訪客，您好！ <a href="#">會員登入</a> 或 <a href="#">加入會員</a>
      </div>

      <nav class="topbar__right" aria-label="頁首導覽">
        <a href="#">我的拍賣</a>
        <a href="#">🛒 購物車 <span class="cart-count">0</span></a>
        <a href="#">訊息中心</a>
        <a href="#">最新公告</a>
        <a href="#">幫助中心</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.topbar {
  background: #fff;
  border-bottom: 1px solid #eee;
  font-size: 11px;
  color: #666;
}

.topbar__inner {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 4px 0;
}

.topbar a {
  color: #666;
  text-decoration: none;
}

.topbar a:hover {
  color: #333;
}

.topbar__right {
  display: flex;
  gap: 12px;
}

.cart-count {
  background-color: #ff4400;
  color: #fff;
  padding: 0 4px;
  border-radius: 10px;
  font-weight: bold;
}
</style>