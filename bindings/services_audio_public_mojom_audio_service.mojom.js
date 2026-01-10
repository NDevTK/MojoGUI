// Auto-generated MojoJS binding
// Source: chromium_src/services/audio/public/mojom/audio_service.mojom
// Module: audio.mojom

'use strict';

// Module namespace
var audio = audio || {};
audio.mojom = audio.mojom || {};


// Interface: AudioService
audio.mojom.mojom.AudioService = {};

audio.mojom.mojom.AudioServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

audio.mojom.mojom.AudioServiceRemote = class {
  static get $interfaceName() {
    return 'audio.mojom.AudioService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      audio.mojom.mojom.AudioServicePendingReceiver,
      handle);
    this.$ = new audio.mojom.mojom.AudioServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

audio.mojom.mojom.AudioServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindSystemInfo(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      audio.mojom.mojom.AudioService_BindSystemInfo_ParamsSpec,
      null,
      [receiver]);
  }

  bindDebugRecording(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      audio.mojom.mojom.AudioService_BindDebugRecording_ParamsSpec,
      null,
      [receiver]);
  }

  bindStreamFactory(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      audio.mojom.mojom.AudioService_BindStreamFactory_ParamsSpec,
      null,
      [receiver]);
  }

  bindDeviceNotifier(receiver) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      audio.mojom.mojom.AudioService_BindDeviceNotifier_ParamsSpec,
      null,
      [receiver]);
  }

  bindLogFactoryManager(receiver) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      audio.mojom.mojom.AudioService_BindLogFactoryManager_ParamsSpec,
      null,
      [receiver]);
  }

  bindTestingApi(receiver) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      audio.mojom.mojom.AudioService_BindTestingApi_ParamsSpec,
      null,
      [receiver]);
  }

  bindMlModelManager(receiver) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      audio.mojom.mojom.AudioService_BindMlModelManager_ParamsSpec,
      null,
      [receiver]);
  }

};

audio.mojom.mojom.AudioService.getRemote = function() {
  let remote = new audio.mojom.mojom.AudioServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'audio.mojom.AudioService',
    'context');
  return remote.$;
};

// ParamsSpec for BindSystemInfo
audio.mojom.mojom.AudioService_BindSystemInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'audio.mojom.AudioService.BindSystemInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(audio.mojom.SystemInfoRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindDebugRecording
audio.mojom.mojom.AudioService_BindDebugRecording_ParamsSpec = {
  $: {
    structSpec: {
      name: 'audio.mojom.AudioService.BindDebugRecording_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(audio.mojom.DebugRecordingRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindStreamFactory
audio.mojom.mojom.AudioService_BindStreamFactory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'audio.mojom.AudioService.BindStreamFactory_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(media.mojom.AudioStreamFactoryRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindDeviceNotifier
audio.mojom.mojom.AudioService_BindDeviceNotifier_ParamsSpec = {
  $: {
    structSpec: {
      name: 'audio.mojom.AudioService.BindDeviceNotifier_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(audio.mojom.DeviceNotifierRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindLogFactoryManager
audio.mojom.mojom.AudioService_BindLogFactoryManager_ParamsSpec = {
  $: {
    structSpec: {
      name: 'audio.mojom.AudioService.BindLogFactoryManager_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(audio.mojom.LogFactoryManagerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindTestingApi
audio.mojom.mojom.AudioService_BindTestingApi_ParamsSpec = {
  $: {
    structSpec: {
      name: 'audio.mojom.AudioService.BindTestingApi_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(audio.mojom.TestingApiRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindMlModelManager
audio.mojom.mojom.AudioService_BindMlModelManager_ParamsSpec = {
  $: {
    structSpec: {
      name: 'audio.mojom.AudioService.BindMlModelManager_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(audio.mojom.MlModelManagerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
audio.mojom.mojom.AudioServicePtr = audio.mojom.mojom.AudioServiceRemote;
audio.mojom.mojom.AudioServiceRequest = audio.mojom.mojom.AudioServicePendingReceiver;

