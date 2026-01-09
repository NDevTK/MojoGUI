// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/browser/mojom/cast_content_window.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};


// Enum: VisibilityType
chromecast.mojom.VisibilityType = {
  UNKNOWN: 0,
  FULL_SCREEN: 1,
  PARTIAL_OUT: 2,
  HIDDEN: 3,
  TILE: 4,
  TRANSIENTLY_HIDDEN: 5,
};

// Enum: VisibilityPriority
chromecast.mojom.VisibilityPriority = {
  DESTROYED: 0,
  DEFAULT: 1,
  TRANSIENT_TIMEOUTABLE: 2,
  HIGH_PRIORITY_INTERRUPTION: 3,
  STICKY_ACTIVITY: 4,
  TRANSIENT_STICKY: 5,
  HIDDEN: 6,
  HIDDEN_STICKY: 7,
};

// Interface: CastContentWindowObserver
chromecast.mojom.CastContentWindowObserver = {};

chromecast.mojom.CastContentWindowObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.CastContentWindowObserverRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.CastContentWindowObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.CastContentWindowObserverPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.CastContentWindowObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.CastContentWindowObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onVisibilityChange(visibility_type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.CastContentWindowObserver_OnVisibilityChange_ParamsSpec,
      null,
      [visibility_type]);
  }

  onWindowDestroyed() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.mojom.CastContentWindowObserver_OnWindowDestroyed_ParamsSpec,
      null,
      []);
  }

};

chromecast.mojom.CastContentWindowObserver.getRemote = function() {
  let remote = new chromecast.mojom.CastContentWindowObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.CastContentWindowObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnVisibilityChange
chromecast.mojom.CastContentWindowObserver_OnVisibilityChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastContentWindowObserver.OnVisibilityChange_Params',
      packedSize: 16,
      fields: [
        { name: 'visibility_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnWindowDestroyed
chromecast.mojom.CastContentWindowObserver_OnWindowDestroyed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastContentWindowObserver.OnWindowDestroyed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chromecast.mojom.CastContentWindowObserverPtr = chromecast.mojom.CastContentWindowObserverRemote;
chromecast.mojom.CastContentWindowObserverRequest = chromecast.mojom.CastContentWindowObserverPendingReceiver;


// Interface: CastContentWindow
chromecast.mojom.CastContentWindow = {};

chromecast.mojom.CastContentWindowPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.CastContentWindowRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.CastContentWindow';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.CastContentWindowPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.CastContentWindowRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.CastContentWindowRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createWindow(z_order, priority) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.CastContentWindow_CreateWindow_ParamsSpec,
      null,
      [z_order, priority]);
  }

  addObserver(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.mojom.CastContentWindow_AddObserver_ParamsSpec,
      null,
      [observer]);
  }

  grantScreenAccess() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromecast.mojom.CastContentWindow_GrantScreenAccess_ParamsSpec,
      null,
      []);
  }

  revokeScreenAccess() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromecast.mojom.CastContentWindow_RevokeScreenAccess_ParamsSpec,
      null,
      []);
  }

  requestVisibility(priority) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromecast.mojom.CastContentWindow_RequestVisibility_ParamsSpec,
      null,
      [priority]);
  }

  enableTouchInput(enabled) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chromecast.mojom.CastContentWindow_EnableTouchInput_ParamsSpec,
      null,
      [enabled]);
  }

};

chromecast.mojom.CastContentWindow.getRemote = function() {
  let remote = new chromecast.mojom.CastContentWindowRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.CastContentWindow',
    'context');
  return remote.$;
};

// ParamsSpec for CreateWindow
chromecast.mojom.CastContentWindow_CreateWindow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastContentWindow.CreateWindow_Params',
      packedSize: 24,
      fields: [
        { name: 'z_order', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'priority', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddObserver
chromecast.mojom.CastContentWindow_AddObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastContentWindow.AddObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GrantScreenAccess
chromecast.mojom.CastContentWindow_GrantScreenAccess_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastContentWindow.GrantScreenAccess_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RevokeScreenAccess
chromecast.mojom.CastContentWindow_RevokeScreenAccess_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastContentWindow.RevokeScreenAccess_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestVisibility
chromecast.mojom.CastContentWindow_RequestVisibility_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastContentWindow.RequestVisibility_Params',
      packedSize: 16,
      fields: [
        { name: 'priority', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EnableTouchInput
chromecast.mojom.CastContentWindow_EnableTouchInput_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastContentWindow.EnableTouchInput_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chromecast.mojom.CastContentWindowPtr = chromecast.mojom.CastContentWindowRemote;
chromecast.mojom.CastContentWindowRequest = chromecast.mojom.CastContentWindowPendingReceiver;

