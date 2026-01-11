// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/cdm_context_for_oopvd.mojom
// Module: media.mojom

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var gfx = gfx || {};

media.mojom.DecryptStatusSpec = { $: mojo.internal.Enum() };
media.mojom.CdmContextEventSpec = { $: mojo.internal.Enum() };
media.mojom.CdmContextEventCallback = {};
media.mojom.CdmContextEventCallback.$interfaceName = 'media.mojom.CdmContextEventCallback';
media.mojom.CdmContextEventCallback_EventCallback_ParamsSpec = { $: {} };
media.mojom.CdmContextForOOPVD = {};
media.mojom.CdmContextForOOPVD.$interfaceName = 'media.mojom.CdmContextForOOPVD';
media.mojom.CdmContextForOOPVD_GetHwKeyData_ParamsSpec = { $: {} };
media.mojom.CdmContextForOOPVD_GetHwKeyData_ResponseParamsSpec = { $: {} };
media.mojom.CdmContextForOOPVD_RegisterEventCallback_ParamsSpec = { $: {} };
media.mojom.CdmContextForOOPVD_GetHwConfigData_ParamsSpec = { $: {} };
media.mojom.CdmContextForOOPVD_GetHwConfigData_ResponseParamsSpec = { $: {} };
media.mojom.CdmContextForOOPVD_GetScreenResolutions_ParamsSpec = { $: {} };
media.mojom.CdmContextForOOPVD_GetScreenResolutions_ResponseParamsSpec = { $: {} };
media.mojom.CdmContextForOOPVD_AllocateSecureBuffer_ParamsSpec = { $: {} };
media.mojom.CdmContextForOOPVD_AllocateSecureBuffer_ResponseParamsSpec = { $: {} };
media.mojom.CdmContextForOOPVD_ParseEncryptedSliceHeader_ParamsSpec = { $: {} };
media.mojom.CdmContextForOOPVD_ParseEncryptedSliceHeader_ResponseParamsSpec = { $: {} };
media.mojom.CdmContextForOOPVD_DecryptVideoBuffer_ParamsSpec = { $: {} };
media.mojom.CdmContextForOOPVD_DecryptVideoBuffer_ResponseParamsSpec = { $: {} };

// Enum: DecryptStatus
media.mojom.DecryptStatus = {
  kSuccess: 0,
  kNoKey: 1,
  kFailure: 2,
};

// Enum: CdmContextEvent
media.mojom.CdmContextEvent = {
  kHasAdditionalUsableKey: 0,
  kHardwareContextReset: 1,
};

// Interface: CdmContextEventCallback
mojo.internal.Struct(
    media.mojom.CdmContextEventCallback_EventCallback_ParamsSpec, 'media.mojom.CdmContextEventCallback_EventCallback_Params', [
      mojo.internal.StructField('event', 0, 0, media.mojom.CdmContextEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.CdmContextEventCallbackPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.CdmContextEventCallbackRemote = class {
  static get $interfaceName() {
    return 'media.mojom.CdmContextEventCallback';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.CdmContextEventCallbackPendingReceiver,
      handle);
    this.$ = new media.mojom.CdmContextEventCallbackRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  eventCallback(event) {
    return this.$.eventCallback(event);
  }
};

media.mojom.CdmContextEventCallbackRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CdmContextEventCallback', [
      { explicit: null },
    ]);
  }

  eventCallback(event) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.CdmContextEventCallback_EventCallback_ParamsSpec,
      null,
      [event],
      false);
  }

};

media.mojom.CdmContextEventCallback.getRemote = function() {
  let remote = new media.mojom.CdmContextEventCallbackRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.CdmContextEventCallback',
    'context');
  return remote.$;
};

media.mojom.CdmContextEventCallbackReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CdmContextEventCallback', [
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
             decoder.decodeStructInline(media.mojom.CdmContextEventCallback_EventCallback_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.CdmContextEventCallback_EventCallback_ParamsSpec.$.structSpec);
          const result = this.impl.eventCallback(params.event);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

media.mojom.CdmContextEventCallbackReceiver = media.mojom.CdmContextEventCallbackReceiver;

media.mojom.CdmContextEventCallbackPtr = media.mojom.CdmContextEventCallbackRemote;
media.mojom.CdmContextEventCallbackRequest = media.mojom.CdmContextEventCallbackPendingReceiver;


