document.getElementById("openPopup").addEventListener("click", function () {
  document.getElementById("popup").classList.add("active")
})

document.getElementById("closePopup").addEventListener("click", function () {
  document.getElementById("popup").classList.remove("active")
})
document.getElementById("closeMobile").addEventListener("click", function () {
  document.getElementById("mobileMenu").classList.remove("active")
})
document.getElementById("burger").addEventListener("click", function () {
  document.getElementById("mobileMenu").classList.add("active")
})

document.getElementById("closeMobile").addEventListener("click", function () {
  document.getElementById("mobileMenu").classList.remove("active")
})
document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".swiper-wrapper")
  const card = document.querySelector(".components-card")
  if (!wrapper || !card) return

  const cardWidth = card.offsetWidth + 20

  const nextBtn = document.querySelector(".swiper-button-next")
  const prevBtn = document.querySelector(".swiper-button-prev")

  nextBtn.addEventListener("click", () => {
    wrapper.scrollBy({left: cardWidth, behavior: "smooth"})
  })

  prevBtn.addEventListener("click", () => {
    wrapper.scrollBy({left: -cardWidth, behavior: "smooth"})
  })
})
