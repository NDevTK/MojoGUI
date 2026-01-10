// Auto-generated MojoJS binding
// Source: chromium_src/content/common/render_message_filter.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};
var mojo_base = mojo_base || {};
var blink = blink || {};

content.mojom.FrameRoutingInfoSpec = { $: {} };
content.mojom.RenderMessageFilter = {};
content.mojom.RenderMessageFilter.$interfaceName = 'content.mojom.RenderMessageFilter';
content.mojom.RenderMessageFilter_GenerateSingleFrameRoutingInfo_ParamsSpec = { $: {} };
content.mojom.RenderMessageFilter_GenerateSingleFrameRoutingInfo_ResponseParamsSpec = { $: {} };
content.mojom.RenderMessageFilter_GenerateFrameRoutingInfos_ParamsSpec = { $: {} };
content.mojom.RenderMessageFilter_GenerateFrameRoutingInfos_ResponseParamsSpec = { $: {} };

// Struct: FrameRoutingInfo
mojo.internal.Struct(
    content.mojom.FrameRoutingInfoSpec, 'content.mojom.FrameRoutingInfo', [
      mojo.internal.StructField('frame_token', 0, 0, blink.mojom.LocalFrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('devtools_frame_token', 8, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('document_token', 16, 0, blink.mojom.DocumentTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('routing_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: RenderMessageFilter
mojo.internal.Struct(
    content.mojom.RenderMessageFilter_GenerateSingleFrameRoutingInfo_ParamsSpec, 'content.mojom.RenderMessageFilter_GenerateSingleFrameRoutingInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.RenderMessageFilter_GenerateSingleFrameRoutingInfo_ResponseParamsSpec, 'content.mojom.RenderMessageFilter_GenerateSingleFrameRoutingInfo_ResponseParams', [
      mojo.internal.StructField('info', 0, 0, content.mojom.FrameRoutingInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.RenderMessageFilter_GenerateFrameRoutingInfos_ParamsSpec, 'content.mojom.RenderMessageFilter_GenerateFrameRoutingInfos_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.RenderMessageFilter_GenerateFrameRoutingInfos_ResponseParamsSpec, 'content.mojom.RenderMessageFilter_GenerateFrameRoutingInfos_ResponseParams', [
      mojo.internal.StructField('info_array', 0, 0, mojo.internal.Array(content.mojom.FrameRoutingInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

content.mojom.RenderMessageFilterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.RenderMessageFilterRemote = class {
  static get $interfaceName() {
    return 'content.mojom.RenderMessageFilter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.RenderMessageFilterPendingReceiver,
      handle);
    this.$ = new content.mojom.RenderMessageFilterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.RenderMessageFilterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  generateSingleFrameRoutingInfo() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.RenderMessageFilter_GenerateSingleFrameRoutingInfo_ParamsSpec,
      content.mojom.RenderMessageFilter_GenerateSingleFrameRoutingInfo_ResponseParamsSpec,
      [],
      false);
  }

  generateFrameRoutingInfos() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.RenderMessageFilter_GenerateFrameRoutingInfos_ParamsSpec,
      content.mojom.RenderMessageFilter_GenerateFrameRoutingInfos_ResponseParamsSpec,
      [],
      false);
  }

};

content.mojom.RenderMessageFilter.getRemote = function() {
  let remote = new content.mojom.RenderMessageFilterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.RenderMessageFilter',
    'context');
  return remote.$;
};

content.mojom.RenderMessageFilterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = content.mojom.RenderMessageFilter_GenerateSingleFrameRoutingInfo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.generateSingleFrameRoutingInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.RenderMessageFilter_GenerateSingleFrameRoutingInfo_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 1: {
          const params = content.mojom.RenderMessageFilter_GenerateFrameRoutingInfos_ParamsSpec.$.decode(message.payload);
          const result = this.impl.generateFrameRoutingInfos();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.RenderMessageFilter_GenerateFrameRoutingInfos_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

content.mojom.RenderMessageFilterReceiver = content.mojom.RenderMessageFilterReceiver;

content.mojom.RenderMessageFilterPtr = content.mojom.RenderMessageFilterRemote;
content.mojom.RenderMessageFilterRequest = content.mojom.RenderMessageFilterPendingReceiver;

