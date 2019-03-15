# Google Play Music Extractor

A script to extract all songs from Google Play Music that are added to your subscription.

## Motivation

I wanted to get a list of all of the music in my library added as a part of my subscription. It was too difficult to manage all 1200+ songs in the web interface. I wanted a list so I can purchase or curate a personal library.

## How do I run the script?

1. Navigate to [Google Play Music](https://play.google.com/music/)
2. Sign in if you need to.
3. Right click the page and click "Inspect Element"
4. Go to the "Storage" tab (this might be named differently or hidden depending the browser, I used Firefox)
5. Click "Indexed DB"->"https://play.google.com"
6. Copy the "Database Name"
7. Replace the first parameter passed into `listSongs` with your database name in `index.js`
8. Copy everything from `index.js`
9. Open click the "Console" tab and paste in the code
10. The HTML of the page will be replaced with a list of the song, artist, and album
