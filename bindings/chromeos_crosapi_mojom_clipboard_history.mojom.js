// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/clipboard_history.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};
var mojo_base = mojo_base || {};

crosapi.mojom.ClipboardHistoryControllerShowSourceSpec = { $: mojo.internal.Enum() };
crosapi.mojom.ClipboardHistoryDisplayFormatSpec = { $: mojo.internal.Enum() };
crosapi.mojom.ClipboardHistoryItemDescriptorSpec = { $: {} };

// Enum: ClipboardHistoryControllerShowSource
crosapi.mojom.ClipboardHistoryControllerShowSource = {
  kAccelerator: 0,
  kRenderViewContextMenu: 1,
  kTextfieldContextMenu: 2,
  kVirtualKeyboard: 3,
  kUnknown: 4,
  MinVersion: 4,
  MinVersion: 4,
  MinVersion: 4,
  MinVersion: 4,
};

// Enum: ClipboardHistoryDisplayFormat
crosapi.mojom.ClipboardHistoryDisplayFormat = {
  kUnknown: -1,
  kText: 0,
  kPng: 1,
  kHtml: 2,
  kFile: 3,
};

// Struct: ClipboardHistoryItemDescriptor
mojo.internal.Struct(
    crosapi.mojom.ClipboardHistoryItemDescriptorSpec, 'crosapi.mojom.ClipboardHistoryItemDescriptor', [
      mojo.internal.StructField('item_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('display_format', 8, 0, crosapi.mojom.ClipboardHistoryDisplayFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('display_text', 16, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('file_count', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);
