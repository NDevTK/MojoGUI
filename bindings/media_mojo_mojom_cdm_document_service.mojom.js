// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/cdm_document_service.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Struct: MediaFoundationCdmData
media.mojom.MediaFoundationCdmDataSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaFoundationCdmData',
      packedSize: 32,
      fields: [
        { name: 'origin_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'client_token', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
        { name: 'cdm_store_path_root', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: CdmDocumentService
media.mojom.CdmDocumentService = {};

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
};

media.mojom.CdmDocumentServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  challengePlatform(service_id, challenge) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.CdmDocumentService_ChallengePlatform_ParamsSpec,
      media.mojom.CdmDocumentService_ChallengePlatform_ResponseParamsSpec,
      [service_id, challenge]);
  }

  getStorageId(version) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.CdmDocumentService_GetStorageId_ParamsSpec,
      media.mojom.CdmDocumentService_GetStorageId_ResponseParamsSpec,
      [version]);
  }

  isVerifiedAccessEnabled() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.CdmDocumentService_IsVerifiedAccessEnabled_ParamsSpec,
      media.mojom.CdmDocumentService_IsVerifiedAccessEnabled_ResponseParamsSpec,
      []);
  }

  getMediaFoundationCdmData() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.CdmDocumentService_GetMediaFoundationCdmData_ParamsSpec,
      media.mojom.CdmDocumentService_GetMediaFoundationCdmData_ResponseParamsSpec,
      []);
  }

  setCdmClientToken(client_token) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.CdmDocumentService_SetCdmClientToken_ParamsSpec,
      null,
      [client_token]);
  }

  onCdmEvent(event, hresult) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.CdmDocumentService_OnCdmEvent_ParamsSpec,
      null,
      [event, hresult]);
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

// ParamsSpec for ChallengePlatform
media.mojom.CdmDocumentService_ChallengePlatform_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmDocumentService.ChallengePlatform_Params',
      packedSize: 24,
      fields: [
        { name: 'service_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'challenge', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

media.mojom.CdmDocumentService_ChallengePlatform_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 40,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'signed_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'signed_data_signature', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'platform_key_certificate', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for GetStorageId
media.mojom.CdmDocumentService_GetStorageId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmDocumentService.GetStorageId_Params',
      packedSize: 16,
      fields: [
        { name: 'version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.CdmDocumentService_GetStorageId_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'storage_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for IsVerifiedAccessEnabled
media.mojom.CdmDocumentService_IsVerifiedAccessEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmDocumentService.IsVerifiedAccessEnabled_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media.mojom.CdmDocumentService_IsVerifiedAccessEnabled_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetMediaFoundationCdmData
media.mojom.CdmDocumentService_GetMediaFoundationCdmData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmDocumentService.GetMediaFoundationCdmData_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media.mojom.CdmDocumentService_GetMediaFoundationCdmData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'cdm_data', packedOffset: 0, packedBitOffset: 0, type: media.mojom.MediaFoundationCdmDataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetCdmClientToken
media.mojom.CdmDocumentService_SetCdmClientToken_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmDocumentService.SetCdmClientToken_Params',
      packedSize: 16,
      fields: [
        { name: 'client_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnCdmEvent
media.mojom.CdmDocumentService_OnCdmEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmDocumentService.OnCdmEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: media.mojom.CdmEventSpec, nullable: false, minVersion: 0 },
        { name: 'hresult', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.CdmDocumentServicePtr = media.mojom.CdmDocumentServiceRemote;
media.mojom.CdmDocumentServiceRequest = media.mojom.CdmDocumentServicePendingReceiver;

