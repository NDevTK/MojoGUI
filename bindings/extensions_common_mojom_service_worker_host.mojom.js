// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/service_worker_host.mojom
// Module: extensions.mojom

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
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};
var mojo_base = mojo_base || {};
var blink = blink || {};
var url = url || {};

extensions.mojom.ServiceWorkerHost = {};
extensions.mojom.ServiceWorkerHost.$interfaceName = 'extensions.mojom.ServiceWorkerHost';
extensions.mojom.ServiceWorkerHost_DidInitializeServiceWorkerContext_ParamsSpec = { $: {} };
extensions.mojom.ServiceWorkerHost_DidStartServiceWorkerContext_ParamsSpec = { $: {} };
extensions.mojom.ServiceWorkerHost_DidStopServiceWorkerContext_ParamsSpec = { $: {} };
extensions.mojom.ServiceWorkerHost_RequestWorker_ParamsSpec = { $: {} };
extensions.mojom.ServiceWorkerHost_RequestWorker_ResponseParamsSpec = { $: {} };
extensions.mojom.ServiceWorkerHost_WorkerResponseAck_ParamsSpec = { $: {} };
extensions.mojom.ServiceWorkerHost_OpenChannelToExtension_ParamsSpec = { $: {} };
extensions.mojom.ServiceWorkerHost_OpenChannelToNativeApp_ParamsSpec = { $: {} };
extensions.mojom.ServiceWorkerHost_OpenChannelToTab_ParamsSpec = { $: {} };

