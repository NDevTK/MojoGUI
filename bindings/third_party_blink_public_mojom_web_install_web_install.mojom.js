// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/web_install/web_install.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};

blink.mojom.WebInstallServiceResultSpec = { $: mojo.internal.Enum() };
blink.mojom.InstallOptionsSpec = { $: {} };
blink.mojom.WebInstallService = {};
blink.mojom.WebInstallService.$interfaceName = 'blink.mojom.WebInstallService';
blink.mojom.WebInstallService_Install_ParamsSpec = { $: {} };
blink.mojom.WebInstallService_Install_ResponseParamsSpec = { $: {} };
blink.mojom.WebInstallService_InstallFromElement_ParamsSpec = { $: {} };
blink.mojom.WebInstallService_InstallFromElement_ResponseParamsSpec = { $: {} };

// Enum: WebInstallServiceResult
blink.mojom.WebInstallServiceResult = {
  kSuccess: 0,
  kAbortError: 1,
  kDataError: 2,
};

// Struct: InstallOptions
mojo.internal.Struct(
    blink.mojom.InstallOptionsSpec, 'blink.mojom.InstallOptions', [
      mojo.internal.StructField('install_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('manifest_id', 8, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Interface: WebInstallService
mojo.internal.Struct(
    blink.mojom.WebInstallService_Install_ParamsSpec, 'blink.mojom.WebInstallService_Install_Params', [
      mojo.internal.StructField('options', 0, 0, blink.mojom.InstallOptionsSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WebInstallService_Install_ResponseParamsSpec, 'blink.mojom.WebInstallService_Install_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.WebInstallServiceResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('manifest_id', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.WebInstallService_InstallFromElement_ParamsSpec, 'blink.mojom.WebInstallService_InstallFromElement_Params', [
      mojo.internal.StructField('options', 0, 0, blink.mojom.InstallOptionsSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WebInstallService_InstallFromElement_ResponseParamsSpec, 'blink.mojom.WebInstallService_InstallFromElement_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.WebInstallServiceResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('manifest_id', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.WebInstallServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.WebInstallServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WebInstallService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.WebInstallServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.WebInstallServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.WebInstallServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  install(options) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.WebInstallService_Install_ParamsSpec,
      blink.mojom.WebInstallService_Install_ResponseParamsSpec,
      [options],
      false);
  }

  installFromElement(options) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.WebInstallService_InstallFromElement_ParamsSpec,
      blink.mojom.WebInstallService_InstallFromElement_ResponseParamsSpec,
      [options],
      false);
  }

};

blink.mojom.WebInstallService.getRemote = function() {
  let remote = new blink.mojom.WebInstallServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WebInstallService',
    'context');
  return remote.$;
};

blink.mojom.WebInstallServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Install
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.WebInstallService_Install_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Install (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: InstallFromElement
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.WebInstallService_InstallFromElement_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InstallFromElement (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.WebInstallService_Install_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.install');
          const result = this.impl.install(params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.WebInstallService_Install_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.WebInstallService_InstallFromElement_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.installFromElement');
          const result = this.impl.installFromElement(params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.WebInstallService_InstallFromElement_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.WebInstallServiceReceiver = blink.mojom.WebInstallServiceReceiver;

blink.mojom.WebInstallServicePtr = blink.mojom.WebInstallServiceRemote;
blink.mojom.WebInstallServiceRequest = blink.mojom.WebInstallServicePendingReceiver;

