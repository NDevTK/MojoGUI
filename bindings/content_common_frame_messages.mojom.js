// Auto-generated MojoJS binding
// Source: chromium_src/content/common/frame_messages.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Struct: DidCommitProvisionalLoadInterfaceParams
content.mojom.DidCommitProvisionalLoadInterfaceParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.DidCommitProvisionalLoadInterfaceParams',
      packedSize: 16,
      fields: [
        { name: 'browser_interface_broker_receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
