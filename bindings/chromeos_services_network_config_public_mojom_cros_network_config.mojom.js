// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/network_config/public/mojom/cros_network_config.mojom
// Module: chromeos.network_config.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.network_config = chromeos.network_config || {};
chromeos.network_config.mojom = chromeos.network_config.mojom || {};


// Enum: ActivationStateType
chromeos.network_config.mojom.ActivationStateType = {
  kUnknown: 0,
  kNotActivated: 1,
  kActivating: 2,
  kPartiallyActivated: 3,
  kActivated: 4,
  kNoService: 5,
};

// Enum: AuthenticationType
chromeos.network_config.mojom.AuthenticationType = {
  kNone: 0,
  k8021x: 1,
};

// Enum: HiddenSsidMode
chromeos.network_config.mojom.HiddenSsidMode = {
  kAutomatic: 0,
  kDisabled: 1,
  kEnabled: 2,
};

// Enum: ProxyMode
chromeos.network_config.mojom.ProxyMode = {
  kDirect: 0,
  kAutoDetect: 1,
  kPacScript: 2,
  kFixedServers: 3,
  kSystem: 4,
};

// Enum: SecurityType
chromeos.network_config.mojom.SecurityType = {
  kNone: 0,
  kWep8021x: 1,
  kWepPsk: 2,
  kWpaEap: 3,
  kWpaPsk: 4,
};

// Enum: MatchType
chromeos.network_config.mojom.MatchType = {
  kNoMatch: 0,
  kHome: 1,
  kRoaming: 2,
  kUnknown: 3,
};

// Enum: VpnType
chromeos.network_config.mojom.VpnType = {
  kIKEv2: 0,
  kL2TPIPsec: 1,
  kOpenVPN: 2,
  kWireGuard: 3,
  kExtension: 4,
  kArc: 5,
};

// Enum: FilterType
chromeos.network_config.mojom.FilterType = {
  kActive: 0,
  kVisible: 1,
  kConfigured: 2,
  kAll: 3,
};

// Enum: StartConnectResult
chromeos.network_config.mojom.StartConnectResult = {
  kSuccess: 0,
  kInvalidGuid: 1,
  kInvalidState: 2,
  kCanceled: 3,
  kNotConfigured: 4,
  kBlocked: 5,
  kUnknown: 6,
};

// Enum: CertificateType
chromeos.network_config.mojom.CertificateType = {
  kServerCA: 0,
  kUserCert: 1,
};

// Enum: InhibitReason
chromeos.network_config.mojom.InhibitReason = {
  kNotInhibited: 0,
  kInstallingProfile: 1,
  kRenamingProfile: 2,
  kRemovingProfile: 3,
  kConnectingToProfile: 4,
  kRefreshingProfileList: 5,
  kResettingEuiccMemory: 6,
  kDisablingProfile: 7,
  kRequestingAvailableProfiles: 8,
};

// Enum: AlwaysOnVpnMode
chromeos.network_config.mojom.AlwaysOnVpnMode = {
  kOff: 0,
  kBestEffort: 1,
  kStrict: 2,
};

// Enum: ApnState
chromeos.network_config.mojom.ApnState = {
  kEnabled: 0,
  kDisabled: 1,
};

// Enum: ApnAuthenticationType
chromeos.network_config.mojom.ApnAuthenticationType = {
  kAutomatic: 0,
  kPap: 1,
  kChap: 2,
};

// Enum: ApnIpType
chromeos.network_config.mojom.ApnIpType = {
  kAutomatic: 0,
  kIpv4: 1,
  kIpv6: 2,
  kIpv4Ipv6: 3,
};

// Enum: ApnType
chromeos.network_config.mojom.ApnType = {
  kDefault: 0,
  kAttach: 1,
  kTether: 2,
};

// Enum: ApnSource
chromeos.network_config.mojom.ApnSource = {
  kModem: 0,
  kModb: 1,
  kUi: 2,
};

