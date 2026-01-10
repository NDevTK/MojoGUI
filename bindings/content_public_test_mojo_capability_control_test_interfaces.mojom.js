// Auto-generated MojoJS binding
// Source: chromium_src/content/public/test/mojo_capability_control_test_interfaces.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Interface: TestInterfaceForDefer
content.mojom.TestInterfaceForDefer = {};

content.mojom.TestInterfaceForDefer_Ping_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.TestInterfaceForDefer_Ping_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

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
      null,
      []);
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

// ParamsSpec for Ping
content.mojom.TestInterfaceForDefer_Ping_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.TestInterfaceForDefer.Ping_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
content.mojom.TestInterfaceForDeferPtr = content.mojom.TestInterfaceForDeferRemote;
content.mojom.TestInterfaceForDeferRequest = content.mojom.TestInterfaceForDeferPendingReceiver;


// Interface: TestInterfaceForGrant
content.mojom.TestInterfaceForGrant = {};

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

// Legacy compatibility
content.mojom.TestInterfaceForGrantPtr = content.mojom.TestInterfaceForGrantRemote;
content.mojom.TestInterfaceForGrantRequest = content.mojom.TestInterfaceForGrantPendingReceiver;


// Interface: TestInterfaceForCancel
content.mojom.TestInterfaceForCancel = {};

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

// Legacy compatibility
content.mojom.TestInterfaceForCancelPtr = content.mojom.TestInterfaceForCancelRemote;
content.mojom.TestInterfaceForCancelRequest = content.mojom.TestInterfaceForCancelPendingReceiver;


// Interface: TestInterfaceForUnexpected
content.mojom.TestInterfaceForUnexpected = {};

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

// Legacy compatibility
content.mojom.TestInterfaceForUnexpectedPtr = content.mojom.TestInterfaceForUnexpectedRemote;
content.mojom.TestInterfaceForUnexpectedRequest = content.mojom.TestInterfaceForUnexpectedPendingReceiver;


// Interface: MojoContextProvider
content.mojom.MojoContextProvider = {};

content.mojom.MojoContextProvider_GrantAll_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.MojoContextProvider_GrantAll_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

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
      []);
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

// ParamsSpec for GrantAll
content.mojom.MojoContextProvider_GrantAll_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.MojoContextProvider.GrantAll_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
content.mojom.MojoContextProviderPtr = content.mojom.MojoContextProviderRemote;
content.mojom.MojoContextProviderRequest = content.mojom.MojoContextProviderPendingReceiver;

