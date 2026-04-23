function Quiz() {
    let score = 0;

    let q1 = prompt("Quelle est la capitale de la France ?");
    if (q1 && q1.trim().toLowerCase() === "paris") {
        score++;
        alert("Bonne réponse");
    } else {
        alert("Mauvaise réponse. C'est Paris.");
    }

    let q2 = prompt("Combien font 2 + 2 ?");
    if (q2 && Number(q2) === 4) {
        score++;
        alert("Bravo");
    } else {
        alert("Faux. 2 + 2 = 4.");
    }

    alert("Votre score : " + score + " sur 2");
}


Quiz();
