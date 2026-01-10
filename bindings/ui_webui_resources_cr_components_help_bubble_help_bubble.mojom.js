// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/cr_components/help_bubble/help_bubble.mojom
// Module: help_bubble.mojom

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
var help_bubble = help_bubble || {};
help_bubble.mojom = help_bubble.mojom || {};
var mojo_base = mojo_base || {};
var tracked_element = tracked_element || {};

help_bubble.mojom.HelpBubbleArrowPositionSpec = { $: mojo.internal.Enum() };
help_bubble.mojom.HelpBubbleClosedReasonSpec = { $: mojo.internal.Enum() };
help_bubble.mojom.HelpBubbleButtonParamsSpec = { $: {} };
help_bubble.mojom.ProgressSpec = { $: {} };
help_bubble.mojom.HelpBubbleParamsSpec = { $: {} };
help_bubble.mojom.HelpBubbleHandlerFactory = {};
help_bubble.mojom.HelpBubbleHandlerFactory.$interfaceName = 'help_bubble.mojom.HelpBubbleHandlerFactory';
help_bubble.mojom.HelpBubbleHandlerFactory_CreateHelpBubbleHandler_ParamsSpec = { $: {} };
help_bubble.mojom.PdfHelpBubbleHandlerFactory = {};
help_bubble.mojom.PdfHelpBubbleHandlerFactory.$interfaceName = 'help_bubble.mojom.PdfHelpBubbleHandlerFactory';
help_bubble.mojom.PdfHelpBubbleHandlerFactory_CreateHelpBubbleHandler_ParamsSpec = { $: {} };
help_bubble.mojom.HelpBubbleHandler = {};
help_bubble.mojom.HelpBubbleHandler.$interfaceName = 'help_bubble.mojom.HelpBubbleHandler';
help_bubble.mojom.HelpBubbleHandler_BindTrackedElementHandler_ParamsSpec = { $: {} };
help_bubble.mojom.HelpBubbleHandler_HelpBubbleButtonPressed_ParamsSpec = { $: {} };
help_bubble.mojom.HelpBubbleHandler_HelpBubbleClosed_ParamsSpec = { $: {} };
help_bubble.mojom.HelpBubbleClient = {};
help_bubble.mojom.HelpBubbleClient.$interfaceName = 'help_bubble.mojom.HelpBubbleClient';
help_bubble.mojom.HelpBubbleClient_ShowHelpBubble_ParamsSpec = { $: {} };
help_bubble.mojom.HelpBubbleClient_ToggleFocusForAccessibility_ParamsSpec = { $: {} };
help_bubble.mojom.HelpBubbleClient_HideHelpBubble_ParamsSpec = { $: {} };
help_bubble.mojom.HelpBubbleClient_ExternalHelpBubbleUpdated_ParamsSpec = { $: {} };

// Enum: HelpBubbleArrowPosition
help_bubble.mojom.HelpBubbleArrowPosition = {
  TOP_LEFT: 0,
  TOP_CENTER: 1,
  TOP_RIGHT: 2,
  BOTTOM_LEFT: 3,
  BOTTOM_CENTER: 4,
  BOTTOM_RIGHT: 5,
  LEFT_TOP: 6,
  LEFT_CENTER: 7,
  LEFT_BOTTOM: 8,
  RIGHT_TOP: 9,
  RIGHT_CENTER: 10,
  RIGHT_BOTTOM: 11,
};

// Enum: HelpBubbleClosedReason
help_bubble.mojom.HelpBubbleClosedReason = {
  kPageChanged: 0,
  kDismissedByUser: 1,
  kTimedOut: 2,
};

