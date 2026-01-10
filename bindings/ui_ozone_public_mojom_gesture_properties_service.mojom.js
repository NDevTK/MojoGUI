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
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ui.ozone.mojom.GesturePropertiesService_GetProperty_ResponseParamsSpec, 'ui.ozone.mojom.GesturePropertiesService_GetProperty_ResponseParams', [
      mojo.internal.StructField('is_read_only', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, ui.ozone.mojom.GesturePropValueSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ui.ozone.mojom.GesturePropertiesService_SetProperty_ParamsSpec, 'ui.ozone.mojom.GesturePropertiesService_SetProperty_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 16, 0, ui.ozone.mojom.GesturePropValueSpec.$, null, false, 0, undefined),
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

ui.ozone.mojom.GesturePropertiesServicePtr = ui.ozone.mojom.GesturePropertiesServiceRemote;
ui.ozone.mojom.GesturePropertiesServiceRequest = ui.ozone.mojom.GesturePropertiesServicePendingReceiver;

