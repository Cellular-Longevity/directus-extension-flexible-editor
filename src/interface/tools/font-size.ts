// https://tiptap.dev/api/nodes/heading

import FontSize from "../../tiptap-extensions/extensions/font-size";
import { defineTool } from "../lib";
import { getMarkAttributes, type Editor } from "@tiptap/core";

const isFontSizeActive = (editor: Editor, fontSize: string) => {
  return getMarkAttributes(editor.state, 'textStyle').fontSize === fontSize;
}

export default (fontSize: string) => {
    return defineTool({
        key: `font-size-${fontSize}`,
        name: `${fontSize}px`,
        display: `${fontSize}`,
        extension: [FontSize],
        groups: ["fontSize"],
        shortcut: [],
        action: (editor: Editor) => {
          if (isFontSizeActive(editor, fontSize)) {
            editor.chain().focus().unsetFontSize().run()
          } else {
            editor.chain().focus().setFontSize(fontSize).run()
          }
        },
        disabled: (editor: Editor) =>
            !editor.can().chain().focus().setFontSize(fontSize).run(),
        active: (editor: Editor) => isFontSizeActive(editor, fontSize),
    });
};
