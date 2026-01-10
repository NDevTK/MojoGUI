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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnBackGesture
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromecast.mojom.GestureHandler_OnBackGesture_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBackGesture (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnBackGestureProgress
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromecast.mojom.GestureHandler_OnBackGestureProgress_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBackGestureProgress (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnTopDragGestureProgress
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromecast.mojom.GestureHandler_OnTopDragGestureProgress_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTopDragGestureProgress (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnTopDragGestureDone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromecast.mojom.GestureHandler_OnTopDragGestureDone_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTopDragGestureDone (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnRightDragGestureProgress
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromecast.mojom.GestureHandler_OnRightDragGestureProgress_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnRightDragGestureProgress (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnRightDragGestureDone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromecast.mojom.GestureHandler_OnRightDragGestureDone_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnRightDragGestureDone (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnBackGestureCancel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromecast.mojom.GestureHandler_OnBackGestureCancel_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBackGestureCancel (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: OnTapGesture
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromecast.mojom.GestureHandler_OnTapGesture_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTapGesture (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: OnTapDownGesture
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromecast.mojom.GestureHandler_OnTapDownGesture_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTapDownGesture (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromecast.mojom.GestureHandler_OnBackGesture_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onBackGesture');
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
          const params = decoder.decodeStruct(chromecast.mojom.GestureHandler_OnBackGestureProgress_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onBackGestureProgress');
          const result = this.impl.onBackGestureProgress(params.touch_location);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromecast.mojom.GestureHandler_OnTopDragGestureProgress_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onTopDragGestureProgress');
          const result = this.impl.onTopDragGestureProgress(params.touch_location);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromecast.mojom.GestureHandler_OnTopDragGestureDone_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onTopDragGestureDone');
          const result = this.impl.onTopDragGestureDone();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromecast.mojom.GestureHandler_OnRightDragGestureProgress_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onRightDragGestureProgress');
          const result = this.impl.onRightDragGestureProgress(params.touch_location);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromecast.mojom.GestureHandler_OnRightDragGestureDone_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onRightDragGestureDone');
          const result = this.impl.onRightDragGestureDone();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromecast.mojom.GestureHandler_OnBackGestureCancel_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onBackGestureCancel');
          const result = this.impl.onBackGestureCancel();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromecast.mojom.GestureHandler_OnTapGesture_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onTapGesture');
          const result = this.impl.onTapGesture();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromecast.mojom.GestureHandler_OnTapDownGesture_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onTapDownGesture');
          const result = this.impl.onTapDownGesture();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Subscribe
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromecast.mojom.GestureSource_Subscribe_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Subscribe (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetCanGoBack
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromecast.mojom.GestureSource_SetCanGoBack_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCanGoBack (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetCanTopDrag
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromecast.mojom.GestureSource_SetCanTopDrag_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCanTopDrag (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetCanRightDrag
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromecast.mojom.GestureSource_SetCanRightDrag_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCanRightDrag (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromecast.mojom.GestureSource_Subscribe_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.subscribe');
          const result = this.impl.subscribe(params.handler);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromecast.mojom.GestureSource_SetCanGoBack_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setCanGoBack');
          const result = this.impl.setCanGoBack(params.can_go_back);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromecast.mojom.GestureSource_SetCanTopDrag_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setCanTopDrag');
          const result = this.impl.setCanTopDrag(params.can_top_drag);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromecast.mojom.GestureSource_SetCanRightDrag_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setCanRightDrag');
          const result = this.impl.setCanRightDrag(params.can_top_drag);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromecast.mojom.GestureSourceReceiver = chromecast.mojom.GestureSourceReceiver;

chromecast.mojom.GestureSourcePtr = chromecast.mojom.GestureSourceRemote;
chromecast.mojom.GestureSourceRequest = chromecast.mojom.GestureSourcePendingReceiver;

