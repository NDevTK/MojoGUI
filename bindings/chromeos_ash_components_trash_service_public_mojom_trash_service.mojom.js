// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/trash_service/public/mojom/trash_service.mojom
// Module: ash.trash_service.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  parseTrashInfoFile(trash_info_file) {
    return this.$.parseTrashInfoFile(trash_info_file);
  }
};

ash.trash_service.mojom.TrashServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TrashService', [
      { explicit: null },
    ]);
  }

  parseTrashInfoFile(trash_info_file) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TrashService', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.trash_service.mojom.TrashService_ParseTrashInfoFile_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.trash_service.mojom.TrashService_ParseTrashInfoFile_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    });
  }
};

ash.trash_service.mojom.TrashServiceReceiver = ash.trash_service.mojom.TrashServiceReceiver;

ash.trash_service.mojom.TrashServicePtr = ash.trash_service.mojom.TrashServiceRemote;
ash.trash_service.mojom.TrashServiceRequest = ash.trash_service.mojom.TrashServicePendingReceiver;

