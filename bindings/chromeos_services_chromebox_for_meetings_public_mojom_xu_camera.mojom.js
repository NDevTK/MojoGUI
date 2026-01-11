// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/chromebox_for_meetings/public/mojom/xu_camera.mojom
// Module: ash.cfm.mojom

// Module namespace
var ash = ash || {};
ash.cfm = ash.cfm || {};
ash.cfm.mojom = ash.cfm.mojom || {};

ash.cfm.mojom.GetFnSpec = { $: mojo.internal.Enum() };
ash.cfm.mojom.WebcamIdSpec = { $: {} };
ash.cfm.mojom.CtrlTypeSpec = { $: {} };
ash.cfm.mojom.MenuInfoSpec = { $: {} };
ash.cfm.mojom.MenuEntriesSpec = { $: {} };
ash.cfm.mojom.ControlMappingSpec = { $: {} };
ash.cfm.mojom.ControlQuerySpec = { $: {} };
ash.cfm.mojom.XuCamera = {};
ash.cfm.mojom.XuCamera.$interfaceName = 'ash.cfm.mojom.XuCamera';
ash.cfm.mojom.XuCamera_GetUnitId_ParamsSpec = { $: {} };
ash.cfm.mojom.XuCamera_GetUnitId_ResponseParamsSpec = { $: {} };
ash.cfm.mojom.XuCamera_MapCtrl_ParamsSpec = { $: {} };
ash.cfm.mojom.XuCamera_MapCtrl_ResponseParamsSpec = { $: {} };
ash.cfm.mojom.XuCamera_GetCtrl_ParamsSpec = { $: {} };
ash.cfm.mojom.XuCamera_GetCtrl_ResponseParamsSpec = { $: {} };
ash.cfm.mojom.XuCamera_SetCtrl_ParamsSpec = { $: {} };
ash.cfm.mojom.XuCamera_SetCtrl_ResponseParamsSpec = { $: {} };

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

