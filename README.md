# Amit Kumar Waghmare — Video Editor

Static portfolio prepared for GitHub Pages. No build step or paid service is required.

## Publish

1. Create a public GitHub repository named `amit-video-editor`.
2. Upload this folder's contents so `index.html` sits at the repository root.
3. In repository Settings → Pages, choose **Deploy from a branch**, select **main** and **/ (root)**, then Save.
4. Use the published URL shown by GitHub Pages once deployment completes.

Official setup guide: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Files

- `index.html`: biography, credits, individual project cards and contact links.
- `styles.css`: responsive dark theme from the original portfolio.
- `site.js`: retained preview helper; native YouTube embeds play without it.
- `video-placeholder.svg`: fallback graphic if a thumbnail cannot load.
- `.nojekyll`: serves the site as plain static files.

## Video players

19 videos are shown individually: 4 YouTube videos and 15 Instagram posts.
YouTube’s native embedded players display their previews and play directly inside each card.
Instagram uses its official embed script, which sizes each player to its post rather than putting it in a short, scrolling outer iframe.
Instagram controls, branding and any provider playback restrictions remain controlled by Instagram; this website cannot guarantee that an Instagram video plays in every browser.

To edit content, change `index.html`. All local asset paths are relative so repository subpath hosting works.

For local preview: `python3 -m http.server 8000` from this directory, then open http://localhost:8000.
