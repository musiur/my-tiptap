import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import clsx from "clsx";
import { 
    AlignLeft,
    AlignCenter, 
    AlignRight, 
    AlignJustify,
} from "lucide-react";
import { Editor } from "@tiptap/react";
import { PopoverClose } from "@radix-ui/react-popover";

export const DynamicEditorMenuTextAlign = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  return (
    <Popover>
        <PopoverTrigger
          className={clsx("hover:opacity-60 px-2 rounded-md", {
            "bg-primary text-white": editor.isActive("textAlign"),
            "bg-gray-200": !editor.isActive("textAlign"),
          })}
        >
          {editor.isActive({ textAlign: "left" }) ? (
            <AlignLeft className="h-4 w-4" />
          ) : editor.isActive({ textAlign: "center" }) ? (
            <AlignCenter className="h-4 w-4" />
          ) : editor.isActive({ textAlign: "left" }) ? (
            <AlignRight className="h-4 w-4" />
          ) : editor.isActive({ textAlign: "justify" }) ? (
            <AlignJustify className="h-4 w-4" />
          ) : (
            <AlignLeft className="h-4 w-4" />
          )}
        </PopoverTrigger>
        <PopoverContent className="w-auto space-y-1 p-1">
          {[
            {
              icon: <AlignLeft className="h-4 w-4" />,
              onClick: () => editor.chain().focus().setTextAlign("left").run(),
              isActive: editor.isActive({ textAlign: "left" }),
              name: "Left",
            },
            {
              icon: <AlignCenter className="h-4 w-4" />,
              onClick: () =>
                editor.chain().focus().setTextAlign("center").run(),
              isActive: editor.isActive({ textAlign: "center" }),
              name: "Center",
            },
            {
              icon: <AlignRight className="h-4 w-4" />,
              onClick: () => editor.chain().focus().setTextAlign("right").run(),
              isActive: editor.isActive({ textAlign: "right" }),
              name: "Right",
            },
            {
              icon: <AlignJustify className="h-4 w-4" />,
              onClick: () =>
                editor.chain().focus().setTextAlign("justify").run(),
              isActive: editor.isActive({ textAlign: "justify" }),
              name: "Justify",
            },
          ].map((item, index) => {
            return (
              <PopoverClose
                key={index}
                className={clsx(
                  "h-6 text-sm rounded-md hover:bg-primary hover:text-white flex items-center gap-2 p-1",
                  {
                    "bg-gray-300 dark:bg-gray-900": item.isActive,
                  }
                )}
                onClick={item.onClick}
              >
                {item.icon} {item.name}
              </PopoverClose>
            );
          })}
        </PopoverContent>
      </Popover>
  )
}