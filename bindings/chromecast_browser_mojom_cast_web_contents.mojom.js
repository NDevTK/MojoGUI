// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/browser/mojom/cast_web_contents.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};
var components = components || {};
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
      mojo.internal.StructField('web_contents', 0, 0, mojo.internal.InterfaceProxy(chromecast.mojom.CastWebContentsRemote), null, false, 0, undefined),
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

chromecast.mojom.CastWebContentsObserverPtr = chromecast.mojom.CastWebContentsObserverRemote;
chromecast.mojom.CastWebContentsObserverRequest = chromecast.mojom.CastWebContentsObserverPendingReceiver;


// Interface: CastWebContents
mojo.internal.Struct(
    chromecast.mojom.CastWebContents_SetAppProperties_ParamsSpec, 'chromecast.mojom.CastWebContents_SetAppProperties_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('session_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_audio_app', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('app_web_url', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('enforce_feature_permissions', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('feature_permissions', 40, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false, 0, undefined),
      mojo.internal.StructField('additional_feature_permission_origins', 48, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 64]]);

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
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(chromecast.mojom.CastWebContentsObserverRemote), null, false, 0, undefined),
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

chromecast.mojom.CastWebContentsPtr = chromecast.mojom.CastWebContentsRemote;
chromecast.mojom.CastWebContentsRequest = chromecast.mojom.CastWebContentsPendingReceiver;

