// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/video/chromeos/mojom/camera_common.mojom
// Module: cros.mojom

'use strict';

// Module namespace
var cros = cros || {};
cros.mojom = cros.mojom || {};


cros.mojom.mojom.CAMERA_DEVICE_API_VERSION_3_0 = 0x300;

cros.mojom.mojom.CAMERA_DEVICE_API_VERSION_3_1 = 0x301;

cros.mojom.mojom.CAMERA_DEVICE_API_VERSION_3_2 = 0x302;

cros.mojom.mojom.CAMERA_DEVICE_API_VERSION_3_3 = 0x303;

cros.mojom.mojom.CAMERA_DEVICE_API_VERSION_3_4 = 0x304;

cros.mojom.mojom.CAMERA_DEVICE_API_VERSION_3_5 = 0x305;

cros.mojom.mojom.CAMERA_DEVICE_API_VERSION_3_6 = 0x306;

// Enum: CameraFacing
cros.mojom.mojom.CameraFacing = {
  CAMERA_FACING_BACK: 0,
  CAMERA_FACING_FRONT: 1,
  CAMERA_FACING_EXTERNAL: 2,
  CAMERA_FACING_VIRTUAL_BACK: 3,
  CAMERA_FACING_VIRTUAL_FRONT: 4,
  CAMERA_FACING_VIRTUAL_EXTERNAL: 5,
};
cros.mojom.mojom.CameraFacingSpec = { $: mojo.internal.Enum() };

// Enum: CameraDeviceStatus
cros.mojom.mojom.CameraDeviceStatus = {
  CAMERA_DEVICE_STATUS_NOT_PRESENT: 0,
  CAMERA_DEVICE_STATUS_PRESENT: 1,
  CAMERA_DEVICE_STATUS_ENUMERATING: 2,
};
cros.mojom.mojom.CameraDeviceStatusSpec = { $: mojo.internal.Enum() };

// Enum: TorchModeStatus
cros.mojom.mojom.TorchModeStatus = {
  TORCH_MODE_STATUS_NOT_AVAILABLE: 0,
  TORCH_MODE_STATUS_AVAILABLE_OFF: 1,
  TORCH_MODE_STATUS_AVAILABLE_ON: 2,
};
cros.mojom.mojom.TorchModeStatusSpec = { $: mojo.internal.Enum() };

// Struct: CameraResourceCost
cros.mojom.mojom.CameraResourceCostSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraResourceCost',
      packedSize: 16,
      fields: [
        { name: 'resource_cost', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: CameraInfo
cros.mojom.mojom.CameraInfoSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraInfo',
      packedSize: 48,
      fields: [
        { name: 'facing', packedOffset: 8, packedBitOffset: 0, type: cros.mojom.CameraFacingSpec, nullable: false, minVersion: 0 },
        { name: 'orientation', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'device_version', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'static_camera_characteristics', packedOffset: 0, packedBitOffset: 0, type: cros.mojom.CameraMetadataSpec, nullable: false, minVersion: 0 },
        { name: 'resource_cost', packedOffset: 24, packedBitOffset: 0, type: cros.mojom.CameraResourceCostSpec, nullable: true, minVersion: 1 },
        { name: 'conflicting_devices', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 1 },
      ],
      versions: [{version: 0, packedSize: 32}, {version: 1, packedSize: 48}]
    }
  }
};

// Interface: CameraModuleCallbacks
cros.mojom.mojom.CameraModuleCallbacks = {};

cros.mojom.mojom.CameraModuleCallbacksPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.mojom.CameraModuleCallbacksRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CameraModuleCallbacks';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.mojom.CameraModuleCallbacksPendingReceiver,
      handle);
    this.$ = new cros.mojom.mojom.CameraModuleCallbacksRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.mojom.CameraModuleCallbacksRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  cameraDeviceStatusChange(camera_id, new_status) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.mojom.CameraModuleCallbacks_CameraDeviceStatusChange_ParamsSpec,
      null,
      [camera_id, new_status]);
  }

  torchModeStatusChange(camera_id, new_status) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cros.mojom.mojom.CameraModuleCallbacks_TorchModeStatusChange_ParamsSpec,
      null,
      [camera_id, new_status]);
  }

};

cros.mojom.mojom.CameraModuleCallbacks.getRemote = function() {
  let remote = new cros.mojom.mojom.CameraModuleCallbacksRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CameraModuleCallbacks',
    'context');
  return remote.$;
};

