if (performance.navigation.type == performance.navigation.TYPE_RELOAD)
    window.location.href = 'index.html';

const header = document.querySelector('header');
const header_bg_img = document.querySelector('.header_bg_img');
const logo = document.querySelector('.logo>a');
const logo_bg = document.querySelector('.logo_bg');
const contents_logo = document.querySelector('.contents_logo>p');
const contents_logo_bg = document.querySelector('.contents_logo_bg');
const pc_nav = document.querySelector('.pc_nav');
const main_menu = document.querySelectorAll('.main_menu>li');
const menu_icon = document.querySelector('.menu_icon');
const mobile_nav_wrapper = document.querySelector('.mobile_nav_wrapper');
const mobile_menu = document.querySelector('.mobile_menu');
const mobile_menu_li = document.querySelectorAll('.mobile_menu>li');
const close_btn = document.querySelector('.close_btn');
const header_title = document.querySelector('.header_title');
const header_title_bg = document.querySelector('.header_title_bg');
const title = document.querySelector('.header_title_bg>p');
const change_mode = document.querySelector('.change_mode');
const dark = document.querySelector('.dark_mode');
const light = document.querySelector('.light_mode');
const contents_change_dark_mode = document.querySelector('.contents_change_dark_mode');
const contents_change_light_mode = document.querySelector('.contents_change_light_mode');
const about_wrapper = document.querySelector('.about_wrapper');
const about = document.querySelector('.about');
const about_text_box = document.querySelector('.text_box');
const return_arrow = document.querySelector('.return>img');
const classification_list_all = document.querySelector('.classification_list');
const classification_list = document.querySelectorAll('.classification_list>li');
const contents = document.querySelector('.contents');
const list_all = document.querySelector('.all');
const list_ld = document.querySelector('.ld');
const list_sd = document.querySelector('.sd');
const list_etc = document.querySelector('.etc');
const top_btn_wrapper = document.querySelector('.top_btn_wrapper');
const main_btn_wrapper = document.querySelector('.main_btn_wrapper');
const top_btn = document.querySelector('.top_btn');
// const main_btn = document.querySelector('.main_btn');
const footer = document.querySelector('footer');
let styleEle = document.createElement('style');
styleEle.id = "keyset";
document.head.appendChild(styleEle);
let total = document.querySelector('.total');
let ld_cnt = 15;
let sd_cnt = 9;
let etc_cnt = 8;
let etc_cnt2 = 4;
let gif_cnt = 2;
let all_etc_cnt = etc_cnt + etc_cnt2 + gif_cnt;
let all_cnt = ld_cnt + sd_cnt + etc_cnt + etc_cnt2 + gif_cnt;
let current_mode = 'light';
let list_selected = 1;
let current_position = 'header';
let last_animation = 0;
const animation_interval = 1000;
let move_works = false;

document.querySelector('body').classList.add('scrolllock');
// document.addEventListener('mousewheel', function(event){
//     let delta = event.wheelDelta;
//     let realtime = new Date().getTime();

//     if( realtime - last_animation < animation_interval ) return;
//     if( current_position === 'header' && delta < 0 ){
//         current_position = 'contents';
//         header.classList.add('hide');
//         contents.scrollIntoView({behavior:'smooth'});
//         document.querySelector('body').classList.remove('scrolllock');  
//         main_btn_wrapper.classList.add('show');
//     }

//     last_animation = realtime;
// });

//main bg resize controll
if( window.innerHeight > window.innerWidth )
        header_bg_img.classList.add('resize');
else
    header_bg_img.classList.remove('resize');

window.addEventListener('resize', function() {
    if( window.innerHeight > window.innerWidth )
        header_bg_img.classList.add('resize');
    else
        header_bg_img.classList.remove('resize');
});

//logo rotate animation
logo.addEventListener('mouseenter', () => { logo_bg.classList.add('rotate'); });
logo.addEventListener('mouseleave', () => { logo_bg.classList.remove('rotate'); });
contents_logo.addEventListener('mouseenter', () => { contents_logo_bg.classList.add('rotate'); });
contents_logo.addEventListener('mouseleave', () => { contents_logo_bg.classList.remove('rotate'); });
contents_logo.addEventListener('click', () => {
    move_works = false;
    current_position = 'header';
    header.classList.remove('hide');
    document.querySelector('header').scrollIntoView({behavior:'smooth'});
    main_btn_wrapper.classList.remove('show');
    mobile_nav_wrapper.classList.remove('show');
    document.querySelector('body').classList.add('scrolllock');
});

