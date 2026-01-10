// Auto-generated MojoJS binding
// Source: chromium_src/fuchsia_web/webengine/mojom/web_engine_media_resource_provider.mojom
// Module: mojom

'use strict';

// Module namespace
var mojom = mojom || {};

mojom.AudioConsumerRequestSpec = { $: {} };
mojom.WebEngineMediaResourceProvider = {};
mojom.WebEngineMediaResourceProvider.$interfaceName = 'mojom.WebEngineMediaResourceProvider';
mojom.WebEngineMediaResourceProvider_ShouldUseAudioConsumer_ParamsSpec = { $: {} };
mojom.WebEngineMediaResourceProvider_ShouldUseAudioConsumer_ResponseParamsSpec = { $: {} };
mojom.WebEngineMediaResourceProvider_CreateAudioConsumer_ParamsSpec = { $: {} };

// Struct: AudioConsumerRequest
mojo.internal.Struct(
    mojom.AudioConsumerRequestSpec, 'mojom.AudioConsumerRequest', [
      mojo.internal.StructField('request', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: WebEngineMediaResourceProvider
mojo.internal.Struct(
    mojom.WebEngineMediaResourceProvider_ShouldUseAudioConsumer_ParamsSpec, 'mojom.WebEngineMediaResourceProvider_ShouldUseAudioConsumer_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.WebEngineMediaResourceProvider_ShouldUseAudioConsumer_ResponseParamsSpec, 'mojom.WebEngineMediaResourceProvider_ShouldUseAudioConsumer_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.WebEngineMediaResourceProvider_CreateAudioConsumer_ParamsSpec, 'mojom.WebEngineMediaResourceProvider_CreateAudioConsumer_Params', [
      mojo.internal.StructField('request', 0, 0, mojom.AudioConsumerRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojom.WebEngineMediaResourceProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojom.WebEngineMediaResourceProviderRemote = class {
  static get $interfaceName() {
    return 'mojom.WebEngineMediaResourceProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojom.WebEngineMediaResourceProviderPendingReceiver,
      handle);
    this.$ = new mojom.WebEngineMediaResourceProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mojom.WebEngineMediaResourceProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  shouldUseAudioConsumer() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      mojom.WebEngineMediaResourceProvider_ShouldUseAudioConsumer_ParamsSpec,
      mojom.WebEngineMediaResourceProvider_ShouldUseAudioConsumer_ResponseParamsSpec,
      [],
      false);
  }

  createAudioConsumer(request) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      mojom.WebEngineMediaResourceProvider_CreateAudioConsumer_ParamsSpec,
      null,
      [request],
      false);
  }

};

mojom.WebEngineMediaResourceProvider.getRemote = function() {
  let remote = new mojom.WebEngineMediaResourceProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mojom.WebEngineMediaResourceProvider',
    'context');
  return remote.$;
};

mojom.WebEngineMediaResourceProviderReceiver = class {
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
          const params = mojom.WebEngineMediaResourceProvider_ShouldUseAudioConsumer_ParamsSpec.$.decode(message.payload);
          const result = this.impl.shouldUseAudioConsumer();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.WebEngineMediaResourceProvider_ShouldUseAudioConsumer_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 1: {
          const params = mojom.WebEngineMediaResourceProvider_CreateAudioConsumer_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createAudioConsumer(params.request);
          break;
        }
      }
    });
  }
};

mojom.WebEngineMediaResourceProviderReceiver = mojom.WebEngineMediaResourceProviderReceiver;

mojom.WebEngineMediaResourceProviderPtr = mojom.WebEngineMediaResourceProviderRemote;
mojom.WebEngineMediaResourceProviderRequest = mojom.WebEngineMediaResourceProviderPendingReceiver;

