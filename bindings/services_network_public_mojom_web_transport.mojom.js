// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/web_transport.mojom
// Module: network.mojom

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var mojo_base = mojo_base || {};

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
      mojo.internal.StructField('details', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('net_error', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('quic_error', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
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
      mojo.internal.StructField('reason', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('code', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
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
      mojo.internal.StructField('stream_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('succeeded', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.WebTransport_AcceptBidirectionalStream_ParamsSpec, 'network.mojom.WebTransport_AcceptBidirectionalStream_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.WebTransport_AcceptBidirectionalStream_ResponseParamsSpec, 'network.mojom.WebTransport_AcceptBidirectionalStream_ResponseParams', [
      mojo.internal.StructField('readable', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('writable', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('stream_id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.WebTransport_AcceptUnidirectionalStream_ParamsSpec, 'network.mojom.WebTransport_AcceptUnidirectionalStream_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.WebTransport_AcceptUnidirectionalStream_ResponseParamsSpec, 'network.mojom.WebTransport_AcceptUnidirectionalStream_ResponseParams', [
      mojo.internal.StructField('readable', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('stream_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
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
  sendDatagram(data) {
    return this.$.sendDatagram(data);
  }
  createStream(readable, writable) {
    return this.$.createStream(readable, writable);
  }
  acceptBidirectionalStream() {
    return this.$.acceptBidirectionalStream();
  }
  acceptUnidirectionalStream() {
    return this.$.acceptUnidirectionalStream();
  }
  sendFin(stream_id) {
    return this.$.sendFin(stream_id);
  }
  abortStream(stream_id, code) {
    return this.$.abortStream(stream_id, code);
  }
  stopSending(stream_id, code) {
    return this.$.stopSending(stream_id, code);
  }
  setOutgoingDatagramExpirationDuration(duration) {
    return this.$.setOutgoingDatagramExpirationDuration(duration);
  }
  getStats() {
    return this.$.getStats();
  }
  close(close_info) {
    return this.$.close(close_info);
  }
};

network.mojom.WebTransportRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebTransport', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  sendDatagram(data) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.WebTransport_SendDatagram_ParamsSpec,
      network.mojom.WebTransport_SendDatagram_ResponseParamsSpec,
      [data],
      false);
  }

  createStream(readable, writable) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      network.mojom.WebTransport_CreateStream_ParamsSpec,
      network.mojom.WebTransport_CreateStream_ResponseParamsSpec,
      [readable, writable],
      false);
  }

  acceptBidirectionalStream() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      network.mojom.WebTransport_AcceptBidirectionalStream_ParamsSpec,
      network.mojom.WebTransport_AcceptBidirectionalStream_ResponseParamsSpec,
      [],
      false);
  }

  acceptUnidirectionalStream() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      network.mojom.WebTransport_AcceptUnidirectionalStream_ParamsSpec,
      network.mojom.WebTransport_AcceptUnidirectionalStream_ResponseParamsSpec,
      [],
      false);
  }

  sendFin(stream_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      network.mojom.WebTransport_SendFin_ParamsSpec,
      null,
      [stream_id],
      false);
  }

  abortStream(stream_id, code) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      network.mojom.WebTransport_AbortStream_ParamsSpec,
      null,
      [stream_id, code],
      false);
  }

  stopSending(stream_id, code) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      network.mojom.WebTransport_StopSending_ParamsSpec,
      null,
      [stream_id, code],
      false);
  }

  setOutgoingDatagramExpirationDuration(duration) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      network.mojom.WebTransport_SetOutgoingDatagramExpirationDuration_ParamsSpec,
      null,
      [duration],
      false);
  }

  getStats() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      network.mojom.WebTransport_GetStats_ParamsSpec,
      network.mojom.WebTransport_GetStats_ResponseParamsSpec,
      [],
      false);
  }

  close(close_info) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      network.mojom.WebTransport_Close_ParamsSpec,
      null,
      [close_info],
      false);
  }

};

network.mojom.WebTransport.getRemote = function() {
  let remote = new network.mojom.WebTransportRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.WebTransport',
    'context');
  return remote.$;
};

