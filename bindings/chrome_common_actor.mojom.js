// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/actor.mojom
// Module: actor.mojom

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

        const ua = navigator.userAgent;
        const m = ua.match(/Chrome\/([\d.]+)/);
        const v = m ? m[1] : "145.0.7625.0";
        const p = v.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        
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
var actor = actor || {};
actor.mojom = actor.mojom || {};
var mojo_base = mojo_base || {};
var blink = blink || {};
var gfx = gfx || {};

actor.mojom.TypeSpec = { $: mojo.internal.Enum() };
actor.mojom.CountSpec = { $: mojo.internal.Enum() };
actor.mojom.ModeSpec = { $: mojo.internal.Enum() };
actor.mojom.ScrollDirectionSpec = { $: mojo.internal.Enum() };
actor.mojom.ActionResultCodeSpec = { $: mojo.internal.Enum() };
actor.mojom.JournalEntryTypeSpec = { $: mojo.internal.Enum() };
actor.mojom.ToolTargetSpec = { $: {} };
actor.mojom.ToolActionSpec = { $: {} };
actor.mojom.ObservedToolTargetSpec = { $: {} };
actor.mojom.ClickActionSpec = { $: {} };
actor.mojom.MouseMoveActionSpec = { $: {} };
actor.mojom.ScrollToActionSpec = { $: {} };
actor.mojom.TypeActionSpec = { $: {} };
actor.mojom.ScrollActionSpec = { $: {} };
actor.mojom.SelectActionSpec = { $: {} };
actor.mojom.DragAndReleaseActionSpec = { $: {} };
actor.mojom.ScriptToolActionSpec = { $: {} };
actor.mojom.TaskIdSpec = { $: {} };
actor.mojom.ToolInvocationSpec = { $: {} };
actor.mojom.ActionResultSpec = { $: {} };
actor.mojom.JournalDetailsSpec = { $: {} };
actor.mojom.JournalEntrySpec = { $: {} };
actor.mojom.JournalClient = {};
actor.mojom.JournalClient.$interfaceName = 'actor.mojom.JournalClient';
actor.mojom.JournalClient_AddEntriesToJournal_ParamsSpec = { $: {} };
actor.mojom.PageStabilityMonitor = {};
actor.mojom.PageStabilityMonitor.$interfaceName = 'actor.mojom.PageStabilityMonitor';
actor.mojom.PageStabilityMonitor_NotifyWhenStable_ParamsSpec = { $: {} };
actor.mojom.PageStabilityMonitor_NotifyWhenStable_ResponseParamsSpec = { $: {} };

// Enum: Type
actor.mojom.Type = {
  kLeft: 1,
  kRight: 2,
};

// Enum: Count
actor.mojom.Count = {
  kSingle: 1,
  kDouble: 2,
};

// Enum: Mode
actor.mojom.Mode = {
  kDeleteExisting: 0,
  kPrepend: 1,
  kAppend: 2,
};

// Enum: ScrollDirection
actor.mojom.ScrollDirection = {
  kLeft: 1,
  kRight: 2,
  kUp: 3,
  kDown: 4,
};

