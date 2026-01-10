// Auto-generated MojoJS binding
// Source: chromium_src/content/shell/common/main_frame_counter_test.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};

content.mojom.MainFrameCounterTest = {};
content.mojom.MainFrameCounterTest.$interfaceName = 'content.mojom.MainFrameCounterTest';
content.mojom.MainFrameCounterTest_HasMainFrame_ParamsSpec = { $: {} };
content.mojom.MainFrameCounterTest_HasMainFrame_ResponseParamsSpec = { $: {} };

// Interface: MainFrameCounterTest
mojo.internal.Struct(
    content.mojom.MainFrameCounterTest_HasMainFrame_ParamsSpec, 'content.mojom.MainFrameCounterTest_HasMainFrame_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.MainFrameCounterTest_HasMainFrame_ResponseParamsSpec, 'content.mojom.MainFrameCounterTest_HasMainFrame_ResponseParams', [
      mojo.internal.StructField('has_main_frame', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
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

content.mojom.MainFrameCounterTestReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = content.mojom.MainFrameCounterTest_HasMainFrame_ParamsSpec.$.decode(message.payload);
          const result = this.impl.hasMainFrame();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.MainFrameCounterTest_HasMainFrame_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

content.mojom.MainFrameCounterTestReceiver = content.mojom.MainFrameCounterTestReceiver;

content.mojom.MainFrameCounterTestPtr = content.mojom.MainFrameCounterTestRemote;
content.mojom.MainFrameCounterTestRequest = content.mojom.MainFrameCounterTestPendingReceiver;

