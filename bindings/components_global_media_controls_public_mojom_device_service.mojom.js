// Auto-generated MojoJS binding
// Source: chromium_src/components/global_media_controls/public/mojom/device_service.mojom
// Module: global_media_controls.mojom

'use strict';

// Module namespace
var global_media_controls = global_media_controls || {};
global_media_controls.mojom = global_media_controls.mojom || {};
var services = services || {};
var ui = ui || {};
var gfx = gfx || {};

global_media_controls.mojom.IconTypeSpec = { $: mojo.internal.Enum() };
global_media_controls.mojom.DeviceSpec = { $: {} };
global_media_controls.mojom.DeviceListHost = {};
global_media_controls.mojom.DeviceListHost.$interfaceName = 'global_media_controls.mojom.DeviceListHost';
global_media_controls.mojom.DeviceListHost_SelectDevice_ParamsSpec = { $: {} };
global_media_controls.mojom.DeviceListClient = {};
global_media_controls.mojom.DeviceListClient.$interfaceName = 'global_media_controls.mojom.DeviceListClient';
global_media_controls.mojom.DeviceListClient_OnDevicesUpdated_ParamsSpec = { $: {} };
global_media_controls.mojom.DeviceListClient_OnPermissionRejected_ParamsSpec = { $: {} };
global_media_controls.mojom.DeviceService = {};
global_media_controls.mojom.DeviceService.$interfaceName = 'global_media_controls.mojom.DeviceService';
global_media_controls.mojom.DeviceService_GetDeviceListHostForSession_ParamsSpec = { $: {} };
global_media_controls.mojom.DeviceService_GetDeviceListHostForPresentation_ParamsSpec = { $: {} };
global_media_controls.mojom.DeviceService_SetDevicePickerProvider_ParamsSpec = { $: {} };
global_media_controls.mojom.DevicePickerProvider = {};
global_media_controls.mojom.DevicePickerProvider.$interfaceName = 'global_media_controls.mojom.DevicePickerProvider';
global_media_controls.mojom.DevicePickerProvider_CreateItem_ParamsSpec = { $: {} };
global_media_controls.mojom.DevicePickerProvider_DeleteItem_ParamsSpec = { $: {} };
global_media_controls.mojom.DevicePickerProvider_ShowItem_ParamsSpec = { $: {} };
global_media_controls.mojom.DevicePickerProvider_HideItem_ParamsSpec = { $: {} };
global_media_controls.mojom.DevicePickerProvider_OnMetadataChanged_ParamsSpec = { $: {} };
global_media_controls.mojom.DevicePickerProvider_OnArtworkImageChanged_ParamsSpec = { $: {} };
global_media_controls.mojom.DevicePickerProvider_OnFaviconImageChanged_ParamsSpec = { $: {} };
global_media_controls.mojom.DevicePickerProvider_AddObserver_ParamsSpec = { $: {} };
global_media_controls.mojom.DevicePickerProvider_HideMediaUI_ParamsSpec = { $: {} };
global_media_controls.mojom.DevicePickerObserver = {};
global_media_controls.mojom.DevicePickerObserver.$interfaceName = 'global_media_controls.mojom.DevicePickerObserver';
global_media_controls.mojom.DevicePickerObserver_OnMediaUIOpened_ParamsSpec = { $: {} };
global_media_controls.mojom.DevicePickerObserver_OnMediaUIClosed_ParamsSpec = { $: {} };
global_media_controls.mojom.DevicePickerObserver_OnMediaUIUpdated_ParamsSpec = { $: {} };
global_media_controls.mojom.DevicePickerObserver_OnPickerDismissed_ParamsSpec = { $: {} };

// Enum: IconType
global_media_controls.mojom.IconType = {
  kUnknown: 0,
  kThrobber: 1,
  kInfo: 2,
  kTv: 3,
  kSpeaker: 4,
  kSpeakerGroup: 5,
  kInput: 6,
};

