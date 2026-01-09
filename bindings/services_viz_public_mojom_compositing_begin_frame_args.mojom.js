// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/begin_frame_args.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Enum: BeginFrameArgsType
viz.mojom.BeginFrameArgsType = {
  INVALID: 0,
  NORMAL: 1,
  MISSED: 2,
};

// Struct: BeginFrameId
viz.mojom.BeginFrameIdSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.BeginFrameId',
      packedSize: 16,
      fields: [
        { name: 'sequence_number', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BeginFrameArgs
viz.mojom.BeginFrameArgsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.BeginFrameArgs',
      packedSize: 16,
      fields: [
        { name: 'animate_only', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BeginFrameAck
viz.mojom.BeginFrameAckSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.BeginFrameAck',
      packedSize: 16,
      fields: [
        { name: 'has_damage', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CADisplayLinkParams
viz.mojom.CADisplayLinkParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CADisplayLinkParams',
      packedSize: 16,
      fields: [
        { name: 'interval', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
