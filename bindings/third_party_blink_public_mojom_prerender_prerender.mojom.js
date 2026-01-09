// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/prerender/prerender.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: PrerenderTriggerType
blink.mojom.PrerenderTriggerType = {
  kLinkRelPrerender: 0,
  kLinkRelNext: 1,
};

// Interface: NoStatePrefetchProcessor
blink.mojom.NoStatePrefetchProcessor = {};

blink.mojom.NoStatePrefetchProcessorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.NoStatePrefetchProcessorRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.NoStatePrefetchProcessor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.NoStatePrefetchProcessorPendingReceiver,
      handle);
    this.$ = new blink.mojom.NoStatePrefetchProcessorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.NoStatePrefetchProcessorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  start(prerender_attribute) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.NoStatePrefetchProcessor_Start_ParamsSpec,
      null,
      [prerender_attribute]);
  }

  cancel() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.NoStatePrefetchProcessor_Cancel_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.NoStatePrefetchProcessor.getRemote = function() {
  let remote = new blink.mojom.NoStatePrefetchProcessorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.NoStatePrefetchProcessor',
    'context');
  return remote.$;
};

// ParamsSpec for Start
blink.mojom.NoStatePrefetchProcessor_Start_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.NoStatePrefetchProcessor.Start_Params',
      packedSize: 16,
      fields: [
        { name: 'prerender_attribute', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Cancel
blink.mojom.NoStatePrefetchProcessor_Cancel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.NoStatePrefetchProcessor.Cancel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.NoStatePrefetchProcessorPtr = blink.mojom.NoStatePrefetchProcessorRemote;
blink.mojom.NoStatePrefetchProcessorRequest = blink.mojom.NoStatePrefetchProcessorPendingReceiver;