network.mojom.WebTransportReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebTransport', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.WebTransport_SendDatagram_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.WebTransport_CreateStream_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.WebTransport_AcceptBidirectionalStream_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.WebTransport_AcceptUnidirectionalStream_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.WebTransport_SendFin_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.WebTransport_AbortStream_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.WebTransport_StopSending_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.WebTransport_SetOutgoingDatagramExpirationDuration_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.WebTransport_GetStats_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.WebTransport_Close_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.WebTransport_SendDatagram_ParamsSpec.$.structSpec);
          const result = this.impl.sendDatagram(params.data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.WebTransport_SendDatagram_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.WebTransport_CreateStream_ParamsSpec.$.structSpec);
          const result = this.impl.createStream(params.readable, params.writable);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.WebTransport_CreateStream_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.WebTransport_AcceptBidirectionalStream_ParamsSpec.$.structSpec);
          const result = this.impl.acceptBidirectionalStream();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.WebTransport_AcceptBidirectionalStream_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.WebTransport_AcceptUnidirectionalStream_ParamsSpec.$.structSpec);
          const result = this.impl.acceptUnidirectionalStream();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.WebTransport_AcceptUnidirectionalStream_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.WebTransport_SendFin_ParamsSpec.$.structSpec);
          const result = this.impl.sendFin(params.stream_id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.WebTransport_AbortStream_ParamsSpec.$.structSpec);
          const result = this.impl.abortStream(params.stream_id, params.code);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.WebTransport_StopSending_ParamsSpec.$.structSpec);
          const result = this.impl.stopSending(params.stream_id, params.code);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.WebTransport_SetOutgoingDatagramExpirationDuration_ParamsSpec.$.structSpec);
          const result = this.impl.setOutgoingDatagramExpirationDuration(params.duration);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.WebTransport_GetStats_ParamsSpec.$.structSpec);
          const result = this.impl.getStats();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.WebTransport_GetStats_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.WebTransport_Close_ParamsSpec.$.structSpec);
          const result = this.impl.close(params.close_info);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

network.mojom.WebTransportReceiver = network.mojom.WebTransportReceiver;

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
  onDatagramReceived(data) {
    return this.$.onDatagramReceived(data);
  }
  onIncomingStreamClosed(stream_id, fin_received) {
    return this.$.onIncomingStreamClosed(stream_id, fin_received);
  }
  onOutgoingStreamClosed(stream_id) {
    return this.$.onOutgoingStreamClosed(stream_id);
  }
  onReceivedStopSending(stream_id, stream_error_code) {
    return this.$.onReceivedStopSending(stream_id, stream_error_code);
  }
  onReceivedResetStream(stream_id, stream_error_code) {
    return this.$.onReceivedResetStream(stream_id, stream_error_code);
  }
  onClosed(close_info, final_stats) {
    return this.$.onClosed(close_info, final_stats);
  }
};

network.mojom.WebTransportClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebTransportClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onDatagramReceived(data) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.WebTransportClient_OnDatagramReceived_ParamsSpec,
      null,
      [data],
      false);
  }

  onIncomingStreamClosed(stream_id, fin_received) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      network.mojom.WebTransportClient_OnIncomingStreamClosed_ParamsSpec,
      null,
      [stream_id, fin_received],
      false);
  }

  onOutgoingStreamClosed(stream_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      network.mojom.WebTransportClient_OnOutgoingStreamClosed_ParamsSpec,
      null,
      [stream_id],
      false);
  }

  onReceivedStopSending(stream_id, stream_error_code) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      network.mojom.WebTransportClient_OnReceivedStopSending_ParamsSpec,
      null,
      [stream_id, stream_error_code],
      false);
  }

  onReceivedResetStream(stream_id, stream_error_code) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      network.mojom.WebTransportClient_OnReceivedResetStream_ParamsSpec,
      null,
      [stream_id, stream_error_code],
      false);
  }

  onClosed(close_info, final_stats) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      network.mojom.WebTransportClient_OnClosed_ParamsSpec,
      null,
      [close_info, final_stats],
      false);
  }

};

