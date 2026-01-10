// Auto-generated MojoJS binding
// Source: chromium_src/components/password_manager/services/csv_password/public/mojom/csv_password_parser.mojom
// Module: password_manager.mojom

'use strict';

// Module namespace
var password_manager = password_manager || {};
password_manager.mojom = password_manager.mojom || {};
var sandbox = sandbox || {};
var url = url || {};

password_manager.mojom.StatusSpec = { $: mojo.internal.Enum() };
password_manager.mojom.CSVPasswordSequenceSpec = { $: {} };
password_manager.mojom.CSVPasswordSpec = { $: {} };
password_manager.mojom.CSVPasswordParser = {};
password_manager.mojom.CSVPasswordParser.$interfaceName = 'password_manager.mojom.CSVPasswordParser';
password_manager.mojom.CSVPasswordParser_ParseCSV_ParamsSpec = { $: {} };
password_manager.mojom.CSVPasswordParser_ParseCSV_ResponseParamsSpec = { $: {} };

// Enum: Status
password_manager.mojom.Status = {
  kOK: 0,
  kSyntaxError: 1,
  kSemanticError: 2,
};

// Struct: CSVPasswordSequence
mojo.internal.Struct(
    password_manager.mojom.CSVPasswordSequenceSpec, 'password_manager.mojom.CSVPasswordSequence', [
      mojo.internal.StructField('csv_passwords', 0, 0, mojo.internal.Array(password_manager.mojom.CSVPasswordSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: CSVPassword
mojo.internal.Struct(
    password_manager.mojom.CSVPasswordSpec, 'password_manager.mojom.CSVPassword', [
      mojo.internal.StructField('kOK', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: CSVPasswordParser
mojo.internal.Struct(
    password_manager.mojom.CSVPasswordParser_ParseCSV_ParamsSpec, 'password_manager.mojom.CSVPasswordParser_ParseCSV_Params', [
      mojo.internal.StructField('raw_csv', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    password_manager.mojom.CSVPasswordParser_ParseCSV_ResponseParamsSpec, 'password_manager.mojom.CSVPasswordParser_ParseCSV_ResponseParams', [
      mojo.internal.StructField('sequence', 0, 0, password_manager.mojom.CSVPasswordSequenceSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

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
      [raw_csv],
      false);
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

password_manager.mojom.CSVPasswordParserReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = password_manager.mojom.CSVPasswordParser_ParseCSV_ParamsSpec.$.decode(message.payload);
          const result = this.impl.parseCSV(params.raw_csv);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, password_manager.mojom.CSVPasswordParser_ParseCSV_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

password_manager.mojom.CSVPasswordParserReceiver = password_manager.mojom.CSVPasswordParserReceiver;

password_manager.mojom.CSVPasswordParserPtr = password_manager.mojom.CSVPasswordParserRemote;
password_manager.mojom.CSVPasswordParserRequest = password_manager.mojom.CSVPasswordParserPendingReceiver;

