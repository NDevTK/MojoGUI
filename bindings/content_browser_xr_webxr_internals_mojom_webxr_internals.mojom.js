// Auto-generated MojoJS binding
// Source: chromium_src/content/browser/xr/webxr_internals/mojom/webxr_internals.mojom
// Module: webxr.mojom

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
var webxr = webxr || {};
webxr.mojom = webxr.mojom || {};
var device = device || {};
var mojo_base = mojo_base || {};

webxr.mojom.DeviceInfoSpec = { $: {} };
webxr.mojom.SessionRequestedRecordSpec = { $: {} };
webxr.mojom.SessionRejectedRecordSpec = { $: {} };
webxr.mojom.SessionStartedRecordSpec = { $: {} };
webxr.mojom.SessionStoppedRecordSpec = { $: {} };
webxr.mojom.RuntimeInfoSpec = { $: {} };
webxr.mojom.WebXrInternalsHandler = {};
webxr.mojom.WebXrInternalsHandler.$interfaceName = 'webxr.mojom.WebXrInternalsHandler';
webxr.mojom.WebXrInternalsHandler_GetDeviceInfo_ParamsSpec = { $: {} };
webxr.mojom.WebXrInternalsHandler_GetDeviceInfo_ResponseParamsSpec = { $: {} };
webxr.mojom.WebXrInternalsHandler_GetActiveRuntimes_ParamsSpec = { $: {} };
webxr.mojom.WebXrInternalsHandler_GetActiveRuntimes_ResponseParamsSpec = { $: {} };
webxr.mojom.WebXrInternalsHandler_SubscribeToEvents_ParamsSpec = { $: {} };
webxr.mojom.XRInternalsSessionListener = {};
webxr.mojom.XRInternalsSessionListener.$interfaceName = 'webxr.mojom.XRInternalsSessionListener';
webxr.mojom.XRInternalsSessionListener_LogXrSessionRequested_ParamsSpec = { $: {} };
webxr.mojom.XRInternalsSessionListener_LogXrSessionRejected_ParamsSpec = { $: {} };
webxr.mojom.XRInternalsSessionListener_LogXrSessionStarted_ParamsSpec = { $: {} };
webxr.mojom.XRInternalsSessionListener_LogXrSessionStopped_ParamsSpec = { $: {} };
webxr.mojom.XRInternalsSessionListener_LogXrRuntimeAdded_ParamsSpec = { $: {} };
webxr.mojom.XRInternalsSessionListener_LogXrRuntimeRemoved_ParamsSpec = { $: {} };
webxr.mojom.XRInternalsSessionListener_LogFrameData_ParamsSpec = { $: {} };
webxr.mojom.XRInternalsSessionListener_LogConsoleMessages_ParamsSpec = { $: {} };

