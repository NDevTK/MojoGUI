// Auto-generated MojoJS binding
 // Source: chromium_src/chrome/services/mac_notifications/public/mojom/mac_notifications.mojom
 // Module: mac_notifications.mojom

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
 

 mojo.internal.bindings.mac_notifications = mojo.internal.bindings.mac_notifications || {};
mojo.internal.bindings.mac_notifications.mojom = mojo.internal.bindings.mac_notifications.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.sandbox = mojo.internal.bindings.sandbox || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.mac_notifications.mojom.NotificationOperationSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.mac_notifications.mojom.RequestPermissionResultSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.mac_notifications.mojom.PermissionStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.mac_notifications.mojom.ProfileIdentifierSpec = { $: {} };
mojo.internal.bindings.mac_notifications.mojom.NotificationIdentifierSpec = { $: {} };
mojo.internal.bindings.mac_notifications.mojom.NotificationMetadataSpec = { $: {} };
mojo.internal.bindings.mac_notifications.mojom.NotificationActionInfoSpec = { $: {} };
mojo.internal.bindings.mac_notifications.mojom.NotificationActionButtonSpec = { $: {} };
mojo.internal.bindings.mac_notifications.mojom.NotificationSpec = { $: {} };
mojo.internal.bindings.mac_notifications.mojom.MacNotificationService = {};
mojo.internal.bindings.mac_notifications.mojom.MacNotificationService.$interfaceName = 'mac_notifications.mojom.MacNotificationService';
mojo.internal.bindings.mac_notifications.mojom.MacNotificationService_DisplayNotification_ParamsSpec = { $: {} };
mojo.internal.bindings.mac_notifications.mojom.MacNotificationService_GetDisplayedNotifications_ParamsSpec = { $: {} };
mojo.internal.bindings.mac_notifications.mojom.MacNotificationService_GetDisplayedNotifications_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.mac_notifications.mojom.MacNotificationService_CloseNotification_ParamsSpec = { $: {} };
mojo.internal.bindings.mac_notifications.mojom.MacNotificationService_CloseNotificationsForProfile_ParamsSpec = { $: {} };
mojo.internal.bindings.mac_notifications.mojom.MacNotificationService_CloseAllNotifications_ParamsSpec = { $: {} };
mojo.internal.bindings.mac_notifications.mojom.MacNotificationService_OkayToTerminateService_ParamsSpec = { $: {} };
mojo.internal.bindings.mac_notifications.mojom.MacNotificationService_OkayToTerminateService_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.mac_notifications.mojom.MacNotificationActionHandler = {};
mojo.internal.bindings.mac_notifications.mojom.MacNotificationActionHandler.$interfaceName = 'mac_notifications.mojom.MacNotificationActionHandler';
mojo.internal.bindings.mac_notifications.mojom.MacNotificationActionHandler_OnNotificationAction_ParamsSpec = { $: {} };
mojo.internal.bindings.mac_notifications.mojom.MacNotificationProvider = {};
mojo.internal.bindings.mac_notifications.mojom.MacNotificationProvider.$interfaceName = 'mac_notifications.mojom.MacNotificationProvider';
mojo.internal.bindings.mac_notifications.mojom.MacNotificationProvider_BindNotificationService_ParamsSpec = { $: {} };

// Enum: NotificationOperation
mojo.internal.bindings.mac_notifications.mojom.NotificationOperation = {
  kClick: 0,
  kClose: 1,
  kSettings: 2,
};

// Enum: RequestPermissionResult
mojo.internal.bindings.mac_notifications.mojom.RequestPermissionResult = {
  kRequestFailed: 0,
  kPermissionDenied: 1,
  kPermissionGranted: 2,
  kPermissionPreviouslyDenied: 3,
  kPermissionPreviouslyGranted: 4,
};

// Enum: PermissionStatus
mojo.internal.bindings.mac_notifications.mojom.PermissionStatus = {
  kNotDetermined: 1,
  kPromptPending: 2,
  kDenied: 3,
  kGranted: 4,
};

