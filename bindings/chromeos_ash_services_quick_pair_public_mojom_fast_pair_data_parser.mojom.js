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
  kKeyBasedPairingRequest: 0,
  kKeyBasedPairingResponse: 1,
  kSeekersPasskey: 2,
  kProvidersPasskey: 3,
};
ash.quick_pair.mojom.MessageTypeSpec = { $: mojo.internal.Enum() };

// Enum: Acknowledgement
ash.quick_pair.mojom.Acknowledgement = {
  kAck: 0,
  kNotSupportedNak: 1,
  kDeviceBusyNak: 2,
  kNotAllowedDueToCurrentStateNak: 3,
};
ash.quick_pair.mojom.AcknowledgementSpec = { $: mojo.internal.Enum() };

// Enum: MessageGroup
ash.quick_pair.mojom.MessageGroup = {
  kBluetoothEvent: 0,
  kCompanionAppEvent: 1,
  kDeviceInformationEvent: 2,
  kDeviceActionEvent: 3,
  kAcknowledgementEvent: 4,
};
ash.quick_pair.mojom.MessageGroupSpec = { $: mojo.internal.Enum() };

// Union: MessageStreamMessage
ash.quick_pair.mojom.MessageStreamMessageSpec = { $: mojo.internal.Union(
    'ash.quick_pair.mojom.MessageStreamMessage', {
      'model_id': {
        'ordinal': 0,
        'type': mojo.internal.String,
      }},
      'ble_address_update': {
        'ordinal': 1,
        'type': mojo.internal.String,
      }},
      'battery_update': {
        'ordinal': 2,
        'type': ash.quick_pair.mojom.BatteryUpdateSpec,
      }},
      'remaining_battery_time': {
        'ordinal': 3,
        'type': mojo.internal.Uint16,
      }},
      'enable_silence_mode': {
        'ordinal': 4,
        'type': mojo.internal.Bool,
      }},
      'companion_app_log_buffer_full': {
        'ordinal': 5,
        'type': mojo.internal.Bool,
      }},
      'active_components_byte': {
        'ordinal': 6,
        'type': mojo.internal.Uint8,
      }},
      'ring_device_event': {
        'ordinal': 7,
        'type': ash.quick_pair.mojom.RingDeviceSpec,
      }},
      'acknowledgement': {
        'ordinal': 8,
        'type': ash.quick_pair.mojom.AcknowledgementMessageSpec,
      }},
      'sdk_version': {
        'ordinal': 9,
        'type': mojo.internal.Int8,
      }},
    })
};

