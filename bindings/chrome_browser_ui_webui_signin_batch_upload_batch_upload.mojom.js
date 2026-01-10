// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/signin/batch_upload/batch_upload.mojom
// Module: batch_upload.mojom

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
var batch_upload = batch_upload || {};
batch_upload.mojom = batch_upload.mojom || {};

batch_upload.mojom.DataItemSpec = { $: {} };
batch_upload.mojom.DataContainerSpec = { $: {} };
batch_upload.mojom.BatchUploadAccountInfoSpec = { $: {} };
batch_upload.mojom.BatchUploadDataSpec = { $: {} };
batch_upload.mojom.PageHandlerFactory = {};
batch_upload.mojom.PageHandlerFactory.$interfaceName = 'batch_upload.mojom.PageHandlerFactory';
batch_upload.mojom.PageHandlerFactory_CreateBatchUploadHandler_ParamsSpec = { $: {} };
batch_upload.mojom.PageHandler = {};
batch_upload.mojom.PageHandler.$interfaceName = 'batch_upload.mojom.PageHandler';
batch_upload.mojom.PageHandler_UpdateViewHeight_ParamsSpec = { $: {} };
batch_upload.mojom.PageHandler_SaveToAccount_ParamsSpec = { $: {} };
batch_upload.mojom.PageHandler_Close_ParamsSpec = { $: {} };
batch_upload.mojom.Page = {};
batch_upload.mojom.Page.$interfaceName = 'batch_upload.mojom.Page';
batch_upload.mojom.Page_SendBatchUploadData_ParamsSpec = { $: {} };

