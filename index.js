
let header = document.querySelector('#header');

onscroll = (e) => {
 console.log(scrollY)
    if(scrollY >= 129){
        header.classList.add('inBg');
        header.classList.remove('outBg');
    }else{
        header.classList.add('outBg');
        header.classList.remove('inBg');
    }
 //129 start about section
}
