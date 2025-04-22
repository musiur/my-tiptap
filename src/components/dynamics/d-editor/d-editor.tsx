"use client";

import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import Highlight from "@tiptap/extension-highlight";
import { EditorContent, JSONContent, useEditor } from "@tiptap/react";
import { DynamicEditorBubbleMenu } from "./d-editor-bubble-menu";
import TextAlign from "@tiptap/extension-text-align";
import { DynamicEditorCopyContent } from "./d-editor-copy-content";

const DefaultDescription = "<p>Hello World! 🌎️</p>";

const DynamicEditor = ({
  description = DefaultDescription,
  onChange,
}: {
  description?: string;
  onChange?: (richText: string | JSONContent) => void;
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure(),
      Heading.configure({}),
      Highlight.configure({ multicolor: true }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: description,
    editorProps: {
      attributes: {
        class:
          "min-h-[24dvh] border border-border rounded-lg p-4 outline-none focus:outline-primary",
      },
    },
    onUpdate: ({ editor }) => {
      onChange?.(editor.getText());
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="space-y-4">
      <DynamicEditorBubbleMenu editor={editor} />
      <EditorContent editor={editor} />
      <DynamicEditorCopyContent editor={editor} />
    </div>
  );
};

export default DynamicEditor;
