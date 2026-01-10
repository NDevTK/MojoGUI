// Auto-generated MojoJS binding
// Source: chromium_src/components/js_injection/common/interfaces.mojom
// Module: js_injection.mojom

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

        const ua = navigator.userAgent;
        const m = ua.match(/Chrome\/([\d.]+)/);
        const v = m ? m[1] : "145.0.7625.0";
        const p = v.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        
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
var js_injection = js_injection || {};
js_injection.mojom = js_injection.mojom || {};
var origin_matcher = origin_matcher || {};
var mojo_base = mojo_base || {};
var blink = blink || {};

js_injection.mojom.JsWebMessageSpec = { $: {} };
js_injection.mojom.JsObjectSpec = { $: {} };
js_injection.mojom.JavaScriptExecutableSpec = { $: {} };
js_injection.mojom.JsWebMessageArrayBufferValueSpec = { $: {} };
js_injection.mojom.JsToBrowserMessaging = {};
js_injection.mojom.JsToBrowserMessaging.$interfaceName = 'js_injection.mojom.JsToBrowserMessaging';
js_injection.mojom.JsToBrowserMessaging_PostMessage_ParamsSpec = { $: {} };
js_injection.mojom.JsToBrowserMessaging_SetBrowserToJsMessaging_ParamsSpec = { $: {} };
js_injection.mojom.JsObjectsClient = {};
js_injection.mojom.JsObjectsClient.$interfaceName = 'js_injection.mojom.JsObjectsClient';
js_injection.mojom.JsObjectsClient_OnWindowObjectCleared_ParamsSpec = { $: {} };
js_injection.mojom.BrowserToJsMessagingFactory = {};
js_injection.mojom.BrowserToJsMessagingFactory.$interfaceName = 'js_injection.mojom.BrowserToJsMessagingFactory';
js_injection.mojom.BrowserToJsMessagingFactory_SendBrowserToJsMessaging_ParamsSpec = { $: {} };
js_injection.mojom.BrowserToJsMessaging = {};
js_injection.mojom.BrowserToJsMessaging.$interfaceName = 'js_injection.mojom.BrowserToJsMessaging';
js_injection.mojom.BrowserToJsMessaging_OnPostMessage_ParamsSpec = { $: {} };
js_injection.mojom.JsCommunication = {};
js_injection.mojom.JsCommunication.$interfaceName = 'js_injection.mojom.JsCommunication';
js_injection.mojom.JsCommunication_SetJsObjects_ParamsSpec = { $: {} };
js_injection.mojom.JsCommunication_AddPersistentJavaScript_ParamsSpec = { $: {} };
js_injection.mojom.JsCommunication_RemovePersistentJavaScript_ParamsSpec = { $: {} };

// Union: JsWebMessage
mojo.internal.Union(
    js_injection.mojom.JsWebMessageSpec, 'js_injection.mojom.JsWebMessage', {
      'string_value': {
        'ordinal': 0,
        'type': mojo_base.mojom.String16Spec.$,
        'nullable': false,
      },
      'array_buffer_value': {
        'ordinal': 1,
        'type': js_injection.mojom.JsWebMessageArrayBufferValueSpec.$,
        'nullable': false,
      },
    });

