// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/secure_channel/public/mojom/secure_channel.mojom
// Module: ash.secure_channel.mojom

'use strict';
(function() {
  const SHA256 = (s) => {
    const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
    const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
    const m = new TextEncoder().encode(s);
    const l = m.length;
    const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
    for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
    b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
    b[b.length - 1] = l * 8;
    for (let i = 0; i < b.length; i += 16) {
      let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
      const w = new Uint32Array(64);
      for (let j = 0; j < 64; j++) {
        if (j < 16) w[j] = b[i + j];
        else {
          const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
          const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
          w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
        }
        const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
        const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
        h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
      }
      h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
      h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
    }
    return h[0];
  };
  window.mojoScrambler = window.mojoScrambler || {
    getOrdinals: (ifaceName, methodSpecs) => {
      const params = new URLSearchParams(window.location.search);
      const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
      
      const seen = new Set();
      methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
      let i = 0;
      return methodSpecs.map((ms, idx) => {
        if (ms.explicit !== null) return ms.explicit;
        if (forceNoScramble) return idx;

        const p = window.mojoVersion.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
        
        while (true) {
          i++;
          const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
          const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
          if (!seen.has(ord)) {
            seen.add(ord);
            return ord;
          }
        }
      });
    }
  };
})();

// Module namespace
var ash = ash || {};
ash.secure_channel = ash.secure_channel || {};
ash.secure_channel.mojom = ash.secure_channel.mojom || {};
var mojo_base = mojo_base || {};

ash.secure_channel.mojom.ConnectionAttemptFailureReasonSpec = { $: mojo.internal.Enum() };
ash.secure_channel.mojom.ConnectionCreationDetailSpec = { $: mojo.internal.Enum() };
ash.secure_channel.mojom.ConnectionPrioritySpec = { $: mojo.internal.Enum() };
ash.secure_channel.mojom.ConnectionMediumSpec = { $: mojo.internal.Enum() };
ash.secure_channel.mojom.DiscoveryResultSpec = { $: mojo.internal.Enum() };
ash.secure_channel.mojom.DiscoveryErrorCodeSpec = { $: mojo.internal.Enum() };
ash.secure_channel.mojom.SecureChannelStateSpec = { $: mojo.internal.Enum() };
ash.secure_channel.mojom.BluetoothConnectionMetadataSpec = { $: {} };
ash.secure_channel.mojom.ConnectionMetadataSpec = { $: {} };
ash.secure_channel.mojom.Channel = {};
ash.secure_channel.mojom.Channel.$interfaceName = 'ash.secure_channel.mojom.Channel';
ash.secure_channel.mojom.Channel_SendMessage_ParamsSpec = { $: {} };
ash.secure_channel.mojom.Channel_SendMessage_ResponseParamsSpec = { $: {} };
ash.secure_channel.mojom.Channel_RegisterPayloadFile_ParamsSpec = { $: {} };
ash.secure_channel.mojom.Channel_RegisterPayloadFile_ResponseParamsSpec = { $: {} };
ash.secure_channel.mojom.Channel_GetConnectionMetadata_ParamsSpec = { $: {} };
ash.secure_channel.mojom.Channel_GetConnectionMetadata_ResponseParamsSpec = { $: {} };
ash.secure_channel.mojom.MessageReceiver = {};
ash.secure_channel.mojom.MessageReceiver.$interfaceName = 'ash.secure_channel.mojom.MessageReceiver';
ash.secure_channel.mojom.MessageReceiver_OnMessageReceived_ParamsSpec = { $: {} };
ash.secure_channel.mojom.ConnectionDelegate = {};
ash.secure_channel.mojom.ConnectionDelegate.$interfaceName = 'ash.secure_channel.mojom.ConnectionDelegate';
ash.secure_channel.mojom.ConnectionDelegate_OnConnectionAttemptFailure_ParamsSpec = { $: {} };
ash.secure_channel.mojom.ConnectionDelegate_OnConnection_ParamsSpec = { $: {} };
ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger = {};
ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger.$interfaceName = 'ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger';
ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger_LogDiscoveryAttempt_ParamsSpec = { $: {} };
ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger_LogNearbyConnectionState_ParamsSpec = { $: {} };
ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger_LogSecureChannelState_ParamsSpec = { $: {} };
ash.secure_channel.mojom.SecureChannel = {};
ash.secure_channel.mojom.SecureChannel.$interfaceName = 'ash.secure_channel.mojom.SecureChannel';
ash.secure_channel.mojom.SecureChannel_ListenForConnectionFromDevice_ParamsSpec = { $: {} };
ash.secure_channel.mojom.SecureChannel_InitiateConnectionToDevice_ParamsSpec = { $: {} };
ash.secure_channel.mojom.SecureChannel_SetNearbyConnector_ParamsSpec = { $: {} };
ash.secure_channel.mojom.SecureChannel_GetLastSeenTimestamp_ParamsSpec = { $: {} };
ash.secure_channel.mojom.SecureChannel_GetLastSeenTimestamp_ResponseParamsSpec = { $: {} };