// Enum: Type
chromeos.network_config.mojom.Type = {
  kEmail: 0,
  kDns: 1,
  kUri: 2,
};

// Enum: SuppressionType
chromeos.network_config.mojom.SuppressionType = {
  kUnset: 0,
  kAllow: 1,
  kSuppress: 2,
};

// Enum: TrafficCounterSource
chromeos.network_config.mojom.TrafficCounterSource = {
  kUnknown: 0,
  kChrome: 1,
  kUser: 2,
  kArc: 3,
  kCrosvm: 4,
  kPluginvm: 5,
  kUpdateEngine: 6,
  kVpn: 7,
  kSystem: 8,
};

// Interface: CrosNetworkConfig
chromeos.network_config.mojom.CrosNetworkConfig = {};

chromeos.network_config.mojom.CrosNetworkConfigPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.network_config.mojom.CrosNetworkConfigRemote = class {
  static get $interfaceName() {
    return 'chromeos.network_config.mojom.CrosNetworkConfig';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.network_config.mojom.CrosNetworkConfigPendingReceiver,
      handle);
    this.$ = new chromeos.network_config.mojom.CrosNetworkConfigRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.network_config.mojom.CrosNetworkConfigRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_AddObserver_ParamsSpec,
      null,
      [observer]);
  }

  getNetworkState(guid) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ResponseParamsSpec,
      [guid]);
  }

  getNetworkStateList(filter) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ResponseParamsSpec,
      [filter]);
  }

  getDeviceStateList() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ResponseParamsSpec,
      []);
  }

  getManagedProperties(guid) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ResponseParamsSpec,
      [guid]);
  }

  setProperties(guid, properties) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ResponseParamsSpec,
      [guid, properties]);
  }

  configureNetwork(properties, shared) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ResponseParamsSpec,
      [properties, shared]);
  }

  forgetNetwork(guid) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ResponseParamsSpec,
      [guid]);
  }

  setNetworkTypeEnabledState(type, enabled) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ResponseParamsSpec,
      [type, enabled]);
  }

  setCellularSimState(state) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ResponseParamsSpec,
      [state]);
  }

  selectCellularMobileNetwork(guid, network_id) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ResponseParamsSpec,
      [guid, network_id]);
  }

  requestNetworkScan(type) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_RequestNetworkScan_ParamsSpec,
      null,
      [type]);
  }

  getGlobalPolicy() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ResponseParamsSpec,
      []);
  }

  startConnect(guid) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ResponseParamsSpec,
      [guid]);
  }

  startDisconnect(guid) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ResponseParamsSpec,
      [guid]);
  }

  setVpnProviders(providers) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_SetVpnProviders_ParamsSpec,
      null,
      [providers]);
  }

  getVpnProviders() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ResponseParamsSpec,
      []);
  }

  getNetworkCertificates() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ResponseParamsSpec,
      []);
  }

  getAlwaysOnVpn() {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ResponseParamsSpec,
      []);
  }

  setAlwaysOnVpn(properties) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_SetAlwaysOnVpn_ParamsSpec,
      null,
      [properties]);
  }

  getSupportedVpnTypes() {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ResponseParamsSpec,
      []);
  }

  requestTrafficCounters(guid) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ResponseParamsSpec,
      [guid]);
  }

  resetTrafficCounters(guid) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_ResetTrafficCounters_ParamsSpec,
      null,
      [guid]);
  }

  setTrafficCountersResetDay(guid, day) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ResponseParamsSpec,
      [guid, day]);
  }

  createCustomApn(network_guid, apn) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ResponseParamsSpec,
      [network_guid, apn]);
  }

  createExclusivelyEnabledCustomApn(network_guid, apn) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ResponseParamsSpec,
      [network_guid, apn]);
  }

  removeCustomApn(network_guid, apn_id) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_RemoveCustomApn_ParamsSpec,
      null,
      [network_guid, apn_id]);
  }

  modifyCustomApn(network_guid, apn) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_ModifyCustomApn_ParamsSpec,
      null,
      [network_guid, apn]);
  }

};

