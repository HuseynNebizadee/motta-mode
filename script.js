const langData={
    az:["Ana səhifə","Mağaza","Əlaqe","Səhifə","Məqalə"],
    en:["Home","Shop","Contact","Pages","Blog"]
}
const langData1={
    az:["Mağazanin kataqoriyaları","Ev & Bağ","Elektornika","Dəblər","Bjuteriya & Aksesuarlar","İdman malları","Uşaq paltarları","Gözəllik & Sağlamlıq","Oyuncaqlar & Oyunlar","Avtomobillər & Motoskletler","Kolleksiya","İncəsənət"],
    en:["Shop by category","Home & Garden","Electronics","PagFashiones","Jevelery & Accossoreies","Sports & Entertainment","Mother & Kids","Beauty & Health","Toys & Games","Avtomobiles & Motoscyles","Collectibles & Arts","Tools & Improvement"]
}
const langBtn = document.querySelector("#lang-btn");
const langItem = document.querySelectorAll(".nav-link");
const langlist = document.querySelectorAll(".second .container .left ul li a span");

function multiLang (){
    if (langBtn.innerHTML == "AZ") {
        for(let i in langData.az){
            langItem[i].innerHTML = langData.az[i]
        }
        langBtn.innerHTML = "EN"
    }else{
        for(let i in langData.en){
            langItem[i].innerHTML = langData.en[i]
        }
        langBtn.innerHTML = "AZ"
    }
    if (document.querySelector(".navbar-brand").innerHTML == "Shop Today’s Deals") {
        document.querySelector(".navbar-brand").innerHTML = "Mağazanın bugünkü məhsulları"
    }
    else{
        document.querySelector(".navbar-brand").innerHTML = "Shop Today’s Deals"
    }
    if (document.querySelector(".deal").innerHTML == "Today’s Best Deals") {
        document.querySelector(".deal").innerHTML = "Günün Ən Yaxşı Sazişləri"
    }
    else{
        document.querySelector(".deal").innerHTML = "Today’s Best Deals"
    }
    if (document.querySelector(".trend").innerHTML == "Trending Brands") {
        document.querySelector(".trend").innerHTML = "Gündəmdə olan brendlər"
    }
    else{
        document.querySelector(".trend").innerHTML = "Trending Brands"
    }

    if (document.querySelector(".all-deal").innerHTML == "See All Deals") {
        document.querySelector(".all-deal").innerHTML = "Bütün sazişlərə baxın"
    }
    else{
        document.querySelector(".all-deal").innerHTML = "See All Deals"
    }
    if (langBtn.innerHTML == "EN") {
        for(let k in langData1.az){
            langlist[k].innerHTML = langData1.az[k]
        }
        langBtn.innerHTML = "EN"
    }else{
        for(let k in langData1.en){
            langlist[k].innerHTML = langData1.en[k]
        }
        langBtn.innerHTML = "AZ"
    }
    if (document.querySelector(".store p").innerHTML == "Sign in") {
        document.querySelector(".store p").innerHTML = "Daxil ol"
        langBtn.innerHTML = "EN"
    }
    else{
        document.querySelector(".store p").innerHTML = "Sign in"
        langBtn.innerHTML = "AZ"
    }
    if (document.querySelector(".deall").innerHTML == "Flash Deals") {
        document.querySelector(".deall").innerHTML = "Ən Yaxşı Sazişlər"
    }
    else{
        document.querySelector(".deall").innerHTML = "Flash Deals"
    }
    if (document.querySelector(".all-deall").innerHTML == "See All Products") {
        document.querySelector(".all-deall").innerHTML = "Bütün məhsullara baxın"
    }
    else{
        document.querySelector(".all-deall").innerHTML = "See All Products"
    }
    // // 
    if (document.querySelector(".dark .fourth .container .card-container:nth-child(1) .card .card-body .card-text span").innerHTML == "Town Truck Tracked Excavator Pieces Truck Tracked") {
        document.querySelector(".dark .fourth .container .card-container:nth-child(1) .card .card-body .card-text span").innerHTML = "Bütün oyuncaqlara iyirmi beş faiz endirim edildi"
    }
    else{
        document.querySelector(".dark .fourth .container .card-container:nth-child(1) .card .card-body .card-text span").innerHTML = "Town Truck Tracked Excavator Pieces Truck Tracked"
    }
    // 
    if (document.querySelector(".dark .fourth .container .card-container:nth-child(2) .card .card-body .card-text span").innerHTML == "Town Truck Tracked Excavator Pieces Truck Tracke") {
        document.querySelector(".dark .fourth .container .card-container:nth-child(2) .card .card-body .card-text span").innerHTML = "Bütün smartfonlara(planşetlərə) əlli faiz endirim edildi!"
    }
    else{
        document.querySelector(".dark .fourth .container .card-container:nth-child(2) .card .card-body .card-text span").innerHTML = "Town Truck Tracked Excavator Pieces Truck Tracke"
    }
    // 
    if (document.querySelector(".dark .fourth .container .card-container:nth-child(3) .card .card-body .card-text span").innerHTML == "Town Truck Tracked Excavator Pieces Truck Track") {
        document.querySelector(".light .fourth .container .card-container:nth-child(3) .card .card-body .card-text span").innerHTML = "Bütün ayaqqabılara iyirmi beş faiz endirim edildi!"
    }
    else{
        document.querySelector(".light .fourth .container .card-container:nth-child(3) .card .card-body .card-text span").innerHTML = "Town Truck Tracked Excavator Pieces Truck Track"
    }
    // 
    if (document.querySelector(".light .fourth .container .card-container:nth-child(4) .card .card-body .card-text span").innerHTML == "Town Truck Tracked Excavator Pieces Truck Trackedd") {
        document.querySelector(".light .fourth .container .card-container:nth-child(4) .card .card-body .card-text span").innerHTML = "Bütün oyun alətlərinə otuz faiz endirim edildi!"
    }
    else{
        document.querySelector(".light .fourth .container .card-container:nth-child(4) .card .card-body .card-text span").innerHTML = "Town Truck Tracked Excavator Pieces Truck Trackedd"
    }
    // 
    if (document.querySelector(".light .fourth .container .card-container:nth-child(5) .card .card-body .card-text span").innerHTML == "Town Truck Tracked Excavator Pieces Truck Trackeddd") {
        document.querySelector(".light .fourth .container .card-container:nth-child(5) .card .card-body .card-text span").innerHTML = "Bütün elektronik alətlərinə qırx faiz endirim edildi!"
    }
    else{
        document.querySelector(".light .fourth .container .card-container:nth-child(5) .card .card-body .card-text span").innerHTML = "Town Truck Tracked Excavator Pieces Truck Trackeddd"
    }
    // // seven
    if (document.querySelector(".dea").innerHTML == "Explore More Categories") {
        document.querySelector(".dea").innerHTML = "Daha çox kataqoriyalara baxin"
        langBtn.innerHTML = "EN"

    }
    else{
        document.querySelector(".dea").innerHTML = "Explore More Categories"
        langBtn.innerHTML = "AZ"
    }
    // // 
    if (document.querySelector(".all-dea").innerHTML == "See All Categories") {
        document.querySelector(".all-dea").innerHTML = "Bütün kataqoriyalara baxin"
        langBtn.innerHTML = "EN"

    }
    else{
        document.querySelector(".all-dea").innerHTML = "See All Categories"
        langBtn.innerHTML = "AZ"
    }
    // // 
    if (document.querySelector(".seven .container .card-container .card:nth-child(1) p").innerHTML == "Furniture") {
        document.querySelector(".seven .container .card-container .card:nth-child(1) p").innerHTML = "Mebel"
        langBtn.innerHTML = "EN"

    }
    else{
        document.querySelector(".seven .container .card-container .card:nth-child(1) p").innerHTML = "Furniture"
        langBtn.innerHTML = "AZ"

    }
    // 
    if (document.querySelector(".seven .container .card-container .card:nth-child(2) p").innerHTML == "Shoes") {
        document.querySelector(".seven .container .card-container .card:nth-child(2) p").innerHTML = "Ayaqqabılar"
        langBtn.innerHTML = "EN"

    }
    else{
        document.querySelector(".seven .container .card-container .card:nth-child(2) p").innerHTML = "Shoes"
        langBtn.innerHTML = "AZ"

    }
    // 
    if (document.querySelector(".seven .container .card-container .card:nth-child(3) p").innerHTML == "Smartphones") {
        document.querySelector(".seven .container .card-container .card:nth-child(3) p").innerHTML = "Telefonlar"
        langBtn.innerHTML = "EN"

    }
    else{
        document.querySelector(".seven .container .card-container .card:nth-child(3) p").innerHTML = "Smartphones"
        langBtn.innerHTML = "AZ"

    }
    // 
    if (document.querySelector(".seven .container .card-container .card:nth-child(4) p").innerHTML == "Air Purifiers") {
        document.querySelector(".seven .container .card-container .card:nth-child(4) p").innerHTML = "Hava təmizləyici"
        langBtn.innerHTML = "EN"

    }
    else{
        document.querySelector(".seven .container .card-container .card:nth-child(4) p").innerHTML = "Air Purifiers"
        langBtn.innerHTML = "AZ"

    }
    // 
    if (document.querySelector(".seven .container .card-container .card:nth-child(5) p").innerHTML == "Toys") {
        document.querySelector(".seven .container .card-container .card:nth-child(5) p").innerHTML = "Oyuncaqlar"
        langBtn.innerHTML = "EN"

    }
    else{
        document.querySelector(".seven .container .card-container .card:nth-child(5) p").innerHTML = "Toys"
        langBtn.innerHTML = "AZ"

    }
    // 
    if (document.querySelector(".seven .container .card-container .card:nth-child(6) p").innerHTML == "Headphones") {
        document.querySelector(".seven .container .card-container .card:nth-child(6) p").innerHTML = "Qulaqcıq"
        langBtn.innerHTML = "EN"

    }
    else{
        document.querySelector(".seven .container .card-container .card:nth-child(6) p").innerHTML = "Headphones"
        langBtn.innerHTML = "AZ"

    }
    //     
    if (document.querySelector(".third .container .card:nth-child(1) h1").innerHTML == "Small Appliances") {
        document.querySelector(".third .container .card:nth-child(1) h1").innerHTML = "Balaca avadanlıqlar"
        langBtn.innerHTML = "EN"

    }
    else{
        document.querySelector(".third .container .card:nth-child(1) h1").innerHTML = "Small Appliances"
        langBtn.innerHTML = "AZ"

    }
    // 
    if (document.querySelector(".third .container .card:nth-child(1) p").innerHTML == "Up to 40% off Kitchen Products.") {
        document.querySelector(".third .container .card:nth-child(1) p").innerHTML = "Mətbəx məhsullarına 40% endirim."
        langBtn.innerHTML = "EN"

    }
    else{
        document.querySelector(".third .container .card:nth-child(1) p").innerHTML = "Up to 40% off Kitchen Products."
        langBtn.innerHTML = "AZ"

    }
    // 
    if (document.querySelector(".third .container .card:nth-child(1) .shop").innerHTML == "Shop Now") {
        document.querySelector(".third .container .card:nth-child(1) .shop").innerHTML = "İndi alın."
        langBtn.innerHTML = "EN"

    }
    else{
        document.querySelector(".third .container .card:nth-child(1) .shop").innerHTML = "Shop Now"
        langBtn.innerHTML = "AZ"

    }
    // 
    // 
    if (document.querySelector(".third .container .card:nth-child(2) h1").innerHTML == "Small Appliances") {
        document.querySelector(".third .container .card:nth-child(2) h1").innerHTML = "Balaca avadanlıqlar"
        langBtn.innerHTML = "EN"

    }
    else{
        document.querySelector(".third .container .card:nth-child(2) h1").innerHTML = "Small Appliances"
        langBtn.innerHTML = "AZ"

    }
    // 
    if (document.querySelector(".third .container .card:nth-child(2) p").innerHTML == "Up to 40% off Kitchen Products.") {
        document.querySelector(".third .container .card:nth-child(2) p").innerHTML = "Mətbəx məhsullarına 40% endirim."
        langBtn.innerHTML = "EN"

    }
    else{
        document.querySelector(".third .container .card:nth-child(2) p").innerHTML = "Up to 40% off Kitchen Products."
        langBtn.innerHTML = "AZ"

    }
    // 
    if (document.querySelector(".third .container .card:nth-child(2) .shop").innerHTML == "Shop Now") {
        document.querySelector(".third .container .card:nth-child(2) .shop").innerHTML = "İndi alın."
        langBtn.innerHTML = "EN"

    }
    else{
        document.querySelector(".third .container .card:nth-child(2) .shop").innerHTML = "Shop Now"
        langBtn.innerHTML = "AZ"

    }
    // ten
    if (document.querySelector(".ten .container .card-container:nth-child(1) .card .card-body .card-text span").innerHTML == "Town Truck Tracked Excavator Pieces Truck Tracked") {
        document.querySelector(".ten .container .card-container:nth-child(1) .card .card-body .card-text span").innerHTML = "Bütün oyun alətlərinə iyirmi beş faiz endirim edildi"
    }
    else{
        document.querySelector(".ten .container .card-container:nth-child(1) .card .card-body .card-text span").innerHTML = "Town Truck Tracked Excavator Pieces Truck Tracked"
    }
    // 
    if (document.querySelector(".ten .container .card-container:nth-child(2) .card .card-body .card-text span").innerHTML == "Town Truck Tracked Excavator Pieces Truck Tracke") {
        document.querySelector(".ten .container .card-container:nth-child(2) .card .card-body .card-text span").innerHTML = "Bütün ev əşyalarına əlli faiz endirim edildi!"
    }
    else{
        document.querySelector(".ten .container .card-container:nth-child(2) .card .card-body .card-text span").innerHTML = "Town Truck Tracked Excavator Pieces Truck Tracke"
    }
    // 
    if (document.querySelector(".ten .container .card-container:nth-child(3) .card .card-body .card-text span").innerHTML == "Town Truck Tracked Excavator Pieces Truck Track") {
        document.querySelector(".ten .container .card-container:nth-child(3) .card .card-body .card-text span").innerHTML = "Bütün mebel dəstlərinə iyirmi beş faiz endirim edildi!"
    }
    else{
        document.querySelector(".ten .container .card-container:nth-child(3) .card .card-body .card-text span").innerHTML = "Town Truck Tracked Excavator Pieces Truck Track"
    }
    // 
    if (document.querySelector(".ten .container .card-container:nth-child(4) .card .card-body .card-text span").innerHTML == "Town Truck Tracked Excavator Pieces Truck Trackedd") {
        document.querySelector(".ten .container .card-container:nth-child(4) .card .card-body .card-text span").innerHTML = "Bütün uşaq çarpayısına otuz faiz endirim edildi!"
    }
    else{
        document.querySelector(".ten .container .card-container:nth-child(4) .card .card-body .card-text span").innerHTML = "Town Truck Tracked Excavator Pieces Truck Trackedd"
    }
    // 
    if (document.querySelector(".ten .container .card-container:nth-child(5) .card .card-body .card-text span").innerHTML == "Town Truck Tracked Excavator Pieces Truck Trackeddd") {
        document.querySelector(".ten .container .card-container:nth-child(5) .card .card-body .card-text span").innerHTML = "Bütün ev əşyalarına qırx faiz endirim edildi!"
    }
    else{
        document.querySelector(".ten .container .card-container:nth-child(5) .card .card-body .card-text span").innerHTML = "Town Truck Tracked Excavator Pieces Truck Trackeddd"
    }


// 
// 
    if (document.querySelector(".third .container .card:nth-child(3) h1").innerHTML == "Small Appliances") {
        document.querySelector(".third .container .card:nth-child(3) h1").innerHTML = "Balaca avadanlıqlar"
        langBtn.innerHTML = "EN"

    }
    else{
        document.querySelector(".third .container .card:nth-child(3) h1").innerHTML = "Small Appliances"
        langBtn.innerHTML = "AZ"

    }
    // 
    if (document.querySelector(".third .container .card:nth-child(3) p").innerHTML == "Up to 40% off Kitchen Products.") {
        document.querySelector(".third .container .card:nth-child(3) p").innerHTML = "Mətbəx məhsullarına 40% endirim."
        langBtn.innerHTML = "EN"

    }
    else{
        document.querySelector(".third .container .card:nth-child(3) p").innerHTML = "Up to 40% off Kitchen Products."
        langBtn.innerHTML = "AZ"

    }
    // 
    if (document.querySelector(".third .container .card:nth-child(3) .shop").innerHTML == "Shop Now") {
        document.querySelector(".third .container .card:nth-child(3) .shop").innerHTML = "İndi alın."
        langBtn.innerHTML = "EN"

    }
    else{
        document.querySelector(".third .container .card:nth-child(3) .shop").innerHTML = "Shop Now"
        langBtn.innerHTML = "AZ"

    }

    // 
    // 
    if (document.querySelector(".third .container .card:nth-child(4) h1").innerHTML == "Small Appliances") {
        document.querySelector(".third .container .card:nth-child(4) h1").innerHTML = "Balaca avadanlıqlar"
        langBtn.innerHTML = "EN"

    }
    else{
        document.querySelector(".third .container .card:nth-child(4) h1").innerHTML = "Small Appliances"
        langBtn.innerHTML = "AZ"

    }
    // 
    if (document.querySelector(".third .container .card:nth-child(4) p").innerHTML == "Up to 40% off Kitchen Products.") {
        document.querySelector(".third .container .card:nth-child(4) p").innerHTML = "Mətbəx məhsullarına 40% endirim."
        langBtn.innerHTML = "EN"

    }
    else{
        document.querySelector(".third .container .card:nth-child(4) p").innerHTML = "Up to 40% off Kitchen Products."
        langBtn.innerHTML = "AZ"

    }
    // 
    if (document.querySelector(".third .container .card:nth-child(4) .shop").innerHTML == "Shop Now") {
        document.querySelector(".third .container .card:nth-child(4) .shop").innerHTML = "İndi alın."
        langBtn.innerHTML = "EN"

    }
    else{
        document.querySelector(".third .container .card:nth-child(4) .shop").innerHTML = "Shop Now"
        langBtn.innerHTML = "AZ"

    }

    


}
langBtn.onclick = multiLang;

//      ================================================          mode              ================================================= 
const Item = document.querySelector(".light");
const btn = document.querySelector("#mod");
let Hes = true;
if (localStorage.getItem("mode")=== null) {
    localStorage.setItem("mode","light")
}else{
btn.onclick = () =>{
    if (Hes == true) {
        Item.className="dark";
        Hes = false;
        document.querySelector("nav").className = "navbar navbar-expand-lg bg-dark navbar-dark"
        document.querySelector("body").style.backgroundColor = "black"
        btn.innerHTML = " Light"
        localStorage.setItem("mode","dark")
    }else{
        Item.className="light";
        Hes = true;
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("nav").className = "navbar navbar-expand-lg bg-light navbar-light";
        btn.innerHTML = " Dark";
        localStorage.setItem("mode","light")
    }
}
}
if (localStorage.getItem("mode")=="light") {
    Item.className="light";
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("nav").className = "navbar navbar-expand-lg bg-light navbar-light";
    btn.innerHTML = " Dark";
}
else{
    Item.className="dark";
    document.querySelector("nav").className = "navbar navbar-expand-lg bg-dark navbar-dark"
    document.querySelector("body").style.backgroundColor = "black"
    btn.innerHTML = " Light"
}