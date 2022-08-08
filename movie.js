class Movie{
    constructor(title,studio,rating){
      this.title=title;
      this.studio=studio;
      this.rating=rating || "PG";
      }
      getTitle(){
        return `the movie title is ${this.title}`
      }
      getStudio(){
        return `the movie produced by ${this.studio}`
      }
      getPG(){
        return `the movie rating is ${this.rating}`
      }
    }
    
    var AnbeSivam=new Movie("AnbeSivam","Lakshmi Movie Makers","8.7");
    var EkVillain =new Movie("Ek Villain","Balaji Motion Pictures");
    var casinoRoyale = new Movie("Casino Royale","Eon Productions","PG13");



    console.log(AnbeSivam);
    console.log(EkVillain);
    console.log(casinoRoyale);

    console.log(AnbeSivam.getTitle());
    console.log(AnbeSivam.getStudio());
    console.log(AnbeSivam.getPG());

    console.log(EkVillain.getTitle());
    console.log(EkVillain.getStudio());
    console.log(EkVillain.getPG());

    console.log(casinoRoyale.getTitle());
    console.log(casinoRoyale.getStudio());
    console.log(casinoRoyale.getPG());