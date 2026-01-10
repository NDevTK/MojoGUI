// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/web_transport.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var services = services || {};
var services = services || {};

network.mojom.WebTransportErrorSpec = { $: {} };
network.mojom.WebTransportCertificateFingerprintSpec = { $: {} };
network.mojom.WebTransportCloseInfoSpec = { $: {} };
network.mojom.WebTransportStatsSpec = { $: {} };
network.mojom.WebTransport = {};
network.mojom.WebTransport.$interfaceName = 'network.mojom.WebTransport';
network.mojom.WebTransport_SendDatagram_ParamsSpec = { $: {} };
network.mojom.WebTransport_SendDatagram_ResponseParamsSpec = { $: {} };
network.mojom.WebTransport_CreateStream_ParamsSpec = { $: {} };
network.mojom.WebTransport_CreateStream_ResponseParamsSpec = { $: {} };
network.mojom.WebTransport_AcceptBidirectionalStream_ParamsSpec = { $: {} };
network.mojom.WebTransport_AcceptBidirectionalStream_ResponseParamsSpec = { $: {} };
network.mojom.WebTransport_AcceptUnidirectionalStream_ParamsSpec = { $: {} };
network.mojom.WebTransport_AcceptUnidirectionalStream_ResponseParamsSpec = { $: {} };
network.mojom.WebTransport_SendFin_ParamsSpec = { $: {} };
network.mojom.WebTransport_AbortStream_ParamsSpec = { $: {} };
network.mojom.WebTransport_StopSending_ParamsSpec = { $: {} };
network.mojom.WebTransport_SetOutgoingDatagramExpirationDuration_ParamsSpec = { $: {} };
network.mojom.WebTransport_GetStats_ParamsSpec = { $: {} };
network.mojom.WebTransport_GetStats_ResponseParamsSpec = { $: {} };
network.mojom.WebTransport_Close_ParamsSpec = { $: {} };
network.mojom.WebTransportClient = {};
network.mojom.WebTransportClient.$interfaceName = 'network.mojom.WebTransportClient';
network.mojom.WebTransportClient_OnDatagramReceived_ParamsSpec = { $: {} };
network.mojom.WebTransportClient_OnIncomingStreamClosed_ParamsSpec = { $: {} };
network.mojom.WebTransportClient_OnOutgoingStreamClosed_ParamsSpec = { $: {} };
network.mojom.WebTransportClient_OnReceivedStopSending_ParamsSpec = { $: {} };
network.mojom.WebTransportClient_OnReceivedResetStream_ParamsSpec = { $: {} };
network.mojom.WebTransportClient_OnClosed_ParamsSpec = { $: {} };
network.mojom.WebTransportHandshakeClient = {};
network.mojom.WebTransportHandshakeClient.$interfaceName = 'network.mojom.WebTransportHandshakeClient';
network.mojom.WebTransportHandshakeClient_OnBeforeConnect_ParamsSpec = { $: {} };
network.mojom.WebTransportHandshakeClient_OnConnectionEstablished_ParamsSpec = { $: {} };
network.mojom.WebTransportHandshakeClient_OnHandshakeFailed_ParamsSpec = { $: {} };

