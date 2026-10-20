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
  RESULT_GUIDES,
} from "./config.js";
import { sendRecord, buildIntakeRecord } from "./lib/intake.js";

const VAGARO_STEPS = [
  "Find your session on the list and tap Request.",
  "Choose the date and time that work for you.",
  "Vagaro will ask you to log in. If you are new to Vagaro, tap Sign Up Now and create a free account with your name, email, phone number, and a password. This is a one time step, and it is how Vagaro sends your confirmation and reminders.",
  "Pay your deposit to hold your appointment.",
  "Watch for your confirmation by email or text.",
];

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

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
  const [bMonth, setBMonth] = useState("");
  const [bDay, setBDay] = useState("");
  const [bYear, setBYear] = useState("");
  const birthDate = bMonth && bDay ? `${MONTHS[Number(bMonth) - 1]} ${bDay}${bYear ? `, ${bYear}` : ""}` : "";
  const [birthTime, setBirthTime] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [fade, setFade] = useState(true);
  const [isDebug] = useState(() => new URLSearchParams(window.location.search).get("debug") === "1");

  useEffect(() => {
    const l = document.createElement("link");
    l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@300;400;700&family=Hurricane&display=swap";
    document.head.appendChild(l);
    const st = document.createElement("style");
    st.textContent = "@media (min-width: 900px) { .twp-wrap { zoom: 1.3; } .twp-wide { max-width: 640px !important; } .twp-wide p { font-size: 17.5px; } } @media (min-width: 1400px) { .twp-wrap { zoom: 1.45; } } @media print { @page { size: letter; margin: 0.5in; } .twp-wrap { zoom: 1 !important; max-width: none !important; } .twp-noprint { display: none !important; } .twp-app { background: #fff !important; padding: 0 !important; min-height: 0 !important; } .twp-print-only { display: block !important; } * { -webkit-print-color-adjust: exact; print-color-adjust: exact; } .twp-section { break-inside: avoid; } .twp-logo { width: 170px !important; margin: 0 auto 4px !important; } .twp-app p { font-size: 14.5px !important; } .twp-app h1 { font-size: 24px !important; } .twp-app h3 { font-size: 17px !important; margin-bottom: 8px !important; } .twp-guide-head { margin: 0 0 16px !important; padding: 14px 12px 12px !important; } .twp-section { margin-bottom: 12px !important; } .twp-row { margin-bottom: 6px !important; } .twp-app p.twp-copyright { font-size: 10.5px !important; margin: 8px 0 0 !important; } .twp-app p { line-height: 1.45 !important; } }";
    document.head.appendChild(st);
    return () => { document.head.removeChild(l); document.head.removeChild(st); };
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
    setBMonth(""); setBDay(""); setBYear(""); setBirthTime(""); setBirthPlace("");
    setFullName(""); setPhone("");
  };

  const S = {
    app: {
      minHeight: "100vh",
      background: dark
        ? `linear-gradient(175deg, ${C.navy} 0%, ${C.ocean} 130%)`
        : `linear-gradient(180deg, ${C.ice} 0%, ${C.cream} 34%)`,
      color: dark ? C.cream : C.navy,
      fontFamily: "'Josefin Slab', serif",
      display: "flex", flexDirection: "column", alignItems: "center",
      padding: "0 22px 48px",
      transition: "background .4s ease",
    },
    wrap: { width: "100%", maxWidth: 420, opacity: fade ? 1 : 0, transform: fade ? "translateY(0)" : "translateY(6px)", transition: "opacity .22s ease, transform .22s ease" },
    eyebrow: { fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: dark ? C.lightBlue : C.ocean, fontWeight: 700, margin: "38px 0 6px" },
    script: { fontFamily: "'Hurricane', cursive", fontSize: 32, color: C.gold, margin: "0 0 4px", lineHeight: 1.1 },
    h1: { fontFamily: "'Josefin Slab', serif", fontSize: 32, lineHeight: 1.2, fontWeight: 700, margin: "0 0 14px", color: dark ? C.cream : C.navy },
    h2: { fontFamily: "'Josefin Slab', serif", fontSize: 24, lineHeight: 1.3, fontWeight: 700, margin: "0 0 20px", color: C.navy },
    p: { fontSize: 16, lineHeight: 1.65, fontWeight: 400, margin: "0 0 14px" },
    fine: { fontSize: 13.5, lineHeight: 1.5, fontWeight: 400, color: dark ? C.lightBlue : C.brown },
    btn: { display: "block", width: "100%", textAlign: "left", background: "#fff", border: `1px solid ${C.sky}`, borderLeft: `4px solid ${C.sky}`, borderRadius: 14, padding: "16px 18px", fontSize: 18, fontFamily: "'Josefin Slab', serif", fontWeight: 700, color: C.navy, marginBottom: 12, cursor: "pointer" },
    primary: {
      display: "block", width: "100%", textAlign: "center",
      background: dark ? C.gold : C.navy,
      color: dark ? C.navy : C.cream,
      border: "none", borderRadius: 14, padding: "16px 18px",
      fontSize: 15.5, fontFamily: "'Josefin Slab', serif", fontWeight: 700, letterSpacing: "0.02em", cursor: "pointer", marginTop: 8,
    },
    ghost: { display: "block", width: "100%", textAlign: "center", background: "transparent", color: dark ? C.lightBlue : C.ocean, border: "none", padding: "14px", fontSize: 14, fontFamily: "'Josefin Slab', serif", fontWeight: 700, cursor: "pointer" },
    input: { width: "100%", boxSizing: "border-box", background: "#fff", border: `1px solid ${C.sky}`, borderRadius: 12, padding: "14px 16px", fontSize: 15.5, fontFamily: "'Josefin Slab', serif", color: C.navy, marginBottom: 12, outline: "none" },
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
      {badge && <span style={{ display: "inline-block", whiteSpace: "nowrap", fontSize: 12, fontWeight: 700, letterSpacing: "0.04em", color: C.brown, background: "#f6ecdc", border: `1px solid ${C.gold}`, borderRadius: 20, padding: "3px 10px", marginBottom: 8 }}>{badge}</span>}
      <span style={{ fontWeight: 700, display: "block", color: C.navy }}>{label}</span>
      {sub && <span style={{ fontSize: 16.5, fontWeight: 400, color: C.navy, display: "block", marginTop: 4, lineHeight: 1.45 }}>{sub}</span>}
    </button>
  );

  return (
    <div className="twp-app" style={S.app}>
      <div className={screen === "guide" ? "twp-wrap twp-wide" : "twp-wrap"} style={S.wrap}>

        {screen === "welcome" && (<>
          <div style={{ ...S.eyebrow, fontSize: 15 }}>the wholeness place</div>
          <div style={S.script}>Put yourself back together</div>
          <h1 style={S.h1}>Which R does your body need right now?</h1>
          <hr style={S.goldRule} />
          <p style={S.p}>Not a spa. Not therapy. This is where a woman comes to put herself back together, and it starts with knowing what you actually need.</p>
          <p style={{ ...S.p, color: C.lightBlue }}>There are seven questions, and it takes about two minutes. Answer with how your body feels, not with what your schedule says.</p>
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

          <button style={S.primary} onClick={() => go("how")}>Choose your session</button>
          <p style={{ ...S.p, fontSize: 18, textAlign: "center", marginTop: 20 }}>Want to keep your results?{" "}
            <button onClick={() => go("guide")} style={{ background: "none", border: "none", padding: 0, font: "inherit", fontWeight: 700, color: C.lightBlue, textDecoration: "underline", cursor: "pointer" }}>Download your {R.name} guide (PDF)</button>
          </p>
          {isDebug && (
            <p style={{ ...S.fine, textAlign: "center", marginTop: 14 }}>Your tally: Reset {scores.reset} · Reconnect {scores.reconnect} · Regulate {scores.regulate} · Restore {scores.restore}</p>
          )}
        </>)}

        {screen === "guide" && (() => {
          const G = RESULT_GUIDES[topR];
          const h3 = { fontFamily: "'Josefin Slab', serif", fontSize: 20, fontWeight: 700, color: C.navy, margin: "0 0 12px", display: "flex", alignItems: "center", gap: 10 };
          const bar = { flex: 1, height: 1, background: C.gold, opacity: 0.6 };
          const num = { flex: "0 0 26px", width: 26, height: 26, borderRadius: "50%", background: C.gold, color: "#fff", fontWeight: 700, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1 };
          const row = { display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 10 };
          const txt = { ...S.p, color: C.navy, margin: 0 };
          const List = ({ items }) => <div>{items.map((t, i) => <div key={t} className="twp-row" style={row}><span style={num}>{i + 1}</span><p style={txt}>{t}</p></div>)}</div>;
          return (<>
          <div className="twp-guide-head" style={{ background: `linear-gradient(180deg, ${C.lightBlue} 0%, ${C.ice} 55%, ${C.cream} 100%)`, borderRadius: 20, padding: "26px 18px 22px", margin: "24px 0 26px", textAlign: "center", border: `1px solid ${C.ice}` }}>
            <img className="twp-logo" src="/logo.png" alt="The Wholeness Place Wellness Co." style={{ display: "block", width: 280, maxWidth: "85%", height: "auto", margin: "0 auto 14px" }} />
            <div style={{ ...S.script, fontSize: 50, margin: "0 0 2px" }}>{R.name}</div>
            <h1 style={{ ...S.h1, color: C.navy, fontSize: 28, margin: "0 0 6px" }}>Your {R.name} Guide</h1>
            <hr style={{ ...S.goldRule, margin: "10px auto 0" }} />
          </div>
          <div className="twp-section" style={{ marginBottom: 24 }}><h3 style={h3}>What your result means<span style={bar} /></h3>
            <p style={txt}>{G.means}</p></div>
          <div className="twp-section" style={{ marginBottom: 24 }}><h3 style={h3}>Signs you may notice<span style={bar} /></h3>
            <List items={G.signs} /></div>
          <div className="twp-section" style={{ marginBottom: 24 }}><h3 style={h3}>Three things to try this week<span style={bar} /></h3>
            <List items={G.tries} /></div>
          <div className="twp-section" style={{ background: "#fff", border: `1px solid ${C.lightBlue}`, borderLeft: `5px solid ${C.gold}`, borderRadius: 16, padding: "18px 18px", marginBottom: 20 }}>
            <h3 style={{ ...h3, marginBottom: 8 }}>How a session helps</h3>
            <p style={txt}>{G.session}</p></div>
          <div className="twp-print-only" style={{ display: "none", textAlign: "center", borderTop: `1px solid ${C.gold}`, paddingTop: 12 }}>
            <p style={{ ...txt, fontSize: 14 }}>Book your session at thewholenessplace.com or email info@thewholenessplace.com.<br />349 Richmond Street, El Segundo, CA 90245</p>
          </div>
          <p className="twp-copyright" style={{ ...S.fine, color: C.navy, textAlign: "center", margin: "14px 0 18px" }}>© {new Date().getFullYear()} The Wholeness Place Wellness Co. All rights reserved. This guide is for your personal use only. It may not be copied, shared, or sold without written permission.</p>
          <div className="twp-noprint">
            <button style={S.primary} onClick={() => window.print()}>Save as PDF</button>
            <p style={{ ...S.fine, textAlign: "center", margin: "8px 0 4px" }}>When the print window opens, choose Save as PDF.</p>
            <button style={{ ...S.primary, background: C.navy, color: C.cream }} onClick={() => go("how")}>Choose your session</button>
            <button style={S.ghost} onClick={() => go("result")}>Back to my result</button>
          </div>
        </>); })()}

        {screen === "how" && (<>
          <div style={S.eyebrow}>your {R.name} session</div>
          <h2 style={S.h2}>Choose how we get there.</h2>
          {Object.entries(MODALITIES).map(([key, m]) => (
            <Pill key={key} label={m.title} sub={m.line} active={modality === key}
              badge={R.rec === key ? "Where most women start" : null}
              onClick={() => { setModality(key); setBodyType(""); setDuration(""); }} />
          ))}
          <p style={{ ...S.fine, marginTop: 8 }}>Most women with a {R.name} result start with {MODALITIES[R.rec].title.toLowerCase()}, but you know yourself best.</p>
          <button style={{ ...S.primary, opacity: modality ? 1 : 0.45 }} disabled={!modality} onClick={() => go("detail")}>Continue</button>
        </>)}

        {screen === "detail" && modality === "bodywork" && (<>
          <div style={S.eyebrow}>bodywork</div>
          <h2 style={S.h2}>Which type of massage do you want today?</h2>
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
          <h2 style={S.h2}>Where would you like your soul work session?</h2>
          <p style={S.p}>{MODALITIES.soulwork.happens}</p>
          {SOUL_SETTINGS.map((f) => <Pill key={f} label={f} active={format === f} onClick={() => { setFormat(f); setDuration(""); }} />)}
          {format && (<>
            <p style={{ ...S.p, fontWeight: 700, margin: "18px 0 8px" }}>How much time does today need?</p>
            {SOUL_PRICING[format].map(([d, sub]) => <Pill key={d} label={d} sub={sub} active={duration === d} onClick={() => setDuration(d)} />)}
            {format !== "Online" && <p style={S.fine}>A small distance fee applies outside my service area. I will confirm it with you when you book.</p>}
          </>)}
          <button style={{ ...S.primary, opacity: format && duration ? 1 : 0.45 }} disabled={!(format && duration)} onClick={() => go("intake")}>Continue</button>
        </>)}

        {screen === "intake" && (<>
          <div style={S.eyebrow}>before we begin</div>
          <h2 style={S.h2}>Tell me where you are starting from.</h2>

          <p style={{ ...S.p, fontWeight: 700, marginBottom: 8 }}>What are you carrying right now?</p>
          <textarea style={{ ...S.input, minHeight: 84, resize: "vertical" }} placeholder="Say it plainly. There are no wrong answers." value={carrying} onChange={(e) => setCarrying(e.target.value)} />

          <p style={{ ...S.p, fontWeight: 700, margin: "10px 0 8px" }}>{PILLAR_QUESTIONS[modality].focus.label}</p>
          {PILLAR_QUESTIONS[modality].focus.options.map((w) => <Pill key={w} label={w} active={want === w} onClick={() => setWant(w)} />)}

          <p style={{ ...S.p, fontWeight: 700, margin: "18px 0 8px" }}>Where we will meet</p>
          <p style={{ ...S.p, color: C.ocean }}>{FORMATS[modality].fixed || format}</p>

          {PILLAR_QUESTIONS[modality].notes && (<>
            <p style={{ ...S.p, fontWeight: 700, margin: "18px 0 8px" }}>{PILLAR_QUESTIONS[modality].notes.label}</p>
            <textarea style={{ ...S.input, minHeight: 64, resize: "vertical" }} placeholder={PILLAR_QUESTIONS[modality].notes.placeholder} value={bodyNotes} onChange={(e) => setBodyNotes(e.target.value)} />
          </>)}

          <p style={{ ...S.p, fontWeight: 700, margin: "18px 0 4px" }}>Help me tailor your session.</p>
          <p style={{ ...S.fine, marginBottom: 10 }}>I ask for your birthday so I can celebrate you and personalize your care. Your birth time and city are optional. I use a whole person approach to prepare for your session.</p>
          <p style={{ ...S.p, fontSize: 15, fontWeight: 700, color: C.navy, margin: "0 0 6px" }}>Birthday</p>
          <div style={{ display: "flex", gap: 8 }}>
            {[
              ["Month", bMonth, setBMonth, MONTHS.map((m, i) => [String(i + 1), m]), 1.6],
              ["Day", bDay, setBDay, Array.from({ length: 31 }, (_, i) => [String(i + 1), String(i + 1)]), 1],
              ["Year", bYear, setBYear, Array.from({ length: 100 }, (_, i) => { const y = String(new Date().getFullYear() - i); return [y, y]; }), 1.2],
            ].map(([label, val, set, opts, grow]) => (
              <select key={label} aria-label={label} value={val} onChange={(e) => set(e.target.value)}
                style={{ ...S.input, flex: grow, minWidth: 0, minHeight: 52, padding: "12px 10px", color: val ? C.navy : "#8a8a8a", appearance: "none", WebkitAppearance: "none", backgroundImage: `linear-gradient(45deg, transparent 50%, ${C.navy} 50%), linear-gradient(135deg, ${C.navy} 50%, transparent 50%)`, backgroundPosition: "calc(100% - 16px) 50%, calc(100% - 11px) 50%", backgroundSize: "5px 5px", backgroundRepeat: "no-repeat", paddingRight: 26 }}>
                <option value="">{label}</option>
                {opts.map(([v, t]) => <option key={v} value={v}>{t}</option>)}
              </select>
            ))}
          </div>
          <input style={S.input} placeholder="Birth time (optional)" value={birthTime} onChange={(e) => setBirthTime(e.target.value)} />
          <input style={S.input} placeholder="City you were born in (optional)" value={birthPlace} onChange={(e) => setBirthPlace(e.target.value)} />

          <p style={{ ...S.p, fontWeight: 700, margin: "18px 0 8px" }}>Last thing: How can I reach you?</p>
          <input style={S.input} placeholder="Your name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
          <input style={S.input} type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input style={S.input} type="tel" placeholder="Your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />

          <button style={{ ...S.primary, opacity: want && (FORMATS[modality].fixed || format) && fullName.trim() && email.includes("@") && phone.trim() ? 1 : 0.45 }} disabled={!(want && (FORMATS[modality].fixed || format) && fullName.trim() && email.includes("@") && phone.trim())} onClick={() => go("done")}>
            Continue to booking
          </button>
        </>)}

        {screen === "done" && (<>
          <div style={S.eyebrow}>almost there</div>
          <h1 style={S.h1}>Your session is ready to book.</h1>
          <hr style={S.goldRule} />
          <div style={S.card}>
            <p style={{ ...S.p, margin: 0 }}>
              <strong>{MODALITIES[modality]?.title}</strong>
              {modality === "bodywork" ? <> · {bodyType}{duration && <> · {duration}</>}</> : <> · {duration}</>}
              <br /><span style={{ fontWeight: 400 }}>{FORMATS[modality]?.fixed || format}</span>
            </p>
          </div>
          <p style={S.p}>You said you're carrying: <em>{carrying || "Nothing shared yet."}</em></p>
          <div style={{ ...S.card, background: C.cream, color: C.navy }}>
            <p style={{ ...S.p, fontWeight: 700, marginBottom: 8 }}>How booking works on Vagaro</p>
            <p style={{ ...S.p, fontSize: 15.5, marginBottom: 10, color: C.navy }}>I use Vagaro to schedule appointments. When you tap the button below, my Vagaro page opens in a new tab. Here is what to expect.</p>
            <ol style={{ ...S.p, fontSize: 15.5, color: C.navy, paddingLeft: 20, margin: "0 0 10px" }}>
              {VAGARO_STEPS.map((step) => <li key={step} style={{ marginBottom: 6 }}>{step}</li>)}
            </ol>
            <p style={{ ...S.p, fontSize: 15.5, margin: 0, color: C.navy }}>Your answers from this page have already been sent to me, so you will not need to repeat them. If you get stuck, email info@thewholenessplace.com and I will help you book.</p>
          </div>
          <button style={S.primary} onClick={handleBooking}>Go to Vagaro and pick my time</button>
          <button style={S.ghost} onClick={resetAll}>
            Start over
          </button>
        </>)}

      </div>
    </div>
  );
}
