// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/media_log.mojom
// Module: media.mojom

'use strict';

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
};

media.mojom.MediaLogRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addLogRecord(event) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = media.mojom.MediaLog_AddLogRecord_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addLogRecord(params.event);
          break;
        }
      }
    }});
  }
};

media.mojom.MediaLogReceiver = media.mojom.MediaLogReceiver;

media.mojom.MediaLogPtr = media.mojom.MediaLogRemote;
media.mojom.MediaLogRequest = media.mojom.MediaLogPendingReceiver;