// Interface: ServiceWorkerHost
mojo.internal.Struct(
    extensions.mojom.ServiceWorkerHost_DidInitializeServiceWorkerContext_ParamsSpec, 'extensions.mojom.ServiceWorkerHost_DidInitializeServiceWorkerContext_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('service_worker_version_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('service_worker_token', 16, 0, blink.mojom.ServiceWorkerTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('event_dispatcher', 24, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('worker_thread_id', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    extensions.mojom.ServiceWorkerHost_DidStartServiceWorkerContext_ParamsSpec, 'extensions.mojom.ServiceWorkerHost_DidStartServiceWorkerContext_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('activation_token', 8, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('service_worker_scope', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('service_worker_version_id', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('worker_thread_id', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    extensions.mojom.ServiceWorkerHost_DidStopServiceWorkerContext_ParamsSpec, 'extensions.mojom.ServiceWorkerHost_DidStopServiceWorkerContext_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('activation_token', 8, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('service_worker_scope', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('service_worker_version_id', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('worker_thread_id', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    extensions.mojom.ServiceWorkerHost_RequestWorker_ParamsSpec, 'extensions.mojom.ServiceWorkerHost_RequestWorker_Params', [
      mojo.internal.StructField('params', 0, 0, extensions.mojom.RequestParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.ServiceWorkerHost_RequestWorker_ResponseParamsSpec, 'extensions.mojom.ServiceWorkerHost_RequestWorker_ResponseParams', [
      mojo.internal.StructField('response_wrapper', 0, 0, mojo_base.mojom.ListValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('extra_data', 16, 0, extensions.mojom.ExtraResponseDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('success', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    extensions.mojom.ServiceWorkerHost_WorkerResponseAck_ParamsSpec, 'extensions.mojom.ServiceWorkerHost_WorkerResponseAck_Params', [
      mojo.internal.StructField('request_uuid', 0, 0, mojo_base.mojom.UuidSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.ServiceWorkerHost_OpenChannelToExtension_ParamsSpec, 'extensions.mojom.ServiceWorkerHost_OpenChannelToExtension_Params', [
      mojo.internal.StructField('info', 0, 0, extensions.mojom.ExternalConnectionInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('channel_type', 8, 0, extensions.mojom.ChannelTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('channel_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('port_id', 24, 0, extensions.mojom.PortIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('port', 32, 0, pending_associated_remote<extensions.mojom.MessagePort>Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('port_host', 40, 0, pending_associated_receiver<extensions.mojom.MessagePortHost>Spec.$, null, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    extensions.mojom.ServiceWorkerHost_OpenChannelToNativeApp_ParamsSpec, 'extensions.mojom.ServiceWorkerHost_OpenChannelToNativeApp_Params', [
      mojo.internal.StructField('native_app_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('port_id', 8, 0, extensions.mojom.PortIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('port', 16, 0, pending_associated_remote<extensions.mojom.MessagePort>Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('port_host', 24, 0, pending_associated_receiver<extensions.mojom.MessagePortHost>Spec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    extensions.mojom.ServiceWorkerHost_OpenChannelToTab_ParamsSpec, 'extensions.mojom.ServiceWorkerHost_OpenChannelToTab_Params', [
      mojo.internal.StructField('document_id', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('channel_type', 8, 0, extensions.mojom.ChannelTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('channel_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('port_id', 24, 0, extensions.mojom.PortIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('port', 32, 0, pending_associated_remote<extensions.mojom.MessagePort>Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('port_host', 40, 0, pending_associated_receiver<extensions.mojom.MessagePortHost>Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('tab_id', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('frame_id', 52, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 64]]);

extensions.mojom.ServiceWorkerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

extensions.mojom.ServiceWorkerHostRemote = class {
  static get $interfaceName() {
    return 'extensions.mojom.ServiceWorkerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      extensions.mojom.ServiceWorkerHostPendingReceiver,
      handle);
    this.$ = new extensions.mojom.ServiceWorkerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  didInitializeServiceWorkerContext(extension_id, service_worker_version_id, worker_thread_id, service_worker_token, event_dispatcher) {
    return this.$.didInitializeServiceWorkerContext(extension_id, service_worker_version_id, worker_thread_id, service_worker_token, event_dispatcher);
  }
  didStartServiceWorkerContext(extension_id, activation_token, service_worker_scope, service_worker_version_id, worker_thread_id) {
    return this.$.didStartServiceWorkerContext(extension_id, activation_token, service_worker_scope, service_worker_version_id, worker_thread_id);
  }
  didStopServiceWorkerContext(extension_id, activation_token, service_worker_scope, service_worker_version_id, worker_thread_id) {
    return this.$.didStopServiceWorkerContext(extension_id, activation_token, service_worker_scope, service_worker_version_id, worker_thread_id);
  }
  requestWorker(params) {
    return this.$.requestWorker(params);
  }
  workerResponseAck(request_uuid) {
    return this.$.workerResponseAck(request_uuid);
  }
  openChannelToExtension(info, channel_type, channel_name, port_id, port, port_host) {
    return this.$.openChannelToExtension(info, channel_type, channel_name, port_id, port, port_host);
  }
  openChannelToNativeApp(native_app_name, port_id, port, port_host) {
    return this.$.openChannelToNativeApp(native_app_name, port_id, port, port_host);
  }
  openChannelToTab(tab_id, frame_id, document_id, channel_type, channel_name, port_id, port, port_host) {
    return this.$.openChannelToTab(tab_id, frame_id, document_id, channel_type, channel_name, port_id, port, port_host);
  }
};

extensions.mojom.ServiceWorkerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ServiceWorkerHost', [
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

  didInitializeServiceWorkerContext(extension_id, service_worker_version_id, worker_thread_id, service_worker_token, event_dispatcher) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      extensions.mojom.ServiceWorkerHost_DidInitializeServiceWorkerContext_ParamsSpec,
      null,
      [extension_id, service_worker_version_id, worker_thread_id, service_worker_token, event_dispatcher],
      false);
  }

  didStartServiceWorkerContext(extension_id, activation_token, service_worker_scope, service_worker_version_id, worker_thread_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      extensions.mojom.ServiceWorkerHost_DidStartServiceWorkerContext_ParamsSpec,
      null,
      [extension_id, activation_token, service_worker_scope, service_worker_version_id, worker_thread_id],
      false);
  }

  didStopServiceWorkerContext(extension_id, activation_token, service_worker_scope, service_worker_version_id, worker_thread_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      extensions.mojom.ServiceWorkerHost_DidStopServiceWorkerContext_ParamsSpec,
      null,
      [extension_id, activation_token, service_worker_scope, service_worker_version_id, worker_thread_id],
      false);
  }

  requestWorker(params) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      extensions.mojom.ServiceWorkerHost_RequestWorker_ParamsSpec,
      extensions.mojom.ServiceWorkerHost_RequestWorker_ResponseParamsSpec,
      [params],
      false);
  }

  workerResponseAck(request_uuid) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      extensions.mojom.ServiceWorkerHost_WorkerResponseAck_ParamsSpec,
      null,
      [request_uuid],
      false);
  }

  openChannelToExtension(info, channel_type, channel_name, port_id, port, port_host) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      extensions.mojom.ServiceWorkerHost_OpenChannelToExtension_ParamsSpec,
      null,
      [info, channel_type, channel_name, port_id, port, port_host],
      false);
  }

  openChannelToNativeApp(native_app_name, port_id, port, port_host) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      extensions.mojom.ServiceWorkerHost_OpenChannelToNativeApp_ParamsSpec,
      null,
      [native_app_name, port_id, port, port_host],
      false);
  }

  openChannelToTab(tab_id, frame_id, document_id, channel_type, channel_name, port_id, port, port_host) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      extensions.mojom.ServiceWorkerHost_OpenChannelToTab_ParamsSpec,
      null,
      [tab_id, frame_id, document_id, channel_type, channel_name, port_id, port, port_host],
      false);
  }

};

extensions.mojom.ServiceWorkerHost.getRemote = function() {
  let remote = new extensions.mojom.ServiceWorkerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions.mojom.ServiceWorkerHost',
    'context');
  return remote.$;
};

extensions.mojom.ServiceWorkerHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ServiceWorkerHost', [
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
        
        // Try Method 0: DidInitializeServiceWorkerContext
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.ServiceWorkerHost_DidInitializeServiceWorkerContext_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidInitializeServiceWorkerContext (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DidStartServiceWorkerContext
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.ServiceWorkerHost_DidStartServiceWorkerContext_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidStartServiceWorkerContext (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DidStopServiceWorkerContext
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.ServiceWorkerHost_DidStopServiceWorkerContext_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidStopServiceWorkerContext (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: RequestWorker
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.ServiceWorkerHost_RequestWorker_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestWorker (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: WorkerResponseAck
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.ServiceWorkerHost_WorkerResponseAck_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WorkerResponseAck (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OpenChannelToExtension
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.ServiceWorkerHost_OpenChannelToExtension_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenChannelToExtension (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OpenChannelToNativeApp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.ServiceWorkerHost_OpenChannelToNativeApp_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenChannelToNativeApp (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: OpenChannelToTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.ServiceWorkerHost_OpenChannelToTab_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenChannelToTab (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
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
          const params = decoder.decodeStructInline(extensions.mojom.ServiceWorkerHost_DidInitializeServiceWorkerContext_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didInitializeServiceWorkerContext');
          const result = this.impl.didInitializeServiceWorkerContext(params.extension_id, params.service_worker_version_id, params.worker_thread_id, params.service_worker_token, params.event_dispatcher);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.ServiceWorkerHost_DidStartServiceWorkerContext_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didStartServiceWorkerContext');
          const result = this.impl.didStartServiceWorkerContext(params.extension_id, params.activation_token, params.service_worker_scope, params.service_worker_version_id, params.worker_thread_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.ServiceWorkerHost_DidStopServiceWorkerContext_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didStopServiceWorkerContext');
          const result = this.impl.didStopServiceWorkerContext(params.extension_id, params.activation_token, params.service_worker_scope, params.service_worker_version_id, params.worker_thread_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.ServiceWorkerHost_RequestWorker_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestWorker');
          const result = this.impl.requestWorker(params.params);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, extensions.mojom.ServiceWorkerHost_RequestWorker_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.ServiceWorkerHost_WorkerResponseAck_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.workerResponseAck');
          const result = this.impl.workerResponseAck(params.request_uuid);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.ServiceWorkerHost_OpenChannelToExtension_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openChannelToExtension');
          const result = this.impl.openChannelToExtension(params.info, params.channel_type, params.channel_name, params.port_id, params.port, params.port_host);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.ServiceWorkerHost_OpenChannelToNativeApp_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openChannelToNativeApp');
          const result = this.impl.openChannelToNativeApp(params.native_app_name, params.port_id, params.port, params.port_host);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.ServiceWorkerHost_OpenChannelToTab_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openChannelToTab');
          const result = this.impl.openChannelToTab(params.tab_id, params.frame_id, params.document_id, params.channel_type, params.channel_name, params.port_id, params.port, params.port_host);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

extensions.mojom.ServiceWorkerHostReceiver = extensions.mojom.ServiceWorkerHostReceiver;

extensions.mojom.ServiceWorkerHostPtr = extensions.mojom.ServiceWorkerHostRemote;
extensions.mojom.ServiceWorkerHostRequest = extensions.mojom.ServiceWorkerHostPendingReceiver;

