<template>
  <div class="portfolio-page-wrapper">
    <div class="portfolio-content-container">
      <!-- 헤더 영역 -->
      <section class="portfolio-header">
        <div class="badge">
          <span class="badge-dot"></span>
          PORTFOLIO • 그린나염
        </div>
        <h1 class="page-title">
          그린나염 <span class="highlight-text">작업 포트폴리오</span>
        </h1>
        <p class="page-desc">그린나염의 대표 인쇄 및 나염 기법별 실제 작업 샘플입니다.</p>
      </section>

      <!-- 1. 주요 카테고리 필터 버튼 -->
      <div class="category-tabs">
        <button 
          v-for="cat in categories" 
          :key="cat.name"
          :class="['filter-btn', { active: selectedCategory === cat.name }]"
          @click="selectCategory(cat)"
        >
          {{ cat.name }}
        </button>
      </div>

      <!-- 2. 선택된 대분류 가이드 박스 -->
      <div class="technique-summary-box">
        <div class="summary-content">
          <span class="summary-badge">{{ currentCategoryInfo.name }}</span>
          <p>{{ currentCategoryInfo.description }}</p>
        </div>
      </div>

      <!-- 3. 포트폴리오 샘플 그리드 -->
      <div v-if="filteredItems.length === 0" class="empty-box">
        등록된 작업 샘플이 준비 중입니다.
      </div>

      <section v-else class="gallery-grid">
        <div 
          v-for="item in filteredItems" 
          :key="item.id" 
          class="gallery-card"
          @click="openModal(item)"
        >
          <div class="card-image-box">
            <span class="sample-no">NO. {{ item.no }}</span>
            <img :src="item.img" :alt="item.title" />
            <div class="hover-overlay">
              <span>상세보기 🔍</span>
            </div>
          </div>
          <div class="card-info">
            <div class="card-meta">
              <span class="cat-tag">{{ item.techniqueDetail }}</span>
            </div>
            <h3>{{ item.title }}</h3>
          </div>
        </div>
      </section>

      <!-- 4. 디자이너/고객용 고해상도 상세 모달 팝업 -->
      <Teleport to="body">
        <div v-if="activeModalItem" class="modal-backdrop" @click.self="closeModal">
          <div class="modal-card">
            <button class="modal-close-btn" @click="closeModal">✕</button>
            
            <div class="modal-body">
              <!-- 이미지 영역 -->
              <div class="modal-image-area">
                <img :src="activeModalItem.img" :alt="activeModalItem.title" />
                <span class="zoom-notice">💡 도안 질감 및 마감 디테일 확대 이미지</span>
              </div>

              <!-- 상세 내용 영역 -->
              <div class="modal-detail-area">
                <div class="modal-header-info">
                  <span class="modal-sample-no">Sample No. {{ activeModalItem.no }}</span>
                  <h2>{{ activeModalItem.title }}</h2>
                </div>

                <div class="info-group">
                  <div class="info-row">
                    <span class="label">카테고리:</span>
                    <span class="val">{{ activeModalItem.category }}</span>
                  </div>
                  <div class="info-row">
                    <span class="label">세부 기법:</span>
                    <span class="val highlight">{{ activeModalItem.techniqueDetail }}</span>
                  </div>
                </div>

                <!-- 문의 연동 가이드 박스 -->
                <div class="inquiry-guide">
                  <p>💡 견적 문의 시 <strong>"No. {{ activeModalItem.no }}번 {{ activeModalItem.techniqueDetail }} 스타일"</strong>이라고 말씀해주시면 빠른 상담이 가능합니다.</p>
                  <router-link to="/help" class="modal-inquiry-btn" @click="closeModal">
                    이 스타일로 견적 문의하기 ➔
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Teleport>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

// DTG 디지털 프린트
import dtg01 from '@/assets/images/dtg-digital-01.jpg'
import dtg02 from '@/assets/images/dtg-digital-02.jpg'
import dtg03 from '@/assets/images/dtg-digital-03.jpg'
import dtg04 from '@/assets/images/dtg-digital-04.jpg'
import dtg05 from '@/assets/images/dtg-digital-05.jpg'
import dtg06 from '@/assets/images/dtg-digital-06.jpg'
import dtg07 from '@/assets/images/dtg-digital-07.jpg'
import dtg08 from '@/assets/images/dtg-digital-08.jpg'
import dtg09 from '@/assets/images/dtg-digital-09.jpg'

