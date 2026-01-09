// Auto-generated MojoJS binding
// Source: chromium_src/content/common/render_message_filter.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Struct: FrameRoutingInfo
content.mojom.FrameRoutingInfoSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FrameRoutingInfo',
      packedSize: 40,
      fields: [
        { name: 'routing_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'frame_token', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.LocalFrameTokenSpec, nullable: false },
        { name: 'devtools_frame_token', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
        { name: 'document_token', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.DocumentTokenSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: RenderMessageFilter
content.mojom.RenderMessageFilter = {};

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
      []);
  }

  generateFrameRoutingInfos() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.RenderMessageFilter_GenerateFrameRoutingInfos_ParamsSpec,
      content.mojom.RenderMessageFilter_GenerateFrameRoutingInfos_ResponseParamsSpec,
      []);
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

// ParamsSpec for GenerateSingleFrameRoutingInfo
content.mojom.RenderMessageFilter_GenerateSingleFrameRoutingInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.RenderMessageFilter.GenerateSingleFrameRoutingInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

content.mojom.RenderMessageFilter_GenerateSingleFrameRoutingInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.RenderMessageFilter.GenerateSingleFrameRoutingInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 8, packedBitOffset: 0, type: content.mojom.FrameRoutingInfoSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GenerateFrameRoutingInfos
content.mojom.RenderMessageFilter_GenerateFrameRoutingInfos_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.RenderMessageFilter.GenerateFrameRoutingInfos_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

content.mojom.RenderMessageFilter_GenerateFrameRoutingInfos_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.RenderMessageFilter.GenerateFrameRoutingInfos_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'info_array', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
content.mojom.RenderMessageFilterPtr = content.mojom.RenderMessageFilterRemote;
content.mojom.RenderMessageFilterRequest = content.mojom.RenderMessageFilterPendingReceiver;

