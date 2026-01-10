// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/frame_sink_manager_test_api.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var gfx = gfx || {};

viz.mojom.FrameSinkManagerTestApi = {};
viz.mojom.FrameSinkManagerTestApi.$interfaceName = 'viz.mojom.FrameSinkManagerTestApi';
viz.mojom.FrameSinkManagerTestApi_HasUnclaimedViewTransitionResources_ParamsSpec = { $: {} };
viz.mojom.FrameSinkManagerTestApi_HasUnclaimedViewTransitionResources_ResponseParamsSpec = { $: {} };
viz.mojom.FrameSinkManagerTestApi_SetSameDocNavigationScreenshotSize_ParamsSpec = { $: {} };
viz.mojom.FrameSinkManagerTestApi_SetSameDocNavigationScreenshotSize_ResponseParamsSpec = { $: {} };
viz.mojom.FrameSinkManagerTestApi_GetForceEnableZoomState_ParamsSpec = { $: {} };
viz.mojom.FrameSinkManagerTestApi_GetForceEnableZoomState_ResponseParamsSpec = { $: {} };
viz.mojom.FrameSinkManagerTestApi_WaitForSurfaceAnimationManager_ParamsSpec = { $: {} };
viz.mojom.FrameSinkManagerTestApi_WaitForSurfaceAnimationManager_ResponseParamsSpec = { $: {} };

// Interface: FrameSinkManagerTestApi
mojo.internal.Struct(
    viz.mojom.FrameSinkManagerTestApi_HasUnclaimedViewTransitionResources_ParamsSpec, 'viz.mojom.FrameSinkManagerTestApi_HasUnclaimedViewTransitionResources_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManagerTestApi_HasUnclaimedViewTransitionResources_ResponseParamsSpec, 'viz.mojom.FrameSinkManagerTestApi_HasUnclaimedViewTransitionResources_ResponseParams', [
      mojo.internal.StructField('has_resources', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManagerTestApi_SetSameDocNavigationScreenshotSize_ParamsSpec, 'viz.mojom.FrameSinkManagerTestApi_SetSameDocNavigationScreenshotSize_Params', [
      mojo.internal.StructField('result_size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManagerTestApi_SetSameDocNavigationScreenshotSize_ResponseParamsSpec, 'viz.mojom.FrameSinkManagerTestApi_SetSameDocNavigationScreenshotSize_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManagerTestApi_GetForceEnableZoomState_ParamsSpec, 'viz.mojom.FrameSinkManagerTestApi_GetForceEnableZoomState_Params', [
      mojo.internal.StructField('frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManagerTestApi_GetForceEnableZoomState_ResponseParamsSpec, 'viz.mojom.FrameSinkManagerTestApi_GetForceEnableZoomState_ResponseParams', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManagerTestApi_WaitForSurfaceAnimationManager_ParamsSpec, 'viz.mojom.FrameSinkManagerTestApi_WaitForSurfaceAnimationManager_Params', [
      mojo.internal.StructField('frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkManagerTestApi_WaitForSurfaceAnimationManager_ResponseParamsSpec, 'viz.mojom.FrameSinkManagerTestApi_WaitForSurfaceAnimationManager_ResponseParams', [
    ],
    [[0, 8]]);

viz.mojom.FrameSinkManagerTestApiPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.FrameSinkManagerTestApiRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.FrameSinkManagerTestApi';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.FrameSinkManagerTestApiPendingReceiver,
      handle);
    this.$ = new viz.mojom.FrameSinkManagerTestApiRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.FrameSinkManagerTestApiRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  hasUnclaimedViewTransitionResources() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.FrameSinkManagerTestApi_HasUnclaimedViewTransitionResources_ParamsSpec,
      viz.mojom.FrameSinkManagerTestApi_HasUnclaimedViewTransitionResources_ResponseParamsSpec,
      [],
      false);
  }

  setSameDocNavigationScreenshotSize(result_size) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.FrameSinkManagerTestApi_SetSameDocNavigationScreenshotSize_ParamsSpec,
      viz.mojom.FrameSinkManagerTestApi_SetSameDocNavigationScreenshotSize_ResponseParamsSpec,
      [result_size],
      false);
  }

  getForceEnableZoomState(frame_sink_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.FrameSinkManagerTestApi_GetForceEnableZoomState_ParamsSpec,
      viz.mojom.FrameSinkManagerTestApi_GetForceEnableZoomState_ResponseParamsSpec,
      [frame_sink_id],
      false);
  }

  waitForSurfaceAnimationManager(frame_sink_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      viz.mojom.FrameSinkManagerTestApi_WaitForSurfaceAnimationManager_ParamsSpec,
      viz.mojom.FrameSinkManagerTestApi_WaitForSurfaceAnimationManager_ResponseParamsSpec,
      [frame_sink_id],
      false);
  }

};

viz.mojom.FrameSinkManagerTestApi.getRemote = function() {
  let remote = new viz.mojom.FrameSinkManagerTestApiRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.FrameSinkManagerTestApi',
    'context');
  return remote.$;
};

viz.mojom.FrameSinkManagerTestApiReceiver = class {
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
        
        // Try Method 0: HasUnclaimedViewTransitionResources
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.FrameSinkManagerTestApi_HasUnclaimedViewTransitionResources_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HasUnclaimedViewTransitionResources (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetSameDocNavigationScreenshotSize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.FrameSinkManagerTestApi_SetSameDocNavigationScreenshotSize_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSameDocNavigationScreenshotSize (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetForceEnableZoomState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.FrameSinkManagerTestApi_GetForceEnableZoomState_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetForceEnableZoomState (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: WaitForSurfaceAnimationManager
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.FrameSinkManagerTestApi_WaitForSurfaceAnimationManager_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WaitForSurfaceAnimationManager (3)');
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
          const params = decoder.decodeStruct(viz.mojom.FrameSinkManagerTestApi_HasUnclaimedViewTransitionResources_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.hasUnclaimedViewTransitionResources');
          const result = this.impl.hasUnclaimedViewTransitionResources();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, viz.mojom.FrameSinkManagerTestApi_HasUnclaimedViewTransitionResources_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.FrameSinkManagerTestApi_SetSameDocNavigationScreenshotSize_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setSameDocNavigationScreenshotSize');
          const result = this.impl.setSameDocNavigationScreenshotSize(params.result_size);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, viz.mojom.FrameSinkManagerTestApi_SetSameDocNavigationScreenshotSize_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.FrameSinkManagerTestApi_GetForceEnableZoomState_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getForceEnableZoomState');
          const result = this.impl.getForceEnableZoomState(params.frame_sink_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, viz.mojom.FrameSinkManagerTestApi_GetForceEnableZoomState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.FrameSinkManagerTestApi_WaitForSurfaceAnimationManager_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.waitForSurfaceAnimationManager');
          const result = this.impl.waitForSurfaceAnimationManager(params.frame_sink_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, viz.mojom.FrameSinkManagerTestApi_WaitForSurfaceAnimationManager_ResponseParamsSpec);
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

viz.mojom.FrameSinkManagerTestApiReceiver = viz.mojom.FrameSinkManagerTestApiReceiver;

viz.mojom.FrameSinkManagerTestApiPtr = viz.mojom.FrameSinkManagerTestApiRemote;
viz.mojom.FrameSinkManagerTestApiRequest = viz.mojom.FrameSinkManagerTestApiPendingReceiver;

