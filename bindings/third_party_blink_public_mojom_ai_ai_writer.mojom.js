// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/ai/ai_writer.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: AIWriterTone
blink.mojom.AIWriterTone = {
  kFormal: 0,
  kNeutral: 1,
  kCasual: 2,
};

// Enum: AIWriterFormat
blink.mojom.AIWriterFormat = {
  kPlainText: 0,
  kMarkdown: 1,
};

// Enum: AIWriterLength
blink.mojom.AIWriterLength = {
  kShort: 0,
  kMedium: 1,
  kLong: 2,
};

// Interface: AIWriter
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
      blink.mojom.AIWriter_Write_ParamsSpec.$,
      null,
      [input, context, pending_responder]);
  }

  measureUsage(input, context) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.AIWriter_MeasureUsage_ParamsSpec.$,
      blink.mojom.AIWriter_MeasureUsage_ResponseParamsSpec.$,
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
}};

// ParamsSpec for Write
blink.mojom.AIWriter_Write_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIWriter.Write_Params',
      packedSize: 32,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'context', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'pending_responder', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for MeasureUsage
blink.mojom.AIWriter_MeasureUsage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIWriter.MeasureUsage_Params',
      packedSize: 24,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'context', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

blink.mojom.AIWriter_MeasureUsage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIWriter.MeasureUsage_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'number_of_tokens', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
blink.mojom.AIWriterPtr = blink.mojom.AIWriterRemote;
blink.mojom.AIWriterRequest = blink.mojom.AIWriterPendingReceiver;

