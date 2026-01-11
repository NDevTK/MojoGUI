// Auto-generated MojoJS binding
// Source: chromium_src/components/content_capture/common/content_capture.mojom
// Module: content_capture.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var content_capture = content_capture || {};
content_capture.mojom = content_capture.mojom || {};

content_capture.mojom.ContentCaptureReceiver = {};
content_capture.mojom.ContentCaptureReceiver.$interfaceName = 'content_capture.mojom.ContentCaptureReceiver';
content_capture.mojom.ContentCaptureReceiver_DidCompleteBatchCaptureContent_ParamsSpec = { $: {} };
content_capture.mojom.ContentCaptureReceiver_DidCaptureContent_ParamsSpec = { $: {} };
content_capture.mojom.ContentCaptureReceiver_DidUpdateContent_ParamsSpec = { $: {} };
content_capture.mojom.ContentCaptureReceiver_DidRemoveContent_ParamsSpec = { $: {} };
content_capture.mojom.ContentCaptureSender = {};
content_capture.mojom.ContentCaptureSender.$interfaceName = 'content_capture.mojom.ContentCaptureSender';
content_capture.mojom.ContentCaptureSender_StartCapture_ParamsSpec = { $: {} };
content_capture.mojom.ContentCaptureSender_StopCapture_ParamsSpec = { $: {} };

// Interface: ContentCaptureReceiver
mojo.internal.Struct(
    content_capture.mojom.ContentCaptureReceiver_DidCompleteBatchCaptureContent_ParamsSpec, 'content_capture.mojom.ContentCaptureReceiver_DidCompleteBatchCaptureContent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content_capture.mojom.ContentCaptureReceiver_DidCaptureContent_ParamsSpec, 'content_capture.mojom.ContentCaptureReceiver_DidCaptureContent_Params', [
      mojo.internal.StructField('data', 0, 0, content_capture.mojom.ContentCaptureDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('first_data', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content_capture.mojom.ContentCaptureReceiver_DidUpdateContent_ParamsSpec, 'content_capture.mojom.ContentCaptureReceiver_DidUpdateContent_Params', [
      mojo.internal.StructField('data', 0, 0, content_capture.mojom.ContentCaptureDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content_capture.mojom.ContentCaptureReceiver_DidRemoveContent_ParamsSpec, 'content_capture.mojom.ContentCaptureReceiver_DidRemoveContent_Params', [
      mojo.internal.StructField('ids', 0, 0, mojo.internal.Array(mojo.internal.Int64, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

content_capture.mojom.ContentCaptureReceiverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content_capture.mojom.ContentCaptureReceiverRemote = class {
  static get $interfaceName() {
    return 'content_capture.mojom.ContentCaptureReceiver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content_capture.mojom.ContentCaptureReceiverPendingReceiver,
      handle);
    this.$ = new content_capture.mojom.ContentCaptureReceiverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  didCompleteBatchCaptureContent() {
    return this.$.didCompleteBatchCaptureContent();
  }
  didCaptureContent(data, first_data) {
    return this.$.didCaptureContent(data, first_data);
  }
  didUpdateContent(data) {
    return this.$.didUpdateContent(data);
  }
  didRemoveContent(ids) {
    return this.$.didRemoveContent(ids);
  }
};

content_capture.mojom.ContentCaptureReceiverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ContentCaptureReceiver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  didCompleteBatchCaptureContent() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      content_capture.mojom.ContentCaptureReceiver_DidCompleteBatchCaptureContent_ParamsSpec,
      null,
      [],
      false);
  }

  didCaptureContent(data, first_data) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      content_capture.mojom.ContentCaptureReceiver_DidCaptureContent_ParamsSpec,
      null,
      [data, first_data],
      false);
  }

  didUpdateContent(data) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      content_capture.mojom.ContentCaptureReceiver_DidUpdateContent_ParamsSpec,
      null,
      [data],
      false);
  }

  didRemoveContent(ids) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      content_capture.mojom.ContentCaptureReceiver_DidRemoveContent_ParamsSpec,
      null,
      [ids],
      false);
  }

};

