// Auto-generated MojoJS binding
// Source: chromium_src/chrome/test/data/webui/mojo/mojo_file_system_access_test.mojom
// Module: test.mojom

'use strict';

// Module namespace
var test = test || {};
test.mojom = test.mojom || {};


// Interface: MojoFileSystemAccessTest
test.mojom.MojoFileSystemAccessTest = {};

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

// ParamsSpec for ResolveTransferToken
test.mojom.MojoFileSystemAccessTest_ResolveTransferToken_ParamsSpec = {
  $: {
    structSpec: {
      name: 'test.mojom.MojoFileSystemAccessTest.ResolveTransferToken_Params',
      packedSize: 16,
      fields: [
        { name: 'h', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
test.mojom.MojoFileSystemAccessTestPtr = test.mojom.MojoFileSystemAccessTestRemote;
test.mojom.MojoFileSystemAccessTestRequest = test.mojom.MojoFileSystemAccessTestPendingReceiver;

