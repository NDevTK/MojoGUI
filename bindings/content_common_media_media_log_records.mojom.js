// Auto-generated MojoJS binding
// Source: chromium_src/content/common/media/media_log_records.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Interface: MediaInternalLogRecords
content.mojom.mojom.MediaInternalLogRecords = {};

content.mojom.mojom.MediaInternalLogRecordsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.mojom.MediaInternalLogRecordsRemote = class {
  static get $interfaceName() {
    return 'content.mojom.MediaInternalLogRecords';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.mojom.MediaInternalLogRecordsPendingReceiver,
      handle);
    this.$ = new content.mojom.mojom.MediaInternalLogRecordsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.mojom.MediaInternalLogRecordsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  log(events) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.mojom.MediaInternalLogRecords_Log_ParamsSpec,
      null,
      [events]);
  }

};

content.mojom.mojom.MediaInternalLogRecords.getRemote = function() {
  let remote = new content.mojom.mojom.MediaInternalLogRecordsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.MediaInternalLogRecords',
    'context');
  return remote.$;
};

// ParamsSpec for Log
content.mojom.mojom.MediaInternalLogRecords_Log_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.MediaInternalLogRecords.Log_Params',
      packedSize: 16,
      fields: [
        { name: 'events', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(media.mojom.MediaLogRecordSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
content.mojom.mojom.MediaInternalLogRecordsPtr = content.mojom.mojom.MediaInternalLogRecordsRemote;
content.mojom.mojom.MediaInternalLogRecordsRequest = content.mojom.mojom.MediaInternalLogRecordsPendingReceiver;

