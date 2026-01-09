// Auto-generated MojoJS binding
// Source: chromium_src/ui/ozone/platform/drm/mojom/drm_device.mojom
// Module: ui.ozone.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.ozone = ui.ozone || {};
ui.ozone.mojom = ui.ozone.mojom || {};


// Interface: DrmDevice
ui.ozone.mojom.DrmDevice = {};

ui.ozone.mojom.DrmDevicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ui.ozone.mojom.DrmDeviceRemote = class {
  static get $interfaceName() {
    return 'ui.ozone.mojom.DrmDevice';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ui.ozone.mojom.DrmDevicePendingReceiver,
      handle);
    this.$ = new ui.ozone.mojom.DrmDeviceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ui.ozone.mojom.DrmDeviceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createWindow(widget, initial_bounds) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ui.ozone.mojom.DrmDevice_CreateWindow_ParamsSpec,
      null,
      [widget, initial_bounds]);
  }

  destroyWindow(widget) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ui.ozone.mojom.DrmDevice_DestroyWindow_ParamsSpec,
      null,
      [widget]);
  }

  setWindowBounds(widget, bounds) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ui.ozone.mojom.DrmDevice_SetWindowBounds_ParamsSpec,
      null,
      [widget, bounds]);
  }

  takeDisplayControl() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ui.ozone.mojom.DrmDevice_TakeDisplayControl_ParamsSpec,
      ui.ozone.mojom.DrmDevice_TakeDisplayControl_ResponseParamsSpec,
      []);
  }

  relinquishDisplayControl() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ui.ozone.mojom.DrmDevice_RelinquishDisplayControl_ParamsSpec,
      ui.ozone.mojom.DrmDevice_RelinquishDisplayControl_ResponseParamsSpec,
      []);
  }

  refreshNativeDisplays() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ui.ozone.mojom.DrmDevice_RefreshNativeDisplays_ParamsSpec,
      ui.ozone.mojom.DrmDevice_RefreshNativeDisplays_ResponseParamsSpec,
      []);
  }

  addGraphicsDevice(path, fd_mojo_handle) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ui.ozone.mojom.DrmDevice_AddGraphicsDevice_ParamsSpec,
      null,
      [path, fd_mojo_handle]);
  }

  removeGraphicsDevice(path) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ui.ozone.mojom.DrmDevice_RemoveGraphicsDevice_ParamsSpec,
      null,
      [path]);
  }

  shouldDisplayEventTriggerConfiguration(event_props) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ui.ozone.mojom.DrmDevice_ShouldDisplayEventTriggerConfiguration_ParamsSpec,
      ui.ozone.mojom.DrmDevice_ShouldDisplayEventTriggerConfiguration_ResponseParamsSpec,
      [event_props]);
  }

  configureNativeDisplays(config_requests, modeset_flags) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ui.ozone.mojom.DrmDevice_ConfigureNativeDisplays_ParamsSpec,
      ui.ozone.mojom.DrmDevice_ConfigureNativeDisplays_ResponseParamsSpec,
      [config_requests, modeset_flags]);
  }

  setHdcpKeyProp(display_id, key) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ui.ozone.mojom.DrmDevice_SetHdcpKeyProp_ParamsSpec,
      ui.ozone.mojom.DrmDevice_SetHdcpKeyProp_ResponseParamsSpec,
      [display_id, key]);
  }

  getHDCPState(display_id) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ui.ozone.mojom.DrmDevice_GetHDCPState_ParamsSpec,
      ui.ozone.mojom.DrmDevice_GetHDCPState_ResponseParamsSpec,
      [display_id]);
  }

  setHDCPState(display_id, state, protection_method) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      ui.ozone.mojom.DrmDevice_SetHDCPState_ParamsSpec,
      ui.ozone.mojom.DrmDevice_SetHDCPState_ResponseParamsSpec,
      [display_id, state, protection_method]);
  }

  setColorTemperatureAdjustment(display_id, cta) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      ui.ozone.mojom.DrmDevice_SetColorTemperatureAdjustment_ParamsSpec,
      null,
      [display_id, cta]);
  }

  setColorCalibration(display_id, calibration) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      ui.ozone.mojom.DrmDevice_SetColorCalibration_ParamsSpec,
      null,
      [display_id, calibration]);
  }

  setGammaAdjustment(display_id, adjustment) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      ui.ozone.mojom.DrmDevice_SetGammaAdjustment_ParamsSpec,
      null,
      [display_id, adjustment]);
  }

  setPrivacyScreen(display_id, enabled) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      ui.ozone.mojom.DrmDevice_SetPrivacyScreen_ParamsSpec,
      ui.ozone.mojom.DrmDevice_SetPrivacyScreen_ResponseParamsSpec,
      [display_id, enabled]);
  }

  getSeamlessRefreshRates(display_id) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      ui.ozone.mojom.DrmDevice_GetSeamlessRefreshRates_ParamsSpec,
      ui.ozone.mojom.DrmDevice_GetSeamlessRefreshRates_ResponseParamsSpec,
      [display_id]);
  }

  getDeviceCursor(cursor) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      ui.ozone.mojom.DrmDevice_GetDeviceCursor_ParamsSpec,
      null,
      [cursor]);
  }

};

ui.ozone.mojom.DrmDevice.getRemote = function() {
  let remote = new ui.ozone.mojom.DrmDeviceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ui.ozone.mojom.DrmDevice',
    'context');
  return remote.$;
};

