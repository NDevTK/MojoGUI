// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/login/mojom/screens_osauth.mojom
// Module: ash.screens_osauth.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.screens_osauth = ash.screens_osauth || {};
ash.screens_osauth.mojom = ash.screens_osauth.mojom || {};


// Interface: LocalDataLossWarningPageHandler
ash.screens_osauth.mojom.LocalDataLossWarningPageHandler = {};

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
      null,
      [],
      undefined,
      undefined
    );
  }

  onRecreateUser() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnRecreateUser_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  onCancel() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnCancel_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  onBack() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnBack_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
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

// ParamsSpec for OnPowerwash
ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnPowerwash_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_osauth.mojom.LocalDataLossWarningPageHandler.OnPowerwash_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnRecreateUser
ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnRecreateUser_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_osauth.mojom.LocalDataLossWarningPageHandler.OnRecreateUser_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnCancel
ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnCancel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_osauth.mojom.LocalDataLossWarningPageHandler.OnCancel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnBack
ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnBack_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_osauth.mojom.LocalDataLossWarningPageHandler.OnBack_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
ash.screens_osauth.mojom.LocalDataLossWarningPageHandlerPtr = ash.screens_osauth.mojom.LocalDataLossWarningPageHandlerRemote;
ash.screens_osauth.mojom.LocalDataLossWarningPageHandlerRequest = ash.screens_osauth.mojom.LocalDataLossWarningPageHandlerPendingReceiver;

