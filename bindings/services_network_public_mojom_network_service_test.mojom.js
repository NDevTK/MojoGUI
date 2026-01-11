// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/network_service_test.mojom
// Module: network.mojom

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var mojo_base = mojo_base || {};

network.mojom.ResolverTypeSpec = { $: mojo.internal.Enum() };
network.mojom.RuleSpec = { $: {} };
network.mojom.SimpleCacheOpenEntryResultSpec = { $: {} };
network.mojom.SimpleCacheEntry = {};
network.mojom.SimpleCacheEntry.$interfaceName = 'network.mojom.SimpleCacheEntry';
network.mojom.SimpleCacheEntry_WriteData_ParamsSpec = { $: {} };
network.mojom.SimpleCacheEntry_WriteData_ResponseParamsSpec = { $: {} };
network.mojom.SimpleCacheEntry_ReadData_ParamsSpec = { $: {} };
network.mojom.SimpleCacheEntry_ReadData_ResponseParamsSpec = { $: {} };
network.mojom.SimpleCacheEntry_WriteSparseData_ParamsSpec = { $: {} };
network.mojom.SimpleCacheEntry_WriteSparseData_ResponseParamsSpec = { $: {} };
network.mojom.SimpleCacheEntry_ReadSparseData_ParamsSpec = { $: {} };
network.mojom.SimpleCacheEntry_ReadSparseData_ResponseParamsSpec = { $: {} };
network.mojom.SimpleCacheEntry_Close_ParamsSpec = { $: {} };
network.mojom.SimpleCacheEntry_Close_ResponseParamsSpec = { $: {} };
network.mojom.SimpleCacheEntryEnumerator = {};
network.mojom.SimpleCacheEntryEnumerator.$interfaceName = 'network.mojom.SimpleCacheEntryEnumerator';
network.mojom.SimpleCacheEntryEnumerator_GetNext_ParamsSpec = { $: {} };
network.mojom.SimpleCacheEntryEnumerator_GetNext_ResponseParamsSpec = { $: {} };
network.mojom.SimpleCache = {};
network.mojom.SimpleCache.$interfaceName = 'network.mojom.SimpleCache';
network.mojom.SimpleCache_CreateEntry_ParamsSpec = { $: {} };
network.mojom.SimpleCache_CreateEntry_ResponseParamsSpec = { $: {} };
network.mojom.SimpleCache_OpenEntry_ParamsSpec = { $: {} };
network.mojom.SimpleCache_OpenEntry_ResponseParamsSpec = { $: {} };
network.mojom.SimpleCache_DoomEntry_ParamsSpec = { $: {} };
network.mojom.SimpleCache_DoomEntry_ResponseParamsSpec = { $: {} };
network.mojom.SimpleCache_DoomAllEntries_ParamsSpec = { $: {} };
network.mojom.SimpleCache_DoomAllEntries_ResponseParamsSpec = { $: {} };
network.mojom.SimpleCache_EnumerateEntries_ParamsSpec = { $: {} };
network.mojom.SimpleCache_Detach_ParamsSpec = { $: {} };
network.mojom.SimpleCache_Detach_ResponseParamsSpec = { $: {} };
network.mojom.NetworkServiceTest = {};
network.mojom.NetworkServiceTest.$interfaceName = 'network.mojom.NetworkServiceTest';
network.mojom.NetworkServiceTest_AddRules_ParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_AddRules_ResponseParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_SimulateNetworkChange_ParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_SimulateNetworkChange_ResponseParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_SimulateNetworkQualityChange_ParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_SimulateNetworkQualityChange_ResponseParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_ForceNetworkQualityEstimatorReportWifiAsSlow2G_ParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_ForceNetworkQualityEstimatorReportWifiAsSlow2G_ResponseParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_SimulateCrash_ParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_MockCertVerifierSetDefaultResult_ParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_MockCertVerifierSetDefaultResult_ResponseParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_ParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_ResponseParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_SetTransportSecurityStateTestSource_ParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_SetTransportSecurityStateTestSource_ResponseParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_SetAllowNetworkAccessToHostResolutions_ParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_SetAllowNetworkAccessToHostResolutions_ResponseParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_ReplaceSystemDnsConfig_ParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_ReplaceSystemDnsConfig_ResponseParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_SetTestDohConfig_ParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_SetTestDohConfig_ResponseParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_CrashOnResolveHost_ParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_CrashOnGetCookieList_ParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_GetLatestMemoryPressureLevel_ParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_GetLatestMemoryPressureLevel_ResponseParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_GetPeerToPeerConnectionsCountChange_ParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_GetPeerToPeerConnectionsCountChange_ResponseParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_GetEnvironmentVariableValue_ParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_GetEnvironmentVariableValue_ResponseParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_Log_ParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_Log_ResponseParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_ActivateFieldTrial_ParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_SetSCTAuditingRetryDelay_ParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_SetSCTAuditingRetryDelay_ResponseParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_OpenFile_ParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_OpenFile_ResponseParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_EnumerateFiles_ParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_EnumerateFiles_ResponseParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_CreateSimpleCache_ParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_CreateSimpleCache_ResponseParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_MakeRequestToServer_ParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_MakeRequestToServer_ResponseParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_ResolveOwnHostnameWithSystemDns_ParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_ResolveOwnHostnameWithSystemDns_ResponseParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_SetIPv6ProbeResult_ParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_SetIPv6ProbeResult_ResponseParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_GetAddressMapCacheLinux_ParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_GetAddressMapCacheLinux_ResponseParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_AllowsGSSAPILibraryLoad_ParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_AllowsGSSAPILibraryLoad_ResponseParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_DisableExclusiveCookieDatabaseLockingForTesting_ParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_DisableExclusiveCookieDatabaseLockingForTesting_ResponseParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_IsHappyEyeballsV3Enabled_ParamsSpec = { $: {} };
network.mojom.NetworkServiceTest_IsHappyEyeballsV3Enabled_ResponseParamsSpec = { $: {} };

