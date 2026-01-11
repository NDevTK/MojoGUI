// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/media_log.mojom
// Module: media.mojom

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};

media.mojom.MediaLog = {};
media.mojom.MediaLog.$interfaceName = 'media.mojom.MediaLog';
media.mojom.MediaLog_AddLogRecord_ParamsSpec = { $: {} };

// Interface: MediaLog
mojo.internal.Struct(
    media.mojom.MediaLog_AddLogRecord_ParamsSpec, 'media.mojom.MediaLog_AddLogRecord_Params', [
      mojo.internal.StructField('event', 0, 0, media.mojom.MediaLogRecordSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.MediaLogPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.MediaLogRemote = class {
  static get $interfaceName() {
    return 'media.mojom.MediaLog';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.MediaLogPendingReceiver,
      handle);
    this.$ = new media.mojom.MediaLogRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addLogRecord(event) {
    return this.$.addLogRecord(event);
  }
};

media.mojom.MediaLogRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MediaLog', [
      { explicit: null },
    ]);
  }

  addLogRecord(event) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.MediaLog_AddLogRecord_ParamsSpec,
      null,
      [event],
      false);
  }

};

media.mojom.MediaLog.getRemote = function() {
  let remote = new media.mojom.MediaLogRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.MediaLog',
    'context');
  return remote.$;
};

media.mojom.MediaLogReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MediaLog', [
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaLog_AddLogRecord_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaLog_AddLogRecord_ParamsSpec.$.structSpec);
          const result = this.impl.addLogRecord(params.event);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

media.mojom.MediaLogReceiver = media.mojom.MediaLogReceiver;

media.mojom.MediaLogPtr = media.mojom.MediaLogRemote;
media.mojom.MediaLogRequest = media.mojom.MediaLogPendingReceiver;

