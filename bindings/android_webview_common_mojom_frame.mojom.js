// Auto-generated MojoJS binding
// Source: chromium_src/android_webview/common/mojom/frame.mojom
// Module: android_webview.mojom

'use strict';

// Module namespace
var android_webview = android_webview || {};
android_webview.mojom = android_webview.mojom || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};
var url = url || {};

android_webview.mojom.HitTestDataTypeSpec = { $: mojo.internal.Enum() };
android_webview.mojom.HitTestDataSpec = { $: {} };
android_webview.mojom.LocalMainFrame = {};
android_webview.mojom.LocalMainFrame.$interfaceName = 'android_webview.mojom.LocalMainFrame';
android_webview.mojom.LocalMainFrame_SetInitialPageScale_ParamsSpec = { $: {} };
android_webview.mojom.LocalMainFrame_SetTextZoomFactor_ParamsSpec = { $: {} };
android_webview.mojom.LocalMainFrame_DocumentHasImage_ParamsSpec = { $: {} };
android_webview.mojom.LocalMainFrame_DocumentHasImage_ResponseParamsSpec = { $: {} };
android_webview.mojom.LocalMainFrame_ResetScrollAndScaleState_ParamsSpec = { $: {} };
android_webview.mojom.LocalMainFrame_SmoothScroll_ParamsSpec = { $: {} };
android_webview.mojom.FrameHost = {};
android_webview.mojom.FrameHost.$interfaceName = 'android_webview.mojom.FrameHost';
android_webview.mojom.FrameHost_UpdateHitTestData_ParamsSpec = { $: {} };
android_webview.mojom.FrameHost_ContentsSizeChanged_ParamsSpec = { $: {} };
android_webview.mojom.FrameHost_ShouldOverrideUrlLoading_ParamsSpec = { $: {} };
android_webview.mojom.FrameHost_ShouldOverrideUrlLoading_ResponseParamsSpec = { $: {} };

// Enum: HitTestDataType
android_webview.mojom.HitTestDataType = {
  kUnknown: 0,
  kPhone: 2,
  kGeo: 3,
  kEmail: 4,
  kImage: 5,
  kSrcLink: 7,
  kSrcImageLink: 8,
  kEditText: 9,
};

