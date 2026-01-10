// Auto-generated MojoJS binding
// Source: chromium_src/content/web_test/common/fake_bluetooth_chooser.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};
var url = url || {};

content.mojom.ChooserEventTypeSpec = { $: mojo.internal.Enum() };
content.mojom.FakeBluetoothChooserEventSpec = { $: {} };
content.mojom.FakeBluetoothChooser = {};
content.mojom.FakeBluetoothChooser.$interfaceName = 'content.mojom.FakeBluetoothChooser';
content.mojom.FakeBluetoothChooser_SelectPeripheral_ParamsSpec = { $: {} };
content.mojom.FakeBluetoothChooser_Cancel_ParamsSpec = { $: {} };
content.mojom.FakeBluetoothChooser_Rescan_ParamsSpec = { $: {} };
content.mojom.FakeBluetoothChooserFactory = {};
content.mojom.FakeBluetoothChooserFactory.$interfaceName = 'content.mojom.FakeBluetoothChooserFactory';
content.mojom.FakeBluetoothChooserFactory_CreateFakeBluetoothChooser_ParamsSpec = { $: {} };
content.mojom.FakeBluetoothChooserFactory_CreateFakeBluetoothChooser_ResponseParamsSpec = { $: {} };
content.mojom.FakeBluetoothChooserClient = {};
content.mojom.FakeBluetoothChooserClient.$interfaceName = 'content.mojom.FakeBluetoothChooserClient';
content.mojom.FakeBluetoothChooserClient_OnEvent_ParamsSpec = { $: {} };

// Enum: ChooserEventType
content.mojom.ChooserEventType = {
  CHOOSER_OPENED: 0,
  CHOOSER_CLOSED: 1,
  ADAPTER_REMOVED: 2,
  ADAPTER_DISABLED: 3,
  ADAPTER_ENABLED: 4,
  DISCOVERY_FAILED_TO_START: 5,
  DISCOVERING: 6,
  DISCOVERY_IDLE: 7,
  ADD_OR_UPDATE_DEVICE: 8,
  UNAUTHORIZED: 9,
};

// Struct: FakeBluetoothChooserEvent
mojo.internal.Struct(
    content.mojom.FakeBluetoothChooserEventSpec, 'content.mojom.FakeBluetoothChooserEvent', [
      mojo.internal.StructField('type', 0, 0, content.mojom.ChooserEventTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('origin', 8, 0, url.mojom.OriginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('peripheral_address', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Interface: FakeBluetoothChooser
mojo.internal.Struct(
    content.mojom.FakeBluetoothChooser_SelectPeripheral_ParamsSpec, 'content.mojom.FakeBluetoothChooser_SelectPeripheral_Params', [
      mojo.internal.StructField('peripheral_address', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.FakeBluetoothChooser_Cancel_ParamsSpec, 'content.mojom.FakeBluetoothChooser_Cancel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.FakeBluetoothChooser_Rescan_ParamsSpec, 'content.mojom.FakeBluetoothChooser_Rescan_Params', [
    ],
    [[0, 8]]);

content.mojom.FakeBluetoothChooserPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.FakeBluetoothChooserRemote = class {
  static get $interfaceName() {
    return 'content.mojom.FakeBluetoothChooser';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.FakeBluetoothChooserPendingReceiver,
      handle);
    this.$ = new content.mojom.FakeBluetoothChooserRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.FakeBluetoothChooserRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  selectPeripheral(peripheral_address) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.FakeBluetoothChooser_SelectPeripheral_ParamsSpec,
      null,
      [peripheral_address],
      false);
  }

  cancel() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.FakeBluetoothChooser_Cancel_ParamsSpec,
      null,
      [],
      false);
  }

  rescan() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content.mojom.FakeBluetoothChooser_Rescan_ParamsSpec,
      null,
      [],
      false);
  }

};

content.mojom.FakeBluetoothChooser.getRemote = function() {
  let remote = new content.mojom.FakeBluetoothChooserRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.FakeBluetoothChooser',
    'context');
  return remote.$;
};

content.mojom.FakeBluetoothChooserReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = content.mojom.FakeBluetoothChooser_SelectPeripheral_ParamsSpec.$.decode(message.payload);
          const result = this.impl.selectPeripheral(params.peripheral_address);
          break;
        }
        case 1: {
          const params = content.mojom.FakeBluetoothChooser_Cancel_ParamsSpec.$.decode(message.payload);
          const result = this.impl.cancel();
          break;
        }
        case 2: {
          const params = content.mojom.FakeBluetoothChooser_Rescan_ParamsSpec.$.decode(message.payload);
          const result = this.impl.rescan();
          break;
        }
      }
    }});
  }
};

