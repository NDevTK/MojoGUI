// Auto-generated MojoJS binding
// Source: chromium_src/cc/mojom/render_frame_metadata.mojom
// Module: cc.mojom

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
var cc = cc || {};
cc.mojom = cc.mojom || {};
var viz = viz || {};
var skia = skia || {};
var gfx = gfx || {};

cc.mojom.RootScrollOffsetUpdateFrequencySpec = { $: mojo.internal.Enum() };
cc.mojom.DelegatedInkBrowserMetadataSpec = { $: {} };
cc.mojom.RenderFrameMetadataSpec = { $: {} };
cc.mojom.RenderFrameMetadataObserver = {};
cc.mojom.RenderFrameMetadataObserver.$interfaceName = 'cc.mojom.RenderFrameMetadataObserver';
cc.mojom.RenderFrameMetadataObserver_UpdateRootScrollOffsetUpdateFrequency_ParamsSpec = { $: {} };
cc.mojom.RenderFrameMetadataObserver_ReportAllFrameSubmissionsForTesting_ParamsSpec = { $: {} };
cc.mojom.RenderFrameMetadataObserverClient = {};
cc.mojom.RenderFrameMetadataObserverClient.$interfaceName = 'cc.mojom.RenderFrameMetadataObserverClient';
cc.mojom.RenderFrameMetadataObserverClient_OnRenderFrameMetadataChanged_ParamsSpec = { $: {} };
cc.mojom.RenderFrameMetadataObserverClient_OnFrameSubmissionForTesting_ParamsSpec = { $: {} };
cc.mojom.RenderFrameMetadataObserverClient_OnRootScrollOffsetChanged_ParamsSpec = { $: {} };

// Enum: RootScrollOffsetUpdateFrequency
cc.mojom.RootScrollOffsetUpdateFrequency = {
  kNone: 0,
  kOnScrollEnd: 1,
  kAllUpdates: 2,
};

