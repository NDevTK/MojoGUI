// Auto-generated MojoJS binding
 // Source: chromium_src/third_party/blink/public/mojom/notifications/notification_service.mojom
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
 

 mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};

mojo.internal.bindings.blink.mojom.PersistentNotificationErrorSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.NonPersistentNotificationListener = {};
mojo.internal.bindings.blink.mojom.NonPersistentNotificationListenerSpec = { $ : {} };
mojo.internal.bindings.blink.mojom.NonPersistentNotificationListener.$interfaceName = 'blink.mojom.NonPersistentNotificationListener';
mojo.internal.bindings.blink.mojom.NonPersistentNotificationListener_OnShow_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.NonPersistentNotificationListener_OnClick_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.NonPersistentNotificationListener_OnClick_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.NonPersistentNotificationListener_OnClose_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.NonPersistentNotificationListener_OnClose_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.NotificationService = {};
mojo.internal.bindings.blink.mojom.NotificationServiceSpec = { $ : {} };
mojo.internal.bindings.blink.mojom.NotificationService.$interfaceName = 'blink.mojom.NotificationService';
mojo.internal.bindings.blink.mojom.NotificationService_GetPermissionStatus_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.NotificationService_GetPermissionStatus_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.NotificationService_DisplayNonPersistentNotification_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.NotificationService_CloseNonPersistentNotification_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.NotificationService_DisplayPersistentNotification_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.NotificationService_DisplayPersistentNotification_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.NotificationService_ClosePersistentNotification_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.NotificationService_GetNotifications_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.NotificationService_GetNotifications_ResponseParamsSpec = { $: {} };

// Enum: PersistentNotificationError
mojo.internal.bindings.blink.mojom.PersistentNotificationError = {
  NONE: 0,
  INTERNAL_ERROR: 1,
  PERMISSION_DENIED: 2,
};

// Interface: NonPersistentNotificationListener
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.NonPersistentNotificationListener_OnShow_ParamsSpec, 'blink.mojom.NonPersistentNotificationListener_OnShow_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.NonPersistentNotificationListener_OnClick_ParamsSpec, 'blink.mojom.NonPersistentNotificationListener_OnClick_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.NonPersistentNotificationListener_OnClick_ResponseParamsSpec, 'blink.mojom.NonPersistentNotificationListener_OnClick_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.NonPersistentNotificationListener_OnClose_ParamsSpec, 'blink.mojom.NonPersistentNotificationListener_OnClose_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.NonPersistentNotificationListener_OnClose_ResponseParamsSpec, 'blink.mojom.NonPersistentNotificationListener_OnClose_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.bindings.blink.mojom.NonPersistentNotificationListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.NonPersistentNotificationListenerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.NonPersistentNotificationListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.NonPersistentNotificationListenerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.NonPersistentNotificationListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onShow() {
    return this.$.onShow();
  }
  onClick() {
    return this.$.onClick();
  }
  onClose() {
    return this.$.onClose();
  }
};

