// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/privacy_items.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.PrivacyApplicationSpec = { $: {} };
arc.mojom.PrivacyItemSpec = { $: {} };
arc.mojom.PrivacyItemsHost = {};
arc.mojom.PrivacyItemsHost.$interfaceName = 'arc.mojom.PrivacyItemsHost';
arc.mojom.PrivacyItemsHost_OnPrivacyItemsChanged_ParamsSpec = { $: {} };
arc.mojom.PrivacyItemsHost_OnMicCameraIndicatorRequirementChanged_ParamsSpec = { $: {} };
arc.mojom.PrivacyItemsHost_OnLocationIndicatorRequirementChanged_ParamsSpec = { $: {} };
arc.mojom.PrivacyItemsInstance = {};
arc.mojom.PrivacyItemsInstance.$interfaceName = 'arc.mojom.PrivacyItemsInstance';
arc.mojom.PrivacyItemsInstance_Init_ParamsSpec = { $: {} };
arc.mojom.PrivacyItemsInstance_Init_ResponseParamsSpec = { $: {} };
arc.mojom.PrivacyItemsInstance_OnStaticPrivacyIndicatorBoundsChanged_ParamsSpec = { $: {} };

// Struct: PrivacyApplication
mojo.internal.Struct(
    arc.mojom.PrivacyApplicationSpec, 'arc.mojom.PrivacyApplication', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('uid', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PrivacyItem
mojo.internal.Struct(
    arc.mojom.PrivacyItemSpec, 'arc.mojom.PrivacyItem', [
      mojo.internal.StructField('permission_group', 0, 0, arc.mojom.AppPermissionGroupSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('privacy_application', 8, 0, arc.mojom.PrivacyApplicationSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PrivacyItemsHost
mojo.internal.Struct(
    arc.mojom.PrivacyItemsHost_OnPrivacyItemsChanged_ParamsSpec, 'arc.mojom.PrivacyItemsHost_OnPrivacyItemsChanged_Params', [
      mojo.internal.StructField('privacy_items', 0, 0, mojo.internal.Array(arc.mojom.PrivacyItemSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.PrivacyItemsHost_OnMicCameraIndicatorRequirementChanged_ParamsSpec, 'arc.mojom.PrivacyItemsHost_OnMicCameraIndicatorRequirementChanged_Params', [
      mojo.internal.StructField('flag', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.PrivacyItemsHost_OnLocationIndicatorRequirementChanged_ParamsSpec, 'arc.mojom.PrivacyItemsHost_OnLocationIndicatorRequirementChanged_Params', [
      mojo.internal.StructField('flag', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.PrivacyItemsHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.PrivacyItemsHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.PrivacyItemsHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.PrivacyItemsHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.PrivacyItemsHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.PrivacyItemsHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPrivacyItemsChanged(privacy_items) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.PrivacyItemsHost_OnPrivacyItemsChanged_ParamsSpec,
      null,
      [privacy_items],
      false);
  }

  onMicCameraIndicatorRequirementChanged(flag) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.PrivacyItemsHost_OnMicCameraIndicatorRequirementChanged_ParamsSpec,
      null,
      [flag],
      false);
  }

  onLocationIndicatorRequirementChanged(flag) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.PrivacyItemsHost_OnLocationIndicatorRequirementChanged_ParamsSpec,
      null,
      [flag],
      false);
  }

};

arc.mojom.PrivacyItemsHost.getRemote = function() {
  let remote = new arc.mojom.PrivacyItemsHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.PrivacyItemsHost',
    'context');
  return remote.$;
};

arc.mojom.PrivacyItemsHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
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
        
        // Try Method 0: OnPrivacyItemsChanged
        try {
             decoder.decodeStruct(arc.mojom.PrivacyItemsHost_OnPrivacyItemsChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPrivacyItemsChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: OnMicCameraIndicatorRequirementChanged
        try {
             decoder.decodeStruct(arc.mojom.PrivacyItemsHost_OnMicCameraIndicatorRequirementChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMicCameraIndicatorRequirementChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: OnLocationIndicatorRequirementChanged
        try {
             decoder.decodeStruct(arc.mojom.PrivacyItemsHost_OnLocationIndicatorRequirementChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnLocationIndicatorRequirementChanged (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.PrivacyItemsHost_OnPrivacyItemsChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onPrivacyItemsChanged');
          const result = this.impl.onPrivacyItemsChanged(params.privacy_items);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.PrivacyItemsHost_OnMicCameraIndicatorRequirementChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onMicCameraIndicatorRequirementChanged');
          const result = this.impl.onMicCameraIndicatorRequirementChanged(params.flag);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.PrivacyItemsHost_OnLocationIndicatorRequirementChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onLocationIndicatorRequirementChanged');
          const result = this.impl.onLocationIndicatorRequirementChanged(params.flag);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.PrivacyItemsHostReceiver = arc.mojom.PrivacyItemsHostReceiver;

arc.mojom.PrivacyItemsHostPtr = arc.mojom.PrivacyItemsHostRemote;
arc.mojom.PrivacyItemsHostRequest = arc.mojom.PrivacyItemsHostPendingReceiver;


// Interface: PrivacyItemsInstance
mojo.internal.Struct(
    arc.mojom.PrivacyItemsInstance_Init_ParamsSpec, 'arc.mojom.PrivacyItemsInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.PrivacyItemsHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.PrivacyItemsInstance_Init_ResponseParamsSpec, 'arc.mojom.PrivacyItemsInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.PrivacyItemsInstance_OnStaticPrivacyIndicatorBoundsChanged_ParamsSpec, 'arc.mojom.PrivacyItemsInstance_OnStaticPrivacyIndicatorBoundsChanged_Params', [
      mojo.internal.StructField('bounds', 0, 0, mojo.internal.Array(arc.mojom.RectSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('displayId', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

arc.mojom.PrivacyItemsInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.PrivacyItemsInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.PrivacyItemsInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.PrivacyItemsInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.PrivacyItemsInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.PrivacyItemsInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.PrivacyItemsInstance_Init_ParamsSpec,
      arc.mojom.PrivacyItemsInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

  onStaticPrivacyIndicatorBoundsChanged(displayId, bounds) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.PrivacyItemsInstance_OnStaticPrivacyIndicatorBoundsChanged_ParamsSpec,
      null,
      [displayId, bounds],
      false);
  }

};

arc.mojom.PrivacyItemsInstance.getRemote = function() {
  let remote = new arc.mojom.PrivacyItemsInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.PrivacyItemsInstance',
    'context');
  return remote.$;
};

arc.mojom.PrivacyItemsInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        
        // Try Method 0: Init
        try {
             decoder.decodeStruct(arc.mojom.PrivacyItemsInstance_Init_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Init (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: OnStaticPrivacyIndicatorBoundsChanged
        try {
             decoder.decodeStruct(arc.mojom.PrivacyItemsInstance_OnStaticPrivacyIndicatorBoundsChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStaticPrivacyIndicatorBoundsChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.PrivacyItemsInstance_Init_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.init');
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.PrivacyItemsInstance_Init_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.PrivacyItemsInstance_OnStaticPrivacyIndicatorBoundsChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onStaticPrivacyIndicatorBoundsChanged');
          const result = this.impl.onStaticPrivacyIndicatorBoundsChanged(params.displayId, params.bounds);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.PrivacyItemsInstanceReceiver = arc.mojom.PrivacyItemsInstanceReceiver;

arc.mojom.PrivacyItemsInstancePtr = arc.mojom.PrivacyItemsInstanceRemote;
arc.mojom.PrivacyItemsInstanceRequest = arc.mojom.PrivacyItemsInstancePendingReceiver;

