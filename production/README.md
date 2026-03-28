# Seirios Video Production Guide

Two product demo videos for the website — one for CISOs & DPOs, one for DevSecOps engineers.

**Approach:** Bookend voiceover (opening + closing sentence only) with text overlays during the demo. Music runs throughout.

**Tools required:** OBS Studio · DaVinci Resolve · Audacity · HandBrake  
**All free and open source.**

---

## Folder structure

```
production/
├── README.md                  ← this file
├── scripts/
│   ├── demo-ciso.sh           ← terminal script for CISO video
│   ├── demo-devops-fail.sh    ← terminal script showing BUILD FAILED
│   └── demo-devops-pass.sh    ← terminal script showing BUILD APPROVED
├── intro/
│   └── seirios-logo-intro.html  ← animated logo intro, open in Chrome to record
└── voiceover/
    └── scripts.md             ← the four voiceover sentences
```

**Final video output goes to:**
```
assets/videos/
├── seirios-ciso-demo.mp4
└── seirios-devops-demo.mp4
```

---

## Video structure

Each video follows this layout:

```
[Logo intro 15s] → [Opening voiceover 3s] → [Screen demo ~90s] → [Closing voiceover 3s] → [Fade out]

Audio:
  Music:      ████████████████████████████████████  full duration, −20dB
  Voiceover:  ████                            ████  opening + closing only
  Text:            ████ ████ ████ ████ ████         overlays during demo
```

**Total runtime:** ~2 minutes per video  
**Output format:** MP4, H.264, 1280×720, 30fps  
**Target file size:** 8–14MB per video

---

## Confidentiality rules

These apply to everything visible on screen. If any of the following appear, stop and re-record that section.

### Never show
- OCL syntax, `.ecore` files, `.sol` files
- Class names: `MITREController`, `GDPRController`, `@ComplianceRequired`
- Any class or file name ending in `Controller` or `Registry`
- The words: `MDD`, `metamodel`, `Solidity`, `Pinata`, `IPFS`, `Hardhat`
- GitHub repository URL or any private repo
- The exact number `27` next to "threats"
- Any investor deck, NDA, or internal document

### Safe to show
- All public website pages as-is
- Terminal output from the scripts in `scripts/`
- Compliance scores and PASS / FAIL / BUILD FAIL outputs
- Regulation names: EU AI Act, GDPR, NIST AI RMF, MAS TRM
- The 4-step framework language
- Pricing page

---

## Step 1 — Record the logo intro (15 min)

**Prepare:**
1. Open `intro/seirios-logo-intro.html` in Chrome
2. Press `Ctrl+0` / `Cmd+0` — zoom to exactly 100%
3. Press `F11` / `Cmd+Shift+F` — full screen

**OBS settings for this recording only:**
| Setting | Value |
|---|---|
| Source | Window Capture → Chrome |
| Resolution | 1280×720 |
| FPS | 30 |
| Format | MP4 |
| Encoder | x264 |
| Rate control | CRF 18 (higher quality — short clip) |
| Microphone | **Muted** — no audio needed |

**Record:**
1. Click **Start Recording** in OBS
2. Switch to Chrome → press `Ctrl+R` / `Cmd+R` to restart the animation from zero
3. Wait 15 seconds until the screen goes fully black
4. Click **Stop Recording**
5. Rename the file: **`seirios-logo-intro.mp4`**

> Keep this file. It is the first 15 seconds of both videos.

---

## Step 2 — Record the voiceover (10 min)

Open `voiceover/scripts.md` for the exact sentences.

**Audacity setup:**
- Input: your microphone
- Track type: Mono
- Sample rate: 44100 Hz

**Recording method:**
- Read each sentence **three times** back to back
- Pause 3 seconds between takes
- Do not stop recording between takes
- You will pick the best take in editing

**Clean all four tracks in one session:**

| Step | Action |
|---|---|
| 1 | Select 2 seconds of silence before first take → Effect → Noise Reduction → **Get Noise Profile** |
| 2 | Select All → Effect → Noise Reduction → Apply |
| 3 | Effect → Compressor: Threshold −18dB, Ratio 3:1, Attack 0.2s, Release 1s |
| 4 | Effect → Normalize: Peak amplitude −1dB |
| 5 | Listen back, pick best take of each sentence, delete the rest |

**Export each as WAV:**
- `vo-ciso-open.wav`
- `vo-ciso-close.wav`
- `vo-devops-open.wav`
- `vo-devops-close.wav`

---

## Step 3 — Prepare the terminal scripts (20 min)

The shell scripts in `scripts/` control the terminal output automatically during recording. No live typing required.

**Make them executable:**
```bash
cd production/scripts
chmod +x demo-ciso.sh demo-devops-fail.sh demo-devops-pass.sh
```

**Test each one before recording:**
```bash
./demo-ciso.sh
./demo-devops-fail.sh
./demo-devops-pass.sh
```

