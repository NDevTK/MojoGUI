// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/media_log.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: MediaLog
media.mojom.mojom.MediaLog = {};

media.mojom.mojom.MediaLogPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.MediaLogRemote = class {
  static get $interfaceName() {
    return 'media.mojom.MediaLog';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.MediaLogPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.MediaLogRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.MediaLogRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addLogRecord(event) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.MediaLog_AddLogRecord_ParamsSpec,
      null,
      [event]);
  }

};

media.mojom.mojom.MediaLog.getRemote = function() {
  let remote = new media.mojom.mojom.MediaLogRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.MediaLog',
    'context');
  return remote.$;
};

// ParamsSpec for AddLogRecord
media.mojom.mojom.MediaLog_AddLogRecord_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaLog.AddLogRecord_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: media.mojom.MediaLogRecordSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.MediaLogPtr = media.mojom.mojom.MediaLogRemote;
media.mojom.mojom.MediaLogRequest = media.mojom.mojom.MediaLogPendingReceiver;