// Struct: HelpBubbleButtonParams
mojo.internal.Struct(
    help_bubble.mojom.HelpBubbleButtonParamsSpec, 'help_bubble.mojom.HelpBubbleButtonParams', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_default', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Progress
mojo.internal.Struct(
    help_bubble.mojom.ProgressSpec, 'help_bubble.mojom.Progress', [
      mojo.internal.StructField('current', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('total', 1, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: HelpBubbleParams
mojo.internal.Struct(
    help_bubble.mojom.HelpBubbleParamsSpec, 'help_bubble.mojom.HelpBubbleParams', [
      mojo.internal.StructField('native_identifier', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('position', 8, 0, help_bubble.mojom.HelpBubbleArrowPositionSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('title_text', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('body_text', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('close_button_alt_text', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('body_icon_name', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('body_icon_alt_text', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('progress', 56, 0, help_bubble.mojom.ProgressSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('buttons', 64, 0, mojo.internal.Array(help_bubble.mojom.HelpBubbleButtonParamsSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('timeout', 72, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('focus_on_show_hint_$flag', 80, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'focus_on_show_hint_$value', originalFieldName: 'focus_on_show_hint' }),
      mojo.internal.StructField('focus_on_show_hint_$value', 80, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'focus_on_show_hint_$flag', originalFieldName: 'focus_on_show_hint' }),
    ],
    [[0, 96]]);

// Interface: HelpBubbleHandlerFactory
mojo.internal.Struct(
    help_bubble.mojom.HelpBubbleHandlerFactory_CreateHelpBubbleHandler_ParamsSpec, 'help_bubble.mojom.HelpBubbleHandlerFactory_CreateHelpBubbleHandler_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(help_bubble.mojom.HelpBubbleClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(help_bubble.mojom.HelpBubbleHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

help_bubble.mojom.HelpBubbleHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

help_bubble.mojom.HelpBubbleHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'help_bubble.mojom.HelpBubbleHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      help_bubble.mojom.HelpBubbleHandlerFactoryPendingReceiver,
      handle);
    this.$ = new help_bubble.mojom.HelpBubbleHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

help_bubble.mojom.HelpBubbleHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('HelpBubbleHandlerFactory', [
      { explicit: null },
    ]);
  }

  createHelpBubbleHandler(client, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      help_bubble.mojom.HelpBubbleHandlerFactory_CreateHelpBubbleHandler_ParamsSpec,
      null,
      [client, handler],
      false);
  }

};

help_bubble.mojom.HelpBubbleHandlerFactory.getRemote = function() {
  let remote = new help_bubble.mojom.HelpBubbleHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'help_bubble.mojom.HelpBubbleHandlerFactory',
    'context');
  return remote.$;
};

help_bubble.mojom.HelpBubbleHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('HelpBubbleHandlerFactory', [
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
        
        // Try Method 0: CreateHelpBubbleHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(help_bubble.mojom.HelpBubbleHandlerFactory_CreateHelpBubbleHandler_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateHelpBubbleHandler (0)');
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
          const params = decoder.decodeStructInline(help_bubble.mojom.HelpBubbleHandlerFactory_CreateHelpBubbleHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createHelpBubbleHandler');
          const result = this.impl.createHelpBubbleHandler(params.client, params.handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

help_bubble.mojom.HelpBubbleHandlerFactoryReceiver = help_bubble.mojom.HelpBubbleHandlerFactoryReceiver;

help_bubble.mojom.HelpBubbleHandlerFactoryPtr = help_bubble.mojom.HelpBubbleHandlerFactoryRemote;
help_bubble.mojom.HelpBubbleHandlerFactoryRequest = help_bubble.mojom.HelpBubbleHandlerFactoryPendingReceiver;


// Interface: PdfHelpBubbleHandlerFactory
mojo.internal.Struct(
    help_bubble.mojom.PdfHelpBubbleHandlerFactory_CreateHelpBubbleHandler_ParamsSpec, 'help_bubble.mojom.PdfHelpBubbleHandlerFactory_CreateHelpBubbleHandler_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(help_bubble.mojom.HelpBubbleClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(help_bubble.mojom.HelpBubbleHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

help_bubble.mojom.PdfHelpBubbleHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

help_bubble.mojom.PdfHelpBubbleHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'help_bubble.mojom.PdfHelpBubbleHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      help_bubble.mojom.PdfHelpBubbleHandlerFactoryPendingReceiver,
      handle);
    this.$ = new help_bubble.mojom.PdfHelpBubbleHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

help_bubble.mojom.PdfHelpBubbleHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PdfHelpBubbleHandlerFactory', [
      { explicit: null },
    ]);
  }

  createHelpBubbleHandler(client, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      help_bubble.mojom.PdfHelpBubbleHandlerFactory_CreateHelpBubbleHandler_ParamsSpec,
      null,
      [client, handler],
      false);
  }

};

help_bubble.mojom.PdfHelpBubbleHandlerFactory.getRemote = function() {
  let remote = new help_bubble.mojom.PdfHelpBubbleHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'help_bubble.mojom.PdfHelpBubbleHandlerFactory',
    'context');
  return remote.$;
};

help_bubble.mojom.PdfHelpBubbleHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PdfHelpBubbleHandlerFactory', [
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
        
        // Try Method 0: CreateHelpBubbleHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(help_bubble.mojom.PdfHelpBubbleHandlerFactory_CreateHelpBubbleHandler_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateHelpBubbleHandler (0)');
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
          const params = decoder.decodeStructInline(help_bubble.mojom.PdfHelpBubbleHandlerFactory_CreateHelpBubbleHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createHelpBubbleHandler');
          const result = this.impl.createHelpBubbleHandler(params.client, params.handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

help_bubble.mojom.PdfHelpBubbleHandlerFactoryReceiver = help_bubble.mojom.PdfHelpBubbleHandlerFactoryReceiver;

help_bubble.mojom.PdfHelpBubbleHandlerFactoryPtr = help_bubble.mojom.PdfHelpBubbleHandlerFactoryRemote;
help_bubble.mojom.PdfHelpBubbleHandlerFactoryRequest = help_bubble.mojom.PdfHelpBubbleHandlerFactoryPendingReceiver;


// Interface: HelpBubbleHandler
mojo.internal.Struct(
    help_bubble.mojom.HelpBubbleHandler_BindTrackedElementHandler_ParamsSpec, 'help_bubble.mojom.HelpBubbleHandler_BindTrackedElementHandler_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(tracked_element.mojom.TrackedElementHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    help_bubble.mojom.HelpBubbleHandler_HelpBubbleButtonPressed_ParamsSpec, 'help_bubble.mojom.HelpBubbleHandler_HelpBubbleButtonPressed_Params', [
      mojo.internal.StructField('native_identifier', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('button_index', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    help_bubble.mojom.HelpBubbleHandler_HelpBubbleClosed_ParamsSpec, 'help_bubble.mojom.HelpBubbleHandler_HelpBubbleClosed_Params', [
      mojo.internal.StructField('native_identifier', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('reason', 8, 0, help_bubble.mojom.HelpBubbleClosedReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

help_bubble.mojom.HelpBubbleHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

help_bubble.mojom.HelpBubbleHandlerRemote = class {
  static get $interfaceName() {
    return 'help_bubble.mojom.HelpBubbleHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      help_bubble.mojom.HelpBubbleHandlerPendingReceiver,
      handle);
    this.$ = new help_bubble.mojom.HelpBubbleHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

help_bubble.mojom.HelpBubbleHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('HelpBubbleHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  bindTrackedElementHandler(handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      help_bubble.mojom.HelpBubbleHandler_BindTrackedElementHandler_ParamsSpec,
      null,
      [handler],
      false);
  }

  helpBubbleButtonPressed(native_identifier, button_index) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      help_bubble.mojom.HelpBubbleHandler_HelpBubbleButtonPressed_ParamsSpec,
      null,
      [native_identifier, button_index],
      false);
  }

  helpBubbleClosed(native_identifier, reason) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      help_bubble.mojom.HelpBubbleHandler_HelpBubbleClosed_ParamsSpec,
      null,
      [native_identifier, reason],
      false);
  }

};

help_bubble.mojom.HelpBubbleHandler.getRemote = function() {
  let remote = new help_bubble.mojom.HelpBubbleHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'help_bubble.mojom.HelpBubbleHandler',
    'context');
  return remote.$;
};

help_bubble.mojom.HelpBubbleHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('HelpBubbleHandler', [
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
        
        // Try Method 0: BindTrackedElementHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(help_bubble.mojom.HelpBubbleHandler_BindTrackedElementHandler_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindTrackedElementHandler (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: HelpBubbleButtonPressed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(help_bubble.mojom.HelpBubbleHandler_HelpBubbleButtonPressed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HelpBubbleButtonPressed (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: HelpBubbleClosed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(help_bubble.mojom.HelpBubbleHandler_HelpBubbleClosed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HelpBubbleClosed (2)');
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
          const params = decoder.decodeStructInline(help_bubble.mojom.HelpBubbleHandler_BindTrackedElementHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindTrackedElementHandler');
          const result = this.impl.bindTrackedElementHandler(params.handler);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(help_bubble.mojom.HelpBubbleHandler_HelpBubbleButtonPressed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.helpBubbleButtonPressed');
          const result = this.impl.helpBubbleButtonPressed(params.native_identifier, params.button_index);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(help_bubble.mojom.HelpBubbleHandler_HelpBubbleClosed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.helpBubbleClosed');
          const result = this.impl.helpBubbleClosed(params.native_identifier, params.reason);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

help_bubble.mojom.HelpBubbleHandlerReceiver = help_bubble.mojom.HelpBubbleHandlerReceiver;

help_bubble.mojom.HelpBubbleHandlerPtr = help_bubble.mojom.HelpBubbleHandlerRemote;
help_bubble.mojom.HelpBubbleHandlerRequest = help_bubble.mojom.HelpBubbleHandlerPendingReceiver;


// Interface: HelpBubbleClient
mojo.internal.Struct(
    help_bubble.mojom.HelpBubbleClient_ShowHelpBubble_ParamsSpec, 'help_bubble.mojom.HelpBubbleClient_ShowHelpBubble_Params', [
      mojo.internal.StructField('params', 0, 0, help_bubble.mojom.HelpBubbleParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    help_bubble.mojom.HelpBubbleClient_ToggleFocusForAccessibility_ParamsSpec, 'help_bubble.mojom.HelpBubbleClient_ToggleFocusForAccessibility_Params', [
      mojo.internal.StructField('native_identifier', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    help_bubble.mojom.HelpBubbleClient_HideHelpBubble_ParamsSpec, 'help_bubble.mojom.HelpBubbleClient_HideHelpBubble_Params', [
      mojo.internal.StructField('native_identifier', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    help_bubble.mojom.HelpBubbleClient_ExternalHelpBubbleUpdated_ParamsSpec, 'help_bubble.mojom.HelpBubbleClient_ExternalHelpBubbleUpdated_Params', [
      mojo.internal.StructField('native_identifier', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('shown', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

help_bubble.mojom.HelpBubbleClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

help_bubble.mojom.HelpBubbleClientRemote = class {
  static get $interfaceName() {
    return 'help_bubble.mojom.HelpBubbleClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      help_bubble.mojom.HelpBubbleClientPendingReceiver,
      handle);
    this.$ = new help_bubble.mojom.HelpBubbleClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

help_bubble.mojom.HelpBubbleClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('HelpBubbleClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  showHelpBubble(params) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      help_bubble.mojom.HelpBubbleClient_ShowHelpBubble_ParamsSpec,
      null,
      [params],
      false);
  }

  toggleFocusForAccessibility(native_identifier) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      help_bubble.mojom.HelpBubbleClient_ToggleFocusForAccessibility_ParamsSpec,
      null,
      [native_identifier],
      false);
  }

  hideHelpBubble(native_identifier) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      help_bubble.mojom.HelpBubbleClient_HideHelpBubble_ParamsSpec,
      null,
      [native_identifier],
      false);
  }

  externalHelpBubbleUpdated(native_identifier, shown) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      help_bubble.mojom.HelpBubbleClient_ExternalHelpBubbleUpdated_ParamsSpec,
      null,
      [native_identifier, shown],
      false);
  }

};

help_bubble.mojom.HelpBubbleClient.getRemote = function() {
  let remote = new help_bubble.mojom.HelpBubbleClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'help_bubble.mojom.HelpBubbleClient',
    'context');
  return remote.$;
};

help_bubble.mojom.HelpBubbleClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('HelpBubbleClient', [
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
        
        // Try Method 0: ShowHelpBubble
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(help_bubble.mojom.HelpBubbleClient_ShowHelpBubble_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowHelpBubble (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ToggleFocusForAccessibility
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(help_bubble.mojom.HelpBubbleClient_ToggleFocusForAccessibility_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ToggleFocusForAccessibility (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: HideHelpBubble
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(help_bubble.mojom.HelpBubbleClient_HideHelpBubble_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HideHelpBubble (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ExternalHelpBubbleUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(help_bubble.mojom.HelpBubbleClient_ExternalHelpBubbleUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExternalHelpBubbleUpdated (3)');
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
          const params = decoder.decodeStructInline(help_bubble.mojom.HelpBubbleClient_ShowHelpBubble_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showHelpBubble');
          const result = this.impl.showHelpBubble(params.params);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(help_bubble.mojom.HelpBubbleClient_ToggleFocusForAccessibility_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.toggleFocusForAccessibility');
          const result = this.impl.toggleFocusForAccessibility(params.native_identifier);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(help_bubble.mojom.HelpBubbleClient_HideHelpBubble_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.hideHelpBubble');
          const result = this.impl.hideHelpBubble(params.native_identifier);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(help_bubble.mojom.HelpBubbleClient_ExternalHelpBubbleUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.externalHelpBubbleUpdated');
          const result = this.impl.externalHelpBubbleUpdated(params.native_identifier, params.shown);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

help_bubble.mojom.HelpBubbleClientReceiver = help_bubble.mojom.HelpBubbleClientReceiver;

help_bubble.mojom.HelpBubbleClientPtr = help_bubble.mojom.HelpBubbleClientRemote;
help_bubble.mojom.HelpBubbleClientRequest = help_bubble.mojom.HelpBubbleClientPendingReceiver;

