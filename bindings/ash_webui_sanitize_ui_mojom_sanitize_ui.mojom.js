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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.sanitize_ui.mojom.SettingsResetter_PerformSanitizeSettings_ParamsSpec.$.decode(message.payload);
          const result = this.impl.performSanitizeSettings();
          break;
        }
      }
    });
  }
};

ash.sanitize_ui.mojom.SettingsResetterReceiver = ash.sanitize_ui.mojom.SettingsResetterReceiver;

ash.sanitize_ui.mojom.SettingsResetterPtr = ash.sanitize_ui.mojom.SettingsResetterRemote;
ash.sanitize_ui.mojom.SettingsResetterRequest = ash.sanitize_ui.mojom.SettingsResetterPendingReceiver;

