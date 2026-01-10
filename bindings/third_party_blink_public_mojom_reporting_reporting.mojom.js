// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/reporting/reporting.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};


// Interface: ReportingServiceProxy
blink.mojom.mojom.ReportingServiceProxy = {};

blink.mojom.mojom.ReportingServiceProxyPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.ReportingServiceProxyRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ReportingServiceProxy';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.ReportingServiceProxyPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.ReportingServiceProxyRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.ReportingServiceProxyRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  queueInterventionReport(url, id, message, source_file, line_number, column_number) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.ReportingServiceProxy_QueueInterventionReport_ParamsSpec,
      null,
      [url, id, message, source_file, line_number, column_number]);
  }

  queueDeprecationReport(url, id, anticipatedRemoval, message, source_file, line_number, column_number) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.ReportingServiceProxy_QueueDeprecationReport_ParamsSpec,
      null,
      [url, id, anticipatedRemoval, message, source_file, line_number, column_number]);
  }

  queueCspViolationReport(url, group, document_url, referrer, blocked_url, effective_directive, original_policy, source_file, script_sample, disposition, status_code, line_number, column_number) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.ReportingServiceProxy_QueueCspViolationReport_ParamsSpec,
      null,
      [url, group, document_url, referrer, blocked_url, effective_directive, original_policy, source_file, script_sample, disposition, status_code, line_number, column_number]);
  }

  queueIntegrityViolationReport(url, endpoint, document_url, blocked_url, destination, report_only) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.mojom.ReportingServiceProxy_QueueIntegrityViolationReport_ParamsSpec,
      null,
      [url, endpoint, document_url, blocked_url, destination, report_only]);
  }

  queuePermissionsPolicyViolationReport(url, endpoint, policy_id, disposition, message, source_file, line_number, column_number) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.mojom.ReportingServiceProxy_QueuePermissionsPolicyViolationReport_ParamsSpec,
      null,
      [url, endpoint, policy_id, disposition, message, source_file, line_number, column_number]);
  }

  queuePotentialPermissionsPolicyViolationReport(url, endpoint, policy_id, disposition, message, allow_attribute, src_attribute, source_file, line_number, column_number) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.mojom.ReportingServiceProxy_QueuePotentialPermissionsPolicyViolationReport_ParamsSpec,
      null,
      [url, endpoint, policy_id, disposition, message, allow_attribute, src_attribute, source_file, line_number, column_number]);
  }

  queueDocumentPolicyViolationReport(url, group, policy_id, disposition, message, source_file, line_number, column_number) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.mojom.ReportingServiceProxy_QueueDocumentPolicyViolationReport_ParamsSpec,
      null,
      [url, group, policy_id, disposition, message, source_file, line_number, column_number]);
  }

  queueCSPHashReport(url, endpoint, subresource_url, integrity_hash, type, destination) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.mojom.ReportingServiceProxy_QueueCSPHashReport_ParamsSpec,
      null,
      [url, endpoint, subresource_url, integrity_hash, type, destination]);
  }

};

blink.mojom.mojom.ReportingServiceProxy.getRemote = function() {
  let remote = new blink.mojom.mojom.ReportingServiceProxyRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ReportingServiceProxy',
    'context');
  return remote.$;
};

// ParamsSpec for QueueInterventionReport
blink.mojom.mojom.ReportingServiceProxy_QueueInterventionReport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ReportingServiceProxy.QueueInterventionReport_Params',
      packedSize: 48,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'source_file', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'line_number', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'column_number', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// ParamsSpec for QueueDeprecationReport
blink.mojom.mojom.ReportingServiceProxy_QueueDeprecationReport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ReportingServiceProxy.QueueDeprecationReport_Params',
      packedSize: 56,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'anticipatedRemoval', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: true, minVersion: 0 },
        { name: 'message', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'source_file', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'line_number', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'column_number', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// ParamsSpec for QueueCspViolationReport
blink.mojom.mojom.ReportingServiceProxy_QueueCspViolationReport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ReportingServiceProxy.QueueCspViolationReport_Params',
      packedSize: 104,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'group', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'document_url', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'referrer', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'blocked_url', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'effective_directive', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'original_policy', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'source_file', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'script_sample', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'disposition', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'status_code', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'line_number', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'column_number', packedOffset: 84, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 104}]
    }
  }
};

// ParamsSpec for QueueIntegrityViolationReport
blink.mojom.mojom.ReportingServiceProxy_QueueIntegrityViolationReport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ReportingServiceProxy.QueueIntegrityViolationReport_Params',
      packedSize: 56,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'endpoint', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'document_url', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'blocked_url', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'destination', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'report_only', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// ParamsSpec for QueuePermissionsPolicyViolationReport
blink.mojom.mojom.ReportingServiceProxy_QueuePermissionsPolicyViolationReport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ReportingServiceProxy.QueuePermissionsPolicyViolationReport_Params',
      packedSize: 64,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'endpoint', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'policy_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'disposition', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'source_file', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'line_number', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'column_number', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// ParamsSpec for QueuePotentialPermissionsPolicyViolationReport
blink.mojom.mojom.ReportingServiceProxy_QueuePotentialPermissionsPolicyViolationReport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ReportingServiceProxy.QueuePotentialPermissionsPolicyViolationReport_Params',
      packedSize: 80,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'endpoint', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'policy_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'disposition', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'allow_attribute', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'src_attribute', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'source_file', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'line_number', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'column_number', packedOffset: 68, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 80}]
    }
  }
};

// ParamsSpec for QueueDocumentPolicyViolationReport
blink.mojom.mojom.ReportingServiceProxy_QueueDocumentPolicyViolationReport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ReportingServiceProxy.QueueDocumentPolicyViolationReport_Params',
      packedSize: 64,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'group', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'policy_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'disposition', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'source_file', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'line_number', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'column_number', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// ParamsSpec for QueueCSPHashReport
blink.mojom.mojom.ReportingServiceProxy_QueueCSPHashReport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ReportingServiceProxy.QueueCSPHashReport_Params',
      packedSize: 56,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'endpoint', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'subresource_url', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'integrity_hash', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'destination', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.ReportingServiceProxyPtr = blink.mojom.mojom.ReportingServiceProxyRemote;
blink.mojom.mojom.ReportingServiceProxyRequest = blink.mojom.mojom.ReportingServiceProxyPendingReceiver;

