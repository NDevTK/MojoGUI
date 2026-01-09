// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/message_port.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};


// Enum: SerializationFormat
extensions.mojom.SerializationFormat = {
};

// Enum: ChannelType
extensions.mojom.ChannelType = {
  both: 0,
};

// Enum: MessagingEndpointType
extensions.mojom.MessagingEndpointType = {
};

// Struct: PortId
extensions.mojom.PortId = class {
  constructor(values = {}) {
    this.serialization_format = values.serialization_format !== undefined ? values.serialization_format : 0;
  }
};

// Struct: MessagingEndpoint
extensions.mojom.MessagingEndpoint = class {
  constructor(values = {}) {
    this.native_app_name = values.native_app_name !== undefined ? values.native_app_name : 0;
  }
};

// Struct: TabConnectionInfo
extensions.mojom.TabConnectionInfo = class {
  constructor(values = {}) {
    this.document_lifecycle = values.document_lifecycle !== undefined ? values.document_lifecycle : 0;
  }
};

// Struct: ExternalConnectionInfo
extensions.mojom.ExternalConnectionInfo = class {
  constructor(values = {}) {
    this.guest_render_frame_routing_id = values.guest_render_frame_routing_id !== undefined ? values.guest_render_frame_routing_id : 0;
  }
};

// Struct: Message
extensions.mojom.Message = class {
  constructor(values = {}) {
    this.from_privileged_context = values.from_privileged_context !== undefined ? values.from_privileged_context : false;
  }
};

// Interface: MessagePort
extensions.mojom.MessagePortPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'extensions.mojom.MessagePort';
  }

  dispatchDisconnect(error) {
    // Method: DispatchDisconnect
    // Call: DispatchDisconnect(error)
  }

  deliverMessage(message) {
    // Method: DeliverMessage
    // Call: DeliverMessage(message)
  }

};

extensions.mojom.MessagePortRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MessagePortHost
extensions.mojom.MessagePortHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'extensions.mojom.MessagePortHost';
  }

  closePort(close_channel, error_message) {
    // Method: ClosePort
    // Call: ClosePort(close_channel, error_message)
  }

  postMessage(message) {
    // Method: PostMessage
    // Call: PostMessage(message)
  }

  responsePending() {
    // Method: ResponsePending
    // Call: ResponsePending()
  }

};

extensions.mojom.MessagePortHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
