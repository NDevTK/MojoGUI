// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_observer_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.FileSystemAccessObserverHost = {};
blink.mojom.FileSystemAccessObserverHost.$interfaceName = 'blink.mojom.FileSystemAccessObserverHost';
blink.mojom.FileSystemAccessObserverHost_Observe_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessObserverHost_Observe_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessObserverHost_Unobserve_ParamsSpec = { $: {} };

// Interface: FileSystemAccessObserverHost
mojo.internal.Struct(
    blink.mojom.FileSystemAccessObserverHost_Observe_ParamsSpec, 'blink.mojom.FileSystemAccessObserverHost_Observe_Params', [
      mojo.internal.StructField('token', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessTransferTokenRemote), null, false, 0, undefined),
      mojo.internal.StructField('is_recursive', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessObserverHost_Observe_ResponseParamsSpec, 'blink.mojom.FileSystemAccessObserverHost_Observe_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('observer_receiver', 8, 0, mojo.internal.InterfaceRequest(blink.mojom.FileSystemAccessObserverRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessObserverHost_Unobserve_ParamsSpec, 'blink.mojom.FileSystemAccessObserverHost_Unobserve_Params', [
      mojo.internal.StructField('token', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessTransferTokenRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.FileSystemAccessObserverHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FileSystemAccessObserverHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileSystemAccessObserverHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FileSystemAccessObserverHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.FileSystemAccessObserverHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FileSystemAccessObserverHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  observe(token, is_recursive) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FileSystemAccessObserverHost_Observe_ParamsSpec,
      blink.mojom.FileSystemAccessObserverHost_Observe_ResponseParamsSpec,
      [token, is_recursive],
      false);
  }

  unobserve(token) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FileSystemAccessObserverHost_Unobserve_ParamsSpec,
      null,
      [token],
      false);
  }

};

blink.mojom.FileSystemAccessObserverHost.getRemote = function() {
  let remote = new blink.mojom.FileSystemAccessObserverHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileSystemAccessObserverHost',
    'context');
  return remote.$;
};

blink.mojom.FileSystemAccessObserverHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.FileSystemAccessObserverHost_Observe_ParamsSpec.$.decode(message.payload);
          const result = this.impl.observe(params.token, params.is_recursive);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessObserverHost_Observe_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 1: {
          const params = blink.mojom.FileSystemAccessObserverHost_Unobserve_ParamsSpec.$.decode(message.payload);
          const result = this.impl.unobserve(params.token);
          break;
        }
      }
    });
  }
};

blink.mojom.FileSystemAccessObserverHostReceiver = blink.mojom.FileSystemAccessObserverHostReceiver;

blink.mojom.FileSystemAccessObserverHostPtr = blink.mojom.FileSystemAccessObserverHostRemote;
blink.mojom.FileSystemAccessObserverHostRequest = blink.mojom.FileSystemAccessObserverHostPendingReceiver;

