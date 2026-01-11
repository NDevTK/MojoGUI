// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/wifi_direct/public/mojom/wifi_direct_manager.mojom
// Module: ash.wifi_direct.mojom

// Module namespace
var ash = ash || {};
ash.wifi_direct = ash.wifi_direct || {};
ash.wifi_direct.mojom = ash.wifi_direct.mojom || {};

ash.wifi_direct.mojom.WifiDirectOperationResultSpec = { $: mojo.internal.Enum() };
ash.wifi_direct.mojom.WifiP2PCapabilitiesSpec = { $: {} };
ash.wifi_direct.mojom.WifiCredentialsSpec = { $: {} };
ash.wifi_direct.mojom.WifiDirectConnectionPropertiesSpec = { $: {} };
ash.wifi_direct.mojom.WifiDirectManager = {};
ash.wifi_direct.mojom.WifiDirectManager.$interfaceName = 'ash.wifi_direct.mojom.WifiDirectManager';
ash.wifi_direct.mojom.WifiDirectManager_CreateWifiDirectGroup_ParamsSpec = { $: {} };
ash.wifi_direct.mojom.WifiDirectManager_CreateWifiDirectGroup_ResponseParamsSpec = { $: {} };
ash.wifi_direct.mojom.WifiDirectManager_ConnectToWifiDirectGroup_ParamsSpec = { $: {} };
ash.wifi_direct.mojom.WifiDirectManager_ConnectToWifiDirectGroup_ResponseParamsSpec = { $: {} };
ash.wifi_direct.mojom.WifiDirectManager_GetWifiP2PCapabilities_ParamsSpec = { $: {} };
ash.wifi_direct.mojom.WifiDirectManager_GetWifiP2PCapabilities_ResponseParamsSpec = { $: {} };
ash.wifi_direct.mojom.WifiDirectConnection = {};
ash.wifi_direct.mojom.WifiDirectConnection.$interfaceName = 'ash.wifi_direct.mojom.WifiDirectConnection';
ash.wifi_direct.mojom.WifiDirectConnection_GetProperties_ParamsSpec = { $: {} };
ash.wifi_direct.mojom.WifiDirectConnection_GetProperties_ResponseParamsSpec = { $: {} };
ash.wifi_direct.mojom.WifiDirectConnection_AssociateSocket_ParamsSpec = { $: {} };
ash.wifi_direct.mojom.WifiDirectConnection_AssociateSocket_ResponseParamsSpec = { $: {} };

// Enum: WifiDirectOperationResult
ash.wifi_direct.mojom.WifiDirectOperationResult = {
  kSuccess: 0,
  kNotAllowed: 1,
  kNotSupported: 2,
  kNotConnected: 3,
  kConcurrencyNotSupported: 4,
  kFrequencyNotSupported: 5,
  kAuthFailure: 6,
  kGroupNotFound: 7,
  kAlreadyConnected: 8,
  kOperationInProgress: 9,
  kInvalidArguments: 10,
  kTimeout: 11,
  kInvalidResultCode: 12,
  kInvalidGroupProperties: 13,
  kUnknownFailure: 14,
};

