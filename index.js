/* ---- Navbar scroll ---- */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    });

    /* ---- Scroll reveal ---- */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    /* ---- Testimonial slider ---- */
    const quotes  = document.querySelectorAll('.testimonial__quote');
    let current   = 0;
    function showQuote(idx) {
      quotes[current].classList.remove('active');
      current = (idx + quotes.length) % quotes.length;
      quotes[current].classList.add('active');
    }
    document.getElementById('tPrev').addEventListener('click', () => showQuote(current - 1));
    document.getElementById('tNext').addEventListener('click', () => showQuote(current + 1));

    /* ---- Email modal ---- */
    function openEmailModal(context, title, sub) {
      if (context) document.getElementById('modalContext').textContent = context;
      if (title)   document.getElementById('modalTitle').textContent   = title;
      if (sub)     document.getElementById('modalSub').textContent     = sub;
      document.getElementById('emailModal').classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeEmailModal() {
      document.getElementById('emailModal').classList.remove('open');
      document.body.style.overflow = '';
    }

    document.getElementById('emailModal').addEventListener('click', function(e) {
      if (e.target === this) closeEmailModal();
    });

    const galleryOverlay = document.getElementById('galleryOverlay');

    function openGalleryModal() {
      if (!galleryOverlay) return;
      galleryOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeGalleryModal() {
      if (!galleryOverlay) return;
      galleryOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }

    document.querySelectorAll('.attorney-card__photo').forEach(photo => {
      photo.addEventListener('click', (e) => {
        if (e.target.closest('.attorney-card__email-btn')) return;
        openGalleryModal();
      });
    });

    if (galleryOverlay) {
      galleryOverlay.addEventListener('click', function(e) {
        if (e.target === this) closeGalleryModal();
      });
    }

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        closeEmailModal();
        closeGalleryModal();
      }
    });

    function submitEmail(e) {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(e.target));
      const body  = `Nome: ${data.name}\nE-mail: ${data.email}\nTelefone: ${data.phone || '—'}\nÁrea: ${data.area}\n\n${data.message || ''}`;
      const subject = `Consulta Sovereign Law — ${data.area || 'Geral'}`;
      window.location.href = `mailto:contato@sovereignlaw.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setTimeout(() => { e.target.reset(); closeEmailModal(); }, 500);
    }
