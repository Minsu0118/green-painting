<template>
  <div class="home-container">
    <!-- 1. 히어로 섹션 -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="hero-badge">
          <span class="badge-dot"></span>
          의류 나염 · 특수 전사 전문
        </div>

        <h1 class="hero-title">
          원단 위에 부드럽게 스며드는<br />
          <span class="highlight-text">의류 나염 · 특수 전사</span> 전문 공장
        </h1>

        <p class="hero-desc">
          졸 나염부터 DTG 디지털 프린트, DTF 전사, 3D 입체 발포, 벨벳 후로킹까지.<br />
          복잡한 절차 없이 공식 이메일로 대용량 도안을 첨부해 투명하고 빠른 견적을 받아보세요.
        </p>

        <div class="hero-buttons">
          <router-link to="/collection" class="btn btn-primary">
            샘플 목록 둘러보기 ➔
          </router-link>
          <router-link to="/help" class="btn btn-secondary">
            ✉️ 도안 / 견적 문의하기
          </router-link>
        </div>
      </div>
    </section>

    <!-- 2. 핵심 강점 -->
    <section class="features-section">
      <div class="section-header">
        <span class="sub-title">CORE ADVANTAGES</span>
        <h2>섬세한 그린나염의 가공 기술</h2>
        <p>26년 노하우로 원단의 촉감과 도안의 디테일을 자연스럽게 연결합니다.</p>
      </div>

      <div class="features-grid">
        <div class="feature-card">
          <div class="icon-wrapper">🌊</div>
          <h3>원단 맞춤 정밀 조색</h3>
          <p>원단 결마다 잉크가 유연하게 안착되도록 정밀 조색합니다.</p>
        </div>

        <div class="feature-card">
          <div class="icon-wrapper">✨</div>
          <h3>다품종 특수 나염 라인업</h3>
          <p>기본 졸나염은 물론 3D 입체 발포, 빈티지 크랙, 벨벳 후로킹, DTF/DTG 전사 등 다채로운 질감을 표현합니다.</p>
        </div>

        <div class="feature-card">
          <div class="icon-wrapper">✉️</div>
          <h3>간편한 1:1 직통 이메일 견적</h3>
          <p>회원가입 없이 도안 파일(AI)을 메일로 보내주시면 신속하고 투명하게 상담을 도와드립니다.</p>
        </div>
      </div>
    </section>

    <!-- 3. 대표 기법 섹션 (무한 롤링 슬라이드) -->
    <section class="techniques-preview">
      <div class="section-header">
        <span class="sub-title">PRINTING TECHNIQUES</span>
        <h2>대표 인쇄 & 가공 기법</h2>
        <p>의류에 어울리는 최적의 텍스처를 만나보세요.</p>
      </div>

      <!-- 무한 루프 슬라이드 트랙 -->
      <div class="slider-wrapper">
        <div class="tech-slider-track">
          <!-- 원본 카드 세트 -->
          <div class="tech-card">
            <span class="tech-badge">DTG / Digital</span>
            <h4>디지털 프린트</h4>
            <p>원단 섬유 결을 살려 수채화처럼 맑고 정교하게 표현하는 고해상도 인쇄</p>
          </div>
          <div class="tech-card">
            <span class="tech-badge">Plastisol</span>
            <h4>졸 나염 (기본/발포/크랙)</h4>
            <p>선명한 발색과 우수한 내구성, 도톰한 볼륨과 빈티지한 텍스처 연출</p>
          </div>
          <div class="tech-card">
            <span class="tech-badge">DTF & Special</span>
            <h4>특수 전사 (DTF/후로킹/호일)</h4>
            <p>제약 없는 풀컬러 전사부터 포근한 입체 벨벳 질감, 메탈릭 호일 가공</p>
          </div>
          <div class="tech-card">
            <span class="tech-badge">Sublimation</span>
            <h4>승화 전사</h4>
            <p>원단 통기성을 완벽히 유지하며 섬유 내부에 이질감 없이 침투 인쇄</p>
          </div>

          <!-- 무한 연결용 복제 카드 세트 -->
          <div class="tech-card">
            <span class="tech-badge">DTG / Digital</span>
            <h4>디지털 프린트</h4>
            <p>원단 섬유 결을 살려 수채화처럼 맑고 정교하게 표현하는 고해상도 인쇄</p>
          </div>
          <div class="tech-card">
            <span class="tech-badge">Plastisol</span>
            <h4>졸 나염 (기본/발포/크랙)</h4>
            <p>선명한 발색과 우수한 내구성, 도톰한 볼륨과 빈티지한 텍스처 연출</p>
          </div>
          <div class="tech-card">
            <span class="tech-badge">DTF & Special</span>
            <h4>특수 전사 (DTF/후로킹/호일)</h4>
            <p>제약 없는 풀컬러 전사부터 포근한 입체 벨벳 질감, 메탈릭 호일 가공</p>
          </div>
          <div class="tech-card">
            <span class="tech-badge">Sublimation</span>
            <h4>승화 전사</h4>
            <p>원단 통기성을 완벽히 유지하며 섬유 내부에 이질감 없이 침투 인쇄</p>
          </div>
        </div>
      </div>

      <div class="preview-cta">
        <router-link to="/collection" class="view-all-btn">
          작업 샘플 보러가기 ➔
        </router-link>
      </div>
    </section>

    <!-- 4. 빠른 견적 배너 -->
    <section class="inquiry-banner-section">
      <div class="banner-inner">
        <div class="banner-text">
          <span class="banner-pill">QUICK INQUIRY</span>
          <h3>도안을 가지고 계신가요?</h3>
          <p>샘플 번호(No. 01 등)와 함께 도안을 보내주시면 가장 어울리는 인쇄 기법을 제안해 드립니다.</p>
        </div>
        <router-link to="/help" class="banner-action-btn">
          문의 양식 복사 & 문의하기 ➔
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
// 정적 홈 페이지 컨트롤러
</script>

