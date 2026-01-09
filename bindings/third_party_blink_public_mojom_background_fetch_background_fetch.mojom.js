// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/background_fetch/background_fetch.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: BackgroundFetchError
blink.mojom.BackgroundFetchError = {
  NONE: 0,
  DUPLICATED_DEVELOPER_ID: 1,
  INVALID_ARGUMENT: 2,
  INVALID_ID: 3,
  STORAGE_ERROR: 4,
  SERVICE_WORKER_UNAVAILABLE: 5,
  QUOTA_EXCEEDED: 6,
  PERMISSION_DENIED: 7,
  REGISTRATION_LIMIT_EXCEEDED: 8,
};

// Enum: BackgroundFetchResult
blink.mojom.BackgroundFetchResult = {
  UNSET: 0,
  FAILURE: 1,
  SUCCESS: 2,
};

// Enum: BackgroundFetchFailureReason
blink.mojom.BackgroundFetchFailureReason = {
  NONE: 0,
  CANCELLED_FROM_UI: 1,
  CANCELLED_BY_DEVELOPER: 2,
  BAD_STATUS: 3,
  FETCH_ERROR: 4,
  SERVICE_WORKER_UNAVAILABLE: 5,
  QUOTA_EXCEEDED: 6,
  DOWNLOAD_TOTAL_EXCEEDED: 7,
};

// Struct: BackgroundFetchSettledFetch
blink.mojom.BackgroundFetchSettledFetchSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BackgroundFetchSettledFetch',
      packedSize: 24,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FetchAPIRequestSpec, nullable: false },
        { name: 'response', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.FetchAPIResponseSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BackgroundFetchOptions
blink.mojom.BackgroundFetchOptionsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BackgroundFetchOptions',
      packedSize: 32,
      fields: [
        { name: 'icons', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'download_total', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'title', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BackgroundFetchRegistrationData
blink.mojom.BackgroundFetchRegistrationDataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BackgroundFetchRegistrationData',
      packedSize: 56,
      fields: [
        { name: 'developer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'upload_total', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'uploaded', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'download_total', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'downloaded', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'result', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.BackgroundFetchResultSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BackgroundFetchRegistration
blink.mojom.BackgroundFetchRegistrationSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BackgroundFetchRegistration',
      packedSize: 24,
      fields: [
        { name: 'registration_data', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.BackgroundFetchRegistrationDataSpec, nullable: false },
        { name: 'registration_interface', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BackgroundFetchUkmData
blink.mojom.BackgroundFetchUkmDataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BackgroundFetchUkmData',
      packedSize: 16,
      fields: [
        { name: 'ideal_to_chosen_icon_size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: BackgroundFetchRegistrationObserver
blink.mojom.BackgroundFetchRegistrationObserver = {};

blink.mojom.BackgroundFetchRegistrationObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.BackgroundFetchRegistrationObserverRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.BackgroundFetchRegistrationObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.BackgroundFetchRegistrationObserverPendingReceiver,
      handle);
    this.$ = new blink.mojom.BackgroundFetchRegistrationObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.BackgroundFetchRegistrationObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onProgress(upload_total, uploaded, download_total, downloaded, result, failure_reason) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.BackgroundFetchRegistrationObserver_OnProgress_ParamsSpec,
      null,
      [upload_total, uploaded, download_total, downloaded, result, failure_reason]);
  }

  onRecordsUnavailable() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.BackgroundFetchRegistrationObserver_OnRecordsUnavailable_ParamsSpec,
      null,
      []);
  }

  onRequestCompleted(request, response) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.BackgroundFetchRegistrationObserver_OnRequestCompleted_ParamsSpec,
      null,
      [request, response]);
  }

};

blink.mojom.BackgroundFetchRegistrationObserver.getRemote = function() {
  let remote = new blink.mojom.BackgroundFetchRegistrationObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.BackgroundFetchRegistrationObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnProgress
blink.mojom.BackgroundFetchRegistrationObserver_OnProgress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BackgroundFetchRegistrationObserver.OnProgress_Params',
      packedSize: 56,
      fields: [
        { name: 'upload_total', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'uploaded', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'download_total', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'downloaded', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'result', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.BackgroundFetchResultSpec, nullable: false },
        { name: 'failure_reason', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.BackgroundFetchFailureReasonSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnRecordsUnavailable
blink.mojom.BackgroundFetchRegistrationObserver_OnRecordsUnavailable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BackgroundFetchRegistrationObserver.OnRecordsUnavailable_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnRequestCompleted
blink.mojom.BackgroundFetchRegistrationObserver_OnRequestCompleted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BackgroundFetchRegistrationObserver.OnRequestCompleted_Params',
      packedSize: 24,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FetchAPIRequestSpec, nullable: false },
        { name: 'response', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.FetchAPIResponseSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.BackgroundFetchRegistrationObserverPtr = blink.mojom.BackgroundFetchRegistrationObserverRemote;
blink.mojom.BackgroundFetchRegistrationObserverRequest = blink.mojom.BackgroundFetchRegistrationObserverPendingReceiver;


// Interface: BackgroundFetchService
blink.mojom.BackgroundFetchService = {};

blink.mojom.BackgroundFetchServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.BackgroundFetchServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.BackgroundFetchService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.BackgroundFetchServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.BackgroundFetchServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.BackgroundFetchServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  fetch(service_worker_registration_id, developer_id, requests, options, icon, ukm_data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.BackgroundFetchService_Fetch_ParamsSpec,
      blink.mojom.BackgroundFetchService_Fetch_ResponseParamsSpec,
      [service_worker_registration_id, developer_id, requests, options, icon, ukm_data]);
  }

  getRegistration(service_worker_registration_id, developer_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.BackgroundFetchService_GetRegistration_ParamsSpec,
      blink.mojom.BackgroundFetchService_GetRegistration_ResponseParamsSpec,
      [service_worker_registration_id, developer_id]);
  }

  getDeveloperIds(service_worker_registration_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.BackgroundFetchService_GetDeveloperIds_ParamsSpec,
      blink.mojom.BackgroundFetchService_GetDeveloperIds_ResponseParamsSpec,
      [service_worker_registration_id]);
  }

  getIconDisplaySize() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.BackgroundFetchService_GetIconDisplaySize_ParamsSpec,
      blink.mojom.BackgroundFetchService_GetIconDisplaySize_ResponseParamsSpec,
      []);
  }

};

