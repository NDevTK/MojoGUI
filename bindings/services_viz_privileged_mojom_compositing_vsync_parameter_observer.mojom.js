// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/vsync_parameter_observer.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var mojo_base = mojo_base || {};

viz.mojom.VSyncParameterObserver = {};
viz.mojom.VSyncParameterObserver.$interfaceName = 'viz.mojom.VSyncParameterObserver';
viz.mojom.VSyncParameterObserver_OnUpdateVSyncParameters_ParamsSpec = { $: {} };

// Interface: VSyncParameterObserver
mojo.internal.Struct(
    viz.mojom.VSyncParameterObserver_OnUpdateVSyncParameters_ParamsSpec, 'viz.mojom.VSyncParameterObserver_OnUpdateVSyncParameters_Params', [
      mojo.internal.StructField('timebase', 0, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('interval', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

viz.mojom.VSyncParameterObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.VSyncParameterObserverRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.VSyncParameterObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.VSyncParameterObserverPendingReceiver,
      handle);
    this.$ = new viz.mojom.VSyncParameterObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.VSyncParameterObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onUpdateVSyncParameters(timebase, interval) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.VSyncParameterObserver_OnUpdateVSyncParameters_ParamsSpec,
      null,
      [timebase, interval],
      false);
  }

};

viz.mojom.VSyncParameterObserver.getRemote = function() {
  let remote = new viz.mojom.VSyncParameterObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.VSyncParameterObserver',
    'context');
  return remote.$;
};

viz.mojom.VSyncParameterObserverReceiver = class {
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
          const params = viz.mojom.VSyncParameterObserver_OnUpdateVSyncParameters_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onUpdateVSyncParameters(params.timebase, params.interval);
          break;
        }
      }
    }});
  }
};

viz.mojom.VSyncParameterObserverReceiver = viz.mojom.VSyncParameterObserverReceiver;

viz.mojom.VSyncParameterObserverPtr = viz.mojom.VSyncParameterObserverRemote;
viz.mojom.VSyncParameterObserverRequest = viz.mojom.VSyncParameterObserverPendingReceiver;

