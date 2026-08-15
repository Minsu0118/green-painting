<template>
  <footer class="main-footer">
    <div class="footer-container">
      <div class="footer-info">
        <h3 class="company-name">Green printing (그린 나염)</h3>
        <p class="company-detail">
          <span>대표: 박종삼</span> | 
          <span>주소: 서울시 중구 다산로 36가길 22 (신당6동 62-51)</span>
        </p>
        <p class="company-contact">
          <span>TEL: 02-2237-0642</span> | 
          <span>FAX: 02-2234-1916</span> | 
          <span>H.P: 010-3664-0642</span>
        </p>
        <p class="company-email">
          <span>E-mail: water1234567@naver.com</span> / 
          <span>jspgreenwater@naver.com</span>
        </p>
      </div>

      <div class="footer-bottom">
        <p>&copy; Green Printing. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.main-footer {
  background-color: #2c3e50;
  color: #ecf0f1;
  /* 기존 2.5rem 1.5rem 1.5rem ➔ 상하 여백을 1.2rem, 0.8rem으로 축소 */
  padding: 1.2rem 1.5rem 0.8rem;
  border-top: 1px solid #34495e;
  margin-top: auto;
}

.footer-container {
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  /* 내부 요소 간격 축소 (1rem ➔ 0.4rem) */
  gap: 0.4rem;
}

.company-name {
  font-size: 1.05rem;
  font-weight: bold;
  color: #48b5c4;
  margin-bottom: 0.2rem;
}

.company-detail, 
.company-contact, 
.company-email {
  font-size: 0.8rem;
  color: #bdc3c7;
  line-height: 1.4;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 0.6rem;
  margin-top: 0.3rem;
  font-size: 0.75rem;
  color: #7f8c8d;
}

@media (max-width: 768px) {
  .company-detail span, 
  .company-contact span {
    display: block;
  }
}
</style>