ash.secure_channel.mojom.kConnectionDroppedReason = 1;

// Enum: ConnectionAttemptFailureReason
ash.secure_channel.mojom.ConnectionAttemptFailureReason = {
  AUTHENTICATION_ERROR: 0,
  COULD_NOT_GENERATE_ADVERTISEMENT: 1,
  GATT_CONNECTION_ERROR: 2,
  NEARBY_CONNECTION_ERROR: 3,
  LOCAL_DEVICE_INVALID_PUBLIC_KEY: 4,
  LOCAL_DEVICE_INVALID_PSK: 5,
  LOCAL_DEVICE_INVALID_BLUETOOTH_ADDRESS: 6,
  REMOTE_DEVICE_INVALID_PUBLIC_KEY: 7,
  REMOTE_DEVICE_INVALID_PSK: 8,
  REMOTE_DEVICE_INVALID_BLUETOOTH_ADDRESS: 9,
  TIMEOUT_FINDING_DEVICE: 10,
  ADAPTER_DISABLED: 11,
  ADAPTER_NOT_PRESENT: 12,
  UNSUPPORTED_ROLE_FOR_MEDIUM: 13,
  MISSING_NEARBY_CONNECTOR: 14,
  CONNECTION_CANCELLED: 15,
};

// Enum: ConnectionCreationDetail
ash.secure_channel.mojom.ConnectionCreationDetail = {
  REMOTE_DEVICE_USED_BACKGROUND_BLE_ADVERTISING: 0,
  REMOTE_DEVICE_USED_FOREGROUND_BLE_ADVERTISING: 1,
};

// Enum: ConnectionPriority
ash.secure_channel.mojom.ConnectionPriority = {
  LOW: 0,
  MEDIUM: 1,
  HIGH: 2,
};

// Enum: ConnectionMedium
ash.secure_channel.mojom.ConnectionMedium = {
  kBluetoothLowEnergy: 0,
  kNearbyConnections: 1,
};

// Enum: DiscoveryResult
ash.secure_channel.mojom.DiscoveryResult = {
  kFailure: 0,
  kSuccess: 1,
};

// Enum: DiscoveryErrorCode
ash.secure_channel.mojom.DiscoveryErrorCode = {
  kBluetoothTurnedOff: 0,
  kFilterCreationFailed: 1,
  kErrorStartingDiscovery: 2,
  kBleSessionInvalidated: 3,
  kDeviceNotInScanRequest: 4,
  kTimeout: 5,
};

// Enum: SecureChannelState
ash.secure_channel.mojom.SecureChannelState = {
  kGeneratingSessionKeys: 0,
  kSendingHello: 1,
  kSentHello: 2,
  kReceivedResponderAuth: 3,
  kValidatedResponderAuth: 4,
  kSentInitiatorAuth: 5,
  kAuthenticationSuccess: 6,
  kFailureNotConnectedToRemoteDevice: 7,
  kFailedToGenerateSessionKeys: 8,
  kFailedToGenerateHelloMessage: 9,
  kFailedToSendHelloMessage: 10,
  kFailedToWaitForResponderAuth: 11,
  kReceivedUnexpectedMessage: 12,
  kFailedToValidateReponderAuth: 13,
  kFailedToGenerateInitiatorAuth: 14,
  kFailedToSendInitiatorAuth: 15,
  kFailureDisconnectDuringAuthentication: 16,
};

