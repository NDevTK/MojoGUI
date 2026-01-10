// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/manifest/manifest_manager.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};

blink.mojom.RequestManifestErrorSpec = { $: {} };
blink.mojom.ManifestManager = {};
blink.mojom.ManifestManager.$interfaceName = 'blink.mojom.ManifestManager';
blink.mojom.ManifestManager_RequestManifest_ParamsSpec = { $: {} };
blink.mojom.ManifestManager_RequestManifest_ResponseParamsSpec = { $: {} };
blink.mojom.ManifestManager_RequestManifestAndErrors_ParamsSpec = { $: {} };
blink.mojom.ManifestManager_RequestManifestDebugInfo_ParamsSpec = { $: {} };
blink.mojom.ManifestManager_RequestManifestDebugInfo_ResponseParamsSpec = { $: {} };
blink.mojom.ManifestManager_ParseManifestFromString_ParamsSpec = { $: {} };
blink.mojom.ManifestManager_ParseManifestFromString_ResponseParamsSpec = { $: {} };

// Struct: RequestManifestError
mojo.internal.Struct(
    blink.mojom.RequestManifestErrorSpec, 'blink.mojom.RequestManifestError', [
      mojo.internal.StructField('error', 0, 0, blink.mojom.ManifestRequestResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('details', 8, 0, mojo.internal.Array(blink.mojom.ManifestErrorSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: ManifestManager
mojo.internal.Struct(
    blink.mojom.ManifestManager_RequestManifest_ParamsSpec, 'blink.mojom.ManifestManager_RequestManifest_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.ManifestManager_RequestManifest_ResponseParamsSpec, 'blink.mojom.ManifestManager_RequestManifest_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.ManifestRequestResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('manifest', 16, 0, blink.mojom.ManifestSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.ManifestManager_RequestManifestAndErrors_ParamsSpec, 'blink.mojom.ManifestManager_RequestManifestAndErrors_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.ManifestManager_RequestManifestDebugInfo_ParamsSpec, 'blink.mojom.ManifestManager_RequestManifestDebugInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.ManifestManager_RequestManifestDebugInfo_ResponseParamsSpec, 'blink.mojom.ManifestManager_RequestManifestDebugInfo_ResponseParams', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('parsed_manifest', 8, 0, blink.mojom.ManifestSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('debug_info', 16, 0, blink.mojom.ManifestDebugInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.ManifestManager_ParseManifestFromString_ParamsSpec, 'blink.mojom.ManifestManager_ParseManifestFromString_Params', [
      mojo.internal.StructField('document_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('manifest_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('manifest_content', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.ManifestManager_ParseManifestFromString_ResponseParamsSpec, 'blink.mojom.ManifestManager_ParseManifestFromString_ResponseParams', [
      mojo.internal.StructField('parsed_manifest', 0, 0, blink.mojom.ManifestSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.ManifestManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ManifestManagerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ManifestManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ManifestManagerPendingReceiver,
      handle);
    this.$ = new blink.mojom.ManifestManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ManifestManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestManifest() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ManifestManager_RequestManifest_ParamsSpec,
      blink.mojom.ManifestManager_RequestManifest_ResponseParamsSpec,
      [],
      false);
  }

  requestManifestAndErrors() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.ManifestManager_RequestManifestAndErrors_ParamsSpec,
      null,
      [],
      false);
  }

  requestManifestDebugInfo() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.ManifestManager_RequestManifestDebugInfo_ParamsSpec,
      blink.mojom.ManifestManager_RequestManifestDebugInfo_ResponseParamsSpec,
      [],
      false);
  }

  parseManifestFromString(document_url, manifest_url, manifest_content) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.ManifestManager_ParseManifestFromString_ParamsSpec,
      blink.mojom.ManifestManager_ParseManifestFromString_ResponseParamsSpec,
      [document_url, manifest_url, manifest_content],
      false);
  }

};

blink.mojom.ManifestManager.getRemote = function() {
  let remote = new blink.mojom.ManifestManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ManifestManager',
    'context');
  return remote.$;
};

blink.mojom.ManifestManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
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
        
        // Try Method 0: RequestManifest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ManifestManager_RequestManifest_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestManifest (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: RequestManifestAndErrors
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ManifestManager_RequestManifestAndErrors_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestManifestAndErrors (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: RequestManifestDebugInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ManifestManager_RequestManifestDebugInfo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestManifestDebugInfo (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: ParseManifestFromString
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ManifestManager_ParseManifestFromString_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ParseManifestFromString (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
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
          const params = decoder.decodeStruct(blink.mojom.ManifestManager_RequestManifest_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestManifest');
          const result = this.impl.requestManifest();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ManifestManager_RequestManifest_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.ManifestManager_RequestManifestAndErrors_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestManifestAndErrors');
          const result = this.impl.requestManifestAndErrors();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.ManifestManager_RequestManifestDebugInfo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestManifestDebugInfo');
          const result = this.impl.requestManifestDebugInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ManifestManager_RequestManifestDebugInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.ManifestManager_ParseManifestFromString_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.parseManifestFromString');
          const result = this.impl.parseManifestFromString(params.document_url, params.manifest_url, params.manifest_content);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ManifestManager_ParseManifestFromString_ResponseParamsSpec);
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

blink.mojom.ManifestManagerReceiver = blink.mojom.ManifestManagerReceiver;

blink.mojom.ManifestManagerPtr = blink.mojom.ManifestManagerRemote;
blink.mojom.ManifestManagerRequest = blink.mojom.ManifestManagerPendingReceiver;

