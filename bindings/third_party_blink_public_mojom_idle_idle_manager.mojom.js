// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/idle/idle_manager.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};

blink.mojom.IdleManagerErrorSpec = { $: mojo.internal.Enum() };
blink.mojom.IdleStateSpec = { $: {} };
blink.mojom.IdleMonitor = {};
blink.mojom.IdleMonitor.$interfaceName = 'blink.mojom.IdleMonitor';
blink.mojom.IdleMonitor_Update_ParamsSpec = { $: {} };
blink.mojom.IdleManager = {};
blink.mojom.IdleManager.$interfaceName = 'blink.mojom.IdleManager';
blink.mojom.IdleManager_AddMonitor_ParamsSpec = { $: {} };
blink.mojom.IdleManager_AddMonitor_ResponseParamsSpec = { $: {} };

blink.mojom.kUserInputThresholdMs = 60000;

// Enum: IdleManagerError
blink.mojom.IdleManagerError = {
  kSuccess: 0,
  kPermissionDisabled: 1,
};

// Struct: IdleState
mojo.internal.Struct(
    blink.mojom.IdleStateSpec, 'blink.mojom.IdleState', [
      mojo.internal.StructField('idle_time', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('screen_locked', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: IdleMonitor
mojo.internal.Struct(
    blink.mojom.IdleMonitor_Update_ParamsSpec, 'blink.mojom.IdleMonitor_Update_Params', [
      mojo.internal.StructField('state', 0, 0, blink.mojom.IdleStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_overridden_by_devtools', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.IdleMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.IdleMonitorRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.IdleMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.IdleMonitorPendingReceiver,
      handle);
    this.$ = new blink.mojom.IdleMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.IdleMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  update(state, is_overridden_by_devtools) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.IdleMonitor_Update_ParamsSpec,
      null,
      [state, is_overridden_by_devtools],
      false);
  }

};

blink.mojom.IdleMonitor.getRemote = function() {
  let remote = new blink.mojom.IdleMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.IdleMonitor',
    'context');
  return remote.$;
};

blink.mojom.IdleMonitorReceiver = class {
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
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.IdleMonitor_Update_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.update');
          const result = this.impl.update(params.state, params.is_overridden_by_devtools);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.IdleMonitorReceiver = blink.mojom.IdleMonitorReceiver;

blink.mojom.IdleMonitorPtr = blink.mojom.IdleMonitorRemote;
blink.mojom.IdleMonitorRequest = blink.mojom.IdleMonitorPendingReceiver;


// Interface: IdleManager
mojo.internal.Struct(
    blink.mojom.IdleManager_AddMonitor_ParamsSpec, 'blink.mojom.IdleManager_AddMonitor_Params', [
      mojo.internal.StructField('monitor', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.IdleMonitorSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.IdleManager_AddMonitor_ResponseParamsSpec, 'blink.mojom.IdleManager_AddMonitor_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, blink.mojom.IdleManagerErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('state', 8, 0, blink.mojom.IdleStateSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.IdleManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.IdleManagerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.IdleManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.IdleManagerPendingReceiver,
      handle);
    this.$ = new blink.mojom.IdleManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.IdleManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addMonitor(monitor) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.IdleManager_AddMonitor_ParamsSpec,
      blink.mojom.IdleManager_AddMonitor_ResponseParamsSpec,
      [monitor],
      false);
  }

};

blink.mojom.IdleManager.getRemote = function() {
  let remote = new blink.mojom.IdleManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.IdleManager',
    'context');
  return remote.$;
};

blink.mojom.IdleManagerReceiver = class {
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
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.IdleManager_AddMonitor_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.addMonitor');
          const result = this.impl.addMonitor(params.monitor);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.IdleManager_AddMonitor_ResponseParamsSpec);
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

blink.mojom.IdleManagerReceiver = blink.mojom.IdleManagerReceiver;

blink.mojom.IdleManagerPtr = blink.mojom.IdleManagerRemote;
blink.mojom.IdleManagerRequest = blink.mojom.IdleManagerPendingReceiver;

