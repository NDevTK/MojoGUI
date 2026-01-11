// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/common/mojom/webui_syslog_emitter.mojom
// Module: ash.common.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  emitSyslog(prefix, message) {
    return this.$.emitSyslog(prefix, message);
  }
};

ash.common.mojom.WebUiSyslogEmitterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebUiSyslogEmitter', [
      { explicit: null },
    ]);
  }

  emitSyslog(prefix, message) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebUiSyslogEmitter', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.common.mojom.WebUiSyslogEmitter_EmitSyslog_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.common.mojom.WebUiSyslogEmitter_EmitSyslog_ParamsSpec.$.structSpec);
          const result = this.impl.emitSyslog(params.prefix, params.message);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.common.mojom.WebUiSyslogEmitterReceiver = ash.common.mojom.WebUiSyslogEmitterReceiver;

ash.common.mojom.WebUiSyslogEmitterPtr = ash.common.mojom.WebUiSyslogEmitterRemote;
ash.common.mojom.WebUiSyslogEmitterRequest = ash.common.mojom.WebUiSyslogEmitterPendingReceiver;