blink.mojom.BackgroundFetchService.getRemote = function() {
  let remote = new blink.mojom.BackgroundFetchServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.BackgroundFetchService',
    'context');
  return remote.$;
};

// ParamsSpec for Fetch
blink.mojom.BackgroundFetchService_Fetch_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BackgroundFetchService.Fetch_Params',
      packedSize: 56,
      fields: [
        { name: 'service_worker_registration_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'developer_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'requests', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'options', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.BackgroundFetchOptionsSpec, nullable: false },
        { name: 'icon', packedOffset: 32, packedBitOffset: 0, type: skia.mojom.BitmapN32Spec, nullable: true },
        { name: 'ukm_data', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.BackgroundFetchUkmDataSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.BackgroundFetchService_Fetch_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BackgroundFetchService.Fetch_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.BackgroundFetchErrorSpec, nullable: false },
        { name: 'registration', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.BackgroundFetchRegistrationSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetRegistration
blink.mojom.BackgroundFetchService_GetRegistration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BackgroundFetchService.GetRegistration_Params',
      packedSize: 24,
      fields: [
        { name: 'service_worker_registration_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'developer_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.BackgroundFetchService_GetRegistration_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BackgroundFetchService.GetRegistration_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.BackgroundFetchErrorSpec, nullable: false },
        { name: 'registration', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.BackgroundFetchRegistrationSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetDeveloperIds
blink.mojom.BackgroundFetchService_GetDeveloperIds_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BackgroundFetchService.GetDeveloperIds_Params',
      packedSize: 16,
      fields: [
        { name: 'service_worker_registration_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.BackgroundFetchService_GetDeveloperIds_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BackgroundFetchService.GetDeveloperIds_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.BackgroundFetchErrorSpec, nullable: false },
        { name: 'developer_ids', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetIconDisplaySize
blink.mojom.BackgroundFetchService_GetIconDisplaySize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BackgroundFetchService.GetIconDisplaySize_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.BackgroundFetchService_GetIconDisplaySize_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BackgroundFetchService.GetIconDisplaySize_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'icon_size_pixels', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.BackgroundFetchServicePtr = blink.mojom.BackgroundFetchServiceRemote;
blink.mojom.BackgroundFetchServiceRequest = blink.mojom.BackgroundFetchServicePendingReceiver;


// Interface: BackgroundFetchRegistrationService
blink.mojom.BackgroundFetchRegistrationService = {};

blink.mojom.BackgroundFetchRegistrationServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.BackgroundFetchRegistrationServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.BackgroundFetchRegistrationService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.BackgroundFetchRegistrationServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.BackgroundFetchRegistrationServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.BackgroundFetchRegistrationServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updateUI(title, icon) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.BackgroundFetchRegistrationService_UpdateUI_ParamsSpec,
      blink.mojom.BackgroundFetchRegistrationService_UpdateUI_ResponseParamsSpec,
      [title, icon]);
  }

  abort() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.BackgroundFetchRegistrationService_Abort_ParamsSpec,
      blink.mojom.BackgroundFetchRegistrationService_Abort_ResponseParamsSpec,
      []);
  }

  matchRequests(request_to_match, cache_query_options, match_all) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.BackgroundFetchRegistrationService_MatchRequests_ParamsSpec,
      blink.mojom.BackgroundFetchRegistrationService_MatchRequests_ResponseParamsSpec,
      [request_to_match, cache_query_options, match_all]);
  }

  addRegistrationObserver(observer) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.BackgroundFetchRegistrationService_AddRegistrationObserver_ParamsSpec,
      null,
      [observer]);
  }

};

