// Auto-generated MojoJS binding
// Source: chromium_src/components/dom_distiller/content/common/mojom/distiller_javascript_service.mojom
// Module: dom_distiller.mojom

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
  handleDistillerOpenSettingsCall() {
    return this.$.handleDistillerOpenSettingsCall();
  }
  handleStoreThemePref(theme) {
    return this.$.handleStoreThemePref(theme);
  }
  handleStoreFontFamilyPref(font_family) {
    return this.$.handleStoreFontFamilyPref(font_family);
  }
  handleStoreFontScalingPref(font_scale) {
    return this.$.handleStoreFontScalingPref(font_scale);
  }
};

dom_distiller.mojom.DistillerJavaScriptServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DistillerJavaScriptService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  handleDistillerOpenSettingsCall() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      dom_distiller.mojom.DistillerJavaScriptService_HandleDistillerOpenSettingsCall_ParamsSpec,
      null,
      [],
      false);
  }

  handleStoreThemePref(theme) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      dom_distiller.mojom.DistillerJavaScriptService_HandleStoreThemePref_ParamsSpec,
      null,
      [theme],
      false);
  }

  handleStoreFontFamilyPref(font_family) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      dom_distiller.mojom.DistillerJavaScriptService_HandleStoreFontFamilyPref_ParamsSpec,
      null,
      [font_family],
      false);
  }

  handleStoreFontScalingPref(font_scale) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('DistillerJavaScriptService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(dom_distiller.mojom.DistillerJavaScriptService_HandleDistillerOpenSettingsCall_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(dom_distiller.mojom.DistillerJavaScriptService_HandleStoreThemePref_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(dom_distiller.mojom.DistillerJavaScriptService_HandleStoreFontFamilyPref_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(dom_distiller.mojom.DistillerJavaScriptService_HandleStoreFontScalingPref_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(dom_distiller.mojom.DistillerJavaScriptService_HandleDistillerOpenSettingsCall_ParamsSpec.$.structSpec);
          const result = this.impl.handleDistillerOpenSettingsCall();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(dom_distiller.mojom.DistillerJavaScriptService_HandleStoreThemePref_ParamsSpec.$.structSpec);
          const result = this.impl.handleStoreThemePref(params.theme);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(dom_distiller.mojom.DistillerJavaScriptService_HandleStoreFontFamilyPref_ParamsSpec.$.structSpec);
          const result = this.impl.handleStoreFontFamilyPref(params.font_family);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(dom_distiller.mojom.DistillerJavaScriptService_HandleStoreFontScalingPref_ParamsSpec.$.structSpec);
          const result = this.impl.handleStoreFontScalingPref(params.font_scale);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

dom_distiller.mojom.DistillerJavaScriptServiceReceiver = dom_distiller.mojom.DistillerJavaScriptServiceReceiver;

dom_distiller.mojom.DistillerJavaScriptServicePtr = dom_distiller.mojom.DistillerJavaScriptServiceRemote;
dom_distiller.mojom.DistillerJavaScriptServiceRequest = dom_distiller.mojom.DistillerJavaScriptServicePendingReceiver;

