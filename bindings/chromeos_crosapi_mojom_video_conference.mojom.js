// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/video_conference.mojom
// Module: crosapi.mojom

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
  getMediaApps() {
    return this.$.getMediaApps();
  }
  returnToApp(id) {
    return this.$.returnToApp(id);
  }
  setSystemMediaDeviceStatus(device, enabled) {
    return this.$.setSystemMediaDeviceStatus(device, enabled);
  }
  stopAllScreenShare() {
    return this.$.stopAllScreenShare();
  }
};

crosapi.mojom.VideoConferenceManagerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoConferenceManagerClient', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
  }

  getMediaApps() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      crosapi.mojom.VideoConferenceManagerClient_GetMediaApps_ParamsSpec,
      crosapi.mojom.VideoConferenceManagerClient_GetMediaApps_ResponseParamsSpec,
      [],
      false);
  }

  returnToApp(id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      crosapi.mojom.VideoConferenceManagerClient_ReturnToApp_ParamsSpec,
      crosapi.mojom.VideoConferenceManagerClient_ReturnToApp_ResponseParamsSpec,
      [id],
      false);
  }

  setSystemMediaDeviceStatus(device, enabled) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      crosapi.mojom.VideoConferenceManagerClient_SetSystemMediaDeviceStatus_ParamsSpec,
      crosapi.mojom.VideoConferenceManagerClient_SetSystemMediaDeviceStatus_ResponseParamsSpec,
      [device, enabled],
      false);
  }

  stopAllScreenShare() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('VideoConferenceManagerClient', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
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
             decoder.decodeStructInline(crosapi.mojom.VideoConferenceManagerClient_GetMediaApps_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.VideoConferenceManagerClient_ReturnToApp_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.VideoConferenceManagerClient_SetSystemMediaDeviceStatus_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.VideoConferenceManagerClient_StopAllScreenShare_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.VideoConferenceManagerClient_GetMediaApps_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(crosapi.mojom.VideoConferenceManagerClient_ReturnToApp_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(crosapi.mojom.VideoConferenceManagerClient_SetSystemMediaDeviceStatus_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(crosapi.mojom.VideoConferenceManagerClient_StopAllScreenShare_ParamsSpec.$.structSpec);
          const result = this.impl.stopAllScreenShare();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

crosapi.mojom.VideoConferenceManagerClientReceiver = crosapi.mojom.VideoConferenceManagerClientReceiver;

crosapi.mojom.VideoConferenceManagerClientPtr = crosapi.mojom.VideoConferenceManagerClientRemote;
crosapi.mojom.VideoConferenceManagerClientRequest = crosapi.mojom.VideoConferenceManagerClientPendingReceiver;

