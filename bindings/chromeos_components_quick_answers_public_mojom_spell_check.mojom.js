// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/quick_answers/public/mojom/spell_check.mojom
// Module: quick_answers.mojom

'use strict';

// Module namespace
var quick_answers = quick_answers || {};
quick_answers.mojom = quick_answers.mojom || {};
var mojo_base = mojo_base || {};
var sandbox = sandbox || {};

quick_answers.mojom.SpellCheckService = {};
quick_answers.mojom.SpellCheckService.$interfaceName = 'quick_answers.mojom.SpellCheckService';
quick_answers.mojom.SpellCheckService_CreateDictionary_ParamsSpec = { $: {} };
quick_answers.mojom.SpellCheckService_CreateDictionary_ResponseParamsSpec = { $: {} };
quick_answers.mojom.SpellCheckDictionary = {};
quick_answers.mojom.SpellCheckDictionary.$interfaceName = 'quick_answers.mojom.SpellCheckDictionary';
quick_answers.mojom.SpellCheckDictionary_CheckSpelling_ParamsSpec = { $: {} };
quick_answers.mojom.SpellCheckDictionary_CheckSpelling_ResponseParamsSpec = { $: {} };

// Interface: SpellCheckService
mojo.internal.Struct(
    quick_answers.mojom.SpellCheckService_CreateDictionary_ParamsSpec, 'quick_answers.mojom.SpellCheckService_CreateDictionary_Params', [
      mojo.internal.StructField('dictionary_file', 0, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    quick_answers.mojom.SpellCheckService_CreateDictionary_ResponseParamsSpec, 'quick_answers.mojom.SpellCheckService_CreateDictionary_ResponseParams', [
      mojo.internal.StructField('dictionary', 0, 0, mojo.internal.InterfaceProxy(quick_answers.mojom.SpellCheckDictionarySpec), null, true, 0, undefined),
    ],
    [[0, 16]]);

quick_answers.mojom.SpellCheckServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

quick_answers.mojom.SpellCheckServiceRemote = class {
  static get $interfaceName() {
    return 'quick_answers.mojom.SpellCheckService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      quick_answers.mojom.SpellCheckServicePendingReceiver,
      handle);
    this.$ = new quick_answers.mojom.SpellCheckServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

quick_answers.mojom.SpellCheckServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createDictionary(dictionary_file) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      quick_answers.mojom.SpellCheckService_CreateDictionary_ParamsSpec,
      quick_answers.mojom.SpellCheckService_CreateDictionary_ResponseParamsSpec,
      [dictionary_file],
      false);
  }

};

quick_answers.mojom.SpellCheckService.getRemote = function() {
  let remote = new quick_answers.mojom.SpellCheckServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'quick_answers.mojom.SpellCheckService',
    'context');
  return remote.$;
};

quick_answers.mojom.SpellCheckServiceReceiver = class {
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
          const params = quick_answers.mojom.SpellCheckService_CreateDictionary_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createDictionary(params.dictionary_file);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, quick_answers.mojom.SpellCheckService_CreateDictionary_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

quick_answers.mojom.SpellCheckServiceReceiver = quick_answers.mojom.SpellCheckServiceReceiver;

quick_answers.mojom.SpellCheckServicePtr = quick_answers.mojom.SpellCheckServiceRemote;
quick_answers.mojom.SpellCheckServiceRequest = quick_answers.mojom.SpellCheckServicePendingReceiver;


// Interface: SpellCheckDictionary
mojo.internal.Struct(
    quick_answers.mojom.SpellCheckDictionary_CheckSpelling_ParamsSpec, 'quick_answers.mojom.SpellCheckDictionary_CheckSpelling_Params', [
      mojo.internal.StructField('word', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    quick_answers.mojom.SpellCheckDictionary_CheckSpelling_ResponseParamsSpec, 'quick_answers.mojom.SpellCheckDictionary_CheckSpelling_ResponseParams', [
      mojo.internal.StructField('correctness', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

quick_answers.mojom.SpellCheckDictionaryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

quick_answers.mojom.SpellCheckDictionaryRemote = class {
  static get $interfaceName() {
    return 'quick_answers.mojom.SpellCheckDictionary';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      quick_answers.mojom.SpellCheckDictionaryPendingReceiver,
      handle);
    this.$ = new quick_answers.mojom.SpellCheckDictionaryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

quick_answers.mojom.SpellCheckDictionaryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  checkSpelling(word) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      quick_answers.mojom.SpellCheckDictionary_CheckSpelling_ParamsSpec,
      quick_answers.mojom.SpellCheckDictionary_CheckSpelling_ResponseParamsSpec,
      [word],
      false);
  }

};

quick_answers.mojom.SpellCheckDictionary.getRemote = function() {
  let remote = new quick_answers.mojom.SpellCheckDictionaryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'quick_answers.mojom.SpellCheckDictionary',
    'context');
  return remote.$;
};

quick_answers.mojom.SpellCheckDictionaryReceiver = class {
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
          const params = quick_answers.mojom.SpellCheckDictionary_CheckSpelling_ParamsSpec.$.decode(message.payload);
          const result = this.impl.checkSpelling(params.word);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, quick_answers.mojom.SpellCheckDictionary_CheckSpelling_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

quick_answers.mojom.SpellCheckDictionaryReceiver = quick_answers.mojom.SpellCheckDictionaryReceiver;

quick_answers.mojom.SpellCheckDictionaryPtr = quick_answers.mojom.SpellCheckDictionaryRemote;
quick_answers.mojom.SpellCheckDictionaryRequest = quick_answers.mojom.SpellCheckDictionaryPendingReceiver;

