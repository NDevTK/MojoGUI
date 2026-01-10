// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/gesture.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};
var gfx = gfx || {};

chromecast.mojom.GestureHandler = {};
chromecast.mojom.GestureHandler.$interfaceName = 'chromecast.mojom.GestureHandler';
chromecast.mojom.GestureHandler_OnBackGesture_ParamsSpec = { $: {} };
chromecast.mojom.GestureHandler_OnBackGesture_ResponseParamsSpec = { $: {} };
chromecast.mojom.GestureHandler_OnBackGestureProgress_ParamsSpec = { $: {} };
chromecast.mojom.GestureHandler_OnTopDragGestureProgress_ParamsSpec = { $: {} };
chromecast.mojom.GestureHandler_OnTopDragGestureDone_ParamsSpec = { $: {} };
chromecast.mojom.GestureHandler_OnRightDragGestureProgress_ParamsSpec = { $: {} };
chromecast.mojom.GestureHandler_OnRightDragGestureDone_ParamsSpec = { $: {} };
chromecast.mojom.GestureHandler_OnBackGestureCancel_ParamsSpec = { $: {} };
chromecast.mojom.GestureHandler_OnTapGesture_ParamsSpec = { $: {} };
chromecast.mojom.GestureHandler_OnTapDownGesture_ParamsSpec = { $: {} };
chromecast.mojom.GestureSource = {};
chromecast.mojom.GestureSource.$interfaceName = 'chromecast.mojom.GestureSource';
chromecast.mojom.GestureSource_Subscribe_ParamsSpec = { $: {} };
chromecast.mojom.GestureSource_SetCanGoBack_ParamsSpec = { $: {} };
chromecast.mojom.GestureSource_SetCanTopDrag_ParamsSpec = { $: {} };
chromecast.mojom.GestureSource_SetCanRightDrag_ParamsSpec = { $: {} };

// Interface: GestureHandler
mojo.internal.Struct(
    chromecast.mojom.GestureHandler_OnBackGesture_ParamsSpec, 'chromecast.mojom.GestureHandler_OnBackGesture_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromecast.mojom.GestureHandler_OnBackGesture_ResponseParamsSpec, 'chromecast.mojom.GestureHandler_OnBackGesture_ResponseParams', [
      mojo.internal.StructField('was_handled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.GestureHandler_OnBackGestureProgress_ParamsSpec, 'chromecast.mojom.GestureHandler_OnBackGestureProgress_Params', [
      mojo.internal.StructField('touch_location', 0, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.GestureHandler_OnTopDragGestureProgress_ParamsSpec, 'chromecast.mojom.GestureHandler_OnTopDragGestureProgress_Params', [
      mojo.internal.StructField('touch_location', 0, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.GestureHandler_OnTopDragGestureDone_ParamsSpec, 'chromecast.mojom.GestureHandler_OnTopDragGestureDone_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromecast.mojom.GestureHandler_OnRightDragGestureProgress_ParamsSpec, 'chromecast.mojom.GestureHandler_OnRightDragGestureProgress_Params', [
      mojo.internal.StructField('touch_location', 0, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.GestureHandler_OnRightDragGestureDone_ParamsSpec, 'chromecast.mojom.GestureHandler_OnRightDragGestureDone_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromecast.mojom.GestureHandler_OnBackGestureCancel_ParamsSpec, 'chromecast.mojom.GestureHandler_OnBackGestureCancel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromecast.mojom.GestureHandler_OnTapGesture_ParamsSpec, 'chromecast.mojom.GestureHandler_OnTapGesture_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromecast.mojom.GestureHandler_OnTapDownGesture_ParamsSpec, 'chromecast.mojom.GestureHandler_OnTapDownGesture_Params', [
    ],
    [[0, 8]]);

chromecast.mojom.GestureHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.GestureHandlerRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.GestureHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.GestureHandlerPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.GestureHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.GestureHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onBackGesture() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.GestureHandler_OnBackGesture_ParamsSpec,
      chromecast.mojom.GestureHandler_OnBackGesture_ResponseParamsSpec,
      [],
      false);
  }

  onBackGestureProgress(touch_location) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.mojom.GestureHandler_OnBackGestureProgress_ParamsSpec,
      null,
      [touch_location],
      false);
  }

  onTopDragGestureProgress(touch_location) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromecast.mojom.GestureHandler_OnTopDragGestureProgress_ParamsSpec,
      null,
      [touch_location],
      false);
  }

  onTopDragGestureDone() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromecast.mojom.GestureHandler_OnTopDragGestureDone_ParamsSpec,
      null,
      [],
      false);
  }

  onRightDragGestureProgress(touch_location) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromecast.mojom.GestureHandler_OnRightDragGestureProgress_ParamsSpec,
      null,
      [touch_location],
      false);
  }

  onRightDragGestureDone() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chromecast.mojom.GestureHandler_OnRightDragGestureDone_ParamsSpec,
      null,
      [],
      false);
  }

  onBackGestureCancel() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      chromecast.mojom.GestureHandler_OnBackGestureCancel_ParamsSpec,
      null,
      [],
      false);
  }

  onTapGesture() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      chromecast.mojom.GestureHandler_OnTapGesture_ParamsSpec,
      null,
      [],
      false);
  }

  onTapDownGesture() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      chromecast.mojom.GestureHandler_OnTapDownGesture_ParamsSpec,
      null,
      [],
      false);
  }

};