Confirm each runs cleanly and the output is readable. If the font is too small, increase your terminal font size to 16pt minimum.

**Terminal appearance settings:**
- Font size: 16pt minimum
- Color scheme: dark background, white text
- Window: roughly half screen width, full height

---

## Step 4 — Prepare the recording environment (15 min, do once)

**Browser:**
1. Open an incognito window: `Cmd+Shift+N` / `Ctrl+Shift+N`
2. Hide bookmarks bar: `Cmd+Shift+B` / `Ctrl+Shift+B`
3. Set zoom to 100%: `Cmd+0` / `Ctrl+0`

**System:**
- Enable Do Not Disturb / Focus Assist
- Close: Slack, email, calendar, all non-essential apps

**OBS settings for main recordings:**
| Setting | Value |
|---|---|
| Source 1 | Window Capture → Chrome incognito |
| Source 2 | Window Capture → Terminal |
| Resolution | 1280×720 |
| FPS | 30 |
| Format | MP4 |
| Encoder | x264 |
| Rate control | CRF 23 |
| Microphone | **Not added** — voiceover recorded separately |

---

## Step 5 — Record the CISO screen demo (30 min)

**Open in incognito browser before starting:**
- `threadledger-site.vercel.app/for-ciso.html`
- `threadledger-site.vercel.app/index.html`

**Terminal:** have `demo-ciso.sh` ready to run

**Hit Start Recording in OBS, then follow:**

| Timing | Screen | Action |
|---|---|---|
| 0:00–0:20 | for-ciso.html | Scroll slowly from top. Pause 3s on the €35M fine callout |
| 0:20–0:50 | index.html | Scroll to 4-step cards. Each card visible ~4 seconds |
| 0:50–0:55 | Switch to Terminal | Run `./demo-ciso.sh` |
| 0:55–1:40 | Terminal | Watch it run — do not touch anything |
| 1:40–1:45 | Terminal | Hold still on BUILD APPROVED — 4 seconds |
| 1:45–2:00 | for-ciso.html | Scroll to evidence package section |
| 2:00–2:10 | index.html | Scroll so EU AI Act badge and stats are visible |
| 2:10 | **Stop Recording** | |

Save as: **`main-ciso.mp4`**

---

## Step 6 — Record the DevSecOps screen demo (30 min)

**Open in incognito browser before starting:**
- `threadledger-site.vercel.app/for-devops.html`
- `threadledger-site.vercel.app/index.html`
- `threadledger-site.vercel.app/pages/regulations.html`

**Terminal:** have both `demo-devops-fail.sh` and `demo-devops-pass.sh` ready

**Hit Start Recording in OBS, then follow:**

| Timing | Screen | Action |
|---|---|---|
| 0:00–0:20 | for-devops.html | Scroll slowly from top |
| 0:20–0:45 | index.html | Scroll to Step 1 and Step 2 cards — 5 seconds each |
| 0:45–0:50 | Switch to Terminal | Run `./demo-devops-fail.sh` |
| 0:50–1:30 | Terminal | Watch it run |
| 1:30–1:35 | Terminal | Hold still on BUILD FAILED — 4 seconds |
| 1:35–1:40 | Terminal | Run `./demo-devops-pass.sh` |
| 1:40–2:10 | Terminal | Watch it run |
| 2:10–2:15 | Terminal | Hold still on BUILD APPROVED — 4 seconds |
| 2:15–2:30 | for-devops.html | Scroll to CI integration section |
| 2:30–2:45 | regulations.html | Scroll the sidebar — framework names visible |
| 2:45 | **Stop Recording** | |

Save as: **`main-devops.mp4`**

---

## Step 7 — Edit in DaVinci Resolve

### Project setup
1. File → New Project → name: **Seirios Videos**
2. Master Settings → Timeline resolution: 1280×720, Frame rate: 30
3. Import all files: `logo-intro.mp4`, `main-ciso.mp4`, `main-devops.mp4`, all four WAV files, both music MP3s

### Music tracks
| Video | Track |
|---|---|
| CISO | Technology Corporate — PaulYudin (Pixabay) |
| DevSecOps | Tutorial Technology — PaulYudin (Pixabay) |

Both are royalty-free, no attribution required.

---

### CISO timeline structure

```
V2: [Text overlays]
V1: [logo-intro.mp4 0:00–0:15][×dissolve 0.5s][main-ciso.mp4]
A1: [vo-ciso-open.wav at 0:13]                 [vo-ciso-close.wav at end−10s]
A2: [music-corporate.mp3 — full duration, −20dB, fade out last 2.5s]
```

**Assembly steps:**
1. Drag `logo-intro.mp4` to V1 at 0:00
2. Drag `main-ciso.mp4` immediately after on V1
3. Right-click the join → Add Transition → Cross Dissolve → 0.5s
4. Drag `vo-ciso-open.wav` to A1. Start at **0:13** — just as logo fades
5. Drag `vo-ciso-close.wav` to A1. Position it **10 seconds before end**
6. Drag music to A2. Right-click → Clip Attributes → Volume: **−20dB**
7. Right-click end of music → Add Fade Out → 2.5 seconds
8. Select all → right-click last 1.5 seconds → Add Fade to End

