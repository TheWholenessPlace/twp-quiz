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
    focus: { label: "Where does your body hold tension the most?", options: ["My neck and shoulders", "My back", "My hips and legs", "All of it"] },
    notes: { label: "Is there anything about your body I should know?", placeholder: "Please share any injuries, sensitivities, or allergies." },
  },
  mindwork: {
    focus: { label: "What would make this session a success for you?", options: ["I want to make a decision.", "I want to start a plan.", "I want to untangle a pattern.", "I will know it when I feel it."] },
    notes: null,
  },
  soulwork: {
    focus: { label: "What are you hoping to let go of?", options: ["The tension I have been holding", "The noise in my head", "Grief or heaviness", "I am not sure. I just need to rest."] },
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
