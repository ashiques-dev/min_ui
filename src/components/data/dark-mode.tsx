import ThemeToggler from "../theme/theme-toggler";
import { TConfigSteps } from "../type";

export const nextJsDarkModeList: TConfigSteps[] = [
  {
    title: "Start by installing next-themes",
    tabs: [
      {
        language: "bash",
        code: `npm install next-themes`,
        showLineNumbers: false,
      },
    ],
  },
  {
    title: "Create a theme provider",
    tabs: [
      {
        language: "tsx",
        code: '"use client";\n\nimport * as React from "react";\nimport { ThemeProvider as NextThemesProvider } from "next-themes";\n\nexport function ThemeProvider({\n  children,\n  ...props\n}: React.ComponentProps<typeof NextThemesProvider>) {\n  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;\n}',
      },
    ],
  },
  {
    title: "Wrap your root layout with  theme provider",
    tabs: [
      {
        language: "tsx",
        code: '<html lang="en" className="scroll-smooth" suppressHydrationWarning>\n  <body className="antialiased">\n    <ThemeProvider\n      attribute="class"\n      defaultTheme="dark"\n      enableSystem={false} //when not use system theme\n      disableTransitionOnChange\n    >\n      {children}\n    </ThemeProvider>\n  </body>\n</html>',
      },
    ],
  },
  {
    title: "Add a mode toggle",
    tabs: [
      {
        language: "tsx",
        code: '"use client";\nimport { useTheme } from "next-themes";\nimport { MoonIcon, SunIcon } from "../svg";\nimport { Button } from "../ui/button";\n\nconst ThemeToggler = ({ className }: { className?: string }) => {\n  const { setTheme, theme } = useTheme();\n\n  return (\n    <Button\n      variant="ghost"\n      size="icon"\n      onClick={() => {\n        setTheme(theme === "dark" ? "light" : "dark");\n      }}\n      className={className}\n    >\n      <SunIcon className=" absolute  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 duration-300" />\n      <MoonIcon className=" rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 duration-300" />\n    </Button>\n  );\n};\n\nexport default ThemeToggler;',
      },
    ],
    component: <ThemeToggler />,
  },
  {
    title: "customize your css file",

    tabs: [
      {
        name: "tailwind.css",
        language: "css",
        highlightLines: [3],
        code: '@import \\"tailwindcss\\";\n\n@custom-variant dark (&:is(.dark *)); /*for dark mode*/\n\n:root {\n  --background: hsl(0, 0%, 100%);\n  --foreground: hsl(0, 0%, 3%);\n  --muted: hsl(0, 0%, 30%);\n\n  --accent: hsl(0, 0%, 97%);\n  --secondary: hsl(0, 0%, 90%);\n  --primary: hsl(0, 0%, 5%);\n  --danger: hsl(0 73.7% 41.8%);\n\n  --border: hsl(0, 0%, 85%);\n}\n\n.dark {\n  --background: hsl(0, 0%, 0%);\n  --foreground: hsl(0, 0%, 90%);\n  --muted: hsl(0, 0%, 70%);\n\n  --accent: hsl(0, 0%, 5%);\n  --secondary: hsl(0, 0%, 8%);\n  --primary: hsl(0, 0%, 95%);\n  --danger: hsl(0 73.7% 41.8%);\n\n  --border: hsl(0, 0%, 10%);\n}\n\n@theme inline {\n  --font-inter: var(--font-inter);\n  --font-roboto: var(--roboto-mono);\n\n  --color-background: var(--background);\n  --color-foreground: var(--foreground);\n  --color-muted: var(--muted);\n\n  --color-accent: var(--accent);\n  --color-primary: var(--primary);\n  --color-secondary: var(--secondary);\n  --color-danger: var(--danger);\n\n  --color-border: var(--border);\n}',
      },
      {
        name: "custom.css",
        language: "css",
        code: '@layer base {\n  * {\n    @apply focus-visible:outline-none border-border; \n  }\n  *::-webkit-scrollbar {\n    display: none;\n  }\n  input[type=\\"password\\"]::-ms-reveal,\n  input[type=\\"password\\"]::-webkit-credentials-auto-fill-button {\n    display: none;\n  }\n  input[type=\\"password\\"]::-webkit-input-placeholder {\n    background-image: none;\n  }\n  .width {\n    @apply w-[98%] lg:w-[96%] max-w-[90rem] mx-auto;\n  }   \n}',
      },
    ],
  },
];