blink.mojom.BackgroundFetchRegistrationService.getRemote = function() {
  let remote = new blink.mojom.BackgroundFetchRegistrationServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.BackgroundFetchRegistrationService',
    'context');
  return remote.$;
};

// ParamsSpec for UpdateUI
blink.mojom.BackgroundFetchRegistrationService_UpdateUI_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BackgroundFetchRegistrationService.UpdateUI_Params',
      packedSize: 24,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'icon', packedOffset: 8, packedBitOffset: 0, type: skia.mojom.BitmapN32Spec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.BackgroundFetchRegistrationService_UpdateUI_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BackgroundFetchRegistrationService.UpdateUI_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.BackgroundFetchErrorSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Abort
blink.mojom.BackgroundFetchRegistrationService_Abort_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BackgroundFetchRegistrationService.Abort_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.BackgroundFetchRegistrationService_Abort_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BackgroundFetchRegistrationService.Abort_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.BackgroundFetchErrorSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for MatchRequests
blink.mojom.BackgroundFetchRegistrationService_MatchRequests_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BackgroundFetchRegistrationService.MatchRequests_Params',
      packedSize: 32,
      fields: [
        { name: 'request_to_match', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FetchAPIRequestSpec, nullable: true },
        { name: 'cache_query_options', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.CacheQueryOptionsSpec, nullable: true },
        { name: 'match_all', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.BackgroundFetchRegistrationService_MatchRequests_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BackgroundFetchRegistrationService.MatchRequests_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'fetches', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddRegistrationObserver
blink.mojom.BackgroundFetchRegistrationService_AddRegistrationObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BackgroundFetchRegistrationService.AddRegistrationObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.BackgroundFetchRegistrationServicePtr = blink.mojom.BackgroundFetchRegistrationServiceRemote;
blink.mojom.BackgroundFetchRegistrationServiceRequest = blink.mojom.BackgroundFetchRegistrationServicePendingReceiver;

