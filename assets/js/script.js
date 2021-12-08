// TODO: Declare any global variables we need

let flipHead = 0
let flipTail = 0


document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})
//Clicking the flip button
document.getElementById('flip').addEventListener('click', function(){

let flippedCoin = Math.ceil(Math.random() * 2);

let flipHeadPercent = 0;
let flipTailPercent = 0;

    if (flippedCoin == 1){
        const message = document.querySelector('.messageBox');
        message.style.color ='orange';
        message.textContent = "You flipped heads";
        

        document.getElementById('penny-heads').src = 'assets/images/penny-heads.jpg'

        flipHead++;

      

    }
    else{
        const message = document.querySelector('.messageBox');

        message.textContent = "You flipped tails";
        message.style.color ='orange';
        document.getElementById('penny-heads').src='assets/images/penny-tails.jpg'

        flipTail++;

        
    }

    let totalFlips = flipHead + flipTail;

    if (totalFlips > 0){

        flipHeadPercent = Math.round(flipHead/totalFlips * 100)
        flipTailPercent = Math.round(flipTail/totalFlips * 100)
    }
    document.getElementById('heads').textContent=flipHead;
    document.getElementById('tails').textContent=flipTail;
    document.getElementById('heads-percent').textContent=flipHeadPercent + '%';
    document.getElementById('tails-percent').textContent=flipTailPercent + '%';
})


//Clicking the clear button
document.getElementById('clear').addEventListener('click', function(){

    flipTail=0
    flipHead=0
    flipHeadPercent=0
    flipTailPercent=0
    document.getElementById('heads').textContent=flipHead;
    document.getElementById('tails').textContent=flipTail;
    document.getElementById('heads-percent').textContent=flipHeadPercent + '%';
    document.getElementById('tails-percent').textContent=flipTailPercent + '%';

    const message = document.querySelector('.messageBox');
    message.style.color ='orange'
    message.style.fontSize = 'xx-large';
    message.textContent = "Let\'s get rolling!";
    
    
    
    })