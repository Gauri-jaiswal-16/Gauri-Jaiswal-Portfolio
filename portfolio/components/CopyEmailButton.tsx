"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function CopyEmailButton({
  email,
  className = "h-9 w-9",
}: {
  email: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable — no-op */
    }
  };

  return (
    <button
      onClick={handleCopy}
      aria-label="Copy email address"
      className={`focus-ring inline-flex items-center justify-center rounded-full border border-line dark:border-line-dark transition-colors hover:border-accent hover:text-accent ${className}`}
    >
      {copied ? <Check size={14} className="text-accent" /> : <Copy size={14} />}
    </button>
  );
}
