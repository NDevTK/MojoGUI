// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/copy_output_result.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Enum: CopyOutputResultFormat
viz.mojom.CopyOutputResultFormat = {
  RGBA: 0,
};

// Enum: CopyOutputResultDestination
viz.mojom.CopyOutputResultDestination = {
  kSystemMemory: 0,
  kSharedImage: 1,
};

// Struct: CopyOutputResult
viz.mojom.CopyOutputResultSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CopyOutputResult',
      packedSize: 64,
      fields: [
        { name: 'format', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.CopyOutputResultFormatSpec, nullable: false },
        { name: 'destination', packedOffset: 8, packedBitOffset: 0, type: viz.mojom.CopyOutputResultDestinationSpec, nullable: false },
        { name: 'rect', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'bitmap', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'mailbox', packedOffset: 32, packedBitOffset: 0, type: gpu.mojom.MailboxSpec, nullable: true },
        { name: 'color_space', packedOffset: 40, packedBitOffset: 0, type: gfx.mojom.ColorSpaceSpec, nullable: true },
        { name: 'releaser', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
