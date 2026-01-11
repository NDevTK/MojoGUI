// Auto-generated MojoJS binding
// Source: chromium_src/content/common/media/media_log_records.mojom
// Module: content.mojom

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};
var media = media || {};

content.mojom.MediaInternalLogRecords = {};
content.mojom.MediaInternalLogRecords.$interfaceName = 'content.mojom.MediaInternalLogRecords';
content.mojom.MediaInternalLogRecords_Log_ParamsSpec = { $: {} };

// Interface: MediaInternalLogRecords
mojo.internal.Struct(
    content.mojom.MediaInternalLogRecords_Log_ParamsSpec, 'content.mojom.MediaInternalLogRecords_Log_Params', [
      mojo.internal.StructField('events', 0, 0, mojo.internal.Array(media.mojom.MediaLogRecordSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

content.mojom.MediaInternalLogRecordsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.MediaInternalLogRecordsRemote = class {
  static get $interfaceName() {
    return 'content.mojom.MediaInternalLogRecords';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.MediaInternalLogRecordsPendingReceiver,
      handle);
    this.$ = new content.mojom.MediaInternalLogRecordsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  log(events) {
    return this.$.log(events);
  }
};

content.mojom.MediaInternalLogRecordsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MediaInternalLogRecords', [
      { explicit: null },
    ]);
  }

  log(events) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      content.mojom.MediaInternalLogRecords_Log_ParamsSpec,
      null,
      [events],
      false);
  }

};

content.mojom.MediaInternalLogRecords.getRemote = function() {
  let remote = new content.mojom.MediaInternalLogRecordsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.MediaInternalLogRecords',
    'context');
  return remote.$;
};

content.mojom.MediaInternalLogRecordsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MediaInternalLogRecords', [
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
             decoder.decodeStructInline(content.mojom.MediaInternalLogRecords_Log_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.MediaInternalLogRecords_Log_ParamsSpec.$.structSpec);
          const result = this.impl.log(params.events);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

content.mojom.MediaInternalLogRecordsReceiver = content.mojom.MediaInternalLogRecordsReceiver;

content.mojom.MediaInternalLogRecordsPtr = content.mojom.MediaInternalLogRecordsRemote;
content.mojom.MediaInternalLogRecordsRequest = content.mojom.MediaInternalLogRecordsPendingReceiver;

