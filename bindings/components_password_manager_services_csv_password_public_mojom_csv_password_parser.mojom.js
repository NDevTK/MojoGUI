// Auto-generated MojoJS binding
// Source: chromium_src/components/password_manager/services/csv_password/public/mojom/csv_password_parser.mojom
// Module: password_manager.mojom

'use strict';

// Module namespace
var password_manager = password_manager || {};
password_manager.mojom = password_manager.mojom || {};


// Enum: Status
password_manager.mojom.Status = {
  kOK: 0,
  kSyntaxError: 1,
  kSemanticError: 2,
};

// Struct: CSVPasswordSequence
password_manager.mojom.CSVPasswordSequenceSpec = {
  $: {
    structSpec: {
      name: 'password_manager.mojom.CSVPasswordSequence',
      packedSize: 16,
      fields: [
        { name: 'csv_passwords', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CSVPassword
password_manager.mojom.CSVPasswordSpec = {
  $: {
    structSpec: {
      name: 'password_manager.mojom.CSVPassword',
      packedSize: 16,
      fields: [
        { name: 'kOK', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: CSVPasswordParser
password_manager.mojom.CSVPasswordParser = {};

password_manager.mojom.CSVPasswordParserPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

password_manager.mojom.CSVPasswordParserRemote = class {
  static get $interfaceName() {
    return 'password_manager.mojom.CSVPasswordParser';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      password_manager.mojom.CSVPasswordParserPendingReceiver,
      handle);
    this.$ = new password_manager.mojom.CSVPasswordParserRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

password_manager.mojom.CSVPasswordParserRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  parseCSV(raw_csv) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      password_manager.mojom.CSVPasswordParser_ParseCSV_ParamsSpec,
      password_manager.mojom.CSVPasswordParser_ParseCSV_ResponseParamsSpec,
      [raw_csv]);
  }

};

password_manager.mojom.CSVPasswordParser.getRemote = function() {
  let remote = new password_manager.mojom.CSVPasswordParserRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'password_manager.mojom.CSVPasswordParser',
    'context');
  return remote.$;
};

// ParamsSpec for ParseCSV
password_manager.mojom.CSVPasswordParser_ParseCSV_ParamsSpec = {
  $: {
    structSpec: {
      name: 'password_manager.mojom.CSVPasswordParser.ParseCSV_Params',
      packedSize: 16,
      fields: [
        { name: 'raw_csv', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

password_manager.mojom.CSVPasswordParser_ParseCSV_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'password_manager.mojom.CSVPasswordParser.ParseCSV_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'sequence', packedOffset: 0, packedBitOffset: 0, type: password_manager.mojom.CSVPasswordSequenceSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
password_manager.mojom.CSVPasswordParserPtr = password_manager.mojom.CSVPasswordParserRemote;
password_manager.mojom.CSVPasswordParserRequest = password_manager.mojom.CSVPasswordParserPendingReceiver;

