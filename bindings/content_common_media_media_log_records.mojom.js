// Auto-generated MojoJS binding
// Source: chromium_src/content/common/media/media_log_records.mojom
// Module: content.mojom

'use strict';

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
};

content.mojom.MediaInternalLogRecordsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  log(events) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
          const params = content.mojom.MediaInternalLogRecords_Log_ParamsSpec.$.decode(message.payload);
          const result = this.impl.log(params.events);
          break;
        }
      }
    }});
  }
};

content.mojom.MediaInternalLogRecordsReceiver = content.mojom.MediaInternalLogRecordsReceiver;

content.mojom.MediaInternalLogRecordsPtr = content.mojom.MediaInternalLogRecordsRemote;
content.mojom.MediaInternalLogRecordsRequest = content.mojom.MediaInternalLogRecordsPendingReceiver;

