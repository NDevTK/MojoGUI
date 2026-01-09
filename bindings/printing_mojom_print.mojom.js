// Auto-generated MojoJS binding
// Source: chromium_src/printing/mojom/print.mojom
// Module: printing.mojom

'use strict';

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};


// Enum: ColorModel
printing.mojom.ColorModel = {
  kUnknownColorModel: 0,
  kGray: 1,
  kColor: 2,
  kCMYK: 3,
  kCMY: 4,
  kKCMY: 5,
  kCMYPlusK: 6,
  kBlack: 7,
  kGrayscale: 8,
  kRGB: 9,
  kRGB16: 10,
  kRGBA: 11,
  kColorModeColor: 12,
  kColorModeMonochrome: 13,
  kHPColorColor: 14,
  kHPColorBlack: 15,
  kPrintoutModeNormal: 16,
  kPrintoutModeNormalGray: 17,
  kProcessColorModelCMYK: 18,
  kProcessColorModelGreyscale: 19,
  kProcessColorModelRGB: 20,
  kBrotherCUPSColor: 21,
  kBrotherCUPSMono: 22,
  kBrotherBRScript3Color: 23,
  kBrotherBRScript3Black: 24,
  kEpsonInkColor: 25,
  kEpsonInkMono: 26,
  kSharpARCModeCMColor: 27,
  kSharpARCModeCMBW: 28,
  kXeroxXRXColorAutomatic: 29,
  kXeroxXRXColorBW: 30,
  kCanonCNColorModeColor: 31,
  kCanonCNColorModeMono: 32,
  kCanonCNIJGrayScaleOne: 33,
  kCanonCNIJGrayScaleZero: 34,
  kKonicaMinoltaSelectColorColor: 35,
  kKonicaMinoltaSelectColorGrayscale: 36,
  kOkiOKControlColor: 37,
  kOkiOKControlGray: 38,
  kXeroxXROutputColorPrintAsColor: 39,
  kXeroxXROutputColorPrintAsGrayscale: 40,
  kHpPjlColorAsGrayNo: 41,
  kHpPjlColorAsGrayYes: 42,
};
printing.mojom.ColorModelSpec = { $: mojo.internal.Enum() };

// Enum: Quality
printing.mojom.Quality = {
  kUnknownQuality: 0,
  kDraft: 1,
  kNormal: 2,
  kHigh: 3,
};
printing.mojom.QualitySpec = { $: mojo.internal.Enum() };

// Enum: DuplexMode
printing.mojom.DuplexMode = {
  kUnknownDuplexMode: 0,
  kSimplex: 1,
  kLongEdge: 2,
  kShortEdge: 3,
};
printing.mojom.DuplexModeSpec = { $: mojo.internal.Enum() };

// Enum: PrintScalingType
printing.mojom.PrintScalingType = {
  kUnknownPrintScalingType: 0,
  kAuto: 1,
  kAutoFit: 2,
  kFit: 3,
  kFill: 4,
  kNone: 5,
};
printing.mojom.PrintScalingTypeSpec = { $: mojo.internal.Enum() };

// Enum: PageOrientation
printing.mojom.PageOrientation = {
  kUpright: 0,
  kRotateLeft: 1,
  kRotateRight: 2,
};
printing.mojom.PageOrientationSpec = { $: mojo.internal.Enum() };

// Enum: PrintScalingOption
printing.mojom.PrintScalingOption = {
  kNone: 0,
  kFitToPrintableArea: 1,
  kSourceSize: 2,
  kFitToPaper: 3,
  kCenterShrinkToFitPaper: 4,
};
printing.mojom.PrintScalingOptionSpec = { $: mojo.internal.Enum() };

// Enum: SkiaDocumentType
printing.mojom.SkiaDocumentType = {
  kPDF: 0,
  kMSKP: 1,
};
printing.mojom.SkiaDocumentTypeSpec = { $: mojo.internal.Enum() };

// Enum: MetafileDataType
printing.mojom.MetafileDataType = {
  kPDF: 0,
};
printing.mojom.MetafileDataTypeSpec = { $: mojo.internal.Enum() };

// Enum: GenerateDocumentOutline
printing.mojom.GenerateDocumentOutline = {
  kNone: 0,
  kFromAccessibilityTreeHeaders: 1,
};
printing.mojom.GenerateDocumentOutlineSpec = { $: mojo.internal.Enum() };

// Enum: MarginType
printing.mojom.MarginType = {
  kDefaultMargins: 0,
  kNoMargins: 1,
  kPrintableAreaMargins: 2,
  kCustomMargins: 3,
};
printing.mojom.MarginTypeSpec = { $: mojo.internal.Enum() };

// Enum: ColorModeRestriction
printing.mojom.ColorModeRestriction = {
  kUnset: 0,
  kMonochrome: 1,
  kColor: 2,
};
printing.mojom.ColorModeRestrictionSpec = { $: mojo.internal.Enum() };

// Enum: DuplexModeRestriction
printing.mojom.DuplexModeRestriction = {
  kUnset: 0,
  kSimplex: 1,
  kLongEdge: 2,
  kShortEdge: 3,
  kDuplex: 4,
};
printing.mojom.DuplexModeRestrictionSpec = { $: mojo.internal.Enum() };

// Enum: PinModeRestriction
printing.mojom.PinModeRestriction = {
  kUnset: 0,
  kPin: 1,
  kNoPin: 2,
};
printing.mojom.PinModeRestrictionSpec = { $: mojo.internal.Enum() };

// Enum: ResultCode
printing.mojom.ResultCode = {
  kSuccess: 0,
  kFailed: 1,
  kAccessDenied: 2,
  kCanceled: 3,
};
printing.mojom.ResultCodeSpec = { $: mojo.internal.Enum() };

// Enum: PrinterType
printing.mojom.PrinterType = {
  kExtension: 0,
  kPdf: 1,
  kLocal: 2,
};
printing.mojom.PrinterTypeSpec = { $: mojo.internal.Enum() };

// Enum: PrinterLanguageType
printing.mojom.PrinterLanguageType = {
  kNone: 0,
  kTextOnly: 1,
  kXps: 2,
  kPostscriptLevel2: 3,
  kPostscriptLevel3: 4,
};
printing.mojom.PrinterLanguageTypeSpec = { $: mojo.internal.Enum() };

// Enum: ClientType
printing.mojom.ClientType = {
  kApplication: 0,
  kOperatingSystem: 1,
  kDriver: 2,
  kOther: 3,
};
printing.mojom.ClientTypeSpec = { $: mojo.internal.Enum() };

// Struct: PageSizeMargins
printing.mojom.PageSizeMarginsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PageSizeMargins',
      packedSize: 56,
      fields: [
        { name: 'content_width', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'content_height', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'margin_top', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'margin_right', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'margin_bottom', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'margin_left', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: PageRange
printing.mojom.PageRangeSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PageRange',
      packedSize: 16,
      fields: [
        { name: 'from', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'to', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: IppClientInfo
printing.mojom.IppClientInfoSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.IppClientInfo',
      packedSize: 16,
      fields: [
        { name: 'kApplication', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