// Enum: ActionResultCode
actor.mojom.ActionResultCode = {
  kOk: 0,
  kUrlBlocked: 11,
  kNewTabCreationFailed: 12,
  kTabWentAway: 13,
  kTaskWentAway: 14,
  kCrossOriginNavigation: 15,
  kToolUnknown: 16,
  kFrameWentAway: 17,
  kInvalidDomNodeId: 18,
  kElementDisabled: 19,
  kElementOffscreen: 20,
  kCoordinatesOutOfBounds: 21,
  kArgumentsInvalid: 22,
  kTaskPaused: 23,
  kExecutorDestroyed: 24,
  kWindowWentAway: 25,
  kFrameLocationChangedSinceObservation: 26,
  kTriggeredNavigationBlocked: 27,
  kEmptyActionSequence: 28,
  kExecutorBusy: 29,
  kObservedTargetElementDestroyed: 30,
  kObservedTargetElementChanged: 31,
  kTargetNodeInteractionPointObscured: 32,
  kToolTimeout: 33,
  kFilePickerTriggered: 34,
  kFilePickerConfirmed: 35,
  kFilePickerCancelled: 36,
  kExecutionEngineExistingAction: 37,
  kExternalProtocolNavigationBlocked: 38,
  kRendererCrashed: 39,
  kNotImplemented: 40,
  kInvokeCanceled: 41,
  kInvalidTaskStateForAct: 42,
  kActionsCancelled: 43,
  kNavigateInvalidUrl: 100,
  kNavigateFailedToStart: 101,
  kNavigateCommittedErrorPage: 102,
  kClickSuppressed: 200,
  kDragAndReleaseFromOffscreen: 300,
  kDragAndReleaseToOffscreen: 301,
  kDragAndReleaseFromMoveSuppressed: 302,
  kDragAndReleaseDownSuppressed: 303,
  kDragAndReleaseToMoveSuppressed: 304,
  kDragAndReleaseUpSuppressed: 305,
  kMouseMoveEventSuppressed: 400,
  kScrollNoScrollingElement: 500,
  kScrollTargetNotUserScrollable: 501,
  kScrollOffsetDidNotChange: 502,
  kSelectInvalidElement: 600,
  kSelectNoSuchOption: 601,
  kSelectOptionDisabled: 602,
  kTypeTargetNotElement: 700,
  kTypeTargetNotFocusable: 701,
  kTypeUnsupportedCharacters: 702,
  kTypeFailedMappingCharToKey: 703,
  kTypeKeyDownSuppressed: 704,
  kTypeInvalidTextEncoding: 705,
  kHistoryNoNavigationsCreated: 800,
  kHistoryCancelledBeforeStart: 801,
  kHistoryNoBackEntries: 802,
  kHistoryNoForwardEntries: 803,
  kHistoryFailedBeforeCommit: 804,
  kHistoryErrorPage: 805,
  kHistoryNavigationEntryChanged: 806,
  kLoginNoCredentialsAvailable: 900,
  kLoginNotLoginPage: 901,
  kLoginCredentialsEnteredButAnotherActionNeeded: 902,
  kLoginNoFillableFields: 903,
  kLoginFillingNotAllowed: 904,
  kLoginPageChangedDuringSelection: 905,
  kLoginDeviceReauthRequired: 906,
  kLoginDeviceReauthFailed: 907,
  kLoginFeatureDisabled: 908,
  kLoginTooManyRequests: 909,
  kMediaControlNoMedia: 1000,
  kFormFillingAutofillUnavailable: 1100,
  kFormFillingNoSuggestionsAvailable: 1101,
  kFormFillingDialogError: 1102,
  kFormFillingFieldNotFound: 1103,
  kFormFillingUnknownAutofillError: 1104,
  kFormFillingNoLastTabObservation: 1105,
  kFormFillingInvalidSuggestionId: 1106,
  kScriptToolNoResponse: 1200,
  kScriptToolInvalidName: 1201,
  kScriptToolInvalidInputArguments: 1202,
  kScriptToolInvocationFailed: 1203,
  kActorUiError: 1300,
};

// Enum: JournalEntryType
actor.mojom.JournalEntryType = {
  kBegin: 0,
  kEnd: 1,
  kInstant: 2,
};

// Union: ToolTarget
mojo.internal.Union(
    actor.mojom.ToolTargetSpec, 'actor.mojom.ToolTarget', {
      'dom_node_id': {
        'ordinal': 0,
        'type': mojo.internal.Int32,
        'nullable': false,
      },
      'coordinate_dip': {
        'ordinal': 1,
        'type': gfx.mojom.PointSpec.$,
        'nullable': false,
      },
    });