content.mojom.FakeBluetoothChooserReceiver = content.mojom.FakeBluetoothChooserReceiver;

content.mojom.FakeBluetoothChooserPtr = content.mojom.FakeBluetoothChooserRemote;
content.mojom.FakeBluetoothChooserRequest = content.mojom.FakeBluetoothChooserPendingReceiver;


// Interface: FakeBluetoothChooserFactory
mojo.internal.Struct(
    content.mojom.FakeBluetoothChooserFactory_CreateFakeBluetoothChooser_ParamsSpec, 'content.mojom.FakeBluetoothChooserFactory_CreateFakeBluetoothChooser_Params', [
      mojo.internal.StructField('fake_chooser', 0, 0, mojo.internal.InterfaceRequest(content.mojom.FakeBluetoothChooserSpec), null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.mojom.FakeBluetoothChooserFactory_CreateFakeBluetoothChooser_ResponseParamsSpec, 'content.mojom.FakeBluetoothChooserFactory_CreateFakeBluetoothChooser_ResponseParams', [
    ],
    [[0, 8]]);

content.mojom.FakeBluetoothChooserFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.FakeBluetoothChooserFactoryRemote = class {
  static get $interfaceName() {
    return 'content.mojom.FakeBluetoothChooserFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.FakeBluetoothChooserFactoryPendingReceiver,
      handle);
    this.$ = new content.mojom.FakeBluetoothChooserFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.FakeBluetoothChooserFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createFakeBluetoothChooser(fake_chooser, client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.FakeBluetoothChooserFactory_CreateFakeBluetoothChooser_ParamsSpec,
      content.mojom.FakeBluetoothChooserFactory_CreateFakeBluetoothChooser_ResponseParamsSpec,
      [fake_chooser, client],
      false);
  }

};

content.mojom.FakeBluetoothChooserFactory.getRemote = function() {
  let remote = new content.mojom.FakeBluetoothChooserFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.FakeBluetoothChooserFactory',
    'context');
  return remote.$;
};

content.mojom.FakeBluetoothChooserFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = content.mojom.FakeBluetoothChooserFactory_CreateFakeBluetoothChooser_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createFakeBluetoothChooser(params.fake_chooser, params.client);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.FakeBluetoothChooserFactory_CreateFakeBluetoothChooser_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

content.mojom.FakeBluetoothChooserFactoryReceiver = content.mojom.FakeBluetoothChooserFactoryReceiver;

content.mojom.FakeBluetoothChooserFactoryPtr = content.mojom.FakeBluetoothChooserFactoryRemote;
content.mojom.FakeBluetoothChooserFactoryRequest = content.mojom.FakeBluetoothChooserFactoryPendingReceiver;


// Interface: FakeBluetoothChooserClient
mojo.internal.Struct(
    content.mojom.FakeBluetoothChooserClient_OnEvent_ParamsSpec, 'content.mojom.FakeBluetoothChooserClient_OnEvent_Params', [
      mojo.internal.StructField('event', 0, 0, content.mojom.FakeBluetoothChooserEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

content.mojom.FakeBluetoothChooserClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.FakeBluetoothChooserClientRemote = class {
  static get $interfaceName() {
    return 'content.mojom.FakeBluetoothChooserClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.FakeBluetoothChooserClientPendingReceiver,
      handle);
    this.$ = new content.mojom.FakeBluetoothChooserClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.FakeBluetoothChooserClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onEvent(event) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.FakeBluetoothChooserClient_OnEvent_ParamsSpec,
      null,
      [event],
      false);
  }

};

content.mojom.FakeBluetoothChooserClient.getRemote = function() {
  let remote = new content.mojom.FakeBluetoothChooserClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.FakeBluetoothChooserClient',
    'context');
  return remote.$;
};

content.mojom.FakeBluetoothChooserClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = content.mojom.FakeBluetoothChooserClient_OnEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onEvent(params.event);
          break;
        }
      }
    }});
  }
};

content.mojom.FakeBluetoothChooserClientReceiver = content.mojom.FakeBluetoothChooserClientReceiver;

content.mojom.FakeBluetoothChooserClientPtr = content.mojom.FakeBluetoothChooserClientRemote;
content.mojom.FakeBluetoothChooserClientRequest = content.mojom.FakeBluetoothChooserClientPendingReceiver;

