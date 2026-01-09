// Auto-generated MojoJS binding
// Source: chromium_src/services/media_session/public/mojom/media_controller.mojom
// Module: media_session.mojom

'use strict';

// Module namespace
var media_session = media_session || {};
media_session.mojom = media_session.mojom || {};


// Interface: MediaControllerManager
media_session.mojom.MediaControllerManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media_session.mojom.MediaControllerManagerRemote = class {
  static get $interfaceName() {
    return 'media_session.mojom.MediaControllerManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media_session.mojom.MediaControllerManagerPendingReceiver,
      handle);
    this.$ = new media_session.mojom.MediaControllerManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media_session.mojom.MediaControllerManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

media_session.mojom.MediaControllerManager.getRemote = function() {
  let remote = new media_session.mojom.MediaControllerManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media_session.mojom.MediaControllerManager',
    'context');
  return remote.$;
};

// Legacy compatibility
media_session.mojom.MediaControllerManagerPtr = media_session.mojom.MediaControllerManagerRemote;
media_session.mojom.MediaControllerManagerRequest = media_session.mojom.MediaControllerManagerPendingReceiver;


// Interface: MediaController
media_session.mojom.MediaControllerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media_session.mojom.MediaControllerRemote = class {
  static get $interfaceName() {
    return 'media_session.mojom.MediaController';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media_session.mojom.MediaControllerPendingReceiver,
      handle);
    this.$ = new media_session.mojom.MediaControllerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media_session.mojom.MediaControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

media_session.mojom.MediaController.getRemote = function() {
  let remote = new media_session.mojom.MediaControllerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media_session.mojom.MediaController',
    'context');
  return remote.$;
};

// Legacy compatibility
media_session.mojom.MediaControllerPtr = media_session.mojom.MediaControllerRemote;
media_session.mojom.MediaControllerRequest = media_session.mojom.MediaControllerPendingReceiver;


// Interface: MediaControllerObserver
media_session.mojom.MediaControllerObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media_session.mojom.MediaControllerObserverRemote = class {
  static get $interfaceName() {
    return 'media_session.mojom.MediaControllerObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media_session.mojom.MediaControllerObserverPendingReceiver,
      handle);
    this.$ = new media_session.mojom.MediaControllerObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media_session.mojom.MediaControllerObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

media_session.mojom.MediaControllerObserver.getRemote = function() {
  let remote = new media_session.mojom.MediaControllerObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media_session.mojom.MediaControllerObserver',
    'context');
  return remote.$;
};

// Legacy compatibility
media_session.mojom.MediaControllerObserverPtr = media_session.mojom.MediaControllerObserverRemote;
media_session.mojom.MediaControllerObserverRequest = media_session.mojom.MediaControllerObserverPendingReceiver;


// Interface: MediaControllerImageObserver
media_session.mojom.MediaControllerImageObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media_session.mojom.MediaControllerImageObserverRemote = class {
  static get $interfaceName() {
    return 'media_session.mojom.MediaControllerImageObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media_session.mojom.MediaControllerImageObserverPendingReceiver,
      handle);
    this.$ = new media_session.mojom.MediaControllerImageObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media_session.mojom.MediaControllerImageObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

media_session.mojom.MediaControllerImageObserver.getRemote = function() {
  let remote = new media_session.mojom.MediaControllerImageObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media_session.mojom.MediaControllerImageObserver',
    'context');
  return remote.$;
};

// Legacy compatibility
media_session.mojom.MediaControllerImageObserverPtr = media_session.mojom.MediaControllerImageObserverRemote;
media_session.mojom.MediaControllerImageObserverRequest = media_session.mojom.MediaControllerImageObserverPendingReceiver;

