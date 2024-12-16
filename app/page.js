'use client'

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [slot1, setSlot1] = useState(0);
  const [slot2, setSlot2] = useState(0);
  const [slot3, setSlot3] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [autoSpinning, setAutoSpinning] = useState(false);

  const rand = () => {
    const values = ['00', '33', '66', '99'];
    const randValue = values[Math.floor(Math.random() * values.length)];
    return randValue;
  };

  const handleClick = () => {
    const values = ['00', '33', '66', '99'];

    if (spinning) return;
    setSpinning(true);

    const result1 = values[Math.floor(Math.random() * values.length)];
    const result2 = values[Math.floor(Math.random() * values.length)];
    const result3 = values[Math.floor(Math.random() * values.length)];

    setSlot1(result1);
    setSlot2(result2);
    setSlot3(result3);
    
    setSpinning(false);
  };

  const handleAutoSpin = () => {
    if (autoSpinning) {
      setAutoSpinning(false);
      clearInterval(window.autoSpinInterval);
    } else {
      setAutoSpinning(true);
      window.autoSpinInterval = setInterval(() => {
        handleClick();
      }, 2000);
    }
  }; 
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="navbar glass rounded-badge row-start-1 flex gap-6 flex-wrap items-center justify-between">
      <a
          className="btn btn-ghost text-xl flex items-center gap-2 hover:underline hover:underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Slots
        </a>
        <a
          className="btn btn-ghost text-xl flex items-center gap-2 hover:underline hover:underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          10000
        </a>
      </header>
      <main className="flex flex-col glass rounded-badge gap-8 row-start-2 items-center sm:items-start">
        <div className="grid grid-flow-col p-4 gap-8 text-center">
          <div className="flex flex-col p-2 bg-primary rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{"--value":slot1}}></span>
            </span>
          </div>
          <div className="flex flex-col p-2 bg-primary rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{"--value":slot2}}></span>
            </span>
          </div>
          <div className="flex flex-col p-2 bg-primary rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{"--value":slot3}}></span>
            </span>
          </div>
        </div>

        <div className="flex gap-4 p-2 items-center flex-col sm:flex-row w-full">
          <button 
              className="btn rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm flex-1" 
              onClick={() => handleClick()} // Ganti dengan nilai baru
              disabled={spinning}
            >
              {spinning ? "Spinning..." : "Spin"}
          </button>
          <button 
              className="btn rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm flex-1" 
              onClick={() => handleAutoSpin()} // Ganti dengan nilai baru
            >
              {autoSpinning ? "Stop Auto Spin" : "Auto Spin"}
          </button>
        </div>
      </main>
    </div>
  );
}