// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/graduation/mojom/graduation_ui.mojom
// Module: ash.graduation_ui.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var ash = ash || {};
ash.graduation_ui = ash.graduation_ui || {};
ash.graduation_ui.mojom = ash.graduation_ui.mojom || {};

ash.graduation_ui.mojom.GraduationScreenSpec = { $: mojo.internal.Enum() };
ash.graduation_ui.mojom.AuthResultSpec = { $: mojo.internal.Enum() };
ash.graduation_ui.mojom.ProfileInfoSpec = { $: {} };
ash.graduation_ui.mojom.GraduationUiHandler = {};
ash.graduation_ui.mojom.GraduationUiHandler.$interfaceName = 'ash.graduation_ui.mojom.GraduationUiHandler';
ash.graduation_ui.mojom.GraduationUiHandler_AuthenticateWebview_ParamsSpec = { $: {} };
ash.graduation_ui.mojom.GraduationUiHandler_AuthenticateWebview_ResponseParamsSpec = { $: {} };
ash.graduation_ui.mojom.GraduationUiHandler_GetProfileInfo_ParamsSpec = { $: {} };
ash.graduation_ui.mojom.GraduationUiHandler_GetProfileInfo_ResponseParamsSpec = { $: {} };
ash.graduation_ui.mojom.GraduationUiHandler_OnScreenSwitched_ParamsSpec = { $: {} };
ash.graduation_ui.mojom.GraduationUiHandler_OnTransferComplete_ParamsSpec = { $: {} };

// Enum: GraduationScreen
ash.graduation_ui.mojom.GraduationScreen = {
  kWelcome: 0,
  kTakeoutUi: 1,
  kError: 2,
};

// Enum: AuthResult
ash.graduation_ui.mojom.AuthResult = {
  kSuccess: 0,
  kError: 1,
};

// Struct: ProfileInfo
mojo.internal.Struct(
    ash.graduation_ui.mojom.ProfileInfoSpec, 'ash.graduation_ui.mojom.ProfileInfo', [
      mojo.internal.StructField('email', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('photo_url', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: GraduationUiHandler
mojo.internal.Struct(
    ash.graduation_ui.mojom.GraduationUiHandler_AuthenticateWebview_ParamsSpec, 'ash.graduation_ui.mojom.GraduationUiHandler_AuthenticateWebview_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.graduation_ui.mojom.GraduationUiHandler_AuthenticateWebview_ResponseParamsSpec, 'ash.graduation_ui.mojom.GraduationUiHandler_AuthenticateWebview_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.graduation_ui.mojom.AuthResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.graduation_ui.mojom.GraduationUiHandler_GetProfileInfo_ParamsSpec, 'ash.graduation_ui.mojom.GraduationUiHandler_GetProfileInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.graduation_ui.mojom.GraduationUiHandler_GetProfileInfo_ResponseParamsSpec, 'ash.graduation_ui.mojom.GraduationUiHandler_GetProfileInfo_ResponseParams', [
      mojo.internal.StructField('profile_info', 0, 0, ash.graduation_ui.mojom.ProfileInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.graduation_ui.mojom.GraduationUiHandler_OnScreenSwitched_ParamsSpec, 'ash.graduation_ui.mojom.GraduationUiHandler_OnScreenSwitched_Params', [
      mojo.internal.StructField('screen', 0, 0, ash.graduation_ui.mojom.GraduationScreenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.graduation_ui.mojom.GraduationUiHandler_OnTransferComplete_ParamsSpec, 'ash.graduation_ui.mojom.GraduationUiHandler_OnTransferComplete_Params', [
    ],
    [[0, 8]]);

ash.graduation_ui.mojom.GraduationUiHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.graduation_ui.mojom.GraduationUiHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.graduation_ui.mojom.GraduationUiHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.graduation_ui.mojom.GraduationUiHandlerPendingReceiver,
      handle);
    this.$ = new ash.graduation_ui.mojom.GraduationUiHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  authenticateWebview() {
    return this.$.authenticateWebview();
  }
  getProfileInfo() {
    return this.$.getProfileInfo();
  }
  onScreenSwitched(screen) {
    return this.$.onScreenSwitched(screen);
  }
  onTransferComplete() {
    return this.$.onTransferComplete();
  }
};

ash.graduation_ui.mojom.GraduationUiHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GraduationUiHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  authenticateWebview() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.graduation_ui.mojom.GraduationUiHandler_AuthenticateWebview_ParamsSpec,
      ash.graduation_ui.mojom.GraduationUiHandler_AuthenticateWebview_ResponseParamsSpec,
      [],
      false);
  }

  getProfileInfo() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.graduation_ui.mojom.GraduationUiHandler_GetProfileInfo_ParamsSpec,
      ash.graduation_ui.mojom.GraduationUiHandler_GetProfileInfo_ResponseParamsSpec,
      [],
      false);
  }

  onScreenSwitched(screen) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.graduation_ui.mojom.GraduationUiHandler_OnScreenSwitched_ParamsSpec,
      null,
      [screen],
      false);
  }

  onTransferComplete() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.graduation_ui.mojom.GraduationUiHandler_OnTransferComplete_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.graduation_ui.mojom.GraduationUiHandler.getRemote = function() {
  let remote = new ash.graduation_ui.mojom.GraduationUiHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.graduation_ui.mojom.GraduationUiHandler',
    'context');
  return remote.$;
};

ash.graduation_ui.mojom.GraduationUiHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GraduationUiHandler', [
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
             decoder.decodeStructInline(ash.graduation_ui.mojom.GraduationUiHandler_AuthenticateWebview_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.graduation_ui.mojom.GraduationUiHandler_GetProfileInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.graduation_ui.mojom.GraduationUiHandler_OnScreenSwitched_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.graduation_ui.mojom.GraduationUiHandler_OnTransferComplete_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.graduation_ui.mojom.GraduationUiHandler_AuthenticateWebview_ParamsSpec.$.structSpec);
          const result = this.impl.authenticateWebview();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.graduation_ui.mojom.GraduationUiHandler_AuthenticateWebview_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.graduation_ui.mojom.GraduationUiHandler_GetProfileInfo_ParamsSpec.$.structSpec);
          const result = this.impl.getProfileInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.graduation_ui.mojom.GraduationUiHandler_GetProfileInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.graduation_ui.mojom.GraduationUiHandler_OnScreenSwitched_ParamsSpec.$.structSpec);
          const result = this.impl.onScreenSwitched(params.screen);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.graduation_ui.mojom.GraduationUiHandler_OnTransferComplete_ParamsSpec.$.structSpec);
          const result = this.impl.onTransferComplete();
          break;
        }
      }
      } catch (err) {}
    });
  }
};

ash.graduation_ui.mojom.GraduationUiHandlerReceiver = ash.graduation_ui.mojom.GraduationUiHandlerReceiver;

ash.graduation_ui.mojom.GraduationUiHandlerPtr = ash.graduation_ui.mojom.GraduationUiHandlerRemote;
ash.graduation_ui.mojom.GraduationUiHandlerRequest = ash.graduation_ui.mojom.GraduationUiHandlerPendingReceiver;