<style scoped>
.home-container {
  animation: fadeIn 0.6s ease-out;
  background: #ffffff;
  color: #0f172a;
  overflow-x: hidden;
}

/* 공통 섹션 헤더 */
.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.sub-title {
  color: #0d9488;
  font-weight: 800;
  font-size: 0.78rem;
  letter-spacing: 2.2px;
  display: block;
  margin-bottom: 10px;
}

.section-header h2 {
  font-size: 2.1rem;
  color: #0f172a;
  margin-bottom: 12px;
  font-weight: 800;
  letter-spacing: -0.5px;
}

.section-header p {
  color: #64748b;
  font-size: 1rem;
}

/* ==========================================================================
   1. 히어로 섹션
   ========================================================================== */
.hero-section {
  background: #f8fafc;
  padding: 100px 24px 110px;
  text-align: center;
  border-bottom: 1px solid #f1f5f9;
}

.hero-content {
  max-width: 840px;
  margin: 0 auto;
}

.hero-badge {
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
  letter-spacing: 0.8px;
  margin-bottom: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
}

.badge-dot {
  width: 6px;
  height: 6px;
  background-color: #0d9488;
  border-radius: 50%;
}

.hero-title {
  font-size: 2.9rem;
  line-height: 1.35;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 20px;
  word-break: keep-all;
  letter-spacing: -0.5px;
}

.highlight-text {
  color: #0d9488;
}

