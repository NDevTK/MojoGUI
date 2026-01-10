// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/video/chromeos/mojom/camera_common.mojom
// Module: cros.mojom

'use strict';

// Module namespace
var cros = cros || {};
cros.mojom = cros.mojom || {};

cros.mojom.CameraFacingSpec = { $: mojo.internal.Enum() };
cros.mojom.CameraDeviceStatusSpec = { $: mojo.internal.Enum() };
cros.mojom.TorchModeStatusSpec = { $: mojo.internal.Enum() };
cros.mojom.CameraResourceCostSpec = { $: {} };
cros.mojom.CameraInfoSpec = { $: {} };
cros.mojom.CameraModuleCallbacks = {};
cros.mojom.CameraModuleCallbacks.$interfaceName = 'cros.mojom.CameraModuleCallbacks';
cros.mojom.CameraModuleCallbacks_CameraDeviceStatusChange_ParamsSpec = { $: {} };
cros.mojom.CameraModuleCallbacks_TorchModeStatusChange_ParamsSpec = { $: {} };
cros.mojom.VendorTagOps = {};
cros.mojom.VendorTagOps.$interfaceName = 'cros.mojom.VendorTagOps';
cros.mojom.VendorTagOps_GetTagCount_ParamsSpec = { $: {} };
cros.mojom.VendorTagOps_GetTagCount_ResponseParamsSpec = { $: {} };
cros.mojom.VendorTagOps_GetAllTags_ParamsSpec = { $: {} };
cros.mojom.VendorTagOps_GetAllTags_ResponseParamsSpec = { $: {} };
cros.mojom.VendorTagOps_GetSectionName_ParamsSpec = { $: {} };
cros.mojom.VendorTagOps_GetSectionName_ResponseParamsSpec = { $: {} };
cros.mojom.VendorTagOps_GetTagName_ParamsSpec = { $: {} };
cros.mojom.VendorTagOps_GetTagName_ResponseParamsSpec = { $: {} };
cros.mojom.VendorTagOps_GetTagType_ParamsSpec = { $: {} };
cros.mojom.VendorTagOps_GetTagType_ResponseParamsSpec = { $: {} };
cros.mojom.CameraModule = {};
cros.mojom.CameraModule.$interfaceName = 'cros.mojom.CameraModule';
cros.mojom.CameraModule_OpenDevice_ParamsSpec = { $: {} };
cros.mojom.CameraModule_OpenDevice_ResponseParamsSpec = { $: {} };
cros.mojom.CameraModule_GetNumberOfCameras_ParamsSpec = { $: {} };
cros.mojom.CameraModule_GetNumberOfCameras_ResponseParamsSpec = { $: {} };
cros.mojom.CameraModule_GetCameraInfo_ParamsSpec = { $: {} };
cros.mojom.CameraModule_GetCameraInfo_ResponseParamsSpec = { $: {} };
cros.mojom.CameraModule_SetCallbacks_ParamsSpec = { $: {} };
cros.mojom.CameraModule_SetCallbacks_ResponseParamsSpec = { $: {} };
cros.mojom.CameraModule_SetTorchMode_ParamsSpec = { $: {} };
cros.mojom.CameraModule_SetTorchMode_ResponseParamsSpec = { $: {} };
cros.mojom.CameraModule_Init_ParamsSpec = { $: {} };
cros.mojom.CameraModule_Init_ResponseParamsSpec = { $: {} };
cros.mojom.CameraModule_GetVendorTagOps_ParamsSpec = { $: {} };
cros.mojom.CameraModule_GetVendorTagOps_ResponseParamsSpec = { $: {} };
cros.mojom.CameraModule_SetCallbacksAssociated_ParamsSpec = { $: {} };
cros.mojom.CameraModule_SetCallbacksAssociated_ResponseParamsSpec = { $: {} };

cros.mojom.CAMERA_DEVICE_API_VERSION_3_0 = 0x300;

cros.mojom.CAMERA_DEVICE_API_VERSION_3_1 = 0x301;

cros.mojom.CAMERA_DEVICE_API_VERSION_3_2 = 0x302;

cros.mojom.CAMERA_DEVICE_API_VERSION_3_3 = 0x303;

cros.mojom.CAMERA_DEVICE_API_VERSION_3_4 = 0x304;

