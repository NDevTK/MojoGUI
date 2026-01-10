// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/chromebox_for_meetings/public/mojom/xu_camera.mojom
// Module: ash.cfm.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cfm = ash.cfm || {};
ash.cfm.mojom = ash.cfm.mojom || {};


// Enum: GetFn
ash.cfm.mojom.GetFn = {
  kCur: 0,
  kMin: 1,
  kMax: 2,
  kDef: 3,
  kRes: 4,
  kLen: 5,
  kInfo: 6,
};
ash.cfm.mojom.GetFnSpec = { $: mojo.internal.Enum() };

// Union: WebcamId
ash.cfm.mojom.WebcamIdSpec = { $: mojo.internal.Union(
    'ash.cfm.mojom.WebcamId', {
      'device_id': {
        'ordinal': 0,
        'type': mojo.internal.String,
      }},
      'dev_path': {
        'ordinal': 1,
        'type': mojo.internal.String,
      }},
    })
};

// Union: CtrlType
ash.cfm.mojom.CtrlTypeSpec = { $: mojo.internal.Union(
    'ash.cfm.mojom.CtrlType', {
      'mapping_ctrl': {
        'ordinal': 0,
        'type': ash.cfm.mojom.ControlMappingSpec,
      }},
      'query_ctrl': {
        'ordinal': 1,
        'type': ash.cfm.mojom.ControlQuerySpec,
      }},
    })
};

// Struct: MenuInfo
ash.cfm.mojom.MenuInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cfm.mojom.MenuInfo',
      packedSize: 24,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: MenuEntries
ash.cfm.mojom.MenuEntriesSpec = {
  $: {
    structSpec: {
      name: 'ash.cfm.mojom.MenuEntries',
      packedSize: 16,
      fields: [
        { name: 'menu_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.cfm.mojom.MenuInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ControlMapping
ash.cfm.mojom.ControlMappingSpec = {
  $: {
    structSpec: {
      name: 'ash.cfm.mojom.ControlMapping',
      packedSize: 48,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
        { name: 'guid', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
        { name: 'selector', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 5, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'offset', packedOffset: 6, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'v4l2_type', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'data_type', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'menu_entries', packedOffset: 32, packedBitOffset: 0, type: ash.cfm.mojom.MenuEntriesSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: ControlQuery
ash.cfm.mojom.ControlQuerySpec = {
  $: {
    structSpec: {
      name: 'ash.cfm.mojom.ControlQuery',
      packedSize: 16,
      fields: [
        { name: 'unit_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'selector', packedOffset: 1, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: XuCamera
ash.cfm.mojom.XuCamera = {};

ash.cfm.mojom.XuCameraPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cfm.mojom.XuCameraRemote = class {
  static get $interfaceName() {
    return 'ash.cfm.mojom.XuCamera';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cfm.mojom.XuCameraPendingReceiver,
      handle);
    this.$ = new ash.cfm.mojom.XuCameraRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cfm.mojom.XuCameraRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getUnitId(id, guid) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.cfm.mojom.XuCamera_GetUnitId_ParamsSpec,
      ash.cfm.mojom.XuCamera_GetUnitId_ResponseParamsSpec,
      [id, guid]);
  }

  mapCtrl(id, mapping_ctrl) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.cfm.mojom.XuCamera_MapCtrl_ParamsSpec,
      ash.cfm.mojom.XuCamera_MapCtrl_ResponseParamsSpec,
      [id, mapping_ctrl]);
  }

  getCtrl(id, ctrl, fn) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.cfm.mojom.XuCamera_GetCtrl_ParamsSpec,
      ash.cfm.mojom.XuCamera_GetCtrl_ResponseParamsSpec,
      [id, ctrl, fn]);
  }

  setCtrl(id, ctrl, data) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.cfm.mojom.XuCamera_SetCtrl_ParamsSpec,
      ash.cfm.mojom.XuCamera_SetCtrl_ResponseParamsSpec,
      [id, ctrl, data]);
  }

};

ash.cfm.mojom.XuCamera.getRemote = function() {
  let remote = new ash.cfm.mojom.XuCameraRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cfm.mojom.XuCamera',
    'context');
  return remote.$;
};

// ParamsSpec for GetUnitId
ash.cfm.mojom.XuCamera_GetUnitId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cfm.mojom.XuCamera.GetUnitId_Params',
      packedSize: 32,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: ash.cfm.mojom.WebcamIdSpec, nullable: false, minVersion: 0 },
        { name: 'guid', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

ash.cfm.mojom.XuCamera_GetUnitId_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'unit_id', packedOffset: 1, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for MapCtrl
ash.cfm.mojom.XuCamera_MapCtrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cfm.mojom.XuCamera.MapCtrl_Params',
      packedSize: 32,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: ash.cfm.mojom.WebcamIdSpec, nullable: false, minVersion: 0 },
        { name: 'mapping_ctrl', packedOffset: 16, packedBitOffset: 0, type: ash.cfm.mojom.ControlMappingSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

ash.cfm.mojom.XuCamera_MapCtrl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetCtrl
ash.cfm.mojom.XuCamera_GetCtrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cfm.mojom.XuCamera.GetCtrl_Params',
      packedSize: 48,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: ash.cfm.mojom.WebcamIdSpec, nullable: false, minVersion: 0 },
        { name: 'ctrl', packedOffset: 16, packedBitOffset: 0, type: ash.cfm.mojom.CtrlTypeSpec, nullable: false, minVersion: 0 },
        { name: 'fn', packedOffset: 32, packedBitOffset: 0, type: ash.cfm.mojom.GetFnSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

ash.cfm.mojom.XuCamera_GetCtrl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetCtrl
ash.cfm.mojom.XuCamera_SetCtrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cfm.mojom.XuCamera.SetCtrl_Params',
      packedSize: 48,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: ash.cfm.mojom.WebcamIdSpec, nullable: false, minVersion: 0 },
        { name: 'ctrl', packedOffset: 16, packedBitOffset: 0, type: ash.cfm.mojom.CtrlTypeSpec, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

ash.cfm.mojom.XuCamera_SetCtrl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.cfm.mojom.XuCameraPtr = ash.cfm.mojom.XuCameraRemote;
ash.cfm.mojom.XuCameraRequest = ash.cfm.mojom.XuCameraPendingReceiver;

