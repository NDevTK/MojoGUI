// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/background_fetch/background_fetch.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var skia = skia || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var ui = ui || {};
var gfx = gfx || {};

blink.mojom.BackgroundFetchErrorSpec = { $: mojo.internal.Enum() };
blink.mojom.BackgroundFetchResultSpec = { $: mojo.internal.Enum() };
blink.mojom.BackgroundFetchFailureReasonSpec = { $: mojo.internal.Enum() };
blink.mojom.BackgroundFetchSettledFetchSpec = { $: {} };
blink.mojom.BackgroundFetchOptionsSpec = { $: {} };
blink.mojom.BackgroundFetchRegistrationDataSpec = { $: {} };
blink.mojom.BackgroundFetchRegistrationSpec = { $: {} };
blink.mojom.BackgroundFetchUkmDataSpec = { $: {} };
blink.mojom.BackgroundFetchRegistrationObserver = {};
blink.mojom.BackgroundFetchRegistrationObserver.$interfaceName = 'blink.mojom.BackgroundFetchRegistrationObserver';
blink.mojom.BackgroundFetchRegistrationObserver_OnProgress_ParamsSpec = { $: {} };
blink.mojom.BackgroundFetchRegistrationObserver_OnRecordsUnavailable_ParamsSpec = { $: {} };
blink.mojom.BackgroundFetchRegistrationObserver_OnRequestCompleted_ParamsSpec = { $: {} };
blink.mojom.BackgroundFetchService = {};
blink.mojom.BackgroundFetchService.$interfaceName = 'blink.mojom.BackgroundFetchService';
blink.mojom.BackgroundFetchService_Fetch_ParamsSpec = { $: {} };
blink.mojom.BackgroundFetchService_Fetch_ResponseParamsSpec = { $: {} };
blink.mojom.BackgroundFetchService_GetRegistration_ParamsSpec = { $: {} };
blink.mojom.BackgroundFetchService_GetRegistration_ResponseParamsSpec = { $: {} };
blink.mojom.BackgroundFetchService_GetDeveloperIds_ParamsSpec = { $: {} };
blink.mojom.BackgroundFetchService_GetDeveloperIds_ResponseParamsSpec = { $: {} };
blink.mojom.BackgroundFetchService_GetIconDisplaySize_ParamsSpec = { $: {} };
blink.mojom.BackgroundFetchService_GetIconDisplaySize_ResponseParamsSpec = { $: {} };
blink.mojom.BackgroundFetchRegistrationService = {};
blink.mojom.BackgroundFetchRegistrationService.$interfaceName = 'blink.mojom.BackgroundFetchRegistrationService';
blink.mojom.BackgroundFetchRegistrationService_UpdateUI_ParamsSpec = { $: {} };
blink.mojom.BackgroundFetchRegistrationService_UpdateUI_ResponseParamsSpec = { $: {} };
blink.mojom.BackgroundFetchRegistrationService_Abort_ParamsSpec = { $: {} };
blink.mojom.BackgroundFetchRegistrationService_Abort_ResponseParamsSpec = { $: {} };
blink.mojom.BackgroundFetchRegistrationService_MatchRequests_ParamsSpec = { $: {} };
blink.mojom.BackgroundFetchRegistrationService_MatchRequests_ResponseParamsSpec = { $: {} };
blink.mojom.BackgroundFetchRegistrationService_AddRegistrationObserver_ParamsSpec = { $: {} };

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
mojo.internal.Struct(
    blink.mojom.BackgroundFetchSettledFetchSpec, 'blink.mojom.BackgroundFetchSettledFetch', [
      mojo.internal.StructField('request', 0, 0, blink.mojom.FetchAPIRequestSpec, null, false, 0, undefined),
      mojo.internal.StructField('response', 8, 0, blink.mojom.FetchAPIResponseSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BackgroundFetchOptions
mojo.internal.Struct(
    blink.mojom.BackgroundFetchOptionsSpec, 'blink.mojom.BackgroundFetchOptions', [
      mojo.internal.StructField('icons', 0, 0, mojo.internal.Array(blink.mojom.ManifestImageResourceSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('download_total', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('title', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: BackgroundFetchRegistrationData
mojo.internal.Struct(
    blink.mojom.BackgroundFetchRegistrationDataSpec, 'blink.mojom.BackgroundFetchRegistrationData', [
      mojo.internal.StructField('developer_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('upload_total', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('uploaded', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('download_total', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('downloaded', 32, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('result', 40, 0, blink.mojom.BackgroundFetchResultSpec, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: BackgroundFetchRegistration
mojo.internal.Struct(
    blink.mojom.BackgroundFetchRegistrationSpec, 'blink.mojom.BackgroundFetchRegistration', [
      mojo.internal.StructField('registration_data', 0, 0, blink.mojom.BackgroundFetchRegistrationDataSpec, null, false, 0, undefined),
      mojo.internal.StructField('registration_interface', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.BackgroundFetchRegistrationServiceRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BackgroundFetchUkmData
mojo.internal.Struct(
    blink.mojom.BackgroundFetchUkmDataSpec, 'blink.mojom.BackgroundFetchUkmData', [
      mojo.internal.StructField('ideal_to_chosen_icon_size', 0, 0, mojo.internal.Int64, -1, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: BackgroundFetchRegistrationObserver
mojo.internal.Struct(
    blink.mojom.BackgroundFetchRegistrationObserver_OnProgress_ParamsSpec, 'blink.mojom.BackgroundFetchRegistrationObserver_OnProgress_Params', [
      mojo.internal.StructField('upload_total', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('uploaded', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('download_total', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('downloaded', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('result', 32, 0, blink.mojom.BackgroundFetchResultSpec, null, false, 0, undefined),
      mojo.internal.StructField('failure_reason', 36, 0, blink.mojom.BackgroundFetchFailureReasonSpec, null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    blink.mojom.BackgroundFetchRegistrationObserver_OnRecordsUnavailable_ParamsSpec, 'blink.mojom.BackgroundFetchRegistrationObserver_OnRecordsUnavailable_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.BackgroundFetchRegistrationObserver_OnRequestCompleted_ParamsSpec, 'blink.mojom.BackgroundFetchRegistrationObserver_OnRequestCompleted_Params', [
      mojo.internal.StructField('request', 0, 0, blink.mojom.FetchAPIRequestSpec, null, false, 0, undefined),
      mojo.internal.StructField('response', 8, 0, blink.mojom.FetchAPIResponseSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

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
      [upload_total, uploaded, download_total, downloaded, result, failure_reason],
      false);
  }

  onRecordsUnavailable() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.BackgroundFetchRegistrationObserver_OnRecordsUnavailable_ParamsSpec,
      null,
      [],
      false);
  }

  onRequestCompleted(request, response) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.BackgroundFetchRegistrationObserver_OnRequestCompleted_ParamsSpec,
      null,
      [request, response],
      false);
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

blink.mojom.BackgroundFetchRegistrationObserverPtr = blink.mojom.BackgroundFetchRegistrationObserverRemote;
blink.mojom.BackgroundFetchRegistrationObserverRequest = blink.mojom.BackgroundFetchRegistrationObserverPendingReceiver;


// Interface: BackgroundFetchService
mojo.internal.Struct(
    blink.mojom.BackgroundFetchService_Fetch_ParamsSpec, 'blink.mojom.BackgroundFetchService_Fetch_Params', [
      mojo.internal.StructField('service_worker_registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('developer_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('requests', 16, 0, mojo.internal.Array(blink.mojom.FetchAPIRequestSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('options', 24, 0, blink.mojom.BackgroundFetchOptionsSpec, null, false, 0, undefined),
      mojo.internal.StructField('icon', 32, 0, skia.mojom.BitmapN32Spec, null, true, 0, undefined),
      mojo.internal.StructField('ukm_data', 40, 0, blink.mojom.BackgroundFetchUkmDataSpec, null, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    blink.mojom.BackgroundFetchService_Fetch_ResponseParamsSpec, 'blink.mojom.BackgroundFetchService_Fetch_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, blink.mojom.BackgroundFetchErrorSpec, null, false, 0, undefined),
      mojo.internal.StructField('registration', 8, 0, blink.mojom.BackgroundFetchRegistrationSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.BackgroundFetchService_GetRegistration_ParamsSpec, 'blink.mojom.BackgroundFetchService_GetRegistration_Params', [
      mojo.internal.StructField('service_worker_registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('developer_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.BackgroundFetchService_GetRegistration_ResponseParamsSpec, 'blink.mojom.BackgroundFetchService_GetRegistration_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, blink.mojom.BackgroundFetchErrorSpec, null, false, 0, undefined),
      mojo.internal.StructField('registration', 8, 0, blink.mojom.BackgroundFetchRegistrationSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.BackgroundFetchService_GetDeveloperIds_ParamsSpec, 'blink.mojom.BackgroundFetchService_GetDeveloperIds_Params', [
      mojo.internal.StructField('service_worker_registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.BackgroundFetchService_GetDeveloperIds_ResponseParamsSpec, 'blink.mojom.BackgroundFetchService_GetDeveloperIds_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, blink.mojom.BackgroundFetchErrorSpec, null, false, 0, undefined),
      mojo.internal.StructField('developer_ids', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.BackgroundFetchService_GetIconDisplaySize_ParamsSpec, 'blink.mojom.BackgroundFetchService_GetIconDisplaySize_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.BackgroundFetchService_GetIconDisplaySize_ResponseParamsSpec, 'blink.mojom.BackgroundFetchService_GetIconDisplaySize_ResponseParams', [
      mojo.internal.StructField('icon_size_pixels', 0, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [service_worker_registration_id, developer_id, requests, options, icon, ukm_data],
      false);
  }

  getRegistration(service_worker_registration_id, developer_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.BackgroundFetchService_GetRegistration_ParamsSpec,
      blink.mojom.BackgroundFetchService_GetRegistration_ResponseParamsSpec,
      [service_worker_registration_id, developer_id],
      false);
  }

  getDeveloperIds(service_worker_registration_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.BackgroundFetchService_GetDeveloperIds_ParamsSpec,
      blink.mojom.BackgroundFetchService_GetDeveloperIds_ResponseParamsSpec,
      [service_worker_registration_id],
      false);
  }

  getIconDisplaySize() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.BackgroundFetchService_GetIconDisplaySize_ParamsSpec,
      blink.mojom.BackgroundFetchService_GetIconDisplaySize_ResponseParamsSpec,
      [],
      false);
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

blink.mojom.BackgroundFetchServicePtr = blink.mojom.BackgroundFetchServiceRemote;
blink.mojom.BackgroundFetchServiceRequest = blink.mojom.BackgroundFetchServicePendingReceiver;


// Interface: BackgroundFetchRegistrationService
mojo.internal.Struct(
    blink.mojom.BackgroundFetchRegistrationService_UpdateUI_ParamsSpec, 'blink.mojom.BackgroundFetchRegistrationService_UpdateUI_Params', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('icon', 8, 0, skia.mojom.BitmapN32Spec, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.BackgroundFetchRegistrationService_UpdateUI_ResponseParamsSpec, 'blink.mojom.BackgroundFetchRegistrationService_UpdateUI_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, blink.mojom.BackgroundFetchErrorSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.BackgroundFetchRegistrationService_Abort_ParamsSpec, 'blink.mojom.BackgroundFetchRegistrationService_Abort_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.BackgroundFetchRegistrationService_Abort_ResponseParamsSpec, 'blink.mojom.BackgroundFetchRegistrationService_Abort_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, blink.mojom.BackgroundFetchErrorSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.BackgroundFetchRegistrationService_MatchRequests_ParamsSpec, 'blink.mojom.BackgroundFetchRegistrationService_MatchRequests_Params', [
      mojo.internal.StructField('request_to_match', 0, 0, blink.mojom.FetchAPIRequestSpec, null, true, 0, undefined),
      mojo.internal.StructField('cache_query_options', 8, 0, blink.mojom.CacheQueryOptionsSpec, null, true, 0, undefined),
      mojo.internal.StructField('match_all', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.BackgroundFetchRegistrationService_MatchRequests_ResponseParamsSpec, 'blink.mojom.BackgroundFetchRegistrationService_MatchRequests_ResponseParams', [
      mojo.internal.StructField('fetches', 0, 0, mojo.internal.Array(blink.mojom.BackgroundFetchSettledFetchSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.BackgroundFetchRegistrationService_AddRegistrationObserver_ParamsSpec, 'blink.mojom.BackgroundFetchRegistrationService_AddRegistrationObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.BackgroundFetchRegistrationObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [title, icon],
      false);
  }

  abort() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.BackgroundFetchRegistrationService_Abort_ParamsSpec,
      blink.mojom.BackgroundFetchRegistrationService_Abort_ResponseParamsSpec,
      [],
      false);
  }

  matchRequests(request_to_match, cache_query_options, match_all) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.BackgroundFetchRegistrationService_MatchRequests_ParamsSpec,
      blink.mojom.BackgroundFetchRegistrationService_MatchRequests_ResponseParamsSpec,
      [request_to_match, cache_query_options, match_all],
      false);
  }

  addRegistrationObserver(observer) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.BackgroundFetchRegistrationService_AddRegistrationObserver_ParamsSpec,
      null,
      [observer],
      false);
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

blink.mojom.BackgroundFetchRegistrationServicePtr = blink.mojom.BackgroundFetchRegistrationServiceRemote;
blink.mojom.BackgroundFetchRegistrationServiceRequest = blink.mojom.BackgroundFetchRegistrationServicePendingReceiver;

