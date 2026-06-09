<template>
  <footer class="site-footer">
    <div class="footer-links">
      <a href="#">關於買動漫</a>
      <a href="#">常見問題</a>
      <a href="#">新手上路</a>
      <a href="#">會員約定書</a>
      <a href="#">聯絡客服</a>
      <a href="#">隱私權政策</a>
      <a href="#">買動漫徵才</a>
    </div>

    <div class="footer-middle">
      <div class="footer-brand">
        <span class="footer-logo">買動漫</span>
      </div>
      
      <div class="footer-contact">
        <button class="contact-btn">聯絡客服 <span>點我寫信</span></button>
        <span class="contact-email">service@myacg.com.tw</span>
      </div>

      <div class="footer-hours">
        <p class="hours-title">客服時間</p>
        <p class="hours-detail">週一至週五 10:00 - 19:00</p>
      </div>
    </div>

    <div class="footer-copyright">
      <p>© 2014-2026 買動漫股份有限公司 | All Rights reserved. 統一編號 24553282</p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  margin-top: 50px;
  padding: 30px 0;
  border-top: 1px solid #ddd;
  background-color: #fff;
}

.footer-links {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 25px;
}

.footer-links a {
  color: #888;
  font-size: 12px;
  text-decoration: none;
}

.footer-links a:hover {
  text-decoration: underline;
}

.footer-middle {
  max-width: 1000px;
  margin: 0 auto 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
}

.footer-logo {
  font-size: 2rem;
  font-weight: bold;
  color: #0076cc;
}

.footer-contact {
  display: flex;
  align-items: center;
  gap: 15px;
  border: 1px solid #00adef;
  padding: 5px 15px;
  border-radius: 4px;
}

.contact-btn {
  background-color: #00adef;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  font-size: 13px;
  cursor: pointer;
}

.contact-btn span {
  font-size: 11px;
  background-color: #fff;
  color: #00adef;
  padding: 1px 4px;
  margin-left: 5px;
  border-radius: 2px;
}

.contact-email {
  color: #00adef;
  font-size: 14px;
}

.footer-hours {
  border: 1px solid #0076cc;
  padding: 5px 15px;
  border-radius: 4px;
  text-align: left;
}

.hours-title {
  color: #0076cc;
  font-weight: bold;
  font-size: 13px;
}

.hours-detail {
  color: #0076cc;
  font-size: 13px;
}

.footer-copyright {
  text-align: center;
  color: #999;
  font-size: 11px;
  margin-top: 20px;
}
</style>