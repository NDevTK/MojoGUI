// Auto-generated MojoJS binding
 // Source: chromium_src/components/remote_cocoa/common/menu.mojom
 // Module: remote_cocoa.mojom

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
 

 mojo.internal.bindings.remote_cocoa = mojo.internal.bindings.remote_cocoa || {};
mojo.internal.bindings.remote_cocoa.mojom = mojo.internal.bindings.remote_cocoa.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.skia = mojo.internal.bindings.skia || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};

mojo.internal.bindings.remote_cocoa.mojom.MenuItemSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.MenuItemCommonFieldsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.SubmenuMenuItemSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.MenuControllerParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.ContextMenuSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.MenuHost = {};
mojo.internal.bindings.remote_cocoa.mojom.MenuHost.$interfaceName = 'remote_cocoa.mojom.MenuHost';
mojo.internal.bindings.remote_cocoa.mojom.MenuHost_CommandActivated_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.MenuHost_MenuClosed_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.Menu = {};
mojo.internal.bindings.remote_cocoa.mojom.Menu.$interfaceName = 'remote_cocoa.mojom.Menu';
mojo.internal.bindings.remote_cocoa.mojom.Menu_Cancel_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.Menu_UpdateMenuItem_ParamsSpec = { $: {} };

// Union: MenuItem
mojo.internal.Union(
    mojo.internal.bindings.remote_cocoa.mojom.MenuItemSpec, 'remote_cocoa.mojom.MenuItem', {
      'arg_separator': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.internal.bindings.remote_cocoa.mojom.MenuItemCommonFieldsSpec.$,
        'nullable': false,
      },
      'arg_regular': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.remote_cocoa.mojom.MenuItemCommonFieldsSpec.$,
        'nullable': false,
      },
      'arg_submenu': {
        'ordinal': 2,
        'type': mojo.internal.bindings.mojo.internal.bindings.remote_cocoa.mojom.SubmenuMenuItemSpec.$,
        'nullable': false,
      },
    });