// Union: WebcamId
mojo.internal.Union(
    ash.cfm.mojom.WebcamIdSpec, 'ash.cfm.mojom.WebcamId', {
      'device_id': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'dev_path': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Union: CtrlType
mojo.internal.Union(
    ash.cfm.mojom.CtrlTypeSpec, 'ash.cfm.mojom.CtrlType', {
      'mapping_ctrl': {
        'ordinal': 0,
        'type': ash.cfm.mojom.ControlMappingSpec.$,
        'nullable': false,
      },
      'query_ctrl': {
        'ordinal': 1,
        'type': ash.cfm.mojom.ControlQuerySpec.$,
        'nullable': false,
      },
    });

// Struct: MenuInfo
mojo.internal.Struct(
    ash.cfm.mojom.MenuInfoSpec, 'ash.cfm.mojom.MenuInfo', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: MenuEntries
mojo.internal.Struct(
    ash.cfm.mojom.MenuEntriesSpec, 'ash.cfm.mojom.MenuEntries', [
      mojo.internal.StructField('menu_info', 0, 0, mojo.internal.Array(ash.cfm.mojom.MenuInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ControlMapping
mojo.internal.Struct(
    ash.cfm.mojom.ControlMappingSpec, 'ash.cfm.mojom.ControlMapping', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('guid', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('menu_entries', 16, 0, ash.cfm.mojom.MenuEntriesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('id', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('v4l2_type', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('data_type', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('selector', 36, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('size', 37, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('offset', 38, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: ControlQuery
mojo.internal.Struct(
    ash.cfm.mojom.ControlQuerySpec, 'ash.cfm.mojom.ControlQuery', [
      mojo.internal.StructField('unit_id', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('selector', 1, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: XuCamera
mojo.internal.Struct(
    ash.cfm.mojom.XuCamera_GetUnitId_ParamsSpec, 'ash.cfm.mojom.XuCamera_GetUnitId_Params', [
      mojo.internal.StructField('id', 0, 0, ash.cfm.mojom.WebcamIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('guid', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.cfm.mojom.XuCamera_GetUnitId_ResponseParamsSpec, 'ash.cfm.mojom.XuCamera_GetUnitId_ResponseParams', [
      mojo.internal.StructField('error_code', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('unit_id', 1, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cfm.mojom.XuCamera_MapCtrl_ParamsSpec, 'ash.cfm.mojom.XuCamera_MapCtrl_Params', [
      mojo.internal.StructField('id', 0, 0, ash.cfm.mojom.WebcamIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mapping_ctrl', 8, 0, ash.cfm.mojom.ControlMappingSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.cfm.mojom.XuCamera_MapCtrl_ResponseParamsSpec, 'ash.cfm.mojom.XuCamera_MapCtrl_ResponseParams', [
      mojo.internal.StructField('error_code', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cfm.mojom.XuCamera_GetCtrl_ParamsSpec, 'ash.cfm.mojom.XuCamera_GetCtrl_Params', [
      mojo.internal.StructField('id', 0, 0, ash.cfm.mojom.WebcamIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ctrl', 8, 0, ash.cfm.mojom.CtrlTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('fn', 16, 0, ash.cfm.mojom.GetFnSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.cfm.mojom.XuCamera_GetCtrl_ResponseParamsSpec, 'ash.cfm.mojom.XuCamera_GetCtrl_ResponseParams', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('error_code', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.cfm.mojom.XuCamera_SetCtrl_ParamsSpec, 'ash.cfm.mojom.XuCamera_SetCtrl_Params', [
      mojo.internal.StructField('id', 0, 0, ash.cfm.mojom.WebcamIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ctrl', 8, 0, ash.cfm.mojom.CtrlTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.cfm.mojom.XuCamera_SetCtrl_ResponseParamsSpec, 'ash.cfm.mojom.XuCamera_SetCtrl_ResponseParams', [
      mojo.internal.StructField('error_code', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

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
  getUnitId(id, guid) {
    return this.$.getUnitId(id, guid);
  }
  mapCtrl(id, mapping_ctrl) {
    return this.$.mapCtrl(id, mapping_ctrl);
  }
  getCtrl(id, ctrl, fn) {
    return this.$.getCtrl(id, ctrl, fn);
  }
  setCtrl(id, ctrl, data) {
    return this.$.setCtrl(id, ctrl, data);
  }
};

ash.cfm.mojom.XuCameraRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('XuCamera', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getUnitId(id, guid) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.cfm.mojom.XuCamera_GetUnitId_ParamsSpec,
      ash.cfm.mojom.XuCamera_GetUnitId_ResponseParamsSpec,
      [id, guid],
      false);
  }

  mapCtrl(id, mapping_ctrl) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.cfm.mojom.XuCamera_MapCtrl_ParamsSpec,
      ash.cfm.mojom.XuCamera_MapCtrl_ResponseParamsSpec,
      [id, mapping_ctrl],
      false);
  }

  getCtrl(id, ctrl, fn) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.cfm.mojom.XuCamera_GetCtrl_ParamsSpec,
      ash.cfm.mojom.XuCamera_GetCtrl_ResponseParamsSpec,
      [id, ctrl, fn],
      false);
  }

  setCtrl(id, ctrl, data) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.cfm.mojom.XuCamera_SetCtrl_ParamsSpec,
      ash.cfm.mojom.XuCamera_SetCtrl_ResponseParamsSpec,
      [id, ctrl, data],
      false);
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

ash.cfm.mojom.XuCameraReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('XuCamera', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cfm.mojom.XuCamera_GetUnitId_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cfm.mojom.XuCamera_MapCtrl_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cfm.mojom.XuCamera_GetCtrl_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cfm.mojom.XuCamera_SetCtrl_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cfm.mojom.XuCamera_GetUnitId_ParamsSpec.$.structSpec);
          const result = this.impl.getUnitId(params.id, params.guid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cfm.mojom.XuCamera_GetUnitId_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cfm.mojom.XuCamera_MapCtrl_ParamsSpec.$.structSpec);
          const result = this.impl.mapCtrl(params.id, params.mapping_ctrl);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cfm.mojom.XuCamera_MapCtrl_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cfm.mojom.XuCamera_GetCtrl_ParamsSpec.$.structSpec);
          const result = this.impl.getCtrl(params.id, params.ctrl, params.fn);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cfm.mojom.XuCamera_GetCtrl_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cfm.mojom.XuCamera_SetCtrl_ParamsSpec.$.structSpec);
          const result = this.impl.setCtrl(params.id, params.ctrl, params.data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cfm.mojom.XuCamera_SetCtrl_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.cfm.mojom.XuCameraReceiver = ash.cfm.mojom.XuCameraReceiver;

ash.cfm.mojom.XuCameraPtr = ash.cfm.mojom.XuCameraRemote;
ash.cfm.mojom.XuCameraRequest = ash.cfm.mojom.XuCameraPendingReceiver;

