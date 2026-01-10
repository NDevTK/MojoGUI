// Auto-generated MojoJS binding
// Source: chromium_src/components/dom_distiller/content/common/mojom/distiller_javascript_service.mojom
// Module: dom_distiller.mojom

'use strict';

// Module namespace
var dom_distiller = dom_distiller || {};
dom_distiller.mojom = dom_distiller.mojom || {};

dom_distiller.mojom.DistillerJavaScriptService = {};
dom_distiller.mojom.DistillerJavaScriptService.$interfaceName = 'dom_distiller.mojom.DistillerJavaScriptService';
dom_distiller.mojom.DistillerJavaScriptService_HandleDistillerOpenSettingsCall_ParamsSpec = { $: {} };
dom_distiller.mojom.DistillerJavaScriptService_HandleStoreThemePref_ParamsSpec = { $: {} };
dom_distiller.mojom.DistillerJavaScriptService_HandleStoreFontFamilyPref_ParamsSpec = { $: {} };
dom_distiller.mojom.DistillerJavaScriptService_HandleStoreFontScalingPref_ParamsSpec = { $: {} };

// Interface: DistillerJavaScriptService
mojo.internal.Struct(
    dom_distiller.mojom.DistillerJavaScriptService_HandleDistillerOpenSettingsCall_ParamsSpec, 'dom_distiller.mojom.DistillerJavaScriptService_HandleDistillerOpenSettingsCall_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    dom_distiller.mojom.DistillerJavaScriptService_HandleStoreThemePref_ParamsSpec, 'dom_distiller.mojom.DistillerJavaScriptService_HandleStoreThemePref_Params', [
      mojo.internal.StructField('theme', 0, 0, dom_distiller.mojom.ThemeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    dom_distiller.mojom.DistillerJavaScriptService_HandleStoreFontFamilyPref_ParamsSpec, 'dom_distiller.mojom.DistillerJavaScriptService_HandleStoreFontFamilyPref_Params', [
      mojo.internal.StructField('font_family', 0, 0, dom_distiller.mojom.FontFamilySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    dom_distiller.mojom.DistillerJavaScriptService_HandleStoreFontScalingPref_ParamsSpec, 'dom_distiller.mojom.DistillerJavaScriptService_HandleStoreFontScalingPref_Params', [
      mojo.internal.StructField('font_scale', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

dom_distiller.mojom.DistillerJavaScriptServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

dom_distiller.mojom.DistillerJavaScriptServiceRemote = class {
  static get $interfaceName() {
    return 'dom_distiller.mojom.DistillerJavaScriptService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      dom_distiller.mojom.DistillerJavaScriptServicePendingReceiver,
      handle);
    this.$ = new dom_distiller.mojom.DistillerJavaScriptServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

dom_distiller.mojom.DistillerJavaScriptServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  handleDistillerOpenSettingsCall() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      dom_distiller.mojom.DistillerJavaScriptService_HandleDistillerOpenSettingsCall_ParamsSpec,
      null,
      [],
      false);
  }

  handleStoreThemePref(theme) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      dom_distiller.mojom.DistillerJavaScriptService_HandleStoreThemePref_ParamsSpec,
      null,
      [theme],
      false);
  }

  handleStoreFontFamilyPref(font_family) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      dom_distiller.mojom.DistillerJavaScriptService_HandleStoreFontFamilyPref_ParamsSpec,
      null,
      [font_family],
      false);
  }

  handleStoreFontScalingPref(font_scale) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      dom_distiller.mojom.DistillerJavaScriptService_HandleStoreFontScalingPref_ParamsSpec,
      null,
      [font_scale],
      false);
  }

};

dom_distiller.mojom.DistillerJavaScriptService.getRemote = function() {
  let remote = new dom_distiller.mojom.DistillerJavaScriptServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'dom_distiller.mojom.DistillerJavaScriptService',
    'context');
  return remote.$;
};

dom_distiller.mojom.DistillerJavaScriptServiceReceiver = class {
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: HandleDistillerOpenSettingsCall
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(dom_distiller.mojom.DistillerJavaScriptService_HandleDistillerOpenSettingsCall_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HandleDistillerOpenSettingsCall (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: HandleStoreThemePref
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(dom_distiller.mojom.DistillerJavaScriptService_HandleStoreThemePref_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HandleStoreThemePref (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: HandleStoreFontFamilyPref
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(dom_distiller.mojom.DistillerJavaScriptService_HandleStoreFontFamilyPref_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HandleStoreFontFamilyPref (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: HandleStoreFontScalingPref
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(dom_distiller.mojom.DistillerJavaScriptService_HandleStoreFontScalingPref_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HandleStoreFontScalingPref (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
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
          const params = decoder.decodeStructInline(dom_distiller.mojom.DistillerJavaScriptService_HandleDistillerOpenSettingsCall_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.handleDistillerOpenSettingsCall');
          const result = this.impl.handleDistillerOpenSettingsCall();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(dom_distiller.mojom.DistillerJavaScriptService_HandleStoreThemePref_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.handleStoreThemePref');
          const result = this.impl.handleStoreThemePref(params.theme);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(dom_distiller.mojom.DistillerJavaScriptService_HandleStoreFontFamilyPref_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.handleStoreFontFamilyPref');
          const result = this.impl.handleStoreFontFamilyPref(params.font_family);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(dom_distiller.mojom.DistillerJavaScriptService_HandleStoreFontScalingPref_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.handleStoreFontScalingPref');
          const result = this.impl.handleStoreFontScalingPref(params.font_scale);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

dom_distiller.mojom.DistillerJavaScriptServiceReceiver = dom_distiller.mojom.DistillerJavaScriptServiceReceiver;

dom_distiller.mojom.DistillerJavaScriptServicePtr = dom_distiller.mojom.DistillerJavaScriptServiceRemote;
dom_distiller.mojom.DistillerJavaScriptServiceRequest = dom_distiller.mojom.DistillerJavaScriptServicePendingReceiver;

