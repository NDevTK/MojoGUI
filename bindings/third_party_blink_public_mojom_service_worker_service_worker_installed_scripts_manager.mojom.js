// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_installed_scripts_manager.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};

blink.mojom.ServiceWorkerInstalledScriptsInfoSpec = { $: {} };
blink.mojom.ServiceWorkerScriptInfoSpec = { $: {} };
blink.mojom.ServiceWorkerInstalledScriptsManagerHost = {};
blink.mojom.ServiceWorkerInstalledScriptsManagerHost.$interfaceName = 'blink.mojom.ServiceWorkerInstalledScriptsManagerHost';
blink.mojom.ServiceWorkerInstalledScriptsManagerHost_RequestInstalledScript_ParamsSpec = { $: {} };
blink.mojom.ServiceWorkerInstalledScriptsManager = {};
blink.mojom.ServiceWorkerInstalledScriptsManager.$interfaceName = 'blink.mojom.ServiceWorkerInstalledScriptsManager';
blink.mojom.ServiceWorkerInstalledScriptsManager_TransferInstalledScript_ParamsSpec = { $: {} };

// Struct: ServiceWorkerInstalledScriptsInfo
mojo.internal.Struct(
    blink.mojom.ServiceWorkerInstalledScriptsInfoSpec, 'blink.mojom.ServiceWorkerInstalledScriptsInfo', [
      mojo.internal.StructField('manager_receiver', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.ServiceWorkerInstalledScriptsManagerRemote), null, false, 0, undefined),
      mojo.internal.StructField('manager_host_remote', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.ServiceWorkerInstalledScriptsManagerHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('installed_urls', 16, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ServiceWorkerScriptInfo
mojo.internal.Struct(
    blink.mojom.ServiceWorkerScriptInfoSpec, 'blink.mojom.ServiceWorkerScriptInfo', [
      mojo.internal.StructField('script_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('encoding', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('headers', 16, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('body', 24, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('body_size', 32, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('meta_data', 40, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('meta_data_size', 48, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 64]]);

// Interface: ServiceWorkerInstalledScriptsManagerHost
mojo.internal.Struct(
    blink.mojom.ServiceWorkerInstalledScriptsManagerHost_RequestInstalledScript_ParamsSpec, 'blink.mojom.ServiceWorkerInstalledScriptsManagerHost_RequestInstalledScript_Params', [
      mojo.internal.StructField('script_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.ServiceWorkerInstalledScriptsManagerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ServiceWorkerInstalledScriptsManagerHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ServiceWorkerInstalledScriptsManagerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ServiceWorkerInstalledScriptsManagerHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.ServiceWorkerInstalledScriptsManagerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  requestInstalledScript(script_url) {
    return this.$.requestInstalledScript(script_url);
  }
};

blink.mojom.ServiceWorkerInstalledScriptsManagerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ServiceWorkerInstalledScriptsManagerHost', [
      { explicit: null },
    ]);
  }

  requestInstalledScript(script_url) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.ServiceWorkerInstalledScriptsManagerHost_RequestInstalledScript_ParamsSpec,
      null,
      [script_url],
      false);
  }

};

blink.mojom.ServiceWorkerInstalledScriptsManagerHost.getRemote = function() {
  let remote = new blink.mojom.ServiceWorkerInstalledScriptsManagerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ServiceWorkerInstalledScriptsManagerHost',
    'context');
  return remote.$;
};

blink.mojom.ServiceWorkerInstalledScriptsManagerHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ServiceWorkerInstalledScriptsManagerHost', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorkerInstalledScriptsManagerHost_RequestInstalledScript_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerInstalledScriptsManagerHost_RequestInstalledScript_ParamsSpec.$.structSpec);
          const result = this.impl.requestInstalledScript(params.script_url);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

blink.mojom.ServiceWorkerInstalledScriptsManagerHostReceiver = blink.mojom.ServiceWorkerInstalledScriptsManagerHostReceiver;

blink.mojom.ServiceWorkerInstalledScriptsManagerHostPtr = blink.mojom.ServiceWorkerInstalledScriptsManagerHostRemote;
blink.mojom.ServiceWorkerInstalledScriptsManagerHostRequest = blink.mojom.ServiceWorkerInstalledScriptsManagerHostPendingReceiver;


// Interface: ServiceWorkerInstalledScriptsManager
mojo.internal.Struct(
    blink.mojom.ServiceWorkerInstalledScriptsManager_TransferInstalledScript_ParamsSpec, 'blink.mojom.ServiceWorkerInstalledScriptsManager_TransferInstalledScript_Params', [
      mojo.internal.StructField('script_info', 0, 0, blink.mojom.ServiceWorkerScriptInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.ServiceWorkerInstalledScriptsManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ServiceWorkerInstalledScriptsManagerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ServiceWorkerInstalledScriptsManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ServiceWorkerInstalledScriptsManagerPendingReceiver,
      handle);
    this.$ = new blink.mojom.ServiceWorkerInstalledScriptsManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  transferInstalledScript(script_info) {
    return this.$.transferInstalledScript(script_info);
  }
};

blink.mojom.ServiceWorkerInstalledScriptsManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ServiceWorkerInstalledScriptsManager', [
      { explicit: null },
    ]);
  }

  transferInstalledScript(script_info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.ServiceWorkerInstalledScriptsManager_TransferInstalledScript_ParamsSpec,
      null,
      [script_info],
      false);
  }

};

blink.mojom.ServiceWorkerInstalledScriptsManager.getRemote = function() {
  let remote = new blink.mojom.ServiceWorkerInstalledScriptsManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ServiceWorkerInstalledScriptsManager',
    'context');
  return remote.$;
};

blink.mojom.ServiceWorkerInstalledScriptsManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ServiceWorkerInstalledScriptsManager', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorkerInstalledScriptsManager_TransferInstalledScript_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerInstalledScriptsManager_TransferInstalledScript_ParamsSpec.$.structSpec);
          const result = this.impl.transferInstalledScript(params.script_info);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

blink.mojom.ServiceWorkerInstalledScriptsManagerReceiver = blink.mojom.ServiceWorkerInstalledScriptsManagerReceiver;

blink.mojom.ServiceWorkerInstalledScriptsManagerPtr = blink.mojom.ServiceWorkerInstalledScriptsManagerRemote;
blink.mojom.ServiceWorkerInstalledScriptsManagerRequest = blink.mojom.ServiceWorkerInstalledScriptsManagerPendingReceiver;

