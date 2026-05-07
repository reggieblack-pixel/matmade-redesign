/* Shared interaction layer */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav active state
  const mobileItems = document.querySelectorAll('.mobile-nav-item');
  mobileItems.forEach(item => {
    item.addEventListener('click', () => {
      mobileItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });

  // Filter chips toggle
  const filterChips = document.querySelectorAll('.filter-chip[data-toggle]');
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => chip.classList.toggle('active'));
  });

  // Tabs
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const bar = tab.closest('.tab-bar');
      bar.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const target = tab.dataset.tab;
      if (target) {
        document.querySelectorAll('[data-tab-panel]').forEach(p => {
          p.style.display = p.dataset.tabPanel === target ? '' : 'none';
        });
      }
    });
  });

  // Map toggle (city page)
  const mapToggle = document.getElementById('map-toggle');
  const splitMap = document.querySelector('.split-map');
  if (mapToggle && splitMap) {
    mapToggle.addEventListener('click', () => {
      const showing = splitMap.classList.toggle('show');
      mapToggle.innerHTML = showing
        ? `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg> List View`
        : `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg> Map View`;
    });
  }

  // List card active state (city page)
  const listCards = document.querySelectorAll('.list-card');
  listCards.forEach(card => {
    card.addEventListener('click', () => {
      listCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    });
  });

  // Sticky nav shrink
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.style.boxShadow = window.scrollY > 10
        ? '0 2px 16px oklch(14% 0.04 258 / 0.08)'
        : '';
    }, { passive: true });
  }

  // Image lazy loading fallback
  document.querySelectorAll('img[data-src]').forEach(img => {
    img.src = img.dataset.src;
  });
});