// Struct: WifiP2PCapabilities
mojo.internal.Struct(
    ash.wifi_direct.mojom.WifiP2PCapabilitiesSpec, 'ash.wifi_direct.mojom.WifiP2PCapabilities', [
      mojo.internal.StructField('is_owner_ready', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_client_ready', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_p2p_supported', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: WifiCredentials
mojo.internal.Struct(
    ash.wifi_direct.mojom.WifiCredentialsSpec, 'ash.wifi_direct.mojom.WifiCredentials', [
      mojo.internal.StructField('ssid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('passphrase', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: WifiDirectConnectionProperties
mojo.internal.Struct(
    ash.wifi_direct.mojom.WifiDirectConnectionPropertiesSpec, 'ash.wifi_direct.mojom.WifiDirectConnectionProperties', [
      mojo.internal.StructField('credentials', 0, 0, ash.wifi_direct.mojom.WifiCredentialsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ipv4_address', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('frequency', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: WifiDirectManager
mojo.internal.Struct(
    ash.wifi_direct.mojom.WifiDirectManager_CreateWifiDirectGroup_ParamsSpec, 'ash.wifi_direct.mojom.WifiDirectManager_CreateWifiDirectGroup_Params', [
      mojo.internal.StructField('credentials', 0, 0, ash.wifi_direct.mojom.WifiCredentialsSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.wifi_direct.mojom.WifiDirectManager_CreateWifiDirectGroup_ResponseParamsSpec, 'ash.wifi_direct.mojom.WifiDirectManager_CreateWifiDirectGroup_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.wifi_direct.mojom.WifiDirectOperationResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('wifi_direct_connection', 8, 0, mojo.internal.InterfaceProxy(ash.wifi_direct.mojom.WifiDirectConnectionRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.wifi_direct.mojom.WifiDirectManager_ConnectToWifiDirectGroup_ParamsSpec, 'ash.wifi_direct.mojom.WifiDirectManager_ConnectToWifiDirectGroup_Params', [
      mojo.internal.StructField('credentials', 0, 0, ash.wifi_direct.mojom.WifiCredentialsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frequency_$value', 8, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'frequency_$flag', originalFieldName: 'frequency' }),
      mojo.internal.StructField('frequency_$flag', 12, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'frequency_$value', originalFieldName: 'frequency' }),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.wifi_direct.mojom.WifiDirectManager_ConnectToWifiDirectGroup_ResponseParamsSpec, 'ash.wifi_direct.mojom.WifiDirectManager_ConnectToWifiDirectGroup_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.wifi_direct.mojom.WifiDirectOperationResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('wifi_direct_connection', 8, 0, mojo.internal.InterfaceProxy(ash.wifi_direct.mojom.WifiDirectConnectionRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.wifi_direct.mojom.WifiDirectManager_GetWifiP2PCapabilities_ParamsSpec, 'ash.wifi_direct.mojom.WifiDirectManager_GetWifiP2PCapabilities_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.wifi_direct.mojom.WifiDirectManager_GetWifiP2PCapabilities_ResponseParamsSpec, 'ash.wifi_direct.mojom.WifiDirectManager_GetWifiP2PCapabilities_ResponseParams', [
      mojo.internal.StructField('capabilities', 0, 0, ash.wifi_direct.mojom.WifiP2PCapabilitiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.wifi_direct.mojom.WifiDirectManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.wifi_direct.mojom.WifiDirectManagerRemote = class {
  static get $interfaceName() {
    return 'ash.wifi_direct.mojom.WifiDirectManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.wifi_direct.mojom.WifiDirectManagerPendingReceiver,
      handle);
    this.$ = new ash.wifi_direct.mojom.WifiDirectManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createWifiDirectGroup(credentials) {
    return this.$.createWifiDirectGroup(credentials);
  }
  connectToWifiDirectGroup(credentials, frequency) {
    return this.$.connectToWifiDirectGroup(credentials, frequency);
  }
  getWifiP2PCapabilities() {
    return this.$.getWifiP2PCapabilities();
  }
};

ash.wifi_direct.mojom.WifiDirectManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WifiDirectManager', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  createWifiDirectGroup(credentials) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.wifi_direct.mojom.WifiDirectManager_CreateWifiDirectGroup_ParamsSpec,
      ash.wifi_direct.mojom.WifiDirectManager_CreateWifiDirectGroup_ResponseParamsSpec,
      [credentials],
      false);
  }

  connectToWifiDirectGroup(credentials, frequency) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.wifi_direct.mojom.WifiDirectManager_ConnectToWifiDirectGroup_ParamsSpec,
      ash.wifi_direct.mojom.WifiDirectManager_ConnectToWifiDirectGroup_ResponseParamsSpec,
      [credentials, frequency],
      false);
  }

  getWifiP2PCapabilities() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.wifi_direct.mojom.WifiDirectManager_GetWifiP2PCapabilities_ParamsSpec,
      ash.wifi_direct.mojom.WifiDirectManager_GetWifiP2PCapabilities_ResponseParamsSpec,
      [],
      false);
  }

};

ash.wifi_direct.mojom.WifiDirectManager.getRemote = function() {
  let remote = new ash.wifi_direct.mojom.WifiDirectManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.wifi_direct.mojom.WifiDirectManager',
    'context');
  return remote.$;
};

ash.wifi_direct.mojom.WifiDirectManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WifiDirectManager', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(ash.wifi_direct.mojom.WifiDirectManager_CreateWifiDirectGroup_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.wifi_direct.mojom.WifiDirectManager_ConnectToWifiDirectGroup_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.wifi_direct.mojom.WifiDirectManager_GetWifiP2PCapabilities_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.wifi_direct.mojom.WifiDirectManager_CreateWifiDirectGroup_ParamsSpec.$.structSpec);
          const result = this.impl.createWifiDirectGroup(params.credentials);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.wifi_direct.mojom.WifiDirectManager_CreateWifiDirectGroup_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.wifi_direct.mojom.WifiDirectManager_ConnectToWifiDirectGroup_ParamsSpec.$.structSpec);
          const result = this.impl.connectToWifiDirectGroup(params.credentials, params.frequency);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.wifi_direct.mojom.WifiDirectManager_ConnectToWifiDirectGroup_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.wifi_direct.mojom.WifiDirectManager_GetWifiP2PCapabilities_ParamsSpec.$.structSpec);
          const result = this.impl.getWifiP2PCapabilities();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.wifi_direct.mojom.WifiDirectManager_GetWifiP2PCapabilities_ResponseParamsSpec);
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

ash.wifi_direct.mojom.WifiDirectManagerReceiver = ash.wifi_direct.mojom.WifiDirectManagerReceiver;

ash.wifi_direct.mojom.WifiDirectManagerPtr = ash.wifi_direct.mojom.WifiDirectManagerRemote;
ash.wifi_direct.mojom.WifiDirectManagerRequest = ash.wifi_direct.mojom.WifiDirectManagerPendingReceiver;


// Interface: WifiDirectConnection
mojo.internal.Struct(
    ash.wifi_direct.mojom.WifiDirectConnection_GetProperties_ParamsSpec, 'ash.wifi_direct.mojom.WifiDirectConnection_GetProperties_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.wifi_direct.mojom.WifiDirectConnection_GetProperties_ResponseParamsSpec, 'ash.wifi_direct.mojom.WifiDirectConnection_GetProperties_ResponseParams', [
      mojo.internal.StructField('properties', 0, 0, ash.wifi_direct.mojom.WifiDirectConnectionPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.wifi_direct.mojom.WifiDirectConnection_AssociateSocket_ParamsSpec, 'ash.wifi_direct.mojom.WifiDirectConnection_AssociateSocket_Params', [
      mojo.internal.StructField('socket', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.wifi_direct.mojom.WifiDirectConnection_AssociateSocket_ResponseParamsSpec, 'ash.wifi_direct.mojom.WifiDirectConnection_AssociateSocket_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.wifi_direct.mojom.WifiDirectConnectionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.wifi_direct.mojom.WifiDirectConnectionRemote = class {
  static get $interfaceName() {
    return 'ash.wifi_direct.mojom.WifiDirectConnection';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.wifi_direct.mojom.WifiDirectConnectionPendingReceiver,
      handle);
    this.$ = new ash.wifi_direct.mojom.WifiDirectConnectionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getProperties() {
    return this.$.getProperties();
  }
  associateSocket(socket) {
    return this.$.associateSocket(socket);
  }
};

ash.wifi_direct.mojom.WifiDirectConnectionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WifiDirectConnection', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  getProperties() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.wifi_direct.mojom.WifiDirectConnection_GetProperties_ParamsSpec,
      ash.wifi_direct.mojom.WifiDirectConnection_GetProperties_ResponseParamsSpec,
      [],
      false);
  }

  associateSocket(socket) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.wifi_direct.mojom.WifiDirectConnection_AssociateSocket_ParamsSpec,
      ash.wifi_direct.mojom.WifiDirectConnection_AssociateSocket_ResponseParamsSpec,
      [socket],
      false);
  }

};

ash.wifi_direct.mojom.WifiDirectConnection.getRemote = function() {
  let remote = new ash.wifi_direct.mojom.WifiDirectConnectionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.wifi_direct.mojom.WifiDirectConnection',
    'context');
  return remote.$;
};

ash.wifi_direct.mojom.WifiDirectConnectionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WifiDirectConnection', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(ash.wifi_direct.mojom.WifiDirectConnection_GetProperties_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.wifi_direct.mojom.WifiDirectConnection_AssociateSocket_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.wifi_direct.mojom.WifiDirectConnection_GetProperties_ParamsSpec.$.structSpec);
          const result = this.impl.getProperties();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.wifi_direct.mojom.WifiDirectConnection_GetProperties_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.wifi_direct.mojom.WifiDirectConnection_AssociateSocket_ParamsSpec.$.structSpec);
          const result = this.impl.associateSocket(params.socket);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.wifi_direct.mojom.WifiDirectConnection_AssociateSocket_ResponseParamsSpec);
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

ash.wifi_direct.mojom.WifiDirectConnectionReceiver = ash.wifi_direct.mojom.WifiDirectConnectionReceiver;

ash.wifi_direct.mojom.WifiDirectConnectionPtr = ash.wifi_direct.mojom.WifiDirectConnectionRemote;
ash.wifi_direct.mojom.WifiDirectConnectionRequest = ash.wifi_direct.mojom.WifiDirectConnectionPendingReceiver;

