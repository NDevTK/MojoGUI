// Auto-generated MojoJS binding
// Source: chromium_src/content/shell/common/main_frame_counter_test.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Interface: MainFrameCounterTest
content.mojom.MainFrameCounterTest = {};

content.mojom.MainFrameCounterTestPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.MainFrameCounterTestRemote = class {
  static get $interfaceName() {
    return 'content.mojom.MainFrameCounterTest';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.MainFrameCounterTestPendingReceiver,
      handle);
    this.$ = new content.mojom.MainFrameCounterTestRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.MainFrameCounterTestRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  hasMainFrame() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.MainFrameCounterTest_HasMainFrame_ParamsSpec,
      content.mojom.MainFrameCounterTest_HasMainFrame_ResponseParamsSpec,
      []);
  }

};

content.mojom.MainFrameCounterTest.getRemote = function() {
  let remote = new content.mojom.MainFrameCounterTestRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.MainFrameCounterTest',
    'context');
  return remote.$;
};

// ParamsSpec for HasMainFrame
content.mojom.MainFrameCounterTest_HasMainFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.MainFrameCounterTest.HasMainFrame_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

content.mojom.MainFrameCounterTest_HasMainFrame_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.MainFrameCounterTest.HasMainFrame_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'has_main_frame', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
content.mojom.MainFrameCounterTestPtr = content.mojom.MainFrameCounterTestRemote;
content.mojom.MainFrameCounterTestRequest = content.mojom.MainFrameCounterTestPendingReceiver;

