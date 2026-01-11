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
var remoting = remoting || {};
remoting.mojom = remoting.mojom || {};
var mojo_base = mojo_base || {};
var network = network || {};

remoting.mojom.TransportRouteTypeSpec = { $: mojo.internal.Enum() };
remoting.mojom.TransportRouteSpec = { $: {} };
remoting.mojom.RemotingHostControl = {};
remoting.mojom.RemotingHostControl.$interfaceName = 'remoting.mojom.RemotingHostControl';
remoting.mojom.RemotingHostControl_ApplyHostConfig_ParamsSpec = { $: {} };
remoting.mojom.RemotingHostControl_InitializePairingRegistry_ParamsSpec = { $: {} };
remoting.mojom.RemotingHostControl_BindChromotingHostServices_ParamsSpec = { $: {} };
remoting.mojom.DesktopSessionConnectionEvents = {};
remoting.mojom.DesktopSessionConnectionEvents.$interfaceName = 'remoting.mojom.DesktopSessionConnectionEvents';
remoting.mojom.DesktopSessionConnectionEvents_OnTerminalDisconnected_ParamsSpec = { $: {} };
remoting.mojom.DesktopSessionConnectionEvents_OnDesktopSessionAgentAttached_ParamsSpec = { $: {} };
remoting.mojom.HostStatusObserver = {};
remoting.mojom.HostStatusObserver.$interfaceName = 'remoting.mojom.HostStatusObserver';
remoting.mojom.HostStatusObserver_OnClientAccessDenied_ParamsSpec = { $: {} };
remoting.mojom.HostStatusObserver_OnClientAuthenticated_ParamsSpec = { $: {} };
remoting.mojom.HostStatusObserver_OnClientConnected_ParamsSpec = { $: {} };
remoting.mojom.HostStatusObserver_OnClientDisconnected_ParamsSpec = { $: {} };
remoting.mojom.HostStatusObserver_OnClientRouteChange_ParamsSpec = { $: {} };
remoting.mojom.HostStatusObserver_OnHostStarted_ParamsSpec = { $: {} };
remoting.mojom.HostStatusObserver_OnHostShutdown_ParamsSpec = { $: {} };

// Enum: TransportRouteType
remoting.mojom.TransportRouteType = {
  kUndefined: 0,
  kDirect: 1,
  kStun: 2,
  kRelay: 3,
};

