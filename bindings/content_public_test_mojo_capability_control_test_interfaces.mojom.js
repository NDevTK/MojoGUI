// Auto-generated MojoJS binding
// Source: chromium_src/content/public/test/mojo_capability_control_test_interfaces.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};

content.mojom.TestInterfaceForDefer = {};
content.mojom.TestInterfaceForDefer.$interfaceName = 'content.mojom.TestInterfaceForDefer';
content.mojom.TestInterfaceForDefer_Ping_ParamsSpec = { $: {} };
content.mojom.TestInterfaceForDefer_Ping_ResponseParamsSpec = { $: {} };
content.mojom.TestInterfaceForGrant = {};
content.mojom.TestInterfaceForGrant.$interfaceName = 'content.mojom.TestInterfaceForGrant';
content.mojom.TestInterfaceForCancel = {};
content.mojom.TestInterfaceForCancel.$interfaceName = 'content.mojom.TestInterfaceForCancel';
content.mojom.TestInterfaceForUnexpected = {};
content.mojom.TestInterfaceForUnexpected.$interfaceName = 'content.mojom.TestInterfaceForUnexpected';
content.mojom.MojoContextProvider = {};
content.mojom.MojoContextProvider.$interfaceName = 'content.mojom.MojoContextProvider';
content.mojom.MojoContextProvider_GrantAll_ParamsSpec = { $: {} };

// Interface: TestInterfaceForDefer
mojo.internal.Struct(
    content.mojom.TestInterfaceForDefer_Ping_ParamsSpec, 'content.mojom.TestInterfaceForDefer_Ping_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.TestInterfaceForDefer_Ping_ResponseParamsSpec, 'content.mojom.TestInterfaceForDefer_Ping_ResponseParams', [
    ],
    [[0, 8]]);

content.mojom.TestInterfaceForDeferPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.TestInterfaceForDeferRemote = class {
  static get $interfaceName() {
    return 'content.mojom.TestInterfaceForDefer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.TestInterfaceForDeferPendingReceiver,
      handle);
    this.$ = new content.mojom.TestInterfaceForDeferRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.TestInterfaceForDeferRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  ping() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.TestInterfaceForDefer_Ping_ParamsSpec,
      content.mojom.TestInterfaceForDefer_Ping_ResponseParamsSpec,
      [],
      false);
  }

};

content.mojom.TestInterfaceForDefer.getRemote = function() {
  let remote = new content.mojom.TestInterfaceForDeferRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.TestInterfaceForDefer',
    'context');
  return remote.$;
};

content.mojom.TestInterfaceForDeferReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = content.mojom.TestInterfaceForDefer_Ping_ParamsSpec.$.decode(message.payload);
          const result = this.impl.ping();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.TestInterfaceForDefer_Ping_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

content.mojom.TestInterfaceForDeferReceiver = content.mojom.TestInterfaceForDeferReceiver;

content.mojom.TestInterfaceForDeferPtr = content.mojom.TestInterfaceForDeferRemote;
content.mojom.TestInterfaceForDeferRequest = content.mojom.TestInterfaceForDeferPendingReceiver;


// Interface: TestInterfaceForGrant
content.mojom.TestInterfaceForGrantPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.TestInterfaceForGrantRemote = class {
  static get $interfaceName() {
    return 'content.mojom.TestInterfaceForGrant';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.TestInterfaceForGrantPendingReceiver,
      handle);
    this.$ = new content.mojom.TestInterfaceForGrantRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.TestInterfaceForGrantRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

content.mojom.TestInterfaceForGrant.getRemote = function() {
  let remote = new content.mojom.TestInterfaceForGrantRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.TestInterfaceForGrant',
    'context');
  return remote.$;
};

content.mojom.TestInterfaceForGrantReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
      }
    });
  }
};

content.mojom.TestInterfaceForGrantReceiver = content.mojom.TestInterfaceForGrantReceiver;

content.mojom.TestInterfaceForGrantPtr = content.mojom.TestInterfaceForGrantRemote;
content.mojom.TestInterfaceForGrantRequest = content.mojom.TestInterfaceForGrantPendingReceiver;


// Interface: TestInterfaceForCancel
content.mojom.TestInterfaceForCancelPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.TestInterfaceForCancelRemote = class {
  static get $interfaceName() {
    return 'content.mojom.TestInterfaceForCancel';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.TestInterfaceForCancelPendingReceiver,
      handle);
    this.$ = new content.mojom.TestInterfaceForCancelRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.TestInterfaceForCancelRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

content.mojom.TestInterfaceForCancel.getRemote = function() {
  let remote = new content.mojom.TestInterfaceForCancelRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.TestInterfaceForCancel',
    'context');
  return remote.$;
};

content.mojom.TestInterfaceForCancelReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
      }
    });
  }
};

content.mojom.TestInterfaceForCancelReceiver = content.mojom.TestInterfaceForCancelReceiver;

content.mojom.TestInterfaceForCancelPtr = content.mojom.TestInterfaceForCancelRemote;
content.mojom.TestInterfaceForCancelRequest = content.mojom.TestInterfaceForCancelPendingReceiver;


// Interface: TestInterfaceForUnexpected
content.mojom.TestInterfaceForUnexpectedPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.TestInterfaceForUnexpectedRemote = class {
  static get $interfaceName() {
    return 'content.mojom.TestInterfaceForUnexpected';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.TestInterfaceForUnexpectedPendingReceiver,
      handle);
    this.$ = new content.mojom.TestInterfaceForUnexpectedRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.TestInterfaceForUnexpectedRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

content.mojom.TestInterfaceForUnexpected.getRemote = function() {
  let remote = new content.mojom.TestInterfaceForUnexpectedRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.TestInterfaceForUnexpected',
    'context');
  return remote.$;
};

content.mojom.TestInterfaceForUnexpectedReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
      }
    });
  }
};

content.mojom.TestInterfaceForUnexpectedReceiver = content.mojom.TestInterfaceForUnexpectedReceiver;

content.mojom.TestInterfaceForUnexpectedPtr = content.mojom.TestInterfaceForUnexpectedRemote;
content.mojom.TestInterfaceForUnexpectedRequest = content.mojom.TestInterfaceForUnexpectedPendingReceiver;


// Interface: MojoContextProvider
mojo.internal.Struct(
    content.mojom.MojoContextProvider_GrantAll_ParamsSpec, 'content.mojom.MojoContextProvider_GrantAll_Params', [
    ],
    [[0, 8]]);

content.mojom.MojoContextProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.MojoContextProviderRemote = class {
  static get $interfaceName() {
    return 'content.mojom.MojoContextProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.MojoContextProviderPendingReceiver,
      handle);
    this.$ = new content.mojom.MojoContextProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.MojoContextProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  grantAll() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.MojoContextProvider_GrantAll_ParamsSpec,
      null,
      [],
      false);
  }

};

content.mojom.MojoContextProvider.getRemote = function() {
  let remote = new content.mojom.MojoContextProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.MojoContextProvider',
    'context');
  return remote.$;
};

content.mojom.MojoContextProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = content.mojom.MojoContextProvider_GrantAll_ParamsSpec.$.decode(message.payload);
          const result = this.impl.grantAll();
          break;
        }
      }
    });
  }
};

content.mojom.MojoContextProviderReceiver = content.mojom.MojoContextProviderReceiver;

content.mojom.MojoContextProviderPtr = content.mojom.MojoContextProviderRemote;
content.mojom.MojoContextProviderRequest = content.mojom.MojoContextProviderPendingReceiver;

