// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/web_transport.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: WebTransportError
network.mojom.mojom.WebTransportErrorSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebTransportError',
      packedSize: 32,
      fields: [
        { name: 'net_error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'quic_error', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'details', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'safe_to_report_details', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: WebTransportCertificateFingerprint
network.mojom.mojom.WebTransportCertificateFingerprintSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebTransportCertificateFingerprint',
      packedSize: 24,
      fields: [
        { name: 'algorithm', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'fingerprint', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: WebTransportCloseInfo
network.mojom.mojom.WebTransportCloseInfoSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebTransportCloseInfo',
      packedSize: 24,
      fields: [
        { name: 'code', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'reason', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: WebTransportStats
network.mojom.mojom.WebTransportStatsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebTransportStats',
      packedSize: 64,
      fields: [
        { name: 'timestamp', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'min_rtt', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'smoothed_rtt', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'rtt_variation', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'estimated_send_rate_bps', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'datagrams_expired_outgoing', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'datagrams_lost_outgoing', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Interface: WebTransport
network.mojom.mojom.WebTransport = {};

network.mojom.mojom.WebTransportPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.mojom.WebTransportRemote = class {
  static get $interfaceName() {
    return 'network.mojom.WebTransport';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.mojom.WebTransportPendingReceiver,
      handle);
    this.$ = new network.mojom.mojom.WebTransportRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.mojom.WebTransportRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  sendDatagram(data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.mojom.WebTransport_SendDatagram_ParamsSpec,
      network.mojom.mojom.WebTransport_SendDatagram_ResponseParamsSpec,
      [data]);
  }

  createStream(readable, writable) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.mojom.WebTransport_CreateStream_ParamsSpec,
      network.mojom.mojom.WebTransport_CreateStream_ResponseParamsSpec,
      [readable, writable]);
  }

  acceptBidirectionalStream() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.mojom.WebTransport_AcceptBidirectionalStream_ParamsSpec,
      network.mojom.mojom.WebTransport_AcceptBidirectionalStream_ResponseParamsSpec,
      []);
  }

  acceptUnidirectionalStream() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      network.mojom.mojom.WebTransport_AcceptUnidirectionalStream_ParamsSpec,
      network.mojom.mojom.WebTransport_AcceptUnidirectionalStream_ResponseParamsSpec,
      []);
  }

  sendFin(stream_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      network.mojom.mojom.WebTransport_SendFin_ParamsSpec,
      null,
      [stream_id]);
  }

  abortStream(stream_id, code) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      network.mojom.mojom.WebTransport_AbortStream_ParamsSpec,
      null,
      [stream_id, code]);
  }

  stopSending(stream_id, code) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      network.mojom.mojom.WebTransport_StopSending_ParamsSpec,
      null,
      [stream_id, code]);
  }

  setOutgoingDatagramExpirationDuration(duration) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      network.mojom.mojom.WebTransport_SetOutgoingDatagramExpirationDuration_ParamsSpec,
      null,
      [duration]);
  }

  getStats() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      network.mojom.mojom.WebTransport_GetStats_ParamsSpec,
      network.mojom.mojom.WebTransport_GetStats_ResponseParamsSpec,
      []);
  }

  close(close_info) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      network.mojom.mojom.WebTransport_Close_ParamsSpec,
      null,
      [close_info]);
  }

};

network.mojom.mojom.WebTransport.getRemote = function() {
  let remote = new network.mojom.mojom.WebTransportRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.WebTransport',
    'context');
  return remote.$;
};

// ParamsSpec for SendDatagram
network.mojom.mojom.WebTransport_SendDatagram_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebTransport.SendDatagram_Params',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyBufferSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

