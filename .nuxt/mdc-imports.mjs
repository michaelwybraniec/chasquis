import _RemarkEmoji from 'remark-emoji'
import _Highlight from '/Users/michaelwybraniec/Documents/GitHub/chasquis/node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5_rollup@4.32.1/node_modules/@nuxtjs/mdc/dist/runtime/highlighter/rehype-nuxt.js'

export const remarkPlugins = {
  'remark-emoji': { instance: _RemarkEmoji },
}

export const rehypePlugins = {
  'highlight': { instance: _Highlight, options: {} },
}

export const highlight = {"theme":{"light":"material-theme-lighter","default":"material-theme","dark":"material-theme-palenight"}}