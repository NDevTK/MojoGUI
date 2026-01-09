// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/common/mojom/webui_syslog_emitter.mojom
// Module: ash.common.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.common = ash.common || {};
ash.common.mojom = ash.common.mojom || {};


// Interface: WebUiSyslogEmitter
ash.common.mojom.WebUiSyslogEmitter = {};

ash.common.mojom.WebUiSyslogEmitterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.common.mojom.WebUiSyslogEmitterRemote = class {
  static get $interfaceName() {
    return 'ash.common.mojom.WebUiSyslogEmitter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.common.mojom.WebUiSyslogEmitterPendingReceiver,
      handle);
    this.$ = new ash.common.mojom.WebUiSyslogEmitterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.common.mojom.WebUiSyslogEmitterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  emitSyslog(prefix, message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.common.mojom.WebUiSyslogEmitter_EmitSyslog_ParamsSpec,
      null,
      [prefix, message]);
  }

};

ash.common.mojom.WebUiSyslogEmitter.getRemote = function() {
  let remote = new ash.common.mojom.WebUiSyslogEmitterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.common.mojom.WebUiSyslogEmitter',
    'context');
  return remote.$;
};

// ParamsSpec for EmitSyslog
ash.common.mojom.WebUiSyslogEmitter_EmitSyslog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.common.mojom.WebUiSyslogEmitter.EmitSyslog_Params',
      packedSize: 24,
      fields: [
        { name: 'prefix', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.common.mojom.WebUiSyslogEmitterPtr = ash.common.mojom.WebUiSyslogEmitterRemote;
ash.common.mojom.WebUiSyslogEmitterRequest = ash.common.mojom.WebUiSyslogEmitterPendingReceiver;

