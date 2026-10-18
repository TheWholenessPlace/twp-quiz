// ——— The Wholeness Place · locked brand system ———
export const C = {
  navy: "#263f60", ocean: "#1f628e", sky: "#69adc6", lightBlue: "#baebff",
  ice: "#c0f0f7", cream: "#fffff6", gold: "#bd9558", brown: "#7d6145",
};

export const QUESTIONS = [
  { q: "When you finally sit down at night, what happens?", a: [
    ["My mind keeps running the list", "reset"],
    ["I feel far away from myself", "reconnect"],
    ["My body stays tense, still braced", "regulate"],
    ["I'm too depleted to feel anything", "restore"],
  ]},
  { q: "What has your body been telling you lately?", a: [
    ["Wired. I can't power down", "reset"],
    ["Numb. Going through the motions", "reconnect"],
    ["On edge. Everything sets me off", "regulate"],
    ["Heavy. Running on empty", "restore"],
  ]},
  { q: "When did you last feel like yourself?", a: [
    ["I can't slow down long enough to know", "reset"],
    ["It's been so long I almost forgot her", "reconnect"],
    ["I feel her — but I can't stay steady", "regulate"],
    ["She's in there. Just exhausted", "restore"],
  ]},
  { q: "What sounds like relief right now?", a: [
    ["Everything stopping for one hour", "reset"],
    ["Remembering what I actually want", "reconnect"],
    ["Feeling calm in my own skin", "regulate"],
    ["Being taken care of, for once", "restore"],
  ]},
  { q: "How do you get through the hard days?", a: [
    ["Push through now, crash later", "reset"],
    ["Disappear into everyone else's needs", "reconnect"],
    ["Hold it together until I can't", "regulate"],
    ["Honestly? I'm past getting through", "restore"],
  ]},
  { q: "How's sleep been?", a: [
    ["My mind won't shut off", "reset"],
    ["I sleep — but wake up empty", "reconnect"],
    ["Restless. My body won't settle", "regulate"],
    ["Never enough. Always tired", "restore"],
  ]},
  { q: "If one session could give you one thing?", a: [
    ["A full stop. Silence.", "reset"],
    ["Me, back.", "reconnect"],
    ["Steadiness I get to keep", "regulate"],
    ["Permission to rest", "restore"],
  ]},
];

export const RESULTS = {
  reset: {
    name: "Reset",
    line: "Your body isn't asking you to try harder.",
    body: "It's asking for a full stop. Not a vacation you have to plan. Not a bath you have to clean up after. A real pause — where nothing is required of you. You've been running the list so long you forgot the list isn't you. Come put it down for an hour.",
    rec: "mindwork",
  },
  reconnect: {
    name: "Reconnect",
    line: "Somewhere between everyone who needs you, you got misplaced.",
    body: "You're still in there. But the distance between you and yourself has been growing quietly for a while now. This work is how we close that distance. Not fixing you — finding you. She's worth coming back for.",
    rec: "soulwork",
  },
  regulate: {
    name: "Regulate",
    line: "You're holding it together — and your body is paying for it.",
    body: "The braced shoulders. The short fuse. The tension that stays even after the day ends. That's not a character flaw. That's a nervous system that's been on duty too long. This work teaches your body it's allowed to stand down. Steadiness you get to keep.",
    rec: "bodywork",
  },
  restore: {
    name: "Restore",
    line: "You're not lazy. You're depleted.",
    body: "There's a difference — and your body knows it, even when your mind argues. This is being taken care of. Actually. Fully. Without earning it first. Rest isn't a reward for finishing everything. It's what makes you possible. Come be held together for a while.",
    rec: "bodywork",
  },
};

export const MODALITIES = {
  bodywork: {
    title: "Bodywork",
    line: "Hands-on massage, on the table. For when it lives in your body and words won't reach it.",
    happens: "",
  },
  mindwork: {
    title: "Mindwork",
    line: "A one-on-one working conversation — coaching, not therapy. For when you need to think it through.",
    happens: "You bring what's gotten too heavy to sort alone — a decision, a transition, a mental load. We slow down, get honest about what's really going on, and work it. You leave with a clear next step, written down.",
  },
  soulwork: {
    title: "Soulwork",
    line: "A guided rest experience — breathing, stillness, sound. You don't talk it through. You receive.",
    happens: "I guide you out of your head and back into your body — slow breathing, deep rest with sound, gentle release of what you're holding. You don't perform, produce, or explain anything. You leave with a quieter nervous system and one small practice for keeping it.",
  },
};

export const BODYWORK_TYPES = [
  ["Swedish", "Gentle, flowing, full-body ease"],
  ["Deep Tissue", "Firm, focused work where it's been holding"],
  ["Aromatherapy", "Soothing touch, carried by scent"],
  ["Pre-Natal / Post-Natal", "Care for the body that's carrying, or carried"],
  ["Himalayan Salt Hot Stone", "The deepest rest on the menu — warmth, weight, and release"],
];

export const DURATIONS = {
  mindwork: [
    ["60 minutes · $145", "One Thing — support with one concern"],
    ["90 minutes · $195", "The Deeper Untangling"],
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

// Soul Work books as an online session on Vagaro. Virtual or in nature is confirmed with the client before the appointment.
export const SOUL_SETTINGS = ["Online"];
export const SOUL_SETTING_NOTE = "We will confirm with you before your appointment whether your session is virtual or in nature.";
export const SOUL_PRICING = {
  "Online": [
    ["60 minutes · $135", "The complete session: time to arrive, settle in, go deep, and come back slowly"],
    ["90 minutes · $185", "More time, for when you need longer to let go"],
  ],
};

export const PILLAR_QUESTIONS = {
  bodywork: {
    focus: { label: "Where does your body hold it most?", options: ["Neck & shoulders", "Back", "Hips & legs", "All of it"] },
    notes: { label: "Anything your body needs me to know?", placeholder: "Injuries, sensitivities, allergies — anything at all." },
  },
  mindwork: {
    focus: { label: "What would make this session a win?", options: ["A decision made", "A plan started", "A pattern untangled", "I'll know it when I feel it"] },
    notes: null,
  },
  soulwork: {
    focus: { label: "What are you hoping to put down?", options: ["The tension I've been holding", "The noise in my head", "Grief or heaviness", "I don't know — I just need to rest"] },
    notes: { label: "Anything that helps your rest — or gets in the way of it?", placeholder: "Sounds, scents, anything at all." },
  },
};

export const FORMATS = {
  bodywork: { fixed: "At the studio · 349 Richmond Street, El Segundo, CA 90245. Arrival details come with your booking confirmation." },
  mindwork: { fixed: "Virtual — we meet from wherever you are." },
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
