// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/js/browser_command/browser_command.mojom
// Module: browser_command.mojom

'use strict';
(function() {
  const SHA256 = (s) => {
    const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
    const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
    const m = new TextEncoder().encode(s);
    const l = m.length;
    const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
    for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
    b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
    b[b.length - 1] = l * 8;
    for (let i = 0; i < b.length; i += 16) {
      let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
      const w = new Uint32Array(64);
      for (let j = 0; j < 64; j++) {
        if (j < 16) w[j] = b[i + j];
        else {
          const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
          const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
          w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
        }
        const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
        const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
        h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
      }
      h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
      h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
    }
    return h[0];
  };
  window.mojoScrambler = window.mojoScrambler || {
    getOrdinals: (ifaceName, methodSpecs) => {
      const params = new URLSearchParams(window.location.search);
      const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
      
      const seen = new Set();
      methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
      let i = 0;
      return methodSpecs.map((ms, idx) => {
        if (ms.explicit !== null) return ms.explicit;
        if (forceNoScramble) return idx;

        const ua = navigator.userAgent;
        const m = ua.match(/Chrome\/([\d.]+)/);
        const v = m ? m[1] : "145.0.7625.0";
        const p = v.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        
        while (true) {
          i++;
          const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
          const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
          if (!seen.has(ord)) {
            seen.add(ord);
            return ord;
          }
        }
      });
    }
  };
})();

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
    this.ordinals = window.mojoScrambler.getOrdinals('CommandHandlerFactory', [
      { explicit: null },
    ]);
  }

  createBrowserCommandHandler(handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CommandHandlerFactory', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CreateBrowserCommandHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(browser_command.mojom.CommandHandlerFactory_CreateBrowserCommandHandler_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateBrowserCommandHandler (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(browser_command.mojom.CommandHandlerFactory_CreateBrowserCommandHandler_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.createBrowserCommandHandler');
          const result = this.impl.createBrowserCommandHandler(params.handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
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
    this.ordinals = window.mojoScrambler.getOrdinals('CommandHandler', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  canExecuteCommand(command_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      browser_command.mojom.CommandHandler_CanExecuteCommand_ParamsSpec,
      browser_command.mojom.CommandHandler_CanExecuteCommand_ResponseParamsSpec,
      [command_id],
      false);
  }

  executeCommand(command_id, click_info) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CommandHandler', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CanExecuteCommand
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(browser_command.mojom.CommandHandler_CanExecuteCommand_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CanExecuteCommand (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ExecuteCommand
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(browser_command.mojom.CommandHandler_ExecuteCommand_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExecuteCommand (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(browser_command.mojom.CommandHandler_CanExecuteCommand_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.canExecuteCommand');
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(browser_command.mojom.CommandHandler_ExecuteCommand_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.executeCommand');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

browser_command.mojom.CommandHandlerReceiver = browser_command.mojom.CommandHandlerReceiver;

browser_command.mojom.CommandHandlerPtr = browser_command.mojom.CommandHandlerRemote;
browser_command.mojom.CommandHandlerRequest = browser_command.mojom.CommandHandlerPendingReceiver;

