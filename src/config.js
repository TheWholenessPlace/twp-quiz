// ——— The Wholeness Place · locked brand system ———
export const C = {
  navy: "#263f60", ocean: "#1f628e", sky: "#69adc6", lightBlue: "#baebff",
  ice: "#c0f0f7", cream: "#fffff6", gold: "#bd9558", brown: "#7d6145",
};

export const QUESTIONS = [
  { q: "When you finally sit down at night, what happens?", a: [
    ["My mind keeps running through my to do list.", "reset"],
    ["I feel far away from myself.", "reconnect"],
    ["My body stays tense and braced.", "regulate"],
    ["I am too worn out to feel anything.", "restore"],
  ]},
  { q: "What has your body been telling you lately?", a: [
    ["I feel wired, and I cannot power down.", "reset"],
    ["I feel numb, like I am going through the motions.", "reconnect"],
    ["I feel on edge, and little things set me off.", "regulate"],
    ["I feel heavy, like I am running on empty.", "restore"],
  ]},
  { q: "When did you last feel like yourself?", a: [
    ["I cannot slow down long enough to know.", "reset"],
    ["It has been so long that I almost forgot who she is.", "reconnect"],
    ["I can feel her, but I cannot stay steady.", "regulate"],
    ["She is still in there, but she is exhausted.", "restore"],
  ]},
  { q: "What sounds like relief right now?", a: [
    ["I want everything to stop for one hour.", "reset"],
    ["I want to remember what I actually want.", "reconnect"],
    ["I want to feel calm in my own skin.", "regulate"],
    ["I want to be taken care of for once.", "restore"],
  ]},
  { q: "How do you get through the hard days?", a: [
    ["I push through now and crash later.", "reset"],
    ["I lose myself in everyone else's needs.", "reconnect"],
    ["I hold it together until I cannot anymore.", "regulate"],
    ["Honestly, I am past getting through.", "restore"],
  ]},
  { q: "How has your sleep been?", a: [
    ["My mind will not shut off.", "reset"],
    ["I sleep, but I wake up feeling empty.", "reconnect"],
    ["I am restless, and my body will not settle.", "regulate"],
    ["I never get enough, and I am always tired.", "restore"],
  ]},
  { q: "If one session could give you one thing, what would it be?", a: [
    ["I want a full stop and some quiet.", "reset"],
    ["I want to feel like myself again.", "reconnect"],
    ["I want a steadiness I get to keep.", "regulate"],
    ["I want permission to rest.", "restore"],
  ]},
];

export const RESULTS = {
  reset: {
    name: "Reset",
    line: "Your body is not asking you to try harder.",
    body: "Your body is asking for a full stop. It is not asking for a vacation you have to plan or a bath you have to clean up after. It is asking for a real pause where nothing is required of you. You have been running through your list for so long that you forgot the list is not you. Come put it down for an hour.",
    rec: "mindwork",
  },
  reconnect: {
    name: "Reconnect",
    line: "Somewhere between everyone who needs you, you lost track of yourself.",
    body: "You are still in there. The distance between you and yourself has been growing quietly for a while now. This work is how we close that distance. We are not fixing you. We are finding you, and you are worth coming back for.",
    rec: "soulwork",
  },
  regulate: {
    name: "Regulate",
    line: "You are holding it together, and your body is paying for it.",
    body: "Your shoulders stay braced, your patience runs short, and the tension stays even after the day ends. That is not a character flaw. That is a nervous system that has been on duty too long. This work teaches your body that it is allowed to stand down, and it gives you a steadiness you get to keep.",
    rec: "bodywork",
  },
  restore: {
    name: "Restore",
    line: "You are not lazy. You are depleted.",
    body: "There is a difference, and your body knows it even when your mind argues. This is a time to be taken care of fully, without earning it first. Rest is not a reward for finishing everything. Rest is what makes everything else possible. Come rest and let yourself be cared for.",
    rec: "bodywork",
  },
};

