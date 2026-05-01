import React from 'react';

/**
 * Renders a multi-paragraph narrative string with special handling for
 * 【chapter headers】.
 *
 * - Splits on \n\n into paragraphs.
 * - Within each paragraph, segments wrapped in 【...】 are rendered as
 *   inline chapter labels with stronger styling.
 */
export function renderNarrative(text: string | undefined | null): React.ReactNode {
  if (!text) return null;

  const paragraphs = text.split(/\n\n+/);

  return paragraphs.map((para, pi) => {
    // Match 【...】 headers (anywhere in the paragraph)
    const parts = para.split(/(【[^】]+】)/g);
    return (
      <p
        key={pi}
        className="text-slate-600 leading-relaxed text-sm sm:text-base font-medium text-justify mb-4 last:mb-0"
      >
        {parts.map((part, i) => {
          if (/^【[^】]+】$/.test(part)) {
            return (
              <span
                key={i}
                className="inline-block font-black text-slate-900 mr-1.5 mb-1"
              >
                {part}
              </span>
            );
          }
          return <React.Fragment key={i}>{part}</React.Fragment>;
        })}
      </p>
    );
  });
}
