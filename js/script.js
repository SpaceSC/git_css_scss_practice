function onLoad() {
  const body = document.querySelector("body");
  const add = document.getElementById("add");
  const addColor = document.getElementById("add-color");
  const favList = document.getElementById("favlist");
  const favColors = [];

  function addColors(){
    favColors.push(addColor.value.toLowerCase());
    favList.insertAdjacentHTML('beforebegin', `${addColor.value}, `);
    addColor.value = "";
    // console.log(favColors);

    
    favColors.includes("blue") ? body.style.backgroundColor = "blue" : favColors.includes("red") ? body.style.backgroundColor = "red" : body.style.backgroundColor = "white";
  

    //.classList.add()
  }
  
  
  //favColors.map(color => favList.insertAdjacentHTML('beforebegin', `${color}, `))
  add.addEventListener('click', addColors)

  fetch("https://cataas.com/api/cats")
    .then(response => response.json())
    //.then(data => data.map(res => console.log(res.id))) // reactben setData(data)
    // JSON.stringify(data) // küldeni csak stringként lehet a dolgokat
    // JSON.parse(data) // jsonné alakítás tároláshoz
    .then(data => console.log(data))
    .catch((error) => {
      console.error("Error:", error); //.error piros, .warn sárga üzenet
    })

}

window.addEventListener("load", onLoad);

/*

  // ha csak egy=1; varral hozza létre, kilogolja

  //deklarálás: létrehozom a változót

  console.log(egy); // undefined // hoisting a deklarálást felülre mozgatja, először undefined értékkel, majd kiírja az 1-et amikor odaér ahol értéket adtunk neki
  var egy;
  console.log(egy); // undefined

  console.log(ketto); // reference error
  let ketto;
  // inicializálás: értéket adok neki
  egy = 1;
  console.log(egy); // 1

  console.log(ketto); // undefined
  ketto = 2;
  console.log(ketto); // 2

  //de constot egyszerre kell deklarálni és inicializálni, mert nem felülírható később

  console.log(harom); // reference error
  // const harom; // syntax error
  const harom = 3;
  console.log(harom); // 3

  */

/*
  //változók

  //var
  //let
  //const (immutable)
  const element = {}; // mindig ugyanaz az objektum és array marad
  const element2 = [];
  console.log(element2);
  element2.push("helloooo"); // const, a tömb ugyanaz marad, de azt metódusokkal megváltoztathatjuk, hogy mi van benne
  console.log(element2);

  */

  /*

  const check = document.getElementById("check"); // az első előforduló olyat szelektálja ki
  // querySelectorAll az összes olyat, nodelistet ad vissza
  console.log(check);

  */

  /*

  // add to array
  //favColors.push("green");

  // remove last
  // favColors.pop();

  // remove first
  // favColors.shift();

  // remove starting from starting index, stops before other index
  // favColors.splice(0,1);

  // filter and return elements that pass a certain test (myFunction here)
  // favColors.filter(myFunction);

  //favList.insertAdjacentHTML('beforebegin', `${favColors}`)
  //console.log(favList);

  */

  /*
    if (favColors.includes("Blue")) {
      body.style.backgroundColor = "blue";
    }
  */