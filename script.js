function generateExcuse() {
let excuses = [
  "I won’t be able to work today, my eyes are burning 🔥👀",
  "No ❤️ I don’t want to",
  "Mentally I’m on vacation 🏝️",
  "My brain said ‘no thoughts today’ 💀",
  "I opened the laptop… that’s enough productivity 😌",
  "Currently fighting for my life (it’s just Monday) 😭",
  "I need a break from doing absolutely nothing 🤡",
  "Energy level: 2% but emotionally dramatic 🔋💀",
  "I was about to work but then… I didn’t 😏",
  "Respectfully, I will not be participating today 🙏",
  "My vibe is off, I can’t risk it ✨",
  "I blinked and lost motivation 👁️💀",
  "This feels like too much responsibility for me",
  "I deserve rest for no reason whatsoever 😌",
  "I am busy doing nothing very seriously",
  "I woke up tired… so I continued being tired 😴",
  "Today is not giving productivity, it’s giving nap",
  "I need a break from my break",
  "My motivation is buffering… still loading ⏳",
  "I tried, and that’s what matters (I didn’t try)",
  "My brain is on airplane mode ✈️",
  "I am emotionally unavailable for work today",
  "I thought about working… and got exhausted",
  "Today feels illegal to do anything productive",
  "My vibes are not aligned with responsibilities ✨",
  "I deserve a holiday for existing",
  "I’m in my ‘do nothing’ era",
  "I opened the task… and respectfully closed it",
  "This sounds like a tomorrow problem",
  "My energy said ‘absolutely not’",
  "I’m taking a mental health minute (it’s been 6 hours)",
  "I need rest after all the resting I did",
  "My inner voice said ‘skip it’",
  "I’m protecting my peace by doing nothing",
  "Today I identify as unavailable",
  "I blinked and it’s already too late to start",
  "Work is not matching my aesthetic today",
  "I’m currently offline in real life",
  "My brain is lagging like bad WiFi 📶",
  "I would, but I simply won’t",
  "This requires effort… I don’t like that",
  "I lost motivation somewhere between waking up and existing",
  "My mood is not compatible with tasks",
  "I need a nap to recover from waking up",
  "This feels like a lot… I will ignore it",
  "I’m saving my energy for absolutely nothing",
  "I started thinking and immediately stopped",
  "Today’s schedule: survive",
  "I’m doing my best (my best is nothing)",
  "I don’t have the emotional bandwidth",
  "This is above my pay grade (I’m unpaid)",
  "I need a break from being overwhelmed by nothing",
  "My brain said ‘no ❤️’ and I listened",
  "I’m busy doing important nothing",
  "Today is cancelled due to lack of interest",
  "I would explain but I don’t feel like it",
  "This task and I are not meant to be",
  "I’m currently unavailable for effort",
  "My focus left the chat",
  "I need rest after considering working",
  "This sounds like future me’s problem",
  "I’m conserving energy like it’s a national resource",
  "I tried to care… couldn’t find it",
  "I’m in silent mode today",
  "My brain is closed for maintenance",
  "I logged in mentally… does that count?",
  "My productivity is on strike today ✊",
  "I was about to start but then I remembered I exist",
  "This task feels personally offensive",
  "I need a break before I even begin",
  "My brain is doing the spinning wheel thing 🌀",
  "I’m not lazy, I’m on energy-saving mode",
  "I tried to focus and got distracted by my own thoughts",
  "Today’s goal: do less than yesterday",
  "I simply don’t have the vibes for this",
  "My motivation ghosted me 👻",
  "I opened the file and immediately needed a nap",
  "This is giving ‘not today’ energy",
  "I’m overwhelmed by the idea of doing something",
  "My brain said ‘error 404: effort not found’",
  "I’m currently in power-saving human mode 🔋",
  "This task and I have creative differences",
  "I was productive in my dreams, that should count",
  "I don’t feel like being responsible today",
  "I need a moment… it might be permanent"
];
  let emojis = ["😂","😭","💀","🤡","🔥"];

  let random = Math.floor(Math.random() * excuses.length);
  let randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

  document.getElementById("excuse").innerText =
    excuses[random] + " " + randomEmoji;
 sparkleBoom();   
 playRandomSound();
}
function generateAIExcuse() {
    document.title = "AI judging you 😭";
  let aiExcuses = [
    "Monday is not a day, it’s a warning ⚠️",
    "Your motivation left the chat before you even opened your laptop",
    "This task looked at you… and you looked away",
    "You had potential today. Keyword: had 💀",
    "Your brain opened one tab and crashed",
    "Productivity saw you coming and took a day off",
    "You vs work is a one-sided fight… and you’re losing",
    "Your energy is playing hide and seek… and winning",
    "You didn’t procrastinate, you *strategically avoided suffering* 😌",
    "This is not laziness, this is self-preservation",
    "You tried nothing and somehow got tired",
    "Your to-do list is just a suggestion at this point",
    "You woke up just to say ‘not today’",
    "Your focus is on vacation without informing you",
    "You opened the file and your soul left your body",
    "This task requires effort… tragic",
    "You are emotionally booked and busy doing nothing",
    "Your productivity is still in beta testing",
    "You and discipline are currently not on speaking terms",
    "You didn’t fail… you simply didn’t start 😏",
    "Work tried to find you… you were unavailable",
    "Your brain said ‘no’ and you respected it",
    "This isn’t burnout, this is pre-burnout 💀",
    "You came, you saw, you closed the tab",
    "Your goals are waiting… patiently… forever",
    "You are consistent… at avoiding work",
    "This is a problem for future you. Good luck to them",
    "You didn’t lose motivation, you never had it today",
    "Even your excuses are tired at this point",
    "You are running on vibes and zero responsibility"
  ];

  let random = Math.floor(Math.random() * aiExcuses.length);
  document.getElementById("excuse").innerText = aiExcuses[random];
  sparkleBoom();
  playRandomSound();
}

function sparkleBoom() {
  for (let i = 0; i < 15; i++) {
    let s = document.createElement("div");
    s.classList.add("sparkle");

    s.style.left = Math.random() * window.innerWidth + "px";
    s.style.top = Math.random() * window.innerHeight + "px";

    document.body.appendChild(s);

    setTimeout(() => {
      s.remove();
    }, 600);
  }
}
let sounds = [];
let currentSound = null;

for (let i = 1; i <= 53; i++) {
  let audio = new Audio(`sounds/sound${i}.mp3`);
  audio.volume = 0.3;
  sounds.push(audio);
}
function playRandomSound() {
  if (currentSound) {
    currentSound.pause();
    currentSound.currentTime = 0;
  }

  let sound = sounds[Math.floor(Math.random() * sounds.length)];
  currentSound = sound;

  sound.currentTime = 0;
  sound.play();
}