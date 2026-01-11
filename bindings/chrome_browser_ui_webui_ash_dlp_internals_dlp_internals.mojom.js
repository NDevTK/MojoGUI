// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/dlp_internals/dlp_internals.mojom
// Module: dlp_internals.mojom

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
var dlp_internals = dlp_internals || {};
dlp_internals.mojom = dlp_internals.mojom || {};
var url = url || {};

dlp_internals.mojom.EndpointTypeSpec = { $: mojo.internal.Enum() };
dlp_internals.mojom.ContentRestrictionSpec = { $: mojo.internal.Enum() };
dlp_internals.mojom.LevelSpec = { $: mojo.internal.Enum() };
dlp_internals.mojom.ComponentSpec = { $: mojo.internal.Enum() };
dlp_internals.mojom.RestrictionSpec = { $: mojo.internal.Enum() };
dlp_internals.mojom.ModeSpec = { $: mojo.internal.Enum() };
dlp_internals.mojom.UserTypeSpec = { $: mojo.internal.Enum() };
dlp_internals.mojom.DataTransferEndpointSpec = { $: {} };
dlp_internals.mojom.ContentRestrictionInfoSpec = { $: {} };
dlp_internals.mojom.RenderFrameHostInfoSpec = { $: {} };
dlp_internals.mojom.WebContentsInfoSpec = { $: {} };
dlp_internals.mojom.EventDestinationSpec = { $: {} };
dlp_internals.mojom.DlpEventSpec = { $: {} };
dlp_internals.mojom.FileDatabaseEntrySpec = { $: {} };
dlp_internals.mojom.ReportingObserver = {};
dlp_internals.mojom.ReportingObserver.$interfaceName = 'dlp_internals.mojom.ReportingObserver';
dlp_internals.mojom.ReportingObserver_OnReportEvent_ParamsSpec = { $: {} };
dlp_internals.mojom.PageHandler = {};
dlp_internals.mojom.PageHandler.$interfaceName = 'dlp_internals.mojom.PageHandler';
dlp_internals.mojom.PageHandler_GetClipboardDataSource_ParamsSpec = { $: {} };
dlp_internals.mojom.PageHandler_GetClipboardDataSource_ResponseParamsSpec = { $: {} };
dlp_internals.mojom.PageHandler_GetContentRestrictionsInfo_ParamsSpec = { $: {} };
dlp_internals.mojom.PageHandler_GetContentRestrictionsInfo_ResponseParamsSpec = { $: {} };
dlp_internals.mojom.PageHandler_ObserveReporting_ParamsSpec = { $: {} };
dlp_internals.mojom.PageHandler_GetFilesDatabaseEntries_ParamsSpec = { $: {} };
dlp_internals.mojom.PageHandler_GetFilesDatabaseEntries_ResponseParamsSpec = { $: {} };
dlp_internals.mojom.PageHandler_GetFileInode_ParamsSpec = { $: {} };
dlp_internals.mojom.PageHandler_GetFileInode_ResponseParamsSpec = { $: {} };

// Enum: EndpointType
dlp_internals.mojom.EndpointType = {
  kDefault: 0,
  kUrl: 1,
  kClipboardHistory: 2,
  kUnknownVm: 3,
  kArc: 4,
  kBorealis: 5,
  kCrostini: 6,
  kPluginVm: 7,
};

// Enum: ContentRestriction
dlp_internals.mojom.ContentRestriction = {
  kScreenshot: 0,
  kPrivacyScreen: 1,
  kPrint: 2,
  kScreenShare: 3,
};

// Enum: Level
dlp_internals.mojom.Level = {
  kNotSet: 0,
  kReport: 1,
  kWarn: 2,
  kBlock: 3,
  kAllow: 4,
};

// Enum: Component
dlp_internals.mojom.Component = {
  kUndefinedComponent: 0,
  kArc: 1,
  kCrostini: 2,
  kPluginVm: 3,
  kUsb: 4,
  kDrive: 5,
  kOnedrive: 6,
};