// Struct: HitTestData
mojo.internal.Struct(
    android_webview.mojom.HitTestDataSpec, 'android_webview.mojom.HitTestData', [
      mojo.internal.StructField('type', 0, 0, android_webview.mojom.HitTestDataTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('extra_data_for_type', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('href', 16, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('anchor_text', 24, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('img_src', 32, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: LocalMainFrame
mojo.internal.Struct(
    android_webview.mojom.LocalMainFrame_SetInitialPageScale_ParamsSpec, 'android_webview.mojom.LocalMainFrame_SetInitialPageScale_Params', [
      mojo.internal.StructField('page_scale_factor', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    android_webview.mojom.LocalMainFrame_SetTextZoomFactor_ParamsSpec, 'android_webview.mojom.LocalMainFrame_SetTextZoomFactor_Params', [
      mojo.internal.StructField('zoom_factor', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    android_webview.mojom.LocalMainFrame_DocumentHasImage_ParamsSpec, 'android_webview.mojom.LocalMainFrame_DocumentHasImage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    android_webview.mojom.LocalMainFrame_DocumentHasImage_ResponseParamsSpec, 'android_webview.mojom.LocalMainFrame_DocumentHasImage_ResponseParams', [
      mojo.internal.StructField('has_images', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    android_webview.mojom.LocalMainFrame_ResetScrollAndScaleState_ParamsSpec, 'android_webview.mojom.LocalMainFrame_ResetScrollAndScaleState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    android_webview.mojom.LocalMainFrame_SmoothScroll_ParamsSpec, 'android_webview.mojom.LocalMainFrame_SmoothScroll_Params', [
      mojo.internal.StructField('duration', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('target_x', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('target_y', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

android_webview.mojom.LocalMainFramePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

android_webview.mojom.LocalMainFrameRemote = class {
  static get $interfaceName() {
    return 'android_webview.mojom.LocalMainFrame';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      android_webview.mojom.LocalMainFramePendingReceiver,
      handle);
    this.$ = new android_webview.mojom.LocalMainFrameRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

android_webview.mojom.LocalMainFrameRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setInitialPageScale(page_scale_factor) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      android_webview.mojom.LocalMainFrame_SetInitialPageScale_ParamsSpec,
      null,
      [page_scale_factor],
      false);
  }

  setTextZoomFactor(zoom_factor) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      android_webview.mojom.LocalMainFrame_SetTextZoomFactor_ParamsSpec,
      null,
      [zoom_factor],
      false);
  }

  documentHasImage() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      android_webview.mojom.LocalMainFrame_DocumentHasImage_ParamsSpec,
      android_webview.mojom.LocalMainFrame_DocumentHasImage_ResponseParamsSpec,
      [],
      false);
  }

  resetScrollAndScaleState() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      android_webview.mojom.LocalMainFrame_ResetScrollAndScaleState_ParamsSpec,
      null,
      [],
      false);
  }

  smoothScroll(target_x, target_y, duration) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      android_webview.mojom.LocalMainFrame_SmoothScroll_ParamsSpec,
      null,
      [target_x, target_y, duration],
      false);
  }

};

android_webview.mojom.LocalMainFrame.getRemote = function() {
  let remote = new android_webview.mojom.LocalMainFrameRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'android_webview.mojom.LocalMainFrame',
    'context');
  return remote.$;
};

android_webview.mojom.LocalMainFrameReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
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
        
        // Try Method 0: SetInitialPageScale
        try {
             decoder.decodeStruct(android_webview.mojom.LocalMainFrame_SetInitialPageScale_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetInitialPageScale (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: SetTextZoomFactor
        try {
             decoder.decodeStruct(android_webview.mojom.LocalMainFrame_SetTextZoomFactor_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTextZoomFactor (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: DocumentHasImage
        try {
             decoder.decodeStruct(android_webview.mojom.LocalMainFrame_DocumentHasImage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DocumentHasImage (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: ResetScrollAndScaleState
        try {
             decoder.decodeStruct(android_webview.mojom.LocalMainFrame_ResetScrollAndScaleState_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResetScrollAndScaleState (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 4: SmoothScroll
        try {
             decoder.decodeStruct(android_webview.mojom.LocalMainFrame_SmoothScroll_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SmoothScroll (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(android_webview.mojom.LocalMainFrame_SetInitialPageScale_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setInitialPageScale');
          const result = this.impl.setInitialPageScale(params.page_scale_factor);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(android_webview.mojom.LocalMainFrame_SetTextZoomFactor_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setTextZoomFactor');
          const result = this.impl.setTextZoomFactor(params.zoom_factor);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(android_webview.mojom.LocalMainFrame_DocumentHasImage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.documentHasImage');
          const result = this.impl.documentHasImage();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, android_webview.mojom.LocalMainFrame_DocumentHasImage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(android_webview.mojom.LocalMainFrame_ResetScrollAndScaleState_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.resetScrollAndScaleState');
          const result = this.impl.resetScrollAndScaleState();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(android_webview.mojom.LocalMainFrame_SmoothScroll_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.smoothScroll');
          const result = this.impl.smoothScroll(params.target_x, params.target_y, params.duration);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

android_webview.mojom.LocalMainFrameReceiver = android_webview.mojom.LocalMainFrameReceiver;

android_webview.mojom.LocalMainFramePtr = android_webview.mojom.LocalMainFrameRemote;
android_webview.mojom.LocalMainFrameRequest = android_webview.mojom.LocalMainFramePendingReceiver;


// Interface: FrameHost
mojo.internal.Struct(
    android_webview.mojom.FrameHost_UpdateHitTestData_ParamsSpec, 'android_webview.mojom.FrameHost_UpdateHitTestData_Params', [
      mojo.internal.StructField('data', 0, 0, android_webview.mojom.HitTestDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    android_webview.mojom.FrameHost_ContentsSizeChanged_ParamsSpec, 'android_webview.mojom.FrameHost_ContentsSizeChanged_Params', [
      mojo.internal.StructField('contents_size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    android_webview.mojom.FrameHost_ShouldOverrideUrlLoading_ParamsSpec, 'android_webview.mojom.FrameHost_ShouldOverrideUrlLoading_Params', [
      mojo.internal.StructField('url', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('has_user_gesture', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_redirect', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_outermost_main_frame', 8, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    android_webview.mojom.FrameHost_ShouldOverrideUrlLoading_ResponseParamsSpec, 'android_webview.mojom.FrameHost_ShouldOverrideUrlLoading_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

android_webview.mojom.FrameHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

android_webview.mojom.FrameHostRemote = class {
  static get $interfaceName() {
    return 'android_webview.mojom.FrameHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      android_webview.mojom.FrameHostPendingReceiver,
      handle);
    this.$ = new android_webview.mojom.FrameHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

android_webview.mojom.FrameHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updateHitTestData(data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      android_webview.mojom.FrameHost_UpdateHitTestData_ParamsSpec,
      null,
      [data],
      false);
  }

  contentsSizeChanged(contents_size) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      android_webview.mojom.FrameHost_ContentsSizeChanged_ParamsSpec,
      null,
      [contents_size],
      false);
  }

  shouldOverrideUrlLoading(url, has_user_gesture, is_redirect, is_outermost_main_frame) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      android_webview.mojom.FrameHost_ShouldOverrideUrlLoading_ParamsSpec,
      android_webview.mojom.FrameHost_ShouldOverrideUrlLoading_ResponseParamsSpec,
      [url, has_user_gesture, is_redirect, is_outermost_main_frame],
      false);
  }

};

android_webview.mojom.FrameHost.getRemote = function() {
  let remote = new android_webview.mojom.FrameHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'android_webview.mojom.FrameHost',
    'context');
  return remote.$;
};

android_webview.mojom.FrameHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
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
        
        // Try Method 0: UpdateHitTestData
        try {
             decoder.decodeStruct(android_webview.mojom.FrameHost_UpdateHitTestData_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateHitTestData (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: ContentsSizeChanged
        try {
             decoder.decodeStruct(android_webview.mojom.FrameHost_ContentsSizeChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ContentsSizeChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: ShouldOverrideUrlLoading
        try {
             decoder.decodeStruct(android_webview.mojom.FrameHost_ShouldOverrideUrlLoading_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShouldOverrideUrlLoading (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(android_webview.mojom.FrameHost_UpdateHitTestData_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateHitTestData');
          const result = this.impl.updateHitTestData(params.data);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(android_webview.mojom.FrameHost_ContentsSizeChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.contentsSizeChanged');
          const result = this.impl.contentsSizeChanged(params.contents_size);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(android_webview.mojom.FrameHost_ShouldOverrideUrlLoading_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.shouldOverrideUrlLoading');
          const result = this.impl.shouldOverrideUrlLoading(params.url, params.has_user_gesture, params.is_redirect, params.is_outermost_main_frame);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, android_webview.mojom.FrameHost_ShouldOverrideUrlLoading_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

android_webview.mojom.FrameHostReceiver = android_webview.mojom.FrameHostReceiver;

android_webview.mojom.FrameHostPtr = android_webview.mojom.FrameHostRemote;
android_webview.mojom.FrameHostRequest = android_webview.mojom.FrameHostPendingReceiver;

