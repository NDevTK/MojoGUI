// Auto-generated MojoJS binding
// Source: chromium_src/components/browsing_topics/mojom/browsing_topics_internals.mojom
// Module: browsing_topics.mojom

'use strict';

// Module namespace
var browsing_topics = browsing_topics || {};
browsing_topics.mojom = browsing_topics.mojom || {};


// Struct: WebUIBrowsingTopicsConfiguration
browsing_topics.mojom.WebUIBrowsingTopicsConfigurationSpec = {
  $: {
    structSpec: {
      name: 'browsing_topics.mojom.WebUIBrowsingTopicsConfiguration',
      packedSize: 88,
      fields: [
        { name: 'browsing_topics_enabled', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'privacy_sandbox_ads_apis_override_enabled', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'override_privacy_sandbox_settings_local_testing_enabled', packedOffset: 8, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'browsing_topics_bypass_ip_is_publicly_routable_check_enabled', packedOffset: 8, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'browsing_topics_document_api_enabled', packedOffset: 8, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
        { name: 'config_version', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'browsing_topics_parameters_enabled', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'number_of_epochs_to_expose', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'time_period_per_epoch', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
        { name: 'number_of_top_topics_per_epoch', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'use_random_topic_probability_percent', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'max_epoch_introduction_delay', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
        { name: 'number_of_epochs_of_observation_data_to_use_for_filtering', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'max_number_of_api_usage_context_domains_to_keep_per_topic', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'max_number_of_api_usage_context_entries_to_load_per_epoch', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'max_number_of_api_usage_context_domains_to_store_per_page_load', packedOffset: 68, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'taxonomy_version', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'disabled_topics_list', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WebUITopic
browsing_topics.mojom.WebUITopicSpec = {
  $: {
    structSpec: {
      name: 'browsing_topics.mojom.WebUITopic',
      packedSize: 40,
      fields: [
        { name: 'topic_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'topic_name', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'is_real_topic', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'observed_by_domains', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WebUIEpoch
browsing_topics.mojom.WebUIEpochSpec = {
  $: {
    structSpec: {
      name: 'browsing_topics.mojom.WebUIEpoch',
      packedSize: 40,
      fields: [
        { name: 'topics', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'calculation_time', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
        { name: 'model_version', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'taxonomy_version', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WebUIBrowsingTopicsState
browsing_topics.mojom.WebUIBrowsingTopicsStateSpec = {
  $: {
    structSpec: {
      name: 'browsing_topics.mojom.WebUIBrowsingTopicsState',
      packedSize: 24,
      fields: [
        { name: 'epochs', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'next_scheduled_calculation_time', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WebUIModelInfo
browsing_topics.mojom.WebUIModelInfoSpec = {
  $: {
    structSpec: {
      name: 'browsing_topics.mojom.WebUIModelInfo',
      packedSize: 24,
      fields: [
        { name: 'model_version', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'model_file_path', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: PageHandler
browsing_topics.mojom.PageHandler = {};

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
      []);
  }

  getBrowsingTopicsState(calculate_now) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      browsing_topics.mojom.PageHandler_GetBrowsingTopicsState_ParamsSpec,
      browsing_topics.mojom.PageHandler_GetBrowsingTopicsState_ResponseParamsSpec,
      [calculate_now]);
  }

  getModelInfo() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      browsing_topics.mojom.PageHandler_GetModelInfo_ParamsSpec,
      browsing_topics.mojom.PageHandler_GetModelInfo_ResponseParamsSpec,
      []);
  }

  classifyHosts(hosts) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      browsing_topics.mojom.PageHandler_ClassifyHosts_ParamsSpec,
      browsing_topics.mojom.PageHandler_ClassifyHosts_ResponseParamsSpec,
      [hosts]);
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

// ParamsSpec for GetBrowsingTopicsConfiguration
browsing_topics.mojom.PageHandler_GetBrowsingTopicsConfiguration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'browsing_topics.mojom.PageHandler.GetBrowsingTopicsConfiguration_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

browsing_topics.mojom.PageHandler_GetBrowsingTopicsConfiguration_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'browsing_topics.mojom.PageHandler.GetBrowsingTopicsConfiguration_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'config', packedOffset: 8, packedBitOffset: 0, type: browsing_topics.mojom.WebUIBrowsingTopicsConfigurationSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetBrowsingTopicsState
browsing_topics.mojom.PageHandler_GetBrowsingTopicsState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'browsing_topics.mojom.PageHandler.GetBrowsingTopicsState_Params',
      packedSize: 16,
      fields: [
        { name: 'calculate_now', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

browsing_topics.mojom.PageHandler_GetBrowsingTopicsState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'browsing_topics.mojom.PageHandler.GetBrowsingTopicsState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: browsing_topics.mojom.WebUIGetBrowsingTopicsStateResultSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetModelInfo
browsing_topics.mojom.PageHandler_GetModelInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'browsing_topics.mojom.PageHandler.GetModelInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

browsing_topics.mojom.PageHandler_GetModelInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'browsing_topics.mojom.PageHandler.GetModelInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: browsing_topics.mojom.WebUIGetModelInfoResultSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClassifyHosts
browsing_topics.mojom.PageHandler_ClassifyHosts_ParamsSpec = {
  $: {
    structSpec: {
      name: 'browsing_topics.mojom.PageHandler.ClassifyHosts_Params',
      packedSize: 16,
      fields: [
        { name: 'hosts', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

browsing_topics.mojom.PageHandler_ClassifyHosts_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'browsing_topics.mojom.PageHandler.ClassifyHosts_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'topics_for_hosts', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
browsing_topics.mojom.PageHandlerPtr = browsing_topics.mojom.PageHandlerRemote;
browsing_topics.mojom.PageHandlerRequest = browsing_topics.mojom.PageHandlerPendingReceiver;

