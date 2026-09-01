<template>
  <div class="home-container">
    <!-- 1. 물결 플루이드 히어로 섹션 -->
    <section class="hero-section">
      <!-- 부드러운 물방울 배경 블롭 -->
      <div class="water-blob blob-1"></div>
      <div class="water-blob blob-2"></div>
      <div class="water-blob blob-3"></div>

      <div class="hero-content">
        <div class="hero-badge">
          <span class="water-drop-icon">💧</span>
          PROFESSIONAL SCREEN PRINTING
        </div>

        <h1 class="hero-title">
          원단 위에 부드럽게 스며드는<br>
          <span class="water-gradient-text">의류 나염 · 특수 전사</span> 전문 공장
        </h1>

        <p class="hero-desc">
          졸 나염부터 DTG 디지털 프린트, DTF 전사, 3D 입체 발포, 벨벳 후로킹까지.<br>
          복잡한 절차 없이 공식 이메일로 대용량 도안을 첨부해 투명하고 빠른 견적을 받아보세요.
        </p>

        <div class="hero-buttons">
          <router-link to="/collection" class="btn btn-water">
            샘플 목록 둘러보기 ➔
          </router-link>
          <router-link to="/help" class="btn btn-glass">
            ✉️ 도안 / 견적 문의하기
          </router-link>
        </div>
      </div>
    </section>

    <!-- 2. 핵심 강점 (글래스 카드) -->
    <section class="features-section">
      <div class="section-header">
        <span class="sub-title">CORE ADVANTAGES</span>
        <h2>섬세한 그린나염의 가공 기술</h2>
        <p>26년 노하우로 원단의 촉감과 도안의 디테일을 자연스럽게 연결합니다.</p>
      </div>

      <div class="features-grid">
        <div class="glass-feature-card">
          <div class="icon-circle">🌊</div>
          <h3>원단 맞춤 정밀 조색</h3>
          <p>원단 결마다 잉크가 유연하게 안착되도록 정밀 조색합니다.</p>
        </div>

        <div class="glass-feature-card">
          <div class="icon-circle">✨</div>
          <h3>다품종 특수 나염 라인업</h3>
          <p>기본 졸나염은 물론 3D 입체 발포, 빈티지 크랙, 벨벳 후로킹, DTF/DTG 전사 등 다채로운 질감을 표현합니다.</p>
        </div>

        <div class="glass-feature-card">
          <div class="icon-circle">✉️</div>
          <h3>간편한 1:1 직통 이메일 견적</h3>
          <p>회원가입 없이 도안 파일(AI)을 메일로 보내주시면 신속하고 투명하게 상담을 도와드립니다.</p>
        </div>
      </div>
    </section>

    <!-- 3. 대표 기법 프리뷰 (부드러운 물빛 톤) -->
    <section class="techniques-preview">
      <div class="section-header">
        <span class="sub-title">PRINTING TECHNIQUES</span>
        <h2>대표 인쇄 & 가공 기법</h2>
        <p>의류에 어울리는 최적의 텍스처를 만나보세요.</p>
      </div>

      <div class="tech-card-grid">
        <div class="soft-tech-card">
          <span class="soft-badge">DTG / Digital</span>
          <h4>디지털 프린트</h4>
          <p>원단 섬유 결을 살려 수채화처럼 맑고 정교하게 표현하는 고해상도 인쇄</p>
        </div>

        <div class="soft-tech-card">
          <span class="soft-badge">Plastisol</span>
          <h4>졸 나염 (기본/발포/크랙)</h4>
          <p>선명한 발색과 우수한 내구성, 도톰한 볼륨과 빈티지한 텍스처 연출</p>
        </div>

        <div class="soft-tech-card">
          <span class="soft-badge">DTF & Special</span>
          <h4>특수 전사 (DTF/후로킹/호일)</h4>
          <p>제약 없는 풀컬러 전사부터 포근한 입체 벨벳 질감, 메탈릭 호일 가공</p>
        </div>

        <div class="soft-tech-card">
          <span class="soft-badge">Sublimation</span>
          <h4>승화 전사</h4>
          <p>원단 통기성을 완벽히 유지하며 섬유 내부에 이질감 없이 침투 인쇄</p>
        </div>
      </div>

      <div class="preview-cta">
        <router-link to="/collection" class="view-all-btn">
          작업 샘플 보러가기 ➔
        </router-link>
      </div>
    </section>

    <!-- 4. 빠른 견적 안내 배너 -->
    <section class="inquiry-banner-section">
      <div class="water-banner-inner">
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

    <!-- 5. 소셜 & 빠른 소통 채널 (카카오톡 채널 & 인스타그램)
    <section class="social-channels-section">
      <div class="social-header">
        <span class="social-tag">CONNECT WITH US</span>
        <h2>그린페인팅 실시간 소통 채널</h2>
        <p>카카오톡 채널로 빠른 1:1 상담을 받으시거나, 인스타그램에서 최신 작업 현장을 확인해 보세요.</p>
      </div>

      <div class="social-grid">
        <a 
          href="javascript:void(0)" 
          class="social-card kakao-card"
          @click="handleKakaoClick"
        >
          <div class="social-icon-box kakao-icon-bg">
            <span class="social-icon">💬</span>
          </div>
          <div class="social-info">
            <span class="channel-label">실시간 1:1 채팅 상담</span>
            <h3>카카오톡 채널</h3>
            <p>작업 일정 및 빠른 견적 문의 바로가기</p>
          </div>
          <span class="arrow-circle">➔</span>
        </a>

        <a 
          href="javascript:void(0)" 
          class="social-card insta-card"
          @click="handleInstaClick"
        >
          <div class="social-icon-box insta-icon-bg">
            <span class="social-icon">📸</span>
          </div>
          <div class="social-info">
            <span class="channel-label">공식 아카이브 & 포트폴리오</span>
            <h3>인스타그램</h3>
            <p>@greenpainting_official 작업 현장 구경하기</p>
          </div>
          <span class="arrow-circle">➔</span>
        </a>
      </div>
    </section>
    -->
  </div>
