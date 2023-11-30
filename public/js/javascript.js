AOS.init();
// let topbar=document.querySelector('.right-topbar');

// window.addEventListener('scroll',function(e){
//     let height=window.scrollY;
//     if(height > 10){
//     topbar.classList.add('right-topbar-fixed');
//     }
//     else{
//         topbar.classList.remove('right-topbar-fixed');   
//     }
// });
let html=document.getElementById('html1');
function dark(){
    html.classList.add('dark');
}
function light(){
    html.classList.remove('dark');
}
// dark and light mode js //
function darkmode(){
    var body1=document.body;
    var sidebaar=document.querySelector('.left-side');
    body1.classList.add('body-displaydark') &&  sidebaar.classList.add('.dark-left-side'); 
}

function lightmode(){
    var body1=document.body;
    body1.classList.remove('body-displaydark');
}

    //    three lines javascript
let menu1=document.getElementById('display-sidebar');
let plusbuton=document.getElementById("menu11");
let cross=document.querySelector('.header-right')
plusbuton.onclick=function togle(){
    menu1.classList.add("left-side-display");
}
cross.onclick=function togle(){
    menu1.classList.remove("left-side-display");
}

// $(document).ready(function(){
//     $("#menu11").on("click", function(){
//        $("#menu11").css("opacity", "0");
//         $("#display-sidebar").addClass("enter");
//     });
//         $("#header-right").on("click", function(){
//            $("#display-sidebar").removeClass("enter");
//             $("#menu11").css("opacity", "1");
//         });
//     });
// let darklight=document.getElementById('dark-light-tooltip');
// let moon1=document.getElementById('moon1');
// moon1.addEventListener('mouseenter',setTimeout(function(){
//     darklight.classList.add('visibility-hidden');
//     console.log('add')
// },1000)) ;
// moon1.addEventListener('mouseleave',setTimeout(function(){
//     darklight.classList.remove('visibility-hidden');
//     console.log('remove')
// },1000)) ;
// setTimeout(function(){
//     darklight.classList.remove('visibility-hidden');
//     console.log('remove')
// },1000);
// function circlesonclick(){
//    var sidebaar=document.getElementById('display-sidebar');
//    sidebaar.classList.toggle('display-leftsidebaar');
// }



// list display function
function dashboardList() {
    var list1 = document.getElementById("dashboard-list");
    if (list1.style.display === "block") {
        list1.style.display = "none";
    } else {
        list1.style.display = "block";
    }
}
function secondList() {
    var list2 = document.getElementById("a2");
    if (list2.style.display === "block") {
        list2.style.display = "none";
    } else {
        list2.style.display = "block";
    }
}
function eventList() {
    var list2 = document.getElementById("a3");
    if (list2.style.display === "block") {
        list2.style.display = "none";
    } else {
        list2.style.display = "block";
    }
}
function ecommerceList() {
    var list2 = document.getElementById("a4");
    if (list2.style.display === "block") {
        list2.style.display = "none";
    } else {
        list2.style.display = "block";
    }
}
function elearningList() {
    var list2 = document.getElementById("a5");
    if (list2.style.display === "block") {
        list2.style.display = "none";
    } else {
        list2.style.display = "block";
    }
}
function socialList() {
    var list2 = document.getElementById("a6");
    if (list2.style.display === "block") {
        list2.style.display = "none";
    } else {
        list2.style.display = "block";
    }
}
function supportdeskList() {
    var list2 = document.getElementById("a7");
    if (list2.style.display === "block") {
        list2.style.display = "none";
    } else {
        list2.style.display = "block";
    }
}

//  for complete side bar dsiplay//
function Mainlist() {
    var mainlist = document.getElementById("A1");
  
    if (mainlist.style.display === "none"  ) {
        mainlist.style.display = "block";
    } else {
        mainlist.style.display = "none";
    }
}
// function width(){
//     var rightside=document.getElementById("rightside");
//     if (rightside.style.marginLeft === "36.3rem") {
//         rightside.style.marginLeft="0" && rightside.style.width=="100%";
//     } else {
//         rightside.style.marginLeft="36.3rem";
//     }
// }


                                                              // right side javascript //
function opensearchbar(){
    var btn1=document.getElementById("search");
    btn1.classList.add("display-tooltip-data");
}

function closesearchbar(){
    var btn1=document.getElementById("search");
    btn1.classList.remove('display-tooltip-data');
}
// function searchbutton() {
//     var searchbtn= document.getElementById("search");
  
//     if (searchbtn.style.display === "none"  ) {
//         searchbtn.style.display = "block";
//     } else {
//         searchbtn.style.display = "none";
//     }
// }
function searchicon() {
    var searchicon= document.getElementById("searchicon");
    if (searchicon.style.display = "block"  ) {
        searchicon.style.display = "none";
    } else {
        searchicon.style.display = "block";
    }
}

                // tooltips //
// var langtn2= document.getElementById("lang11");
// function languagesbutton(){
//         langtn2.classList.toggle("display-tooltip-data");
//     }
// function closelang(){
//     langtn2.classList.remove('display-tooltip-data');
// }

