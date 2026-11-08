import type { LinkItem } from "@/data/profile";

export default function LinkCard({ link }: { link: LinkItem }) {
  return (
    <a
      href={`/go/${encodeURIComponent(link.id)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex min-h-15 items-center justify-center rounded-[1.25rem] border border-glass-border bg-glass px-6 py-4 text-center shadow-glass backdrop-blur-xl backdrop-saturate-150 transition duration-300 ease-out hover:-translate-y-px hover:bg-glass-hover hover:shadow-glass-hover active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <span className="truncate text-[0.9375rem] font-semibold tracking-[-0.01em] text-foreground">
        {link.title}
      </span>
      <span className="sr-only">(새 탭에서 열림)</span>
    </a>
  );
}
