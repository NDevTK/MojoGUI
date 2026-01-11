// Auto-generated MojoJS binding
 // Source: chromium_src/ash/webui/eche_app_ui/mojom/eche_app.mojom
 // Module: ash.eche_app.mojom

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
 

 mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.eche_app = mojo.internal.bindings.ash.eche_app || {};
mojo.internal.bindings.ash.eche_app.mojom = mojo.internal.bindings.ash.eche_app.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};

mojo.internal.bindings.ash.eche_app.mojom.ScreenBacklightStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.eche_app.mojom.WebNotificationTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.eche_app.mojom.StreamStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.eche_app.mojom.StreamActionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.eche_app.mojom.ConnectionStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.eche_app.mojom.AppStreamLaunchEntryPointSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageExchanger = {};
mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageExchangerSpec = { $ : {} };
mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageExchanger.$interfaceName = 'ash.eche_app.mojom.SignalingMessageExchanger';
mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageExchanger_SendSignalingMessage_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageExchanger_SetSignalingMessageObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageExchanger_TearDownSignaling_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageObserver = {};
mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageObserverSpec = { $ : {} };
mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageObserver.$interfaceName = 'ash.eche_app.mojom.SignalingMessageObserver';
mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageObserver_OnReceivedSignalingMessage_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.eche_app.mojom.SystemInfoProvider = {};
mojo.internal.bindings.ash.eche_app.mojom.SystemInfoProviderSpec = { $ : {} };
mojo.internal.bindings.ash.eche_app.mojom.SystemInfoProvider.$interfaceName = 'ash.eche_app.mojom.SystemInfoProvider';
mojo.internal.bindings.ash.eche_app.mojom.SystemInfoProvider_GetSystemInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.eche_app.mojom.SystemInfoProvider_GetSystemInfo_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.eche_app.mojom.SystemInfoProvider_SetSystemInfoObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.eche_app.mojom.SystemInfoObserver = {};
mojo.internal.bindings.ash.eche_app.mojom.SystemInfoObserverSpec = { $ : {} };
mojo.internal.bindings.ash.eche_app.mojom.SystemInfoObserver.$interfaceName = 'ash.eche_app.mojom.SystemInfoObserver';
mojo.internal.bindings.ash.eche_app.mojom.SystemInfoObserver_OnScreenBacklightStateChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.eche_app.mojom.SystemInfoObserver_OnReceivedTabletModeChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.eche_app.mojom.SystemInfoObserver_OnAndroidDeviceNetworkInfoChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.eche_app.mojom.AccessibilityProvider = {};
mojo.internal.bindings.ash.eche_app.mojom.AccessibilityProviderSpec = { $ : {} };
mojo.internal.bindings.ash.eche_app.mojom.AccessibilityProvider.$interfaceName = 'ash.eche_app.mojom.AccessibilityProvider';
mojo.internal.bindings.ash.eche_app.mojom.AccessibilityProvider_HandleAccessibilityEventReceived_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.eche_app.mojom.AccessibilityProvider_SetAccessibilityObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.eche_app.mojom.AccessibilityProvider_IsAccessibilityEnabled_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.eche_app.mojom.AccessibilityProvider_IsAccessibilityEnabled_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.eche_app.mojom.AccessibilityObserver = {};
mojo.internal.bindings.ash.eche_app.mojom.AccessibilityObserverSpec = { $ : {} };
mojo.internal.bindings.ash.eche_app.mojom.AccessibilityObserver.$interfaceName = 'ash.eche_app.mojom.AccessibilityObserver';
mojo.internal.bindings.ash.eche_app.mojom.AccessibilityObserver_EnableAccessibilityTreeStreaming_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.eche_app.mojom.AccessibilityObserver_EnableExploreByTouch_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.eche_app.mojom.AccessibilityObserver_PerformAction_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.eche_app.mojom.AccessibilityObserver_PerformAction_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.eche_app.mojom.AccessibilityObserver_RefreshWithExtraData_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.eche_app.mojom.AccessibilityObserver_RefreshWithExtraData_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.eche_app.mojom.UidGenerator = {};
mojo.internal.bindings.ash.eche_app.mojom.UidGeneratorSpec = { $ : {} };
mojo.internal.bindings.ash.eche_app.mojom.UidGenerator.$interfaceName = 'ash.eche_app.mojom.UidGenerator';
mojo.internal.bindings.ash.eche_app.mojom.UidGenerator_GetUid_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.eche_app.mojom.UidGenerator_GetUid_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.eche_app.mojom.NotificationGenerator = {};
mojo.internal.bindings.ash.eche_app.mojom.NotificationGeneratorSpec = { $ : {} };
mojo.internal.bindings.ash.eche_app.mojom.NotificationGenerator.$interfaceName = 'ash.eche_app.mojom.NotificationGenerator';
mojo.internal.bindings.ash.eche_app.mojom.NotificationGenerator_ShowNotification_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.eche_app.mojom.NotificationGenerator_ShowToast_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.eche_app.mojom.DisplayStreamHandler = {};
mojo.internal.bindings.ash.eche_app.mojom.DisplayStreamHandlerSpec = { $ : {} };
mojo.internal.bindings.ash.eche_app.mojom.DisplayStreamHandler.$interfaceName = 'ash.eche_app.mojom.DisplayStreamHandler';
mojo.internal.bindings.ash.eche_app.mojom.DisplayStreamHandler_StartStreaming_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.eche_app.mojom.DisplayStreamHandler_OnStreamStatusChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.eche_app.mojom.DisplayStreamHandler_SetStreamActionObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.eche_app.mojom.StreamActionObserver = {};
mojo.internal.bindings.ash.eche_app.mojom.StreamActionObserverSpec = { $ : {} };
mojo.internal.bindings.ash.eche_app.mojom.StreamActionObserver.$interfaceName = 'ash.eche_app.mojom.StreamActionObserver';
mojo.internal.bindings.ash.eche_app.mojom.StreamActionObserver_OnStreamAction_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.eche_app.mojom.StreamOrientationObserver = {};
mojo.internal.bindings.ash.eche_app.mojom.StreamOrientationObserverSpec = { $ : {} };
mojo.internal.bindings.ash.eche_app.mojom.StreamOrientationObserver.$interfaceName = 'ash.eche_app.mojom.StreamOrientationObserver';
mojo.internal.bindings.ash.eche_app.mojom.StreamOrientationObserver_OnStreamOrientationChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.eche_app.mojom.ConnectionStatusObserver = {};
mojo.internal.bindings.ash.eche_app.mojom.ConnectionStatusObserverSpec = { $ : {} };
mojo.internal.bindings.ash.eche_app.mojom.ConnectionStatusObserver.$interfaceName = 'ash.eche_app.mojom.ConnectionStatusObserver';
mojo.internal.bindings.ash.eche_app.mojom.ConnectionStatusObserver_OnConnectionStatusChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutHandler = {};
mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutHandlerSpec = { $ : {} };
mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutHandler.$interfaceName = 'ash.eche_app.mojom.KeyboardLayoutHandler';
mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutHandler_RequestCurrentKeyboardLayout_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutHandler_SetKeyboardLayoutObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutObserver = {};
mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutObserverSpec = { $ : {} };
mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutObserver.$interfaceName = 'ash.eche_app.mojom.KeyboardLayoutObserver';
mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutObserver_OnKeyboardLayoutChanged_ParamsSpec = { $: {} };

