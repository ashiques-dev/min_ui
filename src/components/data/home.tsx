import { TConfigSteps } from "../type";

export const gettingStartedList: TConfigSteps[] = [
  {
    title: "start by installing Next.js ",
    tabs: [
      {
        language: "bash",
        code: "npx create-next-app@latest",
        showLineNumbers: false,
      },
    ],
  },
  {
    title: `combines and deduplicates Tailwind CSS class names using  <span className="special-text">clsx</span>  for conditional classes and <span className="special-text">twMerge</span>  to intelligently merge them.`,
    tabs: [
      {
        name: "npm",
        language: "bash",
        code: "npm install clsx tailwind-merge",
        showLineNumbers: false,
      },

      {
        name: "lib\\utils.ts",
        language: "tsx",
        code: 'import { clsx, type ClassValue } from "clsx";\nimport { twMerge } from "tailwind-merge";\n\nexport function cn(...inputs: ClassValue[]) {\n  return twMerge(clsx(inputs));\n}',
      },
    ],
  },
  {
    title:
      '<span className="special-text">class-variance-authority</span> is used in online projects to manage Tailwind CSS class names with variant-based logic in a clean, scalable, and type-safe way',
    tabs: [
      {
        name: "npm",
        language: "bash",
        showLineNumbers: false,
        code: "npm i class-variance-authority",
      },
      {
        name: "filename",
        language: "tsx",
        showLineNumbers: false,
        code: 'import { cva, type VariantProps } from "class-variance-authority";\nimport { cn } from "@/lib/utils";\n\nconst typeofVariants = cva(\n  " ",\n  {\n    variants: {\n      variant: {\n        default: " "\n      },\n      size: {\n        default: " "\n      }\n    },\n    defaultVariants: {\n      variant: "default",\n      size: "default"\n    }\n  }\n);',
      },
    ],
  },
  {
    title: "animation library  (framer-motion)",
    tabs: [
      { name: "npm", language: "bash", code: `npm install motion` },
      {
        name: "import",
        language: "tsx",
        code: `import { motion } from "motion/react"`,
      },
    ],
  },
];