// 졸 나염 시리즈
import jolBasic01 from '@/assets/images/jol-basic-01.jpg'
import jolBasic02 from '@/assets/images/jol-basic-02.jpg'
import jolBasic03 from '@/assets/images/jol-basic-03.jpg'
import jolBasic04 from '@/assets/images/jol-basic-04.jpg'
import jolBasic05 from '@/assets/images/jol-basic-05.jpg'
import jolBasic06 from '@/assets/images/jol-basic-06.jpg'
import jolBasic07 from '@/assets/images/jol-basic-07.jpg'
import jolBasic08 from '@/assets/images/jol-basic-08.jpg'
import jolBasic09 from '@/assets/images/jol-basic-09.jpg'
import jolBasic10 from '@/assets/images/jol-basic-10.jpg'
import jolBasic11 from '@/assets/images/jol-basic-11.jpg'
import jolBasic12 from '@/assets/images/jol-basic-12.jpg'
import jolBasic13 from '@/assets/images/jol-basic-13.jpg'
import jolBasic14 from '@/assets/images/jol-basic-14.jpg'
import jolBasic15 from '@/assets/images/jol-basic-15.jpg'
import jolBasic16 from '@/assets/images/jol-basic-16.jpg'
import jolBasic17 from '@/assets/images/jol-basic-17.jpg'

import jolCrack01 from '@/assets/images/jol-crack-01.jpg'
import jolKnit01 from '@/assets/images/jol-knit-01.jpg'
import jolPuff01 from '@/assets/images/jol-puff-01.jpg'

// 전사 시리즈
import transferDtf01 from '@/assets/images/transfer-dtf-01.jpg'
import transferDtf02 from '@/assets/images/transfer-dtf-02.jpg'
import transferDtf03 from '@/assets/images/transfer-dtf-03.jpg'
import transferDtf04 from '@/assets/images/transfer-dtf-04.jpg'
import transferDtf05 from '@/assets/images/transfer-dtf-05.jpg'
import transferDtf06 from '@/assets/images/transfer-dtf-06.jpg'

import transferFlocking01 from '@/assets/images/transfer-flocking-01.jpg'
import transferFlocking02 from '@/assets/images/transfer-flocking-02.jpg'
import transferFlocking03 from '@/assets/images/transfer-flocking-03.jpg'

import transferFoil01 from '@/assets/images/transfer-foil-01.jpg'
import transferGlitter01 from '@/assets/images/transfer-glitter-01.jpg'
import transferLaserCut01 from '@/assets/images/transfer-laser-cut-01.jpg'
import transferPuff01 from '@/assets/images/transfer-puff-01.jpg'
import transferSublimation01 from '@/assets/images/transfer-sublimation-01.jpg'
import transferSublimation02 from '@/assets/images/transfer-sublimation-02.jpg'
import transferSublimation03 from '@/assets/images/transfer-sublimation-03.jpg'

const categories = [
  { 
    name: 'ALL', 
    description: '그린나염에서 작업한 인쇄 및 전사 포트폴리오입니다.' 
  },
  { 
    name: '디지털 프린트', 
    description: '일러스트 및 고해상도 그래픽 도안을 섬세하게 표현하는 DTG 기법입니다.' 
  },
  { 
    name: '졸 나염', 
    description: '기본 졸나염부터 빈티지 크랙, 니트 전용, 3D 입체 발포까지 선명하고 내구성이 우수한 실크스크린 기법입니다.' 
  },
  { 
    name: '전사 인쇄', 
    description: 'DTF, 후로킹(벨벳), 호일, 글리터, 레이저커팅, 발포전사, 승화전사 등 다양한 특수 필름 및 열전사 기법입니다.' 
  }
]

const selectedCategory = ref('ALL')
const currentCategoryInfo = ref(categories[0])
const activeModalItem = ref(null)

