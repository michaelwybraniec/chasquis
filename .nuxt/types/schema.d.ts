import { NuxtModule, RuntimeConfig } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtOptions {
    /**
     * Configuration for `/Users/michaelwybraniec/Documents/GitHub/chasquis/node_modules/.pnpm/@nuxt+ui-pro@1.7.0_change-case@5.4.4_magicast@0.3.5_rollup@4.32.1_typescript@5.7.3_vite@6.0.1_m3i2bqwkhiyian26svxmjxo6mm/node_modules/@nuxt/ui-pro/modules/pro/index`
     */
    ["uiPro"]: typeof import("/Users/michaelwybraniec/Documents/GitHub/chasquis/node_modules/.pnpm/@nuxt+ui-pro@1.7.0_change-case@5.4.4_magicast@0.3.5_rollup@4.32.1_typescript@5.7.3_vite@6.0.1_m3i2bqwkhiyian26svxmjxo6mm/node_modules/@nuxt/ui-pro/modules/pro/index").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/mdc`
     */
    ["mdc"]: typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/content`
     */
    ["content"]: typeof import("@nuxt/content").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/eslint`
     */
    ["eslint"]: typeof import("@nuxt/eslint").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/fonts`
     */
    ["fonts"]: typeof import("@nuxt/fonts").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/image`
     */
    ["image"]: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/icon`
     */
    ["icon"]: typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/color-mode`
     */
    ["colorMode"]: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     */
    ["tailwindcss"]: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/ui`
     */
    ["ui"]: typeof import("@nuxt/ui").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-component-meta`
     */
    ["componentMeta"]: typeof import("nuxt-component-meta").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxthq/studio`
     */
    ["studio"]: typeof import("@nuxthq/studio").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@vueuse/nuxt`
     */
    ["vueuse"]: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/Users/michaelwybraniec/Documents/GitHub/chasquis/node_modules/.pnpm/nuxt-site-config@3.0.6_magicast@0.3.5_rollup@4.32.1_vite@6.0.11_@types+node@22.12.0_jiti@2.4._tpebf6jhioxx7hgeerdiuveeyi/node_modules/nuxt-site-config/dist/module`
     */
    ["site"]: typeof import("/Users/michaelwybraniec/Documents/GitHub/chasquis/node_modules/.pnpm/nuxt-site-config@3.0.6_magicast@0.3.5_rollup@4.32.1_vite@6.0.11_@types+node@22.12.0_jiti@2.4._tpebf6jhioxx7hgeerdiuveeyi/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-og-image`
     */
    ["ogImage"]: typeof import("nuxt-og-image").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `/Users/michaelwybraniec/Documents/GitHub/chasquis/node_modules/.pnpm/@nuxt+ui-pro@1.7.0_change-case@5.4.4_magicast@0.3.5_rollup@4.32.1_typescript@5.7.3_vite@6.0.1_m3i2bqwkhiyian26svxmjxo6mm/node_modules/@nuxt/ui-pro/modules/pro/index`
     */
    ["uiPro"]?: typeof import("/Users/michaelwybraniec/Documents/GitHub/chasquis/node_modules/.pnpm/@nuxt+ui-pro@1.7.0_change-case@5.4.4_magicast@0.3.5_rollup@4.32.1_typescript@5.7.3_vite@6.0.1_m3i2bqwkhiyian26svxmjxo6mm/node_modules/@nuxt/ui-pro/modules/pro/index").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/mdc`
     */
    ["mdc"]?: typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/content`
     */
    ["content"]?: typeof import("@nuxt/content").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/eslint`
     */
    ["eslint"]?: typeof import("@nuxt/eslint").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/fonts`
     */
    ["fonts"]?: typeof import("@nuxt/fonts").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/image`
     */
    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/icon`
     */
    ["icon"]?: typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/color-mode`
     */
    ["colorMode"]?: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     */
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/ui`
     */
    ["ui"]?: typeof import("@nuxt/ui").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-component-meta`
     */
    ["componentMeta"]?: typeof import("nuxt-component-meta").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxthq/studio`
     */
    ["studio"]?: typeof import("@nuxthq/studio").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@vueuse/nuxt`
     */
    ["vueuse"]?: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/Users/michaelwybraniec/Documents/GitHub/chasquis/node_modules/.pnpm/nuxt-site-config@3.0.6_magicast@0.3.5_rollup@4.32.1_vite@6.0.11_@types+node@22.12.0_jiti@2.4._tpebf6jhioxx7hgeerdiuveeyi/node_modules/nuxt-site-config/dist/module`
     */
    ["site"]?: typeof import("/Users/michaelwybraniec/Documents/GitHub/chasquis/node_modules/.pnpm/nuxt-site-config@3.0.6_magicast@0.3.5_rollup@4.32.1_vite@6.0.11_@types+node@22.12.0_jiti@2.4._tpebf6jhioxx7hgeerdiuveeyi/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-og-image`
     */
    ["ogImage"]?: typeof import("nuxt-og-image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["/Users/michaelwybraniec/Documents/GitHub/chasquis/node_modules/.pnpm/@nuxt+ui-pro@1.7.0_change-case@5.4.4_magicast@0.3.5_rollup@4.32.1_typescript@5.7.3_vite@6.0.1_m3i2bqwkhiyian26svxmjxo6mm/node_modules/@nuxt/ui-pro/modules/pro/index", Exclude<NuxtConfig["uiPro"], boolean>] | ["@nuxtjs/mdc", Exclude<NuxtConfig["mdc"], boolean>] | ["@nuxt/content", Exclude<NuxtConfig["content"], boolean>] | ["@nuxt/eslint", Exclude<NuxtConfig["eslint"], boolean>] | ["@nuxt/fonts", Exclude<NuxtConfig["fonts"], boolean>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["@nuxt/icon", Exclude<NuxtConfig["icon"], boolean>] | ["@nuxtjs/color-mode", Exclude<NuxtConfig["colorMode"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@nuxt/ui", Exclude<NuxtConfig["ui"], boolean>] | ["nuxt-component-meta", Exclude<NuxtConfig["componentMeta"], boolean>] | ["@nuxthq/studio", Exclude<NuxtConfig["studio"], boolean>] | ["@vueuse/nuxt", Exclude<NuxtConfig["vueuse"], boolean>] | ["/Users/michaelwybraniec/Documents/GitHub/chasquis/node_modules/.pnpm/nuxt-site-config@3.0.6_magicast@0.3.5_rollup@4.32.1_vite@6.0.11_@types+node@22.12.0_jiti@2.4._tpebf6jhioxx7hgeerdiuveeyi/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["nuxt-og-image", Exclude<NuxtConfig["ogImage"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
}
declare module 'nuxt/schema' {
  interface NuxtOptions {
    /**
     * Configuration for `/Users/michaelwybraniec/Documents/GitHub/chasquis/node_modules/.pnpm/@nuxt+ui-pro@1.7.0_change-case@5.4.4_magicast@0.3.5_rollup@4.32.1_typescript@5.7.3_vite@6.0.1_m3i2bqwkhiyian26svxmjxo6mm/node_modules/@nuxt/ui-pro/modules/pro/index`
     * @see https://www.npmjs.com/package//Users/michaelwybraniec/Documents/GitHub/chasquis/node_modules/.pnpm/@nuxt+ui-pro@1.7.0_change-case@5.4.4_magicast@0.3.5_rollup@4.32.1_typescript@5.7.3_vite@6.0.1_m3i2bqwkhiyian26svxmjxo6mm/node_modules/@nuxt/ui-pro/modules/pro/index
     */
    ["uiPro"]: typeof import("/Users/michaelwybraniec/Documents/GitHub/chasquis/node_modules/.pnpm/@nuxt+ui-pro@1.7.0_change-case@5.4.4_magicast@0.3.5_rollup@4.32.1_typescript@5.7.3_vite@6.0.1_m3i2bqwkhiyian26svxmjxo6mm/node_modules/@nuxt/ui-pro/modules/pro/index").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/mdc`
     * @see https://www.npmjs.com/package/@nuxtjs/mdc
     */
    ["mdc"]: typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/content`
     * @see https://www.npmjs.com/package/@nuxt/content
     */
    ["content"]: typeof import("@nuxt/content").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/eslint`
     * @see https://www.npmjs.com/package/@nuxt/eslint
     */
    ["eslint"]: typeof import("@nuxt/eslint").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/fonts`
     * @see https://www.npmjs.com/package/@nuxt/fonts
     */
    ["fonts"]: typeof import("@nuxt/fonts").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/image`
     * @see https://www.npmjs.com/package/@nuxt/image
     */
    ["image"]: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/icon`
     * @see https://www.npmjs.com/package/@nuxt/icon
     */
    ["icon"]: typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/color-mode`
     * @see https://www.npmjs.com/package/@nuxtjs/color-mode
     */
    ["colorMode"]: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     * @see https://www.npmjs.com/package/@nuxtjs/tailwindcss
     */
    ["tailwindcss"]: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/ui`
     * @see https://www.npmjs.com/package/@nuxt/ui
     */
    ["ui"]: typeof import("@nuxt/ui").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-component-meta`
     * @see https://www.npmjs.com/package/nuxt-component-meta
     */
    ["componentMeta"]: typeof import("nuxt-component-meta").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxthq/studio`
     * @see https://www.npmjs.com/package/@nuxthq/studio
     */
    ["studio"]: typeof import("@nuxthq/studio").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@vueuse/nuxt`
     * @see https://www.npmjs.com/package/@vueuse/nuxt
     */
    ["vueuse"]: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/Users/michaelwybraniec/Documents/GitHub/chasquis/node_modules/.pnpm/nuxt-site-config@3.0.6_magicast@0.3.5_rollup@4.32.1_vite@6.0.11_@types+node@22.12.0_jiti@2.4._tpebf6jhioxx7hgeerdiuveeyi/node_modules/nuxt-site-config/dist/module`
     * @see https://www.npmjs.com/package//Users/michaelwybraniec/Documents/GitHub/chasquis/node_modules/.pnpm/nuxt-site-config@3.0.6_magicast@0.3.5_rollup@4.32.1_vite@6.0.11_@types+node@22.12.0_jiti@2.4._tpebf6jhioxx7hgeerdiuveeyi/node_modules/nuxt-site-config/dist/module
     */
    ["site"]: typeof import("/Users/michaelwybraniec/Documents/GitHub/chasquis/node_modules/.pnpm/nuxt-site-config@3.0.6_magicast@0.3.5_rollup@4.32.1_vite@6.0.11_@types+node@22.12.0_jiti@2.4._tpebf6jhioxx7hgeerdiuveeyi/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-og-image`
     * @see https://www.npmjs.com/package/nuxt-og-image
     */
    ["ogImage"]: typeof import("nuxt-og-image").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `/Users/michaelwybraniec/Documents/GitHub/chasquis/node_modules/.pnpm/@nuxt+ui-pro@1.7.0_change-case@5.4.4_magicast@0.3.5_rollup@4.32.1_typescript@5.7.3_vite@6.0.1_m3i2bqwkhiyian26svxmjxo6mm/node_modules/@nuxt/ui-pro/modules/pro/index`
     * @see https://www.npmjs.com/package//Users/michaelwybraniec/Documents/GitHub/chasquis/node_modules/.pnpm/@nuxt+ui-pro@1.7.0_change-case@5.4.4_magicast@0.3.5_rollup@4.32.1_typescript@5.7.3_vite@6.0.1_m3i2bqwkhiyian26svxmjxo6mm/node_modules/@nuxt/ui-pro/modules/pro/index
     */
    ["uiPro"]?: typeof import("/Users/michaelwybraniec/Documents/GitHub/chasquis/node_modules/.pnpm/@nuxt+ui-pro@1.7.0_change-case@5.4.4_magicast@0.3.5_rollup@4.32.1_typescript@5.7.3_vite@6.0.1_m3i2bqwkhiyian26svxmjxo6mm/node_modules/@nuxt/ui-pro/modules/pro/index").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/mdc`
     * @see https://www.npmjs.com/package/@nuxtjs/mdc
     */
    ["mdc"]?: typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/content`
     * @see https://www.npmjs.com/package/@nuxt/content
     */
    ["content"]?: typeof import("@nuxt/content").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/eslint`
     * @see https://www.npmjs.com/package/@nuxt/eslint
     */
    ["eslint"]?: typeof import("@nuxt/eslint").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/fonts`
     * @see https://www.npmjs.com/package/@nuxt/fonts
     */
    ["fonts"]?: typeof import("@nuxt/fonts").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/image`
     * @see https://www.npmjs.com/package/@nuxt/image
     */
    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/icon`
     * @see https://www.npmjs.com/package/@nuxt/icon
     */
    ["icon"]?: typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/color-mode`
     * @see https://www.npmjs.com/package/@nuxtjs/color-mode
     */
    ["colorMode"]?: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     * @see https://www.npmjs.com/package/@nuxtjs/tailwindcss
     */
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/ui`
     * @see https://www.npmjs.com/package/@nuxt/ui
     */
    ["ui"]?: typeof import("@nuxt/ui").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-component-meta`
     * @see https://www.npmjs.com/package/nuxt-component-meta
     */
    ["componentMeta"]?: typeof import("nuxt-component-meta").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxthq/studio`
     * @see https://www.npmjs.com/package/@nuxthq/studio
     */
    ["studio"]?: typeof import("@nuxthq/studio").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@vueuse/nuxt`
     * @see https://www.npmjs.com/package/@vueuse/nuxt
     */
    ["vueuse"]?: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/Users/michaelwybraniec/Documents/GitHub/chasquis/node_modules/.pnpm/nuxt-site-config@3.0.6_magicast@0.3.5_rollup@4.32.1_vite@6.0.11_@types+node@22.12.0_jiti@2.4._tpebf6jhioxx7hgeerdiuveeyi/node_modules/nuxt-site-config/dist/module`
     * @see https://www.npmjs.com/package//Users/michaelwybraniec/Documents/GitHub/chasquis/node_modules/.pnpm/nuxt-site-config@3.0.6_magicast@0.3.5_rollup@4.32.1_vite@6.0.11_@types+node@22.12.0_jiti@2.4._tpebf6jhioxx7hgeerdiuveeyi/node_modules/nuxt-site-config/dist/module
     */
    ["site"]?: typeof import("/Users/michaelwybraniec/Documents/GitHub/chasquis/node_modules/.pnpm/nuxt-site-config@3.0.6_magicast@0.3.5_rollup@4.32.1_vite@6.0.11_@types+node@22.12.0_jiti@2.4._tpebf6jhioxx7hgeerdiuveeyi/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-og-image`
     * @see https://www.npmjs.com/package/nuxt-og-image
     */
    ["ogImage"]?: typeof import("nuxt-og-image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["/Users/michaelwybraniec/Documents/GitHub/chasquis/node_modules/.pnpm/@nuxt+ui-pro@1.7.0_change-case@5.4.4_magicast@0.3.5_rollup@4.32.1_typescript@5.7.3_vite@6.0.1_m3i2bqwkhiyian26svxmjxo6mm/node_modules/@nuxt/ui-pro/modules/pro/index", Exclude<NuxtConfig["uiPro"], boolean>] | ["@nuxtjs/mdc", Exclude<NuxtConfig["mdc"], boolean>] | ["@nuxt/content", Exclude<NuxtConfig["content"], boolean>] | ["@nuxt/eslint", Exclude<NuxtConfig["eslint"], boolean>] | ["@nuxt/fonts", Exclude<NuxtConfig["fonts"], boolean>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["@nuxt/icon", Exclude<NuxtConfig["icon"], boolean>] | ["@nuxtjs/color-mode", Exclude<NuxtConfig["colorMode"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@nuxt/ui", Exclude<NuxtConfig["ui"], boolean>] | ["nuxt-component-meta", Exclude<NuxtConfig["componentMeta"], boolean>] | ["@nuxthq/studio", Exclude<NuxtConfig["studio"], boolean>] | ["@vueuse/nuxt", Exclude<NuxtConfig["vueuse"], boolean>] | ["/Users/michaelwybraniec/Documents/GitHub/chasquis/node_modules/.pnpm/nuxt-site-config@3.0.6_magicast@0.3.5_rollup@4.32.1_vite@6.0.11_@types+node@22.12.0_jiti@2.4._tpebf6jhioxx7hgeerdiuveeyi/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["nuxt-og-image", Exclude<NuxtConfig["ogImage"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   nitro: {
      envPrefix: string,
   },

   content: {
      cacheVersion: number,

      cacheIntegrity: string,

      transformers: Array<any>,

      base: string,

      api: {
         baseURL: string,
      },

      watch: {
         ws: {
            port: {
               port: number,

               portRange: Array<number>,
            },

            hostname: string,

            showURL: boolean,
         },
      },

      sources: any,

      ignores: Array<any>,

      locales: Array<any>,

      defaultLocale: any,

      highlight: {
         theme: {
            light: string,

            default: string,

            dark: string,
         },

         preload: Array<string>,

         highlighter: string,

         shikiEngine: string,

         langs: Array<string>,
      },

      markdown: {
         tags: {
            p: string,

            a: string,

            blockquote: string,

            "code-inline": string,

            code: string,

            em: string,

            h1: string,

            h2: string,

            h3: string,

            h4: string,

            h5: string,

            h6: string,

            hr: string,

            img: string,

            ul: string,

            ol: string,

            li: string,

            strong: string,

            table: string,

            thead: string,

            tbody: string,

            td: string,

            th: string,

            tr: string,
         },

         anchorLinks: {
            depth: number,

            exclude: Array<number>,
         },

         remarkPlugins: any,

         rehypePlugins: any,
      },

      yaml: any,

      csv: {
         delimeter: string,

         json: boolean,
      },

      navigation: {
         fields: Array<string>,
      },

      contentHead: boolean,

      documentDriven: boolean,

      respectPathCase: boolean,

      experimental: {
         clientDB: boolean,

         cacheContents: boolean,

         stripQueryParameters: boolean,

         advanceQuery: boolean,

         search: any,
      },
   },

   icon: {
      serverKnownCssClasses: Array<any>,
   },

   studio: {
      version: string,

      publicToken: any,

      gitInfo: {
         name: string,

         owner: string,

         url: string,
      },
   },

   "nuxt-site-config": {
      stack: Array<{

      }>,

      version: string,

      debug: boolean,
   },

   "nuxt-og-image": {
      version: string,

      satoriOptions: any,

      resvgOptions: any,

      sharpOptions: any,

      publicStoragePath: string,

      defaults: {
         emojis: string,

         renderer: string,

         component: string,

         extension: string,

         width: number,

         height: number,

         cacheMaxAgeSeconds: number,
      },

      debug: boolean,

      baseCacheKey: string,

      fonts: Array<{

      }>,

      hasNuxtIcon: boolean,

      colorPreference: string,

      strictNuxtContentPaths: any,

      isNuxtContentDocumentDriven: boolean,
   },

   appConfigSchema: {
      properties: {
         id: string,

         properties: {
            icon: {
               title: string,

               description: string,

               tags: Array<string>,

               id: string,

               properties: {
                  size: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     tsType: string,

                     id: string,

                     default: any,

                     type: string,
                  },

                  class: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     default: string,

                     type: string,
                  },

                  attrs: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     tsType: string,

                     id: string,

                     default: {
                        "aria-hidden": boolean,
                     },

                     type: string,
                  },

                  mode: {
                     title: string,

                     description: string,

                     enum: Array<string>,

                     tags: Array<string>,

                     id: string,

                     default: string,

                     type: string,
                  },

                  aliases: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     tsType: string,

                     id: string,

                     default: any,

                     type: string,
                  },

                  cssSelectorPrefix: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     default: string,

                     type: string,
                  },

                  cssLayer: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     tsType: string,

                     id: string,

                     default: any,

                     type: string,
                  },

                  cssWherePseudo: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     default: boolean,

                     type: string,
                  },

                  collections: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     tsType: string,

                     id: string,

                     default: any,

                     type: string,
                  },

                  customCollections: {
                     title: string,

                     tags: Array<string>,

                     tsType: string,

                     id: string,

                     default: any,

                     type: string,
                  },

                  provider: {
                     title: string,

                     description: string,

                     enum: Array<string>,

                     tags: Array<string>,

                     type: string,

                     id: string,

                     default: any,
                  },

                  iconifyApiEndpoint: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     default: string,

                     type: string,
                  },

                  fallbackToApi: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     enum: Array<boolean|string>,

                     type: string,

                     id: string,

                     default: boolean,
                  },

                  localApiEndpoint: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     default: string,

                     type: string,
                  },

                  fetchTimeout: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     default: number,

                     type: string,
                  },

                  customize: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     type: string,

                     id: string,

                     default: any,
                  },
               },

               type: string,

               default: {
                  size: any,

                  class: string,

                  attrs: {
                     "aria-hidden": boolean,
                  },

                  mode: string,

                  aliases: any,

                  cssSelectorPrefix: string,

                  cssLayer: any,

                  cssWherePseudo: boolean,

                  collections: any,

                  customCollections: any,

                  provider: any,

                  iconifyApiEndpoint: string,

                  fallbackToApi: boolean,

                  localApiEndpoint: string,

                  fetchTimeout: number,

                  customize: any,
               },
            },

            ui: {
               title: string,

               description: string,

               tags: Array<string>,

               id: string,

               properties: {
                  icons: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     properties: {
                        search: {
                           type: string,

                           title: string,

                           description: string,

                           default: string,

                           tags: Array<string>,

                           id: string,
                        },

                        dark: {
                           type: string,

                           title: string,

                           description: string,

                           default: string,

                           tags: Array<string>,

                           id: string,
                        },

                        light: {
                           type: string,

                           title: string,

                           description: string,

                           default: string,

                           tags: Array<string>,

                           id: string,
                        },

                        external: {
                           type: string,

                           title: string,

                           description: string,

                           default: string,

                           tags: Array<string>,

                           id: string,
                        },

                        chevron: {
                           type: string,

                           title: string,

                           description: string,

                           default: string,

                           tags: Array<string>,

                           id: string,
                        },

                        hash: {
                           type: string,

                           title: string,

                           description: string,

                           default: string,

                           tags: Array<string>,

                           id: string,
                        },
                     },

                     type: string,

                     default: {
                        search: string,

                        dark: string,

                        light: string,

                        external: string,

                        chevron: string,

                        hash: string,
                     },
                  },

                  primary: {
                     type: string,

                     title: string,

                     description: string,

                     default: string,

                     required: Array<string>,

                     tags: Array<string>,

                     id: string,
                  },

                  gray: {
                     type: string,

                     title: string,

                     description: string,

                     default: string,

                     required: Array<string>,

                     tags: Array<string>,

                     id: string,
                  },
               },

               type: string,

               default: {
                  icons: {
                     search: string,

                     dark: string,

                     light: string,

                     external: string,

                     chevron: string,

                     hash: string,
                  },

                  primary: string,

                  gray: string,
               },
            },
         },

         type: string,

         default: {
            icon: {
               size: any,

               class: string,

               attrs: {
                  "aria-hidden": boolean,
               },

               mode: string,

               aliases: any,

               cssSelectorPrefix: string,

               cssLayer: any,

               cssWherePseudo: boolean,

               collections: any,

               customCollections: any,

               provider: any,

               iconifyApiEndpoint: string,

               fallbackToApi: boolean,

               localApiEndpoint: string,

               fetchTimeout: number,

               customize: any,
            },

            ui: {
               icons: {
                  search: string,

                  dark: string,

                  light: string,

                  external: string,

                  chevron: string,

                  hash: string,
               },

               primary: string,

               gray: string,
            },
         },
      },

      default: {
         icon: {
            size: any,

            class: string,

            attrs: {
               "aria-hidden": boolean,
            },

            mode: string,

            aliases: any,

            cssSelectorPrefix: string,

            cssLayer: any,

            cssWherePseudo: boolean,

            collections: any,

            customCollections: any,

            provider: any,

            iconifyApiEndpoint: string,

            fallbackToApi: boolean,

            localApiEndpoint: string,

            fetchTimeout: number,

            customize: any,
         },

         ui: {
            icons: {
               search: string,

               dark: string,

               light: string,

               external: string,

               chevron: string,

               hash: string,
            },

            primary: string,

            gray: string,
         },
      },
   },

   contentSchema: any,
  }
  interface PublicRuntimeConfig {
   mdc: {
      components: {
         prose: boolean,

         map: {
            p: string,

            a: string,

            blockquote: string,

            "code-inline": string,

            code: string,

            em: string,

            h1: string,

            h2: string,

            h3: string,

            h4: string,

            h5: string,

            h6: string,

            hr: string,

            img: string,

            ul: string,

            ol: string,

            li: string,

            strong: string,

            table: string,

            thead: string,

            tbody: string,

            td: string,

            th: string,

            tr: string,
         },
      },

      headings: {
         anchorLinks: {
            h1: boolean,

            h2: boolean,

            h3: boolean,

            h4: boolean,

            h5: boolean,

            h6: boolean,
         },
      },
   },

   content: {
      locales: Array<any>,

      defaultLocale: any,

      integrity: number,

      experimental: {
         stripQueryParameters: boolean,

         advanceQuery: boolean,

         clientDB: boolean,
      },

      respectPathCase: boolean,

      api: {
         baseURL: string,
      },

      navigation: {
         fields: Array<string>,
      },

      tags: {
         p: string,

         a: string,

         blockquote: string,

         "code-inline": string,

         code: string,

         em: string,

         h1: string,

         h2: string,

         h3: string,

         h4: string,

         h5: string,

         h6: string,

         hr: string,

         img: string,

         ul: string,

         ol: string,

         li: string,

         strong: string,

         table: string,

         thead: string,

         tbody: string,

         td: string,

         th: string,

         tr: string,
      },

      highlight: {
         theme: {
            light: string,

            default: string,

            dark: string,
         },

         preload: Array<string>,

         highlighter: string,

         shikiEngine: string,

         langs: Array<string>,
      },

      wsUrl: string,

      documentDriven: boolean,

      host: string,

      trailingSlash: boolean,

      search: any,

      contentHead: boolean,

      anchorLinks: {
         depth: number,

         exclude: Array<number>,
      },
   },

   studio: {
      apiURL: string,

      iframeMessagingAllowedOrigins: any,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }