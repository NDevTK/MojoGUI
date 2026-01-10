// Auto-generated MojoJS binding
// Source: chromium_src/components/global_media_controls/public/mojom/device_service.mojom
// Module: global_media_controls.mojom

'use strict';

// Module namespace
var global_media_controls = global_media_controls || {};
global_media_controls.mojom = global_media_controls.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Enum: IconType
global_media_controls.mojom.mojom.IconType = {
  kUnknown: 0,
  kThrobber: 1,
  kInfo: 2,
  kTv: 3,
  kSpeaker: 4,
  kSpeakerGroup: 5,
  kInput: 6,
};
global_media_controls.mojom.mojom.IconTypeSpec = { $: mojo.internal.Enum() };

// Struct: Device
global_media_controls.mojom.mojom.DeviceSpec = {
  $: {
    structSpec: {
      name: 'global_media_controls.mojom.Device',
      packedSize: 40,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'status_text', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'icon', packedOffset: 24, packedBitOffset: 0, type: global_media_controls.mojom.IconTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Interface: DeviceListHost
global_media_controls.mojom.mojom.DeviceListHost = {};

global_media_controls.mojom.mojom.DeviceListHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

global_media_controls.mojom.mojom.DeviceListHostRemote = class {
  static get $interfaceName() {
    return 'global_media_controls.mojom.DeviceListHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      global_media_controls.mojom.mojom.DeviceListHostPendingReceiver,
      handle);
    this.$ = new global_media_controls.mojom.mojom.DeviceListHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

global_media_controls.mojom.mojom.DeviceListHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  selectDevice(device_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      global_media_controls.mojom.mojom.DeviceListHost_SelectDevice_ParamsSpec,
      null,
      [device_id]);
  }

};

global_media_controls.mojom.mojom.DeviceListHost.getRemote = function() {
  let remote = new global_media_controls.mojom.mojom.DeviceListHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'global_media_controls.mojom.DeviceListHost',
    'context');
  return remote.$;
};

// ParamsSpec for SelectDevice
global_media_controls.mojom.mojom.DeviceListHost_SelectDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'global_media_controls.mojom.DeviceListHost.SelectDevice_Params',
      packedSize: 16,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
global_media_controls.mojom.mojom.DeviceListHostPtr = global_media_controls.mojom.mojom.DeviceListHostRemote;
global_media_controls.mojom.mojom.DeviceListHostRequest = global_media_controls.mojom.mojom.DeviceListHostPendingReceiver;


// Interface: DeviceListClient
global_media_controls.mojom.mojom.DeviceListClient = {};

global_media_controls.mojom.mojom.DeviceListClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

global_media_controls.mojom.mojom.DeviceListClientRemote = class {
  static get $interfaceName() {
    return 'global_media_controls.mojom.DeviceListClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      global_media_controls.mojom.mojom.DeviceListClientPendingReceiver,
      handle);
    this.$ = new global_media_controls.mojom.mojom.DeviceListClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

global_media_controls.mojom.mojom.DeviceListClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDevicesUpdated(devices) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      global_media_controls.mojom.mojom.DeviceListClient_OnDevicesUpdated_ParamsSpec,
      null,
      [devices]);
  }

  onPermissionRejected() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      global_media_controls.mojom.mojom.DeviceListClient_OnPermissionRejected_ParamsSpec,
      null,
      []);
  }

};

global_media_controls.mojom.mojom.DeviceListClient.getRemote = function() {
  let remote = new global_media_controls.mojom.mojom.DeviceListClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'global_media_controls.mojom.DeviceListClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnDevicesUpdated
global_media_controls.mojom.mojom.DeviceListClient_OnDevicesUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'global_media_controls.mojom.DeviceListClient.OnDevicesUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'devices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(global_media_controls.mojom.DeviceSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnPermissionRejected
global_media_controls.mojom.mojom.DeviceListClient_OnPermissionRejected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'global_media_controls.mojom.DeviceListClient.OnPermissionRejected_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
global_media_controls.mojom.mojom.DeviceListClientPtr = global_media_controls.mojom.mojom.DeviceListClientRemote;
global_media_controls.mojom.mojom.DeviceListClientRequest = global_media_controls.mojom.mojom.DeviceListClientPendingReceiver;


// Interface: DeviceService
global_media_controls.mojom.mojom.DeviceService = {};

global_media_controls.mojom.mojom.DeviceServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

global_media_controls.mojom.mojom.DeviceServiceRemote = class {
  static get $interfaceName() {
    return 'global_media_controls.mojom.DeviceService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      global_media_controls.mojom.mojom.DeviceServicePendingReceiver,
      handle);
    this.$ = new global_media_controls.mojom.mojom.DeviceServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

global_media_controls.mojom.mojom.DeviceServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getDeviceListHostForSession(session_id, host_receiver, client_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      global_media_controls.mojom.mojom.DeviceService_GetDeviceListHostForSession_ParamsSpec,
      null,
      [session_id, host_receiver, client_remote]);
  }

  getDeviceListHostForPresentation(host_receiver, client_remote) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      global_media_controls.mojom.mojom.DeviceService_GetDeviceListHostForPresentation_ParamsSpec,
      null,
      [host_receiver, client_remote]);
  }

  setDevicePickerProvider(provider_remote) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      global_media_controls.mojom.mojom.DeviceService_SetDevicePickerProvider_ParamsSpec,
      null,
      [provider_remote]);
  }

};

