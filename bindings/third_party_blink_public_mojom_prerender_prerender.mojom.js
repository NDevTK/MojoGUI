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

blink.mojom.PrerenderTriggerTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.PrerenderAttributesSpec = { $: {} };
blink.mojom.NoStatePrefetchProcessor = {};
blink.mojom.NoStatePrefetchProcessor.$interfaceName = 'blink.mojom.NoStatePrefetchProcessor';
blink.mojom.NoStatePrefetchProcessor_Start_ParamsSpec = { $: {} };
blink.mojom.NoStatePrefetchProcessor_Cancel_ParamsSpec = { $: {} };

// Enum: PrerenderTriggerType
blink.mojom.PrerenderTriggerType = {
  kLinkRelPrerender: 0,
  kLinkRelNext: 1,
};

// Struct: PrerenderAttributes
mojo.internal.Struct(
    blink.mojom.PrerenderAttributesSpec, 'blink.mojom.PrerenderAttributes', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('trigger_type', 8, 0, blink.mojom.PrerenderTriggerTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('referrer', 16, 0, blink.mojom.ReferrerSpec, null, false, 0, undefined),
      mojo.internal.StructField('view_size', 24, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: NoStatePrefetchProcessor
mojo.internal.Struct(
    blink.mojom.NoStatePrefetchProcessor_Start_ParamsSpec, 'blink.mojom.NoStatePrefetchProcessor_Start_Params', [
      mojo.internal.StructField('prerender_attribute', 0, 0, blink.mojom.PrerenderAttributesSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.NoStatePrefetchProcessor_Cancel_ParamsSpec, 'blink.mojom.NoStatePrefetchProcessor_Cancel_Params', [
    ],
    [[0, 8]]);

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

blink.mojom.NoStatePrefetchProcessorPtr = blink.mojom.NoStatePrefetchProcessorRemote;
blink.mojom.NoStatePrefetchProcessorRequest = blink.mojom.NoStatePrefetchProcessorPendingReceiver;

