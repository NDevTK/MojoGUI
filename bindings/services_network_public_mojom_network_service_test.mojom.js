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
network.mojom.RuleSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.Rule',
      packedSize: 48,
      fields: [
        { name: 'resolver_type', packedOffset: 0, packedBitOffset: 0, type: network.mojom.ResolverTypeSpec, nullable: false },
        { name: 'host_pattern', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'replacement', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'dns_aliases', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'host_resolver_flags', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SimpleCacheOpenEntryResult
network.mojom.SimpleCacheOpenEntryResultSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SimpleCacheOpenEntryResult',
      packedSize: 24,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'entry', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: SimpleCacheEntry
network.mojom.SimpleCacheEntry = {};

network.mojom.SimpleCacheEntryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.SimpleCacheEntryRemote = class {
  static get $interfaceName() {
    return 'network.mojom.SimpleCacheEntry';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.SimpleCacheEntryPendingReceiver,
      handle);
    this.$ = new network.mojom.SimpleCacheEntryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.SimpleCacheEntryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  writeData(index, offset, data, truncate) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.SimpleCacheEntry_WriteData_ParamsSpec,
      network.mojom.SimpleCacheEntry_WriteData_ResponseParamsSpec,
      [index, offset, data, truncate]);
  }

  readData(index, offset, length) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.SimpleCacheEntry_ReadData_ParamsSpec,
      network.mojom.SimpleCacheEntry_ReadData_ResponseParamsSpec,
      [index, offset, length]);
  }

  writeSparseData(offset, data) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.SimpleCacheEntry_WriteSparseData_ParamsSpec,
      network.mojom.SimpleCacheEntry_WriteSparseData_ResponseParamsSpec,
      [offset, data]);
  }

  readSparseData(offset, length) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      network.mojom.SimpleCacheEntry_ReadSparseData_ParamsSpec,
      network.mojom.SimpleCacheEntry_ReadSparseData_ResponseParamsSpec,
      [offset, length]);
  }

  close() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      network.mojom.SimpleCacheEntry_Close_ParamsSpec,
      null,
      []);
  }

};

network.mojom.SimpleCacheEntry.getRemote = function() {
  let remote = new network.mojom.SimpleCacheEntryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.SimpleCacheEntry',
    'context');
  return remote.$;
};

// ParamsSpec for WriteData
network.mojom.SimpleCacheEntry_WriteData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SimpleCacheEntry.WriteData_Params',
      packedSize: 32,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'offset', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'truncate', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.SimpleCacheEntry_WriteData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SimpleCacheEntry.WriteData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ReadData