global_media_controls.mojom.mojom.DeviceService.getRemote = function() {
  let remote = new global_media_controls.mojom.mojom.DeviceServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'global_media_controls.mojom.DeviceService',
    'context');
  return remote.$;
};

// ParamsSpec for GetDeviceListHostForSession
global_media_controls.mojom.mojom.DeviceService_GetDeviceListHostForSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'global_media_controls.mojom.DeviceService.GetDeviceListHostForSession_Params',
      packedSize: 32,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'host_receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(global_media_controls.mojom.DeviceListHostRemote), nullable: false, minVersion: 0 },
        { name: 'client_remote', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(global_media_controls.mojom.DeviceListClientRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for GetDeviceListHostForPresentation
global_media_controls.mojom.mojom.DeviceService_GetDeviceListHostForPresentation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'global_media_controls.mojom.DeviceService.GetDeviceListHostForPresentation_Params',
      packedSize: 24,
      fields: [
        { name: 'host_receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(global_media_controls.mojom.DeviceListHostRemote), nullable: false, minVersion: 0 },
        { name: 'client_remote', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(global_media_controls.mojom.DeviceListClientRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetDevicePickerProvider
global_media_controls.mojom.mojom.DeviceService_SetDevicePickerProvider_ParamsSpec = {
  $: {
    structSpec: {
      name: 'global_media_controls.mojom.DeviceService.SetDevicePickerProvider_Params',
      packedSize: 16,
      fields: [
        { name: 'provider_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(global_media_controls.mojom.DevicePickerProviderRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
global_media_controls.mojom.mojom.DeviceServicePtr = global_media_controls.mojom.mojom.DeviceServiceRemote;
global_media_controls.mojom.mojom.DeviceServiceRequest = global_media_controls.mojom.mojom.DeviceServicePendingReceiver;


// Interface: DevicePickerProvider
global_media_controls.mojom.mojom.DevicePickerProvider = {};

global_media_controls.mojom.mojom.DevicePickerProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

global_media_controls.mojom.mojom.DevicePickerProviderRemote = class {
  static get $interfaceName() {
    return 'global_media_controls.mojom.DevicePickerProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      global_media_controls.mojom.mojom.DevicePickerProviderPendingReceiver,
      handle);
    this.$ = new global_media_controls.mojom.mojom.DevicePickerProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

global_media_controls.mojom.mojom.DevicePickerProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createItem(source_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      global_media_controls.mojom.mojom.DevicePickerProvider_CreateItem_ParamsSpec,
      null,
      [source_id]);
  }

  deleteItem() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      global_media_controls.mojom.mojom.DevicePickerProvider_DeleteItem_ParamsSpec,
      null,
      []);
  }

  showItem() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      global_media_controls.mojom.mojom.DevicePickerProvider_ShowItem_ParamsSpec,
      null,
      []);
  }

  hideItem() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      global_media_controls.mojom.mojom.DevicePickerProvider_HideItem_ParamsSpec,
      null,
      []);
  }

  onMetadataChanged(metadata) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      global_media_controls.mojom.mojom.DevicePickerProvider_OnMetadataChanged_ParamsSpec,
      null,
      [metadata]);
  }

  onArtworkImageChanged(artwork_image) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      global_media_controls.mojom.mojom.DevicePickerProvider_OnArtworkImageChanged_ParamsSpec,
      null,
      [artwork_image]);
  }

  onFaviconImageChanged(favicon_image) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      global_media_controls.mojom.mojom.DevicePickerProvider_OnFaviconImageChanged_ParamsSpec,
      null,
      [favicon_image]);
  }

  addObserver(observer) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      global_media_controls.mojom.mojom.DevicePickerProvider_AddObserver_ParamsSpec,
      null,
      [observer]);
  }

  hideMediaUI() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      global_media_controls.mojom.mojom.DevicePickerProvider_HideMediaUI_ParamsSpec,
      null,
      []);
  }

};

global_media_controls.mojom.mojom.DevicePickerProvider.getRemote = function() {
  let remote = new global_media_controls.mojom.mojom.DevicePickerProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'global_media_controls.mojom.DevicePickerProvider',
    'context');
  return remote.$;
};