cros.mojom.CAMERA_DEVICE_API_VERSION_3_5 = 0x305;

cros.mojom.CAMERA_DEVICE_API_VERSION_3_6 = 0x306;

// Enum: CameraFacing
cros.mojom.CameraFacing = {
  CAMERA_FACING_BACK: 0,
  CAMERA_FACING_FRONT: 1,
  CAMERA_FACING_EXTERNAL: 2,
  CAMERA_FACING_VIRTUAL_BACK: 3,
  CAMERA_FACING_VIRTUAL_FRONT: 4,
  CAMERA_FACING_VIRTUAL_EXTERNAL: 5,
};

// Enum: CameraDeviceStatus
cros.mojom.CameraDeviceStatus = {
  CAMERA_DEVICE_STATUS_NOT_PRESENT: 0,
  CAMERA_DEVICE_STATUS_PRESENT: 1,
  CAMERA_DEVICE_STATUS_ENUMERATING: 2,
};

// Enum: TorchModeStatus
cros.mojom.TorchModeStatus = {
  TORCH_MODE_STATUS_NOT_AVAILABLE: 0,
  TORCH_MODE_STATUS_AVAILABLE_OFF: 1,
  TORCH_MODE_STATUS_AVAILABLE_ON: 2,
};

// Struct: CameraResourceCost
mojo.internal.Struct(
    cros.mojom.CameraResourceCostSpec, 'cros.mojom.CameraResourceCost', [
      mojo.internal.StructField('resource_cost', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: CameraInfo
mojo.internal.Struct(
    cros.mojom.CameraInfoSpec, 'cros.mojom.CameraInfo', [
      mojo.internal.StructField('facing', 0, 0, cros.mojom.CameraFacingSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('static_camera_characteristics', 8, 0, cros.mojom.CameraMetadataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('orientation', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('device_version', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('resource_cost', 24, 0, cros.mojom.CameraResourceCostSpec.$, null, true, 1, undefined),
      mojo.internal.StructField('conflicting_devices', 32, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 1, undefined),
    ],
    [[0, 32], [1, 48]]);

// Interface: CameraModuleCallbacks
mojo.internal.Struct(
    cros.mojom.CameraModuleCallbacks_CameraDeviceStatusChange_ParamsSpec, 'cros.mojom.CameraModuleCallbacks_CameraDeviceStatusChange_Params', [
      mojo.internal.StructField('new_status', 0, 0, cros.mojom.CameraDeviceStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('camera_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    cros.mojom.CameraModuleCallbacks_TorchModeStatusChange_ParamsSpec, 'cros.mojom.CameraModuleCallbacks_TorchModeStatusChange_Params', [
      mojo.internal.StructField('new_status', 0, 0, cros.mojom.TorchModeStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('camera_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

cros.mojom.CameraModuleCallbacksPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.CameraModuleCallbacksRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CameraModuleCallbacks';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.CameraModuleCallbacksPendingReceiver,
      handle);
    this.$ = new cros.mojom.CameraModuleCallbacksRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.CameraModuleCallbacksRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  cameraDeviceStatusChange(camera_id, new_status) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.CameraModuleCallbacks_CameraDeviceStatusChange_ParamsSpec,
      null,
      [camera_id, new_status],
      false);
  }

  torchModeStatusChange(camera_id, new_status) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cros.mojom.CameraModuleCallbacks_TorchModeStatusChange_ParamsSpec,
      null,
      [camera_id, new_status],
      false);
  }

};

cros.mojom.CameraModuleCallbacks.getRemote = function() {
  let remote = new cros.mojom.CameraModuleCallbacksRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CameraModuleCallbacks',
    'context');
  return remote.$;
};

cros.mojom.CameraModuleCallbacksReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CameraDeviceStatusChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cros.mojom.CameraModuleCallbacks_CameraDeviceStatusChange_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CameraDeviceStatusChange (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: TorchModeStatusChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cros.mojom.CameraModuleCallbacks_TorchModeStatusChange_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TorchModeStatusChange (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStructInline(cros.mojom.CameraModuleCallbacks_CameraDeviceStatusChange_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.cameraDeviceStatusChange');
          const result = this.impl.cameraDeviceStatusChange(params.camera_id, params.new_status);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.CameraModuleCallbacks_TorchModeStatusChange_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.torchModeStatusChange');
          const result = this.impl.torchModeStatusChange(params.camera_id, params.new_status);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

cros.mojom.CameraModuleCallbacksReceiver = cros.mojom.CameraModuleCallbacksReceiver;

cros.mojom.CameraModuleCallbacksPtr = cros.mojom.CameraModuleCallbacksRemote;
cros.mojom.CameraModuleCallbacksRequest = cros.mojom.CameraModuleCallbacksPendingReceiver;


// Interface: VendorTagOps
mojo.internal.Struct(
    cros.mojom.VendorTagOps_GetTagCount_ParamsSpec, 'cros.mojom.VendorTagOps_GetTagCount_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cros.mojom.VendorTagOps_GetTagCount_ResponseParamsSpec, 'cros.mojom.VendorTagOps_GetTagCount_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.VendorTagOps_GetAllTags_ParamsSpec, 'cros.mojom.VendorTagOps_GetAllTags_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cros.mojom.VendorTagOps_GetAllTags_ResponseParamsSpec, 'cros.mojom.VendorTagOps_GetAllTags_ResponseParams', [
      mojo.internal.StructField('tag_array', 0, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.VendorTagOps_GetSectionName_ParamsSpec, 'cros.mojom.VendorTagOps_GetSectionName_Params', [
      mojo.internal.StructField('tag', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.VendorTagOps_GetSectionName_ResponseParamsSpec, 'cros.mojom.VendorTagOps_GetSectionName_ResponseParams', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.VendorTagOps_GetTagName_ParamsSpec, 'cros.mojom.VendorTagOps_GetTagName_Params', [
      mojo.internal.StructField('tag', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.VendorTagOps_GetTagName_ResponseParamsSpec, 'cros.mojom.VendorTagOps_GetTagName_ResponseParams', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.VendorTagOps_GetTagType_ParamsSpec, 'cros.mojom.VendorTagOps_GetTagType_Params', [
      mojo.internal.StructField('tag', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.VendorTagOps_GetTagType_ResponseParamsSpec, 'cros.mojom.VendorTagOps_GetTagType_ResponseParams', [
      mojo.internal.StructField('type', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

cros.mojom.VendorTagOpsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.VendorTagOpsRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.VendorTagOps';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.VendorTagOpsPendingReceiver,
      handle);
    this.$ = new cros.mojom.VendorTagOpsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.VendorTagOpsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getTagCount() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.VendorTagOps_GetTagCount_ParamsSpec,
      cros.mojom.VendorTagOps_GetTagCount_ResponseParamsSpec,
      [],
      false);
  }

  getAllTags() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cros.mojom.VendorTagOps_GetAllTags_ParamsSpec,
      cros.mojom.VendorTagOps_GetAllTags_ResponseParamsSpec,
      [],
      false);
  }

  getSectionName(tag) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      cros.mojom.VendorTagOps_GetSectionName_ParamsSpec,
      cros.mojom.VendorTagOps_GetSectionName_ResponseParamsSpec,
      [tag],
      false);
  }

  getTagName(tag) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      cros.mojom.VendorTagOps_GetTagName_ParamsSpec,
      cros.mojom.VendorTagOps_GetTagName_ResponseParamsSpec,
      [tag],
      false);
  }

  getTagType(tag) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      cros.mojom.VendorTagOps_GetTagType_ParamsSpec,
      cros.mojom.VendorTagOps_GetTagType_ResponseParamsSpec,
      [tag],
      false);
  }

};

cros.mojom.VendorTagOps.getRemote = function() {
  let remote = new cros.mojom.VendorTagOpsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.VendorTagOps',
    'context');
  return remote.$;
};

cros.mojom.VendorTagOpsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetTagCount
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cros.mojom.VendorTagOps_GetTagCount_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetTagCount (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetAllTags
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cros.mojom.VendorTagOps_GetAllTags_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAllTags (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetSectionName
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cros.mojom.VendorTagOps_GetSectionName_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSectionName (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetTagName
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cros.mojom.VendorTagOps_GetTagName_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetTagName (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetTagType
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cros.mojom.VendorTagOps_GetTagType_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetTagType (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
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
          const params = decoder.decodeStructInline(cros.mojom.VendorTagOps_GetTagCount_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getTagCount');
          const result = this.impl.getTagCount();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.VendorTagOps_GetTagCount_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.VendorTagOps_GetAllTags_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getAllTags');
          const result = this.impl.getAllTags();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.VendorTagOps_GetAllTags_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.VendorTagOps_GetSectionName_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getSectionName');
          const result = this.impl.getSectionName(params.tag);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.VendorTagOps_GetSectionName_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.VendorTagOps_GetTagName_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getTagName');
          const result = this.impl.getTagName(params.tag);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.VendorTagOps_GetTagName_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.VendorTagOps_GetTagType_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getTagType');
          const result = this.impl.getTagType(params.tag);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.VendorTagOps_GetTagType_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

cros.mojom.VendorTagOpsReceiver = cros.mojom.VendorTagOpsReceiver;

cros.mojom.VendorTagOpsPtr = cros.mojom.VendorTagOpsRemote;
cros.mojom.VendorTagOpsRequest = cros.mojom.VendorTagOpsPendingReceiver;


// Interface: CameraModule
mojo.internal.Struct(
    cros.mojom.CameraModule_OpenDevice_ParamsSpec, 'cros.mojom.CameraModule_OpenDevice_Params', [
      mojo.internal.StructField('device_ops_receiver', 0, 0, mojo.internal.InterfaceRequest(cros.mojom.Camera3DeviceOpsRemote), null, false, 0, undefined),
      mojo.internal.StructField('camera_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    cros.mojom.CameraModule_OpenDevice_ResponseParamsSpec, 'cros.mojom.CameraModule_OpenDevice_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraModule_GetNumberOfCameras_ParamsSpec, 'cros.mojom.CameraModule_GetNumberOfCameras_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cros.mojom.CameraModule_GetNumberOfCameras_ResponseParamsSpec, 'cros.mojom.CameraModule_GetNumberOfCameras_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraModule_GetCameraInfo_ParamsSpec, 'cros.mojom.CameraModule_GetCameraInfo_Params', [
      mojo.internal.StructField('camera_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraModule_GetCameraInfo_ResponseParamsSpec, 'cros.mojom.CameraModule_GetCameraInfo_ResponseParams', [
      mojo.internal.StructField('camera_info', 0, 0, cros.mojom.CameraInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('result', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    cros.mojom.CameraModule_SetCallbacks_ParamsSpec, 'cros.mojom.CameraModule_SetCallbacks_Params', [
      mojo.internal.StructField('callbacks', 0, 0, mojo.internal.InterfaceProxy(cros.mojom.CameraModuleCallbacksSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraModule_SetCallbacks_ResponseParamsSpec, 'cros.mojom.CameraModule_SetCallbacks_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraModule_SetTorchMode_ParamsSpec, 'cros.mojom.CameraModule_SetTorchMode_Params', [
      mojo.internal.StructField('camera_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('enabled', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraModule_SetTorchMode_ResponseParamsSpec, 'cros.mojom.CameraModule_SetTorchMode_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraModule_Init_ParamsSpec, 'cros.mojom.CameraModule_Init_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cros.mojom.CameraModule_Init_ResponseParamsSpec, 'cros.mojom.CameraModule_Init_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraModule_GetVendorTagOps_ParamsSpec, 'cros.mojom.CameraModule_GetVendorTagOps_Params', [
      mojo.internal.StructField('vendor_tag_ops_receiver', 0, 0, mojo.internal.InterfaceRequest(cros.mojom.VendorTagOpsSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraModule_GetVendorTagOps_ResponseParamsSpec, 'cros.mojom.CameraModule_GetVendorTagOps_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cros.mojom.CameraModule_SetCallbacksAssociated_ParamsSpec, 'cros.mojom.CameraModule_SetCallbacksAssociated_Params', [
      mojo.internal.StructField('callbacks', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraModule_SetCallbacksAssociated_ResponseParamsSpec, 'cros.mojom.CameraModule_SetCallbacksAssociated_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

cros.mojom.CameraModulePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.CameraModuleRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CameraModule';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.CameraModulePendingReceiver,
      handle);
    this.$ = new cros.mojom.CameraModuleRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.CameraModuleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  openDevice(camera_id, device_ops_receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.CameraModule_OpenDevice_ParamsSpec,
      cros.mojom.CameraModule_OpenDevice_ResponseParamsSpec,
      [camera_id, device_ops_receiver],
      false);
  }

  getNumberOfCameras() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cros.mojom.CameraModule_GetNumberOfCameras_ParamsSpec,
      cros.mojom.CameraModule_GetNumberOfCameras_ResponseParamsSpec,
      [],
      false);
  }

  getCameraInfo(camera_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      cros.mojom.CameraModule_GetCameraInfo_ParamsSpec,
      cros.mojom.CameraModule_GetCameraInfo_ResponseParamsSpec,
      [camera_id],
      false);
  }

  setCallbacks(callbacks) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      cros.mojom.CameraModule_SetCallbacks_ParamsSpec,
      cros.mojom.CameraModule_SetCallbacks_ResponseParamsSpec,
      [callbacks],
      false);
  }

  setTorchMode(camera_id, enabled) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      cros.mojom.CameraModule_SetTorchMode_ParamsSpec,
      cros.mojom.CameraModule_SetTorchMode_ResponseParamsSpec,
      [camera_id, enabled],
      false);
  }

  init() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      cros.mojom.CameraModule_Init_ParamsSpec,
      cros.mojom.CameraModule_Init_ResponseParamsSpec,
      [],
      false);
  }

  getVendorTagOps(vendor_tag_ops_receiver) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      cros.mojom.CameraModule_GetVendorTagOps_ParamsSpec,
      cros.mojom.CameraModule_GetVendorTagOps_ResponseParamsSpec,
      [vendor_tag_ops_receiver],
      false);
  }

  setCallbacksAssociated(callbacks) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      cros.mojom.CameraModule_SetCallbacksAssociated_ParamsSpec,
      cros.mojom.CameraModule_SetCallbacksAssociated_ResponseParamsSpec,
      [callbacks],
      false);
  }

};

cros.mojom.CameraModule.getRemote = function() {
  let remote = new cros.mojom.CameraModuleRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CameraModule',
    'context');
  return remote.$;
};

cros.mojom.CameraModuleReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OpenDevice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cros.mojom.CameraModule_OpenDevice_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenDevice (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetNumberOfCameras
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cros.mojom.CameraModule_GetNumberOfCameras_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNumberOfCameras (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetCameraInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cros.mojom.CameraModule_GetCameraInfo_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetCameraInfo (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetCallbacks
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cros.mojom.CameraModule_SetCallbacks_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCallbacks (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetTorchMode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cros.mojom.CameraModule_SetTorchMode_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTorchMode (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: Init
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cros.mojom.CameraModule_Init_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Init (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: GetVendorTagOps
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cros.mojom.CameraModule_GetVendorTagOps_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetVendorTagOps (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: SetCallbacksAssociated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cros.mojom.CameraModule_SetCallbacksAssociated_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCallbacksAssociated (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
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
          const params = decoder.decodeStructInline(cros.mojom.CameraModule_OpenDevice_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.openDevice');
          const result = this.impl.openDevice(params.camera_id, params.device_ops_receiver);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraModule_OpenDevice_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.CameraModule_GetNumberOfCameras_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getNumberOfCameras');
          const result = this.impl.getNumberOfCameras();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraModule_GetNumberOfCameras_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.CameraModule_GetCameraInfo_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getCameraInfo');
          const result = this.impl.getCameraInfo(params.camera_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraModule_GetCameraInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.CameraModule_SetCallbacks_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setCallbacks');
          const result = this.impl.setCallbacks(params.callbacks);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraModule_SetCallbacks_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.CameraModule_SetTorchMode_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setTorchMode');
          const result = this.impl.setTorchMode(params.camera_id, params.enabled);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraModule_SetTorchMode_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.CameraModule_Init_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.init');
          const result = this.impl.init();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraModule_Init_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.CameraModule_GetVendorTagOps_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getVendorTagOps');
          const result = this.impl.getVendorTagOps(params.vendor_tag_ops_receiver);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraModule_GetVendorTagOps_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.CameraModule_SetCallbacksAssociated_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setCallbacksAssociated');
          const result = this.impl.setCallbacksAssociated(params.callbacks);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraModule_SetCallbacksAssociated_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

cros.mojom.CameraModuleReceiver = cros.mojom.CameraModuleReceiver;

cros.mojom.CameraModulePtr = cros.mojom.CameraModuleRemote;
cros.mojom.CameraModuleRequest = cros.mojom.CameraModulePendingReceiver;

