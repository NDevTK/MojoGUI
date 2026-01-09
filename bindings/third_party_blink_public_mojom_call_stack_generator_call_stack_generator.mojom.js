// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/call_stack_generator/call_stack_generator.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: CallStackGenerator
blink.mojom.CallStackGenerator = {};

blink.mojom.CallStackGeneratorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.CallStackGeneratorRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.CallStackGenerator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.CallStackGeneratorPendingReceiver,
      handle);
    this.$ = new blink.mojom.CallStackGeneratorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.CallStackGeneratorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  collectJavaScriptCallStack() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.CallStackGenerator_CollectJavaScriptCallStack_ParamsSpec,
      blink.mojom.CallStackGenerator_CollectJavaScriptCallStack_ResponseParamsSpec,
      []);
  }

};

blink.mojom.CallStackGenerator.getRemote = function() {
  let remote = new blink.mojom.CallStackGeneratorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.CallStackGenerator',
    'context');
  return remote.$;
};

// ParamsSpec for CollectJavaScriptCallStack
blink.mojom.CallStackGenerator_CollectJavaScriptCallStack_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CallStackGenerator.CollectJavaScriptCallStack_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.CallStackGenerator_CollectJavaScriptCallStack_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CallStackGenerator.CollectJavaScriptCallStack_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'javascript_call_stack', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'frame_token', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.LocalFrameTokenSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.CallStackGeneratorPtr = blink.mojom.CallStackGeneratorRemote;
blink.mojom.CallStackGeneratorRequest = blink.mojom.CallStackGeneratorPendingReceiver;

