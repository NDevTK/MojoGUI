// Auto-generated MojoJS binding
// Source: chromium_src/ui/ozone/public/mojom/gesture_properties_service.mojom
// Module: ui.ozone.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.ozone = ui.ozone || {};
ui.ozone.mojom = ui.ozone.mojom || {};


// Enum: SetGesturePropErrorCode
ui.ozone.mojom.SetGesturePropErrorCode = {
  SUCCESS: 0,
  UNKNOWN_ERROR: 1,
  NOT_FOUND: 2,
  READ_ONLY: 3,
  TYPE_MISMATCH: 4,
  SIZE_MISMATCH: 5,
};

// Interface: GesturePropertiesService
ui.ozone.mojom.GesturePropertiesService = {};

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
      []);
  }

  listProperties(device_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ui.ozone.mojom.GesturePropertiesService_ListProperties_ParamsSpec,
      ui.ozone.mojom.GesturePropertiesService_ListProperties_ResponseParamsSpec,
      [device_id]);
  }

  getProperty(device_id, name) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ui.ozone.mojom.GesturePropertiesService_GetProperty_ParamsSpec,
      ui.ozone.mojom.GesturePropertiesService_GetProperty_ResponseParamsSpec,
      [device_id, name]);
  }

  setProperty(device_id, name, value) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ui.ozone.mojom.GesturePropertiesService_SetProperty_ParamsSpec,
      ui.ozone.mojom.GesturePropertiesService_SetProperty_ResponseParamsSpec,
      [device_id, name, value]);
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

// ParamsSpec for ListDevices
ui.ozone.mojom.GesturePropertiesService_ListDevices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.GesturePropertiesService.ListDevices_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ui.ozone.mojom.GesturePropertiesService_ListDevices_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.GesturePropertiesService.ListDevices_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ListProperties
ui.ozone.mojom.GesturePropertiesService_ListProperties_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.GesturePropertiesService.ListProperties_Params',
      packedSize: 16,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ui.ozone.mojom.GesturePropertiesService_ListProperties_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.GesturePropertiesService.ListProperties_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'properties', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetProperty
ui.ozone.mojom.GesturePropertiesService_GetProperty_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.GesturePropertiesService.GetProperty_Params',
      packedSize: 24,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ui.ozone.mojom.GesturePropertiesService_GetProperty_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.GesturePropertiesService.GetProperty_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'is_read_only', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: ui.ozone.mojom.GesturePropValueSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetProperty
ui.ozone.mojom.GesturePropertiesService_SetProperty_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.GesturePropertiesService.SetProperty_Params',
      packedSize: 32,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'value', packedOffset: 16, packedBitOffset: 0, type: ui.ozone.mojom.GesturePropValueSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ui.ozone.mojom.GesturePropertiesService_SetProperty_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.GesturePropertiesService.SetProperty_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: ui.ozone.mojom.SetGesturePropErrorCodeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ui.ozone.mojom.GesturePropertiesServicePtr = ui.ozone.mojom.GesturePropertiesServiceRemote;
ui.ozone.mojom.GesturePropertiesServiceRequest = ui.ozone.mojom.GesturePropertiesServicePendingReceiver;

