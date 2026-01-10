// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/video_conference.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

crosapi.mojom.VideoConferenceAppUpdateSpec = { $: mojo.internal.Enum() };
crosapi.mojom.VideoConferenceMediaDeviceSpec = { $: mojo.internal.Enum() };
crosapi.mojom.VideoConferenceAppTypeSpec = { $: mojo.internal.Enum() };
crosapi.mojom.TitleChangeInfoSpec = { $: {} };
crosapi.mojom.VideoConferenceClientUpdateSpec = { $: {} };
crosapi.mojom.VideoConferenceMediaUsageStatusSpec = { $: {} };
crosapi.mojom.VideoConferenceMediaAppInfoSpec = { $: {} };
crosapi.mojom.VideoConferenceManagerClient = {};
crosapi.mojom.VideoConferenceManagerClient.$interfaceName = 'crosapi.mojom.VideoConferenceManagerClient';
crosapi.mojom.VideoConferenceManagerClient_GetMediaApps_ParamsSpec = { $: {} };
crosapi.mojom.VideoConferenceManagerClient_GetMediaApps_ResponseParamsSpec = { $: {} };
crosapi.mojom.VideoConferenceManagerClient_ReturnToApp_ParamsSpec = { $: {} };
crosapi.mojom.VideoConferenceManagerClient_ReturnToApp_ResponseParamsSpec = { $: {} };
crosapi.mojom.VideoConferenceManagerClient_SetSystemMediaDeviceStatus_ParamsSpec = { $: {} };
crosapi.mojom.VideoConferenceManagerClient_SetSystemMediaDeviceStatus_ResponseParamsSpec = { $: {} };
crosapi.mojom.VideoConferenceManagerClient_StopAllScreenShare_ParamsSpec = { $: {} };

// Enum: VideoConferenceAppUpdate
crosapi.mojom.VideoConferenceAppUpdate = {
  kNone: 0,
  kAppAdded: 1,
  kAppRemoved: 2,
};

// Enum: VideoConferenceMediaDevice
crosapi.mojom.VideoConferenceMediaDevice = {
  kUnusedDefault: 0,
  kMicrophone: 1,
  kCamera: 2,
};

// Enum: VideoConferenceAppType
crosapi.mojom.VideoConferenceAppType = {
  kBrowserUnknown: 0,
  kChromeTab: 1,
  kChromeExtension: 2,
  kChromeApp: 3,
  kWebApp: 4,
  kArcApp: 5,
  kAppServiceUnknown: 6,
  MinVersion: 6,
  MinVersion: 6,
  MinVersion: 6,
  MinVersion: 6,
  MinVersion: 6,
};

