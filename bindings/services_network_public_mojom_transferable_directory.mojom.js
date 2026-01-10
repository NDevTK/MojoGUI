// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/transferable_directory.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Union: TransferableDirectory
network.mojom.mojom.TransferableDirectorySpec = { $: mojo.internal.Union(
    'network.mojom.TransferableDirectory', {
      'handle_for_ipc': {
        'ordinal': 0,
        'type': mojo.internal.Pointer,
      }},
      'path': {
        'ordinal': 1,
        'type': mojo_base.mojom.FilePathSpec,
      }},
    })
};