content_capture.mojom.ContentCaptureReceiver.getRemote = function() {
  let remote = new content_capture.mojom.ContentCaptureReceiverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content_capture.mojom.ContentCaptureReceiver',
    'context');
  return remote.$;
};

content_capture.mojom.ContentCaptureReceiverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ContentCaptureReceiver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(content_capture.mojom.ContentCaptureReceiver_DidCompleteBatchCaptureContent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content_capture.mojom.ContentCaptureReceiver_DidCaptureContent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content_capture.mojom.ContentCaptureReceiver_DidUpdateContent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content_capture.mojom.ContentCaptureReceiver_DidRemoveContent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content_capture.mojom.ContentCaptureReceiver_DidCompleteBatchCaptureContent_ParamsSpec.$.structSpec);
          const result = this.impl.didCompleteBatchCaptureContent();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content_capture.mojom.ContentCaptureReceiver_DidCaptureContent_ParamsSpec.$.structSpec);
          const result = this.impl.didCaptureContent(params.data, params.first_data);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content_capture.mojom.ContentCaptureReceiver_DidUpdateContent_ParamsSpec.$.structSpec);
          const result = this.impl.didUpdateContent(params.data);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content_capture.mojom.ContentCaptureReceiver_DidRemoveContent_ParamsSpec.$.structSpec);
          const result = this.impl.didRemoveContent(params.ids);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

content_capture.mojom.ContentCaptureReceiverReceiver = content_capture.mojom.ContentCaptureReceiverReceiver;

content_capture.mojom.ContentCaptureReceiverPtr = content_capture.mojom.ContentCaptureReceiverRemote;
content_capture.mojom.ContentCaptureReceiverRequest = content_capture.mojom.ContentCaptureReceiverPendingReceiver;


// Interface: ContentCaptureSender
mojo.internal.Struct(
    content_capture.mojom.ContentCaptureSender_StartCapture_ParamsSpec, 'content_capture.mojom.ContentCaptureSender_StartCapture_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content_capture.mojom.ContentCaptureSender_StopCapture_ParamsSpec, 'content_capture.mojom.ContentCaptureSender_StopCapture_Params', [
    ],
    [[0, 8]]);

content_capture.mojom.ContentCaptureSenderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content_capture.mojom.ContentCaptureSenderRemote = class {
  static get $interfaceName() {
    return 'content_capture.mojom.ContentCaptureSender';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content_capture.mojom.ContentCaptureSenderPendingReceiver,
      handle);
    this.$ = new content_capture.mojom.ContentCaptureSenderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  startCapture() {
    return this.$.startCapture();
  }
  stopCapture() {
    return this.$.stopCapture();
  }
};

content_capture.mojom.ContentCaptureSenderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ContentCaptureSender', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  startCapture() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      content_capture.mojom.ContentCaptureSender_StartCapture_ParamsSpec,
      null,
      [],
      false);
  }

  stopCapture() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      content_capture.mojom.ContentCaptureSender_StopCapture_ParamsSpec,
      null,
      [],
      false);
  }

};

content_capture.mojom.ContentCaptureSender.getRemote = function() {
  let remote = new content_capture.mojom.ContentCaptureSenderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content_capture.mojom.ContentCaptureSender',
    'context');
  return remote.$;
};

content_capture.mojom.ContentCaptureSenderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ContentCaptureSender', [
      { explicit: null },
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
             decoder.decodeStructInline(content_capture.mojom.ContentCaptureSender_StartCapture_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content_capture.mojom.ContentCaptureSender_StopCapture_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content_capture.mojom.ContentCaptureSender_StartCapture_ParamsSpec.$.structSpec);
          const result = this.impl.startCapture();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content_capture.mojom.ContentCaptureSender_StopCapture_ParamsSpec.$.structSpec);
          const result = this.impl.stopCapture();
          break;
        }
      }
      } catch (err) {}
    });
  }
};

content_capture.mojom.ContentCaptureSenderReceiver = content_capture.mojom.ContentCaptureSenderReceiver;

content_capture.mojom.ContentCaptureSenderPtr = content_capture.mojom.ContentCaptureSenderRemote;
content_capture.mojom.ContentCaptureSenderRequest = content_capture.mojom.ContentCaptureSenderPendingReceiver;

