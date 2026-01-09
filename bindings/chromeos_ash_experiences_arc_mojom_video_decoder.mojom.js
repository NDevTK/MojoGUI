// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/video_decoder.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: DecoderStatus
arc.mojom.DecoderStatus = {
  OK: 0,
  ABORTED: 1,
  FAILED: 2,
  INVALID_ARGUMENT: 3,
  CREATION_FAILED: 4,
};

// Struct: Buffer
arc.mojom.BufferSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.Buffer',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VideoDecoderConfig
arc.mojom.VideoDecoderConfigSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoDecoderConfig',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: VideoDecoder
arc.mojom.VideoDecoder = {};

arc.mojom.VideoDecoderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.VideoDecoderRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.VideoDecoder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.VideoDecoderPendingReceiver,
      handle);
    this.$ = new arc.mojom.VideoDecoderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.VideoDecoderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.VideoDecoder.getRemote = function() {
  let remote = new arc.mojom.VideoDecoderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.VideoDecoder',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.VideoDecoderPtr = arc.mojom.VideoDecoderRemote;
arc.mojom.VideoDecoderRequest = arc.mojom.VideoDecoderPendingReceiver;


// Interface: VideoDecoderClient
arc.mojom.VideoDecoderClient = {};

arc.mojom.VideoDecoderClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.VideoDecoderClientRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.VideoDecoderClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.VideoDecoderClientPendingReceiver,
      handle);
    this.$ = new arc.mojom.VideoDecoderClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.VideoDecoderClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.VideoDecoderClient.getRemote = function() {
  let remote = new arc.mojom.VideoDecoderClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.VideoDecoderClient',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.VideoDecoderClientPtr = arc.mojom.VideoDecoderClientRemote;
arc.mojom.VideoDecoderClientRequest = arc.mojom.VideoDecoderClientPendingReceiver;

