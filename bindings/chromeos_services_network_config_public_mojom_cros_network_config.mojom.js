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
};

// Enum: AuthenticationType
chromeos.network_config.mojom.AuthenticationType = {
};

// Enum: HiddenSsidMode
chromeos.network_config.mojom.HiddenSsidMode = {
};

// Enum: ProxyMode
chromeos.network_config.mojom.ProxyMode = {
};

// Enum: SecurityType
chromeos.network_config.mojom.SecurityType = {
};

// Enum: MatchType
chromeos.network_config.mojom.MatchType = {
};

// Enum: VpnType
chromeos.network_config.mojom.VpnType = {
};

// Enum: FilterType
chromeos.network_config.mojom.FilterType = {
};

// Enum: StartConnectResult
chromeos.network_config.mojom.StartConnectResult = {
};

// Enum: CertificateType
chromeos.network_config.mojom.CertificateType = {
};

// Enum: InhibitReason
chromeos.network_config.mojom.InhibitReason = {
};

// Enum: AlwaysOnVpnMode
chromeos.network_config.mojom.AlwaysOnVpnMode = {
};

// Enum: ApnState
chromeos.network_config.mojom.ApnState = {
};

// Enum: ApnAuthenticationType
chromeos.network_config.mojom.ApnAuthenticationType = {
};

// Enum: ApnIpType
chromeos.network_config.mojom.ApnIpType = {
};

// Enum: ApnType
chromeos.network_config.mojom.ApnType = {
};

// Enum: ApnSource
chromeos.network_config.mojom.ApnSource = {
};

// Enum: Type
chromeos.network_config.mojom.Type = {
};

// Enum: SuppressionType
chromeos.network_config.mojom.SuppressionType = {
};

// Enum: TrafficCounterSource
chromeos.network_config.mojom.TrafficCounterSource = {
};

// Struct: SIMLockStatus
chromeos.network_config.mojom.SIMLockStatus = class {
  constructor(values = {}) {
    this.retries_left = values.retries_left !== undefined ? values.retries_left : 0;
  }
};

// Struct: SIMInfo
chromeos.network_config.mojom.SIMInfo = class {
  constructor(values = {}) {
    this.is_primary = values.is_primary !== undefined ? values.is_primary : 0;
  }
};

// Struct: CellularStateProperties
chromeos.network_config.mojom.CellularStateProperties = class {
  constructor(values = {}) {
    this.payment_portal = values.payment_portal !== undefined ? values.payment_portal : 0;
  }
};

// Struct: EthernetStateProperties
chromeos.network_config.mojom.EthernetStateProperties = class {
  constructor(values = {}) {
    this.authentication = values.authentication !== undefined ? values.authentication : null;
  }
};

// Struct: TetherStateProperties
chromeos.network_config.mojom.TetherStateProperties = class {
  constructor(values = {}) {
    this.signal_strength = values.signal_strength !== undefined ? values.signal_strength : 0;
  }
};

// Struct: VPNStateProperties
chromeos.network_config.mojom.VPNStateProperties = class {
  constructor(values = {}) {
    this.provider_name = values.provider_name !== undefined ? values.provider_name : "";
  }
};

// Struct: WiFiStateProperties
chromeos.network_config.mojom.WiFiStateProperties = class {
  constructor(values = {}) {
    this.bssid = values.bssid !== undefined ? values.bssid : "";
    this.passpoint_id = values.passpoint_id !== undefined ? values.passpoint_id : 0;
  }
};

// Struct: NetworkStateProperties
chromeos.network_config.mojom.NetworkStateProperties = class {
  constructor(values = {}) {
    this.guid = values.guid !== undefined ? values.guid : false;
    this.kUnknown = values.kUnknown !== undefined ? values.kUnknown : "";
    this.source = values.source !== undefined ? values.source : 0;
    this.type_state = values.type_state !== undefined ? values.type_state : null;
  }
};

// Struct: DeviceStateProperties
chromeos.network_config.mojom.DeviceStateProperties = class {
  constructor(values = {}) {
    this.available = values.available !== undefined ? values.available : null;
    this.false = values.false !== undefined ? values.false : false;
    this.false = values.false !== undefined ? values.false : false;
  }
};

