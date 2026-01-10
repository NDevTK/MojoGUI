// Auto-generated MojoJS binding
// Source: chromium_src/content/common/render_message_filter.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};
var blink = blink || {};


// Struct: FrameRoutingInfo
content.mojom.mojom.FrameRoutingInfoSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FrameRoutingInfo',
      packedSize: 40,
      fields: [
        { name: 'routing_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'frame_token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.LocalFrameTokenSpec, nullable: false, minVersion: 0 },
        { name: 'devtools_frame_token', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'document_token', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.DocumentTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Interface: RenderMessageFilter
content.mojom.mojom.RenderMessageFilter = {};

content.mojom.mojom.RenderMessageFilterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.mojom.RenderMessageFilterRemote = class {
  static get $interfaceName() {
    return 'content.mojom.RenderMessageFilter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.mojom.RenderMessageFilterPendingReceiver,
      handle);
    this.$ = new content.mojom.mojom.RenderMessageFilterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.mojom.RenderMessageFilterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  generateSingleFrameRoutingInfo() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.mojom.RenderMessageFilter_GenerateSingleFrameRoutingInfo_ParamsSpec,
      content.mojom.mojom.RenderMessageFilter_GenerateSingleFrameRoutingInfo_ResponseParamsSpec,
      []);
  }

  generateFrameRoutingInfos() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.mojom.RenderMessageFilter_GenerateFrameRoutingInfos_ParamsSpec,
      content.mojom.mojom.RenderMessageFilter_GenerateFrameRoutingInfos_ResponseParamsSpec,
      []);
  }

};

content.mojom.mojom.RenderMessageFilter.getRemote = function() {
  let remote = new content.mojom.mojom.RenderMessageFilterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.RenderMessageFilter',
    'context');
  return remote.$;
};

// ParamsSpec for GenerateSingleFrameRoutingInfo
content.mojom.mojom.RenderMessageFilter_GenerateSingleFrameRoutingInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.RenderMessageFilter.GenerateSingleFrameRoutingInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

content.mojom.mojom.RenderMessageFilter_GenerateSingleFrameRoutingInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.RenderMessageFilter.GenerateSingleFrameRoutingInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: content.mojom.FrameRoutingInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GenerateFrameRoutingInfos
content.mojom.mojom.RenderMessageFilter_GenerateFrameRoutingInfos_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.RenderMessageFilter.GenerateFrameRoutingInfos_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

content.mojom.mojom.RenderMessageFilter_GenerateFrameRoutingInfos_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.RenderMessageFilter.GenerateFrameRoutingInfos_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'info_array', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(content.mojom.FrameRoutingInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
content.mojom.mojom.RenderMessageFilterPtr = content.mojom.mojom.RenderMessageFilterRemote;
content.mojom.mojom.RenderMessageFilterRequest = content.mojom.mojom.RenderMessageFilterPendingReceiver;