//header animation
setTimeout( () => { pc_nav.classList.add('show'); }, 5000);
setTimeout( () => { title.classList.add('show'); }, 3000);

list_all.classList.add('show');
let classification_list_after = document.head.appendChild(document.createElement('style'));
classification_list_after.innerHTML = '.classification_list li:nth-child(1):after{ content: ""; position: absolute; width: 100%; left: 0; bottom: -10px; border-bottom: 3px solid #298200; box-sizing: border-box; }';
classification_list_after.innerHTML = '.classification_list li:nth-child(1):after{ content: ""; position: absolute; width: 100%; left: 0; bottom: -10px; border-bottom: 3px solid #298200; box-sizing: border-box; }';

//mode controll
let header_title_bg_before = document.head.appendChild(document.createElement('style'));
let header_title_bg_after = document.head.appendChild(document.createElement('style'));

// dark_mode_on();
// header_bg_img.classList.add('dark');
dark.classList.add('show');
contents_change_dark_mode.classList.add('show');

function dark_mode_on(){
    current_mode = 'dark';
    light.classList.add('show');
    contents_change_light_mode.classList.add('show');
    header.classList.add('dark');
    logo.classList.add('dark');
    logo_bg.classList.add('dark');
    contents_logo.classList.add('dark');
    contents_logo_bg.classList.add('dark');
    pc_nav.classList.add('dark');
    menu_icon.classList.add('dark');
    mobile_menu.classList.add('dark');
    mobile_menu_li.forEach( li => li.classList.add('dark') );
    close_btn.classList.add('dark');
    main_btn_wrapper.classList.add('dark');
    header_title_bg.classList.add('dark');
    title.classList.add('dark');
    about_text_box.classList.add('dark');
    contents.classList.add('dark');
    classification_list_all.classList.add('dark');
    total.classList.add('dark');
    top_btn.classList.add('dark');
    // main_btn.classList.add('dark');
    footer.classList.add('dark');    
    header_title_bg_before.innerHTML = '.header_title_bg:before{ content: ""; position: absolute; top: 10px; left: -15px; width: 0; height: 0; background: transparent; border: 2px solid transparent; animation: title_line_dark 1.3s linear forwards; animation-delay: 1s; }';
    header_title_bg_after.innerHTML = '.header_title_bg:after{ content: ""; position: absolute; top: -15px; left: 10px; width: 0; height: 0; background: transparent; border: 2px solid transparent; animation: title_line_2_dark 1.3s linear forwards; animation-delay: 2.3s; }';
    classification_list[list_selected-1].classList.add('selected_dark');
    classification_list_after.innerHTML = '.classification_list li:nth-child('+ list_selected +'):after{ content: ""; position: absolute; width: 100%; left: 0; bottom: -10px; border-bottom: 3px solid #eb4444; box-sizing: border-box; }';
    classification_list.forEach( li => li.classList.add('dark') );
    classification_list.forEach( li => li.classList.remove('selected') );
}

dark.addEventListener('click', () => {
    dark_mode_on();
    if( current_mode === 'dark' )
        header_bg_img.classList.add('dark2');

    dark.classList.remove('show');
    document.querySelectorAll('.star_light').forEach( star => star.className = 'star');

    artworks.forEach( img => img.classList.add('dark') );
});
contents_change_dark_mode.addEventListener('click', () => {
    dark_mode_on();
    if( current_mode === 'dark' )
        header_bg_img.classList.add('dark2');

    dark.classList.remove('show');
    contents_change_dark_mode.classList.remove('show');
    document.querySelectorAll('.star_light').forEach( star => star.className = 'star');

    artworks.forEach( img => img.classList.add('dark') );
});
light.addEventListener('click', () => light_mode_on() );
contents_change_light_mode.addEventListener('click', () => light_mode_on() );

