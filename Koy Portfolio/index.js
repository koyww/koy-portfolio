const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        header.classList.add('shrink');
      } else {
        header.classList.remove('shrink');
      }
    });
  
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.nav a');

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if(entry.isIntersecting){
            entry.target.classList.add('show');
            navLinks.forEach(link => {
              link.classList.toggle('active', link.getAttribute('href').substring(1) === entry.target.id);
            });
          }
        });
      }, { threshold: 0.6 });

      sections.forEach(sec => observer.observe(sec));