<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

const API_URL = 'http://localhost:8081/api/members'

// 로그인 상태 및 유저 정보 관리
const isLoggedIn = ref(false)
const userName = ref('')
const currentUsername = ref('') // 로그인한 아이디 저장용

// ★ 아이디가 'admin'일 때만 관리자 메뉴 표시
const isAdmin = computed(() => {
  return isLoggedIn.value && currentUsername.value === 'admin'
})

// 모달 조작
const showAuthModal = ref(false)
const authMode = ref('login') // 'login' | 'signup'

// 폼 데이터
const loginForm = ref({ username: '', password: '' })
const signupForm = ref({ username: '', password: '', name: '', phone: '' })

// 모달 열기
const openAuthModal = (mode) => {
  authMode.value = mode
  showAuthModal.value = true
}

// 1. 로그인 처리 (백엔드 API 연동)
const handleLogin = async () => {
  if (!loginForm.value.username || !loginForm.value.password) {
    alert('아이디와 비밀번호를 입력해 주세요.')
    return
  }

  try {
    const response = await axios.post(`${API_URL}/login`, loginForm.value)
    
    isLoggedIn.value = true
    userName.value = response.data.name
    currentUsername.value = response.data.username

    sessionStorage.setItem('user', JSON.stringify({
      username: response.data.username,
      name: response.data.name
    }))

    alert(`${userName.value}님, 환영합니다!`)
    showAuthModal.value = false
    loginForm.value = { username: '', password: '' }
  } catch (error) {
    console.error('로그인 실패:', error)
    if (error.response && error.response.status === 401) {
      alert('아이디 또는 비밀번호가 올바르지 않습니다.')
    } else {
      alert('로그인 처리 중 오류가 발생했습니다.')
    }
  }
}

// 2. 회원가입 처리 (백엔드 API 연동)
const handleSignup = async () => {
  if (!signupForm.value.username || !signupForm.value.password || !signupForm.value.name) {
    alert('필수 정보(아이디, 비밀번호, 성함)를 모두 입력해 주세요.')
    return
  }

  try {
    await axios.post(`${API_URL}/signup`, signupForm.value)
    alert('회원가입이 완료되었습니다! 로그인해 주세요.')
    
    signupForm.value = { username: '', password: '', name: '', phone: '' }
    authMode.value = 'login'
  } catch (error) {
    console.error('회원가입 실패:', error)
    if (error.response && error.response.data) {
      alert(error.response.data)
    } else {
      alert('회원가입 중 오류가 발생했습니다.')
    }
  }
}

// 3. 로그아웃 처리
const handleLogout = () => {
  isLoggedIn.value = false
  userName.value = ''
  currentUsername.value = ''
  sessionStorage.removeItem('user')
  alert('로그아웃되었습니다.')
}

// 초기 로드 시 세션 확인
onMounted(() => {
  const savedUser = sessionStorage.getItem('user')
  if (savedUser) {
    const user = JSON.parse(savedUser)
    isLoggedIn.value = true
    userName.value = user.name
    currentUsername.value = user.username
  }
})
</script>

