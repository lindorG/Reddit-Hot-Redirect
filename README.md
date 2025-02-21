# Reddit Hot Redirect

## Overview
Reddit Hot Redirect is a Chrome extension that automatically redirects Reddit subreddits from the default "Best" sorting to "Hot". This ensures that users always see the latest trending posts instead of older, top-ranked content.

## Features
- Automatically redirects subreddit pages from `Best` to `Hot`
- Preserves user-selected sorting (e.g., New, Top)
- Does not affect `old.reddit.com`
- Runs efficiently in the background

## Installation
1. Download the extension files.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top right corner).
4. Click **Load unpacked** and select the extension folder.
5. The extension is now active!

## Permissions
This extension requires the following permissions:
- `webRequest` & `webRequestBlocking`: To intercept and redirect Reddit URLs.
- `declarativeNetRequest`: To modify network requests for URL redirection.
- `tabs`: To check and modify Reddit URLs.
- `host_permissions`: To access subreddit pages on `www.reddit.com`.

## Privacy
This extension does **not** collect, store, or share any personal data. See the [Privacy Policy](./PRIVACY.md) for more details.

## License
This project is licensed under the MIT License.

## Contact
For questions or feedback, please contact the developer via the Chrome Web Store listing.