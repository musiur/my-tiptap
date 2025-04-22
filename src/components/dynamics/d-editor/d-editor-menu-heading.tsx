import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import clsx from "clsx";
import { 
    Heading,
    Heading1, 
    Heading2, 
    Heading3, 
    Heading4, 
} from "lucide-react";
import { Editor } from "@tiptap/react";
import { PopoverClose } from "@radix-ui/react-popover";

export const DynamicEditorMenuHeading = ({ editor}: {editor: Editor | null}) => {
    if(!editor){
        return null;
    }
    return (
        <Popover>
        <PopoverTrigger
          className={clsx("hover:opacity-60 px-2 rounded-md", {
            "bg-primary text-white": editor.isActive("heading"),
            "bg-gray-200": !editor.isActive("heading"),
          })}
        >
          {editor.isActive("heading", { level: 1 }) ? (
            <Heading1 className="h-4 w-4" />
          ) : editor.isActive("heading", { level: 2 }) ? (
            <Heading2 className="h-4 w-4" />
          ) : editor.isActive("heading", { level: 3 }) ? (
            <Heading3 className="h-4 w-4" />
          ) : editor.isActive("heading", { level: 4 }) ? (
            <Heading4 className="h-4 w-4" />
          ) : (
            <Heading className="h-4 w-4" />
          )}
        </PopoverTrigger>
        <PopoverContent className="w-auto space-y-1 p-1">
          {[
            {
              icon: <Heading1 className="h-4 w-4" />,
              onClick: () =>
                editor.chain().focus().toggleHeading({ level: 1 }).run(),
              isActive: editor.isActive("heading", { level: 1 }),
              name: "Heading 1",
            },
            {
              icon: <Heading2 className="h-4 w-4" />,
              onClick: () =>
                editor.chain().focus().toggleHeading({ level: 2 }).run(),
              isActive: editor.isActive("heading", { level: 2 }),
              name: "Heading 2",
            },
            {
              icon: <Heading3 className="h-4 w-4" />,
              onClick: () =>
                editor.chain().focus().toggleHeading({ level: 3 }).run(),
              isActive: editor.isActive("heading", { level: 3 }),
              name: "Heading 3",
            },
            {
              icon: <Heading4 className="h-4 w-4" />,
              onClick: () =>
                editor.chain().focus().toggleHeading({ level: 4 }).run(),
              isActive: editor.isActive("heading", { level: 4 }),
              name: "Heading 4",
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