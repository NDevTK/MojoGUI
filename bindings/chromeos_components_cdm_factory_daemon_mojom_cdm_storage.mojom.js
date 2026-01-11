// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/cdm_factory_daemon/mojom/cdm_storage.mojom
// Module: chromeos.cdm.mojom

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
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
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
      mojo.internal.StructField('size', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
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
  read(file_name) {
    return this.$.read(file_name);
  }
  write(file_name, data) {
    return this.$.write(file_name, data);
  }
  exists(file_name) {
    return this.$.exists(file_name);
  }
  getSize(file_name) {
    return this.$.getSize(file_name);
  }
  remove(file_name) {
    return this.$.remove(file_name);
  }
};

chromeos.cdm.mojom.CdmStorageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CdmStorage', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
    ]);
  }

  read(file_name) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromeos.cdm.mojom.CdmStorage_Read_ParamsSpec,
      chromeos.cdm.mojom.CdmStorage_Read_ResponseParamsSpec,
      [file_name],
      false);
  }

  write(file_name, data) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chromeos.cdm.mojom.CdmStorage_Write_ParamsSpec,
      chromeos.cdm.mojom.CdmStorage_Write_ResponseParamsSpec,
      [file_name, data],
      false);
  }

  exists(file_name) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      chromeos.cdm.mojom.CdmStorage_Exists_ParamsSpec,
      chromeos.cdm.mojom.CdmStorage_Exists_ResponseParamsSpec,
      [file_name],
      false);
  }

  getSize(file_name) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      chromeos.cdm.mojom.CdmStorage_GetSize_ParamsSpec,
      chromeos.cdm.mojom.CdmStorage_GetSize_ResponseParamsSpec,
      [file_name],
      false);
  }

  remove(file_name) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      chromeos.cdm.mojom.CdmStorage_Remove_ParamsSpec,
      chromeos.cdm.mojom.CdmStorage_Remove_ResponseParamsSpec,
      [file_name],
      false);
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

chromeos.cdm.mojom.CdmStorageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CdmStorage', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(chromeos.cdm.mojom.CdmStorage_Read_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.cdm.mojom.CdmStorage_Write_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.cdm.mojom.CdmStorage_Exists_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.cdm.mojom.CdmStorage_GetSize_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.cdm.mojom.CdmStorage_Remove_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cdm.mojom.CdmStorage_Read_ParamsSpec.$.structSpec);
          const result = this.impl.read(params.file_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cdm.mojom.CdmStorage_Read_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cdm.mojom.CdmStorage_Write_ParamsSpec.$.structSpec);
          const result = this.impl.write(params.file_name, params.data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cdm.mojom.CdmStorage_Write_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cdm.mojom.CdmStorage_Exists_ParamsSpec.$.structSpec);
          const result = this.impl.exists(params.file_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cdm.mojom.CdmStorage_Exists_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cdm.mojom.CdmStorage_GetSize_ParamsSpec.$.structSpec);
          const result = this.impl.getSize(params.file_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cdm.mojom.CdmStorage_GetSize_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cdm.mojom.CdmStorage_Remove_ParamsSpec.$.structSpec);
          const result = this.impl.remove(params.file_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cdm.mojom.CdmStorage_Remove_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromeos.cdm.mojom.CdmStorageReceiver = chromeos.cdm.mojom.CdmStorageReceiver;

chromeos.cdm.mojom.CdmStoragePtr = chromeos.cdm.mojom.CdmStorageRemote;
chromeos.cdm.mojom.CdmStorageRequest = chromeos.cdm.mojom.CdmStoragePendingReceiver;

