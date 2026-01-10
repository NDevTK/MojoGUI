// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/chromebox_for_meetings/public/mojom/xu_camera.mojom
// Module: ash.cfm.mojom

'use strict';

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
      [id, guid],
      false);
  }

  mapCtrl(id, mapping_ctrl) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.cfm.mojom.XuCamera_MapCtrl_ParamsSpec,
      ash.cfm.mojom.XuCamera_MapCtrl_ResponseParamsSpec,
      [id, mapping_ctrl],
      false);
  }

  getCtrl(id, ctrl, fn) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.cfm.mojom.XuCamera_GetCtrl_ParamsSpec,
      ash.cfm.mojom.XuCamera_GetCtrl_ResponseParamsSpec,
      [id, ctrl, fn],
      false);
  }

  setCtrl(id, ctrl, data) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetUnitId
        try {
             decoder.decodeStruct(ash.cfm.mojom.XuCamera_GetUnitId_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUnitId (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: MapCtrl
        try {
             decoder.decodeStruct(ash.cfm.mojom.XuCamera_MapCtrl_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MapCtrl (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: GetCtrl
        try {
             decoder.decodeStruct(ash.cfm.mojom.XuCamera_GetCtrl_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetCtrl (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: SetCtrl
        try {
             decoder.decodeStruct(ash.cfm.mojom.XuCamera_SetCtrl_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCtrl (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.cfm.mojom.XuCamera_GetUnitId_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getUnitId');
          const result = this.impl.getUnitId(params.id, params.guid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cfm.mojom.XuCamera_GetUnitId_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.cfm.mojom.XuCamera_MapCtrl_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.mapCtrl');
          const result = this.impl.mapCtrl(params.id, params.mapping_ctrl);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cfm.mojom.XuCamera_MapCtrl_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.cfm.mojom.XuCamera_GetCtrl_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getCtrl');
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
          const params = decoder.decodeStruct(ash.cfm.mojom.XuCamera_SetCtrl_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setCtrl');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.cfm.mojom.XuCameraReceiver = ash.cfm.mojom.XuCameraReceiver;

ash.cfm.mojom.XuCameraPtr = ash.cfm.mojom.XuCameraRemote;
ash.cfm.mojom.XuCameraRequest = ash.cfm.mojom.XuCameraPendingReceiver;

