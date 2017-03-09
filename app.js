angular
  .module("superheroApp",[])
  .controller("SuperheroController", [SuperheroControllerFunction])

  function SuperheroControllerFunction (){
    this.heroes = heroes;

    this.newSearch = function(){
    let searchTerm = this.newSearchTerm;
    return searchTerm;
  }

  }



var heroes = [
  {
    name: "Thor",
    phone: "206-206-5757",
    img_url: "http://i.imgur.com/nxngOId.jpg",
    affiliation:"Marvel"
  },
  {
    name: "Iron Man",
    phone: "206-207-4949",
    img_url: "http://i.imgur.com/pbtwd5c.jpg",
    affiliation: "Marvel"
  },
  {
    name: "Spider-man",
    phone: "206-206-9999",
    img_url: "http://i.imgur.com/F9X0uCG.jpg",
    affiliation: "Marvel"
  },
  {
    name: "BANE",
    phone: "206-206-9999",
    img_url: "http://i.imgur.com/0Fvl9M1.jpg",
    affiliation: "DC"
  }

]
