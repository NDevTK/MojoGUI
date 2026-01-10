// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/transferable_directory.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var mojo_base = mojo_base || {};

network.mojom.TransferableDirectorySpec = { $: {} };

// Union: TransferableDirectory
mojo.internal.Union(
    network.mojom.TransferableDirectorySpec, 'network.mojom.TransferableDirectory', {
      'handle_for_ipc': {
        'ordinal': 0,
        'type': mojo.internal.Pointer,
        'nullable': false,
      },
      'path': {
        'ordinal': 1,
        'type': mojo_base.mojom.FilePathSpec.$,
        'nullable': false,
      },
    });
