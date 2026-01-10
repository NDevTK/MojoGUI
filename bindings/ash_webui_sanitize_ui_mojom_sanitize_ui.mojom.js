// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/sanitize_ui/mojom/sanitize_ui.mojom
// Module: ash.sanitize_ui.mojom

'use strict';

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
};

ash.sanitize_ui.mojom.SettingsResetterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  performSanitizeSettings() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = ash.sanitize_ui.mojom.SettingsResetter_PerformSanitizeSettings_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.performSanitizeSettings');
          const result = this.impl.performSanitizeSettings();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.sanitize_ui.mojom.SettingsResetterReceiver = ash.sanitize_ui.mojom.SettingsResetterReceiver;

ash.sanitize_ui.mojom.SettingsResetterPtr = ash.sanitize_ui.mojom.SettingsResetterRemote;
ash.sanitize_ui.mojom.SettingsResetterRequest = ash.sanitize_ui.mojom.SettingsResetterPendingReceiver;

