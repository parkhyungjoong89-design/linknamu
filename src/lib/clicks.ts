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

/** 모든 링크의 클릭 수를 { linkId: count } 형태로 한 번에 가져옵니다. DB가 없거나 실패하면 빈 객체를 돌려줍니다. */
export async function getClickCounts(): Promise<Record<string, number>> {
  const db = getDb();
  if (!db) return {};
  try {
    const docs = await (await db)
      .collection<ClickDoc>("clicks")
      .find({}, { projection: { _id: 0, linkId: 1, count: 1 } })
      .toArray();
    return Object.fromEntries(docs.map((doc) => [doc.linkId, doc.count]));
  } catch (error) {
    console.error("[clicks] 클릭 수 조회 실패:", error);
    return {};
  }
}
