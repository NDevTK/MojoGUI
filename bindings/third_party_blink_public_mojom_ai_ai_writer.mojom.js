// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/ai/ai_writer.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var blink = blink || {};


// Enum: AIWriterTone
blink.mojom.AIWriterTone = {
  kFormal: 0,
  kNeutral: 1,
  kCasual: 2,
};
blink.mojom.AIWriterToneSpec = { $: mojo.internal.Enum() };

// Enum: AIWriterFormat
blink.mojom.AIWriterFormat = {
  kPlainText: 0,
  kMarkdown: 1,
};
blink.mojom.AIWriterFormatSpec = { $: mojo.internal.Enum() };

// Enum: AIWriterLength
blink.mojom.AIWriterLength = {
  kShort: 0,
  kMedium: 1,
  kLong: 2,
};
blink.mojom.AIWriterLengthSpec = { $: mojo.internal.Enum() };

// Struct: AIWriterCreateOptions
blink.mojom.AIWriterCreateOptionsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIWriterCreateOptions',
      packedSize: 56,
      fields: [
        { name: 'shared_context', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'tone', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.AIWriterToneSpec, nullable: false, minVersion: 0 },
        { name: 'format', packedOffset: 36, packedBitOffset: 0, type: blink.mojom.AIWriterFormatSpec, nullable: false, minVersion: 0 },
        { name: 'length', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.AIWriterLengthSpec, nullable: false, minVersion: 0 },
        { name: 'expected_input_languages', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.AILanguageCodeSpec, false), nullable: false, minVersion: 0 },
        { name: 'expected_context_languages', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.AILanguageCodeSpec, false), nullable: false, minVersion: 0 },
        { name: 'output_language', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.AILanguageCodeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Interface: AIWriter
blink.mojom.AIWriter = {};

blink.mojom.AIWriter_Write_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIWriter_Write_Params',
      packedSize: 32,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'context', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'pending_responder', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.ModelStreamingResponderRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

blink.mojom.AIWriter_MeasureUsage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIWriter_MeasureUsage_Params',
      packedSize: 24,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'context', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.AIWriterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AIWriterRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AIWriter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AIWriterPendingReceiver,
      handle);
    this.$ = new blink.mojom.AIWriterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.AIWriterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  write(input, context, pending_responder) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.AIWriter_Write_ParamsSpec,
      null,
      [input, context, pending_responder]);
  }

  measureUsage(input, context) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.AIWriter_MeasureUsage_ParamsSpec,
      blink.mojom.AIWriter_MeasureUsage_ResponseParamsSpec,
      [input, context]);
  }

};

blink.mojom.AIWriter.getRemote = function() {
  let remote = new blink.mojom.AIWriterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AIWriter',
    'context');
  return remote.$;
};

// ParamsSpec for Write
blink.mojom.AIWriter_Write_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIWriter.Write_Params',
      packedSize: 32,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'context', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'pending_responder', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.ModelStreamingResponderRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for MeasureUsage
blink.mojom.AIWriter_MeasureUsage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIWriter.MeasureUsage_Params',
      packedSize: 24,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'context', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.AIWriter_MeasureUsage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIWriter.MeasureUsage_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'number_of_tokens_$flag', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'number_of_tokens_$value', originalFieldName: 'number_of_tokens' } },
        { name: 'number_of_tokens_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'number_of_tokens_$flag', originalFieldName: 'number_of_tokens' } },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.AIWriterPtr = blink.mojom.AIWriterRemote;
blink.mojom.AIWriterRequest = blink.mojom.AIWriterPendingReceiver;

