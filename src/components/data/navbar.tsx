export const constnavLink: {
  name: string;
  reversed?: boolean;
  list: {
    label: string;
    link: string;
  }[];
}[] = [
  {
    name: "Next.Js Setup",
    list: [
      { label: "Getting Started", link: "/" },
      { label: "Dark Mode", link: "/dark-mode" },
    ],
  },
  {
    name: "Components",
    reversed: true,
    list: [
      { label: "Animated Text", link: "/text" },
      { label: "Navbar", link: "/navbar" },
      { label: "Button", link: "/button" },
      { label: "Input", link: "/input" },
    ],
  },
];
