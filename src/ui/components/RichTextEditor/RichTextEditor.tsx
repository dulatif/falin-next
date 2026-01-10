"use client";

import { Box, Paper, SxProps } from "@mui/material";
import {styled} from '@mui/material/styles'
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";
import { Toolbar } from "./Toolbar";

const EditorContainer = styled(Box)(({ theme }) => ({
  "& .ProseMirror": {
    minHeight: 200,
    outline: "none",
    padding: theme.spacing(2),
    "p.is-editor-empty:first-child::before": {
      color: theme.palette.text.disabled,
      content: "attr(data-placeholder)",
      float: "left",
      height: 0,
      pointerEvents: "none",
    },
    "& ul, & ol": {
      padding: theme.spacing(0, 3),
    },
    "& h1, & h2, & h3, & h4, & h5, & h6": {
      lineHeight: 1.1,
    },
    "& code": {
      backgroundColor: theme.palette.action.hover,
      borderRadius: theme.shape.borderRadius,
      padding: "0.2em 0.4em",
      fontSize: "0.85em",
    },
    "& pre": {
      background: theme.palette.grey[900],
      color: theme.palette.common.white,
      fontFamily: "monospace",
      padding: theme.spacing(2),
      borderRadius: theme.shape.borderRadius,
      overflow: "auto",
      "& code": {
        color: "inherit",
        padding: 0,
        background: "none",
        fontSize: "inherit",
      },
    },
    "& blockquote": {
      borderLeft: `3px solid ${theme.palette.divider}`,
      margin: theme.spacing(2, 0),
      paddingLeft: theme.spacing(2),
      color: theme.palette.text.secondary,
    },
    "& img": {
      maxWidth: "100%",
      height: "auto",
    },
     "& hr": {
      border: "none",
      borderTop: `1px solid ${theme.palette.divider}`,
      margin: theme.spacing(2, 0),
    },
  },
}));

interface RichTextEditorProps {
  content?: string;
  onChange?: (content: string) => void;
  placeholder?: string;
  editable?: boolean;
  sx?: SxProps;
}

const RichTextEditor = ({
  content = "",
  onChange,
  placeholder = "Start typing...",
  editable = true,
  sx,
}: RichTextEditorProps) => {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Link.configure({
        openOnClick: false,
      }),
      Placeholder.configure({
        placeholder,
      }),
    ],
    content,
    editable,
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML());
    },
  });

  // Sync content updates from parent if needed (optional, handle with care loops)
  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
       // Only update if content is actually different to avoid cursor jumping
       // editor.commands.setContent(content);
    }
  }, [content, editor]);

  return (
    <Paper
      elevation={0}
      sx={{
        border: 1,
        borderColor: "divider",
        borderRadius: 2,
        overflow: "hidden",
         ...sx
      }}
    >
      <Toolbar editor={editor} />
      <EditorContainer>
        <EditorContent editor={editor} />
      </EditorContainer>
    </Paper>
  );
};

export default RichTextEditor;