// ParamsSpec for CreateWindow
ui.ozone.mojom.DrmDevice_CreateWindow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.DrmDevice.CreateWindow_Params',
      packedSize: 24,
      fields: [
        { name: 'widget', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'initial_bounds', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DestroyWindow
ui.ozone.mojom.DrmDevice_DestroyWindow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.DrmDevice.DestroyWindow_Params',
      packedSize: 16,
      fields: [
        { name: 'widget', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetWindowBounds
ui.ozone.mojom.DrmDevice_SetWindowBounds_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.DrmDevice.SetWindowBounds_Params',
      packedSize: 24,
      fields: [
        { name: 'widget', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'bounds', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for TakeDisplayControl
ui.ozone.mojom.DrmDevice_TakeDisplayControl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.DrmDevice.TakeDisplayControl_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ui.ozone.mojom.DrmDevice_TakeDisplayControl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.DrmDevice.TakeDisplayControl_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RelinquishDisplayControl
ui.ozone.mojom.DrmDevice_RelinquishDisplayControl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.DrmDevice.RelinquishDisplayControl_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ui.ozone.mojom.DrmDevice_RelinquishDisplayControl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.DrmDevice.RelinquishDisplayControl_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RefreshNativeDisplays
ui.ozone.mojom.DrmDevice_RefreshNativeDisplays_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.DrmDevice.RefreshNativeDisplays_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ui.ozone.mojom.DrmDevice_RefreshNativeDisplays_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.DrmDevice.RefreshNativeDisplays_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'display_snapshots', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddGraphicsDevice
ui.ozone.mojom.DrmDevice_AddGraphicsDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.DrmDevice.AddGraphicsDevice_Params',
      packedSize: 24,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'fd_mojo_handle', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RemoveGraphicsDevice
ui.ozone.mojom.DrmDevice_RemoveGraphicsDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.DrmDevice.RemoveGraphicsDevice_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ShouldDisplayEventTriggerConfiguration
ui.ozone.mojom.DrmDevice_ShouldDisplayEventTriggerConfiguration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.DrmDevice.ShouldDisplayEventTriggerConfiguration_Params',
      packedSize: 16,
      fields: [
        { name: 'event_props', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ui.ozone.mojom.DrmDevice_ShouldDisplayEventTriggerConfiguration_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.DrmDevice.ShouldDisplayEventTriggerConfiguration_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'should_trigger', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ConfigureNativeDisplays
ui.ozone.mojom.DrmDevice_ConfigureNativeDisplays_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.DrmDevice.ConfigureNativeDisplays_Params',
      packedSize: 24,
      fields: [
        { name: 'config_requests', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'modeset_flags', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ui.ozone.mojom.DrmDevice_ConfigureNativeDisplays_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.DrmDevice.ConfigureNativeDisplays_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'request_results', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'config_success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetHdcpKeyProp
ui.ozone.mojom.DrmDevice_SetHdcpKeyProp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.DrmDevice.SetHdcpKeyProp_Params',
      packedSize: 24,
      fields: [
        { name: 'display_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ui.ozone.mojom.DrmDevice_SetHdcpKeyProp_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.DrmDevice.SetHdcpKeyProp_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'display_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetHDCPState
ui.ozone.mojom.DrmDevice_GetHDCPState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.DrmDevice.GetHDCPState_Params',
      packedSize: 16,
      fields: [
        { name: 'display_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ui.ozone.mojom.DrmDevice_GetHDCPState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.DrmDevice.GetHDCPState_ResponseParams',
      packedSize: 40,
      fields: [
        { name: 'display_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'state', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'protection_method', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetHDCPState
ui.ozone.mojom.DrmDevice_SetHDCPState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.DrmDevice.SetHDCPState_Params',
      packedSize: 32,
      fields: [
        { name: 'display_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'state', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'protection_method', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ui.ozone.mojom.DrmDevice_SetHDCPState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.DrmDevice.SetHDCPState_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'display_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetColorTemperatureAdjustment
ui.ozone.mojom.DrmDevice_SetColorTemperatureAdjustment_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.DrmDevice.SetColorTemperatureAdjustment_Params',
      packedSize: 24,
      fields: [
        { name: 'display_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'cta', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetColorCalibration
ui.ozone.mojom.DrmDevice_SetColorCalibration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.DrmDevice.SetColorCalibration_Params',
      packedSize: 24,
      fields: [
        { name: 'display_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'calibration', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetGammaAdjustment
ui.ozone.mojom.DrmDevice_SetGammaAdjustment_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.DrmDevice.SetGammaAdjustment_Params',
      packedSize: 24,
      fields: [
        { name: 'display_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'adjustment', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetPrivacyScreen
ui.ozone.mojom.DrmDevice_SetPrivacyScreen_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.DrmDevice.SetPrivacyScreen_Params',
      packedSize: 24,
      fields: [
        { name: 'display_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'enabled', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ui.ozone.mojom.DrmDevice_SetPrivacyScreen_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.DrmDevice.SetPrivacyScreen_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetSeamlessRefreshRates
ui.ozone.mojom.DrmDevice_GetSeamlessRefreshRates_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.DrmDevice.GetSeamlessRefreshRates_Params',
      packedSize: 16,
      fields: [
        { name: 'display_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ui.ozone.mojom.DrmDevice_GetSeamlessRefreshRates_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.DrmDevice.GetSeamlessRefreshRates_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'ranges', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetDeviceCursor
ui.ozone.mojom.DrmDevice_GetDeviceCursor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.DrmDevice.GetDeviceCursor_Params',
      packedSize: 16,
      fields: [
        { name: 'cursor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ui.ozone.mojom.DrmDevicePtr = ui.ozone.mojom.DrmDeviceRemote;
ui.ozone.mojom.DrmDeviceRequest = ui.ozone.mojom.DrmDevicePendingReceiver;

