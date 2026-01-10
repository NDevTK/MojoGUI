// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/event_router.mojom
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
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

extensions.mojom.EventListenerOwnerSpec = { $: {} };
extensions.mojom.ServiceWorkerContextSpec = { $: {} };
extensions.mojom.EventListenerSpec = { $: {} };
extensions.mojom.EventRouter = {};
extensions.mojom.EventRouter.$interfaceName = 'extensions.mojom.EventRouter';
extensions.mojom.EventRouter_AddListenerForMainThread_ParamsSpec = { $: {} };
extensions.mojom.EventRouter_AddListenerForServiceWorker_ParamsSpec = { $: {} };
extensions.mojom.EventRouter_AddLazyListenerForMainThread_ParamsSpec = { $: {} };
extensions.mojom.EventRouter_AddLazyListenerForServiceWorker_ParamsSpec = { $: {} };
extensions.mojom.EventRouter_AddFilteredListenerForMainThread_ParamsSpec = { $: {} };
extensions.mojom.EventRouter_AddFilteredListenerForServiceWorker_ParamsSpec = { $: {} };
extensions.mojom.EventRouter_RemoveListenerForMainThread_ParamsSpec = { $: {} };
extensions.mojom.EventRouter_RemoveListenerForServiceWorker_ParamsSpec = { $: {} };
extensions.mojom.EventRouter_RemoveLazyListenerForMainThread_ParamsSpec = { $: {} };
extensions.mojom.EventRouter_RemoveLazyListenerForServiceWorker_ParamsSpec = { $: {} };
extensions.mojom.EventRouter_RemoveFilteredListenerForMainThread_ParamsSpec = { $: {} };
extensions.mojom.EventRouter_RemoveFilteredListenerForServiceWorker_ParamsSpec = { $: {} };

// Union: EventListenerOwner
mojo.internal.Union(
    extensions.mojom.EventListenerOwnerSpec, 'extensions.mojom.EventListenerOwner', {
      'extension_id': {
        'ordinal': 0,
        'type': extensions.mojom.ExtensionIdSpec.$,
        'nullable': false,
      },
      'listener_url': {
        'ordinal': 1,
        'type': url.mojom.UrlSpec.$,
        'nullable': false,
      },
    });

