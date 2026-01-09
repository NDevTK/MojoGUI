// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/media_drm_storage.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Struct: SessionData
media.mojom.SessionDataSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SessionData',
      packedSize: 16,
      fields: [
        { name: 'key_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: MediaDrmStorage
media.mojom.MediaDrmStorage = {};

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
};

media.mojom.MediaDrmStorageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  initialize() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.MediaDrmStorage_Initialize_ParamsSpec,
      media.mojom.MediaDrmStorage_Initialize_ResponseParamsSpec,
      []);
  }

  onProvisioned() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.MediaDrmStorage_OnProvisioned_ParamsSpec,
      media.mojom.MediaDrmStorage_OnProvisioned_ResponseParamsSpec,
      []);
  }

  savePersistentSession(session_id, session_data) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.MediaDrmStorage_SavePersistentSession_ParamsSpec,
      media.mojom.MediaDrmStorage_SavePersistentSession_ResponseParamsSpec,
      [session_id, session_data]);
  }

  loadPersistentSession(session_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.MediaDrmStorage_LoadPersistentSession_ParamsSpec,
      media.mojom.MediaDrmStorage_LoadPersistentSession_ResponseParamsSpec,
      [session_id]);
  }

  removePersistentSession(session_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.MediaDrmStorage_RemovePersistentSession_ParamsSpec,
      media.mojom.MediaDrmStorage_RemovePersistentSession_ResponseParamsSpec,
      [session_id]);
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

// ParamsSpec for Initialize
media.mojom.MediaDrmStorage_Initialize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaDrmStorage.Initialize_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

media.mojom.MediaDrmStorage_Initialize_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaDrmStorage.Initialize_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'origin_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnProvisioned
media.mojom.MediaDrmStorage_OnProvisioned_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaDrmStorage.OnProvisioned_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

media.mojom.MediaDrmStorage_OnProvisioned_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaDrmStorage.OnProvisioned_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SavePersistentSession
media.mojom.MediaDrmStorage_SavePersistentSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaDrmStorage.SavePersistentSession_Params',
      packedSize: 24,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'session_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

media.mojom.MediaDrmStorage_SavePersistentSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaDrmStorage.SavePersistentSession_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for LoadPersistentSession
media.mojom.MediaDrmStorage_LoadPersistentSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaDrmStorage.LoadPersistentSession_Params',
      packedSize: 16,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

media.mojom.MediaDrmStorage_LoadPersistentSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaDrmStorage.LoadPersistentSession_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'session_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RemovePersistentSession
media.mojom.MediaDrmStorage_RemovePersistentSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaDrmStorage.RemovePersistentSession_Params',
      packedSize: 16,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

media.mojom.MediaDrmStorage_RemovePersistentSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaDrmStorage.RemovePersistentSession_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.MediaDrmStoragePtr = media.mojom.MediaDrmStorageRemote;
media.mojom.MediaDrmStorageRequest = media.mojom.MediaDrmStoragePendingReceiver;

