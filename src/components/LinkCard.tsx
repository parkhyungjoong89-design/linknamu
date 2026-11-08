import type { LinkItem } from "@/data/profile";

type LinkCardProps = {
  link: LinkItem;
  count: number;
  onClick?: () => void;
};

export default function LinkCard({ link, count, onClick }: LinkCardProps) {
  return (
    <a
      href={`/go/${encodeURIComponent(link.id)}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="relative flex min-h-15 items-center justify-center rounded-[1.25rem] border border-glass-border bg-glass px-16 py-4 text-center shadow-glass backdrop-blur-xl backdrop-saturate-150 transition duration-300 ease-out hover:-translate-y-px hover:bg-glass-hover hover:shadow-glass-hover active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <span className="truncate text-[0.9375rem] font-semibold tracking-[-0.01em] text-foreground">
        {link.title}
      </span>
      {/* 제목은 가운데 그대로 두고, 클릭 수만 오른쪽에 작게 */}
      <span className="absolute right-5 text-xs font-medium tabular-nums text-muted">
        <span className="sr-only">, 클릭 </span>
        {count.toLocaleString("ko-KR")}회
      </span>
      <span className="sr-only">(새 탭에서 열림)</span>
    </a>
  );
}