// Enum: Restriction
dlp_internals.mojom.Restriction = {
  kUndefinedRestriction: 0,
  kClipboard: 1,
  kScreenshot: 2,
  kScreencast: 3,
  kPrinting: 4,
  kEprivacy: 5,
  kFiles: 6,
};

// Enum: Mode
dlp_internals.mojom.Mode = {
  kUndefinedMode: 0,
  kBlock: 1,
  kReport: 2,
  kWarn: 3,
  kWarnProceed: 4,
};

// Enum: UserType
dlp_internals.mojom.UserType = {
  kUndefinedUserType: 0,
  kRegular: 1,
  kManagedGuest: 2,
  kKiosk: 3,
};

// Struct: DataTransferEndpoint
mojo.internal.Struct(
    dlp_internals.mojom.DataTransferEndpointSpec, 'dlp_internals.mojom.DataTransferEndpoint', [
      mojo.internal.StructField('type', 0, 0, dlp_internals.mojom.EndpointTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ContentRestrictionInfo
mojo.internal.Struct(
    dlp_internals.mojom.ContentRestrictionInfoSpec, 'dlp_internals.mojom.ContentRestrictionInfo', [
      mojo.internal.StructField('restriction', 0, 0, dlp_internals.mojom.ContentRestrictionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('level', 8, 0, dlp_internals.mojom.LevelSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: RenderFrameHostInfo
mojo.internal.Struct(
    dlp_internals.mojom.RenderFrameHostInfoSpec, 'dlp_internals.mojom.RenderFrameHostInfo', [
      mojo.internal.StructField('last_committed_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('restrictions_info', 8, 0, mojo.internal.Array(dlp_internals.mojom.ContentRestrictionInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: WebContentsInfo
mojo.internal.Struct(
    dlp_internals.mojom.WebContentsInfoSpec, 'dlp_internals.mojom.WebContentsInfo', [
      mojo.internal.StructField('last_committed_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('restrictions_info', 8, 0, mojo.internal.Array(dlp_internals.mojom.ContentRestrictionInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('frames_info', 16, 0, mojo.internal.Array(dlp_internals.mojom.RenderFrameHostInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: EventDestination
mojo.internal.Struct(
    dlp_internals.mojom.EventDestinationSpec, 'dlp_internals.mojom.EventDestination', [
      mojo.internal.StructField('kUndefinedComponent', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DlpEvent
mojo.internal.Struct(
    dlp_internals.mojom.DlpEventSpec, 'dlp_internals.mojom.DlpEvent', [
      mojo.internal.StructField('kUndefinedRestriction', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: FileDatabaseEntry
mojo.internal.Struct(
    dlp_internals.mojom.FileDatabaseEntrySpec, 'dlp_internals.mojom.FileDatabaseEntry', [
      mojo.internal.StructField('inode_$value', 0, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'inode_$flag', originalFieldName: 'inode' }),
      mojo.internal.StructField('crtime_$value', 8, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'crtime_$flag', originalFieldName: 'crtime' }),
      mojo.internal.StructField('source_url', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('referrer_url', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('inode_$flag', 32, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'inode_$value', originalFieldName: 'inode' }),
      mojo.internal.StructField('crtime_$flag', 32, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'crtime_$value', originalFieldName: 'crtime' }),
    ],
    [[0, 48]]);

// Interface: ReportingObserver
mojo.internal.Struct(
    dlp_internals.mojom.ReportingObserver_OnReportEvent_ParamsSpec, 'dlp_internals.mojom.ReportingObserver_OnReportEvent_Params', [
      mojo.internal.StructField('event', 0, 0, dlp_internals.mojom.DlpEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

dlp_internals.mojom.ReportingObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

dlp_internals.mojom.ReportingObserverRemote = class {
  static get $interfaceName() {
    return 'dlp_internals.mojom.ReportingObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      dlp_internals.mojom.ReportingObserverPendingReceiver,
      handle);
    this.$ = new dlp_internals.mojom.ReportingObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onReportEvent(event) {
    return this.$.onReportEvent(event);
  }
};

dlp_internals.mojom.ReportingObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ReportingObserver', [
      { explicit: null },
    ]);
  }

  onReportEvent(event) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      dlp_internals.mojom.ReportingObserver_OnReportEvent_ParamsSpec,
      null,
      [event],
      false);
  }

};

dlp_internals.mojom.ReportingObserver.getRemote = function() {
  let remote = new dlp_internals.mojom.ReportingObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'dlp_internals.mojom.ReportingObserver',
    'context');
  return remote.$;
};

dlp_internals.mojom.ReportingObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ReportingObserver', [
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
        
        // Try Method 0: OnReportEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(dlp_internals.mojom.ReportingObserver_OnReportEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnReportEvent (0)');
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
          const params = decoder.decodeStructInline(dlp_internals.mojom.ReportingObserver_OnReportEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onReportEvent');
          const result = this.impl.onReportEvent(params.event);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

dlp_internals.mojom.ReportingObserverReceiver = dlp_internals.mojom.ReportingObserverReceiver;

dlp_internals.mojom.ReportingObserverPtr = dlp_internals.mojom.ReportingObserverRemote;
dlp_internals.mojom.ReportingObserverRequest = dlp_internals.mojom.ReportingObserverPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    dlp_internals.mojom.PageHandler_GetClipboardDataSource_ParamsSpec, 'dlp_internals.mojom.PageHandler_GetClipboardDataSource_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    dlp_internals.mojom.PageHandler_GetClipboardDataSource_ResponseParamsSpec, 'dlp_internals.mojom.PageHandler_GetClipboardDataSource_ResponseParams', [
      mojo.internal.StructField('source', 0, 0, dlp_internals.mojom.DataTransferEndpointSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    dlp_internals.mojom.PageHandler_GetContentRestrictionsInfo_ParamsSpec, 'dlp_internals.mojom.PageHandler_GetContentRestrictionsInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    dlp_internals.mojom.PageHandler_GetContentRestrictionsInfo_ResponseParamsSpec, 'dlp_internals.mojom.PageHandler_GetContentRestrictionsInfo_ResponseParams', [
      mojo.internal.StructField('web_contents_info', 0, 0, mojo.internal.Array(dlp_internals.mojom.WebContentsInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    dlp_internals.mojom.PageHandler_ObserveReporting_ParamsSpec, 'dlp_internals.mojom.PageHandler_ObserveReporting_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(dlp_internals.mojom.ReportingObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    dlp_internals.mojom.PageHandler_GetFilesDatabaseEntries_ParamsSpec, 'dlp_internals.mojom.PageHandler_GetFilesDatabaseEntries_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    dlp_internals.mojom.PageHandler_GetFilesDatabaseEntries_ResponseParamsSpec, 'dlp_internals.mojom.PageHandler_GetFilesDatabaseEntries_ResponseParams', [
      mojo.internal.StructField('db_entries', 0, 0, mojo.internal.Array(dlp_internals.mojom.FileDatabaseEntrySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    dlp_internals.mojom.PageHandler_GetFileInode_ParamsSpec, 'dlp_internals.mojom.PageHandler_GetFileInode_Params', [
      mojo.internal.StructField('file_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    dlp_internals.mojom.PageHandler_GetFileInode_ResponseParamsSpec, 'dlp_internals.mojom.PageHandler_GetFileInode_ResponseParams', [
      mojo.internal.StructField('inode', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

dlp_internals.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

dlp_internals.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'dlp_internals.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      dlp_internals.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new dlp_internals.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getClipboardDataSource() {
    return this.$.getClipboardDataSource();
  }
  getContentRestrictionsInfo() {
    return this.$.getContentRestrictionsInfo();
  }
  observeReporting(observer) {
    return this.$.observeReporting(observer);
  }
  getFilesDatabaseEntries() {
    return this.$.getFilesDatabaseEntries();
  }
  getFileInode(file_name) {
    return this.$.getFileInode(file_name);
  }
};

dlp_internals.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getClipboardDataSource() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      dlp_internals.mojom.PageHandler_GetClipboardDataSource_ParamsSpec,
      dlp_internals.mojom.PageHandler_GetClipboardDataSource_ResponseParamsSpec,
      [],
      false);
  }

  getContentRestrictionsInfo() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      dlp_internals.mojom.PageHandler_GetContentRestrictionsInfo_ParamsSpec,
      dlp_internals.mojom.PageHandler_GetContentRestrictionsInfo_ResponseParamsSpec,
      [],
      false);
  }

  observeReporting(observer) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      dlp_internals.mojom.PageHandler_ObserveReporting_ParamsSpec,
      null,
      [observer],
      false);
  }

  getFilesDatabaseEntries() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      dlp_internals.mojom.PageHandler_GetFilesDatabaseEntries_ParamsSpec,
      dlp_internals.mojom.PageHandler_GetFilesDatabaseEntries_ResponseParamsSpec,
      [],
      false);
  }

  getFileInode(file_name) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      dlp_internals.mojom.PageHandler_GetFileInode_ParamsSpec,
      dlp_internals.mojom.PageHandler_GetFileInode_ResponseParamsSpec,
      [file_name],
      false);
  }

};

dlp_internals.mojom.PageHandler.getRemote = function() {
  let remote = new dlp_internals.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'dlp_internals.mojom.PageHandler',
    'context');
  return remote.$;
};

dlp_internals.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
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
        
        // Try Method 0: GetClipboardDataSource
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(dlp_internals.mojom.PageHandler_GetClipboardDataSource_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetClipboardDataSource (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetContentRestrictionsInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(dlp_internals.mojom.PageHandler_GetContentRestrictionsInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetContentRestrictionsInfo (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ObserveReporting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(dlp_internals.mojom.PageHandler_ObserveReporting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObserveReporting (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetFilesDatabaseEntries
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(dlp_internals.mojom.PageHandler_GetFilesDatabaseEntries_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetFilesDatabaseEntries (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetFileInode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(dlp_internals.mojom.PageHandler_GetFileInode_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetFileInode (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
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
          const params = decoder.decodeStructInline(dlp_internals.mojom.PageHandler_GetClipboardDataSource_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getClipboardDataSource');
          const result = this.impl.getClipboardDataSource();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, dlp_internals.mojom.PageHandler_GetClipboardDataSource_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetClipboardDataSource FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(dlp_internals.mojom.PageHandler_GetContentRestrictionsInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getContentRestrictionsInfo');
          const result = this.impl.getContentRestrictionsInfo();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, dlp_internals.mojom.PageHandler_GetContentRestrictionsInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetContentRestrictionsInfo FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(dlp_internals.mojom.PageHandler_ObserveReporting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.observeReporting');
          const result = this.impl.observeReporting(params.observer);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(dlp_internals.mojom.PageHandler_GetFilesDatabaseEntries_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getFilesDatabaseEntries');
          const result = this.impl.getFilesDatabaseEntries();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, dlp_internals.mojom.PageHandler_GetFilesDatabaseEntries_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetFilesDatabaseEntries FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(dlp_internals.mojom.PageHandler_GetFileInode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getFileInode');
          const result = this.impl.getFileInode(params.file_name);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, dlp_internals.mojom.PageHandler_GetFileInode_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetFileInode FAILED:', e));
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

dlp_internals.mojom.PageHandlerReceiver = dlp_internals.mojom.PageHandlerReceiver;

dlp_internals.mojom.PageHandlerPtr = dlp_internals.mojom.PageHandlerRemote;
dlp_internals.mojom.PageHandlerRequest = dlp_internals.mojom.PageHandlerPendingReceiver;

