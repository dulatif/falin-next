"use client";

import { Box, ToggleButton, ToggleButtonGroup, Tooltip } from "@mui/material";
import { Editor } from "@tiptap/react";
import {
  Code,
  ListBullets,
  ListNumbers,
  Quotes,
  TextBolder,
  TextHOne,
  TextHThree,
  TextHTwo,
  TextItalic,
  TextStrikethrough,
  TextUnderline,
} from "phosphor-react";

interface ToolbarProps {
  editor: Editor | null;
}

export const Toolbar = ({ editor }: ToolbarProps) => {
  if (!editor) {
    return null;
  }

  return (
    <Box
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        p: 1,
        display: "flex",
        flexWrap: "wrap",
        gap: 1,
      }}
    >
      <ToggleButtonGroup size="small" aria-label="text formatting">
        <Tooltip title="Bold">
          <ToggleButton
            value="bold"
            selected={editor.isActive("bold")}
            onClick={() => editor.chain().focus().toggleBold().run()}
          >
            <TextBolder weight="bold" />
          </ToggleButton>
        </Tooltip>
        <Tooltip title="Italic">
          <ToggleButton
            value="italic"
            selected={editor.isActive("italic")}
            onClick={() => editor.chain().focus().toggleItalic().run()}
          >
            <TextItalic weight="bold" />
          </ToggleButton>
        </Tooltip>
        <Tooltip title="Underline">
          <ToggleButton
            value="underline"
            selected={editor.isActive("underline")}
            onClick={() => editor.chain().focus().toggleUnderline().run()}
          >
            <TextUnderline weight="bold" />
          </ToggleButton>
        </Tooltip>
        <Tooltip title="Strike">
          <ToggleButton
            value="strike"
            selected={editor.isActive("strike")}
            onClick={() => editor.chain().focus().toggleStrike().run()}
          >
            <TextStrikethrough weight="bold" />
          </ToggleButton>
        </Tooltip>
        <Tooltip title="Code">
          <ToggleButton
            value="code"
            selected={editor.isActive("code")}
            onClick={() => editor.chain().focus().toggleCode().run()}
          >
            <Code weight="bold" />
          </ToggleButton>
        </Tooltip>
      </ToggleButtonGroup>

      <ToggleButtonGroup size="small" aria-label="headings">
        <Tooltip title="Heading 1">
          <ToggleButton
            value="h1"
            selected={editor.isActive("heading", { level: 1 })}
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
          >
            <TextHOne weight="bold" />
          </ToggleButton>
        </Tooltip>
        <Tooltip title="Heading 2">
          <ToggleButton
            value="h2"
            selected={editor.isActive("heading", { level: 2 })}
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
          >
            <TextHTwo weight="bold" />
          </ToggleButton>
        </Tooltip>
        <Tooltip title="Heading 3">
          <ToggleButton
            value="h3"
            selected={editor.isActive("heading", { level: 3 })}
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
          >
            <TextHThree weight="bold" />
          </ToggleButton>
        </Tooltip>
      </ToggleButtonGroup>

      <ToggleButtonGroup size="small" aria-label="lists">
        <Tooltip title="Bullet List">
          <ToggleButton
            value="bulletList"
            selected={editor.isActive("bulletList")}
            onClick={() => editor.chain().focus().toggleBulletList().run()}
          >
            <ListBullets weight="bold" />
          </ToggleButton>
        </Tooltip>
        <Tooltip title="Ordered List">
          <ToggleButton
            value="orderedList"
            selected={editor.isActive("orderedList")}
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
          >
            <ListNumbers weight="bold" />
          </ToggleButton>
        </Tooltip>
        <Tooltip title="Blockquote">
          <ToggleButton
            value="blockquote"
            selected={editor.isActive("blockquote")}
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
          >
            <Quotes weight="bold" />
          </ToggleButton>
        </Tooltip>
      </ToggleButtonGroup>
    </Box>
  );
};
