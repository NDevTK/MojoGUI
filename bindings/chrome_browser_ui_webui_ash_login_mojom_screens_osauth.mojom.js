// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/login/mojom/screens_osauth.mojom
// Module: ash.screens_osauth.mojom

// Module namespace
var ash = ash || {};
ash.screens_osauth = ash.screens_osauth || {};
ash.screens_osauth.mojom = ash.screens_osauth.mojom || {};

ash.screens_osauth.mojom.LocalDataLossWarningPageHandler = {};
ash.screens_osauth.mojom.LocalDataLossWarningPageHandler.$interfaceName = 'ash.screens_osauth.mojom.LocalDataLossWarningPageHandler';
ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnPowerwash_ParamsSpec = { $: {} };
ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnRecreateUser_ParamsSpec = { $: {} };
ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnCancel_ParamsSpec = { $: {} };
ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnBack_ParamsSpec = { $: {} };

// Interface: LocalDataLossWarningPageHandler
mojo.internal.Struct(
    ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnPowerwash_ParamsSpec, 'ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnPowerwash_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnRecreateUser_ParamsSpec, 'ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnRecreateUser_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnCancel_ParamsSpec, 'ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnCancel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnBack_ParamsSpec, 'ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnBack_Params', [
    ],
    [[0, 8]]);

ash.screens_osauth.mojom.LocalDataLossWarningPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.screens_osauth.mojom.LocalDataLossWarningPageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.screens_osauth.mojom.LocalDataLossWarningPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.screens_osauth.mojom.LocalDataLossWarningPageHandlerPendingReceiver,
      handle);
    this.$ = new ash.screens_osauth.mojom.LocalDataLossWarningPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onPowerwash() {
    return this.$.onPowerwash();
  }
  onRecreateUser() {
    return this.$.onRecreateUser();
  }
  onCancel() {
    return this.$.onCancel();
  }
  onBack() {
    return this.$.onBack();
  }
};

ash.screens_osauth.mojom.LocalDataLossWarningPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('LocalDataLossWarningPageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onPowerwash() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnPowerwash_ParamsSpec,
      null,
      [],
      false);
  }

  onRecreateUser() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnRecreateUser_ParamsSpec,
      null,
      [],
      false);
  }

  onCancel() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnCancel_ParamsSpec,
      null,
      [],
      false);
  }

  onBack() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnBack_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.screens_osauth.mojom.LocalDataLossWarningPageHandler.getRemote = function() {
  let remote = new ash.screens_osauth.mojom.LocalDataLossWarningPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_osauth.mojom.LocalDataLossWarningPageHandler',
    'context');
  return remote.$;
};

ash.screens_osauth.mojom.LocalDataLossWarningPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('LocalDataLossWarningPageHandler', [
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
             decoder.decodeStructInline(ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnPowerwash_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnRecreateUser_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnCancel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnBack_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnPowerwash_ParamsSpec.$.structSpec);
          const result = this.impl.onPowerwash();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnRecreateUser_ParamsSpec.$.structSpec);
          const result = this.impl.onRecreateUser();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnCancel_ParamsSpec.$.structSpec);
          const result = this.impl.onCancel();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnBack_ParamsSpec.$.structSpec);
          const result = this.impl.onBack();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.screens_osauth.mojom.LocalDataLossWarningPageHandlerReceiver = ash.screens_osauth.mojom.LocalDataLossWarningPageHandlerReceiver;

ash.screens_osauth.mojom.LocalDataLossWarningPageHandlerPtr = ash.screens_osauth.mojom.LocalDataLossWarningPageHandlerRemote;
ash.screens_osauth.mojom.LocalDataLossWarningPageHandlerRequest = ash.screens_osauth.mojom.LocalDataLossWarningPageHandlerPendingReceiver;

