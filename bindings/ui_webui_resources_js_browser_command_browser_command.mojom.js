// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/js/browser_command/browser_command.mojom
// Module: browser_command.mojom

'use strict';

// Module namespace
var browser_command = browser_command || {};
browser_command.mojom = browser_command.mojom || {};

browser_command.mojom.CommandSpec = { $: mojo.internal.Enum() };
browser_command.mojom.ClickInfoSpec = { $: {} };
browser_command.mojom.CommandHandlerFactory = {};
browser_command.mojom.CommandHandlerFactory.$interfaceName = 'browser_command.mojom.CommandHandlerFactory';
browser_command.mojom.CommandHandlerFactory_CreateBrowserCommandHandler_ParamsSpec = { $: {} };
browser_command.mojom.CommandHandler = {};
browser_command.mojom.CommandHandler.$interfaceName = 'browser_command.mojom.CommandHandler';
browser_command.mojom.CommandHandler_CanExecuteCommand_ParamsSpec = { $: {} };
browser_command.mojom.CommandHandler_CanExecuteCommand_ResponseParamsSpec = { $: {} };
browser_command.mojom.CommandHandler_ExecuteCommand_ParamsSpec = { $: {} };
browser_command.mojom.CommandHandler_ExecuteCommand_ResponseParamsSpec = { $: {} };

// Enum: Command
browser_command.mojom.Command = {
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
  kOpenGlic: 16,
  kOpenGlicSettings: 17,
  kPrewarmGlicFre: 18,
  kOpenSplitView: 19,
  kOpenAutofillSettings: 20,
};

// Struct: ClickInfo
mojo.internal.Struct(
    browser_command.mojom.ClickInfoSpec, 'browser_command.mojom.ClickInfo', [
      mojo.internal.StructField('middle_button', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('alt_key', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('ctrl_key', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('meta_key', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('shift_key', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: CommandHandlerFactory
mojo.internal.Struct(
    browser_command.mojom.CommandHandlerFactory_CreateBrowserCommandHandler_ParamsSpec, 'browser_command.mojom.CommandHandlerFactory_CreateBrowserCommandHandler_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(browser_command.mojom.CommandHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

browser_command.mojom.CommandHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

browser_command.mojom.CommandHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'browser_command.mojom.CommandHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      browser_command.mojom.CommandHandlerFactoryPendingReceiver,
      handle);
    this.$ = new browser_command.mojom.CommandHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

browser_command.mojom.CommandHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createBrowserCommandHandler(handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      browser_command.mojom.CommandHandlerFactory_CreateBrowserCommandHandler_ParamsSpec,
      null,
      [handler],
      false);
  }

};

browser_command.mojom.CommandHandlerFactory.getRemote = function() {
  let remote = new browser_command.mojom.CommandHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'browser_command.mojom.CommandHandlerFactory',
    'context');
  return remote.$;
};

browser_command.mojom.CommandHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = browser_command.mojom.CommandHandlerFactory_CreateBrowserCommandHandler_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createBrowserCommandHandler(params.handler);
          break;
        }
      }
    }});
  }
};

browser_command.mojom.CommandHandlerFactoryReceiver = browser_command.mojom.CommandHandlerFactoryReceiver;

browser_command.mojom.CommandHandlerFactoryPtr = browser_command.mojom.CommandHandlerFactoryRemote;
browser_command.mojom.CommandHandlerFactoryRequest = browser_command.mojom.CommandHandlerFactoryPendingReceiver;


// Interface: CommandHandler
mojo.internal.Struct(
    browser_command.mojom.CommandHandler_CanExecuteCommand_ParamsSpec, 'browser_command.mojom.CommandHandler_CanExecuteCommand_Params', [
      mojo.internal.StructField('command_id', 0, 0, browser_command.mojom.CommandSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    browser_command.mojom.CommandHandler_CanExecuteCommand_ResponseParamsSpec, 'browser_command.mojom.CommandHandler_CanExecuteCommand_ResponseParams', [
      mojo.internal.StructField('can_execute', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    browser_command.mojom.CommandHandler_ExecuteCommand_ParamsSpec, 'browser_command.mojom.CommandHandler_ExecuteCommand_Params', [
      mojo.internal.StructField('command_id', 0, 0, browser_command.mojom.CommandSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('click_info', 8, 0, browser_command.mojom.ClickInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    browser_command.mojom.CommandHandler_ExecuteCommand_ResponseParamsSpec, 'browser_command.mojom.CommandHandler_ExecuteCommand_ResponseParams', [
      mojo.internal.StructField('command_executed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

browser_command.mojom.CommandHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

browser_command.mojom.CommandHandlerRemote = class {
  static get $interfaceName() {
    return 'browser_command.mojom.CommandHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      browser_command.mojom.CommandHandlerPendingReceiver,
      handle);
    this.$ = new browser_command.mojom.CommandHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

browser_command.mojom.CommandHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  canExecuteCommand(command_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      browser_command.mojom.CommandHandler_CanExecuteCommand_ParamsSpec,
      browser_command.mojom.CommandHandler_CanExecuteCommand_ResponseParamsSpec,
      [command_id],
      false);
  }

  executeCommand(command_id, click_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      browser_command.mojom.CommandHandler_ExecuteCommand_ParamsSpec,
      browser_command.mojom.CommandHandler_ExecuteCommand_ResponseParamsSpec,
      [command_id, click_info],
      false);
  }

};

browser_command.mojom.CommandHandler.getRemote = function() {
  let remote = new browser_command.mojom.CommandHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'browser_command.mojom.CommandHandler',
    'context');
  return remote.$;
};

browser_command.mojom.CommandHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = browser_command.mojom.CommandHandler_CanExecuteCommand_ParamsSpec.$.decode(message.payload);
          const result = this.impl.canExecuteCommand(params.command_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, browser_command.mojom.CommandHandler_CanExecuteCommand_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = browser_command.mojom.CommandHandler_ExecuteCommand_ParamsSpec.$.decode(message.payload);
          const result = this.impl.executeCommand(params.command_id, params.click_info);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, browser_command.mojom.CommandHandler_ExecuteCommand_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

browser_command.mojom.CommandHandlerReceiver = browser_command.mojom.CommandHandlerReceiver;

browser_command.mojom.CommandHandlerPtr = browser_command.mojom.CommandHandlerRemote;
browser_command.mojom.CommandHandlerRequest = browser_command.mojom.CommandHandlerPendingReceiver;

