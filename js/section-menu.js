const funnyFuctsText = [
    "Humans all over the world consume 50 billion gallons of beer each year.",
    "Budweiser is the world's most famous beer.",
    "Beer is one of the oldest beverages in the world, dating back to 5000BC!",
    "The Czech Republic was the first country ever to have a beer museum.",
    "McDonald's sell beer on its menu in countries such as France, Germany, \
    Portugal and South Korea.",
    "'Snake Venom' is the strongest beer in the world with 67.5% alcohol by \
    volume, brewed by Scottish brewery Brewmeister.",
    "Every year, Germany organises the biggest beer festival in the world, \
    Oktoberfest. About 6 million people visit the festival.",
    "Beer pong was a game invented in the '50s.",
    "Former President Barack Obama was the first president ever to brew a \
    beer in the White House.",
    "The brewers in Egypt were women. ",
    "You can swim in a pool of beer at the Schloss Starkenberger brewery \
    in Tarrentz, Austria.",
    "Beer is the third most-consumed drink in the world, after water and \
    tea.",
    "You can chill a beer in two minutes, just put ice and salt in a bowl \
    and stir.",
    "The earliest known building on the site of Downing Street was a brewery.",
    "Builders of the 'Great Pyramids' were paid in beer."
];

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const funnyFucts = document.querySelector('.funny__text');

function updateFunnyFuctsText() {
    funnyFucts.innerText = getRandomItem(funnyFuctsText);
}

setInterval(updateFunnyFuctsText, 4000);