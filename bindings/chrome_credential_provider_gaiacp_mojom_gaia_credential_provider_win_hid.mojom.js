// Auto-generated MojoJS binding
// Source: chromium_src/chrome/credential_provider/gaiacp/mojom/gaia_credential_provider_win_hid.mojom
// Module: gcpw_hid.mojom

'use strict';

// Module namespace
var gcpw_hid = gcpw_hid || {};
gcpw_hid.mojom = gcpw_hid.mojom || {};


// Interface: GaiaCredentialProviderHidBroker
gcpw_hid.mojom.mojom.GaiaCredentialProviderHidBroker = {};

gcpw_hid.mojom.mojom.GaiaCredentialProviderHidBrokerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

gcpw_hid.mojom.mojom.GaiaCredentialProviderHidBrokerRemote = class {
  static get $interfaceName() {
    return 'gcpw_hid.mojom.GaiaCredentialProviderHidBroker';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      gcpw_hid.mojom.mojom.GaiaCredentialProviderHidBrokerPendingReceiver,
      handle);
    this.$ = new gcpw_hid.mojom.mojom.GaiaCredentialProviderHidBrokerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

gcpw_hid.mojom.mojom.GaiaCredentialProviderHidBrokerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  openDevice(device_path) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      gcpw_hid.mojom.mojom.GaiaCredentialProviderHidBroker_OpenDevice_ParamsSpec,
      gcpw_hid.mojom.mojom.GaiaCredentialProviderHidBroker_OpenDevice_ResponseParamsSpec,
      [device_path]);
  }

};

gcpw_hid.mojom.mojom.GaiaCredentialProviderHidBroker.getRemote = function() {
  let remote = new gcpw_hid.mojom.mojom.GaiaCredentialProviderHidBrokerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'gcpw_hid.mojom.GaiaCredentialProviderHidBroker',
    'context');
  return remote.$;
};

// ParamsSpec for OpenDevice
gcpw_hid.mojom.mojom.GaiaCredentialProviderHidBroker_OpenDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gcpw_hid.mojom.GaiaCredentialProviderHidBroker.OpenDevice_Params',
      packedSize: 16,
      fields: [
        { name: 'device_path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

gcpw_hid.mojom.mojom.GaiaCredentialProviderHidBroker_OpenDevice_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'gcpw_hid.mojom.GaiaCredentialProviderHidBroker.OpenDevice_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'out_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
gcpw_hid.mojom.mojom.GaiaCredentialProviderHidBrokerPtr = gcpw_hid.mojom.mojom.GaiaCredentialProviderHidBrokerRemote;
gcpw_hid.mojom.mojom.GaiaCredentialProviderHidBrokerRequest = gcpw_hid.mojom.mojom.GaiaCredentialProviderHidBrokerPendingReceiver;

