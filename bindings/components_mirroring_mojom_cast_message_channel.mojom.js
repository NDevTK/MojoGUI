// Auto-generated MojoJS binding
// Source: chromium_src/components/mirroring/mojom/cast_message_channel.mojom
// Module: mirroring.mojom

'use strict';

// Module namespace
var mirroring = mirroring || {};
mirroring.mojom = mirroring.mojom || {};


// Struct: CastMessage
mirroring.mojom.CastMessage = class {
  constructor(values = {}) {
    this.message_namespace = values.message_namespace !== undefined ? values.message_namespace : "";
    this.json_format_data = values.json_format_data !== undefined ? values.json_format_data : "";
  }
};

// Interface: CastMessageChannel
mirroring.mojom.CastMessageChannelPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'mirroring.mojom.CastMessageChannel';
  }

  onMessage(message) {
    // Method: OnMessage
    // Call: OnMessage(message)
  }

};

mirroring.mojom.CastMessageChannelRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
