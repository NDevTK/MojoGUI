// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/quick_answers/public/mojom/spell_check.mojom
// Module: quick_answers.mojom

'use strict';

// Module namespace
var quick_answers = quick_answers || {};
quick_answers.mojom = quick_answers.mojom || {};


// Interface: SpellCheckService
quick_answers.mojom.SpellCheckService = {};

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
      quick_answers.mojom.SpellCheckService_CreateDictionary_ResponseParamsSpec,
      [dictionary_file],
      undefined,
      undefined
    );
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

// ParamsSpec for CreateDictionary
quick_answers.mojom.SpellCheckService_CreateDictionary_ParamsSpec = {
  $: {
    structSpec: {
      name: 'quick_answers.mojom.SpellCheckService.CreateDictionary_Params',
      packedSize: 16,
      fields: [
        { name: 'dictionary_file', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

quick_answers.mojom.SpellCheckService_CreateDictionary_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'quick_answers.mojom.SpellCheckService.CreateDictionary_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'dictionary', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
quick_answers.mojom.SpellCheckServicePtr = quick_answers.mojom.SpellCheckServiceRemote;
quick_answers.mojom.SpellCheckServiceRequest = quick_answers.mojom.SpellCheckServicePendingReceiver;


// Interface: SpellCheckDictionary
quick_answers.mojom.SpellCheckDictionary = {};

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
      quick_answers.mojom.SpellCheckDictionary_CheckSpelling_ResponseParamsSpec,
      [word],
      undefined,
      undefined
    );
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

// ParamsSpec for CheckSpelling
quick_answers.mojom.SpellCheckDictionary_CheckSpelling_ParamsSpec = {
  $: {
    structSpec: {
      name: 'quick_answers.mojom.SpellCheckDictionary.CheckSpelling_Params',
      packedSize: 16,
      fields: [
        { name: 'word', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

quick_answers.mojom.SpellCheckDictionary_CheckSpelling_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'quick_answers.mojom.SpellCheckDictionary.CheckSpelling_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'correctness', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
quick_answers.mojom.SpellCheckDictionaryPtr = quick_answers.mojom.SpellCheckDictionaryRemote;
quick_answers.mojom.SpellCheckDictionaryRequest = quick_answers.mojom.SpellCheckDictionaryPendingReceiver;