network.mojom.SimpleCacheEntry_ReadData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SimpleCacheEntry.ReadData_Params',
      packedSize: 24,
      fields: [
        { name: 'index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'offset', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'length', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.SimpleCacheEntry_ReadData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SimpleCacheEntry.ReadData_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for WriteSparseData
network.mojom.SimpleCacheEntry_WriteSparseData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SimpleCacheEntry.WriteSparseData_Params',
      packedSize: 24,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'offset', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.SimpleCacheEntry_WriteSparseData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SimpleCacheEntry.WriteSparseData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ReadSparseData
network.mojom.SimpleCacheEntry_ReadSparseData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SimpleCacheEntry.ReadSparseData_Params',
      packedSize: 16,
      fields: [
        { name: 'offset', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'length', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.SimpleCacheEntry_ReadSparseData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SimpleCacheEntry.ReadSparseData_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Close
network.mojom.SimpleCacheEntry_Close_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SimpleCacheEntry.Close_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.SimpleCacheEntryPtr = network.mojom.SimpleCacheEntryRemote;
network.mojom.SimpleCacheEntryRequest = network.mojom.SimpleCacheEntryPendingReceiver;


// Interface: SimpleCacheEntryEnumerator
network.mojom.SimpleCacheEntryEnumerator = {};

network.mojom.SimpleCacheEntryEnumeratorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.SimpleCacheEntryEnumeratorRemote = class {
  static get $interfaceName() {
    return 'network.mojom.SimpleCacheEntryEnumerator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.SimpleCacheEntryEnumeratorPendingReceiver,
      handle);
    this.$ = new network.mojom.SimpleCacheEntryEnumeratorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.SimpleCacheEntryEnumeratorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getNext() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.SimpleCacheEntryEnumerator_GetNext_ParamsSpec,
      network.mojom.SimpleCacheEntryEnumerator_GetNext_ResponseParamsSpec,
      []);
  }

};

network.mojom.SimpleCacheEntryEnumerator.getRemote = function() {
  let remote = new network.mojom.SimpleCacheEntryEnumeratorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.SimpleCacheEntryEnumerator',
    'context');
  return remote.$;
};

// ParamsSpec for GetNext
network.mojom.SimpleCacheEntryEnumerator_GetNext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SimpleCacheEntryEnumerator.GetNext_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.SimpleCacheEntryEnumerator_GetNext_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SimpleCacheEntryEnumerator.GetNext_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: network.mojom.SimpleCacheOpenEntryResultSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.SimpleCacheEntryEnumeratorPtr = network.mojom.SimpleCacheEntryEnumeratorRemote;
network.mojom.SimpleCacheEntryEnumeratorRequest = network.mojom.SimpleCacheEntryEnumeratorPendingReceiver;


// Interface: SimpleCache
network.mojom.SimpleCache = {};

network.mojom.SimpleCachePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.SimpleCacheRemote = class {
  static get $interfaceName() {
    return 'network.mojom.SimpleCache';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.SimpleCachePendingReceiver,
      handle);
    this.$ = new network.mojom.SimpleCacheRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.SimpleCacheRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createEntry(key) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.SimpleCache_CreateEntry_ParamsSpec,
      network.mojom.SimpleCache_CreateEntry_ResponseParamsSpec,
      [key]);
  }

  openEntry(key) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.SimpleCache_OpenEntry_ParamsSpec,
      network.mojom.SimpleCache_OpenEntry_ResponseParamsSpec,
      [key]);
  }

  doomEntry(key) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.SimpleCache_DoomEntry_ParamsSpec,
      network.mojom.SimpleCache_DoomEntry_ResponseParamsSpec,
      [key]);
  }

  doomAllEntries() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      network.mojom.SimpleCache_DoomAllEntries_ParamsSpec,
      network.mojom.SimpleCache_DoomAllEntries_ResponseParamsSpec,
      []);
  }

  enumerateEntries(receiver) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      network.mojom.SimpleCache_EnumerateEntries_ParamsSpec,
      null,
      [receiver]);
  }

  detach() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      network.mojom.SimpleCache_Detach_ParamsSpec,
      null,
      []);
  }

};

network.mojom.SimpleCache.getRemote = function() {
  let remote = new network.mojom.SimpleCacheRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.SimpleCache',
    'context');
  return remote.$;
};

// ParamsSpec for CreateEntry
network.mojom.SimpleCache_CreateEntry_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SimpleCache.CreateEntry_Params',
      packedSize: 16,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.SimpleCache_CreateEntry_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SimpleCache.CreateEntry_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'entry', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'error', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenEntry
network.mojom.SimpleCache_OpenEntry_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SimpleCache.OpenEntry_Params',
      packedSize: 16,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.SimpleCache_OpenEntry_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SimpleCache.OpenEntry_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'entry', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'error', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DoomEntry
network.mojom.SimpleCache_DoomEntry_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SimpleCache.DoomEntry_Params',
      packedSize: 16,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.SimpleCache_DoomEntry_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SimpleCache.DoomEntry_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DoomAllEntries
