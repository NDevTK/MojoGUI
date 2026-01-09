// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/common/mojom/webui_syslog_emitter.mojom
// Module: ash.common.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.common = ash.common || {};
ash.common.mojom = ash.common.mojom || {};


// Interface: WebUiSyslogEmitter
ash.common.mojom.WebUiSyslogEmitterPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.common.mojom.WebUiSyslogEmitter';
  }

  emitSyslog(prefix, message) {
    // Method: EmitSyslog
    // Call: EmitSyslog(prefix, message)
  }

};

ash.common.mojom.WebUiSyslogEmitterRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
