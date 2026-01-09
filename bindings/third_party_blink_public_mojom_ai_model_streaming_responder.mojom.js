// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/ai/model_streaming_responder.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: ModelStreamingResponseStatus
blink.mojom.ModelStreamingResponseStatus = {
  kOngoing: 0,
  kComplete: 1,
  kErrorUnknown: 2,
  kErrorInvalidRequest: 3,
  kErrorRequestThrottled: 4,
  kErrorPermissionDenied: 5,
  kErrorGenericFailure: 6,
  kErrorRetryableError: 7,
  kErrorNonRetryableError: 8,
  kErrorUnsupportedLanguage: 9,
  kErrorFiltered: 10,
  kErrorDisabled: 11,
  kErrorCancelled: 12,
  kErrorSessionDestroyed: 13,
  kErrorInputTooLarge: 14,
  kErrorResponseLowQuality: 15,
};

// Interface: ModelStreamingResponder
blink.mojom.ModelStreamingResponder = {};

blink.mojom.ModelStreamingResponderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ModelStreamingResponderRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ModelStreamingResponder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ModelStreamingResponderPendingReceiver,
      handle);
    this.$ = new blink.mojom.ModelStreamingResponderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ModelStreamingResponderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onCompletion(context_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ModelStreamingResponder_OnCompletion_ParamsSpec.$,
      null,
      [context_info]);
  }

  onError(status, quota_error_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.ModelStreamingResponder_OnError_ParamsSpec.$,
      null,
      [status, quota_error_info]);
  }

  onStreaming(text) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.ModelStreamingResponder_OnStreaming_ParamsSpec.$,
      null,
      [text]);
  }

  onQuotaOverflow() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.ModelStreamingResponder_OnQuotaOverflow_ParamsSpec.$,
      null,
      []);
  }

};

blink.mojom.ModelStreamingResponder.getRemote = function() {
  let remote = new blink.mojom.ModelStreamingResponderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ModelStreamingResponder',
    'context');
  return remote.$;
};

// ParamsSpec for OnCompletion
blink.mojom.ModelStreamingResponder_OnCompletion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ModelStreamingResponder.OnCompletion_Params',
      packedSize: 16,
      fields: [
        { name: 'context_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnError
blink.mojom.ModelStreamingResponder_OnError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ModelStreamingResponder.OnError_Params',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'quota_error_info', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnStreaming
blink.mojom.ModelStreamingResponder_OnStreaming_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ModelStreamingResponder.OnStreaming_Params',
      packedSize: 16,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnQuotaOverflow
blink.mojom.ModelStreamingResponder_OnQuotaOverflow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ModelStreamingResponder.OnQuotaOverflow_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.ModelStreamingResponderPtr = blink.mojom.ModelStreamingResponderRemote;
blink.mojom.ModelStreamingResponderRequest = blink.mojom.ModelStreamingResponderPendingReceiver;

