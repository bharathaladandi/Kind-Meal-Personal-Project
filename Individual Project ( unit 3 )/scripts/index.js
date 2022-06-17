

let imgslide = document.getElementById("hp-block2");
let i = 1;
let image_arr = [
  "https://www.kindmeal.my/photos/deal/4/424-1404-m.jpg",
  "https://www.kindmeal.my/photos/deal/4/467-2796-m.jpg",
  "https://www.kindmeal.my/photos/deal/6/634-3683-m.jpg",
  "https://www.kindmeal.my/photos/deal/6/684-4446-m.jpg",
  "https://www.kindmeal.my/photos/deal/7/716-5042-m.jpg",
];

  

imgslide.style.backgroundImage = `url(${image_arr[0]})`;

setInterval(function () {
  if (i == image_arr.length) i = 0;

  imgslide.style.backgroundImage = `url(${image_arr[i]})`;
  i++;
}, 3500);



let imgslide1 = document.getElementById("hp-block3");
let j = 1;


let image_arr1 = [
    "https://www.kindmeal.my/photos/shop/5/592-4483-m.jpg",
    "https://www.kindmeal.my/photos/shop/2/219-940-m.jpg",
    "https://www.kindmeal.my/photos/shop/3/305-2337-m.jpg",
    "https://www.kindmeal.my/photos/shop/5/568-4306-m.jpg",
    "https://www.kindmeal.my/photos/shop/3/370-2439-m.jpg",
  ];
  

imgslide1.style.backgroundImage = `url(${image_arr1[0]})`;

setInterval(function () {
  if (j == image_arr1.length) j = 0;

  imgslide1.style.backgroundImage = `url(${image_arr1[j]})`;
  j++;
}, 3500);


//--------------------- ProC --------------------------

var ProductData = [
  {
      img_url:"https://www.kindmeal.my/photos/moment/24/24036-45815-l.jpg",
      des:"Swedish Meatballs With Mash And Gravy ",
      
  },
  
  {
    img_url:"https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/278979723_977865336135056_829345967473066298_n.jpg?stp=dst-jpg_p720x720&_nc_cat=103&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=pPlF2x2MBkYAX8d1ezU&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AT9W9FkZJx5jookJK0F11gUYIcpHGYQXSAiDG4In7XgwJg&oe=62AC5A6B",
    des:"Scientists Use Crispr Gene Editing To Alter The Social ",
    
  },

  {
    img_url:"https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/280697169_420481719680425_2519533840496617684_n.jpg?stp=dst-jpg_p720x720&_nc_cat=110&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=eT6_x93Yx1kAX83Dea1&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AT-i_yqiaI9isgPg3Yy9JUXuY9QxvNo8cYPiwH25RRnLzg&oe=62ADFFCB",
    des:"Kaya Harbor Seal Sealebrates Birthday With Friends",
    
  },

  {
    img_url:"https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/282060217_386411623429652_3546094542583801599_n.jpg?stp=dst-jpg_p720x720&_nc_cat=103&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=bC6Yw08AalgAX9Uy4in&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AT-dL8-n-K0kg6xCxW5YIgokmIM72lRYWjhzGfV9PLc9KA&oe=62ACDC6D",
    des:"Hundreds Of Tiny Rare Butterflies Head Into The Wild",
    
  },

  {
    img_url:"https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/279958094_1385161191953183_7922181364608512557_n.jpg?stp=dst-jpg_s720x720&_nc_cat=110&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=BiIOIzaHyb4AX84KlCh&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AT_JqJxsMQRABHzQsa5tTtk6QXTOoOY9oaMw5scHBp6B3g&oe=62ACB326",
    des:"Are Consumers Ready For Cultivated Meat?",
    
  }
]

//--------------------- ProD --------------------------

var ProductData2 = [
  {
      img_url:"https://www.kindmeal.my/photos/moment/24/24042-45838-s.jpg",
      name: "Casa Of Italy",
      des:"William21",
      
  },
  
  {
    img_url:"https://www.kindmeal.my/photos/moment/24/24041-45833-s.jpg",
    name: "Bröom Artisan Bakery",
    des:"FatJedi",
    
  },

  {
    img_url:"https://www.kindmeal.my/photos/moment/24/24038-45822-s.jpg",
    name: "香港仔冰室 SS2 Cafe Hk Boy",
    des:"VyVian",
    
  },

  {
    img_url:"https://www.kindmeal.my/photos/moment/24/24037-45818-s.jpg",
    name: "Honestly Superb Meals",
    des:"William21",
    
  },

  {
    img_url:"https://www.kindmeal.my/photos/moment/24/24036-45813-s.jpg",
    name: "Authentic Sarawak Flavors",
    des:"YinYinBoey",
    
  }
]

