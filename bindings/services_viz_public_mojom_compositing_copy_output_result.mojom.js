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
viz.mojom.CopyOutputResultFormatSpec = { $: mojo.internal.Enum() };

// Enum: CopyOutputResultDestination
viz.mojom.CopyOutputResultDestination = {
  kSystemMemory: 0,
  kSharedImage: 1,
};
viz.mojom.CopyOutputResultDestinationSpec = { $: mojo.internal.Enum() };

// Struct: CopyOutputResult
viz.mojom.CopyOutputResultSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CopyOutputResult',
      packedSize: 56,
      fields: [
        { name: 'format', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.CopyOutputResultFormatSpec, nullable: false, minVersion: 0 },
        { name: 'destination', packedOffset: 4, packedBitOffset: 0, type: viz.mojom.CopyOutputResultDestinationSpec, nullable: false, minVersion: 0 },
        { name: 'rect', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'bitmap', packedOffset: 16, packedBitOffset: 0, type: viz.mojom.BitmapInSharedMemorySpec, nullable: true, minVersion: 0 },
        { name: 'mailbox', packedOffset: 24, packedBitOffset: 0, type: gpu.mojom.MailboxSpec, nullable: true, minVersion: 0 },
        { name: 'color_space', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.ColorSpaceSpec, nullable: true, minVersion: 0 },
        { name: 'releaser', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};
