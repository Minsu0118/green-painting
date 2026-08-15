<template>
  <div class="location-container">
    <!-- 부드러운 물방울 배경 블롭 -->
    <div class="water-blob blob-1"></div>
    <div class="water-blob blob-2"></div>

    <!-- 헤더 섹션 -->
    <section class="location-header">
      <div class="badge">
        <span class="badge-dot"></span>
        LOCATION & CONTACT
      </div>
      <h1 class="page-title">
        FIND <span class="gradient-text">US</span>
      </h1>
      <p class="page-desc">그린페인팅 작업실로 오시는 길을 안내해 드립니다.</p>
    </section>

    <!-- 지도 및 오시는 길 콘텐츠 영역 -->
    <div class="location-content">
      <!-- 1. 지도 시각화 영역 (구글맵 iframe 임베드) -->
      <div class="glass-card map-card">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.778819827653!2d127.01353237651034!3d37.56025192444641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3321528c301%3A0xa6187b47b01b0b7e!2z7ISc7Jq47IucIOyjkeq1rCDrhKTroZwxOTLro6E!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr"
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
        <h2>📍 GREEN PAINTING 작업실</h2>
        
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
                🚇 <strong>지하철</strong>: 2호선/6호선 신당역 또는 5호선/6호선 청구역 도보 5분<br />
                🚌 <strong>버스</strong>: 다산로/신당동 주민센터 정류장 하차
              </p>
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">⏰</div>
            <div class="info-text">
              <span class="label">운영시간</span>
              <p class="val">평일 09:00 AM - 06:00 PM (방문 샘플 검수는 사전 예약 필수)</p>
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
</template>

<script setup>
// 정적 오시는 길 페이지
</script>

<style scoped>
.location-container {
  position: relative;
  max-width: 1050px;
  margin: 0 auto;
  padding: 80px 20px 120px;
  animation: fadeIn 0.8s ease-out;
  overflow: hidden;
}

/* 물방울 배경 블롭 */
.water-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.45;
  pointer-events: none;
  z-index: 0;
}
.blob-1 { width: 450px; height: 400px; background: #cbf3f9; top: 0; left: -100px; }
.blob-2 { width: 400px; height: 450px; background: #ccfbf1; top: 45%; right: -80px; }

/* 헤더 */
.location-header {
  position: relative;
  z-index: 1;
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
  font-size: 2.8rem;
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

.page-desc { font-size: 1.08rem; color: #607e84; line-height: 1.7; }

/* 본문 레이아웃 */
.location-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 35px;
}

/* 글래스 카드 공통 */
.glass-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(210, 238, 242, 0.85);
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