// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/annotation/annotation.mojom
// Module: blink.mojom

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
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};

blink.mojom.AnnotationTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.AttachmentResultSpec = { $: mojo.internal.Enum() };
blink.mojom.SelectorSpec = { $: {} };
blink.mojom.SelectorCreationResultSpec = { $: {} };
blink.mojom.AnnotationAgent = {};
blink.mojom.AnnotationAgent.$interfaceName = 'blink.mojom.AnnotationAgent';
blink.mojom.AnnotationAgent_ScrollIntoView_ParamsSpec = { $: {} };
blink.mojom.AnnotationAgentHost = {};
blink.mojom.AnnotationAgentHost.$interfaceName = 'blink.mojom.AnnotationAgentHost';
blink.mojom.AnnotationAgentHost_DidFinishAttachment_ParamsSpec = { $: {} };
blink.mojom.AnnotationAgentContainer = {};
blink.mojom.AnnotationAgentContainer.$interfaceName = 'blink.mojom.AnnotationAgentContainer';
blink.mojom.AnnotationAgentContainer_CreateAgent_ParamsSpec = { $: {} };
blink.mojom.AnnotationAgentContainer_CreateAgentFromSelection_ParamsSpec = { $: {} };
blink.mojom.AnnotationAgentContainer_CreateAgentFromSelection_ResponseParamsSpec = { $: {} };
blink.mojom.AnnotationAgentContainer_RemoveAgentsOfType_ParamsSpec = { $: {} };

// Enum: AnnotationType
blink.mojom.AnnotationType = {
  kSharedHighlight: 0,
  kUserNote: 1,
  kTextFinder: 2,
  kGlic: 3,
};

// Enum: AttachmentResult
blink.mojom.AttachmentResult = {
  kSuccess: 0,
  kSelectorNotMatched: 1,
  kRangeInvalid: 2,
};

// Union: Selector
mojo.internal.Union(
    blink.mojom.SelectorSpec, 'blink.mojom.Selector', {
      'serialized_selector': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'node_id': {
        'ordinal': 1,
        'type': mojo.internal.Int32,
        'nullable': false,
      },
    });

// Struct: SelectorCreationResult
mojo.internal.Struct(
    blink.mojom.SelectorCreationResultSpec, 'blink.mojom.SelectorCreationResult', [
      mojo.internal.StructField('host_receiver', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.AnnotationAgentHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('agent_remote', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.AnnotationAgentRemote), null, false, 0, undefined),
      mojo.internal.StructField('serialized_selector', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('selected_text', 24, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: AnnotationAgent
mojo.internal.Struct(
    blink.mojom.AnnotationAgent_ScrollIntoView_ParamsSpec, 'blink.mojom.AnnotationAgent_ScrollIntoView_Params', [
      mojo.internal.StructField('applies_focus', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.AnnotationAgentPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AnnotationAgentRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AnnotationAgent';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AnnotationAgentPendingReceiver,
      handle);
    this.$ = new blink.mojom.AnnotationAgentRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  scrollIntoView(applies_focus) {
    return this.$.scrollIntoView(applies_focus);
  }
};

blink.mojom.AnnotationAgentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AnnotationAgent', [
      { explicit: null },
    ]);
  }

  scrollIntoView(applies_focus) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.AnnotationAgent_ScrollIntoView_ParamsSpec,
      null,
      [applies_focus],
      false);
  }

};

blink.mojom.AnnotationAgent.getRemote = function() {
  let remote = new blink.mojom.AnnotationAgentRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AnnotationAgent',
    'context');
  return remote.$;
};

blink.mojom.AnnotationAgentReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AnnotationAgent', [
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
        
        // Try Method 0: ScrollIntoView
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AnnotationAgent_ScrollIntoView_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ScrollIntoView (0)');
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
          const params = decoder.decodeStructInline(blink.mojom.AnnotationAgent_ScrollIntoView_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.scrollIntoView');
          const result = this.impl.scrollIntoView(params.applies_focus);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.AnnotationAgentReceiver = blink.mojom.AnnotationAgentReceiver;

blink.mojom.AnnotationAgentPtr = blink.mojom.AnnotationAgentRemote;
blink.mojom.AnnotationAgentRequest = blink.mojom.AnnotationAgentPendingReceiver;


// Interface: AnnotationAgentHost
mojo.internal.Struct(
    blink.mojom.AnnotationAgentHost_DidFinishAttachment_ParamsSpec, 'blink.mojom.AnnotationAgentHost_DidFinishAttachment_Params', [
      mojo.internal.StructField('document_relative_rect', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('attachment_result', 8, 0, blink.mojom.AttachmentResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.AnnotationAgentHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AnnotationAgentHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AnnotationAgentHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AnnotationAgentHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.AnnotationAgentHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  didFinishAttachment(document_relative_rect, attachment_result) {
    return this.$.didFinishAttachment(document_relative_rect, attachment_result);
  }
};

blink.mojom.AnnotationAgentHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AnnotationAgentHost', [
      { explicit: null },
    ]);
  }

  didFinishAttachment(document_relative_rect, attachment_result) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.AnnotationAgentHost_DidFinishAttachment_ParamsSpec,
      null,
      [document_relative_rect, attachment_result],
      false);
  }

};

blink.mojom.AnnotationAgentHost.getRemote = function() {
  let remote = new blink.mojom.AnnotationAgentHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AnnotationAgentHost',
    'context');
  return remote.$;
};

