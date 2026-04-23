function jouer() {
    let nomber=Math.floor (Math.random()*10) +1 ;
   let tentative;
   let score=0;
   do{
     tentative=Number(prompt("entrez un nomber enrtre 1et 10"))
    score++;
    if (tentative >nomber) {
        alert("Supérieur");
    }else if(tentative <nomber) { 
        alert("Inférieur");
    }else{
            alert("bravo");
    }   
        
    } while (tentative !==nomber);
      alert("score:"+score)
        
    }
    jouer();
    

