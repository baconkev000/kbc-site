import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import TermsView from '@/views/TermsView.vue'
import PrivacyView from '@/views/PrivacyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return { el: to.hash, top: 96 }
    }
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'KBCoding — Software development',
        description:
          'KBCoding is the software development business used to design and ship the products and tools we create.',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: {
        title: 'About — KBCoding',
        description:
          'KBCoding is the software practice behind the applications, tools, and systems we build.',
      },
    },
    {
      path: '/terms',
      name: 'terms',
      component: TermsView,
      meta: {
        title: 'Terms of Use — KBCoding',
        description: 'Terms of use for the KBCoding website.',
      },
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: PrivacyView,
      meta: {
        title: 'Privacy Policy — KBCoding',
        description: 'Privacy policy for the KBCoding website.',
      },
    },
  ],
})

router.afterEach((to) => {
  const title = typeof to.meta.title === 'string' ? to.meta.title : 'KBCoding'
  document.title = title

  const description = typeof to.meta.description === 'string' ? to.meta.description : ''
  let tag = document.querySelector('meta[name="description"]')
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', 'description')
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', description)
})

export default router
