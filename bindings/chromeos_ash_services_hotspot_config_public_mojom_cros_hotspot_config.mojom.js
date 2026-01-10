// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/hotspot_config/public/mojom/cros_hotspot_config.mojom
// Module: ash.hotspot_config.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.hotspot_config = ash.hotspot_config || {};
ash.hotspot_config.mojom = ash.hotspot_config.mojom || {};

ash.hotspot_config.mojom.HotspotStateSpec = { $: mojo.internal.Enum() };
ash.hotspot_config.mojom.WiFiSecurityModeSpec = { $: mojo.internal.Enum() };
ash.hotspot_config.mojom.WiFiBandSpec = { $: mojo.internal.Enum() };
ash.hotspot_config.mojom.SetHotspotConfigResultSpec = { $: mojo.internal.Enum() };
ash.hotspot_config.mojom.HotspotAllowStatusSpec = { $: mojo.internal.Enum() };
ash.hotspot_config.mojom.HotspotControlResultSpec = { $: mojo.internal.Enum() };
ash.hotspot_config.mojom.DisableReasonSpec = { $: mojo.internal.Enum() };
ash.hotspot_config.mojom.HotspotConfigSpec = { $: {} };
ash.hotspot_config.mojom.HotspotInfoSpec = { $: {} };
ash.hotspot_config.mojom.CrosHotspotConfig = {};
ash.hotspot_config.mojom.CrosHotspotConfig.$interfaceName = 'ash.hotspot_config.mojom.CrosHotspotConfig';
ash.hotspot_config.mojom.CrosHotspotConfig_AddObserver_ParamsSpec = { $: {} };
ash.hotspot_config.mojom.CrosHotspotConfig_ObserveEnabledStateChanges_ParamsSpec = { $: {} };
ash.hotspot_config.mojom.CrosHotspotConfig_GetHotspotInfo_ParamsSpec = { $: {} };
ash.hotspot_config.mojom.CrosHotspotConfig_GetHotspotInfo_ResponseParamsSpec = { $: {} };
ash.hotspot_config.mojom.CrosHotspotConfig_SetHotspotConfig_ParamsSpec = { $: {} };
ash.hotspot_config.mojom.CrosHotspotConfig_SetHotspotConfig_ResponseParamsSpec = { $: {} };
ash.hotspot_config.mojom.CrosHotspotConfig_EnableHotspot_ParamsSpec = { $: {} };
ash.hotspot_config.mojom.CrosHotspotConfig_EnableHotspot_ResponseParamsSpec = { $: {} };
ash.hotspot_config.mojom.CrosHotspotConfig_DisableHotspot_ParamsSpec = { $: {} };
ash.hotspot_config.mojom.CrosHotspotConfig_DisableHotspot_ResponseParamsSpec = { $: {} };
ash.hotspot_config.mojom.CrosHotspotConfigObserver = {};
ash.hotspot_config.mojom.CrosHotspotConfigObserver.$interfaceName = 'ash.hotspot_config.mojom.CrosHotspotConfigObserver';
ash.hotspot_config.mojom.CrosHotspotConfigObserver_OnHotspotInfoChanged_ParamsSpec = { $: {} };
ash.hotspot_config.mojom.HotspotEnabledStateObserver = {};
ash.hotspot_config.mojom.HotspotEnabledStateObserver.$interfaceName = 'ash.hotspot_config.mojom.HotspotEnabledStateObserver';
ash.hotspot_config.mojom.HotspotEnabledStateObserver_OnHotspotTurnedOn_ParamsSpec = { $: {} };
ash.hotspot_config.mojom.HotspotEnabledStateObserver_OnHotspotTurnedOff_ParamsSpec = { $: {} };

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

