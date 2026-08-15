<template>
  <div id="app" class="app-layout">
    <!-- 상단 글로벌 네비게이션 바 (GNB) -->
    <header class="site-header">
      <div class="header-container">
        <!-- 로고 -->
        <router-link to="/" class="logo" @click="closeMobileMenu">
          <span class="logo-accent">GREEN</span> PAINTING
        </router-link>

        <!-- 데스크톱 전용 네비게이션 메뉴 (768px 이상) -->
        <nav class="nav-links desktop-nav">
          <router-link to="/" class="nav-item">Welcome</router-link>
          <router-link to="/intro" class="nav-item">회사소개</router-link>
          <router-link to="/collection" class="nav-item">샘플 목록</router-link>
          <router-link to="/location" class="nav-item">오시는 길</router-link>
          <router-link to="/help" class="nav-item inquiry-btn">도안/견적 문의</router-link>
        </nav>

        <!-- 모바일 전용 햄버거 토글 버튼 (768px 미만) -->
        <button 
          class="mobile-menu-btn" 
          :class="{ active: isMobileMenuOpen }" 
          @click="toggleMobileMenu"
          aria-label="메뉴 열기/닫기"
        >
          <span class="bar bar-1"></span>
          <span class="bar bar-2"></span>
          <span class="bar bar-3"></span>
        </button>
      </div>

      <!-- 모바일 전용 슬라이드 메뉴 드로어 -->
      <transition name="drawer">
        <div v-if="isMobileMenuOpen" class="mobile-drawer">
          <div class="drawer-header">
            <span class="drawer-badge">MENU</span>
            <span class="drawer-title">그린페인팅</span>
          </div>
          <nav class="mobile-nav-links">
            <router-link to="/" class="mobile-nav-item" @click="closeMobileMenu">
              <span class="nav-icon">🏠</span> Welcome
            </router-link>
            <router-link to="/intro" class="mobile-nav-item" @click="closeMobileMenu">
              <span class="nav-icon">🏭</span> 회사소개
            </router-link>
            <router-link to="/collection" class="mobile-nav-item" @click="closeMobileMenu">
              <span class="nav-icon">🎨</span> 작업 샘플 목록
            </router-link>
            <router-link to="/location" class="mobile-nav-item" @click="closeMobileMenu">
              <span class="nav-icon">📍</span> 오시는 길
            </router-link>
            <router-link to="/help" class="mobile-nav-item mobile-inquiry-item" @click="closeMobileMenu">
              <span class="nav-icon">✉️</span> 도안 / 견적 문의
            </router-link>
          </nav>
        </div>
      </transition>

      <!-- 모바일 메뉴 활성화 시 뒷배경 딤(Dim) 오버레이 -->
      <transition name="fade">
        <div v-if="isMobileMenuOpen" class="mobile-backdrop" @click="closeMobileMenu"></div>
      </transition>
    </header>

    <!-- 페이지 본문 렌더링 영역 -->
    <main class="main-content">
      <router-view />
    </main>

    <!-- 하단 푸터 -->
    <footer class="site-footer">
      <div class="footer-container">
        <div class="footer-info">
          <h3>그린페인팅 (Green Painting)</h3>
          <p>의류 나염 및 특수 프린팅 전문 가공 공장</p>
          <p class="copyright">© 2026 GREEN PAINTING. All rights reserved.</p>
        </div>
        <div class="footer-contact">
          <span class="contact-label">공식 접수처</span>
          <p class="email-text">contact@greenpainting.com</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  color: #334155;
  background-color: #ffffff;
  line-height: 1.6;
}

.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* 헤더 */
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #edf4f5;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.35rem;
  font-weight: 900;
  color: #0f2c33;
  text-decoration: none;
  letter-spacing: -0.5px;
}

.logo-accent {
  color: #48b5c4;
}

/* 데스크톱 네비게이션 */
.desktop-nav {
  display: flex;
  align-items: center;
  gap: 24px;
}

.nav-item {
  color: #475569;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: color 0.2s;
}

