import { getDb } from "@/lib/mongodb";

type ClickDoc = {
  linkId: string;
  count: number;
  lastClickedAt: Date;
};

/** 링크 클릭 수를 1 올립니다. DB 설정이 없거나 실패해도 예외를 던지지 않습니다. */
export async function recordClick(linkId: string) {
  const db = getDb();
  if (!db) {
    console.warn("[clicks] MONGODB_URI가 없어 클릭 수를 저장하지 않았습니다.");
    return;
  }
  try {
    await (await db)
      .collection<ClickDoc>("clicks")
      .updateOne(
        { linkId },
        { $inc: { count: 1 }, $set: { lastClickedAt: new Date() } },
        { upsert: true },
      );
  } catch (error) {
    console.error("[clicks] 클릭 수 저장 실패:", error);
  }
}
