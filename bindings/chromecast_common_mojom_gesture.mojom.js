// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/gesture.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};


// Interface: GestureHandler
chromecast.mojom.GestureHandler = {};

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
      []);
  }

  onBackGestureProgress(touch_location) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.mojom.GestureHandler_OnBackGestureProgress_ParamsSpec,
      null,
      [touch_location]);
  }

  onTopDragGestureProgress(touch_location) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromecast.mojom.GestureHandler_OnTopDragGestureProgress_ParamsSpec,
      null,
      [touch_location]);
  }

  onTopDragGestureDone() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromecast.mojom.GestureHandler_OnTopDragGestureDone_ParamsSpec,
      null,
      []);
  }

  onRightDragGestureProgress(touch_location) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromecast.mojom.GestureHandler_OnRightDragGestureProgress_ParamsSpec,
      null,
      [touch_location]);
  }

  onRightDragGestureDone() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chromecast.mojom.GestureHandler_OnRightDragGestureDone_ParamsSpec,
      null,
      []);
  }

  onBackGestureCancel() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      chromecast.mojom.GestureHandler_OnBackGestureCancel_ParamsSpec,
      null,
      []);
  }

  onTapGesture() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      chromecast.mojom.GestureHandler_OnTapGesture_ParamsSpec,
      null,
      []);
  }

  onTapDownGesture() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      chromecast.mojom.GestureHandler_OnTapDownGesture_ParamsSpec,
      null,
      []);
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

// ParamsSpec for OnBackGesture
chromecast.mojom.GestureHandler_OnBackGesture_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.GestureHandler.OnBackGesture_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

chromecast.mojom.GestureHandler_OnBackGesture_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.GestureHandler.OnBackGesture_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'was_handled', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnBackGestureProgress
chromecast.mojom.GestureHandler_OnBackGestureProgress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.GestureHandler.OnBackGestureProgress_Params',
      packedSize: 16,
      fields: [
        { name: 'touch_location', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnTopDragGestureProgress
chromecast.mojom.GestureHandler_OnTopDragGestureProgress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.GestureHandler.OnTopDragGestureProgress_Params',
      packedSize: 16,
      fields: [
        { name: 'touch_location', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnTopDragGestureDone
chromecast.mojom.GestureHandler_OnTopDragGestureDone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.GestureHandler.OnTopDragGestureDone_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnRightDragGestureProgress
chromecast.mojom.GestureHandler_OnRightDragGestureProgress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.GestureHandler.OnRightDragGestureProgress_Params',
      packedSize: 16,
      fields: [
        { name: 'touch_location', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnRightDragGestureDone
chromecast.mojom.GestureHandler_OnRightDragGestureDone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.GestureHandler.OnRightDragGestureDone_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnBackGestureCancel
chromecast.mojom.GestureHandler_OnBackGestureCancel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.GestureHandler.OnBackGestureCancel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnTapGesture
chromecast.mojom.GestureHandler_OnTapGesture_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.GestureHandler.OnTapGesture_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnTapDownGesture
chromecast.mojom.GestureHandler_OnTapDownGesture_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.GestureHandler.OnTapDownGesture_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chromecast.mojom.GestureHandlerPtr = chromecast.mojom.GestureHandlerRemote;
chromecast.mojom.GestureHandlerRequest = chromecast.mojom.GestureHandlerPendingReceiver;


// Interface: GestureSource
chromecast.mojom.GestureSource = {};

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
      [handler]);
  }

  setCanGoBack(can_go_back) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.mojom.GestureSource_SetCanGoBack_ParamsSpec,
      null,
      [can_go_back]);
  }

  setCanTopDrag(can_top_drag) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromecast.mojom.GestureSource_SetCanTopDrag_ParamsSpec,
      null,
      [can_top_drag]);
  }

  setCanRightDrag(can_top_drag) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromecast.mojom.GestureSource_SetCanRightDrag_ParamsSpec,
      null,
      [can_top_drag]);
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

// ParamsSpec for Subscribe
chromecast.mojom.GestureSource_Subscribe_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.GestureSource.Subscribe_Params',
      packedSize: 16,
      fields: [
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetCanGoBack
chromecast.mojom.GestureSource_SetCanGoBack_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.GestureSource.SetCanGoBack_Params',
      packedSize: 16,
      fields: [
        { name: 'can_go_back', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetCanTopDrag
chromecast.mojom.GestureSource_SetCanTopDrag_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.GestureSource.SetCanTopDrag_Params',
      packedSize: 16,
      fields: [
        { name: 'can_top_drag', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetCanRightDrag
chromecast.mojom.GestureSource_SetCanRightDrag_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.GestureSource.SetCanRightDrag_Params',
      packedSize: 16,
      fields: [
        { name: 'can_top_drag', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chromecast.mojom.GestureSourcePtr = chromecast.mojom.GestureSourceRemote;
chromecast.mojom.GestureSourceRequest = chromecast.mojom.GestureSourcePendingReceiver;