</template>

<script setup>
// 추후 실제 카카오톡 채널 링크 및 인스타그램 URL로 교체할 수 있는 핸들러
const handleKakaoClick = () => {
  // 예: window.open('https://pf.kakao.com/_XXXXX', '_blank')
  alert('카카오톡 채널 연결 준비 중입니다.')
}

const handleInstaClick = () => {
  // 예: window.open('https://www.instagram.com/계정명', '_blank')
  alert('인스타그램 채널 연결 준비 중입니다.')
}
</script>

<style scoped>
.home-container {
  animation: fadeIn 0.8s ease-out;
  background: #fafdfe;
  overflow-x: hidden;
}

/* ==========================================================================
   1. 히어로 섹션
   ========================================================================== */
.hero-section {
  position: relative;
  background: linear-gradient(180deg, #eaf6f8 0%, #f6fbfb 100%);
  padding: 130px 20px 140px;
  text-align: center;
  overflow: hidden;
}

.water-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.55;
  pointer-events: none;
}

.blob-1 {
  width: 500px;
  height: 400px;
  background: #a5e7ef;
  top: -100px;
  left: 20%;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  animation: waveMotion 12s infinite alternate ease-in-out;
}

.blob-2 {
  width: 450px;
  height: 450px;
  background: #ccfbf1;
  bottom: -80px;
  right: 15%;
  border-radius: 40% 60% 70% 30% / 50% 60% 30% 60%;
  animation: waveMotion 16s infinite alternate-reverse ease-in-out;
}

.blob-3 {
  width: 300px;
  height: 300px;
  background: #e0f2fe;
  top: 30%;
  left: -50px;
  filter: blur(50px);
}

.hero-content {
  position: relative;
  max-width: 880px;
  margin: 0 auto;
  z-index: 2;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(72, 181, 196, 0.35);
  color: #1f7d8a;
  padding: 8px 20px;
  border-radius: 40px;
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  box-shadow: 0 4px 15px rgba(72, 181, 196, 0.1);
  margin-bottom: 25px;
}

.water-drop-icon {
  font-size: 0.95rem;
}

.hero-title {
  font-size: 3rem;
  line-height: 1.35;
  font-weight: 900;
  color: #0f2c33;
  margin-bottom: 24px;
  word-break: keep-all;
  letter-spacing: -0.5px;
}