// Struct: Device
mojo.internal.Struct(
    global_media_controls.mojom.DeviceSpec, 'global_media_controls.mojom.Device', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('status_text', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('icon', 24, 0, global_media_controls.mojom.IconTypeSpec, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: DeviceListHost
mojo.internal.Struct(
    global_media_controls.mojom.DeviceListHost_SelectDevice_ParamsSpec, 'global_media_controls.mojom.DeviceListHost_SelectDevice_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

global_media_controls.mojom.DeviceListHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

global_media_controls.mojom.DeviceListHostRemote = class {
  static get $interfaceName() {
    return 'global_media_controls.mojom.DeviceListHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      global_media_controls.mojom.DeviceListHostPendingReceiver,
      handle);
    this.$ = new global_media_controls.mojom.DeviceListHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

global_media_controls.mojom.DeviceListHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  selectDevice(device_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      global_media_controls.mojom.DeviceListHost_SelectDevice_ParamsSpec,
      null,
      [device_id],
      false);
  }

};

global_media_controls.mojom.DeviceListHost.getRemote = function() {
  let remote = new global_media_controls.mojom.DeviceListHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'global_media_controls.mojom.DeviceListHost',
    'context');
  return remote.$;
};

global_media_controls.mojom.DeviceListHostPtr = global_media_controls.mojom.DeviceListHostRemote;
global_media_controls.mojom.DeviceListHostRequest = global_media_controls.mojom.DeviceListHostPendingReceiver;


// Interface: DeviceListClient
mojo.internal.Struct(
    global_media_controls.mojom.DeviceListClient_OnDevicesUpdated_ParamsSpec, 'global_media_controls.mojom.DeviceListClient_OnDevicesUpdated_Params', [
      mojo.internal.StructField('devices', 0, 0, mojo.internal.Array(global_media_controls.mojom.DeviceSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    global_media_controls.mojom.DeviceListClient_OnPermissionRejected_ParamsSpec, 'global_media_controls.mojom.DeviceListClient_OnPermissionRejected_Params', [
    ],
    [[0, 8]]);

global_media_controls.mojom.DeviceListClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

global_media_controls.mojom.DeviceListClientRemote = class {
  static get $interfaceName() {
    return 'global_media_controls.mojom.DeviceListClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      global_media_controls.mojom.DeviceListClientPendingReceiver,
      handle);
    this.$ = new global_media_controls.mojom.DeviceListClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

global_media_controls.mojom.DeviceListClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDevicesUpdated(devices) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      global_media_controls.mojom.DeviceListClient_OnDevicesUpdated_ParamsSpec,
      null,
      [devices],
      false);
  }

  onPermissionRejected() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      global_media_controls.mojom.DeviceListClient_OnPermissionRejected_ParamsSpec,
      null,
      [],
      false);
  }

};

global_media_controls.mojom.DeviceListClient.getRemote = function() {
  let remote = new global_media_controls.mojom.DeviceListClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'global_media_controls.mojom.DeviceListClient',
    'context');
  return remote.$;
};

global_media_controls.mojom.DeviceListClientPtr = global_media_controls.mojom.DeviceListClientRemote;
global_media_controls.mojom.DeviceListClientRequest = global_media_controls.mojom.DeviceListClientPendingReceiver;


