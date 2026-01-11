// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/media_drm_storage.mojom
// Module: media.mojom

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var mojo_base = mojo_base || {};

media.mojom.SessionDataSpec = { $: {} };
media.mojom.MediaDrmStorage = {};
media.mojom.MediaDrmStorage.$interfaceName = 'media.mojom.MediaDrmStorage';
media.mojom.MediaDrmStorage_Initialize_ParamsSpec = { $: {} };
media.mojom.MediaDrmStorage_Initialize_ResponseParamsSpec = { $: {} };
media.mojom.MediaDrmStorage_OnProvisioned_ParamsSpec = { $: {} };
media.mojom.MediaDrmStorage_OnProvisioned_ResponseParamsSpec = { $: {} };
media.mojom.MediaDrmStorage_SavePersistentSession_ParamsSpec = { $: {} };
media.mojom.MediaDrmStorage_SavePersistentSession_ResponseParamsSpec = { $: {} };
media.mojom.MediaDrmStorage_LoadPersistentSession_ParamsSpec = { $: {} };
media.mojom.MediaDrmStorage_LoadPersistentSession_ResponseParamsSpec = { $: {} };
media.mojom.MediaDrmStorage_RemovePersistentSession_ParamsSpec = { $: {} };
media.mojom.MediaDrmStorage_RemovePersistentSession_ResponseParamsSpec = { $: {} };

// Struct: SessionData
mojo.internal.Struct(
    media.mojom.SessionDataSpec, 'media.mojom.SessionData', [
      mojo.internal.StructField('KeyType', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('key_set_id', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('mime_type', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('key_type', 24, 0, media.mojom.KeyTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: MediaDrmStorage
mojo.internal.Struct(
    media.mojom.MediaDrmStorage_Initialize_ParamsSpec, 'media.mojom.MediaDrmStorage_Initialize_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.MediaDrmStorage_Initialize_ResponseParamsSpec, 'media.mojom.MediaDrmStorage_Initialize_ResponseParams', [
      mojo.internal.StructField('origin_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.MediaDrmStorage_OnProvisioned_ParamsSpec, 'media.mojom.MediaDrmStorage_OnProvisioned_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.MediaDrmStorage_OnProvisioned_ResponseParamsSpec, 'media.mojom.MediaDrmStorage_OnProvisioned_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaDrmStorage_SavePersistentSession_ParamsSpec, 'media.mojom.MediaDrmStorage_SavePersistentSession_Params', [
      mojo.internal.StructField('session_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('session_data', 8, 0, media.mojom.SessionDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.MediaDrmStorage_SavePersistentSession_ResponseParamsSpec, 'media.mojom.MediaDrmStorage_SavePersistentSession_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaDrmStorage_LoadPersistentSession_ParamsSpec, 'media.mojom.MediaDrmStorage_LoadPersistentSession_Params', [
      mojo.internal.StructField('session_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaDrmStorage_LoadPersistentSession_ResponseParamsSpec, 'media.mojom.MediaDrmStorage_LoadPersistentSession_ResponseParams', [
      mojo.internal.StructField('session_data', 0, 0, media.mojom.SessionDataSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaDrmStorage_RemovePersistentSession_ParamsSpec, 'media.mojom.MediaDrmStorage_RemovePersistentSession_Params', [
      mojo.internal.StructField('session_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaDrmStorage_RemovePersistentSession_ResponseParamsSpec, 'media.mojom.MediaDrmStorage_RemovePersistentSession_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.MediaDrmStoragePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.MediaDrmStorageRemote = class {
  static get $interfaceName() {
    return 'media.mojom.MediaDrmStorage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.MediaDrmStoragePendingReceiver,
      handle);
    this.$ = new media.mojom.MediaDrmStorageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  initialize() {
    return this.$.initialize();
  }
  onProvisioned() {
    return this.$.onProvisioned();
  }
  savePersistentSession(session_id, session_data) {
    return this.$.savePersistentSession(session_id, session_data);
  }
  loadPersistentSession(session_id) {
    return this.$.loadPersistentSession(session_id);
  }
  removePersistentSession(session_id) {
    return this.$.removePersistentSession(session_id);
  }
};

media.mojom.MediaDrmStorageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MediaDrmStorage', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  initialize() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.MediaDrmStorage_Initialize_ParamsSpec,
      media.mojom.MediaDrmStorage_Initialize_ResponseParamsSpec,
      [],
      false);
  }

  onProvisioned() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.MediaDrmStorage_OnProvisioned_ParamsSpec,
      media.mojom.MediaDrmStorage_OnProvisioned_ResponseParamsSpec,
      [],
      false);
  }

  savePersistentSession(session_id, session_data) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media.mojom.MediaDrmStorage_SavePersistentSession_ParamsSpec,
      media.mojom.MediaDrmStorage_SavePersistentSession_ResponseParamsSpec,
      [session_id, session_data],
      false);
  }

  loadPersistentSession(session_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      media.mojom.MediaDrmStorage_LoadPersistentSession_ParamsSpec,
      media.mojom.MediaDrmStorage_LoadPersistentSession_ResponseParamsSpec,
      [session_id],
      false);
  }

  removePersistentSession(session_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      media.mojom.MediaDrmStorage_RemovePersistentSession_ParamsSpec,
      media.mojom.MediaDrmStorage_RemovePersistentSession_ResponseParamsSpec,
      [session_id],
      false);
  }

};

media.mojom.MediaDrmStorage.getRemote = function() {
  let remote = new media.mojom.MediaDrmStorageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.MediaDrmStorage',
    'context');
  return remote.$;
};

media.mojom.MediaDrmStorageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MediaDrmStorage', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(media.mojom.MediaDrmStorage_Initialize_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaDrmStorage_OnProvisioned_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaDrmStorage_SavePersistentSession_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaDrmStorage_LoadPersistentSession_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaDrmStorage_RemovePersistentSession_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaDrmStorage_Initialize_ParamsSpec.$.structSpec);
          const result = this.impl.initialize();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.MediaDrmStorage_Initialize_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaDrmStorage_OnProvisioned_ParamsSpec.$.structSpec);
          const result = this.impl.onProvisioned();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.MediaDrmStorage_OnProvisioned_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaDrmStorage_SavePersistentSession_ParamsSpec.$.structSpec);
          const result = this.impl.savePersistentSession(params.session_id, params.session_data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.MediaDrmStorage_SavePersistentSession_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaDrmStorage_LoadPersistentSession_ParamsSpec.$.structSpec);
          const result = this.impl.loadPersistentSession(params.session_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.MediaDrmStorage_LoadPersistentSession_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaDrmStorage_RemovePersistentSession_ParamsSpec.$.structSpec);
          const result = this.impl.removePersistentSession(params.session_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.MediaDrmStorage_RemovePersistentSession_ResponseParamsSpec);
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

media.mojom.MediaDrmStorageReceiver = media.mojom.MediaDrmStorageReceiver;

media.mojom.MediaDrmStoragePtr = media.mojom.MediaDrmStorageRemote;
media.mojom.MediaDrmStorageRequest = media.mojom.MediaDrmStoragePendingReceiver;