chromeos.network_config.mojom.CrosNetworkConfig.getRemote = function() {
  let remote = new chromeos.network_config.mojom.CrosNetworkConfigRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.network_config.mojom.CrosNetworkConfig',
    'context');
  return remote.$;
};

// ParamsSpec for AddObserver
chromeos.network_config.mojom.CrosNetworkConfig_AddObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.AddObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetNetworkState
chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.GetNetworkState_Params',
      packedSize: 16,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.GetNetworkState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetNetworkStateList
chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.GetNetworkStateList_Params',
      packedSize: 16,
      fields: [
        { name: 'filter', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.GetNetworkStateList_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetDeviceStateList
chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.GetDeviceStateList_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.GetDeviceStateList_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetManagedProperties
chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.GetManagedProperties_Params',
      packedSize: 16,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.GetManagedProperties_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetProperties
chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.SetProperties_Params',
      packedSize: 24,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'properties', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.SetProperties_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'error_message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ConfigureNetwork
chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.ConfigureNetwork_Params',
      packedSize: 24,
      fields: [
        { name: 'properties', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'shared', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.ConfigureNetwork_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'error_message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ForgetNetwork
chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.ForgetNetwork_Params',
      packedSize: 16,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.ForgetNetwork_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetNetworkTypeEnabledState
chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.SetNetworkTypeEnabledState_Params',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'enabled', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.SetNetworkTypeEnabledState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetCellularSimState
chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.SetCellularSimState_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.SetCellularSimState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SelectCellularMobileNetwork
chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.SelectCellularMobileNetwork_Params',
      packedSize: 24,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'network_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.SelectCellularMobileNetwork_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestNetworkScan
chromeos.network_config.mojom.CrosNetworkConfig_RequestNetworkScan_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.RequestNetworkScan_Params',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetGlobalPolicy
chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.GetGlobalPolicy_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.GetGlobalPolicy_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StartConnect
chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.StartConnect_Params',
      packedSize: 16,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.StartConnect_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StartDisconnect
chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.StartDisconnect_Params',
      packedSize: 16,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.StartDisconnect_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetVpnProviders
chromeos.network_config.mojom.CrosNetworkConfig_SetVpnProviders_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.SetVpnProviders_Params',
      packedSize: 16,
      fields: [
        { name: 'providers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetVpnProviders
chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.GetVpnProviders_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.GetVpnProviders_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'providers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetNetworkCertificates
chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.GetNetworkCertificates_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.GetNetworkCertificates_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'server_cas', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'user_certs', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetAlwaysOnVpn
chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.GetAlwaysOnVpn_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.GetAlwaysOnVpn_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'properties', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetAlwaysOnVpn
chromeos.network_config.mojom.CrosNetworkConfig_SetAlwaysOnVpn_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.SetAlwaysOnVpn_Params',
      packedSize: 16,
      fields: [
        { name: 'properties', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetSupportedVpnTypes
chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.GetSupportedVpnTypes_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.GetSupportedVpnTypes_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'vpn_types', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestTrafficCounters
chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.RequestTrafficCounters_Params',
      packedSize: 16,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.RequestTrafficCounters_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'traffic_counters', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ResetTrafficCounters
chromeos.network_config.mojom.CrosNetworkConfig_ResetTrafficCounters_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.ResetTrafficCounters_Params',
      packedSize: 16,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetTrafficCountersResetDay
chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.SetTrafficCountersResetDay_Params',
      packedSize: 24,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'day', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.SetTrafficCountersResetDay_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateCustomApn
chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.CreateCustomApn_Params',
      packedSize: 24,
      fields: [
        { name: 'network_guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'apn', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.CreateCustomApn_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateExclusivelyEnabledCustomApn
chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.CreateExclusivelyEnabledCustomApn_Params',
      packedSize: 24,
      fields: [
        { name: 'network_guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'apn', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.CreateExclusivelyEnabledCustomApn_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RemoveCustomApn
chromeos.network_config.mojom.CrosNetworkConfig_RemoveCustomApn_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.RemoveCustomApn_Params',
      packedSize: 24,
      fields: [
        { name: 'network_guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'apn_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ModifyCustomApn
chromeos.network_config.mojom.CrosNetworkConfig_ModifyCustomApn_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.ModifyCustomApn_Params',
      packedSize: 24,
      fields: [
        { name: 'network_guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'apn', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chromeos.network_config.mojom.CrosNetworkConfigPtr = chromeos.network_config.mojom.CrosNetworkConfigRemote;
chromeos.network_config.mojom.CrosNetworkConfigRequest = chromeos.network_config.mojom.CrosNetworkConfigPendingReceiver;


// Interface: CrosNetworkConfigObserver
chromeos.network_config.mojom.CrosNetworkConfigObserver = {};

chromeos.network_config.mojom.CrosNetworkConfigObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.network_config.mojom.CrosNetworkConfigObserverRemote = class {
  static get $interfaceName() {
    return 'chromeos.network_config.mojom.CrosNetworkConfigObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.network_config.mojom.CrosNetworkConfigObserverPendingReceiver,
      handle);
    this.$ = new chromeos.network_config.mojom.CrosNetworkConfigObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.network_config.mojom.CrosNetworkConfigObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onActiveNetworksChanged(networks) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfigObserver_OnActiveNetworksChanged_ParamsSpec,
      null,
      [networks]);
  }

  onNetworkStateChanged(network) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateChanged_ParamsSpec,
      null,
      [network]);
  }

  onNetworkStateListChanged() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateListChanged_ParamsSpec,
      null,
      []);
  }

  onDeviceStateListChanged() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfigObserver_OnDeviceStateListChanged_ParamsSpec,
      null,
      []);
  }

  onVpnProvidersChanged() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfigObserver_OnVpnProvidersChanged_ParamsSpec,
      null,
      []);
  }

  onNetworkCertificatesChanged() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkCertificatesChanged_ParamsSpec,
      null,
      []);
  }

  onPoliciesApplied(userhash) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfigObserver_OnPoliciesApplied_ParamsSpec,
      null,
      [userhash]);
  }

};

chromeos.network_config.mojom.CrosNetworkConfigObserver.getRemote = function() {
  let remote = new chromeos.network_config.mojom.CrosNetworkConfigObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.network_config.mojom.CrosNetworkConfigObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnActiveNetworksChanged
chromeos.network_config.mojom.CrosNetworkConfigObserver_OnActiveNetworksChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfigObserver.OnActiveNetworksChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'networks', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnNetworkStateChanged
chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfigObserver.OnNetworkStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'network', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnNetworkStateListChanged
chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateListChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfigObserver.OnNetworkStateListChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnDeviceStateListChanged
chromeos.network_config.mojom.CrosNetworkConfigObserver_OnDeviceStateListChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfigObserver.OnDeviceStateListChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnVpnProvidersChanged
chromeos.network_config.mojom.CrosNetworkConfigObserver_OnVpnProvidersChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfigObserver.OnVpnProvidersChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnNetworkCertificatesChanged
chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkCertificatesChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfigObserver.OnNetworkCertificatesChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnPoliciesApplied
chromeos.network_config.mojom.CrosNetworkConfigObserver_OnPoliciesApplied_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfigObserver.OnPoliciesApplied_Params',
      packedSize: 16,
      fields: [
        { name: 'userhash', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chromeos.network_config.mojom.CrosNetworkConfigObserverPtr = chromeos.network_config.mojom.CrosNetworkConfigObserverRemote;
chromeos.network_config.mojom.CrosNetworkConfigObserverRequest = chromeos.network_config.mojom.CrosNetworkConfigObserverPendingReceiver;

