// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/js/browser_command/browser_command.mojom
// Module: browser_command.mojom

'use strict';

// Module namespace
var browser_command = browser_command || {};
browser_command.mojom = browser_command.mojom || {};


// Enum: Command
browser_command.mojom.mojom.Command = {
  kUnknownCommand: 0,
  kOpenSafetyCheck: 1,
  kOpenSafeBrowsingEnhancedProtectionSettings: 2,
  kOpenFeedbackForm: 3,
  kOpenPrivacyGuide: 4,
  kStartTabGroupTutorial: 5,
  kOpenPasswordManager: 6,
  kNoOpCommand: 7,
  kOpenPerformanceSettings: 8,
  kOpenNTPAndStartCustomizeChromeTutorial: 9,
  kStartPasswordManagerTutorial: 10,
  kStartSavedTabGroupTutorial: 11,
  kOpenAISettings: 12,
  kOpenSafetyCheckFromWhatsNew: 13,
  kOpenPaymentsSettings: 14,
  kOpenGlic: 15,
  kOpenGlicSettings: 16,
  kPrewarmGlicFre: 17,
  kOpenSplitView: 18,
  kOpenAutofillSettings: 19,
};
browser_command.mojom.mojom.CommandSpec = { $: mojo.internal.Enum() };

// Struct: ClickInfo
browser_command.mojom.mojom.ClickInfoSpec = {
  $: {
    structSpec: {
      name: 'browser_command.mojom.ClickInfo',
      packedSize: 16,
      fields: [
        { name: 'middle_button', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'alt_key', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'ctrl_key', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'meta_key', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'shift_key', packedOffset: 0, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: CommandHandlerFactory
browser_command.mojom.mojom.CommandHandlerFactory = {};

browser_command.mojom.mojom.CommandHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

browser_command.mojom.mojom.CommandHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'browser_command.mojom.CommandHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      browser_command.mojom.mojom.CommandHandlerFactoryPendingReceiver,
      handle);
    this.$ = new browser_command.mojom.mojom.CommandHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

browser_command.mojom.mojom.CommandHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createBrowserCommandHandler(handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      browser_command.mojom.mojom.CommandHandlerFactory_CreateBrowserCommandHandler_ParamsSpec,
      null,
      [handler]);
  }

};

browser_command.mojom.mojom.CommandHandlerFactory.getRemote = function() {
  let remote = new browser_command.mojom.mojom.CommandHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'browser_command.mojom.CommandHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateBrowserCommandHandler
browser_command.mojom.mojom.CommandHandlerFactory_CreateBrowserCommandHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'browser_command.mojom.CommandHandlerFactory.CreateBrowserCommandHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(browser_command.mojom.CommandHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
browser_command.mojom.mojom.CommandHandlerFactoryPtr = browser_command.mojom.mojom.CommandHandlerFactoryRemote;
browser_command.mojom.mojom.CommandHandlerFactoryRequest = browser_command.mojom.mojom.CommandHandlerFactoryPendingReceiver;


// Interface: CommandHandler
browser_command.mojom.mojom.CommandHandler = {};

browser_command.mojom.mojom.CommandHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

browser_command.mojom.mojom.CommandHandlerRemote = class {
  static get $interfaceName() {
    return 'browser_command.mojom.CommandHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      browser_command.mojom.mojom.CommandHandlerPendingReceiver,
      handle);
    this.$ = new browser_command.mojom.mojom.CommandHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

browser_command.mojom.mojom.CommandHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  canExecuteCommand(command_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      browser_command.mojom.mojom.CommandHandler_CanExecuteCommand_ParamsSpec,
      browser_command.mojom.mojom.CommandHandler_CanExecuteCommand_ResponseParamsSpec,
      [command_id]);
  }

  executeCommand(command_id, click_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      browser_command.mojom.mojom.CommandHandler_ExecuteCommand_ParamsSpec,
      browser_command.mojom.mojom.CommandHandler_ExecuteCommand_ResponseParamsSpec,
      [command_id, click_info]);
  }

};

browser_command.mojom.mojom.CommandHandler.getRemote = function() {
  let remote = new browser_command.mojom.mojom.CommandHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'browser_command.mojom.CommandHandler',
    'context');
  return remote.$;
};

// ParamsSpec for CanExecuteCommand
browser_command.mojom.mojom.CommandHandler_CanExecuteCommand_ParamsSpec = {
  $: {
    structSpec: {
      name: 'browser_command.mojom.CommandHandler.CanExecuteCommand_Params',
      packedSize: 16,
      fields: [
        { name: 'command_id', packedOffset: 0, packedBitOffset: 0, type: browser_command.mojom.CommandSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

browser_command.mojom.mojom.CommandHandler_CanExecuteCommand_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'browser_command.mojom.CommandHandler.CanExecuteCommand_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'can_execute', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ExecuteCommand
browser_command.mojom.mojom.CommandHandler_ExecuteCommand_ParamsSpec = {
  $: {
    structSpec: {
      name: 'browser_command.mojom.CommandHandler.ExecuteCommand_Params',
      packedSize: 24,
      fields: [
        { name: 'command_id', packedOffset: 8, packedBitOffset: 0, type: browser_command.mojom.CommandSpec, nullable: false, minVersion: 0 },
        { name: 'click_info', packedOffset: 0, packedBitOffset: 0, type: browser_command.mojom.ClickInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

browser_command.mojom.mojom.CommandHandler_ExecuteCommand_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'browser_command.mojom.CommandHandler.ExecuteCommand_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'command_executed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
browser_command.mojom.mojom.CommandHandlerPtr = browser_command.mojom.mojom.CommandHandlerRemote;
browser_command.mojom.mojom.CommandHandlerRequest = browser_command.mojom.mojom.CommandHandlerPendingReceiver;