.nav-item:hover, 
.nav-item.router-link-exact-active:not(.inquiry-btn) {
  color: #48b5c4;
}

.inquiry-btn {
  background: linear-gradient(135deg, #48b5c4 0%, #2ba5b5 100%);
  color: white !important;
  padding: 9px 20px;
  border-radius: 25px;
  box-shadow: 0 4px 12px rgba(72, 181, 196, 0.25);
  transition: all 0.2s ease;
}

.inquiry-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(72, 181, 196, 0.35);
}

/* 모바일 햄버거 버튼 */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 101;
}

.bar {
  display: block;
  width: 100%;
  height: 2.5px;
  background-color: #0f2c33;
  border-radius: 2px;
  transition: all 0.3s ease;
}

/* 햄버거 -> X 애니메이션 */
.mobile-menu-btn.active .bar-1 {
  transform: translateY(7.5px) rotate(45deg);
  background-color: #48b5c4;
}

.mobile-menu-btn.active .bar-2 {
  opacity: 0;
}

.mobile-menu-btn.active .bar-3 {
  transform: translateY(-7.5px) rotate(-45deg);
  background-color: #48b5c4;
}

/* 모바일 슬라이드 드로어 */
.mobile-drawer {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(210, 238, 242, 0.8);
  box-shadow: 0 15px 30px rgba(15, 44, 51, 0.1);
  padding: 24px 20px 30px;
  z-index: 99;
}

.drawer-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid #f1f8f9;
}

.drawer-badge {
  background: #eef8f9;
  color: #1f7d8a;
  font-size: 0.72rem;
  font-weight: 800;
  padding: 3px 8px;
  border-radius: 6px;
  letter-spacing: 1px;
}

.drawer-title {
  font-size: 0.9rem;
  font-weight: 700;
  color: #607e84;
}

.mobile-nav-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.mobile-nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 14px;
  color: #0f2c33;
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
  transition: all 0.2s ease;
  background: #f8fafc;
}

.mobile-nav-item:hover,
.mobile-nav-item.router-link-exact-active:not(.mobile-inquiry-item) {
  background: #eef9fa;
  color: #1f7d8a;
}

.nav-icon {
  font-size: 1.1rem;
}

.mobile-inquiry-item {
  background: linear-gradient(135deg, #48b5c4 0%, #2ba5b5 100%);
  color: white !important;
  margin-top: 6px;
  box-shadow: 0 4px 14px rgba(72, 181, 196, 0.3);
}

/* 모바일 배경 딤 */
.mobile-backdrop {
  position: fixed;
  top: 72px;
  left: 0;
  width: 100vw;
  height: calc(100vh - 72px);
  background: rgba(15, 44, 51, 0.4);
  backdrop-filter: blur(4px);
  z-index: 98;
}

/* 드로어 & 페이드 트랜지션 */
.drawer-enter-active, .drawer-leave-active {
  transition: all 0.3s ease;
}
.drawer-enter-from, .drawer-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* 본문 */
.main-content {
  flex: 1;
}

/* 푸터 */
.site-footer {
  background: #0f252a;
  color: #8da2a6;
  padding: 45px 20px;
  border-top: 1px solid #1a383f;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.footer-info h3 {
  color: #f1f8f9;
  font-size: 1.15rem;
  font-weight: 800;
  margin-bottom: 6px;
}

.footer-info p {
  font-size: 0.88rem;
  color: #8da2a6;
}

.copyright {
  margin-top: 8px;
  font-size: 0.8rem;
  color: #5c7478;
}

.footer-contact {
  text-align: right;
}

.contact-label {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: #48b5c4;
  display: block;
  margin-bottom: 4px;
}

.email-text {
  font-size: 0.95rem;
  font-weight: 600;
  color: #d6ebed;
}

/* 모바일 미디어 쿼리 (768px 이하) */
@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }
  .mobile-menu-btn {
    display: flex;
  }
  .mobile-drawer {
    display: block;
  }
  .footer-container {
    flex-direction: column;
    text-align: center;
  }
  .footer-contact {
    text-align: center;
  }
}
</style>