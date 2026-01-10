// Auto-generated MojoJS binding
// Source: chromium_src/components/password_manager/services/csv_password/public/mojom/csv_password_parser.mojom
// Module: password_manager.mojom

'use strict';

// Module namespace
var password_manager = password_manager || {};
password_manager.mojom = password_manager.mojom || {};
var url = url || {};


// Enum: Status
password_manager.mojom.mojom.Status = {
  kOK: 0,
  kSyntaxError: 1,
  kSemanticError: 2,
};
password_manager.mojom.mojom.StatusSpec = { $: mojo.internal.Enum() };

// Struct: CSVPasswordSequence
password_manager.mojom.mojom.CSVPasswordSequenceSpec = {
  $: {
    structSpec: {
      name: 'password_manager.mojom.CSVPasswordSequence',
      packedSize: 16,
      fields: [
        { name: 'csv_passwords', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(password_manager.mojom.CSVPasswordSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: CSVPassword
password_manager.mojom.mojom.CSVPasswordSpec = {
  $: {
    structSpec: {
      name: 'password_manager.mojom.CSVPassword',
      packedSize: 16,
      fields: [
        { name: 'kOK', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: CSVPasswordParser
password_manager.mojom.mojom.CSVPasswordParser = {};

password_manager.mojom.mojom.CSVPasswordParserPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

password_manager.mojom.mojom.CSVPasswordParserRemote = class {
  static get $interfaceName() {
    return 'password_manager.mojom.CSVPasswordParser';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      password_manager.mojom.mojom.CSVPasswordParserPendingReceiver,
      handle);
    this.$ = new password_manager.mojom.mojom.CSVPasswordParserRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

password_manager.mojom.mojom.CSVPasswordParserRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  parseCSV(raw_csv) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      password_manager.mojom.mojom.CSVPasswordParser_ParseCSV_ParamsSpec,
      password_manager.mojom.mojom.CSVPasswordParser_ParseCSV_ResponseParamsSpec,
      [raw_csv]);
  }

};

password_manager.mojom.mojom.CSVPasswordParser.getRemote = function() {
  let remote = new password_manager.mojom.mojom.CSVPasswordParserRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'password_manager.mojom.CSVPasswordParser',
    'context');
  return remote.$;
};

// ParamsSpec for ParseCSV
password_manager.mojom.mojom.CSVPasswordParser_ParseCSV_ParamsSpec = {
  $: {
    structSpec: {
      name: 'password_manager.mojom.CSVPasswordParser.ParseCSV_Params',
      packedSize: 16,
      fields: [
        { name: 'raw_csv', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

password_manager.mojom.mojom.CSVPasswordParser_ParseCSV_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'password_manager.mojom.CSVPasswordParser.ParseCSV_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'sequence', packedOffset: 0, packedBitOffset: 0, type: password_manager.mojom.CSVPasswordSequenceSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
password_manager.mojom.mojom.CSVPasswordParserPtr = password_manager.mojom.mojom.CSVPasswordParserRemote;
password_manager.mojom.mojom.CSVPasswordParserRequest = password_manager.mojom.mojom.CSVPasswordParserPendingReceiver;

