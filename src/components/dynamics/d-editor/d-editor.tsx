"use client";

import StarterKit from "@tiptap/starter-kit";
import { Layouts } from "@/components/layouts";
import Heading from "@tiptap/extension-heading";
import Highlight from "@tiptap/extension-highlight";
import DynamicEditorMenuBar from "./d-editor-menubar";
import { EditorContent, useEditor } from "@tiptap/react";

const DefaultDescription = "<p>Hello World! 🌎️</p>";

const DynamicEditor = ({
  description = DefaultDescription,
  onChange,
}: {
  description?: string;
  onChange?: (richText: string) => void;
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure(),
      Heading.configure({
        HTMLAttributes: {
          class: "text-4xl",
          level: [1],
        },
      }),
      Highlight.configure({ multicolor: true }),
    ],
    content: description,
    editorProps: {
      attributes: {
        class:
          "min-h-[24dvh] border border-border rounded-lg p-4 outline-none focus:outline-primary",
      },
    },
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML());
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <Layouts.Grid className="grid grid-cols-1 !gap-1">
      <DynamicEditorMenuBar editor={editor} />
      <EditorContent editor={editor} />
    </Layouts.Grid>
  );
};

export default DynamicEditor;