// Struct: HotspotConfig
mojo.internal.Struct(
    ash.hotspot_config.mojom.HotspotConfigSpec, 'ash.hotspot_config.mojom.HotspotConfig', [
      mojo.internal.StructField('auto_disable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('security', 8, 0, ash.hotspot_config.mojom.WiFiSecurityModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('band', 16, 0, ash.hotspot_config.mojom.WiFiBandSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ssid', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('passphrase', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('bssid_randomization', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: HotspotInfo
mojo.internal.Struct(
    ash.hotspot_config.mojom.HotspotInfoSpec, 'ash.hotspot_config.mojom.HotspotInfo', [
      mojo.internal.StructField('state', 0, 0, ash.hotspot_config.mojom.HotspotStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client_count', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('allow_status', 16, 0, ash.hotspot_config.mojom.HotspotAllowStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('allowed_wifi_security_modes', 24, 0, mojo.internal.Array(ash.hotspot_config.mojom.WiFiSecurityModeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('config', 32, 0, ash.hotspot_config.mojom.HotspotConfigSpec.$, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Interface: CrosHotspotConfig
mojo.internal.Struct(
    ash.hotspot_config.mojom.CrosHotspotConfig_AddObserver_ParamsSpec, 'ash.hotspot_config.mojom.CrosHotspotConfig_AddObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.hotspot_config.mojom.CrosHotspotConfigObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.hotspot_config.mojom.CrosHotspotConfig_ObserveEnabledStateChanges_ParamsSpec, 'ash.hotspot_config.mojom.CrosHotspotConfig_ObserveEnabledStateChanges_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.hotspot_config.mojom.HotspotEnabledStateObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.hotspot_config.mojom.CrosHotspotConfig_GetHotspotInfo_ParamsSpec, 'ash.hotspot_config.mojom.CrosHotspotConfig_GetHotspotInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.hotspot_config.mojom.CrosHotspotConfig_GetHotspotInfo_ResponseParamsSpec, 'ash.hotspot_config.mojom.CrosHotspotConfig_GetHotspotInfo_ResponseParams', [
      mojo.internal.StructField('hotspot_info', 0, 0, ash.hotspot_config.mojom.HotspotInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.hotspot_config.mojom.CrosHotspotConfig_SetHotspotConfig_ParamsSpec, 'ash.hotspot_config.mojom.CrosHotspotConfig_SetHotspotConfig_Params', [
      mojo.internal.StructField('config', 0, 0, ash.hotspot_config.mojom.HotspotConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.hotspot_config.mojom.CrosHotspotConfig_SetHotspotConfig_ResponseParamsSpec, 'ash.hotspot_config.mojom.CrosHotspotConfig_SetHotspotConfig_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.hotspot_config.mojom.SetHotspotConfigResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.hotspot_config.mojom.CrosHotspotConfig_EnableHotspot_ParamsSpec, 'ash.hotspot_config.mojom.CrosHotspotConfig_EnableHotspot_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.hotspot_config.mojom.CrosHotspotConfig_EnableHotspot_ResponseParamsSpec, 'ash.hotspot_config.mojom.CrosHotspotConfig_EnableHotspot_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.hotspot_config.mojom.HotspotControlResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.hotspot_config.mojom.CrosHotspotConfig_DisableHotspot_ParamsSpec, 'ash.hotspot_config.mojom.CrosHotspotConfig_DisableHotspot_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.hotspot_config.mojom.CrosHotspotConfig_DisableHotspot_ResponseParamsSpec, 'ash.hotspot_config.mojom.CrosHotspotConfig_DisableHotspot_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.hotspot_config.mojom.HotspotControlResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [observer],
      false);
  }

  observeEnabledStateChanges(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.hotspot_config.mojom.CrosHotspotConfig_ObserveEnabledStateChanges_ParamsSpec,
      null,
      [observer],
      false);
  }

  getHotspotInfo() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.hotspot_config.mojom.CrosHotspotConfig_GetHotspotInfo_ParamsSpec,
      ash.hotspot_config.mojom.CrosHotspotConfig_GetHotspotInfo_ResponseParamsSpec,
      [],
      false);
  }

  setHotspotConfig(config) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.hotspot_config.mojom.CrosHotspotConfig_SetHotspotConfig_ParamsSpec,
      ash.hotspot_config.mojom.CrosHotspotConfig_SetHotspotConfig_ResponseParamsSpec,
      [config],
      false);
  }

  enableHotspot() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.hotspot_config.mojom.CrosHotspotConfig_EnableHotspot_ParamsSpec,
      ash.hotspot_config.mojom.CrosHotspotConfig_EnableHotspot_ResponseParamsSpec,
      [],
      false);
  }

  disableHotspot() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.hotspot_config.mojom.CrosHotspotConfig_DisableHotspot_ParamsSpec,
      ash.hotspot_config.mojom.CrosHotspotConfig_DisableHotspot_ResponseParamsSpec,
      [],
      false);
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

ash.hotspot_config.mojom.CrosHotspotConfigPtr = ash.hotspot_config.mojom.CrosHotspotConfigRemote;
ash.hotspot_config.mojom.CrosHotspotConfigRequest = ash.hotspot_config.mojom.CrosHotspotConfigPendingReceiver;


// Interface: CrosHotspotConfigObserver
mojo.internal.Struct(
    ash.hotspot_config.mojom.CrosHotspotConfigObserver_OnHotspotInfoChanged_ParamsSpec, 'ash.hotspot_config.mojom.CrosHotspotConfigObserver_OnHotspotInfoChanged_Params', [
    ],
    [[0, 8]]);

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
      [],
      false);
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

ash.hotspot_config.mojom.CrosHotspotConfigObserverPtr = ash.hotspot_config.mojom.CrosHotspotConfigObserverRemote;
ash.hotspot_config.mojom.CrosHotspotConfigObserverRequest = ash.hotspot_config.mojom.CrosHotspotConfigObserverPendingReceiver;


// Interface: HotspotEnabledStateObserver
mojo.internal.Struct(
    ash.hotspot_config.mojom.HotspotEnabledStateObserver_OnHotspotTurnedOn_ParamsSpec, 'ash.hotspot_config.mojom.HotspotEnabledStateObserver_OnHotspotTurnedOn_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.hotspot_config.mojom.HotspotEnabledStateObserver_OnHotspotTurnedOff_ParamsSpec, 'ash.hotspot_config.mojom.HotspotEnabledStateObserver_OnHotspotTurnedOff_Params', [
      mojo.internal.StructField('reason', 0, 0, ash.hotspot_config.mojom.DisableReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
  }

  onHotspotTurnedOff(reason) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.hotspot_config.mojom.HotspotEnabledStateObserver_OnHotspotTurnedOff_ParamsSpec,
      null,
      [reason],
      false);
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

ash.hotspot_config.mojom.HotspotEnabledStateObserverPtr = ash.hotspot_config.mojom.HotspotEnabledStateObserverRemote;
ash.hotspot_config.mojom.HotspotEnabledStateObserverRequest = ash.hotspot_config.mojom.HotspotEnabledStateObserverPendingReceiver;

