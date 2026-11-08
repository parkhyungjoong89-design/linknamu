export type Profile = {
  name: string;
  bio: string;
  /** public/ 아래 이미지 경로 또는 next.config.ts에 허용된 외부 이미지 URL. 비워 두면 이름 첫 글자를 표시합니다. */
  image?: string;
};

export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

// 더미 데이터: 실제 프로필·사진·링크로 교체하세요.
export const profile: Profile = {
  name: "김개발",
  bio: "초보 개발 : 요즘에는 ai개발 연습중",
  image: "/profile.jpg",
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
