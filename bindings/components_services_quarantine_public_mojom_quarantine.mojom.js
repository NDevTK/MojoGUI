// Auto-generated MojoJS binding
// Source: chromium_src/components/services/quarantine/public/mojom/quarantine.mojom
// Module: quarantine.mojom

'use strict';

// Module namespace
var quarantine = quarantine || {};
quarantine.mojom = quarantine.mojom || {};
var url = url || {};
var url = url || {};


// Enum: QuarantineFileResult
quarantine.mojom.mojom.QuarantineFileResult = {
  OK: 0,
  ACCESS_DENIED: 1,
  BLOCKED_BY_POLICY: 2,
  ANNOTATION_FAILED: 3,
  FILE_MISSING: 4,
  SECURITY_CHECK_FAILED: 5,
  VIRUS_INFECTED: 6,
};
quarantine.mojom.mojom.QuarantineFileResultSpec = { $: mojo.internal.Enum() };

// Interface: Quarantine
quarantine.mojom.mojom.Quarantine = {};

quarantine.mojom.mojom.QuarantinePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

quarantine.mojom.mojom.QuarantineRemote = class {
  static get $interfaceName() {
    return 'quarantine.mojom.Quarantine';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      quarantine.mojom.mojom.QuarantinePendingReceiver,
      handle);
    this.$ = new quarantine.mojom.mojom.QuarantineRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

quarantine.mojom.mojom.QuarantineRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  quarantineFile(full_path, source_url, referrer_url, request_initiator, client_guid) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      quarantine.mojom.mojom.Quarantine_QuarantineFile_ParamsSpec,
      quarantine.mojom.mojom.Quarantine_QuarantineFile_ResponseParamsSpec,
      [full_path, source_url, referrer_url, request_initiator, client_guid]);
  }

};

quarantine.mojom.mojom.Quarantine.getRemote = function() {
  let remote = new quarantine.mojom.mojom.QuarantineRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'quarantine.mojom.Quarantine',
    'context');
  return remote.$;
};

// ParamsSpec for QuarantineFile
quarantine.mojom.mojom.Quarantine_QuarantineFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'quarantine.mojom.Quarantine.QuarantineFile_Params',
      packedSize: 48,
      fields: [
        { name: 'full_path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'source_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'referrer_url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'request_initiator', packedOffset: 24, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: true, minVersion: 0 },
        { name: 'client_guid', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

quarantine.mojom.mojom.Quarantine_QuarantineFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'quarantine.mojom.Quarantine.QuarantineFile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: quarantine.mojom.QuarantineFileResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
quarantine.mojom.mojom.QuarantinePtr = quarantine.mojom.mojom.QuarantineRemote;
quarantine.mojom.mojom.QuarantineRequest = quarantine.mojom.mojom.QuarantinePendingReceiver;

