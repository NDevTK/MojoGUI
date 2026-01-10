// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/cdm_factory_daemon/mojom/output_protection.mojom
// Module: chromeos.cdm.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.cdm = chromeos.cdm || {};
chromeos.cdm.mojom = chromeos.cdm.mojom || {};


// Enum: ProtectionType
chromeos.cdm.mojom.ProtectionType = {
  NONE: 0,
  HDCP_TYPE_0: 1,
  HDCP_TYPE_1: 2,
};
chromeos.cdm.mojom.ProtectionTypeSpec = { $: mojo.internal.Enum() };

// Enum: LinkType
chromeos.cdm.mojom.LinkType = {
  NONE: 0,
  UNKNOWN: 1,
  INTERNAL: 2,
  VGA: 3,
  HDMI: 4,
  DVI: 5,
  DISPLAYPORT: 6,
  NETWORK: 7,
};
chromeos.cdm.mojom.LinkTypeSpec = { $: mojo.internal.Enum() };

// Interface: OutputProtection
chromeos.cdm.mojom.OutputProtection = {};

chromeos.cdm.mojom.OutputProtection_QueryStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.OutputProtection_QueryStatus_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chromeos.cdm.mojom.OutputProtection_EnableProtection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.OutputProtection_EnableProtection_Params',
      packedSize: 16,
      fields: [
        { name: 'desired_protection', packedOffset: 0, packedBitOffset: 0, type: chromeos.cdm.mojom.ProtectionTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.cdm.mojom.OutputProtectionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.cdm.mojom.OutputProtectionRemote = class {
  static get $interfaceName() {
    return 'chromeos.cdm.mojom.OutputProtection';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.cdm.mojom.OutputProtectionPendingReceiver,
      handle);
    this.$ = new chromeos.cdm.mojom.OutputProtectionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.cdm.mojom.OutputProtectionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  queryStatus() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.cdm.mojom.OutputProtection_QueryStatus_ParamsSpec,
      chromeos.cdm.mojom.OutputProtection_QueryStatus_ResponseParamsSpec,
      []);
  }

  enableProtection(desired_protection) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.cdm.mojom.OutputProtection_EnableProtection_ParamsSpec,
      chromeos.cdm.mojom.OutputProtection_EnableProtection_ResponseParamsSpec,
      [desired_protection]);
  }

};

chromeos.cdm.mojom.OutputProtection.getRemote = function() {
  let remote = new chromeos.cdm.mojom.OutputProtectionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cdm.mojom.OutputProtection',
    'context');
  return remote.$;
};

// ParamsSpec for QueryStatus
chromeos.cdm.mojom.OutputProtection_QueryStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.OutputProtection.QueryStatus_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chromeos.cdm.mojom.OutputProtection_QueryStatus_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.OutputProtection.QueryStatus_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'link_mask', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'protection', packedOffset: 4, packedBitOffset: 0, type: chromeos.cdm.mojom.ProtectionTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for EnableProtection
chromeos.cdm.mojom.OutputProtection_EnableProtection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.OutputProtection.EnableProtection_Params',
      packedSize: 16,
      fields: [
        { name: 'desired_protection', packedOffset: 0, packedBitOffset: 0, type: chromeos.cdm.mojom.ProtectionTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.cdm.mojom.OutputProtection_EnableProtection_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.OutputProtection.EnableProtection_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromeos.cdm.mojom.OutputProtectionPtr = chromeos.cdm.mojom.OutputProtectionRemote;
chromeos.cdm.mojom.OutputProtectionRequest = chromeos.cdm.mojom.OutputProtectionPendingReceiver;

