import { getClickCounts } from "@/lib/clicks";

// 페이지가 열릴 때 모든 링크의 클릭 수를 한 번에 내려줍니다.
export async function GET() {
  const counts = await getClickCounts();
  return Response.json(counts, {
    headers: { "Cache-Control": "no-store" },
  });
}
