<template>
  <div class="portfolio-container">
    <!-- 부드러운 물방울 배경 블롭 -->
    <div class="water-blob blob-1"></div>
    <div class="water-blob blob-2"></div>

    <!-- 헤더 영역 -->
    <section class="portfolio-header">
      <div class="badge">
        <span class="badge-dot"></span>
        PORTFOLIO
      </div>
      <h1 class="page-title">
        그린페인팅 <span class="gradient-text">작업 포트폴리오</span>
      </h1>
      <p class="page-desc">그린페인팅의 대표 인쇄 및 나염 기법별 실제 작업 샘플입니다.</p>
    </section>

    <!-- 1. 주요 카테고리 필터 버튼 (4개로 명확하게 통합) -->
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

    <!-- 2. 선택된 대분류 가이드 박스 (글래스 스타일) -->
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
          <!-- 문의 시 활용할 샘플 식별 번호 -->
          <span class="sample-no">NO. {{ item.no }}</span>
          <img :src="item.img" :alt="item.title" />
          <div class="hover-overlay">
            <span>확대 및 상세보기 🔍</span>
          </div>
        </div>
        <div class="card-info">
          <div class="card-meta">
            <span class="no-tag">No. {{ item.no }}</span>
            <span class="cat-tag">{{ item.techniqueDetail }}</span>
          </div>
          <h3>{{ item.title }}</h3>
          <p class="spec-text">{{ item.spec }}</p>
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
                <div class="info-row">
                  <span class="label">특징/스펙:</span>
                  <span class="val">{{ activeModalItem.spec }}</span>
                </div>
              </div>

              <div class="modal-desc-box">
                <p class="modal-desc">{{ activeModalItem.description }}</p>
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
</template>

<script setup>
import { ref, computed } from 'vue'

// -------------------------------------------------------------
// 1. 이미지 파일 Import (Assets 폴더 매핑)
// -------------------------------------------------------------

// DTG 디지털 프린트 (9개)
import dtg01 from '@/assets/images/dtg-digital-01.jpg'
import dtg02 from '@/assets/images/dtg-digital-02.jpg'
import dtg03 from '@/assets/images/dtg-digital-03.jpg'
import dtg04 from '@/assets/images/dtg-digital-04.jpg'
import dtg05 from '@/assets/images/dtg-digital-05.jpg'
import dtg06 from '@/assets/images/dtg-digital-06.jpg'
import dtg07 from '@/assets/images/dtg-digital-07.jpg'
import dtg08 from '@/assets/images/dtg-digital-08.jpg'
import dtg09 from '@/assets/images/dtg-digital-09.jpg'

// 졸 나염 시리즈 (기본 17개 + 크랙, 니트, 발포)
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

// 전사 시리즈 (DTF, 후로킹, 호일, 글리터, 레이저커팅, 발포전사, 스팡클, 승화전사)
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
import transferSpangle01 from '@/assets/images/transfer-spangle-01.jpg'
import transferSublimation01 from '@/assets/images/transfer-sublimation-01.jpg'
import transferSublimation02 from '@/assets/images/transfer-sublimation-02.jpg'
import transferSublimation03 from '@/assets/images/transfer-sublimation-03.jpg'

// -------------------------------------------------------------
// 2. 대분류 카테고리 버튼 정의 (4개 버튼)
// -------------------------------------------------------------
const categories = [
  { 
    name: 'ALL', 
    description: '그린페인팅에서 직접 작업한 전체 인쇄 및 전사 포트폴리오입니다.' 
  },
  { 
    name: '디지털 프린트', 
    description: '원단에 직접 잉크를 쏘아 세밀한 일러스트 및 고해상도 그래픽 도안을 섬세하게 표현하는 DTG 기법입니다.' 
  },
  { 
    name: '졸 나염', 
    description: '기본 졸나염부터 빈티지 크랙, 니트 전용, 3D 입체 발포까지 선명하고 내구성이 우수한 실크스크린 기법입니다.' 
  },
  { 
    name: '전사 인쇄', 
    description: 'DTF, 후로킹(벨벳), 호일, 글리터, 레이저커팅, 발포전사, 스팡클, 승화전사 등 다양한 특수 필름 및 열전사 기법입니다.' 
  }
]

