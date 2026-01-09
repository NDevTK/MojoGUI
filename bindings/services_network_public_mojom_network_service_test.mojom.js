// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/network_service_test.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: ResolverType
network.mojom.ResolverType = {
  kResolverTypeFail: 0,
  kResolverTypeFailTimeout: 1,
  kResolverTypeSystem: 2,
  kResolverTypeIPLiteral: 3,
  kResolverTypeDirectLookup: 4,
};

// Struct: Rule
network.mojom.Rule = class {
  constructor(values = {}) {
    this.dns_aliases = values.dns_aliases !== undefined ? values.dns_aliases : 0;
  }
};

// Struct: SimpleCacheOpenEntryResult
network.mojom.SimpleCacheOpenEntryResult = class {
  constructor(values = {}) {
    this.entry = values.entry !== undefined ? values.entry : 0;
  }
};

// Interface: SimpleCacheEntry
network.mojom.SimpleCacheEntryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.SimpleCacheEntry';
  }

  writeData(index, offset, data, truncate) {
    // Method: WriteData
    return new Promise((resolve) => {
      // Call: WriteData(index, offset, data, truncate)
      resolve({});
    });
  }

  readData(index, offset, length) {
    // Method: ReadData
    return new Promise((resolve) => {
      // Call: ReadData(index, offset, length)
      resolve({});
    });
  }

  writeSparseData(offset, data) {
    // Method: WriteSparseData
    return new Promise((resolve) => {
      // Call: WriteSparseData(offset, data)
      resolve({});
    });
  }

  readSparseData(offset, length) {
    // Method: ReadSparseData
    return new Promise((resolve) => {
      // Call: ReadSparseData(offset, length)
      resolve({});
    });
  }

  close() {
    // Method: Close
    // Call: Close()
  }

};

network.mojom.SimpleCacheEntryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SimpleCacheEntryEnumerator
network.mojom.SimpleCacheEntryEnumeratorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.SimpleCacheEntryEnumerator';
  }

  getNext() {
    // Method: GetNext
    return new Promise((resolve) => {
      // Call: GetNext()
      resolve({});
    });
  }

};

network.mojom.SimpleCacheEntryEnumeratorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SimpleCache
network.mojom.SimpleCachePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.SimpleCache';
  }

  createEntry(key) {
    // Method: CreateEntry
    return new Promise((resolve) => {
      // Call: CreateEntry(key)
      resolve({});
    });
  }

  openEntry(key) {
    // Method: OpenEntry
    return new Promise((resolve) => {
      // Call: OpenEntry(key)
      resolve({});
    });
  }

  doomEntry(key) {
    // Method: DoomEntry
    return new Promise((resolve) => {
      // Call: DoomEntry(key)
      resolve({});
    });
  }

  doomAllEntries() {
    // Method: DoomAllEntries
    return new Promise((resolve) => {
      // Call: DoomAllEntries()
      resolve({});
    });
  }

  enumerateEntries(receiver) {
    // Method: EnumerateEntries
    // Call: EnumerateEntries(receiver)
  }

  detach() {
    // Method: Detach
    // Call: Detach()
  }

};

