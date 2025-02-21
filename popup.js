document.getElementById("review").addEventListener("click", function() {
    chrome.tabs.create({ url: "https://chrome.google.com/webstore" });
});

document.getElementById("donate").addEventListener("click", function() {
    chrome.tabs.create({ url: "http://paypal.me/glindor" });
});