mojo.internal.bindings.blink.mojom.NonPersistentNotificationListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('blink.mojom.NonPersistentNotificationListener', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onShow() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.NonPersistentNotificationListener_OnShow_ParamsSpec,
      null,
      [],
      false);
  }

  onClick() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.NonPersistentNotificationListener_OnClick_ParamsSpec,
      mojo.internal.bindings.blink.mojom.NonPersistentNotificationListener_OnClick_ResponseParamsSpec,
      [],
      false);
  }

  onClose() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.NonPersistentNotificationListener_OnClose_ParamsSpec,
      mojo.internal.bindings.blink.mojom.NonPersistentNotificationListener_OnClose_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.blink.mojom.NonPersistentNotificationListener.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.NonPersistentNotificationListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.NonPersistentNotificationListener',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.NonPersistentNotificationListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('blink.mojom.NonPersistentNotificationListener', [
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
        
        // Try Method 0: OnShow
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.NonPersistentNotificationListener_OnShow_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnShow (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnClick
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.NonPersistentNotificationListener_OnClick_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnClick (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnClose
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.NonPersistentNotificationListener_OnClose_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnClose (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.NonPersistentNotificationListener_OnShow_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onShow');
          const result = this.impl.onShow();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.NonPersistentNotificationListener_OnClick_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onClick');
          const result = this.impl.onClick();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.NonPersistentNotificationListener_OnClick_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OnClick FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.NonPersistentNotificationListener_OnClose_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onClose');
          const result = this.impl.onClose();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.NonPersistentNotificationListener_OnClose_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OnClose FAILED:', e));
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.NonPersistentNotificationListenerReceiver = mojo.internal.bindings.blink.mojom.NonPersistentNotificationListenerReceiver;

mojo.internal.bindings.blink.mojom.NonPersistentNotificationListenerPtr = mojo.internal.bindings.blink.mojom.NonPersistentNotificationListenerRemote;
mojo.internal.bindings.blink.mojom.NonPersistentNotificationListenerRequest = mojo.internal.bindings.blink.mojom.NonPersistentNotificationListenerPendingReceiver;


// Interface: NotificationService
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.NotificationService_GetPermissionStatus_ParamsSpec, 'blink.mojom.NotificationService_GetPermissionStatus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.NotificationService_GetPermissionStatus_ResponseParamsSpec, 'blink.mojom.NotificationService_GetPermissionStatus_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.blink.mojom.PermissionStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.NotificationService_DisplayNonPersistentNotification_ParamsSpec, 'blink.mojom.NotificationService_DisplayNonPersistentNotification_Params', [
      mojo.internal.StructField('arg_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_notification_data', 8, 0, mojo.internal.bindings.blink.mojom.NotificationDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_notification_resources', 16, 0, mojo.internal.bindings.blink.mojom.NotificationResourcesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_event_listener', 24, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.NonPersistentNotificationListenerRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.NotificationService_CloseNonPersistentNotification_ParamsSpec, 'blink.mojom.NotificationService_CloseNonPersistentNotification_Params', [
      mojo.internal.StructField('arg_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.NotificationService_DisplayPersistentNotification_ParamsSpec, 'blink.mojom.NotificationService_DisplayPersistentNotification_Params', [
      mojo.internal.StructField('arg_service_worker_registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_notification_data', 8, 0, mojo.internal.bindings.blink.mojom.NotificationDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_notification_resources', 16, 0, mojo.internal.bindings.blink.mojom.NotificationResourcesSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.NotificationService_DisplayPersistentNotification_ResponseParamsSpec, 'blink.mojom.NotificationService_DisplayPersistentNotification_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.blink.mojom.PersistentNotificationErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.NotificationService_ClosePersistentNotification_ParamsSpec, 'blink.mojom.NotificationService_ClosePersistentNotification_Params', [
      mojo.internal.StructField('arg_notification_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.NotificationService_GetNotifications_ParamsSpec, 'blink.mojom.NotificationService_GetNotifications_Params', [
      mojo.internal.StructField('arg_service_worker_registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_filter_tag', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_include_triggered', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.NotificationService_GetNotifications_ResponseParamsSpec, 'blink.mojom.NotificationService_GetNotifications_ResponseParams', [
      mojo.internal.StructField('arg_notification_ids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_notification_datas', 8, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.NotificationDataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.blink.mojom.NotificationServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.NotificationServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.NotificationService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.NotificationServicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.NotificationServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getPermissionStatus() {
    return this.$.getPermissionStatus();
  }
  displayNonPersistentNotification(arg_token, arg_notification_data, arg_notification_resources, arg_event_listener) {
    return this.$.displayNonPersistentNotification(arg_token, arg_notification_data, arg_notification_resources, arg_event_listener);
  }
  closeNonPersistentNotification(arg_token) {
    return this.$.closeNonPersistentNotification(arg_token);
  }
  displayPersistentNotification(arg_service_worker_registration_id, arg_notification_data, arg_notification_resources) {
    return this.$.displayPersistentNotification(arg_service_worker_registration_id, arg_notification_data, arg_notification_resources);
  }
  closePersistentNotification(arg_notification_id) {
    return this.$.closePersistentNotification(arg_notification_id);
  }
  getNotifications(arg_service_worker_registration_id, arg_filter_tag, arg_include_triggered) {
    return this.$.getNotifications(arg_service_worker_registration_id, arg_filter_tag, arg_include_triggered);
  }
};

mojo.internal.bindings.blink.mojom.NotificationServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('blink.mojom.NotificationService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getPermissionStatus() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.NotificationService_GetPermissionStatus_ParamsSpec,
      mojo.internal.bindings.blink.mojom.NotificationService_GetPermissionStatus_ResponseParamsSpec,
      [],
      false);
  }

  displayNonPersistentNotification(arg_token, arg_notification_data, arg_notification_resources, arg_event_listener) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.NotificationService_DisplayNonPersistentNotification_ParamsSpec,
      null,
      [arg_token, arg_notification_data, arg_notification_resources, arg_event_listener],
      false);
  }

  closeNonPersistentNotification(arg_token) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.NotificationService_CloseNonPersistentNotification_ParamsSpec,
      null,
      [arg_token],
      false);
  }

  displayPersistentNotification(arg_service_worker_registration_id, arg_notification_data, arg_notification_resources) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.NotificationService_DisplayPersistentNotification_ParamsSpec,
      mojo.internal.bindings.blink.mojom.NotificationService_DisplayPersistentNotification_ResponseParamsSpec,
      [arg_service_worker_registration_id, arg_notification_data, arg_notification_resources],
      false);
  }

  closePersistentNotification(arg_notification_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.blink.mojom.NotificationService_ClosePersistentNotification_ParamsSpec,
      null,
      [arg_notification_id],
      false);
  }

  getNotifications(arg_service_worker_registration_id, arg_filter_tag, arg_include_triggered) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.blink.mojom.NotificationService_GetNotifications_ParamsSpec,
      mojo.internal.bindings.blink.mojom.NotificationService_GetNotifications_ResponseParamsSpec,
      [arg_service_worker_registration_id, arg_filter_tag, arg_include_triggered],
      false);
  }

};

