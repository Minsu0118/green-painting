<template>
  <div class="intro-page-wrapper">
    <div class="intro-content-container">
      <!-- 1. 헤더 섹션 -->
      <section class="page-header">
        <div class="badge">
          <span class="badge-dot"></span>
          ABOUT • 그린나염
        </div>
        <h1 class="page-title">
          기술과 신뢰로 완성하는 공장,<br>
          <span class="highlight-text">그린나염</span>
        </h1>
        <p class="page-desc">
          그린나염은 26년 현장 노하우와 숙련된 장인 기술을 바탕으로<br>
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
            <div class="stat-value">100장+</div>
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
            <h3>도안 수령 & 검수</h3>
            <p>일러스트 도안 파일을 전달받아 샘플 검수 후, 의뢰자 재확인을 받습니다.</p>
          </div>

          <div class="process-card">
            <div class="process-step">03</div>
            <h3>정식 페인팅 작업</h3>
            <p>샘플 검수 시 문제가 없을 경우 수량과 스펙에 맞추어 본격적인 페인팅/프린팅을 시작합니다.</p>
          </div>

          <div class="process-card">
            <div class="process-step">04</div>
            <h3>완제품 출고 & 배송</h3>
            <p>작업 완료 후 품질 검수를 거쳐 퀵 서비스(택배) 및 직접 수령을 통해 안전하게 전달합니다.</p>
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
  </div>
</template>

<script setup>
// 정적 회사 소개 페이지
</script>

<style scoped>
.intro-page-wrapper {
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
  overflow: hidden;
  animation: fadeIn 0.6s ease-out;
}

.intro-content-container {
  max-width: 1160px;
  margin: 0 auto;
  padding: 80px 24px 120px;
}

/* 1. 헤더 */
.page-header {
  text-align: center;
  margin-bottom: 70px;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #ffffff;
  color: #0f172a;
  border: 1px solid #e2e8f0;
  padding: 6px 16px;
  border-radius: 30px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
}

.badge-dot {
  width: 6px;
  height: 6px;
  background-color: #0d9488;
  border-radius: 50%;
}

.page-title {
  font-size: 2.8rem;
  font-weight: 800;
  color: #0f172a;
  line-height: 1.35;
  margin-bottom: 18px;
  word-break: keep-all;
  letter-spacing: -0.5px;
}

.highlight-text {
  color: #0d9488;
}

.page-desc {
  font-size: 1.08rem;
  color: #64748b;
  line-height: 1.75;
  word-break: keep-all;
}

/* 2. 핵심 지표 */
.stats-section {
  margin-bottom: 90px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.stat-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: 42px 30px;
  text-align: center;
  transition: all 0.25s ease;
}

.stat-card:hover {
  transform: translateY(-4px);
  border-color: #0d9488;
  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.05);
}

.stat-label {
  font-size: 0.88rem;
  font-weight: 700;
  color: #64748b;
  letter-spacing: 0.5px;
  display: block;
  margin-bottom: 12px;
}

.stat-value {
  font-size: 3.4rem;
  font-weight: 900;
  color: #0d9488;
  line-height: 1;
  margin-bottom: 14px;
  letter-spacing: -1px;
}

.stat-desc {
  font-size: 0.98rem;
  font-weight: 700;
  color: #0f172a;
}

/* 3. 공정 프로세스 */
.process-section {
  margin-bottom: 90px;
}

.section-title {
  text-align: center;
  margin-bottom: 48px;
}

.sub-tag {
  color: #0d9488;
  font-weight: 800;
  font-size: 0.8rem;
  letter-spacing: 2.5px;
  display: block;
  margin-bottom: 8px;
}

.section-title h2 {
  font-size: 2.1rem;
  color: #0f172a;
  margin-bottom: 10px;
  font-weight: 800;
  letter-spacing: -0.5px;
}

.section-title p {
  color: #64748b;
  font-size: 0.98rem;
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.process-card {
  position: relative;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 18px;
  padding: 32px 24px;
  transition: all 0.25s ease;
}

.process-card:hover {
  transform: translateY(-4px);
  border-color: #0d9488;
  box-shadow: 0 10px 20px rgba(15, 23, 42, 0.05);
}

.process-step {
  font-size: 1.8rem;
  font-weight: 900;
  color: #0d9488;
  margin-bottom: 12px;
}

.process-card h3 {
  font-size: 1.15rem;
  color: #0f172a;
  font-weight: 700;
  margin-bottom: 10px;
}

.process-card p {
  font-size: 0.9rem;
  color: #64748b;
  line-height: 1.6;
}

/* 데스크톱 환경(4열 배치 시) 단계 간 연결 화살표 추가 */
@media (min-width: 992px) {
  .process-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .process-card:not(:last-child)::after {
    content: "➔";
    position: absolute;
    right: -14px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.9rem;
    color: #cbd5e1;
    z-index: 2;
    pointer-events: none;
  }
}

/* 4. 하단 CTA */
.cta-banner {
  margin-top: 20px;
}

.banner-inner {
  background: #0f172a;
  border-radius: 24px;
  padding: 48px 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  flex-wrap: wrap;
  gap: 24px;
}

.banner-pill {
  background: rgba(255, 255, 255, 0.1);
  color: #5eead4;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1.2px;
  display: inline-block;
  margin-bottom: 10px;
}

.banner-text h2 {
  font-size: 1.75rem;
  font-weight: 800;
  margin-bottom: 6px;
  color: #ffffff;
  letter-spacing: -0.3px;
}

.banner-text p {
  font-size: 0.98rem;
  color: #94a3b8;
}

.banner-btn {
  background: #0d9488;
  color: #ffffff;
  padding: 15px 30px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.92rem;
  transition: all 0.25s ease;
}

.banner-btn:hover {
  background: #14b8a6;
  transform: translateY(-2px);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .page-title { font-size: 2.1rem; }
  .banner-inner {
    flex-direction: column;
    text-align: center;
    padding: 36px 24px;
  }
}
</style>