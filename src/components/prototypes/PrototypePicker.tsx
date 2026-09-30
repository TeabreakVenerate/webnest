"use client";

import React, { useEffect, useRef, useState } from "react";

interface PrototypePickerProps {
  variants: { id: number; name: string }[];
  activeVariant: number;
  onSelect: (index: number) => void;
  onReplay: () => void;
}

export function PrototypePicker({
  variants,
  activeVariant,
  onSelect,
  onReplay,
}: PrototypePickerProps) {
  const pickerRef = useRef<HTMLElement>(null);
  const highlightRef = useRef<HTMLSpanElement>(null);
  const itemsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const [ready, setReady] = useState(false);

  // Position the highlight over the active button
  const updateHighlight = () => {
    const activeEl = itemsRef.current[activeVariant];
    const highlight = highlightRef.current;
    if (activeEl && highlight) {
      highlight.style.width = `${activeEl.offsetWidth}px`;
      highlight.style.transform = `translateX(${activeEl.offsetLeft}px)`;
    }
  };

  useEffect(() => {
    updateHighlight();
    const rafId = requestAnimationFrame(() => {
      requestAnimationFrame(() => setReady(true));
    });
    return () => cancelAnimationFrame(rafId);
  }, [activeVariant]);

  useEffect(() => {
    window.addEventListener("resize", updateHighlight);
    return () => window.removeEventListener("resize", updateHighlight);
  }, [activeVariant]);

  // Keyboard Navigation: 1-7, Arrow Left/Right, R
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        /^(INPUT|TEXTAREA|SELECT)$/.test((e.target as HTMLElement)?.tagName) ||
        (e.target as HTMLElement)?.isContentEditable
      ) {
        return;
      }
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      const num = parseInt(e.key, 10);
      if (num >= 1 && num <= variants.length) {
        onSelect(num - 1);
      } else if (e.key === "ArrowRight") {
        onSelect((activeVariant + 1) % variants.length);
      } else if (e.key === "ArrowLeft") {
        onSelect((activeVariant - 1 + variants.length) % variants.length);
      } else if (e.key === "r" || e.key === "R") {
        onReplay();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeVariant, variants.length, onSelect, onReplay]);

  return (
    <>
      <style jsx global>{`
        .proto-picker {
          position: fixed;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2147483647;
          display: flex;
          align-items: center;
          gap: 2px;
          padding: 4px;
          border-radius: 999px;
          background: rgba(10, 10, 10, 0.88);
          -webkit-backdrop-filter: blur(14px) saturate(1.5);
          backdrop-filter: blur(14px) saturate(1.5);
          box-shadow:
            0 0 0 1px rgba(255, 255, 255, 0.1) inset,
            0 12px 32px rgba(0, 0, 0, 0.35),
            0 2px 8px rgba(0, 0, 0, 0.18);
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 13px;
          line-height: 1;
          -webkit-font-smoothing: antialiased;
          user-select: none;
          -webkit-user-select: none;
        }

        .proto-picker-highlight {
          position: absolute;
          top: 4px;
          left: 0;
          height: 28px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.16);
          will-change: transform, width;
        }

        .proto-picker[data-ready="true"] .proto-picker-highlight {
          transition:
            transform 250ms cubic-bezier(0.23, 1, 0.32, 1),
            width 250ms cubic-bezier(0.23, 1, 0.32, 1);
        }

        @media (prefers-reduced-motion: reduce) {
          .proto-picker[data-ready="true"] .proto-picker-highlight {
            transition: none;
          }
        }

        .proto-picker-item {
          position: relative;
          display: flex;
          align-items: center;
          height: 28px;
          padding: 0 12px;
          border: 0;
          border-radius: 999px;
          background: transparent;
          color: rgba(255, 255, 255, 0.55);
          font: inherit;
          font-weight: 500;
          cursor: pointer;
          white-space: nowrap;
          transition: color 150ms ease-out;
        }

        .proto-picker-item:hover {
          color: rgba(255, 255, 255, 0.9);
        }

        .proto-picker-item:active {
          transform: scale(0.97);
        }

        .proto-picker-item:focus-visible {
          outline: 2px solid rgba(255, 255, 255, 0.4);
          outline-offset: 2px;
        }

        .proto-picker-item[data-active="true"] {
          color: #fff;
          font-weight: 600;
        }

        .proto-picker-divider {
          width: 1px;
          height: 16px;
          margin: 0 4px;
          background: rgba(255, 255, 255, 0.15);
        }

        .proto-picker-replay {
          padding: 0 10px;
          font-size: 14px;
        }
      `}</style>

      <nav
        ref={pickerRef}
        className="proto-picker"
        aria-label="Prototype variants"
        data-ready={ready}
      >
        <span
          ref={highlightRef}
          className="proto-picker-highlight"
          aria-hidden="true"
        />

        {variants.map((v, i) => {
          const isActive = activeVariant === i;
          return (
            <button
              key={v.id}
              ref={(el) => {
                itemsRef.current[i] = el;
              }}
              type="button"
              className="proto-picker-item"
              data-active={isActive}
              aria-current={isActive ? "true" : undefined}
              onClick={() => onSelect(i)}
            >
              <span className="opacity-40 mr-1.5 text-[10px]">{i + 1}</span>
              {v.name}
            </button>
          );
        })}

        <span className="proto-picker-divider" aria-hidden="true" />
        <button
          type="button"
          className="proto-picker-item proto-picker-replay"
          aria-label="Replay animation (R)"
          onClick={onReplay}
          title="Replay Entrance Animation (R)"
        >
          ↻
        </button>
      </nav>
    </>
  );
}