// Interface: CdmContextForOOPVD
mojo.internal.Struct(
    media.mojom.CdmContextForOOPVD_GetHwKeyData_ParamsSpec, 'media.mojom.CdmContextForOOPVD_GetHwKeyData_Params', [
      mojo.internal.StructField('decrypt_config', 0, 0, media.mojom.DecryptConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('hw_identifier', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.CdmContextForOOPVD_GetHwKeyData_ResponseParamsSpec, 'media.mojom.CdmContextForOOPVD_GetHwKeyData_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, media.mojom.DecryptStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.CdmContextForOOPVD_RegisterEventCallback_ParamsSpec, 'media.mojom.CdmContextForOOPVD_RegisterEventCallback_Params', [
      mojo.internal.StructField('callback', 0, 0, mojo.internal.InterfaceProxy(media.mojom.CdmContextEventCallbackRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.CdmContextForOOPVD_GetHwConfigData_ParamsSpec, 'media.mojom.CdmContextForOOPVD_GetHwConfigData_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.CdmContextForOOPVD_GetHwConfigData_ResponseParamsSpec, 'media.mojom.CdmContextForOOPVD_GetHwConfigData_ResponseParams', [
      mojo.internal.StructField('config_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.CdmContextForOOPVD_GetScreenResolutions_ParamsSpec, 'media.mojom.CdmContextForOOPVD_GetScreenResolutions_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.CdmContextForOOPVD_GetScreenResolutions_ResponseParamsSpec, 'media.mojom.CdmContextForOOPVD_GetScreenResolutions_ResponseParams', [
      mojo.internal.StructField('resolutions', 0, 0, mojo.internal.Array(gfx.mojom.SizeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.CdmContextForOOPVD_AllocateSecureBuffer_ParamsSpec, 'media.mojom.CdmContextForOOPVD_AllocateSecureBuffer_Params', [
      mojo.internal.StructField('size', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.CdmContextForOOPVD_AllocateSecureBuffer_ResponseParamsSpec, 'media.mojom.CdmContextForOOPVD_AllocateSecureBuffer_ResponseParams', [
      mojo.internal.StructField('secure_buffer', 0, 0, mojo.internal.Pointer, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.CdmContextForOOPVD_ParseEncryptedSliceHeader_ParamsSpec, 'media.mojom.CdmContextForOOPVD_ParseEncryptedSliceHeader_Params', [
      mojo.internal.StructField('secure_handle', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('stream_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('offset', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    media.mojom.CdmContextForOOPVD_ParseEncryptedSliceHeader_ResponseParamsSpec, 'media.mojom.CdmContextForOOPVD_ParseEncryptedSliceHeader_ResponseParams', [
      mojo.internal.StructField('slice_header', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.CdmContextForOOPVD_DecryptVideoBuffer_ParamsSpec, 'media.mojom.CdmContextForOOPVD_DecryptVideoBuffer_Params', [
      mojo.internal.StructField('buffer', 0, 0, media.mojom.DecoderBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bytes', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.CdmContextForOOPVD_DecryptVideoBuffer_ResponseParamsSpec, 'media.mojom.CdmContextForOOPVD_DecryptVideoBuffer_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, media.mojom.DecryptStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('decoder_buffer', 8, 0, media.mojom.DecoderBufferSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('bytes', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

media.mojom.CdmContextForOOPVDPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.CdmContextForOOPVDRemote = class {
  static get $interfaceName() {
    return 'media.mojom.CdmContextForOOPVD';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.CdmContextForOOPVDPendingReceiver,
      handle);
    this.$ = new media.mojom.CdmContextForOOPVDRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getHwKeyData(decrypt_config, hw_identifier) {
    return this.$.getHwKeyData(decrypt_config, hw_identifier);
  }
  registerEventCallback(callback) {
    return this.$.registerEventCallback(callback);
  }
  getHwConfigData() {
    return this.$.getHwConfigData();
  }
  getScreenResolutions() {
    return this.$.getScreenResolutions();
  }
  allocateSecureBuffer(size) {
    return this.$.allocateSecureBuffer(size);
  }
  parseEncryptedSliceHeader(secure_handle, offset, stream_data) {
    return this.$.parseEncryptedSliceHeader(secure_handle, offset, stream_data);
  }
  decryptVideoBuffer(buffer, bytes) {
    return this.$.decryptVideoBuffer(buffer, bytes);
  }
};

media.mojom.CdmContextForOOPVDRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CdmContextForOOPVD', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getHwKeyData(decrypt_config, hw_identifier) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.CdmContextForOOPVD_GetHwKeyData_ParamsSpec,
      media.mojom.CdmContextForOOPVD_GetHwKeyData_ResponseParamsSpec,
      [decrypt_config, hw_identifier],
      false);
  }

  registerEventCallback(callback) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.CdmContextForOOPVD_RegisterEventCallback_ParamsSpec,
      null,
      [callback],
      false);
  }

  getHwConfigData() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media.mojom.CdmContextForOOPVD_GetHwConfigData_ParamsSpec,
      media.mojom.CdmContextForOOPVD_GetHwConfigData_ResponseParamsSpec,
      [],
      false);
  }

  getScreenResolutions() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      media.mojom.CdmContextForOOPVD_GetScreenResolutions_ParamsSpec,
      media.mojom.CdmContextForOOPVD_GetScreenResolutions_ResponseParamsSpec,
      [],
      false);
  }

  allocateSecureBuffer(size) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      media.mojom.CdmContextForOOPVD_AllocateSecureBuffer_ParamsSpec,
      media.mojom.CdmContextForOOPVD_AllocateSecureBuffer_ResponseParamsSpec,
      [size],
      false);
  }

  parseEncryptedSliceHeader(secure_handle, offset, stream_data) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      media.mojom.CdmContextForOOPVD_ParseEncryptedSliceHeader_ParamsSpec,
      media.mojom.CdmContextForOOPVD_ParseEncryptedSliceHeader_ResponseParamsSpec,
      [secure_handle, offset, stream_data],
      false);
  }

  decryptVideoBuffer(buffer, bytes) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      media.mojom.CdmContextForOOPVD_DecryptVideoBuffer_ParamsSpec,
      media.mojom.CdmContextForOOPVD_DecryptVideoBuffer_ResponseParamsSpec,
      [buffer, bytes],
      false);
  }

};

media.mojom.CdmContextForOOPVD.getRemote = function() {
  let remote = new media.mojom.CdmContextForOOPVDRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.CdmContextForOOPVD',
    'context');
  return remote.$;
};

media.mojom.CdmContextForOOPVDReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CdmContextForOOPVD', [
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(media.mojom.CdmContextForOOPVD_GetHwKeyData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.CdmContextForOOPVD_RegisterEventCallback_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.CdmContextForOOPVD_GetHwConfigData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.CdmContextForOOPVD_GetScreenResolutions_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.CdmContextForOOPVD_AllocateSecureBuffer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.CdmContextForOOPVD_ParseEncryptedSliceHeader_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.CdmContextForOOPVD_DecryptVideoBuffer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.CdmContextForOOPVD_GetHwKeyData_ParamsSpec.$.structSpec);
          const result = this.impl.getHwKeyData(params.decrypt_config, params.hw_identifier);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.CdmContextForOOPVD_GetHwKeyData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.CdmContextForOOPVD_RegisterEventCallback_ParamsSpec.$.structSpec);
          const result = this.impl.registerEventCallback(params.callback);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.CdmContextForOOPVD_GetHwConfigData_ParamsSpec.$.structSpec);
          const result = this.impl.getHwConfigData();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.CdmContextForOOPVD_GetHwConfigData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.CdmContextForOOPVD_GetScreenResolutions_ParamsSpec.$.structSpec);
          const result = this.impl.getScreenResolutions();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.CdmContextForOOPVD_GetScreenResolutions_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.CdmContextForOOPVD_AllocateSecureBuffer_ParamsSpec.$.structSpec);
          const result = this.impl.allocateSecureBuffer(params.size);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.CdmContextForOOPVD_AllocateSecureBuffer_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.CdmContextForOOPVD_ParseEncryptedSliceHeader_ParamsSpec.$.structSpec);
          const result = this.impl.parseEncryptedSliceHeader(params.secure_handle, params.offset, params.stream_data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.CdmContextForOOPVD_ParseEncryptedSliceHeader_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.CdmContextForOOPVD_DecryptVideoBuffer_ParamsSpec.$.structSpec);
          const result = this.impl.decryptVideoBuffer(params.buffer, params.bytes);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.CdmContextForOOPVD_DecryptVideoBuffer_ResponseParamsSpec);
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

media.mojom.CdmContextForOOPVDReceiver = media.mojom.CdmContextForOOPVDReceiver;

media.mojom.CdmContextForOOPVDPtr = media.mojom.CdmContextForOOPVDRemote;
media.mojom.CdmContextForOOPVDRequest = media.mojom.CdmContextForOOPVDPendingReceiver;