// Struct: NetworkFilter
chromeos.network_config.mojom.NetworkFilter = class {
  constructor(values = {}) {
    this.kNoLimit = values.kNoLimit !== undefined ? values.kNoLimit : 0;
  }
};

// Struct: ApnProperties
chromeos.network_config.mojom.ApnProperties = class {
  constructor(values = {}) {
    this.source = values.source !== undefined ? values.source : 0;
  }
};

// Struct: RoamingProperties
chromeos.network_config.mojom.RoamingProperties = class {
  constructor(values = {}) {
    this.allow_roaming = values.allow_roaming !== undefined ? values.allow_roaming : false;
  }
};

// Struct: CellularProviderProperties
chromeos.network_config.mojom.CellularProviderProperties = class {
  constructor(values = {}) {
    this.country = values.country !== undefined ? values.country : "";
  }
};

// Struct: FoundNetworkProperties
chromeos.network_config.mojom.FoundNetworkProperties = class {
  constructor(values = {}) {
    this.long_name = values.long_name !== undefined ? values.long_name : "";
  }
};

// Struct: IPConfigProperties
chromeos.network_config.mojom.IPConfigProperties = class {
  constructor(values = {}) {
    this.gateway = values.gateway !== undefined ? values.gateway : "";
    this.web_proxy_auto_discovery_url = values.web_proxy_auto_discovery_url !== undefined ? values.web_proxy_auto_discovery_url : 0;
  }
};

// Struct: PaymentPortalProperties
chromeos.network_config.mojom.PaymentPortalProperties = class {
  constructor(values = {}) {
    this.url = values.url !== undefined ? values.url : "";
  }
};

// Struct: WireGuardPeerProperties
chromeos.network_config.mojom.WireGuardPeerProperties = class {
  constructor(values = {}) {
    this.public_key = values.public_key !== undefined ? values.public_key : "";
    this.persistent_keepalive_interval = values.persistent_keepalive_interval !== undefined ? values.persistent_keepalive_interval : 0;
  }
};

// Struct: ManagedBoolean
chromeos.network_config.mojom.ManagedBoolean = class {
  constructor(values = {}) {
    this.false = values.false !== undefined ? values.false : false;
  }
};

// Struct: ManagedInt32
chromeos.network_config.mojom.ManagedInt32 = class {
  constructor(values = {}) {
  }
};

// Struct: ManagedString
chromeos.network_config.mojom.ManagedString = class {
  constructor(values = {}) {
    this.policy_value = values.policy_value !== undefined ? values.policy_value : "";
  }
};

// Struct: ManagedStringList
chromeos.network_config.mojom.ManagedStringList = class {
  constructor(values = {}) {
    this.policy_value = values.policy_value !== undefined ? values.policy_value : "";
  }
};

// Struct: ManagedApnProperties
chromeos.network_config.mojom.ManagedApnProperties = class {
  constructor(values = {}) {
    this.attach = values.attach !== undefined ? values.attach : 0;
  }
};

// Struct: ManagedApnList
chromeos.network_config.mojom.ManagedApnList = class {
  constructor(values = {}) {
    this.policy_value = values.policy_value !== undefined ? values.policy_value : [];
  }
};

// Struct: ManagedIssuerSubjectPattern
chromeos.network_config.mojom.ManagedIssuerSubjectPattern = class {
  constructor(values = {}) {
    this.organizational_unit = values.organizational_unit !== undefined ? values.organizational_unit : "";
  }
};

// Struct: ManagedCertificatePattern
chromeos.network_config.mojom.ManagedCertificatePattern = class {
  constructor(values = {}) {
    this.subject = values.subject !== undefined ? values.subject : "";
  }
};

// Struct: ManagedEAPProperties
chromeos.network_config.mojom.ManagedEAPProperties = class {
  constructor(values = {}) {
    this.use_system_cas = values.use_system_cas !== undefined ? values.use_system_cas : false;
  }
};

// Struct: ManagedSubjectAltNameMatchList
chromeos.network_config.mojom.ManagedSubjectAltNameMatchList = class {
  constructor(values = {}) {
    this.policy_value = values.policy_value !== undefined ? values.policy_value : [];
  }
};

// Struct: ManagedIPConfigProperties
chromeos.network_config.mojom.ManagedIPConfigProperties = class {
  constructor(values = {}) {
    this.web_proxy_auto_discovery_url = values.web_proxy_auto_discovery_url !== undefined ? values.web_proxy_auto_discovery_url : 0;
  }
};

