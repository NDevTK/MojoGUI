// Auto-generated MojoJS binding
// Source: chromium_src/content/test/frame_host_test_interface.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};
var url = url || {};


// Interface: FrameHostTestInterface
content.mojom.mojom.FrameHostTestInterface = {};

content.mojom.mojom.FrameHostTestInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.mojom.FrameHostTestInterfaceRemote = class {
  static get $interfaceName() {
    return 'content.mojom.FrameHostTestInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.mojom.FrameHostTestInterfacePendingReceiver,
      handle);
    this.$ = new content.mojom.mojom.FrameHostTestInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.mojom.FrameHostTestInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  ping(source_url, source_event) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.mojom.FrameHostTestInterface_Ping_ParamsSpec,
      null,
      [source_url, source_event]);
  }

};

content.mojom.mojom.FrameHostTestInterface.getRemote = function() {
  let remote = new content.mojom.mojom.FrameHostTestInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.FrameHostTestInterface',
    'context');
  return remote.$;
};

// ParamsSpec for Ping
content.mojom.mojom.FrameHostTestInterface_Ping_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FrameHostTestInterface.Ping_Params',
      packedSize: 24,
      fields: [
        { name: 'source_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'source_event', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
content.mojom.mojom.FrameHostTestInterfacePtr = content.mojom.mojom.FrameHostTestInterfaceRemote;
content.mojom.mojom.FrameHostTestInterfaceRequest = content.mojom.mojom.FrameHostTestInterfacePendingReceiver;

