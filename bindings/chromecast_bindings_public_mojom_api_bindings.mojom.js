// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/bindings/public/mojom/api_bindings.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};


// Interface: ApiBindings
chromecast.mojom.ApiBindings = {};

chromecast.mojom.ApiBindingsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.ApiBindingsRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.ApiBindings';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.ApiBindingsPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.ApiBindingsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.ApiBindingsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getAll() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.ApiBindings_GetAll_ParamsSpec.$,
      chromecast.mojom.ApiBindings_GetAll_ResponseParamsSpec.$,
      []);
  }

  connect(port_name, port) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.mojom.ApiBindings_Connect_ParamsSpec.$,
      null,
      [port_name, port]);
  }

};

chromecast.mojom.ApiBindings.getRemote = function() {
  let remote = new chromecast.mojom.ApiBindingsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.ApiBindings',
    'context');
  return remote.$;
};

// ParamsSpec for GetAll
chromecast.mojom.ApiBindings_GetAll_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.ApiBindings.GetAll_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

chromecast.mojom.ApiBindings_GetAll_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.ApiBindings.GetAll_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'bindings', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Connect
chromecast.mojom.ApiBindings_Connect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.ApiBindings.Connect_Params',
      packedSize: 24,
      fields: [
        { name: 'port_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'port', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chromecast.mojom.ApiBindingsPtr = chromecast.mojom.ApiBindingsRemote;
chromecast.mojom.ApiBindingsRequest = chromecast.mojom.ApiBindingsPendingReceiver;