// Struct: ManagedIPSecProperties
chromeos.network_config.mojom.ManagedIPSecProperties = class {
  constructor(values = {}) {
    this.server_ca_refs = values.server_ca_refs !== undefined ? values.server_ca_refs : 0;
  }
};

// Struct: ManagedL2TPProperties
chromeos.network_config.mojom.ManagedL2TPProperties = class {
  constructor(values = {}) {
    this.username = values.username !== undefined ? values.username : false;
  }
};

// Struct: ManagedProxyLocation
chromeos.network_config.mojom.ManagedProxyLocation = class {
  constructor(values = {}) {
    this.port = values.port !== undefined ? values.port : 0;
  }
};

// Struct: ManagedManualProxySettings
chromeos.network_config.mojom.ManagedManualProxySettings = class {
  constructor(values = {}) {
    this.socks = values.socks !== undefined ? values.socks : null;
  }
};

// Struct: ManagedProxySettings
chromeos.network_config.mojom.ManagedProxySettings = class {
  constructor(values = {}) {
    this.pac = values.pac !== undefined ? values.pac : "";
  }
};

// Struct: ManagedVerifyX509Properties
chromeos.network_config.mojom.ManagedVerifyX509Properties = class {
  constructor(values = {}) {
    this.type = values.type !== undefined ? values.type : "";
  }
};

// Struct: ManagedOpenVPNProperties
chromeos.network_config.mojom.ManagedOpenVPNProperties = class {
  constructor(values = {}) {
    this.verify_x509 = values.verify_x509 !== undefined ? values.verify_x509 : 0;
  }
};

// Struct: ManagedWireGuardPeerList
chromeos.network_config.mojom.ManagedWireGuardPeerList = class {
  constructor(values = {}) {
    this.policy_value = values.policy_value !== undefined ? values.policy_value : [];
  }
};

// Struct: ManagedWireGuardProperties
chromeos.network_config.mojom.ManagedWireGuardProperties = class {
  constructor(values = {}) {
    this.peers = values.peers !== undefined ? values.peers : "";
  }
};

// Struct: ManagedCellularProperties
chromeos.network_config.mojom.ManagedCellularProperties = class {
  constructor(values = {}) {
    this.last_good_apn = values.last_good_apn !== undefined ? values.last_good_apn : false;
    this.false = values.false !== undefined ? values.false : 0;
  }
};

// Struct: ManagedEthernetProperties
chromeos.network_config.mojom.ManagedEthernetProperties = class {
  constructor(values = {}) {
    this.eap = values.eap !== undefined ? values.eap : "";
  }
};

// Struct: ManagedVPNProperties
chromeos.network_config.mojom.ManagedVPNProperties = class {
  constructor(values = {}) {
    this.type = values.type !== undefined ? values.type : false;
  }
};

// Struct: ManagedWiFiProperties
chromeos.network_config.mojom.ManagedWiFiProperties = class {
  constructor(values = {}) {
    this.passpoint_match_type = values.passpoint_match_type !== undefined ? values.passpoint_match_type : 0;
  }
};

// Struct: UInt32Value
chromeos.network_config.mojom.UInt32Value = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : 0;
  }
};

// Struct: TrafficCounterProperties
chromeos.network_config.mojom.TrafficCounterProperties = class {
  constructor(values = {}) {
    this.last_reset_time = values.last_reset_time !== undefined ? values.last_reset_time : null;
    this.user_specified_reset_day = values.user_specified_reset_day !== undefined ? values.user_specified_reset_day : 0;
  }
};

// Struct: ManagedProperties
chromeos.network_config.mojom.ManagedProperties = class {
  constructor(values = {}) {
    this.saved_ip_config = values.saved_ip_config !== undefined ? values.saved_ip_config : 0;
    this.type_properties = values.type_properties !== undefined ? values.type_properties : null;
    this.traffic_counter_properties = values.traffic_counter_properties !== undefined ? values.traffic_counter_properties : null;
  }
};

// Struct: AutoConnectConfig
chromeos.network_config.mojom.AutoConnectConfig = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : false;
  }
};

// Struct: MeteredConfig
chromeos.network_config.mojom.MeteredConfig = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : false;
  }
};

