// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/network_context_client.mojom
// Module: network.mojom

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

network.mojom.NetworkContextClient = {};
network.mojom.NetworkContextClient.$interfaceName = 'network.mojom.NetworkContextClient';
network.mojom.NetworkContextClient_OnFileUploadRequested_ParamsSpec = { $: {} };
network.mojom.NetworkContextClient_OnFileUploadRequested_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContextClient_OnCanSendReportingReports_ParamsSpec = { $: {} };
network.mojom.NetworkContextClient_OnCanSendReportingReports_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContextClient_OnCanSendDomainReliabilityUpload_ParamsSpec = { $: {} };
network.mojom.NetworkContextClient_OnCanSendDomainReliabilityUpload_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContextClient_OnGenerateHttpNegotiateAuthToken_ParamsSpec = { $: {} };
network.mojom.NetworkContextClient_OnGenerateHttpNegotiateAuthToken_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContextClient_OnCanSendSCTAuditingReport_ParamsSpec = { $: {} };
network.mojom.NetworkContextClient_OnCanSendSCTAuditingReport_ResponseParamsSpec = { $: {} };
network.mojom.NetworkContextClient_OnNewSCTAuditingReportSent_ParamsSpec = { $: {} };

// Interface: NetworkContextClient
mojo.internal.Struct(
    network.mojom.NetworkContextClient_OnFileUploadRequested_ParamsSpec, 'network.mojom.NetworkContextClient_OnFileUploadRequested_Params', [
      mojo.internal.StructField('file_paths', 0, 0, mojo.internal.Array(mojo_base.mojom.FilePathSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('destination_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('process_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('async', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.NetworkContextClient_OnFileUploadRequested_ResponseParamsSpec, 'network.mojom.NetworkContextClient_OnFileUploadRequested_ResponseParams', [
      mojo.internal.StructField('files', 0, 0, mojo.internal.Array(mojo_base.mojom.ReadOnlyFileSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('net_error', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.NetworkContextClient_OnCanSendReportingReports_ParamsSpec, 'network.mojom.NetworkContextClient_OnCanSendReportingReports_Params', [
      mojo.internal.StructField('origins', 0, 0, mojo.internal.Array(url.mojom.OriginSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContextClient_OnCanSendReportingReports_ResponseParamsSpec, 'network.mojom.NetworkContextClient_OnCanSendReportingReports_ResponseParams', [
      mojo.internal.StructField('origins', 0, 0, mojo.internal.Array(url.mojom.OriginSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContextClient_OnCanSendDomainReliabilityUpload_ParamsSpec, 'network.mojom.NetworkContextClient_OnCanSendDomainReliabilityUpload_Params', [
      mojo.internal.StructField('origin', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContextClient_OnCanSendDomainReliabilityUpload_ResponseParamsSpec, 'network.mojom.NetworkContextClient_OnCanSendDomainReliabilityUpload_ResponseParams', [
      mojo.internal.StructField('allowed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContextClient_OnGenerateHttpNegotiateAuthToken_ParamsSpec, 'network.mojom.NetworkContextClient_OnGenerateHttpNegotiateAuthToken_Params', [
      mojo.internal.StructField('server_auth_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('auth_negotiate_android_account_type', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('spn', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('can_delegate', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    network.mojom.NetworkContextClient_OnGenerateHttpNegotiateAuthToken_ResponseParamsSpec, 'network.mojom.NetworkContextClient_OnGenerateHttpNegotiateAuthToken_ResponseParams', [
      mojo.internal.StructField('auth_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('result', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.NetworkContextClient_OnCanSendSCTAuditingReport_ParamsSpec, 'network.mojom.NetworkContextClient_OnCanSendSCTAuditingReport_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.NetworkContextClient_OnCanSendSCTAuditingReport_ResponseParamsSpec, 'network.mojom.NetworkContextClient_OnCanSendSCTAuditingReport_ResponseParams', [
      mojo.internal.StructField('allowed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetworkContextClient_OnNewSCTAuditingReportSent_ParamsSpec, 'network.mojom.NetworkContextClient_OnNewSCTAuditingReportSent_Params', [
    ],
    [[0, 8]]);

network.mojom.NetworkContextClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.NetworkContextClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.NetworkContextClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.NetworkContextClientPendingReceiver,
      handle);
    this.$ = new network.mojom.NetworkContextClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onFileUploadRequested(process_id, async, file_paths, destination_url) {
    return this.$.onFileUploadRequested(process_id, async, file_paths, destination_url);
  }
  onCanSendReportingReports(origins) {
    return this.$.onCanSendReportingReports(origins);
  }
  onCanSendDomainReliabilityUpload(origin) {
    return this.$.onCanSendDomainReliabilityUpload(origin);
  }
  onGenerateHttpNegotiateAuthToken(server_auth_token, can_delegate, auth_negotiate_android_account_type, spn) {
    return this.$.onGenerateHttpNegotiateAuthToken(server_auth_token, can_delegate, auth_negotiate_android_account_type, spn);
  }
  onCanSendSCTAuditingReport() {
    return this.$.onCanSendSCTAuditingReport();
  }
  onNewSCTAuditingReportSent() {
    return this.$.onNewSCTAuditingReportSent();
  }
};

network.mojom.NetworkContextClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NetworkContextClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onFileUploadRequested(process_id, async, file_paths, destination_url) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.NetworkContextClient_OnFileUploadRequested_ParamsSpec,
      network.mojom.NetworkContextClient_OnFileUploadRequested_ResponseParamsSpec,
      [process_id, async, file_paths, destination_url],
      false);
  }

  onCanSendReportingReports(origins) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      network.mojom.NetworkContextClient_OnCanSendReportingReports_ParamsSpec,
      network.mojom.NetworkContextClient_OnCanSendReportingReports_ResponseParamsSpec,
      [origins],
      false);
  }

  onCanSendDomainReliabilityUpload(origin) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      network.mojom.NetworkContextClient_OnCanSendDomainReliabilityUpload_ParamsSpec,
      network.mojom.NetworkContextClient_OnCanSendDomainReliabilityUpload_ResponseParamsSpec,
      [origin],
      false);
  }

  onGenerateHttpNegotiateAuthToken(server_auth_token, can_delegate, auth_negotiate_android_account_type, spn) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      network.mojom.NetworkContextClient_OnGenerateHttpNegotiateAuthToken_ParamsSpec,
      network.mojom.NetworkContextClient_OnGenerateHttpNegotiateAuthToken_ResponseParamsSpec,
      [server_auth_token, can_delegate, auth_negotiate_android_account_type, spn],
      false);
  }

  onCanSendSCTAuditingReport() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      network.mojom.NetworkContextClient_OnCanSendSCTAuditingReport_ParamsSpec,
      network.mojom.NetworkContextClient_OnCanSendSCTAuditingReport_ResponseParamsSpec,
      [],
      false);
  }

  onNewSCTAuditingReportSent() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      network.mojom.NetworkContextClient_OnNewSCTAuditingReportSent_ParamsSpec,
      null,
      [],
      false);
  }

};

network.mojom.NetworkContextClient.getRemote = function() {
  let remote = new network.mojom.NetworkContextClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.NetworkContextClient',
    'context');
  return remote.$;
};

network.mojom.NetworkContextClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NetworkContextClient', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(network.mojom.NetworkContextClient_OnFileUploadRequested_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkContextClient_OnCanSendReportingReports_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkContextClient_OnCanSendDomainReliabilityUpload_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkContextClient_OnGenerateHttpNegotiateAuthToken_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkContextClient_OnCanSendSCTAuditingReport_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetworkContextClient_OnNewSCTAuditingReportSent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkContextClient_OnFileUploadRequested_ParamsSpec.$.structSpec);
          const result = this.impl.onFileUploadRequested(params.process_id, params.async, params.file_paths, params.destination_url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContextClient_OnFileUploadRequested_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkContextClient_OnCanSendReportingReports_ParamsSpec.$.structSpec);
          const result = this.impl.onCanSendReportingReports(params.origins);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContextClient_OnCanSendReportingReports_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkContextClient_OnCanSendDomainReliabilityUpload_ParamsSpec.$.structSpec);
          const result = this.impl.onCanSendDomainReliabilityUpload(params.origin);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContextClient_OnCanSendDomainReliabilityUpload_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkContextClient_OnGenerateHttpNegotiateAuthToken_ParamsSpec.$.structSpec);
          const result = this.impl.onGenerateHttpNegotiateAuthToken(params.server_auth_token, params.can_delegate, params.auth_negotiate_android_account_type, params.spn);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContextClient_OnGenerateHttpNegotiateAuthToken_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkContextClient_OnCanSendSCTAuditingReport_ParamsSpec.$.structSpec);
          const result = this.impl.onCanSendSCTAuditingReport();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetworkContextClient_OnCanSendSCTAuditingReport_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkContextClient_OnNewSCTAuditingReportSent_ParamsSpec.$.structSpec);
          const result = this.impl.onNewSCTAuditingReportSent();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

network.mojom.NetworkContextClientReceiver = network.mojom.NetworkContextClientReceiver;

network.mojom.NetworkContextClientPtr = network.mojom.NetworkContextClientRemote;
network.mojom.NetworkContextClientRequest = network.mojom.NetworkContextClientPendingReceiver;