export const MODALITIES = {
  bodywork: {
    title: "Bodywork",
    line: "This is hands on massage on the table. It is for when the stress lives in your body and words will not reach it.",
    happens: "",
  },
  mindwork: {
    title: "Mindwork",
    line: "This is a one on one working conversation. It is coaching, not therapy, for when you need to think something through.",
    happens: "You bring what has gotten too heavy to sort out alone, such as a decision, a transition, or a mental load. We slow down, get honest about what is really going on, and work through it. You leave with a clear next step, written down.",
  },
  soulwork: {
    title: "Soulwork",
    line: "This is a guided rest experience with breathing, stillness, and sound. You do not have to talk it through. You simply receive.",
    happens: "I guide you out of your head and back into your body with slow breathing, deep rest with sound, and gentle release of what you are holding. You do not have to perform, produce, or explain anything. You leave with a quieter nervous system and one small practice to keep it that way.",
  },
};

export const BODYWORK_TYPES = [
  ["Swedish", "This is gentle, flowing, full body relief."],
  ["Deep Tissue", "This is firm, focused work on the areas holding tension."],
  ["Aromatherapy", "This is soothing massage paired with essential oils chosen for you."],
  ["Pre-Natal / Post-Natal", "This is care for your body during pregnancy or after birth."],
  ["Himalayan Salt Hot Stone", "This is the deepest rest on the menu, with warm stones that help your body release."],
];

export const DURATIONS = {
  mindwork: [
    ["60 minutes · $145", "This session gives you support with one concern."],
    ["90 minutes · $195", "This session gives you more time to work through something bigger."],
  ],
};

// Prices match the live Vagaro menu (checked Oct 18, 2026).
export const BODYWORK_PRICING = {
  "Swedish": [
    ["60 minutes · $135", ""],
    ["90 minutes · $160", ""],
  ],
  "Deep Tissue": [
    ["60 minutes · $145", ""],
    ["90 minutes · $175", ""],
  ],
  "Aromatherapy": [
    ["60 minutes · $140", ""],
    ["90 minutes · $165", ""],
  ],
  "Pre-Natal / Post-Natal": [
    ["60 minutes · $145", ""],
    ["90 minutes · $175", ""],
  ],
  "Himalayan Salt Hot Stone": [
    ["60 minutes · $165", ""],
    ["90 minutes · $205", ""],
  ],
};

// Matches the Vagaro Soul Work menu: Virtual and Nature sessions (checked Oct 18, 2026).
export const SOUL_SETTINGS = ["Online", "In nature"];
export const SOUL_PRICING = {
  "Online": [
    ["60 minutes · $135", "This is the complete session, with time to arrive, settle in, go deep, and come back slowly."],
    ["90 minutes · $185", "This gives you more time when you need longer to let go."],
  ],
  "In nature": [
    ["60 minutes · $185", "This is the complete session, held outdoors where it is quiet."],
    ["90 minutes · $235", "This gives you more time when you need longer to let go."],
  ],
};

export const PILLAR_QUESTIONS = {
  bodywork: {
    focus: { label: "Where does your body hold tension the most?", options: ["My neck and shoulders", "My back", "My hips and legs", "All of it", "Somewhere else"], other: "Somewhere else", otherPlaceholder: "Tell me where you feel it most." },
    notes: { label: "Is there anything about your body I should know?", placeholder: "Please share any injuries, sensitivities, or allergies." },
  },
  mindwork: {
    focus: { label: "What would make this session a success for you?", options: ["I want to make a decision.", "I want to start a plan.", "I want to untangle a pattern.", "I will know it when I feel it.", "Something else"], other: "Something else", otherPlaceholder: "Tell me what would make this session a success for you." },
    notes: null,
  },
  soulwork: {
    focus: { label: "What are you hoping to let go of?", options: ["The tension I have been holding", "The noise in my head", "Grief or heaviness", "I am not sure. I just need to rest.", "Something else"], other: "Something else", otherPlaceholder: "Tell me what you are hoping to let go of." },
    notes: { label: "Is there anything that helps you rest or gets in the way of rest?", placeholder: "Please share any sounds, scents, or other preferences." },
  },
};

export const FORMATS = {
  bodywork: { fixed: "Your session is at the studio at 349 Richmond Street, El Segundo, CA 90245. Arrival details come with your booking confirmation." },
  mindwork: { fixed: "Your session is virtual, so we meet from wherever you are." },
  soulwork: {},
};

export const DARK_SCREENS = ["welcome", "result", "done"];

