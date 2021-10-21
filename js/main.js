const logo = document.querySelector('.logo>a');
const logo_bg = document.querySelector('.logo_bg');
const pc_nav = document.querySelector('.pc_nav');
const main_menu = document.querySelectorAll('.main_menu>li');
const header_title = document.querySelector('.header_title');
const title = document.querySelector('.header_title_bg>p');
const dark = document.querySelector('.dark');
const light = document.querySelector('.light');
const about_wrapper = document.querySelector('.about_wrapper');
const about = document.querySelector('.about');
const return_arrow = document.querySelector('.return>img');
const classification_list = document.querySelectorAll('.classification_list>li');
const contents = document.querySelector('.contents');
const list_all = document.querySelector('.all');
const list_ld = document.querySelector('.ld');
const list_sd = document.querySelector('.sd');
const list_etc = document.querySelector('.etc');
let styleEle = document.createElement('style');
styleEle.id = "keyset";
document.head.appendChild(styleEle);
let total = document.querySelector('.total');
let ld_cnt = 9;
let sd_cnt = 6;
let etc_cnt = 7;
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

//mode controll
light.classList.add('show');
dark.addEventListener('click', () => {
    dark.classList.remove('show');
    light.classList.add('show');
});
light.addEventListener('click', () => {
    dark.classList.add('show');
    light.classList.remove('show');
});

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
        img.alt='ld'+ (i+1);
    
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
        img.alt='sd'+ (i+1);
    
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
        img.alt='etc'+ (i+1);
    
        img_box.appendChild(img);
        list.appendChild(img_box);
    }
    
    for( let i = etc_cnt + 1 ; i <= etc_cnt + gif_cnt; i++ ){
        let img_box = document.createElement('div');
        img_box.classList.add('img_box');
    
        let img = document.createElement('img');
        img.src='img/etc/etc'+ i+'.gif';
        img.alt='etc'+ i;
    
        img_box.appendChild(img);
        list.appendChild(img_box);
    }

    for( let i = etc_cnt + gif_cnt + 1 ; i <= etc_cnt + gif_cnt + etc_cnt2; i++ ){
        let img_box = document.createElement('div');
        img_box.classList.add('img_box');
    
        let img = document.createElement('img');
        img.src='img/etc/etc'+ i+'.png';
        img.alt='etc'+ i;
    
        img_box.appendChild(img);
        list.appendChild(img_box);
    }
}
//show total
total.innerHTML = 'Total : ' + all_cnt;

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
    total.innerHTML = 'Total : ' + all_cnt;
    set_star_animation();
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
    total.innerHTML = 'Total : ' + ld_cnt;
    set_star_animation();
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
    total.innerHTML = 'Total : ' + sd_cnt;
    set_star_animation();
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
    total.innerHTML = 'Total : ' + all_etc_cnt;
    set_star_animation();
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

//view images
const view_image_wrapper = document.querySelector('.view_image_wrapper');
const view_img_box = document.querySelector('.view_img_box');
const artworks = document.querySelectorAll('.img_box');
const artworks_each = document.querySelectorAll('.img_box>img');
const work_date = document.querySelector('.work_date');
const return_works = document.querySelector('.return_works');
const dark_bg = document.querySelector('.dark_bg');
const return_bg = document.querySelector('.return_bg');

artworks.forEach( img => img.addEventListener('click', () => {
    let zoom_img = document.createElement('img');
    zoom_img.src = img.children[0].src;
    zoom_img.alt = img.children[0].alt;

    let number = Number(img.children[0].alt.replace(/[^0-9]/g,''));
    let sort = img.children[0].alt.replace(/[0-9]/g,'');
    if( sort === 'ld' ) work_date.innerHTML = DATE.ld[number-1];
    if( sort === 'sd' ) work_date.innerHTML = DATE.sd[number-1];
    if( sort === 'etc' ) work_date.innerHTML = DATE.etc[number-1];

    view_img_box.appendChild(zoom_img);
    view_image_wrapper.classList.add('show');
    document.querySelector('body').classList.add('scrolllock');
    dark_bg.classList.add('show');
    return_works.classList.add('show');
    return_bg.classList.add('show');
}));
//need fixing
artworks_each.forEach( img => img.addEventListener('mouseover', () => {
    img.classList.add('hover');
}));
artworks_each.forEach( img => img.addEventListener('mouseout', () => {
    img.classList.remove('hover');
}));

return_works.addEventListener('click', return_gallery );
return_bg.addEventListener('click', return_gallery );

function return_gallery(){
    document.querySelector('body').classList.remove('scrolllock');
    return_works.classList.remove('show');
    dark_bg.classList.remove('show');
    view_img_box.removeChild(view_img_box.children[0]);
    view_image_wrapper.classList.remove('show');
    return_bg.classList.remove('show');
}

//random star background
const star_bg = document.querySelector('.star_bg');
function star(){
    let generate_star = 0;
    for( let cnt = 500 ; generate_star < cnt ; generate_star++ ){
        let star = document.createElement('div');
        star.classList.add('star');

        let x = Math.floor( Math.random() * window.innerWidth );
        let size = Math.random() * 2;
        let duration = 15 * Math.random();

        star.style.left = x + 'px';
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.animationDuration = 15 + duration + 's';
        star.style.animationDelay = duration + 's';

        star_bg.append(star);
    }
}
set_star_animation();

function set_star_animation(){
    styleEle.innerHTML = `
    @keyframes starAnimate{
         0%{
             opacity: 0;
             transform:translateY(` + -(document.body.offsetHeight+200) + `px);
            }
        10%, 90%{
            opacity: 1;
        }
        100%{
            opacity: 0;
            ransform: translateY(0);
        }
    .star{
        position: absolute;
        bottom: 0;
        animation: starAnimate linear infinite;
        background-color: white;
        opacity: 0;
    }
    `;
}

window.addEventListener('resize', () => {
    while( star_bg.hasChildNodes() ){
        star_bg.removeChild(star_bg.firstChild);
    }

    star();
});

star();

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