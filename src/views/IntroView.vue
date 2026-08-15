<template>
  <div class="intro-container">
    <!-- 배경 물방울 블롭 -->
    <div class="water-blob blob-1"></div>
    <div class="water-blob blob-2"></div>

    <!-- 1. 헤더 섹션 -->
    <section class="page-header">
      <div class="badge">
        <span class="badge-dot"></span>
        ABOUT GREEN PAINTING
      </div>
      <h1 class="page-title">
        기술과 신뢰로 완성하는 공장,<br>
        <span class="gradient-text">그린페인팅</span>
      </h1>
      <p class="page-desc">
        그린페인팅은 26년 현장 노하우와 숙련된 장인 기술을 바탕으로<br>
        디자이너와 브랜드가 만족하는 완벽한 의류 나염 가공을 실현합니다.
      </p>
    </section>

    <!-- 2. 핵심 지표 & 전문 노하우 섹션 (Stats) -->
    <section class="stats-section">
      <div class="stats-grid">
        <div class="stat-card">
          <span class="stat-label">전문 노하우</span>
          <div class="stat-value">26년+</div>
          <p class="stat-desc">오랜 경력의 숙련된 기술력</p>
        </div>

        <div class="stat-card">
          <span class="stat-label">일일 최대 생산량</span>
          <div class="stat-value">1,00장+</div>
          <p class="stat-desc">안정적인 작업 납기 준수</p>
        </div>
      </div>
    </section>

    <!-- 3. 만들어지는 과정 (4단계 프로세스) -->
    <section class="process-section">
      <div class="section-title">
        <span class="sub-tag">PROCESS</span>
        <h2>만들어지는 과정</h2>
        <p>체계적이고 투명한 4단계 공정을 통해 최상의 퀄리티를 보장합니다.</p>
      </div>

      <div class="process-grid">
        <div class="process-card">
          <div class="process-step">01</div>
          <h3>의뢰 및 상담</h3>
          <p>이메일 문의 또는 직접 대면 상담을 통해 작업 내용을 전달받고 수락 과정을 진행합니다.</p>
        </div>

        <div class="process-card">
          <div class="process-step">02</div>
          <h3>도안 수령 & 샘플 테스트</h3>
          <p>일러스트 도안 파일을 전달받아 1차 테스트를 진행한 뒤, 의뢰자 확인을 받습니다.</p>
        </div>

        <div class="process-card">
          <div class="process-step">03</div>
          <h3>정식 페인팅 작업</h3>
          <p>샘플 검수 시 문제가 없을 경우 수량과 스펙에 맞추어 본격적인 페인팅/프린팅을 시작합니다.</p>
        </div>

        <div class="process-card">
          <div class="process-step">04</div>
          <h3>완제품 출고 & 배송</h3>
          <p>작업 완료 후 품질 검수를 거쳐 퀵 서비스 또는 택배 배송을 통해 안전하게 전달합니다.</p>
        </div>
      </div>
    </section>

    <!-- 4. 하단 CTA 배너 -->
    <section class="cta-banner">
      <div class="banner-inner">
        <div class="banner-text">
          <span class="banner-pill">CRAFTED WITH PRIDE</span>
          <h2>제작 및 협업에 대한 문의는 언제나 환영합니다.</h2>
          <p>도안과 함께 문의해 주시면 빠르고 정밀한 견적을 안내해 드립니다.</p>
        </div>
        <router-link to="/help" class="banner-btn">
          ✉️ 도안 / 견적 문의하기 ➔
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
// 정적 회사 소개 페이지
</script>

<style scoped>
.intro-container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px 120px;
  animation: fadeIn 0.8s ease-out;
  overflow: hidden;
}

/* 물방울 블롭 */
.water-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.45;
  pointer-events: none;
  z-index: 0;
}
.blob-1 {
  width: 400px;
  height: 400px;
  background: #cbf3f9;
  top: 0;
  left: -100px;
}
.blob-2 {
  width: 450px;
  height: 450px;
  background: #ccfbf1;
  top: 40%;
  right: -100px;
}

/* 1. 헤더 */
.page-header {
  position: relative;
  z-index: 1;
  text-align: center;
  margin-bottom: 70px;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(72, 181, 196, 0.12);
  border: 1px solid rgba(72, 181, 196, 0.35);
  color: #1f7d8a;
  padding: 7px 18px;
  border-radius: 30px;
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  margin-bottom: 20px;
}

