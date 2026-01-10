// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/cdm_document_service.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};

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
      mojo.internal.StructField('origin_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('client_token', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('cdm_store_path_root', 16, 0, mojo_base.mojom.FilePathSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('signed_data', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('signed_data_signature', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('platform_key_certificate', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    media.mojom.CdmDocumentService_GetStorageId_ParamsSpec, 'media.mojom.CdmDocumentService_GetStorageId_Params', [
      mojo.internal.StructField('version', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.CdmDocumentService_GetStorageId_ResponseParamsSpec, 'media.mojom.CdmDocumentService_GetStorageId_ResponseParams', [
      mojo.internal.StructField('version', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('storage_id', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
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
      mojo.internal.StructField('cdm_data', 0, 0, media.mojom.MediaFoundationCdmDataSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.CdmDocumentService_SetCdmClientToken_ParamsSpec, 'media.mojom.CdmDocumentService_SetCdmClientToken_Params', [
      mojo.internal.StructField('client_token', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.CdmDocumentService_OnCdmEvent_ParamsSpec, 'media.mojom.CdmDocumentService_OnCdmEvent_Params', [
      mojo.internal.StructField('event', 0, 0, media.mojom.CdmEventSpec, null, false, 0, undefined),
      mojo.internal.StructField('hresult', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [service_id, challenge],
      false);
  }

  getStorageId(version) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.CdmDocumentService_GetStorageId_ParamsSpec,
      media.mojom.CdmDocumentService_GetStorageId_ResponseParamsSpec,
      [version],
      false);
  }

  isVerifiedAccessEnabled() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.CdmDocumentService_IsVerifiedAccessEnabled_ParamsSpec,
      media.mojom.CdmDocumentService_IsVerifiedAccessEnabled_ResponseParamsSpec,
      [],
      false);
  }

  getMediaFoundationCdmData() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.CdmDocumentService_GetMediaFoundationCdmData_ParamsSpec,
      media.mojom.CdmDocumentService_GetMediaFoundationCdmData_ResponseParamsSpec,
      [],
      false);
  }

  setCdmClientToken(client_token) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.CdmDocumentService_SetCdmClientToken_ParamsSpec,
      null,
      [client_token],
      false);
  }

  onCdmEvent(event, hresult) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
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

media.mojom.CdmDocumentServicePtr = media.mojom.CdmDocumentServiceRemote;
media.mojom.CdmDocumentServiceRequest = media.mojom.CdmDocumentServicePendingReceiver;

