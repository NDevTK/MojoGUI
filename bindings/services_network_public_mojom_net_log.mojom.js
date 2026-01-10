// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/net_log.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


network.mojom.kUnlimitedFileSize = 0xFFFFFFFFFFFFFFFF;

// Enum: NetLogCaptureMode
network.mojom.NetLogCaptureMode = {
  HEAVILY_REDACTED: 0,
  DEFAULT: 1,
  INCLUDE_PRIVACY_INFO: 2,
  EVERYTHING: 3,
};
network.mojom.NetLogCaptureModeSpec = { $: mojo.internal.Enum() };

// Enum: NetLogEventPhase
network.mojom.NetLogEventPhase = {
  BEGIN: 0,
  END: 1,
  NONE: 2,
};
network.mojom.NetLogEventPhaseSpec = { $: mojo.internal.Enum() };

// Interface: NetLogExporter
network.mojom.NetLogExporter = {};

network.mojom.NetLogExporter_Start_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetLogExporter_Start_Params',
      packedSize: 40,
      fields: [
        { name: 'destination', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FileSpec, nullable: false, minVersion: 0 },
        { name: 'extra_constants', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.DictionaryValueSpec, nullable: false, minVersion: 0 },
        { name: 'capture_mode', packedOffset: 24, packedBitOffset: 0, type: network.mojom.NetLogCaptureModeSpec, nullable: false, minVersion: 0 },
        { name: 'max_file_size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

network.mojom.NetLogExporter_Stop_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetLogExporter_Stop_Params',
      packedSize: 16,
      fields: [
        { name: 'polled_values', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.DictionaryValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

network.mojom.NetLogExporterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.NetLogExporterRemote = class {
  static get $interfaceName() {
    return 'network.mojom.NetLogExporter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.NetLogExporterPendingReceiver,
      handle);
    this.$ = new network.mojom.NetLogExporterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.NetLogExporterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  start(destination, extra_constants, capture_mode, max_file_size) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.NetLogExporter_Start_ParamsSpec,
      network.mojom.NetLogExporter_Start_ResponseParamsSpec,
      [destination, extra_constants, capture_mode, max_file_size]);
  }

  stop(polled_values) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.NetLogExporter_Stop_ParamsSpec,
      network.mojom.NetLogExporter_Stop_ResponseParamsSpec,
      [polled_values]);
  }

};

network.mojom.NetLogExporter.getRemote = function() {
  let remote = new network.mojom.NetLogExporterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.NetLogExporter',
    'context');
  return remote.$;
};

// ParamsSpec for Start
network.mojom.NetLogExporter_Start_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetLogExporter.Start_Params',
      packedSize: 40,
      fields: [
        { name: 'destination', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FileSpec, nullable: false, minVersion: 0 },
        { name: 'extra_constants', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.DictionaryValueSpec, nullable: false, minVersion: 0 },
        { name: 'capture_mode', packedOffset: 24, packedBitOffset: 0, type: network.mojom.NetLogCaptureModeSpec, nullable: false, minVersion: 0 },
        { name: 'max_file_size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

network.mojom.NetLogExporter_Start_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetLogExporter.Start_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'net_error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Stop
network.mojom.NetLogExporter_Stop_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetLogExporter.Stop_Params',
      packedSize: 16,
      fields: [
        { name: 'polled_values', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.DictionaryValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

network.mojom.NetLogExporter_Stop_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetLogExporter.Stop_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'net_error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
network.mojom.NetLogExporterPtr = network.mojom.NetLogExporterRemote;
network.mojom.NetLogExporterRequest = network.mojom.NetLogExporterPendingReceiver;


// Interface: NetLogProxySource
network.mojom.NetLogProxySource = {};

network.mojom.NetLogProxySource_UpdateCaptureModes_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetLogProxySource_UpdateCaptureModes_Params',
      packedSize: 16,
      fields: [
        { name: 'modes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

network.mojom.NetLogProxySourcePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.NetLogProxySourceRemote = class {
  static get $interfaceName() {
    return 'network.mojom.NetLogProxySource';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.NetLogProxySourcePendingReceiver,
      handle);
    this.$ = new network.mojom.NetLogProxySourceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.NetLogProxySourceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updateCaptureModes(modes) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.NetLogProxySource_UpdateCaptureModes_ParamsSpec,
      null,
      [modes]);
  }

};

network.mojom.NetLogProxySource.getRemote = function() {
  let remote = new network.mojom.NetLogProxySourceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.NetLogProxySource',
    'context');
  return remote.$;
};

// ParamsSpec for UpdateCaptureModes
network.mojom.NetLogProxySource_UpdateCaptureModes_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetLogProxySource.UpdateCaptureModes_Params',
      packedSize: 16,
      fields: [
        { name: 'modes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
network.mojom.NetLogProxySourcePtr = network.mojom.NetLogProxySourceRemote;
network.mojom.NetLogProxySourceRequest = network.mojom.NetLogProxySourcePendingReceiver;


// Interface: NetLogProxySink
network.mojom.NetLogProxySink = {};

network.mojom.NetLogProxySink_AddEntry_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetLogProxySink_AddEntry_Params',
      packedSize: 40,
      fields: [
        { name: 'type', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'net_log_source', packedOffset: 0, packedBitOffset: 0, type: network.mojom.NetLogSourceSpec, nullable: false, minVersion: 0 },
        { name: 'phase', packedOffset: 28, packedBitOffset: 0, type: network.mojom.NetLogEventPhaseSpec, nullable: false, minVersion: 0 },
        { name: 'time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'params', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.DictionaryValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

network.mojom.NetLogProxySinkPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.NetLogProxySinkRemote = class {
  static get $interfaceName() {
    return 'network.mojom.NetLogProxySink';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.NetLogProxySinkPendingReceiver,
      handle);
    this.$ = new network.mojom.NetLogProxySinkRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.NetLogProxySinkRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addEntry(type, net_log_source, phase, time, params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.NetLogProxySink_AddEntry_ParamsSpec,
      null,
      [type, net_log_source, phase, time, params]);
  }

};

network.mojom.NetLogProxySink.getRemote = function() {
  let remote = new network.mojom.NetLogProxySinkRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.NetLogProxySink',
    'context');
  return remote.$;
};

// ParamsSpec for AddEntry
network.mojom.NetLogProxySink_AddEntry_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetLogProxySink.AddEntry_Params',
      packedSize: 40,
      fields: [
        { name: 'type', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'net_log_source', packedOffset: 0, packedBitOffset: 0, type: network.mojom.NetLogSourceSpec, nullable: false, minVersion: 0 },
        { name: 'phase', packedOffset: 28, packedBitOffset: 0, type: network.mojom.NetLogEventPhaseSpec, nullable: false, minVersion: 0 },
        { name: 'time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'params', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.DictionaryValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Legacy compatibility
network.mojom.NetLogProxySinkPtr = network.mojom.NetLogProxySinkRemote;
network.mojom.NetLogProxySinkRequest = network.mojom.NetLogProxySinkPendingReceiver;