// Enum: ResolverType
network.mojom.ResolverType = {
  kResolverTypeFail: 0,
  kResolverTypeFailTimeout: 1,
  kResolverTypeSystem: 2,
  kResolverTypeIPLiteral: 3,
  kResolverTypeDirectLookup: 4,
};

// Struct: Rule
mojo.internal.Struct(
    network.mojom.RuleSpec, 'network.mojom.Rule', [
      mojo.internal.StructField('resolver_type', 0, 0, network.mojom.ResolverTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('host_pattern', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('replacement', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('dns_aliases', 24, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('host_resolver_flags', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: SimpleCacheOpenEntryResult
mojo.internal.Struct(
    network.mojom.SimpleCacheOpenEntryResultSpec, 'network.mojom.SimpleCacheOpenEntryResult', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('entry', 8, 0, mojo.internal.InterfaceProxy(network.mojom.SimpleCacheEntryRemote), null, true, 0, undefined),
      mojo.internal.StructField('error', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: SimpleCacheEntry
mojo.internal.Struct(
    network.mojom.SimpleCacheEntry_WriteData_ParamsSpec, 'network.mojom.SimpleCacheEntry_WriteData_Params', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('index', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('offset', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('truncate', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.SimpleCacheEntry_WriteData_ResponseParamsSpec, 'network.mojom.SimpleCacheEntry_WriteData_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.SimpleCacheEntry_ReadData_ParamsSpec, 'network.mojom.SimpleCacheEntry_ReadData_Params', [
      mojo.internal.StructField('index', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('offset', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('length', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.SimpleCacheEntry_ReadData_ResponseParamsSpec, 'network.mojom.SimpleCacheEntry_ReadData_ResponseParams', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('result', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.SimpleCacheEntry_WriteSparseData_ParamsSpec, 'network.mojom.SimpleCacheEntry_WriteSparseData_Params', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('offset', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.SimpleCacheEntry_WriteSparseData_ResponseParamsSpec, 'network.mojom.SimpleCacheEntry_WriteSparseData_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.SimpleCacheEntry_ReadSparseData_ParamsSpec, 'network.mojom.SimpleCacheEntry_ReadSparseData_Params', [
      mojo.internal.StructField('offset', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('length', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.SimpleCacheEntry_ReadSparseData_ResponseParamsSpec, 'network.mojom.SimpleCacheEntry_ReadSparseData_ResponseParams', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('result', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.SimpleCacheEntry_Close_ParamsSpec, 'network.mojom.SimpleCacheEntry_Close_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.SimpleCacheEntry_Close_ResponseParamsSpec, 'network.mojom.SimpleCacheEntry_Close_ResponseParams', [
    ],
    [[0, 8]]);

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
  writeData(index, offset, data, truncate) {
    return this.$.writeData(index, offset, data, truncate);
  }
  readData(index, offset, length) {
    return this.$.readData(index, offset, length);
  }
  writeSparseData(offset, data) {
    return this.$.writeSparseData(offset, data);
  }
  readSparseData(offset, length) {
    return this.$.readSparseData(offset, length);
  }
  close() {
    return this.$.close();
  }
};

network.mojom.SimpleCacheEntryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SimpleCacheEntry', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  writeData(index, offset, data, truncate) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.SimpleCacheEntry_WriteData_ParamsSpec,
      network.mojom.SimpleCacheEntry_WriteData_ResponseParamsSpec,
      [index, offset, data, truncate],
      false);
  }

  readData(index, offset, length) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      network.mojom.SimpleCacheEntry_ReadData_ParamsSpec,
      network.mojom.SimpleCacheEntry_ReadData_ResponseParamsSpec,
      [index, offset, length],
      false);
  }

  writeSparseData(offset, data) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      network.mojom.SimpleCacheEntry_WriteSparseData_ParamsSpec,
      network.mojom.SimpleCacheEntry_WriteSparseData_ResponseParamsSpec,
      [offset, data],
      false);
  }

  readSparseData(offset, length) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      network.mojom.SimpleCacheEntry_ReadSparseData_ParamsSpec,
      network.mojom.SimpleCacheEntry_ReadSparseData_ResponseParamsSpec,
      [offset, length],
      false);
  }

  close() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      network.mojom.SimpleCacheEntry_Close_ParamsSpec,
      network.mojom.SimpleCacheEntry_Close_ResponseParamsSpec,
      [],
      false);
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

network.mojom.SimpleCacheEntryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SimpleCacheEntry', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.SimpleCacheEntry_WriteData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.SimpleCacheEntry_ReadData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.SimpleCacheEntry_WriteSparseData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.SimpleCacheEntry_ReadSparseData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.SimpleCacheEntry_Close_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.SimpleCacheEntry_WriteData_ParamsSpec.$.structSpec);
          const result = this.impl.writeData(params.index, params.offset, params.data, params.truncate);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.SimpleCacheEntry_WriteData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.SimpleCacheEntry_ReadData_ParamsSpec.$.structSpec);
          const result = this.impl.readData(params.index, params.offset, params.length);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.SimpleCacheEntry_ReadData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.SimpleCacheEntry_WriteSparseData_ParamsSpec.$.structSpec);
          const result = this.impl.writeSparseData(params.offset, params.data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.SimpleCacheEntry_WriteSparseData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.SimpleCacheEntry_ReadSparseData_ParamsSpec.$.structSpec);
          const result = this.impl.readSparseData(params.offset, params.length);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.SimpleCacheEntry_ReadSparseData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.SimpleCacheEntry_Close_ParamsSpec.$.structSpec);
          const result = this.impl.close();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.SimpleCacheEntry_Close_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

network.mojom.SimpleCacheEntryReceiver = network.mojom.SimpleCacheEntryReceiver;

network.mojom.SimpleCacheEntryPtr = network.mojom.SimpleCacheEntryRemote;
network.mojom.SimpleCacheEntryRequest = network.mojom.SimpleCacheEntryPendingReceiver;


// Interface: SimpleCacheEntryEnumerator
mojo.internal.Struct(
    network.mojom.SimpleCacheEntryEnumerator_GetNext_ParamsSpec, 'network.mojom.SimpleCacheEntryEnumerator_GetNext_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.SimpleCacheEntryEnumerator_GetNext_ResponseParamsSpec, 'network.mojom.SimpleCacheEntryEnumerator_GetNext_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, network.mojom.SimpleCacheOpenEntryResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
  getNext() {
    return this.$.getNext();
  }
};

network.mojom.SimpleCacheEntryEnumeratorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SimpleCacheEntryEnumerator', [
      { explicit: null },
    ]);
  }

  getNext() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.SimpleCacheEntryEnumerator_GetNext_ParamsSpec,
      network.mojom.SimpleCacheEntryEnumerator_GetNext_ResponseParamsSpec,
      [],
      false);
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

network.mojom.SimpleCacheEntryEnumeratorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SimpleCacheEntryEnumerator', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.SimpleCacheEntryEnumerator_GetNext_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.SimpleCacheEntryEnumerator_GetNext_ParamsSpec.$.structSpec);
          const result = this.impl.getNext();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.SimpleCacheEntryEnumerator_GetNext_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

network.mojom.SimpleCacheEntryEnumeratorReceiver = network.mojom.SimpleCacheEntryEnumeratorReceiver;

network.mojom.SimpleCacheEntryEnumeratorPtr = network.mojom.SimpleCacheEntryEnumeratorRemote;
network.mojom.SimpleCacheEntryEnumeratorRequest = network.mojom.SimpleCacheEntryEnumeratorPendingReceiver;


// Interface: SimpleCache
mojo.internal.Struct(
    network.mojom.SimpleCache_CreateEntry_ParamsSpec, 'network.mojom.SimpleCache_CreateEntry_Params', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.SimpleCache_CreateEntry_ResponseParamsSpec, 'network.mojom.SimpleCache_CreateEntry_ResponseParams', [
      mojo.internal.StructField('entry', 0, 0, mojo.internal.InterfaceProxy(network.mojom.SimpleCacheEntryRemote), null, true, 0, undefined),
      mojo.internal.StructField('error', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.SimpleCache_OpenEntry_ParamsSpec, 'network.mojom.SimpleCache_OpenEntry_Params', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.SimpleCache_OpenEntry_ResponseParamsSpec, 'network.mojom.SimpleCache_OpenEntry_ResponseParams', [
      mojo.internal.StructField('entry', 0, 0, mojo.internal.InterfaceProxy(network.mojom.SimpleCacheEntryRemote), null, true, 0, undefined),
      mojo.internal.StructField('error', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.SimpleCache_DoomEntry_ParamsSpec, 'network.mojom.SimpleCache_DoomEntry_Params', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.SimpleCache_DoomEntry_ResponseParamsSpec, 'network.mojom.SimpleCache_DoomEntry_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.SimpleCache_DoomAllEntries_ParamsSpec, 'network.mojom.SimpleCache_DoomAllEntries_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.SimpleCache_DoomAllEntries_ResponseParamsSpec, 'network.mojom.SimpleCache_DoomAllEntries_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.SimpleCache_EnumerateEntries_ParamsSpec, 'network.mojom.SimpleCache_EnumerateEntries_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(network.mojom.SimpleCacheEntryEnumeratorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.SimpleCache_Detach_ParamsSpec, 'network.mojom.SimpleCache_Detach_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.SimpleCache_Detach_ResponseParamsSpec, 'network.mojom.SimpleCache_Detach_ResponseParams', [
    ],
    [[0, 8]]);

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
  createEntry(key) {
    return this.$.createEntry(key);
  }
  openEntry(key) {
    return this.$.openEntry(key);
  }
  doomEntry(key) {
    return this.$.doomEntry(key);
  }
  doomAllEntries() {
    return this.$.doomAllEntries();
  }
  enumerateEntries(receiver) {
    return this.$.enumerateEntries(receiver);
  }
  detach() {
    return this.$.detach();
  }
};

network.mojom.SimpleCacheRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SimpleCache', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  createEntry(key) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.SimpleCache_CreateEntry_ParamsSpec,
      network.mojom.SimpleCache_CreateEntry_ResponseParamsSpec,
      [key],
      false);
  }

  openEntry(key) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      network.mojom.SimpleCache_OpenEntry_ParamsSpec,
      network.mojom.SimpleCache_OpenEntry_ResponseParamsSpec,
      [key],
      false);
  }

  doomEntry(key) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      network.mojom.SimpleCache_DoomEntry_ParamsSpec,
      network.mojom.SimpleCache_DoomEntry_ResponseParamsSpec,
      [key],
      false);
  }

  doomAllEntries() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      network.mojom.SimpleCache_DoomAllEntries_ParamsSpec,
      network.mojom.SimpleCache_DoomAllEntries_ResponseParamsSpec,
      [],
      false);
  }

  enumerateEntries(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      network.mojom.SimpleCache_EnumerateEntries_ParamsSpec,
      null,
      [receiver],
      false);
  }

  detach() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      network.mojom.SimpleCache_Detach_ParamsSpec,
      network.mojom.SimpleCache_Detach_ResponseParamsSpec,
      [],
      false);
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

