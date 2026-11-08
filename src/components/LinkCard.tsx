import type { LinkItem } from "@/data/profile";

export default function LinkCard({ link }: { link: LinkItem }) {
  return (
    <a
      href={`/go/${encodeURIComponent(link.id)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex min-h-14 items-center justify-center rounded-2xl border border-line bg-surface px-5 py-3.5 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-accent hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <span className="truncate font-semibold text-foreground">
        {link.title}
      </span>
      <span className="sr-only">(새 탭에서 열림)</span>
    </a>
  );
}
