// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/browser/mojom/cast_web_contents.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};
var url_rewrite = url_rewrite || {};
var mojo_base = mojo_base || {};
var url = url || {};

chromecast.mojom.PageStateSpec = { $: mojo.internal.Enum() };
chromecast.mojom.CastWebContentsObserver = {};
chromecast.mojom.CastWebContentsObserver.$interfaceName = 'chromecast.mojom.CastWebContentsObserver';
chromecast.mojom.CastWebContentsObserver_PageStateChanged_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContentsObserver_PageStopped_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContentsObserver_RenderFrameCreated_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContentsObserver_MainFrameFinishedNavigation_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContentsObserver_UpdateTitle_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContentsObserver_UpdateFaviconURL_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContentsObserver_DidFirstVisuallyNonEmptyPaint_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContentsObserver_ResourceLoadFailed_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContentsObserver_OnRenderProcessReady_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContentsObserver_MediaPlaybackChanged_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContentsObserver_InnerContentsCreated_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContents = {};
chromecast.mojom.CastWebContents.$interfaceName = 'chromecast.mojom.CastWebContents';
chromecast.mojom.CastWebContents_SetAppProperties_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContents_SetGroupInfo_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContents_AddRendererFeatures_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContents_SetInterfacesForRenderer_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContents_LoadUrl_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContents_ClosePage_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContents_SetWebVisibilityAndPaint_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContents_BlockMediaLoading_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContents_BlockMediaStarting_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContents_EnableBackgroundVideoPlayback_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContents_ConnectToBindingsService_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContents_AddObserver_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContents_SetEnabledForRemoteDebugging_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContents_GetMainFramePid_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContents_GetMainFramePid_ResponseParamsSpec = { $: {} };

// Enum: PageState
chromecast.mojom.PageState = {
  IDLE: 0,
  LOADING: 1,
  LOADED: 2,
  CLOSED: 3,
  DESTROYED: 4,
  ERROR: 5,
};

