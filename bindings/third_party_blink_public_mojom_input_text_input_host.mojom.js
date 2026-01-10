// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/input/text_input_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var gfx = gfx || {};

blink.mojom.TextInputHost = {};
blink.mojom.TextInputHost.$interfaceName = 'blink.mojom.TextInputHost';
blink.mojom.TextInputHost_GotCharacterIndexAtPoint_ParamsSpec = { $: {} };
blink.mojom.TextInputHost_GotFirstRectForRange_ParamsSpec = { $: {} };

// Interface: TextInputHost
mojo.internal.Struct(
    blink.mojom.TextInputHost_GotCharacterIndexAtPoint_ParamsSpec, 'blink.mojom.TextInputHost_GotCharacterIndexAtPoint_Params', [
      mojo.internal.StructField('index', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.TextInputHost_GotFirstRectForRange_ParamsSpec, 'blink.mojom.TextInputHost_GotFirstRectForRange_Params', [
      mojo.internal.StructField('rect', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [index],
      false);
  }

  gotFirstRectForRange(rect) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.TextInputHost_GotFirstRectForRange_ParamsSpec,
      null,
      [rect],
      false);
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

blink.mojom.TextInputHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.TextInputHost_GotCharacterIndexAtPoint_ParamsSpec.$.decode(message.payload);
          const result = this.impl.gotCharacterIndexAtPoint(params.index);
          break;
        }
        case 1: {
          const params = blink.mojom.TextInputHost_GotFirstRectForRange_ParamsSpec.$.decode(message.payload);
          const result = this.impl.gotFirstRectForRange(params.rect);
          break;
        }
      }
    }});
  }
};

blink.mojom.TextInputHostReceiver = blink.mojom.TextInputHostReceiver;

blink.mojom.TextInputHostPtr = blink.mojom.TextInputHostRemote;
blink.mojom.TextInputHostRequest = blink.mojom.TextInputHostPendingReceiver;

