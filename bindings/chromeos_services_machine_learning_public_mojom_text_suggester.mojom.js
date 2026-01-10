// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/text_suggester.mojom
// Module: chromeos.machine_learning.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.mojom = chromeos.machine_learning.mojom || {};

chromeos.machine_learning.mojom.TextSuggestionModeSpec = { $: mojo.internal.Enum() };
chromeos.machine_learning.mojom.StatusSpec = { $: mojo.internal.Enum() };
chromeos.machine_learning.mojom.MultiWordExperimentGroupSpec = { $: mojo.internal.Enum() };
chromeos.machine_learning.mojom.TextSuggestionCandidateSpec = { $: {} };
chromeos.machine_learning.mojom.NextWordCompletionCandidateSpec = { $: {} };
chromeos.machine_learning.mojom.TextSuggesterQuerySpec = { $: {} };
chromeos.machine_learning.mojom.MultiWordSuggestionCandidateSpec = { $: {} };
chromeos.machine_learning.mojom.TextSuggesterResultSpec = { $: {} };
chromeos.machine_learning.mojom.TextSuggesterSpecSpec = { $: {} };
chromeos.machine_learning.mojom.TextSuggester = {};
chromeos.machine_learning.mojom.TextSuggester.$interfaceName = 'chromeos.machine_learning.mojom.TextSuggester';
chromeos.machine_learning.mojom.TextSuggester_Suggest_ParamsSpec = { $: {} };
chromeos.machine_learning.mojom.TextSuggester_Suggest_ResponseParamsSpec = { $: {} };

// Enum: TextSuggestionMode
chromeos.machine_learning.mojom.TextSuggestionMode = {
  kPrediction: 1,
  kCompletion: 2,
};

// Enum: Status
chromeos.machine_learning.mojom.Status = {
  OK: 0,
  ERROR: 1,
};

// Enum: MultiWordExperimentGroup
chromeos.machine_learning.mojom.MultiWordExperimentGroup = {
  kDefault: 0,
  kGboard: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
};

// Union: TextSuggestionCandidate
mojo.internal.Union(
    chromeos.machine_learning.mojom.TextSuggestionCandidateSpec, 'chromeos.machine_learning.mojom.TextSuggestionCandidate', {
      'multi_word': {
        'ordinal': 0,
        'type': chromeos.machine_learning.mojom.MultiWordSuggestionCandidateSpec.$,
        'nullable': false,
      },
    });

// Struct: NextWordCompletionCandidate
mojo.internal.Struct(
    chromeos.machine_learning.mojom.NextWordCompletionCandidateSpec, 'chromeos.machine_learning.mojom.NextWordCompletionCandidate', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('normalized_score', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TextSuggesterQuery
mojo.internal.Struct(
    chromeos.machine_learning.mojom.TextSuggesterQuerySpec, 'chromeos.machine_learning.mojom.TextSuggesterQuery', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('next_word_candidates', 8, 0, mojo.internal.Array(chromeos.machine_learning.mojom.NextWordCompletionCandidateSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('suggestion_mode', 16, 0, chromeos.machine_learning.mojom.TextSuggestionModeSpec.$, null, false, 1, undefined),
    ],
    [[0, 24], [1, 32]]);

// Struct: MultiWordSuggestionCandidate
mojo.internal.Struct(
    chromeos.machine_learning.mojom.MultiWordSuggestionCandidateSpec, 'chromeos.machine_learning.mojom.MultiWordSuggestionCandidate', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('normalized_score', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TextSuggesterResult
mojo.internal.Struct(
    chromeos.machine_learning.mojom.TextSuggesterResultSpec, 'chromeos.machine_learning.mojom.TextSuggesterResult', [
      mojo.internal.StructField('OK', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TextSuggesterSpec
mojo.internal.Struct(
    chromeos.machine_learning.mojom.TextSuggesterSpecSpec, 'chromeos.machine_learning.mojom.TextSuggesterSpec', [
      mojo.internal.StructField('multi_word_experiment', 0, 0, chromeos.machine_learning.mojom.MultiWordExperimentGroupSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: TextSuggester
mojo.internal.Struct(
    chromeos.machine_learning.mojom.TextSuggester_Suggest_ParamsSpec, 'chromeos.machine_learning.mojom.TextSuggester_Suggest_Params', [
      mojo.internal.StructField('query', 0, 0, chromeos.machine_learning.mojom.TextSuggesterQuerySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.TextSuggester_Suggest_ResponseParamsSpec, 'chromeos.machine_learning.mojom.TextSuggester_Suggest_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.machine_learning.mojom.TextSuggesterResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

chromeos.machine_learning.mojom.TextSuggesterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.machine_learning.mojom.TextSuggesterRemote = class {
  static get $interfaceName() {
    return 'chromeos.machine_learning.mojom.TextSuggester';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.machine_learning.mojom.TextSuggesterPendingReceiver,
      handle);
    this.$ = new chromeos.machine_learning.mojom.TextSuggesterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.machine_learning.mojom.TextSuggesterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  suggest(query) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.machine_learning.mojom.TextSuggester_Suggest_ParamsSpec,
      chromeos.machine_learning.mojom.TextSuggester_Suggest_ResponseParamsSpec,
      [query],
      false);
  }

};

chromeos.machine_learning.mojom.TextSuggester.getRemote = function() {
  let remote = new chromeos.machine_learning.mojom.TextSuggesterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.machine_learning.mojom.TextSuggester',
    'context');
  return remote.$;
};

chromeos.machine_learning.mojom.TextSuggesterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        
        // Try Method 0: Suggest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.machine_learning.mojom.TextSuggester_Suggest_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Suggest (0)');
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
          const params = decoder.decodeStructInline(chromeos.machine_learning.mojom.TextSuggester_Suggest_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.suggest');
          const result = this.impl.suggest(params.query);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.machine_learning.mojom.TextSuggester_Suggest_ResponseParamsSpec);
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

chromeos.machine_learning.mojom.TextSuggesterReceiver = chromeos.machine_learning.mojom.TextSuggesterReceiver;

chromeos.machine_learning.mojom.TextSuggesterPtr = chromeos.machine_learning.mojom.TextSuggesterRemote;
chromeos.machine_learning.mojom.TextSuggesterRequest = chromeos.machine_learning.mojom.TextSuggesterPendingReceiver;

