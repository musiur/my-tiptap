"use client";

import { Layouts } from "@/components/layouts";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Editor } from "@tiptap/react";
import clsx from "clsx";
import {
  Bold,
  Italic,
  Strikethrough,
} from "lucide-react";
import { DynamicEditorMenuHeading } from "./d-editor-menu-heading";
import { DynamicEditorMenuTextAlign } from "./d-editor-menu-text-align";
import { DynamicEditorMenuHighlight } from "./d-editor-menu-highlight";

const DynamicEditorMenuItems = (editor: Editor | null) => {
  if (!editor) {
    return [];
  }
  return [
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
  ];
};

const DynamicEditorMenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  const menu = DynamicEditorMenuItems(editor);

  return (
    <Layouts.Flex className="border rounded-lg p-1 bg-background">
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

      <Layouts.Flex className="!gap-1">
        <DynamicEditorMenuHeading editor={editor} />
        <DynamicEditorMenuTextAlign editor={editor} />
      </Layouts.Flex>
      <DynamicEditorMenuHighlight editor={editor} />
    </Layouts.Flex>
  );
};

export default DynamicEditorMenuBar;