// Struct: TransportRoute
mojo.internal.Struct(
    remoting.mojom.TransportRouteSpec, 'remoting.mojom.TransportRoute', [
      mojo.internal.StructField('type', 0, 0, remoting.mojom.TransportRouteTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('remote_address', 8, 0, network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('local_address', 16, 0, network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: RemotingHostControl
mojo.internal.Struct(
    remoting.mojom.RemotingHostControl_ApplyHostConfig_ParamsSpec, 'remoting.mojom.RemotingHostControl_ApplyHostConfig_Params', [
      mojo.internal.StructField('config', 0, 0, mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.RemotingHostControl_InitializePairingRegistry_ParamsSpec, 'remoting.mojom.RemotingHostControl_InitializePairingRegistry_Params', [
      mojo.internal.StructField('privileged_handle', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('unprivileged_handle', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    remoting.mojom.RemotingHostControl_BindChromotingHostServices_ParamsSpec, 'remoting.mojom.RemotingHostControl_BindChromotingHostServices_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(remoting.mojom.ChromotingHostServicesRemote), null, false, 0, undefined),
      mojo.internal.StructField('peer_pid', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

remoting.mojom.RemotingHostControlPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remoting.mojom.RemotingHostControlRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.RemotingHostControl';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remoting.mojom.RemotingHostControlPendingReceiver,
      handle);
    this.$ = new remoting.mojom.RemotingHostControlRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  applyHostConfig(config) {
    return this.$.applyHostConfig(config);
  }
  initializePairingRegistry(privileged_handle, unprivileged_handle) {
    return this.$.initializePairingRegistry(privileged_handle, unprivileged_handle);
  }
  bindChromotingHostServices(receiver, peer_pid) {
    return this.$.bindChromotingHostServices(receiver, peer_pid);
  }
};

remoting.mojom.RemotingHostControlRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RemotingHostControl', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  applyHostConfig(config) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      remoting.mojom.RemotingHostControl_ApplyHostConfig_ParamsSpec,
      null,
      [config],
      false);
  }

  initializePairingRegistry(privileged_handle, unprivileged_handle) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      remoting.mojom.RemotingHostControl_InitializePairingRegistry_ParamsSpec,
      null,
      [privileged_handle, unprivileged_handle],
      false);
  }

  bindChromotingHostServices(receiver, peer_pid) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      remoting.mojom.RemotingHostControl_BindChromotingHostServices_ParamsSpec,
      null,
      [receiver, peer_pid],
      false);
  }

};

remoting.mojom.RemotingHostControl.getRemote = function() {
  let remote = new remoting.mojom.RemotingHostControlRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.RemotingHostControl',
    'context');
  return remote.$;
};

remoting.mojom.RemotingHostControlReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RemotingHostControl', [
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
             decoder.decodeStructInline(remoting.mojom.RemotingHostControl_ApplyHostConfig_ParamsSpec);
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
             decoder.decodeStructInline(remoting.mojom.RemotingHostControl_InitializePairingRegistry_ParamsSpec);
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
             decoder.decodeStructInline(remoting.mojom.RemotingHostControl_BindChromotingHostServices_ParamsSpec);
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
          const params = decoder.decodeStructInline(remoting.mojom.RemotingHostControl_ApplyHostConfig_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.applyHostConfig');
          const result = this.impl.applyHostConfig(params.config);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.RemotingHostControl_InitializePairingRegistry_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.initializePairingRegistry');
          const result = this.impl.initializePairingRegistry(params.privileged_handle, params.unprivileged_handle);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.RemotingHostControl_BindChromotingHostServices_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindChromotingHostServices');
          const result = this.impl.bindChromotingHostServices(params.receiver, params.peer_pid);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

remoting.mojom.RemotingHostControlReceiver = remoting.mojom.RemotingHostControlReceiver;

remoting.mojom.RemotingHostControlPtr = remoting.mojom.RemotingHostControlRemote;
remoting.mojom.RemotingHostControlRequest = remoting.mojom.RemotingHostControlPendingReceiver;


// Interface: DesktopSessionConnectionEvents
mojo.internal.Struct(
    remoting.mojom.DesktopSessionConnectionEvents_OnTerminalDisconnected_ParamsSpec, 'remoting.mojom.DesktopSessionConnectionEvents_OnTerminalDisconnected_Params', [
      mojo.internal.StructField('terminal_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.DesktopSessionConnectionEvents_OnDesktopSessionAgentAttached_ParamsSpec, 'remoting.mojom.DesktopSessionConnectionEvents_OnDesktopSessionAgentAttached_Params', [
      mojo.internal.StructField('desktop_pipe', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('terminal_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('session_id', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

remoting.mojom.DesktopSessionConnectionEventsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remoting.mojom.DesktopSessionConnectionEventsRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.DesktopSessionConnectionEvents';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remoting.mojom.DesktopSessionConnectionEventsPendingReceiver,
      handle);
    this.$ = new remoting.mojom.DesktopSessionConnectionEventsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onTerminalDisconnected(terminal_id) {
    return this.$.onTerminalDisconnected(terminal_id);
  }
  onDesktopSessionAgentAttached(terminal_id, session_id, desktop_pipe) {
    return this.$.onDesktopSessionAgentAttached(terminal_id, session_id, desktop_pipe);
  }
};

remoting.mojom.DesktopSessionConnectionEventsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DesktopSessionConnectionEvents', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onTerminalDisconnected(terminal_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      remoting.mojom.DesktopSessionConnectionEvents_OnTerminalDisconnected_ParamsSpec,
      null,
      [terminal_id],
      false);
  }

  onDesktopSessionAgentAttached(terminal_id, session_id, desktop_pipe) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      remoting.mojom.DesktopSessionConnectionEvents_OnDesktopSessionAgentAttached_ParamsSpec,
      null,
      [terminal_id, session_id, desktop_pipe],
      false);
  }

};

remoting.mojom.DesktopSessionConnectionEvents.getRemote = function() {
  let remote = new remoting.mojom.DesktopSessionConnectionEventsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.DesktopSessionConnectionEvents',
    'context');
  return remote.$;
};

remoting.mojom.DesktopSessionConnectionEventsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DesktopSessionConnectionEvents', [
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
             decoder.decodeStructInline(remoting.mojom.DesktopSessionConnectionEvents_OnTerminalDisconnected_ParamsSpec);
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
             decoder.decodeStructInline(remoting.mojom.DesktopSessionConnectionEvents_OnDesktopSessionAgentAttached_ParamsSpec);
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
          const params = decoder.decodeStructInline(remoting.mojom.DesktopSessionConnectionEvents_OnTerminalDisconnected_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTerminalDisconnected');
          const result = this.impl.onTerminalDisconnected(params.terminal_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.DesktopSessionConnectionEvents_OnDesktopSessionAgentAttached_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDesktopSessionAgentAttached');
          const result = this.impl.onDesktopSessionAgentAttached(params.terminal_id, params.session_id, params.desktop_pipe);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

remoting.mojom.DesktopSessionConnectionEventsReceiver = remoting.mojom.DesktopSessionConnectionEventsReceiver;

remoting.mojom.DesktopSessionConnectionEventsPtr = remoting.mojom.DesktopSessionConnectionEventsRemote;
remoting.mojom.DesktopSessionConnectionEventsRequest = remoting.mojom.DesktopSessionConnectionEventsPendingReceiver;


// Interface: HostStatusObserver
mojo.internal.Struct(
    remoting.mojom.HostStatusObserver_OnClientAccessDenied_ParamsSpec, 'remoting.mojom.HostStatusObserver_OnClientAccessDenied_Params', [
      mojo.internal.StructField('signaling_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.HostStatusObserver_OnClientAuthenticated_ParamsSpec, 'remoting.mojom.HostStatusObserver_OnClientAuthenticated_Params', [
      mojo.internal.StructField('signaling_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.HostStatusObserver_OnClientConnected_ParamsSpec, 'remoting.mojom.HostStatusObserver_OnClientConnected_Params', [
      mojo.internal.StructField('signaling_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.HostStatusObserver_OnClientDisconnected_ParamsSpec, 'remoting.mojom.HostStatusObserver_OnClientDisconnected_Params', [
      mojo.internal.StructField('signaling_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.HostStatusObserver_OnClientRouteChange_ParamsSpec, 'remoting.mojom.HostStatusObserver_OnClientRouteChange_Params', [
      mojo.internal.StructField('signaling_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('channel_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('route', 16, 0, remoting.mojom.TransportRouteSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    remoting.mojom.HostStatusObserver_OnHostStarted_ParamsSpec, 'remoting.mojom.HostStatusObserver_OnHostStarted_Params', [
      mojo.internal.StructField('owner_email', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.HostStatusObserver_OnHostShutdown_ParamsSpec, 'remoting.mojom.HostStatusObserver_OnHostShutdown_Params', [
    ],
    [[0, 8]]);

remoting.mojom.HostStatusObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remoting.mojom.HostStatusObserverRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.HostStatusObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remoting.mojom.HostStatusObserverPendingReceiver,
      handle);
    this.$ = new remoting.mojom.HostStatusObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onClientAccessDenied(signaling_id) {
    return this.$.onClientAccessDenied(signaling_id);
  }
  onClientAuthenticated(signaling_id) {
    return this.$.onClientAuthenticated(signaling_id);
  }
  onClientConnected(signaling_id) {
    return this.$.onClientConnected(signaling_id);
  }
  onClientDisconnected(signaling_id) {
    return this.$.onClientDisconnected(signaling_id);
  }
  onClientRouteChange(signaling_id, channel_name, route) {
    return this.$.onClientRouteChange(signaling_id, channel_name, route);
  }
  onHostStarted(owner_email) {
    return this.$.onHostStarted(owner_email);
  }
  onHostShutdown() {
    return this.$.onHostShutdown();
  }
};

remoting.mojom.HostStatusObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('HostStatusObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onClientAccessDenied(signaling_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      remoting.mojom.HostStatusObserver_OnClientAccessDenied_ParamsSpec,
      null,
      [signaling_id],
      false);
  }

  onClientAuthenticated(signaling_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      remoting.mojom.HostStatusObserver_OnClientAuthenticated_ParamsSpec,
      null,
      [signaling_id],
      false);
  }

  onClientConnected(signaling_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      remoting.mojom.HostStatusObserver_OnClientConnected_ParamsSpec,
      null,
      [signaling_id],
      false);
  }

  onClientDisconnected(signaling_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      remoting.mojom.HostStatusObserver_OnClientDisconnected_ParamsSpec,
      null,
      [signaling_id],
      false);
  }

  onClientRouteChange(signaling_id, channel_name, route) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      remoting.mojom.HostStatusObserver_OnClientRouteChange_ParamsSpec,
      null,
      [signaling_id, channel_name, route],
      false);
  }

  onHostStarted(owner_email) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      remoting.mojom.HostStatusObserver_OnHostStarted_ParamsSpec,
      null,
      [owner_email],
      false);
  }

  onHostShutdown() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      remoting.mojom.HostStatusObserver_OnHostShutdown_ParamsSpec,
      null,
      [],
      false);
  }

};

