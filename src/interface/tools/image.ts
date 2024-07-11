// https://tiptap.dev/api/nodes/image

import Image from "@tiptap/extension-image";
import customMessages from "../i18n/custom-messages";
import type { Editor } from "@tiptap/core";
import type { Tool } from "../types";

export default {
    key: "image",
    name: customMessages.tools.image,
    icon: "image",
    extension: [imageExtenstionConfig],
    action: (editor: Editor) =>
    {
        // Allow specifying just the ID from the file library.
        const urlOrId = window.prompt('URL or image ID')

        if (urlOrId) {
          const url = urlOrId.startsWith("http://") || urlOrId.startsWith("https://")
              ? urlOrId
              : `/assets/${urlOrId}`
          editor.chain().focus().setImage({ src: url }).run()
        }        
    },
    disabled: (editor: Editor) =>
        !editor.can().chain().focus().setImage({ src: "" }).run(),
    active: (editor: Editor) => editor.isActive("image"),
} as Tool;

function imageExtenstionConfig() {
    return Image.configure({
        inline: true,
        HTMLAttributes: {
            class: 'image'
        }
    });
}