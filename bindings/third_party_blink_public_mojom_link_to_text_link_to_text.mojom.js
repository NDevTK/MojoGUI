// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/link_to_text/link_to_text.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Enum: LinkGenerationReadyStatus
blink.mojom.mojom.LinkGenerationReadyStatus = {
  kRequestedBeforeReady: 0,
  kRequestedAfterReady: 1,
};
blink.mojom.mojom.LinkGenerationReadyStatusSpec = { $: mojo.internal.Enum() };

// Enum: LinkGenerationError
blink.mojom.mojom.LinkGenerationError = {
  kNone: 0,
  kIncorrectSelector: 1,
  kNoRange: 2,
  kNoContext: 3,
  kContextExhausted: 4,
  kContextLimitReached: 5,
  kEmptySelection: 6,
  kTabHidden: 7,
  kOmniboxNavigation: 8,
  kTabCrash: 9,
  kUnknown: 10,
  kIFrame: 11,
  kTimeout: 12,
  kBlockList: 13,
  kNoRemoteConnection: 14,
  kNotGenerated: 15,
};
blink.mojom.mojom.LinkGenerationErrorSpec = { $: mojo.internal.Enum() };

// Interface: TextFragmentReceiver
blink.mojom.mojom.TextFragmentReceiver = {};

blink.mojom.mojom.TextFragmentReceiverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.TextFragmentReceiverRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.TextFragmentReceiver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.TextFragmentReceiverPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.TextFragmentReceiverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.TextFragmentReceiverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  cancel() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.TextFragmentReceiver_Cancel_ParamsSpec,
      null,
      []);
  }

  requestSelector() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.TextFragmentReceiver_RequestSelector_ParamsSpec,
      blink.mojom.mojom.TextFragmentReceiver_RequestSelector_ResponseParamsSpec,
      []);
  }

  removeFragments() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.TextFragmentReceiver_RemoveFragments_ParamsSpec,
      null,
      []);
  }

  extractTextFragmentsMatches() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.mojom.TextFragmentReceiver_ExtractTextFragmentsMatches_ParamsSpec,
      blink.mojom.mojom.TextFragmentReceiver_ExtractTextFragmentsMatches_ResponseParamsSpec,
      []);
  }

  getExistingSelectors() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.mojom.TextFragmentReceiver_GetExistingSelectors_ParamsSpec,
      blink.mojom.mojom.TextFragmentReceiver_GetExistingSelectors_ResponseParamsSpec,
      []);
  }

  extractFirstFragmentRect() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.mojom.TextFragmentReceiver_ExtractFirstFragmentRect_ParamsSpec,
      blink.mojom.mojom.TextFragmentReceiver_ExtractFirstFragmentRect_ResponseParamsSpec,
      []);
  }

};

blink.mojom.mojom.TextFragmentReceiver.getRemote = function() {
  let remote = new blink.mojom.mojom.TextFragmentReceiverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.TextFragmentReceiver',
    'context');
  return remote.$;
};

// ParamsSpec for Cancel
blink.mojom.mojom.TextFragmentReceiver_Cancel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.TextFragmentReceiver.Cancel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for RequestSelector
blink.mojom.mojom.TextFragmentReceiver_RequestSelector_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.TextFragmentReceiver.RequestSelector_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.mojom.TextFragmentReceiver_RequestSelector_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.TextFragmentReceiver.RequestSelector_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'selector', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.LinkGenerationErrorSpec, nullable: false, minVersion: 0 },
        { name: 'ready_status', packedOffset: 12, packedBitOffset: 0, type: blink.mojom.LinkGenerationReadyStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for RemoveFragments
blink.mojom.mojom.TextFragmentReceiver_RemoveFragments_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.TextFragmentReceiver.RemoveFragments_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ExtractTextFragmentsMatches
blink.mojom.mojom.TextFragmentReceiver_ExtractTextFragmentsMatches_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.TextFragmentReceiver.ExtractTextFragmentsMatches_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.mojom.TextFragmentReceiver_ExtractTextFragmentsMatches_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.TextFragmentReceiver.ExtractTextFragmentsMatches_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetExistingSelectors
blink.mojom.mojom.TextFragmentReceiver_GetExistingSelectors_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.TextFragmentReceiver.GetExistingSelectors_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.mojom.TextFragmentReceiver_GetExistingSelectors_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.TextFragmentReceiver.GetExistingSelectors_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'selectors', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ExtractFirstFragmentRect
blink.mojom.mojom.TextFragmentReceiver_ExtractFirstFragmentRect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.TextFragmentReceiver.ExtractFirstFragmentRect_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.mojom.TextFragmentReceiver_ExtractFirstFragmentRect_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.TextFragmentReceiver.ExtractFirstFragmentRect_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'bounds', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.TextFragmentReceiverPtr = blink.mojom.mojom.TextFragmentReceiverRemote;
blink.mojom.mojom.TextFragmentReceiverRequest = blink.mojom.mojom.TextFragmentReceiverPendingReceiver;

