// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/navigation/navigation_params.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};
var network = network || {};
var viz = viz || {};
var url = url || {};

blink.mojom.NavigationTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.NavigationTypeForNavigationApiSpec = { $: mojo.internal.Enum() };
blink.mojom.ForceHistoryPushSpec = { $: mojo.internal.Enum() };
blink.mojom.ParentResourceTimingAccessSpec = { $: mojo.internal.Enum() };
blink.mojom.BeginNavigationParamsSpec = { $: {} };
blink.mojom.CommonNavigationParamsSpec = { $: {} };
blink.mojom.NavigationTimingSpec = { $: {} };
blink.mojom.OldPageInfoSpec = { $: {} };
blink.mojom.CommitNavigationParamsSpec = { $: {} };
blink.mojom.PageSwapEventParamsSpec = { $: {} };

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
mojo.internal.Struct(
    blink.mojom.BeginNavigationParamsSpec, 'blink.mojom.BeginNavigationParams', [
      mojo.internal.StructField('initiator_frame_token', 0, 0, blink.mojom.LocalFrameTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('headers', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('force_history_push', 16, 0, blink.mojom.ForceHistoryPushSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('searchable_form_url', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('searchable_form_encoding', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('client_side_redirect_url', 40, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('devtools_initiator', 48, 0, mojo_base.mojom.DictionaryValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('trust_token_params', 56, 0, network.mojom.TrustTokenParamsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('impression', 64, 0, blink.mojom.ImpressionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('before_unload_start', 72, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('before_unload_end', 80, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('initiator_activation_and_ad_status', 88, 0, blink.mojom.NavigationInitiatorActivationAndAdStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('storage_access_api_status', 96, 0, network.mojom.StorageAccessApiStatusSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('load_flags', 104, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('skip_service_worker', 108, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_form_submission', 108, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('was_initiated_by_link_click', 108, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_container_initiated', 108, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_rel_opener', 108, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 120]]);

// Struct: CommonNavigationParams
mojo.internal.Struct(
    blink.mojom.CommonNavigationParamsSpec, 'blink.mojom.CommonNavigationParams', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('initiator_origin', 8, 0, url.mojom.OriginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('initiator_base_url', 16, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('referrer', 24, 0, blink.mojom.ReferrerSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('navigation_type', 32, 0, blink.mojom.NavigationTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('download_policy', 40, 0, blink.mojom.NavigationDownloadPolicySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('base_url_for_data_url', 48, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('actual_navigation_start', 56, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('navigation_start', 64, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('method', 72, 0, mojo.internal.String, 0, false, 0, undefined),
      mojo.internal.StructField('post_data', 80, 0, network.mojom.URLRequestBodySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('source_location', 88, 0, network.mojom.SourceLocationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('initiator_origin_trial_features', 96, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false, 0, undefined),
      mojo.internal.StructField('href_translate', 104, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('input_start', 112, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('transition', 120, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('should_replace_current_entry', 124, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('started_from_context_menu', 124, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_user_gesture', 124, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('text_fragment_token', 124, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_history_navigation_in_new_child_frame', 124, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 136]]);

// Struct: NavigationTiming
mojo.internal.Struct(
    blink.mojom.NavigationTimingSpec, 'blink.mojom.NavigationTiming', [
      mojo.internal.StructField('redirect_start', 0, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('redirect_end', 8, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('fetch_start', 16, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: OldPageInfo
mojo.internal.Struct(
    blink.mojom.OldPageInfoSpec, 'blink.mojom.OldPageInfo', [
      mojo.internal.StructField('frame_token_for_old_main_frame', 0, 0, blink.mojom.LocalFrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('new_lifecycle_state_for_old_page', 8, 0, blink.mojom.PageLifecycleStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CommitNavigationParams
mojo.internal.Struct(
    blink.mojom.CommitNavigationParamsSpec, 'blink.mojom.CommitNavigationParams', [
      mojo.internal.StructField('origin_to_commit', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('storage_key', 8, 0, blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('redirects', 16, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('redirect_response', 24, 0, mojo.internal.Array(network.mojom.URLResponseHeadSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('redirect_infos', 32, 0, mojo.internal.Array(network.mojom.URLRequestRedirectInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('post_content_type', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('original_url', 48, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('original_method', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('page_state', 64, 0, mojo_base.mojom.ByteStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('subframe_unique_names', 72, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.Bool, false), null, false, 0, undefined),
      mojo.internal.StructField('navigation_timing', 80, 0, blink.mojom.NavigationTimingSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('was_activated', 88, 0, blink.mojom.WasActivatedOptionSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('navigation_token', 96, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('prefetched_signed_exchanges', 104, 0, mojo.internal.Array(blink.mojom.PrefetchedSignedExchangeInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('data_url_as_string', 112, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('document_ukm_source_id', 120, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('frame_policy', 128, 0, blink.mojom.FramePolicySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('force_enabled_origin_trials', 136, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('enabled_client_hints', 144, 0, mojo.internal.Array(network.mojom.WebClientHintsTypeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('old_page_info', 152, 0, blink.mojom.OldPageInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('navigation_api_history_entry_arrays', 160, 0, blink.mojom.NavigationApiHistoryEntryArraysSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('early_hints_preloaded_resources', 168, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('commit_sent', 176, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('srcdoc_value', 184, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('reduced_accept_language', 192, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('navigation_delivery_type', 200, 0, network.mojom.NavigationDeliveryTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('view_transition_state', 208, 0, blink.mojom.ViewTransitionStateSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('soft_navigation_heuristics_task_id', 216, 0, blink.mojom.TaskAttributionIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('modified_runtime_features', 224, 0, mojo.internal.Map(blink.mojom.RuntimeFeatureSpec.$, mojo.internal.Bool, false), null, false, 0, undefined),
      mojo.internal.StructField('fenced_frame_properties', 232, 0, blink.mojom.FencedFramePropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('not_restored_reasons', 240, 0, blink.mojom.BackForwardCacheNotRestoredReasonsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('load_with_storage_access', 248, 0, network.mojom.StorageAccessApiStatusSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('browsing_context_group_token', 256, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('lcpp_hint', 264, 0, blink.mojom.LCPCriticalPathPredictorNavigationTimeHintSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('content_settings', 272, 0, blink.mojom.RendererContentSettingsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('visited_link_salt_$value', 280, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'visited_link_salt_$flag', originalFieldName: 'visited_link_salt' }),
      mojo.internal.StructField('local_surface_id', 288, 0, viz.mojom.LocalSurfaceIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('initial_permission_statuses', 296, 0, mojo.internal.Map(blink.mojom.PermissionNameSpec.$, blink.mojom.PermissionStatusSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('navigation_metrics_token', 304, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('commit_target_frame_token', 312, 0, blink.mojom.LocalFrameTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('nav_entry_id', 320, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('pending_history_list_index', 324, 0, mojo.internal.Int32, -1, false, 0, undefined),
      mojo.internal.StructField('current_history_list_index', 328, 0, mojo.internal.Int32, -1, false, 0, undefined),
      mojo.internal.StructField('current_history_list_length', 332, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('http_response_code', 336, 0, mojo.internal.Int32, -1, false, 0, undefined),
      mojo.internal.StructField('is_overriding_user_agent', 340, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('can_load_local_resources', 340, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('intended_as_new_entry', 340, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('was_discarded', 340, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_view_source', 340, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('should_clear_history_list', 340, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_browser_initiated', 340, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_ua_visual_transition', 340, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('origin_agent_cluster', 341, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('origin_agent_cluster_left_as_default', 341, 1, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('is_cross_site_cross_browsing_context_group', 341, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('should_have_sticky_user_activation', 341, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_load_data_with_base_url', 341, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('ancestor_or_self_has_cspee', 341, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('visited_link_salt_$flag', 341, 6, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'visited_link_salt_$value', originalFieldName: 'visited_link_salt' }),
      mojo.internal.StructField('should_skip_screenshot', 341, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('force_new_document_sequence_number', 342, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_initial_webui', 342, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 352]]);

// Struct: PageSwapEventParams
mojo.internal.Struct(
    blink.mojom.PageSwapEventParamsSpec, 'blink.mojom.PageSwapEventParams', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('page_state', 8, 0, mojo_base.mojom.ByteStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('navigation_type', 16, 0, blink.mojom.NavigationTypeForNavigationApiSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);
