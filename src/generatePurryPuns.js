const purryPunsList = [
    "You've cat to be kitten me!", 
    "Before making a big decision, I like to paws and reflect.",
    "My cat loves when I play the piano. She’s a big fan of mewsic!",
    "Did you see that cat video? It was claw-some!",
    "I’m not kitten you, that was the funniest joke I’ve heard!"
]

const generatePurryPuns = () => {
    // puns obatined from https://mypawdiaries.com/100-purr-fect-cat-puns-youll-love/

    const randomPunOption = Math.floor(Math.random() * purryPunsList.length);  // randomly generates a number between 0 & the array length
    document.getElementById('pun').innerHTML = purryPunsList[randomPunOption];
    return;
};
export default generatePurryPuns;