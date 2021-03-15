function onLoad() {}

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
