// Auto-generated MojoJS binding
// Source: chromium_src/fuchsia_web/webengine/mojom/web_engine_media_resource_provider.mojom
// Module: mojom

'use strict';

// Module namespace
var mojom = mojom || {};


// Interface: WebEngineMediaResourceProvider
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
      mojom.WebEngineMediaResourceProvider_ShouldUseAudioConsumer_ParamsSpec.$,
      mojom.WebEngineMediaResourceProvider_ShouldUseAudioConsumer_ResponseParamsSpec.$,
      []);
  }

  createAudioConsumer(request) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      mojom.WebEngineMediaResourceProvider_CreateAudioConsumer_ParamsSpec.$,
      null,
      [request]);
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
}};

// ParamsSpec for ShouldUseAudioConsumer
mojom.WebEngineMediaResourceProvider_ShouldUseAudioConsumer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.WebEngineMediaResourceProvider.ShouldUseAudioConsumer_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

mojom.WebEngineMediaResourceProvider_ShouldUseAudioConsumer_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.WebEngineMediaResourceProvider.ShouldUseAudioConsumer_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for CreateAudioConsumer
mojom.WebEngineMediaResourceProvider_CreateAudioConsumer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.WebEngineMediaResourceProvider.CreateAudioConsumer_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
mojom.WebEngineMediaResourceProviderPtr = mojom.WebEngineMediaResourceProviderRemote;
mojom.WebEngineMediaResourceProviderRequest = mojom.WebEngineMediaResourceProviderPendingReceiver;

