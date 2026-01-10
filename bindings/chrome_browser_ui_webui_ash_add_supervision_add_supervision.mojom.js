// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/add_supervision/add_supervision.mojom
// Module: add_supervision.mojom

'use strict';

// Module namespace
var add_supervision = add_supervision || {};
add_supervision.mojom = add_supervision.mojom || {};


// Enum: OAuthTokenFetchStatus
add_supervision.mojom.mojom.OAuthTokenFetchStatus = {
  OK: 0,
  ERROR: 1,
};
add_supervision.mojom.mojom.OAuthTokenFetchStatusSpec = { $: mojo.internal.Enum() };

// Interface: AddSupervisionHandler
add_supervision.mojom.mojom.AddSupervisionHandler = {};

add_supervision.mojom.mojom.AddSupervisionHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

add_supervision.mojom.mojom.AddSupervisionHandlerRemote = class {
  static get $interfaceName() {
    return 'add_supervision.mojom.AddSupervisionHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      add_supervision.mojom.mojom.AddSupervisionHandlerPendingReceiver,
      handle);
    this.$ = new add_supervision.mojom.mojom.AddSupervisionHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

add_supervision.mojom.mojom.AddSupervisionHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestClose() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      add_supervision.mojom.mojom.AddSupervisionHandler_RequestClose_ParamsSpec,
      add_supervision.mojom.mojom.AddSupervisionHandler_RequestClose_ResponseParamsSpec,
      []);
  }

  getInstalledArcApps() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      add_supervision.mojom.mojom.AddSupervisionHandler_GetInstalledArcApps_ParamsSpec,
      add_supervision.mojom.mojom.AddSupervisionHandler_GetInstalledArcApps_ResponseParamsSpec,
      []);
  }

  getOAuthToken() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      add_supervision.mojom.mojom.AddSupervisionHandler_GetOAuthToken_ParamsSpec,
      add_supervision.mojom.mojom.AddSupervisionHandler_GetOAuthToken_ResponseParamsSpec,
      []);
  }

  logOut() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      add_supervision.mojom.mojom.AddSupervisionHandler_LogOut_ParamsSpec,
      null,
      []);
  }

  notifySupervisionEnabled() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      add_supervision.mojom.mojom.AddSupervisionHandler_NotifySupervisionEnabled_ParamsSpec,
      null,
      []);
  }

  setCloseOnEscape(enabled) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      add_supervision.mojom.mojom.AddSupervisionHandler_SetCloseOnEscape_ParamsSpec,
      null,
      [enabled]);
  }

};

add_supervision.mojom.mojom.AddSupervisionHandler.getRemote = function() {
  let remote = new add_supervision.mojom.mojom.AddSupervisionHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'add_supervision.mojom.AddSupervisionHandler',
    'context');
  return remote.$;
};

// ParamsSpec for RequestClose
add_supervision.mojom.mojom.AddSupervisionHandler_RequestClose_ParamsSpec = {
  $: {
    structSpec: {
      name: 'add_supervision.mojom.AddSupervisionHandler.RequestClose_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

add_supervision.mojom.mojom.AddSupervisionHandler_RequestClose_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'add_supervision.mojom.AddSupervisionHandler.RequestClose_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'closed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetInstalledArcApps
add_supervision.mojom.mojom.AddSupervisionHandler_GetInstalledArcApps_ParamsSpec = {
  $: {
    structSpec: {
      name: 'add_supervision.mojom.AddSupervisionHandler.GetInstalledArcApps_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

add_supervision.mojom.mojom.AddSupervisionHandler_GetInstalledArcApps_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'add_supervision.mojom.AddSupervisionHandler.GetInstalledArcApps_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'package_names', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetOAuthToken
add_supervision.mojom.mojom.AddSupervisionHandler_GetOAuthToken_ParamsSpec = {
  $: {
    structSpec: {
      name: 'add_supervision.mojom.AddSupervisionHandler.GetOAuthToken_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

add_supervision.mojom.mojom.AddSupervisionHandler_GetOAuthToken_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'add_supervision.mojom.AddSupervisionHandler.GetOAuthToken_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: add_supervision.mojom.OAuthTokenFetchStatusSpec, nullable: false, minVersion: 0 },
        { name: 'oauth_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for LogOut
add_supervision.mojom.mojom.AddSupervisionHandler_LogOut_ParamsSpec = {
  $: {
    structSpec: {
      name: 'add_supervision.mojom.AddSupervisionHandler.LogOut_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for NotifySupervisionEnabled
add_supervision.mojom.mojom.AddSupervisionHandler_NotifySupervisionEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'add_supervision.mojom.AddSupervisionHandler.NotifySupervisionEnabled_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetCloseOnEscape
add_supervision.mojom.mojom.AddSupervisionHandler_SetCloseOnEscape_ParamsSpec = {
  $: {
    structSpec: {
      name: 'add_supervision.mojom.AddSupervisionHandler.SetCloseOnEscape_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
add_supervision.mojom.mojom.AddSupervisionHandlerPtr = add_supervision.mojom.mojom.AddSupervisionHandlerRemote;
add_supervision.mojom.mojom.AddSupervisionHandlerRequest = add_supervision.mojom.mojom.AddSupervisionHandlerPendingReceiver;