// Struct: ProfileIdentifier
mojo.internal.Struct(
    mojo.internal.bindings.mac_notifications.mojom.ProfileIdentifierSpec, 'mac_notifications.mojom.ProfileIdentifier', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_incognito', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: NotificationIdentifier
mojo.internal.Struct(
    mojo.internal.bindings.mac_notifications.mojom.NotificationIdentifierSpec, 'mac_notifications.mojom.NotificationIdentifier', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_profile', 8, 0, mojo.internal.bindings.mojo.internal.bindings.mac_notifications.mojom.ProfileIdentifierSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: NotificationMetadata
mojo.internal.Struct(
    mojo.internal.bindings.mac_notifications.mojom.NotificationMetadataSpec, 'mac_notifications.mojom.NotificationMetadata', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.mac_notifications.mojom.NotificationIdentifierSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_origin_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_user_data_dir', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: NotificationActionInfo
mojo.internal.Struct(
    mojo.internal.bindings.mac_notifications.mojom.NotificationActionInfoSpec, 'mac_notifications.mojom.NotificationActionInfo', [
      mojo.internal.StructField('arg_meta', 0, 0, mojo.internal.bindings.mojo.internal.bindings.mac_notifications.mojom.NotificationMetadataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_operation', 8, 0, mojo.internal.bindings.mojo.internal.bindings.mac_notifications.mojom.NotificationOperationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_reply', 16, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_button_index', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: NotificationActionButton
mojo.internal.Struct(
    mojo.internal.bindings.mac_notifications.mojom.NotificationActionButtonSpec, 'mac_notifications.mojom.NotificationActionButton', [
      mojo.internal.StructField('arg_title', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_placeholder', 8, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Notification
mojo.internal.Struct(
    mojo.internal.bindings.mac_notifications.mojom.NotificationSpec, 'mac_notifications.mojom.Notification', [
      mojo.internal.StructField('arg_meta', 0, 0, mojo.internal.bindings.mojo.internal.bindings.mac_notifications.mojom.NotificationMetadataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_title', 8, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_subtitle', 16, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_body', 24, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_buttons', 32, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.mac_notifications.mojom.NotificationActionButtonSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_icon', 40, 0, mojo.internal.bindings.gfx.mojom.ImageSkiaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_renotify', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_show_settings_button', 48, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

// Interface: MacNotificationService
mojo.internal.Struct(
    mojo.internal.bindings.mac_notifications.mojom.MacNotificationService_DisplayNotification_ParamsSpec, 'mac_notifications.mojom.MacNotificationService_DisplayNotification_Params', [
      mojo.internal.StructField('arg_notification', 0, 0, mojo.internal.bindings.mojo.internal.bindings.mac_notifications.mojom.NotificationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.mac_notifications.mojom.MacNotificationService_GetDisplayedNotifications_ParamsSpec, 'mac_notifications.mojom.MacNotificationService_GetDisplayedNotifications_Params', [
      mojo.internal.StructField('arg_profile', 0, 0, mojo.internal.bindings.mojo.internal.bindings.mac_notifications.mojom.ProfileIdentifierSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_origin', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.mac_notifications.mojom.MacNotificationService_GetDisplayedNotifications_ResponseParamsSpec, 'mac_notifications.mojom.MacNotificationService_GetDisplayedNotifications_ResponseParams', [
      mojo.internal.StructField('arg_notifications', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.mac_notifications.mojom.NotificationIdentifierSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.mac_notifications.mojom.MacNotificationService_CloseNotification_ParamsSpec, 'mac_notifications.mojom.MacNotificationService_CloseNotification_Params', [
      mojo.internal.StructField('arg_identifier', 0, 0, mojo.internal.bindings.mojo.internal.bindings.mac_notifications.mojom.NotificationIdentifierSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.mac_notifications.mojom.MacNotificationService_CloseNotificationsForProfile_ParamsSpec, 'mac_notifications.mojom.MacNotificationService_CloseNotificationsForProfile_Params', [
      mojo.internal.StructField('arg_profile', 0, 0, mojo.internal.bindings.mojo.internal.bindings.mac_notifications.mojom.ProfileIdentifierSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.mac_notifications.mojom.MacNotificationService_CloseAllNotifications_ParamsSpec, 'mac_notifications.mojom.MacNotificationService_CloseAllNotifications_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.mac_notifications.mojom.MacNotificationService_OkayToTerminateService_ParamsSpec, 'mac_notifications.mojom.MacNotificationService_OkayToTerminateService_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.mac_notifications.mojom.MacNotificationService_OkayToTerminateService_ResponseParamsSpec, 'mac_notifications.mojom.MacNotificationService_OkayToTerminateService_ResponseParams', [
      mojo.internal.StructField('arg_can_terminate', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.mac_notifications.mojom.MacNotificationServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.mac_notifications.mojom.MacNotificationServiceRemote = class {
  static get $interfaceName() {
    return 'mac_notifications.mojom.MacNotificationService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.mac_notifications.mojom.MacNotificationServicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.mac_notifications.mojom.MacNotificationServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  displayNotification(arg_notification) {
    return this.$.displayNotification(arg_notification);
  }
  getDisplayedNotifications(arg_profile, arg_origin) {
    return this.$.getDisplayedNotifications(arg_profile, arg_origin);
  }
  closeNotification(arg_identifier) {
    return this.$.closeNotification(arg_identifier);
  }
  closeNotificationsForProfile(arg_profile) {
    return this.$.closeNotificationsForProfile(arg_profile);
  }
  closeAllNotifications() {
    return this.$.closeAllNotifications();
  }
  okayToTerminateService() {
    return this.$.okayToTerminateService();
  }
};

mojo.internal.bindings.mac_notifications.mojom.MacNotificationServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MacNotificationService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  displayNotification(arg_notification) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.mac_notifications.mojom.MacNotificationService_DisplayNotification_ParamsSpec,
      null,
      [arg_notification],
      false);
  }

  getDisplayedNotifications(arg_profile, arg_origin) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.mac_notifications.mojom.MacNotificationService_GetDisplayedNotifications_ParamsSpec,
      mojo.internal.bindings.mac_notifications.mojom.MacNotificationService_GetDisplayedNotifications_ResponseParamsSpec,
      [arg_profile, arg_origin],
      false);
  }

  closeNotification(arg_identifier) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.mac_notifications.mojom.MacNotificationService_CloseNotification_ParamsSpec,
      null,
      [arg_identifier],
      false);
  }

  closeNotificationsForProfile(arg_profile) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.mac_notifications.mojom.MacNotificationService_CloseNotificationsForProfile_ParamsSpec,
      null,
      [arg_profile],
      false);
  }

  closeAllNotifications() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.mac_notifications.mojom.MacNotificationService_CloseAllNotifications_ParamsSpec,
      null,
      [],
      false);
  }

  okayToTerminateService() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.mac_notifications.mojom.MacNotificationService_OkayToTerminateService_ParamsSpec,
      mojo.internal.bindings.mac_notifications.mojom.MacNotificationService_OkayToTerminateService_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.mac_notifications.mojom.MacNotificationService.getRemote = function() {
  let remote = new mojo.internal.bindings.mac_notifications.mojom.MacNotificationServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mac_notifications.mojom.MacNotificationService',
    'context');
  return remote.$;
};

mojo.internal.bindings.mac_notifications.mojom.MacNotificationServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MacNotificationService', [
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
        
        // Try Method 0: DisplayNotification
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.mac_notifications.mojom.MacNotificationService_DisplayNotification_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisplayNotification (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetDisplayedNotifications
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.mac_notifications.mojom.MacNotificationService_GetDisplayedNotifications_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDisplayedNotifications (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: CloseNotification
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.mac_notifications.mojom.MacNotificationService_CloseNotification_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseNotification (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: CloseNotificationsForProfile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.mac_notifications.mojom.MacNotificationService_CloseNotificationsForProfile_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseNotificationsForProfile (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: CloseAllNotifications
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.mac_notifications.mojom.MacNotificationService_CloseAllNotifications_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseAllNotifications (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OkayToTerminateService
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.mac_notifications.mojom.MacNotificationService_OkayToTerminateService_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OkayToTerminateService (5)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.mac_notifications.mojom.MacNotificationService_DisplayNotification_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.displayNotification');
          const result = this.impl.displayNotification(params.arg_notification);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.mac_notifications.mojom.MacNotificationService_GetDisplayedNotifications_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDisplayedNotifications');
          const result = this.impl.getDisplayedNotifications(params.arg_profile, params.arg_origin);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.mac_notifications.mojom.MacNotificationService_GetDisplayedNotifications_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetDisplayedNotifications FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.mac_notifications.mojom.MacNotificationService_CloseNotification_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeNotification');
          const result = this.impl.closeNotification(params.arg_identifier);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.mac_notifications.mojom.MacNotificationService_CloseNotificationsForProfile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeNotificationsForProfile');
          const result = this.impl.closeNotificationsForProfile(params.arg_profile);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.mac_notifications.mojom.MacNotificationService_CloseAllNotifications_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeAllNotifications');
          const result = this.impl.closeAllNotifications();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.mac_notifications.mojom.MacNotificationService_OkayToTerminateService_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.okayToTerminateService');
          const result = this.impl.okayToTerminateService();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.mac_notifications.mojom.MacNotificationService_OkayToTerminateService_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OkayToTerminateService FAILED:', e));
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

mojo.internal.bindings.mac_notifications.mojom.MacNotificationServiceReceiver = mojo.internal.bindings.mac_notifications.mojom.MacNotificationServiceReceiver;

mojo.internal.bindings.mac_notifications.mojom.MacNotificationServicePtr = mojo.internal.bindings.mac_notifications.mojom.MacNotificationServiceRemote;
mojo.internal.bindings.mac_notifications.mojom.MacNotificationServiceRequest = mojo.internal.bindings.mac_notifications.mojom.MacNotificationServicePendingReceiver;


// Interface: MacNotificationActionHandler
mojo.internal.Struct(
    mojo.internal.bindings.mac_notifications.mojom.MacNotificationActionHandler_OnNotificationAction_ParamsSpec, 'mac_notifications.mojom.MacNotificationActionHandler_OnNotificationAction_Params', [
      mojo.internal.StructField('arg_info', 0, 0, mojo.internal.bindings.mojo.internal.bindings.mac_notifications.mojom.NotificationActionInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.mac_notifications.mojom.MacNotificationActionHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.mac_notifications.mojom.MacNotificationActionHandlerRemote = class {
  static get $interfaceName() {
    return 'mac_notifications.mojom.MacNotificationActionHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.mac_notifications.mojom.MacNotificationActionHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.mac_notifications.mojom.MacNotificationActionHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onNotificationAction(arg_info) {
    return this.$.onNotificationAction(arg_info);
  }
};

mojo.internal.bindings.mac_notifications.mojom.MacNotificationActionHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MacNotificationActionHandler', [
      { explicit: null },
    ]);
  }

  onNotificationAction(arg_info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.mac_notifications.mojom.MacNotificationActionHandler_OnNotificationAction_ParamsSpec,
      null,
      [arg_info],
      false);
  }

};

mojo.internal.bindings.mac_notifications.mojom.MacNotificationActionHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.mac_notifications.mojom.MacNotificationActionHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mac_notifications.mojom.MacNotificationActionHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.mac_notifications.mojom.MacNotificationActionHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MacNotificationActionHandler', [
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
        
        // Try Method 0: OnNotificationAction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.mac_notifications.mojom.MacNotificationActionHandler_OnNotificationAction_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNotificationAction (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.mac_notifications.mojom.MacNotificationActionHandler_OnNotificationAction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNotificationAction');
          const result = this.impl.onNotificationAction(params.arg_info);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.mac_notifications.mojom.MacNotificationActionHandlerReceiver = mojo.internal.bindings.mac_notifications.mojom.MacNotificationActionHandlerReceiver;

mojo.internal.bindings.mac_notifications.mojom.MacNotificationActionHandlerPtr = mojo.internal.bindings.mac_notifications.mojom.MacNotificationActionHandlerRemote;
mojo.internal.bindings.mac_notifications.mojom.MacNotificationActionHandlerRequest = mojo.internal.bindings.mac_notifications.mojom.MacNotificationActionHandlerPendingReceiver;


// Interface: MacNotificationProvider
mojo.internal.Struct(
    mojo.internal.bindings.mac_notifications.mojom.MacNotificationProvider_BindNotificationService_ParamsSpec, 'mac_notifications.mojom.MacNotificationProvider_BindNotificationService_Params', [
      mojo.internal.StructField('arg_service', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.mac_notifications.mojom.MacNotificationServiceSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_handler', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.mac_notifications.mojom.MacNotificationActionHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.mac_notifications.mojom.MacNotificationProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.mac_notifications.mojom.MacNotificationProviderRemote = class {
  static get $interfaceName() {
    return 'mac_notifications.mojom.MacNotificationProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.mac_notifications.mojom.MacNotificationProviderPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.mac_notifications.mojom.MacNotificationProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  bindNotificationService(arg_service, arg_handler) {
    return this.$.bindNotificationService(arg_service, arg_handler);
  }
};

mojo.internal.bindings.mac_notifications.mojom.MacNotificationProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MacNotificationProvider', [
      { explicit: null },
    ]);
  }

  bindNotificationService(arg_service, arg_handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.mac_notifications.mojom.MacNotificationProvider_BindNotificationService_ParamsSpec,
      null,
      [arg_service, arg_handler],
      false);
  }

};

mojo.internal.bindings.mac_notifications.mojom.MacNotificationProvider.getRemote = function() {
  let remote = new mojo.internal.bindings.mac_notifications.mojom.MacNotificationProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mac_notifications.mojom.MacNotificationProvider',
    'context');
  return remote.$;
};

mojo.internal.bindings.mac_notifications.mojom.MacNotificationProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MacNotificationProvider', [
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
        
        // Try Method 0: BindNotificationService
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.mac_notifications.mojom.MacNotificationProvider_BindNotificationService_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindNotificationService (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.mac_notifications.mojom.MacNotificationProvider_BindNotificationService_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindNotificationService');
          const result = this.impl.bindNotificationService(params.arg_service, params.arg_handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.mac_notifications.mojom.MacNotificationProviderReceiver = mojo.internal.bindings.mac_notifications.mojom.MacNotificationProviderReceiver;

mojo.internal.bindings.mac_notifications.mojom.MacNotificationProviderPtr = mojo.internal.bindings.mac_notifications.mojom.MacNotificationProviderRemote;
mojo.internal.bindings.mac_notifications.mojom.MacNotificationProviderRequest = mojo.internal.bindings.mac_notifications.mojom.MacNotificationProviderPendingReceiver;

