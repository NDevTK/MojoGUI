// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/login/mojom/screens_osauth.mojom
// Module: ash.screens_osauth.mojom

'use strict';

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
};

ash.screens_osauth.mojom.LocalDataLossWarningPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPowerwash() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnPowerwash_ParamsSpec,
      null,
      [],
      false);
  }

  onRecreateUser() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnRecreateUser_ParamsSpec,
      null,
      [],
      false);
  }

  onCancel() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnCancel_ParamsSpec,
      null,
      [],
      false);
  }

  onBack() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnPowerwash_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onPowerwash();
          break;
        }
        case 1: {
          const params = ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnRecreateUser_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onRecreateUser();
          break;
        }
        case 2: {
          const params = ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnCancel_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onCancel();
          break;
        }
        case 3: {
          const params = ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnBack_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onBack();
          break;
        }
      }
    });
  }
};

ash.screens_osauth.mojom.LocalDataLossWarningPageHandlerReceiver = ash.screens_osauth.mojom.LocalDataLossWarningPageHandlerReceiver;

ash.screens_osauth.mojom.LocalDataLossWarningPageHandlerPtr = ash.screens_osauth.mojom.LocalDataLossWarningPageHandlerRemote;
ash.screens_osauth.mojom.LocalDataLossWarningPageHandlerRequest = ash.screens_osauth.mojom.LocalDataLossWarningPageHandlerPendingReceiver;

