// Auto-generated MojoJS binding
// Source: chromium_src/ui/ozone/public/mojom/gesture_properties_service.mojom
// Module: ui.ozone.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.ozone = ui.ozone || {};
ui.ozone.mojom = ui.ozone.mojom || {};

ui.ozone.mojom.SetGesturePropErrorCodeSpec = { $: mojo.internal.Enum() };
ui.ozone.mojom.GesturePropValueSpec = { $: {} };
ui.ozone.mojom.GesturePropertiesService = {};
ui.ozone.mojom.GesturePropertiesService.$interfaceName = 'ui.ozone.mojom.GesturePropertiesService';
ui.ozone.mojom.GesturePropertiesService_ListDevices_ParamsSpec = { $: {} };
ui.ozone.mojom.GesturePropertiesService_ListDevices_ResponseParamsSpec = { $: {} };
ui.ozone.mojom.GesturePropertiesService_ListProperties_ParamsSpec = { $: {} };
ui.ozone.mojom.GesturePropertiesService_ListProperties_ResponseParamsSpec = { $: {} };
ui.ozone.mojom.GesturePropertiesService_GetProperty_ParamsSpec = { $: {} };
ui.ozone.mojom.GesturePropertiesService_GetProperty_ResponseParamsSpec = { $: {} };
ui.ozone.mojom.GesturePropertiesService_SetProperty_ParamsSpec = { $: {} };
ui.ozone.mojom.GesturePropertiesService_SetProperty_ResponseParamsSpec = { $: {} };

// Enum: SetGesturePropErrorCode
ui.ozone.mojom.SetGesturePropErrorCode = {
  SUCCESS: 0,
  UNKNOWN_ERROR: 1,
  NOT_FOUND: 2,
  READ_ONLY: 3,
  TYPE_MISMATCH: 4,
  SIZE_MISMATCH: 5,
};

// Union: GesturePropValue
mojo.internal.Union(
    ui.ozone.mojom.GesturePropValueSpec, 'ui.ozone.mojom.GesturePropValue', {
      'ints': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.Int32, false),
        'nullable': false,
      },
      'shorts': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo.internal.Int16, false),
        'nullable': false,
      },
      'bools': {
        'ordinal': 2,
        'type': mojo.internal.Array(mojo.internal.Bool, false),
        'nullable': false,
      },
      'str': {
        'ordinal': 3,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'reals': {
        'ordinal': 4,
        'type': mojo.internal.Array(mojo.internal.Double, false),
        'nullable': false,
      },
    });

// Interface: GesturePropertiesService
mojo.internal.Struct(
    ui.ozone.mojom.GesturePropertiesService_ListDevices_ParamsSpec, 'ui.ozone.mojom.GesturePropertiesService_ListDevices_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ui.ozone.mojom.GesturePropertiesService_ListDevices_ResponseParamsSpec, 'ui.ozone.mojom.GesturePropertiesService_ListDevices_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Map(mojo.internal.Int32, mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ui.ozone.mojom.GesturePropertiesService_ListProperties_ParamsSpec, 'ui.ozone.mojom.GesturePropertiesService_ListProperties_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ui.ozone.mojom.GesturePropertiesService_ListProperties_ResponseParamsSpec, 'ui.ozone.mojom.GesturePropertiesService_ListProperties_ResponseParams', [
      mojo.internal.StructField('properties', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ui.ozone.mojom.GesturePropertiesService_GetProperty_ParamsSpec, 'ui.ozone.mojom.GesturePropertiesService_GetProperty_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('device_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ui.ozone.mojom.GesturePropertiesService_GetProperty_ResponseParamsSpec, 'ui.ozone.mojom.GesturePropertiesService_GetProperty_ResponseParams', [
      mojo.internal.StructField('value', 0, 0, ui.ozone.mojom.GesturePropValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('is_read_only', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ui.ozone.mojom.GesturePropertiesService_SetProperty_ParamsSpec, 'ui.ozone.mojom.GesturePropertiesService_SetProperty_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, ui.ozone.mojom.GesturePropValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('device_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ui.ozone.mojom.GesturePropertiesService_SetProperty_ResponseParamsSpec, 'ui.ozone.mojom.GesturePropertiesService_SetProperty_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, ui.ozone.mojom.SetGesturePropErrorCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ui.ozone.mojom.GesturePropertiesServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ui.ozone.mojom.GesturePropertiesServiceRemote = class {
  static get $interfaceName() {
    return 'ui.ozone.mojom.GesturePropertiesService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ui.ozone.mojom.GesturePropertiesServicePendingReceiver,
      handle);
    this.$ = new ui.ozone.mojom.GesturePropertiesServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ui.ozone.mojom.GesturePropertiesServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  listDevices() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ui.ozone.mojom.GesturePropertiesService_ListDevices_ParamsSpec,
      ui.ozone.mojom.GesturePropertiesService_ListDevices_ResponseParamsSpec,
      [],
      false);
  }

  listProperties(device_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ui.ozone.mojom.GesturePropertiesService_ListProperties_ParamsSpec,
      ui.ozone.mojom.GesturePropertiesService_ListProperties_ResponseParamsSpec,
      [device_id],
      false);
  }

  getProperty(device_id, name) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ui.ozone.mojom.GesturePropertiesService_GetProperty_ParamsSpec,
      ui.ozone.mojom.GesturePropertiesService_GetProperty_ResponseParamsSpec,
      [device_id, name],
      false);
  }

  setProperty(device_id, name, value) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ui.ozone.mojom.GesturePropertiesService_SetProperty_ParamsSpec,
      ui.ozone.mojom.GesturePropertiesService_SetProperty_ResponseParamsSpec,
      [device_id, name, value],
      false);
  }

};

ui.ozone.mojom.GesturePropertiesService.getRemote = function() {
  let remote = new ui.ozone.mojom.GesturePropertiesServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ui.ozone.mojom.GesturePropertiesService',
    'context');
  return remote.$;
};

ui.ozone.mojom.GesturePropertiesServiceReceiver = class {
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ui.ozone.mojom.GesturePropertiesService_ListDevices_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.listDevices');
          const result = this.impl.listDevices();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ui.ozone.mojom.GesturePropertiesService_ListDevices_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ui.ozone.mojom.GesturePropertiesService_ListProperties_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.listProperties');
          const result = this.impl.listProperties(params.device_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ui.ozone.mojom.GesturePropertiesService_ListProperties_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ui.ozone.mojom.GesturePropertiesService_GetProperty_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getProperty');
          const result = this.impl.getProperty(params.device_id, params.name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ui.ozone.mojom.GesturePropertiesService_GetProperty_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ui.ozone.mojom.GesturePropertiesService_SetProperty_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setProperty');
          const result = this.impl.setProperty(params.device_id, params.name, params.value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ui.ozone.mojom.GesturePropertiesService_SetProperty_ResponseParamsSpec);
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

ui.ozone.mojom.GesturePropertiesServiceReceiver = ui.ozone.mojom.GesturePropertiesServiceReceiver;

ui.ozone.mojom.GesturePropertiesServicePtr = ui.ozone.mojom.GesturePropertiesServiceRemote;
ui.ozone.mojom.GesturePropertiesServiceRequest = ui.ozone.mojom.GesturePropertiesServicePendingReceiver;

