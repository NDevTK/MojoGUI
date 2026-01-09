// Auto-generated MojoJS binding
// Source: chromium_src/components/browsing_topics/mojom/browsing_topics_internals.mojom
// Module: browsing_topics.mojom

'use strict';

// Module namespace
var browsing_topics = browsing_topics || {};
browsing_topics.mojom = browsing_topics.mojom || {};


// Union: WebUIGetBrowsingTopicsStateResult
browsing_topics.mojom.WebUIGetBrowsingTopicsStateResultSpec = { $: mojo.internal.Union(
    'browsing_topics.mojom.WebUIGetBrowsingTopicsStateResult', {
      'override_status_message': {
        'ordinal': 0,
        'type': mojo.internal.String,
      }},
      'browsing_topics_state': {
        'ordinal': 1,
        'type': browsing_topics.mojom.WebUIBrowsingTopicsStateSpec,
      }},
    })
};

// Union: WebUIGetModelInfoResult
browsing_topics.mojom.WebUIGetModelInfoResultSpec = { $: mojo.internal.Union(
    'browsing_topics.mojom.WebUIGetModelInfoResult', {
      'override_status_message': {
        'ordinal': 0,
        'type': mojo.internal.String,
      }},
      'model_info': {
        'ordinal': 1,
        'type': browsing_topics.mojom.WebUIModelInfoSpec,
      }},
    })
};

// Struct: WebUIBrowsingTopicsConfiguration
browsing_topics.mojom.WebUIBrowsingTopicsConfigurationSpec = {
  $: {
    structSpec: {
      name: 'browsing_topics.mojom.WebUIBrowsingTopicsConfiguration',
      packedSize: 72,
      fields: [
        { name: 'browsing_topics_enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'privacy_sandbox_ads_apis_override_enabled', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'override_privacy_sandbox_settings_local_testing_enabled', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'browsing_topics_bypass_ip_is_publicly_routable_check_enabled', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'browsing_topics_document_api_enabled', packedOffset: 0, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'config_version', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'browsing_topics_parameters_enabled', packedOffset: 0, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'number_of_epochs_to_expose', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'time_period_per_epoch', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'number_of_top_topics_per_epoch', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'use_random_topic_probability_percent', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'max_epoch_introduction_delay', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'number_of_epochs_of_observation_data_to_use_for_filtering', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'max_number_of_api_usage_context_domains_to_keep_per_topic', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'max_number_of_api_usage_context_entries_to_load_per_epoch', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'max_number_of_api_usage_context_domains_to_store_per_page_load', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'taxonomy_version', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'disabled_topics_list', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// Struct: WebUITopic
browsing_topics.mojom.WebUITopicSpec = {
  $: {
    structSpec: {
      name: 'browsing_topics.mojom.WebUITopic',
      packedSize: 32,
      fields: [
        { name: 'topic_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'topic_name', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'is_real_topic', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'observed_by_domains', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'topics', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(browsing_topics.mojom.WebUITopicSpec, false), nullable: false, minVersion: 0 },
        { name: 'calculation_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'model_version', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'taxonomy_version', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
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
        { name: 'epochs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(browsing_topics.mojom.WebUIEpochSpec, false), nullable: false, minVersion: 0 },
        { name: 'next_scheduled_calculation_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'model_version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'model_file_path', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

browsing_topics.mojom.PageHandler_GetBrowsingTopicsConfiguration_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: browsing_topics.mojom.WebUIBrowsingTopicsConfigurationSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'calculate_now', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

browsing_topics.mojom.PageHandler_GetBrowsingTopicsState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: browsing_topics.mojom.WebUIGetBrowsingTopicsStateResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

browsing_topics.mojom.PageHandler_GetModelInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: browsing_topics.mojom.WebUIGetModelInfoResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'hosts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

browsing_topics.mojom.PageHandler_ClassifyHosts_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'topics_for_hosts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Array(browsing_topics.mojom.WebUITopicSpec, false), false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
browsing_topics.mojom.PageHandlerPtr = browsing_topics.mojom.PageHandlerRemote;
browsing_topics.mojom.PageHandlerRequest = browsing_topics.mojom.PageHandlerPendingReceiver;

