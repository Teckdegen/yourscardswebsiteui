"use client";

import { useEffect } from "react";

function isEditable(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  return Boolean(
    target.closest("input, textarea, select, [contenteditable='true']"),
  );
}

function isControl(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  return Boolean(target.closest("a, button, [role='button'], label"));
}

export function KillCaret() {
  useEffect(() => {
    function clear() {
      window.getSelection()?.removeAllRanges();
      const active = document.activeElement;
      if (active instanceof HTMLElement && !isEditable(active)) {
        active.blur();
      }
    }

    function onMouseDown(event: MouseEvent) {
      if (isEditable(event.target) || isControl(event.target)) return;
      event.preventDefault();
      clear();
    }

    function onSelectStart(event: Event) {
      if (isEditable(event.target)) return;
      event.preventDefault();
    }

    document.addEventListener("mousedown", onMouseDown, true);
    document.addEventListener("selectstart", onSelectStart, true);
    document.addEventListener("focusin", clear);
    return () => {
      document.removeEventListener("mousedown", onMouseDown, true);
      document.removeEventListener("selectstart", onSelectStart, true);
      document.removeEventListener("focusin", clear);
    };
  }, []);

  return null;
}
