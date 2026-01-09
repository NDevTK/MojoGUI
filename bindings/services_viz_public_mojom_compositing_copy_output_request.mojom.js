// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/copy_output_request.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Interface: CopyOutputResultSender
viz.mojom.CopyOutputResultSender = {};

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
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
viz.mojom.CopyOutputResultSenderPtr = viz.mojom.CopyOutputResultSenderRemote;
viz.mojom.CopyOutputResultSenderRequest = viz.mojom.CopyOutputResultSenderPendingReceiver;

