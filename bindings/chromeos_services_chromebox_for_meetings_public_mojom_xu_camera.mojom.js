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

// Interface: XuCamera
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
      ash.cfm.mojom.XuCamera_GetUnitId_ParamsSpec.$,
      ash.cfm.mojom.XuCamera_GetUnitId_ResponseParamsSpec.$,
      [id, guid]);
  }

  mapCtrl(id, mapping_ctrl) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.cfm.mojom.XuCamera_MapCtrl_ParamsSpec.$,
      ash.cfm.mojom.XuCamera_MapCtrl_ResponseParamsSpec.$,
      [id, mapping_ctrl]);
  }

  getCtrl(id, ctrl, fn) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.cfm.mojom.XuCamera_GetCtrl_ParamsSpec.$,
      ash.cfm.mojom.XuCamera_GetCtrl_ResponseParamsSpec.$,
      [id, ctrl, fn]);
  }

  setCtrl(id, ctrl, data) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.cfm.mojom.XuCamera_SetCtrl_ParamsSpec.$,
      ash.cfm.mojom.XuCamera_SetCtrl_ResponseParamsSpec.$,
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
}};

// ParamsSpec for GetUnitId
ash.cfm.mojom.XuCamera_GetUnitId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cfm.mojom.XuCamera.GetUnitId_Params',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'guid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

ash.cfm.mojom.XuCamera_GetUnitId_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cfm.mojom.XuCamera.GetUnitId_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'unit_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for MapCtrl
ash.cfm.mojom.XuCamera_MapCtrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cfm.mojom.XuCamera.MapCtrl_Params',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'mapping_ctrl', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

ash.cfm.mojom.XuCamera_MapCtrl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cfm.mojom.XuCamera.MapCtrl_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for GetCtrl
ash.cfm.mojom.XuCamera_GetCtrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cfm.mojom.XuCamera.GetCtrl_Params',
      packedSize: 32,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'ctrl', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'fn', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

ash.cfm.mojom.XuCamera_GetCtrl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cfm.mojom.XuCamera.GetCtrl_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetCtrl
ash.cfm.mojom.XuCamera_SetCtrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cfm.mojom.XuCamera.SetCtrl_Params',
      packedSize: 32,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'ctrl', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

ash.cfm.mojom.XuCamera_SetCtrl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cfm.mojom.XuCamera.SetCtrl_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
ash.cfm.mojom.XuCameraPtr = ash.cfm.mojom.XuCameraRemote;
ash.cfm.mojom.XuCameraRequest = ash.cfm.mojom.XuCameraPendingReceiver;