// Struct: TitleChangeInfo
mojo.internal.Struct(
    crosapi.mojom.TitleChangeInfoSpec, 'crosapi.mojom.TitleChangeInfo', [
      mojo.internal.StructField('id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('new_title', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: VideoConferenceClientUpdate
mojo.internal.Struct(
    crosapi.mojom.VideoConferenceClientUpdateSpec, 'crosapi.mojom.VideoConferenceClientUpdate', [
      mojo.internal.StructField('added_or_removed_app', 0, 0, crosapi.mojom.VideoConferenceAppUpdateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('title_change_info', 8, 0, crosapi.mojom.TitleChangeInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: VideoConferenceMediaUsageStatus
mojo.internal.Struct(
    crosapi.mojom.VideoConferenceMediaUsageStatusSpec, 'crosapi.mojom.VideoConferenceMediaUsageStatus', [
      mojo.internal.StructField('client_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('has_media_app', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_camera_permission', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_microphone_permission', 8, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_capturing_camera', 8, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_capturing_microphone', 8, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_capturing_screen', 8, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: VideoConferenceMediaAppInfo
mojo.internal.Struct(
    crosapi.mojom.VideoConferenceMediaAppInfoSpec, 'crosapi.mojom.VideoConferenceMediaAppInfo', [
      mojo.internal.StructField('id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('last_activity_time', 8, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('title', 16, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('url', 24, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('is_capturing_camera', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_capturing_microphone', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_capturing_screen', 32, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('app_type', 40, 0, crosapi.mojom.VideoConferenceAppTypeSpec.$, null, false, 1, undefined),
    ],
    [[0, 48], [1, 56]]);

// Interface: VideoConferenceManagerClient
mojo.internal.Struct(
    crosapi.mojom.VideoConferenceManagerClient_GetMediaApps_ParamsSpec, 'crosapi.mojom.VideoConferenceManagerClient_GetMediaApps_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.VideoConferenceManagerClient_GetMediaApps_ResponseParamsSpec, 'crosapi.mojom.VideoConferenceManagerClient_GetMediaApps_ResponseParams', [
      mojo.internal.StructField('apps', 0, 0, mojo.internal.Array(crosapi.mojom.VideoConferenceMediaAppInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.VideoConferenceManagerClient_ReturnToApp_ParamsSpec, 'crosapi.mojom.VideoConferenceManagerClient_ReturnToApp_Params', [
      mojo.internal.StructField('id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.VideoConferenceManagerClient_ReturnToApp_ResponseParamsSpec, 'crosapi.mojom.VideoConferenceManagerClient_ReturnToApp_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.VideoConferenceManagerClient_SetSystemMediaDeviceStatus_ParamsSpec, 'crosapi.mojom.VideoConferenceManagerClient_SetSystemMediaDeviceStatus_Params', [
      mojo.internal.StructField('device', 0, 0, crosapi.mojom.VideoConferenceMediaDeviceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('enabled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.VideoConferenceManagerClient_SetSystemMediaDeviceStatus_ResponseParamsSpec, 'crosapi.mojom.VideoConferenceManagerClient_SetSystemMediaDeviceStatus_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.VideoConferenceManagerClient_StopAllScreenShare_ParamsSpec, 'crosapi.mojom.VideoConferenceManagerClient_StopAllScreenShare_Params', [
    ],
    [[0, 8]]);

crosapi.mojom.VideoConferenceManagerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.VideoConferenceManagerClientRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.VideoConferenceManagerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.VideoConferenceManagerClientPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.VideoConferenceManagerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.VideoConferenceManagerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getMediaApps() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.VideoConferenceManagerClient_GetMediaApps_ParamsSpec,
      crosapi.mojom.VideoConferenceManagerClient_GetMediaApps_ResponseParamsSpec,
      [],
      false);
  }

  returnToApp(id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      crosapi.mojom.VideoConferenceManagerClient_ReturnToApp_ParamsSpec,
      crosapi.mojom.VideoConferenceManagerClient_ReturnToApp_ResponseParamsSpec,
      [id],
      false);
  }

  setSystemMediaDeviceStatus(device, enabled) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      crosapi.mojom.VideoConferenceManagerClient_SetSystemMediaDeviceStatus_ParamsSpec,
      crosapi.mojom.VideoConferenceManagerClient_SetSystemMediaDeviceStatus_ResponseParamsSpec,
      [device, enabled],
      false);
  }

  stopAllScreenShare() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      crosapi.mojom.VideoConferenceManagerClient_StopAllScreenShare_ParamsSpec,
      null,
      [],
      false);
  }

};

crosapi.mojom.VideoConferenceManagerClient.getRemote = function() {
  let remote = new crosapi.mojom.VideoConferenceManagerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.VideoConferenceManagerClient',
    'context');
  return remote.$;
};

crosapi.mojom.VideoConferenceManagerClientReceiver = class {
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
        
        // Try Method 0: GetMediaApps
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(crosapi.mojom.VideoConferenceManagerClient_GetMediaApps_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetMediaApps (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ReturnToApp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(crosapi.mojom.VideoConferenceManagerClient_ReturnToApp_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReturnToApp (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetSystemMediaDeviceStatus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(crosapi.mojom.VideoConferenceManagerClient_SetSystemMediaDeviceStatus_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSystemMediaDeviceStatus (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: StopAllScreenShare
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(crosapi.mojom.VideoConferenceManagerClient_StopAllScreenShare_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopAllScreenShare (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
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
          const params = decoder.decodeStruct(crosapi.mojom.VideoConferenceManagerClient_GetMediaApps_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getMediaApps');
          const result = this.impl.getMediaApps();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.VideoConferenceManagerClient_GetMediaApps_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(crosapi.mojom.VideoConferenceManagerClient_ReturnToApp_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.returnToApp');
          const result = this.impl.returnToApp(params.id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.VideoConferenceManagerClient_ReturnToApp_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(crosapi.mojom.VideoConferenceManagerClient_SetSystemMediaDeviceStatus_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setSystemMediaDeviceStatus');
          const result = this.impl.setSystemMediaDeviceStatus(params.device, params.enabled);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.VideoConferenceManagerClient_SetSystemMediaDeviceStatus_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(crosapi.mojom.VideoConferenceManagerClient_StopAllScreenShare_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.stopAllScreenShare');
          const result = this.impl.stopAllScreenShare();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

crosapi.mojom.VideoConferenceManagerClientReceiver = crosapi.mojom.VideoConferenceManagerClientReceiver;

crosapi.mojom.VideoConferenceManagerClientPtr = crosapi.mojom.VideoConferenceManagerClientRemote;
crosapi.mojom.VideoConferenceManagerClientRequest = crosapi.mojom.VideoConferenceManagerClientPendingReceiver;

