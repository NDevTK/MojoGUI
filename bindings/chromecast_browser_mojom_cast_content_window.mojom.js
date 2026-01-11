// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/browser/mojom/cast_content_window.mojom
// Module: chromecast.mojom

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
  onVisibilityChange(visibility_type) {
    return this.$.onVisibilityChange(visibility_type);
  }
  onWindowDestroyed() {
    return this.$.onWindowDestroyed();
  }
};

chromecast.mojom.CastContentWindowObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CastContentWindowObserver', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onVisibilityChange(visibility_type) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromecast.mojom.CastContentWindowObserver_OnVisibilityChange_ParamsSpec,
      null,
      [visibility_type],
      false);
  }

  onWindowDestroyed() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CastContentWindowObserver', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastContentWindowObserver_OnVisibilityChange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastContentWindowObserver_OnWindowDestroyed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastContentWindowObserver_OnVisibilityChange_ParamsSpec.$.structSpec);
          const result = this.impl.onVisibilityChange(params.visibility_type);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastContentWindowObserver_OnWindowDestroyed_ParamsSpec.$.structSpec);
          const result = this.impl.onWindowDestroyed();
          break;
        }
      }
      } catch (err) {}
    }});
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
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(chromecast.mojom.CastContentWindowObserverRemote), null, false, 0, undefined),
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
  createWindow(z_order, priority) {
    return this.$.createWindow(z_order, priority);
  }
  addObserver(observer) {
    return this.$.addObserver(observer);
  }
  grantScreenAccess() {
    return this.$.grantScreenAccess();
  }
  revokeScreenAccess() {
    return this.$.revokeScreenAccess();
  }
  requestVisibility(priority) {
    return this.$.requestVisibility(priority);
  }
  enableTouchInput(enabled) {
    return this.$.enableTouchInput(enabled);
  }
};

chromecast.mojom.CastContentWindowRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CastContentWindow', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  createWindow(z_order, priority) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromecast.mojom.CastContentWindow_CreateWindow_ParamsSpec,
      null,
      [z_order, priority],
      false);
  }

  addObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chromecast.mojom.CastContentWindow_AddObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  grantScreenAccess() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      chromecast.mojom.CastContentWindow_GrantScreenAccess_ParamsSpec,
      null,
      [],
      false);
  }

  revokeScreenAccess() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      chromecast.mojom.CastContentWindow_RevokeScreenAccess_ParamsSpec,
      null,
      [],
      false);
  }

  requestVisibility(priority) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      chromecast.mojom.CastContentWindow_RequestVisibility_ParamsSpec,
      null,
      [priority],
      false);
  }

  enableTouchInput(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CastContentWindow', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastContentWindow_CreateWindow_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastContentWindow_AddObserver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastContentWindow_GrantScreenAccess_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastContentWindow_RevokeScreenAccess_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastContentWindow_RequestVisibility_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastContentWindow_EnableTouchInput_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastContentWindow_CreateWindow_ParamsSpec.$.structSpec);
          const result = this.impl.createWindow(params.z_order, params.priority);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastContentWindow_AddObserver_ParamsSpec.$.structSpec);
          const result = this.impl.addObserver(params.observer);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastContentWindow_GrantScreenAccess_ParamsSpec.$.structSpec);
          const result = this.impl.grantScreenAccess();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastContentWindow_RevokeScreenAccess_ParamsSpec.$.structSpec);
          const result = this.impl.revokeScreenAccess();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastContentWindow_RequestVisibility_ParamsSpec.$.structSpec);
          const result = this.impl.requestVisibility(params.priority);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastContentWindow_EnableTouchInput_ParamsSpec.$.structSpec);
          const result = this.impl.enableTouchInput(params.enabled);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromecast.mojom.CastContentWindowReceiver = chromecast.mojom.CastContentWindowReceiver;

chromecast.mojom.CastContentWindowPtr = chromecast.mojom.CastContentWindowRemote;
chromecast.mojom.CastContentWindowRequest = chromecast.mojom.CastContentWindowPendingReceiver;