// ParamsSpec for CameraDeviceStatusChange
cros.mojom.mojom.CameraModuleCallbacks_CameraDeviceStatusChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraModuleCallbacks.CameraDeviceStatusChange_Params',
      packedSize: 16,
      fields: [
        { name: 'camera_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'new_status', packedOffset: 4, packedBitOffset: 0, type: cros.mojom.CameraDeviceStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for TorchModeStatusChange
cros.mojom.mojom.CameraModuleCallbacks_TorchModeStatusChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraModuleCallbacks.TorchModeStatusChange_Params',
      packedSize: 16,
      fields: [
        { name: 'camera_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'new_status', packedOffset: 4, packedBitOffset: 0, type: cros.mojom.TorchModeStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
cros.mojom.mojom.CameraModuleCallbacksPtr = cros.mojom.mojom.CameraModuleCallbacksRemote;
cros.mojom.mojom.CameraModuleCallbacksRequest = cros.mojom.mojom.CameraModuleCallbacksPendingReceiver;


// Interface: VendorTagOps
cros.mojom.mojom.VendorTagOps = {};

cros.mojom.mojom.VendorTagOpsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.mojom.VendorTagOpsRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.VendorTagOps';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.mojom.VendorTagOpsPendingReceiver,
      handle);
    this.$ = new cros.mojom.mojom.VendorTagOpsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.mojom.VendorTagOpsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getTagCount() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.mojom.VendorTagOps_GetTagCount_ParamsSpec,
      cros.mojom.mojom.VendorTagOps_GetTagCount_ResponseParamsSpec,
      []);
  }

  getAllTags() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cros.mojom.mojom.VendorTagOps_GetAllTags_ParamsSpec,
      cros.mojom.mojom.VendorTagOps_GetAllTags_ResponseParamsSpec,
      []);
  }

  getSectionName(tag) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      cros.mojom.mojom.VendorTagOps_GetSectionName_ParamsSpec,
      cros.mojom.mojom.VendorTagOps_GetSectionName_ResponseParamsSpec,
      [tag]);
  }

  getTagName(tag) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      cros.mojom.mojom.VendorTagOps_GetTagName_ParamsSpec,
      cros.mojom.mojom.VendorTagOps_GetTagName_ResponseParamsSpec,
      [tag]);
  }

  getTagType(tag) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      cros.mojom.mojom.VendorTagOps_GetTagType_ParamsSpec,
      cros.mojom.mojom.VendorTagOps_GetTagType_ResponseParamsSpec,
      [tag]);
  }

};

cros.mojom.mojom.VendorTagOps.getRemote = function() {
  let remote = new cros.mojom.mojom.VendorTagOpsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.VendorTagOps',
    'context');
  return remote.$;
};

// ParamsSpec for GetTagCount
cros.mojom.mojom.VendorTagOps_GetTagCount_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.VendorTagOps.GetTagCount_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

cros.mojom.mojom.VendorTagOps_GetTagCount_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.VendorTagOps.GetTagCount_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetAllTags
cros.mojom.mojom.VendorTagOps_GetAllTags_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.VendorTagOps.GetAllTags_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

