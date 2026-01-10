// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/cdm_factory_daemon/mojom/browser_cdm_factory.mojom
// Module: chromeos.cdm.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.cdm = chromeos.cdm || {};
chromeos.cdm.cdm.mojom = chromeos.cdm.cdm.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Interface: BrowserCdmFactory
chromeos.cdm.cdm.mojom.mojom.BrowserCdmFactory = {};

chromeos.cdm.cdm.mojom.mojom.BrowserCdmFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.cdm.cdm.mojom.mojom.BrowserCdmFactoryRemote = class {
  static get $interfaceName() {
    return 'chromeos.cdm.mojom.BrowserCdmFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.cdm.cdm.mojom.mojom.BrowserCdmFactoryPendingReceiver,
      handle);
    this.$ = new chromeos.cdm.cdm.mojom.mojom.BrowserCdmFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.cdm.cdm.mojom.mojom.BrowserCdmFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createFactory(key_system) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.cdm.cdm.mojom.mojom.BrowserCdmFactory_CreateFactory_ParamsSpec,
      chromeos.cdm.cdm.mojom.mojom.BrowserCdmFactory_CreateFactory_ResponseParamsSpec,
      [key_system]);
  }

  getOutputProtection(output_protection) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.cdm.cdm.mojom.mojom.BrowserCdmFactory_GetOutputProtection_ParamsSpec,
      null,
      [output_protection]);
  }

  getHwConfigData() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.cdm.cdm.mojom.mojom.BrowserCdmFactory_GetHwConfigData_ParamsSpec,
      chromeos.cdm.cdm.mojom.mojom.BrowserCdmFactory_GetHwConfigData_ResponseParamsSpec,
      []);
  }

  getScreenResolutions() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.cdm.cdm.mojom.mojom.BrowserCdmFactory_GetScreenResolutions_ParamsSpec,
      chromeos.cdm.cdm.mojom.mojom.BrowserCdmFactory_GetScreenResolutions_ResponseParamsSpec,
      []);
  }

  getAndroidHwKeyData(key_id, hw_identifier) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromeos.cdm.cdm.mojom.mojom.BrowserCdmFactory_GetAndroidHwKeyData_ParamsSpec,
      chromeos.cdm.cdm.mojom.mojom.BrowserCdmFactory_GetAndroidHwKeyData_ResponseParamsSpec,
      [key_id, hw_identifier]);
  }

  allocateSecureBuffer(size) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chromeos.cdm.cdm.mojom.mojom.BrowserCdmFactory_AllocateSecureBuffer_ParamsSpec,
      chromeos.cdm.cdm.mojom.mojom.BrowserCdmFactory_AllocateSecureBuffer_ResponseParamsSpec,
      [size]);
  }

  parseEncryptedSliceHeader(secure_handle, offset, stream_data) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      chromeos.cdm.cdm.mojom.mojom.BrowserCdmFactory_ParseEncryptedSliceHeader_ParamsSpec,
      chromeos.cdm.cdm.mojom.mojom.BrowserCdmFactory_ParseEncryptedSliceHeader_ResponseParamsSpec,
      [secure_handle, offset, stream_data]);
  }

};

chromeos.cdm.cdm.mojom.mojom.BrowserCdmFactory.getRemote = function() {
  let remote = new chromeos.cdm.cdm.mojom.mojom.BrowserCdmFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cdm.mojom.BrowserCdmFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateFactory
chromeos.cdm.cdm.mojom.mojom.BrowserCdmFactory_CreateFactory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.BrowserCdmFactory.CreateFactory_Params',
      packedSize: 16,
      fields: [
        { name: 'key_system', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.cdm.cdm.mojom.mojom.BrowserCdmFactory_CreateFactory_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.BrowserCdmFactory.CreateFactory_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'factory', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chromeos.cdm.mojom.CdmFactoryRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetOutputProtection
chromeos.cdm.cdm.mojom.mojom.BrowserCdmFactory_GetOutputProtection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.BrowserCdmFactory.GetOutputProtection_Params',
      packedSize: 16,
      fields: [
        { name: 'output_protection', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(chromeos.cdm.mojom.OutputProtectionRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetHwConfigData
chromeos.cdm.cdm.mojom.mojom.BrowserCdmFactory_GetHwConfigData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.BrowserCdmFactory.GetHwConfigData_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chromeos.cdm.cdm.mojom.mojom.BrowserCdmFactory_GetHwConfigData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.BrowserCdmFactory.GetHwConfigData_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'config_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetScreenResolutions
chromeos.cdm.cdm.mojom.mojom.BrowserCdmFactory_GetScreenResolutions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.BrowserCdmFactory.GetScreenResolutions_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chromeos.cdm.cdm.mojom.mojom.BrowserCdmFactory_GetScreenResolutions_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.BrowserCdmFactory.GetScreenResolutions_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'resolutions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(gfx.mojom.SizeSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetAndroidHwKeyData
chromeos.cdm.cdm.mojom.mojom.BrowserCdmFactory_GetAndroidHwKeyData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.BrowserCdmFactory.GetAndroidHwKeyData_Params',
      packedSize: 24,
      fields: [
        { name: 'key_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'hw_identifier', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

chromeos.cdm.cdm.mojom.mojom.BrowserCdmFactory_GetAndroidHwKeyData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.BrowserCdmFactory.GetAndroidHwKeyData_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: chromeos.cdm.mojom.DecryptStatusSpec, nullable: false, minVersion: 0 },
        { name: 'key_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for AllocateSecureBuffer
chromeos.cdm.cdm.mojom.mojom.BrowserCdmFactory_AllocateSecureBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.BrowserCdmFactory.AllocateSecureBuffer_Params',
      packedSize: 16,
      fields: [
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.cdm.cdm.mojom.mojom.BrowserCdmFactory_AllocateSecureBuffer_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.BrowserCdmFactory.AllocateSecureBuffer_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'fd', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ParseEncryptedSliceHeader
chromeos.cdm.cdm.mojom.mojom.BrowserCdmFactory_ParseEncryptedSliceHeader_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.BrowserCdmFactory.ParseEncryptedSliceHeader_Params',
      packedSize: 32,
      fields: [
        { name: 'secure_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'offset', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'stream_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

chromeos.cdm.cdm.mojom.mojom.BrowserCdmFactory_ParseEncryptedSliceHeader_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.BrowserCdmFactory.ParseEncryptedSliceHeader_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'slice_header', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
chromeos.cdm.cdm.mojom.mojom.BrowserCdmFactoryPtr = chromeos.cdm.cdm.mojom.mojom.BrowserCdmFactoryRemote;
chromeos.cdm.cdm.mojom.mojom.BrowserCdmFactoryRequest = chromeos.cdm.cdm.mojom.mojom.BrowserCdmFactoryPendingReceiver;

