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

// Enum: Status
chromeos.machine_learning.mojom.Status = {
  OK: 0,
};

// Enum: MultiWordExperimentGroup
chromeos.machine_learning.mojom.MultiWordExperimentGroup = {
  kGboard: 0,
};

// Interface: TextSuggester
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

};

chromeos.machine_learning.mojom.TextSuggester.getRemote = function() {
  let remote = new chromeos.machine_learning.mojom.TextSuggesterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.machine_learning.mojom.TextSuggester',
    'context');
  return remote.$;
}};

// Legacy compatibility
chromeos.machine_learning.mojom.TextSuggesterPtr = chromeos.machine_learning.mojom.TextSuggesterRemote;
chromeos.machine_learning.mojom.TextSuggesterRequest = chromeos.machine_learning.mojom.TextSuggesterPendingReceiver;

