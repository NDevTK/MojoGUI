// Auto-generated MojoJS binding
// Source: chromium_src/content/public/common/resource_usage_reporter.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Struct: ResourceTypeStat
content.mojom.ResourceTypeStatSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.ResourceTypeStat',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ResourceTypeStats
content.mojom.ResourceTypeStatsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.ResourceTypeStats',
      packedSize: 16,
      fields: [
        { name: 'other', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ResourceUsageData
content.mojom.ResourceUsageDataSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.ResourceUsageData',
      packedSize: 16,
      fields: [
        { name: 'web_cache_stats', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: ResourceUsageReporter
content.mojom.ResourceUsageReporter = {};

content.mojom.ResourceUsageReporterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.ResourceUsageReporterRemote = class {
  static get $interfaceName() {
    return 'content.mojom.ResourceUsageReporter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.ResourceUsageReporterPendingReceiver,
      handle);
    this.$ = new content.mojom.ResourceUsageReporterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.ResourceUsageReporterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getUsageData() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.ResourceUsageReporter_GetUsageData_ParamsSpec,
      content.mojom.ResourceUsageReporter_GetUsageData_ResponseParamsSpec,
      []);
  }

};

content.mojom.ResourceUsageReporter.getRemote = function() {
  let remote = new content.mojom.ResourceUsageReporterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.ResourceUsageReporter',
    'context');
  return remote.$;
};

// ParamsSpec for GetUsageData
content.mojom.ResourceUsageReporter_GetUsageData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.ResourceUsageReporter.GetUsageData_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

content.mojom.ResourceUsageReporter_GetUsageData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.ResourceUsageReporter.GetUsageData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
content.mojom.ResourceUsageReporterPtr = content.mojom.ResourceUsageReporterRemote;
content.mojom.ResourceUsageReporterRequest = content.mojom.ResourceUsageReporterPendingReceiver;

