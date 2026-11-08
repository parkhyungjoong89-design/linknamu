export type Profile = {
  name: string;
  bio: string;
  /** public/ 아래 이미지 경로. 비워 두면 이름 첫 글자를 표시합니다. */
  image?: string;
};

export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

// 더미 데이터: 실제 프로필·사진·링크로 교체하세요.
export const profile: Profile = {
  name: "박클로",
  bio: "세계 최강 바이브코더",
  image: "/profile-dummy.svg",
};

export const links: LinkItem[] = [
  {
    id: "github",
    title: "GitHub",
    url: "https://github.com",
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    url: "https://www.linkedin.com",
  },
  {
    id: "blog",
    title: "Blog",
    url: "https://velog.io",
  },
];
