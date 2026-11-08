import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="flex flex-1 justify-center px-6 pt-16 pb-12 sm:px-8 sm:pt-24 sm:pb-16">
      <div className="flex w-full max-w-[26rem] flex-col">
        <ProfileHeader profile={profile} />

        <ul className="mt-12 flex flex-col gap-4 sm:mt-14">
          {links.map((link) => (
            <li key={link.id}>
              <LinkCard link={link} />
            </li>
          ))}
        </ul>

        <p className="mt-auto pt-16 text-center text-xs font-medium tracking-wide text-muted/70">
          링크나무
        </p>
      </div>
    </main>
  );
}
