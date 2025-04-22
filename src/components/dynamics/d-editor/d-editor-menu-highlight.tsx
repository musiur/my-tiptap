import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import clsx from "clsx";
import { Highlighter, CircleSlash } from "lucide-react";
import { Editor } from "@tiptap/react";
import { PopoverClose } from "@radix-ui/react-popover";

export const DynamicEditorMenuHighlight = ({
  editor,
}: {
  editor: Editor | null;
}) => {
  if (!editor) {
    return null;
  }

  return (
    <Popover>
      <PopoverTrigger className="bg-gray-200 hover:opacity-60 px-2 rounded-md">
        <Highlighter className="h-4 w-4" />
      </PopoverTrigger>
      <PopoverContent className="w-auto flex items-center gap-1 p-1">
        {["lightgreen", "pink", "lightblue", "yellow"].map((color, index) => {
          return (
            <PopoverClose
              key={index}
              className={clsx("h-6 w-6 rounded-md p-[1px]", {
                "border border-gray-300 dark:border-gray-900": editor.isActive(
                  "highlight",
                  { color }
                ),
              })}
              style={{ background: color }}
              onClick={() => editor.chain().toggleHighlight({ color }).run()}
            ></PopoverClose>
          );
        })}
        <PopoverClose
          className="h-6 w-6 rounded-md border flex items-center justify-center"
          style={{ background: "white" }}
          onClick={() => editor.chain().unsetMark("highlight").run()}
        >
          <CircleSlash className="h-4 w-4" />
        </PopoverClose>
      </PopoverContent>
    </Popover>
  );
};
