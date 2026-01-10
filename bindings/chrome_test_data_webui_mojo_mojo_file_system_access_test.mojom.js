// Auto-generated MojoJS binding
// Source: chromium_src/chrome/test/data/webui/mojo/mojo_file_system_access_test.mojom
// Module: test.mojom

'use strict';

// Module namespace
var test = test || {};
test.mojom = test.mojom || {};

test.mojom.MojoFileSystemAccessTest = {};
test.mojom.MojoFileSystemAccessTest.$interfaceName = 'test.mojom.MojoFileSystemAccessTest';
test.mojom.MojoFileSystemAccessTest_ResolveTransferToken_ParamsSpec = { $: {} };

// Interface: MojoFileSystemAccessTest
mojo.internal.Struct(
    test.mojom.MojoFileSystemAccessTest_ResolveTransferToken_ParamsSpec, 'test.mojom.MojoFileSystemAccessTest_ResolveTransferToken_Params', [
      mojo.internal.StructField('h', 0, 0, mojo.internal.Handle, null, false, 0, undefined),
    ],
    [[0, 16]]);

test.mojom.MojoFileSystemAccessTestPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

test.mojom.MojoFileSystemAccessTestRemote = class {
  static get $interfaceName() {
    return 'test.mojom.MojoFileSystemAccessTest';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      test.mojom.MojoFileSystemAccessTestPendingReceiver,
      handle);
    this.$ = new test.mojom.MojoFileSystemAccessTestRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

test.mojom.MojoFileSystemAccessTestRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  resolveTransferToken(h) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      test.mojom.MojoFileSystemAccessTest_ResolveTransferToken_ParamsSpec,
      null,
      [h]);
  }

};

test.mojom.MojoFileSystemAccessTest.getRemote = function() {
  let remote = new test.mojom.MojoFileSystemAccessTestRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'test.mojom.MojoFileSystemAccessTest',
    'context');
  return remote.$;
};

test.mojom.MojoFileSystemAccessTestPtr = test.mojom.MojoFileSystemAccessTestRemote;
test.mojom.MojoFileSystemAccessTestRequest = test.mojom.MojoFileSystemAccessTestPendingReceiver;

