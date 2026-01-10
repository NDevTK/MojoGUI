// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/net_log.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


network.mojom.mojom.kUnlimitedFileSize = 0xFFFFFFFFFFFFFFFF;

// Enum: NetLogCaptureMode
network.mojom.mojom.NetLogCaptureMode = {
  HEAVILY_REDACTED: 0,
  DEFAULT: 1,
  INCLUDE_PRIVACY_INFO: 2,
  EVERYTHING: 3,
};
network.mojom.mojom.NetLogCaptureModeSpec = { $: mojo.internal.Enum() };

// Enum: NetLogEventPhase
network.mojom.mojom.NetLogEventPhase = {
  BEGIN: 0,
  END: 1,
  NONE: 2,
};
network.mojom.mojom.NetLogEventPhaseSpec = { $: mojo.internal.Enum() };

// Interface: NetLogExporter
network.mojom.mojom.NetLogExporter = {};

network.mojom.mojom.NetLogExporterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.mojom.NetLogExporterRemote = class {
  static get $interfaceName() {
    return 'network.mojom.NetLogExporter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.mojom.NetLogExporterPendingReceiver,
      handle);
    this.$ = new network.mojom.mojom.NetLogExporterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.mojom.NetLogExporterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  start(destination, extra_constants, capture_mode, max_file_size) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.mojom.NetLogExporter_Start_ParamsSpec,
      network.mojom.mojom.NetLogExporter_Start_ResponseParamsSpec,
      [destination, extra_constants, capture_mode, max_file_size]);
  }

  stop(polled_values) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.mojom.NetLogExporter_Stop_ParamsSpec,
      network.mojom.mojom.NetLogExporter_Stop_ResponseParamsSpec,
      [polled_values]);
  }

};

network.mojom.mojom.NetLogExporter.getRemote = function() {
  let remote = new network.mojom.mojom.NetLogExporterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.NetLogExporter',
    'context');
  return remote.$;
};

// ParamsSpec for Start
network.mojom.mojom.NetLogExporter_Start_ParamsSpec = {
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

network.mojom.mojom.NetLogExporter_Start_ResponseParamsSpec = {
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
network.mojom.mojom.NetLogExporter_Stop_ParamsSpec = {
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

network.mojom.mojom.NetLogExporter_Stop_ResponseParamsSpec = {
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
network.mojom.mojom.NetLogExporterPtr = network.mojom.mojom.NetLogExporterRemote;
network.mojom.mojom.NetLogExporterRequest = network.mojom.mojom.NetLogExporterPendingReceiver;


// Interface: NetLogProxySource
network.mojom.mojom.NetLogProxySource = {};

network.mojom.mojom.NetLogProxySourcePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.mojom.NetLogProxySourceRemote = class {
  static get $interfaceName() {
    return 'network.mojom.NetLogProxySource';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.mojom.NetLogProxySourcePendingReceiver,
      handle);
    this.$ = new network.mojom.mojom.NetLogProxySourceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.mojom.NetLogProxySourceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updateCaptureModes(modes) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.mojom.NetLogProxySource_UpdateCaptureModes_ParamsSpec,
      null,
      [modes]);
  }

};

network.mojom.mojom.NetLogProxySource.getRemote = function() {
  let remote = new network.mojom.mojom.NetLogProxySourceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.NetLogProxySource',
    'context');
  return remote.$;
};

// ParamsSpec for UpdateCaptureModes
network.mojom.mojom.NetLogProxySource_UpdateCaptureModes_ParamsSpec = {
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
network.mojom.mojom.NetLogProxySourcePtr = network.mojom.mojom.NetLogProxySourceRemote;
network.mojom.mojom.NetLogProxySourceRequest = network.mojom.mojom.NetLogProxySourcePendingReceiver;


// Interface: NetLogProxySink
network.mojom.mojom.NetLogProxySink = {};

network.mojom.mojom.NetLogProxySinkPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.mojom.NetLogProxySinkRemote = class {
  static get $interfaceName() {
    return 'network.mojom.NetLogProxySink';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.mojom.NetLogProxySinkPendingReceiver,
      handle);
    this.$ = new network.mojom.mojom.NetLogProxySinkRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.mojom.NetLogProxySinkRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addEntry(type, net_log_source, phase, time, params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.mojom.NetLogProxySink_AddEntry_ParamsSpec,
      null,
      [type, net_log_source, phase, time, params]);
  }

};

network.mojom.mojom.NetLogProxySink.getRemote = function() {
  let remote = new network.mojom.mojom.NetLogProxySinkRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.NetLogProxySink',
    'context');
  return remote.$;
};

// ParamsSpec for AddEntry
network.mojom.mojom.NetLogProxySink_AddEntry_ParamsSpec = {
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
network.mojom.mojom.NetLogProxySinkPtr = network.mojom.mojom.NetLogProxySinkRemote;
network.mojom.mojom.NetLogProxySinkRequest = network.mojom.mojom.NetLogProxySinkPendingReceiver;