// Enum: ScreenBacklightState
mojo.internal.bindings.ash.eche_app.mojom.ScreenBacklightState = {
  ON: 0,
  OFF: 1,
  OFF_AUTO: 2,
};

// Enum: WebNotificationType
mojo.internal.bindings.ash.eche_app.mojom.WebNotificationType = {
  APP_CRAHSED: 0,
  AUTHORIZATION_NEEDED: 1,
  CONNECTION_FAILED: 2,
  CONNECTION_LOST: 3,
  DEVICE_IDLE: 4,
  INITIALIZATION_ERROR: 5,
  INVALID_NOTIFICATION: 6,
  NOTIFICATION_ACTION_NOT_LAUNCHED: 7,
  LAUNCH_NOTIFICATION_FAILED: 8,
  TABLET_MODE: 9,
  WIFI_NOT_READY: 10,
  DIFFERENT_WIFI_NETWORKS: 11,
  REMOTE_DEVICE_ON_CELLULAR: 12,
};

// Enum: StreamStatus
mojo.internal.bindings.ash.eche_app.mojom.StreamStatus = {
  kStreamStatusUnknown: 0,
  kStreamStatusInitializing: 1,
  kStreamStatusStarted: 2,
  kStreamStatusStopped: 3,
};

// Enum: StreamAction
mojo.internal.bindings.ash.eche_app.mojom.StreamAction = {
  kStreamActionClose: 0,
  kStreamActionGoBack: 1,
};

// Enum: ConnectionStatus
mojo.internal.bindings.ash.eche_app.mojom.ConnectionStatus = {
  kConnectionStatusDisconnected: 0,
  kConnectionStatusConnecting: 1,
  kConnectionStatusConnected: 2,
  kConnectionStatusFailed: 3,
};

// Enum: AppStreamLaunchEntryPoint
mojo.internal.bindings.ash.eche_app.mojom.AppStreamLaunchEntryPoint = {
  APPS_LIST: 0,
  NOTIFICATION: 1,
  RECENT_APPS: 2,
  UNKNOWN: 3,
};

// Interface: SignalingMessageExchanger
mojo.internal.Struct(
    mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageExchanger_SendSignalingMessage_ParamsSpec, 'ash.eche_app.mojom.SignalingMessageExchanger_SendSignalingMessage_Params', [
      mojo.internal.StructField('arg_signal', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageExchanger_SetSignalingMessageObserver_ParamsSpec, 'ash.eche_app.mojom.SignalingMessageExchanger_SetSignalingMessageObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageExchanger_TearDownSignaling_ParamsSpec, 'ash.eche_app.mojom.SignalingMessageExchanger_TearDownSignaling_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageExchangerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageExchangerRemote = class {
  static get $interfaceName() {
    return 'ash.eche_app.mojom.SignalingMessageExchanger';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageExchangerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageExchangerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  sendSignalingMessage(arg_signal) {
    return this.$.sendSignalingMessage(arg_signal);
  }
  setSignalingMessageObserver(arg_observer) {
    return this.$.setSignalingMessageObserver(arg_observer);
  }
  tearDownSignaling() {
    return this.$.tearDownSignaling();
  }
};

mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageExchangerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.eche_app.mojom.SignalingMessageExchanger', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  sendSignalingMessage(arg_signal) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageExchanger_SendSignalingMessage_ParamsSpec,
      null,
      [arg_signal],
      false);
  }

  setSignalingMessageObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageExchanger_SetSignalingMessageObserver_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  tearDownSignaling() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageExchanger_TearDownSignaling_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageExchanger.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageExchangerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.eche_app.mojom.SignalingMessageExchanger',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageExchangerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.eche_app.mojom.SignalingMessageExchanger', [
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
        
        // Try Method 0: SendSignalingMessage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageExchanger_SendSignalingMessage_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendSignalingMessage (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetSignalingMessageObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageExchanger_SetSignalingMessageObserver_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSignalingMessageObserver (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: TearDownSignaling
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageExchanger_TearDownSignaling_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TearDownSignaling (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageExchanger_SendSignalingMessage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendSignalingMessage');
          const result = this.impl.sendSignalingMessage(params.arg_signal);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageExchanger_SetSignalingMessageObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setSignalingMessageObserver');
          const result = this.impl.setSignalingMessageObserver(params.arg_observer);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageExchanger_TearDownSignaling_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.tearDownSignaling');
          const result = this.impl.tearDownSignaling();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageExchangerReceiver = mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageExchangerReceiver;

mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageExchangerPtr = mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageExchangerRemote;
mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageExchangerRequest = mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageExchangerPendingReceiver;


// Interface: SignalingMessageObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageObserver_OnReceivedSignalingMessage_ParamsSpec, 'ash.eche_app.mojom.SignalingMessageObserver_OnReceivedSignalingMessage_Params', [
      mojo.internal.StructField('arg_signal', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageObserverRemote = class {
  static get $interfaceName() {
    return 'ash.eche_app.mojom.SignalingMessageObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onReceivedSignalingMessage(arg_signal) {
    return this.$.onReceivedSignalingMessage(arg_signal);
  }
};

mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.eche_app.mojom.SignalingMessageObserver', [
      { explicit: null },
    ]);
  }

  onReceivedSignalingMessage(arg_signal) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageObserver_OnReceivedSignalingMessage_ParamsSpec,
      null,
      [arg_signal],
      false);
  }

};

mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.eche_app.mojom.SignalingMessageObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.eche_app.mojom.SignalingMessageObserver', [
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
        
        // Try Method 0: OnReceivedSignalingMessage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageObserver_OnReceivedSignalingMessage_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnReceivedSignalingMessage (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageObserver_OnReceivedSignalingMessage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onReceivedSignalingMessage');
          const result = this.impl.onReceivedSignalingMessage(params.arg_signal);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageObserverReceiver = mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageObserverReceiver;

mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageObserverPtr = mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageObserverRemote;
mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageObserverRequest = mojo.internal.bindings.ash.eche_app.mojom.SignalingMessageObserverPendingReceiver;


// Interface: SystemInfoProvider
mojo.internal.Struct(
    mojo.internal.bindings.ash.eche_app.mojom.SystemInfoProvider_GetSystemInfo_ParamsSpec, 'ash.eche_app.mojom.SystemInfoProvider_GetSystemInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.eche_app.mojom.SystemInfoProvider_GetSystemInfo_ResponseParamsSpec, 'ash.eche_app.mojom.SystemInfoProvider_GetSystemInfo_ResponseParams', [
      mojo.internal.StructField('arg_system_info', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.eche_app.mojom.SystemInfoProvider_SetSystemInfoObserver_ParamsSpec, 'ash.eche_app.mojom.SystemInfoProvider_SetSystemInfoObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.eche_app.mojom.SystemInfoObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.eche_app.mojom.SystemInfoProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.eche_app.mojom.SystemInfoProviderRemote = class {
  static get $interfaceName() {
    return 'ash.eche_app.mojom.SystemInfoProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.eche_app.mojom.SystemInfoProviderPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.eche_app.mojom.SystemInfoProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getSystemInfo() {
    return this.$.getSystemInfo();
  }
  setSystemInfoObserver(arg_observer) {
    return this.$.setSystemInfoObserver(arg_observer);
  }
};

mojo.internal.bindings.ash.eche_app.mojom.SystemInfoProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.eche_app.mojom.SystemInfoProvider', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  getSystemInfo() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.eche_app.mojom.SystemInfoProvider_GetSystemInfo_ParamsSpec,
      mojo.internal.bindings.ash.eche_app.mojom.SystemInfoProvider_GetSystemInfo_ResponseParamsSpec,
      [],
      false);
  }

  setSystemInfoObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.eche_app.mojom.SystemInfoProvider_SetSystemInfoObserver_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

};

mojo.internal.bindings.ash.eche_app.mojom.SystemInfoProvider.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.eche_app.mojom.SystemInfoProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.eche_app.mojom.SystemInfoProvider',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.eche_app.mojom.SystemInfoProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.eche_app.mojom.SystemInfoProvider', [
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
        
        // Try Method 0: GetSystemInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.SystemInfoProvider_GetSystemInfo_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSystemInfo (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetSystemInfoObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.SystemInfoProvider_SetSystemInfoObserver_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSystemInfoObserver (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.SystemInfoProvider_GetSystemInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSystemInfo');
          const result = this.impl.getSystemInfo();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.eche_app.mojom.SystemInfoProvider_GetSystemInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetSystemInfo FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.SystemInfoProvider_SetSystemInfoObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setSystemInfoObserver');
          const result = this.impl.setSystemInfoObserver(params.arg_observer);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.eche_app.mojom.SystemInfoProviderReceiver = mojo.internal.bindings.ash.eche_app.mojom.SystemInfoProviderReceiver;

mojo.internal.bindings.ash.eche_app.mojom.SystemInfoProviderPtr = mojo.internal.bindings.ash.eche_app.mojom.SystemInfoProviderRemote;
mojo.internal.bindings.ash.eche_app.mojom.SystemInfoProviderRequest = mojo.internal.bindings.ash.eche_app.mojom.SystemInfoProviderPendingReceiver;


// Interface: SystemInfoObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.eche_app.mojom.SystemInfoObserver_OnScreenBacklightStateChanged_ParamsSpec, 'ash.eche_app.mojom.SystemInfoObserver_OnScreenBacklightStateChanged_Params', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.ash.eche_app.mojom.ScreenBacklightStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.eche_app.mojom.SystemInfoObserver_OnReceivedTabletModeChanged_ParamsSpec, 'ash.eche_app.mojom.SystemInfoObserver_OnReceivedTabletModeChanged_Params', [
      mojo.internal.StructField('arg_is_tablet_mode', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.eche_app.mojom.SystemInfoObserver_OnAndroidDeviceNetworkInfoChanged_ParamsSpec, 'ash.eche_app.mojom.SystemInfoObserver_OnAndroidDeviceNetworkInfoChanged_Params', [
      mojo.internal.StructField('arg_is_different_network', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_android_device_on_cellular', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.eche_app.mojom.SystemInfoObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.eche_app.mojom.SystemInfoObserverRemote = class {
  static get $interfaceName() {
    return 'ash.eche_app.mojom.SystemInfoObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.eche_app.mojom.SystemInfoObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.eche_app.mojom.SystemInfoObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onScreenBacklightStateChanged(arg_state) {
    return this.$.onScreenBacklightStateChanged(arg_state);
  }
  onReceivedTabletModeChanged(arg_is_tablet_mode) {
    return this.$.onReceivedTabletModeChanged(arg_is_tablet_mode);
  }
  onAndroidDeviceNetworkInfoChanged(arg_is_different_network, arg_android_device_on_cellular) {
    return this.$.onAndroidDeviceNetworkInfoChanged(arg_is_different_network, arg_android_device_on_cellular);
  }
};

mojo.internal.bindings.ash.eche_app.mojom.SystemInfoObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.eche_app.mojom.SystemInfoObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onScreenBacklightStateChanged(arg_state) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.eche_app.mojom.SystemInfoObserver_OnScreenBacklightStateChanged_ParamsSpec,
      null,
      [arg_state],
      false);
  }

  onReceivedTabletModeChanged(arg_is_tablet_mode) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.eche_app.mojom.SystemInfoObserver_OnReceivedTabletModeChanged_ParamsSpec,
      null,
      [arg_is_tablet_mode],
      false);
  }

  onAndroidDeviceNetworkInfoChanged(arg_is_different_network, arg_android_device_on_cellular) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.eche_app.mojom.SystemInfoObserver_OnAndroidDeviceNetworkInfoChanged_ParamsSpec,
      null,
      [arg_is_different_network, arg_android_device_on_cellular],
      false);
  }

};