// Struct: PriorityConfig
chromeos.network_config.mojom.PriorityConfig = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : 0;
  }
};

// Struct: VpnTypeConfig
chromeos.network_config.mojom.VpnTypeConfig = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : null;
  }
};

// Struct: ProxyLocation
chromeos.network_config.mojom.ProxyLocation = class {
  constructor(values = {}) {
    this.port = values.port !== undefined ? values.port : 0;
  }
};

// Struct: ManualProxySettings
chromeos.network_config.mojom.ManualProxySettings = class {
  constructor(values = {}) {
    this.socks = values.socks !== undefined ? values.socks : null;
  }
};

// Struct: ProxySettings
chromeos.network_config.mojom.ProxySettings = class {
  constructor(values = {}) {
    this.pac = values.pac !== undefined ? values.pac : "";
  }
};

// Struct: EAPConfigProperties
chromeos.network_config.mojom.EAPConfigProperties = class {
  constructor(values = {}) {
    this.false = values.false !== undefined ? values.false : false;
  }
};

// Struct: SubjectAltName
chromeos.network_config.mojom.SubjectAltName = class {
  constructor(values = {}) {
    this.kEmail = values.kEmail !== undefined ? values.kEmail : null;
  }
};

// Struct: IPSecConfigProperties
chromeos.network_config.mojom.IPSecConfigProperties = class {
  constructor(values = {}) {
    this.server_ca_refs = values.server_ca_refs !== undefined ? values.server_ca_refs : 0;
  }
};

// Struct: L2TPConfigProperties
chromeos.network_config.mojom.L2TPConfigProperties = class {
  constructor(values = {}) {
    this.username = values.username !== undefined ? values.username : false;
  }
};

// Struct: OpenVPNConfigProperties
chromeos.network_config.mojom.OpenVPNConfigProperties = class {
  constructor(values = {}) {
    this.user_authentication_type = values.user_authentication_type !== undefined ? values.user_authentication_type : false;
  }
};

// Struct: WireGuardConfigProperties
chromeos.network_config.mojom.WireGuardConfigProperties = class {
  constructor(values = {}) {
    this.ip_addresses = values.ip_addresses !== undefined ? values.ip_addresses : "";
    this.be = values.be !== undefined ? values.be : "";
    this.peers = values.peers !== undefined ? values.peers : "";
  }
};

// Struct: TextMessagesAllowState
chromeos.network_config.mojom.TextMessagesAllowState = class {
  constructor(values = {}) {
    this.allow_text_messages = values.allow_text_messages !== undefined ? values.allow_text_messages : false;
  }
};

// Struct: CellularConfigProperties
chromeos.network_config.mojom.CellularConfigProperties = class {
  constructor(values = {}) {
    this.text_message_allow_state = values.text_message_allow_state !== undefined ? values.text_message_allow_state : null;
  }
};

// Struct: EthernetConfigProperties
chromeos.network_config.mojom.EthernetConfigProperties = class {
  constructor(values = {}) {
    this.eap = values.eap !== undefined ? values.eap : "";
  }
};

// Struct: VPNConfigProperties
chromeos.network_config.mojom.VPNConfigProperties = class {
  constructor(values = {}) {
    this.wireguard = values.wireguard !== undefined ? values.wireguard : "";
    this.type = values.type !== undefined ? values.type : null;
  }
};

// Struct: WiFiConfigProperties
chromeos.network_config.mojom.WiFiConfigProperties = class {
  constructor(values = {}) {
    this.passphrase = values.passphrase !== undefined ? values.passphrase : "";
    this.kAutomatic = values.kAutomatic !== undefined ? values.kAutomatic : "";
  }
};

// Struct: ConfigProperties
chromeos.network_config.mojom.ConfigProperties = class {
  constructor(values = {}) {
    this.type_config = values.type_config !== undefined ? values.type_config : "";
  }
};

// Struct: CellularSimState
chromeos.network_config.mojom.CellularSimState = class {
  constructor(values = {}) {
    this.require_pin = values.require_pin !== undefined ? values.require_pin : false;
  }
};

