// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/trash_service/public/mojom/trash_service.mojom
// Module: ash.trash_service.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.trash_service = ash.trash_service || {};
ash.trash_service.mojom = ash.trash_service.mojom || {};


// Interface: TrashService
ash.trash_service.mojom.TrashService = {};

ash.trash_service.mojom.TrashServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.trash_service.mojom.TrashServiceRemote = class {
  static get $interfaceName() {
    return 'ash.trash_service.mojom.TrashService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.trash_service.mojom.TrashServicePendingReceiver,
      handle);
    this.$ = new ash.trash_service.mojom.TrashServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.trash_service.mojom.TrashServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  parseTrashInfoFile(trash_info_file) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.trash_service.mojom.TrashService_ParseTrashInfoFile_ParamsSpec,
      ash.trash_service.mojom.TrashService_ParseTrashInfoFile_ResponseParamsSpec,
      [trash_info_file]);
  }

};

ash.trash_service.mojom.TrashService.getRemote = function() {
  let remote = new ash.trash_service.mojom.TrashServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.trash_service.mojom.TrashService',
    'context');
  return remote.$;
};

// ParamsSpec for ParseTrashInfoFile
ash.trash_service.mojom.TrashService_ParseTrashInfoFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.trash_service.mojom.TrashService.ParseTrashInfoFile_Params',
      packedSize: 16,
      fields: [
        { name: 'trash_info_file', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyFileSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.trash_service.mojom.TrashService_ParseTrashInfoFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.trash_service.mojom.TrashService.ParseTrashInfoFile_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FileErrorSpec, nullable: false, minVersion: 0 },
        { name: 'restore_path', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'deletion_date', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
ash.trash_service.mojom.TrashServicePtr = ash.trash_service.mojom.TrashServiceRemote;
ash.trash_service.mojom.TrashServiceRequest = ash.trash_service.mojom.TrashServicePendingReceiver;

