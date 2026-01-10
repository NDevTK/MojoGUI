// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/output_protection.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Enum: ProtectionType
media.mojom.ProtectionType = {
  NONE: 0,
  HDCP: 1,
};
media.mojom.ProtectionTypeSpec = { $: mojo.internal.Enum() };

// Enum: LinkType
media.mojom.LinkType = {
  NONE: 0,
  UNKNOWN: 1,
  INTERNAL: 2,
  VGA: 3,
  HDMI: 4,
  DVI: 5,
  DISPLAYPORT: 6,
  NETWORK: 7,
};
media.mojom.LinkTypeSpec = { $: mojo.internal.Enum() };

// Interface: OutputProtection
media.mojom.OutputProtection = {};

media.mojom.OutputProtectionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.OutputProtectionRemote = class {
  static get $interfaceName() {
    return 'media.mojom.OutputProtection';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.OutputProtectionPendingReceiver,
      handle);
    this.$ = new media.mojom.OutputProtectionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.OutputProtectionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  queryStatus() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.OutputProtection_QueryStatus_ParamsSpec,
      media.mojom.OutputProtection_QueryStatus_ResponseParamsSpec,
      []);
  }

  enableProtection(desired_protection_mask) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.OutputProtection_EnableProtection_ParamsSpec,
      media.mojom.OutputProtection_EnableProtection_ResponseParamsSpec,
      [desired_protection_mask]);
  }

};

media.mojom.OutputProtection.getRemote = function() {
  let remote = new media.mojom.OutputProtectionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.OutputProtection',
    'context');
  return remote.$;
};

// ParamsSpec for QueryStatus
media.mojom.OutputProtection_QueryStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.OutputProtection.QueryStatus_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media.mojom.OutputProtection_QueryStatus_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.OutputProtection.QueryStatus_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'link_mask', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'protection_mask', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for EnableProtection
media.mojom.OutputProtection_EnableProtection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.OutputProtection.EnableProtection_Params',
      packedSize: 16,
      fields: [
        { name: 'desired_protection_mask', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.OutputProtection_EnableProtection_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.OutputProtection.EnableProtection_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.OutputProtectionPtr = media.mojom.OutputProtectionRemote;
media.mojom.OutputProtectionRequest = media.mojom.OutputProtectionPendingReceiver;

