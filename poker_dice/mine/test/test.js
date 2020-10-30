function rollDie() {
    let de = Math.floor(Math.random() * Math.floor(6)) + 1;
    document.getElementById("pote").innerHTML = 'Le dé affiche ' + de;
}