// Interface: CastWebContentsObserver
mojo.internal.Struct(
    chromecast.mojom.CastWebContentsObserver_PageStateChanged_ParamsSpec, 'chromecast.mojom.CastWebContentsObserver_PageStateChanged_Params', [
      mojo.internal.StructField('state', 0, 0, chromecast.mojom.PageStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContentsObserver_PageStopped_ParamsSpec, 'chromecast.mojom.CastWebContentsObserver_PageStopped_Params', [
      mojo.internal.StructField('state', 0, 0, chromecast.mojom.PageStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error_code', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContentsObserver_RenderFrameCreated_ParamsSpec, 'chromecast.mojom.CastWebContentsObserver_RenderFrameCreated_Params', [
      mojo.internal.StructField('render_process_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('render_frame_id', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContentsObserver_MainFrameFinishedNavigation_ParamsSpec, 'chromecast.mojom.CastWebContentsObserver_MainFrameFinishedNavigation_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContentsObserver_UpdateTitle_ParamsSpec, 'chromecast.mojom.CastWebContentsObserver_UpdateTitle_Params', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContentsObserver_UpdateFaviconURL_ParamsSpec, 'chromecast.mojom.CastWebContentsObserver_UpdateFaviconURL_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContentsObserver_DidFirstVisuallyNonEmptyPaint_ParamsSpec, 'chromecast.mojom.CastWebContentsObserver_DidFirstVisuallyNonEmptyPaint_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContentsObserver_ResourceLoadFailed_ParamsSpec, 'chromecast.mojom.CastWebContentsObserver_ResourceLoadFailed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContentsObserver_OnRenderProcessReady_ParamsSpec, 'chromecast.mojom.CastWebContentsObserver_OnRenderProcessReady_Params', [
      mojo.internal.StructField('pid', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContentsObserver_MediaPlaybackChanged_ParamsSpec, 'chromecast.mojom.CastWebContentsObserver_MediaPlaybackChanged_Params', [
      mojo.internal.StructField('media_playing', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContentsObserver_InnerContentsCreated_ParamsSpec, 'chromecast.mojom.CastWebContentsObserver_InnerContentsCreated_Params', [
      mojo.internal.StructField('web_contents', 0, 0, mojo.internal.InterfaceProxy(chromecast.mojom.CastWebContentsSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

chromecast.mojom.CastWebContentsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.CastWebContentsObserverRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.CastWebContentsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.CastWebContentsObserverPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.CastWebContentsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.CastWebContentsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  pageStateChanged(state) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.CastWebContentsObserver_PageStateChanged_ParamsSpec,
      null,
      [state],
      false);
  }

  pageStopped(state, error_code) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.mojom.CastWebContentsObserver_PageStopped_ParamsSpec,
      null,
      [state, error_code],
      false);
  }

  renderFrameCreated(render_process_id, render_frame_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromecast.mojom.CastWebContentsObserver_RenderFrameCreated_ParamsSpec,
      null,
      [render_process_id, render_frame_id],
      false);
  }

  mainFrameFinishedNavigation() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromecast.mojom.CastWebContentsObserver_MainFrameFinishedNavigation_ParamsSpec,
      null,
      [],
      false);
  }

  updateTitle(title) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromecast.mojom.CastWebContentsObserver_UpdateTitle_ParamsSpec,
      null,
      [title],
      false);
  }

  updateFaviconURL(url) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chromecast.mojom.CastWebContentsObserver_UpdateFaviconURL_ParamsSpec,
      null,
      [url],
      false);
  }

  didFirstVisuallyNonEmptyPaint() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      chromecast.mojom.CastWebContentsObserver_DidFirstVisuallyNonEmptyPaint_ParamsSpec,
      null,
      [],
      false);
  }

  resourceLoadFailed() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      chromecast.mojom.CastWebContentsObserver_ResourceLoadFailed_ParamsSpec,
      null,
      [],
      false);
  }

  onRenderProcessReady(pid) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      chromecast.mojom.CastWebContentsObserver_OnRenderProcessReady_ParamsSpec,
      null,
      [pid],
      false);
  }

  mediaPlaybackChanged(media_playing) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      chromecast.mojom.CastWebContentsObserver_MediaPlaybackChanged_ParamsSpec,
      null,
      [media_playing],
      false);
  }

  innerContentsCreated(web_contents) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      chromecast.mojom.CastWebContentsObserver_InnerContentsCreated_ParamsSpec,
      null,
      [web_contents],
      false);
  }

};

chromecast.mojom.CastWebContentsObserver.getRemote = function() {
  let remote = new chromecast.mojom.CastWebContentsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.CastWebContentsObserver',
    'context');
  return remote.$;
};