blink.mojom.AnnotationAgentHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AnnotationAgentHost', [
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
        
        // Try Method 0: DidFinishAttachment
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AnnotationAgentHost_DidFinishAttachment_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidFinishAttachment (0)');
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
          const params = decoder.decodeStructInline(blink.mojom.AnnotationAgentHost_DidFinishAttachment_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didFinishAttachment');
          const result = this.impl.didFinishAttachment(params.document_relative_rect, params.attachment_result);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.AnnotationAgentHostReceiver = blink.mojom.AnnotationAgentHostReceiver;

blink.mojom.AnnotationAgentHostPtr = blink.mojom.AnnotationAgentHostRemote;
blink.mojom.AnnotationAgentHostRequest = blink.mojom.AnnotationAgentHostPendingReceiver;


// Interface: AnnotationAgentContainer
mojo.internal.Struct(
    blink.mojom.AnnotationAgentContainer_CreateAgent_ParamsSpec, 'blink.mojom.AnnotationAgentContainer_CreateAgent_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.AnnotationAgentHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('agent_receiver', 8, 0, mojo.internal.InterfaceRequest(blink.mojom.AnnotationAgentRemote), null, false, 0, undefined),
      mojo.internal.StructField('type', 16, 0, blink.mojom.AnnotationTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('selector', 24, 0, blink.mojom.SelectorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('search_range_start_node_id_$value', 32, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'search_range_start_node_id_$flag', originalFieldName: 'search_range_start_node_id' }),
      mojo.internal.StructField('search_range_start_node_id_$flag', 36, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'search_range_start_node_id_$value', originalFieldName: 'search_range_start_node_id' }),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    blink.mojom.AnnotationAgentContainer_CreateAgentFromSelection_ParamsSpec, 'blink.mojom.AnnotationAgentContainer_CreateAgentFromSelection_Params', [
      mojo.internal.StructField('type', 0, 0, blink.mojom.AnnotationTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AnnotationAgentContainer_CreateAgentFromSelection_ResponseParamsSpec, 'blink.mojom.AnnotationAgentContainer_CreateAgentFromSelection_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.SelectorCreationResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('error', 8, 0, blink.mojom.LinkGenerationErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ready_status', 16, 0, blink.mojom.LinkGenerationReadyStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.AnnotationAgentContainer_RemoveAgentsOfType_ParamsSpec, 'blink.mojom.AnnotationAgentContainer_RemoveAgentsOfType_Params', [
      mojo.internal.StructField('type', 0, 0, blink.mojom.AnnotationTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.AnnotationAgentContainerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AnnotationAgentContainerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AnnotationAgentContainer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AnnotationAgentContainerPendingReceiver,
      handle);
    this.$ = new blink.mojom.AnnotationAgentContainerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createAgent(host_remote, agent_receiver, type, selector, search_range_start_node_id) {
    return this.$.createAgent(host_remote, agent_receiver, type, selector, search_range_start_node_id);
  }
  createAgentFromSelection(type) {
    return this.$.createAgentFromSelection(type);
  }
  removeAgentsOfType(type) {
    return this.$.removeAgentsOfType(type);
  }
};

blink.mojom.AnnotationAgentContainerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AnnotationAgentContainer', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  createAgent(host_remote, agent_receiver, type, selector, search_range_start_node_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.AnnotationAgentContainer_CreateAgent_ParamsSpec,
      null,
      [host_remote, agent_receiver, type, selector, search_range_start_node_id],
      false);
  }

  createAgentFromSelection(type) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.AnnotationAgentContainer_CreateAgentFromSelection_ParamsSpec,
      blink.mojom.AnnotationAgentContainer_CreateAgentFromSelection_ResponseParamsSpec,
      [type],
      false);
  }

  removeAgentsOfType(type) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.AnnotationAgentContainer_RemoveAgentsOfType_ParamsSpec,
      null,
      [type],
      false);
  }

};

blink.mojom.AnnotationAgentContainer.getRemote = function() {
  let remote = new blink.mojom.AnnotationAgentContainerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AnnotationAgentContainer',
    'context');
  return remote.$;
};

blink.mojom.AnnotationAgentContainerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AnnotationAgentContainer', [
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
        
        // Try Method 0: CreateAgent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AnnotationAgentContainer_CreateAgent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateAgent (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CreateAgentFromSelection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AnnotationAgentContainer_CreateAgentFromSelection_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateAgentFromSelection (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: RemoveAgentsOfType
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AnnotationAgentContainer_RemoveAgentsOfType_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveAgentsOfType (2)');
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
          const params = decoder.decodeStructInline(blink.mojom.AnnotationAgentContainer_CreateAgent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createAgent');
          const result = this.impl.createAgent(params.host_remote, params.agent_receiver, params.type, params.selector, params.search_range_start_node_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AnnotationAgentContainer_CreateAgentFromSelection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createAgentFromSelection');
          const result = this.impl.createAgentFromSelection(params.type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AnnotationAgentContainer_CreateAgentFromSelection_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AnnotationAgentContainer_RemoveAgentsOfType_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeAgentsOfType');
          const result = this.impl.removeAgentsOfType(params.type);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.AnnotationAgentContainerReceiver = blink.mojom.AnnotationAgentContainerReceiver;

blink.mojom.AnnotationAgentContainerPtr = blink.mojom.AnnotationAgentContainerRemote;
blink.mojom.AnnotationAgentContainerRequest = blink.mojom.AnnotationAgentContainerPendingReceiver;

