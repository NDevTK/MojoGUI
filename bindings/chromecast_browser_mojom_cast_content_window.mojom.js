// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/browser/mojom/cast_content_window.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};
var ui = ui || {};


// Enum: VisibilityType
chromecast.mojom.mojom.VisibilityType = {
  UNKNOWN: 0,
  FULL_SCREEN: 1,
  PARTIAL_OUT: 2,
  HIDDEN: 3,
  TILE: 4,
  TRANSIENTLY_HIDDEN: 5,
};
chromecast.mojom.mojom.VisibilityTypeSpec = { $: mojo.internal.Enum() };

// Enum: VisibilityPriority
chromecast.mojom.mojom.VisibilityPriority = {
  DESTROYED: 0,
  DEFAULT: 1,
  TRANSIENT_TIMEOUTABLE: 2,
  HIGH_PRIORITY_INTERRUPTION: 3,
  STICKY_ACTIVITY: 4,
  TRANSIENT_STICKY: 5,
  HIDDEN: 6,
  HIDDEN_STICKY: 7,
};
chromecast.mojom.mojom.VisibilityPrioritySpec = { $: mojo.internal.Enum() };

// Interface: CastContentWindowObserver
chromecast.mojom.mojom.CastContentWindowObserver = {};

chromecast.mojom.mojom.CastContentWindowObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.mojom.CastContentWindowObserverRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.CastContentWindowObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.mojom.CastContentWindowObserverPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.mojom.CastContentWindowObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.mojom.CastContentWindowObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onVisibilityChange(visibility_type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.mojom.CastContentWindowObserver_OnVisibilityChange_ParamsSpec,
      null,
      [visibility_type]);
  }

  onWindowDestroyed() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.mojom.mojom.CastContentWindowObserver_OnWindowDestroyed_ParamsSpec,
      null,
      []);
  }

};

chromecast.mojom.mojom.CastContentWindowObserver.getRemote = function() {
  let remote = new chromecast.mojom.mojom.CastContentWindowObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.CastContentWindowObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnVisibilityChange
chromecast.mojom.mojom.CastContentWindowObserver_OnVisibilityChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastContentWindowObserver.OnVisibilityChange_Params',
      packedSize: 16,
      fields: [
        { name: 'visibility_type', packedOffset: 0, packedBitOffset: 0, type: chromecast.mojom.VisibilityTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnWindowDestroyed
chromecast.mojom.mojom.CastContentWindowObserver_OnWindowDestroyed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastContentWindowObserver.OnWindowDestroyed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
chromecast.mojom.mojom.CastContentWindowObserverPtr = chromecast.mojom.mojom.CastContentWindowObserverRemote;
chromecast.mojom.mojom.CastContentWindowObserverRequest = chromecast.mojom.mojom.CastContentWindowObserverPendingReceiver;


// Interface: CastContentWindow
chromecast.mojom.mojom.CastContentWindow = {};

chromecast.mojom.mojom.CastContentWindowPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.mojom.CastContentWindowRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.CastContentWindow';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.mojom.CastContentWindowPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.mojom.CastContentWindowRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.mojom.CastContentWindowRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createWindow(z_order, priority) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.mojom.CastContentWindow_CreateWindow_ParamsSpec,
      null,
      [z_order, priority]);
  }

  addObserver(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.mojom.mojom.CastContentWindow_AddObserver_ParamsSpec,
      null,
      [observer]);
  }

  grantScreenAccess() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromecast.mojom.mojom.CastContentWindow_GrantScreenAccess_ParamsSpec,
      null,
      []);
  }

  revokeScreenAccess() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromecast.mojom.mojom.CastContentWindow_RevokeScreenAccess_ParamsSpec,
      null,
      []);
  }

  requestVisibility(priority) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromecast.mojom.mojom.CastContentWindow_RequestVisibility_ParamsSpec,
      null,
      [priority]);
  }

  enableTouchInput(enabled) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chromecast.mojom.mojom.CastContentWindow_EnableTouchInput_ParamsSpec,
      null,
      [enabled]);
  }

};

chromecast.mojom.mojom.CastContentWindow.getRemote = function() {
  let remote = new chromecast.mojom.mojom.CastContentWindowRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.CastContentWindow',
    'context');
  return remote.$;
};

// ParamsSpec for CreateWindow
chromecast.mojom.mojom.CastContentWindow_CreateWindow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastContentWindow.CreateWindow_Params',
      packedSize: 16,
      fields: [
        { name: 'z_order', packedOffset: 0, packedBitOffset: 0, type: chromecast.mojom.ZOrderSpec, nullable: false, minVersion: 0 },
        { name: 'priority', packedOffset: 4, packedBitOffset: 0, type: chromecast.mojom.VisibilityPrioritySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddObserver
chromecast.mojom.mojom.CastContentWindow_AddObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastContentWindow.AddObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GrantScreenAccess
chromecast.mojom.mojom.CastContentWindow_GrantScreenAccess_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastContentWindow.GrantScreenAccess_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for RevokeScreenAccess
chromecast.mojom.mojom.CastContentWindow_RevokeScreenAccess_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastContentWindow.RevokeScreenAccess_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for RequestVisibility
chromecast.mojom.mojom.CastContentWindow_RequestVisibility_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastContentWindow.RequestVisibility_Params',
      packedSize: 16,
      fields: [
        { name: 'priority', packedOffset: 0, packedBitOffset: 0, type: chromecast.mojom.VisibilityPrioritySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EnableTouchInput
chromecast.mojom.mojom.CastContentWindow_EnableTouchInput_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastContentWindow.EnableTouchInput_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromecast.mojom.mojom.CastContentWindowPtr = chromecast.mojom.mojom.CastContentWindowRemote;
chromecast.mojom.mojom.CastContentWindowRequest = chromecast.mojom.mojom.CastContentWindowPendingReceiver;

