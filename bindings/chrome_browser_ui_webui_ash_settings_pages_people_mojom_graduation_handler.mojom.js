// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/people/mojom/graduation_handler.mojom
// Module: ash.settings.graduation.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.settings.graduation = ash.settings.settings.graduation || {};
ash.settings.settings.graduation.graduation.mojom = ash.settings.settings.graduation.graduation.mojom || {};


// Interface: GraduationHandler
ash.settings.settings.graduation.graduation.mojom.mojom.GraduationHandler = {};

ash.settings.settings.graduation.graduation.mojom.mojom.GraduationHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.settings.graduation.graduation.mojom.mojom.GraduationHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.settings.graduation.mojom.GraduationHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.settings.graduation.graduation.mojom.mojom.GraduationHandlerPendingReceiver,
      handle);
    this.$ = new ash.settings.settings.graduation.graduation.mojom.mojom.GraduationHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.settings.graduation.graduation.mojom.mojom.GraduationHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  launchGraduationApp() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.settings.graduation.graduation.mojom.mojom.GraduationHandler_LaunchGraduationApp_ParamsSpec,
      null,
      []);
  }

  addObserver(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.settings.graduation.graduation.mojom.mojom.GraduationHandler_AddObserver_ParamsSpec,
      null,
      [observer]);
  }

};

ash.settings.settings.graduation.graduation.mojom.mojom.GraduationHandler.getRemote = function() {
  let remote = new ash.settings.settings.graduation.graduation.mojom.mojom.GraduationHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.graduation.mojom.GraduationHandler',
    'context');
  return remote.$;
};

// ParamsSpec for LaunchGraduationApp
ash.settings.settings.graduation.graduation.mojom.mojom.GraduationHandler_LaunchGraduationApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.graduation.mojom.GraduationHandler.LaunchGraduationApp_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for AddObserver
ash.settings.settings.graduation.graduation.mojom.mojom.GraduationHandler_AddObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.graduation.mojom.GraduationHandler.AddObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.settings.graduation.mojom.GraduationObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.settings.settings.graduation.graduation.mojom.mojom.GraduationHandlerPtr = ash.settings.settings.graduation.graduation.mojom.mojom.GraduationHandlerRemote;
ash.settings.settings.graduation.graduation.mojom.mojom.GraduationHandlerRequest = ash.settings.settings.graduation.graduation.mojom.mojom.GraduationHandlerPendingReceiver;


// Interface: GraduationObserver
ash.settings.settings.graduation.graduation.mojom.mojom.GraduationObserver = {};

ash.settings.settings.graduation.graduation.mojom.mojom.GraduationObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.settings.graduation.graduation.mojom.mojom.GraduationObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.graduation.mojom.GraduationObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.settings.graduation.graduation.mojom.mojom.GraduationObserverPendingReceiver,
      handle);
    this.$ = new ash.settings.settings.graduation.graduation.mojom.mojom.GraduationObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.settings.graduation.graduation.mojom.mojom.GraduationObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onGraduationAppUpdated(is_app_enabled) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.settings.graduation.graduation.mojom.mojom.GraduationObserver_OnGraduationAppUpdated_ParamsSpec,
      null,
      [is_app_enabled]);
  }

};

ash.settings.settings.graduation.graduation.mojom.mojom.GraduationObserver.getRemote = function() {
  let remote = new ash.settings.settings.graduation.graduation.mojom.mojom.GraduationObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.graduation.mojom.GraduationObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnGraduationAppUpdated
ash.settings.settings.graduation.graduation.mojom.mojom.GraduationObserver_OnGraduationAppUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.graduation.mojom.GraduationObserver.OnGraduationAppUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'is_app_enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.settings.settings.graduation.graduation.mojom.mojom.GraduationObserverPtr = ash.settings.settings.graduation.graduation.mojom.mojom.GraduationObserverRemote;
ash.settings.settings.graduation.graduation.mojom.mojom.GraduationObserverRequest = ash.settings.settings.graduation.graduation.mojom.mojom.GraduationObserverPendingReceiver;

