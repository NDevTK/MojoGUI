// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/gesture.mojom
// Module: chromecast.mojom

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
  onBackGesture() {
    return this.$.onBackGesture();
  }
  onBackGestureProgress(touch_location) {
    return this.$.onBackGestureProgress(touch_location);
  }
  onTopDragGestureProgress(touch_location) {
    return this.$.onTopDragGestureProgress(touch_location);
  }
  onTopDragGestureDone() {
    return this.$.onTopDragGestureDone();
  }
  onRightDragGestureProgress(touch_location) {
    return this.$.onRightDragGestureProgress(touch_location);
  }
  onRightDragGestureDone() {
    return this.$.onRightDragGestureDone();
  }
  onBackGestureCancel() {
    return this.$.onBackGestureCancel();
  }
  onTapGesture() {
    return this.$.onTapGesture();
  }
  onTapDownGesture() {
    return this.$.onTapDownGesture();
  }
};

chromecast.mojom.GestureHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GestureHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onBackGesture() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromecast.mojom.GestureHandler_OnBackGesture_ParamsSpec,
      chromecast.mojom.GestureHandler_OnBackGesture_ResponseParamsSpec,
      [],
      false);
  }

  onBackGestureProgress(touch_location) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chromecast.mojom.GestureHandler_OnBackGestureProgress_ParamsSpec,
      null,
      [touch_location],
      false);
  }

  onTopDragGestureProgress(touch_location) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      chromecast.mojom.GestureHandler_OnTopDragGestureProgress_ParamsSpec,
      null,
      [touch_location],
      false);
  }

  onTopDragGestureDone() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      chromecast.mojom.GestureHandler_OnTopDragGestureDone_ParamsSpec,
      null,
      [],
      false);
  }

  onRightDragGestureProgress(touch_location) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      chromecast.mojom.GestureHandler_OnRightDragGestureProgress_ParamsSpec,
      null,
      [touch_location],
      false);
  }

  onRightDragGestureDone() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      chromecast.mojom.GestureHandler_OnRightDragGestureDone_ParamsSpec,
      null,
      [],
      false);
  }

  onBackGestureCancel() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      chromecast.mojom.GestureHandler_OnBackGestureCancel_ParamsSpec,
      null,
      [],
      false);
  }

  onTapGesture() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      chromecast.mojom.GestureHandler_OnTapGesture_ParamsSpec,
      null,
      [],
      false);
  }

  onTapDownGesture() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GestureHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.GestureHandler_OnBackGesture_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.GestureHandler_OnBackGestureProgress_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.GestureHandler_OnTopDragGestureProgress_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.GestureHandler_OnTopDragGestureDone_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.GestureHandler_OnRightDragGestureProgress_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.GestureHandler_OnRightDragGestureDone_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.GestureHandler_OnBackGestureCancel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.GestureHandler_OnTapGesture_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.GestureHandler_OnTapDownGesture_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.GestureHandler_OnBackGesture_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.GestureHandler_OnBackGestureProgress_ParamsSpec.$.structSpec);
          const result = this.impl.onBackGestureProgress(params.touch_location);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.GestureHandler_OnTopDragGestureProgress_ParamsSpec.$.structSpec);
          const result = this.impl.onTopDragGestureProgress(params.touch_location);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.GestureHandler_OnTopDragGestureDone_ParamsSpec.$.structSpec);
          const result = this.impl.onTopDragGestureDone();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.GestureHandler_OnRightDragGestureProgress_ParamsSpec.$.structSpec);
          const result = this.impl.onRightDragGestureProgress(params.touch_location);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.GestureHandler_OnRightDragGestureDone_ParamsSpec.$.structSpec);
          const result = this.impl.onRightDragGestureDone();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.GestureHandler_OnBackGestureCancel_ParamsSpec.$.structSpec);
          const result = this.impl.onBackGestureCancel();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.GestureHandler_OnTapGesture_ParamsSpec.$.structSpec);
          const result = this.impl.onTapGesture();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.GestureHandler_OnTapDownGesture_ParamsSpec.$.structSpec);
          const result = this.impl.onTapDownGesture();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromecast.mojom.GestureHandlerReceiver = chromecast.mojom.GestureHandlerReceiver;

chromecast.mojom.GestureHandlerPtr = chromecast.mojom.GestureHandlerRemote;
chromecast.mojom.GestureHandlerRequest = chromecast.mojom.GestureHandlerPendingReceiver;


// Interface: GestureSource
mojo.internal.Struct(
    chromecast.mojom.GestureSource_Subscribe_ParamsSpec, 'chromecast.mojom.GestureSource_Subscribe_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceProxy(chromecast.mojom.GestureHandlerRemote), null, false, 0, undefined),
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
  subscribe(handler) {
    return this.$.subscribe(handler);
  }
  setCanGoBack(can_go_back) {
    return this.$.setCanGoBack(can_go_back);
  }
  setCanTopDrag(can_top_drag) {
    return this.$.setCanTopDrag(can_top_drag);
  }
  setCanRightDrag(can_top_drag) {
    return this.$.setCanRightDrag(can_top_drag);
  }
};

chromecast.mojom.GestureSourceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GestureSource', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  subscribe(handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromecast.mojom.GestureSource_Subscribe_ParamsSpec,
      null,
      [handler],
      false);
  }

  setCanGoBack(can_go_back) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chromecast.mojom.GestureSource_SetCanGoBack_ParamsSpec,
      null,
      [can_go_back],
      false);
  }

  setCanTopDrag(can_top_drag) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      chromecast.mojom.GestureSource_SetCanTopDrag_ParamsSpec,
      null,
      [can_top_drag],
      false);
  }

  setCanRightDrag(can_top_drag) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GestureSource', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.GestureSource_Subscribe_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.GestureSource_SetCanGoBack_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.GestureSource_SetCanTopDrag_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.GestureSource_SetCanRightDrag_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.GestureSource_Subscribe_ParamsSpec.$.structSpec);
          const result = this.impl.subscribe(params.handler);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.GestureSource_SetCanGoBack_ParamsSpec.$.structSpec);
          const result = this.impl.setCanGoBack(params.can_go_back);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.GestureSource_SetCanTopDrag_ParamsSpec.$.structSpec);
          const result = this.impl.setCanTopDrag(params.can_top_drag);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.GestureSource_SetCanRightDrag_ParamsSpec.$.structSpec);
          const result = this.impl.setCanRightDrag(params.can_top_drag);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromecast.mojom.GestureSourceReceiver = chromecast.mojom.GestureSourceReceiver;

chromecast.mojom.GestureSourcePtr = chromecast.mojom.GestureSourceRemote;
chromecast.mojom.GestureSourceRequest = chromecast.mojom.GestureSourcePendingReceiver;

