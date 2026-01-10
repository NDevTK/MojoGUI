// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/copy_output_request.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};

viz.mojom.CopyOutputRequestSpec = { $: {} };
viz.mojom.CopyOutputResultSender = {};
viz.mojom.CopyOutputResultSender.$interfaceName = 'viz.mojom.CopyOutputResultSender';
viz.mojom.CopyOutputResultSender_SendResult_ParamsSpec = { $: {} };

// Struct: CopyOutputRequest
mojo.internal.Struct(
    viz.mojom.CopyOutputRequestSpec, 'viz.mojom.CopyOutputRequest', [
      mojo.internal.StructField('result_format', 0, 0, viz.mojom.CopyOutputResultFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('result_destination', 8, 0, viz.mojom.CopyOutputResultDestinationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('send_result_delay', 16, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scale_from', 24, 0, gfx.mojom.Vector2dSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scale_to', 32, 0, gfx.mojom.Vector2dSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source', 40, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('area', 48, 0, gfx.mojom.RectSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('result_selection', 56, 0, gfx.mojom.RectSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('blit_request', 64, 0, viz.mojom.BlitRequestSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('result_sender', 72, 0, mojo.internal.InterfaceProxy(viz.mojom.CopyOutputResultSenderRemote), null, false, 0, undefined),
    ],
    [[0, 88]]);

// Interface: CopyOutputResultSender
mojo.internal.Struct(
    viz.mojom.CopyOutputResultSender_SendResult_ParamsSpec, 'viz.mojom.CopyOutputResultSender_SendResult_Params', [
      mojo.internal.StructField('result', 0, 0, viz.mojom.CopyOutputResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [result],
      false);
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

viz.mojom.CopyOutputResultSenderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = viz.mojom.CopyOutputResultSender_SendResult_ParamsSpec.$.decode(message.payload);
          const result = this.impl.sendResult(params.result);
          break;
        }
      }
    });
  }
};

viz.mojom.CopyOutputResultSenderReceiver = viz.mojom.CopyOutputResultSenderReceiver;

viz.mojom.CopyOutputResultSenderPtr = viz.mojom.CopyOutputResultSenderRemote;
viz.mojom.CopyOutputResultSenderRequest = viz.mojom.CopyOutputResultSenderPendingReceiver;

