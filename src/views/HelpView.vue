<template>
  <div class="contact-page-wrapper">
    <div class="contact-content-container">
      <!-- 헤더 섹션 -->
      <section class="contact-header">
        <div class="badge">
          <span class="badge-dot"></span>
          견적 문의 • 그린나염
        </div>
        <h1 class="page-title">
          도안 및 견적 <span class="highlight-text">문의 안내</span>
        </h1>
        <p class="page-desc">
          그린나염은 회원가입이나 복잡한 절차 없이 <strong>공식 이메일</strong>을 통해 빠르고 정확한 견적 상담을 진행합니다.
        </p>
      </section>

      <!-- 안내 카드 그리드 -->
      <div class="contact-grid">
        <!-- 1. 대표 연락처 및 빠른 메일 발송 카드 -->
        <div class="card-box info-card">
          <h2>공식 문의 접수처</h2>
          <p class="desc">아래 대표 이메일로 작업 도안(AI)과 함께 요청사항을 보내주시면 담당자가 확인 후 신속히 회신드립니다.</p>

          <!-- 대표 이메일 박스 -->
          <div class="email-box">
            <div class="email-text-wrap">
              <span class="label">공식 접수 이메일</span>
              <strong class="email-address">{{ officialEmail }}</strong>
            </div>
            <button class="action-btn copy-btn email-copy-action-btn" @click="copyToClipboard(officialEmail, '이메일 주소가')">
              {{ isEmailCopied ? '복사 완료! ✓' : '이메일 주소 복사' }}
            </button>
          </div>

          <!-- 빠른 메일 열기 바로가기 버튼 그룹 -->
          <div class="quick-mail-section">
            <h3>자주 쓰는 메일로 바로 열기</h3>
            <div class="quick-mail-buttons">
              <!-- 기본 메일 앱 연동 (mailto) -->
              <a :href="mailtoLink" class="mail-btn default-mail">
                <span class="icon">✉️</span> 기본 메일 앱 열기
              </a>
              <!-- 네이버 메일 웹 작성창 바로가기 -->
              <a :href="naverMailLink" target="_blank" rel="noopener noreferrer" class="mail-btn naver-mail">
                <span class="icon">🟢</span> 네이버 메일 작성
              </a>
              <!-- 지메일 웹 작성창 바로가기 -->
              <a :href="gmailLink" target="_blank" rel="noopener noreferrer" class="mail-btn gmail-mail">
                <span class="icon">🔴</span> Gmail 작성
              </a>
            </div>
          </div>

          <!-- 유의사항 안내 -->
          <div class="notice-box">
            <h4>💡 도안 파일 첨부 안내</h4>
            <ul>
              <li>인쇄 해상도 확보를 위해 <strong>AI(일러스트)</strong> 파일을 보내주세요.</li>
            </ul>
          </div>
        </div>

        <!-- 2. 이메일 문의 템플릿 복사 카드 -->
        <div class="card-box template-card">
          <div class="template-header">
            <div>
              <h2>문의 양식 템플릿</h2>
              <p class="sub-desc">아래 양식을 복사하여 메일 본문에 붙여넣고 내용을 채워 보내주세요.</p>
            </div>
            <button class="action-btn primary-btn" @click="copyToClipboard(inquiryTemplate, '문의 양식이')">
              {{ isTemplateCopied ? '양식 복사 완료! ✓' : '📋 문의 양식 복사하기' }}
            </button>
          </div>

          <!-- 템플릿 본문 프리뷰 박스 -->
          <div class="template-body-box">
            <pre><code>{{ inquiryTemplate }}</code></pre>
          </div>

          <div class="guide-tip">
            <p>💡 <strong>Tip 1</strong>: 포트폴리오에서 보신 <strong>샘플 번호(예: No. 01)</strong>나 <strong>기법명(예: 후로킹 전사)</strong>을 기재해 주시면 더 빠르고 정확한 견적 산출이 가능합니다.</p>
            <p>💡 <strong>Tip 2</strong>: 기본 최소 의뢰 수량은 <strong>50장</strong>부터 진행 가능합니다.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 1. 공식 대표 이메일 설정
const officialEmail = ref('water1234567@naver.com')

// 2. 표준 문의 템플릿 내용
const inquiryTemplate = ref(`[그린나염 도안 및 견적 문의]

1. 업체명 / 담당자 성함: 
2. 연락처(전화번호): 
3. 의류 품목 및 수량 (예: 20수 반팔 100장 / 후드 50장 등): 
4. 참고한 포트폴리오 (샘플 번호 또는 기법명): 
   (예: No. 03 DTG 디지털 프린트 / No. 36 후로킹 전사 등)
5. 인쇄 위치 및 크기 (예: 앞가슴 A4 사이즈, 뒷목 라벨 등): 
6. 희망 납기일: 
7. 기타 요청사항 및 문의 내용: 

※ 작업용 도안 파일(AI)을 메일에 함께 첨부해 주세요.`)

// 복사 완료 상태 토글 변수
const isEmailCopied = ref(false)
const isTemplateCopied = ref(false)

