// 主题切换功能
function handleThemeSwitch() {
  const themeBtn = document.createElement('button');
  themeBtn.className = 'theme-toggle';
  themeBtn.textContent = '🌓';
  themeBtn.addEventListener('click', () => {
    document.documentElement.toggleAttribute('data-theme');
    localStorage.setItem('theme', document.documentElement.hasAttribute('data-theme') ? 'dark' : 'light');
  });
  document.body.appendChild(themeBtn);
}

// 轮播图组件
function initCarousel() {
  const carousel = {
    currentIndex: 0,
    slides: document.querySelectorAll('.carousel-slide'),
    container: document.querySelector('.carousel-container'),
    indicators: document.querySelector('.indicators'),
    
    init() {
      this.createIndicators();
      this.autoPlay();
      document.querySelector('.prev').addEventListener('click', () => this.prevSlide());
      document.querySelector('.next').addEventListener('click', () => this.nextSlide());
    },
    
    updateSlide() {
      this.container.style.transform = `translateX(-${this.currentIndex * 100}%)`;
      this.indicators.querySelectorAll('.indicator').forEach((ind, i) => {
        ind.classList.toggle('active', i === this.currentIndex);
      });
    },
    
    createIndicators() {
      this.slides.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = `indicator ${i === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => this.goToSlide(i));
        this.indicators.appendChild(dot);
      });
    },
    
    autoPlay() {
      setInterval(() => this.nextSlide(), 5000);
    },
    
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
      this.updateSlide();
    },
    
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
      this.updateSlide();
    },
    
    goToSlide(index) {
      this.currentIndex = index;
      this.updateSlide();
    }
  };
  
  if (carousel.slides.length > 0) carousel.init();
}

// 滚动监听
function setupScrollEffects() {
  const header = document.querySelector('.main-nav');
  const backTopBtn = document.createElement('button');
  backTopBtn.className = 'back-top';
  backTopBtn.textContent = '↑';
  backTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 100);
    backTopBtn.style.display = window.scrollY > 500 ? 'block' : 'none';
  });
  
  document.body.appendChild(backTopBtn);
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  handleThemeSwitch();
  initCarousel();
  setupScrollEffects();
});