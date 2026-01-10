// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/cdm_factory_daemon/mojom/cdm_storage.mojom
// Module: chromeos.cdm.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.cdm = chromeos.cdm || {};
chromeos.cdm.mojom = chromeos.cdm.mojom || {};

chromeos.cdm.mojom.CdmStorage = {};
chromeos.cdm.mojom.CdmStorage.$interfaceName = 'chromeos.cdm.mojom.CdmStorage';
chromeos.cdm.mojom.CdmStorage_Read_ParamsSpec = { $: {} };
chromeos.cdm.mojom.CdmStorage_Read_ResponseParamsSpec = { $: {} };
chromeos.cdm.mojom.CdmStorage_Write_ParamsSpec = { $: {} };
chromeos.cdm.mojom.CdmStorage_Write_ResponseParamsSpec = { $: {} };
chromeos.cdm.mojom.CdmStorage_Exists_ParamsSpec = { $: {} };
chromeos.cdm.mojom.CdmStorage_Exists_ResponseParamsSpec = { $: {} };
chromeos.cdm.mojom.CdmStorage_GetSize_ParamsSpec = { $: {} };
chromeos.cdm.mojom.CdmStorage_GetSize_ResponseParamsSpec = { $: {} };
chromeos.cdm.mojom.CdmStorage_Remove_ParamsSpec = { $: {} };
chromeos.cdm.mojom.CdmStorage_Remove_ResponseParamsSpec = { $: {} };

// Interface: CdmStorage
mojo.internal.Struct(
    chromeos.cdm.mojom.CdmStorage_Read_ParamsSpec, 'chromeos.cdm.mojom.CdmStorage_Read_Params', [
      mojo.internal.StructField('file_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.CdmStorage_Read_ResponseParamsSpec, 'chromeos.cdm.mojom.CdmStorage_Read_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.CdmStorage_Write_ParamsSpec, 'chromeos.cdm.mojom.CdmStorage_Write_Params', [
      mojo.internal.StructField('file_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.CdmStorage_Write_ResponseParamsSpec, 'chromeos.cdm.mojom.CdmStorage_Write_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.CdmStorage_Exists_ParamsSpec, 'chromeos.cdm.mojom.CdmStorage_Exists_Params', [
      mojo.internal.StructField('file_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.CdmStorage_Exists_ResponseParamsSpec, 'chromeos.cdm.mojom.CdmStorage_Exists_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.CdmStorage_GetSize_ParamsSpec, 'chromeos.cdm.mojom.CdmStorage_GetSize_Params', [
      mojo.internal.StructField('file_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.CdmStorage_GetSize_ResponseParamsSpec, 'chromeos.cdm.mojom.CdmStorage_GetSize_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('size', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.CdmStorage_Remove_ParamsSpec, 'chromeos.cdm.mojom.CdmStorage_Remove_Params', [
      mojo.internal.StructField('file_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.CdmStorage_Remove_ResponseParamsSpec, 'chromeos.cdm.mojom.CdmStorage_Remove_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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

chromeos.cdm.mojom.CdmStoragePtr = chromeos.cdm.mojom.CdmStorageRemote;
chromeos.cdm.mojom.CdmStorageRequest = chromeos.cdm.mojom.CdmStoragePendingReceiver;

