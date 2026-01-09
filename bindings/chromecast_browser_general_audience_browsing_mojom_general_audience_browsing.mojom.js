// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/browser/general_audience_browsing/mojom/general_audience_browsing.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};


// Interface: GeneralAudienceBrowsingAPIKeyObserver
chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserver';
  }

  onGeneralAudienceBrowsingAPIKeyChanged(api_key) {
    // Method: OnGeneralAudienceBrowsingAPIKeyChanged
    // Call: OnGeneralAudienceBrowsingAPIKeyChanged(api_key)
  }

};

chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: GeneralAudienceBrowsingAPIKeySubject
chromecast.mojom.GeneralAudienceBrowsingAPIKeySubjectPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromecast.mojom.GeneralAudienceBrowsingAPIKeySubject';
  }

  addGeneralAudienceBrowsingAPIKeyObserver(observer) {
    // Method: AddGeneralAudienceBrowsingAPIKeyObserver
    // Call: AddGeneralAudienceBrowsingAPIKeyObserver(observer)
  }

};

chromecast.mojom.GeneralAudienceBrowsingAPIKeySubjectRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
