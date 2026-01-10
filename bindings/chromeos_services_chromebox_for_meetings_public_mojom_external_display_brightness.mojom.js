// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/chromebox_for_meetings/public/mojom/external_display_brightness.mojom
// Module: chromeos.cfm.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.cfm = chromeos.cfm || {};
chromeos.cfm.cfm.mojom = chromeos.cfm.cfm.mojom || {};


// Interface: ExternalDisplayBrightness
chromeos.cfm.cfm.mojom.mojom.ExternalDisplayBrightness = {};

chromeos.cfm.cfm.mojom.mojom.ExternalDisplayBrightnessPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.cfm.cfm.mojom.mojom.ExternalDisplayBrightnessRemote = class {
  static get $interfaceName() {
    return 'chromeos.cfm.mojom.ExternalDisplayBrightness';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.cfm.cfm.mojom.mojom.ExternalDisplayBrightnessPendingReceiver,
      handle);
    this.$ = new chromeos.cfm.cfm.mojom.mojom.ExternalDisplayBrightnessRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.cfm.cfm.mojom.mojom.ExternalDisplayBrightnessRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setExternalDisplayALSBrightness(enabled) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.cfm.cfm.mojom.mojom.ExternalDisplayBrightness_SetExternalDisplayALSBrightness_ParamsSpec,
      null,
      [enabled]);
  }

  getExternalDisplayALSBrightness() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.cfm.cfm.mojom.mojom.ExternalDisplayBrightness_GetExternalDisplayALSBrightness_ParamsSpec,
      chromeos.cfm.cfm.mojom.mojom.ExternalDisplayBrightness_GetExternalDisplayALSBrightness_ResponseParamsSpec,
      []);
  }

  setExternalDisplayBrightnessPercent(percent) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.cfm.cfm.mojom.mojom.ExternalDisplayBrightness_SetExternalDisplayBrightnessPercent_ParamsSpec,
      null,
      [percent]);
  }

  getExternalDisplayBrightnessPercent() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.cfm.cfm.mojom.mojom.ExternalDisplayBrightness_GetExternalDisplayBrightnessPercent_ParamsSpec,
      chromeos.cfm.cfm.mojom.mojom.ExternalDisplayBrightness_GetExternalDisplayBrightnessPercent_ResponseParamsSpec,
      []);
  }

};

chromeos.cfm.cfm.mojom.mojom.ExternalDisplayBrightness.getRemote = function() {
  let remote = new chromeos.cfm.cfm.mojom.mojom.ExternalDisplayBrightnessRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cfm.mojom.ExternalDisplayBrightness',
    'context');
  return remote.$;
};

// ParamsSpec for SetExternalDisplayALSBrightness
chromeos.cfm.cfm.mojom.mojom.ExternalDisplayBrightness_SetExternalDisplayALSBrightness_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.ExternalDisplayBrightness.SetExternalDisplayALSBrightness_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetExternalDisplayALSBrightness
chromeos.cfm.cfm.mojom.mojom.ExternalDisplayBrightness_GetExternalDisplayALSBrightness_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.ExternalDisplayBrightness.GetExternalDisplayALSBrightness_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chromeos.cfm.cfm.mojom.mojom.ExternalDisplayBrightness_GetExternalDisplayALSBrightness_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.ExternalDisplayBrightness.GetExternalDisplayALSBrightness_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetExternalDisplayBrightnessPercent
chromeos.cfm.cfm.mojom.mojom.ExternalDisplayBrightness_SetExternalDisplayBrightnessPercent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.ExternalDisplayBrightness.SetExternalDisplayBrightnessPercent_Params',
      packedSize: 16,
      fields: [
        { name: 'percent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetExternalDisplayBrightnessPercent
chromeos.cfm.cfm.mojom.mojom.ExternalDisplayBrightness_GetExternalDisplayBrightnessPercent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.ExternalDisplayBrightness.GetExternalDisplayBrightnessPercent_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chromeos.cfm.cfm.mojom.mojom.ExternalDisplayBrightness_GetExternalDisplayBrightnessPercent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.ExternalDisplayBrightness.GetExternalDisplayBrightnessPercent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'percent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromeos.cfm.cfm.mojom.mojom.ExternalDisplayBrightnessPtr = chromeos.cfm.cfm.mojom.mojom.ExternalDisplayBrightnessRemote;
chromeos.cfm.cfm.mojom.mojom.ExternalDisplayBrightnessRequest = chromeos.cfm.cfm.mojom.mojom.ExternalDisplayBrightnessPendingReceiver;

