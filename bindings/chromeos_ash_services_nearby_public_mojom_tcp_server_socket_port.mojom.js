// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/tcp_server_socket_port.mojom
// Module: sharing.mojom

'use strict';

// Module namespace
var sharing = sharing || {};
sharing.mojom = sharing.mojom || {};


// Struct: TcpServerSocketPort
sharing.mojom.mojom.TcpServerSocketPortSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.TcpServerSocketPort',
      packedSize: 16,
      fields: [
        { name: 'port', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
