// Auto-generated MojoJS binding
// Source: chromium_src/components/remote_cocoa/common/text_input_host.mojom
// Module: remote_cocoa.mojom

'use strict';

// Module namespace
var remote_cocoa = remote_cocoa || {};
remote_cocoa.mojom = remote_cocoa.mojom || {};


// Interface: TextInputHost
remote_cocoa.mojom.TextInputHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'remote_cocoa.mojom.TextInputHost';
  }

  hasClient() {
    // Method: HasClient
    return new Promise((resolve) => {
      // Call: HasClient()
      resolve({});
    });
  }

  hasInputContext() {
    // Method: HasInputContext
    return new Promise((resolve) => {
      // Call: HasInputContext()
      resolve({});
    });
  }

  isRTL() {
    // Method: IsRTL
    return new Promise((resolve) => {
      // Call: IsRTL()
      resolve({});
    });
  }

  getSelectionRange() {
    // Method: GetSelectionRange
    return new Promise((resolve) => {
      // Call: GetSelectionRange()
      resolve({});
    });
  }

  getSelectionText() {
    // Method: GetSelectionText
    return new Promise((resolve) => {
      // Call: GetSelectionText()
      resolve({});
    });
  }

  insertText(text, as_character) {
    // Method: InsertText
    // Call: InsertText(text, as_character)
  }

  deleteRange(range) {
    // Method: DeleteRange
    // Call: DeleteRange(range)
  }

  setCompositionText(text, selected_range, replacement_range) {
    // Method: SetCompositionText
    // Call: SetCompositionText(text, selected_range, replacement_range)
  }

  confirmCompositionText() {
    // Method: ConfirmCompositionText
    // Call: ConfirmCompositionText()
  }

  hasCompositionText() {
    // Method: HasCompositionText
    return new Promise((resolve) => {
      // Call: HasCompositionText()
      resolve({});
    });
  }

  getCompositionTextRange() {
    // Method: GetCompositionTextRange
    return new Promise((resolve) => {
      // Call: GetCompositionTextRange()
      resolve({});
    });
  }

  getAttributedSubstringForRange(requested_range) {
    // Method: GetAttributedSubstringForRange
    return new Promise((resolve) => {
      // Call: GetAttributedSubstringForRange(requested_range)
      resolve({});
    });
  }

  getFirstRectForRange(requested_range) {
    // Method: GetFirstRectForRange
    return new Promise((resolve) => {
      // Call: GetFirstRectForRange(requested_range)
      resolve({});
    });
  }

  isTextEditCommandEnabled(command) {
    // Method: IsTextEditCommandEnabled
    return new Promise((resolve) => {
      // Call: IsTextEditCommandEnabled(command)
      resolve({});
    });
  }

  setTextEditCommandForNextKeyEvent(command) {
    // Method: SetTextEditCommandForNextKeyEvent
    // Call: SetTextEditCommandForNextKeyEvent(command)
  }

};

remote_cocoa.mojom.TextInputHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