// Struct: ServiceWorkerContext
mojo.internal.Struct(
    extensions.mojom.ServiceWorkerContextSpec, 'extensions.mojom.ServiceWorkerContext', [
      mojo.internal.StructField('scope_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('version_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('thread_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: EventListener
mojo.internal.Struct(
    extensions.mojom.EventListenerSpec, 'extensions.mojom.EventListener', [
      mojo.internal.StructField('listener_owner', 0, 0, extensions.mojom.EventListenerOwnerSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('event_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_worker_context', 16, 0, extensions.mojom.ServiceWorkerContextSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('filter', 24, 0, mojo_base.mojom.DictionaryValueSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Interface: EventRouter
mojo.internal.Struct(
    extensions.mojom.EventRouter_AddListenerForMainThread_ParamsSpec, 'extensions.mojom.EventRouter_AddListenerForMainThread_Params', [
      mojo.internal.StructField('event_listener', 0, 0, extensions.mojom.EventListenerSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.EventRouter_AddListenerForServiceWorker_ParamsSpec, 'extensions.mojom.EventRouter_AddListenerForServiceWorker_Params', [
      mojo.internal.StructField('event_listener', 0, 0, extensions.mojom.EventListenerSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.EventRouter_AddLazyListenerForMainThread_ParamsSpec, 'extensions.mojom.EventRouter_AddLazyListenerForMainThread_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('event_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    extensions.mojom.EventRouter_AddLazyListenerForServiceWorker_ParamsSpec, 'extensions.mojom.EventRouter_AddLazyListenerForServiceWorker_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('worker_scope_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('event_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    extensions.mojom.EventRouter_AddFilteredListenerForMainThread_ParamsSpec, 'extensions.mojom.EventRouter_AddFilteredListenerForMainThread_Params', [
      mojo.internal.StructField('listener_owner', 0, 0, extensions.mojom.EventListenerOwnerSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('event_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('filter', 16, 0, mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('add_lazy_listener', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    extensions.mojom.EventRouter_AddFilteredListenerForServiceWorker_ParamsSpec, 'extensions.mojom.EventRouter_AddFilteredListenerForServiceWorker_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('event_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_worker_context', 16, 0, extensions.mojom.ServiceWorkerContextSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('filter', 24, 0, mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('add_lazy_listener', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    extensions.mojom.EventRouter_RemoveListenerForMainThread_ParamsSpec, 'extensions.mojom.EventRouter_RemoveListenerForMainThread_Params', [
      mojo.internal.StructField('event_listener', 0, 0, extensions.mojom.EventListenerSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.EventRouter_RemoveListenerForServiceWorker_ParamsSpec, 'extensions.mojom.EventRouter_RemoveListenerForServiceWorker_Params', [
      mojo.internal.StructField('event_listener', 0, 0, extensions.mojom.EventListenerSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.EventRouter_RemoveLazyListenerForMainThread_ParamsSpec, 'extensions.mojom.EventRouter_RemoveLazyListenerForMainThread_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('event_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    extensions.mojom.EventRouter_RemoveLazyListenerForServiceWorker_ParamsSpec, 'extensions.mojom.EventRouter_RemoveLazyListenerForServiceWorker_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('worker_scope_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('event_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    extensions.mojom.EventRouter_RemoveFilteredListenerForMainThread_ParamsSpec, 'extensions.mojom.EventRouter_RemoveFilteredListenerForMainThread_Params', [
      mojo.internal.StructField('listener_owner', 0, 0, extensions.mojom.EventListenerOwnerSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('event_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('filter', 16, 0, mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('remove_lazy_listener', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    extensions.mojom.EventRouter_RemoveFilteredListenerForServiceWorker_ParamsSpec, 'extensions.mojom.EventRouter_RemoveFilteredListenerForServiceWorker_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('event_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_worker_context', 16, 0, extensions.mojom.ServiceWorkerContextSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('filter', 24, 0, mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('remove_lazy_listener', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

extensions.mojom.EventRouterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

extensions.mojom.EventRouterRemote = class {
  static get $interfaceName() {
    return 'extensions.mojom.EventRouter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      extensions.mojom.EventRouterPendingReceiver,
      handle);
    this.$ = new extensions.mojom.EventRouterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

extensions.mojom.EventRouterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('EventRouter', [
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

  addListenerForMainThread(event_listener) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      extensions.mojom.EventRouter_AddListenerForMainThread_ParamsSpec,
      null,
      [event_listener],
      false);
  }

  addListenerForServiceWorker(event_listener) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      extensions.mojom.EventRouter_AddListenerForServiceWorker_ParamsSpec,
      null,
      [event_listener],
      false);
  }

  addLazyListenerForMainThread(extension_id, event_name) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      extensions.mojom.EventRouter_AddLazyListenerForMainThread_ParamsSpec,
      null,
      [extension_id, event_name],
      false);
  }

  addLazyListenerForServiceWorker(extension_id, worker_scope_url, event_name) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      extensions.mojom.EventRouter_AddLazyListenerForServiceWorker_ParamsSpec,
      null,
      [extension_id, worker_scope_url, event_name],
      false);
  }

  addFilteredListenerForMainThread(listener_owner, event_name, filter, add_lazy_listener) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      extensions.mojom.EventRouter_AddFilteredListenerForMainThread_ParamsSpec,
      null,
      [listener_owner, event_name, filter, add_lazy_listener],
      false);
  }

  addFilteredListenerForServiceWorker(extension_id, event_name, service_worker_context, filter, add_lazy_listener) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      extensions.mojom.EventRouter_AddFilteredListenerForServiceWorker_ParamsSpec,
      null,
      [extension_id, event_name, service_worker_context, filter, add_lazy_listener],
      false);
  }

  removeListenerForMainThread(event_listener) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      extensions.mojom.EventRouter_RemoveListenerForMainThread_ParamsSpec,
      null,
      [event_listener],
      false);
  }

  removeListenerForServiceWorker(event_listener) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      extensions.mojom.EventRouter_RemoveListenerForServiceWorker_ParamsSpec,
      null,
      [event_listener],
      false);
  }

  removeLazyListenerForMainThread(extension_id, event_name) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      extensions.mojom.EventRouter_RemoveLazyListenerForMainThread_ParamsSpec,
      null,
      [extension_id, event_name],
      false);
  }

  removeLazyListenerForServiceWorker(extension_id, worker_scope_url, event_name) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      extensions.mojom.EventRouter_RemoveLazyListenerForServiceWorker_ParamsSpec,
      null,
      [extension_id, worker_scope_url, event_name],
      false);
  }

  removeFilteredListenerForMainThread(listener_owner, event_name, filter, remove_lazy_listener) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      extensions.mojom.EventRouter_RemoveFilteredListenerForMainThread_ParamsSpec,
      null,
      [listener_owner, event_name, filter, remove_lazy_listener],
      false);
  }

  removeFilteredListenerForServiceWorker(extension_id, event_name, service_worker_context, filter, remove_lazy_listener) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      extensions.mojom.EventRouter_RemoveFilteredListenerForServiceWorker_ParamsSpec,
      null,
      [extension_id, event_name, service_worker_context, filter, remove_lazy_listener],
      false);
  }

};

extensions.mojom.EventRouter.getRemote = function() {
  let remote = new extensions.mojom.EventRouterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions.mojom.EventRouter',
    'context');
  return remote.$;
};

extensions.mojom.EventRouterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('EventRouter', [
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
        
        // Try Method 0: AddListenerForMainThread
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.EventRouter_AddListenerForMainThread_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddListenerForMainThread (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: AddListenerForServiceWorker
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.EventRouter_AddListenerForServiceWorker_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddListenerForServiceWorker (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: AddLazyListenerForMainThread
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.EventRouter_AddLazyListenerForMainThread_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddLazyListenerForMainThread (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: AddLazyListenerForServiceWorker
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.EventRouter_AddLazyListenerForServiceWorker_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddLazyListenerForServiceWorker (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: AddFilteredListenerForMainThread
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.EventRouter_AddFilteredListenerForMainThread_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddFilteredListenerForMainThread (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: AddFilteredListenerForServiceWorker
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.EventRouter_AddFilteredListenerForServiceWorker_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddFilteredListenerForServiceWorker (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: RemoveListenerForMainThread
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.EventRouter_RemoveListenerForMainThread_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveListenerForMainThread (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: RemoveListenerForServiceWorker
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.EventRouter_RemoveListenerForServiceWorker_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveListenerForServiceWorker (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: RemoveLazyListenerForMainThread
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.EventRouter_RemoveLazyListenerForMainThread_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveLazyListenerForMainThread (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: RemoveLazyListenerForServiceWorker
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.EventRouter_RemoveLazyListenerForServiceWorker_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveLazyListenerForServiceWorker (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: RemoveFilteredListenerForMainThread
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.EventRouter_RemoveFilteredListenerForMainThread_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveFilteredListenerForMainThread (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: RemoveFilteredListenerForServiceWorker
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.EventRouter_RemoveFilteredListenerForServiceWorker_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveFilteredListenerForServiceWorker (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
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
          const params = decoder.decodeStructInline(extensions.mojom.EventRouter_AddListenerForMainThread_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addListenerForMainThread');
          const result = this.impl.addListenerForMainThread(params.event_listener);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.EventRouter_AddListenerForServiceWorker_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addListenerForServiceWorker');
          const result = this.impl.addListenerForServiceWorker(params.event_listener);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.EventRouter_AddLazyListenerForMainThread_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addLazyListenerForMainThread');
          const result = this.impl.addLazyListenerForMainThread(params.extension_id, params.event_name);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.EventRouter_AddLazyListenerForServiceWorker_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addLazyListenerForServiceWorker');
          const result = this.impl.addLazyListenerForServiceWorker(params.extension_id, params.worker_scope_url, params.event_name);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.EventRouter_AddFilteredListenerForMainThread_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addFilteredListenerForMainThread');
          const result = this.impl.addFilteredListenerForMainThread(params.listener_owner, params.event_name, params.filter, params.add_lazy_listener);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.EventRouter_AddFilteredListenerForServiceWorker_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addFilteredListenerForServiceWorker');
          const result = this.impl.addFilteredListenerForServiceWorker(params.extension_id, params.event_name, params.service_worker_context, params.filter, params.add_lazy_listener);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.EventRouter_RemoveListenerForMainThread_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeListenerForMainThread');
          const result = this.impl.removeListenerForMainThread(params.event_listener);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.EventRouter_RemoveListenerForServiceWorker_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeListenerForServiceWorker');
          const result = this.impl.removeListenerForServiceWorker(params.event_listener);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.EventRouter_RemoveLazyListenerForMainThread_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeLazyListenerForMainThread');
          const result = this.impl.removeLazyListenerForMainThread(params.extension_id, params.event_name);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.EventRouter_RemoveLazyListenerForServiceWorker_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeLazyListenerForServiceWorker');
          const result = this.impl.removeLazyListenerForServiceWorker(params.extension_id, params.worker_scope_url, params.event_name);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.EventRouter_RemoveFilteredListenerForMainThread_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeFilteredListenerForMainThread');
          const result = this.impl.removeFilteredListenerForMainThread(params.listener_owner, params.event_name, params.filter, params.remove_lazy_listener);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.EventRouter_RemoveFilteredListenerForServiceWorker_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeFilteredListenerForServiceWorker');
          const result = this.impl.removeFilteredListenerForServiceWorker(params.extension_id, params.event_name, params.service_worker_context, params.filter, params.remove_lazy_listener);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

extensions.mojom.EventRouterReceiver = extensions.mojom.EventRouterReceiver;

extensions.mojom.EventRouterPtr = extensions.mojom.EventRouterRemote;
extensions.mojom.EventRouterRequest = extensions.mojom.EventRouterPendingReceiver;

