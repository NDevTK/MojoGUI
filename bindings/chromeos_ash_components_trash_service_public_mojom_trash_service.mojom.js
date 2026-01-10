// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/trash_service/public/mojom/trash_service.mojom
// Module: ash.trash_service.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.trash_service = ash.trash_service || {};
ash.trash_service.mojom = ash.trash_service.mojom || {};

ash.trash_service.mojom.TrashService = {};
ash.trash_service.mojom.TrashService.$interfaceName = 'ash.trash_service.mojom.TrashService';
ash.trash_service.mojom.TrashService_ParseTrashInfoFile_ParamsSpec = { $: {} };
ash.trash_service.mojom.TrashService_ParseTrashInfoFile_ResponseParamsSpec = { $: {} };

// Interface: TrashService
mojo.internal.Struct(
    ash.trash_service.mojom.TrashService_ParseTrashInfoFile_ParamsSpec, 'ash.trash_service.mojom.TrashService_ParseTrashInfoFile_Params', [
      mojo.internal.StructField('trash_info_file', 0, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.trash_service.mojom.TrashService_ParseTrashInfoFile_ResponseParamsSpec, 'ash.trash_service.mojom.TrashService_ParseTrashInfoFile_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('restore_path', 8, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('deletion_date', 16, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

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
      [trash_info_file],
      false);
  }

};

ash.trash_service.mojom.TrashService.getRemote = function() {
  let remote = new ash.trash_service.mojom.TrashServiceRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'ash.trash_service.mojom.TrashService',
    'context');
  return remote.$;
};

ash.trash_service.mojom.TrashServicePtr = ash.trash_service.mojom.TrashServiceRemote;
ash.trash_service.mojom.TrashServiceRequest = ash.trash_service.mojom.TrashServicePendingReceiver;

