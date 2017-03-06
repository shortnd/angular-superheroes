var superHeroList = [
  {
    name: "Deadpool",
    number: "800-KIL-LHIM",
    group: "Marvel",
    img: "img/Deadpool-PNG-Photo.png"
  },
  {
    name: "Wolverine",
    number: "800-HEY-BUBB",
    group: "Marvel",
    img: "img/WOLVERINE.png"
  },
  {
    name: "Batman",
    number: "800-DRK-NITE",
    group: "DC",
    img: "img/batman.png"
  },
  {
    name: "Deathstroke",
    number: "800-HIR-EGUN",
    group: "DC",
    img: "img/Deathstroke.png"
  },
  {
    name: "Star Lord(Peter Quill)",
    number: "800-STA-RLRD",
    group: "Marvel",
    img: "img/Starlord.png"
  }
];


angular
  .module("superApp", [])
  .controller("supersCtrl", [ superController ])

function superController() {
  this.supers = superHeroList;

  this.addSuperNew = function() {
    var superHero = {
      name: this.newSuperName,
      number: this.newSuperNumber,
      group: this.newSuperGroup,
      img: this. newSuperImg
    };
    this.supers.push(superHero);
  };



}
