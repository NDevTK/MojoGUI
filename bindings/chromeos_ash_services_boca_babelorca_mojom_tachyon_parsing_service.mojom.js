// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/boca/babelorca/mojom/tachyon_parsing_service.mojom
// Module: ash.babelorca.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.babelorca = ash.babelorca || {};
ash.babelorca.mojom = ash.babelorca.mojom || {};


// Enum: ParsingState
ash.babelorca.mojom.ParsingState = {
  kOk: 0,
  kError: 1,
  kClosed: 2,
};
ash.babelorca.mojom.ParsingStateSpec = { $: mojo.internal.Enum() };

// Struct: TranscriptPart
ash.babelorca.mojom.TranscriptPartSpec = {
  $: {
    structSpec: {
      name: 'ash.babelorca.mojom.TranscriptPart',
      packedSize: 48,
      fields: [
        { name: 'transcript_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'text_index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'text', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_final', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'language', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: BabelOrcaMessage
ash.babelorca.mojom.BabelOrcaMessageSpec = {
  $: {
    structSpec: {
      name: 'ash.babelorca.mojom.BabelOrcaMessage',
      packedSize: 56,
      fields: [
        { name: 'sender_email', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'session_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'init_timestamp_ms', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'order', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'previous_transcript', packedOffset: 32, packedBitOffset: 0, type: ash.babelorca.mojom.TranscriptPartSpec, nullable: true, minVersion: 0 },
        { name: 'current_transcript', packedOffset: 40, packedBitOffset: 0, type: ash.babelorca.mojom.TranscriptPartSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: StreamStatus
ash.babelorca.mojom.StreamStatusSpec = {
  $: {
    structSpec: {
      name: 'ash.babelorca.mojom.StreamStatus',
      packedSize: 24,
      fields: [
        { name: 'code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: TachyonParsingService
ash.babelorca.mojom.TachyonParsingService = {};

ash.babelorca.mojom.TachyonParsingServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.babelorca.mojom.TachyonParsingServiceRemote = class {
  static get $interfaceName() {
    return 'ash.babelorca.mojom.TachyonParsingService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.babelorca.mojom.TachyonParsingServicePendingReceiver,
      handle);
    this.$ = new ash.babelorca.mojom.TachyonParsingServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.babelorca.mojom.TachyonParsingServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  parse(stream_data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.babelorca.mojom.TachyonParsingService_Parse_ParamsSpec,
      ash.babelorca.mojom.TachyonParsingService_Parse_ResponseParamsSpec,
      [stream_data]);
  }

};

ash.babelorca.mojom.TachyonParsingService.getRemote = function() {
  let remote = new ash.babelorca.mojom.TachyonParsingServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.babelorca.mojom.TachyonParsingService',
    'context');
  return remote.$;
};

// ParamsSpec for Parse
ash.babelorca.mojom.TachyonParsingService_Parse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.babelorca.mojom.TachyonParsingService.Parse_Params',
      packedSize: 16,
      fields: [
        { name: 'stream_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.babelorca.mojom.TachyonParsingService_Parse_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: ash.babelorca.mojom.ParsingStateSpec, nullable: false, minVersion: 0 },
        { name: 'messages', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(ash.babelorca.mojom.BabelOrcaMessageSpec, false), nullable: false, minVersion: 0 },
        { name: 'stream_status', packedOffset: 16, packedBitOffset: 0, type: ash.babelorca.mojom.StreamStatusSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
ash.babelorca.mojom.TachyonParsingServicePtr = ash.babelorca.mojom.TachyonParsingServiceRemote;
ash.babelorca.mojom.TachyonParsingServiceRequest = ash.babelorca.mojom.TachyonParsingServicePendingReceiver;