// ——— Real booking + delivery config ———
// All bookings go to the Vagaro services menu. Swap providers by editing this object only.
const VAGARO_SERVICES = "https://www.vagaro.com/thewholenessplacewellnessco/services";

export const BOOKING_LINKS = {
  mindwork: VAGARO_SERVICES,
  soulwork: VAGARO_SERVICES,
  bodywork: {},
  fallback: VAGARO_SERVICES,
};

export function getBookingLink(modality, bodyType) {
  if (modality === "bodywork") {
    return BOOKING_LINKS.bodywork[bodyType] || BOOKING_LINKS.fallback;
  }
  return BOOKING_LINKS[modality] || BOOKING_LINKS.fallback;
}

export const EBOOK_URL = "https://thewholenessplace.store/shop/268362d4-938a-43ce-8225-cafb78e62462";
export const INTAKE_DELIVERY_EMAIL = "info@thewholenessplace.com";

// ——— Result guides (shown on screen after email capture; saveable as PDF) ———
export const RESULT_GUIDES = {
  reset: {
    means: "Your mind has been working nonstop, and your body has not had a real break. You are not failing. You are overloaded, and you need a full stop.",
    signs: [
      "Your mind keeps running through your to do list at night.",
      "You feel wired, even when you are tired.",
      "You find it hard to sit still without picking up your phone.",
      "You push through the day and crash at the end of it.",
    ],
    tries: [
      "Write down everything on your mind before bed. Getting it on paper tells your brain it does not have to hold it.",
      "Take one 10 minute break each day with no phone, no tasks, and no one needing you.",
      "Pick one thing on your list that can wait, and let it wait.",
    ],
    session: "Mindwork gives you a set time to sort through what is on your mind with someone in your corner. We name what is really going on, decide what matters most, and you leave with one clear next step, written down.",
  },
  reconnect: {
    means: "You have spent so much time taking care of everyone else that you have lost track of yourself. You are still in there. You need time and space to come back to what you feel and what you want.",
    signs: [
      "You feel like you are going through the motions.",
      "You find it hard to answer the question \"What do you want?\"",
      "You feel numb or far away from yourself.",
      "Your days are filled with other people's needs.",
    ],
    tries: [
      "Each morning, ask yourself one question: \"How do I feel right now?\" Answer honestly, even if the answer is \"I don't know.\"",
      "Do one small thing each day just because you enjoy it.",
      "Spend 10 minutes outside without music or a podcast. Notice what you see and hear.",
    ],
    session: "Soulwork is a guided rest session with breathing, stillness, and sound. You do not have to talk it through or explain anything. It gives you quiet time to reconnect with yourself, and you leave with one small practice to keep that connection going.",
  },
  regulate: {
    means: "You have been holding it together for a long time, and your body has been carrying the stress. The tension, the short temper, and the trouble settling down are signs that your nervous system has been on alert too long. Your body needs help learning that it can relax.",
    signs: [
      "Your shoulders, jaw, or back stay tight.",
      "Small things set you off more than they used to.",
      "Your body feels restless, even when you try to rest.",
      "You stay braced, even after the day is over.",
    ],
    tries: [
      "Take five slow breaths, making each exhale longer than the inhale. Do this whenever you notice tension.",
      "Before bed, drop your shoulders, unclench your jaw, and soften your hands.",
      "Take a short walk after a stressful moment to help your body release it.",
    ],
    session: "Bodywork is hands on massage that works directly on the tension your body is holding. Regular sessions help your body let go of stress and settle into a calmer state that lasts beyond the session.",
  },
  restore: {
    means: "You are not lazy. You are depleted. You have been giving more than you have, and your body is asking you to rest. Rest is not a reward you earn after everything is done. It is what you need to keep going.",
    signs: [
      "You feel tired, even after you sleep.",
      "Your body feels heavy, like you are running on empty.",
      "You have little energy for things you used to enjoy.",
      "You feel guilty when you rest.",
    ],
    tries: [
      "Go to bed 30 minutes earlier on at least three nights.",
      "Say no to one request that would drain you.",
      "Schedule rest on your calendar the same way you schedule work.",
    ],
    session: "Bodywork gives your body deep, full rest while someone takes care of you. For this result, a longer session or Himalayan Salt Hot Stone massage can help your body fully let go and recover.",
  },
};
