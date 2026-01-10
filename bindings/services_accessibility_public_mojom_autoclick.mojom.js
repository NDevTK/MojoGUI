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
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
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
      switch (header.ordinal) {
        case 0: {
          const params = ax.mojom.Autoclick_RequestScrollableBoundsForPoint_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestScrollableBoundsForPoint(params.point);
          break;
        }
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
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
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
      switch (header.ordinal) {
        case 0: {
          const params = ax.mojom.AutoclickClient_HandleScrollableBoundsForPointFound_ParamsSpec.$.decode(message.payload);
          const result = this.impl.handleScrollableBoundsForPointFound(params.bounds);
          break;
        }
        case 1: {
          const params = ax.mojom.AutoclickClient_BindAutoclick_ParamsSpec.$.decode(message.payload);
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
    }});
  }
};

ax.mojom.AutoclickClientReceiver = ax.mojom.AutoclickClientReceiver;

ax.mojom.AutoclickClientPtr = ax.mojom.AutoclickClientRemote;
ax.mojom.AutoclickClientRequest = ax.mojom.AutoclickClientPendingReceiver;

