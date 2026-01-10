// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/browser/mojom/cast_content_window.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};
var mojo_base = mojo_base || {};

chromecast.mojom.VisibilityTypeSpec = { $: mojo.internal.Enum() };
chromecast.mojom.VisibilityPrioritySpec = { $: mojo.internal.Enum() };
chromecast.mojom.CastContentWindowObserver = {};
chromecast.mojom.CastContentWindowObserver.$interfaceName = 'chromecast.mojom.CastContentWindowObserver';
chromecast.mojom.CastContentWindowObserver_OnVisibilityChange_ParamsSpec = { $: {} };
chromecast.mojom.CastContentWindowObserver_OnWindowDestroyed_ParamsSpec = { $: {} };
chromecast.mojom.CastContentWindow = {};
chromecast.mojom.CastContentWindow.$interfaceName = 'chromecast.mojom.CastContentWindow';
chromecast.mojom.CastContentWindow_CreateWindow_ParamsSpec = { $: {} };
chromecast.mojom.CastContentWindow_AddObserver_ParamsSpec = { $: {} };
chromecast.mojom.CastContentWindow_GrantScreenAccess_ParamsSpec = { $: {} };
chromecast.mojom.CastContentWindow_RevokeScreenAccess_ParamsSpec = { $: {} };
chromecast.mojom.CastContentWindow_RequestVisibility_ParamsSpec = { $: {} };
chromecast.mojom.CastContentWindow_EnableTouchInput_ParamsSpec = { $: {} };

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
  DESTROYED: -1,
  DEFAULT: 0,
  TRANSIENT_TIMEOUTABLE: 1,
  HIGH_PRIORITY_INTERRUPTION: 2,
  STICKY_ACTIVITY: 3,
  TRANSIENT_STICKY: 4,
  HIDDEN: 5,
  HIDDEN_STICKY: 6,
};

// Interface: CastContentWindowObserver
mojo.internal.Struct(
    chromecast.mojom.CastContentWindowObserver_OnVisibilityChange_ParamsSpec, 'chromecast.mojom.CastContentWindowObserver_OnVisibilityChange_Params', [
      mojo.internal.StructField('visibility_type', 0, 0, chromecast.mojom.VisibilityTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.CastContentWindowObserver_OnWindowDestroyed_ParamsSpec, 'chromecast.mojom.CastContentWindowObserver_OnWindowDestroyed_Params', [
    ],
    [[0, 8]]);

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
      [visibility_type],
      false);
  }

  onWindowDestroyed() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.mojom.CastContentWindowObserver_OnWindowDestroyed_ParamsSpec,
      null,
      [],
      false);
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

chromecast.mojom.CastContentWindowObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = chromecast.mojom.CastContentWindowObserver_OnVisibilityChange_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onVisibilityChange(params.visibility_type);
          break;
        }
        case 1: {
          const params = chromecast.mojom.CastContentWindowObserver_OnWindowDestroyed_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onWindowDestroyed();
          break;
        }
      }
    });
  }
};

chromecast.mojom.CastContentWindowObserverReceiver = chromecast.mojom.CastContentWindowObserverReceiver;

chromecast.mojom.CastContentWindowObserverPtr = chromecast.mojom.CastContentWindowObserverRemote;
chromecast.mojom.CastContentWindowObserverRequest = chromecast.mojom.CastContentWindowObserverPendingReceiver;


// Interface: CastContentWindow
mojo.internal.Struct(
    chromecast.mojom.CastContentWindow_CreateWindow_ParamsSpec, 'chromecast.mojom.CastContentWindow_CreateWindow_Params', [
      mojo.internal.StructField('z_order', 0, 0, chromecast.mojom.ZOrderSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('priority', 8, 0, chromecast.mojom.VisibilityPrioritySpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromecast.mojom.CastContentWindow_AddObserver_ParamsSpec, 'chromecast.mojom.CastContentWindow_AddObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(chromecast.mojom.CastContentWindowObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.CastContentWindow_GrantScreenAccess_ParamsSpec, 'chromecast.mojom.CastContentWindow_GrantScreenAccess_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromecast.mojom.CastContentWindow_RevokeScreenAccess_ParamsSpec, 'chromecast.mojom.CastContentWindow_RevokeScreenAccess_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromecast.mojom.CastContentWindow_RequestVisibility_ParamsSpec, 'chromecast.mojom.CastContentWindow_RequestVisibility_Params', [
      mojo.internal.StructField('priority', 0, 0, chromecast.mojom.VisibilityPrioritySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.CastContentWindow_EnableTouchInput_ParamsSpec, 'chromecast.mojom.CastContentWindow_EnableTouchInput_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [z_order, priority],
      false);
  }

  addObserver(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.mojom.CastContentWindow_AddObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  grantScreenAccess() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromecast.mojom.CastContentWindow_GrantScreenAccess_ParamsSpec,
      null,
      [],
      false);
  }

  revokeScreenAccess() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromecast.mojom.CastContentWindow_RevokeScreenAccess_ParamsSpec,
      null,
      [],
      false);
  }

  requestVisibility(priority) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromecast.mojom.CastContentWindow_RequestVisibility_ParamsSpec,
      null,
      [priority],
      false);
  }

  enableTouchInput(enabled) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chromecast.mojom.CastContentWindow_EnableTouchInput_ParamsSpec,
      null,
      [enabled],
      false);
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

chromecast.mojom.CastContentWindowReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = chromecast.mojom.CastContentWindow_CreateWindow_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createWindow(params.z_order, params.priority);
          break;
        }
        case 1: {
          const params = chromecast.mojom.CastContentWindow_AddObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addObserver(params.observer);
          break;
        }
        case 2: {
          const params = chromecast.mojom.CastContentWindow_GrantScreenAccess_ParamsSpec.$.decode(message.payload);
          const result = this.impl.grantScreenAccess();
          break;
        }
        case 3: {
          const params = chromecast.mojom.CastContentWindow_RevokeScreenAccess_ParamsSpec.$.decode(message.payload);
          const result = this.impl.revokeScreenAccess();
          break;
        }
        case 4: {
          const params = chromecast.mojom.CastContentWindow_RequestVisibility_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestVisibility(params.priority);
          break;
        }
        case 5: {
          const params = chromecast.mojom.CastContentWindow_EnableTouchInput_ParamsSpec.$.decode(message.payload);
          const result = this.impl.enableTouchInput(params.enabled);
          break;
        }
      }
    });
  }
};

chromecast.mojom.CastContentWindowReceiver = chromecast.mojom.CastContentWindowReceiver;

chromecast.mojom.CastContentWindowPtr = chromecast.mojom.CastContentWindowRemote;
chromecast.mojom.CastContentWindowRequest = chromecast.mojom.CastContentWindowPendingReceiver;