cros.mojom.mojom.VendorTagOps_GetAllTags_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.VendorTagOps.GetAllTags_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'tag_array', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetSectionName
cros.mojom.mojom.VendorTagOps_GetSectionName_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.VendorTagOps.GetSectionName_Params',
      packedSize: 16,
      fields: [
        { name: 'tag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

cros.mojom.mojom.VendorTagOps_GetSectionName_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.VendorTagOps.GetSectionName_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetTagName
cros.mojom.mojom.VendorTagOps_GetTagName_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.VendorTagOps.GetTagName_Params',
      packedSize: 16,
      fields: [
        { name: 'tag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

cros.mojom.mojom.VendorTagOps_GetTagName_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.VendorTagOps.GetTagName_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetTagType
cros.mojom.mojom.VendorTagOps_GetTagType_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.VendorTagOps.GetTagType_Params',
      packedSize: 16,
      fields: [
        { name: 'tag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

cros.mojom.mojom.VendorTagOps_GetTagType_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.VendorTagOps.GetTagType_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
cros.mojom.mojom.VendorTagOpsPtr = cros.mojom.mojom.VendorTagOpsRemote;
cros.mojom.mojom.VendorTagOpsRequest = cros.mojom.mojom.VendorTagOpsPendingReceiver;


// Interface: CameraModule
cros.mojom.mojom.CameraModule = {};

cros.mojom.mojom.CameraModulePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.mojom.CameraModuleRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CameraModule';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.mojom.CameraModulePendingReceiver,
      handle);
    this.$ = new cros.mojom.mojom.CameraModuleRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.mojom.CameraModuleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  openDevice(camera_id, device_ops_receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.mojom.CameraModule_OpenDevice_ParamsSpec,
      cros.mojom.mojom.CameraModule_OpenDevice_ResponseParamsSpec,
      [camera_id, device_ops_receiver]);
  }

  getNumberOfCameras() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cros.mojom.mojom.CameraModule_GetNumberOfCameras_ParamsSpec,
      cros.mojom.mojom.CameraModule_GetNumberOfCameras_ResponseParamsSpec,
      []);
  }

  getCameraInfo(camera_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      cros.mojom.mojom.CameraModule_GetCameraInfo_ParamsSpec,
      cros.mojom.mojom.CameraModule_GetCameraInfo_ResponseParamsSpec,
      [camera_id]);
  }

  setCallbacks(callbacks) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      cros.mojom.mojom.CameraModule_SetCallbacks_ParamsSpec,
      cros.mojom.mojom.CameraModule_SetCallbacks_ResponseParamsSpec,
      [callbacks]);
  }

  setTorchMode(camera_id, enabled) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      cros.mojom.mojom.CameraModule_SetTorchMode_ParamsSpec,
      cros.mojom.mojom.CameraModule_SetTorchMode_ResponseParamsSpec,
      [camera_id, enabled]);
  }

  init() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      cros.mojom.mojom.CameraModule_Init_ParamsSpec,
      cros.mojom.mojom.CameraModule_Init_ResponseParamsSpec,
      []);
  }

  getVendorTagOps(vendor_tag_ops_receiver) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      cros.mojom.mojom.CameraModule_GetVendorTagOps_ParamsSpec,
      null,
      [vendor_tag_ops_receiver]);
  }

  setCallbacksAssociated(callbacks) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      cros.mojom.mojom.CameraModule_SetCallbacksAssociated_ParamsSpec,
      cros.mojom.mojom.CameraModule_SetCallbacksAssociated_ResponseParamsSpec,
      [callbacks]);
  }

};

cros.mojom.mojom.CameraModule.getRemote = function() {
  let remote = new cros.mojom.mojom.CameraModuleRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CameraModule',
    'context');
  return remote.$;
};

// ParamsSpec for OpenDevice
cros.mojom.mojom.CameraModule_OpenDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraModule.OpenDevice_Params',
      packedSize: 24,
      fields: [
        { name: 'camera_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'device_ops_receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(cros.mojom.Camera3DeviceOpsRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

cros.mojom.mojom.CameraModule_OpenDevice_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraModule.OpenDevice_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetNumberOfCameras
cros.mojom.mojom.CameraModule_GetNumberOfCameras_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraModule.GetNumberOfCameras_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

cros.mojom.mojom.CameraModule_GetNumberOfCameras_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraModule.GetNumberOfCameras_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetCameraInfo
cros.mojom.mojom.CameraModule_GetCameraInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraModule.GetCameraInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'camera_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

cros.mojom.mojom.CameraModule_GetCameraInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraModule.GetCameraInfo_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'camera_info', packedOffset: 0, packedBitOffset: 0, type: cros.mojom.CameraInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetCallbacks
cros.mojom.mojom.CameraModule_SetCallbacks_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraModule.SetCallbacks_Params',
      packedSize: 16,
      fields: [
        { name: 'callbacks', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(cros.mojom.CameraModuleCallbacksRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

cros.mojom.mojom.CameraModule_SetCallbacks_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraModule.SetCallbacks_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetTorchMode
cros.mojom.mojom.CameraModule_SetTorchMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraModule.SetTorchMode_Params',
      packedSize: 16,
      fields: [
        { name: 'camera_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'enabled', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

cros.mojom.mojom.CameraModule_SetTorchMode_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraModule.SetTorchMode_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Init
cros.mojom.mojom.CameraModule_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraModule.Init_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

cros.mojom.mojom.CameraModule_Init_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraModule.Init_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetVendorTagOps
cros.mojom.mojom.CameraModule_GetVendorTagOps_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraModule.GetVendorTagOps_Params',
      packedSize: 16,
      fields: [
        { name: 'vendor_tag_ops_receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(cros.mojom.VendorTagOpsRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetCallbacksAssociated
cros.mojom.mojom.CameraModule_SetCallbacksAssociated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraModule.SetCallbacksAssociated_Params',
      packedSize: 16,
      fields: [
        { name: 'callbacks', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(cros.mojom.CameraModuleCallbacksRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

cros.mojom.mojom.CameraModule_SetCallbacksAssociated_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraModule.SetCallbacksAssociated_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
cros.mojom.mojom.CameraModulePtr = cros.mojom.mojom.CameraModuleRemote;
cros.mojom.mojom.CameraModuleRequest = cros.mojom.mojom.CameraModulePendingReceiver;

