// Auto-generated MojoJS binding
 // Source: chromium_src/media/midi/midi_service.mojom
 // Module: midi.mojom

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
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.midi = mojo.internal.bindings.midi || {};
mojo.internal.bindings.midi.mojom = mojo.internal.bindings.midi.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};

mojo.internal.bindings.midi.mojom.ResultSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.midi.mojom.PortStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.midi.mojom.PortInfoSpec = { $: {} };
mojo.internal.bindings.midi.mojom.MidiSessionClient = {};
mojo.internal.bindings.midi.mojom.MidiSessionClient.$interfaceName = 'midi.mojom.MidiSessionClient';
mojo.internal.bindings.midi.mojom.MidiSessionClient_AddInputPort_ParamsSpec = { $: {} };
mojo.internal.bindings.midi.mojom.MidiSessionClient_AddOutputPort_ParamsSpec = { $: {} };
mojo.internal.bindings.midi.mojom.MidiSessionClient_SetInputPortState_ParamsSpec = { $: {} };
mojo.internal.bindings.midi.mojom.MidiSessionClient_SetOutputPortState_ParamsSpec = { $: {} };
mojo.internal.bindings.midi.mojom.MidiSessionClient_SessionStarted_ParamsSpec = { $: {} };
mojo.internal.bindings.midi.mojom.MidiSessionClient_AcknowledgeSentData_ParamsSpec = { $: {} };
mojo.internal.bindings.midi.mojom.MidiSessionClient_DataReceived_ParamsSpec = { $: {} };
mojo.internal.bindings.midi.mojom.MidiSessionProvider = {};
mojo.internal.bindings.midi.mojom.MidiSessionProvider.$interfaceName = 'midi.mojom.MidiSessionProvider';
mojo.internal.bindings.midi.mojom.MidiSessionProvider_StartSession_ParamsSpec = { $: {} };
mojo.internal.bindings.midi.mojom.MidiSession = {};
mojo.internal.bindings.midi.mojom.MidiSession.$interfaceName = 'midi.mojom.MidiSession';
mojo.internal.bindings.midi.mojom.MidiSession_SendData_ParamsSpec = { $: {} };

// Enum: Result
mojo.internal.bindings.midi.mojom.Result = {
  NOT_INITIALIZED: 0,
  OK: 1,
  NOT_SUPPORTED: 2,
  INITIALIZATION_ERROR: 3,
};

// Enum: PortState
mojo.internal.bindings.midi.mojom.PortState = {
  DISCONNECTED: 0,
  CONNECTED: 1,
  OPENED: 2,
};