**Text overlays — CISO:**

| Moment on screen | Text | Colour | Style |
|---|---|---|---|
| €35M callout visible | `EU AI Act · August 2026` | `#00e0ff` | Bottom-left |
| Step 1 card | `Step 1 — Formally verified risk model` | `#00e0ff` | Bottom-left |
| Step 2 card | `Step 2 — Zero hand-written compliance code` | `#00e0ff` | Bottom-left |
| Terminal running | `Automated — every code change` | `#00e0ff` | Bottom-left |
| BUILD APPROVED | `BUILD APPROVED` | `#ffffff` | Centre, larger |
| Evidence section | `Evidence package — regulator ready` | `#00e0ff` | Bottom-left |

Each overlay: 3–4 seconds duration. Add Cross Dissolve 0.3s at start and end of each.

Add each overlay: Effects Library → Titles → **Text+** → drag to V2 → Inspector: font Courier New, size 42pt.

---

### DevSecOps timeline structure

Same as CISO, with these differences:

**Additional: red vignette on BUILD FAILED**
1. Go to the **Color** page
2. Navigate to the BUILD FAILED frame
3. Set In/Out marks around those 4 seconds
4. Add a new node → Curves → lift red channel slightly, lower overall luma slightly
5. Result: a subtle red-tinted darkening for 4 seconds

**Text overlays — DevSecOps:**

| Moment | Text | Colour | Style |
|---|---|---|---|
| for-devops page scrolling | `No tooling. No automation. Until now.` | `#00e0ff` | Bottom-left |
| Step 1 card | `Compliance defined — not assumed` | `#00e0ff` | Bottom-left |
| Step 2 card | `Zero hand-written compliance code` | `#00e0ff` | Bottom-left |
| BUILD FAILED | `HIGH-RISK GAP DETECTED` | `#ff4466` | Centre, larger |
| Holding on FAILED | `Caught before merge. Not in production.` | `#ffffff` | Bottom-left |
| BUILD APPROVED | `BUILD APPROVED` | `#00ff88` | Centre, larger |
| Regulations sidebar | `EU AI Act · GDPR · NIST AI RMF · MAS TRM` | `#00e0ff` | Bottom-left |

### Export both videos
- Deliver page → Format: MP4, Codec: H.264, Quality: Restrict to 20,000 Kbps
- Export:
  - `seirios-ciso-edit.mp4`
  - `seirios-devops-edit.mp4`

---

## Step 8 — Compress in HandBrake

| Setting | Value |
|---|---|
| Codec | H.264 |
| Framerate | 30, Constant |
| RF | 24 |
| Dimensions | 1280×720 |
| Audio codec | AAC |
| Audio bitrate | 128 Kbps |

1. Open HandBrake → drag in `seirios-ciso-edit.mp4`
2. Apply settings above
3. Save As: **`seirios-ciso-demo.mp4`** → Start Encode
4. Repeat → **`seirios-devops-demo.mp4`**

**Target file size: 8–14MB per video**

Move both files to `assets/videos/` in the repo.

---

## Step 9 — Add videos to the website

In `for-ciso.html`, find the video placeholder and replace with:

```html
<video
  src="../assets/videos/seirios-ciso-demo.mp4"
  controls
  preload="none"
  style="width:100%; border-radius:8px; display:block;">
</video>
```

In `for-devops.html`:

```html
<video
  src="../assets/videos/seirios-devops-demo.mp4"
  controls
  preload="none"
  style="width:100%; border-radius:8px; display:block;">
</video>
```

Then deploy:
```bash
git add -A
git commit -m "add demo videos"
git push
```

---

## Time summary

| Task | Time |
|---|---|
| Logo intro recording | 15 min |
| Voiceover recording + cleanup | 10 min |
| Shell scripts + test | 20 min |
| Environment prep | 15 min |
| CISO screen recording | 30 min |
| DevSecOps screen recording | 30 min |
| DaVinci — CISO edit | 75 min |
| DaVinci — DevSecOps edit | 60 min |
| HandBrake + upload | 30 min |
| **Total** | **~4.5 hours** |

**Recommended:** split into two sessions.  
Session 1 (2 hours): Steps 1–6 — all recording.  
Session 2 (2.5 hours): Steps 7–9 — editing, compression, live.

---

## Re-recording a video

If you need to update either video in the future:
1. Re-record only the screen demo (Step 5 or 6) — the logo intro and voiceover can be reused
2. Re-import the new `main-*.mp4` into DaVinci and replace the clip on the timeline
3. Re-export → HandBrake → replace the file in `assets/videos/`
4. Push — Vercel deploys automatically