function light_mode_on(){
    current_mode = 'light';
    document.querySelectorAll('.star').forEach( star => star.className = 'star_light');
    dark.classList.add('show');
    light.classList.remove('show');
    contents_change_dark_mode.classList.add('show');
    contents_change_light_mode.classList.remove('show');
    header.classList.remove('dark');
    header_bg_img.classList.remove('dark');
    header_bg_img.classList.remove('dark2');
    logo.classList.remove('dark');
    logo_bg.classList.remove('dark');
    contents_logo.classList.remove('dark');
    contents_logo_bg.classList.remove('dark');
    pc_nav.classList.remove('dark');
    menu_icon.classList.remove('dark');
    mobile_menu.classList.remove('dark');
    mobile_menu_li.forEach( li => li.classList.remove('dark') );
    close_btn.classList.remove('dark');
    main_btn_wrapper.classList.remove('dark');
    header_title_bg.classList.remove('dark');
    title.classList.remove('dark');
    about_text_box.classList.remove('dark');
    contents.classList.remove('dark');
    classification_list_all.classList.remove('dark');
    total.classList.remove('dark');
    artworks.forEach( img => img.classList.remove('dark') );
    top_btn.classList.remove('dark');
    // main_btn.classList.remove('dark');
    footer.classList.remove('dark');
    header_title_bg_before.innerHTML = '.header_title_bg:before{ content: ""; position: absolute; top: 10px; left: -15px; width: 0; height: 0; background: transparent; border: 2px solid transparent; animation: title_line 1.3s linear forwards; animation-delay: 1s; }';
    header_title_bg_after.innerHTML = '.header_title_bg:after{ content: ""; position: absolute; top: -15px; left: 10px; width: 0; height: 0; background: transparent; border: 2px solid transparent; animation: title_line_2 1.3s linear forwards; animation-delay: 2.3s; }';
    classification_list[list_selected-1].classList.add('selected');
    classification_list_after.innerHTML = '.classification_list li:nth-child('+ list_selected +'):after{ content: ""; position: absolute; width: 100%; left: 0; bottom: -10px; border-bottom: 3px solid #298200; box-sizing: border-box; }';
    classification_list.forEach( li => li.classList.remove('dark') );
    classification_list.forEach( li => li.classList.remove('selected_dark') );
}

//menu mouse over event
main_menu.forEach( li => li.addEventListener('mouseenter', ()=>{
    if( current_mode === 'dark' )
        li.classList.add('dark');
    else
        li.classList.remove('dark');
}));

//mobile nav controll
menu_icon.addEventListener('click', () => {
    document.querySelector('body').classList.add('scrolllock');
    mobile_nav_wrapper.classList.add('show');
    mobile_menu.classList.add('show');
});
close_btn.addEventListener('click', () => {
    if( current_position !== 'header' )
        document.querySelector('body').classList.remove('scrolllock');
    mobile_nav_wrapper.classList.remove('show');
    mobile_menu.classList.remove('show')
});
mobile_menu_li[0].addEventListener('click', () => {
    move_works = false;
    current_position = 'header';
    header.classList.remove('hide');
    document.querySelector('header').scrollIntoView({behavior:'smooth'});
    main_btn_wrapper.classList.remove('show');
    mobile_nav_wrapper.classList.remove('show');
    document.querySelector('body').classList.add('scrolllock');
});
mobile_menu_li[1].addEventListener('click', () => {
    header.classList.remove('hide');
    header.scrollIntoView({behavior:'smooth'});
    document.querySelector('body').classList.add('scrolllock');
    document.querySelector('header').classList.add('scrolllock');
    pc_nav.classList.remove('show');
    header_title.classList.add('hide');
    about_wrapper.classList.add('show');
    about.classList.add('show');
    change_mode.classList.add('hide');
    mobile_nav_wrapper.classList.remove('show');
    menu_icon.classList.add('hide');
    main_btn_wrapper.classList.remove('show');
});
mobile_menu_li[2].addEventListener('click', () => {
    move_works = true;
    current_position = 'contents';
    header.classList.add('hide');
    contents.scrollIntoView({behavior:'smooth'});
    document.querySelector('body').classList.remove('scrolllock');
    main_btn_wrapper.classList.add('show');
    mobile_nav_wrapper.classList.remove('show');
});


//show about
main_menu[0].addEventListener('click', () => {
    document.querySelector('body').classList.add('scrolllock');
    document.querySelector('header').classList.add('scrolllock');
    pc_nav.classList.remove('show');
    header_title.classList.add('hide');
    about_wrapper.classList.add('show');
    about.classList.add('show');
    change_mode.classList.add('hide');
});
return_arrow.addEventListener('click', () => {
    // document.querySelector('body').classList.remove('scrolllock');
    // document.querySelector('header').classList.remove('scrolllock');
    pc_nav.classList.add('show');
    header_title.classList.remove('hide');
    about_wrapper.classList.remove('show');
    about.classList.remove('show');
    change_mode.classList.remove('hide');
    menu_icon.classList.remove('hide');
    if( move_works === true ){
        header.classList.add('hide');
        main_btn_wrapper.classList.add('show');
        contents.scrollIntoView({behavior:'smooth'});
        document.querySelector('body').classList.remove('scrolllock');
        main_btn_wrapper.classList.add('show');
        mobile_nav_wrapper.classList.remove('show');
    }
});

