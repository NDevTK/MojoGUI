// Auto-generated MojoJS binding
 // Source: chromium_src/remoting/host/mojom/remoting_host.mojom
 // Module: remoting.mojom

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

         const versionStr = window.mojoVersion || '120.0.0.0';
         const p = versionStr.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         
         const shortName = ifaceName.split('.').pop();
         while (true) {
           i++;
           const h0 = SHA256(salt + shortName + i);
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
 

 mojo.internal.bindings.remoting = mojo.internal.bindings.remoting || {};
mojo.internal.bindings.remoting.mojom = mojo.internal.bindings.remoting.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};

mojo.internal.bindings.remoting.mojom.TransportRouteTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.remoting.mojom.TransportRouteSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.RemotingHostControl = {};
mojo.internal.bindings.remoting.mojom.RemotingHostControlSpec = { $ : {} };
mojo.internal.bindings.remoting.mojom.RemotingHostControl.$interfaceName = 'remoting.mojom.RemotingHostControl';
mojo.internal.bindings.remoting.mojom.RemotingHostControl_ApplyHostConfig_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.RemotingHostControl_InitializePairingRegistry_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.RemotingHostControl_BindChromotingHostServices_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.DesktopSessionConnectionEvents = {};
mojo.internal.bindings.remoting.mojom.DesktopSessionConnectionEventsSpec = { $ : {} };
mojo.internal.bindings.remoting.mojom.DesktopSessionConnectionEvents.$interfaceName = 'remoting.mojom.DesktopSessionConnectionEvents';
mojo.internal.bindings.remoting.mojom.DesktopSessionConnectionEvents_OnTerminalDisconnected_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.DesktopSessionConnectionEvents_OnDesktopSessionAgentAttached_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.HostStatusObserver = {};
mojo.internal.bindings.remoting.mojom.HostStatusObserverSpec = { $ : {} };
mojo.internal.bindings.remoting.mojom.HostStatusObserver.$interfaceName = 'remoting.mojom.HostStatusObserver';
mojo.internal.bindings.remoting.mojom.HostStatusObserver_OnClientAccessDenied_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.HostStatusObserver_OnClientAuthenticated_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.HostStatusObserver_OnClientConnected_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.HostStatusObserver_OnClientDisconnected_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.HostStatusObserver_OnClientRouteChange_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.HostStatusObserver_OnHostStarted_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.HostStatusObserver_OnHostShutdown_ParamsSpec = { $: {} };

// Enum: TransportRouteType
mojo.internal.bindings.remoting.mojom.TransportRouteType = {
  kUndefined: 0,
  kDirect: 1,
  kStun: 2,
  kRelay: 3,
};

// Struct: TransportRoute
mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.TransportRouteSpec, 'remoting.mojom.TransportRoute', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.remoting.mojom.TransportRouteTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_remote_address', 8, 0, mojo.internal.bindings.network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_local_address', 16, 0, mojo.internal.bindings.network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: RemotingHostControl
mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.RemotingHostControl_ApplyHostConfig_ParamsSpec, 'remoting.mojom.RemotingHostControl_ApplyHostConfig_Params', [
      mojo.internal.StructField('arg_config', 0, 0, mojo.internal.bindings.mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.RemotingHostControl_InitializePairingRegistry_ParamsSpec, 'remoting.mojom.RemotingHostControl_InitializePairingRegistry_Params', [
      mojo.internal.StructField('arg_privileged_handle', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_unprivileged_handle', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.RemotingHostControl_BindChromotingHostServices_ParamsSpec, 'remoting.mojom.RemotingHostControl_BindChromotingHostServices_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.remoting.mojom.ChromotingHostServicesRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_peer_pid', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.remoting.mojom.RemotingHostControlPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.remoting.mojom.RemotingHostControlRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.RemotingHostControl';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.remoting.mojom.RemotingHostControlPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.remoting.mojom.RemotingHostControlRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  applyHostConfig(arg_config) {
    return this.$.applyHostConfig(arg_config);
  }
  initializePairingRegistry(arg_privileged_handle, arg_unprivileged_handle) {
    return this.$.initializePairingRegistry(arg_privileged_handle, arg_unprivileged_handle);
  }
  bindChromotingHostServices(arg_receiver, arg_peer_pid) {
    return this.$.bindChromotingHostServices(arg_receiver, arg_peer_pid);
  }
};

mojo.internal.bindings.remoting.mojom.RemotingHostControlRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('remoting.mojom.RemotingHostControl', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  applyHostConfig(arg_config) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.remoting.mojom.RemotingHostControl_ApplyHostConfig_ParamsSpec,
      null,
      [arg_config],
      false);
  }

  initializePairingRegistry(arg_privileged_handle, arg_unprivileged_handle) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.remoting.mojom.RemotingHostControl_InitializePairingRegistry_ParamsSpec,
      null,
      [arg_privileged_handle, arg_unprivileged_handle],
      false);
  }

  bindChromotingHostServices(arg_receiver, arg_peer_pid) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.remoting.mojom.RemotingHostControl_BindChromotingHostServices_ParamsSpec,
      null,
      [arg_receiver, arg_peer_pid],
      false);
  }

};

