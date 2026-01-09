// Auto-generated MojoJS binding
// Source: chromium_src/chrome/enterprise_companion/mojom/enterprise_companion.mojom
// Module: enterprise_companion.mojom

'use strict';

// Module namespace
var enterprise_companion = enterprise_companion || {};
enterprise_companion.mojom = enterprise_companion.mojom || {};


// Interface: EnterpriseCompanion
enterprise_companion.mojom.EnterpriseCompanionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

enterprise_companion.mojom.EnterpriseCompanionRemote = class {
  static get $interfaceName() {
    return 'enterprise_companion.mojom.EnterpriseCompanion';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      enterprise_companion.mojom.EnterpriseCompanionPendingReceiver,
      handle);
    this.$ = new enterprise_companion.mojom.EnterpriseCompanionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

enterprise_companion.mojom.EnterpriseCompanionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

enterprise_companion.mojom.EnterpriseCompanion.getRemote = function() {
  let remote = new enterprise_companion.mojom.EnterpriseCompanionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'enterprise_companion.mojom.EnterpriseCompanion',
    'context');
  return remote.$;
};

// Legacy compatibility
enterprise_companion.mojom.EnterpriseCompanionPtr = enterprise_companion.mojom.EnterpriseCompanionRemote;
enterprise_companion.mojom.EnterpriseCompanionRequest = enterprise_companion.mojom.EnterpriseCompanionPendingReceiver;

