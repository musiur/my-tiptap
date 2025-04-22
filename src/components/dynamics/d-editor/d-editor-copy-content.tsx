import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { AlignLeft, Copy, Code2, Braces } from "lucide-react";
import { Editor } from "@tiptap/react";
import { PopoverClose } from "@radix-ui/react-popover";

export const DynamicEditorCopyContent = ({
  editor,
}: {
  editor: Editor | null;
}) => {
  if (!editor) {
    return null;
  }

  return (
    <Popover>
      <PopoverTrigger className="inline-flex items-center gap-2 p-1 border rounded-lg pl-2">
        Copy contents
        <div className="hover:opacity-60 px-2 rounded-md w-9 h-9 flex items-center justify-center bg-gray-200">
          <Copy className="h-4 w-4" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto space-y-1 p-1">
        {[
          {
            icon: <AlignLeft className="h-4 w-4" />,
            onClick: () => console.log(editor.getText()),
            name: "Copy as Text",
          },
          {
            icon: <Code2 className="h-4 w-4" />,
            onClick: () => console.log(editor.getHTML()),
            name: "Copy as HTML",
          },
          {
            icon: <Braces className="h-4 w-4" />,
            onClick: () => console.log(editor.getJSON()),
            name: "Copy as JSON",
          },
        ].map((item, index) => {
          return (
            <PopoverClose
              key={index}
              className="w-full h-8 text-sm rounded-md hover:bg-primary hover:text-white flex items-center gap-2 p-1"
              onClick={item.onClick}
            >
              {item.icon} {item.name}
            </PopoverClose>
          );
        })}
      </PopoverContent>
    </Popover>
  );
};
