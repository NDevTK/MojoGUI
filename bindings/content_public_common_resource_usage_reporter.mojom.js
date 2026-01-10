// Auto-generated MojoJS binding
// Source: chromium_src/content/public/common/resource_usage_reporter.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Struct: ResourceTypeStat
content.mojom.mojom.ResourceTypeStatSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.ResourceTypeStat',
      packedSize: 40,
      fields: [
        { name: 'count', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'live_size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'decoded_size', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: ResourceTypeStats
content.mojom.mojom.ResourceTypeStatsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.ResourceTypeStats',
      packedSize: 56,
      fields: [
        { name: 'images', packedOffset: 0, packedBitOffset: 0, type: content.mojom.ResourceTypeStatSpec, nullable: false, minVersion: 0 },
        { name: 'css_style_sheets', packedOffset: 8, packedBitOffset: 0, type: content.mojom.ResourceTypeStatSpec, nullable: false, minVersion: 0 },
        { name: 'scripts', packedOffset: 16, packedBitOffset: 0, type: content.mojom.ResourceTypeStatSpec, nullable: false, minVersion: 0 },
        { name: 'xsl_style_sheets', packedOffset: 24, packedBitOffset: 0, type: content.mojom.ResourceTypeStatSpec, nullable: false, minVersion: 0 },
        { name: 'fonts', packedOffset: 32, packedBitOffset: 0, type: content.mojom.ResourceTypeStatSpec, nullable: false, minVersion: 0 },
        { name: 'other', packedOffset: 40, packedBitOffset: 0, type: content.mojom.ResourceTypeStatSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: ResourceUsageData
content.mojom.mojom.ResourceUsageDataSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.ResourceUsageData',
      packedSize: 40,
      fields: [
        { name: 'reports_v8_stats', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'v8_bytes_allocated', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'v8_bytes_used', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'web_cache_stats', packedOffset: 16, packedBitOffset: 0, type: content.mojom.ResourceTypeStatsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Interface: ResourceUsageReporter
content.mojom.mojom.ResourceUsageReporter = {};

content.mojom.mojom.ResourceUsageReporterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.mojom.ResourceUsageReporterRemote = class {
  static get $interfaceName() {
    return 'content.mojom.ResourceUsageReporter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.mojom.ResourceUsageReporterPendingReceiver,
      handle);
    this.$ = new content.mojom.mojom.ResourceUsageReporterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.mojom.ResourceUsageReporterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getUsageData() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.mojom.ResourceUsageReporter_GetUsageData_ParamsSpec,
      content.mojom.mojom.ResourceUsageReporter_GetUsageData_ResponseParamsSpec,
      []);
  }

};

content.mojom.mojom.ResourceUsageReporter.getRemote = function() {
  let remote = new content.mojom.mojom.ResourceUsageReporterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.ResourceUsageReporter',
    'context');
  return remote.$;
};

// ParamsSpec for GetUsageData
content.mojom.mojom.ResourceUsageReporter_GetUsageData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.ResourceUsageReporter.GetUsageData_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

content.mojom.mojom.ResourceUsageReporter_GetUsageData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.ResourceUsageReporter.GetUsageData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: content.mojom.ResourceUsageDataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
content.mojom.mojom.ResourceUsageReporterPtr = content.mojom.mojom.ResourceUsageReporterRemote;
content.mojom.mojom.ResourceUsageReporterRequest = content.mojom.mojom.ResourceUsageReporterPendingReceiver;

