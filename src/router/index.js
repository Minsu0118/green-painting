import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IntroView from '../views/IntroView.vue'
import CollectionView from '../views/CollectionView.vue'
import LocationView from '../views/LocationView.vue'
import HelpView from '../views/HelpView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: '그린페인팅 | 의류 나염 · 특수 전사 전문' }
  },
  {
    path: '/intro',
    name: 'intro',
    component: IntroView,
    meta: { title: '회사소개 | 그린페인팅' }
  },
  {
    path: '/collection',
    name: 'collection',
    component: CollectionView,
    meta: { title: '작업 샘플 목록 | 그린페인팅' }
  },
  {
    path: '/location',
    name: 'location',
    component: LocationView,
    meta: { title: '오시는 길 | 그린페인팅' }
  },
  {
    path: '/help',
    name: 'help',
    component: HelpView,
    meta: { title: '도안 / 견적 문의 | 그린페인팅' }
  },
  // 존재하지 않는 잘못된 주소 접근 시 메인 페이지로 자동 이동
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // 페이지 이동 시 항상 스크롤을 맨 위로 리셋
  scrollBehavior() {
    return { top: 0 }
  }
})

// 페이지 이동 시 브라우저 탭 타이틀 자동 변경 가드
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router