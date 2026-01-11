// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/chromebox_for_meetings/public/mojom/external_display_brightness.mojom
// Module: chromeos.cfm.mojom

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
  setExternalDisplayALSBrightness(enabled) {
    return this.$.setExternalDisplayALSBrightness(enabled);
  }
  getExternalDisplayALSBrightness() {
    return this.$.getExternalDisplayALSBrightness();
  }
  setExternalDisplayBrightnessPercent(percent) {
    return this.$.setExternalDisplayBrightnessPercent(percent);
  }
  getExternalDisplayBrightnessPercent() {
    return this.$.getExternalDisplayBrightnessPercent();
  }
};

chromeos.cfm.mojom.ExternalDisplayBrightnessRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ExternalDisplayBrightness', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
  }

  setExternalDisplayALSBrightness(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromeos.cfm.mojom.ExternalDisplayBrightness_SetExternalDisplayALSBrightness_ParamsSpec,
      null,
      [enabled],
      false);
  }

  getExternalDisplayALSBrightness() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chromeos.cfm.mojom.ExternalDisplayBrightness_GetExternalDisplayALSBrightness_ParamsSpec,
      chromeos.cfm.mojom.ExternalDisplayBrightness_GetExternalDisplayALSBrightness_ResponseParamsSpec,
      [],
      false);
  }

  setExternalDisplayBrightnessPercent(percent) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      chromeos.cfm.mojom.ExternalDisplayBrightness_SetExternalDisplayBrightnessPercent_ParamsSpec,
      null,
      [percent],
      false);
  }

  getExternalDisplayBrightnessPercent() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ExternalDisplayBrightness', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(chromeos.cfm.mojom.ExternalDisplayBrightness_SetExternalDisplayALSBrightness_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.cfm.mojom.ExternalDisplayBrightness_GetExternalDisplayALSBrightness_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.cfm.mojom.ExternalDisplayBrightness_SetExternalDisplayBrightnessPercent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.cfm.mojom.ExternalDisplayBrightness_GetExternalDisplayBrightnessPercent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cfm.mojom.ExternalDisplayBrightness_SetExternalDisplayALSBrightness_ParamsSpec.$.structSpec);
          const result = this.impl.setExternalDisplayALSBrightness(params.enabled);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cfm.mojom.ExternalDisplayBrightness_GetExternalDisplayALSBrightness_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cfm.mojom.ExternalDisplayBrightness_SetExternalDisplayBrightnessPercent_ParamsSpec.$.structSpec);
          const result = this.impl.setExternalDisplayBrightnessPercent(params.percent);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cfm.mojom.ExternalDisplayBrightness_GetExternalDisplayBrightnessPercent_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

chromeos.cfm.mojom.ExternalDisplayBrightnessReceiver = chromeos.cfm.mojom.ExternalDisplayBrightnessReceiver;

chromeos.cfm.mojom.ExternalDisplayBrightnessPtr = chromeos.cfm.mojom.ExternalDisplayBrightnessRemote;
chromeos.cfm.mojom.ExternalDisplayBrightnessRequest = chromeos.cfm.mojom.ExternalDisplayBrightnessPendingReceiver;

