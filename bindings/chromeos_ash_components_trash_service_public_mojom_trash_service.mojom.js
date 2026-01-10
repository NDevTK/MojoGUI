// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/trash_service/public/mojom/trash_service.mojom
// Module: ash.trash_service.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.trash_service = ash.trash_service || {};
ash.trash_service.mojom = ash.trash_service.mojom || {};
var mojo_base = mojo_base || {};
var sandbox = sandbox || {};

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
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.trash_service.mojom.TrashService',
    'context');
  return remote.$;
};

ash.trash_service.mojom.TrashServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = ash.trash_service.mojom.TrashService_ParseTrashInfoFile_ParamsSpec.$.decode(message.payload);
          const result = this.impl.parseTrashInfoFile(params.trash_info_file);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.trash_service.mojom.TrashService_ParseTrashInfoFile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      }
    }});
  }
};

ash.trash_service.mojom.TrashServiceReceiver = ash.trash_service.mojom.TrashServiceReceiver;

ash.trash_service.mojom.TrashServicePtr = ash.trash_service.mojom.TrashServiceRemote;
ash.trash_service.mojom.TrashServiceRequest = ash.trash_service.mojom.TrashServicePendingReceiver;