.hero-desc {
  font-size: 1.08rem;
  color: #475569;
  line-height: 1.7;
  margin-bottom: 36px;
  word-break: keep-all;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.btn {
  padding: 14px 28px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 0.92rem;
  text-decoration: none;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-primary {
  background: #0f172a;
  color: #ffffff;
}

.btn-primary:hover {
  background: #0d9488;
}

.btn-secondary {
  background: #ffffff;
  color: #0f172a;
  border: 1px solid #cbd5e1;
}

.btn-secondary:hover {
  background: #f1f5f9;
  border-color: #94a3b8;
}

/* ==========================================================================
   2. 핵심 강점 섹션
   ========================================================================== */
.features-section {
  max-width: 1160px;
  margin: 0 auto;
  padding: 90px 24px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.feature-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  padding: 32px 26px;
  border-radius: 20px;
  transition: all 0.2s ease;
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.02);
}

.feature-card:hover {
  border-color: #0d9488;
}

.icon-wrapper {
  width: 48px;
  height: 48px;
  margin-bottom: 18px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.35rem;
}

.feature-card h3 {
  font-size: 1.2rem;
  color: #0f172a;
  margin-bottom: 10px;
  font-weight: 800;
  letter-spacing: -0.3px;
}

.feature-card p {
  font-size: 0.92rem;
  color: #64748b;
  line-height: 1.6;
}

/* ==========================================================================
   3. 기법 프리뷰
   ========================================================================== */
.techniques-preview {
  background: #f8fafc;
  padding: 90px 0;
  border-top: 1px solid #f1f5f9;
  border-bottom: 1px solid #f1f5f9;
  overflow: hidden;
}

.slider-wrapper {
  width: 100%;
  overflow: hidden;
  margin-bottom: 40px;
  padding: 10px 0;
  mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
}

.tech-slider-track {
  display: flex;
  gap: 20px;
  width: max-content;
  animation: infiniteScroll 30s linear infinite;
}

/* 마우스 호버, 터치/클릭, 포커스 시 애니메이션 정지 */
.slider-wrapper:hover .tech-slider-track,
.slider-wrapper:active .tech-slider-track,
.slider-wrapper:focus-within .tech-slider-track {
  animation-play-state: paused;
}

.tech-card {
  width: 290px;
  flex-shrink: 0;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  padding: 28px 22px;
  border-radius: 18px;
  transition: all 0.2s ease;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.02);
}

.tech-card:hover {
  border-color: #0d9488;
}

.tech-badge {
  display: inline-block;
  background: #f1f5f9;
  color: #0d9488;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 6px;
  margin-bottom: 12px;
}

.tech-card h4 {
  font-size: 1.1rem;
  color: #0f172a;
  margin-bottom: 8px;
  font-weight: 800;
}

.tech-card p {
  font-size: 0.88rem;
  color: #64748b;
  line-height: 1.6;
}

.preview-cta {
  text-align: center;
}

.view-all-btn {
  display: inline-block;
  background: #ffffff;
  color: #0f172a;
  border: 1px solid #cbd5e1;
  padding: 12px 28px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.view-all-btn:hover {
  background: #0f172a;
  color: #ffffff;
  border-color: #0f172a;
}

/* ==========================================================================
   4. 빠른 견적 배너
   ========================================================================== */
.inquiry-banner-section {
  max-width: 1160px;
  margin: 80px auto;
  padding: 0 24px;
}

.banner-inner {
  background: #0f172a;
  border-radius: 24px;
  padding: 42px 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  flex-wrap: wrap;
  gap: 20px;
}

.banner-pill {
  background: rgba(255, 255, 255, 0.1);
  color: #5eead4;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1px;
  display: inline-block;
  margin-bottom: 10px;
}

.banner-text h3 {
  font-size: 1.65rem;
  font-weight: 800;
  margin-bottom: 8px;
  letter-spacing: -0.3px;
}

.banner-text p {
  font-size: 0.95rem;
  color: #94a3b8;
}

.banner-action-btn {
  background: #0d9488;
  color: #ffffff;
  padding: 14px 26px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.banner-action-btn:hover {
  background: #14b8a6;
}

/* ==========================================================================
   애니메이션 & 반응형
   ========================================================================== */
/* 트랙의 정확히 50%(복제본 시작점)만큼 이동시켜 무한 루프 구현 */
@keyframes infiniteScroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.1rem;
  }
  .section-header h2 {
    font-size: 1.7rem;
  }
  .banner-inner {
    flex-direction: column;
    text-align: center;
    padding: 32px 20px;
  }
}
</style>