// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/graduation/mojom/graduation_ui.mojom
// Module: ash.graduation_ui.mojom

'use strict';

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
};

ash.graduation_ui.mojom.GraduationUiHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  authenticateWebview() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.graduation_ui.mojom.GraduationUiHandler_AuthenticateWebview_ParamsSpec,
      ash.graduation_ui.mojom.GraduationUiHandler_AuthenticateWebview_ResponseParamsSpec,
      [],
      false);
  }

  getProfileInfo() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.graduation_ui.mojom.GraduationUiHandler_GetProfileInfo_ParamsSpec,
      ash.graduation_ui.mojom.GraduationUiHandler_GetProfileInfo_ResponseParamsSpec,
      [],
      false);
  }

  onScreenSwitched(screen) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.graduation_ui.mojom.GraduationUiHandler_OnScreenSwitched_ParamsSpec,
      null,
      [screen],
      false);
  }

  onTransferComplete() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: AuthenticateWebview
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.graduation_ui.mojom.GraduationUiHandler_AuthenticateWebview_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AuthenticateWebview (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: GetProfileInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.graduation_ui.mojom.GraduationUiHandler_GetProfileInfo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetProfileInfo (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: OnScreenSwitched
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.graduation_ui.mojom.GraduationUiHandler_OnScreenSwitched_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnScreenSwitched (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: OnTransferComplete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.graduation_ui.mojom.GraduationUiHandler_OnTransferComplete_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTransferComplete (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.graduation_ui.mojom.GraduationUiHandler_AuthenticateWebview_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.authenticateWebview');
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
          const params = decoder.decodeStruct(ash.graduation_ui.mojom.GraduationUiHandler_GetProfileInfo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getProfileInfo');
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
          const params = decoder.decodeStruct(ash.graduation_ui.mojom.GraduationUiHandler_OnScreenSwitched_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onScreenSwitched');
          const result = this.impl.onScreenSwitched(params.screen);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.graduation_ui.mojom.GraduationUiHandler_OnTransferComplete_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onTransferComplete');
          const result = this.impl.onTransferComplete();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.graduation_ui.mojom.GraduationUiHandlerReceiver = ash.graduation_ui.mojom.GraduationUiHandlerReceiver;

ash.graduation_ui.mojom.GraduationUiHandlerPtr = ash.graduation_ui.mojom.GraduationUiHandlerRemote;
ash.graduation_ui.mojom.GraduationUiHandlerRequest = ash.graduation_ui.mojom.GraduationUiHandlerPendingReceiver;

