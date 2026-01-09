// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/js/browser_command/browser_command.mojom
// Module: browser_command.mojom

'use strict';

// Module namespace
var browser_command = browser_command || {};
browser_command.mojom = browser_command.mojom || {};


// Enum: Command
browser_command.mojom.Command = {
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
