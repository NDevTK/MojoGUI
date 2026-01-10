// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/quick_pair/public/mojom/fast_pair_data_parser.mojom
// Module: ash.quick_pair.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.quick_pair = ash.quick_pair || {};
ash.quick_pair.mojom = ash.quick_pair.mojom || {};

ash.quick_pair.mojom.MessageTypeSpec = { $: mojo.internal.Enum() };
ash.quick_pair.mojom.AcknowledgementSpec = { $: mojo.internal.Enum() };
ash.quick_pair.mojom.MessageGroupSpec = { $: mojo.internal.Enum() };
ash.quick_pair.mojom.MessageStreamMessageSpec = { $: {} };
ash.quick_pair.mojom.DecryptedResponseSpec = { $: {} };
ash.quick_pair.mojom.DecryptedPasskeySpec = { $: {} };
ash.quick_pair.mojom.BatteryInfoSpec = { $: {} };
ash.quick_pair.mojom.BatteryNotificationSpec = { $: {} };
ash.quick_pair.mojom.BatteryUpdateSpec = { $: {} };
ash.quick_pair.mojom.RingDeviceSpec = { $: {} };
ash.quick_pair.mojom.AcknowledgementMessageSpec = { $: {} };
ash.quick_pair.mojom.NotDiscoverableAdvertisementSpec = { $: {} };
ash.quick_pair.mojom.FastPairDataParser = {};
ash.quick_pair.mojom.FastPairDataParser.$interfaceName = 'ash.quick_pair.mojom.FastPairDataParser';
ash.quick_pair.mojom.FastPairDataParser_GetHexModelIdFromServiceData_ParamsSpec = { $: {} };
ash.quick_pair.mojom.FastPairDataParser_GetHexModelIdFromServiceData_ResponseParamsSpec = { $: {} };
ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedResponse_ParamsSpec = { $: {} };
ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedResponse_ResponseParamsSpec = { $: {} };
ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedPasskey_ParamsSpec = { $: {} };
ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedPasskey_ResponseParamsSpec = { $: {} };
ash.quick_pair.mojom.FastPairDataParser_ParseNotDiscoverableAdvertisement_ParamsSpec = { $: {} };
ash.quick_pair.mojom.FastPairDataParser_ParseNotDiscoverableAdvertisement_ResponseParamsSpec = { $: {} };
ash.quick_pair.mojom.FastPairDataParser_ParseMessageStreamMessages_ParamsSpec = { $: {} };
ash.quick_pair.mojom.FastPairDataParser_ParseMessageStreamMessages_ResponseParamsSpec = { $: {} };

// Enum: MessageType
ash.quick_pair.mojom.MessageType = {
  kKeyBasedPairingRequest: 0,
  kKeyBasedPairingResponse: 1,
  kSeekersPasskey: 2,
  kProvidersPasskey: 3,
};

// Enum: Acknowledgement
ash.quick_pair.mojom.Acknowledgement = {
  kAck: 0,
  kNotSupportedNak: 1,
  kDeviceBusyNak: 2,
  kNotAllowedDueToCurrentStateNak: 3,
};

// Enum: MessageGroup
ash.quick_pair.mojom.MessageGroup = {
  kBluetoothEvent: 0,
  kCompanionAppEvent: 1,
  kDeviceInformationEvent: 2,
  kDeviceActionEvent: 3,
  kAcknowledgementEvent: 4,
};