mojo.internal.bindings.ash.eche_app.mojom.SystemInfoObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.eche_app.mojom.SystemInfoObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.eche_app.mojom.SystemInfoObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.eche_app.mojom.SystemInfoObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.eche_app.mojom.SystemInfoObserver', [
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
        
        // Try Method 0: OnScreenBacklightStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.SystemInfoObserver_OnScreenBacklightStateChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnScreenBacklightStateChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnReceivedTabletModeChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.SystemInfoObserver_OnReceivedTabletModeChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnReceivedTabletModeChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnAndroidDeviceNetworkInfoChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.SystemInfoObserver_OnAndroidDeviceNetworkInfoChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAndroidDeviceNetworkInfoChanged (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.SystemInfoObserver_OnScreenBacklightStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onScreenBacklightStateChanged');
          const result = this.impl.onScreenBacklightStateChanged(params.arg_state);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.SystemInfoObserver_OnReceivedTabletModeChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onReceivedTabletModeChanged');
          const result = this.impl.onReceivedTabletModeChanged(params.arg_is_tablet_mode);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.SystemInfoObserver_OnAndroidDeviceNetworkInfoChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAndroidDeviceNetworkInfoChanged');
          const result = this.impl.onAndroidDeviceNetworkInfoChanged(params.arg_is_different_network, params.arg_android_device_on_cellular);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.eche_app.mojom.SystemInfoObserverReceiver = mojo.internal.bindings.ash.eche_app.mojom.SystemInfoObserverReceiver;

mojo.internal.bindings.ash.eche_app.mojom.SystemInfoObserverPtr = mojo.internal.bindings.ash.eche_app.mojom.SystemInfoObserverRemote;
mojo.internal.bindings.ash.eche_app.mojom.SystemInfoObserverRequest = mojo.internal.bindings.ash.eche_app.mojom.SystemInfoObserverPendingReceiver;


