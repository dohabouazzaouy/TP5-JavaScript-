let nomber1=prompt("Entez le premier nombre:");
let nomber2=prompt("Entez le deuxéme  nombre:");
Nomber1=parseFloat(nomber1);
Nomber2=parseFloat(nomber2);
if (isNaN(Nomber1)|| isNaN(Nomber2)) {
    console.log("veillez enter des nombre");
   }else {
}
let somme =Nomber1+Nomber2;
let difference=Nomber1-Nomber2;
let produit =Nomber1*Nomber2;
if (nomber2!=0) {
    let quotient =nomber1/nomber2;
    alert("somme:"+somme);
    alert("difference:"+difference);
    alert("produit:"+produit);
    alert("quotient:"+quotient);
    }else { 
        console.log("division par zero impossible");
    
}