network.mojom.SimpleCacheReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SimpleCache', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.SimpleCache_CreateEntry_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.SimpleCache_OpenEntry_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.SimpleCache_DoomEntry_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.SimpleCache_DoomAllEntries_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.SimpleCache_EnumerateEntries_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.SimpleCache_Detach_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.SimpleCache_CreateEntry_ParamsSpec.$.structSpec);
          const result = this.impl.createEntry(params.key);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.SimpleCache_CreateEntry_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.SimpleCache_OpenEntry_ParamsSpec.$.structSpec);
          const result = this.impl.openEntry(params.key);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.SimpleCache_OpenEntry_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.SimpleCache_DoomEntry_ParamsSpec.$.structSpec);
          const result = this.impl.doomEntry(params.key);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.SimpleCache_DoomEntry_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.SimpleCache_DoomAllEntries_ParamsSpec.$.structSpec);
          const result = this.impl.doomAllEntries();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.SimpleCache_DoomAllEntries_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.SimpleCache_EnumerateEntries_ParamsSpec.$.structSpec);
          const result = this.impl.enumerateEntries(params.receiver);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.SimpleCache_Detach_ParamsSpec.$.structSpec);
          const result = this.impl.detach();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.SimpleCache_Detach_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

network.mojom.SimpleCacheReceiver = network.mojom.SimpleCacheReceiver;

