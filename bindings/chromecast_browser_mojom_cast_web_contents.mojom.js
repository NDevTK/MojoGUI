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
  but: 1,
};

// Interface: CastWebContentsObserver
chromecast.mojom.CastWebContentsObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromecast.mojom.CastWebContentsObserver';
  }

  pageStateChanged(state) {
    // Method: PageStateChanged
    // Call: PageStateChanged(state)
  }

  pageStopped(state, error_code) {
    // Method: PageStopped
    // Call: PageStopped(state, error_code)
  }

  renderFrameCreated(render_process_id, render_frame_id) {
    // Method: RenderFrameCreated
    // Call: RenderFrameCreated(render_process_id, render_frame_id)
  }

  mainFrameFinishedNavigation() {
    // Method: MainFrameFinishedNavigation
    // Call: MainFrameFinishedNavigation()
  }

  updateTitle(title) {
    // Method: UpdateTitle
    // Call: UpdateTitle(title)
  }

  updateFaviconURL(url) {
    // Method: UpdateFaviconURL
    // Call: UpdateFaviconURL(url)
  }

  didFirstVisuallyNonEmptyPaint() {
    // Method: DidFirstVisuallyNonEmptyPaint
    // Call: DidFirstVisuallyNonEmptyPaint()
  }

  resourceLoadFailed() {
    // Method: ResourceLoadFailed
    // Call: ResourceLoadFailed()
  }

  onRendererProcessStarted() {
    // Method: OnRendererProcessStarted
    // Call: OnRendererProcessStarted()
  }

  onRenderProcessReady(pid) {
    // Method: OnRenderProcessReady
    // Call: OnRenderProcessReady(pid)
  }

  mediaPlaybackChanged(media_playing) {
    // Method: MediaPlaybackChanged
    // Call: MediaPlaybackChanged(media_playing)
  }

  innerContentsCreated(web_contents) {
    // Method: InnerContentsCreated
    // Call: InnerContentsCreated(web_contents)
  }

};

chromecast.mojom.CastWebContentsObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CastWebContents
chromecast.mojom.CastWebContentsPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromecast.mojom.CastWebContents';
  }

  setAppProperties(app_id, session_id, is_audio_app, app_web_url, enforce_feature_permissions, feature_permissions, additional_feature_permission_origins) {
    // Method: SetAppProperties
    // Call: SetAppProperties(app_id, session_id, is_audio_app, app_web_url, enforce_feature_permissions, feature_permissions, additional_feature_permission_origins)
  }

  setAppProperties() {
    // Method: SetAppProperties
    // Call: SetAppProperties()
  }

  setGroupInfo(session_id, is_multizone_launch) {
    // Method: SetGroupInfo
    // Call: SetGroupInfo(session_id, is_multizone_launch)
  }

  addRendererFeatures(features) {
    // Method: AddRendererFeatures
    // Call: AddRendererFeatures(features)
  }

  setInterfacesForRenderer(remote_interfaces) {
    // Method: SetInterfacesForRenderer
    // Call: SetInterfacesForRenderer(remote_interfaces)
  }

  onPageStateChanged() {
    // Method: OnPageStateChanged
    // Call: OnPageStateChanged()
  }

  loadUrl(url) {
    // Method: LoadUrl
    // Call: LoadUrl(url)
  }

  onPageStopped() {
    // Method: OnPageStopped
    // Call: OnPageStopped()
  }

  closePage() {
    // Method: ClosePage
    // Call: ClosePage()
  }

  true(blank) {
    // Method: true
    // Call: true(blank)
  }

  setWebVisibilityAndPaint(visible) {
    // Method: SetWebVisibilityAndPaint
    // Call: SetWebVisibilityAndPaint(visible)
  }

  blockMediaLoading(blocked) {
    // Method: BlockMediaLoading
    // Call: BlockMediaLoading(blocked)
  }

  blockMediaStarting(blocked) {
    // Method: BlockMediaStarting
    // Call: BlockMediaStarting(blocked)
  }

  enableBackgroundVideoPlayback(enabled) {
    // Method: EnableBackgroundVideoPlayback
    // Call: EnableBackgroundVideoPlayback(enabled)
  }

  connectToBindingsService(api_bindings_remote) {
    // Method: ConnectToBindingsService
    // Call: ConnectToBindingsService(api_bindings_remote)
  }

  addObserver(observer) {
    // Method: AddObserver
    // Call: AddObserver(observer)
  }

  setEnabledForRemoteDebugging(enabled) {
    // Method: SetEnabledForRemoteDebugging
    // Call: SetEnabledForRemoteDebugging(enabled)
  }

  getMainFramePid() {
    // Method: GetMainFramePid
    return new Promise((resolve) => {
      // Call: GetMainFramePid()
      resolve({});
    });
  }

};

chromecast.mojom.CastWebContentsRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
