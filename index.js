// ---------------------------
  // AOS (Animate on Scroll) Init
  // ---------------------------
  AOS.init({
    easing: 'ease-in-out-sine',
  });

  // ---------------------------
  // Swiper Slider Init
  // ---------------------------
  const swiper = new Swiper(".mySlider", {
    loop: true,
    autoplay: {
      delay: 2500,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    speed: 900,
  });

  // ---------------------------
  // Scroll to Top Button
  // ---------------------------
  const topBtn = document.querySelector('.top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      topBtn.classList.add('show');
    } else {
      topBtn.classList.remove('show');
    }
  });

  topBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // ---------------------------
  // Smooth Scroll for Anchor Links
  // ---------------------------
  document.querySelectorAll('.scrollto').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });

  // ---------------------------
  // Mobile Menu Toggle
  // ---------------------------
   const menuBtn = document.getElementById("menuBtn");
  const menuList = document.getElementById("menuList");

  menuBtn.addEventListener("click", () => {
    menuList.classList.toggle("hidden"); // toggles visibility on mobile
  });

function sendEmail(e) {
  e.preventDefault(); // ✅ Page reload band

  let btn = document.getElementById("sendBtn");
  let btnText = document.getElementById("btnText");
  let btnLoader = document.getElementById("btnLoader");

  // ✅ Show Loader
  btnText.classList.add("hidden");
  btnLoader.classList.remove("hidden");
  btn.disabled = true;

  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value, // ✅ added
    message: document.getElementById("message").value
  };

  emailjs.send("service_xozu31d", "template_zrbny5h", params)
    .then(function (response) {

      // ✅ Hide Loader
      btnText.classList.remove("hidden");
      btnLoader.classList.add("hidden");
      btn.disabled = false;

      // ✅ Show Success Modal
      document.getElementById("successModal").classList.remove("hidden");

      // ✅ Reset Form
      document.querySelector(".cont-form").reset();

    }, function (error) {

      // ✅ Hide Loader
      btnText.classList.remove("hidden");
      btnLoader.classList.add("hidden");
      btn.disabled = false;

      // ❌ Show Error Modal
      document.getElementById("errorModal").classList.remove("hidden");

      console.log("ERROR:", error);
    });
}

function closeModal() {
  document.getElementById("successModal").classList.add("hidden");
  document.getElementById("errorModal").classList.add("hidden");
}