network.mojom.mojom.WebTransport_SendDatagram_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebTransport.SendDatagram_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateStream
network.mojom.mojom.WebTransport_CreateStream_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebTransport.CreateStream_Params',
      packedSize: 24,
      fields: [
        { name: 'readable', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'writable', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

network.mojom.mojom.WebTransport_CreateStream_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebTransport.CreateStream_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'succeeded', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'stream_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AcceptBidirectionalStream
network.mojom.mojom.WebTransport_AcceptBidirectionalStream_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebTransport.AcceptBidirectionalStream_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

network.mojom.mojom.WebTransport_AcceptBidirectionalStream_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebTransport.AcceptBidirectionalStream_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'stream_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'readable', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'writable', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for AcceptUnidirectionalStream
network.mojom.mojom.WebTransport_AcceptUnidirectionalStream_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebTransport.AcceptUnidirectionalStream_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

network.mojom.mojom.WebTransport_AcceptUnidirectionalStream_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebTransport.AcceptUnidirectionalStream_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'stream_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'readable', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SendFin
network.mojom.mojom.WebTransport_SendFin_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebTransport.SendFin_Params',
      packedSize: 16,
      fields: [
        { name: 'stream_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AbortStream
network.mojom.mojom.WebTransport_AbortStream_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebTransport.AbortStream_Params',
      packedSize: 16,
      fields: [
        { name: 'stream_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'code', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StopSending
network.mojom.mojom.WebTransport_StopSending_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebTransport.StopSending_Params',
      packedSize: 16,
      fields: [
        { name: 'stream_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'code', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetOutgoingDatagramExpirationDuration
network.mojom.mojom.WebTransport_SetOutgoingDatagramExpirationDuration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebTransport.SetOutgoingDatagramExpirationDuration_Params',
      packedSize: 16,
      fields: [
        { name: 'duration', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetStats
network.mojom.mojom.WebTransport_GetStats_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebTransport.GetStats_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

network.mojom.mojom.WebTransport_GetStats_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebTransport.GetStats_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'stats', packedOffset: 0, packedBitOffset: 0, type: network.mojom.WebTransportStatsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Close
network.mojom.mojom.WebTransport_Close_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebTransport.Close_Params',
      packedSize: 16,
      fields: [
        { name: 'close_info', packedOffset: 0, packedBitOffset: 0, type: network.mojom.WebTransportCloseInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
network.mojom.mojom.WebTransportPtr = network.mojom.mojom.WebTransportRemote;
network.mojom.mojom.WebTransportRequest = network.mojom.mojom.WebTransportPendingReceiver;


// Interface: WebTransportClient
network.mojom.mojom.WebTransportClient = {};

network.mojom.mojom.WebTransportClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.mojom.WebTransportClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.WebTransportClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.mojom.WebTransportClientPendingReceiver,
      handle);
    this.$ = new network.mojom.mojom.WebTransportClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.mojom.WebTransportClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDatagramReceived(data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.mojom.WebTransportClient_OnDatagramReceived_ParamsSpec,
      null,
      [data]);
  }

  onIncomingStreamClosed(stream_id, fin_received) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.mojom.WebTransportClient_OnIncomingStreamClosed_ParamsSpec,
      null,
      [stream_id, fin_received]);
  }

  onOutgoingStreamClosed(stream_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.mojom.WebTransportClient_OnOutgoingStreamClosed_ParamsSpec,
      null,
      [stream_id]);
  }

  onReceivedStopSending(stream_id, stream_error_code) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      network.mojom.mojom.WebTransportClient_OnReceivedStopSending_ParamsSpec,
      null,
      [stream_id, stream_error_code]);
  }

  onReceivedResetStream(stream_id, stream_error_code) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      network.mojom.mojom.WebTransportClient_OnReceivedResetStream_ParamsSpec,
      null,
      [stream_id, stream_error_code]);
  }

  onClosed(close_info, final_stats) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      network.mojom.mojom.WebTransportClient_OnClosed_ParamsSpec,
      null,
      [close_info, final_stats]);
  }

};

