// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/common/mojom/shortcut_input_provider.mojom
// Module: ash.common.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.common = ash.common || {};
ash.common.mojom = ash.common.mojom || {};

ash.common.mojom.ShortcutInputObserver = {};
ash.common.mojom.ShortcutInputObserver.$interfaceName = 'ash.common.mojom.ShortcutInputObserver';
ash.common.mojom.ShortcutInputObserver_OnShortcutInputEventPressed_ParamsSpec = { $: {} };
ash.common.mojom.ShortcutInputObserver_OnShortcutInputEventReleased_ParamsSpec = { $: {} };
ash.common.mojom.ShortcutInputProvider = {};
ash.common.mojom.ShortcutInputProvider.$interfaceName = 'ash.common.mojom.ShortcutInputProvider';
ash.common.mojom.ShortcutInputProvider_StartObservingShortcutInput_ParamsSpec = { $: {} };
ash.common.mojom.ShortcutInputProvider_StopObservingShortcutInput_ParamsSpec = { $: {} };

// Interface: ShortcutInputObserver
mojo.internal.Struct(
    ash.common.mojom.ShortcutInputObserver_OnShortcutInputEventPressed_ParamsSpec, 'ash.common.mojom.ShortcutInputObserver_OnShortcutInputEventPressed_Params', [
      mojo.internal.StructField('prerewritten_key_event', 0, 0, ash.mojom.KeyEventSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_event', 8, 0, ash.mojom.KeyEventSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.common.mojom.ShortcutInputObserver_OnShortcutInputEventReleased_ParamsSpec, 'ash.common.mojom.ShortcutInputObserver_OnShortcutInputEventReleased_Params', [
      mojo.internal.StructField('prerewritten_key_event', 0, 0, ash.mojom.KeyEventSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_event', 8, 0, ash.mojom.KeyEventSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

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
      ash.common.mojom.ShortcutInputObserver_OnShortcutInputEventPressed_ParamsSpec,
      null,
      [prerewritten_key_event, key_event],
      false);
  }

  onShortcutInputEventReleased(prerewritten_key_event, key_event) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.common.mojom.ShortcutInputObserver_OnShortcutInputEventReleased_ParamsSpec,
      null,
      [prerewritten_key_event, key_event],
      false);
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
};

ash.common.mojom.ShortcutInputObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.common.mojom.ShortcutInputObserver_OnShortcutInputEventPressed_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onShortcutInputEventPressed(params.prerewritten_key_event, params.key_event);
          break;
        }
        case 1: {
          const params = ash.common.mojom.ShortcutInputObserver_OnShortcutInputEventReleased_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onShortcutInputEventReleased(params.prerewritten_key_event, params.key_event);
          break;
        }
      }
    });
  }
};

ash.common.mojom.ShortcutInputObserverReceiver = ash.common.mojom.ShortcutInputObserverReceiver;

ash.common.mojom.ShortcutInputObserverPtr = ash.common.mojom.ShortcutInputObserverRemote;
ash.common.mojom.ShortcutInputObserverRequest = ash.common.mojom.ShortcutInputObserverPendingReceiver;


// Interface: ShortcutInputProvider
mojo.internal.Struct(
    ash.common.mojom.ShortcutInputProvider_StartObservingShortcutInput_ParamsSpec, 'ash.common.mojom.ShortcutInputProvider_StartObservingShortcutInput_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.common.mojom.ShortcutInputObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.common.mojom.ShortcutInputProvider_StopObservingShortcutInput_ParamsSpec, 'ash.common.mojom.ShortcutInputProvider_StopObservingShortcutInput_Params', [
    ],
    [[0, 8]]);

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
      ash.common.mojom.ShortcutInputProvider_StartObservingShortcutInput_ParamsSpec,
      null,
      [observer],
      false);
  }

  stopObservingShortcutInput() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.common.mojom.ShortcutInputProvider_StopObservingShortcutInput_ParamsSpec,
      null,
      [],
      false);
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
};

ash.common.mojom.ShortcutInputProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.common.mojom.ShortcutInputProvider_StartObservingShortcutInput_ParamsSpec.$.decode(message.payload);
          const result = this.impl.startObservingShortcutInput(params.observer);
          break;
        }
        case 1: {
          const params = ash.common.mojom.ShortcutInputProvider_StopObservingShortcutInput_ParamsSpec.$.decode(message.payload);
          const result = this.impl.stopObservingShortcutInput();
          break;
        }
      }
    });
  }
};

ash.common.mojom.ShortcutInputProviderReceiver = ash.common.mojom.ShortcutInputProviderReceiver;

ash.common.mojom.ShortcutInputProviderPtr = ash.common.mojom.ShortcutInputProviderRemote;
ash.common.mojom.ShortcutInputProviderRequest = ash.common.mojom.ShortcutInputProviderPendingReceiver;

