// Auto-generated MojoJS binding
 // Source: chromium_src/components/browser_apis/tab_strip/tab_strip_api.mojom
 // Module: tabs_api.mojom

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
 

 mojo.internal.bindings.tabs_api = mojo.internal.bindings.tabs_api || {};
mojo.internal.bindings.tabs_api.mojom = mojo.internal.bindings.tabs_api.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.tabs_api.mojom.TabsEventSpec = { $: {} };
mojo.internal.bindings.tabs_api.mojom.TabsSnapshotSpec = { $: {} };
mojo.internal.bindings.tabs_api.mojom.TabStripService = {};
mojo.internal.bindings.tabs_api.mojom.TabStripServiceSpec = { $ : {} };
mojo.internal.bindings.tabs_api.mojom.TabStripService.$interfaceName = 'tabs_api.mojom.TabStripService';
mojo.internal.bindings.tabs_api.mojom.TabStripService_GetTabs_ParamsSpec = { $: {} };
mojo.internal.bindings.tabs_api.mojom.TabStripService_GetTab_ParamsSpec = { $: {} };
mojo.internal.bindings.tabs_api.mojom.TabStripService_CreateTabAt_ParamsSpec = { $: {} };
mojo.internal.bindings.tabs_api.mojom.TabStripService_CloseTabs_ParamsSpec = { $: {} };
mojo.internal.bindings.tabs_api.mojom.TabStripService_ActivateTab_ParamsSpec = { $: {} };
mojo.internal.bindings.tabs_api.mojom.TabStripService_SetSelectedTabs_ParamsSpec = { $: {} };
mojo.internal.bindings.tabs_api.mojom.TabStripService_MoveNode_ParamsSpec = { $: {} };
mojo.internal.bindings.tabs_api.mojom.TabsObserver = {};
mojo.internal.bindings.tabs_api.mojom.TabsObserverSpec = { $ : {} };
mojo.internal.bindings.tabs_api.mojom.TabsObserver.$interfaceName = 'tabs_api.mojom.TabsObserver';
mojo.internal.bindings.tabs_api.mojom.TabsObserver_OnTabEvents_ParamsSpec = { $: {} };

// Union: TabsEvent
mojo.internal.Union(
    mojo.internal.bindings.tabs_api.mojom.TabsEventSpec, 'tabs_api.mojom.TabsEvent', {
      'arg_tabs_created_event': {
        'ordinal': 0,
        'type': mojo.internal.bindings.tabs_api.mojom.OnTabsCreatedEventSpec.$,
        'nullable': false,
      },
      'arg_tabs_closed_event': {
        'ordinal': 1,
        'type': mojo.internal.bindings.tabs_api.mojom.OnTabsClosedEventSpec.$,
        'nullable': false,
      },
      'arg_node_moved_event': {
        'ordinal': 2,
        'type': mojo.internal.bindings.tabs_api.mojom.OnNodeMovedEventSpec.$,
        'nullable': false,
      },
      'arg_data_changed_event': {
        'ordinal': 3,
        'type': mojo.internal.bindings.tabs_api.mojom.OnDataChangedEventSpec.$,
        'nullable': false,
      },
      'arg_collection_created_event': {
        'ordinal': 4,
        'type': mojo.internal.bindings.tabs_api.mojom.OnCollectionCreatedEventSpec.$,
        'nullable': false,
      },
    });

