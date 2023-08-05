let tab1 = document.querySelector('.video_tab')
let tab2 = document.querySelector('.pres_tab')
let tab3 = document.querySelector('.test_tab')
let tab4 = document.querySelector('.dz_tab')
let tab5 = document.querySelector('.sopr_tab')

const linkTab1 = document.querySelector('.tab1')
const linkTab2 = document.querySelector('.tab2')
const linkTab3 = document.querySelector('.tab3')
const linkTab4 = document.querySelector('.tab4')
const linkTab5 = document.querySelector('.tab5')

const video1 = document.querySelector('#firstVideo')
const video2 = document.querySelector('#secondVideo')
const video3 = document.querySelector('#threeVideo')
const video4 = document.querySelector('#thourVideo')
const video5 = document.querySelector('#fiveVideo')

tab1.addEventListener('click', () => {
  event.preventDefault();
  video1.classList.add('active')
  video2.classList.remove('active')
  video3.classList.remove('active')
  video4.classList.remove('active')
  video5.classList.remove('active')


  linkTab1.classList.add('active-click')
  linkTab2.classList.remove('active-click')
  linkTab3.classList.remove('active-click')
  linkTab4.classList.remove('active-click')
  linkTab5.classList.remove('active-click')
})

tab2.addEventListener('click', () => {
  event.preventDefault();
  video1.classList.remove('active')
  video2.classList.add('active')
  video3.classList.remove('active')
  video4.classList.remove('active')
  video5.classList.remove('active')


  linkTab1.classList.remove('active-click')
  linkTab2.classList.add('active-click')
  linkTab3.classList.remove('active-click')
  linkTab4.classList.remove('active-click')
  linkTab5.classList.remove('active-click')
})

tab3.addEventListener('click', () => {
  event.preventDefault();
  video1.classList.remove('active')
  video2.classList.remove('active')
  video3.classList.add('active')
  video4.classList.remove('active')
  video5.classList.remove('active')


  linkTab1.classList.remove('active-click')
  linkTab2.classList.remove('active-click')
  linkTab3.classList.add('active-click')
  linkTab4.classList.remove('active-click')
  linkTab5.classList.remove('active-click')
})

tab4.addEventListener('click', () => {
  event.preventDefault();
  video1.classList.remove('active')
  video2.classList.remove('active')
  video3.classList.remove('active')
  video4.classList.add('active')
  video5.classList.remove('active')


  linkTab1.classList.remove('active-click')
  linkTab2.classList.remove('active-click')
  linkTab3.classList.remove('active-click')
  linkTab4.classList.add('active-click')
  linkTab5.classList.remove('active-click')
})

tab5.addEventListener('click', () => {
  event.preventDefault();
  video1.classList.remove('active')
  video2.classList.remove('active')
  video3.classList.remove('active')
  video4.classList.remove('active')
  video5.classList.add('active')


  linkTab1.classList.remove('active-click')
  linkTab2.classList.remove('active-click')
  linkTab3.classList.remove('active-click')
  linkTab4.classList.remove('active-click')
  linkTab5.classList.add('active-click')
})