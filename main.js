// Typing animation
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;



// document.addEventListener("DOMContentLoaded", function() {
//   if(textArray.length) setTimeout(type, newTextDelay + 250);
// });

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const body = document.body;

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
  body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    body.style.overflow = '';
  });
});

document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    body.style.overflow = '';
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    body.style.overflow = '';
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Form submission


// Scroll to top button
const scrollButton = document.createElement('button');
scrollButton.innerHTML = '↑';
scrollButton.className = 'scroll-top';
document.body.appendChild(scrollButton);

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    scrollButton.style.display = 'block';
  } else {
    scrollButton.style.display = 'none';
  }
});

scrollButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// より洗練されたバージョン
document.addEventListener('DOMContentLoaded', () => {
  const greetingText = document.getElementById('greeting-text');
  const greetings = [
    "Hello, I'm <span class='highlight'>2yum7</span>.",
    "こんにちは、私は<span class='highlight'>2yum7</span>です。"
  ];
  let currentIndex = 0;
  let intervalId;

  function changeGreeting() {
    greetingText.classList.add('fade');
    
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % greetings.length;
      greetingText.innerHTML = greetings[currentIndex];
      greetingText.classList.remove('fade');
    }, 500);
  }

  // マウスホバーで一時停止
  greetingText.addEventListener('mouseenter', () => {
    clearInterval(intervalId);
  });

  greetingText.addEventListener('mouseleave', () => {
    intervalId = setInterval(changeGreeting, 3000);
  });

  // 最初のテキストを表示してから3秒後に切り替え
  setTimeout(() => {
    changeGreeting();
    intervalId = setInterval(changeGreeting, 3000);
  }, 3000);
});

// モバイルナビゲーション
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }
});

// スムーズスクロール
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});

.hero-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff;
  letter-spacing: 1px;
}

#cursor {
  display: inline-block;
  color: #fff;
  animation: blink 1s steps(1) infinite;
  font-weight: bold;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

document.addEventListener('DOMContentLoaded', () => {
  const typingText = document.getElementById('typing-text');
  const cursor = document.getElementById('cursor');
  // 表示したいテキストとハイライト部分を分けて定義
  const texts = [
    { before: "Hello, I'm ", highlight: "2yum7", after: "." },
    { before: "こんにちは、私は", highlight: "2yum7", after: "です。" }
  ];
  let langIndex = 0; // 0: 英語, 1: 日本語
  let charIndex = 0;
  let phase = 'typing'; // 'typing' or 'erasing'

  function getCurrentFullText() {
    const t = texts[langIndex];
    return t.before + t.highlight + t.after;
  }

  function renderText(count) {
    const t = texts[langIndex];
    const full = t.before + t.highlight + t.after;
    // highlightの開始・終了位置
    const highlightStart = t.before.length;
    const highlightEnd = t.before.length + t.highlight.length;

    let html = '';
    for (let i = 0; i < count; i++) {
      if (i === highlightStart) html += `<span class="highlight">`;
      if (i === highlightEnd) html += `</span>`;
      html += full[i];
    }
    if (count === highlightEnd) html += `</span>`;
    typingText.innerHTML = html;
  }

  function typeText() {
    const full = getCurrentFullText();
    if (charIndex < full.length) {
      charIndex++;
      renderText(charIndex);
      setTimeout(typeText, 100);
    } else {
      setTimeout(() => {
        phase = 'erasing';
        eraseText();
      }, 3000);
    }
  }

  function eraseText() {
    if (charIndex > 0) {
      charIndex--;
      renderText(charIndex);
      setTimeout(eraseText, 50);
    } else {
      langIndex = (langIndex + 1) % texts.length;
      phase = 'typing';
      setTimeout(typeText, 500);
    }
  }

  // 初期化して開始
  typingText.innerHTML = '';
  cursor.style.display = 'inline-block';
  typeText();
});

.highlight {
  color: #de5851;
  font-weight: bold;
}

