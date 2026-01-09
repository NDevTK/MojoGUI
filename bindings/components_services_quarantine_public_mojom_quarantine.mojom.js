// Auto-generated MojoJS binding
// Source: chromium_src/components/services/quarantine/public/mojom/quarantine.mojom
// Module: quarantine.mojom

'use strict';

// Module namespace
var quarantine = quarantine || {};
quarantine.mojom = quarantine.mojom || {};


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
quarantine.mojom.Quarantine = {};

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
      [full_path, source_url, referrer_url, request_initiator, client_guid]);
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

// ParamsSpec for QuarantineFile
quarantine.mojom.Quarantine_QuarantineFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'quarantine.mojom.Quarantine.QuarantineFile_Params',
      packedSize: 48,
      fields: [
        { name: 'full_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'source_url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'referrer_url', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'request_initiator', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'client_guid', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

quarantine.mojom.Quarantine_QuarantineFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'quarantine.mojom.Quarantine.QuarantineFile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
quarantine.mojom.QuarantinePtr = quarantine.mojom.QuarantineRemote;
quarantine.mojom.QuarantineRequest = quarantine.mojom.QuarantinePendingReceiver;

