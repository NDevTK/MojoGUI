// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_access_handle_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.FileSystemAccessAccessHandleHost = {};
blink.mojom.FileSystemAccessAccessHandleHost.$interfaceName = 'blink.mojom.FileSystemAccessAccessHandleHost';
blink.mojom.FileSystemAccessAccessHandleHost_Close_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessAccessHandleHost_Close_ResponseParamsSpec = { $: {} };

// Interface: FileSystemAccessAccessHandleHost
mojo.internal.Struct(
    blink.mojom.FileSystemAccessAccessHandleHost_Close_ParamsSpec, 'blink.mojom.FileSystemAccessAccessHandleHost_Close_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessAccessHandleHost_Close_ResponseParamsSpec, 'blink.mojom.FileSystemAccessAccessHandleHost_Close_ResponseParams', [
    ],
    [[0, 8]]);

blink.mojom.FileSystemAccessAccessHandleHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FileSystemAccessAccessHandleHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileSystemAccessAccessHandleHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FileSystemAccessAccessHandleHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.FileSystemAccessAccessHandleHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FileSystemAccessAccessHandleHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  close() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FileSystemAccessAccessHandleHost_Close_ParamsSpec,
      blink.mojom.FileSystemAccessAccessHandleHost_Close_ResponseParamsSpec,
      [],
      false);
  }

};

blink.mojom.FileSystemAccessAccessHandleHost.getRemote = function() {
  let remote = new blink.mojom.FileSystemAccessAccessHandleHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileSystemAccessAccessHandleHost',
    'context');
  return remote.$;
};

blink.mojom.FileSystemAccessAccessHandleHostReceiver = class {
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
          const params = blink.mojom.FileSystemAccessAccessHandleHost_Close_ParamsSpec.$.decode(message.payload);
          const result = this.impl.close();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, blink.mojom.FileSystemAccessAccessHandleHost_Close_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

blink.mojom.FileSystemAccessAccessHandleHostReceiver = blink.mojom.FileSystemAccessAccessHandleHostReceiver;

blink.mojom.FileSystemAccessAccessHandleHostPtr = blink.mojom.FileSystemAccessAccessHandleHostRemote;
blink.mojom.FileSystemAccessAccessHandleHostRequest = blink.mojom.FileSystemAccessAccessHandleHostPendingReceiver;