mojo.internal.bindings.remoting.mojom.RemotingHostControl.getRemote = function() {
  let remote = new mojo.internal.bindings.remoting.mojom.RemotingHostControlRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.RemotingHostControl',
    'context');
  return remote.$;
};

mojo.internal.bindings.remoting.mojom.RemotingHostControlReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('remoting.mojom.RemotingHostControl', [
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
        
        // Try Method 0: ApplyHostConfig
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.RemotingHostControl_ApplyHostConfig_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ApplyHostConfig (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: InitializePairingRegistry
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.RemotingHostControl_InitializePairingRegistry_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InitializePairingRegistry (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: BindChromotingHostServices
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.RemotingHostControl_BindChromotingHostServices_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindChromotingHostServices (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.RemotingHostControl_ApplyHostConfig_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.applyHostConfig');
          const result = this.impl.applyHostConfig(params.arg_config);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.RemotingHostControl_InitializePairingRegistry_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.initializePairingRegistry');
          const result = this.impl.initializePairingRegistry(params.arg_privileged_handle, params.arg_unprivileged_handle);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.RemotingHostControl_BindChromotingHostServices_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindChromotingHostServices');
          const result = this.impl.bindChromotingHostServices(params.arg_receiver, params.arg_peer_pid);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.remoting.mojom.RemotingHostControlReceiver = mojo.internal.bindings.remoting.mojom.RemotingHostControlReceiver;

mojo.internal.bindings.remoting.mojom.RemotingHostControlPtr = mojo.internal.bindings.remoting.mojom.RemotingHostControlRemote;
mojo.internal.bindings.remoting.mojom.RemotingHostControlRequest = mojo.internal.bindings.remoting.mojom.RemotingHostControlPendingReceiver;


// Interface: DesktopSessionConnectionEvents
mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.DesktopSessionConnectionEvents_OnTerminalDisconnected_ParamsSpec, 'remoting.mojom.DesktopSessionConnectionEvents_OnTerminalDisconnected_Params', [
      mojo.internal.StructField('arg_terminal_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.DesktopSessionConnectionEvents_OnDesktopSessionAgentAttached_ParamsSpec, 'remoting.mojom.DesktopSessionConnectionEvents_OnDesktopSessionAgentAttached_Params', [
      mojo.internal.StructField('arg_desktop_pipe', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_terminal_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_session_id', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.remoting.mojom.DesktopSessionConnectionEventsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.remoting.mojom.DesktopSessionConnectionEventsRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.DesktopSessionConnectionEvents';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.remoting.mojom.DesktopSessionConnectionEventsPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.remoting.mojom.DesktopSessionConnectionEventsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onTerminalDisconnected(arg_terminal_id) {
    return this.$.onTerminalDisconnected(arg_terminal_id);
  }
  onDesktopSessionAgentAttached(arg_terminal_id, arg_session_id, arg_desktop_pipe) {
    return this.$.onDesktopSessionAgentAttached(arg_terminal_id, arg_session_id, arg_desktop_pipe);
  }
};

mojo.internal.bindings.remoting.mojom.DesktopSessionConnectionEventsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('remoting.mojom.DesktopSessionConnectionEvents', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onTerminalDisconnected(arg_terminal_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.remoting.mojom.DesktopSessionConnectionEvents_OnTerminalDisconnected_ParamsSpec,
      null,
      [arg_terminal_id],
      false);
  }

  onDesktopSessionAgentAttached(arg_terminal_id, arg_session_id, arg_desktop_pipe) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.remoting.mojom.DesktopSessionConnectionEvents_OnDesktopSessionAgentAttached_ParamsSpec,
      null,
      [arg_terminal_id, arg_session_id, arg_desktop_pipe],
      false);
  }

};

mojo.internal.bindings.remoting.mojom.DesktopSessionConnectionEvents.getRemote = function() {
  let remote = new mojo.internal.bindings.remoting.mojom.DesktopSessionConnectionEventsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.DesktopSessionConnectionEvents',
    'context');
  return remote.$;
};

mojo.internal.bindings.remoting.mojom.DesktopSessionConnectionEventsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('remoting.mojom.DesktopSessionConnectionEvents', [
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
        
        // Try Method 0: OnTerminalDisconnected
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionConnectionEvents_OnTerminalDisconnected_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTerminalDisconnected (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnDesktopSessionAgentAttached
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionConnectionEvents_OnDesktopSessionAgentAttached_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDesktopSessionAgentAttached (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionConnectionEvents_OnTerminalDisconnected_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTerminalDisconnected');
          const result = this.impl.onTerminalDisconnected(params.arg_terminal_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionConnectionEvents_OnDesktopSessionAgentAttached_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDesktopSessionAgentAttached');
          const result = this.impl.onDesktopSessionAgentAttached(params.arg_terminal_id, params.arg_session_id, params.arg_desktop_pipe);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.remoting.mojom.DesktopSessionConnectionEventsReceiver = mojo.internal.bindings.remoting.mojom.DesktopSessionConnectionEventsReceiver;

mojo.internal.bindings.remoting.mojom.DesktopSessionConnectionEventsPtr = mojo.internal.bindings.remoting.mojom.DesktopSessionConnectionEventsRemote;
mojo.internal.bindings.remoting.mojom.DesktopSessionConnectionEventsRequest = mojo.internal.bindings.remoting.mojom.DesktopSessionConnectionEventsPendingReceiver;


// Interface: HostStatusObserver
mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.HostStatusObserver_OnClientAccessDenied_ParamsSpec, 'remoting.mojom.HostStatusObserver_OnClientAccessDenied_Params', [
      mojo.internal.StructField('arg_signaling_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.HostStatusObserver_OnClientAuthenticated_ParamsSpec, 'remoting.mojom.HostStatusObserver_OnClientAuthenticated_Params', [
      mojo.internal.StructField('arg_signaling_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.HostStatusObserver_OnClientConnected_ParamsSpec, 'remoting.mojom.HostStatusObserver_OnClientConnected_Params', [
      mojo.internal.StructField('arg_signaling_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.HostStatusObserver_OnClientDisconnected_ParamsSpec, 'remoting.mojom.HostStatusObserver_OnClientDisconnected_Params', [
      mojo.internal.StructField('arg_signaling_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.HostStatusObserver_OnClientRouteChange_ParamsSpec, 'remoting.mojom.HostStatusObserver_OnClientRouteChange_Params', [
      mojo.internal.StructField('arg_signaling_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_channel_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_route', 16, 0, mojo.internal.bindings.remoting.mojom.TransportRouteSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.HostStatusObserver_OnHostStarted_ParamsSpec, 'remoting.mojom.HostStatusObserver_OnHostStarted_Params', [
      mojo.internal.StructField('arg_owner_email', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.HostStatusObserver_OnHostShutdown_ParamsSpec, 'remoting.mojom.HostStatusObserver_OnHostShutdown_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.remoting.mojom.HostStatusObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.remoting.mojom.HostStatusObserverRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.HostStatusObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.remoting.mojom.HostStatusObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.remoting.mojom.HostStatusObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onClientAccessDenied(arg_signaling_id) {
    return this.$.onClientAccessDenied(arg_signaling_id);
  }
  onClientAuthenticated(arg_signaling_id) {
    return this.$.onClientAuthenticated(arg_signaling_id);
  }
  onClientConnected(arg_signaling_id) {
    return this.$.onClientConnected(arg_signaling_id);
  }
  onClientDisconnected(arg_signaling_id) {
    return this.$.onClientDisconnected(arg_signaling_id);
  }
  onClientRouteChange(arg_signaling_id, arg_channel_name, arg_route) {
    return this.$.onClientRouteChange(arg_signaling_id, arg_channel_name, arg_route);
  }
  onHostStarted(arg_owner_email) {
    return this.$.onHostStarted(arg_owner_email);
  }
  onHostShutdown() {
    return this.$.onHostShutdown();
  }
};

mojo.internal.bindings.remoting.mojom.HostStatusObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('remoting.mojom.HostStatusObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onClientAccessDenied(arg_signaling_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.remoting.mojom.HostStatusObserver_OnClientAccessDenied_ParamsSpec,
      null,
      [arg_signaling_id],
      false);
  }

  onClientAuthenticated(arg_signaling_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.remoting.mojom.HostStatusObserver_OnClientAuthenticated_ParamsSpec,
      null,
      [arg_signaling_id],
      false);
  }

  onClientConnected(arg_signaling_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.remoting.mojom.HostStatusObserver_OnClientConnected_ParamsSpec,
      null,
      [arg_signaling_id],
      false);
  }

  onClientDisconnected(arg_signaling_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.remoting.mojom.HostStatusObserver_OnClientDisconnected_ParamsSpec,
      null,
      [arg_signaling_id],
      false);
  }

  onClientRouteChange(arg_signaling_id, arg_channel_name, arg_route) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.remoting.mojom.HostStatusObserver_OnClientRouteChange_ParamsSpec,
      null,
      [arg_signaling_id, arg_channel_name, arg_route],
      false);
  }

  onHostStarted(arg_owner_email) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.remoting.mojom.HostStatusObserver_OnHostStarted_ParamsSpec,
      null,
      [arg_owner_email],
      false);
  }

  onHostShutdown() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.remoting.mojom.HostStatusObserver_OnHostShutdown_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.remoting.mojom.HostStatusObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.remoting.mojom.HostStatusObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.HostStatusObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.remoting.mojom.HostStatusObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('remoting.mojom.HostStatusObserver', [
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
        
        // Try Method 0: OnClientAccessDenied
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.HostStatusObserver_OnClientAccessDenied_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnClientAccessDenied (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnClientAuthenticated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.HostStatusObserver_OnClientAuthenticated_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnClientAuthenticated (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnClientConnected
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.HostStatusObserver_OnClientConnected_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnClientConnected (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnClientDisconnected
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.HostStatusObserver_OnClientDisconnected_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnClientDisconnected (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnClientRouteChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.HostStatusObserver_OnClientRouteChange_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnClientRouteChange (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnHostStarted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.HostStatusObserver_OnHostStarted_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnHostStarted (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnHostShutdown
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.HostStatusObserver_OnHostShutdown_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnHostShutdown (6)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.HostStatusObserver_OnClientAccessDenied_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onClientAccessDenied');
          const result = this.impl.onClientAccessDenied(params.arg_signaling_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.HostStatusObserver_OnClientAuthenticated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onClientAuthenticated');
          const result = this.impl.onClientAuthenticated(params.arg_signaling_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.HostStatusObserver_OnClientConnected_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onClientConnected');
          const result = this.impl.onClientConnected(params.arg_signaling_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.HostStatusObserver_OnClientDisconnected_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onClientDisconnected');
          const result = this.impl.onClientDisconnected(params.arg_signaling_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.HostStatusObserver_OnClientRouteChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onClientRouteChange');
          const result = this.impl.onClientRouteChange(params.arg_signaling_id, params.arg_channel_name, params.arg_route);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.HostStatusObserver_OnHostStarted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onHostStarted');
          const result = this.impl.onHostStarted(params.arg_owner_email);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.HostStatusObserver_OnHostShutdown_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onHostShutdown');
          const result = this.impl.onHostShutdown();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.remoting.mojom.HostStatusObserverReceiver = mojo.internal.bindings.remoting.mojom.HostStatusObserverReceiver;

mojo.internal.bindings.remoting.mojom.HostStatusObserverPtr = mojo.internal.bindings.remoting.mojom.HostStatusObserverRemote;
mojo.internal.bindings.remoting.mojom.HostStatusObserverRequest = mojo.internal.bindings.remoting.mojom.HostStatusObserverPendingReceiver;

