// Auto-generated MojoJS binding
// Source: chromium_src/printing/mojom/print.mojom
// Module: printing.mojom

'use strict';

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};

printing.mojom.ColorModelSpec = { $: mojo.internal.Enum() };
printing.mojom.QualitySpec = { $: mojo.internal.Enum() };
printing.mojom.DuplexModeSpec = { $: mojo.internal.Enum() };
printing.mojom.PrintScalingTypeSpec = { $: mojo.internal.Enum() };
printing.mojom.PageOrientationSpec = { $: mojo.internal.Enum() };
printing.mojom.PrintScalingOptionSpec = { $: mojo.internal.Enum() };
printing.mojom.SkiaDocumentTypeSpec = { $: mojo.internal.Enum() };
printing.mojom.MetafileDataTypeSpec = { $: mojo.internal.Enum() };
printing.mojom.GenerateDocumentOutlineSpec = { $: mojo.internal.Enum() };
printing.mojom.MarginTypeSpec = { $: mojo.internal.Enum() };
printing.mojom.ColorModeRestrictionSpec = { $: mojo.internal.Enum() };
printing.mojom.DuplexModeRestrictionSpec = { $: mojo.internal.Enum() };
printing.mojom.PinModeRestrictionSpec = { $: mojo.internal.Enum() };
printing.mojom.ResultCodeSpec = { $: mojo.internal.Enum() };
printing.mojom.PrinterTypeSpec = { $: mojo.internal.Enum() };
printing.mojom.PrinterLanguageTypeSpec = { $: mojo.internal.Enum() };
printing.mojom.ClientTypeSpec = { $: mojo.internal.Enum() };
printing.mojom.PageSizeMarginsSpec = { $: {} };
printing.mojom.PageRangeSpec = { $: {} };
printing.mojom.IppClientInfoSpec = { $: {} };

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

// Enum: Quality
printing.mojom.Quality = {
  kUnknownQuality: -1,
  kDraft: 3,
  kNormal: 4,
  kHigh: 5,
};

// Enum: DuplexMode
printing.mojom.DuplexMode = {
  kUnknownDuplexMode: -1,
  kSimplex: 0,
  kLongEdge: 1,
  kShortEdge: 2,
};

// Enum: PrintScalingType
printing.mojom.PrintScalingType = {
  kUnknownPrintScalingType: -1,
  kAuto: 0,
  kAutoFit: 1,
  kFit: 2,
  kFill: 3,
  kNone: 4,
};

// Enum: PageOrientation
printing.mojom.PageOrientation = {
  kUpright: 0,
  kRotateLeft: 1,
  kRotateRight: 2,
};

// Enum: PrintScalingOption
printing.mojom.PrintScalingOption = {
  kNone: 0,
  kFitToPrintableArea: 1,
  kSourceSize: 2,
  kFitToPaper: 3,
  kCenterShrinkToFitPaper: 4,
};

// Enum: SkiaDocumentType
printing.mojom.SkiaDocumentType = {
  kPDF: 0,
  kMSKP: 1,
  kXPS: 2,
};

// Enum: MetafileDataType
printing.mojom.MetafileDataType = {
  kPDF: 0,
  kEMF: 1,
  kPostScriptEmf: 2,
};

// Enum: GenerateDocumentOutline
printing.mojom.GenerateDocumentOutline = {
  kNone: 0,
  kFromAccessibilityTreeHeaders: 1,
};

// Enum: MarginType
printing.mojom.MarginType = {
  kDefaultMargins: 0,
  kNoMargins: 1,
  kPrintableAreaMargins: 2,
  kCustomMargins: 3,
  kPrecomputedMarginsForBackend: 4,
};

// Enum: ColorModeRestriction
printing.mojom.ColorModeRestriction = {
  kUnset: 0,
  kMonochrome: 1,
  kColor: 2,
};

// Enum: DuplexModeRestriction
printing.mojom.DuplexModeRestriction = {
  kUnset: 0,
  kSimplex: 1,
  kLongEdge: 2,
  kShortEdge: 4,
  kDuplex: 6,
};

// Enum: PinModeRestriction
printing.mojom.PinModeRestriction = {
  kUnset: 0,
  kPin: 1,
  kNoPin: 2,
};

// Enum: ResultCode
printing.mojom.ResultCode = {
  kSuccess: 0,
  kFailed: 1,
  kAccessDenied: 2,
  kCanceled: 3,
};

// Enum: PrinterType
printing.mojom.PrinterType = {
  kExtension: 0,
  kPdf: 1,
  kLocal: 2,
};

// Enum: PrinterLanguageType
printing.mojom.PrinterLanguageType = {
  kNone: 0,
  kTextOnly: 1,
  kXps: 2,
  kPostscriptLevel2: 3,
  kPostscriptLevel3: 4,
};

// Enum: ClientType
printing.mojom.ClientType = {
  kApplication: 3,
  kOperatingSystem: 4,
  kDriver: 5,
  kOther: 6,
};

// Struct: PageSizeMargins
mojo.internal.Struct(
    printing.mojom.PageSizeMarginsSpec, 'printing.mojom.PageSizeMargins', [
      mojo.internal.StructField('content_width', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('content_height', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('margin_top', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('margin_right', 24, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('margin_bottom', 32, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('margin_left', 40, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: PageRange
mojo.internal.Struct(
    printing.mojom.PageRangeSpec, 'printing.mojom.PageRange', [
      mojo.internal.StructField('from', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('to', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: IppClientInfo
mojo.internal.Struct(
    printing.mojom.IppClientInfoSpec, 'printing.mojom.IppClientInfo', [
      mojo.internal.StructField('kApplication', 0, 0, mojo.internal.Pointer, 3, false, 0, undefined),
    ],
    [[0, 16]]);
