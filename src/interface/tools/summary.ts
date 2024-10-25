// https://tiptap.dev/api/nodes/blockquote

import {Summary} from "../../tiptap-extensions/extensions/details";
import { defineTool } from "../lib";
import customMessages from "../i18n/custom-messages";
import type { Editor } from "@tiptap/core";

export default defineTool({
    key: "summary",
    name: customMessages.tools.summary,
    icon: "expand_circle_down",
    extension: [Summary],
    action: (editor: Editor) => editor.chain().focus().toggleSummary().run(),
    disabled: (editor: Editor) =>
        !editor.can().chain().focus().toggleSummary().run(),
    active: (editor: Editor) => editor.isActive("summary"),
});