network.mojom.SimpleCacheRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: NetworkServiceTest
network.mojom.NetworkServiceTestPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.NetworkServiceTest';
  }

  addRules(rules) {
    // Method: AddRules
    // Call: AddRules(rules)
  }

  simulateNetworkChange(type) {
    // Method: SimulateNetworkChange
    // Call: SimulateNetworkChange(type)
  }

  simulateNetworkQualityChange(type) {
    // Method: SimulateNetworkQualityChange
    // Call: SimulateNetworkQualityChange(type)
  }

  forceNetworkQualityEstimatorReportWifiAsSlow2G() {
    // Method: ForceNetworkQualityEstimatorReportWifiAsSlow2G
    // Call: ForceNetworkQualityEstimatorReportWifiAsSlow2G()
  }

  simulateCrash() {
    // Method: SimulateCrash
    // Call: SimulateCrash()
  }

  mockCertVerifierSetDefaultResult(default_result) {
    // Method: MockCertVerifierSetDefaultResult
    // Call: MockCertVerifierSetDefaultResult(default_result)
  }

  mockCertVerifierAddResultForCertAndHost(cert, host_pattern, verify_result, rv) {
    // Method: MockCertVerifierAddResultForCertAndHost
    // Call: MockCertVerifierAddResultForCertAndHost(cert, host_pattern, verify_result, rv)
  }

  setTransportSecurityStateTestSource(enable_unittest_source) {
    // Method: SetTransportSecurityStateTestSource
    // Call: SetTransportSecurityStateTestSource(enable_unittest_source)
  }

  setAllowNetworkAccessToHostResolutions() {
    // Method: SetAllowNetworkAccessToHostResolutions
    // Call: SetAllowNetworkAccessToHostResolutions()
  }

  replaceSystemDnsConfig() {
    // Method: ReplaceSystemDnsConfig
    // Call: ReplaceSystemDnsConfig()
  }

  setTestDohConfig(secure_dns_mode, doh_config) {
    // Method: SetTestDohConfig
    // Call: SetTestDohConfig(secure_dns_mode, doh_config)
  }

  crashOnResolveHost(host) {
    // Method: CrashOnResolveHost
    // Call: CrashOnResolveHost(host)
  }

  crashOnGetCookieList() {
    // Method: CrashOnGetCookieList
    // Call: CrashOnGetCookieList()
  }

  getLatestMemoryPressureLevel() {
    // Method: GetLatestMemoryPressureLevel
    return new Promise((resolve) => {
      // Call: GetLatestMemoryPressureLevel()
      resolve({});
    });
  }

  getPeerToPeerConnectionsCountChange() {
    // Method: GetPeerToPeerConnectionsCountChange
    return new Promise((resolve) => {
      // Call: GetPeerToPeerConnectionsCountChange()
      resolve({});
    });
  }

  getEnvironmentVariableValue(name) {
    // Method: GetEnvironmentVariableValue
    return new Promise((resolve) => {
      // Call: GetEnvironmentVariableValue(name)
      resolve({});
    });
  }

  log(message) {
    // Method: Log
    // Call: Log(message)
  }

  activateFieldTrial(field_trial_name) {
    // Method: ActivateFieldTrial
    // Call: ActivateFieldTrial(field_trial_name)
  }

  setSCTAuditingRetryDelay(delay) {
    // Method: SetSCTAuditingRetryDelay
    // Call: SetSCTAuditingRetryDelay(delay)
  }

  openFile(path) {
    // Method: OpenFile
    return new Promise((resolve) => {
      // Call: OpenFile(path)
      resolve({});
    });
  }

  enumerateFiles(path, factory) {
    // Method: EnumerateFiles
    return new Promise((resolve) => {
      // Call: EnumerateFiles(path, factory)
      resolve({});
    });
  }

  createSimpleCache(factory, path, reset) {
    // Method: CreateSimpleCache
    return new Promise((resolve) => {
      // Call: CreateSimpleCache(factory, path, reset)
      resolve({});
    });
  }

  makeRequestToServer(s, endpoint) {
    // Method: MakeRequestToServer
    return new Promise((resolve) => {
      // Call: MakeRequestToServer(s, endpoint)
      resolve({});
    });
  }

  resolveOwnHostnameWithSystemDns() {
    // Method: ResolveOwnHostnameWithSystemDns
    return new Promise((resolve) => {
      // Call: ResolveOwnHostnameWithSystemDns()
      resolve({});
    });
  }

  setIPv6ProbeResult(success) {
    // Method: SetIPv6ProbeResult
    // Call: SetIPv6ProbeResult(success)
  }

  getAddressMapCacheLinux() {
    // Method: GetAddressMapCacheLinux
    return new Promise((resolve) => {
      // Call: GetAddressMapCacheLinux()
      resolve({});
    });
  }

  allowsGSSAPILibraryLoad() {
    // Method: AllowsGSSAPILibraryLoad
    return new Promise((resolve) => {
      // Call: AllowsGSSAPILibraryLoad()
      resolve({});
    });
  }

  disableExclusiveCookieDatabaseLockingForTesting() {
    // Method: DisableExclusiveCookieDatabaseLockingForTesting
    // Call: DisableExclusiveCookieDatabaseLockingForTesting()
  }

  isHappyEyeballsV3Enabled() {
    // Method: IsHappyEyeballsV3Enabled
    return new Promise((resolve) => {
      // Call: IsHappyEyeballsV3Enabled()
      resolve({});
    });
  }

};

network.mojom.NetworkServiceTestRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
