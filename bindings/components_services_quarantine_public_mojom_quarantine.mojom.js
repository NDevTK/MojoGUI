// Auto-generated MojoJS binding
// Source: chromium_src/components/services/quarantine/public/mojom/quarantine.mojom
// Module: quarantine.mojom

'use strict';

// Module namespace
var quarantine = quarantine || {};
quarantine.mojom = quarantine.mojom || {};
var url = url || {};
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
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'quarantine.mojom.Quarantine',
    'context');
  return remote.$;
};

quarantine.mojom.QuarantinePtr = quarantine.mojom.QuarantineRemote;
quarantine.mojom.QuarantineRequest = quarantine.mojom.QuarantinePendingReceiver;