remoting.mojom.HostStatusObserver.getRemote = function() {
  let remote = new remoting.mojom.HostStatusObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.HostStatusObserver',
    'context');
  return remote.$;
};

remoting.mojom.HostStatusObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('HostStatusObserver', [
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
             decoder.decodeStructInline(remoting.mojom.HostStatusObserver_OnClientAccessDenied_ParamsSpec);
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
             decoder.decodeStructInline(remoting.mojom.HostStatusObserver_OnClientAuthenticated_ParamsSpec);
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
             decoder.decodeStructInline(remoting.mojom.HostStatusObserver_OnClientConnected_ParamsSpec);
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
             decoder.decodeStructInline(remoting.mojom.HostStatusObserver_OnClientDisconnected_ParamsSpec);
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
             decoder.decodeStructInline(remoting.mojom.HostStatusObserver_OnClientRouteChange_ParamsSpec);
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
             decoder.decodeStructInline(remoting.mojom.HostStatusObserver_OnHostStarted_ParamsSpec);
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
             decoder.decodeStructInline(remoting.mojom.HostStatusObserver_OnHostShutdown_ParamsSpec);
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
          const params = decoder.decodeStructInline(remoting.mojom.HostStatusObserver_OnClientAccessDenied_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onClientAccessDenied');
          const result = this.impl.onClientAccessDenied(params.signaling_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.HostStatusObserver_OnClientAuthenticated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onClientAuthenticated');
          const result = this.impl.onClientAuthenticated(params.signaling_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.HostStatusObserver_OnClientConnected_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onClientConnected');
          const result = this.impl.onClientConnected(params.signaling_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.HostStatusObserver_OnClientDisconnected_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onClientDisconnected');
          const result = this.impl.onClientDisconnected(params.signaling_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.HostStatusObserver_OnClientRouteChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onClientRouteChange');
          const result = this.impl.onClientRouteChange(params.signaling_id, params.channel_name, params.route);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.HostStatusObserver_OnHostStarted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onHostStarted');
          const result = this.impl.onHostStarted(params.owner_email);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.HostStatusObserver_OnHostShutdown_ParamsSpec.$.structSpec);
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

remoting.mojom.HostStatusObserverReceiver = remoting.mojom.HostStatusObserverReceiver;

remoting.mojom.HostStatusObserverPtr = remoting.mojom.HostStatusObserverRemote;
remoting.mojom.HostStatusObserverRequest = remoting.mojom.HostStatusObserverPendingReceiver;

