// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/navigation/navigation_params.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: NavigationType
blink.mojom.NavigationType = {
  RELOAD: 0,
  RELOAD_BYPASSING_CACHE: 1,
  RESTORE: 2,
  RESTORE_WITH_POST: 3,
  HISTORY_SAME_DOCUMENT: 4,
  HISTORY_DIFFERENT_DOCUMENT: 5,
  SAME_DOCUMENT: 6,
  DIFFERENT_DOCUMENT: 7,
};
blink.mojom.NavigationTypeSpec = { $: mojo.internal.Enum() };

// Enum: NavigationTypeForNavigationApi
blink.mojom.NavigationTypeForNavigationApi = {
  kPush: 0,
  kTraverse: 1,
  kReplace: 2,
  kReload: 3,
};
blink.mojom.NavigationTypeForNavigationApiSpec = { $: mojo.internal.Enum() };

// Enum: ForceHistoryPush
blink.mojom.ForceHistoryPush = {
  kYes: 0,
  kNo: 1,
};
blink.mojom.ForceHistoryPushSpec = { $: mojo.internal.Enum() };

// Enum: ParentResourceTimingAccess
blink.mojom.ParentResourceTimingAccess = {
  kDoNotReport: 0,
  kReportWithoutResponseDetails: 1,
  kReportWithResponseDetails: 2,
};
blink.mojom.ParentResourceTimingAccessSpec = { $: mojo.internal.Enum() };

// Struct: BeginNavigationParams
blink.mojom.BeginNavigationParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BeginNavigationParams',
      packedSize: 112,
      fields: [
        { name: 'initiator_frame_token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.LocalFrameTokenSpec, nullable: true, minVersion: 0 },
        { name: 'headers', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'load_flags', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'skip_service_worker', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_form_submission', packedOffset: 20, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'was_initiated_by_link_click', packedOffset: 20, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'force_history_push', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.ForceHistoryPushSpec, nullable: false, minVersion: 0 },
        { name: 'searchable_form_url', packedOffset: 32, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'searchable_form_encoding', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'client_side_redirect_url', packedOffset: 48, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'devtools_initiator', packedOffset: 56, packedBitOffset: 0, type: mojo_base.mojom.DictionaryValueSpec, nullable: true, minVersion: 0 },
        { name: 'trust_token_params', packedOffset: 64, packedBitOffset: 0, type: network.mojom.TrustTokenParamsSpec, nullable: true, minVersion: 0 },
        { name: 'impression', packedOffset: 72, packedBitOffset: 0, type: blink.mojom.ImpressionSpec, nullable: true, minVersion: 0 },
        { name: 'before_unload_start', packedOffset: 80, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'before_unload_end', packedOffset: 88, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'initiator_activation_and_ad_status', packedOffset: 28, packedBitOffset: 0, type: blink.mojom.NavigationInitiatorActivationAndAdStatusSpec, nullable: false, minVersion: 0 },
        { name: 'is_container_initiated', packedOffset: 20, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'storage_access_api_status', packedOffset: 96, packedBitOffset: 0, type: network.mojom.StorageAccessApiStatusSpec, nullable: false, minVersion: 0 },
        { name: 'has_rel_opener', packedOffset: 20, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 112}]
    }
  }
};

// Struct: CommonNavigationParams
blink.mojom.CommonNavigationParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CommonNavigationParams',
      packedSize: 136,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'initiator_origin', packedOffset: 8, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: true, minVersion: 0 },
        { name: 'initiator_base_url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'referrer', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.ReferrerSpec, nullable: false, minVersion: 0 },
        { name: 'transition', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'navigation_type', packedOffset: 36, packedBitOffset: 0, type: blink.mojom.NavigationTypeSpec, nullable: false, minVersion: 0 },
        { name: 'download_policy', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.NavigationDownloadPolicySpec, nullable: false, minVersion: 0 },
        { name: 'should_replace_current_entry', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'base_url_for_data_url', packedOffset: 56, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'actual_navigation_start', packedOffset: 64, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'navigation_start', packedOffset: 72, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'method', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'post_data', packedOffset: 88, packedBitOffset: 0, type: network.mojom.URLRequestBodySpec, nullable: true, minVersion: 0 },
        { name: 'source_location', packedOffset: 96, packedBitOffset: 0, type: network.mojom.SourceLocationSpec, nullable: false, minVersion: 0 },
        { name: 'started_from_context_menu', packedOffset: 48, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'has_user_gesture', packedOffset: 48, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'text_fragment_token', packedOffset: 48, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'initiator_origin_trial_features', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int32, false), nullable: false, minVersion: 0 },
        { name: 'href_translate', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_history_navigation_in_new_child_frame', packedOffset: 48, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'input_start', packedOffset: 120, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 136}]
    }
  }
};

