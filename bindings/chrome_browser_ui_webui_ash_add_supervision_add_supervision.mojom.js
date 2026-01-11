// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/add_supervision/add_supervision.mojom
// Module: add_supervision.mojom

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
  requestClose() {
    return this.$.requestClose();
  }
  getInstalledArcApps() {
    return this.$.getInstalledArcApps();
  }
  getOAuthToken() {
    return this.$.getOAuthToken();
  }
  logOut() {
    return this.$.logOut();
  }
  notifySupervisionEnabled() {
    return this.$.notifySupervisionEnabled();
  }
  setCloseOnEscape(enabled) {
    return this.$.setCloseOnEscape(enabled);
  }
};

add_supervision.mojom.AddSupervisionHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AddSupervisionHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  requestClose() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      add_supervision.mojom.AddSupervisionHandler_RequestClose_ParamsSpec,
      add_supervision.mojom.AddSupervisionHandler_RequestClose_ResponseParamsSpec,
      [],
      false);
  }

  getInstalledArcApps() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      add_supervision.mojom.AddSupervisionHandler_GetInstalledArcApps_ParamsSpec,
      add_supervision.mojom.AddSupervisionHandler_GetInstalledArcApps_ResponseParamsSpec,
      [],
      false);
  }

  getOAuthToken() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      add_supervision.mojom.AddSupervisionHandler_GetOAuthToken_ParamsSpec,
      add_supervision.mojom.AddSupervisionHandler_GetOAuthToken_ResponseParamsSpec,
      [],
      false);
  }

  logOut() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      add_supervision.mojom.AddSupervisionHandler_LogOut_ParamsSpec,
      null,
      [],
      false);
  }

  notifySupervisionEnabled() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      add_supervision.mojom.AddSupervisionHandler_NotifySupervisionEnabled_ParamsSpec,
      null,
      [],
      false);
  }

  setCloseOnEscape(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AddSupervisionHandler', [
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(add_supervision.mojom.AddSupervisionHandler_RequestClose_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(add_supervision.mojom.AddSupervisionHandler_GetInstalledArcApps_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(add_supervision.mojom.AddSupervisionHandler_GetOAuthToken_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(add_supervision.mojom.AddSupervisionHandler_LogOut_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(add_supervision.mojom.AddSupervisionHandler_NotifySupervisionEnabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(add_supervision.mojom.AddSupervisionHandler_SetCloseOnEscape_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(add_supervision.mojom.AddSupervisionHandler_RequestClose_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(add_supervision.mojom.AddSupervisionHandler_GetInstalledArcApps_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(add_supervision.mojom.AddSupervisionHandler_GetOAuthToken_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(add_supervision.mojom.AddSupervisionHandler_LogOut_ParamsSpec.$.structSpec);
          const result = this.impl.logOut();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(add_supervision.mojom.AddSupervisionHandler_NotifySupervisionEnabled_ParamsSpec.$.structSpec);
          const result = this.impl.notifySupervisionEnabled();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(add_supervision.mojom.AddSupervisionHandler_SetCloseOnEscape_ParamsSpec.$.structSpec);
          const result = this.impl.setCloseOnEscape(params.enabled);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

add_supervision.mojom.AddSupervisionHandlerReceiver = add_supervision.mojom.AddSupervisionHandlerReceiver;

add_supervision.mojom.AddSupervisionHandlerPtr = add_supervision.mojom.AddSupervisionHandlerRemote;
add_supervision.mojom.AddSupervisionHandlerRequest = add_supervision.mojom.AddSupervisionHandlerPendingReceiver;

