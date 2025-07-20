//intro

const letters = document.querySelectorAll('.letter');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });

    letters.forEach(letter => observer.observe(letter));

const themeToggle = document.getElementById('toggle-theme');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  themeToggle.querySelector('i').classList.remove('fa-toggle-on');
  themeToggle.querySelector('i').classList.add('fa-toggle-off');  // Change icon to off
} else {
  themeToggle.querySelector('i').classList.remove('fa-toggle-off');
  themeToggle.querySelector('i').classList.add('fa-toggle-on');  // Change icon to on
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  
  // Toggle the icons
  if (isDark) {
    themeToggle.querySelector('i').classList.remove('fa-toggle-on');
    themeToggle.querySelector('i').classList.add('fa-toggle-off');  // icon for dark mode
  } else {
    themeToggle.querySelector('i').classList.remove('fa-toggle-off');
    themeToggle.querySelector('i').classList.add('fa-toggle-on');  // icon for light mode
  }
});

// interest

document.addEventListener('DOMContentLoaded', () => {
  const nodes = document.querySelectorAll('.node');
  const maxScroll = window.innerHeight * 2;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    nodes.forEach((node, i) => {
      const delay = i * 100;
      const triggerPoint = 200 + delay;
      const progress = Math.max(0, (scrollY - triggerPoint) / 50);
      const clamped = Math.min(progress, 1);

      node.style.opacity = clamped;
      node.style.transform = `scale(${0.2 + clamped * 0.5})`;
    });
  });
});
