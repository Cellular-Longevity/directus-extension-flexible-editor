// https://tiptap.dev/api/marks/subscript

import Subscript from "@tiptap/extension-subscript";
import { defineTool, extendMarkRangeIfUnselected } from "../lib";
import customMessages from "../i18n/custom-messages";
import type { Editor } from "@tiptap/core";

export default defineTool({
    key: "subscript",
    name: customMessages.tools.subscript,
    // "icon" is the icon name from https://fonts.google.com/icons
    icon: "subscript",
    extension: [Subscript],
    // shortcut: ["meta", "I"],
    action: (editor: Editor) =>
        extendMarkRangeIfUnselected(editor, "subscript").toggleSubscript().run(),
    disabled: (editor) => !editor.can().chain().focus().toggleSubscript().run(),
    active: (editor: Editor) => editor.isActive("subscript"),
});
