// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/ime/public/mojom/input_method_host.mojom
// Module: ash.ime.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.ime = ash.ime || {};
ash.ime.mojom = ash.ime.mojom || {};


// Enum: CommitTextCursorBehavior
ash.ime.mojom.CommitTextCursorBehavior = {
  kMoveCursorBeforeText: 0,
};

// Enum: CompositionSpanStyle
ash.ime.mojom.CompositionSpanStyle = {
  kNone: 0,
};

// Enum: InputMethodApiOperation
ash.ime.mojom.InputMethodApiOperation = {
  kCommitText: 0,
  kSetCompositionText: 1,
  kDeleteSurroundingText: 2,
};

// Enum: KoreanAction
ash.ime.mojom.KoreanAction = {
  kHanjaKey: 0,
  kHangeulKey: 1,
  kComposeOutOfOrder: 2,
};

// Enum: HistogramBucketType
ash.ime.mojom.HistogramBucketType = {
  kLinear: 0,
};

// Struct: CompositionSpan
ash.ime.mojom.CompositionSpanSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.CompositionSpan',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TextRange
ash.ime.mojom.TextRangeSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.TextRange',
      packedSize: 16,
      fields: [
        { name: 'start', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'end', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AutocorrectSpan
ash.ime.mojom.AutocorrectSpanSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.AutocorrectSpan',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CompletionCandidate
ash.ime.mojom.CompletionCandidateSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.CompletionCandidate',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SuggestionsRequest
ash.ime.mojom.SuggestionsRequestSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.SuggestionsRequest',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SuggestionsResponse
ash.ime.mojom.SuggestionsResponseSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.SuggestionsResponse',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SuggestionsTextContext
ash.ime.mojom.SuggestionsTextContextSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.SuggestionsTextContext',
      packedSize: 24,
      fields: [
        { name: 'last_n_chars', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'surrounding_text_length', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: NonCompliantApiMetric
ash.ime.mojom.NonCompliantApiMetricSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.NonCompliantApiMetric',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Candidate
ash.ime.mojom.CandidateSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.Candidate',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: HighlightedCandidate
ash.ime.mojom.HighlightedCandidateSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.HighlightedCandidate',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CandidatesWindow
ash.ime.mojom.CandidatesWindowSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.CandidatesWindow',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BucketedHistogram
ash.ime.mojom.BucketedHistogramSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.BucketedHistogram',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: InputMethodHost
ash.ime.mojom.InputMethodHost = {};

ash.ime.mojom.InputMethodHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.ime.mojom.InputMethodHostRemote = class {
  static get $interfaceName() {
    return 'ash.ime.mojom.InputMethodHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.ime.mojom.InputMethodHostPendingReceiver,
      handle);
    this.$ = new ash.ime.mojom.InputMethodHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.ime.mojom.InputMethodHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

ash.ime.mojom.InputMethodHost.getRemote = function() {
  let remote = new ash.ime.mojom.InputMethodHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.ime.mojom.InputMethodHost',
    'context');
  return remote.$;
};

// Legacy compatibility
ash.ime.mojom.InputMethodHostPtr = ash.ime.mojom.InputMethodHostRemote;
ash.ime.mojom.InputMethodHostRequest = ash.ime.mojom.InputMethodHostPendingReceiver;

