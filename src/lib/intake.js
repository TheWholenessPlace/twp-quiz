// Owner sets this after creating a form at https://formspree.io pointed at
// info@thewholenessplace.com — see README for setup steps. No backend required.
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || "";

async function postRecord(record) {
  if (!FORMSPREE_ENDPOINT) {
    console.warn("VITE_FORMSPREE_ENDPOINT is not configured — intake record was not sent.", record);
    return { ok: false };
  }
  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(record),
    });
    return { ok: res.ok };
  } catch {
    return { ok: false };
  }
}

// Fire-and-forget send with one background retry on failure, per spec section 7:
// "do not block her — open the booking link anyway and retry the send in the
// background once."
export function sendRecord(record) {
  postRecord(record).then((result) => {
    if (!result.ok) {
      setTimeout(() => postRecord(record), 2000);
    }
  });
}

function scoreTally(scores) {
  return `Reset ${scores.reset} · Reconnect ${scores.reconnect} · Regulate ${scores.regulate} · Restore ${scores.restore}`;
}

export function sendEmailCapture({ email, resultName, scores }) {
  sendRecord({
    _subject: `New quiz email capture — ${resultName}`,
    record_type: "email_capture",
    timestamp: new Date().toISOString(),
    email,
    quiz_result: resultName,
    score_tally: scoreTally(scores),
  });
}

export function buildIntakeRecord({
  resultName,
  scores,
  modality,
  modalityTitle,
  session,
  duration,
  carrying,
  want,
  bodyNotes,
  birthDate,
  birthTime,
  birthPlace,
  email,
}) {
  return {
    _subject: `New quiz intake — ${resultName} → ${modalityTitle}`,
    record_type: "intake",
    timestamp: new Date().toISOString(),
    quiz_result: resultName,
    score_tally: scoreTally(scores),
    modality,
    bodywork_type_or_soulwork_setting: session,
    duration,
    what_are_you_carrying: carrying,
    pillar_focus_answer: want,
    pillar_notes: bodyNotes,
    birth_date: birthDate,
    birth_time: birthTime,
    birth_city: birthPlace,
    email: email || "",
  };
}