// Struct: DelegatedInkBrowserMetadata
mojo.internal.Struct(
    cc.mojom.DelegatedInkBrowserMetadataSpec, 'cc.mojom.DelegatedInkBrowserMetadata', [
      mojo.internal.StructField('delegated_ink_is_hovering', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: RenderFrameMetadata
mojo.internal.Struct(
    cc.mojom.RenderFrameMetadataSpec, 'cc.mojom.RenderFrameMetadata', [
      mojo.internal.StructField('root_background_color', 0, 0, skia.mojom.SkColor4fSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('root_scroll_offset', 8, 0, gfx.mojom.PointFSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('selection', 16, 0, viz.mojom.SelectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('delegated_ink_metadata', 24, 0, cc.mojom.DelegatedInkBrowserMetadataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('viewport_size_in_pixels', 32, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('local_surface_id', 40, 0, viz.mojom.LocalSurfaceIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('new_vertical_scroll_direction', 48, 0, viz.mojom.VerticalScrollDirectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('primary_main_frame_item_sequence_number', 56, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('scrollable_viewport_size', 64, 0, gfx.mojom.SizeFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('root_layer_size', 72, 0, gfx.mojom.SizeFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('device_scale_factor', 80, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('page_scale_factor', 84, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('external_page_scale_factor', 88, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('top_controls_height', 92, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('top_controls_shown_ratio', 96, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('bottom_controls_height', 100, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('bottom_controls_shown_ratio', 104, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('top_controls_min_height_offset', 108, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('bottom_controls_min_height_offset', 112, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('min_page_scale_factor', 116, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('max_page_scale_factor', 120, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('is_scroll_offset_at_top', 124, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_mobile_optimized', 124, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('root_overflow_y_hidden', 124, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_transparent_background', 124, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 136]]);

// Interface: RenderFrameMetadataObserver
mojo.internal.Struct(
    cc.mojom.RenderFrameMetadataObserver_UpdateRootScrollOffsetUpdateFrequency_ParamsSpec, 'cc.mojom.RenderFrameMetadataObserver_UpdateRootScrollOffsetUpdateFrequency_Params', [
      mojo.internal.StructField('frequency', 0, 0, cc.mojom.RootScrollOffsetUpdateFrequencySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cc.mojom.RenderFrameMetadataObserver_ReportAllFrameSubmissionsForTesting_ParamsSpec, 'cc.mojom.RenderFrameMetadataObserver_ReportAllFrameSubmissionsForTesting_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

cc.mojom.RenderFrameMetadataObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cc.mojom.RenderFrameMetadataObserverRemote = class {
  static get $interfaceName() {
    return 'cc.mojom.RenderFrameMetadataObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cc.mojom.RenderFrameMetadataObserverPendingReceiver,
      handle);
    this.$ = new cc.mojom.RenderFrameMetadataObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  updateRootScrollOffsetUpdateFrequency(frequency) {
    return this.$.updateRootScrollOffsetUpdateFrequency(frequency);
  }
  reportAllFrameSubmissionsForTesting(enabled) {
    return this.$.reportAllFrameSubmissionsForTesting(enabled);
  }
};

cc.mojom.RenderFrameMetadataObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RenderFrameMetadataObserver', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  updateRootScrollOffsetUpdateFrequency(frequency) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      cc.mojom.RenderFrameMetadataObserver_UpdateRootScrollOffsetUpdateFrequency_ParamsSpec,
      null,
      [frequency],
      false);
  }

  reportAllFrameSubmissionsForTesting(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      cc.mojom.RenderFrameMetadataObserver_ReportAllFrameSubmissionsForTesting_ParamsSpec,
      null,
      [enabled],
      false);
  }

};

cc.mojom.RenderFrameMetadataObserver.getRemote = function() {
  let remote = new cc.mojom.RenderFrameMetadataObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cc.mojom.RenderFrameMetadataObserver',
    'context');
  return remote.$;
};

cc.mojom.RenderFrameMetadataObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RenderFrameMetadataObserver', [
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
        
        // Try Method 0: UpdateRootScrollOffsetUpdateFrequency
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cc.mojom.RenderFrameMetadataObserver_UpdateRootScrollOffsetUpdateFrequency_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateRootScrollOffsetUpdateFrequency (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ReportAllFrameSubmissionsForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cc.mojom.RenderFrameMetadataObserver_ReportAllFrameSubmissionsForTesting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportAllFrameSubmissionsForTesting (1)');
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
          const params = decoder.decodeStructInline(cc.mojom.RenderFrameMetadataObserver_UpdateRootScrollOffsetUpdateFrequency_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateRootScrollOffsetUpdateFrequency');
          const result = this.impl.updateRootScrollOffsetUpdateFrequency(params.frequency);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cc.mojom.RenderFrameMetadataObserver_ReportAllFrameSubmissionsForTesting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportAllFrameSubmissionsForTesting');
          const result = this.impl.reportAllFrameSubmissionsForTesting(params.enabled);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

cc.mojom.RenderFrameMetadataObserverReceiver = cc.mojom.RenderFrameMetadataObserverReceiver;

cc.mojom.RenderFrameMetadataObserverPtr = cc.mojom.RenderFrameMetadataObserverRemote;
cc.mojom.RenderFrameMetadataObserverRequest = cc.mojom.RenderFrameMetadataObserverPendingReceiver;


// Interface: RenderFrameMetadataObserverClient
mojo.internal.Struct(
    cc.mojom.RenderFrameMetadataObserverClient_OnRenderFrameMetadataChanged_ParamsSpec, 'cc.mojom.RenderFrameMetadataObserverClient_OnRenderFrameMetadataChanged_Params', [
      mojo.internal.StructField('metadata', 0, 0, cc.mojom.RenderFrameMetadataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_token', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    cc.mojom.RenderFrameMetadataObserverClient_OnFrameSubmissionForTesting_ParamsSpec, 'cc.mojom.RenderFrameMetadataObserverClient_OnFrameSubmissionForTesting_Params', [
      mojo.internal.StructField('frame_token', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cc.mojom.RenderFrameMetadataObserverClient_OnRootScrollOffsetChanged_ParamsSpec, 'cc.mojom.RenderFrameMetadataObserverClient_OnRootScrollOffsetChanged_Params', [
      mojo.internal.StructField('root_scroll_offset', 0, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

cc.mojom.RenderFrameMetadataObserverClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cc.mojom.RenderFrameMetadataObserverClientRemote = class {
  static get $interfaceName() {
    return 'cc.mojom.RenderFrameMetadataObserverClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cc.mojom.RenderFrameMetadataObserverClientPendingReceiver,
      handle);
    this.$ = new cc.mojom.RenderFrameMetadataObserverClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onRenderFrameMetadataChanged(frame_token, metadata) {
    return this.$.onRenderFrameMetadataChanged(frame_token, metadata);
  }
  onFrameSubmissionForTesting(frame_token) {
    return this.$.onFrameSubmissionForTesting(frame_token);
  }
  onRootScrollOffsetChanged(root_scroll_offset) {
    return this.$.onRootScrollOffsetChanged(root_scroll_offset);
  }
};

cc.mojom.RenderFrameMetadataObserverClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RenderFrameMetadataObserverClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onRenderFrameMetadataChanged(frame_token, metadata) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      cc.mojom.RenderFrameMetadataObserverClient_OnRenderFrameMetadataChanged_ParamsSpec,
      null,
      [frame_token, metadata],
      false);
  }

  onFrameSubmissionForTesting(frame_token) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      cc.mojom.RenderFrameMetadataObserverClient_OnFrameSubmissionForTesting_ParamsSpec,
      null,
      [frame_token],
      false);
  }

  onRootScrollOffsetChanged(root_scroll_offset) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      cc.mojom.RenderFrameMetadataObserverClient_OnRootScrollOffsetChanged_ParamsSpec,
      null,
      [root_scroll_offset],
      false);
  }

};

cc.mojom.RenderFrameMetadataObserverClient.getRemote = function() {
  let remote = new cc.mojom.RenderFrameMetadataObserverClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cc.mojom.RenderFrameMetadataObserverClient',
    'context');
  return remote.$;
};

cc.mojom.RenderFrameMetadataObserverClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RenderFrameMetadataObserverClient', [
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
        
        // Try Method 0: OnRenderFrameMetadataChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cc.mojom.RenderFrameMetadataObserverClient_OnRenderFrameMetadataChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnRenderFrameMetadataChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnFrameSubmissionForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cc.mojom.RenderFrameMetadataObserverClient_OnFrameSubmissionForTesting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFrameSubmissionForTesting (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnRootScrollOffsetChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cc.mojom.RenderFrameMetadataObserverClient_OnRootScrollOffsetChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnRootScrollOffsetChanged (2)');
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
          const params = decoder.decodeStructInline(cc.mojom.RenderFrameMetadataObserverClient_OnRenderFrameMetadataChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onRenderFrameMetadataChanged');
          const result = this.impl.onRenderFrameMetadataChanged(params.frame_token, params.metadata);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cc.mojom.RenderFrameMetadataObserverClient_OnFrameSubmissionForTesting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFrameSubmissionForTesting');
          const result = this.impl.onFrameSubmissionForTesting(params.frame_token);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cc.mojom.RenderFrameMetadataObserverClient_OnRootScrollOffsetChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onRootScrollOffsetChanged');
          const result = this.impl.onRootScrollOffsetChanged(params.root_scroll_offset);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

cc.mojom.RenderFrameMetadataObserverClientReceiver = cc.mojom.RenderFrameMetadataObserverClientReceiver;

cc.mojom.RenderFrameMetadataObserverClientPtr = cc.mojom.RenderFrameMetadataObserverClientRemote;
cc.mojom.RenderFrameMetadataObserverClientRequest = cc.mojom.RenderFrameMetadataObserverClientPendingReceiver;