chromecast.mojom.CastWebContentsObserverReceiver = class {
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
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: PageStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContentsObserver_PageStateChanged_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PageStateChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: PageStopped
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContentsObserver_PageStopped_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PageStopped (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: RenderFrameCreated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContentsObserver_RenderFrameCreated_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RenderFrameCreated (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: MainFrameFinishedNavigation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContentsObserver_MainFrameFinishedNavigation_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MainFrameFinishedNavigation (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: UpdateTitle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContentsObserver_UpdateTitle_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateTitle (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: UpdateFaviconURL
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContentsObserver_UpdateFaviconURL_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateFaviconURL (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: DidFirstVisuallyNonEmptyPaint
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContentsObserver_DidFirstVisuallyNonEmptyPaint_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidFirstVisuallyNonEmptyPaint (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ResourceLoadFailed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContentsObserver_ResourceLoadFailed_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResourceLoadFailed (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: OnRenderProcessReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContentsObserver_OnRenderProcessReady_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnRenderProcessReady (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: MediaPlaybackChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContentsObserver_MediaPlaybackChanged_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MediaPlaybackChanged (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: InnerContentsCreated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContentsObserver_InnerContentsCreated_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InnerContentsCreated (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
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
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContentsObserver_PageStateChanged_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.pageStateChanged');
          const result = this.impl.pageStateChanged(params.state);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContentsObserver_PageStopped_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.pageStopped');
          const result = this.impl.pageStopped(params.state, params.error_code);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContentsObserver_RenderFrameCreated_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.renderFrameCreated');
          const result = this.impl.renderFrameCreated(params.render_process_id, params.render_frame_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContentsObserver_MainFrameFinishedNavigation_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.mainFrameFinishedNavigation');
          const result = this.impl.mainFrameFinishedNavigation();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContentsObserver_UpdateTitle_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.updateTitle');
          const result = this.impl.updateTitle(params.title);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContentsObserver_UpdateFaviconURL_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.updateFaviconURL');
          const result = this.impl.updateFaviconURL(params.url);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContentsObserver_DidFirstVisuallyNonEmptyPaint_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.didFirstVisuallyNonEmptyPaint');
          const result = this.impl.didFirstVisuallyNonEmptyPaint();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContentsObserver_ResourceLoadFailed_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.resourceLoadFailed');
          const result = this.impl.resourceLoadFailed();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContentsObserver_OnRenderProcessReady_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onRenderProcessReady');
          const result = this.impl.onRenderProcessReady(params.pid);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContentsObserver_MediaPlaybackChanged_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.mediaPlaybackChanged');
          const result = this.impl.mediaPlaybackChanged(params.media_playing);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContentsObserver_InnerContentsCreated_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.innerContentsCreated');
          const result = this.impl.innerContentsCreated(params.web_contents);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromecast.mojom.CastWebContentsObserverReceiver = chromecast.mojom.CastWebContentsObserverReceiver;

chromecast.mojom.CastWebContentsObserverPtr = chromecast.mojom.CastWebContentsObserverRemote;
chromecast.mojom.CastWebContentsObserverRequest = chromecast.mojom.CastWebContentsObserverPendingReceiver;


// Interface: CastWebContents
mojo.internal.Struct(
    chromecast.mojom.CastWebContents_SetAppProperties_ParamsSpec, 'chromecast.mojom.CastWebContents_SetAppProperties_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('session_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('app_web_url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('feature_permissions', 24, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false, 0, undefined),
      mojo.internal.StructField('additional_feature_permission_origins', 32, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('is_audio_app', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enforce_feature_permissions', 40, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContents_SetGroupInfo_ParamsSpec, 'chromecast.mojom.CastWebContents_SetGroupInfo_Params', [
      mojo.internal.StructField('session_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_multizone_launch', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContents_AddRendererFeatures_ParamsSpec, 'chromecast.mojom.CastWebContents_AddRendererFeatures_Params', [
      mojo.internal.StructField('features', 0, 0, mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContents_SetInterfacesForRenderer_ParamsSpec, 'chromecast.mojom.CastWebContents_SetInterfacesForRenderer_Params', [
      mojo.internal.StructField('remote_interfaces', 0, 0, mojo.internal.InterfaceProxy(chromecast.mojom.RemoteInterfacesRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContents_LoadUrl_ParamsSpec, 'chromecast.mojom.CastWebContents_LoadUrl_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContents_ClosePage_ParamsSpec, 'chromecast.mojom.CastWebContents_ClosePage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContents_SetWebVisibilityAndPaint_ParamsSpec, 'chromecast.mojom.CastWebContents_SetWebVisibilityAndPaint_Params', [
      mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContents_BlockMediaLoading_ParamsSpec, 'chromecast.mojom.CastWebContents_BlockMediaLoading_Params', [
      mojo.internal.StructField('blocked', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContents_BlockMediaStarting_ParamsSpec, 'chromecast.mojom.CastWebContents_BlockMediaStarting_Params', [
      mojo.internal.StructField('blocked', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContents_EnableBackgroundVideoPlayback_ParamsSpec, 'chromecast.mojom.CastWebContents_EnableBackgroundVideoPlayback_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContents_ConnectToBindingsService_ParamsSpec, 'chromecast.mojom.CastWebContents_ConnectToBindingsService_Params', [
      mojo.internal.StructField('api_bindings_remote', 0, 0, mojo.internal.InterfaceProxy(chromecast.mojom.ApiBindingsRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContents_AddObserver_ParamsSpec, 'chromecast.mojom.CastWebContents_AddObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(chromecast.mojom.CastWebContentsObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContents_SetEnabledForRemoteDebugging_ParamsSpec, 'chromecast.mojom.CastWebContents_SetEnabledForRemoteDebugging_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContents_GetMainFramePid_ParamsSpec, 'chromecast.mojom.CastWebContents_GetMainFramePid_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContents_GetMainFramePid_ResponseParamsSpec, 'chromecast.mojom.CastWebContents_GetMainFramePid_ResponseParams', [
      mojo.internal.StructField('pid', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

chromecast.mojom.CastWebContentsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.CastWebContentsRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.CastWebContents';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.CastWebContentsPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.CastWebContentsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.CastWebContentsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setAppProperties(app_id, session_id, is_audio_app, app_web_url, enforce_feature_permissions, feature_permissions, additional_feature_permission_origins) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.CastWebContents_SetAppProperties_ParamsSpec,
      null,
      [app_id, session_id, is_audio_app, app_web_url, enforce_feature_permissions, feature_permissions, additional_feature_permission_origins],
      false);
  }

  setGroupInfo(session_id, is_multizone_launch) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.mojom.CastWebContents_SetGroupInfo_ParamsSpec,
      null,
      [session_id, is_multizone_launch],
      false);
  }

  addRendererFeatures(features) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromecast.mojom.CastWebContents_AddRendererFeatures_ParamsSpec,
      null,
      [features],
      false);
  }

  setInterfacesForRenderer(remote_interfaces) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromecast.mojom.CastWebContents_SetInterfacesForRenderer_ParamsSpec,
      null,
      [remote_interfaces],
      false);
  }

  loadUrl(url) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromecast.mojom.CastWebContents_LoadUrl_ParamsSpec,
      null,
      [url],
      false);
  }

  closePage() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chromecast.mojom.CastWebContents_ClosePage_ParamsSpec,
      null,
      [],
      false);
  }

  setWebVisibilityAndPaint(visible) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      chromecast.mojom.CastWebContents_SetWebVisibilityAndPaint_ParamsSpec,
      null,
      [visible],
      false);
  }

  blockMediaLoading(blocked) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      chromecast.mojom.CastWebContents_BlockMediaLoading_ParamsSpec,
      null,
      [blocked],
      false);
  }

  blockMediaStarting(blocked) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      chromecast.mojom.CastWebContents_BlockMediaStarting_ParamsSpec,
      null,
      [blocked],
      false);
  }

  enableBackgroundVideoPlayback(enabled) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      chromecast.mojom.CastWebContents_EnableBackgroundVideoPlayback_ParamsSpec,
      null,
      [enabled],
      false);
  }

  connectToBindingsService(api_bindings_remote) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      chromecast.mojom.CastWebContents_ConnectToBindingsService_ParamsSpec,
      null,
      [api_bindings_remote],
      false);
  }

  addObserver(observer) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      chromecast.mojom.CastWebContents_AddObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  setEnabledForRemoteDebugging(enabled) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      chromecast.mojom.CastWebContents_SetEnabledForRemoteDebugging_ParamsSpec,
      null,
      [enabled],
      false);
  }

  getMainFramePid() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      chromecast.mojom.CastWebContents_GetMainFramePid_ParamsSpec,
      chromecast.mojom.CastWebContents_GetMainFramePid_ResponseParamsSpec,
      [],
      false);
  }

};

chromecast.mojom.CastWebContents.getRemote = function() {
  let remote = new chromecast.mojom.CastWebContentsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.CastWebContents',
    'context');
  return remote.$;
};

chromecast.mojom.CastWebContentsReceiver = class {
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
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    this.ordinalMap.set(13, 13); // Default ordinal 13 -> Index 13
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: SetAppProperties
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContents_SetAppProperties_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAppProperties (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetGroupInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContents_SetGroupInfo_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetGroupInfo (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: AddRendererFeatures
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContents_AddRendererFeatures_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddRendererFeatures (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetInterfacesForRenderer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContents_SetInterfacesForRenderer_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetInterfacesForRenderer (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: LoadUrl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContents_LoadUrl_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadUrl (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ClosePage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContents_ClosePage_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClosePage (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetWebVisibilityAndPaint
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContents_SetWebVisibilityAndPaint_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetWebVisibilityAndPaint (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: BlockMediaLoading
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContents_BlockMediaLoading_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BlockMediaLoading (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: BlockMediaStarting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContents_BlockMediaStarting_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BlockMediaStarting (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: EnableBackgroundVideoPlayback
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContents_EnableBackgroundVideoPlayback_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnableBackgroundVideoPlayback (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: ConnectToBindingsService
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContents_ConnectToBindingsService_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConnectToBindingsService (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: AddObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContents_AddObserver_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddObserver (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: SetEnabledForRemoteDebugging
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContents_SetEnabledForRemoteDebugging_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetEnabledForRemoteDebugging (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: GetMainFramePid
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContents_GetMainFramePid_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetMainFramePid (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
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
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContents_SetAppProperties_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setAppProperties');
          const result = this.impl.setAppProperties(params.app_id, params.session_id, params.is_audio_app, params.app_web_url, params.enforce_feature_permissions, params.feature_permissions, params.additional_feature_permission_origins);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContents_SetGroupInfo_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setGroupInfo');
          const result = this.impl.setGroupInfo(params.session_id, params.is_multizone_launch);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContents_AddRendererFeatures_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.addRendererFeatures');
          const result = this.impl.addRendererFeatures(params.features);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContents_SetInterfacesForRenderer_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setInterfacesForRenderer');
          const result = this.impl.setInterfacesForRenderer(params.remote_interfaces);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContents_LoadUrl_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.loadUrl');
          const result = this.impl.loadUrl(params.url);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContents_ClosePage_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.closePage');
          const result = this.impl.closePage();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContents_SetWebVisibilityAndPaint_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setWebVisibilityAndPaint');
          const result = this.impl.setWebVisibilityAndPaint(params.visible);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContents_BlockMediaLoading_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.blockMediaLoading');
          const result = this.impl.blockMediaLoading(params.blocked);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContents_BlockMediaStarting_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.blockMediaStarting');
          const result = this.impl.blockMediaStarting(params.blocked);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContents_EnableBackgroundVideoPlayback_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.enableBackgroundVideoPlayback');
          const result = this.impl.enableBackgroundVideoPlayback(params.enabled);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContents_ConnectToBindingsService_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.connectToBindingsService');
          const result = this.impl.connectToBindingsService(params.api_bindings_remote);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContents_AddObserver_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.addObserver');
          const result = this.impl.addObserver(params.observer);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContents_SetEnabledForRemoteDebugging_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setEnabledForRemoteDebugging');
          const result = this.impl.setEnabledForRemoteDebugging(params.enabled);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContents_GetMainFramePid_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getMainFramePid');
          const result = this.impl.getMainFramePid();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromecast.mojom.CastWebContents_GetMainFramePid_ResponseParamsSpec);
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

chromecast.mojom.CastWebContentsReceiver = chromecast.mojom.CastWebContentsReceiver;

chromecast.mojom.CastWebContentsPtr = chromecast.mojom.CastWebContentsRemote;
chromecast.mojom.CastWebContentsRequest = chromecast.mojom.CastWebContentsPendingReceiver;

