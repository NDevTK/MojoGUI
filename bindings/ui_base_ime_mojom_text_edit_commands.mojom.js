// Auto-generated MojoJS binding
// Source: chromium_src/ui/base/ime/mojom/text_edit_commands.mojom
// Module: ui.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.mojom = ui.mojom || {};

ui.mojom.TextEditCommandSpec = { $: mojo.internal.Enum() };

// Enum: TextEditCommand
ui.mojom.TextEditCommand = {
  kDeleteBackward: 0,
  kDeleteForward: 1,
  kDeleteToBeginningOfLine: 2,
  kDeleteToBeginningOfParagraph: 3,
  kDeleteToEndOfLine: 4,
  kDeleteToEndOfParagraph: 5,
  kDeleteWordBackward: 6,
  kDeleteWordForward: 7,
  kMoveBackward: 8,
  kMoveBackwardAndModifySelection: 9,
  kMoveDown: 10,
  kMoveDownAndModifySelection: 11,
  kMoveForward: 12,
  kMoveForwardAndModifySelection: 13,
  kMoveLeft: 14,
  kMoveLeftAndModifySelection: 15,
  kMovePageDown: 16,
  kMovePageDownAndModifySelection: 17,
  kMovePageUp: 18,
  kMovePageUpAndModifySelection: 19,
  kMoveRight: 20,
  kMoveRightAndModifySelection: 21,
  kMoveToBeginningOfDocument: 22,
  kMoveToBeginningOfDocumentAndModifySelection: 23,
  kMoveToBeginningOfLine: 24,
  kMoveToBeginningOfLineAndModifySelection: 25,
  kMoveToBeginningOfParagraph: 26,
  kMoveToBeginningOfParagraphAndModifySelection: 27,
  kMoveToEndOfDocument: 28,
  kMoveToEndOfDocumentAndModifySelection: 29,
  kMoveToEndOfLine: 30,
  kMoveToEndOfLineAndModifySelection: 31,
  kMoveToEndOfParagraph: 32,
  kMoveToEndOfParagraphAndModifySelection: 33,
  kMoveParagraphBackwardAndModifySelection: 34,
  kMoveParagraphForwardAndModifySelection: 35,
  kMoveUp: 36,
  kMoveUpAndModifySelection: 37,
  kMoveWordBackward: 38,
  kMoveWordBackwardAndModifySelection: 39,
  kMoveWordForward: 40,
  kMoveWordForwardAndModifySelection: 41,
  kMoveWordLeft: 42,
  kMoveWordLeftAndModifySelection: 43,
  kMoveWordRight: 44,
  kMoveWordRightAndModifySelection: 45,
  kScrollPageDown: 46,
  kScrollPageUp: 47,
  kScrollToBeginningOfDocument: 48,
  kScrollToEndOfDocument: 49,
  kUndo: 50,
  kRedo: 51,
  kCut: 52,
  kCopy: 53,
  kPaste: 54,
  kSelectAll: 55,
  kSelectWord: 56,
  kTranspose: 57,
  kYank: 58,
  kInsertText: 59,
  kSetMark: 60,
  kUnselect: 61,
  kInvalidCommand: 62,
};
