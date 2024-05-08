function changeLang() {
    var headerLangEle = document.querySelector('.header__cta-lang')
    langCurr = document.querySelector('.header__language-current')
    langSelect = document.querySelectorAll('.header__language-select a')
    if(headerLangEle){
        headerLangEle.addEventListener('click', (e) => {
            e.stopPropagation();
            headerLangEle.classList.toggle('--active')
            langCurrContent = langCurr.innerText
            window.onclick = () => {
                headerLangEle.classList.remove('--active')
            }
        })
        langSelect.forEach((current) => {
            current.addEventListener('click', (e) => {
                e.stopPropagation();
                langCurr.innerText = current.innerText
                current.innerText = langCurrContent
                headerLangEle.classList.remove('--active')
            })
        })
    }
}

function nav() {
    navBtn = document.querySelector('.header__btnmenu');
    navEle = document.querySelector('.header .nav')
    if(navBtn){
        navBtn.addEventListener('click', (e) => {
            navEle.classList.toggle('--active')
        })
        navEle.addEventListener('click', (e) => {
            navEle.classList.toggle('--active')
        })
        navEle.querySelector('ul').addEventListener('click', (e) => {
            e.stopPropagation();
        })
    }

}

function increaseNumber() {
    let numberList = document.querySelectorAll('.scform__content-bottom .number')
    let check = 0
    if (numberList.length != 0 & check == 0) {
        if ((window.scrollY + window.innerHeight) > numberList[0].offsetTop) {
            let n0 = 0;
            let n1 = 0;
            function increment(n0, n1) {
                if (n0 <= 200) {
                    if (n1 <= 180) {
                        numberList[0].innerHTML = `${n0}+`
                        numberList[1].innerHTML = `${n1}+`
                        setTimeout(increment, 1, ++n0, ++n1);

                    }
                    else {
                        numberList[0].innerHTML = `${n0}+`
                        setTimeout(increment, 1, ++n0, n1);
                    }
                }
            }
            increment(n0, n1);
            check = 1;
        }
    }
    if (check == 1) {
        window.removeEventListener('scroll', increaseNumber)
    }
}

function scrollFunction() {
    window.addEventListener('scroll',increaseNumber);
    window.addEventListener('scroll',increaseNumberServicePage);
}

function responBlog(){
    var flkty;
    var flkty2;
    var sceventBlog = document.querySelector('.scevent__blog');
    var scblogBlog = document.querySelector('.scblog__blog');

    function flickityResize(){
        if(window.innerWidth < 1200 & window.innerWidth >= 992){
            flkty = new Flickity(sceventBlog, {
            // options
            cellAlign: 'left',
            contain: true,
            freeScroll: true,
            contain: true,
            prevNextButtons: false,
            pageDots: false,
            groupCells: 2
            });

            flkty2 = new Flickity(scblogBlog, {
                // options
                cellAlign: 'left',
                contain: true,
                freeScroll: true,
                contain: true,
                prevNextButtons: false,
                pageDots: false,
                groupCells: 2
            });
        }
        else if(typeof flkty != 'undefined'){
            flkty.destroy()
            flkty2.destroy()
        }
    }

    if(sceventBlog != null & scblogBlog != null){
        window.addEventListener('resize',(e) => {
            flickityResize()
        })
        window.onload = () => {
            flickityResize()
        }
    }
}

function sliderHomepage() {
    var sliderList = document.querySelector('.slider__list');
    var nextBtn = document.querySelector('.slider .arrow-next');
    var prevBtn = document.querySelector('.slider .arrow-prev');

    if(sliderList){
        var flkty = new Flickity( sliderList, {
            // options
            cellAlign: 'left',
            contain: true,
            draggable: '>1',
            // disable previous & next buttons and dots
            prevNextButtons: false,
            pageDots: false,
            wrapAround: true,
            });
    }

    if(nextBtn){
        nextBtn.addEventListener('click',(e) => {
            flkty.next();
        })
    }
    if(prevBtn){
        prevBtn.addEventListener('click',(e) => {
            flkty.previous();
        })
    }
}

function serviceScservice(){
    var list = document.querySelector('#servicepage .scservice__list');
    if(list){
        var flkty = new Flickity( list, {
        // options
        cellAlign: 'left',
        contain: true,
        freeScroll: true,
        wrapAround: true,
        prevNextButtons: false,
        pageDots: false,
        groupCells: 2,
        // draggable: false
        });

        window.onload = () => {
            flkty.select( 1, true, false )
        }
    }
}

function increaseNumberServicePage() {
    let numberList = document.querySelectorAll('#servicepage .scnumber__item .number');
    let number = [200,180,350,250];
    let check = 0;
    function increment(n,ele,curr = 0){
        if(curr <= n){
            ele.innerHTML = `${curr}+`;
            setTimeout(increment, 1, n, ele, ++curr);
        }
    }
    if (numberList.length != 0 & check == 0) {
        if ((window.scrollY + window.innerHeight) > numberList[0].offsetTop) {
            numberList.forEach((ele,index) => {
                increment(number[index],ele,0);
            })
            check = 1;
        }
    }
    if (check == 1) {
        window.removeEventListener('scroll', increaseNumberServicePage)
    }
}

function tabLibrary(){
    let optionList = document.querySelectorAll('.sclibrary__option span');
    let listImgList = document.querySelectorAll('.sclibrary__list');
    
    if(optionList.length != 0 & listImgList.length != 0){
        optionList.forEach((ele,index) => {
            ele.addEventListener('click',() => {
                if(!ele.classList.contains('--active')){
                    optionList.forEach((ele) => ele.classList.remove('--active'));
                    ele.classList.add('--active');

                    listImgList.forEach((ele) => ele.classList.remove('--active'));
                    listImgList[index].classList.add('--active');
                }
            })
        })
    }
}

tabLibrary()

scrollFunction()

nav()

responBlog()

sliderHomepage()

changeLang()

serviceScservice()