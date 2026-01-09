// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/web_transport.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: WebTransportError
network.mojom.WebTransportError = class {
  constructor(values = {}) {
    this.false = values.false !== undefined ? values.false : 0;
  }
};

// Struct: WebTransportCertificateFingerprint
network.mojom.WebTransportCertificateFingerprint = class {
  constructor(values = {}) {
    this.fingerprint = values.fingerprint !== undefined ? values.fingerprint : "";
  }
};

// Struct: WebTransportCloseInfo
network.mojom.WebTransportCloseInfo = class {
  constructor(values = {}) {
    this.reason = values.reason !== undefined ? values.reason : 0;
  }
};

// Struct: WebTransportStats
network.mojom.WebTransportStats = class {
  constructor(values = {}) {
    this.datagrams_lost_outgoing = values.datagrams_lost_outgoing !== undefined ? values.datagrams_lost_outgoing : 0;
  }
};

// Interface: WebTransport
network.mojom.WebTransportPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.WebTransport';
  }

  sendDatagram(data) {
    // Method: SendDatagram
    return new Promise((resolve) => {
      // Call: SendDatagram(data)
      resolve({});
    });
  }

  createStream(readable, writable) {
    // Method: CreateStream
    return new Promise((resolve) => {
      // Call: CreateStream(readable, writable)
      resolve({});
    });
  }

  acceptBidirectionalStream() {
    // Method: AcceptBidirectionalStream
    return new Promise((resolve) => {
      // Call: AcceptBidirectionalStream()
      resolve({});
    });
  }

  acceptUnidirectionalStream() {
    // Method: AcceptUnidirectionalStream
    return new Promise((resolve) => {
      // Call: AcceptUnidirectionalStream()
      resolve({});
    });
  }

  sendFin(stream_id) {
    // Method: SendFin
    // Call: SendFin(stream_id)
  }

  abortStream(stream_id, code) {
    // Method: AbortStream
    // Call: AbortStream(stream_id, code)
  }

  stopSending(stream_id, code) {
    // Method: StopSending
    // Call: StopSending(stream_id, code)
  }

  setOutgoingDatagramExpirationDuration(duration) {
    // Method: SetOutgoingDatagramExpirationDuration
    // Call: SetOutgoingDatagramExpirationDuration(duration)
  }

  getStats() {
    // Method: GetStats
    return new Promise((resolve) => {
      // Call: GetStats()
      resolve({});
    });
  }

  close(close_info) {
    // Method: Close
    // Call: Close(close_info)
  }

};

network.mojom.WebTransportRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: WebTransportClient
network.mojom.WebTransportClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.WebTransportClient';
  }

  onDatagramReceived(data) {
    // Method: OnDatagramReceived
    // Call: OnDatagramReceived(data)
  }

  onIncomingStreamClosed(stream_id, fin_received) {
    // Method: OnIncomingStreamClosed
    // Call: OnIncomingStreamClosed(stream_id, fin_received)
  }

  onOutgoingStreamClosed(stream_id) {
    // Method: OnOutgoingStreamClosed
    // Call: OnOutgoingStreamClosed(stream_id)
  }

  onReceivedStopSending(stream_id, stream_error_code) {
    // Method: OnReceivedStopSending
    // Call: OnReceivedStopSending(stream_id, stream_error_code)
  }

  onReceivedResetStream(stream_id, stream_error_code) {
    // Method: OnReceivedResetStream
    // Call: OnReceivedResetStream(stream_id, stream_error_code)
  }

  onClosed(close_info, final_stats) {
    // Method: OnClosed
    // Call: OnClosed(close_info, final_stats)
  }

};

network.mojom.WebTransportClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: WebTransportHandshakeClient
network.mojom.WebTransportHandshakeClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.WebTransportHandshakeClient';
  }

  onBeforeConnect(server_address) {
    // Method: OnBeforeConnect
    // Call: OnBeforeConnect(server_address)
  }

  onConnectionEstablished(transport, client, response_headers, selected_application_protocol, initial_stats) {
    // Method: OnConnectionEstablished
    // Call: OnConnectionEstablished(transport, client, response_headers, selected_application_protocol, initial_stats)
  }

  onHandshakeFailed(error) {
    // Method: OnHandshakeFailed
    // Call: OnHandshakeFailed(error)
  }

};

network.mojom.WebTransportHandshakeClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
