
window.addEventListener('scroll',function(){
    var header=document.querySelector('header-right');
    header.classList.toggle('display-none',window.scrollY > 100);
});
// function circlesonclick(){
//    var sidebaar=document.getElementById('display-sidebar');
//    sidebaar.classList.toggle('display-leftsidebaar');
// }

// window.onclick = function(e){
//     if(e.target.id !== 'popup' && e.target.id !=='iamge1'){
//         popup.classList.remove("display-picdata");
//         iamge1.classList.remove("display-picdata");
//     }
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
function languagesbutton() {
    var langtn2= document.getElementById("lang1");
    langtn2.classList.toggle("display-tooltip-data");
}
function closelang(){
    var popup=document.getElementById("lang1");
    popup.classList.remove('display-tooltip-data');
}
function darklightbutton() {
    var dlbtn2= document.getElementById("d-l-d2");
    dlbtn2.classList.toggle("display-tooltip-data");
}
function closedarklightmode(){
    var popup=document.getElementById("d-l-d2");
    popup.classList.remove('display-tooltip-data');
}
function openpopup(){
    let admindata=document.getElementById("admindata");
    admindata.classList.toggle("display-tooltip-data");
}
function closepopup(){
    let popup=document.getElementById("admindata");
    popup.classList.remove('display-tooltip-data');
}


function displayshrtcutdata(){
    let shortcut= document.getElementById('shortcutdata');
    shortcut.classList.toggle('display-tooltip-data');
}
function closeshortcutdata(){
    let popup=document.getElementById("shortcutdata");
    popup.classList.remove('display-tooltip-data');
}
// function admindatabutton() {
//     var dlbtn2= document.getElementById("admindata");
  
//     if (dlbtn2.style.display === "block"){
//         dlbtn2.style.display = "none";
//     } else {
//         dlbtn2.style.display = "block";
//     }
// }
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
    //  bell tootip data
function opentbelltooltipdata(){
    var btn1=document.getElementById("bell-tooltip");
    btn1.classList.toggle("display-tooltip-data");
 }
function closebelltooltipdata(){
    var btn1=document.getElementById("bell-tooltip");
    btn1.classList.remove('display-tooltip-data');
} 
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
