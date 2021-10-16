let pc_nav = document.querySelector('.pc_nav');
let main_menu = document.querySelectorAll('.main_menu>li');
let title = document.querySelector('.header_title>p');
let classification_list = document.querySelectorAll('.classification_list>li');
let contents = document.querySelector('.contents');
let list_all = document.querySelector('.all');
let list_ld = document.querySelector('.ld');
let list_sd = document.querySelector('.sd');
let list_etc = document.querySelector('.etc');
let ld_cnt = 8;
let sd_cnt = 6;
let etc_cnt = 6;
let gif_cnt = 2;
let all_cnt = ld_cnt + sd_cnt + etc_cnt;

setTimeout( () => { pc_nav.style.opacity = '100%'; }, 4000);
setTimeout( () => { title.classList.add('show'); }, 3000);
list_all.classList.add('show');
classification_list[0].classList.add('selected');
let classification_list_after = document.head.appendChild(document.createElement('style'));
classification_list_after.innerHTML = '.classification_list li:nth-child(1):after{ content: ""; position: absolute; width: 100%; left: 0; bottom: -10px; border: 2px solid #298200; box-sizing: border-box; }';

main_menu[1].addEventListener('click', () => {
    contents.scrollIntoView({behavior:'smooth'});
});

//count all
count_ld(list_all); count_sd(list_all); count_etc(list_all);
//count ld
count_ld(list_ld);
//count sd
count_sd(list_sd);
//count etc
count_etc(list_etc);

function count_ld(list){
    for( let i = 0 ; i < ld_cnt ; i++ ){
        let img_box = document.createElement('div');
        img_box.classList.add('img_box');
    
        let img = document.createElement('img');
        img.src='img/ld/ld'+ (i+1)+'.png';
        img.alt='ld image'+ (i+1);
    
        img_box.appendChild(img);
        list.appendChild(img_box);
    }  
}

function count_sd(list){
    for( let i = 0 ; i < sd_cnt; i++ ){
        let img_box = document.createElement('div');
        img_box.classList.add('img_box');
    
        let img = document.createElement('img');
        img.src='img/sd/sd'+ (i+1)+'.png';
        img.alt='sd image'+ (i+1);
    
        img_box.appendChild(img);
        list.appendChild(img_box);
    }
}

function count_etc(list){
    for( let i = 0 ; i < etc_cnt; i++ ){
        let img_box = document.createElement('div');
        img_box.classList.add('img_box');
    
        let img = document.createElement('img');
        img.src='img/etc/etc'+ (i+1)+'.png';
        img.alt='etc image'+ (i+1);
    
        img_box.appendChild(img);
        list.appendChild(img_box);
    }
    
    for( let i = etc_cnt + 1 ; i <= etc_cnt + gif_cnt; i++ ){
        let img_box = document.createElement('div');
        img_box.classList.add('img_box');
    
        let img = document.createElement('img');
        img.src='img/etc/etc'+ i+'.gif';
        img.alt='etc image'+ i;
    
        img_box.appendChild(img);
        list.appendChild(img_box);
    }
}

classification_list[0].addEventListener('click', ()=>{
    list_all.classList.add('show');
    list_ld.classList.remove('show');
    list_sd.classList.remove('show');
    list_etc.classList.remove('show');
    classification_list[0].classList.add('selected');
    classification_list[1].classList.remove('selected');
    classification_list[2].classList.remove('selected');
    classification_list[3].classList.remove('selected');
    classification_list_after.innerHTML = '.classification_list li:nth-child(1):after{ content: ""; position: absolute; width: 100%; left: 0; bottom: -10px; border: 2px solid #298200; box-sizing: border-box; }';
});
classification_list[1].addEventListener('click', ()=>{
    list_all.classList.remove('show');
    list_ld.classList.add('show');
    list_sd.classList.remove('show');
    list_etc.classList.remove('show');
    classification_list[0].classList.remove('selected');
    classification_list[1].classList.add('selected');
    classification_list[2].classList.remove('selected');
    classification_list[3].classList.remove('selected');
    classification_list_after.innerHTML = '.classification_list li:nth-child(2):after{ content: ""; position: absolute; width: 100%; left: 0; bottom: -10px; border: 2px solid #298200; box-sizing: border-box; }';
});
classification_list[2].addEventListener('click', ()=>{
    list_all.classList.remove('show');
    list_ld.classList.remove('show');
    list_sd.classList.add('show');
    list_etc.classList.remove('show');
    classification_list[0].classList.remove('selected');
    classification_list[1].classList.remove('selected');
    classification_list[2].classList.add('selected');
    classification_list[3].classList.remove('selected');
    classification_list_after.innerHTML = '.classification_list li:nth-child(3):after{ content: ""; position: absolute; width: 100%; left: 0; bottom: -10px; border: 2px solid #298200; box-sizing: border-box; }';
});
classification_list[3].addEventListener('click', ()=>{
    list_all.classList.remove('show');
    list_ld.classList.remove('show');
    list_sd.classList.remove('show');
    list_etc.classList.add('show');
    classification_list[0].classList.remove('selected');
    classification_list[1].classList.remove('selected');
    classification_list[2].classList.remove('selected');
    classification_list[3].classList.add('selected');
    classification_list_after.innerHTML = '.classification_list li:nth-child(4):after{ content: ""; position: absolute; width: 100%; left: 0; bottom: -10px; border: 2px solid #298200; box-sizing: border-box; }';
});