//go works
main_menu[1].addEventListener('click', () => {
    current_position = 'contents';
    header.classList.add('hide');
    contents.scrollIntoView({behavior:'smooth'});
    document.querySelector('body').classList.remove('scrolllock');
    main_btn_wrapper.classList.add('show');
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
    for( let i = ld_cnt ; i > 0 ; i-- ){
        let img_box = document.createElement('div');
        img_box.classList.add('img_box');
        // img_box.classList.add('dark');
    
        let img = document.createElement('img');
        img.src='img/ld/ld'+ i +'.png';
        img.alt='ld'+ i;
    
        img_box.appendChild(img);
        list.appendChild(img_box);
    }  
}

function count_sd(list){
    for( let i = sd_cnt ; i > 0 ; i-- ){
        let img_box = document.createElement('div');
        img_box.classList.add('img_box');
        // img_box.classList.add('dark');
    
        let img = document.createElement('img');
        img.src='img/sd/sd'+ i +'.png';
        img.alt='sd'+ i;
    
        img_box.appendChild(img);
        list.appendChild(img_box);
    }
}

function count_etc(list){
    for( let i = etc_cnt + gif_cnt + etc_cnt2 ; i >= etc_cnt + gif_cnt + 1 ; i-- ){
        let img_box = document.createElement('div');
        img_box.classList.add('img_box');
        // img_box.classList.add('dark');
    
        let img = document.createElement('img');
        img.src='img/etc/etc'+ i+'.png';
        img.alt='etc'+ i;
    
        img_box.appendChild(img);
        list.appendChild(img_box);
    }

    for( let i = etc_cnt + gif_cnt ; i >= etc_cnt + 1 ; i-- ){
        let img_box = document.createElement('div');
        img_box.classList.add('img_box');
        // img_box.classList.add('dark');
    
        let img = document.createElement('img');
        img.src='img/etc/etc'+ i+'.gif';
        img.alt='etc'+ i;
    
        img_box.appendChild(img);
        list.appendChild(img_box);
    }

    for( let i = etc_cnt ; i > 0; i-- ){
        let img_box = document.createElement('div');
        img_box.classList.add('img_box');
        // img_box.classList.add('dark');
    
        let img = document.createElement('img');
        img.src='img/etc/etc'+ i +'.png';
        img.alt='etc'+ i;
    
        img_box.appendChild(img);
        list.appendChild(img_box);
    }
}
//show total
total.innerHTML = 'Total : ' + all_cnt;

//classification controll
classification_list[0].addEventListener('click', ()=>{
    list_selected = 1;
    list_all.classList.add('show');
    list_ld.classList.remove('show');
    list_sd.classList.remove('show');
    list_etc.classList.remove('show');
    if(current_mode === 'light'){
        classification_list[0].classList.add('selected');
        classification_list[1].classList.remove('selected');
        classification_list[2].classList.remove('selected');
        classification_list[3].classList.remove('selected');
        classification_list_after.innerHTML = '.classification_list li:nth-child(1):after{ content: ""; position: absolute; width: 100%; left: 0; bottom: -10px; border-bottom: 3px solid #298200; box-sizing: border-box; }';
    }   
    else{
        classification_list[0].classList.add('selected_dark');
        classification_list[1].classList.remove('selected_dark');
        classification_list[2].classList.remove('selected_dark');
        classification_list[3].classList.remove('selected_dark');
        classification_list_after.innerHTML = '.classification_list li:nth-child(1):after{ content: ""; position: absolute; width: 100%; left: 0; bottom: -10px; border-bottom: 3px solid #eb4444; box-sizing: border-box; }';
    }
    total.innerHTML = 'Total : ' + all_cnt;
    // set_star_animation();
});
classification_list[1].addEventListener('click', ()=>{
    list_selected = 2;
    list_all.classList.remove('show');
    list_ld.classList.add('show');
    list_sd.classList.remove('show');
    list_etc.classList.remove('show');
    if(current_mode === 'light'){
        classification_list[0].classList.remove('selected');
        classification_list[1].classList.add('selected');
        classification_list[2].classList.remove('selected');
        classification_list[3].classList.remove('selected');
        classification_list_after.innerHTML = '.classification_list li:nth-child(2):after{ content: ""; position: absolute; width: 100%; left: 0; bottom: -10px; border-bottom: 3px solid #298200; box-sizing: border-box; }';
    }
    else{
        classification_list[0].classList.remove('selected_dark');
        classification_list[1].classList.add('selected_dark');
        classification_list[2].classList.remove('selected_dark');
        classification_list[3].classList.remove('selected_dark');
        classification_list_after.innerHTML = '.classification_list li:nth-child(2):after{ content: ""; position: absolute; width: 100%; left: 0; bottom: -10px; border-bottom: 3px solid #eb4444; box-sizing: border-box; }';
    }
    total.innerHTML = 'Total : ' + ld_cnt;
    // set_star_animation();
});
classification_list[2].addEventListener('click', ()=>{
    list_selected = 3;
    list_all.classList.remove('show');
    list_ld.classList.remove('show');
    list_sd.classList.add('show');
    list_etc.classList.remove('show');
    if(current_mode === 'light'){
        classification_list[0].classList.remove('selected');
        classification_list[1].classList.remove('selected');
        classification_list[2].classList.add('selected');
        classification_list[3].classList.remove('selected');
        classification_list_after.innerHTML = '.classification_list li:nth-child(3):after{ content: ""; position: absolute; width: 100%; left: 0; bottom: -10px; border-bottom: 3px solid #298200; box-sizing: border-box; }';
    }
    else{
        classification_list[0].classList.remove('selected_dark');
        classification_list[1].classList.remove('selected_dark');
        classification_list[2].classList.add('selected_dark');
        classification_list[3].classList.remove('selected_dark');
        classification_list_after.innerHTML = '.classification_list li:nth-child(3):after{ content: ""; position: absolute; width: 100%; left: 0; bottom: -10px; border-bottom: 3px solid #eb4444; box-sizing: border-box; }';
    }
    total.innerHTML = 'Total : ' + sd_cnt;
    // set_star_animation();
});
classification_list[3].addEventListener('click', ()=>{
    list_selected = 4;
    list_all.classList.remove('show');
    list_ld.classList.remove('show');
    list_sd.classList.remove('show');
    list_etc.classList.add('show');
    if(current_mode === 'light'){
        classification_list[0].classList.remove('selected');
        classification_list[1].classList.remove('selected');
        classification_list[2].classList.remove('selected');
        classification_list[3].classList.add('selected');
        classification_list_after.innerHTML = '.classification_list li:nth-child(4):after{ content: ""; position: absolute; width: 100%; left: 0; bottom: -10px; border-bottom: 3px solid #298200; box-sizing: border-box; }';
    }
    else{
        classification_list[0].classList.remove('selected_dark');
        classification_list[1].classList.remove('selected_dark');
        classification_list[2].classList.remove('selected_dark');
        classification_list[3].classList.add('selected_dark');
        classification_list_after.innerHTML = '.classification_list li:nth-child(4):after{ content: ""; position: absolute; width: 100%; left: 0; bottom: -10px; border-bottom: 3px solid #eb4444; box-sizing: border-box; }';
    }    
    total.innerHTML = 'Total : ' + all_etc_cnt;
    // set_star_animation();
});

//top button controll
window.addEventListener('scroll', function(){
    let scroll_height = window.pageYOffset;

    if( scroll_height >= contents.scrollHeight/6 ){
        top_btn_wrapper.classList.add('show');
    }
    else if( scroll_height < contents.scrollHeight/6 ){
        top_btn_wrapper.classList.remove('show');
    }
});

top_btn.addEventListener('click', function(){
    contents.scrollIntoView({behavior:'smooth'});
});

// main_btn.addEventListener('click', function(){
//     current_position = 'header';
//     header.classList.remove('hide');
//     document.querySelector('header').scrollIntoView({behavior:'smooth'});
//     document.querySelector('body').classList.add('scrolllock');
//     main_btn_wrapper.classList.remove('show');
// });

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
    img.classList.add('zoom');
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
    menu_icon.classList.add('hide');
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
    artworks.forEach( img => img.classList.remove('zoom') );
    document.querySelector('body').classList.remove('scrolllock');
    return_works.classList.remove('show');
    dark_bg.classList.remove('show');
    view_img_box.removeChild(view_img_box.children[0]);
    view_image_wrapper.classList.remove('show');
    return_bg.classList.remove('show');
    menu_icon.classList.remove('hide');
}

//random star background
const star_bg = document.querySelector('.star_bg');
function star(){
    let generate_star = 0;
    for( let cnt = 500 ; generate_star < cnt ; generate_star++ ){
        let star = document.createElement('div');
        star.classList.add('star_light');

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
    .star_light{
        position: absolute;
        bottom: 0;
        animation: starAnimate linear infinite;
        background-color: green;
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
    if( is_mobile === true ) return;

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
        $("<div class='ball dark' style='" + style + "'></div>").appendTo('body').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){$(this).remove();}); 
      }
    }, 1);
  });