// Auto-generated MojoJS binding
// Source: chromium_src/components/content_capture/common/content_capture_data.mojom
// Module: content_capture.mojom

'use strict';

// Module namespace
var content_capture = content_capture || {};
content_capture.mojom = content_capture.mojom || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};

content_capture.mojom.ContentCaptureDataSpec = { $: {} };

// Struct: ContentCaptureData
mojo.internal.Struct(
    content_capture.mojom.ContentCaptureDataSpec, 'content_capture.mojom.ContentCaptureData', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('bounds', 16, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('children', 24, 0, mojo.internal.Array(content_capture.mojom.ContentCaptureDataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 40]]);
