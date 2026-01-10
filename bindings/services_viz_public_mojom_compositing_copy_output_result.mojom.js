// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/copy_output_result.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var services = services || {};
var services = services || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};

viz.mojom.CopyOutputResultFormatSpec = { $: mojo.internal.Enum() };
viz.mojom.CopyOutputResultDestinationSpec = { $: mojo.internal.Enum() };
viz.mojom.CopyOutputResultSpec = { $: {} };

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
mojo.internal.Struct(
    viz.mojom.CopyOutputResultSpec, 'viz.mojom.CopyOutputResult', [
      mojo.internal.StructField('format', 40, 0, viz.mojom.CopyOutputResultFormatSpec, null, false, 0, undefined),
      mojo.internal.StructField('destination', 44, 0, viz.mojom.CopyOutputResultDestinationSpec, null, false, 0, undefined),
      mojo.internal.StructField('rect', 0, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
      mojo.internal.StructField('bitmap', 8, 0, viz.mojom.BitmapInSharedMemorySpec, null, true, 0, undefined),
      mojo.internal.StructField('mailbox', 16, 0, gpu.mojom.MailboxSpec, null, true, 0, undefined),
      mojo.internal.StructField('color_space', 24, 0, gfx.mojom.ColorSpaceSpec, null, true, 0, undefined),
      mojo.internal.StructField('releaser', 32, 0, mojo.internal.InterfaceProxy(viz.mojom.TextureReleaserRemote), null, true, 0, undefined),
    ],
    [[0, 56]]);
