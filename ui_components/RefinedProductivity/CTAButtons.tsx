import React from "react";

export default function CTAButtons() {
  return (
    <div className="flex gap-4 w-[358px] h-[48px]">
      {/* Primary Button */}
      <button
        className="
          flex-1
          h-full
          rounded-lg
          bg-bg-primary
          text-white
          text-sm
          font-medium
          tracking-wide
          uppercase
          hover:opacity-90
          transition
        "
      >
        Create Account
      </button>

      {/* Secondary Button */}
      <button
        className="
          flex-1
          h-full
          rounded-lg
          border
          border-white/40
          text-white
          text-sm
          font-medium
          tracking-wide
          uppercase
          hover:bg-white/10
          transition
        "
      >
        See Pricing
      </button>
    </div>
  );
}
