// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/quick_start_decoder.mojom
// Module: ash.quick_start.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.quick_start = ash.quick_start || {};
ash.quick_start.mojom = ash.quick_start.mojom || {};
var sandbox = sandbox || {};

ash.quick_start.mojom.QuickStartDecoder = {};
ash.quick_start.mojom.QuickStartDecoder.$interfaceName = 'ash.quick_start.mojom.QuickStartDecoder';
ash.quick_start.mojom.QuickStartDecoder_DecodeQuickStartMessage_ParamsSpec = { $: {} };
ash.quick_start.mojom.QuickStartDecoder_DecodeQuickStartMessage_ResponseParamsSpec = { $: {} };

// Interface: QuickStartDecoder
mojo.internal.Struct(
    ash.quick_start.mojom.QuickStartDecoder_DecodeQuickStartMessage_ParamsSpec, 'ash.quick_start.mojom.QuickStartDecoder_DecodeQuickStartMessage_Params', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.quick_start.mojom.QuickStartDecoder_DecodeQuickStartMessage_ResponseParamsSpec, 'ash.quick_start.mojom.QuickStartDecoder_DecodeQuickStartMessage_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.quick_start.mojom.QuickStartMessageSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('error', 8, 0, ash.quick_start.mojom.QuickStartDecoderErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

ash.quick_start.mojom.QuickStartDecoderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.quick_start.mojom.QuickStartDecoderRemote = class {
  static get $interfaceName() {
    return 'ash.quick_start.mojom.QuickStartDecoder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.quick_start.mojom.QuickStartDecoderPendingReceiver,
      handle);
    this.$ = new ash.quick_start.mojom.QuickStartDecoderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.quick_start.mojom.QuickStartDecoderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  decodeQuickStartMessage(data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.quick_start.mojom.QuickStartDecoder_DecodeQuickStartMessage_ParamsSpec,
      ash.quick_start.mojom.QuickStartDecoder_DecodeQuickStartMessage_ResponseParamsSpec,
      [data],
      false);
  }

};

ash.quick_start.mojom.QuickStartDecoder.getRemote = function() {
  let remote = new ash.quick_start.mojom.QuickStartDecoderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.quick_start.mojom.QuickStartDecoder',
    'context');
  return remote.$;
};

ash.quick_start.mojom.QuickStartDecoderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.quick_start.mojom.QuickStartDecoder_DecodeQuickStartMessage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.decodeQuickStartMessage(params.data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.quick_start.mojom.QuickStartDecoder_DecodeQuickStartMessage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

ash.quick_start.mojom.QuickStartDecoderReceiver = ash.quick_start.mojom.QuickStartDecoderReceiver;

ash.quick_start.mojom.QuickStartDecoderPtr = ash.quick_start.mojom.QuickStartDecoderRemote;
ash.quick_start.mojom.QuickStartDecoderRequest = ash.quick_start.mojom.QuickStartDecoderPendingReceiver;