const selectedCategory = ref('ALL')
const currentCategoryInfo = ref(categories[0])
const activeModalItem = ref(null)

// -------------------------------------------------------------
// 3. 포트폴리오 데이터 구성 (대분류 + 세부 기술 및 가이드 설명)
// -------------------------------------------------------------
const portfolioList = ref([
  // --- [디지털 프린트] (1 ~ 9) ---
  { id: 1, no: '01', category: '디지털 프린트', techniqueDetail: '디지털 프린트 (DTG)', title: 'DTG 고해상도 그래픽 프린트 01', spec: '면 100% / DTG 잉크젯', description: '원단 질감을 살려 디테일한 라인과 명암을 섬세하게 연출한 DTG 인쇄입니다.', img: dtg01 },
  { id: 2, no: '02', category: '디지털 프린트', techniqueDetail: '디지털 프린트 (DTG)', title: 'DTG 고해상도 그래픽 프린트 02', spec: '면 혼방 / DTG 잉크젯', description: '이질감이 적고 부드러운 착용감을 선사하는 고화질 디지털 프린팅입니다.', img: dtg02 },
  { id: 3, no: '03', category: '디지털 프린트', techniqueDetail: '디지털 프린트 (DTG)', title: 'DTG 고해상도 그래픽 프린트 03', spec: '기모 스웨트 / DTG 잉크젯', description: '복잡한 일러스트레이션 아트워크를 한 터치로 원단 표면에 정교하게 표현했습니다.', img: dtg03 },
  { id: 4, no: '04', category: '디지털 프린트', techniqueDetail: '디지털 프린트 (DTG)', title: 'DTG 고해상도 그래픽 프린트 04', spec: '20수 면티 / DTG 잉크젯', description: '잉크 침투력이 뛰어나 발색이 깊고 섬유 고유의 통기성을 살려줍니다.', img: dtg04 },
  { id: 5, no: '05', category: '디지털 프린트', techniqueDetail: '디지털 프린트 (DTG)', title: 'DTG 고해상도 그래픽 프린트 05', spec: '특양면 / DTG 잉크젯', description: '다채로운 컬러 믹스 및 그라데이션 표현에 최적화된 작업물입니다.', img: dtg05 },
  { id: 6, no: '06', category: '디지털 프린트', techniqueDetail: '디지털 프린트 (DTG)', title: 'DTG 고해상도 그래픽 프린트 06', spec: '면 100% / DTG 잉크젯', description: '빈티지한 미세 톤까지 밀도 높게 재현해내는 프리미엄 DTG 인쇄 기술입니다.', img: dtg06 },
  { id: 7, no: '07', category: '디지털 프린트', techniqueDetail: '디지털 프린트 (DTG)', title: 'DTG 고해상도 그래픽 프린트 07', spec: '덤블 가공 원단 / DTG', description: '아티스트 굿즈나 정밀한 해상도가 요구되는 도안 제작 시 권장하는 방식입니다.', img: dtg07 },
  { id: 8, no: '08', category: '디지털 프린트', techniqueDetail: '디지털 프린트 (DTG)', title: 'DTG 고해상도 그래픽 프린트 08', spec: '헤비웨이트 면 / DTG', description: '어두운 원단 위에서도 백색 밑판을 입혀 선명한 발색을 보장하는 DTG 프린팅입니다.', img: dtg08 },
  { id: 9, no: '09', category: '디지털 프린트', techniqueDetail: '디지털 프린트 (DTG)', title: 'DTG 고해상도 그래픽 프린트 09', spec: '면 100% / DTG 잉크젯', description: '소량 단판 작업 시 빠르고 정밀하게 완성되는 고급 디지털 인쇄 결과물입니다.', img: dtg09 },

  // --- [졸 나염] 시리즈 (10 ~ 29) ---
  { id: 10, no: '10', category: '졸 나염', techniqueDetail: '졸 나염', title: '클래식 졸 나염 프린팅 01', spec: '20수 면 원단 / 졸 잉크', description: '가장 표준적인 나염 인쇄로 뚜렷한 외곽선과 뛰어난 은폐력을 자랑합니다.', img: jolBasic01 },
  { id: 11, no: '11', category: '졸 나염', techniqueDetail: '졸 나염', title: '클래식 졸 나염 프린팅 02', spec: '30수 면 원단 / 졸 잉크', description: '대량 제작 시 단가를 대폭 절감할 수 있는 고효율 실크스크린 나염 방식입니다.', img: jolBasic02 },
  { id: 12, no: '12', category: '졸 나염', techniqueDetail: '졸 나염', title: '클래식 졸 나염 프린팅 03', spec: '쿨에버 / 졸 잉크', description: '반복 세탁에도 내구성이 우수하여 기능성 단체복 제작에 적합합니다.', img: jolBasic03 },
  { id: 13, no: '13', category: '졸 나염', techniqueDetail: '졸 나염', title: '클래식 졸 나염 프린팅 04', spec: '특양면 / 졸 잉크', description: '어두운 바탕 색상 위에서도 원래의 로고 색상을 또렷하게 표현합니다.', img: jolBasic04 },
  { id: 14, no: '14', category: '졸 나염', techniqueDetail: '졸 나염', title: '클래식 졸 나염 프린팅 05', spec: '면 100% / 졸 잉크', description: '볼드한 폰트 및 단색 브랜드 아이덴티티 표현에 매우 깔끔합니다.', img: jolBasic05 },
  { id: 15, no: '15', category: '졸 나염', techniqueDetail: '졸 나염', title: '클래식 졸 나염 프린팅 06', spec: '20수 면 / 졸 잉크', description: '동일 디자인 대량 수량 진행 시 우수한 균일도를 선사하는 인쇄입니다.', img: jolBasic06 },
  { id: 16, no: '16', category: '졸 나염', techniqueDetail: '졸 나염', title: '클래식 졸 나염 프린팅 07', spec: '면 혼방 / 졸 잉크', description: '도막 두께를 세밀하게 조절하여 착용 시 둔탁함 없는 착용감을 줍니다.', img: jolBasic07 },
  { id: 17, no: '17', category: '졸 나염', techniqueDetail: '졸 나염', title: '클래식 졸 나염 프린팅 08', spec: '기모 스웨트 / 졸 잉크', description: '결이 두꺼운 겨울철 기모 의류 표면에도 번짐 없이 또렷하게 안착됩니다.', img: jolBasic08 },
  { id: 18, no: '18', category: '졸 나염', techniqueDetail: '졸 나염', title: '클래식 졸 나염 프린팅 09', spec: '20수 면 / 졸 잉크', description: '선명도가 우수하여 시각적 전달력을 극대화해 주는 졸 나염 샘플입니다.', img: jolBasic09 },
  { id: 19, no: '19', category: '졸 나염', techniqueDetail: '졸 나염', title: '클래식 졸 나염 프린팅 10', spec: '면 100% / 졸 잉크', description: '원단과의 결합력이 뛰어난 전문 졸 바인더를 적용한 프린팅입니다.', img: jolBasic10 },
  { id: 20, no: '20', category: '졸 나염', techniqueDetail: '졸 나염', title: '클래식 졸 나염 프린팅 11', spec: '특양면 / 졸 잉크', description: '미세한 자막 및 레터링 도안의 스크린 판을 정교하게 구현했습니다.', img: jolBasic11 },
  { id: 21, no: '21', category: '졸 나염', techniqueDetail: '졸 나염', title: '클래식 졸 나염 프린팅 12', spec: '20수 면 / 졸 잉크', description: '다색 나염 판 제작을 통해 유격 없이 정밀하게 중첩 정합되었습니다.', img: jolBasic12 },
  { id: 22, no: '22', category: '졸 나염', techniqueDetail: '졸 나염', title: '클래식 졸 나염 프린팅 13', spec: '면 100% / 졸 잉크', description: '세탁 견뢰도가 우수하여 오래 착용해도 갈라짐이 적은 고품질 나염입니다.', img: jolBasic13 },
  { id: 23, no: '23', category: '졸 나염', techniqueDetail: '졸 나염', title: '클래식 졸 나염 프린팅 14', spec: '30수 면 / 졸 잉크', description: '얇은 여름 원단에도 울지 않고 표면에 가볍게 안착됩니다.', img: jolBasic14 },
  { id: 24, no: '24', category: '졸 나염', techniqueDetail: '졸 나염', title: '클래식 졸 나염 프린팅 15', spec: '면 혼방 / 졸 잉크', description: '콘트라스트가 강한 디자인 표현에 최적인 표준 졸 나염입니다.', img: jolBasic15 },
  { id: 25, no: '25', category: '졸 나염', techniqueDetail: '졸 나염', title: '클래식 졸 나염 프린팅 16', spec: '특양면 / 졸 잉크', description: '정확한 열건조 과정을 거쳐 마감 품질을 끌어올린 실크스크린 작업입니다.', img: jolBasic16 },
  { id: 26, no: '26', category: '졸 나염', techniqueDetail: '졸 나염', title: '클래식 졸 나염 프린팅 17', spec: '20수 면 / 졸 잉크', description: '기본 라운드티 나염 단체 제작 시 권장하는 표준 작업물입니다.', img: jolBasic17 },
  { id: 27, no: '27', category: '졸 나염', techniqueDetail: '졸 크랙', title: '빈티지 졸 크랙 나염', spec: '면 100% / 크랙 바인더', description: '특수 크랙 바인더를 사용해 표면에 빈티지한 미세 균열 텍스처를 구현한 졸나염 응용 기법입니다.', img: jolCrack01 },
  { id: 28, no: '28', category: '졸 나염', techniqueDetail: '졸 니트', title: '니트 원단 전용 졸 나염', spec: '니트 원단 / 신축 전용 잉크', description: '신축성이 높은 니트 원단 결을 따라 잉크가 함께 탄력 있게 늘어나 갈라짐이 없는 전용 졸나염입니다.', img: jolKnit01 },
  { id: 29, no: '29', category: '졸 나염', techniqueDetail: '졸 발포', title: '3D 입체 졸 발포 나염', spec: '면 원단 / 발포 팽창 잉크', description: '열가열 과정을 통해 잉크가 볼록하게 부풀어 올라 부드러운 입체 볼륨을 연출하는 졸나염 기법입니다.', img: jolPuff01 },

  // --- [전사 인쇄] 시리즈 (30 ~ 46) ---
  { id: 30, no: '30', category: '전사 인쇄', techniqueDetail: 'DTF 전사', title: 'DTF 고화질 필름 전사 01', spec: 'DTF 필름 / 풀컬러 전사', description: '외곽선 테두리 커팅 없이 섬세한 도안과 풀컬러 그래픽을 필름 그대로 정교하게 열전사한 기법입니다.', img: transferDtf01 },
  { id: 31, no: '31', category: '전사 인쇄', techniqueDetail: 'DTF 전사', title: 'DTF 고화질 필름 전사 02', spec: 'DTF 필름 / 핫멜트 접착', description: '견고한 핫멜트 파우더 적용으로 세탁 후에도 필름 들뜸이나 박리를 완벽히 방지합니다.', img: transferDtf02 },
  { id: 32, no: '32', category: '전사 인쇄', techniqueDetail: 'DTF 전사', title: 'DTF 고화질 필름 전사 03', spec: '소량 커스텀 / 고해상도', description: '색상 수 제약이 전혀 없어 다채로운 일러스트나 아티스트 굿즈 제작에 적극 추천합니다.', img: transferDtf03 },
  { id: 33, no: '33', category: '전사 인쇄', techniqueDetail: 'DTF 전사', title: 'DTF 고화질 필름 전사 04', spec: '기모 스웨트 / DTF 필름', description: '두꺼운 원단 표면 위에서도 도안 경계선이 뭉개지지 않고 깔끔함을 유지합니다.', img: transferDtf04 },
  { id: 34, no: '34', category: '전사 인쇄', techniqueDetail: 'DTF 전사', title: 'DTF 고화질 필름 전사 05', spec: '나일론 / DTF 필름', description: '원단 표면에 얇고 견고하게 밀착되는 디테일 DTF 필름 전사 샘플입니다.', img: transferDtf05 },
  { id: 35, no: '35', category: '전사 인쇄', techniqueDetail: 'DTF 전사', title: 'DTF 고화질 필름 전사 06', spec: '면 100% / DTF 전사', description: '그라데이션 및 실사 사진 도안까지 또렷하게 표현하는 최고화질 전사 방식입니다.', img: transferDtf06 },
  { id: 36, no: '36', category: '전사 인쇄', techniqueDetail: '후로킹 전사', title: '입체 벨벳 후로킹 전사 01', spec: '엠보 플록 필름 / 벨벳 질감', description: '손끝에 닿는 포근하고 부드러운 입체 벨벳(플록) 털 감촉을 전해주는 고급 특수 전사입니다.', img: transferFlocking01 },
  { id: 37, no: '37', category: '전사 인쇄', techniqueDetail: '후로킹 전사', title: '입체 벨벳 후로킹 전사 02', spec: '엠보 플록 필름 / 브랜드 로고', description: '맨투맨, 아우터의 포인트 로고로 활용 시 유니크한 텍스처와 입체감을 높여줍니다.', img: transferFlocking02 },
  { id: 38, no: '38', category: '전사 인쇄', techniqueDetail: '후로킹 전사', title: '입체 벨벳 후로킹 전사 03', spec: '엠보 플록 필름 / 고밀도', description: '털 빠짐이 적은 고밀도 벨벳 입자를 적용해 내구성을 한층 더 강화했습니다.', img: transferFlocking03 },
  { id: 39, no: '39', category: '전사 인쇄', techniqueDetail: '호일 전사', title: '메탈릭 호일 필름 전사', spec: '골드/실버 호일 필름', description: '빛을 받으면 시선이 집중되는 강렬한 금박/은박 메탈 광택이 살아나는 전사 인쇄입니다.', img: transferFoil01 },
  { id: 40, no: '40', category: '전사 인쇄', techniqueDetail: '글리터 전사', title: '글리터 반짝이 커팅 전사', spec: '글리터 필름 / 펄 입자', description: '미세한 글리터 펄 입자가 촘촘하게 박혀 화려하게 반짝이는 연출에 효과적입니다.', img: transferGlitter01 },
  { id: 41, no: '41', category: '전사 인쇄', techniqueDetail: '레이저 커팅 전사', title: '정밀 레이저 커팅 전사', spec: '초미세 레이저 커팅', description: '레이저 기기로 초미세 외곽 라인을 정밀 커팅한 후 원단에 정교하게 열압착한 기법입니다.', img: transferLaserCut01 },
  { id: 42, no: '42', category: '전사 인쇄', techniqueDetail: '발포 전사', title: '3D 입체 발포 전사', spec: '발포 열전사 필름 / 3D 볼륨', description: '열가열 시 필름 표면이 볼록 부풀어 올라 두툼한 3D 입체감을 연출하는 발포 전사입니다.', img: transferPuff01 },
  { id: 43, no: '43', category: '전사 인쇄', techniqueDetail: '스팡클 전사', title: '입체 스팡클 전사', spec: '스팡클 패치 / 열전사', description: '반짝이는 스팽글(스팡클) 입자 질감을 열전사 필름 방식으로 깔끔하게 구현했습니다.', img: transferSpangle01 },
  { id: 44, no: '44', category: '전사 인쇄', techniqueDetail: '승화 전사', title: '기능성 승화 전사 01', spec: '폴리 100% / 승화전사 잉크', description: '원단 섬유 속으로 잉크를 열승화 침투시켜 이질감이 전혀 없고 통기성이 완벽히 유지됩니다.', img: transferSublimation01 },
  { id: 45, no: '45', category: '전사 인쇄', techniqueDetail: '승화 전사', title: '기능성 승화 전사 02', spec: '스포츠 유니폼 / 승화전사', description: '반복 세탁에도 물빠짐 및 표면 손상이 0%에 가까워 스포츠 유니폼에 최적입니다.', img: transferSublimation02 },
  { id: 46, no: '46', category: '전사 인쇄', techniqueDetail: '승화 전사', title: '기능성 승화 전사 03', spec: '폴리 혼방 / 풀컬러 승화전사', description: '의류 전면에 화려한 아트워크나 회화 그래픽을 면적 제한 없이 표현해내는 승화전사입니다.', img: transferSublimation03 }
])

