// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/video_conference.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};
var url = url || {};


// Enum: VideoConferenceAppUpdate
crosapi.mojom.mojom.VideoConferenceAppUpdate = {
  kAppAdded: 0,
  kAppRemoved: 1,
};
crosapi.mojom.mojom.VideoConferenceAppUpdateSpec = { $: mojo.internal.Enum() };

// Enum: VideoConferenceMediaDevice
crosapi.mojom.mojom.VideoConferenceMediaDevice = {
  kMicrophone: 0,
  kCamera: 1,
};
crosapi.mojom.mojom.VideoConferenceMediaDeviceSpec = { $: mojo.internal.Enum() };

// Enum: VideoConferenceAppType
crosapi.mojom.mojom.VideoConferenceAppType = {
  kChromeTab: 0,
  kChromeExtension: 1,
  kChromeApp: 2,
  kWebApp: 3,
  kArcApp: 4,
  kAppServiceUnknown: 5,
};
crosapi.mojom.mojom.VideoConferenceAppTypeSpec = { $: mojo.internal.Enum() };

// Struct: TitleChangeInfo
crosapi.mojom.mojom.TitleChangeInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TitleChangeInfo',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'new_title', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: VideoConferenceClientUpdate
crosapi.mojom.mojom.VideoConferenceClientUpdateSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoConferenceClientUpdate',
      packedSize: 24,
      fields: [
        { name: 'added_or_removed_app', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.VideoConferenceAppUpdateSpec, nullable: false, minVersion: 0 },
        { name: 'title_change_info', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.TitleChangeInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: VideoConferenceMediaUsageStatus
crosapi.mojom.mojom.VideoConferenceMediaUsageStatusSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoConferenceMediaUsageStatus',
      packedSize: 24,
      fields: [
        { name: 'client_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'has_media_app', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'has_camera_permission', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'has_microphone_permission', packedOffset: 8, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_capturing_camera', packedOffset: 8, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_capturing_microphone', packedOffset: 8, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_capturing_screen', packedOffset: 8, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: VideoConferenceMediaAppInfo
crosapi.mojom.mojom.VideoConferenceMediaAppInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoConferenceMediaAppInfo',
      packedSize: 48,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'last_activity_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'is_capturing_camera', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_capturing_microphone', packedOffset: 32, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_capturing_screen', packedOffset: 32, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'app_type', packedOffset: 36, packedBitOffset: 0, type: crosapi.mojom.VideoConferenceAppTypeSpec, nullable: false, minVersion: 1 },
      ],
      versions: [{version: 0, packedSize: 48}, {version: 1, packedSize: 48}]
    }
  }
};

// Interface: VideoConferenceManagerClient
crosapi.mojom.mojom.VideoConferenceManagerClient = {};

crosapi.mojom.mojom.VideoConferenceManagerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.mojom.VideoConferenceManagerClientRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.VideoConferenceManagerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.mojom.VideoConferenceManagerClientPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.mojom.VideoConferenceManagerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.mojom.VideoConferenceManagerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getMediaApps() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.mojom.VideoConferenceManagerClient_GetMediaApps_ParamsSpec,
      crosapi.mojom.mojom.VideoConferenceManagerClient_GetMediaApps_ResponseParamsSpec,
      []);
  }

  returnToApp(id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      crosapi.mojom.mojom.VideoConferenceManagerClient_ReturnToApp_ParamsSpec,
      crosapi.mojom.mojom.VideoConferenceManagerClient_ReturnToApp_ResponseParamsSpec,
      [id]);
  }

  setSystemMediaDeviceStatus(device, enabled) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      crosapi.mojom.mojom.VideoConferenceManagerClient_SetSystemMediaDeviceStatus_ParamsSpec,
      crosapi.mojom.mojom.VideoConferenceManagerClient_SetSystemMediaDeviceStatus_ResponseParamsSpec,
      [device, enabled]);
  }

  stopAllScreenShare() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      crosapi.mojom.mojom.VideoConferenceManagerClient_StopAllScreenShare_ParamsSpec,
      null,
      []);
  }

};

crosapi.mojom.mojom.VideoConferenceManagerClient.getRemote = function() {
  let remote = new crosapi.mojom.mojom.VideoConferenceManagerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.VideoConferenceManagerClient',
    'context');
  return remote.$;
};

// ParamsSpec for GetMediaApps
crosapi.mojom.mojom.VideoConferenceManagerClient_GetMediaApps_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoConferenceManagerClient.GetMediaApps_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.mojom.VideoConferenceManagerClient_GetMediaApps_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoConferenceManagerClient.GetMediaApps_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'apps', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(crosapi.mojom.VideoConferenceMediaAppInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReturnToApp
crosapi.mojom.mojom.VideoConferenceManagerClient_ReturnToApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoConferenceManagerClient.ReturnToApp_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.mojom.VideoConferenceManagerClient_ReturnToApp_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoConferenceManagerClient.ReturnToApp_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetSystemMediaDeviceStatus
crosapi.mojom.mojom.VideoConferenceManagerClient_SetSystemMediaDeviceStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoConferenceManagerClient.SetSystemMediaDeviceStatus_Params',
      packedSize: 16,
      fields: [
        { name: 'device', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.VideoConferenceMediaDeviceSpec, nullable: false, minVersion: 0 },
        { name: 'enabled', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.mojom.VideoConferenceManagerClient_SetSystemMediaDeviceStatus_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoConferenceManagerClient.SetSystemMediaDeviceStatus_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StopAllScreenShare
crosapi.mojom.mojom.VideoConferenceManagerClient_StopAllScreenShare_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.VideoConferenceManagerClient.StopAllScreenShare_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
crosapi.mojom.mojom.VideoConferenceManagerClientPtr = crosapi.mojom.mojom.VideoConferenceManagerClientRemote;
crosapi.mojom.mojom.VideoConferenceManagerClientRequest = crosapi.mojom.mojom.VideoConferenceManagerClientPendingReceiver;

