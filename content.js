(function () {
    function redirectIfNecessary() {
        const url = new URL(window.location.href);

        if (url.hostname === "old.reddit.com") return;

        const subredditMatch = url.pathname.match(/^\/r\/([^\/]+)\/?$/);
        if (subredditMatch) {
            const subreddit = subredditMatch[1];
            const expectedUrl = `https://www.reddit.com/r/${subreddit}/hot/`;

            if (url.href !== expectedUrl) {
                console.log(`Redirecting: ${url.href} -> ${expectedUrl}`);
                window.location.replace(expectedUrl);
            }
        }
    }

    // Run redirect check initially
    redirectIfNecessary();

    // Observe dynamic page changes
    const observer = new MutationObserver(redirectIfNecessary);
    observer.observe(document.body, { childList: true, subtree: true });

    // Listen for URL changes via history API (for single-page app navigation)
    window.addEventListener('popstate', redirectIfNecessary);
    window.addEventListener('pushstate', redirectIfNecessary);
})();