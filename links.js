// Add your links here
const myLinks = [
    {
        url: "https://www.google.com",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
        title: "Google"
    },
    {
        url: "https://www.youtube.com",
        img: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png",
        title: "YouTube"
    },
    {
        url: "https://www.reddit.com",
        img: "https://www.redditinc.com/assets/images/site/reddit-logo.png",
        title: "Reddit"
    }
];

// This line allows the server (Node.js) to read this file if needed later
if (typeof module !== 'undefined') {
    module.exports = myLinks;
}