// Struct: GlobalPolicy
chromeos.network_config.mojom.GlobalPolicy = class {
  constructor(values = {}) {
    this.true = values.true !== undefined ? values.true : false;
    this.true = values.true !== undefined ? values.true : false;
    this.true = values.true !== undefined ? values.true : false;
    this.false = values.false !== undefined ? values.false : false;
    this.false = values.false !== undefined ? values.false : false;
    this.false = values.false !== undefined ? values.false : false;
    this.blocked_hex_ssids = values.blocked_hex_ssids !== undefined ? values.blocked_hex_ssids : false;
    this.false = values.false !== undefined ? values.false : false;
    this.false = values.false !== undefined ? values.false : false;
    this.notifications = values.notifications !== undefined ? values.notifications : null;
    this.shown = values.shown !== undefined ? values.shown : null;
    this.kUnset = values.kUnset !== undefined ? values.kUnset : null;
  }
};

// Struct: VpnProvider
chromeos.network_config.mojom.VpnProvider = class {
  constructor(values = {}) {
    this.type = values.type !== undefined ? values.type : null;
    this.provider_id = values.provider_id !== undefined ? values.provider_id : "";
    this.provider_name = values.provider_name !== undefined ? values.provider_name : "";
    this.last_launch_time = values.last_launch_time !== undefined ? values.last_launch_time : "";
  }
};

// Struct: NetworkCertificate
chromeos.network_config.mojom.NetworkCertificate = class {
  constructor(values = {}) {
    this.type = values.type !== undefined ? values.type : null;
    this.issued_to = values.issued_to !== undefined ? values.issued_to : "";
    this.the = values.the !== undefined ? values.the : null;
    this.device_wide = values.device_wide !== undefined ? values.device_wide : false;
  }
};

// Struct: AlwaysOnVpnProperties
chromeos.network_config.mojom.AlwaysOnVpnProperties = class {
  constructor(values = {}) {
    this.mode = values.mode !== undefined ? values.mode : null;
    this.service_guid = values.service_guid !== undefined ? values.service_guid : "";
  }
};

// Struct: TrafficCounter
chromeos.network_config.mojom.TrafficCounter = class {
  constructor(values = {}) {
    this.tx_bytes = values.tx_bytes !== undefined ? values.tx_bytes : 0;
  }
};

