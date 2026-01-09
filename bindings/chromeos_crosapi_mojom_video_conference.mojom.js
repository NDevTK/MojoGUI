// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/video_conference.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Enum: VideoConferenceAppUpdate
crosapi.mojom.VideoConferenceAppUpdate = {
  kAppAdded: 0,
  kAppRemoved: 1,
};

// Enum: VideoConferenceMediaDevice
crosapi.mojom.VideoConferenceMediaDevice = {
  kMicrophone: 0,
  kCamera: 1,
};

// Enum: VideoConferenceAppType
crosapi.mojom.VideoConferenceAppType = {
  kChromeTab: 0,
  kChromeExtension: 1,
  kChromeApp: 2,
  kWebApp: 3,
  kArcApp: 4,
  kAppServiceUnknown: 5,
};

// Interface: VideoConferenceManagerClient
crosapi.mojom.VideoConferenceManagerClient = {};

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

// Legacy compatibility
crosapi.mojom.VideoConferenceManagerClientPtr = crosapi.mojom.VideoConferenceManagerClientRemote;
crosapi.mojom.VideoConferenceManagerClientRequest = crosapi.mojom.VideoConferenceManagerClientPendingReceiver;