// Interface: AccessibilityProvider
mojo.internal.Struct(
    mojo.internal.bindings.ash.eche_app.mojom.AccessibilityProvider_HandleAccessibilityEventReceived_ParamsSpec, 'ash.eche_app.mojom.AccessibilityProvider_HandleAccessibilityEventReceived_Params', [
      mojo.internal.StructField('arg_serialized_proto', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.eche_app.mojom.AccessibilityProvider_SetAccessibilityObserver_ParamsSpec, 'ash.eche_app.mojom.AccessibilityProvider_SetAccessibilityObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.eche_app.mojom.AccessibilityObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.eche_app.mojom.AccessibilityProvider_IsAccessibilityEnabled_ParamsSpec, 'ash.eche_app.mojom.AccessibilityProvider_IsAccessibilityEnabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.eche_app.mojom.AccessibilityProvider_IsAccessibilityEnabled_ResponseParamsSpec, 'ash.eche_app.mojom.AccessibilityProvider_IsAccessibilityEnabled_ResponseParams', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.eche_app.mojom.AccessibilityProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.eche_app.mojom.AccessibilityProviderRemote = class {
  static get $interfaceName() {
    return 'ash.eche_app.mojom.AccessibilityProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.eche_app.mojom.AccessibilityProviderPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.eche_app.mojom.AccessibilityProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  handleAccessibilityEventReceived(arg_serialized_proto) {
    return this.$.handleAccessibilityEventReceived(arg_serialized_proto);
  }
  setAccessibilityObserver(arg_observer) {
    return this.$.setAccessibilityObserver(arg_observer);
  }
  isAccessibilityEnabled() {
    return this.$.isAccessibilityEnabled();
  }
};

mojo.internal.bindings.ash.eche_app.mojom.AccessibilityProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.eche_app.mojom.AccessibilityProvider', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  handleAccessibilityEventReceived(arg_serialized_proto) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.eche_app.mojom.AccessibilityProvider_HandleAccessibilityEventReceived_ParamsSpec,
      null,
      [arg_serialized_proto],
      false);
  }

  setAccessibilityObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.eche_app.mojom.AccessibilityProvider_SetAccessibilityObserver_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  isAccessibilityEnabled() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.eche_app.mojom.AccessibilityProvider_IsAccessibilityEnabled_ParamsSpec,
      mojo.internal.bindings.ash.eche_app.mojom.AccessibilityProvider_IsAccessibilityEnabled_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.ash.eche_app.mojom.AccessibilityProvider.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.eche_app.mojom.AccessibilityProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.eche_app.mojom.AccessibilityProvider',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.eche_app.mojom.AccessibilityProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.eche_app.mojom.AccessibilityProvider', [
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
        
        // Try Method 0: HandleAccessibilityEventReceived
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.AccessibilityProvider_HandleAccessibilityEventReceived_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HandleAccessibilityEventReceived (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetAccessibilityObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.AccessibilityProvider_SetAccessibilityObserver_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAccessibilityObserver (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: IsAccessibilityEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.AccessibilityProvider_IsAccessibilityEnabled_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsAccessibilityEnabled (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.AccessibilityProvider_HandleAccessibilityEventReceived_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.handleAccessibilityEventReceived');
          const result = this.impl.handleAccessibilityEventReceived(params.arg_serialized_proto);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.AccessibilityProvider_SetAccessibilityObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAccessibilityObserver');
          const result = this.impl.setAccessibilityObserver(params.arg_observer);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.AccessibilityProvider_IsAccessibilityEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isAccessibilityEnabled');
          const result = this.impl.isAccessibilityEnabled();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.eche_app.mojom.AccessibilityProvider_IsAccessibilityEnabled_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsAccessibilityEnabled FAILED:', e));
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

mojo.internal.bindings.ash.eche_app.mojom.AccessibilityProviderReceiver = mojo.internal.bindings.ash.eche_app.mojom.AccessibilityProviderReceiver;

mojo.internal.bindings.ash.eche_app.mojom.AccessibilityProviderPtr = mojo.internal.bindings.ash.eche_app.mojom.AccessibilityProviderRemote;
mojo.internal.bindings.ash.eche_app.mojom.AccessibilityProviderRequest = mojo.internal.bindings.ash.eche_app.mojom.AccessibilityProviderPendingReceiver;


// Interface: AccessibilityObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.eche_app.mojom.AccessibilityObserver_EnableAccessibilityTreeStreaming_ParamsSpec, 'ash.eche_app.mojom.AccessibilityObserver_EnableAccessibilityTreeStreaming_Params', [
      mojo.internal.StructField('arg_enable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.eche_app.mojom.AccessibilityObserver_EnableExploreByTouch_ParamsSpec, 'ash.eche_app.mojom.AccessibilityObserver_EnableExploreByTouch_Params', [
      mojo.internal.StructField('arg_enable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.eche_app.mojom.AccessibilityObserver_PerformAction_ParamsSpec, 'ash.eche_app.mojom.AccessibilityObserver_PerformAction_Params', [
      mojo.internal.StructField('arg_serialized_proto', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.eche_app.mojom.AccessibilityObserver_PerformAction_ResponseParamsSpec, 'ash.eche_app.mojom.AccessibilityObserver_PerformAction_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.eche_app.mojom.AccessibilityObserver_RefreshWithExtraData_ParamsSpec, 'ash.eche_app.mojom.AccessibilityObserver_RefreshWithExtraData_Params', [
      mojo.internal.StructField('arg_refresh_data_proto', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.eche_app.mojom.AccessibilityObserver_RefreshWithExtraData_ResponseParamsSpec, 'ash.eche_app.mojom.AccessibilityObserver_RefreshWithExtraData_ResponseParams', [
      mojo.internal.StructField('arg_text_location_proto', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.eche_app.mojom.AccessibilityObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.eche_app.mojom.AccessibilityObserverRemote = class {
  static get $interfaceName() {
    return 'ash.eche_app.mojom.AccessibilityObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.eche_app.mojom.AccessibilityObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.eche_app.mojom.AccessibilityObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  enableAccessibilityTreeStreaming(arg_enable) {
    return this.$.enableAccessibilityTreeStreaming(arg_enable);
  }
  enableExploreByTouch(arg_enable) {
    return this.$.enableExploreByTouch(arg_enable);
  }
  performAction(arg_serialized_proto) {
    return this.$.performAction(arg_serialized_proto);
  }
  refreshWithExtraData(arg_refresh_data_proto) {
    return this.$.refreshWithExtraData(arg_refresh_data_proto);
  }
};

mojo.internal.bindings.ash.eche_app.mojom.AccessibilityObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.eche_app.mojom.AccessibilityObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  enableAccessibilityTreeStreaming(arg_enable) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.eche_app.mojom.AccessibilityObserver_EnableAccessibilityTreeStreaming_ParamsSpec,
      null,
      [arg_enable],
      false);
  }

  enableExploreByTouch(arg_enable) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.eche_app.mojom.AccessibilityObserver_EnableExploreByTouch_ParamsSpec,
      null,
      [arg_enable],
      false);
  }

  performAction(arg_serialized_proto) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.eche_app.mojom.AccessibilityObserver_PerformAction_ParamsSpec,
      mojo.internal.bindings.ash.eche_app.mojom.AccessibilityObserver_PerformAction_ResponseParamsSpec,
      [arg_serialized_proto],
      false);
  }

  refreshWithExtraData(arg_refresh_data_proto) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.eche_app.mojom.AccessibilityObserver_RefreshWithExtraData_ParamsSpec,
      mojo.internal.bindings.ash.eche_app.mojom.AccessibilityObserver_RefreshWithExtraData_ResponseParamsSpec,
      [arg_refresh_data_proto],
      false);
  }

};

mojo.internal.bindings.ash.eche_app.mojom.AccessibilityObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.eche_app.mojom.AccessibilityObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.eche_app.mojom.AccessibilityObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.eche_app.mojom.AccessibilityObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.eche_app.mojom.AccessibilityObserver', [
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
        
        // Try Method 0: EnableAccessibilityTreeStreaming
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.AccessibilityObserver_EnableAccessibilityTreeStreaming_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnableAccessibilityTreeStreaming (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: EnableExploreByTouch
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.AccessibilityObserver_EnableExploreByTouch_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnableExploreByTouch (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: PerformAction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.AccessibilityObserver_PerformAction_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PerformAction (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: RefreshWithExtraData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.AccessibilityObserver_RefreshWithExtraData_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RefreshWithExtraData (3)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.AccessibilityObserver_EnableAccessibilityTreeStreaming_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enableAccessibilityTreeStreaming');
          const result = this.impl.enableAccessibilityTreeStreaming(params.arg_enable);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.AccessibilityObserver_EnableExploreByTouch_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enableExploreByTouch');
          const result = this.impl.enableExploreByTouch(params.arg_enable);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.AccessibilityObserver_PerformAction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.performAction');
          const result = this.impl.performAction(params.arg_serialized_proto);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.eche_app.mojom.AccessibilityObserver_PerformAction_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] PerformAction FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.AccessibilityObserver_RefreshWithExtraData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.refreshWithExtraData');
          const result = this.impl.refreshWithExtraData(params.arg_refresh_data_proto);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.eche_app.mojom.AccessibilityObserver_RefreshWithExtraData_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RefreshWithExtraData FAILED:', e));
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

mojo.internal.bindings.ash.eche_app.mojom.AccessibilityObserverReceiver = mojo.internal.bindings.ash.eche_app.mojom.AccessibilityObserverReceiver;

mojo.internal.bindings.ash.eche_app.mojom.AccessibilityObserverPtr = mojo.internal.bindings.ash.eche_app.mojom.AccessibilityObserverRemote;
mojo.internal.bindings.ash.eche_app.mojom.AccessibilityObserverRequest = mojo.internal.bindings.ash.eche_app.mojom.AccessibilityObserverPendingReceiver;


// Interface: UidGenerator
mojo.internal.Struct(
    mojo.internal.bindings.ash.eche_app.mojom.UidGenerator_GetUid_ParamsSpec, 'ash.eche_app.mojom.UidGenerator_GetUid_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.eche_app.mojom.UidGenerator_GetUid_ResponseParamsSpec, 'ash.eche_app.mojom.UidGenerator_GetUid_ResponseParams', [
      mojo.internal.StructField('arg_local_uid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.eche_app.mojom.UidGeneratorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.eche_app.mojom.UidGeneratorRemote = class {
  static get $interfaceName() {
    return 'ash.eche_app.mojom.UidGenerator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.eche_app.mojom.UidGeneratorPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.eche_app.mojom.UidGeneratorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getUid() {
    return this.$.getUid();
  }
};

mojo.internal.bindings.ash.eche_app.mojom.UidGeneratorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.eche_app.mojom.UidGenerator', [
      { explicit: null },
    ]);
  }

  getUid() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.eche_app.mojom.UidGenerator_GetUid_ParamsSpec,
      mojo.internal.bindings.ash.eche_app.mojom.UidGenerator_GetUid_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.ash.eche_app.mojom.UidGenerator.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.eche_app.mojom.UidGeneratorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.eche_app.mojom.UidGenerator',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.eche_app.mojom.UidGeneratorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.eche_app.mojom.UidGenerator', [
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
        
        // Try Method 0: GetUid
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.UidGenerator_GetUid_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUid (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.UidGenerator_GetUid_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getUid');
          const result = this.impl.getUid();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.eche_app.mojom.UidGenerator_GetUid_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetUid FAILED:', e));
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

mojo.internal.bindings.ash.eche_app.mojom.UidGeneratorReceiver = mojo.internal.bindings.ash.eche_app.mojom.UidGeneratorReceiver;

mojo.internal.bindings.ash.eche_app.mojom.UidGeneratorPtr = mojo.internal.bindings.ash.eche_app.mojom.UidGeneratorRemote;
mojo.internal.bindings.ash.eche_app.mojom.UidGeneratorRequest = mojo.internal.bindings.ash.eche_app.mojom.UidGeneratorPendingReceiver;


// Interface: NotificationGenerator
mojo.internal.Struct(
    mojo.internal.bindings.ash.eche_app.mojom.NotificationGenerator_ShowNotification_ParamsSpec, 'ash.eche_app.mojom.NotificationGenerator_ShowNotification_Params', [
      mojo.internal.StructField('arg_title', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_message', 8, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 16, 0, mojo.internal.bindings.ash.eche_app.mojom.WebNotificationTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.eche_app.mojom.NotificationGenerator_ShowToast_ParamsSpec, 'ash.eche_app.mojom.NotificationGenerator_ShowToast_Params', [
      mojo.internal.StructField('arg_text', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.eche_app.mojom.NotificationGeneratorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.eche_app.mojom.NotificationGeneratorRemote = class {
  static get $interfaceName() {
    return 'ash.eche_app.mojom.NotificationGenerator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.eche_app.mojom.NotificationGeneratorPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.eche_app.mojom.NotificationGeneratorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  showNotification(arg_title, arg_message, arg_type) {
    return this.$.showNotification(arg_title, arg_message, arg_type);
  }
  showToast(arg_text) {
    return this.$.showToast(arg_text);
  }
};

mojo.internal.bindings.ash.eche_app.mojom.NotificationGeneratorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.eche_app.mojom.NotificationGenerator', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  showNotification(arg_title, arg_message, arg_type) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.eche_app.mojom.NotificationGenerator_ShowNotification_ParamsSpec,
      null,
      [arg_title, arg_message, arg_type],
      false);
  }

  showToast(arg_text) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.eche_app.mojom.NotificationGenerator_ShowToast_ParamsSpec,
      null,
      [arg_text],
      false);
  }

};

mojo.internal.bindings.ash.eche_app.mojom.NotificationGenerator.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.eche_app.mojom.NotificationGeneratorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.eche_app.mojom.NotificationGenerator',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.eche_app.mojom.NotificationGeneratorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.eche_app.mojom.NotificationGenerator', [
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
        
        // Try Method 0: ShowNotification
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.NotificationGenerator_ShowNotification_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowNotification (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ShowToast
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.NotificationGenerator_ShowToast_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowToast (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.NotificationGenerator_ShowNotification_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showNotification');
          const result = this.impl.showNotification(params.arg_title, params.arg_message, params.arg_type);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.NotificationGenerator_ShowToast_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showToast');
          const result = this.impl.showToast(params.arg_text);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.eche_app.mojom.NotificationGeneratorReceiver = mojo.internal.bindings.ash.eche_app.mojom.NotificationGeneratorReceiver;

mojo.internal.bindings.ash.eche_app.mojom.NotificationGeneratorPtr = mojo.internal.bindings.ash.eche_app.mojom.NotificationGeneratorRemote;
mojo.internal.bindings.ash.eche_app.mojom.NotificationGeneratorRequest = mojo.internal.bindings.ash.eche_app.mojom.NotificationGeneratorPendingReceiver;


// Interface: DisplayStreamHandler
mojo.internal.Struct(
    mojo.internal.bindings.ash.eche_app.mojom.DisplayStreamHandler_StartStreaming_ParamsSpec, 'ash.eche_app.mojom.DisplayStreamHandler_StartStreaming_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.eche_app.mojom.DisplayStreamHandler_OnStreamStatusChanged_ParamsSpec, 'ash.eche_app.mojom.DisplayStreamHandler_OnStreamStatusChanged_Params', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.ash.eche_app.mojom.StreamStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.eche_app.mojom.DisplayStreamHandler_SetStreamActionObserver_ParamsSpec, 'ash.eche_app.mojom.DisplayStreamHandler_SetStreamActionObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.eche_app.mojom.StreamActionObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.eche_app.mojom.DisplayStreamHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.eche_app.mojom.DisplayStreamHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.eche_app.mojom.DisplayStreamHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.eche_app.mojom.DisplayStreamHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.eche_app.mojom.DisplayStreamHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  startStreaming() {
    return this.$.startStreaming();
  }
  onStreamStatusChanged(arg_status) {
    return this.$.onStreamStatusChanged(arg_status);
  }
  setStreamActionObserver(arg_observer) {
    return this.$.setStreamActionObserver(arg_observer);
  }
};

mojo.internal.bindings.ash.eche_app.mojom.DisplayStreamHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.eche_app.mojom.DisplayStreamHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  startStreaming() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.eche_app.mojom.DisplayStreamHandler_StartStreaming_ParamsSpec,
      null,
      [],
      false);
  }

  onStreamStatusChanged(arg_status) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.eche_app.mojom.DisplayStreamHandler_OnStreamStatusChanged_ParamsSpec,
      null,
      [arg_status],
      false);
  }

  setStreamActionObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.eche_app.mojom.DisplayStreamHandler_SetStreamActionObserver_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

};

mojo.internal.bindings.ash.eche_app.mojom.DisplayStreamHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.eche_app.mojom.DisplayStreamHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.eche_app.mojom.DisplayStreamHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.eche_app.mojom.DisplayStreamHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.eche_app.mojom.DisplayStreamHandler', [
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
        
        // Try Method 0: StartStreaming
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.DisplayStreamHandler_StartStreaming_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartStreaming (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnStreamStatusChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.DisplayStreamHandler_OnStreamStatusChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStreamStatusChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetStreamActionObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.DisplayStreamHandler_SetStreamActionObserver_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetStreamActionObserver (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.DisplayStreamHandler_StartStreaming_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startStreaming');
          const result = this.impl.startStreaming();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.DisplayStreamHandler_OnStreamStatusChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onStreamStatusChanged');
          const result = this.impl.onStreamStatusChanged(params.arg_status);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.DisplayStreamHandler_SetStreamActionObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setStreamActionObserver');
          const result = this.impl.setStreamActionObserver(params.arg_observer);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.eche_app.mojom.DisplayStreamHandlerReceiver = mojo.internal.bindings.ash.eche_app.mojom.DisplayStreamHandlerReceiver;

mojo.internal.bindings.ash.eche_app.mojom.DisplayStreamHandlerPtr = mojo.internal.bindings.ash.eche_app.mojom.DisplayStreamHandlerRemote;
mojo.internal.bindings.ash.eche_app.mojom.DisplayStreamHandlerRequest = mojo.internal.bindings.ash.eche_app.mojom.DisplayStreamHandlerPendingReceiver;


// Interface: StreamActionObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.eche_app.mojom.StreamActionObserver_OnStreamAction_ParamsSpec, 'ash.eche_app.mojom.StreamActionObserver_OnStreamAction_Params', [
      mojo.internal.StructField('arg_action', 0, 0, mojo.internal.bindings.ash.eche_app.mojom.StreamActionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.eche_app.mojom.StreamActionObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.eche_app.mojom.StreamActionObserverRemote = class {
  static get $interfaceName() {
    return 'ash.eche_app.mojom.StreamActionObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.eche_app.mojom.StreamActionObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.eche_app.mojom.StreamActionObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onStreamAction(arg_action) {
    return this.$.onStreamAction(arg_action);
  }
};

mojo.internal.bindings.ash.eche_app.mojom.StreamActionObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.eche_app.mojom.StreamActionObserver', [
      { explicit: null },
    ]);
  }

  onStreamAction(arg_action) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.eche_app.mojom.StreamActionObserver_OnStreamAction_ParamsSpec,
      null,
      [arg_action],
      false);
  }

};

