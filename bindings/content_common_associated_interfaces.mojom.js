// Auto-generated MojoJS binding
// Source: chromium_src/content/common/associated_interfaces.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Interface: RouteProvider
content.mojom.RouteProvider = {};

content.mojom.RouteProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.RouteProviderRemote = class {
  static get $interfaceName() {
    return 'content.mojom.RouteProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.RouteProviderPendingReceiver,
      handle);
    this.$ = new content.mojom.RouteProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.RouteProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getRoute(frame_token, receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.RouteProvider_GetRoute_ParamsSpec,
      null,
      null,
      [frame_token, receiver],
      undefined,
      undefined
    );
  }

};

content.mojom.RouteProvider.getRemote = function() {
  let remote = new content.mojom.RouteProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.RouteProvider',
    'context');
  return remote.$;
};

// ParamsSpec for GetRoute
content.mojom.RouteProvider_GetRoute_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.RouteProvider.GetRoute_Params',
      packedSize: 24,
      fields: [
        { name: 'frame_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
content.mojom.RouteProviderPtr = content.mojom.RouteProviderRemote;
content.mojom.RouteProviderRequest = content.mojom.RouteProviderPendingReceiver;

