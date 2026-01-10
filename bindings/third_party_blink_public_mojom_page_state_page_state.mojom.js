// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/page_state/page_state.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var services = services || {};
var url = url || {};
var ui = ui || {};
var gfx = gfx || {};

blink.mojom.ScrollRestorationTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.ElementSpec = { $: {} };
blink.mojom.DEPRECATED_FileSystemFileSpec = { $: {} };
blink.mojom.FileSpec = { $: {} };
blink.mojom.RequestBodySpec = { $: {} };
blink.mojom.HttpBodySpec = { $: {} };
blink.mojom.ViewStateSpec = { $: {} };
blink.mojom.FrameStateSpec = { $: {} };
blink.mojom.PageStateSpec = { $: {} };

// Enum: ScrollRestorationType
blink.mojom.ScrollRestorationType = {
  kAuto: 0,
  kManual: 1,
};

// Union: Element
mojo.internal.Union(
    blink.mojom.ElementSpec, 'blink.mojom.Element', {
      'blob_uuid': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'bytes': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
        'nullable': false,
      },
      'file': {
        'ordinal': 2,
        'type': blink.mojom.FileSpec.$,
        'nullable': false,
      },
      'DEPRECATED_file_system_file': {
        'ordinal': 3,
        'type': blink.mojom.DEPRECATED_FileSystemFileSpec.$,
        'nullable': false,
      },
    });

// Struct: DEPRECATED_FileSystemFile
mojo.internal.Struct(
    blink.mojom.DEPRECATED_FileSystemFileSpec, 'blink.mojom.DEPRECATED_FileSystemFile', [
      mojo.internal.StructField('filesystem_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('offset', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('length', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('modification_time', 24, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: File
mojo.internal.Struct(
    blink.mojom.FileSpec, 'blink.mojom.File', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('offset', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('length', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('modification_time', 24, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: RequestBody
mojo.internal.Struct(
    blink.mojom.RequestBodySpec, 'blink.mojom.RequestBody', [
      mojo.internal.StructField('elements', 0, 0, mojo.internal.Array(blink.mojom.ElementSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('identifier', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('contains_sensitive_info', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: HttpBody
mojo.internal.Struct(
    blink.mojom.HttpBodySpec, 'blink.mojom.HttpBody', [
      mojo.internal.StructField('http_content_type', 0, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('request_body', 8, 0, blink.mojom.RequestBodySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('contains_passwords', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ViewState
mojo.internal.Struct(
    blink.mojom.ViewStateSpec, 'blink.mojom.ViewState', [
      mojo.internal.StructField('visual_viewport_scroll_offset', 0, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scroll_offset', 8, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('page_scale_factor', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('scroll_anchor_selector', 24, 0, mojo_base.mojom.String16Spec.$, null, true, 1, undefined),
      mojo.internal.StructField('scroll_anchor_offset', 32, 0, gfx.mojom.PointFSpec.$, null, true, 1, undefined),
      mojo.internal.StructField('scroll_anchor_simhash', 40, 0, mojo.internal.Uint64, 0, false, 1, undefined),
    ],
    [[0, 32], [1, 56]]);

// Struct: FrameState
mojo.internal.Struct(
    blink.mojom.FrameStateSpec, 'blink.mojom.FrameState', [
      mojo.internal.StructField('url_string', 0, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('referrer', 8, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('target', 16, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('state_object', 24, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('document_state', 32, 0, mojo.internal.Array(mojo_base.mojom.String16Spec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('scroll_restoration_type', 40, 0, blink.mojom.ScrollRestorationTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('view_state', 48, 0, blink.mojom.ViewStateSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('item_sequence_number', 56, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('document_sequence_number', 64, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('referrer_policy', 72, 0, network.mojom.ReferrerPolicySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('http_body', 80, 0, blink.mojom.HttpBodySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('children', 88, 0, mojo.internal.Array(blink.mojom.FrameStateSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('initiator_origin', 96, 0, mojo.internal.String, null, true, 2, undefined),
      mojo.internal.StructField('navigation_api_key', 104, 0, mojo_base.mojom.String16Spec.$, null, true, 3, undefined),
      mojo.internal.StructField('navigation_api_id', 112, 0, mojo_base.mojom.String16Spec.$, null, true, 3, undefined),
      mojo.internal.StructField('navigation_api_state', 120, 0, mojo_base.mojom.String16Spec.$, null, true, 4, undefined),
      mojo.internal.StructField('protect_url_in_navigation_api', 128, 0, mojo.internal.Bool, false, false, 5, undefined),
      mojo.internal.StructField('initiator_base_url_string', 136, 0, mojo_base.mojom.String16Spec.$, null, true, 6, undefined),
    ],
    [[0, 104], [2, 112], [3, 128], [4, 136], [5, 144], [6, 152]]);

// Struct: PageState
mojo.internal.Struct(
    blink.mojom.PageStateSpec, 'blink.mojom.PageState', [
      mojo.internal.StructField('referenced_files', 0, 0, mojo.internal.Array(mojo_base.mojom.String16Spec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('top', 8, 0, blink.mojom.FrameStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);
