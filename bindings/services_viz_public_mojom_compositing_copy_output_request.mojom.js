// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/copy_output_request.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Struct: CopyOutputRequest
viz.mojom.CopyOutputRequestSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CopyOutputRequest',
      packedSize: 80,
      fields: [
        { name: 'result_format', packedOffset: 64, packedBitOffset: 0, type: viz.mojom.CopyOutputResultFormatSpec, nullable: false, minVersion: 0 },
        { name: 'result_destination', packedOffset: 68, packedBitOffset: 0, type: viz.mojom.CopyOutputResultDestinationSpec, nullable: false, minVersion: 0 },
        { name: 'send_result_delay', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'scale_from', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.Vector2dSpec, nullable: false, minVersion: 0 },
        { name: 'scale_to', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.Vector2dSpec, nullable: false, minVersion: 0 },
        { name: 'source', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
        { name: 'area', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: true, minVersion: 0 },
        { name: 'result_selection', packedOffset: 40, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: true, minVersion: 0 },
        { name: 'blit_request', packedOffset: 48, packedBitOffset: 0, type: viz.mojom.BlitRequestSpec, nullable: true, minVersion: 0 },
        { name: 'result_sender', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(viz.mojom.CopyOutputResultSenderRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 80}]
    }
  }
};

// Interface: CopyOutputResultSender
viz.mojom.CopyOutputResultSender = {};

viz.mojom.CopyOutputResultSender_SendResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CopyOutputResultSender_SendResult_Params',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.CopyOutputResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

viz.mojom.CopyOutputResultSenderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.CopyOutputResultSenderRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.CopyOutputResultSender';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.CopyOutputResultSenderPendingReceiver,
      handle);
    this.$ = new viz.mojom.CopyOutputResultSenderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.CopyOutputResultSenderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  sendResult(result) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.CopyOutputResultSender_SendResult_ParamsSpec,
      null,
      [result]);
  }

};

viz.mojom.CopyOutputResultSender.getRemote = function() {
  let remote = new viz.mojom.CopyOutputResultSenderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.CopyOutputResultSender',
    'context');
  return remote.$;
};

// ParamsSpec for SendResult
viz.mojom.CopyOutputResultSender_SendResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CopyOutputResultSender.SendResult_Params',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.CopyOutputResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
viz.mojom.CopyOutputResultSenderPtr = viz.mojom.CopyOutputResultSenderRemote;
viz.mojom.CopyOutputResultSenderRequest = viz.mojom.CopyOutputResultSenderPendingReceiver;

