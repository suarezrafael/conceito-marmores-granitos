/* ============================================================
   Conceito Mármores e Granitos — Main JavaScript
   ============================================================ */

(function () {
  'use strict';

  // ── Navbar scroll effect ──────────────────────────────────
  const header = document.getElementById('header');

  function onScroll() {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Back-to-top visibility
    const backBtn = document.getElementById('backToTop');
    if (window.scrollY > 400) {
      backBtn.classList.add('visible');
    } else {
      backBtn.classList.remove('visible');
    }

    // Active nav link highlighting
    highlightActiveLink();
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run on load

  // ── Mobile hamburger menu ─────────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // ── Active nav link on scroll ─────────────────────────────
  const sections = document.querySelectorAll('section[id]');

  function highlightActiveLink() {
    const scrollY = window.scrollY + 120;
    sections.forEach(function (section) {
      const sectionTop    = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId     = section.getAttribute('id');
      const link = document.querySelector('.nav-link[href="#' + sectionId + '"]');

      if (link) {
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          document.querySelectorAll('.nav-link').forEach(function (l) { l.classList.remove('active'); });
          link.classList.add('active');
        }
      }
    });
  }

  // ── Back to top ───────────────────────────────────────────
  document.getElementById('backToTop').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ── Portfolio filter ──────────────────────────────────────
  const filterBtns   = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      var filter = btn.getAttribute('data-filter');

      portfolioItems.forEach(function (item) {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.classList.remove('hidden');
          item.style.animation = 'fadeIn .4s ease forwards';
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  // ── Scroll-triggered animations ───────────────────────────
  var animatedEls = document.querySelectorAll('[data-animate]');

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry, i) {
      if (entry.isIntersecting) {
        // Stagger cards
        setTimeout(function () {
          entry.target.classList.add('animated');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  animatedEls.forEach(function (el) { observer.observe(el); });

  // ── Contact form (WhatsApp redirect) ─────────────────────
  var form = document.getElementById('contactForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var nome     = document.getElementById('nome').value.trim();
    var telefone = document.getElementById('telefone').value.trim();
    var email    = document.getElementById('email').value.trim();
    var servico  = document.getElementById('servico').value;
    var mensagem = document.getElementById('mensagem').value.trim();

    // Basic validation
    if (!nome || !telefone || !servico) {
      alert('Por favor, preencha os campos obrigatórios: Nome, Telefone e Serviço.');
      return;
    }

    // Build WhatsApp message
    var servicoNomes = {
      bancada:   'Bancada de Cozinha',
      banheiro:  'Banheiro / Lavabo',
      piso:      'Piso / Revestimento',
      escada:    'Escada',
      mesa:      'Mesa / Tampo',
      comercial: 'Projeto Comercial',
      outro:     'Outro',
    };

    var msg = 'Olá! Vim pelo site e gostaria de um orçamento.\n\n'
            + '*Nome:* ' + nome + '\n'
            + '*Telefone:* ' + telefone + '\n'
            + (email ? '*E-mail:* ' + email + '\n' : '')
            + '*Serviço:* ' + (servicoNomes[servico] || servico) + '\n'
            + (mensagem ? '*Mensagem:* ' + mensagem : '');

    // Replace with the real phone number (digits only, with country code)
    var phone = '5500000000000';
    var waUrl = 'https://wa.me/' + phone + '?text=' + encodeURIComponent(msg);

    window.open(waUrl, '_blank', 'noopener');

    // Show success message
    document.getElementById('formSuccess').style.display = 'flex';
    form.reset();

    // Hide success after 6 seconds
    setTimeout(function () {
      document.getElementById('formSuccess').style.display = 'none';
    }, 6000);
  });

  // ── Smooth scroll for anchor links (fallback) ─────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var offsetTop = target.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    });
  });

})();