// Union: ToolAction
mojo.internal.Union(
    actor.mojom.ToolActionSpec, 'actor.mojom.ToolAction', {
      'click': {
        'ordinal': 0,
        'type': actor.mojom.ClickActionSpec.$,
        'nullable': false,
      },
      'drag_and_release': {
        'ordinal': 1,
        'type': actor.mojom.DragAndReleaseActionSpec.$,
        'nullable': false,
      },
      'mouse_move': {
        'ordinal': 2,
        'type': actor.mojom.MouseMoveActionSpec.$,
        'nullable': false,
      },
      'scroll': {
        'ordinal': 3,
        'type': actor.mojom.ScrollActionSpec.$,
        'nullable': false,
      },
      'select': {
        'ordinal': 4,
        'type': actor.mojom.SelectActionSpec.$,
        'nullable': false,
      },
      'type': {
        'ordinal': 5,
        'type': actor.mojom.TypeActionSpec.$,
        'nullable': false,
      },
      'script_tool': {
        'ordinal': 6,
        'type': actor.mojom.ScriptToolActionSpec.$,
        'nullable': false,
      },
      'scroll_to': {
        'ordinal': 7,
        'type': actor.mojom.ScrollToActionSpec.$,
        'nullable': false,
      },
    });

// Struct: ObservedToolTarget
mojo.internal.Struct(
    actor.mojom.ObservedToolTargetSpec, 'actor.mojom.ObservedToolTarget', [
      mojo.internal.StructField('node_attribute', 0, 0, blink.mojom.AIPageContentAttributesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ClickAction
mojo.internal.Struct(
    actor.mojom.ClickActionSpec, 'actor.mojom.ClickAction', [
      mojo.internal.StructField('kLeft', 0, 0, mojo.internal.Pointer, 1, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: MouseMoveAction
mojo.internal.Struct(
    actor.mojom.MouseMoveActionSpec, 'actor.mojom.MouseMoveAction', [
    ],
    [[0, 8]]);

// Struct: ScrollToAction
mojo.internal.Struct(
    actor.mojom.ScrollToActionSpec, 'actor.mojom.ScrollToAction', [
    ],
    [[0, 8]]);

// Struct: TypeAction
mojo.internal.Struct(
    actor.mojom.TypeActionSpec, 'actor.mojom.TypeAction', [
      mojo.internal.StructField('kDeleteExisting', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ScrollAction
mojo.internal.Struct(
    actor.mojom.ScrollActionSpec, 'actor.mojom.ScrollAction', [
      mojo.internal.StructField('kLeft', 0, 0, mojo.internal.Pointer, 1, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SelectAction
mojo.internal.Struct(
    actor.mojom.SelectActionSpec, 'actor.mojom.SelectAction', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DragAndReleaseAction
mojo.internal.Struct(
    actor.mojom.DragAndReleaseActionSpec, 'actor.mojom.DragAndReleaseAction', [
      mojo.internal.StructField('to_target', 0, 0, actor.mojom.ToolTargetSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ScriptToolAction
mojo.internal.Struct(
    actor.mojom.ScriptToolActionSpec, 'actor.mojom.ScriptToolAction', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('input_arguments', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TaskId
mojo.internal.Struct(
    actor.mojom.TaskIdSpec, 'actor.mojom.TaskId', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ToolInvocation
mojo.internal.Struct(
    actor.mojom.ToolInvocationSpec, 'actor.mojom.ToolInvocation', [
      mojo.internal.StructField('task_id', 0, 0, actor.mojom.TaskIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('action', 8, 0, actor.mojom.ToolActionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('target', 16, 0, actor.mojom.ToolTargetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('observed_target', 24, 0, actor.mojom.ObservedToolTargetSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ActionResult
mojo.internal.Struct(
    actor.mojom.ActionResultSpec, 'actor.mojom.ActionResult', [
      mojo.internal.StructField('code', 0, 0, actor.mojom.ActionResultCodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('script_tool_response', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('execution_end_time', 24, 0, mojo_base.mojom.TimeTicksSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('requires_page_stabilization', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: JournalDetails
mojo.internal.Struct(
    actor.mojom.JournalDetailsSpec, 'actor.mojom.JournalDetails', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: JournalEntry
mojo.internal.Struct(
    actor.mojom.JournalEntrySpec, 'actor.mojom.JournalEntry', [
      mojo.internal.StructField('type', 0, 0, actor.mojom.JournalEntryTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('task_id', 8, 0, actor.mojom.TaskIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('timestamp', 16, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('event', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('track_uuid', 32, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('details', 40, 0, mojo.internal.Array(actor.mojom.JournalDetailsSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 56]]);

// Interface: JournalClient
mojo.internal.Struct(
    actor.mojom.JournalClient_AddEntriesToJournal_ParamsSpec, 'actor.mojom.JournalClient_AddEntriesToJournal_Params', [
      mojo.internal.StructField('entries', 0, 0, mojo.internal.Array(actor.mojom.JournalEntrySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

actor.mojom.JournalClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

actor.mojom.JournalClientRemote = class {
  static get $interfaceName() {
    return 'actor.mojom.JournalClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      actor.mojom.JournalClientPendingReceiver,
      handle);
    this.$ = new actor.mojom.JournalClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

actor.mojom.JournalClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('JournalClient', [
      { explicit: null },
    ]);
  }

  addEntriesToJournal(entries) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      actor.mojom.JournalClient_AddEntriesToJournal_ParamsSpec,
      null,
      [entries],
      false);
  }

};

actor.mojom.JournalClient.getRemote = function() {
  let remote = new actor.mojom.JournalClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'actor.mojom.JournalClient',
    'context');
  return remote.$;
};

actor.mojom.JournalClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('JournalClient', [
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
        
        // Try Method 0: AddEntriesToJournal
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(actor.mojom.JournalClient_AddEntriesToJournal_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddEntriesToJournal (0)');
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
          const params = decoder.decodeStructInline(actor.mojom.JournalClient_AddEntriesToJournal_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.addEntriesToJournal');
          const result = this.impl.addEntriesToJournal(params.entries);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

actor.mojom.JournalClientReceiver = actor.mojom.JournalClientReceiver;

actor.mojom.JournalClientPtr = actor.mojom.JournalClientRemote;
actor.mojom.JournalClientRequest = actor.mojom.JournalClientPendingReceiver;


// Interface: PageStabilityMonitor
mojo.internal.Struct(
    actor.mojom.PageStabilityMonitor_NotifyWhenStable_ParamsSpec, 'actor.mojom.PageStabilityMonitor_NotifyWhenStable_Params', [
      mojo.internal.StructField('observation_delay', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    actor.mojom.PageStabilityMonitor_NotifyWhenStable_ResponseParamsSpec, 'actor.mojom.PageStabilityMonitor_NotifyWhenStable_ResponseParams', [
    ],
    [[0, 8]]);

actor.mojom.PageStabilityMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

actor.mojom.PageStabilityMonitorRemote = class {
  static get $interfaceName() {
    return 'actor.mojom.PageStabilityMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      actor.mojom.PageStabilityMonitorPendingReceiver,
      handle);
    this.$ = new actor.mojom.PageStabilityMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

actor.mojom.PageStabilityMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageStabilityMonitor', [
      { explicit: null },
    ]);
  }

  notifyWhenStable(observation_delay) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      actor.mojom.PageStabilityMonitor_NotifyWhenStable_ParamsSpec,
      actor.mojom.PageStabilityMonitor_NotifyWhenStable_ResponseParamsSpec,
      [observation_delay],
      false);
  }

};

actor.mojom.PageStabilityMonitor.getRemote = function() {
  let remote = new actor.mojom.PageStabilityMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'actor.mojom.PageStabilityMonitor',
    'context');
  return remote.$;
};

actor.mojom.PageStabilityMonitorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageStabilityMonitor', [
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
        
        // Try Method 0: NotifyWhenStable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(actor.mojom.PageStabilityMonitor_NotifyWhenStable_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyWhenStable (0)');
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
          const params = decoder.decodeStructInline(actor.mojom.PageStabilityMonitor_NotifyWhenStable_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyWhenStable');
          const result = this.impl.notifyWhenStable(params.observation_delay);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, actor.mojom.PageStabilityMonitor_NotifyWhenStable_ResponseParamsSpec);
               responder(response);
            });
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

actor.mojom.PageStabilityMonitorReceiver = actor.mojom.PageStabilityMonitorReceiver;

actor.mojom.PageStabilityMonitorPtr = actor.mojom.PageStabilityMonitorRemote;
actor.mojom.PageStabilityMonitorRequest = actor.mojom.PageStabilityMonitorPendingReceiver;

