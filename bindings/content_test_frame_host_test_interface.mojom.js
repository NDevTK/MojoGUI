// Auto-generated MojoJS binding
// Source: chromium_src/content/test/frame_host_test_interface.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};
var url = url || {};

content.mojom.FrameHostTestInterface = {};
content.mojom.FrameHostTestInterface.$interfaceName = 'content.mojom.FrameHostTestInterface';
content.mojom.FrameHostTestInterface_Ping_ParamsSpec = { $: {} };

// Interface: FrameHostTestInterface
mojo.internal.Struct(
    content.mojom.FrameHostTestInterface_Ping_ParamsSpec, 'content.mojom.FrameHostTestInterface_Ping_Params', [
      mojo.internal.StructField('source_url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('source_event', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      content.mojom.FrameHostTestInterface_Ping_ParamsSpec,
      null,
      [source_url, source_event],
      false);
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

content.mojom.FrameHostTestInterfacePtr = content.mojom.FrameHostTestInterfaceRemote;
content.mojom.FrameHostTestInterfaceRequest = content.mojom.FrameHostTestInterfacePendingReceiver;

