// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/page/prerender_page_param.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: PrerenderParam
blink.mojom.mojom.PrerenderParamSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PrerenderParam',
      packedSize: 24,
      fields: [
        { name: 'page_metric_suffix', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'should_warm_up_compositor', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'should_prepare_paint_tree', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'should_pause_javascript_execution', packedOffset: 8, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
