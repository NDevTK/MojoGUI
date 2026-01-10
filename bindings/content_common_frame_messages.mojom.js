// Auto-generated MojoJS binding
// Source: chromium_src/content/common/frame_messages.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};
var service_manager = service_manager || {};
var blink = blink || {};

content.mojom.DidCommitProvisionalLoadInterfaceParamsSpec = { $: {} };

// Struct: DidCommitProvisionalLoadInterfaceParams
mojo.internal.Struct(
    content.mojom.DidCommitProvisionalLoadInterfaceParamsSpec, 'content.mojom.DidCommitProvisionalLoadInterfaceParams', [
      mojo.internal.StructField('browser_interface_broker_receiver', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.BrowserInterfaceBrokerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);
