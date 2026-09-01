<template>
  <div class="location-page-wrapper">
    <!-- 화면 양 끝까지 확장되는 부드러운 물방울 배경 블롭 -->
    <div class="water-blob blob-1"></div>
    <div class="water-blob blob-2"></div>

    <div class="location-content-container">
      <!-- 헤더 섹션 -->
      <section class="location-header">
        <div class="badge">
          <span class="badge-dot"></span>
          LOCATION & CONTACT
        </div>
        <h1 class="page-title">
          FIND <span class="gradient-text">US</span>
        </h1>
        <p class="page-desc">그린나염 작업실로 오시는 길을 안내해 드립니다.</p>
      </section>

      <!-- 지도 및 오시는 길 콘텐츠 영역 -->
      <div class="location-content">
        <!-- 1. 지도 시각화 영역 (정확한 주소 핀이 바로 표시되는 구글맵) -->
        <div class="glass-card map-card">
          <iframe
            src="https://maps.google.com/maps?q=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EC%A4%91%EA%B5%AC%20%EB%8B%A4%EC%82%B0%EB%A1%9C%2036%EA%B0%80%EA%B8%B8%2022&t=m&z=17&output=embed&iwloc=near"
            width="100%"
            height="420"
            style="border:0; border-radius: 22px;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <!-- 2. 위치 상세 정보 및 안내 카드 -->
        <div class="glass-card info-card">
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
                  🚇 <strong>지하철</strong>: 2호선: 신당역 도보 15분 / 5호선: 청구역 도보 20분<br />
                  🚌 <strong>버스</strong>: 성동01(마을): 신당역하나은행 정류장 하차
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
                <p class="val phone-highlight">TEL: 02-2237-0642 | H.P: 010-3664-0642</p>
              </div>
            </div>
          </div>

          <!-- 네이버 / 카카오 지도 길찾기 버튼 그룹 -->
          <div class="map-buttons">
            <a
              href="https://map.kakao.com/link/search/서울시 중구 다산로 36가길 22"
              target="_blank"
              rel="noopener noreferrer"
              class="map-btn kakao-btn"
            >
              🟡 카카오맵 길찾기
            </a>
            <a
              href="https://map.naver.com/v5/search/서울시 중구 다산로 36가길 22"
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
/* 화면 가로 전체 100%를 채우는 최외곽 래퍼 */
.location-page-wrapper {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(180deg, #f0fafd 0%, #e6f6f8 35%, #ffffff 100%);
  overflow: hidden;
  animation: fadeIn 0.8s ease-out;
}

/* 중앙 정렬 콘텐츠 컨테이너 */
.location-content-container {
  position: relative;
  z-index: 1;
  max-width: 1050px;
  margin: 0 auto;
  padding: 90px 24px 130px;
}

/* 화면 양 끝으로 은은하게 퍼지는 물방울 블롭 */
.water-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.5;
  pointer-events: none;
  z-index: 0;
}
.blob-1 { width: 550px; height: 500px; background: #cbf3f9; top: -60px; left: -120px; }
.blob-2 { width: 500px; height: 550px; background: #ccfbf1; top: 40%; right: -120px; }

/* 헤더 */
.location-header {
  text-align: center;
  margin-bottom: 50px;
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
  margin-bottom: 18px;
}

.badge-dot { width: 6px; height: 6px; background-color: #48b5c4; border-radius: 50%; }

.page-title {
  font-size: 2.9rem;
  font-weight: 900;
  color: #0f2c33;
  line-height: 1.3;
  margin-bottom: 16px;
  letter-spacing: -0.5px;
}

.gradient-text {
  background: linear-gradient(135deg, #1b8a99 0%, #48b5c4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.page-desc { font-size: 1.1rem; color: #607e84; line-height: 1.7; }

/* 본문 레이아웃 */
.location-content {
  display: flex;
  flex-direction: column;
  gap: 35px;
}

/* 글래스 카드 공통 */
.glass-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(210, 238, 242, 0.9);
  border-radius: 32px;
  box-shadow: 0 10px 30px rgba(72, 181, 196, 0.08);
}

.map-card {
  padding: 14px;
}

.info-card {
  padding: 45px 40px;
}

.info-card h2 {
  font-size: 1.6rem;
  font-weight: 800;
  color: #0f2c33;
  margin-bottom: 30px;
  border-bottom: 1px solid #eef7f8;
  padding-bottom: 18px;
}

.info-grid {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 18px;
}

.info-icon {
  width: 48px;
  height: 48px;
  background: #eef9fa;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.35rem;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(72, 181, 196, 0.12);
}

.info-text {
  flex: 1;
}

.info-item .label {
  font-size: 0.82rem;
  font-weight: 800;
  color: #48b5c4;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: block;
  margin-bottom: 4px;
}

.info-item .val {
  color: #475569;
  font-size: 1rem;
  line-height: 1.65;
  margin: 0;
}

.phone-highlight {
  font-weight: 800;
  color: #0f2c33 !important;
  font-size: 1.15rem !important;
}

/* 길찾기 버튼 */
.map-buttons {
  display: flex;
  gap: 15px;
  margin-top: 35px;
  flex-wrap: wrap;
}

.map-btn {
  flex: 1;
  min-width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 24px;
  border-radius: 20px;
  text-decoration: none;
  font-weight: 800;
  font-size: 0.98rem;
  transition: all 0.25s ease;
}

.kakao-btn {
  background: #fee500;
  color: #191919;
  box-shadow: 0 6px 20px rgba(254, 229, 0, 0.35);
}

.kakao-btn:hover {
  background: #ebd200;
  transform: translateY(-2px);
}

.naver-btn {
  background: #03cf5d;
  color: white;
  box-shadow: 0 6px 20px rgba(3, 207, 93, 0.28);
}

.naver-btn:hover {
  background: #02b34f;
  transform: translateY(-2px);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .page-title { font-size: 2.1rem; }
  .info-card { padding: 30px 20px; }
  .map-buttons { flex-direction: column; }
}
</style>