// Interface: CrosNetworkConfig
chromeos.network_config.mojom.CrosNetworkConfigPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.network_config.mojom.CrosNetworkConfig';
  }

  addObserver(observer) {
    // Method: AddObserver
    // Call: AddObserver(observer)
  }

  getNetworkState(guid) {
    // Method: GetNetworkState
    return new Promise((resolve) => {
      // Call: GetNetworkState(guid)
      resolve({});
    });
  }

  getNetworkStateList(filter) {
    // Method: GetNetworkStateList
    return new Promise((resolve) => {
      // Call: GetNetworkStateList(filter)
      resolve({});
    });
  }

  getDeviceStateList() {
    // Method: GetDeviceStateList
    return new Promise((resolve) => {
      // Call: GetDeviceStateList()
      resolve({});
    });
  }

  getManagedProperties(guid) {
    // Method: GetManagedProperties
    return new Promise((resolve) => {
      // Call: GetManagedProperties(guid)
      resolve({});
    });
  }

  setProperties(guid, properties) {
    // Method: SetProperties
    return new Promise((resolve) => {
      // Call: SetProperties(guid, properties)
      resolve({});
    });
  }

  configureNetwork(properties, shared) {
    // Method: ConfigureNetwork
    return new Promise((resolve) => {
      // Call: ConfigureNetwork(properties, shared)
      resolve({});
    });
  }

  forgetNetwork(guid) {
    // Method: ForgetNetwork
    return new Promise((resolve) => {
      // Call: ForgetNetwork(guid)
      resolve({});
    });
  }

  setNetworkTypeEnabledState(type, enabled) {
    // Method: SetNetworkTypeEnabledState
    return new Promise((resolve) => {
      // Call: SetNetworkTypeEnabledState(type, enabled)
      resolve({});
    });
  }

  setCellularSimState(state) {
    // Method: SetCellularSimState
    return new Promise((resolve) => {
      // Call: SetCellularSimState(state)
      resolve({});
    });
  }

  selectCellularMobileNetwork(guid, network_id) {
    // Method: SelectCellularMobileNetwork
    return new Promise((resolve) => {
      // Call: SelectCellularMobileNetwork(guid, network_id)
      resolve({});
    });
  }

  requestNetworkScan(type) {
    // Method: RequestNetworkScan
    // Call: RequestNetworkScan(type)
  }

  getGlobalPolicy() {
    // Method: GetGlobalPolicy
    return new Promise((resolve) => {
      // Call: GetGlobalPolicy()
      resolve({});
    });
  }

  startConnect(guid) {
    // Method: StartConnect
    return new Promise((resolve) => {
      // Call: StartConnect(guid)
      resolve({});
    });
  }

  startDisconnect(guid) {
    // Method: StartDisconnect
    return new Promise((resolve) => {
      // Call: StartDisconnect(guid)
      resolve({});
    });
  }

  setVpnProviders(providers) {
    // Method: SetVpnProviders
    // Call: SetVpnProviders(providers)
  }

  getVpnProviders() {
    // Method: GetVpnProviders
    return new Promise((resolve) => {
      // Call: GetVpnProviders()
      resolve({});
    });
  }

  getNetworkCertificates() {
    // Method: GetNetworkCertificates
    return new Promise((resolve) => {
      // Call: GetNetworkCertificates()
      resolve({});
    });
  }

  getAlwaysOnVpn() {
    // Method: GetAlwaysOnVpn
    return new Promise((resolve) => {
      // Call: GetAlwaysOnVpn()
      resolve({});
    });
  }

  setAlwaysOnVpn(properties) {
    // Method: SetAlwaysOnVpn
    // Call: SetAlwaysOnVpn(properties)
  }

  getSupportedVpnTypes() {
    // Method: GetSupportedVpnTypes
    return new Promise((resolve) => {
      // Call: GetSupportedVpnTypes()
      resolve({});
    });
  }

  requestTrafficCounters(guid) {
    // Method: RequestTrafficCounters
    return new Promise((resolve) => {
      // Call: RequestTrafficCounters(guid)
      resolve({});
    });
  }

  resetTrafficCounters(guid) {
    // Method: ResetTrafficCounters
    // Call: ResetTrafficCounters(guid)
  }

  setTrafficCountersResetDay(guid, day) {
    // Method: SetTrafficCountersResetDay
    return new Promise((resolve) => {
      // Call: SetTrafficCountersResetDay(guid, day)
      resolve({});
    });
  }

  createCustomApn(network_guid, apn) {
    // Method: CreateCustomApn
    return new Promise((resolve) => {
      // Call: CreateCustomApn(network_guid, apn)
      resolve({});
    });
  }

  createExclusivelyEnabledCustomApn(network_guid, apn) {
    // Method: CreateExclusivelyEnabledCustomApn
    return new Promise((resolve) => {
      // Call: CreateExclusivelyEnabledCustomApn(network_guid, apn)
      resolve({});
    });
  }

  removeCustomApn(network_guid, apn_id) {
    // Method: RemoveCustomApn
    // Call: RemoveCustomApn(network_guid, apn_id)
  }

  modifyCustomApn(network_guid, apn) {
    // Method: ModifyCustomApn
    // Call: ModifyCustomApn(network_guid, apn)
  }

};

chromeos.network_config.mojom.CrosNetworkConfigRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CrosNetworkConfigObserver
chromeos.network_config.mojom.CrosNetworkConfigObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.network_config.mojom.CrosNetworkConfigObserver';
  }

  onActiveNetworksChanged(networks) {
    // Method: OnActiveNetworksChanged
    // Call: OnActiveNetworksChanged(networks)
  }

  onNetworkStateChanged(network) {
    // Method: OnNetworkStateChanged
    // Call: OnNetworkStateChanged(network)
  }

  onNetworkStateListChanged() {
    // Method: OnNetworkStateListChanged
    // Call: OnNetworkStateListChanged()
  }

  onDeviceStateListChanged() {
    // Method: OnDeviceStateListChanged
    // Call: OnDeviceStateListChanged()
  }

  onVpnProvidersChanged() {
    // Method: OnVpnProvidersChanged
    // Call: OnVpnProvidersChanged()
  }

  onNetworkCertificatesChanged() {
    // Method: OnNetworkCertificatesChanged
    // Call: OnNetworkCertificatesChanged()
  }

  onPoliciesApplied(userhash) {
    // Method: OnPoliciesApplied
    // Call: OnPoliciesApplied(userhash)
  }

};

chromeos.network_config.mojom.CrosNetworkConfigObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
