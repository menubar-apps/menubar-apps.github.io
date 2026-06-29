---
---

(function () {
  'use strict';

  // Theme toggle
  function setTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', theme);
    var labels = document.querySelectorAll('.theme-toggle-label');
    labels.forEach(function (l) { l.textContent = theme === 'dark' ? 'Light mode' : 'Dark mode'; });
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(current);
  }

  // Restore saved theme
  var saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    setTheme('dark');
  }

  // Wire up toggle buttons
  var toggles = document.querySelectorAll('.theme-toggle');
  toggles.forEach(function (btn) {
    btn.addEventListener('click', toggleTheme);
  });

  var sidebar = document.getElementById('sidebar');
  var overlay = document.getElementById('sidenavOverlay');
  var menuBtn = document.getElementById('menuToggle');
  var grid = document.getElementById('appGrid');

  var appCards = document.querySelectorAll('.app-card');
  var detailSections = document.querySelectorAll('.app-detail');
  var sidebarItems = document.querySelectorAll('.sidebar-app-item');

  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
  }

  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('open');
  }

  if (menuBtn) {
    menuBtn.addEventListener('click', function () {
      if (sidebar.classList.contains('open')) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });
  }

  if (overlay) {
    overlay.addEventListener('click', closeSidebar);
  }

  var defaultTitle = document.title;
  var defaultDesc = document.querySelector('meta[name="description"]');
  var defaultOgTitle = document.querySelector('meta[property="og:title"]');
  var defaultOgDesc = document.querySelector('meta[property="og:description"]');
  var defaultCanonical = document.querySelector('link[rel="canonical"]');
  if (defaultDesc) defaultDesc = defaultDesc.getAttribute('content');
  if (defaultOgTitle) defaultOgTitle = defaultOgTitle.getAttribute('content');
  if (defaultOgDesc) defaultOgDesc = defaultOgDesc.getAttribute('content');
  if (defaultCanonical) defaultCanonical = defaultCanonical.getAttribute('href');

  function updateMeta(appId, appName, appDesc) {
    var title = appName + ' - Menubar Apps';
    document.title = title;

    var desc = appDesc || defaultDesc;
    setMeta('description', desc);
    setMeta('og:title', title);
    setMeta('og:description', desc);

    var canonical = defaultCanonical ? defaultCanonical.split('#')[0] + '#' + appId : window.location.origin + window.location.pathname + '#' + appId;
    var link = document.querySelector('link[rel="canonical"]');
    if (link) link.setAttribute('href', canonical);
  }

  function resetMeta() {
    document.title = defaultTitle;
    if (defaultDesc) setMeta('description', defaultDesc);
    if (defaultOgTitle) setMeta('og:title', defaultOgTitle);
    if (defaultOgDesc) setMeta('og:description', defaultOgDesc);
    if (defaultCanonical) {
      var link = document.querySelector('link[rel="canonical"]');
      if (link) link.setAttribute('href', defaultCanonical.split('#')[0]);
    }
  }

  function setMeta(name, content) {
    // meta[name="..."]
    var el = document.querySelector('meta[name="' + name + '"]');
    if (el) el.setAttribute('content', content);
    // meta[property="og:..."]
    var og = document.querySelector('meta[property="' + name + '"]');
    if (og) og.setAttribute('content', content);
  }

  function showApp(appId) {
    // Hide grid, show detail
    grid.classList.add('hide');
    detailSections.forEach(function (s) {
      s.classList.remove('active');
    });
    var target = document.getElementById('detail-' + appId);
    if (target) {
      target.classList.add('active');
    }

    // Update sidebar active state
    sidebarItems.forEach(function (item) {
      item.classList.remove('active');
      if (item.getAttribute('data-app') === appId) {
        item.classList.add('active');
      }
    });

    // Update URL hash
    window.location.hash = appId;

    // Update meta tags for sharing
    var card = document.querySelector('.app-card[data-app="' + appId + '"]');
    if (card) {
      var name = card.querySelector('.card-name');
      var desc = card.querySelector('.card-desc');
      updateMeta(appId, name ? name.textContent : appId, desc ? desc.textContent : '');
    }

    // Scroll to top of detail
    window.scrollTo({ top: 0, behavior: 'smooth' });

    closeSidebar();
  }

  function showGrid() {
    grid.classList.remove('hide');
    detailSections.forEach(function (s) {
      s.classList.remove('active');
    });
    sidebarItems.forEach(function (item) {
      item.classList.remove('active');
    });
    window.location.hash = '';
    resetMeta();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Expose showGrid globally for inline onclick
  window.showGrid = showGrid;

  // App card clicks
  appCards.forEach(function (card) {
    card.addEventListener('click', function () {
      var app = card.getAttribute('data-app');
      if (app) showApp(app);
    });
  });

  // Sidebar item clicks
  sidebarItems.forEach(function (item) {
    item.addEventListener('click', function () {
      var app = item.getAttribute('data-app');
      if (app) showApp(app);
    });
  });

  // Resolve app ID from hash or URL path
  function resolveAppId() {
    var hash = window.location.hash.replace('#', '');
    if (hash) return hash;

    // Support individual widget pages: /widgets/pullbar.html -> pullbar
    var match = window.location.pathname.match(/\/widgets\/(.+)\.html$/);
    if (match) return match[1];

    return null;
  }

  // Hash- and path-based navigation on load
  function handleNavigation() {
    var appId = resolveAppId();
    if (appId) {
      var found = false;
      sidebarItems.forEach(function (item) {
        if (item.getAttribute('data-app') === appId) {
          found = true;
        }
      });
      if (found) {
        showApp(appId);
      }
    }
  }

  handleNavigation();

  // Open sidebar on desktop widths (if it was closed by mobile)
  function handleResize() {
    if (window.innerWidth > 900) {
      sidebar.classList.remove('open');
      if (overlay) overlay.classList.remove('open');
    }
  }

  window.addEventListener('resize', handleResize);

})();
