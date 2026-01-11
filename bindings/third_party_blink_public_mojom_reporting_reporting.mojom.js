// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/reporting/reporting.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

blink.mojom.ReportingServiceProxy = {};
blink.mojom.ReportingServiceProxy.$interfaceName = 'blink.mojom.ReportingServiceProxy';
blink.mojom.ReportingServiceProxy_QueueInterventionReport_ParamsSpec = { $: {} };
blink.mojom.ReportingServiceProxy_QueueDeprecationReport_ParamsSpec = { $: {} };
blink.mojom.ReportingServiceProxy_QueueCspViolationReport_ParamsSpec = { $: {} };
blink.mojom.ReportingServiceProxy_QueueIntegrityViolationReport_ParamsSpec = { $: {} };
blink.mojom.ReportingServiceProxy_QueuePermissionsPolicyViolationReport_ParamsSpec = { $: {} };
blink.mojom.ReportingServiceProxy_QueuePotentialPermissionsPolicyViolationReport_ParamsSpec = { $: {} };
blink.mojom.ReportingServiceProxy_QueueDocumentPolicyViolationReport_ParamsSpec = { $: {} };
blink.mojom.ReportingServiceProxy_QueueCSPHashReport_ParamsSpec = { $: {} };

// Interface: ReportingServiceProxy
mojo.internal.Struct(
    blink.mojom.ReportingServiceProxy_QueueInterventionReport_ParamsSpec, 'blink.mojom.ReportingServiceProxy_QueueInterventionReport_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('message', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('source_file', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('line_number', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('column_number', 36, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    blink.mojom.ReportingServiceProxy_QueueDeprecationReport_ParamsSpec, 'blink.mojom.ReportingServiceProxy_QueueDeprecationReport_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('anticipatedRemoval', 16, 0, mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('message', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('source_file', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('line_number', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('column_number', 44, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    blink.mojom.ReportingServiceProxy_QueueCspViolationReport_ParamsSpec, 'blink.mojom.ReportingServiceProxy_QueueCspViolationReport_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('group', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('document_url', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('referrer', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('blocked_url', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('effective_directive', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('original_policy', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('source_file', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('script_sample', 64, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('disposition', 72, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('line_number', 80, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('column_number', 84, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('status_code', 88, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 104]]);

mojo.internal.Struct(
    blink.mojom.ReportingServiceProxy_QueueIntegrityViolationReport_ParamsSpec, 'blink.mojom.ReportingServiceProxy_QueueIntegrityViolationReport_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('endpoint', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('document_url', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('blocked_url', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('destination', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('report_only', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    blink.mojom.ReportingServiceProxy_QueuePermissionsPolicyViolationReport_ParamsSpec, 'blink.mojom.ReportingServiceProxy_QueuePermissionsPolicyViolationReport_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('endpoint', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('policy_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('disposition', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('message', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('source_file', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('line_number', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('column_number', 52, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    blink.mojom.ReportingServiceProxy_QueuePotentialPermissionsPolicyViolationReport_ParamsSpec, 'blink.mojom.ReportingServiceProxy_QueuePotentialPermissionsPolicyViolationReport_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('endpoint', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('policy_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('disposition', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('message', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('allow_attribute', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('src_attribute', 48, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('source_file', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('line_number', 64, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('column_number', 68, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 80]]);

mojo.internal.Struct(
    blink.mojom.ReportingServiceProxy_QueueDocumentPolicyViolationReport_ParamsSpec, 'blink.mojom.ReportingServiceProxy_QueueDocumentPolicyViolationReport_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('group', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('policy_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('disposition', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('message', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('source_file', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('line_number', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('column_number', 52, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    blink.mojom.ReportingServiceProxy_QueueCSPHashReport_ParamsSpec, 'blink.mojom.ReportingServiceProxy_QueueCSPHashReport_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('endpoint', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('subresource_url', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('integrity_hash', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('type', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('destination', 40, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 56]]);

blink.mojom.ReportingServiceProxyPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ReportingServiceProxyRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ReportingServiceProxy';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ReportingServiceProxyPendingReceiver,
      handle);
    this.$ = new blink.mojom.ReportingServiceProxyRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  queueInterventionReport(url, id, message, source_file, line_number, column_number) {
    return this.$.queueInterventionReport(url, id, message, source_file, line_number, column_number);
  }
  queueDeprecationReport(url, id, anticipatedRemoval, message, source_file, line_number, column_number) {
    return this.$.queueDeprecationReport(url, id, anticipatedRemoval, message, source_file, line_number, column_number);
  }
  queueCspViolationReport(url, group, document_url, referrer, blocked_url, effective_directive, original_policy, source_file, script_sample, disposition, status_code, line_number, column_number) {
    return this.$.queueCspViolationReport(url, group, document_url, referrer, blocked_url, effective_directive, original_policy, source_file, script_sample, disposition, status_code, line_number, column_number);
  }
  queueIntegrityViolationReport(url, endpoint, document_url, blocked_url, destination, report_only) {
    return this.$.queueIntegrityViolationReport(url, endpoint, document_url, blocked_url, destination, report_only);
  }
  queuePermissionsPolicyViolationReport(url, endpoint, policy_id, disposition, message, source_file, line_number, column_number) {
    return this.$.queuePermissionsPolicyViolationReport(url, endpoint, policy_id, disposition, message, source_file, line_number, column_number);
  }
  queuePotentialPermissionsPolicyViolationReport(url, endpoint, policy_id, disposition, message, allow_attribute, src_attribute, source_file, line_number, column_number) {
    return this.$.queuePotentialPermissionsPolicyViolationReport(url, endpoint, policy_id, disposition, message, allow_attribute, src_attribute, source_file, line_number, column_number);
  }
  queueDocumentPolicyViolationReport(url, group, policy_id, disposition, message, source_file, line_number, column_number) {
    return this.$.queueDocumentPolicyViolationReport(url, group, policy_id, disposition, message, source_file, line_number, column_number);
  }
  queueCSPHashReport(url, endpoint, subresource_url, integrity_hash, type, destination) {
    return this.$.queueCSPHashReport(url, endpoint, subresource_url, integrity_hash, type, destination);
  }
};

blink.mojom.ReportingServiceProxyRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ReportingServiceProxy', [
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

  queueInterventionReport(url, id, message, source_file, line_number, column_number) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.ReportingServiceProxy_QueueInterventionReport_ParamsSpec,
      null,
      [url, id, message, source_file, line_number, column_number],
      false);
  }

  queueDeprecationReport(url, id, anticipatedRemoval, message, source_file, line_number, column_number) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.ReportingServiceProxy_QueueDeprecationReport_ParamsSpec,
      null,
      [url, id, anticipatedRemoval, message, source_file, line_number, column_number],
      false);
  }

  queueCspViolationReport(url, group, document_url, referrer, blocked_url, effective_directive, original_policy, source_file, script_sample, disposition, status_code, line_number, column_number) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.ReportingServiceProxy_QueueCspViolationReport_ParamsSpec,
      null,
      [url, group, document_url, referrer, blocked_url, effective_directive, original_policy, source_file, script_sample, disposition, status_code, line_number, column_number],
      false);
  }

  queueIntegrityViolationReport(url, endpoint, document_url, blocked_url, destination, report_only) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.ReportingServiceProxy_QueueIntegrityViolationReport_ParamsSpec,
      null,
      [url, endpoint, document_url, blocked_url, destination, report_only],
      false);
  }

  queuePermissionsPolicyViolationReport(url, endpoint, policy_id, disposition, message, source_file, line_number, column_number) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.ReportingServiceProxy_QueuePermissionsPolicyViolationReport_ParamsSpec,
      null,
      [url, endpoint, policy_id, disposition, message, source_file, line_number, column_number],
      false);
  }

  queuePotentialPermissionsPolicyViolationReport(url, endpoint, policy_id, disposition, message, allow_attribute, src_attribute, source_file, line_number, column_number) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.ReportingServiceProxy_QueuePotentialPermissionsPolicyViolationReport_ParamsSpec,
      null,
      [url, endpoint, policy_id, disposition, message, allow_attribute, src_attribute, source_file, line_number, column_number],
      false);
  }

  queueDocumentPolicyViolationReport(url, group, policy_id, disposition, message, source_file, line_number, column_number) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      blink.mojom.ReportingServiceProxy_QueueDocumentPolicyViolationReport_ParamsSpec,
      null,
      [url, group, policy_id, disposition, message, source_file, line_number, column_number],
      false);
  }

  queueCSPHashReport(url, endpoint, subresource_url, integrity_hash, type, destination) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      blink.mojom.ReportingServiceProxy_QueueCSPHashReport_ParamsSpec,
      null,
      [url, endpoint, subresource_url, integrity_hash, type, destination],
      false);
  }

};

