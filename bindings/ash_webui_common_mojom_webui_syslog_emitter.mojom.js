// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/common/mojom/webui_syslog_emitter.mojom
// Module: ash.common.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.common = ash.common || {};
ash.common.mojom = ash.common.mojom || {};

ash.common.mojom.WebUiSyslogEmitter = {};
ash.common.mojom.WebUiSyslogEmitter.$interfaceName = 'ash.common.mojom.WebUiSyslogEmitter';
ash.common.mojom.WebUiSyslogEmitter_EmitSyslog_ParamsSpec = { $: {} };

// Interface: WebUiSyslogEmitter
mojo.internal.Struct(
    ash.common.mojom.WebUiSyslogEmitter_EmitSyslog_ParamsSpec, 'ash.common.mojom.WebUiSyslogEmitter_EmitSyslog_Params', [
      mojo.internal.StructField('prefix', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [prefix, message],
      false);
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

ash.common.mojom.WebUiSyslogEmitterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          buffer: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = ash.common.mojom.WebUiSyslogEmitter_EmitSyslog_ParamsSpec.$.decode(message.payload);
          const result = this.impl.emitSyslog(params.prefix, params.message);
          break;
        }
      }
    }});
  }
};

ash.common.mojom.WebUiSyslogEmitterReceiver = ash.common.mojom.WebUiSyslogEmitterReceiver;

ash.common.mojom.WebUiSyslogEmitterPtr = ash.common.mojom.WebUiSyslogEmitterRemote;
ash.common.mojom.WebUiSyslogEmitterRequest = ash.common.mojom.WebUiSyslogEmitterPendingReceiver;

