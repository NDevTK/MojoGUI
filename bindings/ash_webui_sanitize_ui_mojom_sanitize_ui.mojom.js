// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/sanitize_ui/mojom/sanitize_ui.mojom
// Module: ash.sanitize_ui.mojom

// Module namespace
var ash = ash || {};
ash.sanitize_ui = ash.sanitize_ui || {};
ash.sanitize_ui.mojom = ash.sanitize_ui.mojom || {};
var url = url || {};

ash.sanitize_ui.mojom.SettingsResetter = {};
ash.sanitize_ui.mojom.SettingsResetter.$interfaceName = 'ash.sanitize_ui.mojom.SettingsResetter';
ash.sanitize_ui.mojom.SettingsResetter_PerformSanitizeSettings_ParamsSpec = { $: {} };

// Interface: SettingsResetter
mojo.internal.Struct(
    ash.sanitize_ui.mojom.SettingsResetter_PerformSanitizeSettings_ParamsSpec, 'ash.sanitize_ui.mojom.SettingsResetter_PerformSanitizeSettings_Params', [
    ],
    [[0, 8]]);

ash.sanitize_ui.mojom.SettingsResetterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.sanitize_ui.mojom.SettingsResetterRemote = class {
  static get $interfaceName() {
    return 'ash.sanitize_ui.mojom.SettingsResetter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.sanitize_ui.mojom.SettingsResetterPendingReceiver,
      handle);
    this.$ = new ash.sanitize_ui.mojom.SettingsResetterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  performSanitizeSettings() {
    return this.$.performSanitizeSettings();
  }
};

ash.sanitize_ui.mojom.SettingsResetterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SettingsResetter', [
      { explicit: null },
    ]);
  }

  performSanitizeSettings() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.sanitize_ui.mojom.SettingsResetter_PerformSanitizeSettings_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.sanitize_ui.mojom.SettingsResetter.getRemote = function() {
  let remote = new ash.sanitize_ui.mojom.SettingsResetterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.sanitize_ui.mojom.SettingsResetter',
    'context');
  return remote.$;
};

ash.sanitize_ui.mojom.SettingsResetterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SettingsResetter', [
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
             decoder.decodeStructInline(ash.sanitize_ui.mojom.SettingsResetter_PerformSanitizeSettings_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.sanitize_ui.mojom.SettingsResetter_PerformSanitizeSettings_ParamsSpec.$.structSpec);
          const result = this.impl.performSanitizeSettings();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.sanitize_ui.mojom.SettingsResetterReceiver = ash.sanitize_ui.mojom.SettingsResetterReceiver;

ash.sanitize_ui.mojom.SettingsResetterPtr = ash.sanitize_ui.mojom.SettingsResetterRemote;
ash.sanitize_ui.mojom.SettingsResetterRequest = ash.sanitize_ui.mojom.SettingsResetterPendingReceiver;