// ParamsSpec for CreateItem
global_media_controls.mojom.mojom.DevicePickerProvider_CreateItem_ParamsSpec = {
  $: {
    structSpec: {
      name: 'global_media_controls.mojom.DevicePickerProvider.CreateItem_Params',
      packedSize: 16,
      fields: [
        { name: 'source_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DeleteItem
global_media_controls.mojom.mojom.DevicePickerProvider_DeleteItem_ParamsSpec = {
  $: {
    structSpec: {
      name: 'global_media_controls.mojom.DevicePickerProvider.DeleteItem_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ShowItem
global_media_controls.mojom.mojom.DevicePickerProvider_ShowItem_ParamsSpec = {
  $: {
    structSpec: {
      name: 'global_media_controls.mojom.DevicePickerProvider.ShowItem_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for HideItem
global_media_controls.mojom.mojom.DevicePickerProvider_HideItem_ParamsSpec = {
  $: {
    structSpec: {
      name: 'global_media_controls.mojom.DevicePickerProvider.HideItem_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnMetadataChanged
global_media_controls.mojom.mojom.DevicePickerProvider_OnMetadataChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'global_media_controls.mojom.DevicePickerProvider.OnMetadataChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'metadata', packedOffset: 0, packedBitOffset: 0, type: media_session.mojom.MediaMetadataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnArtworkImageChanged
global_media_controls.mojom.mojom.DevicePickerProvider_OnArtworkImageChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'global_media_controls.mojom.DevicePickerProvider.OnArtworkImageChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'artwork_image', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.ImageSkiaSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnFaviconImageChanged
global_media_controls.mojom.mojom.DevicePickerProvider_OnFaviconImageChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'global_media_controls.mojom.DevicePickerProvider.OnFaviconImageChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'favicon_image', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.ImageSkiaSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddObserver
global_media_controls.mojom.mojom.DevicePickerProvider_AddObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'global_media_controls.mojom.DevicePickerProvider.AddObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(global_media_controls.mojom.DevicePickerObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for HideMediaUI
global_media_controls.mojom.mojom.DevicePickerProvider_HideMediaUI_ParamsSpec = {
  $: {
    structSpec: {
      name: 'global_media_controls.mojom.DevicePickerProvider.HideMediaUI_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
global_media_controls.mojom.mojom.DevicePickerProviderPtr = global_media_controls.mojom.mojom.DevicePickerProviderRemote;
global_media_controls.mojom.mojom.DevicePickerProviderRequest = global_media_controls.mojom.mojom.DevicePickerProviderPendingReceiver;


// Interface: DevicePickerObserver
global_media_controls.mojom.mojom.DevicePickerObserver = {};

global_media_controls.mojom.mojom.DevicePickerObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

global_media_controls.mojom.mojom.DevicePickerObserverRemote = class {
  static get $interfaceName() {
    return 'global_media_controls.mojom.DevicePickerObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      global_media_controls.mojom.mojom.DevicePickerObserverPendingReceiver,
      handle);
    this.$ = new global_media_controls.mojom.mojom.DevicePickerObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

global_media_controls.mojom.mojom.DevicePickerObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onMediaUIOpened() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      global_media_controls.mojom.mojom.DevicePickerObserver_OnMediaUIOpened_ParamsSpec,
      null,
      []);
  }

  onMediaUIClosed() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      global_media_controls.mojom.mojom.DevicePickerObserver_OnMediaUIClosed_ParamsSpec,
      null,
      []);
  }

  onMediaUIUpdated() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      global_media_controls.mojom.mojom.DevicePickerObserver_OnMediaUIUpdated_ParamsSpec,
      null,
      []);
  }

  onPickerDismissed() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      global_media_controls.mojom.mojom.DevicePickerObserver_OnPickerDismissed_ParamsSpec,
      null,
      []);
  }

};

global_media_controls.mojom.mojom.DevicePickerObserver.getRemote = function() {
  let remote = new global_media_controls.mojom.mojom.DevicePickerObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'global_media_controls.mojom.DevicePickerObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnMediaUIOpened
global_media_controls.mojom.mojom.DevicePickerObserver_OnMediaUIOpened_ParamsSpec = {
  $: {
    structSpec: {
      name: 'global_media_controls.mojom.DevicePickerObserver.OnMediaUIOpened_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnMediaUIClosed
global_media_controls.mojom.mojom.DevicePickerObserver_OnMediaUIClosed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'global_media_controls.mojom.DevicePickerObserver.OnMediaUIClosed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnMediaUIUpdated
global_media_controls.mojom.mojom.DevicePickerObserver_OnMediaUIUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'global_media_controls.mojom.DevicePickerObserver.OnMediaUIUpdated_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnPickerDismissed
global_media_controls.mojom.mojom.DevicePickerObserver_OnPickerDismissed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'global_media_controls.mojom.DevicePickerObserver.OnPickerDismissed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
global_media_controls.mojom.mojom.DevicePickerObserverPtr = global_media_controls.mojom.mojom.DevicePickerObserverRemote;
global_media_controls.mojom.mojom.DevicePickerObserverRequest = global_media_controls.mojom.mojom.DevicePickerObserverPendingReceiver;