// Struct: DataItem
mojo.internal.Struct(
    batch_upload.mojom.DataItemSpec, 'batch_upload.mojom.DataItem', [
      mojo.internal.StructField('icon_url', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('subtitle', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: DataContainer
mojo.internal.Struct(
    batch_upload.mojom.DataContainerSpec, 'batch_upload.mojom.DataContainer', [
      mojo.internal.StructField('section_title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('data_items', 8, 0, mojo.internal.Array(batch_upload.mojom.DataItemSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('is_theme', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: BatchUploadAccountInfo
mojo.internal.Struct(
    batch_upload.mojom.BatchUploadAccountInfoSpec, 'batch_upload.mojom.BatchUploadAccountInfo', [
      mojo.internal.StructField('email', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('data_picture_url', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BatchUploadData
mojo.internal.Struct(
    batch_upload.mojom.BatchUploadDataSpec, 'batch_upload.mojom.BatchUploadData', [
      mojo.internal.StructField('account_info', 0, 0, batch_upload.mojom.BatchUploadAccountInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('dialog_subtitle', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('data_containers', 16, 0, mojo.internal.Array(batch_upload.mojom.DataContainerSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    batch_upload.mojom.PageHandlerFactory_CreateBatchUploadHandler_ParamsSpec, 'batch_upload.mojom.PageHandlerFactory_CreateBatchUploadHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(batch_upload.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(batch_upload.mojom.PageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

batch_upload.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

batch_upload.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'batch_upload.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      batch_upload.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new batch_upload.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

batch_upload.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createBatchUploadHandler(page, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      batch_upload.mojom.PageHandlerFactory_CreateBatchUploadHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

batch_upload.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new batch_upload.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'batch_upload.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

batch_upload.mojom.PageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
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
        
        // Try Method 0: CreateBatchUploadHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(batch_upload.mojom.PageHandlerFactory_CreateBatchUploadHandler_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateBatchUploadHandler (0)');
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
          const params = decoder.decodeStructInline(batch_upload.mojom.PageHandlerFactory_CreateBatchUploadHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createBatchUploadHandler');
          const result = this.impl.createBatchUploadHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

batch_upload.mojom.PageHandlerFactoryReceiver = batch_upload.mojom.PageHandlerFactoryReceiver;

batch_upload.mojom.PageHandlerFactoryPtr = batch_upload.mojom.PageHandlerFactoryRemote;
batch_upload.mojom.PageHandlerFactoryRequest = batch_upload.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    batch_upload.mojom.PageHandler_UpdateViewHeight_ParamsSpec, 'batch_upload.mojom.PageHandler_UpdateViewHeight_Params', [
      mojo.internal.StructField('height', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    batch_upload.mojom.PageHandler_SaveToAccount_ParamsSpec, 'batch_upload.mojom.PageHandler_SaveToAccount_Params', [
      mojo.internal.StructField('idsToMove', 0, 0, mojo.internal.Array(mojo.internal.Array(mojo.internal.Int32, false), false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    batch_upload.mojom.PageHandler_Close_ParamsSpec, 'batch_upload.mojom.PageHandler_Close_Params', [
    ],
    [[0, 8]]);

batch_upload.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

batch_upload.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'batch_upload.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      batch_upload.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new batch_upload.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

batch_upload.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  updateViewHeight(height) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      batch_upload.mojom.PageHandler_UpdateViewHeight_ParamsSpec,
      null,
      [height],
      false);
  }

  saveToAccount(idsToMove) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      batch_upload.mojom.PageHandler_SaveToAccount_ParamsSpec,
      null,
      [idsToMove],
      false);
  }

  close() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      batch_upload.mojom.PageHandler_Close_ParamsSpec,
      null,
      [],
      false);
  }

};

batch_upload.mojom.PageHandler.getRemote = function() {
  let remote = new batch_upload.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'batch_upload.mojom.PageHandler',
    'context');
  return remote.$;
};

batch_upload.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
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
        
        // Try Method 0: UpdateViewHeight
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(batch_upload.mojom.PageHandler_UpdateViewHeight_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateViewHeight (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SaveToAccount
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(batch_upload.mojom.PageHandler_SaveToAccount_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SaveToAccount (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Close
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(batch_upload.mojom.PageHandler_Close_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Close (2)');
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
          const params = decoder.decodeStructInline(batch_upload.mojom.PageHandler_UpdateViewHeight_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateViewHeight');
          const result = this.impl.updateViewHeight(params.height);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(batch_upload.mojom.PageHandler_SaveToAccount_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.saveToAccount');
          const result = this.impl.saveToAccount(params.idsToMove);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(batch_upload.mojom.PageHandler_Close_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.close');
          const result = this.impl.close();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

batch_upload.mojom.PageHandlerReceiver = batch_upload.mojom.PageHandlerReceiver;

batch_upload.mojom.PageHandlerPtr = batch_upload.mojom.PageHandlerRemote;
batch_upload.mojom.PageHandlerRequest = batch_upload.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    batch_upload.mojom.Page_SendBatchUploadData_ParamsSpec, 'batch_upload.mojom.Page_SendBatchUploadData_Params', [
      mojo.internal.StructField('data', 0, 0, batch_upload.mojom.BatchUploadDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

batch_upload.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

batch_upload.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'batch_upload.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      batch_upload.mojom.PagePendingReceiver,
      handle);
    this.$ = new batch_upload.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

batch_upload.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
    ]);
  }

  sendBatchUploadData(data) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      batch_upload.mojom.Page_SendBatchUploadData_ParamsSpec,
      null,
      [data],
      false);
  }

};

batch_upload.mojom.Page.getRemote = function() {
  let remote = new batch_upload.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'batch_upload.mojom.Page',
    'context');
  return remote.$;
};

batch_upload.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Page', [
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
        
        // Try Method 0: SendBatchUploadData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(batch_upload.mojom.Page_SendBatchUploadData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendBatchUploadData (0)');
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
          const params = decoder.decodeStructInline(batch_upload.mojom.Page_SendBatchUploadData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendBatchUploadData');
          const result = this.impl.sendBatchUploadData(params.data);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

batch_upload.mojom.PageReceiver = batch_upload.mojom.PageReceiver;

batch_upload.mojom.PagePtr = batch_upload.mojom.PageRemote;
batch_upload.mojom.PageRequest = batch_upload.mojom.PagePendingReceiver;

