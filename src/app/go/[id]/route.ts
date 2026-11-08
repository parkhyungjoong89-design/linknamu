import type { NextRequest } from "next/server";
import { links } from "@/data/profile";
import { recordClick } from "@/lib/clicks";

// 링크 카드 클릭 → 클릭 수 기록 → 실제 주소로 이동
export async function GET(_req: NextRequest, ctx: RouteContext<"/go/[id]">) {
  const { id } = await ctx.params;
  const link = links.find((item) => item.id === id);
  if (!link) {
    return new Response("링크를 찾을 수 없습니다.", { status: 404 });
  }

  await recordClick(link.id);

  return new Response(null, {
    status: 302,
    headers: { Location: link.url, "Cache-Control": "no-store" },
  });
}