network.mojom.mojom.WebTransportClient.getRemote = function() {
  let remote = new network.mojom.mojom.WebTransportClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.WebTransportClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnDatagramReceived
network.mojom.mojom.WebTransportClient_OnDatagramReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebTransportClient.OnDatagramReceived_Params',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyBufferSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnIncomingStreamClosed
network.mojom.mojom.WebTransportClient_OnIncomingStreamClosed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebTransportClient.OnIncomingStreamClosed_Params',
      packedSize: 16,
      fields: [
        { name: 'stream_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'fin_received', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnOutgoingStreamClosed
network.mojom.mojom.WebTransportClient_OnOutgoingStreamClosed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebTransportClient.OnOutgoingStreamClosed_Params',
      packedSize: 16,
      fields: [
        { name: 'stream_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnReceivedStopSending
network.mojom.mojom.WebTransportClient_OnReceivedStopSending_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebTransportClient.OnReceivedStopSending_Params',
      packedSize: 16,
      fields: [
        { name: 'stream_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'stream_error_code', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnReceivedResetStream
network.mojom.mojom.WebTransportClient_OnReceivedResetStream_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebTransportClient.OnReceivedResetStream_Params',
      packedSize: 16,
      fields: [
        { name: 'stream_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'stream_error_code', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnClosed
network.mojom.mojom.WebTransportClient_OnClosed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebTransportClient.OnClosed_Params',
      packedSize: 24,
      fields: [
        { name: 'close_info', packedOffset: 0, packedBitOffset: 0, type: network.mojom.WebTransportCloseInfoSpec, nullable: true, minVersion: 0 },
        { name: 'final_stats', packedOffset: 8, packedBitOffset: 0, type: network.mojom.WebTransportStatsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
network.mojom.mojom.WebTransportClientPtr = network.mojom.mojom.WebTransportClientRemote;
network.mojom.mojom.WebTransportClientRequest = network.mojom.mojom.WebTransportClientPendingReceiver;


// Interface: WebTransportHandshakeClient
network.mojom.mojom.WebTransportHandshakeClient = {};

network.mojom.mojom.WebTransportHandshakeClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.mojom.WebTransportHandshakeClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.WebTransportHandshakeClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.mojom.WebTransportHandshakeClientPendingReceiver,
      handle);
    this.$ = new network.mojom.mojom.WebTransportHandshakeClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.mojom.WebTransportHandshakeClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onBeforeConnect(server_address) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.mojom.WebTransportHandshakeClient_OnBeforeConnect_ParamsSpec,
      null,
      [server_address]);
  }

  onConnectionEstablished(transport, client, response_headers, selected_application_protocol, initial_stats) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.mojom.WebTransportHandshakeClient_OnConnectionEstablished_ParamsSpec,
      null,
      [transport, client, response_headers, selected_application_protocol, initial_stats]);
  }

  onHandshakeFailed(error) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.mojom.WebTransportHandshakeClient_OnHandshakeFailed_ParamsSpec,
      null,
      [error]);
  }

};

network.mojom.mojom.WebTransportHandshakeClient.getRemote = function() {
  let remote = new network.mojom.mojom.WebTransportHandshakeClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.WebTransportHandshakeClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnBeforeConnect
network.mojom.mojom.WebTransportHandshakeClient_OnBeforeConnect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebTransportHandshakeClient.OnBeforeConnect_Params',
      packedSize: 16,
      fields: [
        { name: 'server_address', packedOffset: 0, packedBitOffset: 0, type: network.mojom.IPEndPointSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnConnectionEstablished
network.mojom.mojom.WebTransportHandshakeClient_OnConnectionEstablished_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebTransportHandshakeClient.OnConnectionEstablished_Params',
      packedSize: 48,
      fields: [
        { name: 'transport', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(network.mojom.WebTransportRemote), nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(network.mojom.WebTransportClientRemote), nullable: false, minVersion: 0 },
        { name: 'response_headers', packedOffset: 16, packedBitOffset: 0, type: network.mojom.HttpResponseHeadersSpec, nullable: false, minVersion: 0 },
        { name: 'selected_application_protocol', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'initial_stats', packedOffset: 32, packedBitOffset: 0, type: network.mojom.WebTransportStatsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// ParamsSpec for OnHandshakeFailed
network.mojom.mojom.WebTransportHandshakeClient_OnHandshakeFailed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebTransportHandshakeClient.OnHandshakeFailed_Params',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: network.mojom.WebTransportErrorSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
network.mojom.mojom.WebTransportHandshakeClientPtr = network.mojom.mojom.WebTransportHandshakeClientRemote;
network.mojom.mojom.WebTransportHandshakeClientRequest = network.mojom.mojom.WebTransportHandshakeClientPendingReceiver;

