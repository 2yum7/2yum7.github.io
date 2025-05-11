document.addEventListener('DOMContentLoaded', () => {
    // ハンバーガーメニュー
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
      });
      navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          hamburger.classList.remove('active');
          navLinks.classList.remove('active');
        });
      });
    }
  
    // タイピングアニメーション
    const typingText = document.getElementById('typing-text');
    const cursor = document.getElementById('cursor');
    if (typingText && cursor) {
      const before = "Hello, I'm ";
      const highlight = "2yum7";
      const after = ".";
      const fullText = before + highlight + after;
      const highlightStart = before.length;
      const highlightEnd = before.length + highlight.length;
      let charIndex = 0;
  
      function renderText(count) {
        let html = '';
        for (let i = 0; i < count; i++) {
          if (i === highlightStart) html += `<span class="highlight">`;
          html += fullText[i];
          if (i === highlightEnd - 1 && i < count - 1) html += `</span>`;
        }
        if (count > highlightStart && count <= highlightEnd) html += `</span>`;
        typingText.innerHTML = html;
      }
  
      function typeText() {
        if (charIndex < fullText.length) {
          charIndex++;
          renderText(charIndex);
          setTimeout(typeText, 100);
        } else {
          cursor.style.display = 'none';
        }
      }
  
      typingText.innerHTML = '';
      cursor.style.display = 'inline-block';
      typeText();
    }
  });