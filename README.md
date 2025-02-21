# Reddit Hot Redirect

<p align="center">
  <img src="img/reddit-hot-redirect-logo-128x128.png" alt="Reddit Hot Redirect Logo">
</p>


## Overview
Reddit recently changed its default sorting behavior, directing users to the 'Best' sorting method instead of 'Hot'. This creates an issue where older, highly upvoted posts remain at the top for extended periods, making it difficult to discover newly trending content. The 'Hot' sorting method is better suited for seeing fresh discussions as they gain traction in real time.

Reddit Hot Redirect is a Chrome extension that automatically redirects subreddit pages from 'Best' to 'Hot', ensuring that you always see the most relevant and up-to-date posts without having to manually adjust the sorting every time you visit a subreddit.

## Features
- Redirects subreddit pages from `Best` to `Hot`, ensuring fresher content.
- Works automatically without user intervention.
- Lightweight and privacy-focused.

## Installation
1. Download or clone this repository.
2. Go to `chrome://extensions/` in your browser.
3. Enable **Developer mode** (toggle in the top right).
4. Click **Load unpacked** and select the extension folder.

## Permissions Used
- **declarativeNetRequest**: Used to modify network requests and redirect Reddit pages.
- **tabs**: Required for handling tab-based interactions.
- **host permissions** (`https://www.reddit.com/r/*`): Allows the extension to operate specifically on subreddit pages.

## How It Works
- If you visit `https://www.reddit.com/r/[subreddit]/`, the extension will redirect you to `https://www.reddit.com/r/[subreddit]/hot/`.
- If you visit `https://www.reddit.com/r/[subreddit]/best/`, it will also redirect to `/hot/`.
- **Old Reddit (`old.reddit.com`) is unaffected.**

## Security & Privacy
- This extension does **not** collect, store, or share any data.
- All redirections happen locally in your browser.

## Contribution
Feel free to submit issues or pull requests for improvements!

## License
MIT License.