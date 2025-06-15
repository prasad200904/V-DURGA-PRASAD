 const section = document.getElementById('skillsSection');
    const fills = document.querySelectorAll('.skill-fill');

    function isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    }

    function animateSkillBars() {
      if (isInViewport(section)) {
        fills.forEach(fill => {
          fill.style.width = fill.getAttribute('data-width');
        });
        window.removeEventListener('scroll', animateSkillBars); // only run once
      }
    }

    window.addEventListener('scroll', animateSkillBars);
    window.addEventListener('load', animateSkillBars); //
    
  const myBox = document.getElementById("skills");

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  function handleScroll() {
    if (isInViewport(myBox)) {
      myBox.classList.add("zoom-in");
      window.removeEventListener("scroll", handleScroll);
    }
  }

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("load", handleScroll);
  
  //popup certificate

  function closePopup(id) {
  document.getElementById(id).style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Open popup when anchor clicked
document.querySelectorAll('a[href^="#popup"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const popupId = this.getAttribute('href').substring(1);
    document.getElementById(popupId).style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
});

// Allow clicking outside image to close popup
document.querySelectorAll('.popup').forEach(popup => {
  popup.addEventListener('click', function (e) {
    if (e.target === popup) {
      popup.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
});
