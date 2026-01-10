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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = chromecast.mojom.CastWebContentsObserver_PageStateChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.pageStateChanged(params.state);
          break;
        }
        case 1: {
          const params = chromecast.mojom.CastWebContentsObserver_PageStopped_ParamsSpec.$.decode(message.payload);
          const result = this.impl.pageStopped(params.state, params.error_code);
          break;
        }
        case 2: {
          const params = chromecast.mojom.CastWebContentsObserver_RenderFrameCreated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.renderFrameCreated(params.render_process_id, params.render_frame_id);
          break;
        }
        case 3: {
          const params = chromecast.mojom.CastWebContentsObserver_MainFrameFinishedNavigation_ParamsSpec.$.decode(message.payload);
          const result = this.impl.mainFrameFinishedNavigation();
          break;
        }
        case 4: {
          const params = chromecast.mojom.CastWebContentsObserver_UpdateTitle_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateTitle(params.title);
          break;
        }
        case 5: {
          const params = chromecast.mojom.CastWebContentsObserver_UpdateFaviconURL_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateFaviconURL(params.url);
          break;
        }
        case 6: {
          const params = chromecast.mojom.CastWebContentsObserver_DidFirstVisuallyNonEmptyPaint_ParamsSpec.$.decode(message.payload);
          const result = this.impl.didFirstVisuallyNonEmptyPaint();
          break;
        }
        case 7: {
          const params = chromecast.mojom.CastWebContentsObserver_ResourceLoadFailed_ParamsSpec.$.decode(message.payload);
          const result = this.impl.resourceLoadFailed();
          break;
        }
        case 8: {
          const params = chromecast.mojom.CastWebContentsObserver_OnRenderProcessReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onRenderProcessReady(params.pid);
          break;
        }
        case 9: {
          const params = chromecast.mojom.CastWebContentsObserver_MediaPlaybackChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.mediaPlaybackChanged(params.media_playing);
          break;
        }
        case 10: {
          const params = chromecast.mojom.CastWebContentsObserver_InnerContentsCreated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.innerContentsCreated(params.web_contents);
          break;
        }
      }
    });
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = chromecast.mojom.CastWebContents_SetAppProperties_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setAppProperties(params.app_id, params.session_id, params.is_audio_app, params.app_web_url, params.enforce_feature_permissions, params.feature_permissions, params.additional_feature_permission_origins);
          break;
        }
        case 1: {
          const params = chromecast.mojom.CastWebContents_SetGroupInfo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setGroupInfo(params.session_id, params.is_multizone_launch);
          break;
        }
        case 2: {
          const params = chromecast.mojom.CastWebContents_AddRendererFeatures_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addRendererFeatures(params.features);
          break;
        }
        case 3: {
          const params = chromecast.mojom.CastWebContents_SetInterfacesForRenderer_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setInterfacesForRenderer(params.remote_interfaces);
          break;
        }
        case 4: {
          const params = chromecast.mojom.CastWebContents_LoadUrl_ParamsSpec.$.decode(message.payload);
          const result = this.impl.loadUrl(params.url);
          break;
        }
        case 5: {
          const params = chromecast.mojom.CastWebContents_ClosePage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.closePage();
          break;
        }
        case 6: {
          const params = chromecast.mojom.CastWebContents_SetWebVisibilityAndPaint_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setWebVisibilityAndPaint(params.visible);
          break;
        }
        case 7: {
          const params = chromecast.mojom.CastWebContents_BlockMediaLoading_ParamsSpec.$.decode(message.payload);
          const result = this.impl.blockMediaLoading(params.blocked);
          break;
        }
        case 8: {
          const params = chromecast.mojom.CastWebContents_BlockMediaStarting_ParamsSpec.$.decode(message.payload);
          const result = this.impl.blockMediaStarting(params.blocked);
          break;
        }
        case 9: {
          const params = chromecast.mojom.CastWebContents_EnableBackgroundVideoPlayback_ParamsSpec.$.decode(message.payload);
          const result = this.impl.enableBackgroundVideoPlayback(params.enabled);
          break;
        }
        case 10: {
          const params = chromecast.mojom.CastWebContents_ConnectToBindingsService_ParamsSpec.$.decode(message.payload);
          const result = this.impl.connectToBindingsService(params.api_bindings_remote);
          break;
        }
        case 11: {
          const params = chromecast.mojom.CastWebContents_AddObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addObserver(params.observer);
          break;
        }
        case 12: {
          const params = chromecast.mojom.CastWebContents_SetEnabledForRemoteDebugging_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setEnabledForRemoteDebugging(params.enabled);
          break;
        }
        case 13: {
          const params = chromecast.mojom.CastWebContents_GetMainFramePid_ParamsSpec.$.decode(message.payload);
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
    });
  }
};

chromecast.mojom.CastWebContentsReceiver = chromecast.mojom.CastWebContentsReceiver;

chromecast.mojom.CastWebContentsPtr = chromecast.mojom.CastWebContentsRemote;
chromecast.mojom.CastWebContentsRequest = chromecast.mojom.CastWebContentsPendingReceiver;

