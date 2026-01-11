// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/cdm_document_service.mojom
// Module: media.mojom

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var mojo_base = mojo_base || {};

media.mojom.MediaFoundationCdmDataSpec = { $: {} };
media.mojom.CdmDocumentService = {};
media.mojom.CdmDocumentService.$interfaceName = 'media.mojom.CdmDocumentService';
media.mojom.CdmDocumentService_ChallengePlatform_ParamsSpec = { $: {} };
media.mojom.CdmDocumentService_ChallengePlatform_ResponseParamsSpec = { $: {} };
media.mojom.CdmDocumentService_GetStorageId_ParamsSpec = { $: {} };
media.mojom.CdmDocumentService_GetStorageId_ResponseParamsSpec = { $: {} };
media.mojom.CdmDocumentService_IsVerifiedAccessEnabled_ParamsSpec = { $: {} };
media.mojom.CdmDocumentService_IsVerifiedAccessEnabled_ResponseParamsSpec = { $: {} };
media.mojom.CdmDocumentService_GetMediaFoundationCdmData_ParamsSpec = { $: {} };
media.mojom.CdmDocumentService_GetMediaFoundationCdmData_ResponseParamsSpec = { $: {} };
media.mojom.CdmDocumentService_SetCdmClientToken_ParamsSpec = { $: {} };
media.mojom.CdmDocumentService_OnCdmEvent_ParamsSpec = { $: {} };