// Struct: PortInfo
mojo.internal.Struct(
    mojo.internal.bindings.midi.mojom.PortInfoSpec, 'midi.mojom.PortInfo', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_manufacturer', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_version', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_state', 32, 0, mojo.internal.bindings.mojo.internal.bindings.midi.mojom.PortStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: MidiSessionClient
mojo.internal.Struct(
    mojo.internal.bindings.midi.mojom.MidiSessionClient_AddInputPort_ParamsSpec, 'midi.mojom.MidiSessionClient_AddInputPort_Params', [
      mojo.internal.StructField('arg_info', 0, 0, mojo.internal.bindings.mojo.internal.bindings.midi.mojom.PortInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.midi.mojom.MidiSessionClient_AddOutputPort_ParamsSpec, 'midi.mojom.MidiSessionClient_AddOutputPort_Params', [
      mojo.internal.StructField('arg_info', 0, 0, mojo.internal.bindings.mojo.internal.bindings.midi.mojom.PortInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.midi.mojom.MidiSessionClient_SetInputPortState_ParamsSpec, 'midi.mojom.MidiSessionClient_SetInputPortState_Params', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.mojo.internal.bindings.midi.mojom.PortStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_port', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.midi.mojom.MidiSessionClient_SetOutputPortState_ParamsSpec, 'midi.mojom.MidiSessionClient_SetOutputPortState_Params', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.mojo.internal.bindings.midi.mojom.PortStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_port', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.midi.mojom.MidiSessionClient_SessionStarted_ParamsSpec, 'midi.mojom.MidiSessionClient_SessionStarted_Params', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.midi.mojom.ResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.midi.mojom.MidiSessionClient_AcknowledgeSentData_ParamsSpec, 'midi.mojom.MidiSessionClient_AcknowledgeSentData_Params', [
      mojo.internal.StructField('arg_bytes', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.midi.mojom.MidiSessionClient_DataReceived_ParamsSpec, 'midi.mojom.MidiSessionClient_DataReceived_Params', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_timestamp', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_port', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.bindings.midi.mojom.MidiSessionClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.midi.mojom.MidiSessionClientRemote = class {
  static get $interfaceName() {
    return 'midi.mojom.MidiSessionClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.midi.mojom.MidiSessionClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.midi.mojom.MidiSessionClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addInputPort(arg_info) {
    return this.$.addInputPort(arg_info);
  }
  addOutputPort(arg_info) {
    return this.$.addOutputPort(arg_info);
  }
  setInputPortState(arg_port, arg_state) {
    return this.$.setInputPortState(arg_port, arg_state);
  }
  setOutputPortState(arg_port, arg_state) {
    return this.$.setOutputPortState(arg_port, arg_state);
  }
  sessionStarted(arg_result) {
    return this.$.sessionStarted(arg_result);
  }
  acknowledgeSentData(arg_bytes) {
    return this.$.acknowledgeSentData(arg_bytes);
  }
  dataReceived(arg_port, arg_data, arg_timestamp) {
    return this.$.dataReceived(arg_port, arg_data, arg_timestamp);
  }
};

mojo.internal.bindings.midi.mojom.MidiSessionClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MidiSessionClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  addInputPort(arg_info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.midi.mojom.MidiSessionClient_AddInputPort_ParamsSpec,
      null,
      [arg_info],
      false);
  }

  addOutputPort(arg_info) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.midi.mojom.MidiSessionClient_AddOutputPort_ParamsSpec,
      null,
      [arg_info],
      false);
  }

  setInputPortState(arg_port, arg_state) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.midi.mojom.MidiSessionClient_SetInputPortState_ParamsSpec,
      null,
      [arg_port, arg_state],
      false);
  }

  setOutputPortState(arg_port, arg_state) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.midi.mojom.MidiSessionClient_SetOutputPortState_ParamsSpec,
      null,
      [arg_port, arg_state],
      false);
  }

  sessionStarted(arg_result) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.midi.mojom.MidiSessionClient_SessionStarted_ParamsSpec,
      null,
      [arg_result],
      false);
  }

  acknowledgeSentData(arg_bytes) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.midi.mojom.MidiSessionClient_AcknowledgeSentData_ParamsSpec,
      null,
      [arg_bytes],
      false);
  }

  dataReceived(arg_port, arg_data, arg_timestamp) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.midi.mojom.MidiSessionClient_DataReceived_ParamsSpec,
      null,
      [arg_port, arg_data, arg_timestamp],
      false);
  }

};