<template>
  <header class="main-header">
    <div class="header-inner">
      <!-- 1. 로고 -->
      <div class="logo-container">
        <RouterLink to="/" class="logo-link">
          <div class="brand-logo-text">
            <span class="en-logo">Green printing</span>
            <span class="kr-logo">그린 나염</span>
          </div>
        </RouterLink>
      </div>

      <!-- 2. 중앙 네비게이션 메뉴 (admin으로 로그인할 때만 '관리자' 노출) -->
      <nav class="center-nav">
        <ul>
          <li><RouterLink to="/intro">Welcome</RouterLink></li>
          <li><RouterLink to="/collection">샘플 목록</RouterLink></li>
          <li><RouterLink to="/size">나염 종류</RouterLink></li>
          <li><RouterLink to="/location">오시는 길</RouterLink></li>
          <li><RouterLink to="/help">도안/견적 문의</RouterLink></li>
          <!-- ★ admin 계정 접속 시에만 노출되는 관리자 메뉴 -->
          <li v-if="isAdmin">
            <RouterLink to="/admin" class="admin-link">🛠️ 관리자</RouterLink>
          </li>
        </ul>
      </nav>

      <!-- 3. 우측 회원가입 / 로그인 영역 -->
      <div class="auth-container">
        <template v-if="!isLoggedIn">
          <button class="auth-btn login" @click="openAuthModal('login')">로그인</button>
          <button class="auth-btn signup" @click="openAuthModal('signup')">회원가입</button>
        </template>
        <template v-else>
          <span class="user-greeting">👋 <strong>{{ userName }}</strong>님</span>
          <button class="auth-btn logout" @click="handleLogout">로그아웃</button>
        </template>
      </div>
    </div>

    <!-- 로그인 / 회원가입 모달 팝업 창 -->
    <Teleport to="body">
      <div v-if="showAuthModal" class="modal-overlay" @click.self="showAuthModal = false">
        <div class="modal-card">
          <button class="close-btn" @click="showAuthModal = false">✕</button>

          <!-- 로그인 폼 -->
          <div v-if="authMode === 'login'" class="auth-form">
            <h2>로그인</h2>
            <div class="input-group">
              <input type="text" v-model="loginForm.username" placeholder="아이디" />
              <input type="password" v-model="loginForm.password" placeholder="비밀번호" @keyup.enter="handleLogin" />
            </div>
            <button class="submit-btn" @click="handleLogin">로그인</button>
            <p class="switch-text">계정이 없으신가요? <span @click="authMode = 'signup'">회원가입</span></p>
          </div>

          <!-- 회원가입 폼 -->
          <div v-else class="auth-form">
            <h2>간단 회원가입</h2>
            <div class="input-group">
              <input type="text" v-model="signupForm.username" placeholder="아이디 *" />
              <input type="password" v-model="signupForm.password" placeholder="비밀번호 *" />
              <input type="text" v-model="signupForm.name" placeholder="성함 또는 업체명 *" />
              <input type="text" v-model="signupForm.phone" placeholder="연락처 (선택)" />
            </div>
            <button class="submit-btn" @click="handleSignup">가입 완료</button>
            <p class="switch-text">이미 계정이 있으신가요? <span @click="authMode = 'login'">로그인</span></p>
          </div>
        </div>
      </div>
    </Teleport>
  </header>
</template>

<style scoped>
.main-header {
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  position: sticky;
  top: 0;
  z-index: 1000;
  flex-shrink: 0;
}

.header-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-container { flex: 1; }
.logo-link { text-decoration: none; display: inline-block; }
.brand-logo-text { display: flex; align-items: baseline; gap: 10px; }
.en-logo { font-family: 'Arial', sans-serif; font-size: 1.6rem; font-weight: 800; color: #48b5c4; letter-spacing: -0.5px; }
.kr-logo { font-size: 0.85rem; color: #718096; font-weight: 600; }

.center-nav { flex: 2; display: flex; justify-content: center; }
nav ul { display: flex; list-style: none; gap: 25px; margin: 0; padding: 0; align-items: center; }
nav ul li a { text-decoration: none; font-weight: 500; color: #333; transition: color 0.3s; white-space: nowrap; }
nav ul li a.router-link-active { color: #48b5c4; font-weight: bold; }
nav ul li a:hover { color: #48b5c4; }

.admin-link { color: #e74c3c !important; font-weight: bold !important; }

.auth-container { flex: 1; display: flex; justify-content: flex-end; align-items: center; gap: 10px; }
.auth-btn { padding: 6px 14px; border-radius: 6px; font-size: 0.85rem; font-weight: 600; cursor: pointer; border: 1px solid #ddd; background: #fff; color: #555; }
.auth-btn.signup { background: #48b5c4; color: white; border-color: #48b5c4; }
.auth-btn.signup:hover { background: #369ca9; }
.user-greeting { font-size: 0.85rem; color: #444; }

/* 모달 팝업 스타일 */
.modal-overlay { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0, 0, 0, 0.5); display: flex; align-items: center; justify-content: center; z-index: 2000; }
.modal-card { background: white; padding: 35px 30px; border-radius: 20px; width: 100%; max-width: 380px; position: relative; box-shadow: 0 10px 30px rgba(0,0,0,0.15); }
.close-btn { position: absolute; top: 15px; right: 20px; border: none; background: none; font-size: 1.2rem; cursor: pointer; color: #888; }
.auth-form { display: flex; flex-direction: column; gap: 15px; }
.auth-form h2 { text-align: center; color: #2c3e50; margin-bottom: 10px; font-size: 1.3rem; }
.input-group { display: flex; flex-direction: column; gap: 10px; }
.auth-form input { padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 0.9rem; outline: none; }
.auth-form input:focus { border-color: #48b5c4; }
.submit-btn { padding: 12px; background: #48b5c4; color: white; border: none; border-radius: 8px; font-weight: bold; font-size: 0.95rem; cursor: pointer; }
.switch-text { text-align: center; font-size: 0.85rem; color: #888; margin-top: 5px; }
.switch-text span { color: #48b5c4; font-weight: bold; cursor: pointer; text-decoration: underline; }
</style>