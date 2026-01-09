// Auto-generated MojoJS binding
// Source: chromium_src/content/web_test/common/fake_bluetooth_chooser.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


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

// Interface: FakeBluetoothChooser
content.mojom.FakeBluetoothChooser = {};

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
      [peripheral_address]);
  }

  cancel() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.FakeBluetoothChooser_Cancel_ParamsSpec,
      null,
      []);
  }

  rescan() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content.mojom.FakeBluetoothChooser_Rescan_ParamsSpec,
      null,
      []);
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

// ParamsSpec for SelectPeripheral
content.mojom.FakeBluetoothChooser_SelectPeripheral_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FakeBluetoothChooser.SelectPeripheral_Params',
      packedSize: 16,
      fields: [
        { name: 'peripheral_address', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Cancel
content.mojom.FakeBluetoothChooser_Cancel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FakeBluetoothChooser.Cancel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Rescan
content.mojom.FakeBluetoothChooser_Rescan_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FakeBluetoothChooser.Rescan_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
content.mojom.FakeBluetoothChooserPtr = content.mojom.FakeBluetoothChooserRemote;
content.mojom.FakeBluetoothChooserRequest = content.mojom.FakeBluetoothChooserPendingReceiver;


// Interface: FakeBluetoothChooserFactory
content.mojom.FakeBluetoothChooserFactory = {};

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
      null,
      [fake_chooser, client]);
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

// ParamsSpec for CreateFakeBluetoothChooser
content.mojom.FakeBluetoothChooserFactory_CreateFakeBluetoothChooser_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FakeBluetoothChooserFactory.CreateFakeBluetoothChooser_Params',
      packedSize: 24,
      fields: [
        { name: 'fake_chooser', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
content.mojom.FakeBluetoothChooserFactoryPtr = content.mojom.FakeBluetoothChooserFactoryRemote;
content.mojom.FakeBluetoothChooserFactoryRequest = content.mojom.FakeBluetoothChooserFactoryPendingReceiver;


// Interface: FakeBluetoothChooserClient
content.mojom.FakeBluetoothChooserClient = {};

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
      [event]);
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

// ParamsSpec for OnEvent
content.mojom.FakeBluetoothChooserClient_OnEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FakeBluetoothChooserClient.OnEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
content.mojom.FakeBluetoothChooserClientPtr = content.mojom.FakeBluetoothChooserClientRemote;
content.mojom.FakeBluetoothChooserClientRequest = content.mojom.FakeBluetoothChooserClientPendingReceiver;