// 클립보드 복사 함수
const copyToClipboard = async (text, targetName) => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text)
    } else {
      const textArea = document.createElement('textarea')
      textArea.value = text
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
    }

    if (targetName.includes('이메일')) {
      isEmailCopied.value = true
      setTimeout(() => (isEmailCopied.value = false), 2500)
    } else {
      isTemplateCopied.value = true
      setTimeout(() => (isTemplateCopied.value = false), 2500)
    }
    alert(`${targetName} 클립보드에 복사되었습니다!\n메일 작성창에 [붙여넣기(Ctrl+V)] 해주세요.`)
  } catch (err) {
    alert('복사에 실패했습니다. 내용을 직접 드래그하여 복사해 주세요.')
  }
}

// 3. 메일 앱 자동 링크 생성
const mailSubject = encodeURIComponent('[그린나염] 나염/프린팅 견적 및 작업 문의')
const mailBody = encodeURIComponent(inquiryTemplate.value)

// ① 기본 mailto
const mailtoLink = computed(() => {
  return `mailto:${officialEmail.value}?subject=${mailSubject}&body=${mailBody}`
})

// ② 네이버 메일 작성창
const naverMailLink = computed(() => {
  return `https://mail.naver.com/write/popup?to=${officialEmail.value}&subject=${mailSubject}&body=${mailBody}`
})

// ③ 지메일 작성창
const gmailLink = computed(() => {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${officialEmail.value}&su=${mailSubject}&body=${mailBody}`
})
</script>

<style scoped>
/* 페이지 최외곽 */
.contact-page-wrapper {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
  overflow: hidden;
  animation: fadeIn 0.6s ease-out;
}

/* 중앙 정렬 콘텐츠 컨테이너 */
.contact-content-container {
  max-width: 1180px;
  margin: 0 auto;
  padding: 80px 24px 120px;
}

/* 헤더 */
.contact-header {
  text-align: center;
  margin-bottom: 50px;
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
  line-height: 1.65;
}

/* 그리드 레이아웃 */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 28px;
  align-items: start;
}

/* 카드 공통 스타일 */
.card-box {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  padding: 36px 32px;
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.03);
}

.info-card h2, .template-header h2 {
  font-size: 1.35rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 8px;
  letter-spacing: -0.3px;
}

.desc, .sub-desc {
  color: #64748b;
  font-size: 0.92rem;
  line-height: 1.6;
  margin-bottom: 24px;
}

/* 대표 이메일 박스 */
.email-box {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 20px;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
  gap: 12px;
  flex-wrap: wrap;
}

.email-text-wrap {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.email-text-wrap .label {
  font-size: 0.78rem;
  color: #64748b;
  font-weight: 700;
}

.email-address {
  font-size: 1.05rem;
  color: #0f172a;
  font-weight: 800;
  word-break: break-all;
}

/* 빠른 메일 발송 버튼 그룹 */
.quick-mail-section {
  margin-bottom: 28px;
}

.quick-mail-section h3 {
  font-size: 0.9rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 12px;
}

.quick-mail-buttons {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.mail-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 18px;
  border-radius: 12px;
  font-size: 0.92rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s ease;
  border: 1px solid #e2e8f0;
  white-space: nowrap;
}

.mail-btn .icon {
  font-size: 1.05rem;
}

.default-mail {
  background: #f8fafc;
  color: #0f172a;
}

.default-mail:hover {
  background: #f1f5f9;
  border-color: #cbd5e1;
}

.naver-mail {
  background: #03c75a;
  color: #ffffff;
  border-color: #03c75a;
}

.naver-mail:hover {
  background: #02b150;
}

.gmail-mail {
  background: #ea4335;
  color: #ffffff;
  border-color: #ea4335;
}

.gmail-mail:hover {
  background: #d93025;
}

/* 안내 박스 */
.notice-box {
  background: #f0fdfa;
  border: 1px solid #ccfbf1;
  padding: 18px;
  border-radius: 16px;
}

.notice-box h4 {
  color: #0d9488;
  font-size: 0.88rem;
  font-weight: 800;
  margin-bottom: 6px;
}

.notice-box ul {
  margin: 0;
  padding-left: 18px;
  color: #334155;
  font-size: 0.86rem;
  line-height: 1.6;
}

/* 템플릿 카드 */
.template-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.action-btn {
  padding: 10px 18px;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;
  white-space: nowrap;
  flex-shrink: 0;
}

.copy-btn {
  background: #ffffff;
  border: 1px solid #cbd5e1;
  color: #0f172a;
}

.copy-btn:hover {
  background: #f8fafc;
  border-color: #0f172a;
}

.email-copy-action-btn {
  min-width: 120px;
  text-align: center;
}

.primary-btn {
  background: #0f172a;
  color: #ffffff;
}

.primary-btn:hover {
  background: #0d9488;
}

.template-body-box {
  background: #0f172a;
  border-radius: 16px;
  padding: 20px;
  overflow-x: auto;
}

.template-body-box pre {
  margin: 0;
}

.template-body-box code {
  color: #f8fafc;
  font-family: 'Consolas', 'Courier New', monospace;
  font-size: 0.88rem;
  line-height: 1.65;
  white-space: pre-wrap;
  word-break: break-all;
}

.guide-tip {
  margin-top: 16px;
  background: #fffbeb;
  border: 1px solid #fef3c7;
  padding: 14px 16px;
  border-radius: 14px;
  font-size: 0.85rem;
  color: #92400e;
  line-height: 1.55;
}

.guide-tip p {
  margin: 0;
}

.guide-tip p + p {
  margin-top: 6px;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
  .page-title {
    font-size: 2.1rem;
  }
}
</style>