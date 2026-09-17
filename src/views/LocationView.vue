<template>
  <div class="location-page-wrapper">
    <div class="location-content-container">
      <!-- 헤더 섹션 -->
      <section class="location-header">
        <div class="badge">
          <span class="badge-dot"></span>
          오시는 길 • 그린나염
        </div>
        <h1 class="page-title">
          그린나염 <span class="highlight-text">오시는 길</span>
        </h1>
        <p class="page-desc">그린나염 작업실 방문을 위한 위치 및 상세 안내입니다.</p>
      </section>

      <!-- 지도 및 오시는 길 콘텐츠 영역 -->
      <div class="location-content">
        <!-- 1. 지도 시각화 영역 -->
        <div class="card-box map-card">
          <iframe
            src="https://maps.google.com/maps?q=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EC%A4%91%EA%B5%AC%20%EB%8B%A4%EC%82%B0%EB%A1%9C%2036%EA%B0%80%EA%B8%B8%2022&t=m&z=17&output=embed&iwloc=near"
            width="100%"
            height="420"
            style="border:0; border-radius: 16px;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <!-- 2. 위치 상세 정보 및 안내 카드 -->
        <div class="card-box info-card">
          <h2>📍 그린나염 작업실</h2>
          
          <div class="info-grid">
            <div class="info-item">
              <div class="info-icon">🏢</div>
              <div class="info-text">
                <span class="label">주소</span>
                <p class="val">서울특별시 중구 다산로 36가길 22 (신당동) 지하2층 작업실</p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">🚇</div>
              <div class="info-text">
                <span class="label">대중교통</span>
                <p class="val">
                  <strong>지하철</strong>: 2호선 신당역 도보 15분 / 5호선 청구역 도보 20분<br />
                  <strong>버스</strong>: 성동01(마을) 신당역하나은행 정류장 하차
                </p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">⏰</div>
              <div class="info-text">
                <span class="label">운영시간</span>
                <p class="val">평일 09:00 AM - 06:00 PM</p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">📞</div>
              <div class="info-text">
                <span class="label">직통 연락처</span>
                <p class="val phone-highlight">
                  TEL: <a href="tel:02-2237-0642" class="phone-link">02-2237-0642</a> | 
                  H.P: <a href="tel:010-3664-0642" class="phone-link">010-3664-0642</a>
                </p>
              </div>
            </div>
          </div>

          <!-- 네이버 / 카카오 지도 길찾기 버튼 그룹 -->
          <div class="map-buttons">
            <a
              href="https://map.kakao.com/link/search/%EC%84%9C%EC%9A%B8%EC%8B%9C%20%EC%A4%91%EA%B5%AC%20%EB%8B%A4%EC%82%B0%EB%A1%9C%2036%EA%B0%80%EA%B8%B8%2022"
              target="_blank"
              rel="noopener noreferrer"
              class="map-btn kakao-btn"
            >
              🟡 카카오맵 길찾기
            </a>
            <a
              href="https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%8B%9C%20%EC%A4%91%EA%B5%AC%20%EB%8B%A4%EC%82%B0%EB%A1%9C%2036%EA%B0%80%EA%B8%B8%2022"
              target="_blank"
              rel="noopener noreferrer"
              class="map-btn naver-btn"
            >
              🟢 네이버 지도 길찾기
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 정적 오시는 길 페이지
</script>

<style scoped>
/* 페이지 최외곽 */
.location-page-wrapper {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
  overflow: hidden;
  animation: fadeIn 0.6s ease-out;
}

/* 중앙 정렬 콘텐츠 컨테이너 */
.location-content-container {
  max-width: 1050px;
  margin: 0 auto;
  padding: 80px 24px 120px;
}

/* 헤더 */
.location-header {
  text-align: center;
  margin-bottom: 40px;
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
  margin-bottom: 14px;
  word-break: keep-all;
  letter-spacing: -0.5px;
}

.highlight-text {
  color: #0d9488;
}

.page-desc { 
  font-size: 1.08rem; 
  color: #64748b; 
}

/* 본문 레이아웃 */
.location-content {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

/* 카드 공통 */
.card-box {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.03);
}

.map-card {
  padding: 12px;
}

.info-card {
  padding: 40px;
}

.info-card h2 {
  font-size: 1.4rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 28px;
  border-bottom: 1px solid #f1f5f9;
  padding-bottom: 18px;
  letter-spacing: -0.3px;
}

.info-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.info-icon {
  width: 44px;
  height: 44px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.info-text {
  flex: 1;
}

.info-item .label {
  font-size: 0.8rem;
  font-weight: 700;
  color: #0d9488;
  letter-spacing: 0.5px;
  display: block;
  margin-bottom: 3px;
}

.info-item .val {
  color: #475569;
  font-size: 0.98rem;
  line-height: 1.6;
  margin: 0;
}

.phone-highlight {
  font-weight: 800;
  color: #0f172a !important;
  font-size: 1.08rem !important;
}

.phone-link {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;
}

.phone-link:hover {
  color: #0d9488;
  text-decoration: underline;
}

/* 길찾기 버튼 */
.map-buttons {
  display: flex;
  gap: 12px;
  margin-top: 32px;
  flex-wrap: wrap;
}

.map-btn {
  flex: 1;
  min-width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 20px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.92rem;
  transition: all 0.2s ease;
}

.kakao-btn {
  background: #fee500;
  color: #191919;
}

.kakao-btn:hover {
  background: #fada00;
}

.naver-btn {
  background: #03cf5d;
  color: #ffffff;
}

.naver-btn:hover {
  background: #02b752;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .page-title { font-size: 2.1rem; }
  .info-card { padding: 24px 20px; }
  .map-buttons { flex-direction: column; }
}
</style>