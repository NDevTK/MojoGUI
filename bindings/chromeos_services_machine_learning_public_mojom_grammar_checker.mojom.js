// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/grammar_checker.mojom
// Module: chromeos.machine_learning.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.mojom = chromeos.machine_learning.mojom || {};


// Enum: Status
chromeos.machine_learning.mojom.Status = {
  OK: 0,
  ERROR: 1,
};

// Interface: GrammarChecker
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

// Legacy compatibility
chromeos.machine_learning.mojom.GrammarCheckerPtr = chromeos.machine_learning.mojom.GrammarCheckerRemote;
chromeos.machine_learning.mojom.GrammarCheckerRequest = chromeos.machine_learning.mojom.GrammarCheckerPendingReceiver;

