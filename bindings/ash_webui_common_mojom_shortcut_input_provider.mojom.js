// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/common/mojom/shortcut_input_provider.mojom
// Module: ash.common.mojom

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
  onShortcutInputEventPressed(prerewritten_key_event, key_event) {
    return this.$.onShortcutInputEventPressed(prerewritten_key_event, key_event);
  }
  onShortcutInputEventReleased(prerewritten_key_event, key_event) {
    return this.$.onShortcutInputEventReleased(prerewritten_key_event, key_event);
  }
};

ash.common.mojom.ShortcutInputObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ShortcutInputObserver', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onShortcutInputEventPressed(prerewritten_key_event, key_event) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.common.mojom.ShortcutInputObserver_OnShortcutInputEventPressed_ParamsSpec,
      null,
      [prerewritten_key_event, key_event],
      false);
  }

  onShortcutInputEventReleased(prerewritten_key_event, key_event) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ShortcutInputObserver', [
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
             decoder.decodeStructInline(ash.common.mojom.ShortcutInputObserver_OnShortcutInputEventPressed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.common.mojom.ShortcutInputObserver_OnShortcutInputEventReleased_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.common.mojom.ShortcutInputObserver_OnShortcutInputEventPressed_ParamsSpec.$.structSpec);
          const result = this.impl.onShortcutInputEventPressed(params.prerewritten_key_event, params.key_event);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.common.mojom.ShortcutInputObserver_OnShortcutInputEventReleased_ParamsSpec.$.structSpec);
          const result = this.impl.onShortcutInputEventReleased(params.prerewritten_key_event, params.key_event);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.common.mojom.ShortcutInputObserverReceiver = ash.common.mojom.ShortcutInputObserverReceiver;

ash.common.mojom.ShortcutInputObserverPtr = ash.common.mojom.ShortcutInputObserverRemote;
ash.common.mojom.ShortcutInputObserverRequest = ash.common.mojom.ShortcutInputObserverPendingReceiver;


// Interface: ShortcutInputProvider
mojo.internal.Struct(
    ash.common.mojom.ShortcutInputProvider_StartObservingShortcutInput_ParamsSpec, 'ash.common.mojom.ShortcutInputProvider_StartObservingShortcutInput_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.common.mojom.ShortcutInputObserverRemote), null, false, 0, undefined),
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
  startObservingShortcutInput(observer) {
    return this.$.startObservingShortcutInput(observer);
  }
  stopObservingShortcutInput() {
    return this.$.stopObservingShortcutInput();
  }
};

ash.common.mojom.ShortcutInputProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ShortcutInputProvider', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  startObservingShortcutInput(observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.common.mojom.ShortcutInputProvider_StartObservingShortcutInput_ParamsSpec,
      null,
      [observer],
      false);
  }

  stopObservingShortcutInput() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ShortcutInputProvider', [
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
             decoder.decodeStructInline(ash.common.mojom.ShortcutInputProvider_StartObservingShortcutInput_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.common.mojom.ShortcutInputProvider_StopObservingShortcutInput_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.common.mojom.ShortcutInputProvider_StartObservingShortcutInput_ParamsSpec.$.structSpec);
          const result = this.impl.startObservingShortcutInput(params.observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.common.mojom.ShortcutInputProvider_StopObservingShortcutInput_ParamsSpec.$.structSpec);
          const result = this.impl.stopObservingShortcutInput();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.common.mojom.ShortcutInputProviderReceiver = ash.common.mojom.ShortcutInputProviderReceiver;

ash.common.mojom.ShortcutInputProviderPtr = ash.common.mojom.ShortcutInputProviderRemote;
ash.common.mojom.ShortcutInputProviderRequest = ash.common.mojom.ShortcutInputProviderPendingReceiver;

