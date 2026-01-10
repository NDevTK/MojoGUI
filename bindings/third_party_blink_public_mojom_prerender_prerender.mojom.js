// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/prerender/prerender.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var ui = ui || {};
var gfx = gfx || {};
var url = url || {};


// Enum: PrerenderTriggerType
blink.mojom.mojom.PrerenderTriggerType = {
  kLinkRelPrerender: 0,
  kLinkRelNext: 1,
};
blink.mojom.mojom.PrerenderTriggerTypeSpec = { $: mojo.internal.Enum() };

// Struct: PrerenderAttributes
blink.mojom.mojom.PrerenderAttributesSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PrerenderAttributes',
      packedSize: 40,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'trigger_type', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.PrerenderTriggerTypeSpec, nullable: false, minVersion: 0 },
        { name: 'referrer', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ReferrerSpec, nullable: false, minVersion: 0 },
        { name: 'view_size', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Interface: NoStatePrefetchProcessor
blink.mojom.mojom.NoStatePrefetchProcessor = {};

blink.mojom.mojom.NoStatePrefetchProcessorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.NoStatePrefetchProcessorRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.NoStatePrefetchProcessor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.NoStatePrefetchProcessorPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.NoStatePrefetchProcessorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.NoStatePrefetchProcessorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  start(prerender_attribute) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.NoStatePrefetchProcessor_Start_ParamsSpec,
      null,
      [prerender_attribute]);
  }

  cancel() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.NoStatePrefetchProcessor_Cancel_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.mojom.NoStatePrefetchProcessor.getRemote = function() {
  let remote = new blink.mojom.mojom.NoStatePrefetchProcessorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.NoStatePrefetchProcessor',
    'context');
  return remote.$;
};

// ParamsSpec for Start
blink.mojom.mojom.NoStatePrefetchProcessor_Start_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.NoStatePrefetchProcessor.Start_Params',
      packedSize: 16,
      fields: [
        { name: 'prerender_attribute', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.PrerenderAttributesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Cancel
blink.mojom.mojom.NoStatePrefetchProcessor_Cancel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.NoStatePrefetchProcessor.Cancel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.NoStatePrefetchProcessorPtr = blink.mojom.mojom.NoStatePrefetchProcessorRemote;
blink.mojom.mojom.NoStatePrefetchProcessorRequest = blink.mojom.mojom.NoStatePrefetchProcessorPendingReceiver;

