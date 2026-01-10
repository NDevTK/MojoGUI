// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/bindings/public/mojom/api_bindings.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};
var blink = blink || {};

chromecast.mojom.ApiBindingSpec = { $: {} };
chromecast.mojom.ApiBindings = {};
chromecast.mojom.ApiBindings.$interfaceName = 'chromecast.mojom.ApiBindings';
chromecast.mojom.ApiBindings_GetAll_ParamsSpec = { $: {} };
chromecast.mojom.ApiBindings_GetAll_ResponseParamsSpec = { $: {} };
chromecast.mojom.ApiBindings_Connect_ParamsSpec = { $: {} };

// Struct: ApiBinding
mojo.internal.Struct(
    chromecast.mojom.ApiBindingSpec, 'chromecast.mojom.ApiBinding', [
      mojo.internal.StructField('script', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: ApiBindings
mojo.internal.Struct(
    chromecast.mojom.ApiBindings_GetAll_ParamsSpec, 'chromecast.mojom.ApiBindings_GetAll_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromecast.mojom.ApiBindings_GetAll_ResponseParamsSpec, 'chromecast.mojom.ApiBindings_GetAll_ResponseParams', [
      mojo.internal.StructField('bindings', 0, 0, mojo.internal.Array(chromecast.mojom.ApiBindingSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.ApiBindings_Connect_ParamsSpec, 'chromecast.mojom.ApiBindings_Connect_Params', [
      mojo.internal.StructField('port_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('port', 8, 0, blink.mojom.MessagePortDescriptorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      chromecast.mojom.ApiBindings_GetAll_ParamsSpec,
      chromecast.mojom.ApiBindings_GetAll_ResponseParamsSpec,
      [],
      false);
  }

  connect(port_name, port) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.mojom.ApiBindings_Connect_ParamsSpec,
      null,
      [port_name, port],
      false);
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

chromecast.mojom.ApiBindingsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = chromecast.mojom.ApiBindings_GetAll_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getAll();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromecast.mojom.ApiBindings_GetAll_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = chromecast.mojom.ApiBindings_Connect_ParamsSpec.$.decode(message.payload);
          const result = this.impl.connect(params.port_name, params.port);
          break;
        }
      }
    }});
  }
};

chromecast.mojom.ApiBindingsReceiver = chromecast.mojom.ApiBindingsReceiver;

chromecast.mojom.ApiBindingsPtr = chromecast.mojom.ApiBindingsRemote;
chromecast.mojom.ApiBindingsRequest = chromecast.mojom.ApiBindingsPendingReceiver;

