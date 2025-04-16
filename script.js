let list =[

'I paused my game to be here. Youre welcome.',

'Eat. Sleep. Game. Repeat... hygiene is optional.',

'Lag is just the universe telling you to chill.',

'I dont always rage quit... but when I do, I make sure everyone hears it.',

'Real life? Never heard of that server.',

'If I had a dollar for every time I died in a game, Id have enough for DLCs.',

'Keep calm and blame the controller.',

'Respawning is just my way of teleporting.',


'I’m not trolling, I’m just trying out new strategies.' ,

'Who needs skill when you have a full team of players who don’t communicate?' ,

'When in doubt, blame the ADC.' ,

'My favorite agent in Valorant? The one who carries me, of course.' ,

'I didn’t lose, I just experienced a learning moment.' ,

'League of Legends: Where my team’s flame is hotter than my champions ultimate.' ,

'Who needs aim when you have a gun that auto-locks?' ,

'In League, you don’t play for fun, you play for the report button.' ,

'I don’t rage, I just aggressively suggest improvements to my teammates.' ,

'In Valorant, if you’re not dead, you’re doing it wrong.' ,

]

let index = Math.floor(Math.random()* 18);
let myQuote = document.getElementById('quote');
myQuote.innerText = list[index];

function reloadPage() {
    location.reload(); // Reload the page
}