network.mojom.WebTransportClient.getRemote = function() {
  let remote = new network.mojom.WebTransportClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.WebTransportClient',
    'context');
  return remote.$;
};

network.mojom.WebTransportClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebTransportClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.WebTransportClient_OnDatagramReceived_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.WebTransportClient_OnIncomingStreamClosed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.WebTransportClient_OnOutgoingStreamClosed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.WebTransportClient_OnReceivedStopSending_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.WebTransportClient_OnReceivedResetStream_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.WebTransportClient_OnClosed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.WebTransportClient_OnDatagramReceived_ParamsSpec.$.structSpec);
          const result = this.impl.onDatagramReceived(params.data);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.WebTransportClient_OnIncomingStreamClosed_ParamsSpec.$.structSpec);
          const result = this.impl.onIncomingStreamClosed(params.stream_id, params.fin_received);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.WebTransportClient_OnOutgoingStreamClosed_ParamsSpec.$.structSpec);
          const result = this.impl.onOutgoingStreamClosed(params.stream_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.WebTransportClient_OnReceivedStopSending_ParamsSpec.$.structSpec);
          const result = this.impl.onReceivedStopSending(params.stream_id, params.stream_error_code);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.WebTransportClient_OnReceivedResetStream_ParamsSpec.$.structSpec);
          const result = this.impl.onReceivedResetStream(params.stream_id, params.stream_error_code);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.WebTransportClient_OnClosed_ParamsSpec.$.structSpec);
          const result = this.impl.onClosed(params.close_info, params.final_stats);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

network.mojom.WebTransportClientReceiver = network.mojom.WebTransportClientReceiver;

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
  onBeforeConnect(server_address) {
    return this.$.onBeforeConnect(server_address);
  }
  onConnectionEstablished(transport, client, response_headers, selected_application_protocol, initial_stats) {
    return this.$.onConnectionEstablished(transport, client, response_headers, selected_application_protocol, initial_stats);
  }
  onHandshakeFailed(error) {
    return this.$.onHandshakeFailed(error);
  }
};

network.mojom.WebTransportHandshakeClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebTransportHandshakeClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onBeforeConnect(server_address) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.WebTransportHandshakeClient_OnBeforeConnect_ParamsSpec,
      null,
      [server_address],
      false);
  }

  onConnectionEstablished(transport, client, response_headers, selected_application_protocol, initial_stats) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      network.mojom.WebTransportHandshakeClient_OnConnectionEstablished_ParamsSpec,
      null,
      [transport, client, response_headers, selected_application_protocol, initial_stats],
      false);
  }

  onHandshakeFailed(error) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      network.mojom.WebTransportHandshakeClient_OnHandshakeFailed_ParamsSpec,
      null,
      [error],
      false);
  }

};

network.mojom.WebTransportHandshakeClient.getRemote = function() {
  let remote = new network.mojom.WebTransportHandshakeClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.WebTransportHandshakeClient',
    'context');
  return remote.$;
};

network.mojom.WebTransportHandshakeClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebTransportHandshakeClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.WebTransportHandshakeClient_OnBeforeConnect_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.WebTransportHandshakeClient_OnConnectionEstablished_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.WebTransportHandshakeClient_OnHandshakeFailed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.WebTransportHandshakeClient_OnBeforeConnect_ParamsSpec.$.structSpec);
          const result = this.impl.onBeforeConnect(params.server_address);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.WebTransportHandshakeClient_OnConnectionEstablished_ParamsSpec.$.structSpec);
          const result = this.impl.onConnectionEstablished(params.transport, params.client, params.response_headers, params.selected_application_protocol, params.initial_stats);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.WebTransportHandshakeClient_OnHandshakeFailed_ParamsSpec.$.structSpec);
          const result = this.impl.onHandshakeFailed(params.error);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

network.mojom.WebTransportHandshakeClientReceiver = network.mojom.WebTransportHandshakeClientReceiver;

network.mojom.WebTransportHandshakeClientPtr = network.mojom.WebTransportHandshakeClientRemote;
network.mojom.WebTransportHandshakeClientRequest = network.mojom.WebTransportHandshakeClientPendingReceiver;