mojo.internal.bindings.midi.mojom.MidiSessionClient.getRemote = function() {
  let remote = new mojo.internal.bindings.midi.mojom.MidiSessionClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'midi.mojom.MidiSessionClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.midi.mojom.MidiSessionClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MidiSessionClient', [
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
        
        // Try Method 0: AddInputPort
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.midi.mojom.MidiSessionClient_AddInputPort_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddInputPort (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: AddOutputPort
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.midi.mojom.MidiSessionClient_AddOutputPort_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddOutputPort (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetInputPortState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.midi.mojom.MidiSessionClient_SetInputPortState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetInputPortState (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetOutputPortState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.midi.mojom.MidiSessionClient_SetOutputPortState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetOutputPortState (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SessionStarted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.midi.mojom.MidiSessionClient_SessionStarted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SessionStarted (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: AcknowledgeSentData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.midi.mojom.MidiSessionClient_AcknowledgeSentData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AcknowledgeSentData (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: DataReceived
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.midi.mojom.MidiSessionClient_DataReceived_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DataReceived (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.midi.mojom.MidiSessionClient_AddInputPort_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addInputPort');
          const result = this.impl.addInputPort(params.arg_info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.midi.mojom.MidiSessionClient_AddOutputPort_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addOutputPort');
          const result = this.impl.addOutputPort(params.arg_info);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.midi.mojom.MidiSessionClient_SetInputPortState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setInputPortState');
          const result = this.impl.setInputPortState(params.arg_port, params.arg_state);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.midi.mojom.MidiSessionClient_SetOutputPortState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setOutputPortState');
          const result = this.impl.setOutputPortState(params.arg_port, params.arg_state);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.midi.mojom.MidiSessionClient_SessionStarted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sessionStarted');
          const result = this.impl.sessionStarted(params.arg_result);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.midi.mojom.MidiSessionClient_AcknowledgeSentData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.acknowledgeSentData');
          const result = this.impl.acknowledgeSentData(params.arg_bytes);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.midi.mojom.MidiSessionClient_DataReceived_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dataReceived');
          const result = this.impl.dataReceived(params.arg_port, params.arg_data, params.arg_timestamp);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.midi.mojom.MidiSessionClientReceiver = mojo.internal.bindings.midi.mojom.MidiSessionClientReceiver;

mojo.internal.bindings.midi.mojom.MidiSessionClientPtr = mojo.internal.bindings.midi.mojom.MidiSessionClientRemote;
mojo.internal.bindings.midi.mojom.MidiSessionClientRequest = mojo.internal.bindings.midi.mojom.MidiSessionClientPendingReceiver;


// Interface: MidiSessionProvider
mojo.internal.Struct(
    mojo.internal.bindings.midi.mojom.MidiSessionProvider_StartSession_ParamsSpec, 'midi.mojom.MidiSessionProvider_StartSession_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.midi.mojom.MidiSessionSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_client', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.midi.mojom.MidiSessionClientSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.midi.mojom.MidiSessionProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.midi.mojom.MidiSessionProviderRemote = class {
  static get $interfaceName() {
    return 'midi.mojom.MidiSessionProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.midi.mojom.MidiSessionProviderPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.midi.mojom.MidiSessionProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  startSession(arg_receiver, arg_client) {
    return this.$.startSession(arg_receiver, arg_client);
  }
};

mojo.internal.bindings.midi.mojom.MidiSessionProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MidiSessionProvider', [
      { explicit: null },
    ]);
  }

  startSession(arg_receiver, arg_client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.midi.mojom.MidiSessionProvider_StartSession_ParamsSpec,
      null,
      [arg_receiver, arg_client],
      false);
  }

};

mojo.internal.bindings.midi.mojom.MidiSessionProvider.getRemote = function() {
  let remote = new mojo.internal.bindings.midi.mojom.MidiSessionProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'midi.mojom.MidiSessionProvider',
    'context');
  return remote.$;
};

mojo.internal.bindings.midi.mojom.MidiSessionProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MidiSessionProvider', [
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
        
        // Try Method 0: StartSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.midi.mojom.MidiSessionProvider_StartSession_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartSession (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.midi.mojom.MidiSessionProvider_StartSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startSession');
          const result = this.impl.startSession(params.arg_receiver, params.arg_client);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.midi.mojom.MidiSessionProviderReceiver = mojo.internal.bindings.midi.mojom.MidiSessionProviderReceiver;

mojo.internal.bindings.midi.mojom.MidiSessionProviderPtr = mojo.internal.bindings.midi.mojom.MidiSessionProviderRemote;
mojo.internal.bindings.midi.mojom.MidiSessionProviderRequest = mojo.internal.bindings.midi.mojom.MidiSessionProviderPendingReceiver;


// Interface: MidiSession
mojo.internal.Struct(
    mojo.internal.bindings.midi.mojom.MidiSession_SendData_ParamsSpec, 'midi.mojom.MidiSession_SendData_Params', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_timestamp', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_port', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.bindings.midi.mojom.MidiSessionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.midi.mojom.MidiSessionRemote = class {
  static get $interfaceName() {
    return 'midi.mojom.MidiSession';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.midi.mojom.MidiSessionPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.midi.mojom.MidiSessionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  sendData(arg_port, arg_data, arg_timestamp) {
    return this.$.sendData(arg_port, arg_data, arg_timestamp);
  }
};

mojo.internal.bindings.midi.mojom.MidiSessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MidiSession', [
      { explicit: null },
    ]);
  }

  sendData(arg_port, arg_data, arg_timestamp) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.midi.mojom.MidiSession_SendData_ParamsSpec,
      null,
      [arg_port, arg_data, arg_timestamp],
      false);
  }

};

mojo.internal.bindings.midi.mojom.MidiSession.getRemote = function() {
  let remote = new mojo.internal.bindings.midi.mojom.MidiSessionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'midi.mojom.MidiSession',
    'context');
  return remote.$;
};

mojo.internal.bindings.midi.mojom.MidiSessionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MidiSession', [
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
        
        // Try Method 0: SendData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.midi.mojom.MidiSession_SendData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendData (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.midi.mojom.MidiSession_SendData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendData');
          const result = this.impl.sendData(params.arg_port, params.arg_data, params.arg_timestamp);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.midi.mojom.MidiSessionReceiver = mojo.internal.bindings.midi.mojom.MidiSessionReceiver;

mojo.internal.bindings.midi.mojom.MidiSessionPtr = mojo.internal.bindings.midi.mojom.MidiSessionRemote;
mojo.internal.bindings.midi.mojom.MidiSessionRequest = mojo.internal.bindings.midi.mojom.MidiSessionPendingReceiver;

