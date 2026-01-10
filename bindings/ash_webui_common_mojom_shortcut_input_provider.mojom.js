// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/common/mojom/shortcut_input_provider.mojom
// Module: ash.common.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.common = ash.common || {};
ash.common.common.mojom = ash.common.common.mojom || {};


// Interface: ShortcutInputObserver
ash.common.common.mojom.mojom.ShortcutInputObserver = {};

ash.common.common.mojom.mojom.ShortcutInputObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.common.common.mojom.mojom.ShortcutInputObserverRemote = class {
  static get $interfaceName() {
    return 'ash.common.mojom.ShortcutInputObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.common.common.mojom.mojom.ShortcutInputObserverPendingReceiver,
      handle);
    this.$ = new ash.common.common.mojom.mojom.ShortcutInputObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.common.common.mojom.mojom.ShortcutInputObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onShortcutInputEventPressed(prerewritten_key_event, key_event) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.common.common.mojom.mojom.ShortcutInputObserver_OnShortcutInputEventPressed_ParamsSpec,
      null,
      [prerewritten_key_event, key_event]);
  }

  onShortcutInputEventReleased(prerewritten_key_event, key_event) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.common.common.mojom.mojom.ShortcutInputObserver_OnShortcutInputEventReleased_ParamsSpec,
      null,
      [prerewritten_key_event, key_event]);
  }

};

ash.common.common.mojom.mojom.ShortcutInputObserver.getRemote = function() {
  let remote = new ash.common.common.mojom.mojom.ShortcutInputObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.common.mojom.ShortcutInputObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnShortcutInputEventPressed
ash.common.common.mojom.mojom.ShortcutInputObserver_OnShortcutInputEventPressed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.common.mojom.ShortcutInputObserver.OnShortcutInputEventPressed_Params',
      packedSize: 24,
      fields: [
        { name: 'prerewritten_key_event', packedOffset: 0, packedBitOffset: 0, type: ash.mojom.KeyEventSpec, nullable: false, minVersion: 0 },
        { name: 'key_event', packedOffset: 8, packedBitOffset: 0, type: ash.mojom.KeyEventSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnShortcutInputEventReleased
ash.common.common.mojom.mojom.ShortcutInputObserver_OnShortcutInputEventReleased_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.common.mojom.ShortcutInputObserver.OnShortcutInputEventReleased_Params',
      packedSize: 24,
      fields: [
        { name: 'prerewritten_key_event', packedOffset: 0, packedBitOffset: 0, type: ash.mojom.KeyEventSpec, nullable: false, minVersion: 0 },
        { name: 'key_event', packedOffset: 8, packedBitOffset: 0, type: ash.mojom.KeyEventSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
ash.common.common.mojom.mojom.ShortcutInputObserverPtr = ash.common.common.mojom.mojom.ShortcutInputObserverRemote;
ash.common.common.mojom.mojom.ShortcutInputObserverRequest = ash.common.common.mojom.mojom.ShortcutInputObserverPendingReceiver;


// Interface: ShortcutInputProvider
ash.common.common.mojom.mojom.ShortcutInputProvider = {};

ash.common.common.mojom.mojom.ShortcutInputProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.common.common.mojom.mojom.ShortcutInputProviderRemote = class {
  static get $interfaceName() {
    return 'ash.common.mojom.ShortcutInputProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.common.common.mojom.mojom.ShortcutInputProviderPendingReceiver,
      handle);
    this.$ = new ash.common.common.mojom.mojom.ShortcutInputProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.common.common.mojom.mojom.ShortcutInputProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startObservingShortcutInput(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.common.common.mojom.mojom.ShortcutInputProvider_StartObservingShortcutInput_ParamsSpec,
      null,
      [observer]);
  }

  stopObservingShortcutInput() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.common.common.mojom.mojom.ShortcutInputProvider_StopObservingShortcutInput_ParamsSpec,
      null,
      []);
  }

};

ash.common.common.mojom.mojom.ShortcutInputProvider.getRemote = function() {
  let remote = new ash.common.common.mojom.mojom.ShortcutInputProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.common.mojom.ShortcutInputProvider',
    'context');
  return remote.$;
};

// ParamsSpec for StartObservingShortcutInput
ash.common.common.mojom.mojom.ShortcutInputProvider_StartObservingShortcutInput_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.common.mojom.ShortcutInputProvider.StartObservingShortcutInput_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StopObservingShortcutInput
ash.common.common.mojom.mojom.ShortcutInputProvider_StopObservingShortcutInput_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.common.mojom.ShortcutInputProvider.StopObservingShortcutInput_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
ash.common.common.mojom.mojom.ShortcutInputProviderPtr = ash.common.common.mojom.mojom.ShortcutInputProviderRemote;
ash.common.common.mojom.mojom.ShortcutInputProviderRequest = ash.common.common.mojom.mojom.ShortcutInputProviderPendingReceiver;

