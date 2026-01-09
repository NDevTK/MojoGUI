// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/js/browser_command/browser_command.mojom
// Module: browser_command.mojom

'use strict';

// Module namespace
var browser_command = browser_command || {};
browser_command.mojom = browser_command.mojom || {};


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
  kOpenGlicSettings: 15,
  kPrewarmGlicFre: 16,
  kOpenSplitView: 17,
  kOpenAutofillSettings: 18,
};

// Struct: ClickInfo
browser_command.mojom.ClickInfo = class {
  constructor(values = {}) {
    this.shift_key = values.shift_key !== undefined ? values.shift_key : false;
  }
};

// Interface: CommandHandlerFactory
browser_command.mojom.CommandHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'browser_command.mojom.CommandHandlerFactory';
  }

  createBrowserCommandHandler(handler) {
    // Method: CreateBrowserCommandHandler
    // Call: CreateBrowserCommandHandler(handler)
  }

};

browser_command.mojom.CommandHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CommandHandler
browser_command.mojom.CommandHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'browser_command.mojom.CommandHandler';
  }

  canExecuteCommand(command_id) {
    // Method: CanExecuteCommand
    return new Promise((resolve) => {
      // Call: CanExecuteCommand(command_id)
      resolve({});
    });
  }

  executeCommand(command_id, click_info) {
    // Method: ExecuteCommand
    return new Promise((resolve) => {
      // Call: ExecuteCommand(command_id, click_info)
      resolve({});
    });
  }

};

browser_command.mojom.CommandHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
