// Auto-generated MojoJS binding
// Source: chromium_src/content/test/frame_host_test_interface.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Interface: FrameHostTestInterface
content.mojom.FrameHostTestInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.FrameHostTestInterfaceRemote = class {
  static get $interfaceName() {
    return 'content.mojom.FrameHostTestInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.FrameHostTestInterfacePendingReceiver,
      handle);
    this.$ = new content.mojom.FrameHostTestInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.FrameHostTestInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  ping(source_url, source_event) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.FrameHostTestInterface_Ping_ParamsSpec.$,
      null,
      [source_url, source_event]);
  }

};

content.mojom.FrameHostTestInterface.getRemote = function() {
  let remote = new content.mojom.FrameHostTestInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.FrameHostTestInterface',
    'context');
  return remote.$;
};

// ParamsSpec for Ping
content.mojom.FrameHostTestInterface_Ping_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FrameHostTestInterface.Ping_Params',
      packedSize: 24,
      fields: [
        { name: 'source_url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'source_event', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
content.mojom.FrameHostTestInterfacePtr = content.mojom.FrameHostTestInterfaceRemote;
content.mojom.FrameHostTestInterfaceRequest = content.mojom.FrameHostTestInterfacePendingReceiver;

