import { useState, useEffect } from "react";
import {
  C,
  QUESTIONS,
  RESULTS,
  MODALITIES,
  BODYWORK_TYPES,
  DURATIONS,
  BODYWORK_PRICING,
  SOUL_SETTINGS,
  SOUL_PRICING,
  PILLAR_QUESTIONS,
  FORMATS,
  DARK_SCREENS,
  getBookingLink,
  EBOOK_URL,
} from "./config.js";
import { sendRecord, sendEmailCapture, buildIntakeRecord } from "./lib/intake.js";

const DIRECT_MODALITIES = ["bodywork", "mindwork", "soulwork"];

export default function TWPQuiz() {
  const [directStart] = useState(() => {
    const s = new URLSearchParams(window.location.search).get("start");
    return DIRECT_MODALITIES.includes(s) ? s : null;
  });
  const [screen, setScreen] = useState(() => (directStart ? "detail" : "welcome"));
  const [qi, setQi] = useState(0);
  const [scores, setScores] = useState({ reset: 0, reconnect: 0, regulate: 0, restore: 0 });
  const [shuffled, setShuffled] = useState(() => QUESTIONS.map((q) => [...q.a].sort(() => Math.random() - 0.5)));
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [modality, setModality] = useState(() => directStart || "");
  const [bodyType, setBodyType] = useState("");
  const [duration, setDuration] = useState("");
  const [carrying, setCarrying] = useState("");
  const [want, setWant] = useState("");
  const [bodyNotes, setBodyNotes] = useState("");
  const [format, setFormat] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [birthTime, setBirthTime] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [fade, setFade] = useState(true);
  const [isDebug] = useState(() => new URLSearchParams(window.location.search).get("debug") === "1");

  useEffect(() => {
    const l = document.createElement("link");
    l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&family=Lato:wght@300;400;700&family=Hurricane&display=swap";
    document.head.appendChild(l);
    return () => document.head.removeChild(l);
  }, []);

  const go = (next) => { setFade(false); setTimeout(() => { setScreen(next); setFade(true); }, 220); };

  const answer = (r) => {
    setScores((s) => ({ ...s, [r]: s[r] + 1 }));
    if (qi < QUESTIONS.length - 1) {
      setFade(false);
      setTimeout(() => { setQi(qi + 1); setFade(true); }, 180);
    } else {
      go("result");
    }
  };

  const topR = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  const R = RESULTS[topR];
  const dark = DARK_SCREENS.includes(screen);
  const resultName = directStart ? "direct" : R.name;

  const handleEmailSubmit = () => {
    if (!email.includes("@")) return;
    sendEmailCapture({ email, resultName, scores });
    window.open(EBOOK_URL, "_blank", "noopener,noreferrer");
    setEmailSent(true);
  };

  const handleBooking = () => {
    const session = modality === "bodywork" ? bodyType : modality === "soulwork" ? format : "";
    const record = buildIntakeRecord({
      resultName,
      scores,
      modality,
      modalityTitle: MODALITIES[modality]?.title || modality,
      session,
      duration,
      carrying,
      want,
      bodyNotes,
      birthDate,
      birthTime,
      birthPlace,
      fullName,
      phone,
      email,
    });
    sendRecord(record);
    const link = getBookingLink(modality, bodyType);
    window.open(link, "_blank", "noopener,noreferrer");
  };

  const resetAll = () => {
    setScreen("welcome"); setQi(0);
    setScores({ reset: 0, reconnect: 0, regulate: 0, restore: 0 });
    setShuffled(QUESTIONS.map((q) => [...q.a].sort(() => Math.random() - 0.5)));
    setEmail(""); setEmailSent(false);
    setModality(""); setBodyType(""); setDuration("");
    setCarrying(""); setWant(""); setBodyNotes(""); setFormat("");
    setBirthDate(""); setBirthTime(""); setBirthPlace("");
    setFullName(""); setPhone("");
  };

  const S = {
    app: {
      minHeight: "100vh",
      background: dark
        ? `linear-gradient(175deg, ${C.navy} 0%, ${C.ocean} 130%)`
        : `linear-gradient(180deg, ${C.ice} 0%, ${C.cream} 34%)`,
      color: dark ? C.cream : C.navy,
      fontFamily: "'Lato', sans-serif",
      display: "flex", flexDirection: "column", alignItems: "center",
      padding: "0 22px 48px",
      transition: "background .4s ease",
    },
    wrap: { width: "100%", maxWidth: 420, opacity: fade ? 1 : 0, transform: fade ? "translateY(0)" : "translateY(6px)", transition: "opacity .22s ease, transform .22s ease" },
    eyebrow: { fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: dark ? C.lightBlue : C.ocean, fontWeight: 700, margin: "38px 0 6px" },
    script: { fontFamily: "'Hurricane', cursive", fontSize: 32, color: C.gold, margin: "0 0 4px", lineHeight: 1.1 },
    h1: { fontFamily: "'Playfair Display', serif", fontSize: 32, lineHeight: 1.2, fontWeight: 600, margin: "0 0 14px", color: dark ? C.cream : C.navy },
    h2: { fontFamily: "'Playfair Display', serif", fontSize: 24, lineHeight: 1.3, fontWeight: 600, margin: "0 0 20px", color: C.navy },
    p: { fontSize: 16, lineHeight: 1.65, fontWeight: 300, margin: "0 0 14px" },
    fine: { fontSize: 12.5, lineHeight: 1.5, fontWeight: 300, color: dark ? C.lightBlue : C.brown },
    btn: { display: "block", width: "100%", textAlign: "left", background: "#fff", border: `1px solid ${C.sky}`, borderLeft: `4px solid ${C.sky}`, borderRadius: 14, padding: "16px 18px", fontSize: 15.5, fontFamily: "'Lato', sans-serif", fontWeight: 400, color: C.navy, marginBottom: 12, cursor: "pointer" },
    primary: {
      display: "block", width: "100%", textAlign: "center",
      background: dark ? C.gold : C.navy,
      color: dark ? C.navy : C.cream,
      border: "none", borderRadius: 14, padding: "16px 18px",
      fontSize: 15.5, fontWeight: 700, letterSpacing: "0.02em", cursor: "pointer", marginTop: 8,
    },
    ghost: { display: "block", width: "100%", textAlign: "center", background: "transparent", color: dark ? C.lightBlue : C.ocean, border: "none", padding: "14px", fontSize: 14, cursor: "pointer" },
    input: { width: "100%", boxSizing: "border-box", background: "#fff", border: `1px solid ${C.sky}`, borderRadius: 12, padding: "14px 16px", fontSize: 15.5, fontFamily: "'Lato', sans-serif", color: C.navy, marginBottom: 12, outline: "none" },
    goldRule: { width: 44, height: 3, background: C.gold, border: "none", margin: "0 0 20px" },
    dots: { display: "flex", gap: 7, margin: "40px 0 26px" },
    card: { background: dark ? C.cream : "#fff", color: C.navy, border: `1px solid ${dark ? C.gold : C.lightBlue}`, borderRadius: 16, padding: "20px 18px", margin: "20px 0 8px" },
  };

  const Dots = () => (
    <div style={S.dots}>
      {QUESTIONS.map((_, i) => (
        <div key={i} style={{ height: 6, borderRadius: 3, flex: 1, background: i < qi ? C.ocean : i === qi ? C.gold : C.lightBlue, transition: "background .3s" }} />
      ))}
    </div>
  );

  const Pill = ({ label, sub, active, onClick, badge }) => (
    <button onClick={onClick} style={{ ...S.btn, marginBottom: 10, borderColor: active ? C.gold : C.sky, borderLeftColor: active ? C.gold : C.sky, background: active ? "#fdf8f0" : "#fff" }}>
      <span style={{ fontWeight: 700, display: "block", color: C.navy }}>
        {label}
        {badge && <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#fff", background: C.ocean, borderRadius: 8, padding: "3px 8px", marginLeft: 8, verticalAlign: "middle" }}>{badge}</span>}
      </span>
      {sub && <span style={{ fontSize: 13.5, fontWeight: 300, color: C.ocean, display: "block", marginTop: 4, lineHeight: 1.45 }}>{sub}</span>}
    </button>
  );

  return (
    <div style={S.app}>
      <div style={S.wrap}>

        {screen === "welcome" && (<>
          <div style={S.eyebrow}>the wholeness place</div>
          <div style={S.script}>put yourself back together</div>
          <h1 style={S.h1}>Which R does your body need right now?</h1>
          <hr style={S.goldRule} />
          <p style={S.p}>Not a spa. Not therapy. This is where a woman comes to put herself back together — and it starts with knowing what you actually need.</p>
          <p style={{ ...S.p, color: C.lightBlue }}>Seven questions. Two minutes. Answer with your body, not your calendar.</p>
          <button style={S.primary} onClick={() => go("quiz")}>Start</button>
        </>)}

        {screen === "quiz" && (<>
          <Dots />
          <h2 style={S.h2}>{QUESTIONS[qi].q}</h2>
          {shuffled[qi].map(([label, r]) => (
            <button key={label} style={S.btn} onClick={() => answer(r)}>{label}</button>
          ))}
        </>)}

        {screen === "result" && (<>
          <div style={S.eyebrow}>your result</div>
          <div style={{ ...S.script, fontSize: 56, margin: "6px 0 2px" }}>{R.name}</div>
          <hr style={S.goldRule} />
          <p style={{ ...S.p, fontWeight: 700 }}>{R.line}</p>
          <p style={S.p}>{R.body}</p>

          <div style={S.card}>
            <p style={{ ...S.p, fontWeight: 700, marginBottom: 6 }}>Take your result with you.</p>
            <p style={{ ...S.p, fontSize: 14.5, marginBottom: 14 }}>Get your full {R.name} guide + the free ebook, <em>Coming Home to Yourself</em>.</p>
            {!emailSent ? (<>
              <input style={S.input} type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <button style={{ ...S.primary, marginTop: 0, background: C.navy, color: C.cream }} onClick={handleEmailSubmit}>Send it to me</button>
            </>) : (
              <p style={{ ...S.p, color: C.ocean, fontWeight: 700, margin: 0 }}>Sent. Check your inbox. ✳</p>
            )}
          </div>

          <button style={S.primary} onClick={() => go("how")}>Choose your session</button>
          {isDebug && (
            <p style={{ ...S.fine, textAlign: "center", marginTop: 14 }}>Your tally — Reset {scores.reset} · Reconnect {scores.reconnect} · Regulate {scores.regulate} · Restore {scores.restore}</p>
          )}
        </>)}

        {screen === "how" && (<>
          <div style={S.eyebrow}>your {R.name} session</div>
          <h2 style={S.h2}>Choose how we get there.</h2>
          {Object.entries(MODALITIES).map(([key, m]) => (
            <Pill key={key} label={m.title} sub={m.line} active={modality === key}
              badge={R.rec === key ? "where most start" : null}
              onClick={() => { setModality(key); setBodyType(""); setDuration(""); }} />
          ))}
          <p style={{ ...S.fine, marginTop: 8 }}>Most women with a {R.name} result start with {MODALITIES[R.rec].title.toLowerCase()} — but you know yourself.</p>
          <button style={{ ...S.primary, opacity: modality ? 1 : 0.45 }} disabled={!modality} onClick={() => go("detail")}>Continue</button>
        </>)}

        {screen === "detail" && modality === "bodywork" && (<>
          <div style={S.eyebrow}>bodywork</div>
          <h2 style={S.h2}>Which kind of hands does today call for?</h2>
          {BODYWORK_TYPES.map(([t, sub]) => (
            <Pill key={t} label={t} sub={sub} active={bodyType === t} onClick={() => { setBodyType(t); setDuration(""); }} />
          ))}
          {bodyType && BODYWORK_PRICING[bodyType] && (<>
            <p style={{ ...S.p, fontWeight: 700, margin: "18px 0 8px" }}>How much time does your body need?</p>
            {BODYWORK_PRICING[bodyType].map(([d]) => <Pill key={d} label={d} active={duration === d} onClick={() => setDuration(d)} />)}
          </>)}
          {bodyType && !BODYWORK_PRICING[bodyType] && (
            <p style={S.fine}>Pricing and times for this session are confirmed at booking.</p>
          )}
          <button style={{ ...S.primary, opacity: bodyType && (duration || !BODYWORK_PRICING[bodyType]) ? 1 : 0.45 }} disabled={!(bodyType && (duration || !BODYWORK_PRICING[bodyType]))} onClick={() => go("intake")}>Continue</button>
        </>)}

        {screen === "detail" && modality === "mindwork" && (<>
          <div style={S.eyebrow}>mindwork</div>
          <h2 style={S.h2}>How much time does today need?</h2>
          <p style={S.p}>{MODALITIES.mindwork.happens}</p>
          {DURATIONS.mindwork.map(([d, sub]) => <Pill key={d} label={d} sub={sub} active={duration === d} onClick={() => setDuration(d)} />)}

          <button style={{ ...S.primary, opacity: duration ? 1 : 0.45 }} disabled={!duration} onClick={() => go("intake")}>Continue</button>
        </>)}

        {screen === "detail" && modality === "soulwork" && (<>
          <div style={S.eyebrow}>soulwork</div>
          <h2 style={S.h2}>Where should soul work find you?</h2>
          <p style={S.p}>{MODALITIES.soulwork.happens}</p>
          {SOUL_SETTINGS.map((f) => <Pill key={f} label={f} active={format === f} onClick={() => { setFormat(f); setDuration(""); }} />)}
          {format && (<>
            <p style={{ ...S.p, fontWeight: 700, margin: "18px 0 8px" }}>How much time does today need?</p>
            {SOUL_PRICING[format].map(([d, sub]) => <Pill key={d} label={d} sub={sub} active={duration === d} onClick={() => setDuration(d)} />)}
            {format !== "Online" && <p style={S.fine}>Beyond my service radius, a small distance fee applies — confirmed at booking.</p>}
          </>)}
          <button style={{ ...S.primary, opacity: format && duration ? 1 : 0.45 }} disabled={!(format && duration)} onClick={() => go("intake")}>Continue</button>
        </>)}

        {screen === "intake" && (<>
          <div style={S.eyebrow}>before we begin</div>
          <h2 style={S.h2}>Tell me where you're starting from.</h2>

          <p style={{ ...S.p, fontWeight: 700, marginBottom: 8 }}>What are you carrying right now?</p>
          <textarea style={{ ...S.input, minHeight: 84, resize: "vertical" }} placeholder="Say it plainly. No one grades this." value={carrying} onChange={(e) => setCarrying(e.target.value)} />

          <p style={{ ...S.p, fontWeight: 700, margin: "10px 0 8px" }}>{PILLAR_QUESTIONS[modality].focus.label}</p>
          {PILLAR_QUESTIONS[modality].focus.options.map((w) => <Pill key={w} label={w} active={want === w} onClick={() => setWant(w)} />)}

          <p style={{ ...S.p, fontWeight: 700, margin: "18px 0 8px" }}>Where we meet</p>
          <p style={{ ...S.p, color: C.ocean }}>{FORMATS[modality].fixed || format}</p>

          {PILLAR_QUESTIONS[modality].notes && (<>
            <p style={{ ...S.p, fontWeight: 700, margin: "18px 0 8px" }}>{PILLAR_QUESTIONS[modality].notes.label}</p>
            <textarea style={{ ...S.input, minHeight: 64, resize: "vertical" }} placeholder={PILLAR_QUESTIONS[modality].notes.placeholder} value={bodyNotes} onChange={(e) => setBodyNotes(e.target.value)} />
          </>)}

          <p style={{ ...S.p, fontWeight: 700, margin: "18px 0 4px" }}>Help me tailor your session</p>
          <p style={{ ...S.fine, marginBottom: 10 }}>Your birthday — so I can celebrate you, and personalize your care. Time & city are optional; I use a whole-person approach to prepare for your session.</p>
          <input style={S.input} placeholder="Birthday" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
          <input style={S.input} placeholder="Birth time (if you happen to know it)" value={birthTime} onChange={(e) => setBirthTime(e.target.value)} />
          <input style={S.input} placeholder="City you were born in (optional)" value={birthPlace} onChange={(e) => setBirthPlace(e.target.value)} />

          <p style={{ ...S.p, fontWeight: 700, margin: "18px 0 8px" }}>Last thing — how do I reach you?</p>
          <input style={S.input} placeholder="Your name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
          <input style={S.input} type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input style={S.input} type="tel" placeholder="Your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />

          <button style={{ ...S.primary, opacity: want && (FORMATS[modality].fixed || format) && fullName.trim() && email.includes("@") && phone.trim() ? 1 : 0.45 }} disabled={!(want && (FORMATS[modality].fixed || format) && fullName.trim() && email.includes("@") && phone.trim())} onClick={() => go("done")}>
            Continue to booking
          </button>
        </>)}

        {screen === "done" && (<>
          <div style={S.eyebrow}>almost there</div>
          <h1 style={S.h1}>Your session is waiting.</h1>
          <hr style={S.goldRule} />
          <div style={S.card}>
            <p style={{ ...S.p, margin: 0 }}>
              <strong>{MODALITIES[modality]?.title}</strong>
              {modality === "bodywork" ? <> · {bodyType}{duration && <> · {duration}</>}</> : <> · {duration}</>}
              <br /><span style={{ fontWeight: 300 }}>{FORMATS[modality]?.fixed || format}</span>
            </p>
          </div>
          <p style={S.p}>You said you're carrying: <em>{carrying || "—"}</em></p>
          <button style={S.primary} onClick={handleBooking}>Pick my time</button>
          <button style={S.ghost} onClick={resetAll}>
            Start over
          </button>
        </>)}

      </div>
    </div>
  );
}
