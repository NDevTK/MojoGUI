// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/gesture.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Interface: GestureHandler
chromecast.mojom.mojom.GestureHandler = {};

chromecast.mojom.mojom.GestureHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.mojom.GestureHandlerRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.GestureHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.mojom.GestureHandlerPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.mojom.GestureHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.mojom.GestureHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onBackGesture() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.mojom.GestureHandler_OnBackGesture_ParamsSpec,
      chromecast.mojom.mojom.GestureHandler_OnBackGesture_ResponseParamsSpec,
      []);
  }

  onBackGestureProgress(touch_location) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.mojom.mojom.GestureHandler_OnBackGestureProgress_ParamsSpec,
      null,
      [touch_location]);
  }

  onTopDragGestureProgress(touch_location) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromecast.mojom.mojom.GestureHandler_OnTopDragGestureProgress_ParamsSpec,
      null,
      [touch_location]);
  }

  onTopDragGestureDone() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromecast.mojom.mojom.GestureHandler_OnTopDragGestureDone_ParamsSpec,
      null,
      []);
  }

  onRightDragGestureProgress(touch_location) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromecast.mojom.mojom.GestureHandler_OnRightDragGestureProgress_ParamsSpec,
      null,
      [touch_location]);
  }

  onRightDragGestureDone() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chromecast.mojom.mojom.GestureHandler_OnRightDragGestureDone_ParamsSpec,
      null,
      []);
  }

  onBackGestureCancel() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      chromecast.mojom.mojom.GestureHandler_OnBackGestureCancel_ParamsSpec,
      null,
      []);
  }

  onTapGesture() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      chromecast.mojom.mojom.GestureHandler_OnTapGesture_ParamsSpec,
      null,
      []);
  }

  onTapDownGesture() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      chromecast.mojom.mojom.GestureHandler_OnTapDownGesture_ParamsSpec,
      null,
      []);
  }

};

chromecast.mojom.mojom.GestureHandler.getRemote = function() {
  let remote = new chromecast.mojom.mojom.GestureHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.GestureHandler',
    'context');
  return remote.$;
};

// ParamsSpec for OnBackGesture
chromecast.mojom.mojom.GestureHandler_OnBackGesture_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.GestureHandler.OnBackGesture_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chromecast.mojom.mojom.GestureHandler_OnBackGesture_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.GestureHandler.OnBackGesture_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'was_handled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnBackGestureProgress
chromecast.mojom.mojom.GestureHandler_OnBackGestureProgress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.GestureHandler.OnBackGestureProgress_Params',
      packedSize: 16,
      fields: [
        { name: 'touch_location', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnTopDragGestureProgress
chromecast.mojom.mojom.GestureHandler_OnTopDragGestureProgress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.GestureHandler.OnTopDragGestureProgress_Params',
      packedSize: 16,
      fields: [
        { name: 'touch_location', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnTopDragGestureDone
chromecast.mojom.mojom.GestureHandler_OnTopDragGestureDone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.GestureHandler.OnTopDragGestureDone_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnRightDragGestureProgress
chromecast.mojom.mojom.GestureHandler_OnRightDragGestureProgress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.GestureHandler.OnRightDragGestureProgress_Params',
      packedSize: 16,
      fields: [
        { name: 'touch_location', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnRightDragGestureDone
chromecast.mojom.mojom.GestureHandler_OnRightDragGestureDone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.GestureHandler.OnRightDragGestureDone_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnBackGestureCancel
chromecast.mojom.mojom.GestureHandler_OnBackGestureCancel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.GestureHandler.OnBackGestureCancel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnTapGesture
chromecast.mojom.mojom.GestureHandler_OnTapGesture_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.GestureHandler.OnTapGesture_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnTapDownGesture
chromecast.mojom.mojom.GestureHandler_OnTapDownGesture_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.GestureHandler.OnTapDownGesture_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
chromecast.mojom.mojom.GestureHandlerPtr = chromecast.mojom.mojom.GestureHandlerRemote;
chromecast.mojom.mojom.GestureHandlerRequest = chromecast.mojom.mojom.GestureHandlerPendingReceiver;


// Interface: GestureSource
chromecast.mojom.mojom.GestureSource = {};

chromecast.mojom.mojom.GestureSourcePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.mojom.GestureSourceRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.GestureSource';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.mojom.GestureSourcePendingReceiver,
      handle);
    this.$ = new chromecast.mojom.mojom.GestureSourceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.mojom.GestureSourceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  subscribe(handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.mojom.GestureSource_Subscribe_ParamsSpec,
      null,
      [handler]);
  }

  setCanGoBack(can_go_back) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.mojom.mojom.GestureSource_SetCanGoBack_ParamsSpec,
      null,
      [can_go_back]);
  }

  setCanTopDrag(can_top_drag) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromecast.mojom.mojom.GestureSource_SetCanTopDrag_ParamsSpec,
      null,
      [can_top_drag]);
  }

  setCanRightDrag(can_top_drag) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromecast.mojom.mojom.GestureSource_SetCanRightDrag_ParamsSpec,
      null,
      [can_top_drag]);
  }

};

chromecast.mojom.mojom.GestureSource.getRemote = function() {
  let remote = new chromecast.mojom.mojom.GestureSourceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.GestureSource',
    'context');
  return remote.$;
};

// ParamsSpec for Subscribe
chromecast.mojom.mojom.GestureSource_Subscribe_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.GestureSource.Subscribe_Params',
      packedSize: 16,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetCanGoBack
chromecast.mojom.mojom.GestureSource_SetCanGoBack_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.GestureSource.SetCanGoBack_Params',
      packedSize: 16,
      fields: [
        { name: 'can_go_back', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetCanTopDrag
chromecast.mojom.mojom.GestureSource_SetCanTopDrag_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.GestureSource.SetCanTopDrag_Params',
      packedSize: 16,
      fields: [
        { name: 'can_top_drag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetCanRightDrag
chromecast.mojom.mojom.GestureSource_SetCanRightDrag_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.GestureSource.SetCanRightDrag_Params',
      packedSize: 16,
      fields: [
        { name: 'can_top_drag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromecast.mojom.mojom.GestureSourcePtr = chromecast.mojom.mojom.GestureSourceRemote;
chromecast.mojom.mojom.GestureSourceRequest = chromecast.mojom.mojom.GestureSourcePendingReceiver;

