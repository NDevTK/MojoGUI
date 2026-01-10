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
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'chromeos.machine_learning.mojom.TextSuggester',
    'context');
  return remote.$;
};

chromeos.machine_learning.mojom.TextSuggesterPtr = chromeos.machine_learning.mojom.TextSuggesterRemote;
chromeos.machine_learning.mojom.TextSuggesterRequest = chromeos.machine_learning.mojom.TextSuggesterPendingReceiver;

