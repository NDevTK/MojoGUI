// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/net_log.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: NetLogCaptureMode
network.mojom.NetLogCaptureMode = {
  HEAVILY_REDACTED: 0,
  DEFAULT: 1,
  INCLUDE_PRIVACY_INFO: 2,
  EVERYTHING: 3,
};

// Enum: NetLogEventPhase
network.mojom.NetLogEventPhase = {
  BEGIN: 0,
  END: 1,
  NONE: 2,
};

// Interface: NetLogExporter
network.mojom.NetLogExporter = {};

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
        { name: 'destination', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FileSpec, nullable: false },
        { name: 'extra_constants', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.DictionaryValueSpec, nullable: false },
        { name: 'capture_mode', packedOffset: 16, packedBitOffset: 0, type: network.mojom.NetLogCaptureModeSpec, nullable: false },
        { name: 'max_file_size', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetLogExporter_Start_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetLogExporter.Start_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'net_error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'polled_values', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.DictionaryValueSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.NetLogExporter_Stop_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetLogExporter.Stop_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'net_error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.NetLogExporterPtr = network.mojom.NetLogExporterRemote;
network.mojom.NetLogExporterRequest = network.mojom.NetLogExporterPendingReceiver;


// Interface: NetLogProxySource
network.mojom.NetLogProxySource = {};

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
        { name: 'modes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.NetLogProxySourcePtr = network.mojom.NetLogProxySourceRemote;
network.mojom.NetLogProxySourceRequest = network.mojom.NetLogProxySourcePendingReceiver;


// Interface: NetLogProxySink
network.mojom.NetLogProxySink = {};

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
      packedSize: 48,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'net_log_source', packedOffset: 8, packedBitOffset: 0, type: network.mojom.NetLogSourceSpec, nullable: false },
        { name: 'phase', packedOffset: 16, packedBitOffset: 0, type: network.mojom.NetLogEventPhaseSpec, nullable: false },
        { name: 'time', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
        { name: 'params', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.DictionaryValueSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.NetLogProxySinkPtr = network.mojom.NetLogProxySinkRemote;
network.mojom.NetLogProxySinkRequest = network.mojom.NetLogProxySinkPendingReceiver;