// Interface: DeviceService
mojo.internal.Struct(
    global_media_controls.mojom.DeviceService_GetDeviceListHostForSession_ParamsSpec, 'global_media_controls.mojom.DeviceService_GetDeviceListHostForSession_Params', [
      mojo.internal.StructField('session_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('host_receiver', 8, 0, mojo.internal.InterfaceRequest(global_media_controls.mojom.DeviceListHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('client_remote', 16, 0, mojo.internal.InterfaceProxy(global_media_controls.mojom.DeviceListClientRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    global_media_controls.mojom.DeviceService_GetDeviceListHostForPresentation_ParamsSpec, 'global_media_controls.mojom.DeviceService_GetDeviceListHostForPresentation_Params', [
      mojo.internal.StructField('host_receiver', 0, 0, mojo.internal.InterfaceRequest(global_media_controls.mojom.DeviceListHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('client_remote', 8, 0, mojo.internal.InterfaceProxy(global_media_controls.mojom.DeviceListClientRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    global_media_controls.mojom.DeviceService_SetDevicePickerProvider_ParamsSpec, 'global_media_controls.mojom.DeviceService_SetDevicePickerProvider_Params', [
      mojo.internal.StructField('provider_remote', 0, 0, mojo.internal.InterfaceProxy(global_media_controls.mojom.DevicePickerProviderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

global_media_controls.mojom.DeviceServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

global_media_controls.mojom.DeviceServiceRemote = class {
  static get $interfaceName() {
    return 'global_media_controls.mojom.DeviceService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      global_media_controls.mojom.DeviceServicePendingReceiver,
      handle);
    this.$ = new global_media_controls.mojom.DeviceServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

global_media_controls.mojom.DeviceServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getDeviceListHostForSession(session_id, host_receiver, client_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      global_media_controls.mojom.DeviceService_GetDeviceListHostForSession_ParamsSpec,
      null,
      [session_id, host_receiver, client_remote],
      false);
  }

  getDeviceListHostForPresentation(host_receiver, client_remote) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      global_media_controls.mojom.DeviceService_GetDeviceListHostForPresentation_ParamsSpec,
      null,
      [host_receiver, client_remote],
      false);
  }

  setDevicePickerProvider(provider_remote) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      global_media_controls.mojom.DeviceService_SetDevicePickerProvider_ParamsSpec,
      null,
      [provider_remote],
      false);
  }

};

global_media_controls.mojom.DeviceService.getRemote = function() {
  let remote = new global_media_controls.mojom.DeviceServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'global_media_controls.mojom.DeviceService',
    'context');
  return remote.$;
};

global_media_controls.mojom.DeviceServicePtr = global_media_controls.mojom.DeviceServiceRemote;
global_media_controls.mojom.DeviceServiceRequest = global_media_controls.mojom.DeviceServicePendingReceiver;


// Interface: DevicePickerProvider
mojo.internal.Struct(
    global_media_controls.mojom.DevicePickerProvider_CreateItem_ParamsSpec, 'global_media_controls.mojom.DevicePickerProvider_CreateItem_Params', [
      mojo.internal.StructField('source_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    global_media_controls.mojom.DevicePickerProvider_DeleteItem_ParamsSpec, 'global_media_controls.mojom.DevicePickerProvider_DeleteItem_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    global_media_controls.mojom.DevicePickerProvider_ShowItem_ParamsSpec, 'global_media_controls.mojom.DevicePickerProvider_ShowItem_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    global_media_controls.mojom.DevicePickerProvider_HideItem_ParamsSpec, 'global_media_controls.mojom.DevicePickerProvider_HideItem_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    global_media_controls.mojom.DevicePickerProvider_OnMetadataChanged_ParamsSpec, 'global_media_controls.mojom.DevicePickerProvider_OnMetadataChanged_Params', [
      mojo.internal.StructField('metadata', 0, 0, media_session.mojom.MediaMetadataSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    global_media_controls.mojom.DevicePickerProvider_OnArtworkImageChanged_ParamsSpec, 'global_media_controls.mojom.DevicePickerProvider_OnArtworkImageChanged_Params', [
      mojo.internal.StructField('artwork_image', 0, 0, gfx.mojom.ImageSkiaSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    global_media_controls.mojom.DevicePickerProvider_OnFaviconImageChanged_ParamsSpec, 'global_media_controls.mojom.DevicePickerProvider_OnFaviconImageChanged_Params', [
      mojo.internal.StructField('favicon_image', 0, 0, gfx.mojom.ImageSkiaSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    global_media_controls.mojom.DevicePickerProvider_AddObserver_ParamsSpec, 'global_media_controls.mojom.DevicePickerProvider_AddObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(global_media_controls.mojom.DevicePickerObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    global_media_controls.mojom.DevicePickerProvider_HideMediaUI_ParamsSpec, 'global_media_controls.mojom.DevicePickerProvider_HideMediaUI_Params', [
    ],
    [[0, 8]]);

global_media_controls.mojom.DevicePickerProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

global_media_controls.mojom.DevicePickerProviderRemote = class {
  static get $interfaceName() {
    return 'global_media_controls.mojom.DevicePickerProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      global_media_controls.mojom.DevicePickerProviderPendingReceiver,
      handle);
    this.$ = new global_media_controls.mojom.DevicePickerProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

global_media_controls.mojom.DevicePickerProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createItem(source_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      global_media_controls.mojom.DevicePickerProvider_CreateItem_ParamsSpec,
      null,
      [source_id],
      false);
  }

  deleteItem() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      global_media_controls.mojom.DevicePickerProvider_DeleteItem_ParamsSpec,
      null,
      [],
      false);
  }

  showItem() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      global_media_controls.mojom.DevicePickerProvider_ShowItem_ParamsSpec,
      null,
      [],
      false);
  }

  hideItem() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      global_media_controls.mojom.DevicePickerProvider_HideItem_ParamsSpec,
      null,
      [],
      false);
  }

  onMetadataChanged(metadata) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      global_media_controls.mojom.DevicePickerProvider_OnMetadataChanged_ParamsSpec,
      null,
      [metadata],
      false);
  }

  onArtworkImageChanged(artwork_image) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      global_media_controls.mojom.DevicePickerProvider_OnArtworkImageChanged_ParamsSpec,
      null,
      [artwork_image],
      false);
  }

  onFaviconImageChanged(favicon_image) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      global_media_controls.mojom.DevicePickerProvider_OnFaviconImageChanged_ParamsSpec,
      null,
      [favicon_image],
      false);
  }

  addObserver(observer) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      global_media_controls.mojom.DevicePickerProvider_AddObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  hideMediaUI() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      global_media_controls.mojom.DevicePickerProvider_HideMediaUI_ParamsSpec,
      null,
      [],
      false);
  }

};