// Struct: BluetoothConnectionMetadata
mojo.internal.Struct(
    ash.secure_channel.mojom.BluetoothConnectionMetadataSpec, 'ash.secure_channel.mojom.BluetoothConnectionMetadata', [
      mojo.internal.StructField('current_rssi', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ConnectionMetadata
mojo.internal.Struct(
    ash.secure_channel.mojom.ConnectionMetadataSpec, 'ash.secure_channel.mojom.ConnectionMetadata', [
      mojo.internal.StructField('creation_details', 0, 0, mojo.internal.Array(ash.secure_channel.mojom.ConnectionCreationDetailSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('bluetooth_connection_metadata', 8, 0, ash.secure_channel.mojom.BluetoothConnectionMetadataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('channel_binding_data', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: Channel
mojo.internal.Struct(
    ash.secure_channel.mojom.Channel_SendMessage_ParamsSpec, 'ash.secure_channel.mojom.Channel_SendMessage_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.secure_channel.mojom.Channel_SendMessage_ResponseParamsSpec, 'ash.secure_channel.mojom.Channel_SendMessage_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.secure_channel.mojom.Channel_RegisterPayloadFile_ParamsSpec, 'ash.secure_channel.mojom.Channel_RegisterPayloadFile_Params', [
      mojo.internal.StructField('payload_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('payload_files', 8, 0, ash.secure_channel.mojom.PayloadFilesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('listener', 16, 0, mojo.internal.InterfaceProxy(ash.secure_channel.mojom.FilePayloadListenerRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.secure_channel.mojom.Channel_RegisterPayloadFile_ResponseParamsSpec, 'ash.secure_channel.mojom.Channel_RegisterPayloadFile_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.secure_channel.mojom.Channel_GetConnectionMetadata_ParamsSpec, 'ash.secure_channel.mojom.Channel_GetConnectionMetadata_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.secure_channel.mojom.Channel_GetConnectionMetadata_ResponseParamsSpec, 'ash.secure_channel.mojom.Channel_GetConnectionMetadata_ResponseParams', [
      mojo.internal.StructField('metadata', 0, 0, ash.secure_channel.mojom.ConnectionMetadataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.secure_channel.mojom.ChannelPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.secure_channel.mojom.ChannelRemote = class {
  static get $interfaceName() {
    return 'ash.secure_channel.mojom.Channel';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.secure_channel.mojom.ChannelPendingReceiver,
      handle);
    this.$ = new ash.secure_channel.mojom.ChannelRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.secure_channel.mojom.ChannelRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Channel', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  sendMessage(message) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.secure_channel.mojom.Channel_SendMessage_ParamsSpec,
      ash.secure_channel.mojom.Channel_SendMessage_ResponseParamsSpec,
      [message],
      false);
  }

  registerPayloadFile(payload_id, payload_files, listener) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.secure_channel.mojom.Channel_RegisterPayloadFile_ParamsSpec,
      ash.secure_channel.mojom.Channel_RegisterPayloadFile_ResponseParamsSpec,
      [payload_id, payload_files, listener],
      false);
  }

  getConnectionMetadata() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.secure_channel.mojom.Channel_GetConnectionMetadata_ParamsSpec,
      ash.secure_channel.mojom.Channel_GetConnectionMetadata_ResponseParamsSpec,
      [],
      false);
  }

};

ash.secure_channel.mojom.Channel.getRemote = function() {
  let remote = new ash.secure_channel.mojom.ChannelRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.secure_channel.mojom.Channel',
    'context');
  return remote.$;
};

ash.secure_channel.mojom.ChannelReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Channel', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: SendMessage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.secure_channel.mojom.Channel_SendMessage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendMessage (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: RegisterPayloadFile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.secure_channel.mojom.Channel_RegisterPayloadFile_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterPayloadFile (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetConnectionMetadata
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.secure_channel.mojom.Channel_GetConnectionMetadata_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetConnectionMetadata (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.secure_channel.mojom.Channel_SendMessage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendMessage');
          const result = this.impl.sendMessage(params.message);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.secure_channel.mojom.Channel_SendMessage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.secure_channel.mojom.Channel_RegisterPayloadFile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.registerPayloadFile');
          const result = this.impl.registerPayloadFile(params.payload_id, params.payload_files, params.listener);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.secure_channel.mojom.Channel_RegisterPayloadFile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.secure_channel.mojom.Channel_GetConnectionMetadata_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getConnectionMetadata');
          const result = this.impl.getConnectionMetadata();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.secure_channel.mojom.Channel_GetConnectionMetadata_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.secure_channel.mojom.ChannelReceiver = ash.secure_channel.mojom.ChannelReceiver;

ash.secure_channel.mojom.ChannelPtr = ash.secure_channel.mojom.ChannelRemote;
ash.secure_channel.mojom.ChannelRequest = ash.secure_channel.mojom.ChannelPendingReceiver;


// Interface: MessageReceiver
mojo.internal.Struct(
    ash.secure_channel.mojom.MessageReceiver_OnMessageReceived_ParamsSpec, 'ash.secure_channel.mojom.MessageReceiver_OnMessageReceived_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.secure_channel.mojom.MessageReceiverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.secure_channel.mojom.MessageReceiverRemote = class {
  static get $interfaceName() {
    return 'ash.secure_channel.mojom.MessageReceiver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.secure_channel.mojom.MessageReceiverPendingReceiver,
      handle);
    this.$ = new ash.secure_channel.mojom.MessageReceiverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.secure_channel.mojom.MessageReceiverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MessageReceiver', [
      { explicit: null },
    ]);
  }

  onMessageReceived(message) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.secure_channel.mojom.MessageReceiver_OnMessageReceived_ParamsSpec,
      null,
      [message],
      false);
  }

};

ash.secure_channel.mojom.MessageReceiver.getRemote = function() {
  let remote = new ash.secure_channel.mojom.MessageReceiverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.secure_channel.mojom.MessageReceiver',
    'context');
  return remote.$;
};

ash.secure_channel.mojom.MessageReceiverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MessageReceiver', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnMessageReceived
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.secure_channel.mojom.MessageReceiver_OnMessageReceived_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMessageReceived (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.secure_channel.mojom.MessageReceiver_OnMessageReceived_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onMessageReceived');
          const result = this.impl.onMessageReceived(params.message);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.secure_channel.mojom.MessageReceiverReceiver = ash.secure_channel.mojom.MessageReceiverReceiver;

ash.secure_channel.mojom.MessageReceiverPtr = ash.secure_channel.mojom.MessageReceiverRemote;
ash.secure_channel.mojom.MessageReceiverRequest = ash.secure_channel.mojom.MessageReceiverPendingReceiver;


// Interface: ConnectionDelegate
mojo.internal.Struct(
    ash.secure_channel.mojom.ConnectionDelegate_OnConnectionAttemptFailure_ParamsSpec, 'ash.secure_channel.mojom.ConnectionDelegate_OnConnectionAttemptFailure_Params', [
      mojo.internal.StructField('reason', 0, 0, ash.secure_channel.mojom.ConnectionAttemptFailureReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.secure_channel.mojom.ConnectionDelegate_OnConnection_ParamsSpec, 'ash.secure_channel.mojom.ConnectionDelegate_OnConnection_Params', [
      mojo.internal.StructField('channel', 0, 0, mojo.internal.InterfaceProxy(ash.secure_channel.mojom.ChannelSpec), null, false, 0, undefined),
      mojo.internal.StructField('message_receiver_receiver', 8, 0, mojo.internal.InterfaceRequest(ash.secure_channel.mojom.MessageReceiverSpec), null, false, 0, undefined),
      mojo.internal.StructField('nearby_connection_state_listener_receiver', 16, 0, mojo.internal.InterfaceRequest(ash.secure_channel.mojom.NearbyConnectionStateListenerRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

ash.secure_channel.mojom.ConnectionDelegatePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.secure_channel.mojom.ConnectionDelegateRemote = class {
  static get $interfaceName() {
    return 'ash.secure_channel.mojom.ConnectionDelegate';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.secure_channel.mojom.ConnectionDelegatePendingReceiver,
      handle);
    this.$ = new ash.secure_channel.mojom.ConnectionDelegateRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.secure_channel.mojom.ConnectionDelegateRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ConnectionDelegate', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onConnectionAttemptFailure(reason) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.secure_channel.mojom.ConnectionDelegate_OnConnectionAttemptFailure_ParamsSpec,
      null,
      [reason],
      false);
  }

  onConnection(channel, message_receiver_receiver, nearby_connection_state_listener_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.secure_channel.mojom.ConnectionDelegate_OnConnection_ParamsSpec,
      null,
      [channel, message_receiver_receiver, nearby_connection_state_listener_receiver],
      false);
  }

};

ash.secure_channel.mojom.ConnectionDelegate.getRemote = function() {
  let remote = new ash.secure_channel.mojom.ConnectionDelegateRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.secure_channel.mojom.ConnectionDelegate',
    'context');
  return remote.$;
};

ash.secure_channel.mojom.ConnectionDelegateReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ConnectionDelegate', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnConnectionAttemptFailure
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.secure_channel.mojom.ConnectionDelegate_OnConnectionAttemptFailure_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnConnectionAttemptFailure (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnConnection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.secure_channel.mojom.ConnectionDelegate_OnConnection_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnConnection (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.secure_channel.mojom.ConnectionDelegate_OnConnectionAttemptFailure_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onConnectionAttemptFailure');
          const result = this.impl.onConnectionAttemptFailure(params.reason);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.secure_channel.mojom.ConnectionDelegate_OnConnection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onConnection');
          const result = this.impl.onConnection(params.channel, params.message_receiver_receiver, params.nearby_connection_state_listener_receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.secure_channel.mojom.ConnectionDelegateReceiver = ash.secure_channel.mojom.ConnectionDelegateReceiver;

ash.secure_channel.mojom.ConnectionDelegatePtr = ash.secure_channel.mojom.ConnectionDelegateRemote;
ash.secure_channel.mojom.ConnectionDelegateRequest = ash.secure_channel.mojom.ConnectionDelegatePendingReceiver;


// Interface: SecureChannelStructuredMetricsLogger
mojo.internal.Struct(
    ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger_LogDiscoveryAttempt_ParamsSpec, 'ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger_LogDiscoveryAttempt_Params', [
      mojo.internal.StructField('result', 0, 0, ash.secure_channel.mojom.DiscoveryResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error_code', 8, 0, ash.secure_channel.mojom.DiscoveryErrorCodeSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger_LogNearbyConnectionState_ParamsSpec, 'ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger_LogNearbyConnectionState_Params', [
      mojo.internal.StructField('step', 0, 0, ash.secure_channel.mojom.NearbyConnectionStepSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('status', 8, 0, ash.secure_channel.mojom.NearbyConnectionStepResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger_LogSecureChannelState_ParamsSpec, 'ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger_LogSecureChannelState_Params', [
      mojo.internal.StructField('state', 0, 0, ash.secure_channel.mojom.SecureChannelStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.secure_channel.mojom.SecureChannelStructuredMetricsLoggerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.secure_channel.mojom.SecureChannelStructuredMetricsLoggerRemote = class {
  static get $interfaceName() {
    return 'ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.secure_channel.mojom.SecureChannelStructuredMetricsLoggerPendingReceiver,
      handle);
    this.$ = new ash.secure_channel.mojom.SecureChannelStructuredMetricsLoggerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.secure_channel.mojom.SecureChannelStructuredMetricsLoggerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SecureChannelStructuredMetricsLogger', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  logDiscoveryAttempt(result, error_code) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger_LogDiscoveryAttempt_ParamsSpec,
      null,
      [result, error_code],
      false);
  }

  logNearbyConnectionState(step, status) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger_LogNearbyConnectionState_ParamsSpec,
      null,
      [step, status],
      false);
  }

  logSecureChannelState(state) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger_LogSecureChannelState_ParamsSpec,
      null,
      [state],
      false);
  }

};

ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger.getRemote = function() {
  let remote = new ash.secure_channel.mojom.SecureChannelStructuredMetricsLoggerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger',
    'context');
  return remote.$;
};

ash.secure_channel.mojom.SecureChannelStructuredMetricsLoggerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SecureChannelStructuredMetricsLogger', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: LogDiscoveryAttempt
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger_LogDiscoveryAttempt_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LogDiscoveryAttempt (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: LogNearbyConnectionState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger_LogNearbyConnectionState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LogNearbyConnectionState (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: LogSecureChannelState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger_LogSecureChannelState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LogSecureChannelState (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger_LogDiscoveryAttempt_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.logDiscoveryAttempt');
          const result = this.impl.logDiscoveryAttempt(params.result, params.error_code);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger_LogNearbyConnectionState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.logNearbyConnectionState');
          const result = this.impl.logNearbyConnectionState(params.step, params.status);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger_LogSecureChannelState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.logSecureChannelState');
          const result = this.impl.logSecureChannelState(params.state);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.secure_channel.mojom.SecureChannelStructuredMetricsLoggerReceiver = ash.secure_channel.mojom.SecureChannelStructuredMetricsLoggerReceiver;

ash.secure_channel.mojom.SecureChannelStructuredMetricsLoggerPtr = ash.secure_channel.mojom.SecureChannelStructuredMetricsLoggerRemote;
ash.secure_channel.mojom.SecureChannelStructuredMetricsLoggerRequest = ash.secure_channel.mojom.SecureChannelStructuredMetricsLoggerPendingReceiver;


// Interface: SecureChannel
mojo.internal.Struct(
    ash.secure_channel.mojom.SecureChannel_ListenForConnectionFromDevice_ParamsSpec, 'ash.secure_channel.mojom.SecureChannel_ListenForConnectionFromDevice_Params', [
      mojo.internal.StructField('device_to_connect', 0, 0, ash.multidevice.mojom.RemoteDeviceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('local_device', 8, 0, ash.multidevice.mojom.RemoteDeviceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('feature', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('connection_medium', 24, 0, ash.secure_channel.mojom.ConnectionMediumSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('connection_priority', 32, 0, ash.secure_channel.mojom.ConnectionPrioritySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('delegate', 40, 0, mojo.internal.InterfaceProxy(ash.secure_channel.mojom.ConnectionDelegateSpec), null, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    ash.secure_channel.mojom.SecureChannel_InitiateConnectionToDevice_ParamsSpec, 'ash.secure_channel.mojom.SecureChannel_InitiateConnectionToDevice_Params', [
      mojo.internal.StructField('device_to_connect', 0, 0, ash.multidevice.mojom.RemoteDeviceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('local_device', 8, 0, ash.multidevice.mojom.RemoteDeviceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('feature', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('connection_medium', 24, 0, ash.secure_channel.mojom.ConnectionMediumSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('connection_priority', 32, 0, ash.secure_channel.mojom.ConnectionPrioritySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('delegate', 40, 0, mojo.internal.InterfaceProxy(ash.secure_channel.mojom.ConnectionDelegateSpec), null, false, 0, undefined),
      mojo.internal.StructField('secure_channel_structured_metrics_logger', 48, 0, mojo.internal.InterfaceProxy(ash.secure_channel.mojom.SecureChannelStructuredMetricsLoggerSpec), null, true, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    ash.secure_channel.mojom.SecureChannel_SetNearbyConnector_ParamsSpec, 'ash.secure_channel.mojom.SecureChannel_SetNearbyConnector_Params', [
      mojo.internal.StructField('nearby_connector', 0, 0, mojo.internal.InterfaceProxy(ash.secure_channel.mojom.NearbyConnectorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.secure_channel.mojom.SecureChannel_GetLastSeenTimestamp_ParamsSpec, 'ash.secure_channel.mojom.SecureChannel_GetLastSeenTimestamp_Params', [
      mojo.internal.StructField('remote_device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.secure_channel.mojom.SecureChannel_GetLastSeenTimestamp_ResponseParamsSpec, 'ash.secure_channel.mojom.SecureChannel_GetLastSeenTimestamp_ResponseParams', [
      mojo.internal.StructField('time', 0, 0, mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

ash.secure_channel.mojom.SecureChannelPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.secure_channel.mojom.SecureChannelRemote = class {
  static get $interfaceName() {
    return 'ash.secure_channel.mojom.SecureChannel';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.secure_channel.mojom.SecureChannelPendingReceiver,
      handle);
    this.$ = new ash.secure_channel.mojom.SecureChannelRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.secure_channel.mojom.SecureChannelRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SecureChannel', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  listenForConnectionFromDevice(device_to_connect, local_device, feature, connection_medium, connection_priority, delegate) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.secure_channel.mojom.SecureChannel_ListenForConnectionFromDevice_ParamsSpec,
      null,
      [device_to_connect, local_device, feature, connection_medium, connection_priority, delegate],
      false);
  }

  initiateConnectionToDevice(device_to_connect, local_device, feature, connection_medium, connection_priority, delegate, secure_channel_structured_metrics_logger) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.secure_channel.mojom.SecureChannel_InitiateConnectionToDevice_ParamsSpec,
      null,
      [device_to_connect, local_device, feature, connection_medium, connection_priority, delegate, secure_channel_structured_metrics_logger],
      false);
  }

  setNearbyConnector(nearby_connector) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.secure_channel.mojom.SecureChannel_SetNearbyConnector_ParamsSpec,
      null,
      [nearby_connector],
      false);
  }

  getLastSeenTimestamp(remote_device_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.secure_channel.mojom.SecureChannel_GetLastSeenTimestamp_ParamsSpec,
      ash.secure_channel.mojom.SecureChannel_GetLastSeenTimestamp_ResponseParamsSpec,
      [remote_device_id],
      false);
  }

};

ash.secure_channel.mojom.SecureChannel.getRemote = function() {
  let remote = new ash.secure_channel.mojom.SecureChannelRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.secure_channel.mojom.SecureChannel',
    'context');
  return remote.$;
};

ash.secure_channel.mojom.SecureChannelReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SecureChannel', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: ListenForConnectionFromDevice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.secure_channel.mojom.SecureChannel_ListenForConnectionFromDevice_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ListenForConnectionFromDevice (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: InitiateConnectionToDevice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.secure_channel.mojom.SecureChannel_InitiateConnectionToDevice_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InitiateConnectionToDevice (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetNearbyConnector
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.secure_channel.mojom.SecureChannel_SetNearbyConnector_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetNearbyConnector (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetLastSeenTimestamp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.secure_channel.mojom.SecureChannel_GetLastSeenTimestamp_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetLastSeenTimestamp (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.secure_channel.mojom.SecureChannel_ListenForConnectionFromDevice_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.listenForConnectionFromDevice');
          const result = this.impl.listenForConnectionFromDevice(params.device_to_connect, params.local_device, params.feature, params.connection_medium, params.connection_priority, params.delegate);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.secure_channel.mojom.SecureChannel_InitiateConnectionToDevice_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.initiateConnectionToDevice');
          const result = this.impl.initiateConnectionToDevice(params.device_to_connect, params.local_device, params.feature, params.connection_medium, params.connection_priority, params.delegate, params.secure_channel_structured_metrics_logger);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.secure_channel.mojom.SecureChannel_SetNearbyConnector_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setNearbyConnector');
          const result = this.impl.setNearbyConnector(params.nearby_connector);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.secure_channel.mojom.SecureChannel_GetLastSeenTimestamp_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getLastSeenTimestamp');
          const result = this.impl.getLastSeenTimestamp(params.remote_device_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.secure_channel.mojom.SecureChannel_GetLastSeenTimestamp_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.secure_channel.mojom.SecureChannelReceiver = ash.secure_channel.mojom.SecureChannelReceiver;

ash.secure_channel.mojom.SecureChannelPtr = ash.secure_channel.mojom.SecureChannelRemote;
ash.secure_channel.mojom.SecureChannelRequest = ash.secure_channel.mojom.SecureChannelPendingReceiver;

