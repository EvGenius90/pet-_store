'use strict'


// const email = document.getElementById('email')
// const footerBtn = document.querySelector('.footer__button')

// // email.addEventListener('change', _=>{
// //     footerBtn.style.cssText = `
// //     background: #fe9015;
// //     `
// //     console.log(email.value)
// // })
// if(email.value){
//     console.log(email.value)
// }

const more = document.querySelectorAll('.more')
const linkMore = document.querySelectorAll('.link-more')

for(let i of linkMore){

    i.addEventListener('click', e=>{

        // находит родительский элемент
        const submenu = e.target.closest('.more')
        // находит дочерний элемент
        const zxc = submenu.querySelector('.submenu')
        // меняет стиль окна
        zxc.classList.toggle('visible-menu')
        
    })
    
}

const slide = document.querySelectorAll('.slide')
let num = 0

document.querySelector('.slider__arrow-R').addEventListener('click', _=>{

    // for(let i of slide){

        // if(num <= slide.length){
        //     console.log('good')
        // }
        slide[0].classList.add('d-none')
        slide[1].classList.remove('d-none')
    // }

})


document.querySelector('.slider__arrow-L').addEventListener('click', _=>{

    

})


const call =  document.querySelectorAll('.call')

for(let i of call){

    i.addEventListener('click', _=>{
        
        document.querySelector('.order-call').classList.toggle('d-none')
        document.body.style.overflow = 'hidden'

    })

}

const modalClose = document.querySelectorAll('.modal-close')

for(let i of modalClose){

    i.addEventListener('click', _=>{

        document.querySelector('.order-call').classList.add('d-none')
        document.body.style.overflow = ''
    
    })

}


const header = document.querySelector('.header')
const headerUpper = document.querySelector('.header__upper')
const headerLower = document.querySelector('.header__lower')
const headerAverage = document.querySelector('.header__average')
const logoImg = document.querySelector('.logo__img')
const search = document.querySelector('.search')
const profile = document.querySelector('.profile')
const basket = document.querySelector('.basket')

document.onscroll = function(){

    const scrollY = window.scrollY
    console.log(scrollY)

    const headerInner = document.querySelector('.header__inner')

    if(scrollY >= 90){

        headerInner.classList.add('mini-header')

        headerAverage.classList.add('mini-average')

        headerAverage.style.cssText = `
        align-items: flex-start;
        padding: 15px 0
        `

        logoImg.style.cssText = `
        height: 60px;
        margin-top: -8px;
        `

        search.style.cssText = `
        height: 50px
        `
        
        profile.style.cssText = `
        height: 50px
        `

        basket.style.cssText = `
        height: 50px
        `

        // const headerUpper = headerInner.querySelector('.header__upper')
        headerUpper.classList.add('d-none')

        // const headerLower = headerInner.querySelector('.header__lower')
        headerLower.classList.add('d-none')

        header.style.cssText = `
        margin-top: 10px
        `

    }
    else{
        headerInner.classList.remove('mini-header')

        headerAverage.classList.remove('mini-average')

        headerAverage.style.cssText = `
        align-items: flex-end;
        padding: 9px 0
        `

        logoImg.style.cssText = `
        heght: 73px;
        margin-top: 0px;
        `

        search.style.cssText = `
        height: 60px
        `

        profile.style.cssText = `
        height: 60px
        `

        basket.style.cssText = `
        height: 60px
        `

        headerUpper.classList.remove('d-none')

        headerLower.classList.remove('d-none')

        header.style.cssText = `
        margin-top: 17px
        `

    }

}






