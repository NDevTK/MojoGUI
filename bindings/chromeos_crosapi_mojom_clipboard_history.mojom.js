// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/clipboard_history.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Enum: ClipboardHistoryControllerShowSource
crosapi.mojom.ClipboardHistoryControllerShowSource = {
  kAccelerator: 0,
  kRenderViewContextMenu: 1,
  kTextfieldContextMenu: 2,
  kVirtualKeyboard: 3,
};

// Enum: ClipboardHistoryDisplayFormat
crosapi.mojom.ClipboardHistoryDisplayFormat = {
  kText: 0,
  kPng: 1,
  kHtml: 2,
  kFile: 3,
};

// Struct: ClipboardHistoryItemDescriptor
crosapi.mojom.ClipboardHistoryItemDescriptorSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ClipboardHistoryItemDescriptor',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};
