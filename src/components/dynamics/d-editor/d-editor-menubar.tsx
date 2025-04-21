"use client";

import { Layouts } from "@/components/layouts";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Editor } from "@tiptap/react";
import clsx from "clsx";
import {
  Bold,
  // Heading1,
  // Heading2,
  // Heading3,
  // Heading4,
  Italic,
  Strikethrough,
  Highlighter,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";

const DynamicEditorMenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  const menu = [
    {
      id: 1,
      name: "Bold",
      onClick: () => editor.chain().focus().toggleBold().run(),
      isActive: editor.isActive("bold"),
      icon: <Bold className="h-4 w-4" />,
    },
    {
      id: 2,
      name: "Italic",
      onClick: () => editor.chain().focus().toggleItalic().run(),
      isActive: editor.isActive("italic"),
      icon: <Italic className="h-4 w-4" />,
    },
    {
      id: 3,
      name: "Strike",
      onClick: () => editor.chain().focus().toggleStrike().run(),
      isActive: editor.isActive("strike"),
      icon: <Strikethrough className="h-4 w-4" />,
    },
    // {
    //   id: 4,
    //   name: "Heading 1",
    //   onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
    //   isActive: editor.isActive("heading", { level: 1 }),
    //   icon: <Heading1 className="h-4 w-4" />,
    // },
    // {
    //   id: 5,
    //   name: "Heading 2",
    //   onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
    //   isActive: editor.isActive("heading", { level: 2 }),
    //   icon: <Heading2 className="h-4 w-4" />,
    // },
    // {
    //   id: 6,
    //   name: "Heading 3",
    //   onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
    //   isActive: editor.isActive("heading", { level: 3 }),
    //   icon: <Heading3 className="h-4 w-4" />,
    // },
    // {
    //   id: 7,
    //   name: "Heading 4",
    //   onClick: () => editor.chain().focus().toggleHeading({ level: 4 }).run(),
    //   isActive: editor.isActive("heading", { level: 4 }),
    //   icon: <Heading4 className="h-4 w-4" />,
    // },
  ];

  return (
    <Layouts.Flex className="gap-1 border rounded-lg p-1">
      <ToggleGroup
        type="multiple"
        className="flex-wrap justify-start gap-1 rounded-lg"
      >
        {menu.map((item) => {
          return (
            <ToggleGroupItem
              key={item.id}
              value={item.id.toString()}
              aria-label={item.name}
              className={clsx("rounded-md bg-gray-200 dark:bg-gray-900", {
                "[&[data-state=on]]:bg-primary [&[data-state=on]]:text-primary-foreground":
                  item.isActive,
              })}
              data-state={item.isActive ? "on" : "off"}
              onClick={item.onClick}
            >
              {item.icon}
            </ToggleGroupItem>
          );
        })}
      </ToggleGroup>
      {/* editor.commands.toggleHighlight({ color: e.target.value }) */}
      <Popover>
        <PopoverTrigger className="bg-gray-200 hover:opacity-60 px-2 rounded-md">
          <Highlighter className="h-4 w-4" />
        </PopoverTrigger>
        <PopoverContent className="w-auto flex items-center gap-1 p-1">
          {["lightgreen", "red", "lightblue", "yellow"].map((color, index) => {
            return (
              <PopoverClose
                key={index}
                className="h-6 w-6 rounded-md"
                style={{ background: color }}
                onClick={() => editor.chain().toggleHighlight({ color }).run()}
              ></PopoverClose>
            );
          })}
        </PopoverContent>
      </Popover>
    </Layouts.Flex>
  );
};

export default DynamicEditorMenuBar;
