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

// Enum: NavigationTypeForNavigationApi
blink.mojom.NavigationTypeForNavigationApi = {
  kPush: 0,
  kTraverse: 1,
  kReplace: 2,
  kReload: 3,
};

// Enum: ForceHistoryPush
blink.mojom.ForceHistoryPush = {
  kYes: 0,
  kNo: 1,
};

// Enum: ParentResourceTimingAccess
blink.mojom.ParentResourceTimingAccess = {
  kDoNotReport: 0,
  kReportWithoutResponseDetails: 1,
  kReportWithResponseDetails: 2,
};

// Struct: BeginNavigationParams
blink.mojom.BeginNavigationParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BeginNavigationParams',
      packedSize: 128,
      fields: [
        { name: 'initiator_frame_token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.LocalFrameTokenSpec, nullable: true },
        { name: 'headers', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'force_history_push', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.ForceHistoryPushSpec, nullable: false },
        { name: 'searchable_form_url', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'searchable_form_encoding', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'client_side_redirect_url', packedOffset: 40, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'devtools_initiator', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.DictionaryValueSpec, nullable: true },
        { name: 'trust_token_params', packedOffset: 56, packedBitOffset: 0, type: network.mojom.TrustTokenParamsSpec, nullable: true },
        { name: 'impression', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'before_unload_start', packedOffset: 72, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
        { name: 'before_unload_end', packedOffset: 80, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
        { name: 'initiator_activation_and_ad_status', packedOffset: 88, packedBitOffset: 0, type: blink.mojom.NavigationInitiatorActivationAndAdStatusSpec, nullable: false },
        { name: 'storage_access_api_status', packedOffset: 96, packedBitOffset: 0, type: network.mojom.StorageAccessApiStatusSpec, nullable: false },
        { name: 'load_flags', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'skip_service_worker', packedOffset: 108, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_form_submission', packedOffset: 108, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'was_initiated_by_link_click', packedOffset: 108, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'is_container_initiated', packedOffset: 108, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'has_rel_opener', packedOffset: 108, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CommonNavigationParams
blink.mojom.CommonNavigationParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CommonNavigationParams',
      packedSize: 144,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'initiator_origin', packedOffset: 8, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: true },
        { name: 'initiator_base_url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true },
        { name: 'referrer', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.ReferrerSpec, nullable: false },
        { name: 'navigation_type', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.NavigationTypeSpec, nullable: false },
        { name: 'download_policy', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.NavigationDownloadPolicySpec, nullable: false },
        { name: 'base_url_for_data_url', packedOffset: 48, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'actual_navigation_start', packedOffset: 56, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
        { name: 'navigation_start', packedOffset: 64, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
        { name: 'method', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'post_data', packedOffset: 80, packedBitOffset: 0, type: network.mojom.URLRequestBodySpec, nullable: true },
        { name: 'source_location', packedOffset: 88, packedBitOffset: 0, type: network.mojom.SourceLocationSpec, nullable: false },
        { name: 'initiator_origin_trial_features', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'href_translate', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'input_start', packedOffset: 112, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
        { name: 'transition', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'should_replace_current_entry', packedOffset: 124, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'started_from_context_menu', packedOffset: 124, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'has_user_gesture', packedOffset: 124, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'text_fragment_token', packedOffset: 124, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'is_history_navigation_in_new_child_frame', packedOffset: 124, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'redirect_start', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
        { name: 'redirect_end', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
        { name: 'fetch_start', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'frame_token_for_old_main_frame', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.LocalFrameTokenSpec, nullable: false },
        { name: 'new_lifecycle_state_for_old_page', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.PageLifecycleStateSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CommitNavigationParams
blink.mojom.CommitNavigationParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CommitNavigationParams',
      packedSize: 360,
      fields: [
        { name: 'origin_to_commit', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false },
        { name: 'storage_key', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.StorageKeySpec, nullable: false },
        { name: 'redirects', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'redirect_response', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'redirect_infos', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'post_content_type', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'original_url', packedOffset: 48, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'original_method', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'page_state', packedOffset: 64, packedBitOffset: 0, type: mojo_base.mojom.ByteStringSpec, nullable: false },
        { name: 'subframe_unique_names', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'navigation_timing', packedOffset: 80, packedBitOffset: 0, type: blink.mojom.NavigationTimingSpec, nullable: false },
        { name: 'was_activated', packedOffset: 88, packedBitOffset: 0, type: blink.mojom.WasActivatedOptionSpec, nullable: false },
        { name: 'navigation_token', packedOffset: 96, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
        { name: 'prefetched_signed_exchanges', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'data_url_as_string', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'document_ukm_source_id', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'frame_policy', packedOffset: 128, packedBitOffset: 0, type: blink.mojom.FramePolicySpec, nullable: false },
        { name: 'force_enabled_origin_trials', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'enabled_client_hints', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'old_page_info', packedOffset: 152, packedBitOffset: 0, type: blink.mojom.OldPageInfoSpec, nullable: true },
        { name: 'navigation_api_history_entry_arrays', packedOffset: 160, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'early_hints_preloaded_resources', packedOffset: 168, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'commit_sent', packedOffset: 176, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
        { name: 'srcdoc_value', packedOffset: 184, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'reduced_accept_language', packedOffset: 192, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'navigation_delivery_type', packedOffset: 200, packedBitOffset: 0, type: network.mojom.NavigationDeliveryTypeSpec, nullable: false },
        { name: 'view_transition_state', packedOffset: 208, packedBitOffset: 0, type: blink.mojom.ViewTransitionStateSpec, nullable: true },
        { name: 'soft_navigation_heuristics_task_id', packedOffset: 216, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'modified_runtime_features', packedOffset: 224, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'fenced_frame_properties', packedOffset: 232, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'not_restored_reasons', packedOffset: 240, packedBitOffset: 0, type: blink.mojom.BackForwardCacheNotRestoredReasonsSpec, nullable: true },
        { name: 'load_with_storage_access', packedOffset: 248, packedBitOffset: 0, type: network.mojom.StorageAccessApiStatusSpec, nullable: false },
        { name: 'browsing_context_group_token', packedOffset: 256, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true },
        { name: 'lcpp_hint', packedOffset: 264, packedBitOffset: 0, type: blink.mojom.LCPCriticalPathPredictorNavigationTimeHintSpec, nullable: true },
        { name: 'content_settings', packedOffset: 272, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'visited_link_salt', packedOffset: 280, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: true },
        { name: 'local_surface_id', packedOffset: 288, packedBitOffset: 0, type: viz.mojom.LocalSurfaceIdSpec, nullable: true },
        { name: 'initial_permission_statuses', packedOffset: 296, packedBitOffset: 0, type: mojo.internal.Map, nullable: true },
        { name: 'navigation_metrics_token', packedOffset: 304, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
        { name: 'commit_target_frame_token', packedOffset: 312, packedBitOffset: 0, type: blink.mojom.LocalFrameTokenSpec, nullable: true },
        { name: 'nav_entry_id', packedOffset: 320, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'pending_history_list_index', packedOffset: 324, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'current_history_list_index', packedOffset: 328, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'current_history_list_length', packedOffset: 332, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'http_response_code', packedOffset: 336, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'is_overriding_user_agent', packedOffset: 340, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'can_load_local_resources', packedOffset: 340, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'intended_as_new_entry', packedOffset: 340, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'was_discarded', packedOffset: 340, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'is_view_source', packedOffset: 340, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
        { name: 'should_clear_history_list', packedOffset: 340, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false },
        { name: 'is_browser_initiated', packedOffset: 340, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false },
        { name: 'has_ua_visual_transition', packedOffset: 340, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false },
        { name: 'origin_agent_cluster', packedOffset: 340, packedBitOffset: 8, type: mojo.internal.Bool, nullable: false },
        { name: 'origin_agent_cluster_left_as_default', packedOffset: 340, packedBitOffset: 9, type: mojo.internal.Bool, nullable: false },
        { name: 'is_cross_site_cross_browsing_context_group', packedOffset: 340, packedBitOffset: 10, type: mojo.internal.Bool, nullable: false },
        { name: 'should_have_sticky_user_activation', packedOffset: 340, packedBitOffset: 11, type: mojo.internal.Bool, nullable: false },
        { name: 'is_load_data_with_base_url', packedOffset: 340, packedBitOffset: 12, type: mojo.internal.Bool, nullable: false },
        { name: 'ancestor_or_self_has_cspee', packedOffset: 340, packedBitOffset: 13, type: mojo.internal.Bool, nullable: false },
        { name: 'should_skip_screenshot', packedOffset: 340, packedBitOffset: 14, type: mojo.internal.Bool, nullable: false },
        { name: 'force_new_document_sequence_number', packedOffset: 340, packedBitOffset: 15, type: mojo.internal.Bool, nullable: false },
        { name: 'is_initial_webui', packedOffset: 340, packedBitOffset: 16, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'page_state', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ByteStringSpec, nullable: false },
        { name: 'navigation_type', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.NavigationTypeForNavigationApiSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
