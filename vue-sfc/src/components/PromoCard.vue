<template>
  <div class="promo-box">
    <div class="decor decor-top"></div>
    <div class="decor decor-bottom"></div>
    
    <div class="promo-content">
      <div class="promo-text-group">
        <span class="bracket">[</span>
        <div class="promo-main-text">
          <p>購物好放心</p>
          <p>交易安心買</p>
        </div>
        <span class="bracket">]</span>
      </div>
      <button class="promo-button">點我看更多 ≫</button>
    </div>
    
    <div class="promo-character-wrapper">
      <div class="character-bg-arc"></div>
      <div class="character-circle">
        <!-- 這裡可以使用 <img> 標籤放入角色圖片 -->
        <div class="character-img-placeholder"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.promo-box {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;
  min-height: 400px;
  padding-left: 60px;
}

.decor {
  position: absolute;
  width: 80px;
  height: 80px;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.6;
}

.decor-top {
  top: 20px;
  right: 180px;
  transform: rotate(15deg);
  /* 這裡模擬圖片中的稻穗裝飾 */
  border-left: 20px double #f39c12;
  border-bottom: 20px double #f39c12;
  border-radius: 50%;
}

.decor-bottom {
  bottom: 20px;
  left: 20px;
  border-left: 20px double #f39c12;
  border-top: 20px double #f39c12;
  border-radius: 50%;
}

.promo-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  z-index: 2;
}

.promo-text-group {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #e67e22;
}

.bracket {
  font-size: 8rem;
  font-weight: 200;
  line-height: 1;
  color: #fb8c00;
}

.promo-main-text {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  line-height: 1.2;
}

.promo-button {
  background-color: #ff9800;
  color: white;
  border: none;
  padding: 0.8rem 2.5rem;
  border-radius: 50px;
  font-size: 1.3rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 0 #e65100;
  transition: transform 0.1s;
}

.promo-button:active {
  transform: translateY(2px);
  box-shadow: 0 2px 0 #e65100;
}

.promo-character-wrapper {
  position: absolute;
  right: -20px;
  bottom: 0px;
  width: 320px;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.character-bg-arc {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid #ffcc80;
  border-radius: 35% 65% 70% 30% / 30% 30% 70% 70%;
  opacity: 0.4;
}

.character-circle {
  width: 220px;
  height: 220px;
  background-color: #fff;
  border: 1px solid #ffe0b2;
  border-radius: 50%;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.character-img-placeholder {
  width: 180px;
  height: 180px;
  background: radial-gradient(circle, #ffecb3 0%, #fff 70%);
  border-radius: 50%;
}

@media (max-width: 920px) {
  .promo-box {
    padding-left: 20px;
    justify-content: center;
  }
}
</style>