import Image from "next/image";
import type { Profile } from "@/data/profile";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="relative size-36 overflow-hidden rounded-full bg-accent-soft ring-4 ring-surface sm:size-40">
        {profile.image ? (
          <Image
            src={profile.image}
            alt={`${profile.name} 프로필 사진`}
            fill
            sizes="160px"
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
      </div>
      <h1 className="mt-5 text-2xl font-bold tracking-tight text-foreground">
        {profile.name}
      </h1>
      <p className="mt-1.5 text-[15px] text-muted">{profile.bio}</p>
    </header>
  );
}
