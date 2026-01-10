// Auto-generated MojoJS binding
// Source: chromium_src/content/common/associated_interfaces.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};
var blink = blink || {};
var blink = blink || {};


// Interface: RouteProvider
content.mojom.mojom.RouteProvider = {};

content.mojom.mojom.RouteProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.mojom.RouteProviderRemote = class {
  static get $interfaceName() {
    return 'content.mojom.RouteProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.mojom.RouteProviderPendingReceiver,
      handle);
    this.$ = new content.mojom.mojom.RouteProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.mojom.RouteProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getRoute(frame_token, receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.mojom.RouteProvider_GetRoute_ParamsSpec,
      null,
      [frame_token, receiver]);
  }

};

content.mojom.mojom.RouteProvider.getRemote = function() {
  let remote = new content.mojom.mojom.RouteProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.RouteProvider',
    'context');
  return remote.$;
};

// ParamsSpec for GetRoute
content.mojom.mojom.RouteProvider_GetRoute_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.RouteProvider.GetRoute_Params',
      packedSize: 24,
      fields: [
        { name: 'frame_token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.LocalFrameTokenSpec, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest(blink.mojom.AssociatedInterfaceProviderRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
content.mojom.mojom.RouteProviderPtr = content.mojom.mojom.RouteProviderRemote;
content.mojom.mojom.RouteProviderRequest = content.mojom.mojom.RouteProviderPendingReceiver;

