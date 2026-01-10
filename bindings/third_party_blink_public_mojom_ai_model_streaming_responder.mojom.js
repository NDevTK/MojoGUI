// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/ai/model_streaming_responder.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.ModelStreamingResponseStatusSpec = { $: mojo.internal.Enum() };
blink.mojom.ModelExecutionContextInfoSpec = { $: {} };
blink.mojom.ModelStreamingResponder = {};
blink.mojom.ModelStreamingResponder.$interfaceName = 'blink.mojom.ModelStreamingResponder';
blink.mojom.ModelStreamingResponder_OnCompletion_ParamsSpec = { $: {} };
blink.mojom.ModelStreamingResponder_OnError_ParamsSpec = { $: {} };
blink.mojom.ModelStreamingResponder_OnStreaming_ParamsSpec = { $: {} };
blink.mojom.ModelStreamingResponder_OnQuotaOverflow_ParamsSpec = { $: {} };

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

// Struct: ModelExecutionContextInfo
mojo.internal.Struct(
    blink.mojom.ModelExecutionContextInfoSpec, 'blink.mojom.ModelExecutionContextInfo', [
      mojo.internal.StructField('current_tokens', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: ModelStreamingResponder
mojo.internal.Struct(
    blink.mojom.ModelStreamingResponder_OnCompletion_ParamsSpec, 'blink.mojom.ModelStreamingResponder_OnCompletion_Params', [
      mojo.internal.StructField('context_info', 0, 0, blink.mojom.ModelExecutionContextInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ModelStreamingResponder_OnError_ParamsSpec, 'blink.mojom.ModelStreamingResponder_OnError_Params', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.ModelStreamingResponseStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('quota_error_info', 8, 0, blink.mojom.QuotaErrorInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.ModelStreamingResponder_OnStreaming_ParamsSpec, 'blink.mojom.ModelStreamingResponder_OnStreaming_Params', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ModelStreamingResponder_OnQuotaOverflow_ParamsSpec, 'blink.mojom.ModelStreamingResponder_OnQuotaOverflow_Params', [
    ],
    [[0, 8]]);

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
      blink.mojom.ModelStreamingResponder_OnCompletion_ParamsSpec,
      null,
      [context_info],
      false);
  }

  onError(status, quota_error_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.ModelStreamingResponder_OnError_ParamsSpec,
      null,
      [status, quota_error_info],
      false);
  }

  onStreaming(text) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.ModelStreamingResponder_OnStreaming_ParamsSpec,
      null,
      [text],
      false);
  }

  onQuotaOverflow() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.ModelStreamingResponder_OnQuotaOverflow_ParamsSpec,
      null,
      [],
      false);
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

blink.mojom.ModelStreamingResponderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.ModelStreamingResponder_OnCompletion_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onCompletion(params.context_info);
          break;
        }
        case 1: {
          const params = blink.mojom.ModelStreamingResponder_OnError_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onError(params.status, params.quota_error_info);
          break;
        }
        case 2: {
          const params = blink.mojom.ModelStreamingResponder_OnStreaming_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onStreaming(params.text);
          break;
        }
        case 3: {
          const params = blink.mojom.ModelStreamingResponder_OnQuotaOverflow_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onQuotaOverflow();
          break;
        }
      }
    });
  }
};

blink.mojom.ModelStreamingResponderReceiver = blink.mojom.ModelStreamingResponderReceiver;

blink.mojom.ModelStreamingResponderPtr = blink.mojom.ModelStreamingResponderRemote;
blink.mojom.ModelStreamingResponderRequest = blink.mojom.ModelStreamingResponderPendingReceiver;