network.mojom.SimpleCachePtr = network.mojom.SimpleCacheRemote;
network.mojom.SimpleCacheRequest = network.mojom.SimpleCachePendingReceiver;


// Interface: NetworkServiceTest
mojo.internal.Struct(
    network.mojom.NetworkServiceTest_AddRules_ParamsSpec, 'network.mojom.NetworkServiceTest_AddRules_Params', [
      mojo.internal.StructField('rules', 0, 0, mojo.internal.Array(network.mojom.RuleSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_AddRules_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_AddRules_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_SimulateNetworkChange_ParamsSpec, 'network.mojom.NetworkServiceTest_SimulateNetworkChange_Params', [
      mojo.internal.StructField('type', 0, 0, network.mojom.ConnectionTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_SimulateNetworkChange_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_SimulateNetworkChange_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_SimulateNetworkQualityChange_ParamsSpec, 'network.mojom.NetworkServiceTest_SimulateNetworkQualityChange_Params', [
      mojo.internal.StructField('type', 0, 0, network.mojom.EffectiveConnectionTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_SimulateNetworkQualityChange_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_SimulateNetworkQualityChange_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_ForceNetworkQualityEstimatorReportWifiAsSlow2G_ParamsSpec, 'network.mojom.NetworkServiceTest_ForceNetworkQualityEstimatorReportWifiAsSlow2G_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_ForceNetworkQualityEstimatorReportWifiAsSlow2G_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_ForceNetworkQualityEstimatorReportWifiAsSlow2G_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_SimulateCrash_ParamsSpec, 'network.mojom.NetworkServiceTest_SimulateCrash_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_MockCertVerifierSetDefaultResult_ParamsSpec, 'network.mojom.NetworkServiceTest_MockCertVerifierSetDefaultResult_Params', [
      mojo.internal.StructField('default_result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_MockCertVerifierSetDefaultResult_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_MockCertVerifierSetDefaultResult_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_ParamsSpec, 'network.mojom.NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_Params', [
      mojo.internal.StructField('cert', 0, 0, network.mojom.X509CertificateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('host_pattern', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('verify_result', 16, 0, network.mojom.CertVerifyResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('rv', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_SetTransportSecurityStateTestSource_ParamsSpec, 'network.mojom.NetworkServiceTest_SetTransportSecurityStateTestSource_Params', [
      mojo.internal.StructField('enable_unittest_source', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_SetTransportSecurityStateTestSource_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_SetTransportSecurityStateTestSource_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_SetAllowNetworkAccessToHostResolutions_ParamsSpec, 'network.mojom.NetworkServiceTest_SetAllowNetworkAccessToHostResolutions_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_SetAllowNetworkAccessToHostResolutions_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_SetAllowNetworkAccessToHostResolutions_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_ReplaceSystemDnsConfig_ParamsSpec, 'network.mojom.NetworkServiceTest_ReplaceSystemDnsConfig_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_ReplaceSystemDnsConfig_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_ReplaceSystemDnsConfig_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_SetTestDohConfig_ParamsSpec, 'network.mojom.NetworkServiceTest_SetTestDohConfig_Params', [
      mojo.internal.StructField('secure_dns_mode', 0, 0, network.mojom.SecureDnsModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('doh_config', 8, 0, network.mojom.DnsOverHttpsConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_SetTestDohConfig_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_SetTestDohConfig_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_CrashOnResolveHost_ParamsSpec, 'network.mojom.NetworkServiceTest_CrashOnResolveHost_Params', [
      mojo.internal.StructField('host', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_CrashOnGetCookieList_ParamsSpec, 'network.mojom.NetworkServiceTest_CrashOnGetCookieList_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_GetLatestMemoryPressureLevel_ParamsSpec, 'network.mojom.NetworkServiceTest_GetLatestMemoryPressureLevel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_GetLatestMemoryPressureLevel_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_GetLatestMemoryPressureLevel_ResponseParams', [
      mojo.internal.StructField('memory_pressure_level', 0, 0, mojo_base.mojom.MemoryPressureLevelSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_GetPeerToPeerConnectionsCountChange_ParamsSpec, 'network.mojom.NetworkServiceTest_GetPeerToPeerConnectionsCountChange_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_GetPeerToPeerConnectionsCountChange_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_GetPeerToPeerConnectionsCountChange_ResponseParams', [
      mojo.internal.StructField('connection_count', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_GetEnvironmentVariableValue_ParamsSpec, 'network.mojom.NetworkServiceTest_GetEnvironmentVariableValue_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_GetEnvironmentVariableValue_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_GetEnvironmentVariableValue_ResponseParams', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_Log_ParamsSpec, 'network.mojom.NetworkServiceTest_Log_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_Log_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_Log_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_ActivateFieldTrial_ParamsSpec, 'network.mojom.NetworkServiceTest_ActivateFieldTrial_Params', [
      mojo.internal.StructField('field_trial_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_SetSCTAuditingRetryDelay_ParamsSpec, 'network.mojom.NetworkServiceTest_SetSCTAuditingRetryDelay_Params', [
      mojo.internal.StructField('delay', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_SetSCTAuditingRetryDelay_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_SetSCTAuditingRetryDelay_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_OpenFile_ParamsSpec, 'network.mojom.NetworkServiceTest_OpenFile_Params', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_OpenFile_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_OpenFile_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_EnumerateFiles_ParamsSpec, 'network.mojom.NetworkServiceTest_EnumerateFiles_Params', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('factory', 8, 0, mojo.internal.InterfaceProxy(network.mojom.HttpCacheBackendFileOperationsFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_EnumerateFiles_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_EnumerateFiles_ResponseParams', [
      mojo.internal.StructField('entries', 0, 0, mojo.internal.Array(network.mojom.FileEnumerationEntrySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('error', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_CreateSimpleCache_ParamsSpec, 'network.mojom.NetworkServiceTest_CreateSimpleCache_Params', [
      mojo.internal.StructField('factory', 0, 0, mojo.internal.InterfaceProxy(network.mojom.HttpCacheBackendFileOperationsFactoryRemote), null, false, 0, undefined),
      mojo.internal.StructField('path', 8, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reset', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_CreateSimpleCache_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_CreateSimpleCache_ResponseParams', [
      mojo.internal.StructField('backend', 0, 0, mojo.internal.InterfaceProxy(network.mojom.SimpleCacheRemote), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_MakeRequestToServer_ParamsSpec, 'network.mojom.NetworkServiceTest_MakeRequestToServer_Params', [
      mojo.internal.StructField('s', 0, 0, network.mojom.TransferableSocketSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('endpoint', 8, 0, network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_MakeRequestToServer_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_MakeRequestToServer_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_ResolveOwnHostnameWithSystemDns_ParamsSpec, 'network.mojom.NetworkServiceTest_ResolveOwnHostnameWithSystemDns_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_ResolveOwnHostnameWithSystemDns_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_ResolveOwnHostnameWithSystemDns_ResponseParams', [
      mojo.internal.StructField('addr_list', 0, 0, network.mojom.AddressListSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('os_error', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('net_error', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_SetIPv6ProbeResult_ParamsSpec, 'network.mojom.NetworkServiceTest_SetIPv6ProbeResult_Params', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_SetIPv6ProbeResult_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_SetIPv6ProbeResult_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_GetAddressMapCacheLinux_ParamsSpec, 'network.mojom.NetworkServiceTest_GetAddressMapCacheLinux_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_GetAddressMapCacheLinux_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_GetAddressMapCacheLinux_ResponseParams', [
      mojo.internal.StructField('addr_map', 0, 0, network.mojom.AddressMapSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('links', 8, 0, network.mojom.OnlineLinksSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_AllowsGSSAPILibraryLoad_ParamsSpec, 'network.mojom.NetworkServiceTest_AllowsGSSAPILibraryLoad_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_AllowsGSSAPILibraryLoad_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_AllowsGSSAPILibraryLoad_ResponseParams', [
      mojo.internal.StructField('allow_gssapi_library_load', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_DisableExclusiveCookieDatabaseLockingForTesting_ParamsSpec, 'network.mojom.NetworkServiceTest_DisableExclusiveCookieDatabaseLockingForTesting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_DisableExclusiveCookieDatabaseLockingForTesting_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_DisableExclusiveCookieDatabaseLockingForTesting_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_IsHappyEyeballsV3Enabled_ParamsSpec, 'network.mojom.NetworkServiceTest_IsHappyEyeballsV3Enabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkServiceTest_IsHappyEyeballsV3Enabled_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_IsHappyEyeballsV3Enabled_ResponseParams', [
      mojo.internal.StructField('is_happy_eyeballs_v3_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
  addRules(rules) {
    return this.$.addRules(rules);
  }
  simulateNetworkChange(type) {
    return this.$.simulateNetworkChange(type);
  }
  simulateNetworkQualityChange(type) {
    return this.$.simulateNetworkQualityChange(type);
  }
  forceNetworkQualityEstimatorReportWifiAsSlow2G() {
    return this.$.forceNetworkQualityEstimatorReportWifiAsSlow2G();
  }
  simulateCrash() {
    return this.$.simulateCrash();
  }
  mockCertVerifierSetDefaultResult(default_result) {
    return this.$.mockCertVerifierSetDefaultResult(default_result);
  }
  mockCertVerifierAddResultForCertAndHost(cert, host_pattern, verify_result, rv) {
    return this.$.mockCertVerifierAddResultForCertAndHost(cert, host_pattern, verify_result, rv);
  }
  setTransportSecurityStateTestSource(enable_unittest_source) {
    return this.$.setTransportSecurityStateTestSource(enable_unittest_source);
  }
  setAllowNetworkAccessToHostResolutions() {
    return this.$.setAllowNetworkAccessToHostResolutions();
  }
  replaceSystemDnsConfig() {
    return this.$.replaceSystemDnsConfig();
  }
  setTestDohConfig(secure_dns_mode, doh_config) {
    return this.$.setTestDohConfig(secure_dns_mode, doh_config);
  }
  crashOnResolveHost(host) {
    return this.$.crashOnResolveHost(host);
  }
  crashOnGetCookieList() {
    return this.$.crashOnGetCookieList();
  }
  getLatestMemoryPressureLevel() {
    return this.$.getLatestMemoryPressureLevel();
  }
  getPeerToPeerConnectionsCountChange() {
    return this.$.getPeerToPeerConnectionsCountChange();
  }
  getEnvironmentVariableValue(name) {
    return this.$.getEnvironmentVariableValue(name);
  }
  log(message) {
    return this.$.log(message);
  }
  activateFieldTrial(field_trial_name) {
    return this.$.activateFieldTrial(field_trial_name);
  }
  setSCTAuditingRetryDelay(delay) {
    return this.$.setSCTAuditingRetryDelay(delay);
  }
  openFile(path) {
    return this.$.openFile(path);
  }
  enumerateFiles(path, factory) {
    return this.$.enumerateFiles(path, factory);
  }
  createSimpleCache(factory, path, reset) {
    return this.$.createSimpleCache(factory, path, reset);
  }
  makeRequestToServer(s, endpoint) {
    return this.$.makeRequestToServer(s, endpoint);
  }
  resolveOwnHostnameWithSystemDns() {
    return this.$.resolveOwnHostnameWithSystemDns();
  }
  setIPv6ProbeResult(success) {
    return this.$.setIPv6ProbeResult(success);
  }
  getAddressMapCacheLinux() {
    return this.$.getAddressMapCacheLinux();
  }
  allowsGSSAPILibraryLoad() {
    return this.$.allowsGSSAPILibraryLoad();
  }
  disableExclusiveCookieDatabaseLockingForTesting() {
    return this.$.disableExclusiveCookieDatabaseLockingForTesting();
  }
  isHappyEyeballsV3Enabled() {
    return this.$.isHappyEyeballsV3Enabled();
  }
};

network.mojom.NetworkServiceTestRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NetworkServiceTest', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  addRules(rules) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.NetworkServiceTest_AddRules_ParamsSpec,
      network.mojom.NetworkServiceTest_AddRules_ResponseParamsSpec,
      [rules],
      false);
  }

  simulateNetworkChange(type) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      network.mojom.NetworkServiceTest_SimulateNetworkChange_ParamsSpec,
      network.mojom.NetworkServiceTest_SimulateNetworkChange_ResponseParamsSpec,
      [type],
      false);
  }

  simulateNetworkQualityChange(type) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      network.mojom.NetworkServiceTest_SimulateNetworkQualityChange_ParamsSpec,
      network.mojom.NetworkServiceTest_SimulateNetworkQualityChange_ResponseParamsSpec,
      [type],
      false);
  }

  forceNetworkQualityEstimatorReportWifiAsSlow2G() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      network.mojom.NetworkServiceTest_ForceNetworkQualityEstimatorReportWifiAsSlow2G_ParamsSpec,
      network.mojom.NetworkServiceTest_ForceNetworkQualityEstimatorReportWifiAsSlow2G_ResponseParamsSpec,
      [],
      false);
  }

  simulateCrash() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      network.mojom.NetworkServiceTest_SimulateCrash_ParamsSpec,
      null,
      [],
      false);
  }

  mockCertVerifierSetDefaultResult(default_result) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      network.mojom.NetworkServiceTest_MockCertVerifierSetDefaultResult_ParamsSpec,
      network.mojom.NetworkServiceTest_MockCertVerifierSetDefaultResult_ResponseParamsSpec,
      [default_result],
      false);
  }

  mockCertVerifierAddResultForCertAndHost(cert, host_pattern, verify_result, rv) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      network.mojom.NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_ParamsSpec,
      network.mojom.NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_ResponseParamsSpec,
      [cert, host_pattern, verify_result, rv],
      false);
  }

  setTransportSecurityStateTestSource(enable_unittest_source) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      network.mojom.NetworkServiceTest_SetTransportSecurityStateTestSource_ParamsSpec,
      network.mojom.NetworkServiceTest_SetTransportSecurityStateTestSource_ResponseParamsSpec,
      [enable_unittest_source],
      false);
  }

  setAllowNetworkAccessToHostResolutions() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      network.mojom.NetworkServiceTest_SetAllowNetworkAccessToHostResolutions_ParamsSpec,
      network.mojom.NetworkServiceTest_SetAllowNetworkAccessToHostResolutions_ResponseParamsSpec,
      [],
      false);
  }

  replaceSystemDnsConfig() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      network.mojom.NetworkServiceTest_ReplaceSystemDnsConfig_ParamsSpec,
      network.mojom.NetworkServiceTest_ReplaceSystemDnsConfig_ResponseParamsSpec,
      [],
      false);
  }

  setTestDohConfig(secure_dns_mode, doh_config) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      network.mojom.NetworkServiceTest_SetTestDohConfig_ParamsSpec,
      network.mojom.NetworkServiceTest_SetTestDohConfig_ResponseParamsSpec,
      [secure_dns_mode, doh_config],
      false);
  }

  crashOnResolveHost(host) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      network.mojom.NetworkServiceTest_CrashOnResolveHost_ParamsSpec,
      null,
      [host],
      false);
  }

  crashOnGetCookieList() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      network.mojom.NetworkServiceTest_CrashOnGetCookieList_ParamsSpec,
      null,
      [],
      false);
  }

  getLatestMemoryPressureLevel() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      network.mojom.NetworkServiceTest_GetLatestMemoryPressureLevel_ParamsSpec,
      network.mojom.NetworkServiceTest_GetLatestMemoryPressureLevel_ResponseParamsSpec,
      [],
      false);
  }

  getPeerToPeerConnectionsCountChange() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      network.mojom.NetworkServiceTest_GetPeerToPeerConnectionsCountChange_ParamsSpec,
      network.mojom.NetworkServiceTest_GetPeerToPeerConnectionsCountChange_ResponseParamsSpec,
      [],
      false);
  }

  getEnvironmentVariableValue(name) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      network.mojom.NetworkServiceTest_GetEnvironmentVariableValue_ParamsSpec,
      network.mojom.NetworkServiceTest_GetEnvironmentVariableValue_ResponseParamsSpec,
      [name],
      false);
  }

  log(message) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      network.mojom.NetworkServiceTest_Log_ParamsSpec,
      network.mojom.NetworkServiceTest_Log_ResponseParamsSpec,
      [message],
      false);
  }

  activateFieldTrial(field_trial_name) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      network.mojom.NetworkServiceTest_ActivateFieldTrial_ParamsSpec,
      null,
      [field_trial_name],
      false);
  }

  setSCTAuditingRetryDelay(delay) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      network.mojom.NetworkServiceTest_SetSCTAuditingRetryDelay_ParamsSpec,
      network.mojom.NetworkServiceTest_SetSCTAuditingRetryDelay_ResponseParamsSpec,
      [delay],
      false);
  }

  openFile(path) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      network.mojom.NetworkServiceTest_OpenFile_ParamsSpec,
      network.mojom.NetworkServiceTest_OpenFile_ResponseParamsSpec,
      [path],
      false);
  }

  enumerateFiles(path, factory) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      network.mojom.NetworkServiceTest_EnumerateFiles_ParamsSpec,
      network.mojom.NetworkServiceTest_EnumerateFiles_ResponseParamsSpec,
      [path, factory],
      false);
  }

  createSimpleCache(factory, path, reset) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      network.mojom.NetworkServiceTest_CreateSimpleCache_ParamsSpec,
      network.mojom.NetworkServiceTest_CreateSimpleCache_ResponseParamsSpec,
      [factory, path, reset],
      false);
  }

  makeRequestToServer(s, endpoint) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      network.mojom.NetworkServiceTest_MakeRequestToServer_ParamsSpec,
      network.mojom.NetworkServiceTest_MakeRequestToServer_ResponseParamsSpec,
      [s, endpoint],
      false);
  }

  resolveOwnHostnameWithSystemDns() {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      network.mojom.NetworkServiceTest_ResolveOwnHostnameWithSystemDns_ParamsSpec,
      network.mojom.NetworkServiceTest_ResolveOwnHostnameWithSystemDns_ResponseParamsSpec,
      [],
      false);
  }

  setIPv6ProbeResult(success) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      network.mojom.NetworkServiceTest_SetIPv6ProbeResult_ParamsSpec,
      network.mojom.NetworkServiceTest_SetIPv6ProbeResult_ResponseParamsSpec,
      [success],
      false);
  }

  getAddressMapCacheLinux() {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      network.mojom.NetworkServiceTest_GetAddressMapCacheLinux_ParamsSpec,
      network.mojom.NetworkServiceTest_GetAddressMapCacheLinux_ResponseParamsSpec,
      [],
      false);
  }

  allowsGSSAPILibraryLoad() {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      network.mojom.NetworkServiceTest_AllowsGSSAPILibraryLoad_ParamsSpec,
      network.mojom.NetworkServiceTest_AllowsGSSAPILibraryLoad_ResponseParamsSpec,
      [],
      false);
  }

  disableExclusiveCookieDatabaseLockingForTesting() {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      network.mojom.NetworkServiceTest_DisableExclusiveCookieDatabaseLockingForTesting_ParamsSpec,
      network.mojom.NetworkServiceTest_DisableExclusiveCookieDatabaseLockingForTesting_ResponseParamsSpec,
      [],
      false);
  }

  isHappyEyeballsV3Enabled() {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      network.mojom.NetworkServiceTest_IsHappyEyeballsV3Enabled_ParamsSpec,
      network.mojom.NetworkServiceTest_IsHappyEyeballsV3Enabled_ResponseParamsSpec,
      [],
      false);
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

