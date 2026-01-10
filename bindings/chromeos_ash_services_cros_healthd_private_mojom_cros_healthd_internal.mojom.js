// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/cros_healthd/private/mojom/cros_healthd_internal.mojom
// Module: ash.cros_healthd.internal.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cros_healthd = ash.cros_healthd || {};
ash.cros_healthd.internal = ash.cros_healthd.internal || {};
ash.cros_healthd.internal.mojom = ash.cros_healthd.internal.mojom || {};


// Enum: ConnectionType
ash.cros_healthd.internal.mojom.ConnectionType = {
  kInternal: 0,
  kUSB: 1,
  kBluetooth: 2,
  kUnknown: 3,
};
ash.cros_healthd.internal.mojom.ConnectionTypeSpec = { $: mojo.internal.Enum() };

// Struct: TouchscreenDevice
ash.cros_healthd.internal.mojom.TouchscreenDeviceSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.internal.mojom.TouchscreenDevice',
      packedSize: 24,
      fields: [
        { name: 'input_device', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.internal.mojom.InputDeviceSpec, nullable: false, minVersion: 0 },
        { name: 'touch_points', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'has_stylus', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'has_stylus_garage_switch', packedOffset: 12, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: InputDevice
ash.cros_healthd.internal.mojom.InputDeviceSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.internal.mojom.InputDevice',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'kUnmappedEnumField', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: ChromiumDataCollector
ash.cros_healthd.internal.mojom.ChromiumDataCollector = {};

ash.cros_healthd.internal.mojom.ChromiumDataCollector_GetTouchscreenDevices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.internal.mojom.ChromiumDataCollector_GetTouchscreenDevices_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.internal.mojom.ChromiumDataCollector_GetTouchpadLibraryName_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.internal.mojom.ChromiumDataCollector_GetTouchpadLibraryName_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.internal.mojom.ChromiumDataCollector_SetPrivacyScreenState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.internal.mojom.ChromiumDataCollector_SetPrivacyScreenState_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.internal.mojom.ChromiumDataCollector_DEPRECATED_SetAudioOutputMute_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.internal.mojom.ChromiumDataCollector_DEPRECATED_SetAudioOutputMute_Params',
      packedSize: 16,
      fields: [
        { name: 'mute_on', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.internal.mojom.ChromiumDataCollectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cros_healthd.internal.mojom.ChromiumDataCollectorRemote = class {
  static get $interfaceName() {
    return 'ash.cros_healthd.internal.mojom.ChromiumDataCollector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cros_healthd.internal.mojom.ChromiumDataCollectorPendingReceiver,
      handle);
    this.$ = new ash.cros_healthd.internal.mojom.ChromiumDataCollectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cros_healthd.internal.mojom.ChromiumDataCollectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getTouchscreenDevices() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.cros_healthd.internal.mojom.ChromiumDataCollector_GetTouchscreenDevices_ParamsSpec,
      ash.cros_healthd.internal.mojom.ChromiumDataCollector_GetTouchscreenDevices_ResponseParamsSpec,
      []);
  }

  getTouchpadLibraryName() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.cros_healthd.internal.mojom.ChromiumDataCollector_GetTouchpadLibraryName_ParamsSpec,
      ash.cros_healthd.internal.mojom.ChromiumDataCollector_GetTouchpadLibraryName_ResponseParamsSpec,
      []);
  }

  setPrivacyScreenState(state) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.cros_healthd.internal.mojom.ChromiumDataCollector_SetPrivacyScreenState_ParamsSpec,
      ash.cros_healthd.internal.mojom.ChromiumDataCollector_SetPrivacyScreenState_ResponseParamsSpec,
      [state]);
  }

  dEPRECATED_SetAudioOutputMute(mute_on) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.cros_healthd.internal.mojom.ChromiumDataCollector_DEPRECATED_SetAudioOutputMute_ParamsSpec,
      ash.cros_healthd.internal.mojom.ChromiumDataCollector_DEPRECATED_SetAudioOutputMute_ResponseParamsSpec,
      [mute_on]);
  }

};

ash.cros_healthd.internal.mojom.ChromiumDataCollector.getRemote = function() {
  let remote = new ash.cros_healthd.internal.mojom.ChromiumDataCollectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cros_healthd.internal.mojom.ChromiumDataCollector',
    'context');
  return remote.$;
};

// ParamsSpec for GetTouchscreenDevices
ash.cros_healthd.internal.mojom.ChromiumDataCollector_GetTouchscreenDevices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.internal.mojom.ChromiumDataCollector.GetTouchscreenDevices_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.internal.mojom.ChromiumDataCollector_GetTouchscreenDevices_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.internal.mojom.ChromiumDataCollector.GetTouchscreenDevices_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'devices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.cros_healthd.internal.mojom.TouchscreenDeviceSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetTouchpadLibraryName
ash.cros_healthd.internal.mojom.ChromiumDataCollector_GetTouchpadLibraryName_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.internal.mojom.ChromiumDataCollector.GetTouchpadLibraryName_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.internal.mojom.ChromiumDataCollector_GetTouchpadLibraryName_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.internal.mojom.ChromiumDataCollector.GetTouchpadLibraryName_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'library_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetPrivacyScreenState
ash.cros_healthd.internal.mojom.ChromiumDataCollector_SetPrivacyScreenState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.internal.mojom.ChromiumDataCollector.SetPrivacyScreenState_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.internal.mojom.ChromiumDataCollector_SetPrivacyScreenState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.internal.mojom.ChromiumDataCollector.SetPrivacyScreenState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DEPRECATED_SetAudioOutputMute
ash.cros_healthd.internal.mojom.ChromiumDataCollector_DEPRECATED_SetAudioOutputMute_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.internal.mojom.ChromiumDataCollector.DEPRECATED_SetAudioOutputMute_Params',
      packedSize: 16,
      fields: [
        { name: 'mute_on', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.cros_healthd.internal.mojom.ChromiumDataCollector_DEPRECATED_SetAudioOutputMute_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.internal.mojom.ChromiumDataCollector.DEPRECATED_SetAudioOutputMute_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.cros_healthd.internal.mojom.ChromiumDataCollectorPtr = ash.cros_healthd.internal.mojom.ChromiumDataCollectorRemote;
ash.cros_healthd.internal.mojom.ChromiumDataCollectorRequest = ash.cros_healthd.internal.mojom.ChromiumDataCollectorPendingReceiver;

