// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/people/mojom/graduation_handler.mojom
// Module: ash.settings.graduation.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.graduation = ash.settings.graduation || {};
ash.settings.graduation.mojom = ash.settings.graduation.mojom || {};


// Interface: GraduationHandler
ash.settings.graduation.mojom.GraduationHandler = {};

ash.settings.graduation.mojom.GraduationHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.graduation.mojom.GraduationHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.settings.graduation.mojom.GraduationHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.graduation.mojom.GraduationHandlerPendingReceiver,
      handle);
    this.$ = new ash.settings.graduation.mojom.GraduationHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.graduation.mojom.GraduationHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  launchGraduationApp() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.graduation.mojom.GraduationHandler_LaunchGraduationApp_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  addObserver(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.graduation.mojom.GraduationHandler_AddObserver_ParamsSpec,
      null,
      null,
      [observer],
      undefined,
      undefined
    );
  }

};

ash.settings.graduation.mojom.GraduationHandler.getRemote = function() {
  let remote = new ash.settings.graduation.mojom.GraduationHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.graduation.mojom.GraduationHandler',
    'context');
  return remote.$;
};

// ParamsSpec for LaunchGraduationApp
ash.settings.graduation.mojom.GraduationHandler_LaunchGraduationApp_ParamsSpec = {
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
ash.settings.graduation.mojom.GraduationHandler_AddObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.graduation.mojom.GraduationHandler.AddObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.settings.graduation.mojom.GraduationHandlerPtr = ash.settings.graduation.mojom.GraduationHandlerRemote;
ash.settings.graduation.mojom.GraduationHandlerRequest = ash.settings.graduation.mojom.GraduationHandlerPendingReceiver;


// Interface: GraduationObserver
ash.settings.graduation.mojom.GraduationObserver = {};

ash.settings.graduation.mojom.GraduationObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.graduation.mojom.GraduationObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.graduation.mojom.GraduationObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.graduation.mojom.GraduationObserverPendingReceiver,
      handle);
    this.$ = new ash.settings.graduation.mojom.GraduationObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.graduation.mojom.GraduationObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onGraduationAppUpdated(is_app_enabled) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.graduation.mojom.GraduationObserver_OnGraduationAppUpdated_ParamsSpec,
      null,
      null,
      [is_app_enabled],
      undefined,
      undefined
    );
  }

};

ash.settings.graduation.mojom.GraduationObserver.getRemote = function() {
  let remote = new ash.settings.graduation.mojom.GraduationObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.graduation.mojom.GraduationObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnGraduationAppUpdated
ash.settings.graduation.mojom.GraduationObserver_OnGraduationAppUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.graduation.mojom.GraduationObserver.OnGraduationAppUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'is_app_enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.settings.graduation.mojom.GraduationObserverPtr = ash.settings.graduation.mojom.GraduationObserverRemote;
ash.settings.graduation.mojom.GraduationObserverRequest = ash.settings.graduation.mojom.GraduationObserverPendingReceiver;