// Union: MessageStreamMessage
mojo.internal.Union(
    ash.quick_pair.mojom.MessageStreamMessageSpec, 'ash.quick_pair.mojom.MessageStreamMessage', {
      'model_id': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'ble_address_update': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'battery_update': {
        'ordinal': 2,
        'type': ash.quick_pair.mojom.BatteryUpdateSpec,
        'nullable': false,
      },
      'remaining_battery_time': {
        'ordinal': 3,
        'type': mojo.internal.Uint16,
        'nullable': false,
      },
      'enable_silence_mode': {
        'ordinal': 4,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'companion_app_log_buffer_full': {
        'ordinal': 5,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'active_components_byte': {
        'ordinal': 6,
        'type': mojo.internal.Uint8,
        'nullable': false,
      },
      'ring_device_event': {
        'ordinal': 7,
        'type': ash.quick_pair.mojom.RingDeviceSpec,
        'nullable': false,
      },
      'acknowledgement': {
        'ordinal': 8,
        'type': ash.quick_pair.mojom.AcknowledgementMessageSpec,
        'nullable': false,
      },
      'sdk_version': {
        'ordinal': 9,
        'type': mojo.internal.Int8,
        'nullable': false,
      },
    });

// Struct: DecryptedResponse
mojo.internal.Struct(
    ash.quick_pair.mojom.DecryptedResponseSpec, 'ash.quick_pair.mojom.DecryptedResponse', [
      mojo.internal.StructField('message_type', 0, 0, ash.quick_pair.mojom.MessageTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('address_bytes', 8, 0, mojo.internal.Array(mojo.internal.Pointer, false), null, false, 0, undefined),
      mojo.internal.StructField('salt', 16, 0, mojo.internal.Array(mojo.internal.Pointer, false), null, false, 0, undefined),
      mojo.internal.StructField('flags_$flag', 24, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'flags_$value', originalFieldName: 'flags' }),
      mojo.internal.StructField('flags_$value', 25, 0, mojo.internal.Uint8, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'flags_$flag', originalFieldName: 'flags' }),
      mojo.internal.StructField('num_addresses_$flag', 26, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'num_addresses_$value', originalFieldName: 'num_addresses' }),
      mojo.internal.StructField('num_addresses_$value', 27, 0, mojo.internal.Uint8, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'num_addresses_$flag', originalFieldName: 'num_addresses' }),
      mojo.internal.StructField('secondary_address_bytes', 32, 0, mojo.internal.Array(mojo.internal.Pointer, false), null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: DecryptedPasskey
mojo.internal.Struct(
    ash.quick_pair.mojom.DecryptedPasskeySpec, 'ash.quick_pair.mojom.DecryptedPasskey', [
      mojo.internal.StructField('message_type', 0, 0, ash.quick_pair.mojom.MessageTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('passkey', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('salt', 8, 0, mojo.internal.Array(mojo.internal.Pointer, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BatteryInfo
mojo.internal.Struct(
    ash.quick_pair.mojom.BatteryInfoSpec, 'ash.quick_pair.mojom.BatteryInfo', [
      mojo.internal.StructField('is_charging', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('percentage', 1, 0, mojo.internal.Int8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: BatteryNotification
mojo.internal.Struct(
    ash.quick_pair.mojom.BatteryNotificationSpec, 'ash.quick_pair.mojom.BatteryNotification', [
      mojo.internal.StructField('show_ui', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('left_bud_info', 8, 0, ash.quick_pair.mojom.BatteryInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('right_bud_info', 16, 0, ash.quick_pair.mojom.BatteryInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('case_info', 24, 0, ash.quick_pair.mojom.BatteryInfoSpec, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: BatteryUpdate
mojo.internal.Struct(
    ash.quick_pair.mojom.BatteryUpdateSpec, 'ash.quick_pair.mojom.BatteryUpdate', [
      mojo.internal.StructField('left_bud_info', 0, 0, ash.quick_pair.mojom.BatteryInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('right_bud_info', 8, 0, ash.quick_pair.mojom.BatteryInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('case_info', 16, 0, ash.quick_pair.mojom.BatteryInfoSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: RingDevice
mojo.internal.Struct(
    ash.quick_pair.mojom.RingDeviceSpec, 'ash.quick_pair.mojom.RingDevice', [
      mojo.internal.StructField('ring_device_byte', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('timeout_in_seconds', 1, 0, mojo.internal.Int8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AcknowledgementMessage
mojo.internal.Struct(
    ash.quick_pair.mojom.AcknowledgementMessageSpec, 'ash.quick_pair.mojom.AcknowledgementMessage', [
      mojo.internal.StructField('action_message_code', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('acknowledgement', 4, 0, ash.quick_pair.mojom.AcknowledgementSpec, null, false, 0, undefined),
      mojo.internal.StructField('action_message_group', 8, 0, ash.quick_pair.mojom.MessageGroupSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: NotDiscoverableAdvertisement
mojo.internal.Struct(
    ash.quick_pair.mojom.NotDiscoverableAdvertisementSpec, 'ash.quick_pair.mojom.NotDiscoverableAdvertisement', [
      mojo.internal.StructField('account_key_filter', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('salt', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('show_ui', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('battery_notification', 24, 0, ash.quick_pair.mojom.BatteryNotificationSpec, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Interface: FastPairDataParser
mojo.internal.Struct(
    ash.quick_pair.mojom.FastPairDataParser_GetHexModelIdFromServiceData_ParamsSpec, 'ash.quick_pair.mojom.FastPairDataParser_GetHexModelIdFromServiceData_Params', [
      mojo.internal.StructField('service_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.quick_pair.mojom.FastPairDataParser_GetHexModelIdFromServiceData_ResponseParamsSpec, 'ash.quick_pair.mojom.FastPairDataParser_GetHexModelIdFromServiceData_ResponseParams', [
      mojo.internal.StructField('model_id', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedResponse_ParamsSpec, 'ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedResponse_Params', [
      mojo.internal.StructField('aes_key', 0, 0, mojo.internal.Array(mojo.internal.Pointer, false), null, false, 0, undefined),
      mojo.internal.StructField('encrypted_response_bytes', 8, 0, mojo.internal.Array(mojo.internal.Pointer, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedResponse_ResponseParamsSpec, 'ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedResponse_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.quick_pair.mojom.DecryptedResponseSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedPasskey_ParamsSpec, 'ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedPasskey_Params', [
      mojo.internal.StructField('aes_key', 0, 0, mojo.internal.Array(mojo.internal.Pointer, false), null, false, 0, undefined),
      mojo.internal.StructField('encrypted_passkey_bytes', 8, 0, mojo.internal.Array(mojo.internal.Pointer, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedPasskey_ResponseParamsSpec, 'ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedPasskey_ResponseParams', [
      mojo.internal.StructField('passkey', 0, 0, ash.quick_pair.mojom.DecryptedPasskeySpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.quick_pair.mojom.FastPairDataParser_ParseNotDiscoverableAdvertisement_ParamsSpec, 'ash.quick_pair.mojom.FastPairDataParser_ParseNotDiscoverableAdvertisement_Params', [
      mojo.internal.StructField('service_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('address', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.quick_pair.mojom.FastPairDataParser_ParseNotDiscoverableAdvertisement_ResponseParamsSpec, 'ash.quick_pair.mojom.FastPairDataParser_ParseNotDiscoverableAdvertisement_ResponseParams', [
      mojo.internal.StructField('advertisement', 0, 0, ash.quick_pair.mojom.NotDiscoverableAdvertisementSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.quick_pair.mojom.FastPairDataParser_ParseMessageStreamMessages_ParamsSpec, 'ash.quick_pair.mojom.FastPairDataParser_ParseMessageStreamMessages_Params', [
      mojo.internal.StructField('message_bytes', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.quick_pair.mojom.FastPairDataParser_ParseMessageStreamMessages_ResponseParamsSpec, 'ash.quick_pair.mojom.FastPairDataParser_ParseMessageStreamMessages_ResponseParams', [
      mojo.internal.StructField('messages', 0, 0, mojo.internal.Array(ash.quick_pair.mojom.MessageStreamMessageSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

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

ash.quick_pair.mojom.FastPairDataParserPtr = ash.quick_pair.mojom.FastPairDataParserRemote;
ash.quick_pair.mojom.FastPairDataParserRequest = ash.quick_pair.mojom.FastPairDataParserPendingReceiver;

