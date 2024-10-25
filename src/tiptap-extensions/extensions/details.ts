// Details and Summary extensions that allow defining expandable content that is
// initially hidden, with a visible summary that the user can interact with to
// expand it. When rendered in the editor UI, uses custom HTML tags
// <flexible-editor-details> and <flexible-editor-summary> whose styles are in
// src/interface/interface.vue. (Not <details> and <summary> because we don't want
// that interactive behavior in the editor).

// The implementation is similar to the blockquote extension in that you can select
// multiple top-level nodes (e.g. paragraphs) and wrap them in a details node.

// Tiptap has a "pro" details extension (https://tiptap.dev/docs/editor/extensions/nodes/details),
// which this is not based on; we haven't looked at or used its code in any way.

import { mergeAttributes, Node } from '@tiptap/core'

export interface DetailsOptions {
  /**
   * HTML attributes to add to the details element
   * @default {}
   * @example { class: 'foo' }
   */
  HTMLAttributes: Record<string, any>,
}

export interface SummaryOptions {
  HTMLAttributes: Record<string, any>,
}

// Commands to create/toggle/remove details and summary nodes.
declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    details: {
      setDetails: () => ReturnType,
      toggleDetails: () => ReturnType,
      unsetDetails: () => ReturnType,
    },
    summary: {
      setSummary: () => ReturnType,
      toggleSummary: () => ReturnType,
      unsetSummary: () => ReturnType,
    },
  }  
}

export const Details = Node.create<DetailsOptions>({
  name: 'details',

  addOptions() {
    return {
      HTMLAttributes: {},
    }
  },

  content: 'block+',

  group: 'block',

  defining: true,

  parseHTML() {
    return [
      { tag: 'flexible-editor-details' },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['flexible-editor-details', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0]
  },

  addCommands() {
    return {
      setDetails: () => ({ commands }) => {
        return commands.wrapIn(this.name)
      },
      toggleDetails: () => ({ commands }) => {
        return commands.toggleWrap(this.name)
      },
      unsetDetails: () => ({ commands }) => {
        return commands.lift(this.name)
      },
    }
  },
})

export const Summary = Node.create<SummaryOptions>({
  name: 'summary',

  addOptions() {
    return {
      HTMLAttributes: {},
    }
  },

  content: 'block+',

  group: 'block',

  defining: true,

  parseHTML() {
    return [
      { tag: 'flexible-editor-summary' },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['flexible-editor-summary', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0]
  },

  addCommands() {
    return {
      setSummary: () => ({ commands }) => {
        return commands.wrapIn(this.name)
      },
      toggleSummary: () => ({ commands }) => {
        return commands.toggleWrap(this.name)
      },
      unsetSummary: () => ({ commands }) => {
        return commands.lift(this.name)
      },
    }
  },
})
