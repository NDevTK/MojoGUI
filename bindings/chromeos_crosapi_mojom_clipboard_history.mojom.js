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
crosapi.mojom.ClipboardHistoryControllerShowSourceSpec = { $: mojo.internal.Enum() };

// Enum: ClipboardHistoryDisplayFormat
crosapi.mojom.ClipboardHistoryDisplayFormat = {
  kText: 0,
  kPng: 1,
  kHtml: 2,
  kFile: 3,
};
crosapi.mojom.ClipboardHistoryDisplayFormatSpec = { $: mojo.internal.Enum() };

// Struct: ClipboardHistoryItemDescriptor
crosapi.mojom.ClipboardHistoryItemDescriptorSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ClipboardHistoryItemDescriptor',
      packedSize: 32,
      fields: [
        { name: 'item_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'display_format', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.ClipboardHistoryDisplayFormatSpec, nullable: false, minVersion: 0 },
        { name: 'display_text', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'file_count', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
