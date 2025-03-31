# 🧪 Component Library Maintenance Workflow (`web4musicians-ui-lib`)

## 📦 Initial Version

The first published version is currently:

1.0.0

> If the library is still experimental and has only minimal content (e.g., one sample component), you may want to go back to:

0.0.1

To do that:

```bash
npm version 0.0.1
npm publish --access public

🚀 Daily Development Workflow
1. Develop and test components

    Use Storybook for visual and isolated development.

    Keep component logic clean and modular.

    Document props and use satisfies Meta<typeof Component> in .stories.tsx.

2. Export components

Ensure every usable component is exported via src/index.ts:

export * from './components/Button';
export * from './components/Card';

🛠 Build & Versioning Workflow
3. Build the package before publishing:

pnpm run build

Make sure this creates a dist/ folder with:

    index.js

    index.d.ts

    (optional) .cjs, .d.cts files if using CommonJS too

4. Version control using semantic versioning (semver)
Change Type	Command	Example Result
Bug fix	npm version patch	1.0.1
Backward-compatible feature	npm version minor	1.1.0
Breaking change	npm version major	2.0.0

    You can also manually set version: npm version 0.1.0

5. Publish to NPM

npm publish --access public

Make sure you're in the project root folder when publishing.
📥 Consumer Workflow (using the package)

In any other (consumer) project:

pnpm add web4musicians-ui-lib

Ensure the consumer project also installs the required peer dependencies:

pnpm add react react-dom tailwindcss daisyui

Also make sure that Tailwind + DaisyUI is configured in that project.
⚙️ Keeping Dependencies Clean
Type	Location
dependencies	Only essential runtime deps (minimize!)
peerDependencies	Everything required by the consumer project (e.g., react, tailwindcss, daisyui)
devDependencies	Tools like Storybook, tsup, eslint, etc.
🧼 Clean-up / Troubleshooting

    Always build before publishing

    Always version before publish (npm version ...)

    Ensure main, module, types, and files in package.json point to dist/

🧪 Example package.json version section

"main": "dist/index.js",
"module": "dist/index.js",
"types": "dist/index.d.ts",
"files": ["dist"],

🔁 Updating the library in a consumer project

To get the latest version:

pnpm update web4musicians-ui-lib

To install a specific version:

pnpm add web4musicians-ui-lib@1.2.0

🔖 Optional tools to help:

    changesets: automatic versioning and changelog generator

    tsup: lightweight build tool

    storybook: visual documentation

Happy coding! 🎸


--- 

Let me know if you'd like this saved as a file or pasted into your project as `WORKFLOW.md`.