network.mojom.SimpleCache_DoomAllEntries_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SimpleCache.DoomAllEntries_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.SimpleCache_DoomAllEntries_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SimpleCache.DoomAllEntries_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EnumerateEntries
network.mojom.SimpleCache_EnumerateEntries_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SimpleCache.EnumerateEntries_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Detach
network.mojom.SimpleCache_Detach_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SimpleCache.Detach_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.SimpleCachePtr = network.mojom.SimpleCacheRemote;
network.mojom.SimpleCacheRequest = network.mojom.SimpleCachePendingReceiver;


// Interface: NetworkServiceTest
network.mojom.NetworkServiceTest = {};

network.mojom.NetworkServiceTestPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.NetworkServiceTestRemote = class {
  static get $interfaceName() {
    return 'network.mojom.NetworkServiceTest';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.NetworkServiceTestPendingReceiver,
      handle);
    this.$ = new network.mojom.NetworkServiceTestRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.NetworkServiceTestRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addRules(rules) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.NetworkServiceTest_AddRules_ParamsSpec,
      null,
      [rules]);
  }

  simulateNetworkChange(type) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.NetworkServiceTest_SimulateNetworkChange_ParamsSpec,
      null,
      [type]);
  }

  simulateNetworkQualityChange(type) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.NetworkServiceTest_SimulateNetworkQualityChange_ParamsSpec,
      null,
      [type]);
  }

  forceNetworkQualityEstimatorReportWifiAsSlow2G() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      network.mojom.NetworkServiceTest_ForceNetworkQualityEstimatorReportWifiAsSlow2G_ParamsSpec,
      null,
      []);
  }

  simulateCrash() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      network.mojom.NetworkServiceTest_SimulateCrash_ParamsSpec,
      null,
      []);
  }

  mockCertVerifierSetDefaultResult(default_result) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      network.mojom.NetworkServiceTest_MockCertVerifierSetDefaultResult_ParamsSpec,
      null,
      [default_result]);
  }

  mockCertVerifierAddResultForCertAndHost(cert, host_pattern, verify_result, rv) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      network.mojom.NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_ParamsSpec,
      null,
      [cert, host_pattern, verify_result, rv]);
  }

  setTransportSecurityStateTestSource(enable_unittest_source) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      network.mojom.NetworkServiceTest_SetTransportSecurityStateTestSource_ParamsSpec,
      null,
      [enable_unittest_source]);
  }

  setAllowNetworkAccessToHostResolutions() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      network.mojom.NetworkServiceTest_SetAllowNetworkAccessToHostResolutions_ParamsSpec,
      null,
      []);
  }

  replaceSystemDnsConfig() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      network.mojom.NetworkServiceTest_ReplaceSystemDnsConfig_ParamsSpec,
      null,
      []);
  }

  setTestDohConfig(secure_dns_mode, doh_config) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      network.mojom.NetworkServiceTest_SetTestDohConfig_ParamsSpec,
      null,
      [secure_dns_mode, doh_config]);
  }

  crashOnResolveHost(host) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      network.mojom.NetworkServiceTest_CrashOnResolveHost_ParamsSpec,
      null,
      [host]);
  }

  crashOnGetCookieList() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      network.mojom.NetworkServiceTest_CrashOnGetCookieList_ParamsSpec,
      null,
      []);
  }

  getLatestMemoryPressureLevel() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      network.mojom.NetworkServiceTest_GetLatestMemoryPressureLevel_ParamsSpec,
      network.mojom.NetworkServiceTest_GetLatestMemoryPressureLevel_ResponseParamsSpec,
      []);
  }

  getPeerToPeerConnectionsCountChange() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      network.mojom.NetworkServiceTest_GetPeerToPeerConnectionsCountChange_ParamsSpec,
      network.mojom.NetworkServiceTest_GetPeerToPeerConnectionsCountChange_ResponseParamsSpec,
      []);
  }

  getEnvironmentVariableValue(name) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      network.mojom.NetworkServiceTest_GetEnvironmentVariableValue_ParamsSpec,
      network.mojom.NetworkServiceTest_GetEnvironmentVariableValue_ResponseParamsSpec,
      [name]);
  }

  log(message) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      network.mojom.NetworkServiceTest_Log_ParamsSpec,
      null,
      [message]);
  }

  activateFieldTrial(field_trial_name) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      network.mojom.NetworkServiceTest_ActivateFieldTrial_ParamsSpec,
      null,
      [field_trial_name]);
  }

  setSCTAuditingRetryDelay(delay) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      network.mojom.NetworkServiceTest_SetSCTAuditingRetryDelay_ParamsSpec,
      null,
      [delay]);
  }

  openFile(path) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      network.mojom.NetworkServiceTest_OpenFile_ParamsSpec,
      network.mojom.NetworkServiceTest_OpenFile_ResponseParamsSpec,
      [path]);
  }

  enumerateFiles(path, factory) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      network.mojom.NetworkServiceTest_EnumerateFiles_ParamsSpec,
      network.mojom.NetworkServiceTest_EnumerateFiles_ResponseParamsSpec,
      [path, factory]);
  }

  createSimpleCache(factory, path, reset) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      network.mojom.NetworkServiceTest_CreateSimpleCache_ParamsSpec,
      network.mojom.NetworkServiceTest_CreateSimpleCache_ResponseParamsSpec,
      [factory, path, reset]);
  }

  makeRequestToServer(s, endpoint) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      network.mojom.NetworkServiceTest_MakeRequestToServer_ParamsSpec,
      network.mojom.NetworkServiceTest_MakeRequestToServer_ResponseParamsSpec,
      [s, endpoint]);
  }

  resolveOwnHostnameWithSystemDns() {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      network.mojom.NetworkServiceTest_ResolveOwnHostnameWithSystemDns_ParamsSpec,
      network.mojom.NetworkServiceTest_ResolveOwnHostnameWithSystemDns_ResponseParamsSpec,
      []);
  }

  setIPv6ProbeResult(success) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      network.mojom.NetworkServiceTest_SetIPv6ProbeResult_ParamsSpec,
      null,
      [success]);
  }

  getAddressMapCacheLinux() {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      network.mojom.NetworkServiceTest_GetAddressMapCacheLinux_ParamsSpec,
      network.mojom.NetworkServiceTest_GetAddressMapCacheLinux_ResponseParamsSpec,
      []);
  }

  allowsGSSAPILibraryLoad() {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      network.mojom.NetworkServiceTest_AllowsGSSAPILibraryLoad_ParamsSpec,
      network.mojom.NetworkServiceTest_AllowsGSSAPILibraryLoad_ResponseParamsSpec,
      []);
  }

  disableExclusiveCookieDatabaseLockingForTesting() {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      network.mojom.NetworkServiceTest_DisableExclusiveCookieDatabaseLockingForTesting_ParamsSpec,
      null,
      []);
  }

  isHappyEyeballsV3Enabled() {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      network.mojom.NetworkServiceTest_IsHappyEyeballsV3Enabled_ParamsSpec,
      network.mojom.NetworkServiceTest_IsHappyEyeballsV3Enabled_ResponseParamsSpec,
      []);
  }

};

