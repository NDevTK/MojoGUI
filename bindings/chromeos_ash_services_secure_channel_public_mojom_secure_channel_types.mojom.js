// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/secure_channel/public/mojom/secure_channel_types.mojom
// Module: ash.secure_channel.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.secure_channel = ash.secure_channel || {};
ash.secure_channel.mojom = ash.secure_channel.mojom || {};


// Enum: FileTransferStatus
ash.secure_channel.mojom.FileTransferStatus = {
};

// Struct: PayloadFiles
ash.secure_channel.mojom.PayloadFiles = class {
  constructor(values = {}) {
    this.output_file = values.output_file !== undefined ? values.output_file : null;
  }
};

// Struct: FileTransferUpdate
ash.secure_channel.mojom.FileTransferUpdate = class {
  constructor(values = {}) {
    this.payload_id = values.payload_id !== undefined ? values.payload_id : 0;
    this.bytes_transferred = values.bytes_transferred !== undefined ? values.bytes_transferred : 0;
  }
};

// Interface: FilePayloadListener
ash.secure_channel.mojom.FilePayloadListenerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.secure_channel.mojom.FilePayloadListener';
  }

  onFileTransferUpdate(update) {
    // Method: OnFileTransferUpdate
    // Call: OnFileTransferUpdate(update)
  }

};

ash.secure_channel.mojom.FilePayloadListenerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