blink.mojom.ReportingServiceProxy.getRemote = function() {
  let remote = new blink.mojom.ReportingServiceProxyRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ReportingServiceProxy',
    'context');
  return remote.$;
};

blink.mojom.ReportingServiceProxyReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ReportingServiceProxy', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(blink.mojom.ReportingServiceProxy_QueueInterventionReport_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ReportingServiceProxy_QueueDeprecationReport_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ReportingServiceProxy_QueueCspViolationReport_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ReportingServiceProxy_QueueIntegrityViolationReport_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ReportingServiceProxy_QueuePermissionsPolicyViolationReport_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ReportingServiceProxy_QueuePotentialPermissionsPolicyViolationReport_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ReportingServiceProxy_QueueDocumentPolicyViolationReport_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ReportingServiceProxy_QueueCSPHashReport_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ReportingServiceProxy_QueueInterventionReport_ParamsSpec.$.structSpec);
          const result = this.impl.queueInterventionReport(params.url, params.id, params.message, params.source_file, params.line_number, params.column_number);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ReportingServiceProxy_QueueDeprecationReport_ParamsSpec.$.structSpec);
          const result = this.impl.queueDeprecationReport(params.url, params.id, params.anticipatedRemoval, params.message, params.source_file, params.line_number, params.column_number);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ReportingServiceProxy_QueueCspViolationReport_ParamsSpec.$.structSpec);
          const result = this.impl.queueCspViolationReport(params.url, params.group, params.document_url, params.referrer, params.blocked_url, params.effective_directive, params.original_policy, params.source_file, params.script_sample, params.disposition, params.status_code, params.line_number, params.column_number);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ReportingServiceProxy_QueueIntegrityViolationReport_ParamsSpec.$.structSpec);
          const result = this.impl.queueIntegrityViolationReport(params.url, params.endpoint, params.document_url, params.blocked_url, params.destination, params.report_only);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ReportingServiceProxy_QueuePermissionsPolicyViolationReport_ParamsSpec.$.structSpec);
          const result = this.impl.queuePermissionsPolicyViolationReport(params.url, params.endpoint, params.policy_id, params.disposition, params.message, params.source_file, params.line_number, params.column_number);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ReportingServiceProxy_QueuePotentialPermissionsPolicyViolationReport_ParamsSpec.$.structSpec);
          const result = this.impl.queuePotentialPermissionsPolicyViolationReport(params.url, params.endpoint, params.policy_id, params.disposition, params.message, params.allow_attribute, params.src_attribute, params.source_file, params.line_number, params.column_number);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ReportingServiceProxy_QueueDocumentPolicyViolationReport_ParamsSpec.$.structSpec);
          const result = this.impl.queueDocumentPolicyViolationReport(params.url, params.group, params.policy_id, params.disposition, params.message, params.source_file, params.line_number, params.column_number);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ReportingServiceProxy_QueueCSPHashReport_ParamsSpec.$.structSpec);
          const result = this.impl.queueCSPHashReport(params.url, params.endpoint, params.subresource_url, params.integrity_hash, params.type, params.destination);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.ReportingServiceProxyReceiver = blink.mojom.ReportingServiceProxyReceiver;

blink.mojom.ReportingServiceProxyPtr = blink.mojom.ReportingServiceProxyRemote;
blink.mojom.ReportingServiceProxyRequest = blink.mojom.ReportingServiceProxyPendingReceiver;

