type Config = {
  title: string;
  description: string;
  lang: string;
  profile: {
    author: string;
    description?: string;
  }
}

export const siteConfig: Config = {
  title: "The Jade Chamber",
  description: "",
  lang: "en-US",
  profile: {
    author: "Jade Chamber Team",
    description: ""
  }
}

export const NAV_LINKS: Array<{ title: string, path: string }> = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Projects",
    path: '/projects'
  }
];
