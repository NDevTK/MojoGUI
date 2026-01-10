// Auto-generated MojoJS binding
// Source: chromium_src/services/audio/public/mojom/audio_service.mojom
// Module: audio.mojom

'use strict';

// Module namespace
var audio = audio || {};
audio.mojom = audio.mojom || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};

audio.mojom.AudioService = {};
audio.mojom.AudioService.$interfaceName = 'audio.mojom.AudioService';
audio.mojom.AudioService_BindSystemInfo_ParamsSpec = { $: {} };
audio.mojom.AudioService_BindDebugRecording_ParamsSpec = { $: {} };
audio.mojom.AudioService_BindStreamFactory_ParamsSpec = { $: {} };
audio.mojom.AudioService_BindDeviceNotifier_ParamsSpec = { $: {} };
audio.mojom.AudioService_BindLogFactoryManager_ParamsSpec = { $: {} };
audio.mojom.AudioService_BindTestingApi_ParamsSpec = { $: {} };
audio.mojom.AudioService_BindMlModelManager_ParamsSpec = { $: {} };

// Interface: AudioService
mojo.internal.Struct(
    audio.mojom.AudioService_BindSystemInfo_ParamsSpec, 'audio.mojom.AudioService_BindSystemInfo_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(audio.mojom.SystemInfoRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    audio.mojom.AudioService_BindDebugRecording_ParamsSpec, 'audio.mojom.AudioService_BindDebugRecording_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(audio.mojom.DebugRecordingRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    audio.mojom.AudioService_BindStreamFactory_ParamsSpec, 'audio.mojom.AudioService_BindStreamFactory_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(media.mojom.AudioStreamFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    audio.mojom.AudioService_BindDeviceNotifier_ParamsSpec, 'audio.mojom.AudioService_BindDeviceNotifier_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(audio.mojom.DeviceNotifierRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    audio.mojom.AudioService_BindLogFactoryManager_ParamsSpec, 'audio.mojom.AudioService_BindLogFactoryManager_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(audio.mojom.LogFactoryManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    audio.mojom.AudioService_BindTestingApi_ParamsSpec, 'audio.mojom.AudioService_BindTestingApi_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(audio.mojom.TestingApiRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    audio.mojom.AudioService_BindMlModelManager_ParamsSpec, 'audio.mojom.AudioService_BindMlModelManager_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(audio.mojom.MlModelManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

audio.mojom.AudioServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

audio.mojom.AudioServiceRemote = class {
  static get $interfaceName() {
    return 'audio.mojom.AudioService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      audio.mojom.AudioServicePendingReceiver,
      handle);
    this.$ = new audio.mojom.AudioServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

audio.mojom.AudioServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindSystemInfo(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      audio.mojom.AudioService_BindSystemInfo_ParamsSpec,
      null,
      [receiver]);
  }

  bindDebugRecording(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      audio.mojom.AudioService_BindDebugRecording_ParamsSpec,
      null,
      [receiver]);
  }

  bindStreamFactory(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      audio.mojom.AudioService_BindStreamFactory_ParamsSpec,
      null,
      [receiver]);
  }

  bindDeviceNotifier(receiver) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      audio.mojom.AudioService_BindDeviceNotifier_ParamsSpec,
      null,
      [receiver]);
  }

  bindLogFactoryManager(receiver) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      audio.mojom.AudioService_BindLogFactoryManager_ParamsSpec,
      null,
      [receiver]);
  }

  bindTestingApi(receiver) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      audio.mojom.AudioService_BindTestingApi_ParamsSpec,
      null,
      [receiver]);
  }

  bindMlModelManager(receiver) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      audio.mojom.AudioService_BindMlModelManager_ParamsSpec,
      null,
      [receiver]);
  }

};

audio.mojom.AudioService.getRemote = function() {
  let remote = new audio.mojom.AudioServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'audio.mojom.AudioService',
    'context');
  return remote.$;
};

audio.mojom.AudioServicePtr = audio.mojom.AudioServiceRemote;
audio.mojom.AudioServiceRequest = audio.mojom.AudioServicePendingReceiver;

