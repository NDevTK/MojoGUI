// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/hotspot_config/public/mojom/cros_hotspot_config.mojom
// Module: ash.hotspot_config.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.hotspot_config = ash.hotspot_config || {};
ash.hotspot_config.mojom = ash.hotspot_config.mojom || {};


// Enum: HotspotState
ash.hotspot_config.mojom.HotspotState = {
  kDisabled: 0,
  kEnabled: 1,
  kEnabling: 2,
  kDisabling: 3,
};

// Enum: WiFiSecurityMode
ash.hotspot_config.mojom.WiFiSecurityMode = {
  kWpa2: 0,
  kWpa3: 1,
  kWpa2Wpa3: 2,
};

// Enum: WiFiBand
ash.hotspot_config.mojom.WiFiBand = {
  k2_4GHz: 0,
  kAutoChoose: 1,
};

// Enum: SetHotspotConfigResult
ash.hotspot_config.mojom.SetHotspotConfigResult = {
  kSuccess: 0,
  kFailedNotLogin: 1,
  kFailedInvalidConfiguration: 2,
  kFailedShillOperation: 3,
};

// Enum: HotspotAllowStatus
ash.hotspot_config.mojom.HotspotAllowStatus = {
  kDisallowedNoCellularUpstream: 0,
  kDisallowedNoWiFiDownstream: 1,
  kDisallowedNoWiFiSecurityModes: 2,
  kDisallowedNoMobileData: 3,
  kDisallowedReadinessCheckFail: 4,
  kDisallowedByPolicy: 5,
  kAllowed: 6,
};

// Enum: HotspotControlResult
ash.hotspot_config.mojom.HotspotControlResult = {
  kSuccess: 0,
  kNotAllowed: 1,
  kReadinessCheckFailed: 2,
  kDisableWifiFailed: 3,
  kInvalidConfiguration: 4,
  kUpstreamNotAvailable: 5,
  kNetworkSetupFailure: 6,
  kDownstreamWifiFailure: 7,
  kUpstreamFailure: 8,
  kShillOperationFailed: 9,
  kAlreadyFulfilled: 10,
  kAborted: 11,
  kInvalid: 12,
  kBusy: 13,
  kConcurrencyNotSupported: 14,
  kOperationFailure: 15,
  kUnknownFailure: 16,
};

// Enum: DisableReason
ash.hotspot_config.mojom.DisableReason = {
  kAutoDisabled: 0,
  kInternalError: 1,
  kUserInitiated: 2,
  kWifiEnabled: 3,
  kProhibitedByPolicy: 4,
  kUpstreamNetworkNotAvailable: 5,
  kSuspended: 6,
  kRestart: 7,
  kUpstreamNoInternet: 8,
  kDownstreamLinkDisconnect: 9,
  kDownstreamNetworkDisconnect: 10,
  kStartTimeout: 11,
  kUpstreamNotAvailable: 12,
  kResourceBusy: 13,
  kUnknownError: 14,
};

// Interface: CrosHotspotConfig
ash.hotspot_config.mojom.CrosHotspotConfig = {};

ash.hotspot_config.mojom.CrosHotspotConfigPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.hotspot_config.mojom.CrosHotspotConfigRemote = class {
  static get $interfaceName() {
    return 'ash.hotspot_config.mojom.CrosHotspotConfig';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.hotspot_config.mojom.CrosHotspotConfigPendingReceiver,
      handle);
    this.$ = new ash.hotspot_config.mojom.CrosHotspotConfigRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.hotspot_config.mojom.CrosHotspotConfigRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.hotspot_config.mojom.CrosHotspotConfig_AddObserver_ParamsSpec,
      null,
      [observer]);
  }

  observeEnabledStateChanges(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.hotspot_config.mojom.CrosHotspotConfig_ObserveEnabledStateChanges_ParamsSpec,
      null,
      [observer]);
  }

  getHotspotInfo() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.hotspot_config.mojom.CrosHotspotConfig_GetHotspotInfo_ParamsSpec,
      ash.hotspot_config.mojom.CrosHotspotConfig_GetHotspotInfo_ResponseParamsSpec,
      []);
  }

  setHotspotConfig(config) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.hotspot_config.mojom.CrosHotspotConfig_SetHotspotConfig_ParamsSpec,
      ash.hotspot_config.mojom.CrosHotspotConfig_SetHotspotConfig_ResponseParamsSpec,
      [config]);
  }

  enableHotspot() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.hotspot_config.mojom.CrosHotspotConfig_EnableHotspot_ParamsSpec,
      ash.hotspot_config.mojom.CrosHotspotConfig_EnableHotspot_ResponseParamsSpec,
      []);
  }

  disableHotspot() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.hotspot_config.mojom.CrosHotspotConfig_DisableHotspot_ParamsSpec,
      ash.hotspot_config.mojom.CrosHotspotConfig_DisableHotspot_ResponseParamsSpec,
      []);
  }

};

ash.hotspot_config.mojom.CrosHotspotConfig.getRemote = function() {
  let remote = new ash.hotspot_config.mojom.CrosHotspotConfigRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.hotspot_config.mojom.CrosHotspotConfig',
    'context');
  return remote.$;
};

