import React, { useEffect, useRef, useState } from "react";

function Home() {
  const [lines, setLines] = useState([]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [histIndex, setHistIndex] = useState(-1);
  const [idleHinted, setIdleHinted] = useState(false);

  const shellRef = useRef(null); 
  const inputRef = useRef(null);

  const IDLE_MS = 10000;
  const NAV_OFFSET = 80;

  const links = [
    { href: "#home", label: "home" },
    { href: "#experience", label: "experience" },
    { href: "#education", label: "education" },
    { href: "#recent-works", label: "works" },
    { href: "#contact", label: "contact" },
  ];

  const sectionMap = links.reduce((acc, l) => {
    acc[l.label.toLowerCase()] = l.href;
    return acc;
  }, {});

  const BlinkCSS = () => (
    <style>
      {`
        @keyframes blinkCursor { 0%,49% {opacity:1;} 50%,100% {opacity:0;} }
        .blink-cursor { animation: blinkCursor 1s step-start infinite; }
      `}
    </style>
  );

 const prompt = "C:\\Users\\Vytautas>";

  useEffect(() => {
    const boot = [
      "C:\\Windows\\System32\\cmd.exe",
      "[Admin]",
      "Microsoft Windows [Version 10.0.19045]",
      "(c) Vytautas Vilkas. All rights reserved.",
      "",
      "Welcome to my bio page — try: help  |  goto experience | education | works | contact",
      "",
    ];
    setLines(boot);
    setTimeout(() => inputRef.current?.focus(), 0);
  }, []);

  useEffect(() => {
    const el = shellRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [lines]);

  useEffect(() => {
    if (idleHinted || input !== "") return;
    const t = setTimeout(() => {
      print("[hint] Type:  goto experience  and press Enter.");
      setInput("goto experience");
      setIdleHinted(true);
    }, IDLE_MS);
    return () => clearTimeout(t);
  }, [input, idleHinted]);

  function print(...newLines) {
    setLines((prev) => [...prev, ...newLines]);
  }

  function navigateToAnchor(anchorId) {
    const el = document.querySelector(anchorId);
    if (!el) return false;
    const y = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    window.scrollTo({ top: y, behavior: "smooth" });
    return true;
  }

  function handleCommand(raw) {
    const cmd = raw.trim();
    if (!cmd) {
      print(`${prompt} ${raw}`);
      return;
    }

    setHistory((h) => [cmd, ...h]);
    setHistIndex(-1);

    const [head, ...rest] = cmd.split(" ");
    const argStr = rest.join(" ");

    print(`${prompt} ${cmd}`);

    switch (head.toLowerCase()) {
      case "help":
        print(
          "Available commands:",
          "  github | projects       Open GitHub profile",
          "  goto <section>          Navigate to: home | experience | education | works | contact",
          "  echo <text>             Print text",
          "  clear                   Clear screen"
        );
        break;

      case "projects":
      case "github":
        print("Opening: github.com/VytautasVilkas");
        window.open("https://github.com/VytautasVilkas", "_blank", "noopener,noreferrer");
        break;

      case "goto": {
        const target = argStr.toLowerCase();
        const anchor = sectionMap[target];
        if (!anchor) {
          print(
            `Unknown section: ${target}`,
            'Try: "goto home", "goto experience", "goto education", "goto works", "goto contact"'
          );
          break;
        }
        const ok = navigateToAnchor(anchor); 
        print(ok ? `Navigating to ${anchor}...` : `Section not found: ${anchor}`);
        break;
      }

      case "echo":
        print(argStr);
        break;

      case "clear":
        setLines([]);
        break;

      default:
        print(`'${head}' is not recognized as an internal or external command.`);
        break;
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    handleCommand(input);
    setInput("");
  }

  function onKeyDown(e) {
    if (e.key.length === 1 || e.key === "Backspace" || e.key === "Delete") {
      if (idleHinted) setIdleHinted(false);
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(histIndex + 1, history.length - 1);
      if (history[next]) {
        setHistIndex(next);
        setInput(history[next]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = Math.max(histIndex - 1, -1);
      setHistIndex(next);
      setInput(next === -1 ? "" : history[next]);
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black text-green-400 font-mono">
      <BlinkCSS />
      <div className="w-full max-w-3xl mx-auto p-6">
        <div className="rounded-xl border border-green-500/30 bg-black shadow-[0_0_30px_rgba(34,197,94,0.15)] overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 border-b border-green-500/20 bg-black text-xs tracking-widest text-green-300/80">
            <span>C:\Windows\System32\cmd.exe</span>
            <span>[Admin]</span>
          </div>

          <div
            ref={shellRef}
            className="p-4 leading-relaxed text-sm md:text-base max-h-[60vh] overflow-y-auto"
          >
            <pre className="whitespace-pre-wrap">
              {lines.map((l, i) => (
                <div key={i}>{l}</div>
              ))}
            </pre>

            <form className="mt-2 flex items-center gap-2" onSubmit={onSubmit}>
              <span className="text-green-300/90">{prompt}</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                className="flex-1 bg-transparent outline-none text-green-100 placeholder-green-700/60"
                placeholder="type a command (try: help)"
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck={false}
              />
              <span className="text-green-100 blink-cursor select-none">_</span>
            </form>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-green-500/60 select-none">
          Tip: type <span className="text-green-300">help</span> or{" "}
          <span className="text-green-300">goto experience</span>. Navbar still works if you prefer clicking.
        </p>
      </div>
    </section>
  );
}

export default Home;
