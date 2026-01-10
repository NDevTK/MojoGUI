// Auto-generated MojoJS binding
// Source: chromium_src/content/public/test/mojo_capability_control_test_interfaces.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Interface: TestInterfaceForDefer
content.mojom.mojom.TestInterfaceForDefer = {};

content.mojom.mojom.TestInterfaceForDeferPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.mojom.TestInterfaceForDeferRemote = class {
  static get $interfaceName() {
    return 'content.mojom.TestInterfaceForDefer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.mojom.TestInterfaceForDeferPendingReceiver,
      handle);
    this.$ = new content.mojom.mojom.TestInterfaceForDeferRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.mojom.TestInterfaceForDeferRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  ping() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.mojom.TestInterfaceForDefer_Ping_ParamsSpec,
      null,
      []);
  }

};

content.mojom.mojom.TestInterfaceForDefer.getRemote = function() {
  let remote = new content.mojom.mojom.TestInterfaceForDeferRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.TestInterfaceForDefer',
    'context');
  return remote.$;
};

// ParamsSpec for Ping
content.mojom.mojom.TestInterfaceForDefer_Ping_ParamsSpec = {
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
content.mojom.mojom.TestInterfaceForDeferPtr = content.mojom.mojom.TestInterfaceForDeferRemote;
content.mojom.mojom.TestInterfaceForDeferRequest = content.mojom.mojom.TestInterfaceForDeferPendingReceiver;


// Interface: TestInterfaceForGrant
content.mojom.mojom.TestInterfaceForGrant = {};

content.mojom.mojom.TestInterfaceForGrantPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.mojom.TestInterfaceForGrantRemote = class {
  static get $interfaceName() {
    return 'content.mojom.TestInterfaceForGrant';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.mojom.TestInterfaceForGrantPendingReceiver,
      handle);
    this.$ = new content.mojom.mojom.TestInterfaceForGrantRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.mojom.TestInterfaceForGrantRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

content.mojom.mojom.TestInterfaceForGrant.getRemote = function() {
  let remote = new content.mojom.mojom.TestInterfaceForGrantRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.TestInterfaceForGrant',
    'context');
  return remote.$;
};

// Legacy compatibility
content.mojom.mojom.TestInterfaceForGrantPtr = content.mojom.mojom.TestInterfaceForGrantRemote;
content.mojom.mojom.TestInterfaceForGrantRequest = content.mojom.mojom.TestInterfaceForGrantPendingReceiver;


// Interface: TestInterfaceForCancel
content.mojom.mojom.TestInterfaceForCancel = {};

content.mojom.mojom.TestInterfaceForCancelPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.mojom.TestInterfaceForCancelRemote = class {
  static get $interfaceName() {
    return 'content.mojom.TestInterfaceForCancel';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.mojom.TestInterfaceForCancelPendingReceiver,
      handle);
    this.$ = new content.mojom.mojom.TestInterfaceForCancelRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.mojom.TestInterfaceForCancelRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

content.mojom.mojom.TestInterfaceForCancel.getRemote = function() {
  let remote = new content.mojom.mojom.TestInterfaceForCancelRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.TestInterfaceForCancel',
    'context');
  return remote.$;
};

// Legacy compatibility
content.mojom.mojom.TestInterfaceForCancelPtr = content.mojom.mojom.TestInterfaceForCancelRemote;
content.mojom.mojom.TestInterfaceForCancelRequest = content.mojom.mojom.TestInterfaceForCancelPendingReceiver;


// Interface: TestInterfaceForUnexpected
content.mojom.mojom.TestInterfaceForUnexpected = {};

content.mojom.mojom.TestInterfaceForUnexpectedPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.mojom.TestInterfaceForUnexpectedRemote = class {
  static get $interfaceName() {
    return 'content.mojom.TestInterfaceForUnexpected';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.mojom.TestInterfaceForUnexpectedPendingReceiver,
      handle);
    this.$ = new content.mojom.mojom.TestInterfaceForUnexpectedRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.mojom.TestInterfaceForUnexpectedRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

content.mojom.mojom.TestInterfaceForUnexpected.getRemote = function() {
  let remote = new content.mojom.mojom.TestInterfaceForUnexpectedRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.TestInterfaceForUnexpected',
    'context');
  return remote.$;
};

// Legacy compatibility
content.mojom.mojom.TestInterfaceForUnexpectedPtr = content.mojom.mojom.TestInterfaceForUnexpectedRemote;
content.mojom.mojom.TestInterfaceForUnexpectedRequest = content.mojom.mojom.TestInterfaceForUnexpectedPendingReceiver;


// Interface: MojoContextProvider
content.mojom.mojom.MojoContextProvider = {};

content.mojom.mojom.MojoContextProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.mojom.MojoContextProviderRemote = class {
  static get $interfaceName() {
    return 'content.mojom.MojoContextProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.mojom.MojoContextProviderPendingReceiver,
      handle);
    this.$ = new content.mojom.mojom.MojoContextProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.mojom.MojoContextProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  grantAll() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.mojom.MojoContextProvider_GrantAll_ParamsSpec,
      null,
      []);
  }

};

content.mojom.mojom.MojoContextProvider.getRemote = function() {
  let remote = new content.mojom.mojom.MojoContextProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.MojoContextProvider',
    'context');
  return remote.$;
};

// ParamsSpec for GrantAll
content.mojom.mojom.MojoContextProvider_GrantAll_ParamsSpec = {
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
content.mojom.mojom.MojoContextProviderPtr = content.mojom.mojom.MojoContextProviderRemote;
content.mojom.mojom.MojoContextProviderRequest = content.mojom.mojom.MojoContextProviderPendingReceiver;