// ParamsSpec for AddObserver
ash.hotspot_config.mojom.CrosHotspotConfig_AddObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.hotspot_config.mojom.CrosHotspotConfig.AddObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ObserveEnabledStateChanges
ash.hotspot_config.mojom.CrosHotspotConfig_ObserveEnabledStateChanges_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.hotspot_config.mojom.CrosHotspotConfig.ObserveEnabledStateChanges_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetHotspotInfo
ash.hotspot_config.mojom.CrosHotspotConfig_GetHotspotInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.hotspot_config.mojom.CrosHotspotConfig.GetHotspotInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.hotspot_config.mojom.CrosHotspotConfig_GetHotspotInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.hotspot_config.mojom.CrosHotspotConfig.GetHotspotInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'hotspot_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetHotspotConfig
ash.hotspot_config.mojom.CrosHotspotConfig_SetHotspotConfig_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.hotspot_config.mojom.CrosHotspotConfig.SetHotspotConfig_Params',
      packedSize: 16,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.hotspot_config.mojom.CrosHotspotConfig_SetHotspotConfig_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.hotspot_config.mojom.CrosHotspotConfig.SetHotspotConfig_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EnableHotspot
ash.hotspot_config.mojom.CrosHotspotConfig_EnableHotspot_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.hotspot_config.mojom.CrosHotspotConfig.EnableHotspot_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.hotspot_config.mojom.CrosHotspotConfig_EnableHotspot_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.hotspot_config.mojom.CrosHotspotConfig.EnableHotspot_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DisableHotspot
ash.hotspot_config.mojom.CrosHotspotConfig_DisableHotspot_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.hotspot_config.mojom.CrosHotspotConfig.DisableHotspot_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.hotspot_config.mojom.CrosHotspotConfig_DisableHotspot_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.hotspot_config.mojom.CrosHotspotConfig.DisableHotspot_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.hotspot_config.mojom.CrosHotspotConfigPtr = ash.hotspot_config.mojom.CrosHotspotConfigRemote;
ash.hotspot_config.mojom.CrosHotspotConfigRequest = ash.hotspot_config.mojom.CrosHotspotConfigPendingReceiver;


// Interface: CrosHotspotConfigObserver
ash.hotspot_config.mojom.CrosHotspotConfigObserver = {};

ash.hotspot_config.mojom.CrosHotspotConfigObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.hotspot_config.mojom.CrosHotspotConfigObserverRemote = class {
  static get $interfaceName() {
    return 'ash.hotspot_config.mojom.CrosHotspotConfigObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.hotspot_config.mojom.CrosHotspotConfigObserverPendingReceiver,
      handle);
    this.$ = new ash.hotspot_config.mojom.CrosHotspotConfigObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.hotspot_config.mojom.CrosHotspotConfigObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onHotspotInfoChanged() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.hotspot_config.mojom.CrosHotspotConfigObserver_OnHotspotInfoChanged_ParamsSpec,
      null,
      []);
  }

};

ash.hotspot_config.mojom.CrosHotspotConfigObserver.getRemote = function() {
  let remote = new ash.hotspot_config.mojom.CrosHotspotConfigObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.hotspot_config.mojom.CrosHotspotConfigObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnHotspotInfoChanged
ash.hotspot_config.mojom.CrosHotspotConfigObserver_OnHotspotInfoChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.hotspot_config.mojom.CrosHotspotConfigObserver.OnHotspotInfoChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.hotspot_config.mojom.CrosHotspotConfigObserverPtr = ash.hotspot_config.mojom.CrosHotspotConfigObserverRemote;
ash.hotspot_config.mojom.CrosHotspotConfigObserverRequest = ash.hotspot_config.mojom.CrosHotspotConfigObserverPendingReceiver;


// Interface: HotspotEnabledStateObserver
ash.hotspot_config.mojom.HotspotEnabledStateObserver = {};

ash.hotspot_config.mojom.HotspotEnabledStateObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.hotspot_config.mojom.HotspotEnabledStateObserverRemote = class {
  static get $interfaceName() {
    return 'ash.hotspot_config.mojom.HotspotEnabledStateObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.hotspot_config.mojom.HotspotEnabledStateObserverPendingReceiver,
      handle);
    this.$ = new ash.hotspot_config.mojom.HotspotEnabledStateObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.hotspot_config.mojom.HotspotEnabledStateObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onHotspotTurnedOn() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.hotspot_config.mojom.HotspotEnabledStateObserver_OnHotspotTurnedOn_ParamsSpec,
      null,
      []);
  }

  onHotspotTurnedOff(reason) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.hotspot_config.mojom.HotspotEnabledStateObserver_OnHotspotTurnedOff_ParamsSpec,
      null,
      [reason]);
  }

};

ash.hotspot_config.mojom.HotspotEnabledStateObserver.getRemote = function() {
  let remote = new ash.hotspot_config.mojom.HotspotEnabledStateObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.hotspot_config.mojom.HotspotEnabledStateObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnHotspotTurnedOn
ash.hotspot_config.mojom.HotspotEnabledStateObserver_OnHotspotTurnedOn_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.hotspot_config.mojom.HotspotEnabledStateObserver.OnHotspotTurnedOn_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnHotspotTurnedOff
ash.hotspot_config.mojom.HotspotEnabledStateObserver_OnHotspotTurnedOff_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.hotspot_config.mojom.HotspotEnabledStateObserver.OnHotspotTurnedOff_Params',
      packedSize: 16,
      fields: [
        { name: 'reason', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.hotspot_config.mojom.HotspotEnabledStateObserverPtr = ash.hotspot_config.mojom.HotspotEnabledStateObserverRemote;
ash.hotspot_config.mojom.HotspotEnabledStateObserverRequest = ash.hotspot_config.mojom.HotspotEnabledStateObserverPendingReceiver;