// 모달 오픈 시 배경 스크롤 차단 설정
watch(activeModalItem, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

const portfolioList = ref([
  // --- [디지털 프린트] (1 ~ 9) ---
  { id: 1, no: '01', category: '디지털 프린트', techniqueDetail: '디지털 프린트 (DTG)', title: 'DTG 고해상도 그래픽 프린트 01', img: dtg01 },
  { id: 2, no: '02', category: '디지털 프린트', techniqueDetail: '디지털 프린트 (DTG)', title: 'DTG 고해상도 그래픽 프린트 02', img: dtg02 },
  { id: 3, no: '03', category: '디지털 프린트', techniqueDetail: '디지털 프린트 (DTG)', title: 'DTG 고해상도 그래픽 프린트 03', img: dtg03 },
  { id: 4, no: '04', category: '디지털 프린트', techniqueDetail: '디지털 프린트 (DTG)', title: 'DTG 고해상도 그래픽 프린트 04', img: dtg04 },
  { id: 5, no: '05', category: '디지털 프린트', techniqueDetail: '디지털 프린트 (DTG)', title: 'DTG 고해상도 그래픽 프린트 05', img: dtg05 },
  { id: 6, no: '06', category: '디지털 프린트', techniqueDetail: '디지털 프린트 (DTG)', title: 'DTG 고해상도 그래픽 프린트 06', img: dtg06 },
  { id: 7, no: '07', category: '디지털 프린트', techniqueDetail: '디지털 프린트 (DTG)', title: 'DTG 고해상도 그래픽 프린트 07', img: dtg07 },
  { id: 8, no: '08', category: '디지털 프린트', techniqueDetail: '디지털 프린트 (DTG)', title: 'DTG 고해상도 그래픽 프린트 08', img: dtg08 },
  { id: 9, no: '09', category: '디지털 프린트', techniqueDetail: '디지털 프린트 (DTG)', title: 'DTG 고해상도 그래픽 프린트 09', img: dtg09 },

  // --- [졸 나염] 시리즈 (10 ~ 29) ---
  { id: 10, no: '10', category: '졸 나염', techniqueDetail: '졸 나염', title: '클래식 졸 나염 프린팅 01', img: jolBasic01 },
  { id: 11, no: '11', category: '졸 나염', techniqueDetail: '졸 나염', title: '클래식 졸 나염 프린팅 02', img: jolBasic02 },
  { id: 12, no: '12', category: '졸 나염', techniqueDetail: '졸 나염', title: '클래식 졸 나염 프린팅 03', img: jolBasic03 },
  { id: 13, no: '13', category: '졸 나염', techniqueDetail: '졸 나염', title: '클래식 졸 나염 프린팅 04', img: jolBasic04 },
  { id: 14, no: '14', category: '졸 나염', techniqueDetail: '졸 나염', title: '클래식 졸 나염 프린팅 05', img: jolBasic05 },
  { id: 15, no: '15', category: '졸 나염', techniqueDetail: '졸 나염', title: '클래식 졸 나염 프린팅 06', img: jolBasic06 },
  { id: 16, no: '16', category: '졸 나염', techniqueDetail: '졸 나염', title: '클래식 졸 나염 프린팅 07', img: jolBasic07 },
  { id: 17, no: '17', category: '졸 나염', techniqueDetail: '졸 나염', title: '클래식 졸 나염 프린팅 08', img: jolBasic08 },
  { id: 18, no: '18', category: '졸 나염', techniqueDetail: '졸 나염', title: '클래식 졸 나염 프린팅 09', img: jolBasic09 },
  { id: 19, no: '19', category: '졸 나염', techniqueDetail: '졸 나염', title: '클래식 졸 나염 프린팅 10', img: jolBasic10 },
  { id: 20, no: '20', category: '졸 나염', techniqueDetail: '졸 나염', title: '클래식 졸 나염 프린팅 11', img: jolBasic11 },
  { id: 21, no: '21', category: '졸 나염', techniqueDetail: '졸 나염', title: '클래식 졸 나염 프린팅 12', img: jolBasic12 },
  { id: 22, no: '22', category: '졸 나염', techniqueDetail: '졸 나염', title: '클래식 졸 나염 프린팅 13', img: jolBasic13 },
  { id: 23, no: '23', category: '졸 나염', techniqueDetail: '졸 나염', title: '클래식 졸 나염 프린팅 14', img: jolBasic14 },
  { id: 24, no: '24', category: '졸 나염', techniqueDetail: '졸 나염', title: '클래식 졸 나염 프린팅 15', img: jolBasic15 },
  { id: 25, no: '25', category: '졸 나염', techniqueDetail: '졸 나염', title: '클래식 졸 나염 프린팅 16', img: jolBasic16 },
  { id: 26, no: '26', category: '졸 나염', techniqueDetail: '졸 나염', title: '클래식 졸 나염 프린팅 17', img: jolBasic17 },
  { id: 27, no: '27', category: '졸 나염', techniqueDetail: '졸 크랙', title: '빈티지 졸 크랙 나염', img: jolCrack01 },
  { id: 28, no: '28', category: '졸 나염', techniqueDetail: '졸 니트', title: '니트 원단 전용 졸 나염', img: jolKnit01 },
  { id: 29, no: '29', category: '졸 나염', techniqueDetail: '졸 발포', title: '3D 입체 졸 발포 나염', img: jolPuff01 },

  // --- [전사 인쇄] 시리즈 (30 ~ 45) ---
  { id: 30, no: '30', category: '전사 인쇄', techniqueDetail: 'DTF 전사', title: 'DTF 고화질 필름 전사 01', img: transferDtf01 },
  { id: 31, no: '31', category: '전사 인쇄', techniqueDetail: 'DTF 전사', title: 'DTF 고화질 필름 전사 02', img: transferDtf02 },
  { id: 32, no: '32', category: '전사 인쇄', techniqueDetail: 'DTF 전사', title: 'DTF 고화질 필름 전사 03', img: transferDtf03 },
  { id: 33, no: '33', category: '전사 인쇄', techniqueDetail: 'DTF 전사', title: 'DTF 고화질 필름 전사 04', img: transferDtf04 },
  { id: 34, no: '34', category: '전사 인쇄', techniqueDetail: 'DTF 전사', title: 'DTF 고화질 필름 전사 05', img: transferDtf05 },
  { id: 35, no: '35', category: '전사 인쇄', techniqueDetail: 'DTF 전사', title: 'DTF 고화질 필름 전사 06', img: transferDtf06 },
  { id: 36, no: '36', category: '전사 인쇄', techniqueDetail: '후로킹 전사', title: '입체 벨벳 후로킹 전사 01', img: transferFlocking01 },
  { id: 37, no: '37', category: '전사 인쇄', techniqueDetail: '후로킹 전사', title: '입체 벨벳 후로킹 전사 02', img: transferFlocking02 },
  { id: 38, no: '38', category: '전사 인쇄', techniqueDetail: '후로킹 전사', title: '입체 벨벳 후로킹 전사 03', img: transferFlocking03 },
  { id: 39, no: '39', category: '전사 인쇄', techniqueDetail: '호일 전사', title: '메탈릭 호일 필름 전사', img: transferFoil01 },
  { id: 40, no: '40', category: '전사 인쇄', techniqueDetail: '글리터 전사', title: '글리터 반짝이 커팅 전사', img: transferGlitter01 },
  { id: 41, no: '41', category: '전사 인쇄', techniqueDetail: '레이저 커팅 전사', title: '정밀 레이저 커팅 전사', img: transferLaserCut01 },
  { id: 42, no: '42', category: '전사 인쇄', techniqueDetail: '발포 전사', title: '3D 입체 발포 전사', img: transferPuff01 },
  { id: 43, no: '43', category: '전사 인쇄', techniqueDetail: '승화 전사', title: '기능성 승화 전사 01', img: transferSublimation01 },
  { id: 44, no: '44', category: '전사 인쇄', techniqueDetail: '승화 전사', title: '기능성 승화 전사 02', img: transferSublimation02 },
  { id: 45, no: '45', category: '전사 인쇄', techniqueDetail: '승화 전사', title: '기능성 승화 전사 03', img: transferSublimation03 }
])

const selectCategory = (cat) => {
  selectedCategory.value = cat.name
  currentCategoryInfo.value = cat
}

const filteredItems = computed(() => {
  if (selectedCategory.value === 'ALL') return portfolioList.value
  return portfolioList.value.filter(item => item.category === selectedCategory.value)
})

const openModal = (item) => {
  activeModalItem.value = item
}

const closeModal = () => {
  activeModalItem.value = null
}
</script>

<style scoped>
/* 페이지 전체 */
.portfolio-page-wrapper {
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
  overflow: hidden;
  animation: fadeIn 0.6s ease-out;
}

/* 중앙 정렬 컨테이너 */
.portfolio-content-container {
  max-width: 1160px;
  margin: 0 auto;
  padding: 80px 24px 120px;
}

/* 헤더 영역 */
.portfolio-header {
  text-align: center;
  margin-bottom: 36px;
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

/* 1. 카테고리 탭 버튼 */
.category-tabs {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.filter-btn {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  color: #64748b;
  padding: 10px 22px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-btn:hover {
  border-color: #0f172a;
  color: #0f172a;
}

.filter-btn.active {
  background: #0f172a;
  color: #ffffff;
  border-color: #0f172a;
}

/* 2. 대분류 요약 가이드 박스 */
.technique-summary-box {
  background: #f8fafc;
  border: 1px solid #f1f5f9;
  border-radius: 16px;
  padding: 18px 24px;
  margin-bottom: 40px;
  text-align: center;
}

.summary-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.summary-badge {
  background: #0f172a;
  color: #5eead4;
  padding: 4px 12px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.8rem;
}

.summary-content p {
  color: #475569;
  font-size: 0.92rem;
  margin: 0;
  font-weight: 500;
}

.empty-box {
  text-align: center;
  padding: 80px 20px;
  background: #f8fafc;
  border-radius: 16px;
  color: #94a3b8;
  border: 1px solid #e2e8f0;
}

/* 3. 갤러리 그리드 */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}

.gallery-card {
  background: #ffffff;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.02);
}

.gallery-card:hover {
  border-color: #0d9488;
}

.card-image-box {
  position: relative;
  height: 250px;
  overflow: hidden;
  background: #f8fafc;
}

.sample-no {
  position: absolute;
  top: 12px;
  left: 12px;
  background: rgba(15, 23, 42, 0.85);
  color: #ffffff;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  z-index: 2;
  backdrop-filter: blur(4px);
}

.card-image-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-card:hover .card-image-box img {
  transform: scale(1.03);
}

.hover-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 23, 42, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.hover-overlay span {
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.8);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.82rem;
  font-weight: 700;
  background: rgba(15, 23, 42, 0.6);
}

.gallery-card:hover .hover-overlay {
  opacity: 1;
}

.card-info {
  padding: 20px;
}

.card-meta {
  margin-bottom: 6px;
}

.cat-tag {
  color: #0d9488;
  font-size: 0.78rem;
  font-weight: 700;
}

.card-info h3 {
  font-size: 1.05rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 4. 모달 팝업 스타일 */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(15, 23, 42, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(4px);
}

.modal-card {
  background: #ffffff;
  border-radius: 24px;
  width: 92%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  animation: modalIn 0.25s ease-out;
}

.modal-close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  background: #f1f5f9;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  font-size: 1rem;
  cursor: pointer;
  z-index: 10;
  color: #64748b;
  transition: all 0.2s;
}

.modal-close-btn:hover {
  background: #0f172a;
  color: #ffffff;
}

.modal-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 36px;
  gap: 32px;
}

.modal-image-area {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.modal-image-area img {
  width: 100%;
  border-radius: 16px;
  object-fit: cover;
  max-height: 420px;
  border: 1px solid #e2e8f0;
}

.zoom-notice {
  font-size: 0.78rem;
  color: #94a3b8;
  text-align: center;
}

.modal-detail-area {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.modal-sample-no {
  color: #0d9488;
  font-weight: 800;
  font-size: 0.88rem;
}

.modal-header-info h2 {
  font-size: 1.4rem;
  font-weight: 800;
  color: #0f172a;
  margin: 4px 0 16px 0;
  letter-spacing: -0.3px;
}

.info-group {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 16px 20px;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
}

.info-row {
  display: flex;
  font-size: 0.9rem;
}

.info-row .label {
  width: 80px;
  color: #64748b;
  font-weight: 600;
}

.info-row .val {
  color: #0f172a;
  font-weight: 700;
}

.info-row .val.highlight {
  color: #0d9488;
  font-weight: 800;
}

.inquiry-guide {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 20px;
  border-radius: 16px;
}

.inquiry-guide p {
  font-size: 0.88rem;
  color: #475569;
  margin-bottom: 14px;
  line-height: 1.55;
}

.modal-inquiry-btn {
  display: block;
  text-align: center;
  background: #0d9488;
  color: #ffffff;
  padding: 13px 0;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.92rem;
  transition: all 0.2s ease;
}

.modal-inquiry-btn:hover {
  background: #14b8a6;
}

@keyframes modalIn {
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 850px) {
  .page-title { font-size: 2.1rem; }
  .modal-body {
    grid-template-columns: 1fr;
    padding: 24px;
  }
}
</style>