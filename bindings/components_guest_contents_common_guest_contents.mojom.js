// Auto-generated MojoJS binding
// Source: chromium_src/components/guest_contents/common/guest_contents.mojom
// Module: guest_contents.mojom

'use strict';

// Module namespace
var guest_contents = guest_contents || {};
guest_contents.mojom = guest_contents.mojom || {};


// Interface: GuestContentsHost
guest_contents.mojom.GuestContentsHost = {};

guest_contents.mojom.GuestContentsHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

guest_contents.mojom.GuestContentsHostRemote = class {
  static get $interfaceName() {
    return 'guest_contents.mojom.GuestContentsHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      guest_contents.mojom.GuestContentsHostPendingReceiver,
      handle);
    this.$ = new guest_contents.mojom.GuestContentsHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

guest_contents.mojom.GuestContentsHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  attach(frame_to_swap, guest_contents_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      guest_contents.mojom.GuestContentsHost_Attach_ParamsSpec,
      guest_contents.mojom.GuestContentsHost_Attach_ResponseParamsSpec,
      guest_contents.mojom.GuestContentsHost_Attach_ResponseParamsSpec,
      [frame_to_swap, guest_contents_id],
      undefined,
      undefined
    );
  }

};

guest_contents.mojom.GuestContentsHost.getRemote = function() {
  let remote = new guest_contents.mojom.GuestContentsHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'guest_contents.mojom.GuestContentsHost',
    'context');
  return remote.$;
};

// ParamsSpec for Attach
guest_contents.mojom.GuestContentsHost_Attach_ParamsSpec = {
  $: {
    structSpec: {
      name: 'guest_contents.mojom.GuestContentsHost.Attach_Params',
      packedSize: 24,
      fields: [
        { name: 'frame_to_swap', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'guest_contents_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

guest_contents.mojom.GuestContentsHost_Attach_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'guest_contents.mojom.GuestContentsHost.Attach_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
guest_contents.mojom.GuestContentsHostPtr = guest_contents.mojom.GuestContentsHostRemote;
guest_contents.mojom.GuestContentsHostRequest = guest_contents.mojom.GuestContentsHostPendingReceiver;

