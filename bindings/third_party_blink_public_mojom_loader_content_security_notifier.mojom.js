// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/content_security_notifier.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};

blink.mojom.ContentSecurityNotifier = {};
blink.mojom.ContentSecurityNotifier.$interfaceName = 'blink.mojom.ContentSecurityNotifier';
blink.mojom.ContentSecurityNotifier_NotifyContentWithCertificateErrorsRan_ParamsSpec = { $: {} };
blink.mojom.ContentSecurityNotifier_NotifyContentWithCertificateErrorsDisplayed_ParamsSpec = { $: {} };
blink.mojom.ContentSecurityNotifier_NotifyInsecureContentRan_ParamsSpec = { $: {} };

// Interface: ContentSecurityNotifier
mojo.internal.Struct(
    blink.mojom.ContentSecurityNotifier_NotifyContentWithCertificateErrorsRan_ParamsSpec, 'blink.mojom.ContentSecurityNotifier_NotifyContentWithCertificateErrorsRan_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.ContentSecurityNotifier_NotifyContentWithCertificateErrorsDisplayed_ParamsSpec, 'blink.mojom.ContentSecurityNotifier_NotifyContentWithCertificateErrorsDisplayed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.ContentSecurityNotifier_NotifyInsecureContentRan_ParamsSpec, 'blink.mojom.ContentSecurityNotifier_NotifyInsecureContentRan_Params', [
      mojo.internal.StructField('origin', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('insecure_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.ContentSecurityNotifierPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ContentSecurityNotifierRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ContentSecurityNotifier';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ContentSecurityNotifierPendingReceiver,
      handle);
    this.$ = new blink.mojom.ContentSecurityNotifierRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ContentSecurityNotifierRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  notifyContentWithCertificateErrorsRan() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ContentSecurityNotifier_NotifyContentWithCertificateErrorsRan_ParamsSpec,
      null,
      [],
      false);
  }

  notifyContentWithCertificateErrorsDisplayed() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.ContentSecurityNotifier_NotifyContentWithCertificateErrorsDisplayed_ParamsSpec,
      null,
      [],
      false);
  }

  notifyInsecureContentRan(origin, insecure_url) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.ContentSecurityNotifier_NotifyInsecureContentRan_ParamsSpec,
      null,
      [origin, insecure_url],
      false);
  }

};

blink.mojom.ContentSecurityNotifier.getRemote = function() {
  let remote = new blink.mojom.ContentSecurityNotifierRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ContentSecurityNotifier',
    'context');
  return remote.$;
};

blink.mojom.ContentSecurityNotifierReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
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
        
        // Try Method 0: NotifyContentWithCertificateErrorsRan
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ContentSecurityNotifier_NotifyContentWithCertificateErrorsRan_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyContentWithCertificateErrorsRan (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: NotifyContentWithCertificateErrorsDisplayed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ContentSecurityNotifier_NotifyContentWithCertificateErrorsDisplayed_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyContentWithCertificateErrorsDisplayed (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: NotifyInsecureContentRan
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ContentSecurityNotifier_NotifyInsecureContentRan_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyInsecureContentRan (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
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
          const params = decoder.decodeStruct(blink.mojom.ContentSecurityNotifier_NotifyContentWithCertificateErrorsRan_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.notifyContentWithCertificateErrorsRan');
          const result = this.impl.notifyContentWithCertificateErrorsRan();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.ContentSecurityNotifier_NotifyContentWithCertificateErrorsDisplayed_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.notifyContentWithCertificateErrorsDisplayed');
          const result = this.impl.notifyContentWithCertificateErrorsDisplayed();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.ContentSecurityNotifier_NotifyInsecureContentRan_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.notifyInsecureContentRan');
          const result = this.impl.notifyInsecureContentRan(params.origin, params.insecure_url);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.ContentSecurityNotifierReceiver = blink.mojom.ContentSecurityNotifierReceiver;

blink.mojom.ContentSecurityNotifierPtr = blink.mojom.ContentSecurityNotifierRemote;
blink.mojom.ContentSecurityNotifierRequest = blink.mojom.ContentSecurityNotifierPendingReceiver;