// Struct: NavigationTiming
blink.mojom.NavigationTimingSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.NavigationTiming',
      packedSize: 32,
      fields: [
        { name: 'redirect_start', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'redirect_end', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'fetch_start', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: OldPageInfo
blink.mojom.OldPageInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.OldPageInfo',
      packedSize: 24,
      fields: [
        { name: 'frame_token_for_old_main_frame', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.LocalFrameTokenSpec, nullable: false, minVersion: 0 },
        { name: 'new_lifecycle_state_for_old_page', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.PageLifecycleStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: CommitNavigationParams
blink.mojom.CommitNavigationParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CommitNavigationParams',
      packedSize: 344,
      fields: [
        { name: 'origin_to_commit', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'storage_key', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.StorageKeySpec, nullable: false, minVersion: 0 },
        { name: 'is_overriding_user_agent', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'redirects', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(url.mojom.UrlSpec, false), nullable: false, minVersion: 0 },
        { name: 'redirect_response', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.URLResponseHeadSpec, false), nullable: false, minVersion: 0 },
        { name: 'redirect_infos', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.URLRequestRedirectInfoSpec, false), nullable: false, minVersion: 0 },
        { name: 'post_content_type', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'original_url', packedOffset: 56, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'original_method', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'can_load_local_resources', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'page_state', packedOffset: 72, packedBitOffset: 0, type: mojo_base.mojom.ByteStringSpec, nullable: false, minVersion: 0 },
        { name: 'nav_entry_id', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'subframe_unique_names', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo.internal.Bool, false), nullable: false, minVersion: 0 },
        { name: 'intended_as_new_entry', packedOffset: 16, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'pending_history_list_index', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'current_history_list_index', packedOffset: 92, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'current_history_list_length', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'was_discarded', packedOffset: 16, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_view_source', packedOffset: 16, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'should_clear_history_list', packedOffset: 16, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'navigation_timing', packedOffset: 104, packedBitOffset: 0, type: blink.mojom.NavigationTimingSpec, nullable: false, minVersion: 0 },
        { name: 'was_activated', packedOffset: 100, packedBitOffset: 0, type: blink.mojom.WasActivatedOptionSpec, nullable: false, minVersion: 0 },
        { name: 'navigation_token', packedOffset: 112, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'prefetched_signed_exchanges', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.PrefetchedSignedExchangeInfoSpec, false), nullable: false, minVersion: 0 },
        { name: 'data_url_as_string', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_browser_initiated', packedOffset: 16, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'has_ua_visual_transition', packedOffset: 16, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'document_ukm_source_id', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'frame_policy', packedOffset: 144, packedBitOffset: 0, type: blink.mojom.FramePolicySpec, nullable: false, minVersion: 0 },
        { name: 'force_enabled_origin_trials', packedOffset: 152, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'origin_agent_cluster', packedOffset: 17, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'origin_agent_cluster_left_as_default', packedOffset: 17, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enabled_client_hints', packedOffset: 160, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.WebClientHintsTypeSpec, false), nullable: false, minVersion: 0 },
        { name: 'is_cross_site_cross_browsing_context_group', packedOffset: 17, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'should_have_sticky_user_activation', packedOffset: 17, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'old_page_info', packedOffset: 168, packedBitOffset: 0, type: blink.mojom.OldPageInfoSpec, nullable: true, minVersion: 0 },
        { name: 'http_response_code', packedOffset: 176, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'navigation_api_history_entry_arrays', packedOffset: 184, packedBitOffset: 0, type: blink.mojom.NavigationApiHistoryEntryArraysSpec, nullable: false, minVersion: 0 },
        { name: 'early_hints_preloaded_resources', packedOffset: 192, packedBitOffset: 0, type: mojo.internal.Array(url.mojom.UrlSpec, false), nullable: false, minVersion: 0 },
        { name: 'commit_sent', packedOffset: 200, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'srcdoc_value', packedOffset: 208, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_load_data_with_base_url', packedOffset: 17, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'ancestor_or_self_has_cspee', packedOffset: 17, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'reduced_accept_language', packedOffset: 216, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'navigation_delivery_type', packedOffset: 180, packedBitOffset: 0, type: network.mojom.NavigationDeliveryTypeSpec, nullable: false, minVersion: 0 },
        { name: 'view_transition_state', packedOffset: 224, packedBitOffset: 0, type: blink.mojom.ViewTransitionStateSpec, nullable: true, minVersion: 0 },
        { name: 'soft_navigation_heuristics_task_id', packedOffset: 232, packedBitOffset: 0, type: blink.mojom.TaskAttributionIdSpec, nullable: true, minVersion: 0 },
        { name: 'modified_runtime_features', packedOffset: 240, packedBitOffset: 0, type: mojo.internal.Map(blink.mojom.RuntimeFeatureSpec, mojo.internal.Bool, false), nullable: false, minVersion: 0 },
        { name: 'fenced_frame_properties', packedOffset: 248, packedBitOffset: 0, type: blink.mojom.FencedFramePropertiesSpec, nullable: true, minVersion: 0 },
        { name: 'not_restored_reasons', packedOffset: 256, packedBitOffset: 0, type: blink.mojom.BackForwardCacheNotRestoredReasonsSpec, nullable: true, minVersion: 0 },
        { name: 'load_with_storage_access', packedOffset: 264, packedBitOffset: 0, type: network.mojom.StorageAccessApiStatusSpec, nullable: false, minVersion: 0 },
        { name: 'browsing_context_group_token', packedOffset: 272, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
        { name: 'lcpp_hint', packedOffset: 280, packedBitOffset: 0, type: blink.mojom.LCPCriticalPathPredictorNavigationTimeHintSpec, nullable: true, minVersion: 0 },
        { name: 'content_settings', packedOffset: 288, packedBitOffset: 0, type: blink.mojom.RendererContentSettingsSpec, nullable: false, minVersion: 0 },
        { name: 'visited_link_salt_$flag', packedOffset: 17, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'visited_link_salt_$value', originalFieldName: 'visited_link_salt' } },
        { name: 'visited_link_salt_$value', packedOffset: 296, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'visited_link_salt_$flag', originalFieldName: 'visited_link_salt' } },
        { name: 'local_surface_id', packedOffset: 304, packedBitOffset: 0, type: viz.mojom.LocalSurfaceIdSpec, nullable: true, minVersion: 0 },
        { name: 'initial_permission_statuses', packedOffset: 312, packedBitOffset: 0, type: mojo.internal.Map(blink.mojom.PermissionNameSpec, blink.mojom.PermissionStatusSpec, false), nullable: true, minVersion: 0 },
        { name: 'should_skip_screenshot', packedOffset: 17, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'force_new_document_sequence_number', packedOffset: 18, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'navigation_metrics_token', packedOffset: 320, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'commit_target_frame_token', packedOffset: 328, packedBitOffset: 0, type: blink.mojom.LocalFrameTokenSpec, nullable: true, minVersion: 0 },
        { name: 'is_initial_webui', packedOffset: 18, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 344}]
    }
  }
};

// Struct: PageSwapEventParams
blink.mojom.PageSwapEventParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PageSwapEventParams',
      packedSize: 32,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'page_state', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ByteStringSpec, nullable: false, minVersion: 0 },
        { name: 'navigation_type', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.NavigationTypeForNavigationApiSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
