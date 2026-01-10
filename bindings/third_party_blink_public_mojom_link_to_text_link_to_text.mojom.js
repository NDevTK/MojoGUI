// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/link_to_text/link_to_text.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var ui = ui || {};
var gfx = gfx || {};

blink.mojom.LinkGenerationReadyStatusSpec = { $: mojo.internal.Enum() };
blink.mojom.LinkGenerationErrorSpec = { $: mojo.internal.Enum() };
blink.mojom.TextFragmentReceiver = {};
blink.mojom.TextFragmentReceiver.$interfaceName = 'blink.mojom.TextFragmentReceiver';
blink.mojom.TextFragmentReceiver_Cancel_ParamsSpec = { $: {} };
blink.mojom.TextFragmentReceiver_RequestSelector_ParamsSpec = { $: {} };
blink.mojom.TextFragmentReceiver_RequestSelector_ResponseParamsSpec = { $: {} };
blink.mojom.TextFragmentReceiver_RemoveFragments_ParamsSpec = { $: {} };
blink.mojom.TextFragmentReceiver_ExtractTextFragmentsMatches_ParamsSpec = { $: {} };
blink.mojom.TextFragmentReceiver_ExtractTextFragmentsMatches_ResponseParamsSpec = { $: {} };
blink.mojom.TextFragmentReceiver_GetExistingSelectors_ParamsSpec = { $: {} };
blink.mojom.TextFragmentReceiver_GetExistingSelectors_ResponseParamsSpec = { $: {} };
blink.mojom.TextFragmentReceiver_ExtractFirstFragmentRect_ParamsSpec = { $: {} };
blink.mojom.TextFragmentReceiver_ExtractFirstFragmentRect_ResponseParamsSpec = { $: {} };

// Enum: LinkGenerationReadyStatus
blink.mojom.LinkGenerationReadyStatus = {
  kRequestedBeforeReady: 0,
  kRequestedAfterReady: 1,
};

// Enum: LinkGenerationError
blink.mojom.LinkGenerationError = {
  kNone: -1,
  kIncorrectSelector: 0,
  kNoRange: 1,
  kNoContext: 2,
  kContextExhausted: 3,
  kContextLimitReached: 4,
  kEmptySelection: 5,
  kTabHidden: 6,
  kOmniboxNavigation: 7,
  kTabCrash: 8,
  kUnknown: 9,
  kIFrame: 10,
  kTimeout: 11,
  kBlockList: 12,
  kNoRemoteConnection: 13,
  kNotGenerated: 14,
};

// Interface: TextFragmentReceiver
mojo.internal.Struct(
    blink.mojom.TextFragmentReceiver_Cancel_ParamsSpec, 'blink.mojom.TextFragmentReceiver_Cancel_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    blink.mojom.TextFragmentReceiver_RequestSelector_ParamsSpec, 'blink.mojom.TextFragmentReceiver_RequestSelector_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    blink.mojom.TextFragmentReceiver_RequestSelector_ResponseParamsSpec, 'blink.mojom.TextFragmentReceiver_RequestSelector_ResponseParams', [
      mojo.internal.StructField('selector', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('error', 8, 0, blink.mojom.LinkGenerationErrorSpec, null, false, 0, undefined),
      mojo.internal.StructField('ready_status', 12, 0, blink.mojom.LinkGenerationReadyStatusSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.TextFragmentReceiver_RemoveFragments_ParamsSpec, 'blink.mojom.TextFragmentReceiver_RemoveFragments_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    blink.mojom.TextFragmentReceiver_ExtractTextFragmentsMatches_ParamsSpec, 'blink.mojom.TextFragmentReceiver_ExtractTextFragmentsMatches_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    blink.mojom.TextFragmentReceiver_ExtractTextFragmentsMatches_ResponseParamsSpec, 'blink.mojom.TextFragmentReceiver_ExtractTextFragmentsMatches_ResponseParams', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.TextFragmentReceiver_GetExistingSelectors_ParamsSpec, 'blink.mojom.TextFragmentReceiver_GetExistingSelectors_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    blink.mojom.TextFragmentReceiver_GetExistingSelectors_ResponseParamsSpec, 'blink.mojom.TextFragmentReceiver_GetExistingSelectors_ResponseParams', [
      mojo.internal.StructField('selectors', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.TextFragmentReceiver_ExtractFirstFragmentRect_ParamsSpec, 'blink.mojom.TextFragmentReceiver_ExtractFirstFragmentRect_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    blink.mojom.TextFragmentReceiver_ExtractFirstFragmentRect_ResponseParamsSpec, 'blink.mojom.TextFragmentReceiver_ExtractFirstFragmentRect_ResponseParams', [
      mojo.internal.StructField('bounds', 0, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.TextFragmentReceiverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.TextFragmentReceiverRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.TextFragmentReceiver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.TextFragmentReceiverPendingReceiver,
      handle);
    this.$ = new blink.mojom.TextFragmentReceiverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.TextFragmentReceiverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  cancel() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.TextFragmentReceiver_Cancel_ParamsSpec,
      null,
      []);
  }

  requestSelector() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.TextFragmentReceiver_RequestSelector_ParamsSpec,
      blink.mojom.TextFragmentReceiver_RequestSelector_ResponseParamsSpec,
      []);
  }

  removeFragments() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.TextFragmentReceiver_RemoveFragments_ParamsSpec,
      null,
      []);
  }

  extractTextFragmentsMatches() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.TextFragmentReceiver_ExtractTextFragmentsMatches_ParamsSpec,
      blink.mojom.TextFragmentReceiver_ExtractTextFragmentsMatches_ResponseParamsSpec,
      []);
  }

  getExistingSelectors() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.TextFragmentReceiver_GetExistingSelectors_ParamsSpec,
      blink.mojom.TextFragmentReceiver_GetExistingSelectors_ResponseParamsSpec,
      []);
  }

  extractFirstFragmentRect() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.TextFragmentReceiver_ExtractFirstFragmentRect_ParamsSpec,
      blink.mojom.TextFragmentReceiver_ExtractFirstFragmentRect_ResponseParamsSpec,
      []);
  }

};

blink.mojom.TextFragmentReceiver.getRemote = function() {
  let remote = new blink.mojom.TextFragmentReceiverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.TextFragmentReceiver',
    'context');
  return remote.$;
};

blink.mojom.TextFragmentReceiverPtr = blink.mojom.TextFragmentReceiverRemote;
blink.mojom.TextFragmentReceiverRequest = blink.mojom.TextFragmentReceiverPendingReceiver;

