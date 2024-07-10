// https://tiptap.dev/api/marks/superscript

import Superscript from "@tiptap/extension-superscript";
import { defineTool, extendMarkRangeIfUnselected } from "../lib";
import customMessages from "../i18n/custom-messages";
import type { Editor } from "@tiptap/core";

export default defineTool({
    key: "superscript",
    name: customMessages.tools.subscript,
    // "icon" is the icon name from https://fonts.google.com/icons
    icon: "superscript",
    extension: [Superscript],
    // shortcut: ["meta", "I"],
    action: (editor: Editor) =>
        extendMarkRangeIfUnselected(editor, "superscript").toggleSuperscript().run(),
    disabled: (editor) => !editor.can().chain().focus().toggleSuperscript().run(),
    active: (editor: Editor) => editor.isActive("superscript"),
});
