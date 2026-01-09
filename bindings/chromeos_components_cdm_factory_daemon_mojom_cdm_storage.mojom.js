// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/cdm_factory_daemon/mojom/cdm_storage.mojom
// Module: chromeos.cdm.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.cdm = chromeos.cdm || {};
chromeos.cdm.mojom = chromeos.cdm.mojom || {};


// Interface: CdmStorage
chromeos.cdm.mojom.CdmStorage = {};

chromeos.cdm.mojom.CdmStoragePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.cdm.mojom.CdmStorageRemote = class {
  static get $interfaceName() {
    return 'chromeos.cdm.mojom.CdmStorage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.cdm.mojom.CdmStoragePendingReceiver,
      handle);
    this.$ = new chromeos.cdm.mojom.CdmStorageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.cdm.mojom.CdmStorageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  read(file_name) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.cdm.mojom.CdmStorage_Read_ParamsSpec,
      chromeos.cdm.mojom.CdmStorage_Read_ResponseParamsSpec,
      [file_name]);
  }

  write(file_name, data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.cdm.mojom.CdmStorage_Write_ParamsSpec,
      chromeos.cdm.mojom.CdmStorage_Write_ResponseParamsSpec,
      [file_name, data]);
  }

  exists(file_name) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.cdm.mojom.CdmStorage_Exists_ParamsSpec,
      chromeos.cdm.mojom.CdmStorage_Exists_ResponseParamsSpec,
      [file_name]);
  }

  getSize(file_name) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.cdm.mojom.CdmStorage_GetSize_ParamsSpec,
      chromeos.cdm.mojom.CdmStorage_GetSize_ResponseParamsSpec,
      [file_name]);
  }

  remove(file_name) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromeos.cdm.mojom.CdmStorage_Remove_ParamsSpec,
      chromeos.cdm.mojom.CdmStorage_Remove_ResponseParamsSpec,
      [file_name]);
  }

};

chromeos.cdm.mojom.CdmStorage.getRemote = function() {
  let remote = new chromeos.cdm.mojom.CdmStorageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cdm.mojom.CdmStorage',
    'context');
  return remote.$;
};

// ParamsSpec for Read
chromeos.cdm.mojom.CdmStorage_Read_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.CdmStorage.Read_Params',
      packedSize: 16,
      fields: [
        { name: 'file_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.cdm.mojom.CdmStorage_Read_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Write
chromeos.cdm.mojom.CdmStorage_Write_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.CdmStorage.Write_Params',
      packedSize: 24,
      fields: [
        { name: 'file_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

chromeos.cdm.mojom.CdmStorage_Write_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Exists
chromeos.cdm.mojom.CdmStorage_Exists_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.CdmStorage.Exists_Params',
      packedSize: 16,
      fields: [
        { name: 'file_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.cdm.mojom.CdmStorage_Exists_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetSize
chromeos.cdm.mojom.CdmStorage_GetSize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.CdmStorage.GetSize_Params',
      packedSize: 16,
      fields: [
        { name: 'file_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.cdm.mojom.CdmStorage_GetSize_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Remove
chromeos.cdm.mojom.CdmStorage_Remove_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.CdmStorage.Remove_Params',
      packedSize: 16,
      fields: [
        { name: 'file_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.cdm.mojom.CdmStorage_Remove_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromeos.cdm.mojom.CdmStoragePtr = chromeos.cdm.mojom.CdmStorageRemote;
chromeos.cdm.mojom.CdmStorageRequest = chromeos.cdm.mojom.CdmStoragePendingReceiver;

