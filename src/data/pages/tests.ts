import type { PageData } from '../types';

/** Priority pages: the homepage and the four main test pages. */
export const tests: PageData[] = [
  {
    slug: "",
    group: "test",
    tool: "mic",
    nav: "Mic test",
    blurb: "Check your mic with a live meter, playback and device details.",
    title: "Mic Test: Free Online Microphone Test | HearMyMic",
    description:
      "Test your mic in seconds. Watch a live level meter, record 5 seconds and play it back, or hear yourself live. Free, private, nothing to install.",
    h1: "Mic test",
    lede: "Check that your microphone works and hear how you sound. It’s free, takes a few seconds, and runs entirely in your browser.",
    introTitle: "A quick, private way to check your microphone",
    intro: [
      "HearMyMic answers two questions before your next call, stream or recording: is my microphone picking me up, and how do I sound? Press the button, allow access, and the meter moves as you speak. If it moves, your mic works.",
      "From there you can record a 5 second clip and play it back, switch on live monitoring to hear yourself in your headphones, or pick a different microphone if you have more than one. Everything is processed on your device. No audio is uploaded or stored anywhere.",
    ],
    stepsTitle: "How to test your mic",
    steps: [
      {
        title: "Press “Test my mic”",
        body: "Your browser asks whether this page can use your microphone. Choose Allow. If you don’t see a prompt, look for a mic or lock icon in the address bar.",
      },
      {
        title: "Speak and watch the meter",
        body: "Talk at your normal volume. The waveform and the level bar should react right away. A steady green level with a “Good” rating means you’re easy to hear.",
      },
      {
        title: "Record 5 seconds and listen",
        body: "Press Record, say a sentence or two, then press play. This is the closest thing to hearing yourself the way other people do.",
      },
      {
        title: "Fix anything that sounds off",
        body: "Too quiet, echoey or silent? The level rating and the “Your microphone” panel point to the cause, and the troubleshooting guides walk you through the fix, starting with [why your mic is not working](/fix/mic-not-working).",
      },
    ],
    guide: [
      {
        heading: "What you can do with HearMyMic",
        body: [
          "HearMyMic is a free microphone and webcam test that runs in your browser. It puts the checks people usually need in one place, so you don’t have to install an app or join a call just to find out whether you can be heard.",
          "- Live meter and waveform: shows your voice as you speak, so you can see at a glance whether the mic is picking you up.",
          "- Record and play back: captures 5 seconds so you can listen, which is the closest you can get to hearing what other people hear.",
          "- Hear yourself live: sends your mic to your headphones in real time, which is handy for placing a mic or checking for noise.",
          "- Device details: shows the microphone name, sample rate and channels, and whether echo cancellation, noise suppression and auto gain control are on.",
          "- Microphone picker: lets you switch between connected microphones without leaving the page.",
          "- Webcam check: the [webcam and mic test](/webcam-and-mic-test) page adds a live camera preview next to the level meter.",
        ],
      },
      {
        heading: "When a mic test is worth running",
        body: [
          "Run a test whenever something about your setup changes: a new headset, a new laptop, a browser update, or a system update that may have reset your privacy settings. It’s also worth a minute before anything important, such as a job interview, an online exam, a podcast recording or a stream.",
          "Gamers use it to confirm a headset works before joining voice chat, and students and teachers use it before online classes. If people have told you that you sound quiet, distant or robotic, a recording here helps you hear the problem yourself and decide whether it’s the microphone, the room or the app.",
        ],
      },
      {
        heading: "Which test fits your situation",
        body: [
          "The test above is the same on every page, but each page is written around a different job. If you want to judge your sound, use the mic test with playback. If you want to listen as you talk, try the hear yourself mic test. Before a video call, the webcam and mic test checks your picture and your audio together.",
          "If you’re preparing for a specific app, there are pages for [Zoom](/zoom-mic-test), [Discord](/discord-mic-test), [Microsoft Teams](/teams-mic-test) and [Google Meet](/google-meet-mic-test) that show where each app keeps its microphone settings. There are also device pages for [iPhone](/mic-test-iphone), [Android](/mic-test-android), [Mac](/mic-test-mac), [Windows 11](/mic-test-windows-11) and [Chromebook](/chromebook-mic-test). If something is already wrong, the troubleshooting guides cover a [mic that isn’t working](/fix/mic-not-working), is [too quiet](/fix/mic-too-quiet), is [blocked by permissions](/fix/mic-permission-blocked), or [echoes](/fix/mic-echo).",
        ],
      },
      {
        heading: "What the level rating means",
        body: [
          "The meter measures how strong the signal from your mic is, compared with the loudest signal your browser can capture. The rating turns that into plain words.",
          "- Quiet: your voice is reaching the mic, but only just. People may ask you to speak up. Move closer or raise the input volume in your system settings.",
          "- Good: a healthy level for calls and recordings, with room to spare when you laugh or raise your voice.",
          "- Loud: the signal is close to the maximum. Loud sounds may distort. Move back a little or lower the input volume.",
          "The rating is a guide, not a lab measurement. Automatic gain control, which many browsers switch on by default, constantly adjusts your level, so the number moves around a bit.",
        ],
      },
      {
        heading: "What the “Your microphone” panel shows",
        body: [
          "Once the test is running, the panel under the tool lists what your browser reports about the mic it opened: the device name, the sample rate, the number of channels, and whether echo cancellation, noise suppression and auto gain control are on.",
          "The device name is the most useful line. If it says “Webcam” when you expected your headset, you’ve found your problem. Choose the right microphone from the list that appears when more than one is connected.",
          "Estimated latency is the delay your browser reports between capturing sound and playing it. Some browsers don’t report it at all, in which case the panel says so.",
        ],
      },
      {
        heading: "Quick ways to get a better sound",
        body: [
          "A few small changes make a bigger difference than most upgrades. Test after each one so you can see which helps.",
          "- Distance: keep a headset boom or desk microphone close, about a hand’s width from your mouth. Halving the distance makes you much louder compared with the room.",
          "- Room: hard walls and bare floors add echo. Curtains, a rug or a few cushions soften it.",
          "- Noise: switch off fans and close windows if you can, and keep the mic away from the computer’s fan vents.",
          "- Headphones: wear them on calls so the other person’s voice doesn’t leak from your speakers back into your mic.",
          "- Level: speak normally and aim for a steady “Good”. If it’s off, adjust the input volume in your system sound settings.",
        ],
      },
      {
        heading: "Is it safe to allow microphone access?",
        body: [
          "Yes. The test runs as code inside your browser tab. Your audio goes from the mic to the meter on your screen and nowhere else. There’s no account, no upload and no server-side recording. The 5 second clip lives in your browser’s memory and is gone when you close or reload the page.",
          "You can take the permission back at any time from the lock or settings icon in your browser’s address bar.",
        ],
      },
      {
        heading: "What this test can’t tell you",
        body: [
          "HearMyMic measures what your browser can see. It can’t judge studio qualities such as frequency response, and it can’t look inside other apps, which add processing of their own. It also doesn’t test your speakers or your internet connection, so a call can still sound choppy with a perfectly good mic.",
          "If the test passes but an app still can’t hear you, check that app’s own input device setting and its microphone permission in your operating system.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do I know if my mic is working?",
        a: "Press “Test my mic”, allow access and speak. If the level meter and waveform move with your voice, your microphone is working. For a second check, record 5 seconds and play it back.",
      },
      {
        q: "Why is the meter not moving when I talk?",
        a: "The most common causes are a muted mic (check the switch on your headset or cable), the wrong microphone being selected, or the input volume being set to zero in your system sound settings. If the test doesn’t start at all, your browser is probably [blocking microphone access](/fix/mic-permission-blocked).",
      },
      {
        q: "Does HearMyMic record or save my voice?",
        a: "No. Your audio is processed in your browser and never sent to a server. The optional 5 second recording stays in your browser’s memory so you can play it back, and it’s discarded when you leave or reload the page.",
      },
      {
        q: "Do I need to install anything?",
        a: "No. The test works in current versions of Chrome, Edge, Firefox and Safari on computers, phones and tablets. There’s nothing to download and no sign-up.",
      },
      {
        q: "Can I test a headset, USB mic or AirPods?",
        a: "Yes. Any microphone your device recognizes will work, including built-in mics, wired and Bluetooth headsets, USB mics and audio interfaces. If you have more than one connected, a microphone menu appears so you can test each one.",
      },
      {
        q: "How accurate are the results?",
        a: "They’re a good practical check, not a calibrated measurement. The level, settings and latency come from what your browser reports, and apps like Zoom or Discord apply their own processing on top.",
      },
    ],
    related: [
      "is-my-mic-working",
      "hear-yourself-mic-test",
      "webcam-and-mic-test",
      "zoom-mic-test",
      "discord-mic-test",
      "fix/mic-not-working",
    ],
  },

  {
    slug: "online-mic-test",
    group: "test",
    tool: "mic",
    nav: "Online mic test",
    blurb: "Test any microphone in your browser. No download, no sign-up.",
    title: "Online Mic Test: Check Your Microphone in the Browser",
    description:
      "Run an online mic test without downloading anything. See your input level live, check which microphone your browser is using, and spot problems fast.",
    h1: "Online mic test",
    lede: "Test your microphone right here in the browser. No app, no account, no waiting.",
    introTitle: "Why test your mic online?",
    intro: [
      "An online mic test is the fastest way to separate a microphone problem from an app problem. If your mic works on this page, the hardware, the cable and your system settings are fine, and whatever went wrong is inside the app you were using. If it doesn’t work here either, you know to look at the mic itself, the connection or your permissions.",
      "Because it runs in the browser, the test works the same way on a Windows PC, a Mac, a Chromebook or a phone. It uses the same microphone access that web-based meeting tools rely on, so it’s a realistic check before any call you take in a browser tab.",
    ],
    stepsTitle: "How the online mic test works",
    steps: [
      {
        title: "Start the test and allow access",
        body: "Press “Test my mic”. Browsers only share your microphone with a page after you say yes, and only for this site.",
      },
      {
        title: "Confirm the right microphone is in use",
        body: "Look at the device name in the “Your microphone” panel. Laptops with a webcam, a headset and a built-in mic often pick a different one than you expect.",
      },
      {
        title: "Speak and read the level",
        body: "Count to ten at your usual speaking volume. Aim for a level that sits in the green and a rating of “Good”.",
      },
      {
        title: "Try your other microphones",
        body: "If more than one mic is connected, use the Microphone menu to switch between them and compare levels without leaving the page.",
      },
    ],
    guide: [
      {
        heading: "What a browser can and can’t tell you",
        body: [
          "A browser test is good at the basics: whether a microphone is connected, whether the site is allowed to use it, how strong the signal is, and which processing features are switched on. Those cover the large majority of “nobody can hear me” problems.",
          "It can’t measure studio qualities such as frequency response or self-noise in any exact way. Browsers also process the signal before a page ever sees it. Echo cancellation, noise suppression and auto gain control are usually on by default, which is ideal for calls but means the level you see has already been tidied up.",
        ],
      },
      {
        heading: "Reading sample rate and channels",
        body: [
          "Sample rate is how many times per second your audio is measured. Most devices report 44.1 or 48 kHz, and either one is more than enough for clear speech. Bluetooth headsets often drop to 16 kHz or lower while their microphone is in use, which is why voices sound thinner on them.",
          "Channels tells you whether the browser opened the mic in mono or stereo. One channel is normal and expected for voice.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is this online mic test free?",
        a: "Yes, completely. There are no limits, no trial and no account.",
      },
      {
        q: "Which browsers does it work in?",
        a: "Current versions of Chrome, Edge, Firefox, Safari, Brave and Samsung Internet all work. Browsers built into other apps, such as the ones that open links inside Instagram or Facebook, frequently block microphone access, so open the page in your regular browser instead.",
      },
      {
        q: "My mic works here but not in my meeting app. Why?",
        a: "That points to the app’s own settings. Open its audio settings and make sure the same microphone you saw here is selected, that you aren’t muted in the app, and that your operating system allows that app to use the microphone.",
      },
      {
        q: "Why does the test show a different mic than the one I plugged in?",
        a: "Browsers start with the system’s default input device. Pick your microphone from the Microphone menu in the tool, or change the default input in your system sound settings.",
      },
      {
        q: "Does the test work on a phone?",
        a: "Yes. It works in Safari on iPhone and iPad and in Chrome on Android. The steps are the same: tap the button, allow microphone access, and speak.",
      },
    ],
    related: [
      "",
      "mic-test-with-playback",
      "mic-test-windows-11",
      "mic-test-mac",
      "chromebook-mic-test",
      "fix/mic-permission-blocked",
    ],
  },

  {
    slug: "mic-test-with-playback",
    group: "test",
    tool: "mic",
    nav: "Mic test with playback",
    blurb: "Record 5 seconds and listen back to hear how you really sound.",
    title: "Mic Test With Playback: Record and Hear Yourself",
    description:
      "Record a 5 second clip and play it back to hear exactly how your microphone sounds. Free mic test with playback, right in your browser.",
    h1: "Mic test with playback",
    lede: "Record a short clip, then play it back. It’s the most honest way to find out how you sound to other people.",
    introTitle: "Hear what everyone else hears",
    intro: [
      "A moving level meter proves your microphone works. It doesn’t tell you whether you sound clear, muffled, distant or buzzy. Playback does. Record five seconds of normal speech, listen with headphones or speakers, and you’ll know in one pass whether your setup is ready.",
      "The recording is made and stored in your browser’s memory only. It isn’t uploaded, and it disappears when you close or reload the page.",
    ],
    stepsTitle: "How to record and play back your mic",
    steps: [
      {
        title: "Start the test",
        body: "Press “Test my mic” and allow microphone access. Check that the meter moves when you talk.",
      },
      {
        title: "Press “Record 5 seconds”",
        body: "A ring counts down while you speak. Use your normal voice and your normal distance from the mic, the way you would on a real call.",
      },
      {
        title: "Say something useful",
        body: "Try: “Testing, one, two, three. Peter picked a pack of pickled peppers. She sells seashells.” The P and S sounds reveal popping and harshness quickly.",
      },
      {
        title: "Press play and listen",
        body: "Listen once for volume and once for quality. Headphones make problems far easier to hear than laptop speakers.",
      },
      {
        title: "Adjust and record again",
        body: "Change one thing at a time, such as distance, input volume or a different microphone, then record again and compare.",
      },
    ],
    guide: [
      {
        heading: "What to listen for in your recording",
        body: [
          "- Volume: you should be easy to hear without turning your speakers up. If you’re faint, move closer or raise the input volume.",
          "- Distortion: crackling or a harsh, fuzzy edge on loud words means the signal is too hot. Lower the input volume or back away.",
          "- Room echo: a hollow, bathroom-like sound comes from hard walls and distance. Getting closer to the mic helps more than anything else.",
          "- Popping: thumps on P and B sounds are bursts of air hitting the mic. Angle the mic slightly to the side of your mouth.",
          "- Background noise: a steady hiss, hum or fan noise under your voice. Move away from the source, or leave noise suppression switched on.",
          "- Choppiness: words that cut in and out often point to a weak Bluetooth connection or aggressive noise suppression.",
        ],
      },
      {
        heading: "Why you sound different on a recording",
        body: [
          "Almost everyone is surprised by their recorded voice. When you speak, you hear yourself partly through the bones of your skull, which adds low frequencies that a microphone never picks up. The recording is closer to what other people hear, so judge it for clarity and volume, not for whether it matches the voice in your head.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long can I record?",
        a: "Each recording is 5 seconds, which is enough to judge volume and clarity. You can record again as many times as you like. Each new recording replaces the previous one.",
      },
      {
        q: "Where is my recording saved?",
        a: "Nowhere permanent. The clip is held in your browser’s memory for playback and is never uploaded. Closing or reloading the tab deletes it.",
      },
      {
        q: "Why can’t I hear anything when I press play?",
        a: "Check that your speakers or headphones aren’t muted and that the level meter moved while you were recording. If the meter stayed flat, the microphone wasn’t picking you up. On an iPhone, also turn up the media volume with the side buttons.",
      },
      {
        q: "Why does my recording sound quiet or muffled?",
        a: "Usually the mic is too far away, the input volume is low, or a different microphone is active, such as a laptop’s built-in mic instead of your headset. Check the device name in the “Your microphone” panel first.",
      },
      {
        q: "Will my recording sound the same on Zoom or Discord?",
        a: "Close, but not identical. Each app applies its own noise suppression and compression. A clean recording here is a strong sign that you’ll sound good there too.",
      },
    ],
    related: [
      "",
      "hear-yourself-mic-test",
      "online-mic-test",
      "fix/mic-too-quiet",
      "fix/mic-echo",
      "zoom-mic-test",
    ],
  },

  {
    slug: "hear-yourself-mic-test",
    group: "test",
    tool: "mic",
    nav: "Hear yourself mic test",
    blurb: "Listen to your own mic live through your headphones.",
    title: "Hear Yourself Mic Test: Hear My Own Voice Live",
    description:
      "Hear your own microphone in real time. Switch on live monitoring to check your sound, your headset and your levels as you speak. Free and private.",
    h1: "Hear yourself mic test",
    lede: "Switch on “Hear yourself live” to listen to your microphone in real time. Put on headphones first.",
    introTitle: "Live monitoring, right in your browser",
    intro: [
      "Sometimes you don’t want a recording. You want to hear your mic as you speak, so you can move it around, adjust the volume and notice problems the moment they happen. The “Hear yourself live” switch sends your microphone straight to your headphones while the test is running.",
      "It’s off by default for a good reason. If your mic can hear your speakers, the sound loops around and builds into a loud squeal. With headphones on, that loop can’t form.",
    ],
    stepsTitle: "How to hear yourself through your mic",
    steps: [
      {
        title: "Put on headphones",
        body: "Wired headphones or earbuds work best. They add the least delay and they keep your speakers from feeding back into the mic.",
      },
      {
        title: "Start the test",
        body: "Press “Test my mic” and allow microphone access. Make sure the level meter responds to your voice.",
      },
      {
        title: "Turn on “Hear yourself live”",
        body: "Flip the switch. You should hear your own voice in your headphones immediately. Start with your volume low and bring it up.",
      },
      {
        title: "Listen while you adjust",
        body: "Move the mic closer and farther, tap the desk, rustle some paper. You’ll hear exactly what the mic picks up as you change things.",
      },
      {
        title: "Switch it off when you’re done",
        body: "Flip the switch back or press Stop. Monitoring also ends as soon as you leave the page.",
      },
    ],
    guide: [
      {
        heading: "Why there’s a slight delay",
        body: [
          "Your voice has to travel from the mic, through your computer’s audio system, through the browser and back out to your headphones. That trip takes time, typically a few hundredths of a second on a wired setup. You’ll notice it as a faint doubling of your own voice.",
          "Bluetooth headphones add much more, often a fifth of a second or longer, because the audio is compressed and sent over the air in both directions. That’s normal and it isn’t a fault in your microphone. For the tightest monitoring, use wired headphones.",
          "The “Estimated latency” line in the panel shows the delay your browser reports. Treat it as a rough figure. Not every browser reports every part of the chain.",
        ],
      },
      {
        heading: "Live monitoring or playback: which one to use",
        body: [
          "Use live monitoring to position a mic, set your level, or check for hum and background noise as you move things around. Use the 5 second recording when you want to judge how you actually sound, because it’s hard to listen critically while you’re talking.",
          "If you’d like to hear your mic in your headphones all the time, including during games and calls, that’s a system or headset setting usually called sidetone or mic monitoring. Our guide on [hearing your mic in your headphones](/fix/hear-my-mic-in-headphones) covers it.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why should I use headphones for this test?",
        a: "Without them, your microphone picks up its own sound from your speakers, which is amplified and picked up again. That loop turns into a loud howl within a second or two. Headphones keep the sound out of the mic.",
      },
      {
        q: "I turned on “Hear yourself live” but hear nothing. What’s wrong?",
        a: "Check that the level meter is moving, that your headphone volume is up, and that sound is going to the output you’re wearing. On an iPhone, the silent switch can mute live monitoring, so switch it to ring and raise the volume.",
      },
      {
        q: "Why do I hear an echo of my own voice?",
        a: "That’s the monitoring delay. Your voice reaches your ears directly first and through the headphones a moment later. Wired headphones keep the gap small. Bluetooth makes it much more obvious.",
      },
      {
        q: "Is the delay I hear the same delay people hear on calls?",
        a: "No. Call delay depends on the internet connection between you and the other person. What you hear here is only the local loop through your own device.",
      },
      {
        q: "Can I keep hearing myself after I close this page?",
        a: "No. Monitoring stops when you stop the test or leave. To hear your mic all the time, use your operating system’s or your headset’s monitoring feature.",
      },
    ],
    related: [
      "fix/hear-my-mic-in-headphones",
      "mic-test-with-playback",
      "",
      "fix/mic-echo",
      "discord-mic-test",
      "online-mic-test",
    ],
  },

  {
    slug: "webcam-and-mic-test",
    group: "test",
    tool: "camera",
    nav: "Webcam and mic test",
    blurb: "Check your camera and microphone together before a video call.",
    title: "Webcam and Mic Test: Check Camera and Audio Online",
    description:
      "Test your webcam and microphone together. See a live camera preview next to your mic level, record a sound check, and get ready for your video call.",
    h1: "Webcam and mic test",
    lede: "See your camera and check your microphone at the same time, so you’re ready before the call starts.",
    introTitle: "One check for both camera and microphone",
    intro: [
      "Joining a video call and finding out your camera is black or your mic is silent is stressful, and it’s avoidable. This page opens your webcam and your microphone together, shows a live preview beside your audio level, and lets you record a quick sound check.",
      "The preview is mirrored, the way most meeting apps show you to yourself. Other people on a call see you the right way round. The video is shown on your screen only. It isn’t recorded, uploaded or stored.",
    ],
    stepsTitle: "How to test your webcam and mic together",
    steps: [
      {
        title: "Press “Test my camera and mic”",
        body: "Your browser asks for both the camera and the microphone. Allow both. Some browsers show one prompt, others ask twice.",
      },
      {
        title: "Check your picture",
        body: "Look at the preview for framing, focus and light. Your eyes should sit about a third of the way down the frame, with light on your face, not behind you.",
      },
      {
        title: "Check your sound",
        body: "Speak normally and watch the level meter beside the video. Then record 5 seconds and play it back to hear how you come across.",
      },
      {
        title: "Switch devices if you need to",
        body: "If you have more than one camera or microphone, menus appear so you can pick the ones you plan to use on the call.",
      },
    ],
    guide: [
      {
        heading: "Look better on camera in a minute",
        body: [
          "- Face the light. A window or lamp in front of you beats any camera upgrade. A bright window behind you turns you into a silhouette.",
          "- Raise the camera to eye level. A laptop on a stack of books is enough. Looking down into a camera is rarely flattering.",
          "- Clean the lens. A fingerprint on a laptop or phone camera makes the whole image hazy.",
          "- Check what’s behind you. The preview shows exactly what everyone else will see.",
        ],
      },
      {
        heading: "If the camera preview stays black",
        body: [
          "First look for a physical cover. Many laptops have a sliding shutter over the lens or a camera key on the keyboard, and an external webcam may have a lens cap.",
          "Next, close other apps that might be using the camera, such as Zoom, Teams, FaceTime or a camera app. On Windows in particular, only one app can use a webcam at a time.",
          "Finally, check permissions. Your browser needs camera access for this site, and your operating system needs to allow your browser to use the camera at all. If the mic part of the test works and the camera doesn’t, permissions are the usual reason.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is my video recorded or uploaded?",
        a: "No. The camera preview is drawn on your own screen and goes nowhere else. Nothing is recorded, saved or sent to a server. The camera turns off when you press Stop or leave the page.",
      },
      {
        q: "Why is my camera preview flipped?",
        a: "The preview is mirrored so that moving left looks like moving left, which feels natural. Meeting apps do the same thing. People on the other end of a call see you unmirrored.",
      },
      {
        q: "My mic works but the camera doesn’t. What should I check?",
        a: "Check for a lens cover or camera-off key, close other apps that may be holding the camera, and make sure both your browser and your operating system allow camera access. The mic test keeps working even when the camera can’t start.",
      },
      {
        q: "Can I test an external webcam?",
        a: "Yes. Plug it in, start the test, and choose it from the Camera menu. Many webcams also have their own microphone, which will show up in the Microphone menu.",
      },
      {
        q: "What resolution does the test use?",
        a: "The test asks your camera for a 720p picture and shows the resolution your browser actually delivered in the panel under the tool. Your meeting app may use a different resolution depending on your connection.",
      },
      {
        q: "Does this work on phones and tablets?",
        a: "Yes. On a phone the test uses the front camera and the built-in microphone, or your headset’s mic if one is connected.",
      },
    ],
    related: [
      "",
      "zoom-mic-test",
      "google-meet-mic-test",
      "teams-mic-test",
      "webcam-test",
      "fix/mic-permission-blocked",
    ],
  },

  {
    slug: "webcam-test",
    group: "test",
    tool: "camera",
    nav: "Webcam test",
    blurb: "See your camera live and check framing, light and sharpness.",
    title: "Webcam Test: Check Your Camera Online (Free, Private)",
    description:
      "Test your webcam online in one click. See a live preview, check resolution, framing and lighting, and switch cameras. Nothing is recorded or uploaded.",
    h1: "Webcam test",
    lede: "Press the button to see what your camera sees. The preview stays on your screen and nothing is recorded or uploaded.",
    introTitle: "Check your camera before anyone else sees it",
    intro: [
      "This webcam test opens your camera in the browser and shows a live preview, so you can check the picture before a meeting, a stream or an interview. It works with built-in laptop cameras, USB webcams, phone cameras and virtual cameras.",
      "The test also lights up a microphone level beside the video, because most video problems turn out to be a camera and a mic problem together. If you only care about the picture, you can ignore the meter.",
    ],
    stepsTitle: "How to test your webcam online",
    steps: [
      {
        title: "Press “Test my camera and mic”",
        body: "Your browser asks permission to use the camera. Choose Allow. If you also see a microphone prompt, allow it too, or ignore it if you only want to check the picture.",
      },
      {
        title: "Look at the preview",
        body: "You should see yourself within a second or two. The preview is mirrored, which is how most meeting apps show you to yourself. Other people see you the right way round.",
      },
      {
        title: "Check the resolution",
        body: "The panel under the tool shows the resolution your browser received. A modern webcam normally gives 720p or 1080p. A much smaller number can mean a low-quality camera or a USB port that’s too slow.",
      },
      {
        title: "Pick the right camera",
        body: "If you have more than one camera, a menu lets you switch. This is how you find out which one is the external webcam and which is the laptop’s own.",
      },
      {
        title: "Stop the test",
        body: "Press Stop, or leave the page. The camera light on your device should go off right away.",
      },
    ],
    guide: [
      {
        heading: "What a good webcam picture looks like",
        body: [
          "- Light: put a window or a lamp in front of you. Light from behind makes you a silhouette, whatever the camera costs.",
          "- Height: the lens should be at about eye level. Raise a laptop on a few books.",
          "- Distance: sit about an arm’s length away, with your head and shoulders in frame.",
          "- Sharpness: wipe the lens with a soft cloth. A fingerprint is the most common reason a camera looks blurry.",
          "- Background: the preview shows exactly what everyone else will see behind you.",
        ],
      },
      {
        heading: "If you only see a black picture",
        body: [
          "Look for a physical cover first. Many laptops have a sliding shutter, a camera-off key on the keyboard, or a lens cap on an external webcam.",
          "Then close anything else that could be using the camera: Zoom, Teams, FaceTime, OBS or a camera app. On Windows, only one app can use a webcam at a time.",
          "Finally, check permissions. Your browser needs camera access for this site, and your operating system has to allow your browser to use the camera at all.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is my webcam test private?",
        a: "Yes. The video is drawn on your own screen and goes nowhere else. Nothing is recorded, saved or sent to a server. The camera turns off when you press Stop or leave the page.",
      },
      {
        q: "Why is my webcam not working in the test?",
        a: "The usual causes are a lens cover or camera-off key, another app already using the camera, or blocked permissions. Close other camera apps, check your browser’s site permissions, and check your operating system’s camera privacy settings.",
      },
      {
        q: "Why does the picture look mirrored?",
        a: "The preview is flipped like a mirror so that moving left looks like moving left. People on a video call see you the normal way round.",
      },
      {
        q: "How do I test an external webcam?",
        a: "Plug it in, start the test and choose it from the Camera menu. If it doesn’t appear, try a different USB port and check that it isn’t in use by another app.",
      },
      {
        q: "Can I test my phone’s camera?",
        a: "Yes. Open this page in your phone’s browser. It uses the front camera, and you can usually switch to the rear one from the Camera menu.",
      },
      {
        q: "What resolution is my webcam?",
        a: "The panel below the tool shows the resolution your browser received from the camera. The test asks for 720p, so a camera that can do more may still show 720p here. Meeting apps choose their own resolution.",
      },
    ],
    related: [
      "webcam-and-mic-test",
      "",
      "zoom-mic-test",
      "google-meet-mic-test",
      "teams-mic-test",
      "fix/mic-permission-blocked",
    ],
  },

  {
    slug: "is-my-mic-working",
    group: "test",
    tool: "mic",
    nav: "Is my mic working?",
    blurb: "A one-click check that tells you if your microphone is on and picking you up.",
    title: "Is My Mic Working? Check If Your Microphone Is On",
    description:
      "Find out in seconds if your mic is on and working. Speak and watch the level meter, then follow the quick fixes if nothing moves. Free, in your browser.",
    h1: "Is my mic working?",
    lede: "Press the button and say a few words. If the meter moves, your mic is on and working.",
    introTitle: "A quick yes-or-no answer",
    intro: [
      "Press “Test my mic”, allow microphone access and talk. The level meter moves with your voice. If it does, your microphone is on and your computer or phone is hearing it. If it stays flat, the page tells you where to look next.",
      "Seeing the meter move only proves your device can hear the mic. It doesn’t prove an app like Zoom or Discord is listening to the same one. The quick checks below cover that too.",
    ],
    stepsTitle: "How to check if your mic is on",
    steps: [
      {
        title: "Start the test and speak",
        body: "Press “Test my mic”, choose Allow when the browser asks, and say a sentence at your normal volume.",
      },
      {
        title: "Watch the level meter",
        body: "The meter should rise and fall with your voice and reach about the middle to upper range when you speak. A flat meter means no sound is arriving.",
      },
      {
        title: "Record and play back",
        body: "Record 5 seconds and play it back. If you can hear yourself clearly, your mic works and it’s picking up what you expect.",
      },
      {
        title: "Check the mute controls if it’s flat",
        body: "Look for a mute switch or button on your headset, a mic-off key on a laptop, and a muted mic in your system’s sound settings.",
      },
      {
        title: "Check you’re using the right microphone",
        body: "If you have several, a Microphone menu appears. Choose the one you’re actually speaking into, such as your headset, then try again.",
      },
    ],
    faqs: [
      {
        q: "How can I tell if my mic is on?",
        a: "Start the test and talk. If the level meter moves, the mic is on and your device is receiving sound. Some headsets also have a light or a physical switch, but the meter is the most reliable check.",
      },
      {
        q: "The meter doesn’t move. What now?",
        a: "Check the mute switch on your headset and any mic-off key on your laptop. Then make sure the right microphone is selected in the menu, and that your browser and operating system allow microphone access.",
      },
      {
        q: "My mic works here but people can’t hear me in my call app.",
        a: "The app is probably using a different microphone, or it has no permission. Open the app’s audio settings, choose the microphone that worked here, and check the operating system’s microphone privacy settings for that app.",
      },
      {
        q: "Why does the browser keep asking for permission?",
        a: "Browsers ask once per site and can remember the choice if you allow it. If it asks every time, your privacy settings may be clearing site permissions when you close the browser.",
      },
      {
        q: "Can this test record me?",
        a: "Only for the 5 second playback, and only on your own device. Nothing is uploaded or stored anywhere, and the recording is gone when you leave the page.",
      },
    ],
    related: [
      "fix/mic-not-working",
      "online-mic-test",
      "mic-test-with-playback",
      "fix/mic-too-quiet",
      "fix/mic-permission-blocked",
      "",
    ],
  },
];
