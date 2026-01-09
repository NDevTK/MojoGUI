// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/mantis/mojom/mantis_processor.mojom
// Module: mantis.mojom

'use strict';

// Module namespace
var mantis = mantis || {};
mantis.mojom = mantis.mojom || {};


// Enum: MantisError
mantis.mojom.MantisError = {
};

// Enum: SafetyClassifierVerdict
mantis.mojom.SafetyClassifierVerdict = {
  kPass: 0,
};

// Enum: SegmentationMode
mantis.mojom.SegmentationMode = {
  kLasso: 0,
};

// Struct: TouchPoint
mantis.mojom.TouchPointSpec = {
  $: {
    structSpec: {
      name: 'mantis.mojom.TouchPoint',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: MantisProcessor
mantis.mojom.MantisProcessor = {};

mantis.mojom.MantisProcessorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mantis.mojom.MantisProcessorRemote = class {
  static get $interfaceName() {
    return 'mantis.mojom.MantisProcessor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mantis.mojom.MantisProcessorPendingReceiver,
      handle);
    this.$ = new mantis.mojom.MantisProcessorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mantis.mojom.MantisProcessorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

mantis.mojom.MantisProcessor.getRemote = function() {
  let remote = new mantis.mojom.MantisProcessorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mantis.mojom.MantisProcessor',
    'context');
  return remote.$;
};

// Legacy compatibility
mantis.mojom.MantisProcessorPtr = mantis.mojom.MantisProcessorRemote;
mantis.mojom.MantisProcessorRequest = mantis.mojom.MantisProcessorPendingReceiver;

