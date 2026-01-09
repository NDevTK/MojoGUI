// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/cdm_document_service.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


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
      media.mojom.CdmDocumentService_ChallengePlatform_ResponseParamsSpec,
      [service_id, challenge],
      undefined,
      undefined
    );
  }

  getStorageId(version) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.CdmDocumentService_GetStorageId_ParamsSpec,
      media.mojom.CdmDocumentService_GetStorageId_ResponseParamsSpec,
      media.mojom.CdmDocumentService_GetStorageId_ResponseParamsSpec,
      [version],
      undefined,
      undefined
    );
  }

  isVerifiedAccessEnabled() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.CdmDocumentService_IsVerifiedAccessEnabled_ParamsSpec,
      media.mojom.CdmDocumentService_IsVerifiedAccessEnabled_ResponseParamsSpec,
      media.mojom.CdmDocumentService_IsVerifiedAccessEnabled_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  getMediaFoundationCdmData() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.CdmDocumentService_GetMediaFoundationCdmData_ParamsSpec,
      media.mojom.CdmDocumentService_GetMediaFoundationCdmData_ResponseParamsSpec,
      media.mojom.CdmDocumentService_GetMediaFoundationCdmData_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  setCdmClientToken(client_token) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.CdmDocumentService_SetCdmClientToken_ParamsSpec,
      null,
      null,
      [client_token],
      undefined,
      undefined
    );
  }

  onCdmEvent(event, hresult) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.CdmDocumentService_OnCdmEvent_ParamsSpec,
      null,
      null,
      [event, hresult],
      undefined,
      undefined
    );
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
        { name: 'service_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'challenge', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

media.mojom.CdmDocumentService_ChallengePlatform_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmDocumentService.ChallengePlatform_ResponseParams',
      packedSize: 40,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'signed_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'signed_data_signature', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'platform_key_certificate', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
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
        { name: 'version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.CdmDocumentService_GetStorageId_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmDocumentService.GetStorageId_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'storage_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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
      name: 'media.mojom.CdmDocumentService.IsVerifiedAccessEnabled_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
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
      name: 'media.mojom.CdmDocumentService.GetMediaFoundationCdmData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'cdm_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'client_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'hresult', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
media.mojom.CdmDocumentServicePtr = media.mojom.CdmDocumentServiceRemote;
media.mojom.CdmDocumentServiceRequest = media.mojom.CdmDocumentServicePendingReceiver;

