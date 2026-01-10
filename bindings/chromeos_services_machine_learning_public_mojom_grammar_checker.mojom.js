// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/grammar_checker.mojom
// Module: chromeos.machine_learning.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.mojom = chromeos.machine_learning.mojom || {};

chromeos.machine_learning.mojom.StatusSpec = { $: mojo.internal.Enum() };
chromeos.machine_learning.mojom.GrammarCheckerQuerySpec = { $: {} };
chromeos.machine_learning.mojom.GrammarCorrectionFragmentSpec = { $: {} };
chromeos.machine_learning.mojom.GrammarCheckerCandidateSpec = { $: {} };
chromeos.machine_learning.mojom.GrammarCheckerResultSpec = { $: {} };
chromeos.machine_learning.mojom.GrammarChecker = {};
chromeos.machine_learning.mojom.GrammarChecker.$interfaceName = 'chromeos.machine_learning.mojom.GrammarChecker';
chromeos.machine_learning.mojom.GrammarChecker_Check_ParamsSpec = { $: {} };
chromeos.machine_learning.mojom.GrammarChecker_Check_ResponseParamsSpec = { $: {} };

// Enum: Status
chromeos.machine_learning.mojom.Status = {
  OK: 0,
  ERROR: 1,
};

// Struct: GrammarCheckerQuery
mojo.internal.Struct(
    chromeos.machine_learning.mojom.GrammarCheckerQuerySpec, 'chromeos.machine_learning.mojom.GrammarCheckerQuery', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('language', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: GrammarCorrectionFragment
mojo.internal.Struct(
    chromeos.machine_learning.mojom.GrammarCorrectionFragmentSpec, 'chromeos.machine_learning.mojom.GrammarCorrectionFragment', [
      mojo.internal.StructField('replacement', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('offset', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('length', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: GrammarCheckerCandidate
mojo.internal.Struct(
    chromeos.machine_learning.mojom.GrammarCheckerCandidateSpec, 'chromeos.machine_learning.mojom.GrammarCheckerCandidate', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('fragments', 8, 0, mojo.internal.Array(chromeos.machine_learning.mojom.GrammarCorrectionFragmentSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('score', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: GrammarCheckerResult
mojo.internal.Struct(
    chromeos.machine_learning.mojom.GrammarCheckerResultSpec, 'chromeos.machine_learning.mojom.GrammarCheckerResult', [
      mojo.internal.StructField('OK', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: GrammarChecker
mojo.internal.Struct(
    chromeos.machine_learning.mojom.GrammarChecker_Check_ParamsSpec, 'chromeos.machine_learning.mojom.GrammarChecker_Check_Params', [
      mojo.internal.StructField('query', 0, 0, chromeos.machine_learning.mojom.GrammarCheckerQuerySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.GrammarChecker_Check_ResponseParamsSpec, 'chromeos.machine_learning.mojom.GrammarChecker_Check_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.machine_learning.mojom.GrammarCheckerResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

chromeos.machine_learning.mojom.GrammarCheckerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.machine_learning.mojom.GrammarCheckerRemote = class {
  static get $interfaceName() {
    return 'chromeos.machine_learning.mojom.GrammarChecker';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.machine_learning.mojom.GrammarCheckerPendingReceiver,
      handle);
    this.$ = new chromeos.machine_learning.mojom.GrammarCheckerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.machine_learning.mojom.GrammarCheckerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  check(query) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.machine_learning.mojom.GrammarChecker_Check_ParamsSpec,
      chromeos.machine_learning.mojom.GrammarChecker_Check_ResponseParamsSpec,
      [query],
      false);
  }

};

chromeos.machine_learning.mojom.GrammarChecker.getRemote = function() {
  let remote = new chromeos.machine_learning.mojom.GrammarCheckerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.machine_learning.mojom.GrammarChecker',
    'context');
  return remote.$;
};

chromeos.machine_learning.mojom.GrammarCheckerReceiver = class {
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Check
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.machine_learning.mojom.GrammarChecker_Check_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Check (0)');
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
          const params = decoder.decodeStruct(chromeos.machine_learning.mojom.GrammarChecker_Check_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.check');
          const result = this.impl.check(params.query);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.machine_learning.mojom.GrammarChecker_Check_ResponseParamsSpec);
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

chromeos.machine_learning.mojom.GrammarCheckerReceiver = chromeos.machine_learning.mojom.GrammarCheckerReceiver;

chromeos.machine_learning.mojom.GrammarCheckerPtr = chromeos.machine_learning.mojom.GrammarCheckerRemote;
chromeos.machine_learning.mojom.GrammarCheckerRequest = chromeos.machine_learning.mojom.GrammarCheckerPendingReceiver;