.badge-dot {
  width: 6px;
  height: 6px;
  background-color: #48b5c4;
  border-radius: 50%;
}

.page-title {
  font-size: 2.8rem;
  font-weight: 900;
  color: #0f2c33;
  line-height: 1.3;
  margin-bottom: 18px;
  word-break: keep-all;
}

.gradient-text {
  background: linear-gradient(135deg, #1b8a99 0%, #48b5c4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.page-desc {
  font-size: 1.1rem;
  color: #607e84;
  line-height: 1.7;
}

/* 2. 핵심 지표 */
.stats-section {
  position: relative;
  z-index: 1;
  margin-bottom: 90px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}

.stat-card {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(210, 238, 242, 0.8);
  border-radius: 30px;
  padding: 50px 35px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(72, 181, 196, 0.08);
  transition: all 0.35s ease;
}

.stat-card:hover {
  transform: translateY(-6px);
  border-color: #48b5c4;
  box-shadow: 0 16px 35px rgba(72, 181, 196, 0.18);
}

.stat-label {
  font-size: 0.95rem;
  font-weight: 800;
  color: #79979d;
  letter-spacing: 1px;
  display: block;
  margin-bottom: 10px;
}

.stat-value {
  font-size: 3.5rem;
  font-weight: 900;
  color: #1f7d8a;
  line-height: 1.1;
  margin-bottom: 12px;
  letter-spacing: -1px;
}

.stat-desc {
  font-size: 1.05rem;
  font-weight: 700;
  color: #0f2c33;
}

/* 3. 공정 프로세스 */
.process-section {
  position: relative;
  z-index: 1;
  margin-bottom: 100px;
}

.section-title {
  text-align: center;
  margin-bottom: 50px;
}

.sub-tag {
  color: #48b5c4;
  font-weight: 800;
  font-size: 0.85rem;
  letter-spacing: 3px;
  display: block;
  margin-bottom: 8px;
}

.section-title h2 {
  font-size: 2.2rem;
  color: #0f2c33;
  margin-bottom: 8px;
  font-weight: 800;
}

.section-title p {
  color: #607e84;
  font-size: 1.02rem;
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
}

.process-card {
  background: white;
  border: 1px solid rgba(195, 232, 237, 0.6);
  border-radius: 26px;
  padding: 35px 25px;
  box-shadow: 0 8px 24px rgba(72, 181, 196, 0.05);
  transition: all 0.3s ease;
}

.process-card:hover {
  transform: translateY(-6px);
  border-color: #48b5c4;
  box-shadow: 0 14px 30px rgba(72, 181, 196, 0.15);
}

.process-step {
  font-size: 2.2rem;
  font-weight: 900;
  color: #48b5c4;
  margin-bottom: 14px;
}

.process-card h3 {
  font-size: 1.25rem;
  color: #0f2c33;
  font-weight: 800;
  margin-bottom: 10px;
}

.process-card p {
  font-size: 0.92rem;
  color: #607e84;
  line-height: 1.6;
}

/* 4. 하단 CTA */
.cta-banner {
  position: relative;
  z-index: 1;
}

.banner-inner {
  background: linear-gradient(135deg, #48b5c4 0%, #208796 100%);
  border-radius: 34px;
  padding: 50px 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  flex-wrap: wrap;
  gap: 25px;
  box-shadow: 0 16px 40px rgba(72, 181, 196, 0.28);
}

.banner-pill {
  background: rgba(255, 255, 255, 0.25);
  color: #ffffff;
  padding: 5px 14px;
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  display: inline-block;
  margin-bottom: 10px;
}

.banner-text h2 {
  font-size: 1.8rem;
  font-weight: 900;
  margin-bottom: 6px;
}

.banner-text p {
  font-size: 1.02rem;
  color: #e5f7f9;
}

.banner-btn {
  background: #ffffff;
  color: #176f7a;
  padding: 16px 32px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 800;
  font-size: 1rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transition: all 0.25s ease;
}

.banner-btn:hover {
  background: #0f2c33;
  color: white;
  transform: translateY(-3px);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .page-title { font-size: 2.1rem; }
  .banner-inner {
    flex-direction: column;
    text-align: center;
    padding: 35px 24px;
  }
}
</style>