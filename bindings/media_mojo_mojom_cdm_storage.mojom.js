// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/cdm_storage.mojom
// Module: media.mojom

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};

media.mojom.StatusSpec = { $: mojo.internal.Enum() };
media.mojom.StatusSpec = { $: mojo.internal.Enum() };
media.mojom.CdmStorage = {};
media.mojom.CdmStorage.$interfaceName = 'media.mojom.CdmStorage';
media.mojom.CdmStorage_Open_ParamsSpec = { $: {} };
media.mojom.CdmStorage_Open_ResponseParamsSpec = { $: {} };
media.mojom.CdmFile = {};
media.mojom.CdmFile.$interfaceName = 'media.mojom.CdmFile';
media.mojom.CdmFile_Read_ParamsSpec = { $: {} };
media.mojom.CdmFile_Read_ResponseParamsSpec = { $: {} };
media.mojom.CdmFile_Write_ParamsSpec = { $: {} };
media.mojom.CdmFile_Write_ResponseParamsSpec = { $: {} };

// Enum: Status
media.mojom.Status = {
  kSuccess: 0,
  kInUse: 1,
  kFailure: 2,
};

// Enum: Status
media.mojom.Status = {
  kSuccess: 0,
  kFailure: 1,
};

// Interface: CdmStorage
mojo.internal.Struct(
    media.mojom.CdmStorage_Open_ParamsSpec, 'media.mojom.CdmStorage_Open_Params', [
      mojo.internal.StructField('file_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.CdmStorage_Open_ResponseParamsSpec, 'media.mojom.CdmStorage_Open_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, media.mojom.StatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cdm_file', 8, 0, mojo.internal.Pointer, null, true, 0, undefined),
    ],
    [[0, 24]]);

media.mojom.CdmStoragePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.CdmStorageRemote = class {
  static get $interfaceName() {
    return 'media.mojom.CdmStorage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.CdmStoragePendingReceiver,
      handle);
    this.$ = new media.mojom.CdmStorageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  open(file_name) {
    return this.$.open(file_name);
  }
};

media.mojom.CdmStorageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CdmStorage', [
      { explicit: null },
    ]);
  }

  open(file_name) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.CdmStorage_Open_ParamsSpec,
      media.mojom.CdmStorage_Open_ResponseParamsSpec,
      [file_name],
      false);
  }

};

media.mojom.CdmStorage.getRemote = function() {
  let remote = new media.mojom.CdmStorageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.CdmStorage',
    'context');
  return remote.$;
};

media.mojom.CdmStorageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CdmStorage', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(media.mojom.CdmStorage_Open_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.CdmStorage_Open_ParamsSpec.$.structSpec);
          const result = this.impl.open(params.file_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.CdmStorage_Open_ResponseParamsSpec);
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

media.mojom.CdmStorageReceiver = media.mojom.CdmStorageReceiver;

media.mojom.CdmStoragePtr = media.mojom.CdmStorageRemote;
media.mojom.CdmStorageRequest = media.mojom.CdmStoragePendingReceiver;


// Interface: CdmFile
mojo.internal.Struct(
    media.mojom.CdmFile_Read_ParamsSpec, 'media.mojom.CdmFile_Read_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.CdmFile_Read_ResponseParamsSpec, 'media.mojom.CdmFile_Read_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, media.mojom.StatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.CdmFile_Write_ParamsSpec, 'media.mojom.CdmFile_Write_Params', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.CdmFile_Write_ResponseParamsSpec, 'media.mojom.CdmFile_Write_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, media.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.CdmFilePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.CdmFileRemote = class {
  static get $interfaceName() {
    return 'media.mojom.CdmFile';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.CdmFilePendingReceiver,
      handle);
    this.$ = new media.mojom.CdmFileRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  read() {
    return this.$.read();
  }
  write(data) {
    return this.$.write(data);
  }
};

media.mojom.CdmFileRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CdmFile', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  read() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.CdmFile_Read_ParamsSpec,
      media.mojom.CdmFile_Read_ResponseParamsSpec,
      [],
      false);
  }

  write(data) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.CdmFile_Write_ParamsSpec,
      media.mojom.CdmFile_Write_ResponseParamsSpec,
      [data],
      false);
  }

};

media.mojom.CdmFile.getRemote = function() {
  let remote = new media.mojom.CdmFileRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.CdmFile',
    'context');
  return remote.$;
};

media.mojom.CdmFileReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CdmFile', [
      { explicit: null },
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(media.mojom.CdmFile_Read_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.CdmFile_Write_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.CdmFile_Read_ParamsSpec.$.structSpec);
          const result = this.impl.read();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.CdmFile_Read_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.CdmFile_Write_ParamsSpec.$.structSpec);
          const result = this.impl.write(params.data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.CdmFile_Write_ResponseParamsSpec);
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

media.mojom.CdmFileReceiver = media.mojom.CdmFileReceiver;

media.mojom.CdmFilePtr = media.mojom.CdmFileRemote;
media.mojom.CdmFileRequest = media.mojom.CdmFilePendingReceiver;

