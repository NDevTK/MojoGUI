// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/browser/mojom/cast_web_contents.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};


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
      chromecast.mojom.CastWebContentsObserver_PageStateChanged_ParamsSpec.$,
      null,
      [state]);
  }

  pageStopped(state, error_code) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.mojom.CastWebContentsObserver_PageStopped_ParamsSpec.$,
      null,
      [state, error_code]);
  }

  renderFrameCreated(render_process_id, render_frame_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromecast.mojom.CastWebContentsObserver_RenderFrameCreated_ParamsSpec.$,
      null,
      [render_process_id, render_frame_id]);
  }

  mainFrameFinishedNavigation() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromecast.mojom.CastWebContentsObserver_MainFrameFinishedNavigation_ParamsSpec.$,
      null,
      []);
  }

  updateTitle(title) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromecast.mojom.CastWebContentsObserver_UpdateTitle_ParamsSpec.$,
      null,
      [title]);
  }

  updateFaviconURL(url) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chromecast.mojom.CastWebContentsObserver_UpdateFaviconURL_ParamsSpec.$,
      null,
      [url]);
  }

  didFirstVisuallyNonEmptyPaint() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      chromecast.mojom.CastWebContentsObserver_DidFirstVisuallyNonEmptyPaint_ParamsSpec.$,
      null,
      []);
  }

  resourceLoadFailed() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      chromecast.mojom.CastWebContentsObserver_ResourceLoadFailed_ParamsSpec.$,
      null,
      []);
  }

  onRenderProcessReady(pid) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      chromecast.mojom.CastWebContentsObserver_OnRenderProcessReady_ParamsSpec.$,
      null,
      [pid]);
  }

  mediaPlaybackChanged(media_playing) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      chromecast.mojom.CastWebContentsObserver_MediaPlaybackChanged_ParamsSpec.$,
      null,
      [media_playing]);
  }

  innerContentsCreated(web_contents) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      chromecast.mojom.CastWebContentsObserver_InnerContentsCreated_ParamsSpec.$,
      null,
      [web_contents]);
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

// ParamsSpec for PageStateChanged
chromecast.mojom.CastWebContentsObserver_PageStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastWebContentsObserver.PageStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PageStopped
chromecast.mojom.CastWebContentsObserver_PageStopped_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastWebContentsObserver.PageStopped_Params',
      packedSize: 24,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'error_code', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RenderFrameCreated
chromecast.mojom.CastWebContentsObserver_RenderFrameCreated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastWebContentsObserver.RenderFrameCreated_Params',
      packedSize: 24,
      fields: [
        { name: 'render_process_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'render_frame_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for MainFrameFinishedNavigation
chromecast.mojom.CastWebContentsObserver_MainFrameFinishedNavigation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastWebContentsObserver.MainFrameFinishedNavigation_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateTitle
chromecast.mojom.CastWebContentsObserver_UpdateTitle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastWebContentsObserver.UpdateTitle_Params',
      packedSize: 16,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateFaviconURL
chromecast.mojom.CastWebContentsObserver_UpdateFaviconURL_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastWebContentsObserver.UpdateFaviconURL_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidFirstVisuallyNonEmptyPaint
chromecast.mojom.CastWebContentsObserver_DidFirstVisuallyNonEmptyPaint_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastWebContentsObserver.DidFirstVisuallyNonEmptyPaint_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ResourceLoadFailed
chromecast.mojom.CastWebContentsObserver_ResourceLoadFailed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastWebContentsObserver.ResourceLoadFailed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnRenderProcessReady
chromecast.mojom.CastWebContentsObserver_OnRenderProcessReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastWebContentsObserver.OnRenderProcessReady_Params',
      packedSize: 16,
      fields: [
        { name: 'pid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for MediaPlaybackChanged
chromecast.mojom.CastWebContentsObserver_MediaPlaybackChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastWebContentsObserver.MediaPlaybackChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'media_playing', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for InnerContentsCreated
chromecast.mojom.CastWebContentsObserver_InnerContentsCreated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastWebContentsObserver.InnerContentsCreated_Params',
      packedSize: 16,
      fields: [
        { name: 'web_contents', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chromecast.mojom.CastWebContentsObserverPtr = chromecast.mojom.CastWebContentsObserverRemote;
chromecast.mojom.CastWebContentsObserverRequest = chromecast.mojom.CastWebContentsObserverPendingReceiver;


// Interface: CastWebContents
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
      chromecast.mojom.CastWebContents_SetAppProperties_ParamsSpec.$,
      null,
      [app_id, session_id, is_audio_app, app_web_url, enforce_feature_permissions, feature_permissions, additional_feature_permission_origins]);
  }

  setGroupInfo(session_id, is_multizone_launch) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.mojom.CastWebContents_SetGroupInfo_ParamsSpec.$,
      null,
      [session_id, is_multizone_launch]);
  }

  addRendererFeatures(features) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromecast.mojom.CastWebContents_AddRendererFeatures_ParamsSpec.$,
      null,
      [features]);
  }

  setInterfacesForRenderer(remote_interfaces) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromecast.mojom.CastWebContents_SetInterfacesForRenderer_ParamsSpec.$,
      null,
      [remote_interfaces]);
  }

  loadUrl(url) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromecast.mojom.CastWebContents_LoadUrl_ParamsSpec.$,
      null,
      [url]);
  }

  closePage() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chromecast.mojom.CastWebContents_ClosePage_ParamsSpec.$,
      null,
      []);
  }

  setWebVisibilityAndPaint(visible) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      chromecast.mojom.CastWebContents_SetWebVisibilityAndPaint_ParamsSpec.$,
      null,
      [visible]);
  }

  blockMediaLoading(blocked) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      chromecast.mojom.CastWebContents_BlockMediaLoading_ParamsSpec.$,
      null,
      [blocked]);
  }

  blockMediaStarting(blocked) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      chromecast.mojom.CastWebContents_BlockMediaStarting_ParamsSpec.$,
      null,
      [blocked]);
  }

  enableBackgroundVideoPlayback(enabled) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      chromecast.mojom.CastWebContents_EnableBackgroundVideoPlayback_ParamsSpec.$,
      null,
      [enabled]);
  }

  connectToBindingsService(api_bindings_remote) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      chromecast.mojom.CastWebContents_ConnectToBindingsService_ParamsSpec.$,
      null,
      [api_bindings_remote]);
  }

  addObserver(observer) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      chromecast.mojom.CastWebContents_AddObserver_ParamsSpec.$,
      null,
      [observer]);
  }

  setEnabledForRemoteDebugging(enabled) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      chromecast.mojom.CastWebContents_SetEnabledForRemoteDebugging_ParamsSpec.$,
      null,
      [enabled]);
  }

  getMainFramePid() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      chromecast.mojom.CastWebContents_GetMainFramePid_ParamsSpec.$,
      chromecast.mojom.CastWebContents_GetMainFramePid_ResponseParamsSpec.$,
      []);
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

