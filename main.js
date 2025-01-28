function roll(){
    const noOfDice = document.getElementById("input").value;
    const diceImages = document.getElementById("dice-images");
    const images = [];

    for(i=0;i<noOfDice;i++){
        let chance = Math.floor(Math.random()*6)+1; 
        images.push(`<img src="/images/${chance}.png">`)
    }
    diceImages.innerHTML = images;
}