import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="flex flex-1 justify-center px-4 py-10 sm:py-16">
      <div className="w-full max-w-md rounded-[2rem] border border-line bg-card px-5 py-10 shadow-lg sm:px-8 sm:py-12">
        <ProfileHeader profile={profile} />

        <ul className="mt-10 flex flex-col gap-5">
          {links.map((link) => (
            <li key={link.id}>
              <LinkCard link={link} />
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center text-xs text-muted">링크나무</p>
      </div>
    </main>
  );
}
