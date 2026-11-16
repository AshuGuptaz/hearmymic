import type { PageData } from '../types';

/** Troubleshooting pages. The tool is embedded so each fix can be checked on the spot. */
export const fixes: PageData[] = [
  {
    slug: "fix/mic-not-working",
    group: "fix",
    tool: "mic",
    nav: "Mic not working",
    blurb: "A step-by-step checklist for a microphone that stays silent.",
    title: "Why Is My Mic Not Working? How to Fix Your Microphone",
    description:
      "Why is my mic not working? Test it here, then work through the checklist: mute switches, input device, permissions, drivers and apps holding the mic.",
    h1: "Why is my mic not working? How to fix it",
    lede: "Run the test below, then work down the checklist. Most silent microphones are fixed in the first three steps.",
    introTitle: "Start by finding out where the problem is",
    intro: [
      "A microphone that “doesn’t work” is usually working fine and being stopped somewhere along the way: by a mute switch, by the wrong device being selected, by a permission, or by another app. The test above helps you narrow it down fast.",
      "If the test won’t start, the message it shows tells you whether the mic is blocked, missing or busy. If the test starts but the meter stays flat, your computer can see a microphone and is getting silence from it, which points to a mute switch, a volume setting or the wrong device.",
    ],
    stepsTitle: "Fix a microphone that isn’t working",
    steps: [
      {
        title: "Check the physical mute and the connection",
        body: "Look for a mute button on the headset, the cable or the mic itself, and for a mic mute key on your laptop’s keyboard. Unplug the mic and plug it back in firmly. Try another USB port. A 3.5 mm plug must go in the mic or headset jack, not the headphone-only jack.",
      },
      {
        title: "Select the right microphone",
        body: "Start the test and read the device name in the “Your microphone” panel. If it isn’t the mic you’re speaking into, choose the correct one from the Microphone menu, or change the default input in your system sound settings.",
      },
      {
        title: "Turn up the input volume",
        body: "On Windows 11, open Settings, System, Sound, and click your microphone under Input. On a Mac, open System Settings, Sound, Input. Make sure the input volume isn’t at zero.",
      },
      {
        title: "Check permissions in the browser and the system",
        body: "Click the icon at the left of the address bar and set Microphone to Allow. Then check that your operating system lets your browser use the microphone, under the Microphone section of its privacy settings.",
      },
      {
        title: "Close other apps, then restart",
        body: "Quit Zoom, Teams, Discord, recording software and other browser tabs that might be holding the mic. If nothing changes, restart the browser, then the computer. It clears stuck audio devices more often than you’d expect.",
      },
      {
        title: "Check that the mic isn’t disabled",
        body: "On Windows, open Settings, System, Sound, and scroll to All sound devices. If your microphone is listed as disabled, select it and choose Allow. On the older Sound control panel, open the Recording tab, right-click the empty area and tick Show Disabled Devices, then enable your mic.",
      },
      {
        title: "Update or reinstall the audio driver",
        body: "If the mic vanished after a Windows update, open Device Manager, expand Audio inputs and outputs, right-click the microphone and choose Update driver. If that fails, choose Uninstall device and restart so Windows installs it again. Run the Windows audio troubleshooter too.",
      },
    ],
    guide: [
      {
        heading: "Why is my mic not working? The most common reasons",
        body: [
          "- It’s muted somewhere: a switch on the headset, a mic key on the laptop, or the mute button inside an app.",
          "- The wrong microphone is selected, for example the laptop’s built-in mic instead of your headset.",
          "- A permission is off, either in the browser, in the app or in your system’s privacy settings.",
          "- Another app is using the mic, so your browser can’t open it.",
          "- The input volume is at zero, or the mic is disabled in your sound settings.",
          "- A driver problem, often right after a system update.",
          "- A loose cable, a dirty jack or a dead battery in a wireless headset.",
        ],
      },
      {
        heading: "Mic stopped working suddenly",
        body: [
          "If it worked yesterday and doesn’t today, something changed. The usual culprits are a system update that reset your permissions or driver, a new device such as a webcam or Bluetooth headset that took over as the default microphone, or a new app that’s holding the mic. Reconnect or remove the new device, check the selected input, and restart.",
        ],
      },
      {
        heading: "Mic not working in a specific app or device",
        body: [
          "Our guides cover the common ones: [Discord mic not working](/fix/discord-mic-not-working), [AirPods mic not working](/fix/airpods-mic-not-working), [HyperX mic not working](/fix/hyperx-mic-not-working), and platform pages for [Zoom](/zoom-mic-test), [Microsoft Teams](/teams-mic-test), [Google Meet](/google-meet-mic-test), [Xbox](/xbox-mic-test) and [PS5](/ps5-mic-test). Each shows the exact settings to check.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why is my mic not working on Windows 11?",
        a: "Check Settings, Privacy & security, Microphone, and make sure Microphone access and “Let desktop apps access your microphone” are on. Then open Settings, System, Sound, select your mic under Input and check that it isn’t disabled and the input volume is above zero.",
      },
      {
        q: "Why is my mic not working on Discord?",
        a: "The usual causes are the wrong Input Device in Discord’s Voice & Video settings, Push to Talk without a key, or an input sensitivity setting that’s too high. Our [Discord mic not working](/fix/discord-mic-not-working) guide takes you through each one.",
      },
      {
        q: "The test says “Your mic is busy”. What does that mean?",
        a: "Your browser found the microphone but couldn’t open it, usually because another program has exclusive use of it. Close meeting apps, voice chat and recording software, then press Try again. On Windows, restarting the computer releases a mic that’s stuck.",
      },
      {
        q: "The test says “No microphone found”. What should I do?",
        a: "Your browser can’t see any input device. Reconnect the microphone, try a different port or cable, and check your system sound settings to see whether it appears there. If the system doesn’t list it either, the mic, cable or port is the problem.",
      },
      {
        q: "How can I tell if my microphone is broken?",
        a: "Try it on a second device, such as another computer or a phone. If it fails everywhere, the microphone is faulty. If it works elsewhere, the problem is in the first device’s settings, port or drivers.",
      },
      {
        q: "My mic works in one app but not another. Why?",
        a: "Each app chooses its own microphone and needs its own permission. Open the failing app’s audio settings, select the microphone by name, and check that your operating system allows that app to use the mic.",
      },
      {
        q: "My Bluetooth headset’s mic isn’t working. Any tips?",
        a: "Make sure it’s connected as a headset and not only as headphones. Many devices list two entries for one headset, and only the “hands-free” or “headset” entry carries the microphone. Turning Bluetooth off and on, or pairing again, usually restores it.",
      },
    ],
    related: [
      "fix/discord-mic-not-working",
      "fix/airpods-mic-not-working",
      "fix/mic-permission-blocked",
      "fix/mic-too-quiet",
      "",
      "mic-test-windows-11",
      "mic-test-mac",
      "is-my-mic-working",
      "fix/hyperx-mic-not-working",
    ],
  },

  {
    slug: "fix/mic-too-quiet",
    group: "fix",
    tool: "mic",
    nav: "Mic too quiet",
    blurb: "Make a quiet microphone louder with the right settings and placement.",
    title: "Mic Too Quiet? How to Make Your Microphone Louder",
    description:
      "Is your mic too quiet? Raise the input volume on Windows and Mac, fix microphone placement, check app settings, and test the result as you go.",
    h1: "Mic too quiet? How to make it louder",
    lede: "Start the test and watch the rating as you make each change. You’re aiming for a steady “Good”.",
    introTitle: "Why microphones end up too quiet",
    intro: [
      "A quiet microphone almost always comes down to one of three things: you’re too far from it, the input volume is set too low, or a different and more distant microphone is being used without you realizing. Each is quick to check.",
      "Keep the test running while you work through the steps. The level meter responds immediately, so you can see which change makes the difference.",
    ],
    stepsTitle: "Make your microphone louder",
    steps: [
      {
        title: "Check which microphone is in use",
        body: "Read the device name in the “Your microphone” panel. If your laptop’s built-in mic or a webcam mic is active when you meant to use a headset, select the right one. This alone fixes many quiet mics.",
      },
      {
        title: "Get closer and aim it properly",
        body: "Distance matters more than any setting. Halving the distance to the mic makes you much louder. A headset boom should sit about two finger-widths from the corner of your mouth. A desk mic works best a hand’s length away.",
      },
      {
        title: "Raise the input volume in your system",
        body: "Windows 11: Settings, System, Sound, click the mic under Input, and raise Input volume. Mac: System Settings, Sound, Input, and drag Input volume to the right. Chromebook: click the time, then the arrow by the volume slider, and raise the Input slider.",
      },
      {
        title: "Check the gain on the mic itself",
        body: "USB microphones and audio interfaces often have a gain knob, and some headsets have a volume wheel on the cable that affects the mic. Turn it up gradually while watching the meter.",
      },
      {
        title: "Raise the level inside your app",
        body: "Zoom, Discord, Teams and others have their own input volume. If you’re loud enough here and quiet there, the app’s setting is the one to change.",
      },
    ],
    faqs: [
      {
        q: "What is Microphone Boost in Windows, and should I use it?",
        a: "It adds extra amplification on top of the normal input volume. You’ll find it under More sound settings, Recording, your mic’s Properties, Levels, if your device supports it. Add it in small steps, because boost raises background hiss along with your voice.",
      },
      {
        q: "Does auto gain control make my mic louder?",
        a: "It can. Auto gain control turns quiet speech up and loud speech down automatically. Browsers and meeting apps usually have it on. The panel under the test shows whether your browser is applying it. It helps, but it can’t rescue a mic that’s far too quiet to begin with.",
      },
      {
        q: "Why is my headset mic quiet when the rest works fine?",
        a: "Check that the boom is rotated down toward your mouth, since many headsets mute when it’s flipped up. On a single-plug headset used with separate mic and headphone jacks, you need a splitter adapter. Without one, the computer may fall back to a built-in mic.",
      },
      {
        q: "I’m speaking into my USB mic but it’s still quiet. What am I doing wrong?",
        a: "You may be talking into the wrong side. Many desktop microphones pick up sound from the front face, not the top. Look for the brand logo or a mute light, which usually marks the front, and speak toward it.",
      },
      {
        q: "My mic is too loud and distorts. What should I do?",
        a: "Do the reverse: lower the input volume, turn off any boost, and move back a little. If the test shows “Loud” on normal speech, bring the level down until it reads “Good”.",
      },
    ],
    related: [
      "mic-test-with-playback",
      "fix/mic-not-working",
      "",
      "mic-test-windows-11",
      "discord-mic-test",
      "fix/mic-echo",
    ],
  },

  {
    slug: "fix/mic-permission-blocked",
    group: "fix",
    tool: "mic",
    nav: "Mic permission blocked",
    blurb: "Unblock microphone access in Chrome, Safari, Edge and Firefox.",
    title: "Mic Permission Blocked? How to Allow Microphone Access",
    description:
      "Microphone blocked in your browser? Here’s how to allow mic access in Chrome, Edge, Firefox and Safari, and in Windows, macOS, iPhone and Android.",
    h1: "Microphone permission blocked? How to allow access",
    lede: "If the test says access is blocked, your browser or your device is saying no on your behalf. Here’s how to change that.",
    introTitle: "Two places a microphone can be blocked",
    intro: [
      "Microphone permission works in two layers. Your browser decides which websites may use the mic, and your operating system decides whether the browser may use it at all. A block at either layer stops the test.",
      "Browsers remember your answer. If you once clicked Block or dismissed the prompt a few times, the browser stops asking and quietly refuses. You have to change the setting yourself, then reload the page.",
    ],
    stepsTitle: "Allow microphone access",
    steps: [
      {
        title: "Chrome and Edge",
        body: "Click the icon at the left end of the address bar, next to the site’s address. Find Microphone and switch it to Allow. Reload the page and press “Test my mic” again.",
      },
      {
        title: "Firefox",
        body: "Click the permissions icon at the left of the address bar and remove the “Blocked” entry next to the microphone. Reload, start the test, and choose Allow when Firefox asks.",
      },
      {
        title: "Safari on a Mac",
        body: "From the menu bar choose Safari, then Settings for This Website (or Settings, Websites, Microphone). Set Microphone to Allow and reload the page.",
      },
      {
        title: "iPhone and Android",
        body: "On iPhone, tap the page menu in Safari’s address bar, choose Website Settings, and set Microphone to Allow. On Android, tap the icon at the left of Chrome’s address bar, then Permissions, then allow Microphone.",
      },
      {
        title: "Check the system permission",
        body: "Windows 11: Settings, Privacy & security, Microphone, and turn on access for desktop apps. Mac: System Settings, Privacy & Security, Microphone, and enable your browser. Then quit and reopen the browser.",
      },
    ],
    faqs: [
      {
        q: "Why didn’t my browser ask me for permission?",
        a: "It only asks when it doesn’t already have an answer. If the site was blocked before, or the system has blocked the browser, the request is refused without a prompt. Reset the permission using the steps above and the prompt will come back.",
      },
      {
        q: "I allowed the microphone and it’s still blocked. What now?",
        a: "Reload the page, since permission changes don’t always apply to a page that’s already open. If that doesn’t work, the block is at the system level. Check your operating system’s microphone privacy settings, then fully quit and reopen the browser.",
      },
      {
        q: "Is it safe to allow microphone access to a website?",
        a: "Allow it for sites you trust and have a reason to use it on. The permission applies to one site only, your browser shows an indicator whenever the mic is on, and you can revoke it whenever you like. On this site, audio is processed in your browser and never uploaded.",
      },
      {
        q: "How do I remove microphone access again?",
        a: "Use the same menu you used to allow it. Click the icon at the left of the address bar and set Microphone to Block or Ask. In Chrome you can review every site under Settings, Privacy and security, Site settings, Microphone.",
      },
      {
        q: "The permission setting is greyed out. Why?",
        a: "Your device is probably managed by a school or employer that controls microphone access centrally. Only the administrator can change it. Antivirus or privacy software with a “microphone protection” feature can have the same effect.",
      },
      {
        q: "Does private or incognito mode affect microphone access?",
        a: "It can. Private windows don’t remember permissions, so you’ll be asked every time, and some browsers are stricter about it. If the test fails in a private window, try it in a normal one.",
      },
    ],
    related: [
      "fix/mic-not-working",
      "",
      "mic-test-iphone",
      "mic-test-android",
      "mic-test-mac",
      "chromebook-mic-test",
    ],
  },

  {
    slug: "fix/mic-echo",
    group: "fix",
    tool: "mic",
    nav: "Mic echo",
    blurb: "Stop echo and feedback on calls, streams and recordings.",
    title: "Why Does My Mic Echo? How to Fix and Stop Mic Echo",
    description:
      "Why does my mic echo? Find out who’s causing it, then stop mic echo on calls, Discord, Xbox and PS5 with headphones, echo cancellation and quick settings.",
    h1: "Why does my mic echo? How to fix and stop it",
    lede: "Echo has a small number of causes, and each has a simple fix. Record a clip below to hear what your mic is really picking up.",
    introTitle: "First, work out whose echo it is",
    intro: [
      "Here’s the part that surprises people: if you hear your own voice echoing back on a call, the cause is almost always at the other end. Your voice comes out of the other person’s speakers, their microphone picks it up, and it’s sent back to you. They need the fix, not you.",
      "If other people hear themselves echo when they talk to you, the loop is on your side. Your microphone is hearing your speakers. That’s the situation the steps below fix.",
    ],
    stepsTitle: "Stop your mic from echoing",
    steps: [
      {
        title: "Use headphones",
        body: "This is the fix that always works. With headphones on, the sound of the call never reaches your microphone, so there’s nothing to echo.",
      },
      {
        title: "Leave echo cancellation on",
        body: "Start the test and check “Echo cancellation” in the panel. Meeting apps have the same feature. Keep it on unless you’re recording music. If you turned on an option like Zoom’s Original sound, turn it off.",
      },
      {
        title: "Lower your speakers and separate them from the mic",
        body: "If you can’t use headphones, turn the speaker volume down and move the microphone away from the speakers, pointing in the opposite direction.",
      },
      {
        title: "Look for a second device in the room",
        body: "Two laptops or a laptop and a phone on the same call in one room will echo badly. Mute the mic and the speaker on all but one of them.",
      },
      {
        title: "Turn off system monitoring",
        body: "On Windows, open More sound settings, the Recording tab, your microphone’s Properties, then the Listen tab, and untick “Listen to this device”. On this page, make sure “Hear yourself live” is switched off.",
      },
    ],
    guide: [
      {
        heading: "Why does my mic echo?",
        body: [
          "A mic echoes when it picks up sound from your speakers and sends it back into the call. The sound goes out of the speakers, into the mic, back to the other person, and then out of their speakers again, a split second later. That delay is what you hear as an echo.",
          "Headphones break the loop, because the sound never reaches the mic. If you can’t wear them, echo cancellation, a lower speaker volume and moving the mic away from the speakers are the next best options.",
        ],
      },
      {
        heading: "How to get rid of mic echo on Xbox, PS5 and other devices",
        body: [
          "- Xbox and PS5: echo in party chat usually comes from TV or speaker sound reaching the controller’s or headset’s mic. Wear the headset, turn the TV volume down and make sure the headset is the selected chat audio device.",
          "- Mac: if a headset mic echoes, open System Settings, Sound, and check the Input device and that Output is the same headset. Also try a different app’s noise settings.",
          "- Windows: untick “Listen to this device” in the microphone’s properties, and check you haven’t selected Stereo Mix as the input.",
          "- Discord, Zoom and Teams: keep Echo Cancellation on, and make sure Original sound is off.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do I fix mic echo?",
        a: "Put on headphones first, since that stops the sound from reaching your mic. Then leave echo cancellation on, lower the speaker volume, move the mic away from the speakers and mute any second device in the room. If other people hear an echo of themselves, the loop is on your side.",
      },
      {
        q: "How do I get rid of mic echo on PS5 or Xbox?",
        a: "Echo on a console usually means the mic is hearing the TV or speakers. Wear your headset, turn the TV volume down, and check that your headset is the selected chat device and not the controller’s built-in mic. Plug the headset in firmly and test it on a computer to rule out the headset.",
      },
      {
        q: "What’s the difference between echo and feedback?",
        a: "Echo is a delayed repeat of a voice. Feedback is a rising squeal or howl. Both come from a microphone picking up a speaker, but feedback happens when the sound loops quickly and gets louder each time around, usually when live monitoring is on.",
      },
      {
        q: "My recordings sound echoey even though I’m not on a call. Why?",
        a: "That’s your room, not an electronic echo. Sound bounces off hard walls, floors and desks before it reaches the mic. Move closer to the microphone, and add soft things to the room: curtains, a rug, even a duvet behind you makes an audible difference.",
      },
      {
        q: "Why do I hear myself in my own headphones?",
        a: "Something is monitoring your mic: a sidetone feature in your headset’s software, the “Listen to this device” option on Windows, or a monitoring button on a USB mic or audio interface. Our guide on [hearing your mic in your headphones](/fix/hear-my-mic-in-headphones) explains how to turn each one on and off.",
      },
      {
        q: "Does echo cancellation hurt sound quality?",
        a: "Slightly. It can thin out your voice or briefly dip your volume when the other person talks. For conversation the trade is well worth it. With headphones on, you can switch it off for a fuller sound.",
      },
    ],
    related: [
      "fix/hear-my-mic-in-headphones",
      "hear-yourself-mic-test",
      "mic-test-with-playback",
      "",
      "zoom-mic-test",
      "discord-mic-test",
      "fix/discord-mic-not-working",
      "xbox-mic-test",
    ],
  },

  {
    slug: "fix/hear-my-mic-in-headphones",
    group: "fix",
    tool: "mic",
    nav: "Hear my mic in headphones",
    blurb: "Turn mic monitoring (sidetone) on or off on any device.",
    title: "Mic Monitoring: How to Hear Your Mic in Your Headphones",
    description:
      "Want to hear your own mic in your headphones? Use the live monitor here, or turn on mic monitoring on Windows, Mac and gaming headsets. Also how to turn it off.",
    h1: "How to hear your mic in your headphones",
    lede: "Hearing your own voice in your headphones is called mic monitoring or sidetone. Try it instantly below, or set it up permanently.",
    introTitle: "Why you might want to hear yourself",
    intro: [
      "Closed headphones block out your own voice, and most people start talking louder without noticing. Feeding a little of your microphone back into your ears fixes that. It’s also the simplest way to check how your mic sounds while you adjust it.",
      "For a quick check, start the test above and switch on “Hear yourself live”. It works in any browser and stops when you leave the page. If you’d like monitoring all the time, in games and on calls, use one of the system options below.",
    ],
    stepsTitle: "Ways to hear your mic in your headphones",
    steps: [
      {
        title: "Right now, in your browser",
        body: "Put on headphones, press “Test my mic”, and switch on “Hear yourself live”. You’ll hear your microphone straight away.",
      },
      {
        title: "On Windows",
        body: "Open Settings, System, Sound, then More sound settings. On the Recording tab, double-click your microphone, open the Listen tab, tick “Listen to this device”, choose your headphones, and press Apply.",
      },
      {
        title: "On a Mac",
        body: "macOS has no built-in monitoring switch. Open QuickTime Player, choose File, then New Audio Recording, and raise the volume slider in the recording window. You’ll hear your mic for as long as that window stays open.",
      },
      {
        title: "On a gaming or USB headset",
        body: "Look for “Sidetone” or “Mic monitoring” in the headset’s companion app, or for a dedicated dial on the headset or its USB adapter. This kind of monitoring happens inside the headset, so it has no noticeable delay.",
      },
      {
        title: "On a USB mic or audio interface",
        body: "Plug your headphones into the microphone or interface itself and turn on its direct monitoring switch or dial. Like headset sidetone, it’s delay-free.",
      },
    ],
    faqs: [
      {
        q: "Why is there a delay when I hear myself?",
        a: "Software monitoring, including the browser option and Windows’ “Listen to this device”, routes sound through your computer’s audio system, which adds a short delay. Hardware monitoring built into headsets, USB mics and interfaces skips the computer and has no delay you can hear.",
      },
      {
        q: "How do I stop hearing my own mic in my headphones?",
        a: "Reverse whichever option is on: untick “Listen to this device” on Windows, set Sidetone or Mic monitoring to zero in your headset’s app, turn down the direct monitor control on your mic or interface, or switch off “Hear yourself live” here.",
      },
      {
        q: "Can I monitor my mic with Bluetooth headphones?",
        a: "You can, but the delay is long enough to be distracting, often a fifth of a second or more. Sound quality also drops while a Bluetooth headset’s microphone is active. Wired headphones are a much better choice for monitoring.",
      },
      {
        q: "Can I hear my mic on a PlayStation or Xbox?",
        a: "Yes. On Xbox, press the Xbox button, open the audio settings at the bottom of the guide, and adjust Mic monitoring. On PlayStation 5, look for Sidetone volume under Sound, Microphone, when a supported headset is connected. Not every headset supports it.",
      },
      {
        q: "Will other people hear my monitoring?",
        a: "No. Monitoring only changes what’s sent to your own headphones. What others hear is the microphone signal itself, which is the same whether monitoring is on or off.",
      },
    ],
    related: [
      "hear-yourself-mic-test",
      "fix/mic-echo",
      "",
      "mic-test-windows-11",
      "xbox-mic-test",
      "discord-mic-test",
    ],
  },

  {
    slug: "fix/discord-mic-not-working",
    group: "fix",
    tool: "mic",
    nav: "Discord mic not working",
    blurb: "Fix a Discord mic that nobody can hear, step by step.",
    title: "Discord Mic Not Working? 9 Fixes That Work",
    description:
      "Discord mic not working or nobody can hear you? Test your mic here, then fix the input device, sensitivity, push to talk, mute and system permissions.",
    h1: "Discord mic not working? Here’s how to fix it",
    lede: "Test your mic below first. If the meter moves here, the problem is in Discord or your system settings, and the steps below will find it.",
    introTitle: "Find out whether it’s your mic or Discord",
    intro: [
      "When nobody can hear you on Discord, the cause is one of two things: your microphone isn’t sending sound to your computer, or Discord is ignoring it. The test above settles that in a few seconds. Press “Test my mic” and speak. If the meter moves, your microphone and your system are fine, and the fix is inside Discord.",
      "If the meter stays flat, skip Discord for now and use our general guide to [fix a mic that isn’t working](/fix/mic-not-working). Discord can’t hear anything your computer can’t.",
    ],
    stepsTitle: "Fix your mic in Discord",
    steps: [
      {
        title: "Test your mic on this page",
        body: "Press “Test my mic”, allow access and speak. Note the microphone name in the “Your microphone” panel. That’s the one Discord needs to use.",
      },
      {
        title: "Check you aren’t muted or deafened",
        body: "Look at the microphone and headphone icons next to your name at the bottom left of Discord. A red slash on the microphone means you’re muted, and one on the headphones means you’re deafened, which also mutes you. A server admin can also mute you, which shows as a different icon on your name in the voice channel.",
      },
      {
        title: "Choose the right input device",
        body: "Click the gear icon next to your name to open User Settings, then Voice & Video. Set Input Device to the microphone that worked on this page. “Default” follows whatever Windows or macOS considers the default, and that can be a different device than you expect.",
      },
      {
        title: "Run Discord’s Mic Test",
        body: "In Voice & Video, press Let’s Check under Mic Test and speak. The bar should move and you should hear yourself. If you do, Discord is receiving your mic and the problem is further down the list.",
      },
      {
        title: "Check your input mode and sensitivity",
        body: "Under Input Mode, make sure you haven’t left Push to Talk on without a key assigned. With Voice Activity, either turn on “Automatically determine input sensitivity” or switch it off and drag the slider so your normal speaking voice lands in the green part of the bar. Discord suggests turning the automatic option off if your room is noisy or your volume varies.",
      },
      {
        title: "Check Windows or macOS permissions",
        body: "On Windows 11, open Settings, Privacy & security, Microphone, and turn on Microphone access and “Let desktop apps access your microphone”. On a Mac, open System Settings, Privacy & Security, Microphone, and make sure Discord is switched on. Restart Discord after changing it.",
      },
      {
        title: "Turn off exclusive mode on Windows",
        body: "Another app can lock your mic so Discord can’t use it. Open Sound settings, then More sound settings, then the Recording tab. Double-click your mic, open Advanced, and untick “Allow applications to take exclusive control of this device”.",
      },
      {
        title: "Switch audio processing off and on",
        body: "In Voice & Video, try turning Noise Suppression, Echo Cancellation, and Automatic Gain Control off one at a time to see whether one of them is cutting you out. Discord itself suggests toggling these when troubleshooting.",
      },
      {
        title: "Reset voice settings, update and restart",
        body: "At the bottom of Voice & Video, look for the option to reset voice settings. Then fully quit Discord and reopen it. Update your audio driver and restart your computer if it still doesn’t work.",
      },
    ],
    guide: [
      {
        heading: "Discord mic works in the test but nobody hears you",
        body: [
          "This is the most common case. It nearly always comes down to one of three things: Discord’s Input Device is set to the wrong microphone, the input sensitivity gate is set so high that your voice never opens it, or you’re in Push to Talk mode without pressing the key.",
          "Check them in that order. If you use a headset with a boom mic, remember that your laptop’s built-in microphone and your headset’s microphone both appear in the list, and Discord only uses one.",
        ],
      },
      {
        heading: "Discord mic cuts out or only works some of the time",
        body: [
          "Cutting out is usually input sensitivity. If your voice dips below the threshold between words, Discord stops transmitting, which sounds like clipped syllables. Lower the slider or switch to automatic sensitivity.",
          "Some people find the cutouts only happen while watching a stream or when a game is open. In that case, turn off automatic sensitivity or noise suppression and compare. Wireless headsets can also drop out when the battery is low or the dongle is in a poor port.",
        ],
      },
      {
        heading: "Discord in a browser",
        body: [
          "If you use Discord at discord.com in a browser, the browser needs microphone permission for that site. Click the icon at the left of the address bar and set Microphone to Allow, then reload the tab. The test on this page uses the same browser access, so if it works here, the Discord tab just needs permission of its own.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why is my mic not working on Discord?",
        a: "The usual reasons are the wrong Input Device in Voice & Video, being muted or deafened, Push to Talk without a key, an input sensitivity setting that’s too high, or Windows or macOS blocking Discord from the microphone. Test your mic on this page first to find out which side the problem is on.",
      },
      {
        q: "Why can nobody hear me on Discord even though my mic works?",
        a: "Check Discord’s Input Device, your Input Mode and the input sensitivity bar. A mic that works in your system can still be silenced by Discord’s sensitivity gate, which blocks any sound that’s quieter than the threshold you’ve set.",
      },
      {
        q: "How do I test my mic on Discord?",
        a: "Open User Settings, then Voice & Video, and press Let’s Check under Mic Test. Discord plays your voice back to you. You can also test your mic on this page, which takes Discord out of the picture completely.",
      },
      {
        q: "Why does my Discord mic keep cutting out?",
        a: "Most often the input sensitivity threshold is too high, so quiet parts of your speech don’t count. Lower it or turn on automatic sensitivity. Noise suppression, low headset battery and a weak wireless connection can also cause it.",
      },
      {
        q: "Does Discord on my phone need microphone permission too?",
        a: "Yes. On an iPhone, go to Settings, scroll to Discord and switch on Microphone. On Android, open Settings, Apps, Discord, Permissions and allow Microphone. Without it, Discord can’t hear your phone’s microphone at all.",
      },
      {
        q: "My mic works on my PC but not Discord on my Xbox or PlayStation. Why?",
        a: "Console voice chat uses the console’s own audio settings, not your PC’s. Check the headset is the selected input on the console, that it isn’t muted, and that the console’s party or chat settings allow voice. Our [Xbox mic test](/xbox-mic-test) page covers the console steps.",
      },
    ],
    related: [
      "discord-mic-test",
      "fix/mic-not-working",
      "fix/mic-too-quiet",
      "fix/mic-echo",
      "fix/mic-permission-blocked",
      "",
    ],
  },

  {
    slug: "fix/airpods-mic-not-working",
    group: "fix",
    tool: "mic",
    nav: "AirPods mic not working",
    blurb: "Fix an AirPods mic that people can’t hear, on iPhone, Mac and Windows.",
    title: "AirPods Mic Not Working? How to Fix It and Test Your Mic",
    description:
      "AirPods mic not working or people can’t hear you? Test your AirPods mic here, then fix ear detection, the microphone setting, a blocked mic and app permissions.",
    h1: "AirPods mic not working? Here’s how to fix it",
    lede: "Test your AirPods mic below, then work down the list. Most AirPods mic problems are a blocked mic, a setting or a permission, not a broken AirPod.",
    introTitle: "Test first, then fix the right thing",
    intro: [
      "AirPods don’t have a built-in mic test, so the quickest check is to record yourself. Connect your AirPods, press “Test my mic” above, speak, and then record and play back 5 seconds. The panel shows which microphone the browser is using. If it says AirPods and the meter moves, your AirPods microphone works.",
      "If the meter moves, the AirPods are fine, and any problem is in a particular app or setting. If the meter stays flat, the AirPods are either not selected as the input, or the microphone is blocked or needs a reset.",
    ],
    stepsTitle: "Fix an AirPods mic that isn’t working",
    steps: [
      {
        title: "Test with a recording",
        body: "On an iPhone you can also open the Voice Memos app, record a few seconds with your AirPods in, and play it back. Apple recommends this kind of test to find out whether the problem is your device or one app.",
      },
      {
        title: "Clean the microphone openings",
        body: "Each AirPod has a small microphone opening on the stem or the body. Dust, earwax or lint can muffle it. Gently clean the openings with a dry, soft, lint-free brush or cloth. Don’t use liquids or sharp tools. A blocked microphone is a common cause of muffled sound.",
      },
      {
        title: "Check the microphone setting",
        body: "On an iPhone, open Settings, Bluetooth, tap the “i” next to your AirPods, and look at Microphone. Automatic is best. If it’s set to Always Left or Always Right and you’ve only got the other AirPod in, switch it back to Automatic.",
      },
      {
        title: "Try turning off Automatic Ear Detection",
        body: "In the same AirPods settings, turn off Automatic Ear Detection and test again. If the mic starts working, the sensor was cutting the audio. Turn it back on afterwards if you like. Make sure the AirPods are fully seated in your ears.",
      },
      {
        title: "Check the app’s microphone permission",
        body: "If the mic fails in only one app, open Settings on your iPhone, scroll to that app and switch on Microphone. On a Mac, open System Settings, Privacy & Security, Microphone and allow the app. In a browser, allow the site’s microphone access.",
      },
      {
        title: "Choose AirPods as the input in the app",
        body: "Many apps choose their own mic. In Zoom, Teams, Discord or FaceTime, open the audio settings and select your AirPods as the microphone, not the built-in one. On a Mac, also check System Settings, Sound, Input.",
      },
      {
        title: "Reconnect or reset your AirPods",
        body: "Put the AirPods in their case, close the lid, wait a few seconds and reconnect. If that fails, forget them under Bluetooth settings, then follow Apple’s reset steps, which involve holding the setup button on the case until the light flashes amber and then white. Then pair them again as new. Make sure your iPhone and AirPods are up to date.",
      },
    ],
    guide: [
      {
        heading: "AirPods on a Mac or a Windows PC",
        body: [
          "On a Mac, open System Settings, Sound, Input, and choose your AirPods. On Windows, open Settings, System, Sound, and select the AirPods under Input. On Windows they can show up as a headset entry, and the headset mode used for calls has noticeably lower sound quality than normal listening. That’s a Bluetooth limit, not a fault.",
          "If your AirPods appear as headphones only, with no microphone in the Input list, remove the device in Bluetooth settings and pair it again.",
        ],
      },
      {
        heading: "Why do AirPods sound muffled on calls?",
        body: [
          "When a Bluetooth headset’s mic is active, it switches to a call mode that sends narrower, lower-quality audio in both directions. Everyone hears this on a Bluetooth headset, and it’s the main reason AirPods mics sound worse than a wired headset or a USB mic.",
          "A blocked microphone opening makes it worse. Clean both AirPods and try again before you assume the hardware is faulty.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do I test my AirPods mic?",
        a: "Connect them, press “Test my mic” on this page, and speak. Check that the panel shows your AirPods as the microphone and that the meter moves. Then record 5 seconds and play it back. On an iPhone, a Voice Memos recording is another good test.",
      },
      {
        q: "Why can’t people hear me on my AirPods?",
        a: "The AirPods may not be selected as the microphone in the app you’re using, the app may not have microphone permission, or the microphone may be blocked by dirt. Check those three, then try the Microphone setting and Automatic Ear Detection in your AirPods settings.",
      },
      {
        q: "Why does my AirPods mic work on some apps but not others?",
        a: "Each app has its own microphone setting and its own permission. Open the failing app’s audio settings, choose the AirPods as the input, and check the app’s microphone permission in your system settings.",
      },
      {
        q: "Do I need both AirPods in for the mic to work?",
        a: "No. One AirPod is enough. The Microphone setting can be Automatic, Always Left or Always Right. If it’s set to a side whose AirPod is in the case, switch it back to Automatic.",
      },
      {
        q: "Is the AirPods mic broken if it still doesn’t work?",
        a: "Not necessarily. First test the AirPods with a different device. If the mic works there, the problem is in your first device’s settings. If it fails everywhere after cleaning and resetting, contact Apple Support, since the AirPod may need repair or replacement.",
      },
    ],
    related: [
      "fix/mic-not-working",
      "mic-test-iphone",
      "mic-test-mac",
      "fix/mic-too-quiet",
      "is-my-mic-working",
      "",
    ],
  },

  {
    slug: "fix/hyperx-mic-not-working",
    group: "fix",
    tool: "mic",
    nav: "HyperX mic not working",
    blurb: "Fix a HyperX headset mic that’s silent, on Cloud II, Cloud III, Alpha and more.",
    title: "HyperX Cloud 2 Mic Not Working? 8 Fixes for Any HyperX Headset",
    description:
      "HyperX mic not working? Test it here, then check the mute switch, detachable mic, default input, Windows privacy and mic boost. Cloud II, III and Alpha.",
    h1: "HyperX mic not working? Here’s how to fix it",
    lede: "Plug your HyperX headset into your computer and test it below. The result tells you whether the mic is faulty or a setting is in the way.",
    introTitle: "Is it the headset or the settings?",
    intro: [
      "Most HyperX headset mics that “stop working” aren’t broken. The usual causes are a mute switch, a detachable mic that isn’t fully seated, a different device chosen as the input, or a Windows update that changed the microphone privacy settings. The test above separates the two cases quickly. Press “Test my mic”, speak, and check that the panel names your HyperX headset as the microphone. If the meter moves, the headset works and the problem is a setting. If it stays flat, work through the checks below.",
      "These steps apply to the Cloud II (also written Cloud 2), Cloud III, Cloud Alpha, Cloud Stinger and most other HyperX headsets. Button positions and features differ by model, so check your headset’s manual if something below doesn’t match what you see.",
    ],
    stepsTitle: "Fix a HyperX headset mic that isn’t working",
    steps: [
      {
        title: "Test the headset on this page",
        body: "Connect the headset to a computer, press “Test my mic” above, and speak. Look at the “Your microphone” panel. If it shows your HyperX headset and the meter moves, the mic works. If you can’t see your headset in the list, it isn’t connected as a microphone yet.",
      },
      {
        title: "Check every mute control",
        body: "Look for a mute switch on the headset, on the in-line remote or on the USB control box, and make sure it isn’t in the mute position. On the wired Cloud III, press the mic mute button to toggle mute, where the LED on means muted. Also check that the mic isn’t muted inside the app you’re using.",
      },
      {
        title: "Push the detachable mic and cable in fully",
        body: "Many HyperX headsets have a detachable boom mic and a detachable cable. If either isn’t pushed in all the way, the mic can fail or crackle. HyperX advises pushing the cable firmly into the ear cup until it’s fully seated, with no gap or grey part of the plug showing. Do the same with the boom mic, and make sure it’s pointing toward your mouth.",
      },
      {
        title: "Use the right connection",
        body: "A 3.5 mm headset on a PC either needs a combined headset jack or the splitter cable with separate mic and headphone plugs. Plugging a headset with one plug into a headphone-only jack gives you sound but no mic. For USB models, try a different USB port directly on the computer, not a hub. On wireless models, check the dongle is connected and the headset is paired.",
      },
      {
        title: "Select the headset as the default input",
        body: "On Windows 11, open Settings, System, Sound, and under Input choose your HyperX headset. On older versions, open the Sound control panel, go to the Recording tab, right-click your headset, and choose Set as Default Device. On a Mac, open System Settings, Sound, Input and pick the headset. In Discord, Zoom or a game, also choose it in that app’s audio settings.",
      },
      {
        title: "Check Windows microphone privacy",
        body: "A Windows update can switch microphone access off. Open Settings, Privacy & security, Microphone, and turn on Microphone access and “Let desktop apps access your microphone”. On a Mac, open Privacy & Security, Microphone and allow your app.",
      },
      {
        title: "Set the input volume and check mic boost",
        body: "In the same Sound settings, open your HyperX microphone’s properties and make sure the input volume is up. If the mic sounds noisy or hissy, the Windows microphone boost can be set too high, so lower it. If it sounds too quiet instead, raise the volume gently.",
      },
      {
        title: "Update drivers and the headset’s software",
        body: "If the mic stopped after a Windows update, check your computer or motherboard maker for the latest audio driver, or use Update driver in Device Manager. HyperX’s NGENUITY software and firmware updates cover supported models. On some wireless models a firmware update can break the connection to the dongle, so re-pair the headset to it.",
      },
    ],
    guide: [
      {
        heading: "HyperX Cloud II (Cloud 2) mic not working",
        body: [
          "The Cloud II has a detachable boom mic, and the usual problem is that the mic isn’t pushed fully into the jack on the left ear cup. If your Cloud II has the USB control box, check its mic mute switch too, and make sure Windows has the control box (not the laptop’s internal mic) selected as the input.",
          "If the Cloud II works with one device but not another, test the headset on a second computer. If it fails everywhere after reseating the mic, the mic or cable may need replacing, and HyperX support can help with that.",
        ],
      },
      {
        heading: "HyperX headset mic not working on Windows 11",
        body: [
          "Windows 11 groups the settings into three places: the Privacy & security page, which controls whether apps can use any microphone, the Sound page, which chooses the input and its volume, and Device Manager, which holds the driver. Work through them in that order, and restart the app you’re using after each change.",
        ],
      },
      {
        heading: "HyperX mic not working on PS5, Xbox or a controller",
        body: [
          "On a console, plug the 3.5 mm headset fully into the controller. Then check the controller or console mute, which is the mute button on a DualSense or the mute setting on an Xbox, and check the chat output and input devices in the console’s sound settings. Our [Xbox mic test](/xbox-mic-test) and [PS5 mic test](/ps5-mic-test) pages cover the steps in detail.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why is my HyperX Cloud 2 mic not working?",
        a: "Most often the detachable mic isn’t pushed in fully, a mute switch is on, or the headset isn’t selected as the input device. Reseat the mic, check every mute control, choose the headset in your sound settings, and test it on this page.",
      },
      {
        q: "Why is my HyperX headset mic not working on Windows 11?",
        a: "Check Settings, Privacy & security, Microphone, to be sure apps can use the mic. Then pick your HyperX headset under Input in Settings, System, Sound, and check that it isn’t disabled and the volume isn’t zero. A recent Windows update can switch the privacy setting off.",
      },
      {
        q: "How do I test my HyperX mic?",
        a: "Connect the headset to a computer and press “Test my mic” on this page. If the panel names your headset and the meter moves when you speak, the mic works. Record 5 seconds and play it back to hear how it sounds.",
      },
      {
        q: "My HyperX mic works but sounds quiet or full of static. What should I do?",
        a: "Raise the input volume a little, and lower the microphone boost if the sound is hissy, since a boost that’s too high adds noise. Check that the boom mic is close to your mouth, and reseat it in case it’s loose.",
      },
      {
        q: "How do I know whether my HyperX mic is muted?",
        a: "It depends on the model. Look for a mute switch or button on the headset, the in-line remote or the USB control box. On the wired Cloud III, the mute button’s LED is on when the mic is muted. Also check whether the app you’re using has muted you.",
      },
      {
        q: "Can I use my HyperX mic when it’s connected by wire on a wireless model?",
        a: "It depends on the model. HyperX notes that on some wireless headsets, the wired connection doesn’t carry microphone audio. Use the wireless dongle or the connection your manual says supports the mic.",
      },
    ],
    related: [
      "fix/mic-not-working",
      "fix/mic-too-quiet",
      "xbox-mic-test",
      "ps5-mic-test",
      "mic-test-windows-11",
      "fix/discord-mic-not-working",
    ],
  },
];
