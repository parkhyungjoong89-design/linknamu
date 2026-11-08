import Image from "next/image";
import type { Profile } from "@/data/profile";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <header className="flex flex-col items-center text-center">
      {/* 바깥 링 + 겹친 그림자로 살짝 떠 있는 입체감 */}
      <div className="rounded-full bg-avatar-ring p-1.5 shadow-[0_2px_6px_rgb(31_36_48/0.08),0_18px_40px_-16px_rgb(31_36_48/0.35)] backdrop-blur-sm">
        <div className="relative size-28 overflow-hidden rounded-full bg-accent-soft sm:size-32">
          {profile.image ? (
            <Image
              src={profile.image}
              alt={`${profile.name} 프로필 사진`}
              fill
              sizes="128px"
              loading="eager"
              className="object-cover"
            />
          ) : (
            <span
              aria-hidden="true"
              className="flex size-full items-center justify-center text-4xl font-bold text-accent"
            >
              {profile.name.slice(0, 1)}
            </span>
          )}
          {/* 안쪽 하이라이트 */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_0_0_1px_rgb(255_255_255/0.25),inset_0_-10px_20px_-12px_rgb(0_0_0/0.35)]"
          />
        </div>
      </div>
      <h1 className="mt-6 text-[1.625rem] font-bold tracking-[-0.02em] text-foreground">
        {profile.name}
      </h1>
      <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
        {profile.bio}
      </p>
    </header>
  );
}
