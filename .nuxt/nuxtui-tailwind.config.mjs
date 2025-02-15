
      import { defaultExtractor as createDefaultExtractor } from "tailwindcss/lib/lib/defaultExtractor.js";
      import { customSafelistExtractor, generateSafelist } from "/Users/michaelwybraniec/Documents/GitHub/chasquis/node_modules/.pnpm/@nuxt+ui@2.21.0_change-case@5.4.4_magicast@0.3.5_rollup@4.32.1_typescript@5.7.3_vite@6.0.11_@_kdh2tq6oklplq6kh4ro36nzgfu/node_modules/@nuxt/ui/dist/runtime/utils/colors";
      import formsPlugin from "@tailwindcss/forms";
      import aspectRatio from "@tailwindcss/aspect-ratio";
      import typography from "@tailwindcss/typography";
      import containerQueries from "@tailwindcss/container-queries";
      import headlessUi from "@headlessui/tailwindcss";

      const defaultExtractor = createDefaultExtractor({ tailwindConfig: { separator: ':' } });

      export default {
        plugins: [
          formsPlugin({ strategy: 'class' }),
          aspectRatio,
          typography,
          containerQueries,
          headlessUi
        ],
        content: {
          files: [
            "/Users/michaelwybraniec/Documents/GitHub/chasquis/node_modules/.pnpm/@nuxt+ui@2.21.0_change-case@5.4.4_magicast@0.3.5_rollup@4.32.1_typescript@5.7.3_vite@6.0.11_@_kdh2tq6oklplq6kh4ro36nzgfu/node_modules/@nuxt/ui/dist/runtime/components/**/*.{vue,mjs,ts}",
            "/Users/michaelwybraniec/Documents/GitHub/chasquis/node_modules/.pnpm/@nuxt+ui@2.21.0_change-case@5.4.4_magicast@0.3.5_rollup@4.32.1_typescript@5.7.3_vite@6.0.11_@_kdh2tq6oklplq6kh4ro36nzgfu/node_modules/@nuxt/ui/dist/runtime/ui.config/**/*.{mjs,js,ts}"
          ],
          transform: {
            vue: (content) => {
              return content.replaceAll(/(?:\r\n|\r|\n)/g, ' ')
            }
          },
          extract: {
            vue: (content) => {
              return [
                ...defaultExtractor(content),
                ...customSafelistExtractor("U", content, ["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose","primary"], ["primary"])
              ]
            }
          }
        },
        safelist: generateSafelist(["primary"], ["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose","primary"]),
      }
    