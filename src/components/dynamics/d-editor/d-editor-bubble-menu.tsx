import { Editor } from "@tiptap/react";
import { BubbleMenu } from "@tiptap/react";
import DynamicEditorMenuBar from "./d-editor-menubar";

export const DynamicEditorBubbleMenu = ({
  editor,
}: {
  editor: Editor | null;
}) => {
  return (
    <div>
      {editor && (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <DynamicEditorMenuBar editor={editor} />
        </BubbleMenu>
      )}
    </div>
  );
};