mojo.internal.bindings.ash.eche_app.mojom.StreamActionObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.eche_app.mojom.StreamActionObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.eche_app.mojom.StreamActionObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.eche_app.mojom.StreamActionObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.eche_app.mojom.StreamActionObserver', [
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
        
        // Try Method 0: OnStreamAction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.StreamActionObserver_OnStreamAction_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStreamAction (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.StreamActionObserver_OnStreamAction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onStreamAction');
          const result = this.impl.onStreamAction(params.arg_action);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.eche_app.mojom.StreamActionObserverReceiver = mojo.internal.bindings.ash.eche_app.mojom.StreamActionObserverReceiver;

mojo.internal.bindings.ash.eche_app.mojom.StreamActionObserverPtr = mojo.internal.bindings.ash.eche_app.mojom.StreamActionObserverRemote;
mojo.internal.bindings.ash.eche_app.mojom.StreamActionObserverRequest = mojo.internal.bindings.ash.eche_app.mojom.StreamActionObserverPendingReceiver;


// Interface: StreamOrientationObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.eche_app.mojom.StreamOrientationObserver_OnStreamOrientationChanged_ParamsSpec, 'ash.eche_app.mojom.StreamOrientationObserver_OnStreamOrientationChanged_Params', [
      mojo.internal.StructField('arg_isLandscape', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.eche_app.mojom.StreamOrientationObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.eche_app.mojom.StreamOrientationObserverRemote = class {
  static get $interfaceName() {
    return 'ash.eche_app.mojom.StreamOrientationObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.eche_app.mojom.StreamOrientationObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.eche_app.mojom.StreamOrientationObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onStreamOrientationChanged(arg_isLandscape) {
    return this.$.onStreamOrientationChanged(arg_isLandscape);
  }
};

mojo.internal.bindings.ash.eche_app.mojom.StreamOrientationObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.eche_app.mojom.StreamOrientationObserver', [
      { explicit: null },
    ]);
  }

  onStreamOrientationChanged(arg_isLandscape) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.eche_app.mojom.StreamOrientationObserver_OnStreamOrientationChanged_ParamsSpec,
      null,
      [arg_isLandscape],
      false);
  }

};