// Struct: WebTransportError
mojo.internal.Struct(
    network.mojom.WebTransportErrorSpec, 'network.mojom.WebTransportError', [
      mojo.internal.StructField('net_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('quic_error', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('details', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('safe_to_report_details', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: WebTransportCertificateFingerprint
mojo.internal.Struct(
    network.mojom.WebTransportCertificateFingerprintSpec, 'network.mojom.WebTransportCertificateFingerprint', [
      mojo.internal.StructField('algorithm', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('fingerprint', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: WebTransportCloseInfo
mojo.internal.Struct(
    network.mojom.WebTransportCloseInfoSpec, 'network.mojom.WebTransportCloseInfo', [
      mojo.internal.StructField('code', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('reason', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: WebTransportStats
mojo.internal.Struct(
    network.mojom.WebTransportStatsSpec, 'network.mojom.WebTransportStats', [
      mojo.internal.StructField('timestamp', 0, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('min_rtt', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('smoothed_rtt', 16, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('rtt_variation', 24, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('estimated_send_rate_bps', 32, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('datagrams_expired_outgoing', 40, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('datagrams_lost_outgoing', 48, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 64]]);

// Interface: WebTransport
mojo.internal.Struct(
    network.mojom.WebTransport_SendDatagram_ParamsSpec, 'network.mojom.WebTransport_SendDatagram_Params', [
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.ReadOnlyBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.WebTransport_SendDatagram_ResponseParamsSpec, 'network.mojom.WebTransport_SendDatagram_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.WebTransport_CreateStream_ParamsSpec, 'network.mojom.WebTransport_CreateStream_Params', [
      mojo.internal.StructField('readable', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('writable', 8, 0, mojo.internal.Pointer, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.WebTransport_CreateStream_ResponseParamsSpec, 'network.mojom.WebTransport_CreateStream_ResponseParams', [
      mojo.internal.StructField('succeeded', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('stream_id', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.WebTransport_AcceptBidirectionalStream_ParamsSpec, 'network.mojom.WebTransport_AcceptBidirectionalStream_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.WebTransport_AcceptBidirectionalStream_ResponseParamsSpec, 'network.mojom.WebTransport_AcceptBidirectionalStream_ResponseParams', [
      mojo.internal.StructField('stream_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('readable', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('writable', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.WebTransport_AcceptUnidirectionalStream_ParamsSpec, 'network.mojom.WebTransport_AcceptUnidirectionalStream_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.WebTransport_AcceptUnidirectionalStream_ResponseParamsSpec, 'network.mojom.WebTransport_AcceptUnidirectionalStream_ResponseParams', [
      mojo.internal.StructField('stream_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('readable', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.WebTransport_SendFin_ParamsSpec, 'network.mojom.WebTransport_SendFin_Params', [
      mojo.internal.StructField('stream_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.WebTransport_AbortStream_ParamsSpec, 'network.mojom.WebTransport_AbortStream_Params', [
      mojo.internal.StructField('stream_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('code', 4, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.WebTransport_StopSending_ParamsSpec, 'network.mojom.WebTransport_StopSending_Params', [
      mojo.internal.StructField('stream_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('code', 4, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.WebTransport_SetOutgoingDatagramExpirationDuration_ParamsSpec, 'network.mojom.WebTransport_SetOutgoingDatagramExpirationDuration_Params', [
      mojo.internal.StructField('duration', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.WebTransport_GetStats_ParamsSpec, 'network.mojom.WebTransport_GetStats_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.WebTransport_GetStats_ResponseParamsSpec, 'network.mojom.WebTransport_GetStats_ResponseParams', [
      mojo.internal.StructField('stats', 0, 0, network.mojom.WebTransportStatsSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.WebTransport_Close_ParamsSpec, 'network.mojom.WebTransport_Close_Params', [
      mojo.internal.StructField('close_info', 0, 0, network.mojom.WebTransportCloseInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.WebTransportPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.WebTransportRemote = class {
  static get $interfaceName() {
    return 'network.mojom.WebTransport';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.WebTransportPendingReceiver,
      handle);
    this.$ = new network.mojom.WebTransportRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.WebTransportRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  sendDatagram(data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.WebTransport_SendDatagram_ParamsSpec,
      network.mojom.WebTransport_SendDatagram_ResponseParamsSpec,
      [data],
      false);
  }

  createStream(readable, writable) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.WebTransport_CreateStream_ParamsSpec,
      network.mojom.WebTransport_CreateStream_ResponseParamsSpec,
      [readable, writable],
      false);
  }

  acceptBidirectionalStream() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.WebTransport_AcceptBidirectionalStream_ParamsSpec,
      network.mojom.WebTransport_AcceptBidirectionalStream_ResponseParamsSpec,
      [],
      false);
  }

  acceptUnidirectionalStream() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      network.mojom.WebTransport_AcceptUnidirectionalStream_ParamsSpec,
      network.mojom.WebTransport_AcceptUnidirectionalStream_ResponseParamsSpec,
      [],
      false);
  }

  sendFin(stream_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      network.mojom.WebTransport_SendFin_ParamsSpec,
      null,
      [stream_id],
      false);
  }

  abortStream(stream_id, code) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      network.mojom.WebTransport_AbortStream_ParamsSpec,
      null,
      [stream_id, code],
      false);
  }

  stopSending(stream_id, code) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      network.mojom.WebTransport_StopSending_ParamsSpec,
      null,
      [stream_id, code],
      false);
  }

  setOutgoingDatagramExpirationDuration(duration) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      network.mojom.WebTransport_SetOutgoingDatagramExpirationDuration_ParamsSpec,
      null,
      [duration],
      false);
  }

  getStats() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      network.mojom.WebTransport_GetStats_ParamsSpec,
      network.mojom.WebTransport_GetStats_ResponseParamsSpec,
      [],
      false);
  }

  close(close_info) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      network.mojom.WebTransport_Close_ParamsSpec,
      null,
      [close_info],
      false);
  }

};

network.mojom.WebTransport.getRemote = function() {
  let remote = new network.mojom.WebTransportRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'network.mojom.WebTransport',
    'context');
  return remote.$;
};

network.mojom.WebTransportPtr = network.mojom.WebTransportRemote;
network.mojom.WebTransportRequest = network.mojom.WebTransportPendingReceiver;


// Interface: WebTransportClient
mojo.internal.Struct(
    network.mojom.WebTransportClient_OnDatagramReceived_ParamsSpec, 'network.mojom.WebTransportClient_OnDatagramReceived_Params', [
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.ReadOnlyBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.WebTransportClient_OnIncomingStreamClosed_ParamsSpec, 'network.mojom.WebTransportClient_OnIncomingStreamClosed_Params', [
      mojo.internal.StructField('stream_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('fin_received', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.WebTransportClient_OnOutgoingStreamClosed_ParamsSpec, 'network.mojom.WebTransportClient_OnOutgoingStreamClosed_Params', [
      mojo.internal.StructField('stream_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.WebTransportClient_OnReceivedStopSending_ParamsSpec, 'network.mojom.WebTransportClient_OnReceivedStopSending_Params', [
      mojo.internal.StructField('stream_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('stream_error_code', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.WebTransportClient_OnReceivedResetStream_ParamsSpec, 'network.mojom.WebTransportClient_OnReceivedResetStream_Params', [
      mojo.internal.StructField('stream_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('stream_error_code', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.WebTransportClient_OnClosed_ParamsSpec, 'network.mojom.WebTransportClient_OnClosed_Params', [
      mojo.internal.StructField('close_info', 0, 0, network.mojom.WebTransportCloseInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('final_stats', 8, 0, network.mojom.WebTransportStatsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

network.mojom.WebTransportClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.WebTransportClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.WebTransportClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.WebTransportClientPendingReceiver,
      handle);
    this.$ = new network.mojom.WebTransportClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.WebTransportClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDatagramReceived(data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.WebTransportClient_OnDatagramReceived_ParamsSpec,
      null,
      [data],
      false);
  }

  onIncomingStreamClosed(stream_id, fin_received) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.WebTransportClient_OnIncomingStreamClosed_ParamsSpec,
      null,
      [stream_id, fin_received],
      false);
  }

  onOutgoingStreamClosed(stream_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.WebTransportClient_OnOutgoingStreamClosed_ParamsSpec,
      null,
      [stream_id],
      false);
  }

  onReceivedStopSending(stream_id, stream_error_code) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      network.mojom.WebTransportClient_OnReceivedStopSending_ParamsSpec,
      null,
      [stream_id, stream_error_code],
      false);
  }

  onReceivedResetStream(stream_id, stream_error_code) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      network.mojom.WebTransportClient_OnReceivedResetStream_ParamsSpec,
      null,
      [stream_id, stream_error_code],
      false);
  }

  onClosed(close_info, final_stats) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      network.mojom.WebTransportClient_OnClosed_ParamsSpec,
      null,
      [close_info, final_stats],
      false);
  }

};

network.mojom.WebTransportClient.getRemote = function() {
  let remote = new network.mojom.WebTransportClientRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'network.mojom.WebTransportClient',
    'context');
  return remote.$;
};

network.mojom.WebTransportClientPtr = network.mojom.WebTransportClientRemote;
network.mojom.WebTransportClientRequest = network.mojom.WebTransportClientPendingReceiver;


// Interface: WebTransportHandshakeClient
mojo.internal.Struct(
    network.mojom.WebTransportHandshakeClient_OnBeforeConnect_ParamsSpec, 'network.mojom.WebTransportHandshakeClient_OnBeforeConnect_Params', [
      mojo.internal.StructField('server_address', 0, 0, network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.WebTransportHandshakeClient_OnConnectionEstablished_ParamsSpec, 'network.mojom.WebTransportHandshakeClient_OnConnectionEstablished_Params', [
      mojo.internal.StructField('transport', 0, 0, mojo.internal.InterfaceProxy(network.mojom.WebTransportRemote), null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceRequest(network.mojom.WebTransportClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('response_headers', 16, 0, network.mojom.HttpResponseHeadersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('selected_application_protocol', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('initial_stats', 32, 0, network.mojom.WebTransportStatsSpec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    network.mojom.WebTransportHandshakeClient_OnHandshakeFailed_ParamsSpec, 'network.mojom.WebTransportHandshakeClient_OnHandshakeFailed_Params', [
      mojo.internal.StructField('error', 0, 0, network.mojom.WebTransportErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.WebTransportHandshakeClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.WebTransportHandshakeClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.WebTransportHandshakeClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.WebTransportHandshakeClientPendingReceiver,
      handle);
    this.$ = new network.mojom.WebTransportHandshakeClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.WebTransportHandshakeClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onBeforeConnect(server_address) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.WebTransportHandshakeClient_OnBeforeConnect_ParamsSpec,
      null,
      [server_address],
      false);
  }

  onConnectionEstablished(transport, client, response_headers, selected_application_protocol, initial_stats) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.WebTransportHandshakeClient_OnConnectionEstablished_ParamsSpec,
      null,
      [transport, client, response_headers, selected_application_protocol, initial_stats],
      false);
  }

  onHandshakeFailed(error) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.WebTransportHandshakeClient_OnHandshakeFailed_ParamsSpec,
      null,
      [error],
      false);
  }

};

network.mojom.WebTransportHandshakeClient.getRemote = function() {
  let remote = new network.mojom.WebTransportHandshakeClientRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'network.mojom.WebTransportHandshakeClient',
    'context');
  return remote.$;
};

network.mojom.WebTransportHandshakeClientPtr = network.mojom.WebTransportHandshakeClientRemote;
network.mojom.WebTransportHandshakeClientRequest = network.mojom.WebTransportHandshakeClientPendingReceiver;

