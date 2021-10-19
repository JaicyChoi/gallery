const logo = document.querySelector('.logo>a');
const logo_bg = document.querySelector('.logo_bg');
const pc_nav = document.querySelector('.pc_nav');
const main_menu = document.querySelectorAll('.main_menu>li');
const header_title = document.querySelector('.header_title');
const title = document.querySelector('.header_title>p');
const about_wrapper = document.querySelector('.about_wrapper');
const about = document.querySelector('.about');
const return_arrow = document.querySelector('.return>img');
const classification_list = document.querySelectorAll('.classification_list>li');
const contents = document.querySelector('.contents');
const list_all = document.querySelector('.all');
const list_ld = document.querySelector('.ld');
const list_sd = document.querySelector('.sd');
const list_etc = document.querySelector('.etc');
let total = document.querySelector('.total');
let ld_cnt = 8;
let sd_cnt = 6;
let etc_cnt = 6;
let etc_cnt2 = 2;
let gif_cnt = 2;
let all_etc_cnt = etc_cnt + etc_cnt2 + gif_cnt;
let all_cnt = ld_cnt + sd_cnt + etc_cnt + etc_cnt2 + gif_cnt;

//logo rotate animation
logo.addEventListener('mouseenter', () => { logo_bg.classList.add('rotate'); });
logo.addEventListener('mouseleave', () => { logo_bg.classList.remove('rotate'); });

//header animation
setTimeout( () => { pc_nav.classList.add('show'); }, 5000);
setTimeout( () => { title.classList.add('show'); }, 3000);
list_all.classList.add('show');
classification_list[0].classList.add('selected');
let classification_list_after = document.head.appendChild(document.createElement('style'));
classification_list_after.innerHTML = '.classification_list li:nth-child(1):after{ content: ""; position: absolute; width: 100%; left: 0; bottom: -10px; border: 2px solid #298200; box-sizing: border-box; }';

//show about
main_menu[0].addEventListener('click', () => {
    document.querySelector('body').classList.add('scrolllock');
    document.querySelector('header').classList.add('scrolllock');
    pc_nav.classList.remove('show');
    header_title.classList.add('hide');
    about_wrapper.classList.add('show');
    about.classList.add('show');
});
return_arrow.addEventListener('click', () => {
    document.querySelector('body').classList.remove('scrolllock');
    document.querySelector('header').classList.remove('scrolllock');
    pc_nav.classList.add('show');
    header_title.classList.remove('hide');
    about_wrapper.classList.remove('show');
    about.classList.remove('show');
});

//go works
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

    for( let i = etc_cnt + gif_cnt + 1 ; i <= etc_cnt + gif_cnt + etc_cnt2; i++ ){
        let img_box = document.createElement('div');
        img_box.classList.add('img_box');
    
        let img = document.createElement('img');
        img.src='img/etc/etc'+ i+'.png';
        img.alt='etc image'+ i;
    
        img_box.appendChild(img);
        list.appendChild(img_box);
    }
}
//show total
total.innerHTML = 'total : ' + all_cnt;

//classification controll
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
    total.innerHTML = 'total : ' + all_cnt;
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
    total.innerHTML = 'total : ' + ld_cnt;
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
    total.innerHTML = 'total : ' + sd_cnt;
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
    total.innerHTML = 'total : ' + all_etc_cnt;
});

//top button controll
const top_btn_wrapper = document.querySelector('.top_btn_wrapper');
const top_btn = document.querySelector('.top_btn');

window.addEventListener('scroll', function(){
    let scroll_height = window.pageYOffset;

    if( scroll_height >= document.body.scrollHeight/5 ){
        top_btn_wrapper.classList.add('show');
    }
    else if( scroll_height < document.body.scrollHeight/5 ){
        top_btn_wrapper.classList.remove('show');
    }
});

top_btn.addEventListener('click', function(){
    document.querySelector('header').scrollIntoView({behavior:'smooth'});
});

//mouse indicator
$(document).ready(function(){
    var mousePos = {};
    function getRandomInt(min, max) {
        return Math.round(Math.random() * (max - min + 1)) + min;
    }
    
    $(window).mousemove(function(e) {
      mousePos.x = e.pageX;
      mousePos.y = e.pageY;
    });
    
    $(window).mouseleave(function(e) {
      mousePos.x = -1;
      mousePos.y = -1;
    });
    
    var draw = setInterval(function(){
      if(mousePos.x > 0 && mousePos.y > 0){
        
        var range = 15;
        
        var color = "background: rgb("+getRandomInt(0,255)+","+getRandomInt(0,255)+","+getRandomInt(0,255)+");";
        
        var sizeInt = getRandomInt(10, 25);
        size = "height: " + sizeInt + "px; width: " + sizeInt + "px;";
        
        var left = "left: " + getRandomInt(mousePos.x-range-sizeInt, mousePos.x+range) + "px;";
        var top = "top: " + getRandomInt(mousePos.y-range-sizeInt, mousePos.y+range) + "px;"; 
  
        var style = left+top+color+size;
        $("<div class='ball' style='" + style + "'></div>").appendTo('body').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){$(this).remove();}); 
      }
    }, 1);
  });