mojo.internal.bindings.ash.eche_app.mojom.StreamOrientationObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.eche_app.mojom.StreamOrientationObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.eche_app.mojom.StreamOrientationObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.eche_app.mojom.StreamOrientationObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.eche_app.mojom.StreamOrientationObserver', [
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
        
        // Try Method 0: OnStreamOrientationChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.StreamOrientationObserver_OnStreamOrientationChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStreamOrientationChanged (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.StreamOrientationObserver_OnStreamOrientationChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onStreamOrientationChanged');
          const result = this.impl.onStreamOrientationChanged(params.arg_isLandscape);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.eche_app.mojom.StreamOrientationObserverReceiver = mojo.internal.bindings.ash.eche_app.mojom.StreamOrientationObserverReceiver;

mojo.internal.bindings.ash.eche_app.mojom.StreamOrientationObserverPtr = mojo.internal.bindings.ash.eche_app.mojom.StreamOrientationObserverRemote;
mojo.internal.bindings.ash.eche_app.mojom.StreamOrientationObserverRequest = mojo.internal.bindings.ash.eche_app.mojom.StreamOrientationObserverPendingReceiver;


// Interface: ConnectionStatusObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.eche_app.mojom.ConnectionStatusObserver_OnConnectionStatusChanged_ParamsSpec, 'ash.eche_app.mojom.ConnectionStatusObserver_OnConnectionStatusChanged_Params', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.ash.eche_app.mojom.ConnectionStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.eche_app.mojom.ConnectionStatusObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.eche_app.mojom.ConnectionStatusObserverRemote = class {
  static get $interfaceName() {
    return 'ash.eche_app.mojom.ConnectionStatusObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.eche_app.mojom.ConnectionStatusObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.eche_app.mojom.ConnectionStatusObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onConnectionStatusChanged(arg_status) {
    return this.$.onConnectionStatusChanged(arg_status);
  }
};

