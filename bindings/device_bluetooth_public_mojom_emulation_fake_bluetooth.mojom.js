// Auto-generated MojoJS binding
// Source: chromium_src/device/bluetooth/public/mojom/emulation/fake_bluetooth.mojom
// Module: bluetooth.mojom

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

        // Allow forcing version from external script
        if (window.mojoVersion) { v = window.mojoVersion; }
        
        const p = v.split('.');
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
var bluetooth = bluetooth || {};
bluetooth.mojom = bluetooth.mojom || {};

bluetooth.mojom.CentralStateSpec = { $: mojo.internal.Enum() };
bluetooth.mojom.WriteTypeSpec = { $: mojo.internal.Enum() };
bluetooth.mojom.GATTOperationTypeSpec = { $: mojo.internal.Enum() };
bluetooth.mojom.CharacteristicOperationTypeSpec = { $: mojo.internal.Enum() };
bluetooth.mojom.DescriptorOperationTypeSpec = { $: mojo.internal.Enum() };
bluetooth.mojom.AppearanceSpec = { $: {} };
bluetooth.mojom.PowerSpec = { $: {} };
bluetooth.mojom.ServiceDataMapSpec = { $: {} };
bluetooth.mojom.ScanRecordSpec = { $: {} };
bluetooth.mojom.ScanResultSpec = { $: {} };
bluetooth.mojom.CharacteristicPropertiesSpec = { $: {} };
bluetooth.mojom.FakeBluetooth = {};
bluetooth.mojom.FakeBluetooth.$interfaceName = 'bluetooth.mojom.FakeBluetooth';
bluetooth.mojom.FakeBluetooth_SetLESupported_ParamsSpec = { $: {} };
bluetooth.mojom.FakeBluetooth_SetLESupported_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeBluetooth_SimulateCentral_ParamsSpec = { $: {} };
bluetooth.mojom.FakeBluetooth_SimulateCentral_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeBluetooth_AllResponsesConsumed_ParamsSpec = { $: {} };
bluetooth.mojom.FakeBluetooth_AllResponsesConsumed_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral = {};
bluetooth.mojom.FakeCentral.$interfaceName = 'bluetooth.mojom.FakeCentral';
bluetooth.mojom.FakeCentral_SimulatePreconnectedPeripheral_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SimulatePreconnectedPeripheral_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SimulateAdvertisementReceived_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SimulateAdvertisementReceived_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SetState_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SetState_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SetNextGATTConnectionResponse_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SetNextGATTConnectionResponse_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SetNextGATTDiscoveryResponse_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SetNextGATTDiscoveryResponse_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SimulateGATTOperationResponse_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SimulateGATTOperationResponse_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SimulateGATTDisconnection_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SimulateGATTDisconnection_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SimulateGATTServicesChanged_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SimulateGATTServicesChanged_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SimulateCharacteristicOperationResponse_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SimulateCharacteristicOperationResponse_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SimulateDescriptorOperationResponse_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SimulateDescriptorOperationResponse_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_AddFakeService_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_AddFakeService_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_RemoveFakeService_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_RemoveFakeService_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_AddFakeCharacteristic_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_AddFakeCharacteristic_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_RemoveFakeCharacteristic_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_RemoveFakeCharacteristic_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_AddFakeDescriptor_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_AddFakeDescriptor_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_RemoveFakeDescriptor_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_RemoveFakeDescriptor_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SetNextReadCharacteristicResponse_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SetNextReadCharacteristicResponse_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SetNextWriteCharacteristicResponse_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SetNextWriteCharacteristicResponse_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SetNextSubscribeToNotificationsResponse_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SetNextSubscribeToNotificationsResponse_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SetNextUnsubscribeFromNotificationsResponse_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SetNextUnsubscribeFromNotificationsResponse_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_IsNotifying_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_IsNotifying_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_GetLastWrittenCharacteristicValue_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_GetLastWrittenCharacteristicValue_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SetNextReadDescriptorResponse_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SetNextReadDescriptorResponse_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SetNextWriteDescriptorResponse_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SetNextWriteDescriptorResponse_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_GetLastWrittenDescriptorValue_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_GetLastWrittenDescriptorValue_ResponseParamsSpec = { $: {} };
bluetooth.mojom.FakeCentral_SetClient_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentralClient = {};
bluetooth.mojom.FakeCentralClient.$interfaceName = 'bluetooth.mojom.FakeCentralClient';
bluetooth.mojom.FakeCentralClient_DispatchGATTOperationEvent_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentralClient_DispatchCharacteristicOperationEvent_ParamsSpec = { $: {} };
bluetooth.mojom.FakeCentralClient_DispatchDescriptorOperationEvent_ParamsSpec = { $: {} };

bluetooth.mojom.kHCISuccess = 0x0000;

bluetooth.mojom.kHCIConnectionTimeout = 0x0008;

bluetooth.mojom.kGATTSuccess = 0x0000;

bluetooth.mojom.kGATTInvalidHandle = 0x0001;

// Enum: CentralState
bluetooth.mojom.CentralState = {
  ABSENT: 0,
  POWERED_ON: 1,
  POWERED_OFF: 2,
};

// Enum: WriteType
bluetooth.mojom.WriteType = {
  kNone: 0,
  kWriteDefaultDeprecated: 1,
  kWriteWithResponse: 2,
  kWriteWithoutResponse: 3,
};

// Enum: GATTOperationType
bluetooth.mojom.GATTOperationType = {
  kConnect: 0,
  kDiscovery: 1,
};

// Enum: CharacteristicOperationType
bluetooth.mojom.CharacteristicOperationType = {
  kRead: 0,
  kWrite: 1,
  kSubscribeToNotifications: 2,
  kUnsubscribeFromNotifications: 3,
};

