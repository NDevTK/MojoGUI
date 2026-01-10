// Auto-generated MojoJS binding
// Source: chromium_src/content/web_test/common/fake_bluetooth_chooser.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};
var url = url || {};


// Enum: ChooserEventType
content.mojom.mojom.ChooserEventType = {
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
content.mojom.mojom.ChooserEventTypeSpec = { $: mojo.internal.Enum() };

// Struct: FakeBluetoothChooserEvent
content.mojom.mojom.FakeBluetoothChooserEventSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FakeBluetoothChooserEvent',
      packedSize: 32,
      fields: [
        { name: 'type', packedOffset: 16, packedBitOffset: 0, type: content.mojom.ChooserEventTypeSpec, nullable: false, minVersion: 0 },
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: true, minVersion: 0 },
        { name: 'peripheral_address', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: FakeBluetoothChooser
content.mojom.mojom.FakeBluetoothChooser = {};

content.mojom.mojom.FakeBluetoothChooserPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.mojom.FakeBluetoothChooserRemote = class {
  static get $interfaceName() {
    return 'content.mojom.FakeBluetoothChooser';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.mojom.FakeBluetoothChooserPendingReceiver,
      handle);
    this.$ = new content.mojom.mojom.FakeBluetoothChooserRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.mojom.FakeBluetoothChooserRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  selectPeripheral(peripheral_address) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.mojom.FakeBluetoothChooser_SelectPeripheral_ParamsSpec,
      null,
      [peripheral_address]);
  }

  cancel() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.mojom.FakeBluetoothChooser_Cancel_ParamsSpec,
      null,
      []);
  }

  rescan() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content.mojom.mojom.FakeBluetoothChooser_Rescan_ParamsSpec,
      null,
      []);
  }

};

content.mojom.mojom.FakeBluetoothChooser.getRemote = function() {
  let remote = new content.mojom.mojom.FakeBluetoothChooserRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.FakeBluetoothChooser',
    'context');
  return remote.$;
};

// ParamsSpec for SelectPeripheral
content.mojom.mojom.FakeBluetoothChooser_SelectPeripheral_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FakeBluetoothChooser.SelectPeripheral_Params',
      packedSize: 16,
      fields: [
        { name: 'peripheral_address', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Cancel
content.mojom.mojom.FakeBluetoothChooser_Cancel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FakeBluetoothChooser.Cancel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Rescan
content.mojom.mojom.FakeBluetoothChooser_Rescan_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FakeBluetoothChooser.Rescan_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
content.mojom.mojom.FakeBluetoothChooserPtr = content.mojom.mojom.FakeBluetoothChooserRemote;
content.mojom.mojom.FakeBluetoothChooserRequest = content.mojom.mojom.FakeBluetoothChooserPendingReceiver;


// Interface: FakeBluetoothChooserFactory
content.mojom.mojom.FakeBluetoothChooserFactory = {};

content.mojom.mojom.FakeBluetoothChooserFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.mojom.FakeBluetoothChooserFactoryRemote = class {
  static get $interfaceName() {
    return 'content.mojom.FakeBluetoothChooserFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.mojom.FakeBluetoothChooserFactoryPendingReceiver,
      handle);
    this.$ = new content.mojom.mojom.FakeBluetoothChooserFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.mojom.FakeBluetoothChooserFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createFakeBluetoothChooser(fake_chooser, client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.mojom.FakeBluetoothChooserFactory_CreateFakeBluetoothChooser_ParamsSpec,
      null,
      [fake_chooser, client]);
  }

};

content.mojom.mojom.FakeBluetoothChooserFactory.getRemote = function() {
  let remote = new content.mojom.mojom.FakeBluetoothChooserFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.FakeBluetoothChooserFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateFakeBluetoothChooser
content.mojom.mojom.FakeBluetoothChooserFactory_CreateFakeBluetoothChooser_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FakeBluetoothChooserFactory.CreateFakeBluetoothChooser_Params',
      packedSize: 24,
      fields: [
        { name: 'fake_chooser', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(content.mojom.FakeBluetoothChooserRemote), nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(content.mojom.FakeBluetoothChooserClientRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
content.mojom.mojom.FakeBluetoothChooserFactoryPtr = content.mojom.mojom.FakeBluetoothChooserFactoryRemote;
content.mojom.mojom.FakeBluetoothChooserFactoryRequest = content.mojom.mojom.FakeBluetoothChooserFactoryPendingReceiver;


// Interface: FakeBluetoothChooserClient
content.mojom.mojom.FakeBluetoothChooserClient = {};

content.mojom.mojom.FakeBluetoothChooserClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.mojom.FakeBluetoothChooserClientRemote = class {
  static get $interfaceName() {
    return 'content.mojom.FakeBluetoothChooserClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.mojom.FakeBluetoothChooserClientPendingReceiver,
      handle);
    this.$ = new content.mojom.mojom.FakeBluetoothChooserClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.mojom.FakeBluetoothChooserClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onEvent(event) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.mojom.FakeBluetoothChooserClient_OnEvent_ParamsSpec,
      null,
      [event]);
  }

};

content.mojom.mojom.FakeBluetoothChooserClient.getRemote = function() {
  let remote = new content.mojom.mojom.FakeBluetoothChooserClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.FakeBluetoothChooserClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnEvent
content.mojom.mojom.FakeBluetoothChooserClient_OnEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FakeBluetoothChooserClient.OnEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: content.mojom.FakeBluetoothChooserEventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
content.mojom.mojom.FakeBluetoothChooserClientPtr = content.mojom.mojom.FakeBluetoothChooserClientRemote;
content.mojom.mojom.FakeBluetoothChooserClientRequest = content.mojom.mojom.FakeBluetoothChooserClientPendingReceiver;

