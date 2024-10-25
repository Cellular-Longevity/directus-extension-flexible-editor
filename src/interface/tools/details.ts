// https://tiptap.dev/api/nodes/blockquote

import {Details} from "../../tiptap-extensions/extensions/details";
import { defineTool } from "../lib";
import customMessages from "../i18n/custom-messages";
import type { Editor } from "@tiptap/core";

export default defineTool({
    key: "details",
    name: customMessages.tools.details,
    icon: "expand",
    extension: [Details],
    action: (editor: Editor) => editor.chain().focus().toggleDetails().run(),
    disabled: (editor: Editor) =>
        !editor.can().chain().focus().toggleDetails().run(),
    active: (editor: Editor) => editor.isActive("details"),
});
