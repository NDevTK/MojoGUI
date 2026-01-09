// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/reporting/reporting.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: ReportingServiceProxy
blink.mojom.ReportingServiceProxyPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.ReportingServiceProxy';
  }

  queueInterventionReport(url, id, message, source_file, line_number, column_number) {
    // Method: QueueInterventionReport
    // Call: QueueInterventionReport(url, id, message, source_file, line_number, column_number)
  }

  queueDeprecationReport(url, id, anticipatedRemoval, message, source_file, line_number, column_number) {
    // Method: QueueDeprecationReport
    // Call: QueueDeprecationReport(url, id, anticipatedRemoval, message, source_file, line_number, column_number)
  }

  queueCspViolationReport(url, group, document_url, referrer, blocked_url, effective_directive, original_policy, source_file, script_sample, disposition, status_code, line_number, column_number) {
    // Method: QueueCspViolationReport
    // Call: QueueCspViolationReport(url, group, document_url, referrer, blocked_url, effective_directive, original_policy, source_file, script_sample, disposition, status_code, line_number, column_number)
  }

  queueIntegrityViolationReport(url, endpoint, document_url, blocked_url, destination, report_only) {
    // Method: QueueIntegrityViolationReport
    // Call: QueueIntegrityViolationReport(url, endpoint, document_url, blocked_url, destination, report_only)
  }

  queuePermissionsPolicyViolationReport(url, endpoint, policy_id, disposition, message, source_file, line_number, column_number) {
    // Method: QueuePermissionsPolicyViolationReport
    // Call: QueuePermissionsPolicyViolationReport(url, endpoint, policy_id, disposition, message, source_file, line_number, column_number)
  }

  queuePotentialPermissionsPolicyViolationReport(url, endpoint, policy_id, disposition, message, allow_attribute, src_attribute, source_file, line_number, column_number) {
    // Method: QueuePotentialPermissionsPolicyViolationReport
    // Call: QueuePotentialPermissionsPolicyViolationReport(url, endpoint, policy_id, disposition, message, allow_attribute, src_attribute, source_file, line_number, column_number)
  }

  queueDocumentPolicyViolationReport(url, group, policy_id, disposition, message, source_file, line_number, column_number) {
    // Method: QueueDocumentPolicyViolationReport
    // Call: QueueDocumentPolicyViolationReport(url, group, policy_id, disposition, message, source_file, line_number, column_number)
  }

  queueCSPHashReport(url, endpoint, subresource_url, integrity_hash, type, destination) {
    // Method: QueueCSPHashReport
    // Call: QueueCSPHashReport(url, endpoint, subresource_url, integrity_hash, type, destination)
  }

};

blink.mojom.ReportingServiceProxyRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