// Struct: MenuItemCommonFields
mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.MenuItemCommonFieldsSpec, 'remote_cocoa.mojom.MenuItemCommonFields', [
      mojo.internal.StructField('arg_label', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_icon', 8, 0, mojo.internal.bindings.gfx.mojom.ImageSkiaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_command_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_may_have_mnemonics', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_checked', 20, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_enabled', 20, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_visible', 20, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_alerted', 20, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_new_feature', 20, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SubmenuMenuItem
mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.SubmenuMenuItemSpec, 'remote_cocoa.mojom.SubmenuMenuItem', [
      mojo.internal.StructField('arg_common', 0, 0, mojo.internal.bindings.mojo.internal.bindings.remote_cocoa.mojom.MenuItemCommonFieldsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_children', 8, 0, mojo.internal.Array(mojo.internal.bindings.remote_cocoa.mojom.MenuItemSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: MenuControllerParams
mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.MenuControllerParamsSpec, 'remote_cocoa.mojom.MenuControllerParams', [
      mojo.internal.StructField('arg_badge_font', 0, 0, mojo.internal.bindings.remote_cocoa.mojom.FontSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_badge_color', 8, 0, mojo.internal.bindings.skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_badge_text_color', 16, 0, mojo.internal.bindings.skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_iph_dot_color', 24, 0, mojo.internal.bindings.skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_badge_horizontal_margin', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_badge_internal_padding', 36, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_badge_min_height', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_badge_radius', 44, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: ContextMenu
mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.ContextMenuSpec, 'remote_cocoa.mojom.ContextMenu', [
      mojo.internal.StructField('arg_items', 0, 0, mojo.internal.Array(mojo.internal.bindings.remote_cocoa.mojom.MenuItemSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_anchor', 8, 0, mojo.internal.bindings.gfx.mojom.PointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_target_view_id', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_params', 24, 0, mojo.internal.bindings.mojo.internal.bindings.remote_cocoa.mojom.MenuControllerParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: MenuHost
mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.MenuHost_CommandActivated_ParamsSpec, 'remote_cocoa.mojom.MenuHost_CommandActivated_Params', [
      mojo.internal.StructField('arg_command_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_event_flags', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.MenuHost_MenuClosed_ParamsSpec, 'remote_cocoa.mojom.MenuHost_MenuClosed_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.remote_cocoa.mojom.MenuHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.remote_cocoa.mojom.MenuHostRemote = class {
  static get $interfaceName() {
    return 'remote_cocoa.mojom.MenuHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.remote_cocoa.mojom.MenuHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.remote_cocoa.mojom.MenuHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  commandActivated(arg_command_id, arg_event_flags) {
    return this.$.commandActivated(arg_command_id, arg_event_flags);
  }
  menuClosed() {
    return this.$.menuClosed();
  }
};

mojo.internal.bindings.remote_cocoa.mojom.MenuHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MenuHost', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  commandActivated(arg_command_id, arg_event_flags) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.MenuHost_CommandActivated_ParamsSpec,
      null,
      [arg_command_id, arg_event_flags],
      false);
  }

  menuClosed() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.MenuHost_MenuClosed_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.remote_cocoa.mojom.MenuHost.getRemote = function() {
  let remote = new mojo.internal.bindings.remote_cocoa.mojom.MenuHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remote_cocoa.mojom.MenuHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.remote_cocoa.mojom.MenuHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MenuHost', [
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
        
        // Try Method 0: CommandActivated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.MenuHost_CommandActivated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CommandActivated (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: MenuClosed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.MenuHost_MenuClosed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MenuClosed (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.MenuHost_CommandActivated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.commandActivated');
          const result = this.impl.commandActivated(params.arg_command_id, params.arg_event_flags);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.MenuHost_MenuClosed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.menuClosed');
          const result = this.impl.menuClosed();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.remote_cocoa.mojom.MenuHostReceiver = mojo.internal.bindings.remote_cocoa.mojom.MenuHostReceiver;

mojo.internal.bindings.remote_cocoa.mojom.MenuHostPtr = mojo.internal.bindings.remote_cocoa.mojom.MenuHostRemote;
mojo.internal.bindings.remote_cocoa.mojom.MenuHostRequest = mojo.internal.bindings.remote_cocoa.mojom.MenuHostPendingReceiver;


// Interface: Menu
mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.Menu_Cancel_ParamsSpec, 'remote_cocoa.mojom.Menu_Cancel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.Menu_UpdateMenuItem_ParamsSpec, 'remote_cocoa.mojom.Menu_UpdateMenuItem_Params', [
      mojo.internal.StructField('arg_label', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_command_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_enabled', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_visible', 12, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.remote_cocoa.mojom.MenuPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.remote_cocoa.mojom.MenuRemote = class {
  static get $interfaceName() {
    return 'remote_cocoa.mojom.Menu';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.remote_cocoa.mojom.MenuPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.remote_cocoa.mojom.MenuRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  cancel() {
    return this.$.cancel();
  }
  updateMenuItem(arg_command_id, arg_enabled, arg_visible, arg_label) {
    return this.$.updateMenuItem(arg_command_id, arg_enabled, arg_visible, arg_label);
  }
};

mojo.internal.bindings.remote_cocoa.mojom.MenuRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Menu', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  cancel() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.Menu_Cancel_ParamsSpec,
      null,
      [],
      false);
  }

  updateMenuItem(arg_command_id, arg_enabled, arg_visible, arg_label) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.Menu_UpdateMenuItem_ParamsSpec,
      null,
      [arg_command_id, arg_enabled, arg_visible, arg_label],
      false);
  }

};

mojo.internal.bindings.remote_cocoa.mojom.Menu.getRemote = function() {
  let remote = new mojo.internal.bindings.remote_cocoa.mojom.MenuRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remote_cocoa.mojom.Menu',
    'context');
  return remote.$;
};

mojo.internal.bindings.remote_cocoa.mojom.MenuReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Menu', [
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
        
        // Try Method 0: Cancel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.Menu_Cancel_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Cancel (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: UpdateMenuItem
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.Menu_UpdateMenuItem_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateMenuItem (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.Menu_Cancel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cancel');
          const result = this.impl.cancel();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.Menu_UpdateMenuItem_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateMenuItem');
          const result = this.impl.updateMenuItem(params.arg_command_id, params.arg_enabled, params.arg_visible, params.arg_label);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.remote_cocoa.mojom.MenuReceiver = mojo.internal.bindings.remote_cocoa.mojom.MenuReceiver;

mojo.internal.bindings.remote_cocoa.mojom.MenuPtr = mojo.internal.bindings.remote_cocoa.mojom.MenuRemote;
mojo.internal.bindings.remote_cocoa.mojom.MenuRequest = mojo.internal.bindings.remote_cocoa.mojom.MenuPendingReceiver;

