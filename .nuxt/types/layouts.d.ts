import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "auth" | "default"
declare module "../../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.12.0_db0@0.2.3_eslint@9.19.0_jiti@2.4.2__ior_segrkt63zo24umw5p2wmcqhavu/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}