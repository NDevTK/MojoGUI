// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file/file_utilities.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};

blink.mojom.FileUtilitiesHost = {};
blink.mojom.FileUtilitiesHost.$interfaceName = 'blink.mojom.FileUtilitiesHost';
blink.mojom.FileUtilitiesHost_GetFileInfo_ParamsSpec = { $: {} };
blink.mojom.FileUtilitiesHost_GetFileInfo_ResponseParamsSpec = { $: {} };

// Interface: FileUtilitiesHost
mojo.internal.Struct(
    blink.mojom.FileUtilitiesHost_GetFileInfo_ParamsSpec, 'blink.mojom.FileUtilitiesHost_GetFileInfo_Params', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileUtilitiesHost_GetFileInfo_ResponseParamsSpec, 'blink.mojom.FileUtilitiesHost_GetFileInfo_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo_base.mojom.FileInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.FileUtilitiesHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FileUtilitiesHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileUtilitiesHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FileUtilitiesHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.FileUtilitiesHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FileUtilitiesHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getFileInfo(path) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FileUtilitiesHost_GetFileInfo_ParamsSpec,
      blink.mojom.FileUtilitiesHost_GetFileInfo_ResponseParamsSpec,
      [path],
      false);
  }

};

blink.mojom.FileUtilitiesHost.getRemote = function() {
  let remote = new blink.mojom.FileUtilitiesHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileUtilitiesHost',
    'context');
  return remote.$;
};

blink.mojom.FileUtilitiesHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.FileUtilitiesHost_GetFileInfo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getFileInfo(params.path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileUtilitiesHost_GetFileInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

blink.mojom.FileUtilitiesHostReceiver = blink.mojom.FileUtilitiesHostReceiver;

blink.mojom.FileUtilitiesHostPtr = blink.mojom.FileUtilitiesHostRemote;
blink.mojom.FileUtilitiesHostRequest = blink.mojom.FileUtilitiesHostPendingReceiver;

