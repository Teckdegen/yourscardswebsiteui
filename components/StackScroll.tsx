import type { ReactNode } from "react";

export function StackScroll({ children }: { children: ReactNode }) {
  return <div className="stack-scroll">{children}</div>;
}

export function StackPanel({
  children,
  hold = false,
  layer = 1,
}: {
  children: ReactNode;
  /** Extra scroll before the next panel fully covers this one */
  hold?: boolean;
  /** Stacking order — higher covers lower */
  layer?: number;
}) {
  return (
    <>
      <div className="stack-panel" style={{ zIndex: layer }}>
        {children}
      </div>
      {hold ? <div className="stack-hold" aria-hidden /> : null}
    </>
  );
}