mojo.internal.bindings.ash.eche_app.mojom.ConnectionStatusObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.eche_app.mojom.ConnectionStatusObserver', [
      { explicit: null },
    ]);
  }

  onConnectionStatusChanged(arg_status) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.eche_app.mojom.ConnectionStatusObserver_OnConnectionStatusChanged_ParamsSpec,
      null,
      [arg_status],
      false);
  }

};

mojo.internal.bindings.ash.eche_app.mojom.ConnectionStatusObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.eche_app.mojom.ConnectionStatusObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.eche_app.mojom.ConnectionStatusObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.eche_app.mojom.ConnectionStatusObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.eche_app.mojom.ConnectionStatusObserver', [
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
        
        // Try Method 0: OnConnectionStatusChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.ConnectionStatusObserver_OnConnectionStatusChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnConnectionStatusChanged (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.ConnectionStatusObserver_OnConnectionStatusChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onConnectionStatusChanged');
          const result = this.impl.onConnectionStatusChanged(params.arg_status);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.eche_app.mojom.ConnectionStatusObserverReceiver = mojo.internal.bindings.ash.eche_app.mojom.ConnectionStatusObserverReceiver;

mojo.internal.bindings.ash.eche_app.mojom.ConnectionStatusObserverPtr = mojo.internal.bindings.ash.eche_app.mojom.ConnectionStatusObserverRemote;
mojo.internal.bindings.ash.eche_app.mojom.ConnectionStatusObserverRequest = mojo.internal.bindings.ash.eche_app.mojom.ConnectionStatusObserverPendingReceiver;


// Interface: KeyboardLayoutHandler
mojo.internal.Struct(
    mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutHandler_RequestCurrentKeyboardLayout_ParamsSpec, 'ash.eche_app.mojom.KeyboardLayoutHandler_RequestCurrentKeyboardLayout_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutHandler_SetKeyboardLayoutObserver_ParamsSpec, 'ash.eche_app.mojom.KeyboardLayoutHandler_SetKeyboardLayoutObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.eche_app.mojom.KeyboardLayoutHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  requestCurrentKeyboardLayout() {
    return this.$.requestCurrentKeyboardLayout();
  }
  setKeyboardLayoutObserver(arg_observer) {
    return this.$.setKeyboardLayoutObserver(arg_observer);
  }
};

mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.eche_app.mojom.KeyboardLayoutHandler', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  requestCurrentKeyboardLayout() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutHandler_RequestCurrentKeyboardLayout_ParamsSpec,
      null,
      [],
      false);
  }

  setKeyboardLayoutObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutHandler_SetKeyboardLayoutObserver_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

};

mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.eche_app.mojom.KeyboardLayoutHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.eche_app.mojom.KeyboardLayoutHandler', [
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
        
        // Try Method 0: RequestCurrentKeyboardLayout
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutHandler_RequestCurrentKeyboardLayout_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestCurrentKeyboardLayout (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetKeyboardLayoutObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutHandler_SetKeyboardLayoutObserver_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetKeyboardLayoutObserver (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutHandler_RequestCurrentKeyboardLayout_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestCurrentKeyboardLayout');
          const result = this.impl.requestCurrentKeyboardLayout();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutHandler_SetKeyboardLayoutObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setKeyboardLayoutObserver');
          const result = this.impl.setKeyboardLayoutObserver(params.arg_observer);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutHandlerReceiver = mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutHandlerReceiver;

mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutHandlerPtr = mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutHandlerRemote;
mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutHandlerRequest = mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutHandlerPendingReceiver;


// Interface: KeyboardLayoutObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutObserver_OnKeyboardLayoutChanged_ParamsSpec, 'ash.eche_app.mojom.KeyboardLayoutObserver_OnKeyboardLayoutChanged_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_longName', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_shortName', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_layoutTag', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutObserverRemote = class {
  static get $interfaceName() {
    return 'ash.eche_app.mojom.KeyboardLayoutObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onKeyboardLayoutChanged(arg_id, arg_longName, arg_shortName, arg_layoutTag) {
    return this.$.onKeyboardLayoutChanged(arg_id, arg_longName, arg_shortName, arg_layoutTag);
  }
};

mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.eche_app.mojom.KeyboardLayoutObserver', [
      { explicit: null },
    ]);
  }

  onKeyboardLayoutChanged(arg_id, arg_longName, arg_shortName, arg_layoutTag) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutObserver_OnKeyboardLayoutChanged_ParamsSpec,
      null,
      [arg_id, arg_longName, arg_shortName, arg_layoutTag],
      false);
  }

};

mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.eche_app.mojom.KeyboardLayoutObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.eche_app.mojom.KeyboardLayoutObserver', [
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
        
        // Try Method 0: OnKeyboardLayoutChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutObserver_OnKeyboardLayoutChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnKeyboardLayoutChanged (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutObserver_OnKeyboardLayoutChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onKeyboardLayoutChanged');
          const result = this.impl.onKeyboardLayoutChanged(params.arg_id, params.arg_longName, params.arg_shortName, params.arg_layoutTag);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutObserverReceiver = mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutObserverReceiver;

mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutObserverPtr = mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutObserverRemote;
mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutObserverRequest = mojo.internal.bindings.ash.eche_app.mojom.KeyboardLayoutObserverPendingReceiver;