// Struct: JsObject
mojo.internal.Struct(
    js_injection.mojom.JsObjectSpec, 'js_injection.mojom.JsObject', [
      mojo.internal.StructField('js_object_name', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('js_to_browser_messaging', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('browser_to_js_factory', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('origin_matcher', 24, 0, origin_matcher.mojom.OriginMatcherSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('js_world', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: JavaScriptExecutable
mojo.internal.Struct(
    js_injection.mojom.JavaScriptExecutableSpec, 'js_injection.mojom.JavaScriptExecutable', [
      mojo.internal.StructField('script', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('origin_matcher', 8, 0, origin_matcher.mojom.OriginMatcherSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('injection_time', 16, 0, js_injection.mojom.DocumentInjectionTimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('script_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('js_world', 28, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: JsWebMessageArrayBufferValue
mojo.internal.Struct(
    js_injection.mojom.JsWebMessageArrayBufferValueSpec, 'js_injection.mojom.JsWebMessageArrayBufferValue', [
      mojo.internal.StructField('array_buffer_value', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_byte_length', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('is_resizable_by_user_javascript', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: JsToBrowserMessaging
mojo.internal.Struct(
    js_injection.mojom.JsToBrowserMessaging_PostMessage_ParamsSpec, 'js_injection.mojom.JsToBrowserMessaging_PostMessage_Params', [
      mojo.internal.StructField('message', 0, 0, js_injection.mojom.JsWebMessageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ports', 8, 0, mojo.internal.Array(blink.mojom.MessagePortDescriptorSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    js_injection.mojom.JsToBrowserMessaging_SetBrowserToJsMessaging_ParamsSpec, 'js_injection.mojom.JsToBrowserMessaging_SetBrowserToJsMessaging_Params', [
      mojo.internal.StructField('browser_to_js_messaging', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

js_injection.mojom.JsToBrowserMessagingPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

js_injection.mojom.JsToBrowserMessagingRemote = class {
  static get $interfaceName() {
    return 'js_injection.mojom.JsToBrowserMessaging';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      js_injection.mojom.JsToBrowserMessagingPendingReceiver,
      handle);
    this.$ = new js_injection.mojom.JsToBrowserMessagingRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

js_injection.mojom.JsToBrowserMessagingRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('JsToBrowserMessaging', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  postMessage(message, ports) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      js_injection.mojom.JsToBrowserMessaging_PostMessage_ParamsSpec,
      null,
      [message, ports],
      false);
  }

  setBrowserToJsMessaging(browser_to_js_messaging) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      js_injection.mojom.JsToBrowserMessaging_SetBrowserToJsMessaging_ParamsSpec,
      null,
      [browser_to_js_messaging],
      false);
  }

};

js_injection.mojom.JsToBrowserMessaging.getRemote = function() {
  let remote = new js_injection.mojom.JsToBrowserMessagingRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'js_injection.mojom.JsToBrowserMessaging',
    'context');
  return remote.$;
};

js_injection.mojom.JsToBrowserMessagingReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('JsToBrowserMessaging', [
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
        
        // Try Method 0: PostMessage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(js_injection.mojom.JsToBrowserMessaging_PostMessage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PostMessage (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetBrowserToJsMessaging
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(js_injection.mojom.JsToBrowserMessaging_SetBrowserToJsMessaging_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetBrowserToJsMessaging (1)');
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
          const params = decoder.decodeStructInline(js_injection.mojom.JsToBrowserMessaging_PostMessage_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.postMessage');
          const result = this.impl.postMessage(params.message, params.ports);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(js_injection.mojom.JsToBrowserMessaging_SetBrowserToJsMessaging_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setBrowserToJsMessaging');
          const result = this.impl.setBrowserToJsMessaging(params.browser_to_js_messaging);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

js_injection.mojom.JsToBrowserMessagingReceiver = js_injection.mojom.JsToBrowserMessagingReceiver;

js_injection.mojom.JsToBrowserMessagingPtr = js_injection.mojom.JsToBrowserMessagingRemote;
js_injection.mojom.JsToBrowserMessagingRequest = js_injection.mojom.JsToBrowserMessagingPendingReceiver;


// Interface: JsObjectsClient
mojo.internal.Struct(
    js_injection.mojom.JsObjectsClient_OnWindowObjectCleared_ParamsSpec, 'js_injection.mojom.JsObjectsClient_OnWindowObjectCleared_Params', [
    ],
    [[0, 8]]);

js_injection.mojom.JsObjectsClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

js_injection.mojom.JsObjectsClientRemote = class {
  static get $interfaceName() {
    return 'js_injection.mojom.JsObjectsClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      js_injection.mojom.JsObjectsClientPendingReceiver,
      handle);
    this.$ = new js_injection.mojom.JsObjectsClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

js_injection.mojom.JsObjectsClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('JsObjectsClient', [
      { explicit: null },
    ]);
  }

  onWindowObjectCleared() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      js_injection.mojom.JsObjectsClient_OnWindowObjectCleared_ParamsSpec,
      null,
      [],
      false);
  }

};

js_injection.mojom.JsObjectsClient.getRemote = function() {
  let remote = new js_injection.mojom.JsObjectsClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'js_injection.mojom.JsObjectsClient',
    'context');
  return remote.$;
};

js_injection.mojom.JsObjectsClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('JsObjectsClient', [
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
        
        // Try Method 0: OnWindowObjectCleared
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(js_injection.mojom.JsObjectsClient_OnWindowObjectCleared_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWindowObjectCleared (0)');
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
          const params = decoder.decodeStructInline(js_injection.mojom.JsObjectsClient_OnWindowObjectCleared_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onWindowObjectCleared');
          const result = this.impl.onWindowObjectCleared();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

js_injection.mojom.JsObjectsClientReceiver = js_injection.mojom.JsObjectsClientReceiver;

js_injection.mojom.JsObjectsClientPtr = js_injection.mojom.JsObjectsClientRemote;
js_injection.mojom.JsObjectsClientRequest = js_injection.mojom.JsObjectsClientPendingReceiver;


// Interface: BrowserToJsMessagingFactory
mojo.internal.Struct(
    js_injection.mojom.BrowserToJsMessagingFactory_SendBrowserToJsMessaging_ParamsSpec, 'js_injection.mojom.BrowserToJsMessagingFactory_SendBrowserToJsMessaging_Params', [
      mojo.internal.StructField('browser_to_js_messaging', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

js_injection.mojom.BrowserToJsMessagingFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

js_injection.mojom.BrowserToJsMessagingFactoryRemote = class {
  static get $interfaceName() {
    return 'js_injection.mojom.BrowserToJsMessagingFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      js_injection.mojom.BrowserToJsMessagingFactoryPendingReceiver,
      handle);
    this.$ = new js_injection.mojom.BrowserToJsMessagingFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

js_injection.mojom.BrowserToJsMessagingFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('BrowserToJsMessagingFactory', [
      { explicit: null },
    ]);
  }

  sendBrowserToJsMessaging(browser_to_js_messaging) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      js_injection.mojom.BrowserToJsMessagingFactory_SendBrowserToJsMessaging_ParamsSpec,
      null,
      [browser_to_js_messaging],
      false);
  }

};

js_injection.mojom.BrowserToJsMessagingFactory.getRemote = function() {
  let remote = new js_injection.mojom.BrowserToJsMessagingFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'js_injection.mojom.BrowserToJsMessagingFactory',
    'context');
  return remote.$;
};

js_injection.mojom.BrowserToJsMessagingFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('BrowserToJsMessagingFactory', [
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
        
        // Try Method 0: SendBrowserToJsMessaging
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(js_injection.mojom.BrowserToJsMessagingFactory_SendBrowserToJsMessaging_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendBrowserToJsMessaging (0)');
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
          const params = decoder.decodeStructInline(js_injection.mojom.BrowserToJsMessagingFactory_SendBrowserToJsMessaging_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.sendBrowserToJsMessaging');
          const result = this.impl.sendBrowserToJsMessaging(params.browser_to_js_messaging);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

js_injection.mojom.BrowserToJsMessagingFactoryReceiver = js_injection.mojom.BrowserToJsMessagingFactoryReceiver;

js_injection.mojom.BrowserToJsMessagingFactoryPtr = js_injection.mojom.BrowserToJsMessagingFactoryRemote;
js_injection.mojom.BrowserToJsMessagingFactoryRequest = js_injection.mojom.BrowserToJsMessagingFactoryPendingReceiver;


// Interface: BrowserToJsMessaging
mojo.internal.Struct(
    js_injection.mojom.BrowserToJsMessaging_OnPostMessage_ParamsSpec, 'js_injection.mojom.BrowserToJsMessaging_OnPostMessage_Params', [
      mojo.internal.StructField('message', 0, 0, js_injection.mojom.JsWebMessageSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

js_injection.mojom.BrowserToJsMessagingPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

js_injection.mojom.BrowserToJsMessagingRemote = class {
  static get $interfaceName() {
    return 'js_injection.mojom.BrowserToJsMessaging';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      js_injection.mojom.BrowserToJsMessagingPendingReceiver,
      handle);
    this.$ = new js_injection.mojom.BrowserToJsMessagingRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

js_injection.mojom.BrowserToJsMessagingRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('BrowserToJsMessaging', [
      { explicit: null },
    ]);
  }

  onPostMessage(message) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      js_injection.mojom.BrowserToJsMessaging_OnPostMessage_ParamsSpec,
      null,
      [message],
      false);
  }

};

js_injection.mojom.BrowserToJsMessaging.getRemote = function() {
  let remote = new js_injection.mojom.BrowserToJsMessagingRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'js_injection.mojom.BrowserToJsMessaging',
    'context');
  return remote.$;
};

js_injection.mojom.BrowserToJsMessagingReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('BrowserToJsMessaging', [
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
        
        // Try Method 0: OnPostMessage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(js_injection.mojom.BrowserToJsMessaging_OnPostMessage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPostMessage (0)');
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
          const params = decoder.decodeStructInline(js_injection.mojom.BrowserToJsMessaging_OnPostMessage_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onPostMessage');
          const result = this.impl.onPostMessage(params.message);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

js_injection.mojom.BrowserToJsMessagingReceiver = js_injection.mojom.BrowserToJsMessagingReceiver;

js_injection.mojom.BrowserToJsMessagingPtr = js_injection.mojom.BrowserToJsMessagingRemote;
js_injection.mojom.BrowserToJsMessagingRequest = js_injection.mojom.BrowserToJsMessagingPendingReceiver;


// Interface: JsCommunication
mojo.internal.Struct(
    js_injection.mojom.JsCommunication_SetJsObjects_ParamsSpec, 'js_injection.mojom.JsCommunication_SetJsObjects_Params', [
      mojo.internal.StructField('js_objects', 0, 0, mojo.internal.Array(js_injection.mojom.JsObjectSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    js_injection.mojom.JsCommunication_AddPersistentJavaScript_ParamsSpec, 'js_injection.mojom.JsCommunication_AddPersistentJavaScript_Params', [
      mojo.internal.StructField('script', 0, 0, js_injection.mojom.JavaScriptExecutableSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    js_injection.mojom.JsCommunication_RemovePersistentJavaScript_ParamsSpec, 'js_injection.mojom.JsCommunication_RemovePersistentJavaScript_Params', [
      mojo.internal.StructField('script_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

js_injection.mojom.JsCommunicationPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

js_injection.mojom.JsCommunicationRemote = class {
  static get $interfaceName() {
    return 'js_injection.mojom.JsCommunication';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      js_injection.mojom.JsCommunicationPendingReceiver,
      handle);
    this.$ = new js_injection.mojom.JsCommunicationRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

js_injection.mojom.JsCommunicationRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('JsCommunication', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setJsObjects(js_objects, client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      js_injection.mojom.JsCommunication_SetJsObjects_ParamsSpec,
      null,
      [js_objects, client],
      false);
  }

  addPersistentJavaScript(script) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      js_injection.mojom.JsCommunication_AddPersistentJavaScript_ParamsSpec,
      null,
      [script],
      false);
  }

  removePersistentJavaScript(script_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      js_injection.mojom.JsCommunication_RemovePersistentJavaScript_ParamsSpec,
      null,
      [script_id],
      false);
  }

};

js_injection.mojom.JsCommunication.getRemote = function() {
  let remote = new js_injection.mojom.JsCommunicationRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'js_injection.mojom.JsCommunication',
    'context');
  return remote.$;
};

js_injection.mojom.JsCommunicationReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('JsCommunication', [
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
        
        // Try Method 0: SetJsObjects
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(js_injection.mojom.JsCommunication_SetJsObjects_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetJsObjects (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: AddPersistentJavaScript
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(js_injection.mojom.JsCommunication_AddPersistentJavaScript_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddPersistentJavaScript (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: RemovePersistentJavaScript
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(js_injection.mojom.JsCommunication_RemovePersistentJavaScript_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemovePersistentJavaScript (2)');
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
          const params = decoder.decodeStructInline(js_injection.mojom.JsCommunication_SetJsObjects_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setJsObjects');
          const result = this.impl.setJsObjects(params.js_objects, params.client);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(js_injection.mojom.JsCommunication_AddPersistentJavaScript_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.addPersistentJavaScript');
          const result = this.impl.addPersistentJavaScript(params.script);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(js_injection.mojom.JsCommunication_RemovePersistentJavaScript_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.removePersistentJavaScript');
          const result = this.impl.removePersistentJavaScript(params.script_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

js_injection.mojom.JsCommunicationReceiver = js_injection.mojom.JsCommunicationReceiver;

js_injection.mojom.JsCommunicationPtr = js_injection.mojom.JsCommunicationRemote;
js_injection.mojom.JsCommunicationRequest = js_injection.mojom.JsCommunicationPendingReceiver;

