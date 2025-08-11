export const setVideoPlaybackRate = (videoElement: HTMLVideoElement, rate: number = 0.8) => {
  if (videoElement) {
    videoElement.playbackRate = rate;
  }
};

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Scroll reveal animation
export const initScrollReveal = () => {
  const revealElements = document.querySelectorAll('.reveal');

  const reveal = () => {
    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', reveal);
  reveal(); // Initial check
};

// Parallax effect
export const initParallax = () => {
  const parallaxElements = document.querySelectorAll('.parallax');

  const handleParallax = () => {
    parallaxElements.forEach((element) => {
      const speed = element.getAttribute('data-speed') || '0.5';
      const yPos = -(window.scrollY * Number(speed));
      element.style.transform = `translateY(${yPos}px)`;
    });
  };

  window.addEventListener('scroll', handleParallax);
};