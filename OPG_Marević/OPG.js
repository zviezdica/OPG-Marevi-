//toggle u nav-u
const toggleBtn=document.querySelector(".toggle");
const links=document.querySelector(".links");

toggleBtn.addEventListener("click", function(){
    links.style.height=120;
    if (!links.classList.contains("show-links")){
        links.classList.add("show-links");
    }
    else{
        links.classList.remove("show-links");
    };
})

//donji border na nav-u i strelica za početnu stranicu
const nav=document.getElementById("nav");
window.addEventListener("scroll", function(){
    const scrollHeight=window.pageYOffset;
    const navHeight=nav.getBoundingClientRect().height;
    const topLink=this.document.querySelector(".top-link");
    if (scrollHeight>navHeight){
        nav.classList.add("nav-bottom-border");
    }
    else{
        nav.classList.remove("nav-bottom-border");
    };

    if(scrollHeight>500){
        topLink.classList.add("show-top-link");
    }
    else{
        topLink.classList.remove("show-top-link");
    }
});

//scroll
const scrollLinks=document.querySelectorAll(".scroll-link");
const linksContainer=document.querySelector(".links-container");
const navHeight=nav.getBoundingClientRect().height;
const linksHeight=links.getBoundingClientRect().height;
scrollLinks.forEach(function(link){
    link.addEventListener("click", function(e){
        e.preventDefault();
        const id = link.getAttribute("href").slice(1);
        const element=document.getElementById(id);
        
        let position=element.offsetTop-navHeight;
        if (navHeight>80){
            position=position+linksHeight;
        }
        else{
            position=position;
        }
        window.scrollTo({
            left:0,
            top: position
        });
        links.classList.remove("show-links");
    })
});

//smooth spuštanje linkova togglom
const linksHajt=links.getBoundingClientRect().height;
if(linksHajt>0){
    const showLinks=document.querySelector(".show-links");
    showLinks.style.height=linksHajt;
    console.log(llinksHajt);
}

//vrste proizvoda
const productTypes= [
    {
        href: "#pcelarstvo",
        title: "pčelarstvo",
        img: "./slike/vrste proizvoda/pčela cvijeće.jpg",
        text: "Eos excepturi dignissimos assumenda,voluptatem iste beatae natus ad accusamus laudantium perferendis voluptas? Dolore, corrupti,iste autem facere labore, vel maxime dicta commodi rerum exercitationem saepe nobis",
    },
    {
        href: "#vinogradarstvo",
        title: "vinogradarstvo",
        img: "./slike/vrste proizvoda/wine.jpg",
        text: "Eos excepturi dignissimos assumenda,voluptatem iste beatae natus ad accusamus laudantium perferendis voluptas? Dolore, corrupti,iste autem facere labore, vel maxime dicta commodi rerum exercitationem saepe nobis",
    },
    {
        href: "#smokvarstvo",
        title: "smokvarstvo",
        img: "./slike/vrste proizvoda/smokve.jpg",
        text: "Eos excepturi dignissimos assumenda,voluptatem iste beatae natus ad accusamus laudantium perferendis voluptas? Dolore, corrupti,iste autem facere labore, vel maxime dicta commodi rerum exercitationem saepe nobis",
    },
    {
        href: "#peradarstvo",
        title: "peradarstvo",
        img: "./slike/vrste proizvoda/koke.jpg",
        text: "Eos excepturi dignissimos assumenda,voluptatem iste beatae natus ad accusamus laudantium perferendis voluptas? Dolore, corrupti,iste autem facere labore, vel maxime dicta commodi rerum exercitationem saepe nobis",
    },
];

const productsTypeContainer=document.querySelector(".products-type-container");
//funkcija za prikaz svih vrsta proizvoda na stranici
function displayItems(itemsArr){

    let displayArr=[];
    itemsArr.map(function(item){
        //console.log(item);
        displayArr.push (`<article class="product-type">
        <div class="product-type-base">
            <h3 class="product-type-name">${item.title}</h3>
            <div class="product-type-photo-div" style="background: url('${item.img}') no-repeat 20% center/cover;">
                <div class="hide-products">
                    <a href="./OPG-shop.html${item.href}">Klikni za prikaz proizvoda</a>
                </div>
            </div>
        </div>
            <p class="product-type-text">
                ${item.text}
            </p>
    </article>`)
    });

    let displayItemsString=displayArr.join();
    displayItemsString=displayItemsString.replace(/,/g,"");
    //console.log(displayItemsString);
    productsTypeContainer.innerHTML=displayItemsString;
};
//prikaz svih vrsta proizvoda
displayItems(productTypes);

//povećanje product-type-basea i spuštanje opisa mouseoverom
const productType = document.querySelectorAll(".product-type");
productType.forEach(function(type){
    let productTypeBase=type.querySelector(".product-type-base");
    let productTypeText=type.querySelector(".product-type-text");
    let hideProducts=type.querySelector(".hide-products");

    type.addEventListener("mouseover", function(){
        productTypeBase.classList.add("product-type-base-scale");
        productTypeText.classList.add("product-type-text-show");
        hideProducts.classList.add("show-products");
    });
    type.addEventListener("mouseout", function(){
        if(productTypeBase.classList.contains("product-type-base-scale")){
            productTypeBase.classList.remove("product-type-base-scale");
        };
        if(productTypeText.classList.contains("product-type-text-show")){
            productTypeText.classList.remove("product-type-text-show");
        };
        if(hideProducts.classList.contains("show-products")){
            hideProducts.classList.remove("show-products");
        };
        
        
    });
})