.water-gradient-text {
  background: linear-gradient(135deg, #1b8a99 0%, #48b5c4 50%, #2dd4bf 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-desc {
  font-size: 1.15rem;
  color: #52737a;
  line-height: 1.8;
  margin-bottom: 45px;
  word-break: keep-all;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.btn {
  padding: 16px 34px;
  border-radius: 35px;
  font-weight: 800;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-water {
  background: linear-gradient(135deg, #48b5c4 0%, #2ba5b5 100%);
  color: white;
  box-shadow: 0 10px 25px rgba(72, 181, 196, 0.35);
}

.btn-water:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 30px rgba(72, 181, 196, 0.45);
  background: linear-gradient(135deg, #3aaab9 0%, #1f8f9e 100%);
}

.btn-glass {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  color: #1f7d8a;
  border: 1px solid rgba(72, 181, 196, 0.35);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.03);
}

.btn-glass:hover {
  background: white;
  border-color: #48b5c4;
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(72, 181, 196, 0.15);
}

/* ==========================================================================
   2. 핵심 강점 섹션
   ========================================================================== */
.features-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 20px;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.sub-title {
  color: #48b5c4;
  font-weight: 800;
  font-size: 0.85rem;
  letter-spacing: 3px;
  display: block;
  margin-bottom: 10px;
}

.section-header h2 {
  font-size: 2.2rem;
  color: #0f2c33;
  margin-bottom: 12px;
  font-weight: 800;
}

.section-header p {
  color: #607e84;
  font-size: 1.05rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}

.glass-feature-card {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(210, 238, 242, 0.8);
  padding: 45px 35px;
  border-radius: 32px;
  box-shadow: 0 10px 30px rgba(72, 181, 196, 0.08);
  text-align: center;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.glass-feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(72, 181, 196, 0.18);
  border-color: #48b5c4;
  background: white;
}

.icon-circle {
  width: 70px;
  height: 70px;
  margin: 0 auto 24px;
  background: #ebf8fa;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  box-shadow: 0 6px 18px rgba(72, 181, 196, 0.15);
}

.glass-feature-card h3 {
  font-size: 1.3rem;
  color: #0f2c33;
  margin-bottom: 14px;
  font-weight: 800;
}

.glass-feature-card p {
  font-size: 0.95rem;
  color: #607e84;
  line-height: 1.7;
}

/* ==========================================================================
   3. 기법 퀵 프리뷰 섹션
   ========================================================================== */
.techniques-preview {
  background: linear-gradient(180deg, #f3fafb 0%, #eaf6f8 100%);
  padding: 110px 20px;
  border-radius: 50px;
  max-width: 1300px;
  margin: 0 auto;
}

.tech-card-grid {
  max-width: 1200px;
  margin: 0 auto 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}

.soft-tech-card {
  background: white;
  border: 1px solid rgba(195, 232, 237, 0.6);
  padding: 35px 26px;
  border-radius: 28px;
  box-shadow: 0 8px 24px rgba(72, 181, 196, 0.05);
  transition: all 0.3s ease;
}

.soft-tech-card:hover {
  transform: translateY(-6px);
  border-color: #48b5c4;
  box-shadow: 0 16px 35px rgba(72, 181, 196, 0.15);
}

.soft-badge {
  display: inline-block;
  background: #e3f5f7;
  color: #176f7a;
  font-size: 0.8rem;
  font-weight: 800;
  padding: 6px 14px;
  border-radius: 20px;
  margin-bottom: 16px;
}

.soft-tech-card h4 {
  font-size: 1.25rem;
  color: #0f2c33;
  margin-bottom: 10px;
  font-weight: 800;
}

.soft-tech-card p {
  font-size: 0.92rem;
  color: #607e84;
  line-height: 1.6;
}

.preview-cta {
  text-align: center;
}

.view-all-btn {
  display: inline-block;
  background: #0f2c33;
  color: white;
  padding: 16px 36px;
  border-radius: 35px;
  text-decoration: none;
  font-weight: 800;
  font-size: 0.98rem;
  transition: all 0.3s ease;
  box-shadow: 0 6px 20px rgba(15, 44, 51, 0.15);
}

.view-all-btn:hover {
  background: #48b5c4;
  color: #0f2c33;
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(72, 181, 196, 0.35);
}

/* ==========================================================================
   4. 빠른 견적 배너
   ========================================================================== */
.inquiry-banner-section {
  max-width: 1200px;
  margin: 100px auto 70px;
  padding: 0 20px;
}

.water-banner-inner {
  background: linear-gradient(135deg, #48b5c4 0%, #208796 100%);
  border-radius: 36px;
  padding: 55px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  flex-wrap: wrap;
  gap: 30px;
  box-shadow: 0 20px 45px rgba(72, 181, 196, 0.3);
  position: relative;
  overflow: hidden;
}

.banner-pill {
  background: rgba(255, 255, 255, 0.25);
  color: #ffffff;
  padding: 5px 14px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  display: inline-block;
  margin-bottom: 10px;
  backdrop-filter: blur(4px);
}

.banner-text h3 {
  font-size: 1.85rem;
  font-weight: 900;
  margin-bottom: 8px;
}

.banner-text p {
  font-size: 1.05rem;
  color: #e5f7f9;
}

.banner-action-btn {
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

.banner-action-btn:hover {
  background: #0f2c33;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(15, 44, 51, 0.25);
}

/* ==========================================================================
   5. 카카오톡 & 인스타그램 소셜 채널 섹션
   ========================================================================== */
.social-channels-section {
  max-width: 1200px;
  margin: 0 auto 120px;
  padding: 0 20px;
}

.social-header {
  text-align: center;
  margin-bottom: 40px;
}

.social-tag {
  color: #48b5c4;
  font-weight: 800;
  font-size: 0.82rem;
  letter-spacing: 2px;
  display: block;
  margin-bottom: 8px;
}

.social-header h2 {
  font-size: 1.9rem;
  color: #0f2c33;
  font-weight: 800;
  margin-bottom: 8px;
}

.social-header p {
  color: #607e84;
  font-size: 0.98rem;
}

.social-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
}

.social-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(210, 238, 242, 0.85);
  border-radius: 28px;
  padding: 30px 28px;
  display: flex;
  align-items: center;
  gap: 20px;
  text-decoration: none;
  box-shadow: 0 8px 25px rgba(72, 181, 196, 0.06);
  transition: all 0.3s ease;
  cursor: pointer;
}

.social-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 35px rgba(72, 181, 196, 0.16);
}

/* 카카오톡 카드 */
.kakao-card:hover {
  border-color: #fee500;
}

.kakao-icon-bg {
  background: #fee500;
  box-shadow: 0 6px 16px rgba(254, 229, 0, 0.35);
}

/* 인스타그램 카드 */
.insta-card:hover {
  border-color: #e1306c;
}

.insta-icon-bg {
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  box-shadow: 0 6px 16px rgba(220, 39, 67, 0.3);
}

.social-icon-box {
  width: 58px;
  height: 58px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.social-icon {
  font-size: 1.7rem;
}

.social-info {
  flex: 1;
}

.channel-label {
  font-size: 0.78rem;
  font-weight: 800;
  color: #48b5c4;
  letter-spacing: 0.5px;
  display: block;
  margin-bottom: 2px;
}

.social-info h3 {
  font-size: 1.25rem;
  font-weight: 900;
  color: #0f2c33;
  margin-bottom: 4px;
}

.social-info p {
  font-size: 0.88rem;
  color: #607e84;
  margin: 0;
  line-height: 1.4;
}

.arrow-circle {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #f0fafb;
  color: #1f7d8a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 0.95rem;
  transition: all 0.25s ease;
  flex-shrink: 0;
}

.social-card:hover .arrow-circle {
  background: #0f2c33;
  color: white;
  transform: translateX(4px);
}

/* ==========================================================================
   애니메이션 & 반응형
   ========================================================================== */
@keyframes waveMotion {
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(25px, 20px) scale(1.05); }
  100% { transform: translate(-20px, -15px) scale(0.95); }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.2rem;
  }
  .section-header h2, .social-header h2 {
    font-size: 1.8rem;
  }
  .water-banner-inner {
    flex-direction: column;
    text-align: center;
    padding: 40px 24px;
  }
  .social-card {
    padding: 24px 20px;
  }
  .techniques-preview {
    border-radius: 30px;
  }
}
</style>