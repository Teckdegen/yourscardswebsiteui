type YoursCardProps = {
  className?: string;
  compact?: boolean;
};

export function YoursCard({ className = "", compact = false }: YoursCardProps) {
  return (
    <div
      className={`yours-card relative aspect-[1.586/1] w-full overflow-hidden rounded-[18px] text-white ${compact ? "p-5" : "max-w-[440px] p-6 sm:p-7"} ${className}`}
      aria-hidden
    >
      <div className="yours-card-texture" />

      <img src="/logo.PNG" alt="" className="yours-card-watermark" />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-start justify-between">
          <div className="yours-card-chip" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
            Debit
          </span>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold tracking-[0.22em] text-white/85 sm:text-base">
            •••• •••• •••• 4821
          </p>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                Cardholder
              </p>
              <p className="mt-0.5 text-sm font-medium tracking-wide text-white/90">
                YOURS MEMBER
              </p>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-bold tracking-[0.2em] text-white/80">
                VISA
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
