// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/quick_pair/public/mojom/fast_pair_data_parser.mojom
// Module: ash.quick_pair.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.quick_pair = ash.quick_pair || {};
ash.quick_pair.mojom = ash.quick_pair.mojom || {};


// Enum: MessageType
ash.quick_pair.mojom.MessageType = {
};

// Enum: Acknowledgement
ash.quick_pair.mojom.Acknowledgement = {
};

// Enum: MessageGroup
ash.quick_pair.mojom.MessageGroup = {
};

// Struct: DecryptedResponse
ash.quick_pair.mojom.DecryptedResponse = class {
  constructor(values = {}) {
    this.secondary_address_bytes = values.secondary_address_bytes !== undefined ? values.secondary_address_bytes : 0;
  }
};

// Struct: DecryptedPasskey
ash.quick_pair.mojom.DecryptedPasskey = class {
  constructor(values = {}) {
    this.salt = values.salt !== undefined ? values.salt : 0;
  }
};

// Struct: BatteryInfo
ash.quick_pair.mojom.BatteryInfo = class {
  constructor(values = {}) {
    this.percentage = values.percentage !== undefined ? values.percentage : 0;
  }
};

// Struct: BatteryNotification
ash.quick_pair.mojom.BatteryNotification = class {
  constructor(values = {}) {
    this.case_info = values.case_info !== undefined ? values.case_info : false;
  }
};

// Struct: BatteryUpdate
ash.quick_pair.mojom.BatteryUpdate = class {
  constructor(values = {}) {
    this.case_info = values.case_info !== undefined ? values.case_info : null;
  }
};

// Struct: RingDevice
ash.quick_pair.mojom.RingDevice = class {
  constructor(values = {}) {
    this.ring_device_byte = values.ring_device_byte !== undefined ? values.ring_device_byte : 0;
    this.timeout_in_seconds = values.timeout_in_seconds !== undefined ? values.timeout_in_seconds : 0;
  }
};

// Struct: AcknowledgementMessage
ash.quick_pair.mojom.AcknowledgementMessage = class {
  constructor(values = {}) {
    this.action_message_group = values.action_message_group !== undefined ? values.action_message_group : 0;
  }
};

// Struct: NotDiscoverableAdvertisement
ash.quick_pair.mojom.NotDiscoverableAdvertisement = class {
  constructor(values = {}) {
    this.battery_notification = values.battery_notification !== undefined ? values.battery_notification : 0;
  }
};

// Interface: FastPairDataParser
ash.quick_pair.mojom.FastPairDataParserPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.quick_pair.mojom.FastPairDataParser';
  }

  getHexModelIdFromServiceData(service_data) {
    // Method: GetHexModelIdFromServiceData
    return new Promise((resolve) => {
      // Call: GetHexModelIdFromServiceData(service_data)
      resolve({});
    });
  }

  parseDecryptedResponse(aes_key, encrypted_response_bytes) {
    // Method: ParseDecryptedResponse
    return new Promise((resolve) => {
      // Call: ParseDecryptedResponse(aes_key, encrypted_response_bytes)
      resolve({});
    });
  }

  parseDecryptedPasskey(aes_key, encrypted_passkey_bytes) {
    // Method: ParseDecryptedPasskey
    return new Promise((resolve) => {
      // Call: ParseDecryptedPasskey(aes_key, encrypted_passkey_bytes)
      resolve({});
    });
  }

  parseNotDiscoverableAdvertisement(service_data, address) {
    // Method: ParseNotDiscoverableAdvertisement
    return new Promise((resolve) => {
      // Call: ParseNotDiscoverableAdvertisement(service_data, address)
      resolve({});
    });
  }

  parseMessageStreamMessages(message_bytes) {
    // Method: ParseMessageStreamMessages
    return new Promise((resolve) => {
      // Call: ParseMessageStreamMessages(message_bytes)
      resolve({});
    });
  }

};

ash.quick_pair.mojom.FastPairDataParserRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
