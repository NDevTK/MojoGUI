// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/input/text_input_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Interface: TextInputHost
blink.mojom.TextInputHost = {};

blink.mojom.TextInputHost_GotCharacterIndexAtPoint_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.TextInputHost_GotCharacterIndexAtPoint_Params',
      packedSize: 16,
      fields: [
        { name: 'index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.TextInputHost_GotFirstRectForRange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.TextInputHost_GotFirstRectForRange_Params',
      packedSize: 16,
      fields: [
        { name: 'rect', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.TextInputHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.TextInputHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.TextInputHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.TextInputHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.TextInputHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.TextInputHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  gotCharacterIndexAtPoint(index) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.TextInputHost_GotCharacterIndexAtPoint_ParamsSpec,
      null,
      [index]);
  }

  gotFirstRectForRange(rect) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.TextInputHost_GotFirstRectForRange_ParamsSpec,
      null,
      [rect]);
  }

};

blink.mojom.TextInputHost.getRemote = function() {
  let remote = new blink.mojom.TextInputHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.TextInputHost',
    'context');
  return remote.$;
};

// ParamsSpec for GotCharacterIndexAtPoint
blink.mojom.TextInputHost_GotCharacterIndexAtPoint_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.TextInputHost.GotCharacterIndexAtPoint_Params',
      packedSize: 16,
      fields: [
        { name: 'index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GotFirstRectForRange
blink.mojom.TextInputHost_GotFirstRectForRange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.TextInputHost.GotFirstRectForRange_Params',
      packedSize: 16,
      fields: [
        { name: 'rect', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.TextInputHostPtr = blink.mojom.TextInputHostRemote;
blink.mojom.TextInputHostRequest = blink.mojom.TextInputHostPendingReceiver;

