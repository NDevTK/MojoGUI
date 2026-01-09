// Auto-generated MojoJS binding
// Source: chromium_src/components/content_capture/common/content_capture.mojom
// Module: content_capture.mojom

'use strict';

// Module namespace
var content_capture = content_capture || {};
content_capture.mojom = content_capture.mojom || {};


// Interface: ContentCaptureReceiver
content_capture.mojom.ContentCaptureReceiver = {};

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
};

content_capture.mojom.ContentCaptureReceiverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  didCompleteBatchCaptureContent() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content_capture.mojom.ContentCaptureReceiver_DidCompleteBatchCaptureContent_ParamsSpec.$,
      null,
      []);
  }

  didCaptureContent(data, first_data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content_capture.mojom.ContentCaptureReceiver_DidCaptureContent_ParamsSpec.$,
      null,
      [data, first_data]);
  }

  didUpdateContent(data) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content_capture.mojom.ContentCaptureReceiver_DidUpdateContent_ParamsSpec.$,
      null,
      [data]);
  }

  didRemoveContent(ids) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      content_capture.mojom.ContentCaptureReceiver_DidRemoveContent_ParamsSpec.$,
      null,
      [ids]);
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

// ParamsSpec for DidCompleteBatchCaptureContent
content_capture.mojom.ContentCaptureReceiver_DidCompleteBatchCaptureContent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content_capture.mojom.ContentCaptureReceiver.DidCompleteBatchCaptureContent_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidCaptureContent
content_capture.mojom.ContentCaptureReceiver_DidCaptureContent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content_capture.mojom.ContentCaptureReceiver.DidCaptureContent_Params',
      packedSize: 24,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'first_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidUpdateContent
content_capture.mojom.ContentCaptureReceiver_DidUpdateContent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content_capture.mojom.ContentCaptureReceiver.DidUpdateContent_Params',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidRemoveContent
content_capture.mojom.ContentCaptureReceiver_DidRemoveContent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content_capture.mojom.ContentCaptureReceiver.DidRemoveContent_Params',
      packedSize: 16,
      fields: [
        { name: 'ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
content_capture.mojom.ContentCaptureReceiverPtr = content_capture.mojom.ContentCaptureReceiverRemote;
content_capture.mojom.ContentCaptureReceiverRequest = content_capture.mojom.ContentCaptureReceiverPendingReceiver;


// Interface: ContentCaptureSender
content_capture.mojom.ContentCaptureSender = {};

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
};

content_capture.mojom.ContentCaptureSenderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startCapture() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content_capture.mojom.ContentCaptureSender_StartCapture_ParamsSpec.$,
      null,
      []);
  }

  stopCapture() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content_capture.mojom.ContentCaptureSender_StopCapture_ParamsSpec.$,
      null,
      []);
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

// ParamsSpec for StartCapture
content_capture.mojom.ContentCaptureSender_StartCapture_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content_capture.mojom.ContentCaptureSender.StartCapture_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StopCapture
content_capture.mojom.ContentCaptureSender_StopCapture_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content_capture.mojom.ContentCaptureSender.StopCapture_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
content_capture.mojom.ContentCaptureSenderPtr = content_capture.mojom.ContentCaptureSenderRemote;
content_capture.mojom.ContentCaptureSenderRequest = content_capture.mojom.ContentCaptureSenderPendingReceiver;

