# Aduke & Adisa introduction website

Plain HTML, CSS and JavaScript. No build step.

## 1. Make your Google Sheet
1. Sign in as Saratbalogun6@gmail.com and create a new Google Sheet.
2. Go to Extensions > Apps Script.
3. Delete the starter code, paste in everything from `apps-script.gs`, and save.
4. Tap Deploy > New deployment > type: Web app.
   - Execute as: Me
   - Who has access: Anyone
5. Tap Deploy, allow the permissions, and copy the Web app URL.

## 2. Connect the website
Open `script.js` and replace `PASTE_YOUR_APPS_SCRIPT_URL_HERE` with that URL.

## 3. Put it online (free)
Easiest: go to app.netlify.com/drop and drag this whole folder in. You get a link to share.
Alternatives: Vercel, Cloudflare Pages, or GitHub Pages.

## Test
Open your live link, send a test RSVP, and check that a new row appears in the sheet.
If you edit `apps-script.gs` later, deploy a new version for changes to take effect.
