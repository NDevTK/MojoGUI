// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/quick_start_decoder.mojom
// Module: ash.quick_start.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.quick_start = ash.quick_start || {};
ash.quick_start.mojom = ash.quick_start.mojom || {};


// Interface: QuickStartDecoder
ash.quick_start.mojom.QuickStartDecoder = {};

ash.quick_start.mojom.QuickStartDecoder_DecodeQuickStartMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.quick_start.mojom.QuickStartDecoder_DecodeQuickStartMessage_Params',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [data]);
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

// ParamsSpec for DecodeQuickStartMessage
ash.quick_start.mojom.QuickStartDecoder_DecodeQuickStartMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.quick_start.mojom.QuickStartDecoder.DecodeQuickStartMessage_Params',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.quick_start.mojom.QuickStartDecoder_DecodeQuickStartMessage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.quick_start.mojom.QuickStartDecoder.DecodeQuickStartMessage_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: ash.quick_start.mojom.QuickStartMessageSpec, nullable: true, minVersion: 0 },
        { name: 'error', packedOffset: 16, packedBitOffset: 0, type: ash.quick_start.mojom.QuickStartDecoderErrorSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
ash.quick_start.mojom.QuickStartDecoderPtr = ash.quick_start.mojom.QuickStartDecoderRemote;
ash.quick_start.mojom.QuickStartDecoderRequest = ash.quick_start.mojom.QuickStartDecoderPendingReceiver;