mojo.internal.bindings.blink.mojom.NotificationService.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.NotificationServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.NotificationService',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.NotificationServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('blink.mojom.NotificationService', [
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
        
        // Try Method 0: GetPermissionStatus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.NotificationService_GetPermissionStatus_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPermissionStatus (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DisplayNonPersistentNotification
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.NotificationService_DisplayNonPersistentNotification_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisplayNonPersistentNotification (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: CloseNonPersistentNotification
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.NotificationService_CloseNonPersistentNotification_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseNonPersistentNotification (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: DisplayPersistentNotification
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.NotificationService_DisplayPersistentNotification_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisplayPersistentNotification (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: ClosePersistentNotification
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.NotificationService_ClosePersistentNotification_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClosePersistentNotification (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: GetNotifications
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.NotificationService_GetNotifications_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNotifications (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.NotificationService_GetPermissionStatus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPermissionStatus');
          const result = this.impl.getPermissionStatus();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.NotificationService_GetPermissionStatus_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetPermissionStatus FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.NotificationService_DisplayNonPersistentNotification_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.displayNonPersistentNotification');
          const result = this.impl.displayNonPersistentNotification(params.arg_token, params.arg_notification_data, params.arg_notification_resources, params.arg_event_listener);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.NotificationService_CloseNonPersistentNotification_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeNonPersistentNotification');
          const result = this.impl.closeNonPersistentNotification(params.arg_token);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.NotificationService_DisplayPersistentNotification_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.displayPersistentNotification');
          const result = this.impl.displayPersistentNotification(params.arg_service_worker_registration_id, params.arg_notification_data, params.arg_notification_resources);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.NotificationService_DisplayPersistentNotification_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DisplayPersistentNotification FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.NotificationService_ClosePersistentNotification_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closePersistentNotification');
          const result = this.impl.closePersistentNotification(params.arg_notification_id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.NotificationService_GetNotifications_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNotifications');
          const result = this.impl.getNotifications(params.arg_service_worker_registration_id, params.arg_filter_tag, params.arg_include_triggered);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.NotificationService_GetNotifications_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetNotifications FAILED:', e));
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.NotificationServiceReceiver = mojo.internal.bindings.blink.mojom.NotificationServiceReceiver;

mojo.internal.bindings.blink.mojom.NotificationServicePtr = mojo.internal.bindings.blink.mojom.NotificationServiceRemote;
mojo.internal.bindings.blink.mojom.NotificationServiceRequest = mojo.internal.bindings.blink.mojom.NotificationServicePendingReceiver;

