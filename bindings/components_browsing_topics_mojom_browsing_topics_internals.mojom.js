// Auto-generated MojoJS binding
// Source: chromium_src/components/browsing_topics/mojom/browsing_topics_internals.mojom
// Module: browsing_topics.mojom

'use strict';

// Module namespace
var browsing_topics = browsing_topics || {};
browsing_topics.mojom = browsing_topics.mojom || {};

browsing_topics.mojom.WebUIGetBrowsingTopicsStateResultSpec = { $: {} };
browsing_topics.mojom.WebUIGetModelInfoResultSpec = { $: {} };
browsing_topics.mojom.WebUIBrowsingTopicsConfigurationSpec = { $: {} };
browsing_topics.mojom.WebUITopicSpec = { $: {} };
browsing_topics.mojom.WebUIEpochSpec = { $: {} };
browsing_topics.mojom.WebUIBrowsingTopicsStateSpec = { $: {} };
browsing_topics.mojom.WebUIModelInfoSpec = { $: {} };
browsing_topics.mojom.PageHandler = {};
browsing_topics.mojom.PageHandler.$interfaceName = 'browsing_topics.mojom.PageHandler';
browsing_topics.mojom.PageHandler_GetBrowsingTopicsConfiguration_ParamsSpec = { $: {} };
browsing_topics.mojom.PageHandler_GetBrowsingTopicsConfiguration_ResponseParamsSpec = { $: {} };
browsing_topics.mojom.PageHandler_GetBrowsingTopicsState_ParamsSpec = { $: {} };
browsing_topics.mojom.PageHandler_GetBrowsingTopicsState_ResponseParamsSpec = { $: {} };
browsing_topics.mojom.PageHandler_GetModelInfo_ParamsSpec = { $: {} };
browsing_topics.mojom.PageHandler_GetModelInfo_ResponseParamsSpec = { $: {} };
browsing_topics.mojom.PageHandler_ClassifyHosts_ParamsSpec = { $: {} };
browsing_topics.mojom.PageHandler_ClassifyHosts_ResponseParamsSpec = { $: {} };

// Union: WebUIGetBrowsingTopicsStateResult
mojo.internal.Union(
    browsing_topics.mojom.WebUIGetBrowsingTopicsStateResultSpec, 'browsing_topics.mojom.WebUIGetBrowsingTopicsStateResult', {
      'override_status_message': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'browsing_topics_state': {
        'ordinal': 1,
        'type': browsing_topics.mojom.WebUIBrowsingTopicsStateSpec.$,
        'nullable': false,
      },
    });

// Union: WebUIGetModelInfoResult
mojo.internal.Union(
    browsing_topics.mojom.WebUIGetModelInfoResultSpec, 'browsing_topics.mojom.WebUIGetModelInfoResult', {
      'override_status_message': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'model_info': {
        'ordinal': 1,
        'type': browsing_topics.mojom.WebUIModelInfoSpec.$,
        'nullable': false,
      },
    });