// ParamsSpec for SetAppProperties
chromecast.mojom.CastWebContents_SetAppProperties_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastWebContents.SetAppProperties_Params',
      packedSize: 64,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'session_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'is_audio_app', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'app_web_url', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'enforce_feature_permissions', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'feature_permissions', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'additional_feature_permission_origins', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetGroupInfo
chromecast.mojom.CastWebContents_SetGroupInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastWebContents.SetGroupInfo_Params',
      packedSize: 24,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'is_multizone_launch', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddRendererFeatures
chromecast.mojom.CastWebContents_AddRendererFeatures_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastWebContents.AddRendererFeatures_Params',
      packedSize: 16,
      fields: [
        { name: 'features', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetInterfacesForRenderer
chromecast.mojom.CastWebContents_SetInterfacesForRenderer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastWebContents.SetInterfacesForRenderer_Params',
      packedSize: 16,
      fields: [
        { name: 'remote_interfaces', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for LoadUrl
chromecast.mojom.CastWebContents_LoadUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastWebContents.LoadUrl_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClosePage
chromecast.mojom.CastWebContents_ClosePage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastWebContents.ClosePage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetWebVisibilityAndPaint
chromecast.mojom.CastWebContents_SetWebVisibilityAndPaint_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastWebContents.SetWebVisibilityAndPaint_Params',
      packedSize: 16,
      fields: [
        { name: 'visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BlockMediaLoading
chromecast.mojom.CastWebContents_BlockMediaLoading_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastWebContents.BlockMediaLoading_Params',
      packedSize: 16,
      fields: [
        { name: 'blocked', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BlockMediaStarting
chromecast.mojom.CastWebContents_BlockMediaStarting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastWebContents.BlockMediaStarting_Params',
      packedSize: 16,
      fields: [
        { name: 'blocked', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EnableBackgroundVideoPlayback
chromecast.mojom.CastWebContents_EnableBackgroundVideoPlayback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastWebContents.EnableBackgroundVideoPlayback_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ConnectToBindingsService
chromecast.mojom.CastWebContents_ConnectToBindingsService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastWebContents.ConnectToBindingsService_Params',
      packedSize: 16,
      fields: [
        { name: 'api_bindings_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddObserver
chromecast.mojom.CastWebContents_AddObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastWebContents.AddObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetEnabledForRemoteDebugging
chromecast.mojom.CastWebContents_SetEnabledForRemoteDebugging_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastWebContents.SetEnabledForRemoteDebugging_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetMainFramePid
chromecast.mojom.CastWebContents_GetMainFramePid_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastWebContents.GetMainFramePid_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

chromecast.mojom.CastWebContents_GetMainFramePid_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastWebContents.GetMainFramePid_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'pid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chromecast.mojom.CastWebContentsPtr = chromecast.mojom.CastWebContentsRemote;
chromecast.mojom.CastWebContentsRequest = chromecast.mojom.CastWebContentsPendingReceiver;

