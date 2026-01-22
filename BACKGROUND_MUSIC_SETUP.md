# Background Music Setup

## Current Configuration

The background music component is looking for:
- **File name:** `background-music.mp3`
- **Location:** `/public/background-music.mp3`
- **Volume:** 30% (0.3)
- **Format:** MP3 (with OGG as fallback)

## How to Add Your Music File

1. **Get your music file:**
   - Should be in MP3 format
   - Recommended: Ambient/background music (not too loud)
   - File size: Keep it reasonable (under 5MB if possible)

2. **Add to project:**
   - Place the file in: `Website 2026/public/background-music.mp3`
   - The file should be named exactly: `background-music.mp3`

3. **Test:**
   - Restart your dev server (`npm run dev`)
   - The music should start playing automatically when the page loads
   - If autoplay is blocked by browser, a mute/unmute button will appear in bottom-right

## Alternative File Names

If you want to use a different file name, update `components/BackgroundMusic.tsx`:

```tsx
<source src="/your-music-file.mp3" type="audio/mpeg" />
```

## Troubleshooting

### Music not playing?
1. **Check browser console** (F12) for errors
2. **Check file exists:** Make sure `background-music.mp3` is in the `public` folder
3. **Check file name:** Must be exactly `background-music.mp3` (case-sensitive)
4. **Check browser autoplay policy:** Some browsers block autoplay - look for mute button in bottom-right
5. **Check volume:** Music plays at 30% volume - might be quiet

### Autoplay blocked?
- This is normal browser behavior
- A mute/unmute button will appear in the bottom-right corner
- Click it to start the music

### File not found error?
- Make sure the file is in `/public/` folder (not `/public/music/` or anywhere else)
- File name must match exactly: `background-music.mp3`
- Restart your dev server after adding the file

## Current Status

❌ **Music file not found** - You need to add `background-music.mp3` to the `public` folder

Once you add the file, the music will:
- ✅ Auto-play on page load (if browser allows)
- ✅ Play at 30% volume
- ✅ Loop continuously
- ✅ Pause when hovering over videos
- ✅ Resume when leaving videos
- ✅ Show mute button if autoplay is blocked
