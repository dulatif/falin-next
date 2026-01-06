"use client";
import {
  Box,
  Divider,
  Paper,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import {
  ContentBlock,
  DraftEditorCommand,
  Editor,
  EditorState,
  RichUtils,
} from "draft-js";
import "draft-js/dist/Draft.css";
import {
  Code,
  ListBullets,
  ListNumbers,
  Quotes,
  TextBolder,
  TextHFive,
  TextHFour,
  TextHOne,
  TextHSix,
  TextHThree,
  TextHTwo,
  TextItalic,
  TextUnderline,
} from "phosphor-react";
import React from "react";

export interface RichEditorProps {
  editorState: EditorState;
  onChange: (editorState: EditorState) => void;
  placeholder?: string;
}

const RichEditor = ({
  editorState,
  onChange,
  placeholder,
}: RichEditorProps) => {
  const handleKeyCommand = (
    command: DraftEditorCommand,
    editorState: EditorState,
  ) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      onChange(newState);
      return "handled";
    }
    return "not-handled";
  };

  const toggleInlineStyle = (style: string) => {
    onChange(RichUtils.toggleInlineStyle(editorState, style));
  };

  const toggleBlockType = (blockType: string) => {
    onChange(RichUtils.toggleBlockType(editorState, blockType));
  };

  const blockStyleFn = (contentBlock: ContentBlock) => {
    const type = contentBlock.getType();
    if (type === "blockquote") {
      return "RichEditor-blockquote";
    }
    return "";
  };

  const currentStyle = editorState.getCurrentInlineStyle();
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <Paper
      variant="outlined"
      sx={{
        overflow: "hidden",
        borderRadius: 1,
        borderColor: "rgba(0, 0, 0, 0.23)",
        "&:hover": {
          borderColor: "text.primary",
        },
        "&:focus-within": {
          borderColor: "primary.main",
          borderWidth: 2,
        },
      }}
    >
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          p: 1,
          display: "flex",
          gap: 0.5,
          flexWrap: "wrap",
          bgcolor: "grey.50",
        }}
      >
        <ToggleButtonGroup size="small" value={blockType} exclusive>
          <ToggleButton
            value="header-one"
            onClick={() => toggleBlockType("header-one")}
            aria-label="h1"
          >
            <TextHOne size={20} />
          </ToggleButton>
          <ToggleButton
            value="header-two"
            onClick={() => toggleBlockType("header-two")}
            aria-label="h2"
          >
            <TextHTwo size={20} />
          </ToggleButton>
          <ToggleButton
            value="header-three"
            onClick={() => toggleBlockType("header-three")}
            aria-label="h3"
          >
            <TextHThree size={20} />
          </ToggleButton>
          <ToggleButton
            value="header-four"
            onClick={() => toggleBlockType("header-four")}
            aria-label="h4"
          >
            <TextHFour size={20} />
          </ToggleButton>
          <ToggleButton
            value="header-five"
            onClick={() => toggleBlockType("header-five")}
            aria-label="h5"
          >
            <TextHFive size={20} />
          </ToggleButton>
          <ToggleButton
            value="header-six"
            onClick={() => toggleBlockType("header-six")}
            aria-label="h6"
          >
            <TextHSix size={20} />
          </ToggleButton>
        </ToggleButtonGroup>

        <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

        <ToggleButtonGroup size="small" value={currentStyle.toArray()}>
          <ToggleButton
            value="BOLD"
            onClick={() => toggleInlineStyle("BOLD")}
            aria-label="bold"
          >
            <TextBolder size={20} />
          </ToggleButton>
          <ToggleButton
            value="ITALIC"
            onClick={() => toggleInlineStyle("ITALIC")}
            aria-label="italic"
          >
            <TextItalic size={20} />
          </ToggleButton>
          <ToggleButton
            value="UNDERLINE"
            onClick={() => toggleInlineStyle("UNDERLINE")}
            aria-label="underline"
          >
            <TextUnderline size={20} />
          </ToggleButton>
          <ToggleButton
            value="CODE"
            onClick={() => toggleInlineStyle("CODE")}
            aria-label="code"
          >
            <Code size={20} />
          </ToggleButton>
        </ToggleButtonGroup>

        <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

        <ToggleButtonGroup size="small" value={blockType} exclusive>
          <ToggleButton
            value="blockquote"
            onClick={() => toggleBlockType("blockquote")}
            aria-label="blockquote"
          >
            <Quotes size={20} />
          </ToggleButton>
          <ToggleButton
            value="unordered-list-item"
            onClick={() => toggleBlockType("unordered-list-item")}
            aria-label="bullet list"
          >
            <ListBullets size={20} />
          </ToggleButton>
          <ToggleButton
            value="ordered-list-item"
            onClick={() => toggleBlockType("ordered-list-item")}
            aria-label="number list"
          >
            <ListNumbers size={20} />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box
        sx={{
          p: 2,
          minHeight: 200,
          cursor: "text",
          ".public-DraftEditor-content": {
            minHeight: 200,
          },
        }}
        onClick={() => {
          // focus logic handled by draft-js mostly
        }}
      >
        <Editor
          blockStyleFn={blockStyleFn}
          editorState={editorState}
          onChange={onChange}
          handleKeyCommand={handleKeyCommand}
          placeholder={placeholder}
        />
      </Box>
    </Paper>
  );
};

export default RichEditor;
