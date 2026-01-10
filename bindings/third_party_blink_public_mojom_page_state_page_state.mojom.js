// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/page_state/page_state.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};
var ui = ui || {};
var gfx = gfx || {};


// Enum: ScrollRestorationType
blink.mojom.ScrollRestorationType = {
  kManual: 0,
};
blink.mojom.ScrollRestorationTypeSpec = { $: mojo.internal.Enum() };

// Union: Element
blink.mojom.ElementSpec = { $: mojo.internal.Union(
    'blink.mojom.Element', {
      'blob_uuid': {
        'ordinal': 0,
        'type': mojo.internal.String,
      }},
      'bytes': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
      }},
      'file': {
        'ordinal': 2,
        'type': blink.mojom.FileSpec,
      }},
      'DEPRECATED_file_system_file': {
        'ordinal': 3,
        'type': blink.mojom.DEPRECATED_FileSystemFileSpec,
      }},
    })
};

// Struct: DEPRECATED_FileSystemFile
blink.mojom.DEPRECATED_FileSystemFileSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DEPRECATED_FileSystemFile',
      packedSize: 40,
      fields: [
        { name: 'filesystem_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'offset', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'length', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'modification_time', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: File
blink.mojom.FileSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.File',
      packedSize: 40,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'offset', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'length', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'modification_time', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: RequestBody
blink.mojom.RequestBodySpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RequestBody',
      packedSize: 32,
      fields: [
        { name: 'elements', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.ElementSpec, false), nullable: false, minVersion: 0 },
        { name: 'identifier', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'contains_sensitive_info', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: HttpBody
blink.mojom.HttpBodySpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.HttpBody',
      packedSize: 32,
      fields: [
        { name: 'http_content_type', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
        { name: 'request_body', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.RequestBodySpec, nullable: true, minVersion: 0 },
        { name: 'contains_passwords', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ViewState
blink.mojom.ViewStateSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ViewState',
      packedSize: 56,
      fields: [
        { name: 'visual_viewport_scroll_offset', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
        { name: 'scroll_offset', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false, minVersion: 0 },
        { name: 'page_scale_factor', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'scroll_anchor_selector', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 1 },
        { name: 'scroll_anchor_offset', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: true, minVersion: 1 },
        { name: 'scroll_anchor_simhash', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 1 },
      ],
      versions: [{version: 0, packedSize: 32}, {version: 1, packedSize: 56}]
    }
  }
};

// Struct: FrameState
blink.mojom.FrameStateSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameState',
      packedSize: 144,
      fields: [
        { name: 'url_string', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
        { name: 'referrer', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
        { name: 'target', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
        { name: 'state_object', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
        { name: 'document_state', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(mojo_base.mojom.String16Spec, false), nullable: true, minVersion: 0 },
        { name: 'scroll_restoration_type', packedOffset: 80, packedBitOffset: 0, type: blink.mojom.ScrollRestorationTypeSpec, nullable: false, minVersion: 0 },
        { name: 'view_state', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.ViewStateSpec, nullable: true, minVersion: 0 },
        { name: 'item_sequence_number', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'document_sequence_number', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'referrer_policy', packedOffset: 84, packedBitOffset: 0, type: network.mojom.ReferrerPolicySpec, nullable: false, minVersion: 0 },
        { name: 'http_body', packedOffset: 64, packedBitOffset: 0, type: blink.mojom.HttpBodySpec, nullable: false, minVersion: 0 },
        { name: 'children', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.FrameStateSpec, false), nullable: false, minVersion: 0 },
        { name: 'initiator_origin', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 2 },
        { name: 'navigation_api_key', packedOffset: 96, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 3 },
        { name: 'navigation_api_id', packedOffset: 104, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 3 },
        { name: 'navigation_api_state', packedOffset: 112, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 4 },
        { name: 'protect_url_in_navigation_api', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 5 },
        { name: 'initiator_base_url_string', packedOffset: 128, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 6 },
      ],
      versions: [{version: 0, packedSize: 96}, {version: 2, packedSize: 104}, {version: 3, packedSize: 120}, {version: 4, packedSize: 128}, {version: 5, packedSize: 136}, {version: 6, packedSize: 144}]
    }
  }
};

// Struct: PageState
blink.mojom.PageStateSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PageState',
      packedSize: 24,
      fields: [
        { name: 'referenced_files', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo_base.mojom.String16Spec, false), nullable: true, minVersion: 0 },
        { name: 'top', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.FrameStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
