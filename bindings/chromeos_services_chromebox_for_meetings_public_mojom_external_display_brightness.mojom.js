// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/chromebox_for_meetings/public/mojom/external_display_brightness.mojom
// Module: chromeos.cfm.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.cfm = chromeos.cfm || {};
chromeos.cfm.mojom = chromeos.cfm.mojom || {};

chromeos.cfm.mojom.ExternalDisplayBrightness = {};
chromeos.cfm.mojom.ExternalDisplayBrightness.$interfaceName = 'chromeos.cfm.mojom.ExternalDisplayBrightness';
chromeos.cfm.mojom.ExternalDisplayBrightness_SetExternalDisplayALSBrightness_ParamsSpec = { $: {} };
chromeos.cfm.mojom.ExternalDisplayBrightness_GetExternalDisplayALSBrightness_ParamsSpec = { $: {} };
chromeos.cfm.mojom.ExternalDisplayBrightness_GetExternalDisplayALSBrightness_ResponseParamsSpec = { $: {} };
chromeos.cfm.mojom.ExternalDisplayBrightness_SetExternalDisplayBrightnessPercent_ParamsSpec = { $: {} };
chromeos.cfm.mojom.ExternalDisplayBrightness_GetExternalDisplayBrightnessPercent_ParamsSpec = { $: {} };
chromeos.cfm.mojom.ExternalDisplayBrightness_GetExternalDisplayBrightnessPercent_ResponseParamsSpec = { $: {} };

// Interface: ExternalDisplayBrightness
mojo.internal.Struct(
    chromeos.cfm.mojom.ExternalDisplayBrightness_SetExternalDisplayALSBrightness_ParamsSpec, 'chromeos.cfm.mojom.ExternalDisplayBrightness_SetExternalDisplayALSBrightness_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cfm.mojom.ExternalDisplayBrightness_GetExternalDisplayALSBrightness_ParamsSpec, 'chromeos.cfm.mojom.ExternalDisplayBrightness_GetExternalDisplayALSBrightness_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.cfm.mojom.ExternalDisplayBrightness_GetExternalDisplayALSBrightness_ResponseParamsSpec, 'chromeos.cfm.mojom.ExternalDisplayBrightness_GetExternalDisplayALSBrightness_ResponseParams', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cfm.mojom.ExternalDisplayBrightness_SetExternalDisplayBrightnessPercent_ParamsSpec, 'chromeos.cfm.mojom.ExternalDisplayBrightness_SetExternalDisplayBrightnessPercent_Params', [
      mojo.internal.StructField('percent', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cfm.mojom.ExternalDisplayBrightness_GetExternalDisplayBrightnessPercent_ParamsSpec, 'chromeos.cfm.mojom.ExternalDisplayBrightness_GetExternalDisplayBrightnessPercent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.cfm.mojom.ExternalDisplayBrightness_GetExternalDisplayBrightnessPercent_ResponseParamsSpec, 'chromeos.cfm.mojom.ExternalDisplayBrightness_GetExternalDisplayBrightnessPercent_ResponseParams', [
      mojo.internal.StructField('percent', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

chromeos.cfm.mojom.ExternalDisplayBrightnessPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.cfm.mojom.ExternalDisplayBrightnessRemote = class {
  static get $interfaceName() {
    return 'chromeos.cfm.mojom.ExternalDisplayBrightness';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.cfm.mojom.ExternalDisplayBrightnessPendingReceiver,
      handle);
    this.$ = new chromeos.cfm.mojom.ExternalDisplayBrightnessRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.cfm.mojom.ExternalDisplayBrightnessRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setExternalDisplayALSBrightness(enabled) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.cfm.mojom.ExternalDisplayBrightness_SetExternalDisplayALSBrightness_ParamsSpec,
      null,
      [enabled],
      false);
  }

  getExternalDisplayALSBrightness() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.cfm.mojom.ExternalDisplayBrightness_GetExternalDisplayALSBrightness_ParamsSpec,
      chromeos.cfm.mojom.ExternalDisplayBrightness_GetExternalDisplayALSBrightness_ResponseParamsSpec,
      [],
      false);
  }

  setExternalDisplayBrightnessPercent(percent) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.cfm.mojom.ExternalDisplayBrightness_SetExternalDisplayBrightnessPercent_ParamsSpec,
      null,
      [percent],
      false);
  }

  getExternalDisplayBrightnessPercent() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.cfm.mojom.ExternalDisplayBrightness_GetExternalDisplayBrightnessPercent_ParamsSpec,
      chromeos.cfm.mojom.ExternalDisplayBrightness_GetExternalDisplayBrightnessPercent_ResponseParamsSpec,
      [],
      false);
  }

};

chromeos.cfm.mojom.ExternalDisplayBrightness.getRemote = function() {
  let remote = new chromeos.cfm.mojom.ExternalDisplayBrightnessRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cfm.mojom.ExternalDisplayBrightness',
    'context');
  return remote.$;
};

chromeos.cfm.mojom.ExternalDisplayBrightnessReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = chromeos.cfm.mojom.ExternalDisplayBrightness_SetExternalDisplayALSBrightness_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setExternalDisplayALSBrightness(params.enabled);
          break;
        }
        case 1: {
          const params = chromeos.cfm.mojom.ExternalDisplayBrightness_GetExternalDisplayALSBrightness_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getExternalDisplayALSBrightness();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cfm.mojom.ExternalDisplayBrightness_GetExternalDisplayALSBrightness_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = chromeos.cfm.mojom.ExternalDisplayBrightness_SetExternalDisplayBrightnessPercent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setExternalDisplayBrightnessPercent(params.percent);
          break;
        }
        case 3: {
          const params = chromeos.cfm.mojom.ExternalDisplayBrightness_GetExternalDisplayBrightnessPercent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getExternalDisplayBrightnessPercent();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cfm.mojom.ExternalDisplayBrightness_GetExternalDisplayBrightnessPercent_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

chromeos.cfm.mojom.ExternalDisplayBrightnessReceiver = chromeos.cfm.mojom.ExternalDisplayBrightnessReceiver;

chromeos.cfm.mojom.ExternalDisplayBrightnessPtr = chromeos.cfm.mojom.ExternalDisplayBrightnessRemote;
chromeos.cfm.mojom.ExternalDisplayBrightnessRequest = chromeos.cfm.mojom.ExternalDisplayBrightnessPendingReceiver;

