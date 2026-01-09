// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/renderer_extensions.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: FlingingRendererClientExtension
media.mojom.FlingingRendererClientExtension = {};

media.mojom.FlingingRendererClientExtensionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.FlingingRendererClientExtensionRemote = class {
  static get $interfaceName() {
    return 'media.mojom.FlingingRendererClientExtension';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.FlingingRendererClientExtensionPendingReceiver,
      handle);
    this.$ = new media.mojom.FlingingRendererClientExtensionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.FlingingRendererClientExtensionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onRemotePlayStateChange(state) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.FlingingRendererClientExtension_OnRemotePlayStateChange_ParamsSpec.$,
      null,
      [state]);
  }

};

media.mojom.FlingingRendererClientExtension.getRemote = function() {
  let remote = new media.mojom.FlingingRendererClientExtensionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.FlingingRendererClientExtension',
    'context');
  return remote.$;
};

// ParamsSpec for OnRemotePlayStateChange
media.mojom.FlingingRendererClientExtension_OnRemotePlayStateChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.FlingingRendererClientExtension.OnRemotePlayStateChange_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.FlingingRendererClientExtensionPtr = media.mojom.FlingingRendererClientExtensionRemote;
media.mojom.FlingingRendererClientExtensionRequest = media.mojom.FlingingRendererClientExtensionPendingReceiver;


// Interface: MediaFoundationRendererExtension
media.mojom.MediaFoundationRendererExtension = {};

media.mojom.MediaFoundationRendererExtensionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.MediaFoundationRendererExtensionRemote = class {
  static get $interfaceName() {
    return 'media.mojom.MediaFoundationRendererExtension';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.MediaFoundationRendererExtensionPendingReceiver,
      handle);
    this.$ = new media.mojom.MediaFoundationRendererExtensionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.MediaFoundationRendererExtensionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getDCOMPSurface() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.MediaFoundationRendererExtension_GetDCOMPSurface_ParamsSpec.$,
      media.mojom.MediaFoundationRendererExtension_GetDCOMPSurface_ResponseParamsSpec.$,
      []);
  }

  setVideoStreamEnabled(enabled) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.MediaFoundationRendererExtension_SetVideoStreamEnabled_ParamsSpec.$,
      null,
      [enabled]);
  }

  setOutputRect(rect) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.MediaFoundationRendererExtension_SetOutputRect_ParamsSpec.$,
      media.mojom.MediaFoundationRendererExtension_SetOutputRect_ResponseParamsSpec.$,
      [rect]);
  }

};

media.mojom.MediaFoundationRendererExtension.getRemote = function() {
  let remote = new media.mojom.MediaFoundationRendererExtensionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.MediaFoundationRendererExtension',
    'context');
  return remote.$;
};

// ParamsSpec for GetDCOMPSurface
media.mojom.MediaFoundationRendererExtension_GetDCOMPSurface_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaFoundationRendererExtension.GetDCOMPSurface_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

media.mojom.MediaFoundationRendererExtension_GetDCOMPSurface_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaFoundationRendererExtension.GetDCOMPSurface_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetVideoStreamEnabled
media.mojom.MediaFoundationRendererExtension_SetVideoStreamEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaFoundationRendererExtension.SetVideoStreamEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetOutputRect
media.mojom.MediaFoundationRendererExtension_SetOutputRect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaFoundationRendererExtension.SetOutputRect_Params',
      packedSize: 16,
      fields: [
        { name: 'rect', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

media.mojom.MediaFoundationRendererExtension_SetOutputRect_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaFoundationRendererExtension.SetOutputRect_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.MediaFoundationRendererExtensionPtr = media.mojom.MediaFoundationRendererExtensionRemote;
media.mojom.MediaFoundationRendererExtensionRequest = media.mojom.MediaFoundationRendererExtensionPendingReceiver;


// Interface: MediaFoundationRendererObserver
media.mojom.MediaFoundationRendererObserver = {};

media.mojom.MediaFoundationRendererObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.MediaFoundationRendererObserverRemote = class {
  static get $interfaceName() {
    return 'media.mojom.MediaFoundationRendererObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.MediaFoundationRendererObserverPendingReceiver,
      handle);
    this.$ = new media.mojom.MediaFoundationRendererObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.MediaFoundationRendererObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

media.mojom.MediaFoundationRendererObserver.getRemote = function() {
  let remote = new media.mojom.MediaFoundationRendererObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.MediaFoundationRendererObserver',
    'context');
  return remote.$;
};

// Legacy compatibility
media.mojom.MediaFoundationRendererObserverPtr = media.mojom.MediaFoundationRendererObserverRemote;
media.mojom.MediaFoundationRendererObserverRequest = media.mojom.MediaFoundationRendererObserverPendingReceiver;


// Interface: MediaFoundationRendererNotifier
media.mojom.MediaFoundationRendererNotifier = {};

media.mojom.MediaFoundationRendererNotifierPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.MediaFoundationRendererNotifierRemote = class {
  static get $interfaceName() {
    return 'media.mojom.MediaFoundationRendererNotifier';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.MediaFoundationRendererNotifierPendingReceiver,
      handle);
    this.$ = new media.mojom.MediaFoundationRendererNotifierRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.MediaFoundationRendererNotifierRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  mediaFoundationRendererCreated(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.MediaFoundationRendererNotifier_MediaFoundationRendererCreated_ParamsSpec.$,
      null,
      [observer]);
  }

};

media.mojom.MediaFoundationRendererNotifier.getRemote = function() {
  let remote = new media.mojom.MediaFoundationRendererNotifierRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.MediaFoundationRendererNotifier',
    'context');
  return remote.$;
};

// ParamsSpec for MediaFoundationRendererCreated
media.mojom.MediaFoundationRendererNotifier_MediaFoundationRendererCreated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaFoundationRendererNotifier.MediaFoundationRendererCreated_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.MediaFoundationRendererNotifierPtr = media.mojom.MediaFoundationRendererNotifierRemote;
media.mojom.MediaFoundationRendererNotifierRequest = media.mojom.MediaFoundationRendererNotifierPendingReceiver;

