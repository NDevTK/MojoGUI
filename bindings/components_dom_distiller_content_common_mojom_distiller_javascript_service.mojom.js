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
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
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
      switch (header.ordinal) {
        case 0: {
          const params = dom_distiller.mojom.DistillerJavaScriptService_HandleDistillerOpenSettingsCall_ParamsSpec.$.decode(message.payload);
          const result = this.impl.handleDistillerOpenSettingsCall();
          break;
        }
        case 1: {
          const params = dom_distiller.mojom.DistillerJavaScriptService_HandleStoreThemePref_ParamsSpec.$.decode(message.payload);
          const result = this.impl.handleStoreThemePref(params.theme);
          break;
        }
        case 2: {
          const params = dom_distiller.mojom.DistillerJavaScriptService_HandleStoreFontFamilyPref_ParamsSpec.$.decode(message.payload);
          const result = this.impl.handleStoreFontFamilyPref(params.font_family);
          break;
        }
        case 3: {
          const params = dom_distiller.mojom.DistillerJavaScriptService_HandleStoreFontScalingPref_ParamsSpec.$.decode(message.payload);
          const result = this.impl.handleStoreFontScalingPref(params.font_scale);
          break;
        }
      }
    }});
  }
};

dom_distiller.mojom.DistillerJavaScriptServiceReceiver = dom_distiller.mojom.DistillerJavaScriptServiceReceiver;

dom_distiller.mojom.DistillerJavaScriptServicePtr = dom_distiller.mojom.DistillerJavaScriptServiceRemote;
dom_distiller.mojom.DistillerJavaScriptServiceRequest = dom_distiller.mojom.DistillerJavaScriptServicePendingReceiver;

