import type { PageData } from '../types';

/** Secondary pages: one per meeting app and per device type. */
export const platforms: PageData[] = [
  {
    slug: "zoom-mic-test",
    group: "platform",
    tool: "mic",
    nav: "Zoom mic test",
    blurb: "Check your mic before a Zoom meeting, then match Zoom’s settings.",
    title: "Zoom Mic Test: Test Your Mic Before a Zoom Meeting",
    description:
      "Test your microphone before you join Zoom. Confirm your mic works here, then use Zoom’s own Test Mic and audio settings so you’re heard clearly.",
    h1: "Zoom mic test",
    lede: "Make sure your microphone works before your Zoom meeting starts, without opening Zoom or joining a call.",
    introTitle: "Test first, then set up Zoom",
    intro: [
      "The quickest Zoom mic check has two parts. First, confirm here that your microphone works at all and note its name in the “Your microphone” panel. Second, make sure Zoom is set to use that same microphone. Most “they can’t hear me on Zoom” problems are Zoom listening to a different device than the one you’re talking into.",
      "Zoom has its own test too. In the desktop app, open Settings, choose Audio, and press Test Mic. It records a few seconds and plays them back through the speaker you’ve selected.",
    ],
    stepsTitle: "How to test your mic for Zoom",
    steps: [
      {
        title: "Run the test on this page",
        body: "Press “Test my mic”, speak, and check that the meter moves. Write down or remember the microphone name shown in the panel.",
      },
      {
        title: "Open Zoom’s audio settings",
        body: "In the Zoom desktop app, click your profile picture, then Settings, then Audio. In a meeting, click the arrow next to the Mute button and choose Audio Settings.",
      },
      {
        title: "Select the same microphone",
        body: "Under Microphone, pick the device that worked here. “Same as System” follows your computer’s default, which can change when you plug in a headset.",
      },
      {
        title: "Use Zoom’s Test Mic",
        body: "Press Test Mic, speak, and listen to the playback. Leave “Automatically adjust microphone volume” on unless you have a reason to set the level by hand.",
      },
      {
        title: "Join a test meeting if you want to be sure",
        body: "Go to zoom.us/test to join a private practice meeting. Zoom walks you through a speaker check and a microphone check before anyone else can hear you.",
      },
    ],
    faqs: [
      {
        q: "My mic works here but not in Zoom. Why?",
        a: "Zoom is almost certainly using a different microphone, or it doesn’t have permission. Pick the right device in Settings, then Audio. On a Mac, also open System Settings, Privacy & Security, Microphone, and make sure Zoom is switched on. On Windows, check Settings, Privacy & security, Microphone.",
      },
      {
        q: "My Zoom mic test works but people can’t hear me in the call. What now?",
        a: "The test only proves the mic works. In the call, click the arrow next to Mute and check the microphone and that you’re not muted. Then check you joined with computer audio and that Zoom has microphone permission in your system’s privacy settings. A different mic in the call than in the test is the most common reason.",
      },
      {
        q: "Why do I see “Join Audio” instead of a Mute button in Zoom?",
        a: "You’ve joined the meeting without connecting audio, so nobody can hear you and you can’t hear them. Click Join Audio, then choose Join with Computer Audio.",
      },
      {
        q: "People say I sound choppy or robotic on Zoom. Is that my mic?",
        a: "Record a 5 second clip here. If the playback is clean, your microphone is fine and the problem is your internet connection or Zoom’s noise suppression. In Zoom’s Audio settings, try setting background noise suppression to Low.",
      },
      {
        q: "Can I use this test for Zoom in a browser?",
        a: "Yes, and it’s an especially close match. Zoom’s web client uses the same browser microphone access as this page. Remember that permission is granted per site, so you’ll still need to allow the microphone for Zoom’s site.",
      },
      {
        q: "What is “Original sound” in Zoom?",
        a: "It’s an option that turns off most of Zoom’s audio processing. It’s meant for music or professional microphones in quiet rooms. For everyday calls, leave it off so Zoom can remove echo and background noise.",
      },
    ],
    related: ["webcam-and-mic-test", "teams-mic-test", "google-meet-mic-test", "", "fix/mic-echo", "fix/mic-too-quiet"],
  },

  {
    slug: "discord-mic-test",
    group: "platform",
    tool: "mic",
    nav: "Discord mic test",
    blurb: "Find out whether a mic problem is your hardware or your Discord settings.",
    title: "Discord Mic Test: Check Your Mic and Voice Settings",
    description:
      "Test your mic for Discord. Confirm your microphone works here, then fix Discord’s input device, input sensitivity and push to talk settings.",
    h1: "Discord mic test",
    lede: "Friends can’t hear you in voice chat? Check your mic here first, then fix the Discord setting that’s getting in the way.",
    introTitle: "Is it your mic or is it Discord?",
    intro: [
      "Discord adds several layers between your microphone and your friends: an input device setting, an input sensitivity gate, optional push to talk, and noise suppression. Any one of them can silence a perfectly good mic. Testing here takes Discord out of the picture. If the meter moves on this page, your hardware is fine and the fix is in Discord’s Voice & Video settings.",
      "Discord also has a built-in check. Open User Settings, go to Voice & Video, and press Let’s Check under Mic Test. Discord plays your voice back to you until you stop it.",
    ],
    stepsTitle: "How to test your mic for Discord",
    steps: [
      {
        title: "Test your mic on this page",
        body: "Press “Test my mic” and speak. Note the microphone name in the panel. If nothing moves here, the problem isn’t Discord.",
      },
      {
        title: "Set Discord’s input device",
        body: "In Discord, click the gear icon next to your username, then Voice & Video. Set Input Device to the microphone that worked here. “Default” can point to the wrong one.",
      },
      {
        title: "Check input sensitivity",
        body: "With Voice Activity selected, turn on automatic input sensitivity, or drag the slider so that your normal speaking voice lands in the green part of the bar.",
      },
      {
        title: "Run Discord’s Mic Test",
        body: "Press Let’s Check and talk. If you can hear yourself, your friends will be able to as well.",
      },
    ],
    faqs: [
      {
        q: "My mic works here but nobody hears me on Discord. What should I check?",
        a: "Check four things in order: the Input Device in Voice & Video, whether you’re muted or server muted (a red slash on the mic icon), whether Push to Talk is on without a key assigned, and whether input sensitivity is set so high that your voice never opens the gate. Our [Discord mic not working](/fix/discord-mic-not-working) guide has every fix in order.",
      },
      {
        q: "Why does Discord cut off the start or end of my words?",
        a: "The input sensitivity threshold is too high, so quiet syllables don’t count as speech. Lower the slider or switch on automatic sensitivity. If you use Krisp noise suppression, try turning it off to compare.",
      },
      {
        q: "Does this test work for Discord in a browser?",
        a: "Yes. Discord in a browser uses the same microphone access as this page. You’ll need to allow the microphone separately for Discord’s site, because browsers grant permission one site at a time.",
      },
      {
        q: "Why is my mic so quiet on Discord?",
        a: "Raise Input Volume in Voice & Video and check the microphone level in your system sound settings. Also check that Automatic Gain Control is switched on in Discord’s voice processing options. Record a clip here to confirm whether the mic itself is quiet.",
      },
      {
        q: "Why do my friends hear my game or my speakers through my mic?",
        a: "Your microphone is picking up your speakers. Use headphones, keep Echo Cancellation on in Discord, and make sure Input Device isn’t set to a “Stereo Mix” or loopback device, which sends all of your computer’s sound.",
      },
    ],
    related: ["fix/discord-mic-not-working", "hear-yourself-mic-test", "mic-test-windows-11", "", "fix/mic-too-quiet", "fix/mic-echo"],
  },

  {
    slug: "teams-mic-test",
    group: "platform",
    tool: "mic",
    nav: "Teams mic test",
    blurb: "Check your mic before a Microsoft Teams meeting or test call.",
    title: "Test Mic on Teams: Microsoft Teams Mic Test",
    description:
      "Test your microphone before a Microsoft Teams meeting. Check your mic here, then use the Teams test call and device settings to make sure you’re heard.",
    h1: "Microsoft Teams mic test",
    lede: "Check your microphone before your next Teams meeting, without having to call a colleague to ask “can you hear me?”",
    introTitle: "A quick check before you join",
    intro: [
      "Teams lets you choose your devices on the pre-join screen, but it doesn’t tell you much about how you sound. Run the test on this page to confirm your mic works and to hear a recording of yourself. Then make sure Teams is pointed at the same microphone.",
      "The Teams desktop app also has a test call. Open Settings and more (the three dots next to your profile picture), choose Settings, then Devices, and select Make a test call. A bot asks you to record a short message and plays it back. The test call may not be available if you use Teams in a web browser, which is one more reason a browser test like this one is handy.",
    ],
    stepsTitle: "How to test your mic for Teams",
    steps: [
      {
        title: "Test your mic here",
        body: "Press “Test my mic”, speak, and record 5 seconds to hear yourself. Note the microphone name shown in the panel.",
      },
      {
        title: "Open Teams device settings",
        body: "In Teams, select the three dots next to your profile picture, then Settings, then Devices. Under Microphone, choose the device that worked here.",
      },
      {
        title: "Make a test call",
        body: "Select Make a test call, follow the prompt to record a message, and listen to the playback. Teams shows a summary of the devices it used.",
      },
      {
        title: "Check the pre-join screen",
        body: "Before each meeting, Teams shows your audio choice. Make sure Computer audio is selected and the mic toggle is on. A headset plugged in after Teams started may not be selected automatically.",
      },
    ],
    faqs: [
      {
        q: "My mic works here but not in Teams. What’s wrong?",
        a: "Teams is either using another device or is blocked by your system. Choose the right microphone under Settings, then Devices. On Windows 11, open Settings, Privacy & security, Microphone, and make sure desktop apps are allowed to use it. On a Mac, enable Microsoft Teams under System Settings, Privacy & Security, Microphone.",
      },
      {
        q: "Why is my mic button greyed out in a Teams meeting?",
        a: "The meeting organizer has probably disabled microphones for attendees, which is common in large meetings and webinars. Raise your hand and ask to be allowed to unmute. It can also happen if Teams has no microphone permission at all.",
      },
      {
        q: "Can I test my mic for Teams in a browser?",
        a: "Yes. Teams on the web uses your browser’s microphone access, the same as this page. Allow the microphone for the Teams site when your browser asks, and check the device on the pre-join screen.",
      },
      {
        q: "Colleagues say there’s background noise on my Teams calls. Can I fix it?",
        a: "In Teams, go to Settings, then Devices, and set Noise suppression to High. Record a clip on this page to hear what your room sounds like through your mic before and after you move away from the noise.",
      },
      {
        q: "How do I mute my mic quickly on Windows 11?",
        a: "Press Ctrl + Shift + M in Teams. Windows 11 also supports Windows key + Alt + K as a system-wide mute in apps that support it, including Teams.",
      },
    ],
    related: ["webcam-and-mic-test", "mic-test-windows-11", "zoom-mic-test", "google-meet-mic-test", "", "fix/mic-not-working"],
  },

  {
    slug: "google-meet-mic-test",
    group: "platform",
    tool: "mic",
    nav: "Google Meet mic test",
    blurb: "Meet runs in your browser, so this test is a near-perfect preview.",
    title: "Google Meet Test: Mic Test Before Your Meeting",
    description:
      "Test your microphone for Google Meet. Meet runs in your browser just like this test, so you can check your mic, permissions and sound before you join.",
    h1: "Google Meet mic test",
    lede: "Google Meet runs in your browser, just like this test. If your mic works here, you’re most of the way to working in Meet.",
    introTitle: "The closest test to the real thing",
    intro: [
      "Google Meet doesn’t use a separate app on a computer. It uses your browser’s microphone access, exactly as this page does. That makes a browser mic test an unusually realistic preview: same browser, same microphone, same system settings.",
      "One thing doesn’t carry over. Browsers grant microphone permission one site at a time, so allowing it here doesn’t allow it for meet.google.com. The first time you join a meeting, Meet asks for its own permission. Choose Allow.",
    ],
    stepsTitle: "How to test your mic for Google Meet",
    steps: [
      {
        title: "Test in the browser you’ll use for Meet",
        body: "Open this page in the same browser you join meetings with, press “Test my mic”, and check that the meter moves.",
      },
      {
        title: "Record and listen",
        body: "Record 5 seconds and play it back. This is very close to what people in your meeting will hear.",
      },
      {
        title: "Open your meeting link early",
        body: "On Meet’s waiting screen, allow the microphone when asked. The mic button should show a moving indicator when you speak.",
      },
      {
        title: "Match the microphone in Meet",
        body: "Click the three dots, then Settings, then Audio, and pick the same microphone that worked here. Meet’s waiting screen also offers a short audio and video check that records you and plays it back.",
      },
    ],
    faqs: [
      {
        q: "My mic works here but Meet says it’s blocked. Why?",
        a: "Meet has been denied permission in the past, and your browser remembered. Click the icon at the left of the address bar on meet.google.com, set Microphone to Allow, and reload the page.",
      },
      {
        q: "Meet says “Your mic is muted by your system settings”. What does that mean?",
        a: "Your operating system or your hardware has muted the microphone before the sound reaches the browser. Check the mute button on your headset or keyboard, and the input volume in your system sound settings. If this test also shows a flat meter, that confirms it.",
      },
      {
        q: "Why can’t I unmute in a Google Meet call?",
        a: "The host may have locked audio for participants. In meetings run by a school or company, the host can stop everyone from unmuting. Ask in the chat to be unmuted.",
      },
      {
        q: "Does Meet change how my mic sounds?",
        a: "Yes, a little. Meet applies echo cancellation and, on many accounts, noise cancellation. If people say your voice cuts out when there’s background sound, try turning noise cancellation off under Settings, then Audio.",
      },
      {
        q: "Will this test help with the Meet app on my phone?",
        a: "Partly. The Meet mobile app uses app permissions, not browser permissions. This test still confirms that your phone’s microphone works. If it does, check that the Meet app is allowed to use the microphone in your phone’s settings.",
      },
    ],
    related: ["webcam-and-mic-test", "chromebook-mic-test", "zoom-mic-test", "teams-mic-test", "", "fix/mic-permission-blocked"],
  },

  {
    slug: "mic-test-iphone",
    group: "device",
    tool: "mic",
    nav: "iPhone mic test",
    blurb: "Test your iPhone’s microphone in Safari, with playback.",
    title: "iPhone Mic Test: Check Your Microphone in Safari",
    description:
      "Test your iPhone microphone online. Run a quick mic check in Safari, record and play back your voice, and fix permission or muffled sound problems.",
    h1: "iPhone mic test",
    lede: "Check your iPhone’s microphone in Safari. Tap the button, allow access, and talk.",
    introTitle: "Test your iPhone microphone in the browser",
    intro: [
      "If people say you sound muffled on calls, or voice messages come out silent, a quick test tells you whether your iPhone’s microphone is the problem. This page works in Safari and in other iPhone browsers with nothing to install.",
      "An iPhone has more than one microphone: one at the bottom next to the charging port, one at the front near the earpiece, and one at the back by the camera. A browser test usually uses the bottom one, which is the mic that matters for regular phone calls and voice messages.",
    ],
    stepsTitle: "How to test the mic on your iPhone",
    steps: [
      {
        title: "Open this page in Safari",
        body: "If you arrived here from inside another app, tap the share or menu icon and choose Open in Safari. In-app browsers often can’t use the microphone.",
      },
      {
        title: "Tap “Test my mic” and allow access",
        body: "Safari asks whether hearmymic.com can use your microphone. Tap Allow. An orange dot at the top of the screen shows the mic is on.",
      },
      {
        title: "Speak toward the bottom of the phone",
        body: "Hold the phone as you would for a speakerphone call and talk. The meter should move with your voice.",
      },
      {
        title: "Record 5 seconds and play it back",
        body: "Turn the volume up with the side buttons and press play. Clear, full sound means your microphone is healthy.",
      },
    ],
    faqs: [
      {
        q: "How do I allow microphone access in Safari on iPhone?",
        a: "Tap the page menu icon in the address bar, choose Website Settings, and set Microphone to Allow. You can also open the Settings app, find Safari under Apps, and tap Microphone to change the default for all sites.",
      },
      {
        q: "The test works in Safari but not in Chrome on my iPhone. Why?",
        a: "Chrome needs its own permission from iOS. Open Settings, go to Privacy & Security, tap Microphone, and switch on Chrome. Then reload this page in Chrome.",
      },
      {
        q: "Why does my iPhone mic sound muffled?",
        a: "The tiny microphone openings are easy to block. Take the phone out of its case, check that a screen protector isn’t covering the front mic, and gently clear lint from the holes at the bottom with a dry, soft brush. Then record again and compare.",
      },
      {
        q: "I can’t hear “Hear yourself live” on my iPhone. Is it broken?",
        a: "Probably not. With the Ring/Silent switch set to silent, an iPhone can mute this kind of web audio. Switch to ring, raise the volume, and use wired or Bluetooth headphones so you don’t get feedback.",
      },
      {
        q: "Which mic does the test use when AirPods are connected?",
        a: "Your iPhone normally switches to the AirPods’ microphone. The device name in the “Your microphone” panel tells you which one is active. To test the phone’s own mic, disconnect the AirPods or put them back in their case.",
      },
    ],
    related: ["mic-test-android", "mic-test-mac", "mic-test-with-playback", "", "fix/mic-permission-blocked", "fix/mic-too-quiet"],
  },

  {
    slug: "mic-test-android",
    group: "device",
    tool: "mic",
    nav: "Android mic test",
    blurb: "Test your Android phone’s microphone in Chrome, with playback.",
    title: "Android Mic Test: Check Your Phone’s Microphone Online",
    description:
      "Test the microphone on your Android phone or tablet. Run a mic check in Chrome, play back a recording, and fix blocked permissions or low volume.",
    h1: "Android mic test",
    lede: "Check the microphone on your Android phone or tablet in Chrome. No app to install.",
    introTitle: "Test your Android microphone in the browser",
    intro: [
      "Whether you have a Samsung Galaxy, a Google Pixel or any other Android phone, this test shows in a few seconds whether the microphone is picking up your voice. It runs in Chrome, Samsung Internet, Firefox and other current Android browsers.",
      "Android has two layers of microphone permission, and both have to say yes: the site needs permission inside the browser, and the browser app needs permission from Android. If the test won’t start, one of those two is switched off.",
    ],
    stepsTitle: "How to test the mic on your Android phone",
    steps: [
      {
        title: "Open this page in Chrome",
        body: "If a link opened this page inside another app, tap the three dots and choose Open in Chrome.",
      },
      {
        title: "Tap “Test my mic” and allow access",
        body: "Choose Allow or “While using the app” when asked. A green indicator in the top corner of the screen shows the microphone is in use.",
      },
      {
        title: "Speak into the bottom of the phone",
        body: "The main microphone is a small hole on the bottom edge, near the charging port. Talk normally and watch the meter.",
      },
      {
        title: "Record and play it back",
        body: "Press “Record 5 seconds”, then play the clip with your media volume turned up.",
      },
    ],
    faqs: [
      {
        q: "How do I unblock the microphone in Chrome on Android?",
        a: "Tap the icon at the left of the address bar, tap Permissions, and set Microphone to Allow. If the option isn’t there, open Android Settings, go to Apps, choose Chrome, tap Permissions, and allow Microphone.",
      },
      {
        q: "Everything is allowed but the meter is still flat. What else can block it?",
        a: "On Android 12 and newer there’s a system-wide switch. Swipe down twice from the top of the screen to open Quick Settings and look for a “Mic access” tile. If it shows as blocked, tap it to turn microphone access back on for all apps.",
      },
      {
        q: "Why does my Android mic sound quiet or muffled?",
        a: "A case or a finger covering the mic hole is the most common reason, followed by lint in the opening. Remove the case and test again. If a Bluetooth headset or earbuds are connected, your phone may be using their microphone instead of its own.",
      },
      {
        q: "Does it matter which browser I use?",
        a: "Not much. Chrome, Samsung Internet, Firefox, Edge and Brave all support the test. Each browser has its own microphone permission, so you may be asked again when you switch.",
      },
      {
        q: "People can’t hear me on phone calls but this test works. Why?",
        a: "Then the microphone hardware is fine. Check that you aren’t muted in the call screen, turn Bluetooth off in case the call is routed to a headset in another room, and restart the phone. If only one app has the problem, check that app’s microphone permission.",
      },
    ],
    related: ["mic-test-iphone", "chromebook-mic-test", "mic-test-with-playback", "", "fix/mic-permission-blocked", "fix/mic-not-working"],
  },

  {
    slug: "mic-test-mac",
    group: "device",
    tool: "mic",
    nav: "Mac mic test",
    blurb: "Test your MacBook or Mac microphone and check macOS settings.",
    title: "Mac Mic Test: Check Your MacBook Microphone Online",
    description:
      "Test the microphone on your Mac or MacBook. Run a mic check in Safari or Chrome, then fix macOS input volume and microphone privacy settings.",
    h1: "Mac mic test",
    lede: "Check the microphone on your MacBook, iMac or Mac mini, in Safari, Chrome or any other browser.",
    introTitle: "Test your Mac’s microphone in seconds",
    intro: [
      "MacBooks and iMacs have good built-in microphones, so when one goes quiet the cause is nearly always a setting. This test shows whether macOS is passing sound to your browser, which microphone is active, and how you sound on a recording.",
      "macOS guards the microphone at two levels. The website needs permission in your browser, and the browser itself needs permission from macOS under Privacy & Security. Safari is allowed by default. Chrome, Edge and Firefox each ask the first time they need the mic.",
    ],
    stepsTitle: "How to test the mic on a Mac",
    steps: [
      {
        title: "Press “Test my mic” and allow access",
        body: "Click Allow in the browser prompt. If macOS also asks whether your browser may use the microphone, allow that too. An orange dot appears in the menu bar while the mic is on.",
      },
      {
        title: "Check which microphone is active",
        body: "The panel shows the device name, for example “MacBook Pro Microphone”. If you have a headset or display with a mic, use the Microphone menu to switch.",
      },
      {
        title: "Set the input volume",
        body: "Open System Settings, click Sound, then Input. Select your microphone and drag Input volume until normal speech fills about two thirds of the input level bar.",
      },
      {
        title: "Record and play back",
        body: "Record 5 seconds here and listen. Adjust the input volume and try again until the rating reads “Good”.",
      },
    ],
    faqs: [
      {
        q: "How do I allow my browser to use the microphone on a Mac?",
        a: "Open System Settings, click Privacy & Security, then Microphone, and turn on the switch next to your browser. macOS asks you to quit and reopen the browser before the change takes effect.",
      },
      {
        q: "Where is the microphone setting in Safari?",
        a: "In the menu bar choose Safari, then Settings, then Websites, and click Microphone in the sidebar. Set hearmymic.com to Allow or Ask. You can also choose Safari, then Settings for This Website while the page is open.",
      },
      {
        q: "Why doesn’t my MacBook microphone work with the lid closed?",
        a: "It’s a privacy feature. Recent MacBooks disconnect the built-in microphone in hardware whenever the lid is closed. If you use your MacBook closed with an external display, you need an external microphone, a headset, or a display or webcam with its own mic.",
      },
      {
        q: "Why do my AirPods sound worse on my Mac during a mic test?",
        a: "When the AirPods’ microphone is in use, Bluetooth switches to a lower quality mode that carries sound in both directions. For better sound, set the Mac’s built-in microphone as the input in System Settings, Sound, Input, and keep the AirPods for listening.",
      },
      {
        q: "Where is the microphone on a Mac?",
        a: "On MacBooks the microphones are behind small openings near the keyboard or speaker grilles, depending on the model. On an iMac they’re built into the display housing near the camera. A Mac mini, Mac Studio and Mac Pro have no built-in microphone at all.",
      },
    ],
    related: ["mic-test-windows-11", "mic-test-iphone", "zoom-mic-test", "", "fix/mic-permission-blocked", "fix/mic-too-quiet"],
  },

  {
    slug: "mic-test-windows-11",
    group: "device",
    tool: "mic",
    nav: "Windows 11 mic test",
    blurb: "Test your mic on Windows 11 and fix sound and privacy settings.",
    title: "How to Test Microphone on Windows 11 (Free Mic Test)",
    description:
      "How to test your microphone on Windows 11. Run a free mic test in your browser, use the built-in Windows test, then fix input, volume and privacy settings.",
    h1: "How to test your microphone on Windows 11",
    lede: "Check your microphone on a Windows 11 PC or laptop, and find the setting to change if it isn’t working.",
    introTitle: "Test your mic on Windows 11",
    intro: [
      "Windows 11 spreads microphone settings across a few screens: one for privacy, one for choosing the input device, and one for volume. This test shows you right away whether sound is reaching your browser. If it isn’t, the steps and answers below point to the exact screen to open.",
      "Windows has its own basic check as well. Go to Settings, System, Sound, click your microphone under Input, and press Start test. Windows reports the level it heard as a percentage. It doesn’t let you listen back, so use the 5 second recording here for that.",
    ],
    stepsTitle: "How to test your mic on Windows 11",
    steps: [
      {
        title: "Press “Test my mic” and allow access",
        body: "Click Allow in your browser. Speak and watch the meter. Check the microphone name shown in the panel.",
      },
      {
        title: "Choose the right input device",
        body: "Right-click the speaker icon in the taskbar and choose Sound settings. Under Input, select the microphone you want to use.",
      },
      {
        title: "Set the input volume",
        body: "Click the microphone under Input to open its properties, then set Input volume to around 80 to 100. Press Start test to see the level Windows detects.",
      },
      {
        title: "Check the privacy switches",
        body: "Open Settings, Privacy & security, Microphone. Turn on Microphone access, “Let apps access your microphone” and “Let desktop apps access your microphone”. Browsers count as desktop apps.",
      },
      {
        title: "Record and listen",
        body: "Come back to this page, record 5 seconds and play it back to confirm you sound clear.",
      },
    ],
    faqs: [
      {
        q: "Why doesn’t Windows 11 detect my microphone?",
        a: "Check the connection first. A 3.5 mm mic belongs in the pink or mic-labelled jack, and a single-plug headset needs a combined headset jack. Then open Settings, System, Sound, scroll to All sound devices, and make sure the microphone isn’t disabled. Reconnecting a USB mic to a different port often helps.",
      },
      {
        q: "How do I make my microphone louder in Windows 11?",
        a: "Raise Input volume in Settings, System, Sound, under your microphone’s properties. For more, open More sound settings, go to the Recording tab, double-click your mic, and look for Microphone Boost on the Levels tab. Not every device offers a boost.",
      },
      {
        q: "My laptop has a mic mute key. Could that be the problem?",
        a: "Yes. Many laptops have a microphone mute key on the function row, often with a small light. When it’s on, every app receives silence, and this test shows a flat meter even though everything else looks right.",
      },
      {
        q: "The mic works here but not in a game or app. What should I check?",
        a: "Open that app’s own audio settings and select the same microphone. Then check Settings, Privacy & security, Microphone, where Windows lists apps and whether they’re allowed. Some apps also need the mic set as the default device in Sound settings.",
      },
      {
        q: "Should I update my audio driver?",
        a: "Only if the simpler checks fail. Open Device Manager, expand Audio inputs and outputs, right-click your microphone and choose Update driver. If the mic stopped working right after a Windows update, restart the PC before anything else.",
      },
    ],
    related: ["mic-test-mac", "how-to-test-mic-on-pc", "teams-mic-test", "discord-mic-test", "", "fix/mic-not-working"],
  },

  {
    slug: "chromebook-mic-test",
    group: "device",
    tool: "mic",
    nav: "Chromebook mic test",
    blurb: "Test your Chromebook’s microphone and check ChromeOS settings.",
    title: "Chromebook Mic Test: Check Your Microphone Online",
    description:
      "Test the microphone on your Chromebook. Run a quick mic check in Chrome, then fix ChromeOS input settings, site permissions and privacy switches.",
    h1: "Chromebook mic test",
    lede: "Check your Chromebook’s microphone before class or a meeting. It runs right in Chrome.",
    introTitle: "Test your Chromebook’s microphone",
    intro: [
      "On a Chromebook, nearly everything that uses your microphone runs in Chrome, including Google Meet, Zoom’s web app and classroom tools. That makes this browser test a realistic check: if your mic works here, it will work in those.",
      "When a Chromebook mic doesn’t work, the cause is usually one of three things: the site doesn’t have permission, the input volume is turned down, or a privacy switch has turned the microphone off for the whole device.",
    ],
    stepsTitle: "How to test the mic on a Chromebook",
    steps: [
      {
        title: "Press “Test my mic” and allow access",
        body: "Click Allow when Chrome asks. Speak and watch the level meter.",
      },
      {
        title: "Check the input in Quick Settings",
        body: "Click the time in the bottom right corner, then click the arrow next to the volume slider. Under Input, select your microphone and move its slider up.",
      },
      {
        title: "Check the privacy switch",
        body: "Open Settings, go to Privacy and security, and look under Privacy controls for Microphone access. Some Chromebooks also have a physical mic or camera switch on the side.",
      },
      {
        title: "Record and play back",
        body: "Record 5 seconds and listen. Chromebook speakers are small, so headphones give you a fairer idea of how you sound.",
      },
    ],
    faqs: [
      {
        q: "How do I allow the microphone for a site on a Chromebook?",
        a: "Click the icon at the left of the address bar, then set Microphone to Allow. To review every site, open Chrome’s menu, go to Settings, Privacy and security, Site settings, Microphone.",
      },
      {
        q: "I’m on a school Chromebook and the microphone is blocked. Can I fix it?",
        a: "Maybe not by yourself. Schools and workplaces can switch off the microphone or limit it to approved sites through their management settings. If the permission option is greyed out or shows a building icon, ask your teacher or IT administrator.",
      },
      {
        q: "My Chromebook is using the wrong microphone. How do I change it?",
        a: "Open Quick Settings by clicking the time, click the arrow beside the volume slider, and choose the microphone you want under Input. You can also pick it from the Microphone menu in this test.",
      },
      {
        q: "Nothing helps. Is there a reset I can try?",
        a: "Restart the Chromebook first. If the mic still isn’t detected, try a hardware reset: turn the Chromebook off, then hold the Refresh key and press Power. This resets the hardware without deleting your files.",
      },
    ],
    related: ["google-meet-mic-test", "mic-test-android", "online-mic-test", "", "fix/mic-permission-blocked", "fix/mic-not-working"],
  },

  {
    slug: "xbox-mic-test",
    group: "device",
    tool: "mic",
    nav: "Xbox mic test",
    blurb: "Test your Xbox headset mic and fix party chat problems.",
    title: "Xbox Mic Test: How to Test Your Mic on Xbox One and Series X|S",
    description:
      "How to test your mic on Xbox One and Xbox Series X|S. Check your headset on a computer first, then test it in party chat and set mic monitoring on the console.",
    h1: "Xbox mic test",
    lede: "Check that your Xbox headset mic works, on the console and off it. Start with the quick test below, then follow the console steps.",
    introTitle: "Two places to test an Xbox headset",
    intro: [
      "An Xbox headset can fail in two different places: the headset itself, or the console’s settings. The test above covers the first. Plug the same headset into a computer or phone, run the test, and if the meter moves, the microphone is fine and the problem is on the console.",
      "On the console there’s no dedicated mic test button, but there are two reliable checks: start a party chat by yourself and watch whether the console hears you, and use mic monitoring to hear your own voice in the headset. Both are below. Menu names shift a little between system updates, so if a label looks different, use the search or the closest match in the same menu.",
    ],
    stepsTitle: "How to test your mic on Xbox",
    steps: [
      {
        title: "Test the headset on a computer first",
        body: "A wired headset with a 3.5 mm plug works in most laptops’ headset jack, and USB headsets work in any USB port. Press “Test my mic” above. If the meter moves, the headset’s microphone works. Some wireless Xbox headsets only pair with the console, so skip this step for those.",
      },
      {
        title: "Connect it and check every mute switch",
        body: "On the console, push the headset plug fully into the controller, or connect the wireless adapter. Look for a mute switch or button on the headset and on any in-line control. A mic muted in hardware is the most common reason nobody hears you.",
      },
      {
        title: "Start a party by yourself",
        body: "Press the Xbox button, open Party & chats, and start a party. Speak normally. The indicator next to your gamertag should react when the console picks you up. If it stays still, the console isn’t receiving audio from the mic.",
      },
      {
        title: "Use mic monitoring to hear yourself",
        body: "Open Settings, then General, then Volume & audio output, and find Mic monitoring. Raise it until you can hear your own voice in the headset. Lower it again if you notice an echo.",
      },
      {
        title: "Check privacy and chat settings",
        body: "Open Settings, then Account, then Privacy & online safety, and make sure voice communication isn’t blocked. If you’re on a child account, a parent may need to allow it.",
      },
    ],
    faqs: [
      {
        q: "How do I test my mic on Xbox One?",
        a: "Start a party chat by yourself and speak. Watch the indicator next to your gamertag, which reacts when the console hears you. You can also turn up Mic monitoring under Settings, General, Volume & audio output to hear your own voice through the headset.",
      },
      {
        q: "Is testing a mic the same on Xbox Series X and Series S?",
        a: "Yes, the steps are the same on Xbox One, Series X and Series S. The Xbox button guide, Party & chats and the audio settings are all there on every model, though a few labels have moved between system updates.",
      },
      {
        q: "Why can’t anyone hear me in Xbox party chat?",
        a: "Check the headset’s own mute switch first, then make sure the plug is fully seated or the wireless adapter is connected. After that, look at your privacy settings for voice communication and check that the party’s audio output is going to the headset. If it still fails, test the headset on a computer to find out whether the headset or the console is at fault.",
      },
      {
        q: "Can I use this website to test my Xbox’s microphone?",
        a: "Not the console itself. The test above runs on a computer or phone. It can check a headset that plugs into either one, which tells you whether the headset is working, but the console’s own settings need the steps on this page.",
      },
      {
        q: "How do I hear myself in my headset on Xbox?",
        a: "Turn up Mic monitoring under Settings, General, Volume & audio output. It sends a little of your microphone back into your ears so you don’t shout over closed headphones. If you hear an echo, turn it down.",
      },
    ],
    related: [
      "discord-mic-test",
      "fix/hear-my-mic-in-headphones",
      "hear-yourself-mic-test",
      "fix/mic-not-working",
      "ps5-mic-test",
      "",
    ],
  },

  {
    slug: "how-to-test-mic-on-pc",
    group: "device",
    tool: "mic",
    nav: "Test mic on PC",
    blurb: "Three ways to check your microphone on Windows 10 and 11.",
    title: "How to Test Your Mic on PC (Windows 10 and 11)",
    description:
      "How to test your microphone on a Windows PC: in your browser, in Windows Sound settings, and with the Sound Recorder app. See which method tells you what.",
    h1: "How to test your mic on a PC",
    lede: "There are three easy ways to check a microphone on Windows 10 or 11. The first one is right here.",
    introTitle: "Three tests, three different answers",
    intro: [
      "Each way of testing a PC microphone answers a slightly different question. The browser test above tells you whether the mic works and whether your browser is allowed to use it. Windows’ own test tells you whether the system is receiving sound. A recording tells you how you actually sound. If you’re troubleshooting, trying more than one helps you find which layer is failing.",
      "The steps below work on Windows 10 and Windows 11. Where the two differ, the step says so. A desktop PC often has no built-in microphone, so you’ll usually need a headset, a USB mic or a webcam with a mic.",
    ],
    stepsTitle: "How to check your mic on a PC",
    steps: [
      {
        title: "Test in your browser",
        body: "Press “Test my mic” above and allow access. Speak and watch the level meter. The “Your microphone” panel shows which device your browser is using, which is the quickest way to spot the wrong microphone.",
      },
      {
        title: "Test in Windows Sound settings",
        body: "Right-click the speaker icon in the taskbar and choose Sound settings. On Windows 11, click your microphone under Input and press Start test. On Windows 10, speak while you watch the “Test your microphone” bar under Input. The bar should move.",
      },
      {
        title: "Record yourself and play it back",
        body: "Search the Start menu for Sound Recorder on Windows 11, or Voice Recorder on Windows 10. Press record, say a few sentences, stop, and press play. You’ll hear what people on a call hear.",
      },
      {
        title: "Test in the app you’ll actually use",
        body: "Open the audio settings in your meeting app or game and select the same microphone. Apps keep their own device setting, so a mic that works in Windows can still be unselected in the app.",
      },
    ],
    guide: [
      {
        heading: "Which method should you use?",
        body: [
          "- Browser test: best for a quick yes or no, and for checking permissions and which microphone is selected. It also lets you listen to yourself live.",
          "- Windows test: best for checking whether Windows itself is receiving sound, before any app gets involved. If the bar moves here but not in the browser, a browser permission is the likely cause.",
          "- Recording: best for judging quality, such as volume, echo and background noise, because you can play it back and listen carefully.",
          "If none of the three shows any movement, the microphone isn’t reaching the PC. Check the cable and any mute switch, then see the guide on a mic that isn’t working.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do I check if my mic is working on a PC?",
        a: "Run the browser test above and speak. If the meter moves, it’s working. For a second opinion, open Sound settings and watch the input bar while you talk, or record a short clip in Sound Recorder and play it back.",
      },
      {
        q: "The Windows input bar moves but other people still can’t hear me. Why?",
        a: "Windows is receiving sound, so the problem is in the app. Open the app’s audio settings and pick the same microphone, check that you aren’t muted inside the app, and make sure the app is allowed to use the microphone under Settings, Privacy & security, Microphone.",
      },
      {
        q: "My microphone isn’t in the list. What should I do?",
        a: "First reconnect it, or try another port. Then open More sound settings, go to the Recording tab, right-click an empty space and tick Show Disabled Devices. If your microphone appears greyed out, right-click it and choose Enable.",
      },
      {
        q: "Does it work the same on Windows 10 and Windows 11?",
        a: "The idea is the same. The screens differ a little: Windows 11 has a Start test button inside the microphone’s properties, while Windows 10 shows a live test bar directly under the Input device. The recorder app is called Sound Recorder on Windows 11 and Voice Recorder on Windows 10.",
      },
      {
        q: "Does my desktop PC have a built-in microphone?",
        a: "Usually not. Most laptops have one, but most desktop towers don’t. You’ll need a headset, a USB microphone, or a monitor or webcam with a microphone built in. Plug it in and it should appear as an input device.",
      },
    ],
    related: [
      "mic-test-windows-11",
      "fix/mic-not-working",
      "online-mic-test",
      "fix/mic-too-quiet",
      "mic-test-with-playback",
      "teams-mic-test",
    ],
  },

  {
    slug: "ps5-mic-test",
    group: "device",
    tool: "mic",
    nav: "PS5 mic test",
    blurb: "Test your PS5 headset mic and fix party chat problems.",
    title: "PS5 Mic Test: How to Test Your Mic on PlayStation 5",
    description:
      "How to test your mic on PS5. Check your headset on a computer first, then use the console’s mic level check, input device and mic status settings.",
    h1: "PS5 mic test",
    lede: "Check that your PS5 headset mic works, on the console and off it. Start with the quick test below, then follow the console steps.",
    introTitle: "Two places to test a PS5 mic",
    intro: [
      "A PS5 mic can fail in two places: the headset itself, or the console’s settings. The test above covers the first. Plug the same headset into a computer or phone and press “Test my mic”. If the meter moves, the microphone works, and the problem is on the console.",
      "The PS5 also has its own microphone level check in Settings, plus the mute button on the DualSense controller. Both are covered below. Menu names change a little between system updates, so if a label looks different, look for the closest match in the same menu.",
    ],
    stepsTitle: "How to test your mic on PS5",
    steps: [
      {
        title: "Test the headset on a computer first",
        body: "A wired headset with a 3.5 mm plug works in most laptops’ headset jack, and USB headsets work in any USB port. Press “Test my mic” above. Some wireless headsets only pair with the console, so skip this step for those.",
      },
      {
        title: "Check every mute switch",
        body: "Look for a mute switch on the headset or an in-line control. On the DualSense controller, the mute button under the touchpad lights up orange when your microphone is muted. Press it again to turn it off.",
      },
      {
        title: "Choose the right input device",
        body: "Open Settings, then Sound, then Microphone, and check the input device. Make sure it’s set to your headset, not the controller’s built-in mic, if you want to use the headset.",
      },
      {
        title: "Run the console’s mic level check",
        body: "In the same Microphone menu, use the option to adjust the microphone level, then speak. A meter shows whether the console hears you. Raise the level if the meter barely moves.",
      },
      {
        title: "Check privacy and chat settings",
        body: "Open Settings, then Users and Accounts, then Privacy, and check the communication settings. A child account may need a parent to allow voice chat.",
      },
    ],
    faqs: [
      {
        q: "How do I test my mic on PS5?",
        a: "Open Settings, then Sound, then Microphone, and use the microphone level option. Speak and watch the meter. You can also start a party with a friend and ask if they can hear you.",
      },
      {
        q: "Why can’t anyone hear me on PS5?",
        a: "Check the headset’s own mute switch and the controller’s mute button, which glows orange when muted. Then make sure the right input device is selected under Settings, Sound, Microphone, and that the plug is fully pushed into the controller.",
      },
      {
        q: "Can I use this website to test my PS5’s microphone?",
        a: "Not the console itself. The test above runs on a computer or phone. It can check a headset that plugs into either one, which tells you whether the headset works. The console’s own settings need the steps on this page.",
      },
      {
        q: "How do I hear myself in my PS5 headset?",
        a: "Some headsets support sidetone, which sends a little of your voice back to your ears. Look for a sidetone or mic monitoring option under Settings, Sound, Microphone, or in the headset’s own app or buttons. Not every headset supports it.",
      },
      {
        q: "Does the PS5 controller have a microphone?",
        a: "Yes. The DualSense has a built-in microphone, and a button under the touchpad mutes it. A connected headset can take over, so check the input device setting if you hear the wrong one.",
      },
    ],
    related: [
      "xbox-mic-test",
      "discord-mic-test",
      "fix/hear-my-mic-in-headphones",
      "fix/mic-not-working",
      "how-to-test-mic-on-pc",
      "",
    ],
  },
];
