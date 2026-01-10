// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/text_suggester.mojom
// Module: chromeos.machine_learning.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.mojom = chromeos.machine_learning.mojom || {};


// Enum: TextSuggestionMode
chromeos.machine_learning.mojom.TextSuggestionMode = {
  kCompletion: 0,
};
chromeos.machine_learning.mojom.TextSuggestionModeSpec = { $: mojo.internal.Enum() };

// Enum: Status
chromeos.machine_learning.mojom.Status = {
  OK: 0,
};
chromeos.machine_learning.mojom.StatusSpec = { $: mojo.internal.Enum() };

// Enum: MultiWordExperimentGroup
chromeos.machine_learning.mojom.MultiWordExperimentGroup = {
  kGboard: 0,
};
chromeos.machine_learning.mojom.MultiWordExperimentGroupSpec = { $: mojo.internal.Enum() };

// Union: TextSuggestionCandidate
chromeos.machine_learning.mojom.TextSuggestionCandidateSpec = { $: mojo.internal.Union(
    'chromeos.machine_learning.mojom.TextSuggestionCandidate', {
      'multi_word': {
        'ordinal': 0,
        'type': chromeos.machine_learning.mojom.MultiWordSuggestionCandidateSpec,
      }},
    })
};

// Struct: NextWordCompletionCandidate
chromeos.machine_learning.mojom.NextWordCompletionCandidateSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.NextWordCompletionCandidate',
      packedSize: 24,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'normalized_score', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: TextSuggesterQuery
chromeos.machine_learning.mojom.TextSuggesterQuerySpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.TextSuggesterQuery',
      packedSize: 32,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'next_word_candidates', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(chromeos.machine_learning.mojom.NextWordCompletionCandidateSpec, false), nullable: false, minVersion: 0 },
        { name: 'suggestion_mode', packedOffset: 16, packedBitOffset: 0, type: chromeos.machine_learning.mojom.TextSuggestionModeSpec, nullable: false, minVersion: 1 },
      ],
      versions: [{version: 0, packedSize: 24}, {version: 1, packedSize: 32}]
    }
  }
};

// Struct: MultiWordSuggestionCandidate
chromeos.machine_learning.mojom.MultiWordSuggestionCandidateSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.MultiWordSuggestionCandidate',
      packedSize: 24,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'normalized_score', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: TextSuggesterResult
chromeos.machine_learning.mojom.TextSuggesterResultSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.TextSuggesterResult',
      packedSize: 16,
      fields: [
        { name: 'OK', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: TextSuggesterSpec
chromeos.machine_learning.mojom.TextSuggesterSpecSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.TextSuggesterSpec',
      packedSize: 16,
      fields: [
        { name: 'multi_word_experiment', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.MultiWordExperimentGroupSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: TextSuggester
chromeos.machine_learning.mojom.TextSuggester = {};

chromeos.machine_learning.mojom.TextSuggester_Suggest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.TextSuggester_Suggest_Params',
      packedSize: 16,
      fields: [
        { name: 'query', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.TextSuggesterQuerySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [query]);
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

// ParamsSpec for Suggest
chromeos.machine_learning.mojom.TextSuggester_Suggest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.TextSuggester.Suggest_Params',
      packedSize: 16,
      fields: [
        { name: 'query', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.TextSuggesterQuerySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.machine_learning.mojom.TextSuggester_Suggest_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.TextSuggester.Suggest_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.TextSuggesterResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromeos.machine_learning.mojom.TextSuggesterPtr = chromeos.machine_learning.mojom.TextSuggesterRemote;
chromeos.machine_learning.mojom.TextSuggesterRequest = chromeos.machine_learning.mojom.TextSuggesterPendingReceiver;

