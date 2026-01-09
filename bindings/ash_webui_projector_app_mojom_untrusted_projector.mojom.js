// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/projector_app/mojom/untrusted_projector.mojom
// Module: ash.projector.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.projector = ash.projector || {};
ash.projector.mojom = ash.projector.mojom || {};


// Interface: UntrustedProjectorPageHandler
ash.projector.mojom.UntrustedProjectorPageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.projector.mojom.UntrustedProjectorPageHandler';
  }

  getNewScreencastPrecondition() {
    // Method: GetNewScreencastPrecondition
    return new Promise((resolve) => {
      // Call: GetNewScreencastPrecondition()
      resolve({});
    });
  }

  shouldDownloadSoda() {
    // Method: ShouldDownloadSoda
    return new Promise((resolve) => {
      // Call: ShouldDownloadSoda()
      resolve({});
    });
  }

  installSoda() {
    // Method: InstallSoda
    return new Promise((resolve) => {
      // Call: InstallSoda()
      resolve({});
    });
  }

  getPendingScreencasts() {
    // Method: GetPendingScreencasts
    return new Promise((resolve) => {
      // Call: GetPendingScreencasts()
      resolve({});
    });
  }

  getUserPref(pref) {
    // Method: GetUserPref
    return new Promise((resolve) => {
      // Call: GetUserPref(pref)
      resolve({});
    });
  }

  setUserPref(pref, value) {
    // Method: SetUserPref
    // Call: SetUserPref(pref, value)
  }

  openFeedbackDialog() {
    // Method: OpenFeedbackDialog
    // Call: OpenFeedbackDialog()
  }

  startProjectorSession(storage_dir_name) {
    // Method: StartProjectorSession
    return new Promise((resolve) => {
      // Call: StartProjectorSession(storage_dir_name)
      resolve({});
    });
  }

  sendXhr(url, method, request_body, use_credentials, use_api_key, headers, account_email) {
    // Method: SendXhr
    return new Promise((resolve) => {
      // Call: SendXhr(url, method, request_body, use_credentials, use_api_key, headers, account_email)
      resolve({});
    });
  }

  accounts(and) {
    // Method: accounts
    // Call: accounts(and)
  }

  getAccounts() {
    // Method: GetAccounts
    return new Promise((resolve) => {
      // Call: GetAccounts()
      resolve({});
    });
  }

  getVideo(video_file_id, resource_key) {
    // Method: GetVideo
    return new Promise((resolve) => {
      // Call: GetVideo(video_file_id, resource_key)
      resolve({});
    });
  }

};

ash.projector.mojom.UntrustedProjectorPageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: UntrustedProjectorPage
ash.projector.mojom.UntrustedProjectorPagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.projector.mojom.UntrustedProjectorPage';
  }

  onNewScreencastPreconditionChanged(precondition) {
    // Method: OnNewScreencastPreconditionChanged
    // Call: OnNewScreencastPreconditionChanged(precondition)
  }

  onSodaInstallProgressUpdated(progress) {
    // Method: OnSodaInstallProgressUpdated
    // Call: OnSodaInstallProgressUpdated(progress)
  }

  onSodaInstalled() {
    // Method: OnSodaInstalled
    // Call: OnSodaInstalled()
  }

  onSodaInstallError() {
    // Method: OnSodaInstallError
    // Call: OnSodaInstallError()
  }

  onScreencastsStateChange(pending_screencasts) {
    // Method: OnScreencastsStateChange
    // Call: OnScreencastsStateChange(pending_screencasts)
  }

};

ash.projector.mojom.UntrustedProjectorPageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: UntrustedProjectorPageHandlerFactory
ash.projector.mojom.UntrustedProjectorPageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.projector.mojom.UntrustedProjectorPageHandlerFactory';
  }

  create(handler, page) {
    // Method: Create
    // Call: Create(handler, page)
  }

};

ash.projector.mojom.UntrustedProjectorPageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