network.mojom.NetworkServiceTestReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NetworkServiceTest', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkServiceTest_AddRules_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkServiceTest_SimulateNetworkChange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkServiceTest_SimulateNetworkQualityChange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkServiceTest_ForceNetworkQualityEstimatorReportWifiAsSlow2G_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkServiceTest_SimulateCrash_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkServiceTest_MockCertVerifierSetDefaultResult_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkServiceTest_SetTransportSecurityStateTestSource_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkServiceTest_SetAllowNetworkAccessToHostResolutions_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkServiceTest_ReplaceSystemDnsConfig_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkServiceTest_SetTestDohConfig_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkServiceTest_CrashOnResolveHost_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkServiceTest_CrashOnGetCookieList_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkServiceTest_GetLatestMemoryPressureLevel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkServiceTest_GetPeerToPeerConnectionsCountChange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkServiceTest_GetEnvironmentVariableValue_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkServiceTest_Log_ParamsSpec);
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkServiceTest_ActivateFieldTrial_ParamsSpec);
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkServiceTest_SetSCTAuditingRetryDelay_ParamsSpec);
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkServiceTest_OpenFile_ParamsSpec);
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkServiceTest_EnumerateFiles_ParamsSpec);
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkServiceTest_CreateSimpleCache_ParamsSpec);
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkServiceTest_MakeRequestToServer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkServiceTest_ResolveOwnHostnameWithSystemDns_ParamsSpec);
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkServiceTest_SetIPv6ProbeResult_ParamsSpec);
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkServiceTest_GetAddressMapCacheLinux_ParamsSpec);
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkServiceTest_AllowsGSSAPILibraryLoad_ParamsSpec);
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkServiceTest_DisableExclusiveCookieDatabaseLockingForTesting_ParamsSpec);
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkServiceTest_IsHappyEyeballsV3Enabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkServiceTest_AddRules_ParamsSpec.$.structSpec);
          const result = this.impl.addRules(params.rules);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkServiceTest_AddRules_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkServiceTest_SimulateNetworkChange_ParamsSpec.$.structSpec);
          const result = this.impl.simulateNetworkChange(params.type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkServiceTest_SimulateNetworkChange_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkServiceTest_SimulateNetworkQualityChange_ParamsSpec.$.structSpec);
          const result = this.impl.simulateNetworkQualityChange(params.type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkServiceTest_SimulateNetworkQualityChange_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkServiceTest_ForceNetworkQualityEstimatorReportWifiAsSlow2G_ParamsSpec.$.structSpec);
          const result = this.impl.forceNetworkQualityEstimatorReportWifiAsSlow2G();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkServiceTest_ForceNetworkQualityEstimatorReportWifiAsSlow2G_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkServiceTest_SimulateCrash_ParamsSpec.$.structSpec);
          const result = this.impl.simulateCrash();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkServiceTest_MockCertVerifierSetDefaultResult_ParamsSpec.$.structSpec);
          const result = this.impl.mockCertVerifierSetDefaultResult(params.default_result);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkServiceTest_MockCertVerifierSetDefaultResult_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_ParamsSpec.$.structSpec);
          const result = this.impl.mockCertVerifierAddResultForCertAndHost(params.cert, params.host_pattern, params.verify_result, params.rv);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkServiceTest_SetTransportSecurityStateTestSource_ParamsSpec.$.structSpec);
          const result = this.impl.setTransportSecurityStateTestSource(params.enable_unittest_source);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkServiceTest_SetTransportSecurityStateTestSource_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkServiceTest_SetAllowNetworkAccessToHostResolutions_ParamsSpec.$.structSpec);
          const result = this.impl.setAllowNetworkAccessToHostResolutions();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkServiceTest_SetAllowNetworkAccessToHostResolutions_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkServiceTest_ReplaceSystemDnsConfig_ParamsSpec.$.structSpec);
          const result = this.impl.replaceSystemDnsConfig();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkServiceTest_ReplaceSystemDnsConfig_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkServiceTest_SetTestDohConfig_ParamsSpec.$.structSpec);
          const result = this.impl.setTestDohConfig(params.secure_dns_mode, params.doh_config);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkServiceTest_SetTestDohConfig_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkServiceTest_CrashOnResolveHost_ParamsSpec.$.structSpec);
          const result = this.impl.crashOnResolveHost(params.host);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkServiceTest_CrashOnGetCookieList_ParamsSpec.$.structSpec);
          const result = this.impl.crashOnGetCookieList();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkServiceTest_GetLatestMemoryPressureLevel_ParamsSpec.$.structSpec);
          const result = this.impl.getLatestMemoryPressureLevel();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkServiceTest_GetLatestMemoryPressureLevel_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkServiceTest_GetPeerToPeerConnectionsCountChange_ParamsSpec.$.structSpec);
          const result = this.impl.getPeerToPeerConnectionsCountChange();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkServiceTest_GetPeerToPeerConnectionsCountChange_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkServiceTest_GetEnvironmentVariableValue_ParamsSpec.$.structSpec);
          const result = this.impl.getEnvironmentVariableValue(params.name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkServiceTest_GetEnvironmentVariableValue_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkServiceTest_Log_ParamsSpec.$.structSpec);
          const result = this.impl.log(params.message);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkServiceTest_Log_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkServiceTest_ActivateFieldTrial_ParamsSpec.$.structSpec);
          const result = this.impl.activateFieldTrial(params.field_trial_name);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkServiceTest_SetSCTAuditingRetryDelay_ParamsSpec.$.structSpec);
          const result = this.impl.setSCTAuditingRetryDelay(params.delay);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkServiceTest_SetSCTAuditingRetryDelay_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkServiceTest_OpenFile_ParamsSpec.$.structSpec);
          const result = this.impl.openFile(params.path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkServiceTest_OpenFile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkServiceTest_EnumerateFiles_ParamsSpec.$.structSpec);
          const result = this.impl.enumerateFiles(params.path, params.factory);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkServiceTest_EnumerateFiles_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkServiceTest_CreateSimpleCache_ParamsSpec.$.structSpec);
          const result = this.impl.createSimpleCache(params.factory, params.path, params.reset);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkServiceTest_CreateSimpleCache_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkServiceTest_MakeRequestToServer_ParamsSpec.$.structSpec);
          const result = this.impl.makeRequestToServer(params.s, params.endpoint);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkServiceTest_MakeRequestToServer_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkServiceTest_ResolveOwnHostnameWithSystemDns_ParamsSpec.$.structSpec);
          const result = this.impl.resolveOwnHostnameWithSystemDns();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkServiceTest_ResolveOwnHostnameWithSystemDns_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkServiceTest_SetIPv6ProbeResult_ParamsSpec.$.structSpec);
          const result = this.impl.setIPv6ProbeResult(params.success);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkServiceTest_SetIPv6ProbeResult_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkServiceTest_GetAddressMapCacheLinux_ParamsSpec.$.structSpec);
          const result = this.impl.getAddressMapCacheLinux();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkServiceTest_GetAddressMapCacheLinux_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkServiceTest_AllowsGSSAPILibraryLoad_ParamsSpec.$.structSpec);
          const result = this.impl.allowsGSSAPILibraryLoad();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkServiceTest_AllowsGSSAPILibraryLoad_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkServiceTest_DisableExclusiveCookieDatabaseLockingForTesting_ParamsSpec.$.structSpec);
          const result = this.impl.disableExclusiveCookieDatabaseLockingForTesting();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkServiceTest_DisableExclusiveCookieDatabaseLockingForTesting_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkServiceTest_IsHappyEyeballsV3Enabled_ParamsSpec.$.structSpec);
          const result = this.impl.isHappyEyeballsV3Enabled();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkServiceTest_IsHappyEyeballsV3Enabled_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

network.mojom.NetworkServiceTestReceiver = network.mojom.NetworkServiceTestReceiver;

network.mojom.NetworkServiceTestPtr = network.mojom.NetworkServiceTestRemote;
network.mojom.NetworkServiceTestRequest = network.mojom.NetworkServiceTestPendingReceiver;

