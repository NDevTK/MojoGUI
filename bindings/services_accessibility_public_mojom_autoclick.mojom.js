// Auto-generated MojoJS binding
// Source: chromium_src/services/accessibility/public/mojom/autoclick.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};
var gfx = gfx || {};

ax.mojom.Autoclick = {};
ax.mojom.Autoclick.$interfaceName = 'ax.mojom.Autoclick';
ax.mojom.Autoclick_RequestScrollableBoundsForPoint_ParamsSpec = { $: {} };
ax.mojom.AutoclickClient = {};
ax.mojom.AutoclickClient.$interfaceName = 'ax.mojom.AutoclickClient';
ax.mojom.AutoclickClient_HandleScrollableBoundsForPointFound_ParamsSpec = { $: {} };
ax.mojom.AutoclickClient_BindAutoclick_ParamsSpec = { $: {} };
ax.mojom.AutoclickClient_BindAutoclick_ResponseParamsSpec = { $: {} };

// Interface: Autoclick
mojo.internal.Struct(
    ax.mojom.Autoclick_RequestScrollableBoundsForPoint_ParamsSpec, 'ax.mojom.Autoclick_RequestScrollableBoundsForPoint_Params', [
      mojo.internal.StructField('point', 0, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ax.mojom.AutoclickPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ax.mojom.AutoclickRemote = class {
  static get $interfaceName() {
    return 'ax.mojom.Autoclick';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ax.mojom.AutoclickPendingReceiver,
      handle);
    this.$ = new ax.mojom.AutoclickRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ax.mojom.AutoclickRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestScrollableBoundsForPoint(point) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ax.mojom.Autoclick_RequestScrollableBoundsForPoint_ParamsSpec,
      null,
      [point],
      false);
  }

};

ax.mojom.Autoclick.getRemote = function() {
  let remote = new ax.mojom.AutoclickRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ax.mojom.Autoclick',
    'context');
  return remote.$;
};

ax.mojom.AutoclickReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: RequestScrollableBoundsForPoint
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ax.mojom.Autoclick_RequestScrollableBoundsForPoint_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestScrollableBoundsForPoint (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStruct(ax.mojom.Autoclick_RequestScrollableBoundsForPoint_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestScrollableBoundsForPoint');
          const result = this.impl.requestScrollableBoundsForPoint(params.point);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ax.mojom.AutoclickReceiver = ax.mojom.AutoclickReceiver;

ax.mojom.AutoclickPtr = ax.mojom.AutoclickRemote;
ax.mojom.AutoclickRequest = ax.mojom.AutoclickPendingReceiver;


// Interface: AutoclickClient
mojo.internal.Struct(
    ax.mojom.AutoclickClient_HandleScrollableBoundsForPointFound_ParamsSpec, 'ax.mojom.AutoclickClient_HandleScrollableBoundsForPointFound_Params', [
      mojo.internal.StructField('bounds', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ax.mojom.AutoclickClient_BindAutoclick_ParamsSpec, 'ax.mojom.AutoclickClient_BindAutoclick_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ax.mojom.AutoclickClient_BindAutoclick_ResponseParamsSpec, 'ax.mojom.AutoclickClient_BindAutoclick_ResponseParams', [
      mojo.internal.StructField('autoclick_receiver', 0, 0, mojo.internal.InterfaceRequest(ax.mojom.AutoclickSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

ax.mojom.AutoclickClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ax.mojom.AutoclickClientRemote = class {
  static get $interfaceName() {
    return 'ax.mojom.AutoclickClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ax.mojom.AutoclickClientPendingReceiver,
      handle);
    this.$ = new ax.mojom.AutoclickClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ax.mojom.AutoclickClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  handleScrollableBoundsForPointFound(bounds) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ax.mojom.AutoclickClient_HandleScrollableBoundsForPointFound_ParamsSpec,
      null,
      [bounds],
      false);
  }

  bindAutoclick() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ax.mojom.AutoclickClient_BindAutoclick_ParamsSpec,
      ax.mojom.AutoclickClient_BindAutoclick_ResponseParamsSpec,
      [],
      false);
  }

};

ax.mojom.AutoclickClient.getRemote = function() {
  let remote = new ax.mojom.AutoclickClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ax.mojom.AutoclickClient',
    'context');
  return remote.$;
};

ax.mojom.AutoclickClientReceiver = class {
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: HandleScrollableBoundsForPointFound
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ax.mojom.AutoclickClient_HandleScrollableBoundsForPointFound_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HandleScrollableBoundsForPointFound (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: BindAutoclick
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ax.mojom.AutoclickClient_BindAutoclick_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindAutoclick (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStruct(ax.mojom.AutoclickClient_HandleScrollableBoundsForPointFound_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.handleScrollableBoundsForPointFound');
          const result = this.impl.handleScrollableBoundsForPointFound(params.bounds);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ax.mojom.AutoclickClient_BindAutoclick_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindAutoclick');
          const result = this.impl.bindAutoclick();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ax.mojom.AutoclickClient_BindAutoclick_ResponseParamsSpec);
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

ax.mojom.AutoclickClientReceiver = ax.mojom.AutoclickClientReceiver;

ax.mojom.AutoclickClientPtr = ax.mojom.AutoclickClientRemote;
ax.mojom.AutoclickClientRequest = ax.mojom.AutoclickClientPendingReceiver;

