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

// Interface: OutputProtection
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

};

chromeos.cdm.mojom.OutputProtection.getRemote = function() {
  let remote = new chromeos.cdm.mojom.OutputProtectionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cdm.mojom.OutputProtection',
    'context');
  return remote.$;
}};

// Legacy compatibility
chromeos.cdm.mojom.OutputProtectionPtr = chromeos.cdm.mojom.OutputProtectionRemote;
chromeos.cdm.mojom.OutputProtectionRequest = chromeos.cdm.mojom.OutputProtectionPendingReceiver;