// -------------------------------------------------------------
// 4. 필터링 및 모달 클릭 이벤트 로직
// -------------------------------------------------------------
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
.portfolio-container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px 120px;
  animation: fadeIn 0.8s ease-out;
  overflow: hidden;
}

/* 물방울 블롭 배경 */
.water-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.45;
  pointer-events: none;
  z-index: 0;
}
.blob-1 { width: 450px; height: 400px; background: #cbf3f9; top: 0; left: -100px; }
.blob-2 { width: 400px; height: 450px; background: #ccfbf1; top: 50%; right: -80px; }

/* 헤더 */
.portfolio-header {
  position: relative;
  z-index: 1;
  text-align: center;
  margin-bottom: 40px;
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
  word-break: keep-all;
}

.gradient-text {
  background: linear-gradient(135deg, #1b8a99 0%, #48b5c4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.page-desc { font-size: 1.08rem; color: #607e84; line-height: 1.7; }

/* 1. 카테고리 탭 버튼 */
.category-tabs {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 22px;
  flex-wrap: wrap;
}

.filter-btn {
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(195, 232, 237, 0.8);
  color: #52737a;
  padding: 12px 26px;
  border-radius: 30px;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.25s ease;
}

.filter-btn:hover {
  border-color: #48b5c4;
  color: #1f7d8a;
}

.filter-btn.active {
  background: linear-gradient(135deg, #48b5c4 0%, #2ba5b5 100%);
  color: white;
  border-color: #48b5c4;
  box-shadow: 0 6px 20px rgba(72, 181, 196, 0.35);
}

/* 2. 대분류 요약 가이드 박스 */
.technique-summary-box {
  position: relative;
  z-index: 1;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(210, 238, 242, 0.9);
  border-radius: 24px;
  padding: 20px 30px;
  margin-bottom: 50px;
  text-align: center;
  box-shadow: 0 8px 24px rgba(72, 181, 196, 0.06);
}

.summary-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.summary-badge {
  background: #48b5c4;
  color: white;
  padding: 5px 14px;
  border-radius: 14px;
  font-weight: 800;
  font-size: 0.85rem;
}

.summary-content p {
  color: #0f766e;
  font-size: 0.96rem;
  margin: 0;
  font-weight: 600;
}

.empty-box {
  text-align: center;
  padding: 80px 20px;
  background: #f8fafc;
  border-radius: 20px;
  color: #94a3b8;
}

/* 3. 갤러리 그리드 */
.gallery-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
}

.gallery-card {
  background: white;
  border-radius: 28px;
  overflow: hidden;
  border: 1px solid rgba(195, 232, 237, 0.7);
  box-shadow: 0 8px 24px rgba(72, 181, 196, 0.06);
  cursor: pointer;
  transition: all 0.35s ease;
}

.gallery-card:hover {
  transform: translateY(-8px);
  border-color: #48b5c4;
  box-shadow: 0 16px 35px rgba(72, 181, 196, 0.18);
}

.card-image-box {
  position: relative;
  height: 280px;
  overflow: hidden;
  background: #f4fafb;
}

.sample-no {
  position: absolute;
  top: 15px;
  left: 15px;
  background: rgba(15, 44, 51, 0.85);
  color: white;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 1px;
  z-index: 2;
  backdrop-filter: blur(6px);
}

.card-image-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.gallery-card:hover .card-image-box img {
  transform: scale(1.06);
}

.hover-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 44, 51, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  backdrop-filter: blur(2px);
}

.hover-overlay span {
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.8);
  padding: 9px 20px;
  border-radius: 25px;
  font-size: 0.88rem;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.15);
}

.gallery-card:hover .hover-overlay {
  opacity: 1;
}

.card-info {
  padding: 24px;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.no-tag {
  color: #48b5c4;
  font-weight: 900;
  font-size: 0.88rem;
}

.cat-tag {
  color: #176f7a;
  font-size: 0.8rem;
  font-weight: 700;
  background: #eef8f9;
  padding: 3px 10px;
  border-radius: 8px;
}

.card-info h3 {
  font-size: 1.15rem;
  font-weight: 800;
  color: #0f2c33;
  margin-bottom: 6px;
}

.spec-text {
  font-size: 0.88rem;
  color: #607e84;
  margin: 0;
}

/* 4. 모달 팝업 스타일 */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(15, 44, 51, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(8px);
}

.modal-card {
  background: white;
  border-radius: 32px;
  width: 92%;
  max-width: 950px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  animation: modalIn 0.3s ease-out;
}

.modal-close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  background: #f1f8f9;
  border: none;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  font-size: 1.1rem;
  cursor: pointer;
  z-index: 10;
  color: #607e84;
  transition: all 0.2s;
}

.modal-close-btn:hover {
  background: #e2f1f3;
  color: #0f2c33;
}

.modal-body {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  padding: 35px;
  gap: 35px;
}

.modal-image-area {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.modal-image-area img {
  width: 100%;
  border-radius: 22px;
  object-fit: cover;
  max-height: 480px;
  box-shadow: 0 8px 24px rgba(72, 181, 196, 0.12);
}

.zoom-notice {
  font-size: 0.8rem;
  color: #79979d;
  text-align: center;
}

.modal-detail-area {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.modal-sample-no {
  color: #48b5c4;
  font-weight: 900;
  font-size: 0.92rem;
  letter-spacing: 1px;
}

.modal-header-info h2 {
  font-size: 1.55rem;
  font-weight: 800;
  color: #0f2c33;
  margin: 6px 0 15px 0;
}

.info-group {
  background: #f4fafb;
  border: 1px solid #e2f1f3;
  padding: 18px 20px;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 16px;
}

.info-row {
  display: flex;
  font-size: 0.92rem;
}

.info-row .label {
  width: 90px;
  color: #607e84;
  font-weight: 600;
}

.info-row .val {
  color: #0f2c33;
  font-weight: 700;
}

.info-row .val.highlight {
  color: #176f7a;
  font-weight: 800;
}

.modal-desc-box {
  margin-bottom: 20px;
}

.modal-desc {
  color: #52737a;
  font-size: 0.95rem;
  line-height: 1.65;
  margin: 0;
}

.inquiry-guide {
  background: #eef9fa;
  border: 1px solid rgba(72, 181, 196, 0.35);
  padding: 20px;
  border-radius: 20px;
}

.inquiry-guide p {
  font-size: 0.88rem;
  color: #0f766e;
  margin-bottom: 14px;
  line-height: 1.55;
}

.modal-inquiry-btn {
  display: block;
  text-align: center;
  background: linear-gradient(135deg, #48b5c4 0%, #2ba5b5 100%);
  color: white;
  padding: 13px 0;
  border-radius: 20px;
  text-decoration: none;
  font-weight: 800;
  font-size: 0.98rem;
  box-shadow: 0 6px 18px rgba(72, 181, 196, 0.3);
  transition: transform 0.2s;
}

.modal-inquiry-btn:hover {
  transform: translateY(-2px);
}

@keyframes modalIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 850px) {
  .page-title { font-size: 2.1rem; }
  .modal-body {
    grid-template-columns: 1fr;
    padding: 25px;
  }
}
</style>