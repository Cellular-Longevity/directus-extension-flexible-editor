This directory contains custom Tiptap extensions for use in Jumbo.

- `font-size` is largely taken from https://github.com/Leecason/element-tiptap. The editor "tool" is defined in `src/interface/tools/font-size.ts` and is similar to the heading tool; there is one instance created for each font size (in `src/interface/tools/index.ts`) and they're assigned to the `fontSize` menu defined in `src/interface/components/Toolbar.vue`. 
- `details` and `summary` are used to create expandable content with a visible summary. Both extensions are defined in `details.ts` and work similarly to the blockquote extension. 
