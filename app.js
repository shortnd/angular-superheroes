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
  },
  {
    name: "Flash",
    number: "800-GOF-ASTR",
    group: "DC",
    img: "img/Flash.png"
  },
  {
    name: "Winter Soldier(Bucky Barns)",
    number: "800-WNT-SOLD",
    group: "Marvel",
    img: "img/Winter-Soldier.png"
  },
  {
    name: "Superman",
    number: "800-SUP-RMAN",
    group: "DC",
    img: "img/Superman.png"
  },
  {
    name: "Wonder Woman",
    number: "800-WND-WOMN",
    group: "DC",
    img: "img/wonder-woman.png"
  },
  {
    name: "Iron Man",
    number: "800-TNY-STRK",
    group: "Marvel",
    img: "img/iron-man.png"
  },
  {
    name: "Green Lantern",
    number: "800-GRN-LANT",
    group: "DC",
    img: "img/The-Green-Lantern.png"
  },
  {
    name: "Captain America",
    number: "800-CAP-TAMR",
    group: "Marvel",
    img: "img/Cap.png"
  },
  {
    name: "Cyborg",
    number: "800-666-CYNG",
    group: "DC",
    img: "img/Cyborg.png"
  },
  {
    name: "Aquaman",
    number: "800-ORD-FISH",
    group: "DC",
    img: "img/Aquaman.png"
  },
  {
    name: "Dr. Strange",
    number: "800-DRS-TRNG",
    group: "Marvel",
    img: "img/DrStrange.png"
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
      img: this.newSuperImg
    };
    this.supers.push(superHero);
  };

  this.editSuper = function() {
    var superHero = {
    name: this.editSuperName,
    number: this.editSuperNumber,
    group: this.editSuperGroup,
    img: this.editSuperImg
  };
  this.supers.update();
};


}
