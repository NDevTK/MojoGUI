// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/common/mojom/sea_pen.mojom
// Module: ash.personalization_app.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.personalization_app = ash.personalization_app || {};
ash.personalization_app.mojom = ash.personalization_app.mojom || {};


// Enum: MantaStatusCode
ash.personalization_app.mojom.MantaStatusCode = {
};

// Struct: SeaPenThumbnail
ash.personalization_app.mojom.SeaPenThumbnail = class {
  constructor(values = {}) {
    this.id = values.id !== undefined ? values.id : 0;
  }
};

// Struct: SeaPenUserVisibleQuery
ash.personalization_app.mojom.SeaPenUserVisibleQuery = class {
  constructor(values = {}) {
    this.template_title = values.template_title !== undefined ? values.template_title : "";
  }
};

// Struct: SeaPenTemplateQuery
ash.personalization_app.mojom.SeaPenTemplateQuery = class {
  constructor(values = {}) {
    this.options = values.options !== undefined ? values.options : {};
    this.user_visible_query = values.user_visible_query !== undefined ? values.user_visible_query : null;
  }
};

// Struct: SeaPenFeedbackMetadata
ash.personalization_app.mojom.SeaPenFeedbackMetadata = class {
  constructor(values = {}) {
    this.generation_seed = values.generation_seed !== undefined ? values.generation_seed : 0;
  }
};

// Struct: RecentSeaPenImageInfo
ash.personalization_app.mojom.RecentSeaPenImageInfo = class {
  constructor(values = {}) {
    this.query = values.query !== undefined ? values.query : null;
    this.creation_time = values.creation_time !== undefined ? values.creation_time : 0;
  }
};

// Struct: RecentSeaPenThumbnailData
ash.personalization_app.mojom.RecentSeaPenThumbnailData = class {
  constructor(values = {}) {
    this.image_info = values.image_info !== undefined ? values.image_info : null;
  }
};

// Struct: TextQueryHistoryEntry
ash.personalization_app.mojom.TextQueryHistoryEntry = class {
  constructor(values = {}) {
    this.thumbnails = values.thumbnails !== undefined ? values.thumbnails : "";
  }
};

// Interface: SeaPenObserver
ash.personalization_app.mojom.SeaPenObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.personalization_app.mojom.SeaPenObserver';
  }

  onSelectedSeaPenImageChanged(id) {
    // Method: OnSelectedSeaPenImageChanged
    // Call: OnSelectedSeaPenImageChanged(id)
  }

  onTextQueryHistoryChanged(entries) {
    // Method: OnTextQueryHistoryChanged
    // Call: OnTextQueryHistoryChanged(entries)
  }

};

ash.personalization_app.mojom.SeaPenObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SeaPenProvider
ash.personalization_app.mojom.SeaPenProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.personalization_app.mojom.SeaPenProvider';
  }

  setSeaPenObserver(observer) {
    // Method: SetSeaPenObserver
    // Call: SetSeaPenObserver(observer)
  }

  getSeaPenThumbnails(query) {
    // Method: GetSeaPenThumbnails
    return new Promise((resolve) => {
      // Call: GetSeaPenThumbnails(query)
      resolve({});
    });
  }

  selectSeaPenThumbnail(id, preview_mode) {
    // Method: SelectSeaPenThumbnail
    return new Promise((resolve) => {
      // Call: SelectSeaPenThumbnail(id, preview_mode)
      resolve({});
    });
  }

  getRecentSeaPenImageIds() {
    // Method: GetRecentSeaPenImageIds
    return new Promise((resolve) => {
      // Call: GetRecentSeaPenImageIds()
      resolve({});
    });
  }

  selectRecentSeaPenImage(id, preview_mode) {
    // Method: SelectRecentSeaPenImage
    return new Promise((resolve) => {
      // Call: SelectRecentSeaPenImage(id, preview_mode)
      resolve({});
    });
  }

  getRecentSeaPenImageThumbnail(id) {
    // Method: GetRecentSeaPenImageThumbnail
    return new Promise((resolve) => {
      // Call: GetRecentSeaPenImageThumbnail(id)
      resolve({});
    });
  }

  deleteRecentSeaPenImage(id) {
    // Method: DeleteRecentSeaPenImage
    return new Promise((resolve) => {
      // Call: DeleteRecentSeaPenImage(id)
      resolve({});
    });
  }

  openFeedbackDialog(metadata) {
    // Method: OpenFeedbackDialog
    // Call: OpenFeedbackDialog(metadata)
  }

  shouldShowSeaPenIntroductionDialog() {
    // Method: ShouldShowSeaPenIntroductionDialog
    return new Promise((resolve) => {
      // Call: ShouldShowSeaPenIntroductionDialog()
      resolve({});
    });
  }

  handleSeaPenIntroductionDialogClosed() {
    // Method: HandleSeaPenIntroductionDialogClosed
    // Call: HandleSeaPenIntroductionDialogClosed()
  }

  shouldShowSeaPenFreeformIntroductionDialog() {
    // Method: ShouldShowSeaPenFreeformIntroductionDialog
    return new Promise((resolve) => {
      // Call: ShouldShowSeaPenFreeformIntroductionDialog()
      resolve({});
    });
  }

  handleSeaPenFreeformIntroductionDialogClosed() {
    // Method: HandleSeaPenFreeformIntroductionDialogClosed
    // Call: HandleSeaPenFreeformIntroductionDialogClosed()
  }

  isInTabletMode() {
    // Method: IsInTabletMode
    return new Promise((resolve) => {
      // Call: IsInTabletMode()
      resolve({});
    });
  }

  makeTransparent() {
    // Method: MakeTransparent
    // Call: MakeTransparent()
  }

};

ash.personalization_app.mojom.SeaPenProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