network.mojom.NetworkServiceTest.getRemote = function() {
  let remote = new network.mojom.NetworkServiceTestRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.NetworkServiceTest',
    'context');
  return remote.$;
};

// ParamsSpec for AddRules
network.mojom.NetworkServiceTest_AddRules_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkServiceTest.AddRules_Params',
      packedSize: 16,
      fields: [
        { name: 'rules', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SimulateNetworkChange
network.mojom.NetworkServiceTest_SimulateNetworkChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkServiceTest.SimulateNetworkChange_Params',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: network.mojom.ConnectionTypeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SimulateNetworkQualityChange
network.mojom.NetworkServiceTest_SimulateNetworkQualityChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkServiceTest.SimulateNetworkQualityChange_Params',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: network.mojom.EffectiveConnectionTypeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ForceNetworkQualityEstimatorReportWifiAsSlow2G
network.mojom.NetworkServiceTest_ForceNetworkQualityEstimatorReportWifiAsSlow2G_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkServiceTest.ForceNetworkQualityEstimatorReportWifiAsSlow2G_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SimulateCrash
network.mojom.NetworkServiceTest_SimulateCrash_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkServiceTest.SimulateCrash_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for MockCertVerifierSetDefaultResult
network.mojom.NetworkServiceTest_MockCertVerifierSetDefaultResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkServiceTest.MockCertVerifierSetDefaultResult_Params',
      packedSize: 16,
      fields: [
        { name: 'default_result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for MockCertVerifierAddResultForCertAndHost
network.mojom.NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkServiceTest.MockCertVerifierAddResultForCertAndHost_Params',
      packedSize: 40,
      fields: [
        { name: 'cert', packedOffset: 0, packedBitOffset: 0, type: network.mojom.X509CertificateSpec, nullable: false },
        { name: 'host_pattern', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'verify_result', packedOffset: 16, packedBitOffset: 0, type: network.mojom.CertVerifyResultSpec, nullable: false },
        { name: 'rv', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetTransportSecurityStateTestSource
network.mojom.NetworkServiceTest_SetTransportSecurityStateTestSource_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkServiceTest.SetTransportSecurityStateTestSource_Params',
      packedSize: 16,
      fields: [
        { name: 'enable_unittest_source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetAllowNetworkAccessToHostResolutions
network.mojom.NetworkServiceTest_SetAllowNetworkAccessToHostResolutions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkServiceTest.SetAllowNetworkAccessToHostResolutions_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ReplaceSystemDnsConfig
network.mojom.NetworkServiceTest_ReplaceSystemDnsConfig_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkServiceTest.ReplaceSystemDnsConfig_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetTestDohConfig
network.mojom.NetworkServiceTest_SetTestDohConfig_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkServiceTest.SetTestDohConfig_Params',
      packedSize: 24,
      fields: [
        { name: 'secure_dns_mode', packedOffset: 0, packedBitOffset: 0, type: network.mojom.SecureDnsModeSpec, nullable: false },
        { name: 'doh_config', packedOffset: 8, packedBitOffset: 0, type: network.mojom.DnsOverHttpsConfigSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CrashOnResolveHost
network.mojom.NetworkServiceTest_CrashOnResolveHost_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkServiceTest.CrashOnResolveHost_Params',
      packedSize: 16,
      fields: [
        { name: 'host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CrashOnGetCookieList
network.mojom.NetworkServiceTest_CrashOnGetCookieList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkServiceTest.CrashOnGetCookieList_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetLatestMemoryPressureLevel
network.mojom.NetworkServiceTest_GetLatestMemoryPressureLevel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkServiceTest.GetLatestMemoryPressureLevel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkServiceTest_GetLatestMemoryPressureLevel_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkServiceTest.GetLatestMemoryPressureLevel_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'memory_pressure_level', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.MemoryPressureLevelSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetPeerToPeerConnectionsCountChange
network.mojom.NetworkServiceTest_GetPeerToPeerConnectionsCountChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkServiceTest.GetPeerToPeerConnectionsCountChange_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkServiceTest_GetPeerToPeerConnectionsCountChange_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkServiceTest.GetPeerToPeerConnectionsCountChange_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'connection_count', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetEnvironmentVariableValue
network.mojom.NetworkServiceTest_GetEnvironmentVariableValue_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkServiceTest.GetEnvironmentVariableValue_Params',
      packedSize: 16,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkServiceTest_GetEnvironmentVariableValue_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkServiceTest.GetEnvironmentVariableValue_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Log
network.mojom.NetworkServiceTest_Log_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkServiceTest.Log_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ActivateFieldTrial
network.mojom.NetworkServiceTest_ActivateFieldTrial_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkServiceTest.ActivateFieldTrial_Params',
      packedSize: 16,
      fields: [
        { name: 'field_trial_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetSCTAuditingRetryDelay
network.mojom.NetworkServiceTest_SetSCTAuditingRetryDelay_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkServiceTest.SetSCTAuditingRetryDelay_Params',
      packedSize: 16,
      fields: [
        { name: 'delay', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenFile
network.mojom.NetworkServiceTest_OpenFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkServiceTest.OpenFile_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkServiceTest_OpenFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkServiceTest.OpenFile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EnumerateFiles
network.mojom.NetworkServiceTest_EnumerateFiles_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkServiceTest.EnumerateFiles_Params',
      packedSize: 24,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false },
        { name: 'factory', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkServiceTest_EnumerateFiles_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkServiceTest.EnumerateFiles_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'entries', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateSimpleCache
network.mojom.NetworkServiceTest_CreateSimpleCache_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkServiceTest.CreateSimpleCache_Params',
      packedSize: 32,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false },
        { name: 'factory', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'reset', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkServiceTest_CreateSimpleCache_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkServiceTest.CreateSimpleCache_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'backend', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for MakeRequestToServer
network.mojom.NetworkServiceTest_MakeRequestToServer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkServiceTest.MakeRequestToServer_Params',
      packedSize: 24,
      fields: [
        { name: 's', packedOffset: 0, packedBitOffset: 0, type: network.mojom.TransferableSocketSpec, nullable: false },
        { name: 'endpoint', packedOffset: 8, packedBitOffset: 0, type: network.mojom.IPEndPointSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkServiceTest_MakeRequestToServer_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkServiceTest.MakeRequestToServer_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ResolveOwnHostnameWithSystemDns
network.mojom.NetworkServiceTest_ResolveOwnHostnameWithSystemDns_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkServiceTest.ResolveOwnHostnameWithSystemDns_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkServiceTest_ResolveOwnHostnameWithSystemDns_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkServiceTest.ResolveOwnHostnameWithSystemDns_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'addr_list', packedOffset: 0, packedBitOffset: 0, type: network.mojom.AddressListSpec, nullable: false },
        { name: 'os_error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'net_error', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetIPv6ProbeResult
network.mojom.NetworkServiceTest_SetIPv6ProbeResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkServiceTest.SetIPv6ProbeResult_Params',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetAddressMapCacheLinux
network.mojom.NetworkServiceTest_GetAddressMapCacheLinux_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkServiceTest.GetAddressMapCacheLinux_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkServiceTest_GetAddressMapCacheLinux_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkServiceTest.GetAddressMapCacheLinux_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'addr_map', packedOffset: 0, packedBitOffset: 0, type: network.mojom.AddressMapSpec, nullable: false },
        { name: 'links', packedOffset: 8, packedBitOffset: 0, type: network.mojom.OnlineLinksSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AllowsGSSAPILibraryLoad
network.mojom.NetworkServiceTest_AllowsGSSAPILibraryLoad_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkServiceTest.AllowsGSSAPILibraryLoad_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkServiceTest_AllowsGSSAPILibraryLoad_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkServiceTest.AllowsGSSAPILibraryLoad_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'allow_gssapi_library_load', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DisableExclusiveCookieDatabaseLockingForTesting
network.mojom.NetworkServiceTest_DisableExclusiveCookieDatabaseLockingForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkServiceTest.DisableExclusiveCookieDatabaseLockingForTesting_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for IsHappyEyeballsV3Enabled
network.mojom.NetworkServiceTest_IsHappyEyeballsV3Enabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkServiceTest.IsHappyEyeballsV3Enabled_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetworkServiceTest_IsHappyEyeballsV3Enabled_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkServiceTest.IsHappyEyeballsV3Enabled_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_happy_eyeballs_v3_enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.NetworkServiceTestPtr = network.mojom.NetworkServiceTestRemote;
network.mojom.NetworkServiceTestRequest = network.mojom.NetworkServiceTestPendingReceiver;

