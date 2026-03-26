/* =========================================
   LA MIE DORÉE — JavaScript vanilla
   ========================================= */

// --- Scroll animations (IntersectionObserver) ---
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.1 }
)

document.querySelectorAll('.fade-up, .slide-left, .slide-right').forEach((el) => observer.observe(el))

// --- Hamburger menu ---
const hamburger = document.getElementById('hamburger')
const mobileMenu = document.getElementById('mobileMenu')

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open')
    hamburger.classList.toggle('open', isOpen)
    hamburger.setAttribute('aria-expanded', isOpen)
    document.body.style.overflow = isOpen ? 'hidden' : ''
  })

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open')
      hamburger.classList.remove('open')
      document.body.style.overflow = ''
    })
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      mobileMenu.classList.remove('open')
      hamburger.classList.remove('open')
      document.body.style.overflow = ''
    }
  })
}

// --- Accordéon FAQ ---
const faqItems = document.querySelectorAll('.faq__item')

faqItems.forEach((item) => {
  const question = item.querySelector('.faq__question')
  if (!question) return

  question.addEventListener('click', () => {
    const isOpen = item.classList.contains('open')
    faqItems.forEach((i) => i.classList.remove('open'))
    if (!isOpen) item.classList.add('open')
  })
})