// Enum: DescriptorOperationType
bluetooth.mojom.DescriptorOperationType = {
  kRead: 0,
  kWrite: 1,
};

// Struct: Appearance
mojo.internal.Struct(
    bluetooth.mojom.AppearanceSpec, 'bluetooth.mojom.Appearance', [
      mojo.internal.StructField('has_value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('value', 1, 0, mojo.internal.Int8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Power
mojo.internal.Struct(
    bluetooth.mojom.PowerSpec, 'bluetooth.mojom.Power', [
      mojo.internal.StructField('has_value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('value', 1, 0, mojo.internal.Int8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ServiceDataMap
mojo.internal.Struct(
    bluetooth.mojom.ServiceDataMapSpec, 'bluetooth.mojom.ServiceDataMap', [
      mojo.internal.StructField('service_data', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.Array(mojo.internal.Uint8, false), false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ScanRecord
mojo.internal.Struct(
    bluetooth.mojom.ScanRecordSpec, 'bluetooth.mojom.ScanRecord', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('uuids', 8, 0, mojo.internal.Array(bluetooth.mojom.UUIDSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('appearance', 16, 0, bluetooth.mojom.AppearanceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tx_power', 24, 0, bluetooth.mojom.PowerSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('manufacturer_data', 32, 0, mojo.internal.Map(mojo.internal.Uint16, mojo.internal.Array(mojo.internal.Uint8, false), false), null, true, 0, undefined),
      mojo.internal.StructField('service_data', 40, 0, bluetooth.mojom.ServiceDataMapSpec.$, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: ScanResult
mojo.internal.Struct(
    bluetooth.mojom.ScanResultSpec, 'bluetooth.mojom.ScanResult', [
      mojo.internal.StructField('device_address', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('scan_record', 8, 0, bluetooth.mojom.ScanRecordSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('rssi', 16, 0, mojo.internal.Int8, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CharacteristicProperties
mojo.internal.Struct(
    bluetooth.mojom.CharacteristicPropertiesSpec, 'bluetooth.mojom.CharacteristicProperties', [
      mojo.internal.StructField('broadcast', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('read', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('write_without_response', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('write', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('notify', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('indicate', 0, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('authenticated_signed_writes', 0, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('extended_properties', 0, 7, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: FakeBluetooth
mojo.internal.Struct(
    bluetooth.mojom.FakeBluetooth_SetLESupported_ParamsSpec, 'bluetooth.mojom.FakeBluetooth_SetLESupported_Params', [
      mojo.internal.StructField('available', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeBluetooth_SetLESupported_ResponseParamsSpec, 'bluetooth.mojom.FakeBluetooth_SetLESupported_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeBluetooth_SimulateCentral_ParamsSpec, 'bluetooth.mojom.FakeBluetooth_SimulateCentral_Params', [
      mojo.internal.StructField('state', 0, 0, bluetooth.mojom.CentralStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeBluetooth_SimulateCentral_ResponseParamsSpec, 'bluetooth.mojom.FakeBluetooth_SimulateCentral_ResponseParams', [
      mojo.internal.StructField('fake_central', 0, 0, mojo.internal.InterfaceProxy(bluetooth.mojom.FakeCentralSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeBluetooth_AllResponsesConsumed_ParamsSpec, 'bluetooth.mojom.FakeBluetooth_AllResponsesConsumed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeBluetooth_AllResponsesConsumed_ResponseParamsSpec, 'bluetooth.mojom.FakeBluetooth_AllResponsesConsumed_ResponseParams', [
      mojo.internal.StructField('consumed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

bluetooth.mojom.FakeBluetoothPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

bluetooth.mojom.FakeBluetoothRemote = class {
  static get $interfaceName() {
    return 'bluetooth.mojom.FakeBluetooth';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      bluetooth.mojom.FakeBluetoothPendingReceiver,
      handle);
    this.$ = new bluetooth.mojom.FakeBluetoothRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

bluetooth.mojom.FakeBluetoothRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FakeBluetooth', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setLESupported(available) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      bluetooth.mojom.FakeBluetooth_SetLESupported_ParamsSpec,
      bluetooth.mojom.FakeBluetooth_SetLESupported_ResponseParamsSpec,
      [available],
      false);
  }

  simulateCentral(state) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      bluetooth.mojom.FakeBluetooth_SimulateCentral_ParamsSpec,
      bluetooth.mojom.FakeBluetooth_SimulateCentral_ResponseParamsSpec,
      [state],
      false);
  }

  allResponsesConsumed() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      bluetooth.mojom.FakeBluetooth_AllResponsesConsumed_ParamsSpec,
      bluetooth.mojom.FakeBluetooth_AllResponsesConsumed_ResponseParamsSpec,
      [],
      false);
  }

};

bluetooth.mojom.FakeBluetooth.getRemote = function() {
  let remote = new bluetooth.mojom.FakeBluetoothRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'bluetooth.mojom.FakeBluetooth',
    'context');
  return remote.$;
};

bluetooth.mojom.FakeBluetoothReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FakeBluetooth', [
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
        
        // Try Method 0: SetLESupported
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.FakeBluetooth_SetLESupported_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetLESupported (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SimulateCentral
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.FakeBluetooth_SimulateCentral_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SimulateCentral (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: AllResponsesConsumed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.FakeBluetooth_AllResponsesConsumed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AllResponsesConsumed (2)');
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
          const params = decoder.decodeStructInline(bluetooth.mojom.FakeBluetooth_SetLESupported_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setLESupported');
          const result = this.impl.setLESupported(params.available);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.FakeBluetooth_SetLESupported_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.FakeBluetooth_SimulateCentral_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.simulateCentral');
          const result = this.impl.simulateCentral(params.state);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.FakeBluetooth_SimulateCentral_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.FakeBluetooth_AllResponsesConsumed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.allResponsesConsumed');
          const result = this.impl.allResponsesConsumed();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.FakeBluetooth_AllResponsesConsumed_ResponseParamsSpec);
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

bluetooth.mojom.FakeBluetoothReceiver = bluetooth.mojom.FakeBluetoothReceiver;

bluetooth.mojom.FakeBluetoothPtr = bluetooth.mojom.FakeBluetoothRemote;
bluetooth.mojom.FakeBluetoothRequest = bluetooth.mojom.FakeBluetoothPendingReceiver;


// Interface: FakeCentral
mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SimulatePreconnectedPeripheral_ParamsSpec, 'bluetooth.mojom.FakeCentral_SimulatePreconnectedPeripheral_Params', [
      mojo.internal.StructField('address', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('manufacturer_data', 16, 0, mojo.internal.Map(mojo.internal.Uint16, mojo.internal.Array(mojo.internal.Uint8, false), false), null, false, 0, undefined),
      mojo.internal.StructField('known_service_uuids', 24, 0, mojo.internal.Array(bluetooth.mojom.UUIDSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SimulatePreconnectedPeripheral_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_SimulatePreconnectedPeripheral_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SimulateAdvertisementReceived_ParamsSpec, 'bluetooth.mojom.FakeCentral_SimulateAdvertisementReceived_Params', [
      mojo.internal.StructField('result', 0, 0, bluetooth.mojom.ScanResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SimulateAdvertisementReceived_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_SimulateAdvertisementReceived_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SetState_ParamsSpec, 'bluetooth.mojom.FakeCentral_SetState_Params', [
      mojo.internal.StructField('state', 0, 0, bluetooth.mojom.CentralStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SetState_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_SetState_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SetNextGATTConnectionResponse_ParamsSpec, 'bluetooth.mojom.FakeCentral_SetNextGATTConnectionResponse_Params', [
      mojo.internal.StructField('address', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('code', 8, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SetNextGATTConnectionResponse_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_SetNextGATTConnectionResponse_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SetNextGATTDiscoveryResponse_ParamsSpec, 'bluetooth.mojom.FakeCentral_SetNextGATTDiscoveryResponse_Params', [
      mojo.internal.StructField('address', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('code', 8, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SetNextGATTDiscoveryResponse_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_SetNextGATTDiscoveryResponse_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SimulateGATTOperationResponse_ParamsSpec, 'bluetooth.mojom.FakeCentral_SimulateGATTOperationResponse_Params', [
      mojo.internal.StructField('type', 0, 0, bluetooth.mojom.GATTOperationTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('address', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('code', 16, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SimulateGATTOperationResponse_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_SimulateGATTOperationResponse_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SimulateGATTDisconnection_ParamsSpec, 'bluetooth.mojom.FakeCentral_SimulateGATTDisconnection_Params', [
      mojo.internal.StructField('address', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SimulateGATTDisconnection_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_SimulateGATTDisconnection_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SimulateGATTServicesChanged_ParamsSpec, 'bluetooth.mojom.FakeCentral_SimulateGATTServicesChanged_Params', [
      mojo.internal.StructField('address', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SimulateGATTServicesChanged_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_SimulateGATTServicesChanged_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SimulateCharacteristicOperationResponse_ParamsSpec, 'bluetooth.mojom.FakeCentral_SimulateCharacteristicOperationResponse_Params', [
      mojo.internal.StructField('type', 0, 0, bluetooth.mojom.CharacteristicOperationTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('characteristic_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('peripheral_address', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('data', 32, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('code', 40, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SimulateCharacteristicOperationResponse_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_SimulateCharacteristicOperationResponse_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SimulateDescriptorOperationResponse_ParamsSpec, 'bluetooth.mojom.FakeCentral_SimulateDescriptorOperationResponse_Params', [
      mojo.internal.StructField('type', 0, 0, bluetooth.mojom.DescriptorOperationTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('descriptor_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('characteristic_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_id', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('peripheral_address', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('data', 40, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('code', 48, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SimulateDescriptorOperationResponse_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_SimulateDescriptorOperationResponse_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_AddFakeService_ParamsSpec, 'bluetooth.mojom.FakeCentral_AddFakeService_Params', [
      mojo.internal.StructField('peripheral_address', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_uuid', 8, 0, bluetooth.mojom.UUIDSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_AddFakeService_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_AddFakeService_ResponseParams', [
      mojo.internal.StructField('service_id', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_RemoveFakeService_ParamsSpec, 'bluetooth.mojom.FakeCentral_RemoveFakeService_Params', [
      mojo.internal.StructField('service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('peripheral_address', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_RemoveFakeService_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_RemoveFakeService_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_AddFakeCharacteristic_ParamsSpec, 'bluetooth.mojom.FakeCentral_AddFakeCharacteristic_Params', [
      mojo.internal.StructField('characteristic_uuid', 0, 0, bluetooth.mojom.UUIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('properties', 8, 0, bluetooth.mojom.CharacteristicPropertiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('service_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('peripheral_address', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_AddFakeCharacteristic_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_AddFakeCharacteristic_ResponseParams', [
      mojo.internal.StructField('characteristic_id', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_RemoveFakeCharacteristic_ParamsSpec, 'bluetooth.mojom.FakeCentral_RemoveFakeCharacteristic_Params', [
      mojo.internal.StructField('identifier', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('peripheral_address', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_RemoveFakeCharacteristic_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_RemoveFakeCharacteristic_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_AddFakeDescriptor_ParamsSpec, 'bluetooth.mojom.FakeCentral_AddFakeDescriptor_Params', [
      mojo.internal.StructField('descriptor_uuid', 0, 0, bluetooth.mojom.UUIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('characteristic_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('peripheral_address', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_AddFakeDescriptor_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_AddFakeDescriptor_ResponseParams', [
      mojo.internal.StructField('descriptor_id', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_RemoveFakeDescriptor_ParamsSpec, 'bluetooth.mojom.FakeCentral_RemoveFakeDescriptor_Params', [
      mojo.internal.StructField('descriptor_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('characteristic_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('peripheral_address', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_RemoveFakeDescriptor_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_RemoveFakeDescriptor_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SetNextReadCharacteristicResponse_ParamsSpec, 'bluetooth.mojom.FakeCentral_SetNextReadCharacteristicResponse_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('characteristic_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('peripheral_address', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('gatt_code', 32, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SetNextReadCharacteristicResponse_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_SetNextReadCharacteristicResponse_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SetNextWriteCharacteristicResponse_ParamsSpec, 'bluetooth.mojom.FakeCentral_SetNextWriteCharacteristicResponse_Params', [
      mojo.internal.StructField('characteristic_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('peripheral_address', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('gatt_code', 24, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SetNextWriteCharacteristicResponse_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_SetNextWriteCharacteristicResponse_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SetNextSubscribeToNotificationsResponse_ParamsSpec, 'bluetooth.mojom.FakeCentral_SetNextSubscribeToNotificationsResponse_Params', [
      mojo.internal.StructField('characteristic_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('peripheral_address', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('gatt_code', 24, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SetNextSubscribeToNotificationsResponse_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_SetNextSubscribeToNotificationsResponse_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SetNextUnsubscribeFromNotificationsResponse_ParamsSpec, 'bluetooth.mojom.FakeCentral_SetNextUnsubscribeFromNotificationsResponse_Params', [
      mojo.internal.StructField('characteristic_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('peripheral_address', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('gatt_code', 24, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SetNextUnsubscribeFromNotificationsResponse_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_SetNextUnsubscribeFromNotificationsResponse_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_IsNotifying_ParamsSpec, 'bluetooth.mojom.FakeCentral_IsNotifying_Params', [
      mojo.internal.StructField('characteristic_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('peripheral_address', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_IsNotifying_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_IsNotifying_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_notifying', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_GetLastWrittenCharacteristicValue_ParamsSpec, 'bluetooth.mojom.FakeCentral_GetLastWrittenCharacteristicValue_Params', [
      mojo.internal.StructField('characteristic_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('peripheral_address', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_GetLastWrittenCharacteristicValue_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_GetLastWrittenCharacteristicValue_ResponseParams', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('write_type', 8, 0, bluetooth.mojom.WriteTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('success', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SetNextReadDescriptorResponse_ParamsSpec, 'bluetooth.mojom.FakeCentral_SetNextReadDescriptorResponse_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('descriptor_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('characteristic_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_id', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('peripheral_address', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('gatt_code', 40, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SetNextReadDescriptorResponse_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_SetNextReadDescriptorResponse_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SetNextWriteDescriptorResponse_ParamsSpec, 'bluetooth.mojom.FakeCentral_SetNextWriteDescriptorResponse_Params', [
      mojo.internal.StructField('descriptor_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('characteristic_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('peripheral_address', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('gatt_code', 32, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SetNextWriteDescriptorResponse_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_SetNextWriteDescriptorResponse_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_GetLastWrittenDescriptorValue_ParamsSpec, 'bluetooth.mojom.FakeCentral_GetLastWrittenDescriptorValue_Params', [
      mojo.internal.StructField('descriptor_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('characteristic_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('peripheral_address', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_GetLastWrittenDescriptorValue_ResponseParamsSpec, 'bluetooth.mojom.FakeCentral_GetLastWrittenDescriptorValue_ResponseParams', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentral_SetClient_ParamsSpec, 'bluetooth.mojom.FakeCentral_SetClient_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

bluetooth.mojom.FakeCentralPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

bluetooth.mojom.FakeCentralRemote = class {
  static get $interfaceName() {
    return 'bluetooth.mojom.FakeCentral';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      bluetooth.mojom.FakeCentralPendingReceiver,
      handle);
    this.$ = new bluetooth.mojom.FakeCentralRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

bluetooth.mojom.FakeCentralRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FakeCentral', [
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

  simulatePreconnectedPeripheral(address, name, manufacturer_data, known_service_uuids) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      bluetooth.mojom.FakeCentral_SimulatePreconnectedPeripheral_ParamsSpec,
      bluetooth.mojom.FakeCentral_SimulatePreconnectedPeripheral_ResponseParamsSpec,
      [address, name, manufacturer_data, known_service_uuids],
      false);
  }

  simulateAdvertisementReceived(result) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      bluetooth.mojom.FakeCentral_SimulateAdvertisementReceived_ParamsSpec,
      bluetooth.mojom.FakeCentral_SimulateAdvertisementReceived_ResponseParamsSpec,
      [result],
      false);
  }

  setState(state) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      bluetooth.mojom.FakeCentral_SetState_ParamsSpec,
      bluetooth.mojom.FakeCentral_SetState_ResponseParamsSpec,
      [state],
      false);
  }

  setNextGATTConnectionResponse(address, code) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      bluetooth.mojom.FakeCentral_SetNextGATTConnectionResponse_ParamsSpec,
      bluetooth.mojom.FakeCentral_SetNextGATTConnectionResponse_ResponseParamsSpec,
      [address, code],
      false);
  }

  setNextGATTDiscoveryResponse(address, code) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      bluetooth.mojom.FakeCentral_SetNextGATTDiscoveryResponse_ParamsSpec,
      bluetooth.mojom.FakeCentral_SetNextGATTDiscoveryResponse_ResponseParamsSpec,
      [address, code],
      false);
  }

  simulateGATTOperationResponse(type, address, code) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      bluetooth.mojom.FakeCentral_SimulateGATTOperationResponse_ParamsSpec,
      bluetooth.mojom.FakeCentral_SimulateGATTOperationResponse_ResponseParamsSpec,
      [type, address, code],
      false);
  }

  simulateGATTDisconnection(address) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      bluetooth.mojom.FakeCentral_SimulateGATTDisconnection_ParamsSpec,
      bluetooth.mojom.FakeCentral_SimulateGATTDisconnection_ResponseParamsSpec,
      [address],
      false);
  }

  simulateGATTServicesChanged(address) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      bluetooth.mojom.FakeCentral_SimulateGATTServicesChanged_ParamsSpec,
      bluetooth.mojom.FakeCentral_SimulateGATTServicesChanged_ResponseParamsSpec,
      [address],
      false);
  }

  simulateCharacteristicOperationResponse(type, characteristic_id, service_id, peripheral_address, code, data) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      bluetooth.mojom.FakeCentral_SimulateCharacteristicOperationResponse_ParamsSpec,
      bluetooth.mojom.FakeCentral_SimulateCharacteristicOperationResponse_ResponseParamsSpec,
      [type, characteristic_id, service_id, peripheral_address, code, data],
      false);
  }

  simulateDescriptorOperationResponse(type, descriptor_id, characteristic_id, service_id, peripheral_address, code, data) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      bluetooth.mojom.FakeCentral_SimulateDescriptorOperationResponse_ParamsSpec,
      bluetooth.mojom.FakeCentral_SimulateDescriptorOperationResponse_ResponseParamsSpec,
      [type, descriptor_id, characteristic_id, service_id, peripheral_address, code, data],
      false);
  }

  addFakeService(peripheral_address, service_uuid) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      bluetooth.mojom.FakeCentral_AddFakeService_ParamsSpec,
      bluetooth.mojom.FakeCentral_AddFakeService_ResponseParamsSpec,
      [peripheral_address, service_uuid],
      false);
  }

  removeFakeService(service_id, peripheral_address) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      bluetooth.mojom.FakeCentral_RemoveFakeService_ParamsSpec,
      bluetooth.mojom.FakeCentral_RemoveFakeService_ResponseParamsSpec,
      [service_id, peripheral_address],
      false);
  }

  addFakeCharacteristic(characteristic_uuid, properties, service_id, peripheral_address) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      bluetooth.mojom.FakeCentral_AddFakeCharacteristic_ParamsSpec,
      bluetooth.mojom.FakeCentral_AddFakeCharacteristic_ResponseParamsSpec,
      [characteristic_uuid, properties, service_id, peripheral_address],
      false);
  }

  removeFakeCharacteristic(identifier, service_id, peripheral_address) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      bluetooth.mojom.FakeCentral_RemoveFakeCharacteristic_ParamsSpec,
      bluetooth.mojom.FakeCentral_RemoveFakeCharacteristic_ResponseParamsSpec,
      [identifier, service_id, peripheral_address],
      false);
  }

  addFakeDescriptor(descriptor_uuid, characteristic_id, service_id, peripheral_address) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      bluetooth.mojom.FakeCentral_AddFakeDescriptor_ParamsSpec,
      bluetooth.mojom.FakeCentral_AddFakeDescriptor_ResponseParamsSpec,
      [descriptor_uuid, characteristic_id, service_id, peripheral_address],
      false);
  }

  removeFakeDescriptor(descriptor_id, characteristic_id, service_id, peripheral_address) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      bluetooth.mojom.FakeCentral_RemoveFakeDescriptor_ParamsSpec,
      bluetooth.mojom.FakeCentral_RemoveFakeDescriptor_ResponseParamsSpec,
      [descriptor_id, characteristic_id, service_id, peripheral_address],
      false);
  }

  setNextReadCharacteristicResponse(gatt_code, value, characteristic_id, service_id, peripheral_address) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      bluetooth.mojom.FakeCentral_SetNextReadCharacteristicResponse_ParamsSpec,
      bluetooth.mojom.FakeCentral_SetNextReadCharacteristicResponse_ResponseParamsSpec,
      [gatt_code, value, characteristic_id, service_id, peripheral_address],
      false);
  }

  setNextWriteCharacteristicResponse(gatt_code, characteristic_id, service_id, peripheral_address) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      bluetooth.mojom.FakeCentral_SetNextWriteCharacteristicResponse_ParamsSpec,
      bluetooth.mojom.FakeCentral_SetNextWriteCharacteristicResponse_ResponseParamsSpec,
      [gatt_code, characteristic_id, service_id, peripheral_address],
      false);
  }

  setNextSubscribeToNotificationsResponse(gatt_code, characteristic_id, service_id, peripheral_address) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      bluetooth.mojom.FakeCentral_SetNextSubscribeToNotificationsResponse_ParamsSpec,
      bluetooth.mojom.FakeCentral_SetNextSubscribeToNotificationsResponse_ResponseParamsSpec,
      [gatt_code, characteristic_id, service_id, peripheral_address],
      false);
  }

  setNextUnsubscribeFromNotificationsResponse(gatt_code, characteristic_id, service_id, peripheral_address) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      bluetooth.mojom.FakeCentral_SetNextUnsubscribeFromNotificationsResponse_ParamsSpec,
      bluetooth.mojom.FakeCentral_SetNextUnsubscribeFromNotificationsResponse_ResponseParamsSpec,
      [gatt_code, characteristic_id, service_id, peripheral_address],
      false);
  }

  isNotifying(characteristic_id, service_id, peripheral_address) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      bluetooth.mojom.FakeCentral_IsNotifying_ParamsSpec,
      bluetooth.mojom.FakeCentral_IsNotifying_ResponseParamsSpec,
      [characteristic_id, service_id, peripheral_address],
      false);
  }

  getLastWrittenCharacteristicValue(characteristic_id, service_id, peripheral_address) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      bluetooth.mojom.FakeCentral_GetLastWrittenCharacteristicValue_ParamsSpec,
      bluetooth.mojom.FakeCentral_GetLastWrittenCharacteristicValue_ResponseParamsSpec,
      [characteristic_id, service_id, peripheral_address],
      false);
  }

  setNextReadDescriptorResponse(gatt_code, value, descriptor_id, characteristic_id, service_id, peripheral_address) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      bluetooth.mojom.FakeCentral_SetNextReadDescriptorResponse_ParamsSpec,
      bluetooth.mojom.FakeCentral_SetNextReadDescriptorResponse_ResponseParamsSpec,
      [gatt_code, value, descriptor_id, characteristic_id, service_id, peripheral_address],
      false);
  }

  setNextWriteDescriptorResponse(gatt_code, descriptor_id, characteristic_id, service_id, peripheral_address) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      bluetooth.mojom.FakeCentral_SetNextWriteDescriptorResponse_ParamsSpec,
      bluetooth.mojom.FakeCentral_SetNextWriteDescriptorResponse_ResponseParamsSpec,
      [gatt_code, descriptor_id, characteristic_id, service_id, peripheral_address],
      false);
  }

  getLastWrittenDescriptorValue(descriptor_id, characteristic_id, service_id, peripheral_address) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      bluetooth.mojom.FakeCentral_GetLastWrittenDescriptorValue_ParamsSpec,
      bluetooth.mojom.FakeCentral_GetLastWrittenDescriptorValue_ResponseParamsSpec,
      [descriptor_id, characteristic_id, service_id, peripheral_address],
      false);
  }

  setClient(client) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      bluetooth.mojom.FakeCentral_SetClient_ParamsSpec,
      null,
      [client],
      false);
  }

};

bluetooth.mojom.FakeCentral.getRemote = function() {
  let remote = new bluetooth.mojom.FakeCentralRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'bluetooth.mojom.FakeCentral',
    'context');
  return remote.$;
};

bluetooth.mojom.FakeCentralReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FakeCentral', [
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
        
        // Try Method 0: SimulatePreconnectedPeripheral
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.FakeCentral_SimulatePreconnectedPeripheral_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SimulatePreconnectedPeripheral (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SimulateAdvertisementReceived
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.FakeCentral_SimulateAdvertisementReceived_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SimulateAdvertisementReceived (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.FakeCentral_SetState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetState (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetNextGATTConnectionResponse
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.FakeCentral_SetNextGATTConnectionResponse_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetNextGATTConnectionResponse (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetNextGATTDiscoveryResponse
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.FakeCentral_SetNextGATTDiscoveryResponse_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetNextGATTDiscoveryResponse (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SimulateGATTOperationResponse
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.FakeCentral_SimulateGATTOperationResponse_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SimulateGATTOperationResponse (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SimulateGATTDisconnection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.FakeCentral_SimulateGATTDisconnection_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SimulateGATTDisconnection (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: SimulateGATTServicesChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.FakeCentral_SimulateGATTServicesChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SimulateGATTServicesChanged (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: SimulateCharacteristicOperationResponse
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.FakeCentral_SimulateCharacteristicOperationResponse_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SimulateCharacteristicOperationResponse (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: SimulateDescriptorOperationResponse
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.FakeCentral_SimulateDescriptorOperationResponse_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SimulateDescriptorOperationResponse (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: AddFakeService
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.FakeCentral_AddFakeService_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddFakeService (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: RemoveFakeService
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.FakeCentral_RemoveFakeService_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveFakeService (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: AddFakeCharacteristic
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.FakeCentral_AddFakeCharacteristic_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddFakeCharacteristic (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: RemoveFakeCharacteristic
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.FakeCentral_RemoveFakeCharacteristic_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveFakeCharacteristic (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: AddFakeDescriptor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.FakeCentral_AddFakeDescriptor_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddFakeDescriptor (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: RemoveFakeDescriptor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.FakeCentral_RemoveFakeDescriptor_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveFakeDescriptor (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: SetNextReadCharacteristicResponse
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.FakeCentral_SetNextReadCharacteristicResponse_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetNextReadCharacteristicResponse (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: SetNextWriteCharacteristicResponse
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.FakeCentral_SetNextWriteCharacteristicResponse_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetNextWriteCharacteristicResponse (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: SetNextSubscribeToNotificationsResponse
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.FakeCentral_SetNextSubscribeToNotificationsResponse_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetNextSubscribeToNotificationsResponse (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: SetNextUnsubscribeFromNotificationsResponse
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.FakeCentral_SetNextUnsubscribeFromNotificationsResponse_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetNextUnsubscribeFromNotificationsResponse (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: IsNotifying
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.FakeCentral_IsNotifying_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsNotifying (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: GetLastWrittenCharacteristicValue
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.FakeCentral_GetLastWrittenCharacteristicValue_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetLastWrittenCharacteristicValue (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: SetNextReadDescriptorResponse
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.FakeCentral_SetNextReadDescriptorResponse_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetNextReadDescriptorResponse (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: SetNextWriteDescriptorResponse
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.FakeCentral_SetNextWriteDescriptorResponse_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetNextWriteDescriptorResponse (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
           }
        }
        // Try Method 24: GetLastWrittenDescriptorValue
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.FakeCentral_GetLastWrittenDescriptorValue_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetLastWrittenDescriptorValue (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 24 failed:', e);
           }
        }
        // Try Method 25: SetClient
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.FakeCentral_SetClient_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetClient (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 25 failed:', e);
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
          const params = decoder.decodeStructInline(bluetooth.mojom.FakeCentral_SimulatePreconnectedPeripheral_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.simulatePreconnectedPeripheral');
          const result = this.impl.simulatePreconnectedPeripheral(params.address, params.name, params.manufacturer_data, params.known_service_uuids);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.FakeCentral_SimulatePreconnectedPeripheral_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.FakeCentral_SimulateAdvertisementReceived_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.simulateAdvertisementReceived');
          const result = this.impl.simulateAdvertisementReceived(params.result);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.FakeCentral_SimulateAdvertisementReceived_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.FakeCentral_SetState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setState');
          const result = this.impl.setState(params.state);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.FakeCentral_SetState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.FakeCentral_SetNextGATTConnectionResponse_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setNextGATTConnectionResponse');
          const result = this.impl.setNextGATTConnectionResponse(params.address, params.code);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.FakeCentral_SetNextGATTConnectionResponse_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.FakeCentral_SetNextGATTDiscoveryResponse_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setNextGATTDiscoveryResponse');
          const result = this.impl.setNextGATTDiscoveryResponse(params.address, params.code);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.FakeCentral_SetNextGATTDiscoveryResponse_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.FakeCentral_SimulateGATTOperationResponse_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.simulateGATTOperationResponse');
          const result = this.impl.simulateGATTOperationResponse(params.type, params.address, params.code);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.FakeCentral_SimulateGATTOperationResponse_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.FakeCentral_SimulateGATTDisconnection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.simulateGATTDisconnection');
          const result = this.impl.simulateGATTDisconnection(params.address);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.FakeCentral_SimulateGATTDisconnection_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.FakeCentral_SimulateGATTServicesChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.simulateGATTServicesChanged');
          const result = this.impl.simulateGATTServicesChanged(params.address);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.FakeCentral_SimulateGATTServicesChanged_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.FakeCentral_SimulateCharacteristicOperationResponse_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.simulateCharacteristicOperationResponse');
          const result = this.impl.simulateCharacteristicOperationResponse(params.type, params.characteristic_id, params.service_id, params.peripheral_address, params.code, params.data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.FakeCentral_SimulateCharacteristicOperationResponse_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.FakeCentral_SimulateDescriptorOperationResponse_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.simulateDescriptorOperationResponse');
          const result = this.impl.simulateDescriptorOperationResponse(params.type, params.descriptor_id, params.characteristic_id, params.service_id, params.peripheral_address, params.code, params.data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.FakeCentral_SimulateDescriptorOperationResponse_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.FakeCentral_AddFakeService_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addFakeService');
          const result = this.impl.addFakeService(params.peripheral_address, params.service_uuid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.FakeCentral_AddFakeService_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.FakeCentral_RemoveFakeService_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeFakeService');
          const result = this.impl.removeFakeService(params.service_id, params.peripheral_address);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.FakeCentral_RemoveFakeService_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.FakeCentral_AddFakeCharacteristic_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addFakeCharacteristic');
          const result = this.impl.addFakeCharacteristic(params.characteristic_uuid, params.properties, params.service_id, params.peripheral_address);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.FakeCentral_AddFakeCharacteristic_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.FakeCentral_RemoveFakeCharacteristic_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeFakeCharacteristic');
          const result = this.impl.removeFakeCharacteristic(params.identifier, params.service_id, params.peripheral_address);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.FakeCentral_RemoveFakeCharacteristic_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.FakeCentral_AddFakeDescriptor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addFakeDescriptor');
          const result = this.impl.addFakeDescriptor(params.descriptor_uuid, params.characteristic_id, params.service_id, params.peripheral_address);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.FakeCentral_AddFakeDescriptor_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.FakeCentral_RemoveFakeDescriptor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeFakeDescriptor');
          const result = this.impl.removeFakeDescriptor(params.descriptor_id, params.characteristic_id, params.service_id, params.peripheral_address);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.FakeCentral_RemoveFakeDescriptor_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.FakeCentral_SetNextReadCharacteristicResponse_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setNextReadCharacteristicResponse');
          const result = this.impl.setNextReadCharacteristicResponse(params.gatt_code, params.value, params.characteristic_id, params.service_id, params.peripheral_address);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.FakeCentral_SetNextReadCharacteristicResponse_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.FakeCentral_SetNextWriteCharacteristicResponse_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setNextWriteCharacteristicResponse');
          const result = this.impl.setNextWriteCharacteristicResponse(params.gatt_code, params.characteristic_id, params.service_id, params.peripheral_address);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.FakeCentral_SetNextWriteCharacteristicResponse_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.FakeCentral_SetNextSubscribeToNotificationsResponse_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setNextSubscribeToNotificationsResponse');
          const result = this.impl.setNextSubscribeToNotificationsResponse(params.gatt_code, params.characteristic_id, params.service_id, params.peripheral_address);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.FakeCentral_SetNextSubscribeToNotificationsResponse_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.FakeCentral_SetNextUnsubscribeFromNotificationsResponse_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setNextUnsubscribeFromNotificationsResponse');
          const result = this.impl.setNextUnsubscribeFromNotificationsResponse(params.gatt_code, params.characteristic_id, params.service_id, params.peripheral_address);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.FakeCentral_SetNextUnsubscribeFromNotificationsResponse_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.FakeCentral_IsNotifying_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isNotifying');
          const result = this.impl.isNotifying(params.characteristic_id, params.service_id, params.peripheral_address);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.FakeCentral_IsNotifying_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.FakeCentral_GetLastWrittenCharacteristicValue_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getLastWrittenCharacteristicValue');
          const result = this.impl.getLastWrittenCharacteristicValue(params.characteristic_id, params.service_id, params.peripheral_address);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.FakeCentral_GetLastWrittenCharacteristicValue_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.FakeCentral_SetNextReadDescriptorResponse_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setNextReadDescriptorResponse');
          const result = this.impl.setNextReadDescriptorResponse(params.gatt_code, params.value, params.descriptor_id, params.characteristic_id, params.service_id, params.peripheral_address);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.FakeCentral_SetNextReadDescriptorResponse_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.FakeCentral_SetNextWriteDescriptorResponse_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setNextWriteDescriptorResponse');
          const result = this.impl.setNextWriteDescriptorResponse(params.gatt_code, params.descriptor_id, params.characteristic_id, params.service_id, params.peripheral_address);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.FakeCentral_SetNextWriteDescriptorResponse_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.FakeCentral_GetLastWrittenDescriptorValue_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getLastWrittenDescriptorValue');
          const result = this.impl.getLastWrittenDescriptorValue(params.descriptor_id, params.characteristic_id, params.service_id, params.peripheral_address);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bluetooth.mojom.FakeCentral_GetLastWrittenDescriptorValue_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.FakeCentral_SetClient_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setClient');
          const result = this.impl.setClient(params.client);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

bluetooth.mojom.FakeCentralReceiver = bluetooth.mojom.FakeCentralReceiver;

bluetooth.mojom.FakeCentralPtr = bluetooth.mojom.FakeCentralRemote;
bluetooth.mojom.FakeCentralRequest = bluetooth.mojom.FakeCentralPendingReceiver;


// Interface: FakeCentralClient
mojo.internal.Struct(
    bluetooth.mojom.FakeCentralClient_DispatchGATTOperationEvent_ParamsSpec, 'bluetooth.mojom.FakeCentralClient_DispatchGATTOperationEvent_Params', [
      mojo.internal.StructField('type', 0, 0, bluetooth.mojom.GATTOperationTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('peripheral_address', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentralClient_DispatchCharacteristicOperationEvent_ParamsSpec, 'bluetooth.mojom.FakeCentralClient_DispatchCharacteristicOperationEvent_Params', [
      mojo.internal.StructField('type', 0, 0, bluetooth.mojom.CharacteristicOperationTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('write_type', 16, 0, bluetooth.mojom.WriteTypeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('characteristic_id', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    bluetooth.mojom.FakeCentralClient_DispatchDescriptorOperationEvent_ParamsSpec, 'bluetooth.mojom.FakeCentralClient_DispatchDescriptorOperationEvent_Params', [
      mojo.internal.StructField('type', 0, 0, bluetooth.mojom.DescriptorOperationTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('descriptor_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

bluetooth.mojom.FakeCentralClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

bluetooth.mojom.FakeCentralClientRemote = class {
  static get $interfaceName() {
    return 'bluetooth.mojom.FakeCentralClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      bluetooth.mojom.FakeCentralClientPendingReceiver,
      handle);
    this.$ = new bluetooth.mojom.FakeCentralClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

bluetooth.mojom.FakeCentralClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FakeCentralClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  dispatchGATTOperationEvent(type, peripheral_address) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      bluetooth.mojom.FakeCentralClient_DispatchGATTOperationEvent_ParamsSpec,
      null,
      [type, peripheral_address],
      false);
  }

  dispatchCharacteristicOperationEvent(type, data, write_type, characteristic_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      bluetooth.mojom.FakeCentralClient_DispatchCharacteristicOperationEvent_ParamsSpec,
      null,
      [type, data, write_type, characteristic_id],
      false);
  }

  dispatchDescriptorOperationEvent(type, data, descriptor_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      bluetooth.mojom.FakeCentralClient_DispatchDescriptorOperationEvent_ParamsSpec,
      null,
      [type, data, descriptor_id],
      false);
  }

};

bluetooth.mojom.FakeCentralClient.getRemote = function() {
  let remote = new bluetooth.mojom.FakeCentralClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'bluetooth.mojom.FakeCentralClient',
    'context');
  return remote.$;
};

bluetooth.mojom.FakeCentralClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FakeCentralClient', [
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
        
        // Try Method 0: DispatchGATTOperationEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.FakeCentralClient_DispatchGATTOperationEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchGATTOperationEvent (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DispatchCharacteristicOperationEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.FakeCentralClient_DispatchCharacteristicOperationEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchCharacteristicOperationEvent (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DispatchDescriptorOperationEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(bluetooth.mojom.FakeCentralClient_DispatchDescriptorOperationEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchDescriptorOperationEvent (2)');
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
          const params = decoder.decodeStructInline(bluetooth.mojom.FakeCentralClient_DispatchGATTOperationEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchGATTOperationEvent');
          const result = this.impl.dispatchGATTOperationEvent(params.type, params.peripheral_address);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.FakeCentralClient_DispatchCharacteristicOperationEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchCharacteristicOperationEvent');
          const result = this.impl.dispatchCharacteristicOperationEvent(params.type, params.data, params.write_type, params.characteristic_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(bluetooth.mojom.FakeCentralClient_DispatchDescriptorOperationEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchDescriptorOperationEvent');
          const result = this.impl.dispatchDescriptorOperationEvent(params.type, params.data, params.descriptor_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

bluetooth.mojom.FakeCentralClientReceiver = bluetooth.mojom.FakeCentralClientReceiver;

bluetooth.mojom.FakeCentralClientPtr = bluetooth.mojom.FakeCentralClientRemote;
bluetooth.mojom.FakeCentralClientRequest = bluetooth.mojom.FakeCentralClientPendingReceiver;

