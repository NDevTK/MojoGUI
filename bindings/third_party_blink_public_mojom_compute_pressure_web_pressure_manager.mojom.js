// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/compute_pressure/web_pressure_manager.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var device = device || {};

blink.mojom.WebPressureManager = {};
blink.mojom.WebPressureManager.$interfaceName = 'blink.mojom.WebPressureManager';
blink.mojom.WebPressureManager_AddClient_ParamsSpec = { $: {} };
blink.mojom.WebPressureManager_AddClient_ResponseParamsSpec = { $: {} };
blink.mojom.WebPressureClient = {};
blink.mojom.WebPressureClient.$interfaceName = 'blink.mojom.WebPressureClient';
blink.mojom.WebPressureClient_OnPressureUpdated_ParamsSpec = { $: {} };

// Interface: WebPressureManager
mojo.internal.Struct(
    blink.mojom.WebPressureManager_AddClient_ParamsSpec, 'blink.mojom.WebPressureManager_AddClient_Params', [
      mojo.internal.StructField('source', 0, 0, device.mojom.PressureSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, pending_associated_remote<blink.mojom.WebPressureClient>Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.WebPressureManager_AddClient_ResponseParamsSpec, 'blink.mojom.WebPressureManager_AddClient_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, device.mojom.PressureManagerAddClientResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.WebPressureManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.WebPressureManagerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WebPressureManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.WebPressureManagerPendingReceiver,
      handle);
    this.$ = new blink.mojom.WebPressureManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.WebPressureManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addClient(source, client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.WebPressureManager_AddClient_ParamsSpec,
      blink.mojom.WebPressureManager_AddClient_ResponseParamsSpec,
      [source, client],
      false);
  }

};

blink.mojom.WebPressureManager.getRemote = function() {
  let remote = new blink.mojom.WebPressureManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WebPressureManager',
    'context');
  return remote.$;
};

blink.mojom.WebPressureManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.WebPressureManager_AddClient_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addClient(params.source, params.client);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.WebPressureManager_AddClient_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      }
    }});
  }
};

blink.mojom.WebPressureManagerReceiver = blink.mojom.WebPressureManagerReceiver;

blink.mojom.WebPressureManagerPtr = blink.mojom.WebPressureManagerRemote;
blink.mojom.WebPressureManagerRequest = blink.mojom.WebPressureManagerPendingReceiver;


// Interface: WebPressureClient
mojo.internal.Struct(
    blink.mojom.WebPressureClient_OnPressureUpdated_ParamsSpec, 'blink.mojom.WebPressureClient_OnPressureUpdated_Params', [
      mojo.internal.StructField('update', 0, 0, blink.mojom.WebPressureUpdateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.WebPressureClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.WebPressureClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WebPressureClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.WebPressureClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.WebPressureClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.WebPressureClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPressureUpdated(update) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.WebPressureClient_OnPressureUpdated_ParamsSpec,
      null,
      [update],
      false);
  }

};

blink.mojom.WebPressureClient.getRemote = function() {
  let remote = new blink.mojom.WebPressureClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WebPressureClient',
    'context');
  return remote.$;
};

blink.mojom.WebPressureClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.WebPressureClient_OnPressureUpdated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onPressureUpdated(params.update);
          break;
        }
      }
      }
    }});
  }
};

blink.mojom.WebPressureClientReceiver = blink.mojom.WebPressureClientReceiver;

blink.mojom.WebPressureClientPtr = blink.mojom.WebPressureClientRemote;
blink.mojom.WebPressureClientRequest = blink.mojom.WebPressureClientPendingReceiver;

