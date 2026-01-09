// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/common/mojom/shortcut_input_provider.mojom
// Module: ash.common.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.common = ash.common || {};
ash.common.mojom = ash.common.mojom || {};


// Interface: ShortcutInputObserver
ash.common.mojom.ShortcutInputObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.common.mojom.ShortcutInputObserverRemote = class {
  static get $interfaceName() {
    return 'ash.common.mojom.ShortcutInputObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.common.mojom.ShortcutInputObserverPendingReceiver,
      handle);
    this.$ = new ash.common.mojom.ShortcutInputObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.common.mojom.ShortcutInputObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onShortcutInputEventPressed(prerewritten_key_event, key_event) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.common.mojom.ShortcutInputObserver_OnShortcutInputEventPressed_ParamsSpec.$,
      null,
      [prerewritten_key_event, key_event]);
  }

  onShortcutInputEventReleased(prerewritten_key_event, key_event) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.common.mojom.ShortcutInputObserver_OnShortcutInputEventReleased_ParamsSpec.$,
      null,
      [prerewritten_key_event, key_event]);
  }

};

ash.common.mojom.ShortcutInputObserver.getRemote = function() {
  let remote = new ash.common.mojom.ShortcutInputObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.common.mojom.ShortcutInputObserver',
    'context');
  return remote.$;
}};

// ParamsSpec for OnShortcutInputEventPressed
ash.common.mojom.ShortcutInputObserver_OnShortcutInputEventPressed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.common.mojom.ShortcutInputObserver.OnShortcutInputEventPressed_Params',
      packedSize: 24,
      fields: [
        { name: 'prerewritten_key_event', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'key_event', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnShortcutInputEventReleased
ash.common.mojom.ShortcutInputObserver_OnShortcutInputEventReleased_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.common.mojom.ShortcutInputObserver.OnShortcutInputEventReleased_Params',
      packedSize: 24,
      fields: [
        { name: 'prerewritten_key_event', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'key_event', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
ash.common.mojom.ShortcutInputObserverPtr = ash.common.mojom.ShortcutInputObserverRemote;
ash.common.mojom.ShortcutInputObserverRequest = ash.common.mojom.ShortcutInputObserverPendingReceiver;


// Interface: ShortcutInputProvider
ash.common.mojom.ShortcutInputProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.common.mojom.ShortcutInputProviderRemote = class {
  static get $interfaceName() {
    return 'ash.common.mojom.ShortcutInputProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.common.mojom.ShortcutInputProviderPendingReceiver,
      handle);
    this.$ = new ash.common.mojom.ShortcutInputProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.common.mojom.ShortcutInputProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startObservingShortcutInput(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.common.mojom.ShortcutInputProvider_StartObservingShortcutInput_ParamsSpec.$,
      null,
      [observer]);
  }

  stopObservingShortcutInput() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.common.mojom.ShortcutInputProvider_StopObservingShortcutInput_ParamsSpec.$,
      null,
      []);
  }

};

ash.common.mojom.ShortcutInputProvider.getRemote = function() {
  let remote = new ash.common.mojom.ShortcutInputProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.common.mojom.ShortcutInputProvider',
    'context');
  return remote.$;
}};

// ParamsSpec for StartObservingShortcutInput
ash.common.mojom.ShortcutInputProvider_StartObservingShortcutInput_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.common.mojom.ShortcutInputProvider.StartObservingShortcutInput_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for StopObservingShortcutInput
ash.common.mojom.ShortcutInputProvider_StopObservingShortcutInput_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.common.mojom.ShortcutInputProvider.StopObservingShortcutInput_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
ash.common.mojom.ShortcutInputProviderPtr = ash.common.mojom.ShortcutInputProviderRemote;
ash.common.mojom.ShortcutInputProviderRequest = ash.common.mojom.ShortcutInputProviderPendingReceiver;