// Struct: MediaFoundationCdmData
mojo.internal.Struct(
    media.mojom.MediaFoundationCdmDataSpec, 'media.mojom.MediaFoundationCdmData', [
      mojo.internal.StructField('origin_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client_token', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('cdm_store_path_root', 16, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: CdmDocumentService
mojo.internal.Struct(
    media.mojom.CdmDocumentService_ChallengePlatform_ParamsSpec, 'media.mojom.CdmDocumentService_ChallengePlatform_Params', [
      mojo.internal.StructField('service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('challenge', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.CdmDocumentService_ChallengePlatform_ResponseParamsSpec, 'media.mojom.CdmDocumentService_ChallengePlatform_ResponseParams', [
      mojo.internal.StructField('signed_data', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('signed_data_signature', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('platform_key_certificate', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('success', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    media.mojom.CdmDocumentService_GetStorageId_ParamsSpec, 'media.mojom.CdmDocumentService_GetStorageId_Params', [
      mojo.internal.StructField('version', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.CdmDocumentService_GetStorageId_ResponseParamsSpec, 'media.mojom.CdmDocumentService_GetStorageId_ResponseParams', [
      mojo.internal.StructField('storage_id', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('version', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.CdmDocumentService_IsVerifiedAccessEnabled_ParamsSpec, 'media.mojom.CdmDocumentService_IsVerifiedAccessEnabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.CdmDocumentService_IsVerifiedAccessEnabled_ResponseParamsSpec, 'media.mojom.CdmDocumentService_IsVerifiedAccessEnabled_ResponseParams', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.CdmDocumentService_GetMediaFoundationCdmData_ParamsSpec, 'media.mojom.CdmDocumentService_GetMediaFoundationCdmData_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.CdmDocumentService_GetMediaFoundationCdmData_ResponseParamsSpec, 'media.mojom.CdmDocumentService_GetMediaFoundationCdmData_ResponseParams', [
      mojo.internal.StructField('cdm_data', 0, 0, media.mojom.MediaFoundationCdmDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.CdmDocumentService_SetCdmClientToken_ParamsSpec, 'media.mojom.CdmDocumentService_SetCdmClientToken_Params', [
      mojo.internal.StructField('client_token', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.CdmDocumentService_OnCdmEvent_ParamsSpec, 'media.mojom.CdmDocumentService_OnCdmEvent_Params', [
      mojo.internal.StructField('event', 0, 0, media.mojom.CdmEventSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('hresult', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

media.mojom.CdmDocumentServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.CdmDocumentServiceRemote = class {
  static get $interfaceName() {
    return 'media.mojom.CdmDocumentService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.CdmDocumentServicePendingReceiver,
      handle);
    this.$ = new media.mojom.CdmDocumentServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  challengePlatform(service_id, challenge) {
    return this.$.challengePlatform(service_id, challenge);
  }
  getStorageId(version) {
    return this.$.getStorageId(version);
  }
  isVerifiedAccessEnabled() {
    return this.$.isVerifiedAccessEnabled();
  }
  getMediaFoundationCdmData() {
    return this.$.getMediaFoundationCdmData();
  }
  setCdmClientToken(client_token) {
    return this.$.setCdmClientToken(client_token);
  }
  onCdmEvent(event, hresult) {
    return this.$.onCdmEvent(event, hresult);
  }
};

media.mojom.CdmDocumentServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CdmDocumentService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  challengePlatform(service_id, challenge) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.CdmDocumentService_ChallengePlatform_ParamsSpec,
      media.mojom.CdmDocumentService_ChallengePlatform_ResponseParamsSpec,
      [service_id, challenge],
      false);
  }

  getStorageId(version) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.CdmDocumentService_GetStorageId_ParamsSpec,
      media.mojom.CdmDocumentService_GetStorageId_ResponseParamsSpec,
      [version],
      false);
  }

  isVerifiedAccessEnabled() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media.mojom.CdmDocumentService_IsVerifiedAccessEnabled_ParamsSpec,
      media.mojom.CdmDocumentService_IsVerifiedAccessEnabled_ResponseParamsSpec,
      [],
      false);
  }

  getMediaFoundationCdmData() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      media.mojom.CdmDocumentService_GetMediaFoundationCdmData_ParamsSpec,
      media.mojom.CdmDocumentService_GetMediaFoundationCdmData_ResponseParamsSpec,
      [],
      false);
  }

  setCdmClientToken(client_token) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      media.mojom.CdmDocumentService_SetCdmClientToken_ParamsSpec,
      null,
      [client_token],
      false);
  }

  onCdmEvent(event, hresult) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      media.mojom.CdmDocumentService_OnCdmEvent_ParamsSpec,
      null,
      [event, hresult],
      false);
  }

};

media.mojom.CdmDocumentService.getRemote = function() {
  let remote = new media.mojom.CdmDocumentServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.CdmDocumentService',
    'context');
  return remote.$;
};

media.mojom.CdmDocumentServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CdmDocumentService', [
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
             decoder.decodeStructInline(media.mojom.CdmDocumentService_ChallengePlatform_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.CdmDocumentService_GetStorageId_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.CdmDocumentService_IsVerifiedAccessEnabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.CdmDocumentService_GetMediaFoundationCdmData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.CdmDocumentService_SetCdmClientToken_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.CdmDocumentService_OnCdmEvent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.CdmDocumentService_ChallengePlatform_ParamsSpec.$.structSpec);
          const result = this.impl.challengePlatform(params.service_id, params.challenge);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.CdmDocumentService_ChallengePlatform_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.CdmDocumentService_GetStorageId_ParamsSpec.$.structSpec);
          const result = this.impl.getStorageId(params.version);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.CdmDocumentService_GetStorageId_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.CdmDocumentService_IsVerifiedAccessEnabled_ParamsSpec.$.structSpec);
          const result = this.impl.isVerifiedAccessEnabled();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.CdmDocumentService_IsVerifiedAccessEnabled_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.CdmDocumentService_GetMediaFoundationCdmData_ParamsSpec.$.structSpec);
          const result = this.impl.getMediaFoundationCdmData();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.CdmDocumentService_GetMediaFoundationCdmData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.CdmDocumentService_SetCdmClientToken_ParamsSpec.$.structSpec);
          const result = this.impl.setCdmClientToken(params.client_token);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.CdmDocumentService_OnCdmEvent_ParamsSpec.$.structSpec);
          const result = this.impl.onCdmEvent(params.event, params.hresult);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

media.mojom.CdmDocumentServiceReceiver = media.mojom.CdmDocumentServiceReceiver;

media.mojom.CdmDocumentServicePtr = media.mojom.CdmDocumentServiceRemote;
media.mojom.CdmDocumentServiceRequest = media.mojom.CdmDocumentServicePendingReceiver;

