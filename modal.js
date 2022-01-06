const modalContainer = document.querySelector('.get-trial')
console.log(modalContainer)
modalContainer.addEventListener('click', e => {
    console.log(e)
    const modalToggle = e.target
    console.log(modalToggle)
    
    const modal = modalToggle.nextElementSibling    
    console.log(modal)
    modal.classList.add('is-open')
})

const modalCloser = document.querySelector('.modal-close')

modalCloser.addEventListener('click',e=>{
    console.log(e)
    const modalClose= e.target
    console.log(modalClose)
    const noModal = modalClose.parentNode.parentNode
    console.log(noModal)
    noModal.classList.remove('is-open')
})

const modalContainer2 = document.querySelector('.get-trial2')
console.log(modalContainer2)
modalContainer2.addEventListener('click', e => {
    console.log(e)
    const modalToggle = e.target
    console.log(modalToggle)
    
    const modal = modalToggle.nextElementSibling    
    console.log(modal)
    modal.classList.add('is-open')
})

const modalCloser2 = document.querySelector('.modal-close2')

modalCloser2.addEventListener('click',e=>{
    console.log(e)
    const modalClose= e.target
    console.log(modalClose)
    const noModal = modalClose.parentNode.parentNode
    console.log(noModal)
    noModal.classList.remove('is-open')
})