// Struct: WebUIBrowsingTopicsConfiguration
mojo.internal.Struct(
    browsing_topics.mojom.WebUIBrowsingTopicsConfigurationSpec, 'browsing_topics.mojom.WebUIBrowsingTopicsConfiguration', [
      mojo.internal.StructField('time_period_per_epoch', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_epoch_introduction_delay', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('disabled_topics_list', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('config_version', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('number_of_epochs_to_expose', 28, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('number_of_top_topics_per_epoch', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('use_random_topic_probability_percent', 36, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('number_of_epochs_of_observation_data_to_use_for_filtering', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('max_number_of_api_usage_context_domains_to_keep_per_topic', 44, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('max_number_of_api_usage_context_entries_to_load_per_epoch', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('max_number_of_api_usage_context_domains_to_store_per_page_load', 52, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('taxonomy_version', 56, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('browsing_topics_enabled', 60, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('privacy_sandbox_ads_apis_override_enabled', 60, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('override_privacy_sandbox_settings_local_testing_enabled', 60, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('browsing_topics_bypass_ip_is_publicly_routable_check_enabled', 60, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('browsing_topics_document_api_enabled', 60, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('browsing_topics_parameters_enabled', 60, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: WebUITopic
mojo.internal.Struct(
    browsing_topics.mojom.WebUITopicSpec, 'browsing_topics.mojom.WebUITopic', [
      mojo.internal.StructField('topic_name', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('observed_by_domains', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('topic_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_real_topic', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: WebUIEpoch
mojo.internal.Struct(
    browsing_topics.mojom.WebUIEpochSpec, 'browsing_topics.mojom.WebUIEpoch', [
      mojo.internal.StructField('topics', 0, 0, mojo.internal.Array(browsing_topics.mojom.WebUITopicSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('calculation_time', 8, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('model_version', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('taxonomy_version', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: WebUIBrowsingTopicsState
mojo.internal.Struct(
    browsing_topics.mojom.WebUIBrowsingTopicsStateSpec, 'browsing_topics.mojom.WebUIBrowsingTopicsState', [
      mojo.internal.StructField('epochs', 0, 0, mojo.internal.Array(browsing_topics.mojom.WebUIEpochSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('next_scheduled_calculation_time', 8, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: WebUIModelInfo
mojo.internal.Struct(
    browsing_topics.mojom.WebUIModelInfoSpec, 'browsing_topics.mojom.WebUIModelInfo', [
      mojo.internal.StructField('model_version', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('model_file_path', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PageHandler
mojo.internal.Struct(
    browsing_topics.mojom.PageHandler_GetBrowsingTopicsConfiguration_ParamsSpec, 'browsing_topics.mojom.PageHandler_GetBrowsingTopicsConfiguration_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    browsing_topics.mojom.PageHandler_GetBrowsingTopicsConfiguration_ResponseParamsSpec, 'browsing_topics.mojom.PageHandler_GetBrowsingTopicsConfiguration_ResponseParams', [
      mojo.internal.StructField('config', 0, 0, browsing_topics.mojom.WebUIBrowsingTopicsConfigurationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    browsing_topics.mojom.PageHandler_GetBrowsingTopicsState_ParamsSpec, 'browsing_topics.mojom.PageHandler_GetBrowsingTopicsState_Params', [
      mojo.internal.StructField('calculate_now', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    browsing_topics.mojom.PageHandler_GetBrowsingTopicsState_ResponseParamsSpec, 'browsing_topics.mojom.PageHandler_GetBrowsingTopicsState_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, browsing_topics.mojom.WebUIGetBrowsingTopicsStateResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    browsing_topics.mojom.PageHandler_GetModelInfo_ParamsSpec, 'browsing_topics.mojom.PageHandler_GetModelInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    browsing_topics.mojom.PageHandler_GetModelInfo_ResponseParamsSpec, 'browsing_topics.mojom.PageHandler_GetModelInfo_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, browsing_topics.mojom.WebUIGetModelInfoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    browsing_topics.mojom.PageHandler_ClassifyHosts_ParamsSpec, 'browsing_topics.mojom.PageHandler_ClassifyHosts_Params', [
      mojo.internal.StructField('hosts', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    browsing_topics.mojom.PageHandler_ClassifyHosts_ResponseParamsSpec, 'browsing_topics.mojom.PageHandler_ClassifyHosts_ResponseParams', [
      mojo.internal.StructField('topics_for_hosts', 0, 0, mojo.internal.Array(mojo.internal.Array(browsing_topics.mojom.WebUITopicSpec.$, false), false), null, false, 0, undefined),
    ],
    [[0, 16]]);

browsing_topics.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

browsing_topics.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'browsing_topics.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      browsing_topics.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new browsing_topics.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

browsing_topics.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getBrowsingTopicsConfiguration() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      browsing_topics.mojom.PageHandler_GetBrowsingTopicsConfiguration_ParamsSpec,
      browsing_topics.mojom.PageHandler_GetBrowsingTopicsConfiguration_ResponseParamsSpec,
      [],
      false);
  }

  getBrowsingTopicsState(calculate_now) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      browsing_topics.mojom.PageHandler_GetBrowsingTopicsState_ParamsSpec,
      browsing_topics.mojom.PageHandler_GetBrowsingTopicsState_ResponseParamsSpec,
      [calculate_now],
      false);
  }

  getModelInfo() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      browsing_topics.mojom.PageHandler_GetModelInfo_ParamsSpec,
      browsing_topics.mojom.PageHandler_GetModelInfo_ResponseParamsSpec,
      [],
      false);
  }

  classifyHosts(hosts) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      browsing_topics.mojom.PageHandler_ClassifyHosts_ParamsSpec,
      browsing_topics.mojom.PageHandler_ClassifyHosts_ResponseParamsSpec,
      [hosts],
      false);
  }

};

browsing_topics.mojom.PageHandler.getRemote = function() {
  let remote = new browsing_topics.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'browsing_topics.mojom.PageHandler',
    'context');
  return remote.$;
};

browsing_topics.mojom.PageHandlerPtr = browsing_topics.mojom.PageHandlerRemote;
browsing_topics.mojom.PageHandlerRequest = browsing_topics.mojom.PageHandlerPendingReceiver;

