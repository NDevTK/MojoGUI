// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/lock_screen/lock_screen.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.LockScreenServiceStatusSpec = { $: mojo.internal.Enum() };
blink.mojom.LockScreenService = {};
blink.mojom.LockScreenService.$interfaceName = 'blink.mojom.LockScreenService';
blink.mojom.LockScreenService_GetKeys_ParamsSpec = { $: {} };
blink.mojom.LockScreenService_GetKeys_ResponseParamsSpec = { $: {} };
blink.mojom.LockScreenService_SetData_ParamsSpec = { $: {} };
blink.mojom.LockScreenService_SetData_ResponseParamsSpec = { $: {} };

// Enum: LockScreenServiceStatus
blink.mojom.LockScreenServiceStatus = {
  kSuccess: 0,
  kNotAllowedFromContext: 1,
  kWriteError: 2,
};

// Interface: LockScreenService
mojo.internal.Struct(
    blink.mojom.LockScreenService_GetKeys_ParamsSpec, 'blink.mojom.LockScreenService_GetKeys_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LockScreenService_GetKeys_ResponseParamsSpec, 'blink.mojom.LockScreenService_GetKeys_ResponseParams', [
      mojo.internal.StructField('keys', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LockScreenService_SetData_ParamsSpec, 'blink.mojom.LockScreenService_SetData_Params', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LockScreenService_SetData_ResponseParamsSpec, 'blink.mojom.LockScreenService_SetData_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.LockScreenServiceStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.LockScreenServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.LockScreenServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.LockScreenService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.LockScreenServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.LockScreenServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.LockScreenServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getKeys() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.LockScreenService_GetKeys_ParamsSpec,
      blink.mojom.LockScreenService_GetKeys_ResponseParamsSpec,
      [],
      false);
  }

  setData(key, data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.LockScreenService_SetData_ParamsSpec,
      blink.mojom.LockScreenService_SetData_ResponseParamsSpec,
      [key, data],
      false);
  }

};

blink.mojom.LockScreenService.getRemote = function() {
  let remote = new blink.mojom.LockScreenServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.LockScreenService',
    'context');
  return remote.$;
};

blink.mojom.LockScreenServiceReceiver = class {
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
          const params = blink.mojom.LockScreenService_GetKeys_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getKeys();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.LockScreenService_GetKeys_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 1: {
          const params = blink.mojom.LockScreenService_SetData_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setData(params.key, params.data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.LockScreenService_SetData_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

blink.mojom.LockScreenServiceReceiver = blink.mojom.LockScreenServiceReceiver;

blink.mojom.LockScreenServicePtr = blink.mojom.LockScreenServiceRemote;
blink.mojom.LockScreenServiceRequest = blink.mojom.LockScreenServicePendingReceiver;