// Struct: DecryptedResponse
ash.quick_pair.mojom.DecryptedResponseSpec = {
  $: {
    structSpec: {
      name: 'ash.quick_pair.mojom.DecryptedResponse',
      packedSize: 40,
      fields: [
        { name: 'message_type', packedOffset: 24, packedBitOffset: 0, type: ash.quick_pair.mojom.MessageTypeSpec, nullable: false, minVersion: 0 },
        { name: 'address_bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
        { name: 'salt', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
        { name: 'flags_$flag', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'flags_$value', originalFieldName: 'flags' } },
        { name: 'flags_$value', packedOffset: 29, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'flags_$flag', originalFieldName: 'flags' } },
        { name: 'num_addresses_$flag', packedOffset: 28, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'num_addresses_$value', originalFieldName: 'num_addresses' } },
        { name: 'num_addresses_$value', packedOffset: 30, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'num_addresses_$flag', originalFieldName: 'num_addresses' } },
        { name: 'secondary_address_bytes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: DecryptedPasskey
ash.quick_pair.mojom.DecryptedPasskeySpec = {
  $: {
    structSpec: {
      name: 'ash.quick_pair.mojom.DecryptedPasskey',
      packedSize: 24,
      fields: [
        { name: 'message_type', packedOffset: 8, packedBitOffset: 0, type: ash.quick_pair.mojom.MessageTypeSpec, nullable: false, minVersion: 0 },
        { name: 'passkey', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'salt', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: BatteryInfo
ash.quick_pair.mojom.BatteryInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.quick_pair.mojom.BatteryInfo',
      packedSize: 16,
      fields: [
        { name: 'is_charging', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'percentage', packedOffset: 1, packedBitOffset: 0, type: mojo.internal.Int8, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: BatteryNotification
ash.quick_pair.mojom.BatteryNotificationSpec = {
  $: {
    structSpec: {
      name: 'ash.quick_pair.mojom.BatteryNotification',
      packedSize: 40,
      fields: [
        { name: 'show_ui', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'left_bud_info', packedOffset: 0, packedBitOffset: 0, type: ash.quick_pair.mojom.BatteryInfoSpec, nullable: false, minVersion: 0 },
        { name: 'right_bud_info', packedOffset: 8, packedBitOffset: 0, type: ash.quick_pair.mojom.BatteryInfoSpec, nullable: false, minVersion: 0 },
        { name: 'case_info', packedOffset: 16, packedBitOffset: 0, type: ash.quick_pair.mojom.BatteryInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: BatteryUpdate
ash.quick_pair.mojom.BatteryUpdateSpec = {
  $: {
    structSpec: {
      name: 'ash.quick_pair.mojom.BatteryUpdate',
      packedSize: 32,
      fields: [
        { name: 'left_bud_info', packedOffset: 0, packedBitOffset: 0, type: ash.quick_pair.mojom.BatteryInfoSpec, nullable: false, minVersion: 0 },
        { name: 'right_bud_info', packedOffset: 8, packedBitOffset: 0, type: ash.quick_pair.mojom.BatteryInfoSpec, nullable: false, minVersion: 0 },
        { name: 'case_info', packedOffset: 16, packedBitOffset: 0, type: ash.quick_pair.mojom.BatteryInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: RingDevice
ash.quick_pair.mojom.RingDeviceSpec = {
  $: {
    structSpec: {
      name: 'ash.quick_pair.mojom.RingDevice',
      packedSize: 16,
      fields: [
        { name: 'ring_device_byte', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'timeout_in_seconds', packedOffset: 1, packedBitOffset: 0, type: mojo.internal.Int8, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: AcknowledgementMessage
ash.quick_pair.mojom.AcknowledgementMessageSpec = {
  $: {
    structSpec: {
      name: 'ash.quick_pair.mojom.AcknowledgementMessage',
      packedSize: 24,
      fields: [
        { name: 'action_message_code', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'acknowledgement', packedOffset: 0, packedBitOffset: 0, type: ash.quick_pair.mojom.AcknowledgementSpec, nullable: false, minVersion: 0 },
        { name: 'action_message_group', packedOffset: 4, packedBitOffset: 0, type: ash.quick_pair.mojom.MessageGroupSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: NotDiscoverableAdvertisement
ash.quick_pair.mojom.NotDiscoverableAdvertisementSpec = {
  $: {
    structSpec: {
      name: 'ash.quick_pair.mojom.NotDiscoverableAdvertisement',
      packedSize: 40,
      fields: [
        { name: 'account_key_filter', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'salt', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'show_ui', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'battery_notification', packedOffset: 16, packedBitOffset: 0, type: ash.quick_pair.mojom.BatteryNotificationSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Interface: FastPairDataParser
ash.quick_pair.mojom.FastPairDataParser = {};

ash.quick_pair.mojom.FastPairDataParser_GetHexModelIdFromServiceData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.quick_pair.mojom.FastPairDataParser_GetHexModelIdFromServiceData_Params',
      packedSize: 16,
      fields: [
        { name: 'service_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedResponse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedResponse_Params',
      packedSize: 24,
      fields: [
        { name: 'aes_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
        { name: 'encrypted_response_bytes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedPasskey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedPasskey_Params',
      packedSize: 24,
      fields: [
        { name: 'aes_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
        { name: 'encrypted_passkey_bytes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.quick_pair.mojom.FastPairDataParser_ParseNotDiscoverableAdvertisement_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.quick_pair.mojom.FastPairDataParser_ParseNotDiscoverableAdvertisement_Params',
      packedSize: 24,
      fields: [
        { name: 'service_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'address', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.quick_pair.mojom.FastPairDataParser_ParseMessageStreamMessages_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.quick_pair.mojom.FastPairDataParser_ParseMessageStreamMessages_Params',
      packedSize: 16,
      fields: [
        { name: 'message_bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.quick_pair.mojom.FastPairDataParserPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.quick_pair.mojom.FastPairDataParserRemote = class {
  static get $interfaceName() {
    return 'ash.quick_pair.mojom.FastPairDataParser';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.quick_pair.mojom.FastPairDataParserPendingReceiver,
      handle);
    this.$ = new ash.quick_pair.mojom.FastPairDataParserRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.quick_pair.mojom.FastPairDataParserRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getHexModelIdFromServiceData(service_data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.quick_pair.mojom.FastPairDataParser_GetHexModelIdFromServiceData_ParamsSpec,
      ash.quick_pair.mojom.FastPairDataParser_GetHexModelIdFromServiceData_ResponseParamsSpec,
      [service_data]);
  }

  parseDecryptedResponse(aes_key, encrypted_response_bytes) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedResponse_ParamsSpec,
      ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedResponse_ResponseParamsSpec,
      [aes_key, encrypted_response_bytes]);
  }

  parseDecryptedPasskey(aes_key, encrypted_passkey_bytes) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedPasskey_ParamsSpec,
      ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedPasskey_ResponseParamsSpec,
      [aes_key, encrypted_passkey_bytes]);
  }

  parseNotDiscoverableAdvertisement(service_data, address) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.quick_pair.mojom.FastPairDataParser_ParseNotDiscoverableAdvertisement_ParamsSpec,
      ash.quick_pair.mojom.FastPairDataParser_ParseNotDiscoverableAdvertisement_ResponseParamsSpec,
      [service_data, address]);
  }

  parseMessageStreamMessages(message_bytes) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.quick_pair.mojom.FastPairDataParser_ParseMessageStreamMessages_ParamsSpec,
      ash.quick_pair.mojom.FastPairDataParser_ParseMessageStreamMessages_ResponseParamsSpec,
      [message_bytes]);
  }

};

ash.quick_pair.mojom.FastPairDataParser.getRemote = function() {
  let remote = new ash.quick_pair.mojom.FastPairDataParserRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.quick_pair.mojom.FastPairDataParser',
    'context');
  return remote.$;
};

// ParamsSpec for GetHexModelIdFromServiceData
ash.quick_pair.mojom.FastPairDataParser_GetHexModelIdFromServiceData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.quick_pair.mojom.FastPairDataParser.GetHexModelIdFromServiceData_Params',
      packedSize: 16,
      fields: [
        { name: 'service_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.quick_pair.mojom.FastPairDataParser_GetHexModelIdFromServiceData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.quick_pair.mojom.FastPairDataParser.GetHexModelIdFromServiceData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'model_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ParseDecryptedResponse
ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedResponse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.quick_pair.mojom.FastPairDataParser.ParseDecryptedResponse_Params',
      packedSize: 24,
      fields: [
        { name: 'aes_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
        { name: 'encrypted_response_bytes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedResponse_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.quick_pair.mojom.FastPairDataParser.ParseDecryptedResponse_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.quick_pair.mojom.DecryptedResponseSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ParseDecryptedPasskey
ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedPasskey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.quick_pair.mojom.FastPairDataParser.ParseDecryptedPasskey_Params',
      packedSize: 24,
      fields: [
        { name: 'aes_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
        { name: 'encrypted_passkey_bytes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedPasskey_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.quick_pair.mojom.FastPairDataParser.ParseDecryptedPasskey_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'passkey', packedOffset: 0, packedBitOffset: 0, type: ash.quick_pair.mojom.DecryptedPasskeySpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ParseNotDiscoverableAdvertisement
ash.quick_pair.mojom.FastPairDataParser_ParseNotDiscoverableAdvertisement_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.quick_pair.mojom.FastPairDataParser.ParseNotDiscoverableAdvertisement_Params',
      packedSize: 24,
      fields: [
        { name: 'service_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'address', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.quick_pair.mojom.FastPairDataParser_ParseNotDiscoverableAdvertisement_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.quick_pair.mojom.FastPairDataParser.ParseNotDiscoverableAdvertisement_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'advertisement', packedOffset: 0, packedBitOffset: 0, type: ash.quick_pair.mojom.NotDiscoverableAdvertisementSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ParseMessageStreamMessages
ash.quick_pair.mojom.FastPairDataParser_ParseMessageStreamMessages_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.quick_pair.mojom.FastPairDataParser.ParseMessageStreamMessages_Params',
      packedSize: 16,
      fields: [
        { name: 'message_bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.quick_pair.mojom.FastPairDataParser_ParseMessageStreamMessages_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.quick_pair.mojom.FastPairDataParser.ParseMessageStreamMessages_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'messages', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.quick_pair.mojom.MessageStreamMessageSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.quick_pair.mojom.FastPairDataParserPtr = ash.quick_pair.mojom.FastPairDataParserRemote;
ash.quick_pair.mojom.FastPairDataParserRequest = ash.quick_pair.mojom.FastPairDataParserPendingReceiver;