// let langicon=document.getElementById('lang-icon');
// let langdata=document.getElementById('lang-data');
// window.onclick = function(e){
//     if(e.target.id !== langicon && e.target.id !==langdata){
//         langdata.classList.remove("display-tooltip-data");
//     }
// }
// languegues tooltip JS //
let langicon=document.querySelector('.lang');
let langlist = document.querySelector(".lang-tooltip-data1");
langicon.addEventListener('click',function() {
    langlist.style.display='block';
});
window.addEventListener('click',function(e) {
    console.log(e.target);
    if(e.target.id !== 'langicon'){
        langlist.style.display='none';
    }
    else{
        langlist.style.display='block';
    }
});
// darklight tooltip JS //
let DLicon=document.querySelector('.moon');
let DLlist = document.querySelector(".d-l-mode-tooltip-data1");
langicon.addEventListener('click',function() {
    DLlist.style.display='block';
});
window.addEventListener('click',function(e) {
    console.log(e.target);
    if(e.target.id !== 'moon1' && e.target.id !== 'd-l-d2'){
        DLlist.style.display='none';
    }
    else{
        DLlist.style.display='block';
    }
});
// function darklightbutton() {
//     var dlbtn2= document.getElementById("d-l-d2");
//     dlbtn2.classList.toggle("display-tooltip-data");
// }
// function closedarklightmode(){
//     var popup=document.getElementById("d-l-d2");
//     popup.classList.remove('display-tooltip-data');
// }
// admin tooltip JS //
let picicon=document.querySelector('.header-pic');
let piclist = document.querySelector(".pic-tooltip-data");
langicon.addEventListener('click',function() {
    piclist .style.display='block';
});
window.addEventListener('click',function(e) {
    console.log(e.target);
    if(e.target.id !== 'iamge1' && e.target.id !== 'admindata'){
        piclist.style.display='none';
    }
    else{
        piclist.style.display='block';
    }
});

    // shortcut tooltip JS //
let shortcuticon=document.querySelector('.shortcut');
let shortcutlist = document.querySelector(".shortcut-toolip-data");
langicon.addEventListener('click',function() {
    shortcutlist.style.display='block';
});
window.addEventListener('click',function(e) {
    console.log(e.target);
    if(e.target.id !== 'shortcuticon' && e.target.id !== 'shortcutdata'){
        shortcutlist.style.display='none';
    }
    else{
        shortcutlist.style.display='block';
    }
});
    //  bell tootip data
let bellicon=document.querySelector('.bell-icon');
let belllist=document.querySelector(".bell-tooltip-data");
langicon.addEventListener('click',function() {
    belllist.style.display='block';
});
window.addEventListener('click',function(e) {
    console.log(e.target);
    if(e.target.id !== 'bellicon' && e.target.id !== 'bell-tooltip'){
        belllist.style.display='none';
    }
    else{
        belllist.style.display='block';
    }
});
    // function opentbelltooltipdata(){
    //     var btn1=document.getElementById("bell-tooltip");
    //     btn1.classList.toggle("display-tooltip-data");
    //  }
    // function closebelltooltipdata(){
    //     var btn1=document.getElementById("bell-tooltip");
    //     btn1.classList.remove('display-tooltip-data');
    // } 
     function opentbelldata1(){
         var bell1=document.getElementById("bell-data1");
         bell1.classList.add("remove-bell-scroll-data");
    }
    function opentbelldata2(){
        var bell1=document.getElementById("bell-data2");
        bell1.classList.add("remove-bell-scroll-data");
    }
    function opentbelldata3(){
        var bell1=document.getElementById("bell-data3");
        bell1.classList.add("remove-bell-scroll-data");
    }
    function opentbelldata4(){
        var bell1=document.getElementById("bell-data4");
        bell1.classList.add("remove-bell-scroll-data");
    }
    function opentbelldata5(){
        var bell1=document.getElementById("bell-data5");
        bell1.classList.add("remove-bell-scroll-data");
    }
    function opentbelldata6(){
        var bell1=document.getElementById("bell-data6");
        bell1.classList.add("remove-bell-scroll-data");
    }
    function opentbelldata7(){
        var bell1=document.getElementById("bell-data7");
        bell1.classList.add("remove-bell-scroll-data");
    }
    
        //  setting icon Js
function opensetting(){
    var btn1=document.getElementById("settingdata");
    btn1.classList.add("display-tooltip-data");
}

function closesetting(){
    var btn1=document.getElementById("settingdata");
    btn1.classList.remove('display-tooltip-data');
}
//   three dots1 tooltip function
function opentdots1data(){
    var btn1=document.getElementById("dots1-data");
    btn1.classList.toggle("display-tooltip-data");
}
function closedots1data(){
    var btn1=document.getElementById("dots1-data");
    btn1.classList.remove('display-tooltip-data');
}
//   three dots2 tooltip function
function opentdots2data(){
    var btn1=document.getElementById("dots2-data");
    btn1.classList.toggle("display-tooltip-data");
}
function closedots2data(){
    var btn1=document.getElementById("dots2-data");
    btn1.classList.remove('display-tooltip-data');
}
//   three dots3 tooltip function
function opentdots3data(){
    var btn1=document.getElementById("dots3-data");
    btn1.classList.toggle("display-tooltip-data");
}
function closedots3data(){
    var btn1=document.getElementById("dots3-data");
    btn1.classList.remove('display-tooltip-data');
}
