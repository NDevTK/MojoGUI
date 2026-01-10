// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/common/mojom/webui_syslog_emitter.mojom
// Module: ash.common.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.common = ash.common || {};
ash.common.common.mojom = ash.common.common.mojom || {};


// Interface: WebUiSyslogEmitter
ash.common.common.mojom.mojom.WebUiSyslogEmitter = {};

ash.common.common.mojom.mojom.WebUiSyslogEmitterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.common.common.mojom.mojom.WebUiSyslogEmitterRemote = class {
  static get $interfaceName() {
    return 'ash.common.mojom.WebUiSyslogEmitter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.common.common.mojom.mojom.WebUiSyslogEmitterPendingReceiver,
      handle);
    this.$ = new ash.common.common.mojom.mojom.WebUiSyslogEmitterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.common.common.mojom.mojom.WebUiSyslogEmitterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  emitSyslog(prefix, message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.common.common.mojom.mojom.WebUiSyslogEmitter_EmitSyslog_ParamsSpec,
      null,
      [prefix, message]);
  }

};

ash.common.common.mojom.mojom.WebUiSyslogEmitter.getRemote = function() {
  let remote = new ash.common.common.mojom.mojom.WebUiSyslogEmitterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.common.mojom.WebUiSyslogEmitter',
    'context');
  return remote.$;
};

// ParamsSpec for EmitSyslog
ash.common.common.mojom.mojom.WebUiSyslogEmitter_EmitSyslog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.common.mojom.WebUiSyslogEmitter.EmitSyslog_Params',
      packedSize: 24,
      fields: [
        { name: 'prefix', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
ash.common.common.mojom.mojom.WebUiSyslogEmitterPtr = ash.common.common.mojom.mojom.WebUiSyslogEmitterRemote;
ash.common.common.mojom.mojom.WebUiSyslogEmitterRequest = ash.common.common.mojom.mojom.WebUiSyslogEmitterPendingReceiver;

