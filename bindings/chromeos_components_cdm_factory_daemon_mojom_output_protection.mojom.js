// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/cdm_factory_daemon/mojom/output_protection.mojom
// Module: chromeos.cdm.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.cdm = chromeos.cdm || {};
chromeos.cdm.cdm.mojom = chromeos.cdm.cdm.mojom || {};


// Enum: ProtectionType
chromeos.cdm.cdm.mojom.mojom.ProtectionType = {
  NONE: 0,
  HDCP_TYPE_0: 1,
  HDCP_TYPE_1: 2,
};
chromeos.cdm.cdm.mojom.mojom.ProtectionTypeSpec = { $: mojo.internal.Enum() };

// Enum: LinkType
chromeos.cdm.cdm.mojom.mojom.LinkType = {
  NONE: 0,
  UNKNOWN: 1,
  INTERNAL: 2,
  VGA: 3,
  HDMI: 4,
  DVI: 5,
  DISPLAYPORT: 6,
  NETWORK: 7,
};
chromeos.cdm.cdm.mojom.mojom.LinkTypeSpec = { $: mojo.internal.Enum() };

// Interface: OutputProtection
chromeos.cdm.cdm.mojom.mojom.OutputProtection = {};

chromeos.cdm.cdm.mojom.mojom.OutputProtectionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.cdm.cdm.mojom.mojom.OutputProtectionRemote = class {
  static get $interfaceName() {
    return 'chromeos.cdm.mojom.OutputProtection';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.cdm.cdm.mojom.mojom.OutputProtectionPendingReceiver,
      handle);
    this.$ = new chromeos.cdm.cdm.mojom.mojom.OutputProtectionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.cdm.cdm.mojom.mojom.OutputProtectionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  queryStatus() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.cdm.cdm.mojom.mojom.OutputProtection_QueryStatus_ParamsSpec,
      chromeos.cdm.cdm.mojom.mojom.OutputProtection_QueryStatus_ResponseParamsSpec,
      []);
  }

  enableProtection(desired_protection) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.cdm.cdm.mojom.mojom.OutputProtection_EnableProtection_ParamsSpec,
      chromeos.cdm.cdm.mojom.mojom.OutputProtection_EnableProtection_ResponseParamsSpec,
      [desired_protection]);
  }

};

chromeos.cdm.cdm.mojom.mojom.OutputProtection.getRemote = function() {
  let remote = new chromeos.cdm.cdm.mojom.mojom.OutputProtectionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cdm.mojom.OutputProtection',
    'context');
  return remote.$;
};

// ParamsSpec for QueryStatus
chromeos.cdm.cdm.mojom.mojom.OutputProtection_QueryStatus_ParamsSpec = {
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

chromeos.cdm.cdm.mojom.mojom.OutputProtection_QueryStatus_ResponseParamsSpec = {
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
chromeos.cdm.cdm.mojom.mojom.OutputProtection_EnableProtection_ParamsSpec = {
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

chromeos.cdm.cdm.mojom.mojom.OutputProtection_EnableProtection_ResponseParamsSpec = {
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
chromeos.cdm.cdm.mojom.mojom.OutputProtectionPtr = chromeos.cdm.cdm.mojom.mojom.OutputProtectionRemote;
chromeos.cdm.cdm.mojom.mojom.OutputProtectionRequest = chromeos.cdm.cdm.mojom.mojom.OutputProtectionPendingReceiver;

