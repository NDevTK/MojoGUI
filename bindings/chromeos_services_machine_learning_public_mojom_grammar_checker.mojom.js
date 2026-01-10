// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/grammar_checker.mojom
// Module: chromeos.machine_learning.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.machine_learning.mojom = chromeos.machine_learning.machine_learning.mojom || {};


// Enum: Status
chromeos.machine_learning.machine_learning.mojom.mojom.Status = {
  OK: 0,
  ERROR: 1,
};
chromeos.machine_learning.machine_learning.mojom.mojom.StatusSpec = { $: mojo.internal.Enum() };

// Struct: GrammarCheckerQuery
chromeos.machine_learning.machine_learning.mojom.mojom.GrammarCheckerQuerySpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.GrammarCheckerQuery',
      packedSize: 24,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'language', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: GrammarCorrectionFragment
chromeos.machine_learning.machine_learning.mojom.mojom.GrammarCorrectionFragmentSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.GrammarCorrectionFragment',
      packedSize: 24,
      fields: [
        { name: 'offset', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'length', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'replacement', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: GrammarCheckerCandidate
chromeos.machine_learning.machine_learning.mojom.mojom.GrammarCheckerCandidateSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.GrammarCheckerCandidate',
      packedSize: 32,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'score', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'fragments', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(chromeos.machine_learning.mojom.GrammarCorrectionFragmentSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: GrammarCheckerResult
chromeos.machine_learning.machine_learning.mojom.mojom.GrammarCheckerResultSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.GrammarCheckerResult',
      packedSize: 16,
      fields: [
        { name: 'OK', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: GrammarChecker
chromeos.machine_learning.machine_learning.mojom.mojom.GrammarChecker = {};

chromeos.machine_learning.machine_learning.mojom.mojom.GrammarCheckerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.machine_learning.machine_learning.mojom.mojom.GrammarCheckerRemote = class {
  static get $interfaceName() {
    return 'chromeos.machine_learning.mojom.GrammarChecker';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.machine_learning.machine_learning.mojom.mojom.GrammarCheckerPendingReceiver,
      handle);
    this.$ = new chromeos.machine_learning.machine_learning.mojom.mojom.GrammarCheckerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.machine_learning.machine_learning.mojom.mojom.GrammarCheckerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  check(query) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.machine_learning.machine_learning.mojom.mojom.GrammarChecker_Check_ParamsSpec,
      chromeos.machine_learning.machine_learning.mojom.mojom.GrammarChecker_Check_ResponseParamsSpec,
      [query]);
  }

};

chromeos.machine_learning.machine_learning.mojom.mojom.GrammarChecker.getRemote = function() {
  let remote = new chromeos.machine_learning.machine_learning.mojom.mojom.GrammarCheckerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.machine_learning.mojom.GrammarChecker',
    'context');
  return remote.$;
};

// ParamsSpec for Check
chromeos.machine_learning.machine_learning.mojom.mojom.GrammarChecker_Check_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.GrammarChecker.Check_Params',
      packedSize: 16,
      fields: [
        { name: 'query', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.GrammarCheckerQuerySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.machine_learning.machine_learning.mojom.mojom.GrammarChecker_Check_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.GrammarChecker.Check_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.GrammarCheckerResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromeos.machine_learning.machine_learning.mojom.mojom.GrammarCheckerPtr = chromeos.machine_learning.machine_learning.mojom.mojom.GrammarCheckerRemote;
chromeos.machine_learning.machine_learning.mojom.mojom.GrammarCheckerRequest = chromeos.machine_learning.machine_learning.mojom.mojom.GrammarCheckerPendingReceiver;