//--------------------- ProD --------------------------

var ProductData3 = [
  {
      img_url:"https://www.kindmeal.my/photos/item/0/459-5401-s.jpg",
      des:"Mille Crepe & Green Tea Latte",
      
  },
  
  {
    img_url:"https://www.kindmeal.my/photos/item/0/418-5750-s.jpg",
    des:"Affogato",
    
  },

  {
    img_url:"https://www.kindmeal.my/photos/item/0/540-7181-s.jpg",
    des:"Fruit Tea",
    
  },

  {
    img_url:"https://www.kindmeal.my/photos/item/0/482-5774-s.jpg",
    des:"Yellow Lentils curry",
    
  },

  {
    img_url:"https://www.kindmeal.my/photos/item/0/135-1208-s.jpg",
    des:"Banana Leaf Lunch Set",
    
  }
]

//--------------------- ProE --------------------------

var ProductData4 = [
  {
      img_url:"https://www.kindmeal.my/photos/member/40/40807-m.jpg",
      des:"VivianPeiWei",
      
  },
  
  {
    img_url:"https://www.kindmeal.my/photos/member/14/14287-m.jpg",
    des:"Bvelyn",
    
  },

  {
    img_url:"https://www.kindmeal.my/photos/member/11/11223-m.jpg",
    des:"kongirene",
    
  },

  {
    img_url:"https://www.kindmeal.my/photos/member/14/14725-m.jpg",
    des:"JyhHaur",
    
  },

  {
    img_url:"https://www.kindmeal.my/photos/member/21/21177-m.jpg",
    des:"LewKhiamLing",
    
  }
]



//--------------------- ProC --------------------------

window.addEventListener("load", function (){
  displayData(ProductData)
});
function displayData(ProductData){
  // document.querySelector("#ProC").innerText ="";
  let container = document.getElementById("ProC")
  ProductData.forEach(function(el){
        let img = document.createElement("img");
        img.setAttribute("class", "image1")
        img.src = el.img_url;

        let h5 = document.createElement("h5");
        h5.setAttribute("class", "wore")
        h5.innerText = el.des;

        let div = document.createElement("div");
      div.append(img, h5);
      container.append(div);
    // console.log(container)

  });
}

//--------------------- ProD --------------------------

window.addEventListener("load", function (){
  displayData1(ProductData2)
});
function displayData1(ProductData2){
  // document.querySelector("#ProC").innerText ="";
  let container = document.getElementById("ProD")
  ProductData2.forEach(function(el){
        let img = document.createElement("img");
        img.setAttribute("class", "image1")
        img.src = el.img_url;

        let h5 = document.createElement("h5");
        h5.setAttribute("class", "wore")
        h5.innerText = el.name;

        let p = document.createElement("p");
        p.innerText = el.des;
        let div = document.createElement("div");
      div.append(img, h5, p);
      container.append(div);
    // console.log(container)

  });
}

//--------------------- ProE --------------------------

window.addEventListener("load", function (){
  displayData2(ProductData3)
});
function displayData2(ProductData3){
  // document.querySelector("#ProC").innerText ="";
  let container = document.getElementById("ProE")
  ProductData3.forEach(function(el){
    let img = document.createElement("img");
    img.setAttribute("class", "image2")
    img.src = el.img_url;

    let h5 = document.createElement("h5");
    h5.setAttribute("class", "wore")
    h5.innerText = el.des;

    let div = document.createElement("div");
  div.append(img, h5);
  container.append(div);
// console.log(container)

  });
}

//--------------------- ProE --------------------------

window.addEventListener("load", function (){
  displayData3(ProductData4)
});
function displayData3(ProductData4){
  // document.querySelector("#ProC").innerText ="";
  let container = document.getElementById("ProF")
  ProductData4.forEach(function(el){
    let img = document.createElement("img");
    img.setAttribute("class", "image1")
    img.src = el.img_url;

    let h5 = document.createElement("h5");
    h5.setAttribute("class", "wore")
    h5.innerText = el.des;

    let div = document.createElement("div");
  div.append(img, h5);
  container.append(div);
// console.log(container)

  });
}