global_media_controls.mojom.DevicePickerProvider.getRemote = function() {
  let remote = new global_media_controls.mojom.DevicePickerProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'global_media_controls.mojom.DevicePickerProvider',
    'context');
  return remote.$;
};

global_media_controls.mojom.DevicePickerProviderPtr = global_media_controls.mojom.DevicePickerProviderRemote;
global_media_controls.mojom.DevicePickerProviderRequest = global_media_controls.mojom.DevicePickerProviderPendingReceiver;


// Interface: DevicePickerObserver
mojo.internal.Struct(
    global_media_controls.mojom.DevicePickerObserver_OnMediaUIOpened_ParamsSpec, 'global_media_controls.mojom.DevicePickerObserver_OnMediaUIOpened_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    global_media_controls.mojom.DevicePickerObserver_OnMediaUIClosed_ParamsSpec, 'global_media_controls.mojom.DevicePickerObserver_OnMediaUIClosed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    global_media_controls.mojom.DevicePickerObserver_OnMediaUIUpdated_ParamsSpec, 'global_media_controls.mojom.DevicePickerObserver_OnMediaUIUpdated_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    global_media_controls.mojom.DevicePickerObserver_OnPickerDismissed_ParamsSpec, 'global_media_controls.mojom.DevicePickerObserver_OnPickerDismissed_Params', [
    ],
    [[0, 8]]);

global_media_controls.mojom.DevicePickerObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

global_media_controls.mojom.DevicePickerObserverRemote = class {
  static get $interfaceName() {
    return 'global_media_controls.mojom.DevicePickerObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      global_media_controls.mojom.DevicePickerObserverPendingReceiver,
      handle);
    this.$ = new global_media_controls.mojom.DevicePickerObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

global_media_controls.mojom.DevicePickerObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onMediaUIOpened() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      global_media_controls.mojom.DevicePickerObserver_OnMediaUIOpened_ParamsSpec,
      null,
      [],
      false);
  }

  onMediaUIClosed() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      global_media_controls.mojom.DevicePickerObserver_OnMediaUIClosed_ParamsSpec,
      null,
      [],
      false);
  }

  onMediaUIUpdated() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      global_media_controls.mojom.DevicePickerObserver_OnMediaUIUpdated_ParamsSpec,
      null,
      [],
      false);
  }

  onPickerDismissed() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      global_media_controls.mojom.DevicePickerObserver_OnPickerDismissed_ParamsSpec,
      null,
      [],
      false);
  }

};

global_media_controls.mojom.DevicePickerObserver.getRemote = function() {
  let remote = new global_media_controls.mojom.DevicePickerObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'global_media_controls.mojom.DevicePickerObserver',
    'context');
  return remote.$;
};

global_media_controls.mojom.DevicePickerObserverPtr = global_media_controls.mojom.DevicePickerObserverRemote;
global_media_controls.mojom.DevicePickerObserverRequest = global_media_controls.mojom.DevicePickerObserverPendingReceiver;

