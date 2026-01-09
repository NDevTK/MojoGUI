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

// Interface: FastPairDataParser
ash.quick_pair.mojom.FastPairDataParser = {};

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
      ash.quick_pair.mojom.FastPairDataParser_GetHexModelIdFromServiceData_ParamsSpec.$,
      ash.quick_pair.mojom.FastPairDataParser_GetHexModelIdFromServiceData_ResponseParamsSpec.$,
      [service_data]);
  }

  parseDecryptedResponse(aes_key, encrypted_response_bytes) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedResponse_ParamsSpec.$,
      ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedResponse_ResponseParamsSpec.$,
      [aes_key, encrypted_response_bytes]);
  }

  parseDecryptedPasskey(aes_key, encrypted_passkey_bytes) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedPasskey_ParamsSpec.$,
      ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedPasskey_ResponseParamsSpec.$,
      [aes_key, encrypted_passkey_bytes]);
  }

  parseNotDiscoverableAdvertisement(service_data, address) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.quick_pair.mojom.FastPairDataParser_ParseNotDiscoverableAdvertisement_ParamsSpec.$,
      ash.quick_pair.mojom.FastPairDataParser_ParseNotDiscoverableAdvertisement_ResponseParamsSpec.$,
      [service_data, address]);
  }

  parseMessageStreamMessages(message_bytes) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.quick_pair.mojom.FastPairDataParser_ParseMessageStreamMessages_ParamsSpec.$,
      ash.quick_pair.mojom.FastPairDataParser_ParseMessageStreamMessages_ResponseParamsSpec.$,
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
        { name: 'service_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.quick_pair.mojom.FastPairDataParser_GetHexModelIdFromServiceData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.quick_pair.mojom.FastPairDataParser.GetHexModelIdFromServiceData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'model_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'aes_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'encrypted_response_bytes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedResponse_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.quick_pair.mojom.FastPairDataParser.ParseDecryptedResponse_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'aes_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'encrypted_passkey_bytes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.quick_pair.mojom.FastPairDataParser_ParseDecryptedPasskey_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.quick_pair.mojom.FastPairDataParser.ParseDecryptedPasskey_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'passkey', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'service_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'address', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.quick_pair.mojom.FastPairDataParser_ParseNotDiscoverableAdvertisement_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.quick_pair.mojom.FastPairDataParser.ParseNotDiscoverableAdvertisement_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'advertisement', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'message_bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.quick_pair.mojom.FastPairDataParser_ParseMessageStreamMessages_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.quick_pair.mojom.FastPairDataParser.ParseMessageStreamMessages_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'messages', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.quick_pair.mojom.FastPairDataParserPtr = ash.quick_pair.mojom.FastPairDataParserRemote;
ash.quick_pair.mojom.FastPairDataParserRequest = ash.quick_pair.mojom.FastPairDataParserPendingReceiver;

