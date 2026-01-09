// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/media_drm_storage.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Struct: SessionData
media.mojom.SessionData = class {
  constructor(values = {}) {
    this.key_type = values.key_type !== undefined ? values.key_type : 0;
  }
};

// Interface: MediaDrmStorage
media.mojom.MediaDrmStoragePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.MediaDrmStorage';
  }

  successful(true) {
    // Method: successful
    // Call: successful(true)
  }

  information(ID) {
    // Method: information
    // Call: information(ID)
  }

  initialize() {
    // Method: Initialize
    // Call: Initialize()
  }

  initialize() {
    // Method: Initialize
    return new Promise((resolve) => {
      // Call: Initialize()
      resolve({});
    });
  }

  information(ID, time) {
    // Method: information
    // Call: information(ID, time)
  }

  onProvisioned() {
    // Method: OnProvisioned
    return new Promise((resolve) => {
      // Call: OnProvisioned()
      resolve({});
    });
  }

  savePersistentSession(session_id, session_data) {
    // Method: SavePersistentSession
    return new Promise((resolve) => {
      // Call: SavePersistentSession(session_id, session_data)
      resolve({});
    });
  }

  loadPersistentSession(session_id) {
    // Method: LoadPersistentSession
    return new Promise((resolve) => {
      // Call: LoadPersistentSession(session_id)
      resolve({});
    });
  }

  removePersistentSession(session_id) {
    // Method: RemovePersistentSession
    return new Promise((resolve) => {
      // Call: RemovePersistentSession(session_id)
      resolve({});
    });
  }

};

media.mojom.MediaDrmStorageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