chromecast.mojom.GestureHandler.getRemote = function() {
  let remote = new chromecast.mojom.GestureHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.GestureHandler',
    'context');
  return remote.$;
};

chromecast.mojom.GestureHandlerReceiver = class {
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
          const params = chromecast.mojom.GestureHandler_OnBackGesture_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onBackGesture();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromecast.mojom.GestureHandler_OnBackGesture_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = chromecast.mojom.GestureHandler_OnBackGestureProgress_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onBackGestureProgress(params.touch_location);
          break;
        }
        case 2: {
          const params = chromecast.mojom.GestureHandler_OnTopDragGestureProgress_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onTopDragGestureProgress(params.touch_location);
          break;
        }
        case 3: {
          const params = chromecast.mojom.GestureHandler_OnTopDragGestureDone_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onTopDragGestureDone();
          break;
        }
        case 4: {
          const params = chromecast.mojom.GestureHandler_OnRightDragGestureProgress_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onRightDragGestureProgress(params.touch_location);
          break;
        }
        case 5: {
          const params = chromecast.mojom.GestureHandler_OnRightDragGestureDone_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onRightDragGestureDone();
          break;
        }
        case 6: {
          const params = chromecast.mojom.GestureHandler_OnBackGestureCancel_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onBackGestureCancel();
          break;
        }
        case 7: {
          const params = chromecast.mojom.GestureHandler_OnTapGesture_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onTapGesture();
          break;
        }
        case 8: {
          const params = chromecast.mojom.GestureHandler_OnTapDownGesture_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onTapDownGesture();
          break;
        }
      }
    }});
  }
};

chromecast.mojom.GestureHandlerReceiver = chromecast.mojom.GestureHandlerReceiver;

chromecast.mojom.GestureHandlerPtr = chromecast.mojom.GestureHandlerRemote;
chromecast.mojom.GestureHandlerRequest = chromecast.mojom.GestureHandlerPendingReceiver;


// Interface: GestureSource
mojo.internal.Struct(
    chromecast.mojom.GestureSource_Subscribe_ParamsSpec, 'chromecast.mojom.GestureSource_Subscribe_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceProxy(chromecast.mojom.GestureHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.GestureSource_SetCanGoBack_ParamsSpec, 'chromecast.mojom.GestureSource_SetCanGoBack_Params', [
      mojo.internal.StructField('can_go_back', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.GestureSource_SetCanTopDrag_ParamsSpec, 'chromecast.mojom.GestureSource_SetCanTopDrag_Params', [
      mojo.internal.StructField('can_top_drag', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.GestureSource_SetCanRightDrag_ParamsSpec, 'chromecast.mojom.GestureSource_SetCanRightDrag_Params', [
      mojo.internal.StructField('can_top_drag', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

chromecast.mojom.GestureSourcePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.GestureSourceRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.GestureSource';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.GestureSourcePendingReceiver,
      handle);
    this.$ = new chromecast.mojom.GestureSourceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.GestureSourceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  subscribe(handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.GestureSource_Subscribe_ParamsSpec,
      null,
      [handler],
      false);
  }

  setCanGoBack(can_go_back) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.mojom.GestureSource_SetCanGoBack_ParamsSpec,
      null,
      [can_go_back],
      false);
  }

  setCanTopDrag(can_top_drag) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromecast.mojom.GestureSource_SetCanTopDrag_ParamsSpec,
      null,
      [can_top_drag],
      false);
  }

  setCanRightDrag(can_top_drag) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromecast.mojom.GestureSource_SetCanRightDrag_ParamsSpec,
      null,
      [can_top_drag],
      false);
  }

};

chromecast.mojom.GestureSource.getRemote = function() {
  let remote = new chromecast.mojom.GestureSourceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.GestureSource',
    'context');
  return remote.$;
};

chromecast.mojom.GestureSourceReceiver = class {
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
          const params = chromecast.mojom.GestureSource_Subscribe_ParamsSpec.$.decode(message.payload);
          const result = this.impl.subscribe(params.handler);
          break;
        }
        case 1: {
          const params = chromecast.mojom.GestureSource_SetCanGoBack_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setCanGoBack(params.can_go_back);
          break;
        }
        case 2: {
          const params = chromecast.mojom.GestureSource_SetCanTopDrag_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setCanTopDrag(params.can_top_drag);
          break;
        }
        case 3: {
          const params = chromecast.mojom.GestureSource_SetCanRightDrag_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setCanRightDrag(params.can_top_drag);
          break;
        }
      }
    }});
  }
};

chromecast.mojom.GestureSourceReceiver = chromecast.mojom.GestureSourceReceiver;

chromecast.mojom.GestureSourcePtr = chromecast.mojom.GestureSourceRemote;
chromecast.mojom.GestureSourceRequest = chromecast.mojom.GestureSourcePendingReceiver;

