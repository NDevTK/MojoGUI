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
};

// Struct: TranscriptPart
ash.babelorca.mojom.TranscriptPart = class {
  constructor(values = {}) {
    this.language = values.language !== undefined ? values.language : 0;
  }
};

// Struct: BabelOrcaMessage
ash.babelorca.mojom.BabelOrcaMessage = class {
  constructor(values = {}) {
    this.current_transcript = values.current_transcript !== undefined ? values.current_transcript : 0;
  }
};

// Struct: StreamStatus
ash.babelorca.mojom.StreamStatus = class {
  constructor(values = {}) {
    this.message = values.message !== undefined ? values.message : 0;
  }
};

// Interface: TachyonParsingService
ash.babelorca.mojom.TachyonParsingServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.babelorca.mojom.TachyonParsingService';
  }

  parse(stream_data) {
    // Method: Parse
    return new Promise((resolve) => {
      // Call: Parse(stream_data)
      resolve({});
    });
  }

};

ash.babelorca.mojom.TachyonParsingServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
