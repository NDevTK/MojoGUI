// Auto-generated MojoJS binding
// Source: chromium_src/components/services/quarantine/public/mojom/quarantine.mojom
// Module: quarantine.mojom

'use strict';

// Module namespace
var quarantine = quarantine || {};
quarantine.mojom = quarantine.mojom || {};
var mojo_base = mojo_base || {};
var sandbox = sandbox || {};
var url = url || {};

quarantine.mojom.QuarantineFileResultSpec = { $: mojo.internal.Enum() };
quarantine.mojom.Quarantine = {};
quarantine.mojom.Quarantine.$interfaceName = 'quarantine.mojom.Quarantine';
quarantine.mojom.Quarantine_QuarantineFile_ParamsSpec = { $: {} };
quarantine.mojom.Quarantine_QuarantineFile_ResponseParamsSpec = { $: {} };

// Enum: QuarantineFileResult
quarantine.mojom.QuarantineFileResult = {
  OK: 0,
  ACCESS_DENIED: 1,
  BLOCKED_BY_POLICY: 2,
  ANNOTATION_FAILED: 3,
  FILE_MISSING: 4,
  SECURITY_CHECK_FAILED: 5,
  VIRUS_INFECTED: 6,
};

// Interface: Quarantine
mojo.internal.Struct(
    quarantine.mojom.Quarantine_QuarantineFile_ParamsSpec, 'quarantine.mojom.Quarantine_QuarantineFile_Params', [
      mojo.internal.StructField('full_path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('referrer_url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('request_initiator', 24, 0, url.mojom.OriginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('client_guid', 32, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    quarantine.mojom.Quarantine_QuarantineFile_ResponseParamsSpec, 'quarantine.mojom.Quarantine_QuarantineFile_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, quarantine.mojom.QuarantineFileResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

quarantine.mojom.QuarantinePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

quarantine.mojom.QuarantineRemote = class {
  static get $interfaceName() {
    return 'quarantine.mojom.Quarantine';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      quarantine.mojom.QuarantinePendingReceiver,
      handle);
    this.$ = new quarantine.mojom.QuarantineRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

quarantine.mojom.QuarantineRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  quarantineFile(full_path, source_url, referrer_url, request_initiator, client_guid) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      quarantine.mojom.Quarantine_QuarantineFile_ParamsSpec,
      quarantine.mojom.Quarantine_QuarantineFile_ResponseParamsSpec,
      [full_path, source_url, referrer_url, request_initiator, client_guid],
      false);
  }

};

quarantine.mojom.Quarantine.getRemote = function() {
  let remote = new quarantine.mojom.QuarantineRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'quarantine.mojom.Quarantine',
    'context');
  return remote.$;
};

quarantine.mojom.QuarantineReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = quarantine.mojom.Quarantine_QuarantineFile_ParamsSpec.$.decode(message.payload);
          const result = this.impl.quarantineFile(params.full_path, params.source_url, params.referrer_url, params.request_initiator, params.client_guid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, quarantine.mojom.Quarantine_QuarantineFile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

quarantine.mojom.QuarantineReceiver = quarantine.mojom.QuarantineReceiver;

quarantine.mojom.QuarantinePtr = quarantine.mojom.QuarantineRemote;
quarantine.mojom.QuarantineRequest = quarantine.mojom.QuarantinePendingReceiver;

