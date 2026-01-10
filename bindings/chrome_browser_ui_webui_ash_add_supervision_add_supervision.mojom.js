// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/add_supervision/add_supervision.mojom
// Module: add_supervision.mojom

'use strict';

// Module namespace
var add_supervision = add_supervision || {};
add_supervision.mojom = add_supervision.mojom || {};

add_supervision.mojom.OAuthTokenFetchStatusSpec = { $: mojo.internal.Enum() };
add_supervision.mojom.AddSupervisionHandler = {};
add_supervision.mojom.AddSupervisionHandler.$interfaceName = 'add_supervision.mojom.AddSupervisionHandler';
add_supervision.mojom.AddSupervisionHandler_RequestClose_ParamsSpec = { $: {} };
add_supervision.mojom.AddSupervisionHandler_RequestClose_ResponseParamsSpec = { $: {} };
add_supervision.mojom.AddSupervisionHandler_GetInstalledArcApps_ParamsSpec = { $: {} };
add_supervision.mojom.AddSupervisionHandler_GetInstalledArcApps_ResponseParamsSpec = { $: {} };
add_supervision.mojom.AddSupervisionHandler_GetOAuthToken_ParamsSpec = { $: {} };
add_supervision.mojom.AddSupervisionHandler_GetOAuthToken_ResponseParamsSpec = { $: {} };
add_supervision.mojom.AddSupervisionHandler_LogOut_ParamsSpec = { $: {} };
add_supervision.mojom.AddSupervisionHandler_NotifySupervisionEnabled_ParamsSpec = { $: {} };
add_supervision.mojom.AddSupervisionHandler_SetCloseOnEscape_ParamsSpec = { $: {} };

// Enum: OAuthTokenFetchStatus
add_supervision.mojom.OAuthTokenFetchStatus = {
  OK: 0,
  ERROR: 1,
};

// Interface: AddSupervisionHandler
mojo.internal.Struct(
    add_supervision.mojom.AddSupervisionHandler_RequestClose_ParamsSpec, 'add_supervision.mojom.AddSupervisionHandler_RequestClose_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    add_supervision.mojom.AddSupervisionHandler_RequestClose_ResponseParamsSpec, 'add_supervision.mojom.AddSupervisionHandler_RequestClose_ResponseParams', [
      mojo.internal.StructField('closed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    add_supervision.mojom.AddSupervisionHandler_GetInstalledArcApps_ParamsSpec, 'add_supervision.mojom.AddSupervisionHandler_GetInstalledArcApps_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    add_supervision.mojom.AddSupervisionHandler_GetInstalledArcApps_ResponseParamsSpec, 'add_supervision.mojom.AddSupervisionHandler_GetInstalledArcApps_ResponseParams', [
      mojo.internal.StructField('package_names', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    add_supervision.mojom.AddSupervisionHandler_GetOAuthToken_ParamsSpec, 'add_supervision.mojom.AddSupervisionHandler_GetOAuthToken_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    add_supervision.mojom.AddSupervisionHandler_GetOAuthToken_ResponseParamsSpec, 'add_supervision.mojom.AddSupervisionHandler_GetOAuthToken_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, add_supervision.mojom.OAuthTokenFetchStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('oauth_token', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    add_supervision.mojom.AddSupervisionHandler_LogOut_ParamsSpec, 'add_supervision.mojom.AddSupervisionHandler_LogOut_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    add_supervision.mojom.AddSupervisionHandler_NotifySupervisionEnabled_ParamsSpec, 'add_supervision.mojom.AddSupervisionHandler_NotifySupervisionEnabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    add_supervision.mojom.AddSupervisionHandler_SetCloseOnEscape_ParamsSpec, 'add_supervision.mojom.AddSupervisionHandler_SetCloseOnEscape_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

add_supervision.mojom.AddSupervisionHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

add_supervision.mojom.AddSupervisionHandlerRemote = class {
  static get $interfaceName() {
    return 'add_supervision.mojom.AddSupervisionHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      add_supervision.mojom.AddSupervisionHandlerPendingReceiver,
      handle);
    this.$ = new add_supervision.mojom.AddSupervisionHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

add_supervision.mojom.AddSupervisionHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestClose() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      add_supervision.mojom.AddSupervisionHandler_RequestClose_ParamsSpec,
      add_supervision.mojom.AddSupervisionHandler_RequestClose_ResponseParamsSpec,
      [],
      false);
  }

  getInstalledArcApps() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      add_supervision.mojom.AddSupervisionHandler_GetInstalledArcApps_ParamsSpec,
      add_supervision.mojom.AddSupervisionHandler_GetInstalledArcApps_ResponseParamsSpec,
      [],
      false);
  }

  getOAuthToken() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      add_supervision.mojom.AddSupervisionHandler_GetOAuthToken_ParamsSpec,
      add_supervision.mojom.AddSupervisionHandler_GetOAuthToken_ResponseParamsSpec,
      [],
      false);
  }

  logOut() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      add_supervision.mojom.AddSupervisionHandler_LogOut_ParamsSpec,
      null,
      [],
      false);
  }

  notifySupervisionEnabled() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      add_supervision.mojom.AddSupervisionHandler_NotifySupervisionEnabled_ParamsSpec,
      null,
      [],
      false);
  }

  setCloseOnEscape(enabled) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      add_supervision.mojom.AddSupervisionHandler_SetCloseOnEscape_ParamsSpec,
      null,
      [enabled],
      false);
  }

};

add_supervision.mojom.AddSupervisionHandler.getRemote = function() {
  let remote = new add_supervision.mojom.AddSupervisionHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'add_supervision.mojom.AddSupervisionHandler',
    'context');
  return remote.$;
};

add_supervision.mojom.AddSupervisionHandlerReceiver = class {
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
          const params = add_supervision.mojom.AddSupervisionHandler_RequestClose_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestClose();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, add_supervision.mojom.AddSupervisionHandler_RequestClose_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = add_supervision.mojom.AddSupervisionHandler_GetInstalledArcApps_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getInstalledArcApps();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, add_supervision.mojom.AddSupervisionHandler_GetInstalledArcApps_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = add_supervision.mojom.AddSupervisionHandler_GetOAuthToken_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getOAuthToken();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, add_supervision.mojom.AddSupervisionHandler_GetOAuthToken_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = add_supervision.mojom.AddSupervisionHandler_LogOut_ParamsSpec.$.decode(message.payload);
          const result = this.impl.logOut();
          break;
        }
        case 4: {
          const params = add_supervision.mojom.AddSupervisionHandler_NotifySupervisionEnabled_ParamsSpec.$.decode(message.payload);
          const result = this.impl.notifySupervisionEnabled();
          break;
        }
        case 5: {
          const params = add_supervision.mojom.AddSupervisionHandler_SetCloseOnEscape_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setCloseOnEscape(params.enabled);
          break;
        }
      }
    });
  }
};

add_supervision.mojom.AddSupervisionHandlerReceiver = add_supervision.mojom.AddSupervisionHandlerReceiver;

add_supervision.mojom.AddSupervisionHandlerPtr = add_supervision.mojom.AddSupervisionHandlerRemote;
add_supervision.mojom.AddSupervisionHandlerRequest = add_supervision.mojom.AddSupervisionHandlerPendingReceiver;