// Struct: TabsSnapshot
mojo.internal.Struct(
    mojo.internal.bindings.tabs_api.mojom.TabsSnapshotSpec, 'tabs_api.mojom.TabsSnapshot', [
      mojo.internal.StructField('arg_tab_strip', 0, 0, mojo.internal.bindings.tabs_api.mojom.ContainerSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_stream', 8, 0, mojo.internal.AssociatedInterfaceRequest(mojo.internal.bindings.tabs_api.mojom.TabsObserverRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: TabStripService
mojo.internal.Struct(
    mojo.internal.bindings.tabs_api.mojom.TabStripService_GetTabs_ParamsSpec, 'tabs_api.mojom.TabStripService_GetTabs_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.tabs_api.mojom.TabStripService_GetTab_ParamsSpec, 'tabs_api.mojom.TabStripService_GetTab_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.bindings.tabs_api.mojom.NodeIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tabs_api.mojom.TabStripService_CreateTabAt_ParamsSpec, 'tabs_api.mojom.TabStripService_CreateTabAt_Params', [
      mojo.internal.StructField('arg_pos', 0, 0, mojo.internal.bindings.tabs_api.mojom.PositionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.tabs_api.mojom.TabStripService_CloseTabs_ParamsSpec, 'tabs_api.mojom.TabStripService_CloseTabs_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.Array(mojo.internal.bindings.tabs_api.mojom.NodeIdSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tabs_api.mojom.TabStripService_ActivateTab_ParamsSpec, 'tabs_api.mojom.TabStripService_ActivateTab_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.bindings.tabs_api.mojom.NodeIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tabs_api.mojom.TabStripService_SetSelectedTabs_ParamsSpec, 'tabs_api.mojom.TabStripService_SetSelectedTabs_Params', [
      mojo.internal.StructField('arg_selection', 0, 0, mojo.internal.Array(mojo.internal.bindings.tabs_api.mojom.NodeIdSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_tab_to_activate', 8, 0, mojo.internal.bindings.tabs_api.mojom.NodeIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.tabs_api.mojom.TabStripService_MoveNode_ParamsSpec, 'tabs_api.mojom.TabStripService_MoveNode_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.bindings.tabs_api.mojom.NodeIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_position', 8, 0, mojo.internal.bindings.tabs_api.mojom.PositionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.tabs_api.mojom.TabStripServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.tabs_api.mojom.TabStripServiceRemote = class {
  static get $interfaceName() {
    return 'tabs_api.mojom.TabStripService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.tabs_api.mojom.TabStripServicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.tabs_api.mojom.TabStripServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getTabs() {
    return this.$.getTabs();
  }
  getTab(arg_id) {
    return this.$.getTab(arg_id);
  }
  createTabAt(arg_pos, arg_url) {
    return this.$.createTabAt(arg_pos, arg_url);
  }
  closeTabs(arg_id) {
    return this.$.closeTabs(arg_id);
  }
  activateTab(arg_id) {
    return this.$.activateTab(arg_id);
  }
  setSelectedTabs(arg_selection, arg_tab_to_activate) {
    return this.$.setSelectedTabs(arg_selection, arg_tab_to_activate);
  }
  moveNode(arg_id, arg_position) {
    return this.$.moveNode(arg_id, arg_position);
  }
};

mojo.internal.bindings.tabs_api.mojom.TabStripServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('tabs_api.mojom.TabStripService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getTabs() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.tabs_api.mojom.TabStripService_GetTabs_ParamsSpec,
      null,
      [],
      false);
  }

  getTab(arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.tabs_api.mojom.TabStripService_GetTab_ParamsSpec,
      null,
      [arg_id],
      false);
  }

  createTabAt(arg_pos, arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.tabs_api.mojom.TabStripService_CreateTabAt_ParamsSpec,
      null,
      [arg_pos, arg_url],
      false);
  }

  closeTabs(arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.tabs_api.mojom.TabStripService_CloseTabs_ParamsSpec,
      null,
      [arg_id],
      false);
  }

  activateTab(arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.tabs_api.mojom.TabStripService_ActivateTab_ParamsSpec,
      null,
      [arg_id],
      false);
  }

  setSelectedTabs(arg_selection, arg_tab_to_activate) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.tabs_api.mojom.TabStripService_SetSelectedTabs_ParamsSpec,
      null,
      [arg_selection, arg_tab_to_activate],
      false);
  }

  moveNode(arg_id, arg_position) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.tabs_api.mojom.TabStripService_MoveNode_ParamsSpec,
      null,
      [arg_id, arg_position],
      false);
  }

};

mojo.internal.bindings.tabs_api.mojom.TabStripService.getRemote = function() {
  let remote = new mojo.internal.bindings.tabs_api.mojom.TabStripServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tabs_api.mojom.TabStripService',
    'context');
  return remote.$;
};

