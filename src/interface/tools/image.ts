// https://tiptap.dev/api/nodes/image

import Image from "@tiptap/extension-image";
import { defineTool } from "../lib";
import customMessages from "../i18n/custom-messages";
import type { Editor } from "@tiptap/core";

export default defineTool({
    key: "image",
    name: customMessages.tools.image,
    icon: "image",
    extension: [imageExtenstionConfig],
    action: (editor: Editor) =>
    {
        const url = window.prompt('URL')

        if (url) {
          editor.chain().focus().setImage({ src: url }).run()
        }        
    },
    disabled: (editor: Editor) =>
        !editor.can().chain().focus().setImage({ src: "" }).run(),
    active: (editor: Editor) => editor.isActive("image"),
});

function imageExtenstionConfig() {
    return Image.configure({
        inline: true,
        HTMLAttributes: {
            class: 'image'
        }
    });
}