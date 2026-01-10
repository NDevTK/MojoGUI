// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/boca/babelorca/mojom/tachyon_parsing_service.mojom
// Module: ash.babelorca.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.babelorca = ash.babelorca || {};
ash.babelorca.mojom = ash.babelorca.mojom || {};

ash.babelorca.mojom.ParsingStateSpec = { $: mojo.internal.Enum() };
ash.babelorca.mojom.TranscriptPartSpec = { $: {} };
ash.babelorca.mojom.BabelOrcaMessageSpec = { $: {} };
ash.babelorca.mojom.StreamStatusSpec = { $: {} };
ash.babelorca.mojom.TachyonParsingService = {};
ash.babelorca.mojom.TachyonParsingService.$interfaceName = 'ash.babelorca.mojom.TachyonParsingService';
ash.babelorca.mojom.TachyonParsingService_Parse_ParamsSpec = { $: {} };
ash.babelorca.mojom.TachyonParsingService_Parse_ResponseParamsSpec = { $: {} };

// Enum: ParsingState
ash.babelorca.mojom.ParsingState = {
  kOk: 0,
  kError: 1,
  kClosed: 2,
};

// Struct: TranscriptPart
mojo.internal.Struct(
    ash.babelorca.mojom.TranscriptPartSpec, 'ash.babelorca.mojom.TranscriptPart', [
      mojo.internal.StructField('transcript_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('text_index', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('text', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('language', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_final', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: BabelOrcaMessage
mojo.internal.Struct(
    ash.babelorca.mojom.BabelOrcaMessageSpec, 'ash.babelorca.mojom.BabelOrcaMessage', [
      mojo.internal.StructField('sender_email', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('session_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('init_timestamp_ms', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('order', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('previous_transcript', 32, 0, ash.babelorca.mojom.TranscriptPartSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('current_transcript', 40, 0, ash.babelorca.mojom.TranscriptPartSpec.$, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: StreamStatus
mojo.internal.Struct(
    ash.babelorca.mojom.StreamStatusSpec, 'ash.babelorca.mojom.StreamStatus', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('code', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: TachyonParsingService
mojo.internal.Struct(
    ash.babelorca.mojom.TachyonParsingService_Parse_ParamsSpec, 'ash.babelorca.mojom.TachyonParsingService_Parse_Params', [
      mojo.internal.StructField('stream_data', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.babelorca.mojom.TachyonParsingService_Parse_ResponseParamsSpec, 'ash.babelorca.mojom.TachyonParsingService_Parse_ResponseParams', [
      mojo.internal.StructField('state', 0, 0, ash.babelorca.mojom.ParsingStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('messages', 8, 0, mojo.internal.Array(ash.babelorca.mojom.BabelOrcaMessageSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('stream_status', 16, 0, ash.babelorca.mojom.StreamStatusSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

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
      [stream_data],
      false);
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

ash.babelorca.mojom.TachyonParsingServicePtr = ash.babelorca.mojom.TachyonParsingServiceRemote;
ash.babelorca.mojom.TachyonParsingServiceRequest = ash.babelorca.mojom.TachyonParsingServicePendingReceiver;