mojo.internal.bindings.tabs_api.mojom.TabStripServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('tabs_api.mojom.TabStripService', [
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
        
        // Try Method 0: GetTabs
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tabs_api.mojom.TabStripService_GetTabs_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetTabs (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tabs_api.mojom.TabStripService_GetTab_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetTab (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: CreateTabAt
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tabs_api.mojom.TabStripService_CreateTabAt_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateTabAt (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: CloseTabs
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tabs_api.mojom.TabStripService_CloseTabs_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseTabs (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: ActivateTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tabs_api.mojom.TabStripService_ActivateTab_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ActivateTab (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetSelectedTabs
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tabs_api.mojom.TabStripService_SetSelectedTabs_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSelectedTabs (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: MoveNode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tabs_api.mojom.TabStripService_MoveNode_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MoveNode (6)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.tabs_api.mojom.TabStripService_GetTabs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getTabs');
          const result = this.impl.getTabs();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tabs_api.mojom.TabStripService_GetTab_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getTab');
          const result = this.impl.getTab(params.arg_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tabs_api.mojom.TabStripService_CreateTabAt_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createTabAt');
          const result = this.impl.createTabAt(params.arg_pos, params.arg_url);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tabs_api.mojom.TabStripService_CloseTabs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeTabs');
          const result = this.impl.closeTabs(params.arg_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tabs_api.mojom.TabStripService_ActivateTab_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.activateTab');
          const result = this.impl.activateTab(params.arg_id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tabs_api.mojom.TabStripService_SetSelectedTabs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setSelectedTabs');
          const result = this.impl.setSelectedTabs(params.arg_selection, params.arg_tab_to_activate);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tabs_api.mojom.TabStripService_MoveNode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.moveNode');
          const result = this.impl.moveNode(params.arg_id, params.arg_position);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.tabs_api.mojom.TabStripServiceReceiver = mojo.internal.bindings.tabs_api.mojom.TabStripServiceReceiver;

mojo.internal.bindings.tabs_api.mojom.TabStripServicePtr = mojo.internal.bindings.tabs_api.mojom.TabStripServiceRemote;
mojo.internal.bindings.tabs_api.mojom.TabStripServiceRequest = mojo.internal.bindings.tabs_api.mojom.TabStripServicePendingReceiver;


// Interface: TabsObserver
mojo.internal.Struct(
    mojo.internal.bindings.tabs_api.mojom.TabsObserver_OnTabEvents_ParamsSpec, 'tabs_api.mojom.TabsObserver_OnTabEvents_Params', [
      mojo.internal.StructField('arg_events', 0, 0, mojo.internal.Array(mojo.internal.bindings.tabs_api.mojom.TabsEventSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.tabs_api.mojom.TabsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.tabs_api.mojom.TabsObserverRemote = class {
  static get $interfaceName() {
    return 'tabs_api.mojom.TabsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.tabs_api.mojom.TabsObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.tabs_api.mojom.TabsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onTabEvents(arg_events) {
    return this.$.onTabEvents(arg_events);
  }
};

mojo.internal.bindings.tabs_api.mojom.TabsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('tabs_api.mojom.TabsObserver', [
      { explicit: null },
    ]);
  }

  onTabEvents(arg_events) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.tabs_api.mojom.TabsObserver_OnTabEvents_ParamsSpec,
      null,
      [arg_events],
      false);
  }

};

mojo.internal.bindings.tabs_api.mojom.TabsObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.tabs_api.mojom.TabsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tabs_api.mojom.TabsObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.tabs_api.mojom.TabsObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('tabs_api.mojom.TabsObserver', [
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
        
        // Try Method 0: OnTabEvents
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tabs_api.mojom.TabsObserver_OnTabEvents_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTabEvents (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.tabs_api.mojom.TabsObserver_OnTabEvents_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTabEvents');
          const result = this.impl.onTabEvents(params.arg_events);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.tabs_api.mojom.TabsObserverReceiver = mojo.internal.bindings.tabs_api.mojom.TabsObserverReceiver;

mojo.internal.bindings.tabs_api.mojom.TabsObserverPtr = mojo.internal.bindings.tabs_api.mojom.TabsObserverRemote;
mojo.internal.bindings.tabs_api.mojom.TabsObserverRequest = mojo.internal.bindings.tabs_api.mojom.TabsObserverPendingReceiver;