// Struct: DeviceInfo
mojo.internal.Struct(
    webxr.mojom.DeviceInfoSpec, 'webxr.mojom.DeviceInfo', [
      mojo.internal.StructField('operating_system_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('operating_system_version', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('gpu_gl_vendor', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('gpu_gl_renderer', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: SessionRequestedRecord
mojo.internal.Struct(
    webxr.mojom.SessionRequestedRecordSpec, 'webxr.mojom.SessionRequestedRecord', [
      mojo.internal.StructField('options', 0, 0, device.mojom.XRSessionOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('requested_time', 8, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SessionRejectedRecord
mojo.internal.Struct(
    webxr.mojom.SessionRejectedRecordSpec, 'webxr.mojom.SessionRejectedRecord', [
      mojo.internal.StructField('trace_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('failure_reason', 8, 0, device.mojom.RequestSessionErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('rejected_time', 16, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('failure_reason_description', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('rejected_features', 32, 0, mojo.internal.Array(device.mojom.XRSessionFeatureSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: SessionStartedRecord
mojo.internal.Struct(
    webxr.mojom.SessionStartedRecordSpec, 'webxr.mojom.SessionStartedRecord', [
      mojo.internal.StructField('trace_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('device_id', 8, 0, device.mojom.XRDeviceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('started_time', 16, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SessionStoppedRecord
mojo.internal.Struct(
    webxr.mojom.SessionStoppedRecordSpec, 'webxr.mojom.SessionStoppedRecord', [
      mojo.internal.StructField('trace_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('stopped_time', 8, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: RuntimeInfo
mojo.internal.Struct(
    webxr.mojom.RuntimeInfoSpec, 'webxr.mojom.RuntimeInfo', [
      mojo.internal.StructField('device_id', 0, 0, device.mojom.XRDeviceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('supported_features', 8, 0, mojo.internal.Array(device.mojom.XRSessionFeatureSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('is_ar_blend_mode_supported', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: WebXrInternalsHandler
mojo.internal.Struct(
    webxr.mojom.WebXrInternalsHandler_GetDeviceInfo_ParamsSpec, 'webxr.mojom.WebXrInternalsHandler_GetDeviceInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    webxr.mojom.WebXrInternalsHandler_GetDeviceInfo_ResponseParamsSpec, 'webxr.mojom.WebXrInternalsHandler_GetDeviceInfo_ResponseParams', [
      mojo.internal.StructField('device_info', 0, 0, webxr.mojom.DeviceInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    webxr.mojom.WebXrInternalsHandler_GetActiveRuntimes_ParamsSpec, 'webxr.mojom.WebXrInternalsHandler_GetActiveRuntimes_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    webxr.mojom.WebXrInternalsHandler_GetActiveRuntimes_ResponseParamsSpec, 'webxr.mojom.WebXrInternalsHandler_GetActiveRuntimes_ResponseParams', [
      mojo.internal.StructField('active_runtimes', 0, 0, mojo.internal.Array(webxr.mojom.RuntimeInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    webxr.mojom.WebXrInternalsHandler_SubscribeToEvents_ParamsSpec, 'webxr.mojom.WebXrInternalsHandler_SubscribeToEvents_Params', [
      mojo.internal.StructField('listener', 0, 0, mojo.internal.InterfaceProxy(webxr.mojom.XRInternalsSessionListenerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

webxr.mojom.WebXrInternalsHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

webxr.mojom.WebXrInternalsHandlerRemote = class {
  static get $interfaceName() {
    return 'webxr.mojom.WebXrInternalsHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      webxr.mojom.WebXrInternalsHandlerPendingReceiver,
      handle);
    this.$ = new webxr.mojom.WebXrInternalsHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getDeviceInfo() {
    return this.$.getDeviceInfo();
  }
  getActiveRuntimes() {
    return this.$.getActiveRuntimes();
  }
  subscribeToEvents(listener) {
    return this.$.subscribeToEvents(listener);
  }
};

webxr.mojom.WebXrInternalsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebXrInternalsHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getDeviceInfo() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      webxr.mojom.WebXrInternalsHandler_GetDeviceInfo_ParamsSpec,
      webxr.mojom.WebXrInternalsHandler_GetDeviceInfo_ResponseParamsSpec,
      [],
      false);
  }

  getActiveRuntimes() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      webxr.mojom.WebXrInternalsHandler_GetActiveRuntimes_ParamsSpec,
      webxr.mojom.WebXrInternalsHandler_GetActiveRuntimes_ResponseParamsSpec,
      [],
      false);
  }

  subscribeToEvents(listener) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      webxr.mojom.WebXrInternalsHandler_SubscribeToEvents_ParamsSpec,
      null,
      [listener],
      false);
  }

};

webxr.mojom.WebXrInternalsHandler.getRemote = function() {
  let remote = new webxr.mojom.WebXrInternalsHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'webxr.mojom.WebXrInternalsHandler',
    'context');
  return remote.$;
};

webxr.mojom.WebXrInternalsHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebXrInternalsHandler', [
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
        
        // Try Method 0: GetDeviceInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(webxr.mojom.WebXrInternalsHandler_GetDeviceInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDeviceInfo (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetActiveRuntimes
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(webxr.mojom.WebXrInternalsHandler_GetActiveRuntimes_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetActiveRuntimes (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SubscribeToEvents
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(webxr.mojom.WebXrInternalsHandler_SubscribeToEvents_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SubscribeToEvents (2)');
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
          const params = decoder.decodeStructInline(webxr.mojom.WebXrInternalsHandler_GetDeviceInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDeviceInfo');
          const result = this.impl.getDeviceInfo();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, webxr.mojom.WebXrInternalsHandler_GetDeviceInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetDeviceInfo FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(webxr.mojom.WebXrInternalsHandler_GetActiveRuntimes_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getActiveRuntimes');
          const result = this.impl.getActiveRuntimes();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, webxr.mojom.WebXrInternalsHandler_GetActiveRuntimes_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetActiveRuntimes FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(webxr.mojom.WebXrInternalsHandler_SubscribeToEvents_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.subscribeToEvents');
          const result = this.impl.subscribeToEvents(params.listener);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

webxr.mojom.WebXrInternalsHandlerReceiver = webxr.mojom.WebXrInternalsHandlerReceiver;

webxr.mojom.WebXrInternalsHandlerPtr = webxr.mojom.WebXrInternalsHandlerRemote;
webxr.mojom.WebXrInternalsHandlerRequest = webxr.mojom.WebXrInternalsHandlerPendingReceiver;


// Interface: XRInternalsSessionListener
mojo.internal.Struct(
    webxr.mojom.XRInternalsSessionListener_LogXrSessionRequested_ParamsSpec, 'webxr.mojom.XRInternalsSessionListener_LogXrSessionRequested_Params', [
      mojo.internal.StructField('session_requested_record', 0, 0, webxr.mojom.SessionRequestedRecordSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    webxr.mojom.XRInternalsSessionListener_LogXrSessionRejected_ParamsSpec, 'webxr.mojom.XRInternalsSessionListener_LogXrSessionRejected_Params', [
      mojo.internal.StructField('session_rejected_record', 0, 0, webxr.mojom.SessionRejectedRecordSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    webxr.mojom.XRInternalsSessionListener_LogXrSessionStarted_ParamsSpec, 'webxr.mojom.XRInternalsSessionListener_LogXrSessionStarted_Params', [
      mojo.internal.StructField('session_started_record', 0, 0, webxr.mojom.SessionStartedRecordSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    webxr.mojom.XRInternalsSessionListener_LogXrSessionStopped_ParamsSpec, 'webxr.mojom.XRInternalsSessionListener_LogXrSessionStopped_Params', [
      mojo.internal.StructField('session_stopped_record', 0, 0, webxr.mojom.SessionStoppedRecordSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    webxr.mojom.XRInternalsSessionListener_LogXrRuntimeAdded_ParamsSpec, 'webxr.mojom.XRInternalsSessionListener_LogXrRuntimeAdded_Params', [
      mojo.internal.StructField('runtime_added_record', 0, 0, webxr.mojom.RuntimeInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    webxr.mojom.XRInternalsSessionListener_LogXrRuntimeRemoved_ParamsSpec, 'webxr.mojom.XRInternalsSessionListener_LogXrRuntimeRemoved_Params', [
      mojo.internal.StructField('device_id', 0, 0, device.mojom.XRDeviceIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    webxr.mojom.XRInternalsSessionListener_LogFrameData_ParamsSpec, 'webxr.mojom.XRInternalsSessionListener_LogFrameData_Params', [
      mojo.internal.StructField('xrframe_statistics', 0, 0, device.mojom.XrFrameStatisticsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    webxr.mojom.XRInternalsSessionListener_LogConsoleMessages_ParamsSpec, 'webxr.mojom.XRInternalsSessionListener_LogConsoleMessages_Params', [
      mojo.internal.StructField('xrlogging_statistics', 0, 0, device.mojom.XrLogMessageSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

webxr.mojom.XRInternalsSessionListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

webxr.mojom.XRInternalsSessionListenerRemote = class {
  static get $interfaceName() {
    return 'webxr.mojom.XRInternalsSessionListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      webxr.mojom.XRInternalsSessionListenerPendingReceiver,
      handle);
    this.$ = new webxr.mojom.XRInternalsSessionListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  logXrSessionRequested(session_requested_record) {
    return this.$.logXrSessionRequested(session_requested_record);
  }
  logXrSessionRejected(session_rejected_record) {
    return this.$.logXrSessionRejected(session_rejected_record);
  }
  logXrSessionStarted(session_started_record) {
    return this.$.logXrSessionStarted(session_started_record);
  }
  logXrSessionStopped(session_stopped_record) {
    return this.$.logXrSessionStopped(session_stopped_record);
  }
  logXrRuntimeAdded(runtime_added_record) {
    return this.$.logXrRuntimeAdded(runtime_added_record);
  }
  logXrRuntimeRemoved(device_id) {
    return this.$.logXrRuntimeRemoved(device_id);
  }
  logFrameData(xrframe_statistics) {
    return this.$.logFrameData(xrframe_statistics);
  }
  logConsoleMessages(xrlogging_statistics) {
    return this.$.logConsoleMessages(xrlogging_statistics);
  }
};

webxr.mojom.XRInternalsSessionListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('XRInternalsSessionListener', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  logXrSessionRequested(session_requested_record) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      webxr.mojom.XRInternalsSessionListener_LogXrSessionRequested_ParamsSpec,
      null,
      [session_requested_record],
      false);
  }

  logXrSessionRejected(session_rejected_record) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      webxr.mojom.XRInternalsSessionListener_LogXrSessionRejected_ParamsSpec,
      null,
      [session_rejected_record],
      false);
  }

  logXrSessionStarted(session_started_record) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      webxr.mojom.XRInternalsSessionListener_LogXrSessionStarted_ParamsSpec,
      null,
      [session_started_record],
      false);
  }

  logXrSessionStopped(session_stopped_record) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      webxr.mojom.XRInternalsSessionListener_LogXrSessionStopped_ParamsSpec,
      null,
      [session_stopped_record],
      false);
  }

  logXrRuntimeAdded(runtime_added_record) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      webxr.mojom.XRInternalsSessionListener_LogXrRuntimeAdded_ParamsSpec,
      null,
      [runtime_added_record],
      false);
  }

  logXrRuntimeRemoved(device_id) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      webxr.mojom.XRInternalsSessionListener_LogXrRuntimeRemoved_ParamsSpec,
      null,
      [device_id],
      false);
  }

  logFrameData(xrframe_statistics) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      webxr.mojom.XRInternalsSessionListener_LogFrameData_ParamsSpec,
      null,
      [xrframe_statistics],
      false);
  }

  logConsoleMessages(xrlogging_statistics) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      webxr.mojom.XRInternalsSessionListener_LogConsoleMessages_ParamsSpec,
      null,
      [xrlogging_statistics],
      false);
  }

};

webxr.mojom.XRInternalsSessionListener.getRemote = function() {
  let remote = new webxr.mojom.XRInternalsSessionListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'webxr.mojom.XRInternalsSessionListener',
    'context');
  return remote.$;
};

webxr.mojom.XRInternalsSessionListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('XRInternalsSessionListener', [
      { explicit: null },
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
        
        // Try Method 0: LogXrSessionRequested
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(webxr.mojom.XRInternalsSessionListener_LogXrSessionRequested_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LogXrSessionRequested (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: LogXrSessionRejected
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(webxr.mojom.XRInternalsSessionListener_LogXrSessionRejected_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LogXrSessionRejected (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: LogXrSessionStarted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(webxr.mojom.XRInternalsSessionListener_LogXrSessionStarted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LogXrSessionStarted (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: LogXrSessionStopped
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(webxr.mojom.XRInternalsSessionListener_LogXrSessionStopped_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LogXrSessionStopped (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: LogXrRuntimeAdded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(webxr.mojom.XRInternalsSessionListener_LogXrRuntimeAdded_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LogXrRuntimeAdded (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: LogXrRuntimeRemoved
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(webxr.mojom.XRInternalsSessionListener_LogXrRuntimeRemoved_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LogXrRuntimeRemoved (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: LogFrameData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(webxr.mojom.XRInternalsSessionListener_LogFrameData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LogFrameData (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: LogConsoleMessages
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(webxr.mojom.XRInternalsSessionListener_LogConsoleMessages_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LogConsoleMessages (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
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
          const params = decoder.decodeStructInline(webxr.mojom.XRInternalsSessionListener_LogXrSessionRequested_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.logXrSessionRequested');
          const result = this.impl.logXrSessionRequested(params.session_requested_record);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(webxr.mojom.XRInternalsSessionListener_LogXrSessionRejected_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.logXrSessionRejected');
          const result = this.impl.logXrSessionRejected(params.session_rejected_record);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(webxr.mojom.XRInternalsSessionListener_LogXrSessionStarted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.logXrSessionStarted');
          const result = this.impl.logXrSessionStarted(params.session_started_record);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(webxr.mojom.XRInternalsSessionListener_LogXrSessionStopped_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.logXrSessionStopped');
          const result = this.impl.logXrSessionStopped(params.session_stopped_record);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(webxr.mojom.XRInternalsSessionListener_LogXrRuntimeAdded_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.logXrRuntimeAdded');
          const result = this.impl.logXrRuntimeAdded(params.runtime_added_record);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(webxr.mojom.XRInternalsSessionListener_LogXrRuntimeRemoved_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.logXrRuntimeRemoved');
          const result = this.impl.logXrRuntimeRemoved(params.device_id);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(webxr.mojom.XRInternalsSessionListener_LogFrameData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.logFrameData');
          const result = this.impl.logFrameData(params.xrframe_statistics);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(webxr.mojom.XRInternalsSessionListener_LogConsoleMessages_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.logConsoleMessages');
          const result = this.impl.logConsoleMessages(params.xrlogging_statistics);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

webxr.mojom.XRInternalsSessionListenerReceiver = webxr.mojom.XRInternalsSessionListenerReceiver;

webxr.mojom.XRInternalsSessionListenerPtr = webxr.mojom.XRInternalsSessionListenerRemote;
webxr.mojom.XRInternalsSessionListenerRequest = webxr.mojom.XRInternalsSessionListenerPendingReceiver;

