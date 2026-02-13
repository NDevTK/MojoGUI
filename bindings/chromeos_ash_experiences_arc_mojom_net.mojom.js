// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/ash/experiences/arc/mojom/net.mojom
 // Module: arc.mojom

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
      // Per-interface scramble map (generated from BUILD.gn analysis)
      _interfaceScrambleMap: {"android_webview.mojom.LocalMainFrame": true, "android_webview.mojom.FrameHost": true, "android_webview.mojom.RenderMessageFilter": true, "android_webview.mojom.Renderer": true, "ash.mojom.HidPreservingBluetoothStateController": true, "ash.annotator.mojom.UntrustedAnnotatorPage": true, "ash.annotator.mojom.UntrustedAnnotatorPageHandler": true, "ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactory": true, "ash.boca_receiver.mojom.UntrustedPage": true, "ash.boca_receiver.mojom.UntrustedPageHandlerFactory": true, "ash.boca.mojom.PageHandler": true, "ash.boca.mojom.Page": true, "ash.boca.mojom.BocaPageHandlerFactory": true, "ash.camera_app.mojom.TabletModeMonitor": true, "ash.camera_app.mojom.ScreenStateMonitor": true, "ash.camera_app.mojom.ScreenLockedMonitor": true, "ash.camera_app.mojom.ExternalScreenMonitor": true, "ash.camera_app.mojom.CameraUsageOwnershipMonitor": true, "ash.camera_app.mojom.LidStateMonitor": true, "ash.camera_app.mojom.SWPrivacySwitchMonitor": true, "ash.camera_app.mojom.WindowStateMonitor": true, "ash.camera_app.mojom.StorageMonitor": true, "ash.camera_app.mojom.WindowStateController": true, "ash.camera_app.mojom.CameraAppHelper": true, "ash.camera_app.mojom.EventsSender": true, "ash.camera_app.mojom.PdfBuilder": true, "ash.color_internals.mojom.WallpaperColorsObserver": true, "ash.color_internals.mojom.WallpaperColorsHandler": true, "ash.common.mojom.AcceleratorFetcherObserver": true, "ash.common.mojom.AcceleratorFetcher": true, "ash.common.mojom.ForceHiddenElementsVisibleObserver": true, "ash.common.mojom.AccessibilityFeatures": true, "ash.personalization_app.mojom.SeaPenObserver": true, "ash.personalization_app.mojom.SeaPenProvider": true, "ash.common.mojom.ShortcutInputObserver": true, "ash.common.mojom.ShortcutInputProvider": true, "ash.common.mojom.WebUiSyslogEmitter": true, "ash.mojom.demo_mode.UntrustedPageHandlerFactory": true, "ash.mojom.demo_mode.UntrustedPageHandler": true, "ash.diagnostics.mojom.KeyboardObserver": true, "ash.diagnostics.mojom.InternalDisplayPowerStateObserver": true, "ash.diagnostics.mojom.TabletModeObserver": true, "ash.diagnostics.mojom.LidStateObserver": true, "ash.diagnostics.mojom.ConnectedDevicesObserver": true, "ash.diagnostics.mojom.InputDataProvider": true, "ash.diagnostics.mojom.NetworkListObserver": true, "ash.diagnostics.mojom.NetworkStateObserver": true, "ash.diagnostics.mojom.NetworkHealthProvider": true, "ash.diagnostics.mojom.BatteryChargeStatusObserver": true, "ash.diagnostics.mojom.BatteryHealthObserver": true, "ash.diagnostics.mojom.MemoryUsageObserver": true, "ash.diagnostics.mojom.CpuUsageObserver": true, "ash.diagnostics.mojom.SystemDataProvider": true, "ash.diagnostics.mojom.RoutineRunner": true, "ash.diagnostics.mojom.SystemRoutineController": true, "ash.eche_app.mojom.SignalingMessageExchanger": true, "ash.eche_app.mojom.SignalingMessageObserver": true, "ash.eche_app.mojom.SystemInfoProvider": true, "ash.eche_app.mojom.SystemInfoObserver": true, "ash.eche_app.mojom.AccessibilityProvider": true, "ash.eche_app.mojom.AccessibilityObserver": true, "ash.eche_app.mojom.UidGenerator": true, "ash.eche_app.mojom.NotificationGenerator": true, "ash.eche_app.mojom.DisplayStreamHandler": true, "ash.eche_app.mojom.StreamActionObserver": true, "ash.eche_app.mojom.StreamOrientationObserver": true, "ash.eche_app.mojom.ConnectionStatusObserver": true, "ash.eche_app.mojom.KeyboardLayoutHandler": true, "ash.eche_app.mojom.KeyboardLayoutObserver": true, "ash.file_manager.mojom.PageHandlerFactory": true, "ash.file_manager.mojom.PageHandler": true, "ash.file_manager.mojom.Page": true, "ash.mojom.files_internals.PageHandler": true, "ash.firmware_update.mojom.UpdateObserver": true, "ash.firmware_update.mojom.DeviceRequestObserver": true, "ash.firmware_update.mojom.UpdateProgressObserver": true, "ash.firmware_update.mojom.UpdateProvider": true, "ash.firmware_update.mojom.InstallController": true, "ash.firmware_update.mojom.SystemUtils": true, "ash.focus_mode.mojom.MediaClient": true, "ash.focus_mode.mojom.TrackProvider": true, "ash.graduation_ui.mojom.GraduationUiHandler": true, "ash.growth.mojom.PageHandler": true, "ash.help_app.mojom.PageHandlerFactory": true, "ash.help_app.mojom.PageHandler": true, "ash.help_app.mojom.SearchResultsObserver": true, "ash.help_app.mojom.SearchHandler": true, "ash.mall.mojom.PageHandler": true, "ash.media_app_ui.mojom.PageHandlerFactory": true, "ash.media_app_ui.mojom.PageHandler": true, "ash.media_app_ui.mojom.UntrustedServiceFactory": true, "ash.media_app_ui.mojom.OcrUntrustedService": true, "ash.media_app_ui.mojom.OcrUntrustedPage": true, "ash.media_app_ui.mojom.MahiUntrustedService": true, "ash.media_app_ui.mojom.MahiUntrustedPage": true, "ash.media_app_ui.mojom.MantisUntrustedService": true, "ash.media_app_ui.mojom.MantisUntrustedPage": true, "ash.os_feedback_ui.mojom.HelpContentProvider": true, "ash.os_feedback_ui.mojom.FeedbackServiceProvider": true, "ash.personalization_app.mojom.WallpaperObserver": true, "ash.personalization_app.mojom.WallpaperProvider": true, "ash.personalization_app.mojom.ThemeObserver": true, "ash.personalization_app.mojom.ThemeProvider": true, "ash.personalization_app.mojom.UserImageObserver": true, "ash.personalization_app.mojom.UserProvider": true, "ash.personalization_app.mojom.AmbientObserver": true, "ash.personalization_app.mojom.AmbientProvider": true, "ash.personalization_app.mojom.KeyboardBacklightObserver": true, "ash.personalization_app.mojom.KeyboardBacklightProvider": true, "ash.personalization_app.mojom.SearchResultsObserver": true, "ash.personalization_app.mojom.SearchHandler": true, "ash.printing.print_preview.mojom.DestinationProvider": true, "ash.projector.mojom.UntrustedProjectorPageHandler": true, "ash.projector.mojom.UntrustedProjectorPage": true, "ash.projector.mojom.UntrustedProjectorPageHandlerFactory": true, "ash.recorder_app.mojom.ModelStateMonitor": true, "ash.recorder_app.mojom.QuietModeMonitor": true, "ash.recorder_app.mojom.PageHandler": true, "ash.mojom.sample_swa.ChildUntrustedPage": true, "ash.mojom.sample_swa.ParentTrustedPage": true, "ash.mojom.sample_swa.PageHandlerFactory": true, "ash.mojom.sample_swa.PageHandler": true, "ash.mojom.sample_swa.Page": true, "ash.mojom.sample_swa.UntrustedPageInterfacesFactory": true, "ash.sanitize_ui.mojom.SettingsResetter": true, "ash.mojom.scanner_feedback_ui.PageHandler": true, "ash.scanning.mojom.ScanJobObserver": true, "ash.scanning.mojom.ScanService": true, "ash.scanning.mojom.MultiPageScanController": true, "ash.shimless_rma.mojom.ErrorObserver": true, "ash.shimless_rma.mojom.OsUpdateObserver": true, "ash.shimless_rma.mojom.CalibrationObserver": true, "ash.shimless_rma.mojom.ProvisioningObserver": true, "ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver": true, "ash.shimless_rma.mojom.PowerCableStateObserver": true, "ash.shimless_rma.mojom.ExternalDiskStateObserver": true, "ash.shimless_rma.mojom.HardwareVerificationStatusObserver": true, "ash.shimless_rma.mojom.FinalizationObserver": true, "ash.shimless_rma.mojom.UpdateRoFirmwareObserver": true, "ash.shimless_rma.mojom.ShimlessRmaService": true, "ash.shortcut_customization.mojom.SearchResultsAvailabilityObserver": true, "ash.shortcut_customization.mojom.SearchHandler": true, "ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver": true, "ash.shortcut_customization.mojom.PolicyUpdatedObserver": true, "ash.shortcut_customization.mojom.AcceleratorConfigurationProvider": true, "ash.mojom.status_area_internals.PageHandler": true, "cc.mojom.RenderFrameMetadataObserver": true, "cc.mojom.RenderFrameMetadataObserverClient": true, "actor.ui.mojom.ActorOverlayPageHandlerFactory": true, "actor.ui.mojom.ActorOverlayPageHandler": true, "actor.ui.mojom.ActorOverlayPage": true, "contextual_tasks.mojom.PageHandler": true, "contextual_tasks.mojom.Page": true, "contextual_tasks.mojom.PageHandlerFactory": true, "contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactory": true, "contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandler": true, "contextual_tasks_internals.mojom.ContextualTasksInternalsPage": true, "glic.mojom.FrePageHandlerFactory": true, "glic.mojom.FrePageHandler": true, "glic.mojom.PreloadPage": true, "glic.mojom.Page": true, "glic.mojom.GlicPreloadHandler": true, "glic.mojom.GlicPreloadHandlerFactory": true, "glic.mojom.PageHandlerFactory": true, "glic.mojom.PageHandler": true, "glic.mojom.PinCandidatesObserver": true, "glic.mojom.WebClientHandler": true, "glic.mojom.TabDataHandler": true, "glic.mojom.WebClient": true, "glic.mojom.CaptureRegionObserver": true, "lens.mojom.LensPageHandlerFactory": true, "lens.mojom.LensPageHandler": true, "lens.mojom.LensPage": true, "lens.mojom.LensGhostLoaderPageHandlerFactory": true, "lens.mojom.LensGhostLoaderPage": true, "lens.mojom.LensSidePanelPageHandlerFactory": true, "lens.mojom.LensSidePanelPageHandler": true, "lens.mojom.LensSidePanelPage": true, "media.mojom.MediaEngagementScoreDetailsProvider": true, "file_suggestion.mojom.DriveSuggestionHandler": true, "file_suggestion.mojom.MicrosoftFilesPageHandler": true, "ntp.safe_browsing.mojom.SafeBrowsingHandler": true, "ntp.authentication.mojom.MicrosoftAuthPageHandler": true, "ntp.calendar.mojom.GoogleCalendarPageHandler": true, "ntp.calendar.mojom.OutlookCalendarPageHandler": true, "ntp.most_relevant_tab_resumption.mojom.PageHandler": true, "ntp.tab_groups.mojom.PageHandler": true, "certificate_manager.mojom.CertificateManagerPageHandlerFactory": true, "certificate_manager.mojom.CertificateManagerPageHandler": true, "certificate_manager.mojom.CertificateManagerPage": true, "access_code_cast.mojom.PageHandlerFactory": true, "access_code_cast.mojom.PageHandler": true, "access_code_cast.mojom.Page": true, "actor_internals.mojom.Page": true, "actor_internals.mojom.PageHandler": true, "actor_internals.mojom.PageHandlerFactory": true, "app_home.mojom.PageHandlerFactory": true, "app_home.mojom.PageHandler": true, "app_home.mojom.Page": true, "mojom.app_service_internals.AppServiceInternalsPageHandler": true, "add_supervision.mojom.AddSupervisionHandler": true, "ash.app_install.mojom.AppInfoActions": true, "ash.app_install.mojom.ConnectionErrorActions": true, "ash.app_install.mojom.PageHandlerFactory": true, "ash.app_install.mojom.PageHandler": true, "ash.borealis_installer.mojom.PageHandlerFactory": true, "ash.borealis_installer.mojom.PageHandler": true, "ash.borealis_installer.mojom.Page": true, "ash.cloud_upload.mojom.PageHandlerFactory": true, "ash.cloud_upload.mojom.PageHandler": true, "ash.crostini_installer.mojom.PageHandlerFactory": true, "ash.crostini_installer.mojom.PageHandler": true, "ash.crostini_installer.mojom.Page": true, "dlp_internals.mojom.ReportingObserver": true, "dlp_internals.mojom.PageHandler": true, "emoji_picker.mojom.PageHandlerFactory": true, "emoji_picker.mojom.PageHandler": true, "new_window_proxy.mojom.NewWindowProxy": true, "enterprise_reporting.mojom.PageHandlerFactory": true, "enterprise_reporting.mojom.PageHandler": true, "enterprise_reporting.mojom.Page": true, "ash.extended_updates.mojom.PageHandlerFactory": true, "ash.extended_updates.mojom.PageHandler": true, "ash.extended_updates.mojom.Page": true, "launcher_internals.mojom.PageHandlerFactory": true, "launcher_internals.mojom.Page": true, "lobster.mojom.UntrustedLobsterPageHandler": true, "ash.screens_common.mojom.AiIntroPageHandler": true, "ash.screens_common.mojom.AiIntroPage": true, "ash.screens_common.mojom.AppDownloadingPageHandler": true, "ash.screens_common.mojom.DrivePinningPageHandler": true, "ash.screens_common.mojom.DrivePinningPage": true, "ash.screens_common.mojom.FjordStationSetupPageHandler": true, "ash.screens_common.mojom.FjordTouchControllerPageHandler": true, "ash.screens_common.mojom.GaiaInfoPageHandler": true, "ash.screens_common.mojom.GaiaInfoPage": true, "ash.screens_common.mojom.GestureNavigationPageHandler": true, "ash.screens_common.mojom.GeminiIntroPageHandler": true, "ash.screens_factory.mojom.ScreensFactory": true, "ash.screens_login.mojom.ArcVmDataMigrationPageHandler": true, "ash.screens_login.mojom.ArcVmDataMigrationPage": true, "ash.screens_login.mojom.EncryptionMigrationPageHandler": true, "ash.screens_login.mojom.EncryptionMigrationPage": true, "ash.screens_oobe.mojom.ConsumerUpdatePageHandler": true, "ash.screens_oobe.mojom.ConsumerUpdatePage": true, "ash.screens_oobe.mojom.PackagedLicensePageHandler": true, "ash.screens_osauth.mojom.LocalDataLossWarningPageHandler": true, "ash.manage_mirrorsync.mojom.PageHandlerFactory": true, "ash.manage_mirrorsync.mojom.PageHandler": true, "ash.office_fallback.mojom.PageHandlerFactory": true, "ash.office_fallback.mojom.PageHandler": true, "parent_access_ui.mojom.ParentAccessUiHandler": true, "sensor.mojom.PageHandlerFactory": true, "sensor.mojom.PageHandler": true, "ash.settings.app_notification.mojom.AppNotificationsHandler": true, "ash.settings.app_notification.mojom.AppNotificationsObserver": true, "ash.settings.app_parental_controls.mojom.AppParentalControlsHandler": true, "ash.settings.app_parental_controls.mojom.AppParentalControlsObserver": true, "ash.settings.date_time.mojom.PageHandlerFactory": true, "ash.settings.date_time.mojom.PageHandler": true, "ash.settings.date_time.mojom.Page": true, "ash.settings.mojom.TabletModeObserver": true, "ash.settings.mojom.DisplayConfigurationObserver": true, "ash.settings.mojom.DisplayBrightnessSettingsObserver": true, "ash.settings.mojom.AmbientLightSensorObserver": true, "ash.settings.mojom.DisplaySettingsProvider": true, "ash.settings.mojom.KeyboardSettingsObserver": true, "ash.settings.mojom.TouchpadSettingsObserver": true, "ash.settings.mojom.PointingStickSettingsObserver": true, "ash.settings.mojom.MouseSettingsObserver": true, "ash.settings.mojom.ButtonPressObserver": true, "ash.settings.mojom.GraphicsTabletSettingsObserver": true, "ash.settings.mojom.KeyboardBrightnessObserver": true, "ash.settings.mojom.KeyboardAmbientLightSensorObserver": true, "ash.settings.mojom.LidStateObserver": true, "ash.settings.mojom.InputDeviceSettingsProvider": true, "ash.settings.google_drive.mojom.PageHandlerFactory": true, "ash.settings.google_drive.mojom.PageHandler": true, "ash.settings.google_drive.mojom.Page": true, "ash.settings.one_drive.mojom.PageHandlerFactory": true, "ash.settings.one_drive.mojom.PageHandler": true, "ash.settings.one_drive.mojom.Page": true, "ash.settings.graduation.mojom.GraduationHandler": true, "ash.settings.graduation.mojom.GraduationObserver": true, "ash.settings.app_permission.mojom.AppPermissionsHandler": true, "ash.settings.app_permission.mojom.AppPermissionsObserver": true, "ash.settings.magic_boost_handler.mojom.PageHandlerFactory": true, "ash.settings.magic_boost_handler.mojom.PageHandler": true, "ash.settings.mojom.SearchResultsObserver": true, "ash.settings.mojom.SearchHandler": true, "ash.settings.mojom.UserActionRecorder": true, "policy.local_user_files.mojom.PageHandlerFactory": true, "policy.local_user_files.mojom.PageHandler": true, "policy.local_user_files.mojom.Page": true, "ash.vm.mojom.VmDiagnosticsProvider": true, "mojom.DebugLogsChangeHandler": true, "mojom.BluetoothInternalsHandler": true, "mojom.BluetoothBtsnoop": true, "customize_buttons.mojom.CustomizeButtonsHandlerFactory": true, "customize_buttons.mojom.CustomizeButtonsHandler": true, "customize_buttons.mojom.CustomizeButtonsDocument": true, "data_sharing.mojom.PageHandlerFactory": true, "data_sharing.mojom.PageHandler": true, "data_sharing.mojom.Page": true, "default_browser_modal.mojom.Page": true, "default_browser_modal.mojom.PageHandler": true, "default_browser_modal.mojom.PageHandlerFactory": true, "discards.mojom.DetailsProvider": true, "discards.mojom.GraphChangeStream": true, "discards.mojom.GraphDump": true, "discards.mojom.SiteDataProvider": true, "downloads.mojom.PageHandlerFactory": true, "downloads.mojom.PageHandler": true, "downloads.mojom.Page": true, "zero_state_promo.mojom.PageHandlerFactory": true, "zero_state_promo.mojom.PageHandler": true, "feed_internals.mojom.PageHandler": true, "infobar_internals.mojom.Page": true, "infobar_internals.mojom.PageHandler": true, "infobar_internals.mojom.PageHandlerFactory": true, "legion_internals.mojom.LegionInternalsPage": true, "legion_internals.mojom.LegionInternalsPageHandler": true, "mojom.LocationInternalsHandler": true, "nearby_share.mojom.ShareTargetListener": true, "nearby_share.mojom.TransferUpdateListener": true, "nearby_share.mojom.DiscoveryObserver": true, "nearby_share.mojom.DiscoveryManager": true, "nearby_share.mojom.ConfirmationManager": true, "nearby_share.mojom.ReceiveObserver": true, "nearby_share.mojom.ReceiveManager": true, "new_tab_footer.mojom.NewTabFooterHandlerFactory": true, "new_tab_footer.mojom.NewTabFooterHandler": true, "new_tab_footer.mojom.NewTabFooterDocument": true, "action_chips.mojom.ActionChipsHandler": true, "action_chips.mojom.Page": true, "action_chips.mojom.ActionChipsHandlerFactory": true, "foo.mojom.FooHandler": true, "new_tab_page.mojom.PageHandlerFactory": true, "new_tab_page.mojom.PageHandler": true, "new_tab_page.mojom.Page": true, "ntp_promo.mojom.NtpPromoHandler": true, "ntp_promo.mojom.NtpPromoClient": true, "ntp_promo.mojom.NtpPromoHandlerFactory": true, "new_tab_page_third_party.mojom.PageHandlerFactory": true, "new_tab_page_third_party.mojom.PageHandler": true, "new_tab_page_third_party.mojom.Page": true, "notifications_internals.mojom.PageHandler": true, "new_tab_page.mojom.MicrosoftAuthUntrustedDocument": true, "new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory": true, "new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler": true, "aim_eligibility.mojom.Page": true, "aim_eligibility.mojom.PageHandler": true, "aim_eligibility.mojom.PageHandlerFactory": true, "omnibox.logging.mojom.PageHandlerFactory": true, "omnibox.logging.mojom.PageHandler": true, "omnibox.logging.mojom.Page": true, "mojom.OmniboxPageHandler": true, "mojom.OmniboxPage": true, "omnibox_popup_aim.mojom.PageHandlerFactory": true, "omnibox_popup_aim.mojom.PageHandler": true, "omnibox_popup_aim.mojom.Page": true, "on_device_internals.mojom.PageHandlerFactory": true, "on_device_internals.mojom.PageHandler": true, "on_device_internals.mojom.Page": true, "on_device_translation_internals.mojom.PageHandlerFactory": true, "on_device_translation_internals.mojom.PageHandler": true, "on_device_translation_internals.mojom.Page": true, "password_manager.mojom.PageHandlerFactory": true, "password_manager.mojom.PageHandler": true, "password_manager.mojom.Page": true, "privacy_sandbox_internals.mojom.PageHandler": true, "privacy_sandbox_internals.mojom.Page": true, "private_state_tokens.mojom.PrivateStateTokensPageHandler": true, "related_website_sets.mojom.RelatedWebsiteSetsPageHandler": true, "mojom.ResetPasswordHandler": true, "search_engine_choice.mojom.PageHandlerFactory": true, "search_engine_choice.mojom.PageHandler": true, "segmentation_internals.mojom.PageHandlerFactory": true, "segmentation_internals.mojom.PageHandler": true, "segmentation_internals.mojom.Page": true, "side_panel.mojom.BookmarksPageHandlerFactory": true, "side_panel.mojom.BookmarksPageHandler": true, "side_panel.mojom.BookmarksPage": true, "comments.mojom.PageHandlerFactory": true, "comments.mojom.PageHandler": true, "comments.mojom.Page": true, "side_panel.mojom.CustomizeChromePageHandlerFactory": true, "side_panel.mojom.CustomizeChromePageHandler": true, "side_panel.mojom.CustomizeChromePage": true, "side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactory": true, "side_panel.customize_chrome.mojom.CustomizeToolbarHandler": true, "side_panel.customize_chrome.mojom.CustomizeToolbarClient": true, "side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactory": true, "side_panel.customize_chrome.mojom.WallpaperSearchHandler": true, "side_panel.customize_chrome.mojom.WallpaperSearchClient": true, "reading_list.mojom.PageHandlerFactory": true, "reading_list.mojom.PageHandler": true, "reading_list.mojom.Page": true, "batch_upload.mojom.PageHandlerFactory": true, "batch_upload.mojom.PageHandler": true, "batch_upload.mojom.Page": true, "history_sync_optin.mojom.PageHandlerFactory": true, "history_sync_optin.mojom.PageHandler": true, "history_sync_optin.mojom.Page": true, "signout_confirmation.mojom.PageHandlerFactory": true, "signout_confirmation.mojom.PageHandler": true, "signout_confirmation.mojom.Page": true, "skills.mojom.PageHandlerFactory": true, "skills.mojom.PageHandler": true, "skills.mojom.SkillsPage": true, "skills.mojom.DialogHandler": true, "suggest_internals.mojom.PageHandler": true, "suggest_internals.mojom.Page": true, "tab_search.mojom.PageHandlerFactory": true, "tab_search.mojom.PageHandler": true, "tab_search.mojom.Page": true, "tab_strip.mojom.PageHandlerFactory": true, "tab_strip.mojom.PageHandler": true, "tab_strip.mojom.Page": true, "tab_strip_internals.mojom.PageHandlerFactory": true, "tab_strip_internals.mojom.PageHandler": true, "tab_strip_internals.mojom.Page": true, "unexportable_keys_internals.mojom.PageHandlerFactory": true, "unexportable_keys_internals.mojom.PageHandler": true, "unexportable_keys_internals.mojom.Page": true, "updater_ui.mojom.PageHandlerFactory": true, "updater_ui.mojom.PageHandler": true, "updater_ui.mojom.Page": true, "mojom.UsbInternalsPageHandler": true, "mojom.user_education_internals.UserEducationInternalsPageHandler": true, "watermark.mojom.PageHandlerFactory": true, "watermark.mojom.PageHandler": true, "mojom.WebAppInternalsHandler": true, "webnn_internals.mojom.WebNNInternalsHandler": true, "webnn_internals.mojom.WebNNInternalsPage": true, "webnn_internals.mojom.WebNNInternalsHandlerFactory": true, "whats_new.mojom.PageHandlerFactory": true, "whats_new.mojom.PageHandler": true, "whats_new.mojom.Page": true, "bookmark_bar.mojom.PageHandlerFactory": true, "bookmark_bar.mojom.PageHandler": true, "bookmark_bar.mojom.Page": true, "webui_browser.mojom.PageHandlerFactory": true, "webui_browser.mojom.Page": true, "webui_browser.mojom.PageHandler": true, "webui_browser.mojom.GuestHandler": true, "extensions_bar.mojom.PageHandlerFactory": true, "extensions_bar.mojom.PageHandler": true, "extensions_bar.mojom.Page": true, "actor.mojom.JournalClient": true, "actor.mojom.PageStabilityMonitor": true, "chrome.mojom.ChromeRenderFrame": true, "compose.mojom.ComposeSessionUntrustedPageHandlerFactory": true, "compose.mojom.ComposeSessionUntrustedPageHandler": true, "compose.mojom.ComposeClientUntrustedPageHandler": true, "compose.mojom.ComposeUntrustedDialog": true, "mojom.ModuleEventSink": true, "chrome.mojom.FontPrewarmer": true, "chrome.mojom.RenderFrameFontFamilyAccessor": true, "chrome.mojom.GoogleAccountsPrivateApiExtension": true, "chrome.mojom.ProfileImportObserver": true, "chrome.mojom.ProfileImport": true, "chrome.mojom.AppShim": true, "chrome.mojom.AppShimHost": true, "chrome.mojom.AppShimHostBootstrap": true, "chrome.mojom.WebRtcLoggingClient": true, "chrome.mojom.WebRtcLoggingAgent": true, "offline_pages.mojom.MhtmlPageNotifier": true, "chrome.mojom.NetErrorPageSupport": true, "chrome.mojom.NetBenchmarking": true, "chrome.mojom.NetworkDiagnostics": true, "chrome.mojom.NetworkDiagnosticsClient": true, "chrome.mojom.NetworkEasterEgg": true, "chrome.mojom.OfflinePageAutoFetcher": true, "chrome.mojom.OpenSearchDescriptionDocumentHandler": true, "chrome.mojom.PluginHost": true, "chrome.mojom.PluginAuthHost": true, "chrome.mojom.PluginInfoHost": true, "read_anything.mojom.UntrustedPageHandlerFactory": true, "read_anything.mojom.UntrustedPageHandler": true, "read_anything.mojom.UntrustedPage": true, "record_replay.mojom.RecordReplayDriver": true, "chrome.mojom.BoundSessionRequestThrottledHandler": true, "chrome.mojom.ChromeOSListener": true, "chrome.mojom.RendererConfiguration": true, "chrome.mojom.SandboxStatusExtension": true, "search.mojom.EmbeddedSearchConnector": true, "search.mojom.EmbeddedSearch": true, "search.mojom.EmbeddedSearchClient": true, "supervised_user.mojom.SupervisedUserCommands": true, "chrome.mojom.TrustedVaultEncryptionKeysExtension": true, "wallet.mojom.BoardingPassExtractor": true, "gcpw_hid.mojom.GaiaCredentialProviderHidBroker": true, "enterprise_companion.mojom.EnterpriseCompanion": true, "chrome.mojom.DocumentAnalysisService": true, "chrome.mojom.FileUtilService": true, "chrome.mojom.SafeArchiveAnalyzer": true, "chrome.mojom.TemporaryFileGetter": true, "chrome.mojom.SingleFileExtractor": true, "chrome.mojom.SingleFileExtractorListener": true, "chrome.mojom.ZipListener": true, "chrome.mojom.ZipFileCreator": true, "mac_notifications.mojom.MacNotificationService": true, "mac_notifications.mojom.MacNotificationActionHandler": true, "mac_notifications.mojom.MacNotificationProvider": true, "chrome.mojom.MediaParser": true, "chrome.mojom.MediaParserFactory": true, "chrome.mojom.MediaDataSource": true, "pdf.mojom.PdfProgressiveSearchifier": true, "pdf.mojom.PdfSearchifier": true, "pdf.mojom.Ocr": true, "pdf.mojom.PdfService": true, "pdf.mojom.PdfThumbnailer": true, "printing.mojom.PdfFlattener": true, "printing.mojom.PdfNupConverter": true, "printing.mojom.PdfToEmfConverter": true, "printing.mojom.PdfToEmfConverterFactory": true, "printing.mojom.PdfToPwgRasterConverter": true, "printing.mojom.UnsandboxedPrintBackendHost": true, "printing.mojom.SandboxedPrintBackendHost": true, "printing.mojom.PrintBackendService": true, "printing.mojom.PrinterXmlParser": true, "printing.mojom.PrintingService": true, "chrome.mojom.RemovableStorageWriter": true, "chrome.mojom.RemovableStorageWriterClient": true, "chrome.mojom.UtilReadIcon": true, "chrome.mojom.UtilWin": true, "chrome.mojom.ProcessorMetrics": true, "web_ui_test.mojom.TestRunner": true, "test.mojom.Foo": true, "test.mojom.Bar": true, "test.mojom.Baz": true, "test.mojom.MojoFileSystemAccessTest": true, "updater.mojom.UpdateService": true, "updater.mojom.StateChangeObserver": true, "updater.mojom.UpdateServiceInternal": true, "updater.mojom.PostRequestObserver": true, "updater.mojom.FileDownloadObserver": true, "updater.mojom.FetchService": true, "chromecast.mojom.ApiBindings": true, "chromecast.mojom.BluetoothDeviceAccessProvider": true, "chromecast.mojom.BluetoothDeviceAccessProviderClient": true, "chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserver": true, "chromecast.mojom.GeneralAudienceBrowsingAPIKeySubject": true, "chromecast.mojom.CastContentWindowObserver": true, "chromecast.mojom.CastContentWindow": true, "chromecast.mojom.CastWebContentsObserver": true, "chromecast.mojom.CastWebContents": true, "chromecast.mojom.CastWebService": true, "chromecast.mojom.MessageCallback": true, "chromecast.mojom.WebUi": true, "chromecast.mojom.Resources": true, "chromecast.mojom.WebUiClient": true, "chromecast.mojom.ActivityUrlFilterConfiguration": true, "chromecast.mojom.ActivityWindow": true, "chromecast.shell.mojom.ApplicationMediaCapabilitiesObserver": true, "chromecast.shell.mojom.ApplicationMediaCapabilities": true, "chromecast.mojom.AssistantMessagePipe": true, "chromecast.mojom.AssistantMessageClient": true, "chromecast.mojom.AssistantMessageService": true, "chromecast.mojom.AudioSocketBroker": true, "chromecast.shell.mojom.CastDemoVolumeChangeObserver": true, "chromecast.shell.mojom.CastDemo": true, "chromecast.shell.mojom.FeatureManager": true, "chromecast.mojom.FeatureUpdateObserver": true, "chromecast.mojom.FeatureUpdateService": true, "chromecast.mojom.GestureHandler": true, "chromecast.mojom.GestureSource": true, "chromecast.mojom.JsChannel": true, "chromecast.mojom.JsChannelClient": true, "chromecast.mojom.JsChannelBindingProvider": true, "chromecast.media.mojom.MediaCaps": true, "chromecast.media.mojom.MediaCapsObserver": true, "chromecast.metrics.mojom.MetricsHelper": true, "chromecast.shell.mojom.QueryableDataStore": true, "chromecast.mojom.ServiceConnector": true, "chromecast.mojom.SettingsClient": true, "chromecast.mojom.SettingsPlatform": true, "chromecast.external_mojo.mojom.ExternalService": true, "chromecast.external_mojo.mojom.ExternalConnector": true, "chromecast.external_mojo.mojom.TestExternalConnector": true, "chromecast.media.mojom.VideoGeometryChangeClient": true, "chromecast.media.mojom.VideoGeometryChangeSubscriber": true, "chromecast.media.mojom.VideoGeometrySetter": true, "chromecast.mojom.RemoteInterfaces": true, "chromecast.mojom.DisplaySettings": true, "chromecast.mojom.DisplaySettingsObserver": true, "ash.audio_config.mojom.AudioSystemPropertiesObserver": true, "ash.audio_config.mojom.CrosAudioConfig": true, "drivefs.mojom.DriveFsBootstrap": true, "drivefs.mojom.DriveFs": true, "drivefs.mojom.DriveFsDelegate": true, "drivefs.mojom.SearchQuery": true, "drivefs.mojom.HttpDelegate": true, "drivefs.mojom.FakeDriveFsLauncher": true, "emoji_search.mojom.EmojiSearch": true, "ash.enhanced_network_tts.mojom.EnhancedNetworkTts": true, "ash.enhanced_network_tts.mojom.AudioDataObserver": true, "ash.language.mojom.LanguagePacksObserver": true, "ash.language.mojom.LanguagePacks": true, "ash.local_search_service.mojom.Index": true, "ash.local_search_service.mojom.SearchMetricsReporter": true, "ash.local_search_service.mojom.LocalSearchService": true, "mantis.mojom.MantisProcessor": true, "mantis.mojom.PlatformModelProgressObserver": true, "mantis.mojom.MantisService": true, "userspace_swap.mojom.UserspaceSwapInitialization": true, "userspace_swap.mojom.UserspaceSwap": true, "chromeos.mojo_service_manager.mojom.ServiceManager": true, "chromeos.mojo_service_manager.mojom.ServiceProvider": true, "chromeos.mojo_service_manager.mojom.ServiceObserver": true, "smbfs.mojom.SmbFsBootstrap": true, "smbfs.mojom.SmbFs": true, "smbfs.mojom.SmbFsDelegate": true, "ash.trash_service.mojom.TrashService": true, "arc.mojom.AdbdMonitorHost": true, "arc.mojom.AdbdMonitorInstance": true, "arc.mojom.AppHost": true, "arc.mojom.AppInstance": true, "arc.mojom.AppPermissionsInstance": true, "arc.mojom.AppfuseHost": true, "arc.mojom.AppfuseInstance": true, "arc.mojom.ArcBridgeHost": true, "arc.mojom.ArcWifiHost": true, "arc.mojom.ArcWifiInstance": true, "arc.mojom.AudioHost": true, "arc.mojom.AudioInstance": true, "arc.mojom.AuthHost": true, "arc.mojom.AuthInstance": true, "arc.mojom.BackupSettingsInstance": true, "arc.mojom.RfcommListeningSocketClient": true, "arc.mojom.RfcommConnectingSocketClient": true, "arc.mojom.BluetoothListenSocketClient": true, "arc.mojom.BluetoothConnectSocketClient": true, "arc.mojom.BluetoothHost": true, "arc.mojom.BluetoothInstance": true, "arc.mojom.BootPhaseMonitorHost": true, "arc.mojom.BootPhaseMonitorInstance": true, "arc.mojom.CameraService": true, "arc.mojom.CameraHost": true, "arc.mojom.CameraInstance": true, "arc.mojom.ChromeFeatureFlagsInstance": true, "arc.mojom.CompatibilityModeInstance": true, "arc.mojom.CrashCollectorHost": true, "arc.mojom.CrashCollectorInstance": true, "arc.mojom.ArcShellExecutionInstance": true, "arc.mojom.DigitalGoodsInstance": true, "arc.mojom.DiskSpaceHost": true, "arc.mojom.DiskSpaceInstance": true, "arc.mojom.EnterpriseReportingHost": true, "arc.mojom.EnterpriseReportingInstance": true, "arc.mojom.ErrorNotificationHost": true, "arc.mojom.ErrorNotificationInstance": true, "arc.mojom.ErrorNotificationItem": true, "arc.mojom.ErrorNotificationActionHandler": true, "arc.mojom.FileSystemHost": true, "arc.mojom.FileSystemInstance": true, "arc.mojom.IioSensorHost": true, "arc.mojom.IioSensorInstance": true, "arc.mojom.ImeHost": true, "arc.mojom.ImeInstance": true, "arc.mojom.InputConnection": true, "arc.mojom.InputMethodManagerHost": true, "arc.mojom.InputMethodManagerInstance": true, "arc.mojom.CustomTabSession": true, "arc.mojom.IntentHelperHost": true, "arc.mojom.IntentHelperInstance": true, "arc.mojom.KeymasterHost": true, "arc.mojom.KeymasterInstance": true, "arc.mojom.KeymasterServer": true, "arc.mojom.keymint.KeyMintHost": true, "arc.mojom.keymint.KeyMintInstance": true, "arc.mojom.keymint.KeyMintServer": true, "arc.mojom.KioskHost": true, "arc.mojom.KioskInstance": true, "arc.mojom.MediaSessionInstance": true, "arc.mojom.MemoryInstance": true, "arc.mojom.MetricsHost": true, "arc.mojom.MetricsInstance": true, "arc.mojom.MidisClient": true, "arc.mojom.MidisServer": true, "arc.mojom.MidisHost": true, "arc.mojom.MidisInstance": true, "arc.mojom.NearbyShareSessionHost": true, "arc.mojom.NearbyShareSessionInstance": true, "arc.mojom.NearbyShareHost": true, "arc.mojom.NearbyShareInstance": true, "arc.mojom.NetHost": true, "arc.mojom.NetInstance": true, "arc.mojom.NotificationsHost": true, "arc.mojom.NotificationsInstance": true, "arc.mojom.ObbMounterHost": true, "arc.mojom.ObbMounterInstance": true, "arc.mojom.OemCryptoService": true, "arc.mojom.OemCryptoHost": true, "arc.mojom.OemCryptoInstance": true, "arc.mojom.OnDeviceSafetyHost": true, "arc.mojom.OnDeviceSafetyInstance": true, "arc.mojom.PipHost": true, "arc.mojom.PipInstance": true, "arc.mojom.PolicyHost": true, "arc.mojom.PolicyInstance": true, "arc.mojom.PowerHost": true, "arc.mojom.PowerInstance": true, "arc.mojom.PrintSessionHost": true, "arc.mojom.PrintSessionInstance": true, "arc.mojom.PrintSpoolerHost": true, "arc.mojom.PrintSpoolerInstance": true, "arc.mojom.PrivacyItemsHost": true, "arc.mojom.PrivacyItemsInstance": true, "arc.mojom.ProcessInstance": true, "arc.mojom.ProtectedBufferManager": true, "arc.mojom.ScreenCaptureHost": true, "arc.mojom.ScreenCaptureSession": true, "arc.mojom.ScreenCaptureInstance": true, "arc.mojom.ScreenCaptureSessionNotifier": true, "arc.mojom.SharesheetHost": true, "arc.mojom.SharesheetInstance": true, "arc.mojom.SystemStateHost": true, "arc.mojom.SystemStateInstance": true, "arc.mojom.SystemUiInstance": true, "arc.mojom.TimerHost": true, "arc.mojom.TimerInstance": true, "arc.mojom.TracingInstance": true, "arc.mojom.TtsHost": true, "arc.mojom.TtsInstance": true, "arc.mojom.UsbHostHost": true, "arc.mojom.UsbHostInstance": true, "arc.mojom.VideoHost": true, "arc.mojom.VideoInstance": true, "arc.mojom.VideoAcceleratorFactory": true, "arc.mojom.VideoDecodeAccelerator": true, "arc.mojom.VideoDecodeClient": true, "arc.mojom.VideoDecoder": true, "arc.mojom.VideoDecoderClient": true, "arc.mojom.VideoEncodeAccelerator": true, "arc.mojom.VideoEncodeClient": true, "arc.mojom.VideoFramePool": true, "arc.mojom.VideoFramePoolClient": true, "arc.mojom.VideoProtectedBufferAllocator": true, "arc.mojom.VolumeMounterHost": true, "arc.mojom.VolumeMounterInstance": true, "arc.mojom.WakeLockHost": true, "arc.mojom.WakeLockInstance": true, "arc.mojom.WallpaperHost": true, "arc.mojom.WallpaperInstance": true, "arc.mojom.WebApkInstance": true, "ash.borealis_motd.mojom.PageHandlerFactory": true, "ash.borealis_motd.mojom.PageHandler": true, "ash.borealis_motd.mojom.Page": true, "ash.auth.mojom.FactorObserver": true, "ash.auth.mojom.AuthFactorConfig": true, "ash.auth.mojom.RecoveryFactorEditor": true, "ash.auth.mojom.PinFactorEditor": true, "ash.auth.mojom.PasswordFactorEditor": true, "ash.bluetooth_config.mojom.SystemPropertiesObserver": true, "ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver": true, "ash.bluetooth_config.mojom.DiscoverySessionStatusObserver": true, "ash.bluetooth_config.mojom.KeyEnteredHandler": true, "ash.bluetooth_config.mojom.DevicePairingDelegate": true, "ash.bluetooth_config.mojom.DevicePairingHandler": true, "ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate": true, "ash.bluetooth_config.mojom.CrosBluetoothConfig": true, "ash.babelorca.mojom.TachyonParsingService": true, "ash.cellular_setup.mojom.CarrierPortalHandler": true, "ash.cellular_setup.mojom.ActivationDelegate": true, "ash.cellular_setup.mojom.CellularSetup": true, "ash.cellular_setup.mojom.ESimManagerObserver": true, "ash.cellular_setup.mojom.ESimManager": true, "ash.cellular_setup.mojom.Euicc": true, "ash.cellular_setup.mojom.ESimProfile": true, "chromeos.connectivity.mojom.PasspointEventsListener": true, "chromeos.connectivity.mojom.PasspointService": true, "coral.mojom.TitleObserver": true, "coral.mojom.CoralProcessor": true, "coral.mojom.CoralService": true, "ash.cros_healthd.internal.mojom.ChromiumDataCollector": true, "ash.cros_healthd.mojom.CrosHealthdDiagnosticsService": true, "ash.cros_healthd.mojom.CrosHealthdEventService": true, "ash.cros_healthd.mojom.CrosHealthdProbeService": true, "ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier": true, "ash.cros_healthd.mojom.AshEventReporter": true, "ash.cros_healthd.mojom.CrosHealthdBluetoothObserver": true, "ash.cros_healthd.mojom.CrosHealthdLidObserver": true, "ash.cros_healthd.mojom.CrosHealthdPowerObserver": true, "ash.cros_healthd.mojom.CrosHealthdAudioObserver": true, "ash.cros_healthd.mojom.CrosHealthdThunderboltObserver": true, "ash.cros_healthd.mojom.CrosHealthdUsbObserver": true, "ash.cros_healthd.mojom.CrosHealthdSdCardObserver": true, "ash.cros_healthd.mojom.EventObserver": true, "ash.cros_healthd.mojom.CrosHealthdRoutinesService": true, "ash.cros_healthd.mojom.RoutineControl": true, "ash.cros_healthd.mojom.RoutineObserver": true, "ash.cros_healthd.connectivity.mojom.State": true, "ash.cros_healthd.connectivity.mojom.ConnectivityTestProvider": true, "ash.cros_safety.mojom.CloudSafetySession": true, "ash.cros_safety.mojom.OnDeviceSafetySession": true, "ash.cros_safety.mojom.CrosSafetyService": true, "ash.device_sync.mojom.DeviceSyncObserver": true, "ash.device_sync.mojom.DeviceSync": true, "ash.heartd.mojom.HeartdControl": true, "ash.heartd.mojom.HeartbeatService": true, "ash.heartd.mojom.Pacemaker": true, "ash.hotspot_config.mojom.CrosHotspotConfig": true, "ash.hotspot_config.mojom.CrosHotspotConfigObserver": true, "ash.hotspot_config.mojom.HotspotEnabledStateObserver": true, "ash.ime.mojom.ConnectionFactory": true, "ash.ime.mojom.InputEngineManager": true, "ash.ime.mojom.PlatformAccessProvider": true, "ash.ime.mojom.ImeService": true, "ash.ime.mojom.InputChannel": true, "ash.ime.mojom.InputMethod": true, "ash.ime.mojom.InputMethodHost": true, "ash.ime.mojom.InputMethodUserDataService": true, "ash.ime.mojom.JpUnused": true, "arc.keymaster.mojom.CertStoreInstance": true, "arc.keymint.mojom.CertStoreInstance": true, "ash.multidevice_setup.mojom.AccountStatusChangeDelegate": true, "ash.multidevice_setup.mojom.HostStatusObserver": true, "ash.multidevice_setup.mojom.FeatureStateObserver": true, "ash.multidevice_setup.mojom.MultiDeviceSetup": true, "ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter": true, "sharing.mojom.FirewallHole": true, "sharing.mojom.FirewallHoleFactory": true, "sharing.mojom.MdnsObserver": true, "sharing.mojom.MdnsManager": true, "nearby.connections.mojom.EndpointDiscoveryListener": true, "nearby.connections.mojom.ConnectionLifecycleListener": true, "nearby.connections.mojom.PayloadListener": true, "nearby.connections.mojom.ConnectionListenerV3": true, "nearby.connections.mojom.PayloadListenerV3": true, "nearby.connections.mojom.NearbyConnections": true, "sharing.mojom.NearbySharingDecoder": true, "ash.nearby.presence.mojom.ScanSession": true, "ash.nearby.presence.mojom.ScanObserver": true, "ash.nearby.presence.mojom.NearbyPresence": true, "ash.nearby.presence.mojom.NearbyPresenceCredentialStorage": true, "nearby_share.mojom.NearbyShareSettingsObserver": true, "nearby_share.mojom.NearbyShareSettings": true, "nearby_share.mojom.DownloadContactsObserver": true, "nearby_share.mojom.ContactManager": true, "ash.quick_start.mojom.QuickStartDecoder": true, "sharing.mojom.Sharing": true, "sharing.mojom.TcpSocketFactory": true, "sharing.mojom.IceConfigFetcher": true, "sharing.mojom.MdnsResponderFactory": true, "sharing.mojom.IncomingMessagesListener": true, "sharing.mojom.ReceiveMessagesSession": true, "sharing.mojom.WebRtcSignalingMessenger": true, "ash.orca.mojom.EditorClient": true, "ash.orca.mojom.EditorClientConnector": true, "ash.orca.mojom.EditorEventSink": true, "ash.orca.mojom.SystemActuator": true, "ash.orca.mojom.TextQueryProvider": true, "ash.orca.mojom.OrcaService": true, "ash.quick_pair.mojom.FastPairDataParser": true, "ash.quick_pair.mojom.QuickPairService": true, "recording.mojom.DriveFsQuotaDelegate": true, "recording.mojom.RecordingServiceClient": true, "recording.mojom.RecordingService": true, "ash.rollback_network_config.mojom.RollbackNetworkConfig": true, "ash.secure_channel.mojom.NearbyConnectionStateListener": true, "ash.secure_channel.mojom.NearbyMessageSender": true, "ash.secure_channel.mojom.NearbyMessageReceiver": true, "ash.secure_channel.mojom.NearbyFilePayloadHandler": true, "ash.secure_channel.mojom.NearbyConnector": true, "ash.secure_channel.mojom.Channel": true, "ash.secure_channel.mojom.MessageReceiver": true, "ash.secure_channel.mojom.ConnectionDelegate": true, "ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger": true, "ash.secure_channel.mojom.SecureChannel": true, "ash.secure_channel.mojom.FilePayloadListener": true, "ash.wifi_direct.mojom.WifiDirectManager": true, "ash.wifi_direct.mojom.WifiDirectConnection": true, "chromeos.cdm.mojom.BrowserCdmFactory": true, "chromeos.cdm.mojom.CdmFactory": true, "chromeos.cdm.mojom.CdmFactoryDaemon": true, "chromeos.cdm.mojom.CdmStorage": true, "chromeos.cdm.mojom.ContentDecryptionModule": true, "chromeos.cdm.mojom.ContentDecryptionModuleClient": true, "chromeos.cdm.mojom.OutputProtection": true, "drivefs.mojom.NativeMessagingPort": true, "drivefs.mojom.NativeMessagingHost": true, "chromeos.auth.mojom.InSessionAuth": true, "mahi.mojom.ContentExtractionService": true, "mahi.mojom.ContentExtractionServiceFactory": true, "chromeos.payments.mojom.PaymentAppInstance": true, "chromeos.printing.printing_manager.mojom.PrintJobsObserver": true, "chromeos.printing.printing_manager.mojom.PrintingMetadataProvider": true, "chromeos.printing.printing_manager.mojom.PrintManagementHandler": true, "quick_answers.mojom.SpellCheckService": true, "quick_answers.mojom.SpellCheckDictionary": true, "chromeos.remote_apps.mojom.RemoteApps": true, "chromeos.remote_apps.mojom.RemoteAppsFactory": true, "chromeos.remote_apps.mojom.RemoteAppLaunchObserver": true, "chromeos.sensors.mojom.SensorHalServer": true, "chromeos.sensors.mojom.SensorHalClient": true, "chromeos.sensors.mojom.SensorService": true, "chromeos.sensors.mojom.SensorDevice": true, "chromeos.sensors.mojom.SensorDeviceSamplesObserver": true, "chromeos.sensors.mojom.SensorServiceNewDevicesObserver": true, "crosapi.mojom.AccountManagerObserver": true, "crosapi.mojom.AccountManager": true, "crosapi.mojom.AccessTokenFetcher": true, "crosapi.mojom.CrosDisplayConfigController": true, "crosapi.mojom.CrosDisplayConfigObserver": true, "crosapi.mojom.Crosapi": true, "crosapi.mojom.DiagnosticsService": true, "crosapi.mojom.DocumentScan": true, "crosapi.mojom.SearchResultConsumer": true, "crosapi.mojom.PrintServerObserver": true, "crosapi.mojom.PrintJobObserver": true, "crosapi.mojom.LocalPrintersObserver": true, "crosapi.mojom.LocalPrinter": true, "crosapi.mojom.PrintPreviewCrosDelegate": true, "crosapi.mojom.PrintPreviewCrosClient": true, "crosapi.mojom.TelemetryProbeService": true, "crosapi.mojom.StructuredMetricsService": true, "crosapi.mojom.TelemetryDiagnosticRoutineControl": true, "crosapi.mojom.TelemetryDiagnosticRoutineObserver": true, "crosapi.mojom.TelemetryDiagnosticRoutinesService": true, "crosapi.mojom.TelemetryEventObserver": true, "crosapi.mojom.TelemetryEventService": true, "crosapi.mojom.TelemetryManagementService": true, "crosapi.mojom.ScopedAccessPermission": true, "crosapi.mojom.VideoFrameHandler": true, "crosapi.mojom.VideoConferenceManagerClient": true, "chromeos.cfm.mojom.CfmBrowser": true, "chromeos.cfm.mojom.DisconnectReason": true, "chromeos.cfm.mojom.CfmServiceContext": true, "chromeos.cfm.mojom.CfmServiceAdaptor": true, "chromeos.cfm.mojom.ExternalDisplayBrightness": true, "ash.cfm.mojom.MeetBrowser": true, "ash.cfm.mojom.DataWatchDog": true, "ash.cfm.mojom.DataSource": true, "ash.cfm.mojom.DataAggregator": true, "chromeos.cfm.mojom.MeetDevicesDiagnostics": true, "chromeos.cfm.mojom.MeetDevicesInfo": true, "chromeos.cfm.mojom.PolicyInfoObserver": true, "chromeos.cfm.mojom.LoggerStateObserver": true, "chromeos.cfm.mojom.MeetDevicesLogger": true, "ash.cfm.mojom.XuCamera": true, "chromeos.machine_learning.mojom.DocumentScanner": true, "chromeos.machine_learning.mojom.GrammarChecker": true, "chromeos.machine_learning.mojom.GraphExecutor": true, "chromeos.machine_learning.mojom.HandwritingRecognizer": true, "chromeos.machine_learning.mojom.HeatmapPalmRejectionClient": true, "chromeos.machine_learning.mojom.ImageContentAnnotator": true, "chromeos.machine_learning.mojom.MachineLearningService": true, "chromeos.machine_learning.mojom.Model": true, "chromeos.machine_learning.mojom.SodaClient": true, "chromeos.machine_learning.mojom.SodaRecognizer": true, "chromeos.machine_learning.mojom.TextClassifier": true, "chromeos.machine_learning.mojom.TextSuggester": true, "chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer": true, "chromeos.media_perception.mojom.MediaPerception": true, "chromeos.media_perception.mojom.MediaPerceptionService": true, "chromeos.media_perception.mojom.MediaPerceptionController": true, "chromeos.media_perception.mojom.MediaPerceptionControllerClient": true, "chromeos.network_config.mojom.CrosNetworkConfig": true, "chromeos.network_config.mojom.CrosNetworkConfigObserver": true, "chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines": true, "chromeos.network_health.mojom.NetworkEventsObserver": true, "chromeos.network_health.mojom.NetworkHealthService": true, "chromeos.tts.mojom.TtsService": true, "chromeos.tts.mojom.GoogleTtsStream": true, "chromeos.tts.mojom.PlaybackTtsStream": true, "chromeos.tts.mojom.TtsEventObserver": true, "math.mojom.MathService": true, "codelabs.mojom.ObjectA": true, "codelabs.mojom.ObjectB": true, "codelabs.mojom.AssociatedProcess": true, "codelabs.mojom.GenericInterface": true, "codelabs.mojom.Process": true, "attribution_reporting.mojom.DataHost": true, "autofill.mojom.AutofillAgent": true, "autofill.mojom.PasswordAutofillAgent": true, "autofill.mojom.PasswordGenerationAgent": true, "autofill.mojom.AutofillDriver": true, "autofill.mojom.PasswordManagerDriver": true, "autofill.mojom.PasswordGenerationDriver": true, "autofill_ml_internals.mojom.Page": true, "autofill_ml_internals.mojom.PageHandler": true, "autofill.mojom.TypeTraitsTest": true, "browser_controls_api.mojom.BrowserControlsObserver": true, "browser_controls_api.mojom.BrowserControlsService": true, "tabs_api.mojom.TabStripService": true, "tabs_api.mojom.TabsObserver": true, "tabs_api.mojom.TabStripExperimentService": true, "browsing_topics.mojom.PageHandler": true, "cast_streaming.mojom.AudioBufferRequester": true, "cast_streaming.mojom.VideoBufferRequester": true, "cast_streaming.mojom.DemuxerConnector": true, "cast_streaming.mojom.RendererController": true, "chromeos_camera.mojom.JpegEncodeAccelerator": true, "chromeos_camera.mojom.MjpegDecodeAccelerator": true, "commerce.mojom.CommerceInternalsHandlerFactory": true, "commerce.mojom.CommerceInternalsHandler": true, "commerce.mojom.CommerceInternalsPage": true, "commerce_web_extractor.mojom.CommerceWebExtractor": true, "commerce.price_insights.mojom.PriceInsightsHandler": true, "commerce.price_insights.mojom.PriceInsightsHandlerFactory": true, "commerce.price_tracking.mojom.PriceTrackingHandler": true, "commerce.price_tracking.mojom.Page": true, "commerce.price_tracking.mojom.PriceTrackingHandlerFactory": true, "commerce.product_specifications.mojom.ProductSpecificationsHandler": true, "commerce.product_specifications.mojom.Page": true, "commerce.product_specifications.mojom.ProductSpecificationsHandlerFactory": true, "shopping_service.mojom.ShoppingServiceHandlerFactory": true, "shopping_service.mojom.ShoppingServiceHandler": true, "content_capture.mojom.ContentCaptureReceiver": true, "content_capture.mojom.ContentCaptureSender": true, "content_settings.mojom.ContentSettingsAgent": true, "content_settings.mojom.ContentSettingsManager": true, "continuous_search.mojom.SearchResultExtractor": true, "data_sharing_internals.mojom.PageHandlerFactory": true, "data_sharing_internals.mojom.PageHandler": true, "data_sharing_internals.mojom.Page": true, "device_signals.mojom.SystemSignalsService": true, "discardable_memory.mojom.DiscardableSharedMemoryManager": true, "dom_distiller.mojom.DistillabilityService": true, "dom_distiller.mojom.DistillerJavaScriptService": true, "download.mojom.DownloadStreamClient": true, "connectors_internals.mojom.PageHandler": true, "payments.facilitated.mojom.PixCodeValidator": true, "feed.mojom.RssLinkReader": true, "global_media_controls.mojom.DeviceListHost": true, "global_media_controls.mojom.DeviceListClient": true, "global_media_controls.mojom.DeviceService": true, "global_media_controls.mojom.DevicePickerProvider": true, "global_media_controls.mojom.DevicePickerObserver": true, "guest_contents.mojom.GuestContentsHost": true, "guest_view.mojom.PageHandlerFactory": true, "guest_view.mojom.PageHandler": true, "guest_view.mojom.ViewHandle": true, "guest_view.mojom.GuestViewHost": true, "heap_profiling.mojom.SnapshotController": true, "heap_profiling.mojom.TestConnector": true, "history_clusters_internals.mojom.PageHandlerFactory": true, "history_clusters_internals.mojom.PageHandler": true, "history_clusters_internals.mojom.Page": true, "input.mojom.RenderInputRouterDelegate": true, "input.mojom.RenderInputRouterDelegateClient": true, "js_injection.mojom.JsToBrowserMessaging": true, "js_injection.mojom.JsObjectsClient": true, "js_injection.mojom.BrowserToJsMessagingFactory": true, "js_injection.mojom.BrowserToJsMessaging": true, "js_injection.mojom.JsCommunication": true, "language_detection.mojom.ContentLanguageDetectionDriver": true, "legion.mojom.OakSession": true, "components.media_control.mojom.MediaPlaybackOptions": true, "media_router.mojom.Debugger": true, "media_router.mojom.Logger": true, "media_router.mojom.MediaController": true, "media_router.mojom.MediaRouteProvider": true, "media_router.mojom.MediaRouter": true, "media_router.mojom.MediaRouterTraitsTestService": true, "media_router.mojom.MediaStatusObserver": true, "metrics.dwa.mojom.DwaRecorderClientInterface": true, "metrics.dwa.mojom.DwaRecorderInterface": true, "metrics.dwa.mojom.DwaRecorderFactory": true, "metrics.mojom.CallStackProfileCollector": true, "metrics.mojom.CallStackProfileCollectorTest": true, "metrics.mojom.ChildHistogramFetcherFactory": true, "metrics.mojom.ChildHistogramFetcher": true, "metrics.mojom.SingleSampleMetricsProvider": true, "metrics.mojom.SingleSampleMetric": true, "mirroring.mojom.CastMessageChannel": true, "mirroring.mojom.MirroringService": true, "mirroring.mojom.AudioStreamCreatorClient": true, "mirroring.mojom.ResourceProvider": true, "mirroring.mojom.SessionObserver": true, "network_hints.mojom.NetworkHintsHandler": true, "prerender.mojom.NoStatePrefetchCanceler": true, "prerender.mojom.NoStatePrefetchMessages": true, "searchbox.mojom.PageHandler": true, "searchbox.mojom.Page": true, "on_device_translation.mojom.FileOperationProxy": true, "on_device_translation.mojom.OnDeviceTranslationService": true, "on_device_translation.mojom.Translator": true, "on_load_script_injector.mojom.OnLoadScriptInjector": true, "optimization_guide.mojom.PageTextConsumer": true, "optimization_guide.mojom.PageTextService": true, "optimization_guide_internals.mojom.PageHandlerFactory": true, "optimization_guide_internals.mojom.Page": true, "optimization_guide.mojom.ModelSolution": true, "optimization_guide.mojom.ModelSubscriber": true, "optimization_guide.mojom.ModelBroker": true, "page_image_service.mojom.PageImageServiceHandler": true, "page_load_metrics.mojom.PageLoadMetrics": true, "paint_preview.mojom.PaintPreviewRecorder": true, "password_manager.mojom.CSVPasswordParser": true, "performance_manager.mojom.DocumentCoordinationUnit": true, "performance_manager.mojom.ProcessCoordinationUnit": true, "performance_manager.mojom.ChildProcessCoordinationUnit": true, "printing.mojom.PrintPreviewUI": true, "printing.mojom.PrintRenderFrame": true, "printing.mojom.PrintManagerHost": true, "remote_cocoa.mojom.AlertBridge": true, "remote_cocoa.mojom.StubInterface": true, "remote_cocoa.mojom.Application": true, "remote_cocoa.mojom.MenuHost": true, "remote_cocoa.mojom.Menu": true, "remote_cocoa.mojom.NativeWidgetNSWindow": true, "remote_cocoa.mojom.NativeWidgetNSWindowHost": true, "remote_cocoa.mojom.SelectFileDialog": true, "remote_cocoa.mojom.TextInputHost": true, "safe_browsing.mojom.SafeBrowsing": true, "safe_browsing.mojom.ThreatReporter": true, "safe_browsing.mojom.PhishingDetector": true, "safe_browsing.mojom.PhishingModelSetter": true, "safe_browsing.mojom.PhishingModelSetterTestObserver": true, "safe_browsing.mojom.PhishingImageEmbedderDetector": true, "safe_browsing.mojom.ExtensionWebRequestReporter": true, "safe_browsing.mojom.SafeBrowsingUrlChecker": true, "security_interstitials.mojom.InterstitialCommands": true, "filesystem.mojom.Directory": true, "font_service.mojom.FontService": true, "font_data_service.mojom.FontDataService": true, "heap_profiling.mojom.ProfilingClient": true, "heap_profiling.mojom.ProfilingService": true, "paint_preview.mojom.PaintPreviewCompositor": true, "paint_preview.mojom.PaintPreviewCompositorCollection": true, "patch.mojom.FilePatcher": true, "printing.mojom.PrintCompositor": true, "quarantine.mojom.Quarantine": true, "storage.mojom.IndexedDBClientStateChecker": true, "storage.mojom.IndexedDBClientKeepActive": true, "storage.mojom.IndexedDBObserver": true, "storage.mojom.IndexedDBControl": true, "storage.mojom.MockFailureInjector": true, "storage.mojom.IndexedDBControlTest": true, "storage.mojom.BlobDataItemReader": true, "storage.mojom.BlobStorageContext": true, "storage.mojom.CacheStorageObserver": true, "storage.mojom.CacheStorageControl": true, "storage.mojom.FileSystemAccessContext": true, "storage.mojom.FileLock": true, "storage.mojom.Directory": true, "storage.mojom.LocalStorageControl": true, "storage.mojom.QuotaClient": true, "storage.mojom.ServiceWorkerLiveVersionRef": true, "storage.mojom.ServiceWorkerResourceReader": true, "storage.mojom.ServiceWorkerResourceWriter": true, "storage.mojom.ServiceWorkerResourceMetadataWriter": true, "storage.mojom.ServiceWorkerStorageControl": true, "storage.mojom.SessionStorageControl": true, "storage.mojom.StorageService": true, "unzip.mojom.UnzipFilter": true, "unzip.mojom.UnzipListener": true, "unzip.mojom.Unzipper": true, "site_engagement.mojom.SiteEngagementDetailsProvider": true, "spellcheck.mojom.SpellChecker": true, "spellcheck.mojom.SpellCheckInitializationHost": true, "spellcheck.mojom.SpellCheckHost": true, "spellcheck.mojom.SpellCheckPanel": true, "spellcheck.mojom.SpellCheckPanelHost": true, "subresource_filter.mojom.SubresourceFilterAgent": true, "subresource_filter.mojom.SubresourceFilterHost": true, "subresource_filter.mojom.SubresourceFilterRulesetObserver": true, "system_media_controls.mojom.SystemMediaControls": true, "system_media_controls.mojom.SystemMediaControlsObserver": true, "translate.mojom.TranslateAgent": true, "translate.mojom.ContentTranslateDriver": true, "unexportable_keys.mojom.UnexportableKeyService": true, "url_rewrite.mojom.UrlRequestRulesReceiver": true, "user_data_importer.mojom.BookmarkHtmlParser": true, "visitedlink.mojom.VisitedLinkNotificationSink": true, "viz.mojom.VizDebugOutput": true, "wallet.mojom.ImageExtractor": true, "web_cache.mojom.WebCache": true, "web_package.mojom.WebBundleParserFactory": true, "web_package.mojom.WebBundleParser": true, "web_package.mojom.BundleDataSource": true, "webapps.mojom.WebPageMetadataAgent": true, "chrome_urls.mojom.PageHandlerFactory": true, "chrome_urls.mojom.PageHandler": true, "chrome_urls.mojom.Page": true, "attribution_internals.mojom.Observer": true, "attribution_internals.mojom.Handler": true, "attribution_internals.mojom.Factory": true, "storage.mojom.IdbInternalsHandler": true, "private_aggregation_internals.mojom.Observer": true, "private_aggregation_internals.mojom.Handler": true, "private_aggregation_internals.mojom.Factory": true, "mojom.ProcessInternalsHandler": true, "traces_internals.mojom.TracesInternalsHandlerFactory": true, "traces_internals.mojom.PageHandler": true, "traces_internals.mojom.Page": true, "webxr.mojom.WebXrInternalsHandler": true, "webxr.mojom.XRInternalsSessionListener": true, "content.mojom.AgentSchedulingGroupHost": true, "content.mojom.AgentSchedulingGroup": true, "content.mojom.RouteProvider": true, "content.mojom.ChildProcessHost": true, "content.mojom.ChildProcess": true, "content.mojom.DomAutomationControllerHost": true, "content.mojom.MhtmlFileWriter": true, "content.mojom.FieldTrialRecorder": true, "content.mojom.FrameHTMLSerializerHandler": true, "content.mojom.Frame": true, "content.mojom.FrameBindingsControl": true, "content.mojom.NavigationRendererCancellationListener": true, "content.mojom.FrameHost": true, "content.mojom.GinJavaBridge": true, "content.mojom.GinJavaBridgeRemoteObject": true, "content.mojom.GinJavaBridgeHost": true, "content.mojom.InputInjector": true, "content.mojom.MediaInternalLogRecords": true, "content.mojom.MemoryConsumerTraitsTest": true, "content.mojom.ChildMemoryCoordinator": true, "content.mojom.ChildMemoryConsumerRegistryHost": true, "content.mojom.NavigationClient": true, "content.mojom.RenderMessageFilter": true, "remote_cocoa.mojom.PopupMenuRunner": true, "remote_cocoa.mojom.RenderWidgetHostNSView": true, "remote_cocoa.mojom.RenderWidgetHostNSViewHost": true, "content.mojom.Renderer": true, "content.mojom.RendererHost": true, "content.mojom.RendererVariationsConfiguration": true, "content.mojom.SandboxSupport": true, "content.mojom.SyntheticTrialConfiguration": true, "content.mojom.ThreadTypeSwitcher": true, "remote_cocoa.mojom.WebContentsNSView": true, "remote_cocoa.mojom.WebContentsNSViewHost": true, "content.mojom.WebUIHost": true, "content.mojom.WebUI": true, "content.mojom.FontCacheWin": true, "content.mojom.ResourceUsageReporter": true, "content.mojom.TestInterfaceForDefer": true, "content.mojom.TestInterfaceForGrant": true, "content.mojom.TestInterfaceForCancel": true, "content.mojom.TestInterfaceForUnexpected": true, "content.mojom.MojoContextProvider": true, "content.mojom.TestService": true, "auction_worklet.mojom.AuctionNetworkEventsHandler": true, "auction_worklet.mojom.AuctionSharedStorageHost": true, "auction_worklet.mojom.LoadSellerWorkletClient": true, "auction_worklet.mojom.AuctionWorkletService": true, "auction_worklet.mojom.GenerateBidClient": true, "auction_worklet.mojom.GenerateBidFinalizer": true, "auction_worklet.mojom.BidderWorklet": true, "auction_worklet.mojom.ScoreAdClient": true, "auction_worklet.mojom.SellerWorklet": true, "auction_worklet.mojom.TrustedSignalsCacheClient": true, "auction_worklet.mojom.TrustedSignalsCache": true, "content.mojom.MainFrameCounterTest": true, "content.mojom.PowerMonitorTest": true, "content.mojom.RenderFrameTestHelper": true, "content.mojom.FrameHostTestInterface": true, "content.mojom.FakeBluetoothChooser": true, "content.mojom.FakeBluetoothChooserFactory": true, "content.mojom.FakeBluetoothChooserClient": true, "content.mojom.MojoEcho": true, "content.optional_numerics_unittest.mojom.Params": true, "content.optional_numerics_unittest.mojom.ResponseParams": true, "content.optional_numerics_unittest.mojom.InterfaceV0": true, "content.optional_numerics_unittest.mojom.InterfaceV2": true, "content.mojom.WebTestRenderFrame": true, "content.mojom.WebTestControlHost": true, "content.mojom.NonAssociatedWebTestControlHost": true, "content.mojom.WebTestBluetoothFakeAdapterSetter": true, "bluetooth.mojom.Advertisement": true, "bluetooth.mojom.DiscoverySession": true, "bluetooth.mojom.Socket": true, "bluetooth.mojom.ServerSocket": true, "bluetooth.mojom.GattService": true, "bluetooth.mojom.GattServiceObserver": true, "bluetooth.mojom.Adapter": true, "bluetooth.mojom.AdapterObserver": true, "bluetooth.mojom.Device": true, "bluetooth.mojom.FakeBluetooth": true, "bluetooth.mojom.FakeCentral": true, "bluetooth.mojom.FakeCentralClient": true, "device.mojom.GamepadObserver": true, "device.mojom.GamepadMonitor": true, "device.mojom.GamepadHapticsManager": true, "device.mojom.XRSessionController": true, "device.mojom.XRRuntimeEventListener": true, "device.mojom.XRRuntime": true, "device.mojom.ImmersiveOverlay": true, "device.mojom.IsolatedXRRuntimeProviderClient": true, "device.mojom.IsolatedXRRuntimeProvider": true, "device.mojom.XRDeviceService": true, "device.mojom.XRDeviceServiceHost": true, "device_test.mojom.XRTestHook": true, "device_test.mojom.XRServiceTestHook": true, "device.mojom.VRService": true, "device.mojom.XRSessionMetricsRecorder": true, "device.mojom.VRServiceClient": true, "device.mojom.XREnvironmentIntegrationProvider": true, "device.mojom.XRFrameDataProvider": true, "device.mojom.XRPresentationProvider": true, "device.mojom.XRPresentationClient": true, "device.mojom.XRSessionClient": true, "device.mojom.XRLayerManager": true, "device.mojom.WebXrInternalsRendererListener": true, "extensions.mime_handler.MimeHandlerService": true, "extensions.mime_handler.BeforeUnloadControl": true, "extensions.mojom.AppWindow": true, "extensions.mojom.RendererAutomationRegistry": true, "extensions.mojom.EventDispatcher": true, "extensions.mojom.EventRouter": true, "extensions.mojom.LocalFrame": true, "extensions.mojom.LocalFrameHost": true, "extensions.mojom.GuestView": true, "extensions.mojom.MimeHandlerViewContainerManager": true, "extensions.KeepAlive": true, "extensions.mojom.MessagePort": true, "extensions.mojom.MessagePortHost": true, "extensions.mojom.Renderer": true, "extensions.mojom.RendererHost": true, "extensions.mojom.ServiceWorker": true, "extensions.mojom.ServiceWorkerHost": true, "mojom.WebEngineMediaResourceProvider": true, "gpu.mojom.GpuChannel": true, "gpu.mojom.CommandBuffer": true, "gpu.mojom.CommandBufferClient": true, "gpu.mojom.DCOMPTexture": true, "gpu.mojom.DCOMPTextureClient": true, "gpu.mojom.SharedImagePoolClientInterface": true, "ai.mojom.AIPrototypingService": true, "ai.mojom.EnhancedCalendarService": true, "ai.mojom.SmartTabGroupingService": true, "ai.mojom.TabOrganizationService": true, "ai.mojom.ZeroStateSuggestionsService": true, "web.mojom.WebUsageController": true, "IPC.mojom.Channel": true, "IPC.mojom.ChannelBootstrap": true, "media.mojom.ImageCapture": false, "media.mojom.VideoCaptureObserver": true, "media.mojom.VideoCaptureHost": true, "cros.mojom.Camera3CallbackOps": true, "cros.mojom.Camera3DeviceOps": true, "cros.mojom.CameraAppDeviceProvider": true, "cros.mojom.CameraAppDeviceBridge": true, "cros.mojom.CameraAppDevice": true, "cros.mojom.ResultMetadataObserver": true, "cros.mojom.CameraEventObserver": true, "cros.mojom.DocumentCornersObserver": true, "cros.mojom.CameraInfoObserver": true, "cros.mojom.StillCaptureResultObserver": true, "cros.mojom.CameraModuleCallbacks": true, "cros.mojom.VendorTagOps": true, "cros.mojom.CameraModule": true, "cros.mojom.CameraHalClient": true, "cros.mojom.KioskVisionObserver": true, "cros.mojom.CameraHalDispatcher": true, "cros.mojom.CrosCameraServiceObserver": true, "cros.mojom.CrosCameraService": true, "cros.mojom.CrosDocumentScanner": true, "cros.mojom.JpegAcceleratorProvider": true, "cros.mojom.CrosDisplayObserver": true, "cros.mojom.CrosLidObserver": true, "cros.mojom.CrosPowerObserver": true, "cros.mojom.CrosSystemEventMonitor": true, "cros.mojom.VideoCaptureDeviceInfoObserver": true, "cros.mojom.VideoCaptureDeviceInfoMonitor": true, "midi.mojom.MidiSessionClient": true, "midi.mojom.MidiSessionProvider": true, "midi.mojom.MidiSession": true, "media.mojom.AndroidOverlayProvider": true, "media.mojom.AndroidOverlay": true, "media.mojom.AndroidOverlayClient": true, "media.mojom.AudioDecoder": true, "media.mojom.AudioDecoderClient": true, "media.mojom.AudioEncoder": true, "media.mojom.AudioEncoderClient": true, "media.mojom.AudioInputStream": true, "media.mojom.AudioInputStreamClient": true, "media.mojom.AudioInputStreamObserver": true, "media.mojom.AudioLog": true, "media.mojom.AudioLogFactory": true, "media.mojom.AudioOutputStream": true, "media.mojom.AudioOutputStreamObserver": true, "media.mojom.AudioOutputStreamProvider": true, "media.mojom.AudioOutputStreamProviderClient": true, "media.mojom.DeviceSwitchInterface": true, "media.mojom.AudioProcessorControls": true, "media.mojom.LocalMuter": true, "media.mojom.AudioStreamFactory": true, "media.mojom.CastApplicationMediaInfoManager": true, "media.mojom.CdmContextEventCallback": true, "media.mojom.CdmContextForOOPVD": true, "media.mojom.CdmDocumentService": true, "media.mojom.CdmService": true, "media.mojom.CdmServiceBroker": true, "media.mojom.CdmStorage": true, "media.mojom.CdmFile": true, "media.mojom.ContentDecryptionModule": true, "media.mojom.ContentDecryptionModuleClient": true, "media.mojom.CdmFactory": true, "media.mojom.DCOMPSurfaceRegistry": true, "media.mojom.Decryptor": true, "media.mojom.FrameResourceReleaser": true, "media.mojom.DemuxerStream": true, "media.mojom.MuteStateObserver": true, "media.mojom.FrameInterfaceFactory": true, "media.mojom.FuchsiaMediaCdmProvider": true, "media.mojom.FuchsiaMediaCodecProvider": true, "media.mojom.VideoDecoderTracker": true, "media.mojom.InterfaceFactory": true, "media.mojom.KeySystemSupportObserver": true, "media.mojom.KeySystemSupport": true, "media.mojom.MediaDrmStorage": true, "media.mojom.MediaFoundationPreferences": true, "media.mojom.GpuInfoObserver": true, "media.mojom.MediaFoundationService": true, "media.mojom.MediaFoundationServiceBroker": true, "media.mojom.MediaLog": true, "media.mojom.MediaMetricsProvider": true, "media.mojom.MediaPlayer": true, "media.mojom.MediaPlayerObserverClient": true, "media.mojom.MediaPlayerObserver": true, "media.mojom.MediaPlayerHost": true, "media.mojom.MediaService": true, "media.mojom.MediaDrmSupport": true, "media.mojom.OutputProtection": true, "media.mojom.PlaybackEventsRecorder": true, "media.mojom.ProvisionFetcher": true, "media.mojom.RemoterFactory": true, "media.mojom.RemotingDataStreamSender": true, "media.mojom.Remoter": true, "media.mojom.RemotingSource": true, "media.mojom.Remotee": true, "media.mojom.RemotingSink": true, "media.mojom.RemotingDataStreamReceiver": true, "media.mojom.Renderer": true, "media.mojom.RendererClient": true, "media.mojom.FlingingRendererClientExtension": true, "media.mojom.MediaFoundationRendererExtension": true, "media.mojom.MediaFoundationRendererObserver": true, "media.mojom.MediaFoundationRendererNotifier": true, "media.mojom.SpeechRecognitionContext": true, "media.mojom.SpeechRecognitionRecognizer": true, "media.mojom.SpeechRecognitionRecognizerClient": true, "media.mojom.SpeechRecognitionBrowserObserver": true, "media.mojom.SpeechRecognitionSurface": true, "media.mojom.SpeechRecognitionSurfaceClient": true, "media.mojom.SpeechRecognitionClientBrowserInterface": true, "media.mojom.SpeechRecognitionAudioForwarder": true, "media.mojom.AudioSourceSpeechRecognitionContext": true, "media.mojom.SpeechRecognitionService": true, "media.mojom.AudioSourceFetcher": true, "media.mojom.SpeechRecognizer": true, "media.mojom.OnDeviceSpeechRecognition": true, "media.mojom.SpeechRecognitionSession": true, "media.mojom.SpeechRecognitionSessionClient": true, "media.mojom.VideoDecodePerfHistory": true, "media.mojom.VideoDecodeStatsRecorder": true, "media.mojom.VideoFrameHandleReleaser": true, "media.mojom.VideoDecoder": true, "media.mojom.VideoDecoderClient": true, "media.mojom.VideoDecoderFactoryProcess": true, "media.mojom.VideoEncodeAcceleratorProvider": true, "media.mojom.VideoEncodeAcceleratorProviderFactory": true, "media.mojom.VideoEncodeAccelerator": true, "media.mojom.VideoEncodeAcceleratorClient": true, "media.mojom.VideoEncoderMetricsProvider": true, "media.mojom.WatchTimeRecorder": true, "media.mojom.WebrtcVideoPerfRecorder": true, "media.mojom.WebrtcVideoPerfHistory": true, "mojo_base.mojom.Binder": true, "mojo_base.mojom.GenericAssociatedInterface": true, "fuzz.mojom.FuzzDummyInterface": true, "fuzz.mojom.FuzzInterface": true, "pdf.mojom.SaveDataBufferHandler": true, "pdf.mojom.PdfListener": true, "pdf.mojom.PdfHost": true, "remoting.mojom.ChromotingHostServices": true, "remoting.mojom.ChromotingSessionServices": true, "remoting.mojom.DesktopSessionRequestHandler": true, "remoting.mojom.DesktopSessionManager": true, "remoting.mojom.DesktopSessionAgent": true, "remoting.mojom.FileWriter": true, "remoting.mojom.FileReader": true, "remoting.mojom.DesktopSessionControl": true, "remoting.mojom.VideoCapturer": true, "remoting.mojom.VideoCapturerEventHandler": true, "remoting.mojom.DesktopSessionEventHandler": true, "remoting.mojom.DesktopSessionStateHandler": true, "remoting.mojom.WorkerProcessControl": true, "remoting.mojom.SecurityKeyForwarder": true, "remoting.mojom.SupportHostObserver": true, "remoting.mojom.RemoteUrlOpener": true, "remoting.mojom.RemotingHostControl": true, "remoting.mojom.DesktopSessionConnectionEvents": true, "remoting.mojom.HostStatusObserver": true, "remoting.mojom.WebAuthnRequestCanceller": true, "remoting.mojom.WebAuthnProxy": true, "sandbox.mac.mojom.TraitsTestService": true, "ax.android.mojom.AccessibilityHelperHost": true, "ax.android.mojom.AccessibilityHelperInstance": true, "ax.mojom.AssistiveTechnologyController": true, "ax.mojom.AccessibilityService": true, "ax.mojom.AccessibilityServiceClient": true, "ax.mojom.Autoclick": true, "ax.mojom.AutoclickClient": true, "ax.mojom.Automation": true, "ax.mojom.AutomationClient": true, "ax.mojom.AccessibilityFileLoader": true, "ax.mojom.SpeechRecognitionEventObserver": true, "ax.mojom.SpeechRecognition": true, "ax.mojom.TtsUtteranceClient": true, "ax.mojom.Tts": true, "ax.mojom.UserInput": true, "ax.mojom.UserInterface": true, "audio.mojom.AudioService": true, "audio.mojom.DebugRecordingFileProvider": true, "audio.mojom.DebugRecording": true, "audio.mojom.DeviceListener": true, "audio.mojom.DeviceNotifier": true, "audio.mojom.LogFactoryManager": true, "audio.mojom.MlModelManager": true, "audio.mojom.SystemInfo": true, "audio.mojom.TestingApi": true, "cert_verifier.mojom.CertVerifierServiceFactory": true, "data_decoder.mojom.CborParser": true, "data_decoder.mojom.DataDecoderService": true, "data_decoder.mojom.Gzipper": true, "data_decoder.mojom.ImageDecoder": true, "data_decoder.mojom.StructuredHeadersParser": true, "data_decoder.mojom.XmlParser": true, "device.mojom.BatteryMonitor": true, "device.mojom.DeviceService": true, "device.mojom.FingerprintObserver": true, "device.mojom.Fingerprint": true, "device.mojom.Geolocation": true, "device.mojom.GeolocationContext": true, "device.mojom.GeolocationControl": true, "device.mojom.GeolocationInternalsObserver": true, "device.mojom.GeolocationInternals": true, "device.mojom.HidManagerClient": true, "device.mojom.HidManager": true, "device.mojom.HidConnection": true, "device.mojom.HidConnectionClient": true, "device.mojom.HidConnectionWatcher": true, "device.mojom.InputDeviceManagerClient": true, "device.mojom.InputDeviceManager": true, "device.mojom.MtpManagerClient": true, "device.mojom.MtpManager": true, "device.mojom.NFC": true, "device.mojom.NFCClient": true, "device.mojom.NFCProvider": true, "device.mojom.PowerMonitor": true, "device.mojom.PowerMonitorClient": true, "device.mojom.PressureManager": true, "device.mojom.PressureClient": true, "device.mojom.PublicIpAddressGeolocationProvider": true, "device.mojom.ScreenOrientation": true, "device.mojom.ScreenOrientationListener": true, "device.mojom.Sensor": false, "device.mojom.SensorClient": false, "device.mojom.SensorProvider": false, "device.mojom.SerialPortManager": true, "device.mojom.SerialPortManagerClient": true, "device.mojom.SerialPort": true, "device.mojom.SerialPortClient": true, "device.mojom.SerialPortConnectionWatcher": true, "device.mojom.SmartCardTransaction": true, "device.mojom.SmartCardConnection": true, "device.mojom.SmartCardConnectionWatcher": true, "device.mojom.SmartCardContext": true, "device.mojom.SmartCardContextFactory": true, "device.mojom.TimeZoneMonitor": true, "device.mojom.TimeZoneMonitorClient": true, "device.mojom.UsbDevice": false, "device.mojom.UsbDeviceClient": false, "device.mojom.UsbDeviceManager": false, "device.mojom.UsbDeviceManagerClient": false, "device.mojom.UsbDeviceManagerTest": true, "device.mojom.VibrationManager": true, "device.mojom.VibrationManagerListener": true, "device.mojom.WakeLock": true, "device.mojom.WakeLockContext": true, "device.mojom.WakeLockProvider": true, "device.mojom.WakeLockObserver": true, "image_annotation.mojom.ImageProcessor": true, "image_annotation.mojom.Annotator": true, "image_annotation.mojom.ImageAnnotationService": true, "media_session.mojom.AudioFocusObserver": true, "media_session.mojom.AudioFocusRequestClient": true, "media_session.mojom.AudioFocusManager": true, "media_session.mojom.AudioFocusManagerDebug": true, "media_session.mojom.MediaControllerManager": true, "media_session.mojom.MediaController": true, "media_session.mojom.MediaControllerObserver": true, "media_session.mojom.MediaControllerImageObserver": true, "media_session.mojom.MediaSessionObserver": true, "media_session.mojom.MediaSession": true, "media_session.mojom.MediaSessionService": true, "ukm.mojom.SingularUkmInterface": true, "ukm.mojom.UkmRecorderClientInterface": true, "ukm.mojom.UkmRecorderInterface": true, "ukm.mojom.UkmRecorderFactory": true, "network.mojom.TraitsTestService": true, "network.mojom.AcceptCHFrameObserver": true, "network.mojom.CacheEncryptionProvider": true, "cert_verifier.mojom.URLLoaderFactoryConnector": true, "cert_verifier.mojom.CertVerifierService": true, "cert_verifier.mojom.CertVerifierServiceClient": true, "cert_verifier.mojom.CertVerifierRequest": true, "cert_verifier.mojom.CertVerifierServiceUpdater": true, "network.mojom.ChunkedDataPipeGetter": true, "network.mojom.ConnectionChangeObserverClient": true, "network.mojom.CookieAccessObserver": true, "network.mojom.CookieEncryptionProvider": true, "network.mojom.CookieChangeListener": true, "network.mojom.CookieManager": true, "network.mojom.CrossOriginEmbedderPolicyReporter": true, "network.mojom.CrossOriginOpenerPolicyReporter": true, "network.mojom.DataPipeGetter": true, "network.mojom.DeviceBoundSessionManager": true, "network.mojom.DeviceBoundSessionAccessObserver": true, "network.mojom.DeviceBoundSessionEventObserver": true, "network.mojom.DevToolsObserver": true, "network.mojom.DocumentIsolationPolicyReporter": true, "network.mojom.FirstPartySetsAccessDelegate": true, "network.mojom.ResolveHostHandle": true, "network.mojom.ResolveHostClient": true, "network.mojom.MdnsListenClient": true, "network.mojom.HostResolver": true, "network.mojom.DnsConfigChangeManagerClient": true, "network.mojom.DnsConfigChangeManager": true, "network.mojom.FileEnumerator": true, "network.mojom.HttpCacheBackendFileOperations": true, "network.mojom.HttpCacheBackendFileOperationsFactory": true, "network.mojom.MdnsResponder": true, "network.mojom.NetLogExporter": true, "network.mojom.NetLogProxySource": true, "network.mojom.NetLogProxySink": true, "network.mojom.NetworkAnnotationMonitor": true, "network.mojom.NetworkChangeManagerClient": true, "network.mojom.NetworkChangeManager": true, "network.mojom.CustomProxyConnectionObserver": true, "network.mojom.CustomProxyConfigClient": true, "network.mojom.TrustedHeaderClient": true, "network.mojom.TrustedURLLoaderHeaderClient": true, "network.mojom.PreloadedSharedDictionaryInfoHandle": true, "network.mojom.NetworkContext": true, "network.mojom.NetworkContextClient": true, "network.mojom.NetworkInterfaceChangeListener": true, "network.mojom.NetworkQualityEstimatorManagerClient": true, "network.mojom.NetworkQualityEstimatorManager": true, "network.mojom.NetworkService": true, "network.mojom.DurableMessageCollector": true, "network.mojom.SimpleCacheEntry": true, "network.mojom.SimpleCacheEntryEnumerator": true, "network.mojom.SimpleCache": true, "network.mojom.NetworkServiceTest": true, "network.mojom.ObliviousHttpClient": true, "network.mojom.P2PNetworkNotificationClient": true, "network.mojom.P2PSocketManager": true, "network.mojom.P2PSocket": true, "network.mojom.P2PSocketClient": true, "network.mojom.P2PTrustedSocketManagerClient": true, "network.mojom.P2PTrustedSocketManager": true, "network.mojom.ProxyConfigClient": true, "network.mojom.ProxyConfigPollerClient": true, "network.mojom.ProxyErrorClient": true, "network.mojom.ProxyLookupClient": true, "network.mojom.ProxyResolvingSocket": true, "network.mojom.ProxyResolvingSocketFactory": true, "network.mojom.ReportingApiObserver": true, "network.mojom.RestrictedCookieManager": true, "network.mojom.RestrictedUDPSocket": true, "network.mojom.SharedDictionaryAccessObserver": true, "network.mojom.SocketBroker": true, "network.mojom.SocketConnectionTracker": true, "network.mojom.SSLConfigClient": true, "network.mojom.SystemDnsResolver": true, "network.mojom.TCPBoundSocket": true, "network.mojom.TCPConnectedSocket": true, "network.mojom.SocketObserver": true, "network.mojom.TCPServerSocket": true, "network.mojom.TLSClientSocket": true, "network.mojom.TrustTokenAccessObserver": true, "network.mojom.TrustTokenQueryAnswerer": true, "network.mojom.UDPSocket": true, "network.mojom.UDPSocketListener": true, "network.mojom.URLLoader": true, "network.mojom.URLLoaderClient": true, "network.mojom.URLLoaderFactory": true, "network.mojom.ClientCertificateResponder": true, "network.mojom.SSLPrivateKey": true, "network.mojom.AuthChallengeResponder": true, "network.mojom.URLLoaderNetworkServiceObserver": true, "network.mojom.WebBundleHandle": true, "network.mojom.WebTransport": true, "network.mojom.WebTransportClient": true, "network.mojom.WebTransportHandshakeClient": true, "network.mojom.WebSocketAuthenticationHandler": true, "network.mojom.WebSocketHandshakeClient": true, "network.mojom.WebSocketClient": true, "network.mojom.WebSocket": true, "on_device_model.mojom.DownloadObserver": true, "on_device_model.mojom.StreamingResponder": true, "on_device_model.mojom.ContextClient": true, "on_device_model.mojom.Session": true, "on_device_model.mojom.OnDeviceModel": true, "on_device_model.mojom.TextSafetySession": true, "on_device_model.mojom.TextSafetyModel": true, "on_device_model.mojom.AsrStreamResponder": true, "on_device_model.mojom.AsrStreamInput": true, "on_device_model.mojom.PlatformModelProgressObserver": true, "on_device_model.mojom.OnDeviceModelService": true, "on_device_model.mojom.OnDeviceModelPlatformService": true, "passage_embeddings.mojom.PassageEmbedder": true, "passage_embeddings.mojom.PassageEmbeddingsService": true, "prefs.mojom.ResetOnLoadObserver": true, "prefs.mojom.TrackedPreferenceValidationDelegate": true, "proxy_resolver.mojom.HostResolverRequestClient": true, "proxy_resolver.mojom.ProxyResolver": true, "proxy_resolver.mojom.ProxyResolverRequestClient": true, "proxy_resolver.mojom.ProxyResolverFactory": true, "proxy_resolver.mojom.ProxyResolverFactoryRequestClient": true, "proxy_resolver.mojom.SystemProxyResolver": true, "memory_instrumentation.mojom.ClientProcess": true, "memory_instrumentation.mojom.HeapProfiler": true, "memory_instrumentation.mojom.HeapProfilerHelper": true, "memory_instrumentation.mojom.Coordinator": true, "memory_instrumentation.mojom.CoordinatorConnector": true, "screen_ai.mojom.ScreenAIServiceShutdownHandler": true, "screen_ai.mojom.ScreenAIServiceFactory": true, "screen_ai.mojom.ScreenAIAnnotator": true, "screen_ai.mojom.Screen2xMainContentExtractor": true, "screen_ai.mojom.OCRService": true, "screen_ai.mojom.MainContentExtractionService": true, "service_manager.mojom.ProcessMetadata": true, "service_manager.mojom.Connector": true, "service_manager.mojom.InterfaceProvider": true, "service_manager.mojom.Service": true, "service_manager.mojom.ServiceControl": true, "service_manager.mojom.ServiceManagerListener": true, "service_manager.mojom.ServiceManager": true, "shape_detection.mojom.BarcodeDetection": true, "shape_detection.mojom.BarcodeDetectionProvider": true, "shape_detection.mojom.FaceDetection": true, "shape_detection.mojom.FaceDetectionProvider": true, "shape_detection.mojom.ShapeDetectionService": true, "shape_detection.mojom.TextDetection": true, "echo.mojom.EchoService": true, "tracing.mojom.BackgroundTracingAgentClient": true, "tracing.mojom.BackgroundTracingAgent": true, "tracing.mojom.BackgroundTracingAgentProvider": true, "tracing.mojom.ProducerHost": true, "tracing.mojom.ProducerClient": true, "tracing.mojom.PerfettoService": true, "tracing.mojom.ConsumerHost": true, "tracing.mojom.TracingSessionHost": true, "tracing.mojom.TracingSessionClient": true, "tracing.mojom.SystemTracingService": true, "tracing.mojom.TracedProcess": true, "tracing.mojom.TracingService": true, "video_capture.mojom.Device": true, "video_capture.mojom.DevicesChangedObserver": true, "video_capture.mojom.Producer": true, "video_capture.mojom.TestingControls": true, "video_capture.mojom.VideoCaptureService": true, "video_capture.mojom.VideoFrameAccessHandler": true, "video_capture.mojom.VideoFrameHandler": true, "video_capture.mojom.PushVideoStreamSubscription": true, "video_capture.mojom.VideoSource": true, "video_capture.mojom.VideoSourceProvider": true, "video_capture.mojom.SharedMemoryVirtualDevice": true, "video_capture.mojom.TextureVirtualDevice": true, "video_capture.mojom.GpuMemoryBufferVirtualDevice": true, "viz.mojom.BeginFrameObserver": true, "viz.mojom.DisplayPrivate": true, "viz.mojom.DisplayClient": true, "viz.mojom.ExternalBeginFrameController": true, "viz.mojom.ExternalBeginFrameControllerClient": true, "viz.mojom.FrameSinkManager": true, "viz.mojom.FrameSinkManagerClient": true, "viz.mojom.RendererInputRouterDelegateRegistry": true, "viz.mojom.FrameSinkManagerTestApi": true, "viz.mojom.FrameSinkVideoConsumerFrameCallbacks": true, "viz.mojom.FrameSinkVideoConsumer": true, "viz.mojom.FrameSinkVideoCapturer": true, "viz.mojom.FrameSinkVideoCaptureOverlay": true, "viz.mojom.FrameSinksMetricsRecorder": true, "viz.mojom.LayeredWindowUpdater": true, "viz.mojom.VSyncParameterObserver": true, "viz.mojom.GpuHost": true, "viz.mojom.GpuLogging": true, "viz.mojom.GpuService": true, "viz.mojom.InfoCollectionGpuService": true, "viz.mojom.VizMain": true, "viz.mojom.CompositingModeWatcher": true, "viz.mojom.CompositingModeReporter": true, "viz.mojom.CompositorFrameSink": true, "viz.mojom.CompositorFrameSinkClient": true, "viz.mojom.CopyOutputResultSender": true, "viz.mojom.FrameSinkBundle": true, "viz.mojom.FrameSinkBundleClient": true, "viz.mojom.LayerContext": true, "viz.mojom.LayerContextClient": true, "viz.mojom.TextureReleaser": true, "viz.mojom.VideoDetectorObserver": true, "viz.mojom.Gpu": true, "viz.mojom.InputTargetClient": true, "webnn.mojom.WebNNContext": true, "webnn.mojom.WebNNContextProvider": true, "webnn.mojom.WebNNGraph": true, "webnn.mojom.WebNNGraphBuilder": true, "webnn.mojom.WebNNTensor": true, "storage.mojom.QuotaInternalsHandler": true, "storage.mojom.QuotaManagerObserver": true, "blink.mojom.AIManagerCreateLanguageModelClient": false, "blink.mojom.AILanguageModel": false, "blink.mojom.AIManagerCreateWriterClient": false, "blink.mojom.AIManagerCreateRewriterClient": false, "blink.mojom.AIManagerCreateSummarizerClient": false, "blink.mojom.AIManagerCreateProofreaderClient": false, "blink.mojom.AIManager": false, "blink.mojom.AIProofreader": false, "blink.mojom.AIRewriter": false, "blink.mojom.AISummarizer": false, "blink.mojom.AIWriter": false, "blink.mojom.ModelStreamingResponder": false, "blink.mojom.AndroidFontLookup": false, "blink.mojom.AnnotationAgent": false, "blink.mojom.AnnotationAgentHost": false, "blink.mojom.AnnotationAgentContainer": false, "blink.mojom.AppBannerController": false, "blink.mojom.AppBannerEvent": false, "blink.mojom.AppBannerService": false, "blink.mojom.AssociatedInterface": false, "blink.mojom.AssociatedInterfaceProvider": false, "blink.mojom.AutoplayConfigurationClient": false, "blink.mojom.BackgroundFetchRegistrationObserver": false, "blink.mojom.BackgroundFetchService": false, "blink.mojom.BackgroundFetchRegistrationService": false, "blink.mojom.OneShotBackgroundSyncService": false, "blink.mojom.PeriodicBackgroundSyncService": false, "blink.mojom.BadgeService": false, "blink.mojom.BlobReaderClient": false, "blink.mojom.Blob": false, "blink.mojom.ProgressClient": false, "blink.mojom.BlobRegistry": false, "blink.mojom.BlobURLStore": false, "blink.mojom.BlobURLToken": false, "blink.mojom.BytesProvider": false, "blink.mojom.FileBackedBlobFactory": false, "blink.mojom.WebBluetoothService": true, "blink.mojom.WebBluetoothServerClient": true, "blink.mojom.WebBluetoothCharacteristicClient": true, "blink.mojom.WebBluetoothAdvertisementClient": true, "blink.mojom.BroadcastChannelClient": true, "blink.mojom.BroadcastChannelProvider": true, "blink.mojom.BrowserInterfaceBroker": false, "blink.mojom.BrowsingTopicsDocumentService": false, "blink.mojom.BucketHost": true, "blink.mojom.BucketManagerHost": true, "blink.mojom.CacheStorageCache": false, "blink.mojom.CacheStorage": false, "blink.mojom.CallStackGenerator": false, "blink.mojom.ColorChooserFactory": false, "blink.mojom.ColorChooser": false, "blink.mojom.ColorChooserClient": false, "blink.mojom.EyeDropperChooser": false, "blink.mojom.DateTimeChooser": false, "blink.mojom.FileChooser": false, "blink.mojom.PopupMenuClient": false, "blink.mojom.ClipboardListener": false, "blink.mojom.ClipboardHost": false, "blink.mojom.CloseListener": false, "blink.mojom.WebPressureManager": false, "blink.mojom.WebPressureClient": false, "blink.mojom.ContactsManager": false, "blink.mojom.AIPageContentAgent": false, "blink.mojom.PaidContentMetadataObserver": false, "blink.mojom.MetaTagsObserver": false, "blink.mojom.FrameMetadataObserverRegistry": false, "blink.mojom.InnerHtmlAgent": false, "blink.mojom.InnerTextAgent": false, "blink.mojom.ScriptToolHost": false, "blink.mojom.ContentIndexService": false, "blink.mojom.ContextMenuClient": false, "blink.mojom.AttributionHost": false, "blink.mojom.CookieStore": false, "blink.mojom.CrashMemoryMetricsReporter": false, "blink.mojom.CredentialManager": true, "blink.mojom.ManagedConfigurationObserver": false, "blink.mojom.DeviceAPIService": false, "blink.mojom.ManagedConfigurationService": false, "blink.mojom.DevicePostureProvider": false, "blink.mojom.DevicePostureClient": false, "blink.mojom.DevToolsAgent": false, "blink.mojom.DevToolsAgentHost": false, "blink.mojom.DevToolsSession": false, "blink.mojom.DevToolsSessionHost": false, "blink.mojom.DevToolsFrontend": false, "blink.mojom.DevToolsFrontendHost": false, "payments.mojom.DigitalGoods": false, "payments.mojom.DigitalGoodsFactory": false, "blink.mojom.DirectSocketsService": true, "blink.mojom.DiskAllocator": false, "blink.mojom.DocumentMetadata": false, "blink.mojom.DomStorageProvider": false, "blink.mojom.DomStorage": false, "blink.mojom.DomStorageClient": false, "blink.mojom.SessionStorageNamespace": false, "blink.mojom.StorageAreaObserver": false, "blink.mojom.StorageArea": false, "blink.mojom.DWriteFontProxy": true, "payments.facilitated.mojom.PaymentLinkHandler": false, "blink.mojom.ObservedFeature": false, "blink.mojom.FeatureObserver": false, "blink.mojom.FencedFrameOwnerHost": true, "blink.mojom.FileUtilitiesHost": false, "blink.mojom.FileSystemAccessAccessHandleHost": false, "blink.mojom.FileSystemAccessDataTransferToken": false, "blink.mojom.FileSystemAccessDirectoryEntriesListener": false, "blink.mojom.FileSystemAccessDirectoryHandle": false, "blink.mojom.FileSystemAccessFileDelegateHost": false, "blink.mojom.FileSystemAccessFileHandle": false, "blink.mojom.FileSystemAccessFileModificationHost": false, "blink.mojom.FileSystemAccessFileWriter": false, "blink.mojom.FileSystemAccessManager": false, "blink.mojom.FileSystemAccessObserver": false, "blink.mojom.FileSystemAccessObserverHost": false, "blink.mojom.FileSystemAccessTransferToken": false, "blink.mojom.FileSystemCancellableOperation": false, "blink.mojom.FileSystemOperationListener": false, "blink.mojom.ReceivedSnapshotListener": false, "blink.mojom.FileSystemManager": false, "blink.mojom.FontAccessManager": false, "blink.mojom.FontUniqueNameLookup": false, "blink.mojom.BackForwardCacheControllerHost": true, "blink.mojom.FindInPage": true, "blink.mojom.FindInPageClient": true, "blink.mojom.LocalFrameHost": true, "blink.mojom.NonAssociatedLocalFrameHost": true, "blink.mojom.LocalFrame": true, "blink.mojom.LocalMainFrame": true, "blink.mojom.LocalMainFrameHost": true, "blink.mojom.PolicyContainerHost": true, "blink.mojom.NavigationStateKeepAliveHandle": true, "blink.mojom.RemoteFrameHost": true, "blink.mojom.RemoteFrame": true, "blink.mojom.RemoteMainFrame": true, "blink.mojom.RemoteMainFrameHost": true, "blink.mojom.ReportingObserver": true, "blink.mojom.SurfaceEmbedder": true, "blink.mojom.EmbeddedFrameSinkClient": true, "blink.mojom.EmbeddedFrameSinkProvider": true, "blink.mojom.GeolocationService": false, "blink.mojom.GpuDataManager": true, "handwriting.mojom.HandwritingRecognizer": false, "handwriting.mojom.HandwritingRecognitionService": false, "blink.mojom.HidService": false, "blink.mojom.Hyphenation": false, "blink.mojom.IdleMonitor": false, "blink.mojom.IdleManager": false, "blink.mojom.ImageDownloader": false, "blink.mojom.IDBFactoryClient": true, "blink.mojom.IDBDatabaseCallbacks": true, "blink.mojom.IDBCursor": true, "blink.mojom.IDBTransaction": true, "blink.mojom.IDBDatabaseGetAllResultSink": true, "blink.mojom.IDBDatabase": true, "blink.mojom.IDBFactory": true, "blink.mojom.ImeRenderWidgetHost": false, "blink.mojom.WidgetInputHandlerHost": false, "blink.mojom.FrameWidgetInputHandler": false, "blink.mojom.WidgetInputHandler": false, "blink.mojom.TextSuggestionHost": false, "blink.mojom.TextSuggestionBackend": false, "blink.mojom.PointerLockContext": false, "blink.mojom.SynchronousCompositor": true, "blink.mojom.SynchronousCompositorHost": true, "blink.mojom.SynchronousCompositorControlHost": true, "blink.mojom.TextInputHost": true, "blink.mojom.InstallationService": false, "blink.mojom.InstalledAppProvider": false, "blink.mojom.AbortableAdAuction": false, "blink.mojom.AdAuctionService": false, "blink.mojom.KeyboardLockService": false, "blink.mojom.LCPCriticalPathPredictorHost": false, "blink.mojom.LeakDetector": false, "blink.mojom.TextFragmentReceiver": false, "blink.mojom.CodeCacheHost": false, "blink.mojom.ContentSecurityNotifier": false, "blink.mojom.FetchLaterLoaderFactory": false, "blink.mojom.FetchLaterLoader": false, "blink.mojom.KeepAliveHandle": false, "blink.mojom.KeepAliveHandleFactory": false, "blink.mojom.AnchorElementMetricsHost": false, "blink.mojom.PauseSubresourceLoadingHandle": false, "blink.mojom.ResourceLoadInfoNotifier": false, "blink.mojom.LockScreenService": false, "blink.mojom.LockHandle": false, "blink.mojom.LockRequest": false, "blink.mojom.LockManager": false, "blink.mojom.ManifestManager": false, "blink.mojom.ManifestUrlChangeObserver": false, "blink.mojom.FullscreenVideoElementHandler": false, "blink.mojom.RendererAudioInputStreamFactory": false, "blink.mojom.RendererAudioInputStreamFactoryClient": false, "blink.mojom.RendererAudioOutputStreamFactory": false, "blink.mojom.MediaSessionClient": false, "blink.mojom.MediaSessionService": false, "blink.mojom.AecDumpAgent": false, "blink.mojom.AecDumpManager": false, "blink.mojom.MediaDevicesDispatcherHost": false, "blink.mojom.MediaDevicesListener": false, "blink.mojom.MediaStreamDeviceObserver": false, "blink.mojom.MediaStreamDispatcherHost": false, "blink.mojom.MediaStreamTrackMetricsHost": false, "blink.mojom.MemoryUsageMonitorLinux": true, "blink.mojom.ImageReleaseCallback": true, "blink.mojom.MimeRegistry": false, "blink.mojom.NavigationResumeDeferredCommitListener": true, "blink.mojom.NonPersistentNotificationListener": false, "blink.mojom.NotificationService": false, "blink.mojom.TranslationManagerCreateTranslatorClient": false, "blink.mojom.TranslationManager": false, "blink.mojom.Translator": false, "blink.mojom.OomInterventionHost": false, "blink.mojom.OomIntervention": false, "blink.mojom.OriginTrialStateHost": true, "blink.mojom.DisplayCutoutHost": true, "blink.mojom.DisplayCutoutClient": true, "blink.mojom.PageBroadcast": true, "blink.mojom.FrameWidget": true, "blink.mojom.FrameWidgetHost": true, "blink.mojom.PopupWidgetHost": true, "payments.mojom.PaymentManager": false, "payments.mojom.PaymentHandlerResponseCallback": false, "payments.mojom.PaymentHandlerHost": false, "payments.mojom.PaymentRequestClient": false, "payments.mojom.PaymentRequest": false, "payments.mojom.SecurePaymentConfirmationService": false, "blink.mojom.PeerConnectionManager": false, "blink.mojom.PeerConnectionTrackerHost": false, "blink.mojom.V8DetailedMemoryReporter": false, "blink.mojom.PermissionObserver": false, "blink.mojom.EmbeddedPermissionControlClient": false, "blink.mojom.PermissionService": false, "blink.mojom.PersistentRendererPrefsService": false, "blink.mojom.PictureInPictureSessionObserver": false, "blink.mojom.PictureInPictureSession": false, "blink.mojom.PictureInPictureService": false, "blink.mojom.PluginRegistry": false, "blink.mojom.AnchorElementInteractionHost": false, "blink.mojom.NoStatePrefetchProcessor": false, "blink.mojom.PresentationConnection": false, "blink.mojom.PresentationService": false, "blink.mojom.PresentationController": false, "blink.mojom.PresentationReceiver": false, "blink.mojom.WebPrintJobStateObserver": true, "blink.mojom.WebPrintJobController": true, "blink.mojom.WebPrinter": true, "blink.mojom.WebPrintingService": true, "blink.mojom.PrivateAggregationHost": false, "blink.mojom.PushMessaging": false, "blink.mojom.QuotaManagerHost": false, "blink.mojom.RemoteObjectHost": true, "blink.mojom.RemoteObject": true, "blink.mojom.RemoteObjectGatewayFactory": true, "blink.mojom.RemoteObjectGateway": true, "blink.mojom.RenderAccessibilityHost": false, "blink.mojom.RenderAccessibility": false, "blink.mojom.RendererPreferenceWatcher": false, "blink.mojom.ReportingServiceProxy": false, "blink.mojom.WebSensorProvider": false, "blink.mojom.SerialService": false, "blink.mojom.SerialServiceClient": false, "blink.mojom.ControllerServiceWorker": true, "blink.mojom.ControllerServiceWorkerConnector": true, "blink.mojom.EmbeddedWorkerInstanceClient": true, "blink.mojom.EmbeddedWorkerInstanceHost": true, "blink.mojom.ServiceWorkerHost": true, "blink.mojom.ServiceWorker": true, "blink.mojom.ServiceWorkerContainerHost": true, "blink.mojom.ServiceWorkerContainer": true, "blink.mojom.ServiceWorkerFetchResponseCallback": false, "blink.mojom.ServiceWorkerInstalledScriptsManagerHost": false, "blink.mojom.ServiceWorkerInstalledScriptsManager": false, "blink.mojom.ServiceWorkerObjectHost": true, "blink.mojom.ServiceWorkerObject": true, "blink.mojom.ServiceWorkerRegistrationObjectHost": true, "blink.mojom.ServiceWorkerRegistrationObject": true, "blink.mojom.ServiceWorkerRunningStatusCallback": false, "blink.mojom.ServiceWorkerStreamCallback": false, "blink.mojom.ServiceWorkerWorkerClient": false, "blink.mojom.ServiceWorkerWorkerClientRegistry": false, "blink.mojom.SharedStorageWorkletHost": true, "blink.mojom.SharedStorageDocumentService": true, "blink.mojom.SharedStorageEntriesListener": true, "blink.mojom.SharedStorageWorkletServiceClient": true, "blink.mojom.SharedStorageWorkletService": true, "blink.mojom.SmartCardService": false, "blink.mojom.WebOTPService": false, "blink.mojom.SpeculationHost": false, "blink.mojom.SpeechSynthesisVoiceListObserver": false, "blink.mojom.SpeechSynthesisClient": false, "blink.mojom.SpeechSynthesis": false, "blink.mojom.StorageAccessHandle": true, "blink.mojom.SubAppsService": false, "blink.mojom.UnhandledTapNotifier": true, "blink.mojom.WebUsbService": false, "blink.mojom.WakeLockService": false, "blink.mojom.WebInstallService": false, "blink.mojom.WebLaunchService": false, "blink.mojom.AudioContextManager": false, "blink.mojom.Authenticator": true, "blink.mojom.DigitalIdentityRequest": false, "blink.mojom.FederatedAuthRequest": false, "blink.mojom.WebNNIntrospectionClient": true, "blink.mojom.WebNNIntrospection": true, "blink.mojom.ShareService": false, "blink.mojom.WebSocketConnector": false, "blink.mojom.WebTransportConnector": false, "blink.mojom.WebViewMediaIntegrityService": true, "blink.mojom.WebViewMediaIntegrityProvider": true, "blink.mojom.WidgetCompositor": false, "blink.mojom.WidgetHost": false, "blink.mojom.Widget": false, "blink.mojom.RenderInputRouterClient": false, "blink.mojom.DedicatedWorkerHost": false, "blink.mojom.DedicatedWorkerHostFactoryClient": true, "blink.mojom.DedicatedWorkerHostFactory": true, "blink.mojom.SharedWorker": true, "blink.mojom.SharedWorkerClient": false, "blink.mojom.SharedWorkerConnector": true, "blink.mojom.SharedWorkerFactory": true, "blink.mojom.SharedWorkerHost": false, "blink.mojom.SubresourceLoaderUpdater": false, "blink.mojom.WorkerContentSettingsProxy": false, "blink.mojom.WorkletDevToolsHost": false, "ui.mojom.IMEStructTraitsTest": true, "gfx.mojom.ImageTraitsTestService": true, "gfx.mojom.DelegatedInkPointRenderer": true, "gfx.mojom.TraitsTestService": true, "gfx.mojom.RangeTraitsTestService": true, "gl.mojom.TraitsTestService": true, "ui.ozone.mojom.DeviceCursor": true, "ui.ozone.mojom.DrmDevice": true, "ui.mojom.ScenicGpuHost": true, "ui.mojom.ScenicGpuService": true, "ui.ozone.mojom.WaylandBufferManagerHost": true, "ui.ozone.mojom.WaylandBufferManagerGpu": true, "wl.mojom.ConfigTraitsTestService": true, "ui.ozone.mojom.GesturePropertiesService": true, "webui_examples.mojom.PageHandlerFactory": true, "webui_examples.mojom.PageHandler": true, "app_management.mojom.PageHandlerFactory": true, "app_management.mojom.PageHandler": true, "app_management.mojom.Page": true, "color_change_listener.mojom.PageHandler": true, "color_change_listener.mojom.Page": true, "composebox.mojom.PageHandlerFactory": true, "composebox.mojom.PageHandler": true, "composebox.mojom.Page": true, "customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactory": true, "customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler": true, "customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClient": true, "custom_help_bubble.mojom.CustomHelpBubbleHandlerFactory": true, "custom_help_bubble.mojom.CustomHelpBubbleHandler": true, "help_bubble.mojom.HelpBubbleHandlerFactory": true, "help_bubble.mojom.PdfHelpBubbleHandlerFactory": true, "help_bubble.mojom.HelpBubbleHandler": true, "help_bubble.mojom.HelpBubbleClient": true, "history.mojom.PageHandler": true, "history.mojom.Page": true, "history_clusters.mojom.PageHandler": true, "history_clusters.mojom.Page": true, "history_embeddings.mojom.PageHandler": true, "history_embeddings.mojom.Page": true, "most_visited.mojom.MostVisitedPageHandlerFactory": true, "most_visited.mojom.MostVisitedPageHandler": true, "most_visited.mojom.MostVisitedPage": true, "theme_color_picker.mojom.ThemeColorPickerHandlerFactory": true, "theme_color_picker.mojom.ThemeColorPickerHandler": true, "theme_color_picker.mojom.ThemeColorPickerClient": true, "batch_upload_promo.mojom.PageHandlerFactory": true, "batch_upload_promo.mojom.PageHandler": true, "batch_upload_promo.mojom.Page": true, "browser_command.mojom.CommandHandlerFactory": true, "browser_command.mojom.CommandHandler": true, "metrics_reporter.mojom.PageMetricsHost": true, "metrics_reporter.mojom.PageMetrics": true, "tracked_element.mojom.TrackedElementHandler": true, "url.mojom.UrlTest": true},
      // Lazy cache: keyed by "version|ifaceName"
      _ordinalCache: {},
      _lastVersion: null,
      getOrdinals: function(ifaceName, methodSpecs) {
        const params = new URLSearchParams(window.location.search);
        const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
        
        // Check per-interface setting from BUILD.gn
        const shouldScramble = this._interfaceScrambleMap[ifaceName];
        if (shouldScramble === false || forceNoScramble) {
          // No scrambling: use explicit ordinals or sequential index
          return methodSpecs.map((ms, idx) => ms.explicit !== null ? ms.explicit : idx);
        }
        
        // Get current version (may change after async detection)
        const versionStr = window.mojoVersion || '147.0.7684.2';
        
        // Invalidate cache if version changed
        if (this._lastVersion !== versionStr) {
          this._ordinalCache = {};
          this._lastVersion = versionStr;
        }
        
        // Check cache
        const cacheKey = ifaceName;
        if (this._ordinalCache[cacheKey]) {
          return this._ordinalCache[cacheKey];
        }
        
        // Scrambling enabled: use SHA256 hash
        const p = versionStr.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        const shortName = ifaceName.split('.').pop();
        
        const seen = new Set();
        methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
        let i = 0;
        const ordinals = methodSpecs.map((ms, idx) => {
          if (ms.explicit !== null) return ms.explicit;
          while (true) {
            i++;
            const h0 = SHA256(salt + shortName + i);
            const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
            if (!seen.has(ord)) {
              seen.add(ord);
              return ord;
            }
          }
        });
        
        // Cache the result
        this._ordinalCache[cacheKey] = ordinals;
        return ordinals;
      }
    };
  })();

 // Module namespace
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 
 // Fallback opaque struct type for unknown external types
 mojo.internal.OpaqueStruct = mojo.internal.OpaqueStruct || {
   $: {
     structSpec: { name: 'OpaqueStruct', packedSize: 8, fields: [], versions: [{version: 0, packedSize: 8}] },
     encode: function(value, encoder, byteOffset, bitOffset, nullable) {
       if (value !== null && value !== undefined) {
         console.warn('[MojoJS] Encoding OpaqueStruct! Field may be missing its real spec.', value);
       }
       encoder.encodeOffset(byteOffset, 0);
     },
     encodeNull: function(encoder, byteOffset) { },
     decode: function(decoder, byteOffset, bitOffset, nullable) {
       try {
         const offset = decoder.decodeOffset(byteOffset);
         return offset ? { _opaqueOffset: offset } : null;
       } catch (e) {
         return null;
       }
     },
     arrayElementSize: nullable => 8,
     isValidObjectKeyType: false,
   }
 };

 mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.arc.mojom.NetworkResultSpec = mojo.internal.bindings.arc.mojom.NetworkResultSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.arc.mojom.GetNetworksRequestTypeSpec = mojo.internal.bindings.arc.mojom.GetNetworksRequestTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.arc.mojom.ConnectionStateTypeSpec = mojo.internal.bindings.arc.mojom.ConnectionStateTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.arc.mojom.EapMethodSpec = mojo.internal.bindings.arc.mojom.EapMethodSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.arc.mojom.EapPhase2MethodSpec = mojo.internal.bindings.arc.mojom.EapPhase2MethodSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.arc.mojom.KeyManagementSpec = mojo.internal.bindings.arc.mojom.KeyManagementSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.arc.mojom.IPAddressTypeSpec = mojo.internal.bindings.arc.mojom.IPAddressTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.arc.mojom.TetheringClientStateSpec = mojo.internal.bindings.arc.mojom.TetheringClientStateSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.arc.mojom.NetworkTypeSpec = mojo.internal.bindings.arc.mojom.NetworkTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.arc.mojom.MeteredOverrideSpec = mojo.internal.bindings.arc.mojom.MeteredOverrideSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.arc.mojom.FlagSpec = mojo.internal.bindings.arc.mojom.FlagSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.arc.mojom.WifiBandSpec = mojo.internal.bindings.arc.mojom.WifiBandSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.arc.mojom.LohsStatusSpec = mojo.internal.bindings.arc.mojom.LohsStatusSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.arc.mojom.IpProtocolSpec = mojo.internal.bindings.arc.mojom.IpProtocolSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.arc.mojom.SocketEventSpec = mojo.internal.bindings.arc.mojom.SocketEventSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.arc.mojom.QosCategorySpec = mojo.internal.bindings.arc.mojom.QosCategorySpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.arc.mojom.NetworkDetailsSpec = mojo.internal.bindings.arc.mojom.NetworkDetailsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetworkDetailsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetworkDetailsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetworkDetailsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcProxyInfoSpec = mojo.internal.bindings.arc.mojom.ArcProxyInfoSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcProxyInfoSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcProxyInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcProxyInfoSpec.$ = {};
mojo.internal.bindings.arc.mojom.VisibleNetworkDetailsSpec = mojo.internal.bindings.arc.mojom.VisibleNetworkDetailsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.VisibleNetworkDetailsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.VisibleNetworkDetailsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.VisibleNetworkDetailsSpec.$ = {};
mojo.internal.bindings.arc.mojom.ConfiguredNetworkDetailsSpec = mojo.internal.bindings.arc.mojom.ConfiguredNetworkDetailsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ConfiguredNetworkDetailsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ConfiguredNetworkDetailsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ConfiguredNetworkDetailsSpec.$ = {};
mojo.internal.bindings.arc.mojom.PasspointCredentialsSpec = mojo.internal.bindings.arc.mojom.PasspointCredentialsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.PasspointCredentialsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.PasspointCredentialsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.PasspointCredentialsSpec.$ = {};
mojo.internal.bindings.arc.mojom.PasspointRemovalPropertiesSpec = mojo.internal.bindings.arc.mojom.PasspointRemovalPropertiesSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.PasspointRemovalPropertiesSpec.$.structSpec && mojo.internal.bindings.arc.mojom.PasspointRemovalPropertiesSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.PasspointRemovalPropertiesSpec.$ = {};
mojo.internal.bindings.arc.mojom.EapCredentialsSpec = mojo.internal.bindings.arc.mojom.EapCredentialsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.EapCredentialsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.EapCredentialsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.EapCredentialsSpec.$ = {};
mojo.internal.bindings.arc.mojom.IPConfigurationSpec = mojo.internal.bindings.arc.mojom.IPConfigurationSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.IPConfigurationSpec.$.structSpec && mojo.internal.bindings.arc.mojom.IPConfigurationSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.IPConfigurationSpec.$ = {};
mojo.internal.bindings.arc.mojom.WiFiSpec = mojo.internal.bindings.arc.mojom.WiFiSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.WiFiSpec.$.structSpec && mojo.internal.bindings.arc.mojom.WiFiSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.WiFiSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetworkConfigurationSpec = mojo.internal.bindings.arc.mojom.NetworkConfigurationSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetworkConfigurationSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetworkConfigurationSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetworkConfigurationSpec.$ = {};
mojo.internal.bindings.arc.mojom.LinkSpeedSpec = mojo.internal.bindings.arc.mojom.LinkSpeedSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.LinkSpeedSpec.$.structSpec && mojo.internal.bindings.arc.mojom.LinkSpeedSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.LinkSpeedSpec.$ = {};
mojo.internal.bindings.arc.mojom.WifiConfigurationSpec = mojo.internal.bindings.arc.mojom.WifiConfigurationSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.WifiConfigurationSpec.$.structSpec && mojo.internal.bindings.arc.mojom.WifiConfigurationSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.WifiConfigurationSpec.$ = {};
mojo.internal.bindings.arc.mojom.StaticIpv4ConfigurationSpec = mojo.internal.bindings.arc.mojom.StaticIpv4ConfigurationSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.StaticIpv4ConfigurationSpec.$.structSpec && mojo.internal.bindings.arc.mojom.StaticIpv4ConfigurationSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.StaticIpv4ConfigurationSpec.$ = {};
mojo.internal.bindings.arc.mojom.PacUrlProxyConfigSpec = mojo.internal.bindings.arc.mojom.PacUrlProxyConfigSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.PacUrlProxyConfigSpec.$.structSpec && mojo.internal.bindings.arc.mojom.PacUrlProxyConfigSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.PacUrlProxyConfigSpec.$ = {};
mojo.internal.bindings.arc.mojom.ManualProxyConfigSpec = mojo.internal.bindings.arc.mojom.ManualProxyConfigSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ManualProxyConfigSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ManualProxyConfigSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ManualProxyConfigSpec.$ = {};
mojo.internal.bindings.arc.mojom.GetNetworksResponseTypeSpec = mojo.internal.bindings.arc.mojom.GetNetworksResponseTypeSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.GetNetworksResponseTypeSpec.$.structSpec && mojo.internal.bindings.arc.mojom.GetNetworksResponseTypeSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.GetNetworksResponseTypeSpec.$ = {};
mojo.internal.bindings.arc.mojom.AndroidVpnConfigurationSpec = mojo.internal.bindings.arc.mojom.AndroidVpnConfigurationSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.AndroidVpnConfigurationSpec.$.structSpec && mojo.internal.bindings.arc.mojom.AndroidVpnConfigurationSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.AndroidVpnConfigurationSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcDnsResolutionTestResultSpec = mojo.internal.bindings.arc.mojom.ArcDnsResolutionTestResultSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcDnsResolutionTestResultSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcDnsResolutionTestResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcDnsResolutionTestResultSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcHttpTestResultSpec = mojo.internal.bindings.arc.mojom.ArcHttpTestResultSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcHttpTestResultSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcHttpTestResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcHttpTestResultSpec.$ = {};
mojo.internal.bindings.arc.mojom.ArcPingTestResultSpec = mojo.internal.bindings.arc.mojom.ArcPingTestResultSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.ArcPingTestResultSpec.$.structSpec && mojo.internal.bindings.arc.mojom.ArcPingTestResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.ArcPingTestResultSpec.$ = {};
mojo.internal.bindings.arc.mojom.LohsConfigSpec = mojo.internal.bindings.arc.mojom.LohsConfigSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.LohsConfigSpec.$.structSpec && mojo.internal.bindings.arc.mojom.LohsConfigSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.LohsConfigSpec.$ = {};
mojo.internal.bindings.arc.mojom.PasspointApprovalRequestSpec = mojo.internal.bindings.arc.mojom.PasspointApprovalRequestSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.PasspointApprovalRequestSpec.$.structSpec && mojo.internal.bindings.arc.mojom.PasspointApprovalRequestSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.PasspointApprovalRequestSpec.$ = {};
mojo.internal.bindings.arc.mojom.PasspointApprovalResponseSpec = mojo.internal.bindings.arc.mojom.PasspointApprovalResponseSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.PasspointApprovalResponseSpec.$.structSpec && mojo.internal.bindings.arc.mojom.PasspointApprovalResponseSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.PasspointApprovalResponseSpec.$ = {};
mojo.internal.bindings.arc.mojom.SocketConnectionEventSpec = mojo.internal.bindings.arc.mojom.SocketConnectionEventSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.SocketConnectionEventSpec.$.structSpec && mojo.internal.bindings.arc.mojom.SocketConnectionEventSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.SocketConnectionEventSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetHost = mojo.internal.bindings.arc.mojom.NetHost || {};
mojo.internal.bindings.arc.mojom.NetHostSpec = mojo.internal.bindings.arc.mojom.NetHostSpec || { $ : {} };
if (mojo.internal.bindings.arc.mojom.NetHostSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetHostSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetHostSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetHost.$interfaceName = 'arc.mojom.NetHost';
mojo.internal.bindings.arc.mojom.NetHost_GetWifiEnabledState_ParamsSpec = mojo.internal.bindings.arc.mojom.NetHost_GetWifiEnabledState_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetHost_GetWifiEnabledState_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetHost_GetWifiEnabledState_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetHost_GetWifiEnabledState_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetHost_GetWifiEnabledState_ResponseParamsSpec = mojo.internal.bindings.arc.mojom.NetHost_GetWifiEnabledState_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetHost_GetWifiEnabledState_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetHost_GetWifiEnabledState_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetHost_GetWifiEnabledState_ResponseParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetHost_StartScan_ParamsSpec = mojo.internal.bindings.arc.mojom.NetHost_StartScan_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetHost_StartScan_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetHost_StartScan_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetHost_StartScan_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetHost_SetWifiEnabledState_ParamsSpec = mojo.internal.bindings.arc.mojom.NetHost_SetWifiEnabledState_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetHost_SetWifiEnabledState_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetHost_SetWifiEnabledState_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetHost_SetWifiEnabledState_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetHost_SetWifiEnabledState_ResponseParamsSpec = mojo.internal.bindings.arc.mojom.NetHost_SetWifiEnabledState_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetHost_SetWifiEnabledState_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetHost_SetWifiEnabledState_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetHost_SetWifiEnabledState_ResponseParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetHost_CreateNetwork_ParamsSpec = mojo.internal.bindings.arc.mojom.NetHost_CreateNetwork_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetHost_CreateNetwork_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetHost_CreateNetwork_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetHost_CreateNetwork_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetHost_CreateNetwork_ResponseParamsSpec = mojo.internal.bindings.arc.mojom.NetHost_CreateNetwork_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetHost_CreateNetwork_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetHost_CreateNetwork_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetHost_CreateNetwork_ResponseParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetHost_ForgetNetwork_ParamsSpec = mojo.internal.bindings.arc.mojom.NetHost_ForgetNetwork_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetHost_ForgetNetwork_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetHost_ForgetNetwork_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetHost_ForgetNetwork_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetHost_ForgetNetwork_ResponseParamsSpec = mojo.internal.bindings.arc.mojom.NetHost_ForgetNetwork_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetHost_ForgetNetwork_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetHost_ForgetNetwork_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetHost_ForgetNetwork_ResponseParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetHost_UpdateWifiNetwork_ParamsSpec = mojo.internal.bindings.arc.mojom.NetHost_UpdateWifiNetwork_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetHost_UpdateWifiNetwork_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetHost_UpdateWifiNetwork_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetHost_UpdateWifiNetwork_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetHost_UpdateWifiNetwork_ResponseParamsSpec = mojo.internal.bindings.arc.mojom.NetHost_UpdateWifiNetwork_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetHost_UpdateWifiNetwork_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetHost_UpdateWifiNetwork_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetHost_UpdateWifiNetwork_ResponseParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetHost_StartConnect_ParamsSpec = mojo.internal.bindings.arc.mojom.NetHost_StartConnect_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetHost_StartConnect_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetHost_StartConnect_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetHost_StartConnect_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetHost_StartConnect_ResponseParamsSpec = mojo.internal.bindings.arc.mojom.NetHost_StartConnect_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetHost_StartConnect_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetHost_StartConnect_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetHost_StartConnect_ResponseParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetHost_StartDisconnect_ParamsSpec = mojo.internal.bindings.arc.mojom.NetHost_StartDisconnect_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetHost_StartDisconnect_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetHost_StartDisconnect_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetHost_StartDisconnect_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetHost_StartDisconnect_ResponseParamsSpec = mojo.internal.bindings.arc.mojom.NetHost_StartDisconnect_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetHost_StartDisconnect_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetHost_StartDisconnect_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetHost_StartDisconnect_ResponseParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetHost_GetNetworks_ParamsSpec = mojo.internal.bindings.arc.mojom.NetHost_GetNetworks_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetHost_GetNetworks_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetHost_GetNetworks_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetHost_GetNetworks_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetHost_GetNetworks_ResponseParamsSpec = mojo.internal.bindings.arc.mojom.NetHost_GetNetworks_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetHost_GetNetworks_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetHost_GetNetworks_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetHost_GetNetworks_ResponseParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetHost_AndroidVpnConnected_ParamsSpec = mojo.internal.bindings.arc.mojom.NetHost_AndroidVpnConnected_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetHost_AndroidVpnConnected_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetHost_AndroidVpnConnected_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetHost_AndroidVpnConnected_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetHost_AndroidVpnUpdated_ParamsSpec = mojo.internal.bindings.arc.mojom.NetHost_AndroidVpnUpdated_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetHost_AndroidVpnUpdated_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetHost_AndroidVpnUpdated_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetHost_AndroidVpnUpdated_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetHost_DEPRECATED_AndroidVpnStateChanged_ParamsSpec = mojo.internal.bindings.arc.mojom.NetHost_DEPRECATED_AndroidVpnStateChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetHost_DEPRECATED_AndroidVpnStateChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetHost_DEPRECATED_AndroidVpnStateChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetHost_DEPRECATED_AndroidVpnStateChanged_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetHost_AndroidVpnDisconnected_ParamsSpec = mojo.internal.bindings.arc.mojom.NetHost_AndroidVpnDisconnected_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetHost_AndroidVpnDisconnected_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetHost_AndroidVpnDisconnected_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetHost_AndroidVpnDisconnected_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetHost_SetAlwaysOnVpn_ParamsSpec = mojo.internal.bindings.arc.mojom.NetHost_SetAlwaysOnVpn_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetHost_SetAlwaysOnVpn_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetHost_SetAlwaysOnVpn_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetHost_SetAlwaysOnVpn_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetHost_RequestPasspointAppApproval_ParamsSpec = mojo.internal.bindings.arc.mojom.NetHost_RequestPasspointAppApproval_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetHost_RequestPasspointAppApproval_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetHost_RequestPasspointAppApproval_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetHost_RequestPasspointAppApproval_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetHost_RequestPasspointAppApproval_ResponseParamsSpec = mojo.internal.bindings.arc.mojom.NetHost_RequestPasspointAppApproval_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetHost_RequestPasspointAppApproval_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetHost_RequestPasspointAppApproval_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetHost_RequestPasspointAppApproval_ResponseParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetHost_AddPasspointCredentials_ParamsSpec = mojo.internal.bindings.arc.mojom.NetHost_AddPasspointCredentials_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetHost_AddPasspointCredentials_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetHost_AddPasspointCredentials_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetHost_AddPasspointCredentials_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetHost_RemovePasspointCredentials_ParamsSpec = mojo.internal.bindings.arc.mojom.NetHost_RemovePasspointCredentials_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetHost_RemovePasspointCredentials_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetHost_RemovePasspointCredentials_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetHost_RemovePasspointCredentials_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetHost_DisconnectHostVpn_ParamsSpec = mojo.internal.bindings.arc.mojom.NetHost_DisconnectHostVpn_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetHost_DisconnectHostVpn_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetHost_DisconnectHostVpn_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetHost_DisconnectHostVpn_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetHost_StartLohs_ParamsSpec = mojo.internal.bindings.arc.mojom.NetHost_StartLohs_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetHost_StartLohs_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetHost_StartLohs_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetHost_StartLohs_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetHost_StartLohs_ResponseParamsSpec = mojo.internal.bindings.arc.mojom.NetHost_StartLohs_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetHost_StartLohs_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetHost_StartLohs_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetHost_StartLohs_ResponseParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetHost_StopLohs_ParamsSpec = mojo.internal.bindings.arc.mojom.NetHost_StopLohs_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetHost_StopLohs_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetHost_StopLohs_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetHost_StopLohs_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetHost_NotifyAndroidWifiMulticastLockChange_ParamsSpec = mojo.internal.bindings.arc.mojom.NetHost_NotifyAndroidWifiMulticastLockChange_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetHost_NotifyAndroidWifiMulticastLockChange_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetHost_NotifyAndroidWifiMulticastLockChange_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetHost_NotifyAndroidWifiMulticastLockChange_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetHost_NotifySocketConnectionEvent_ParamsSpec = mojo.internal.bindings.arc.mojom.NetHost_NotifySocketConnectionEvent_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetHost_NotifySocketConnectionEvent_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetHost_NotifySocketConnectionEvent_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetHost_NotifySocketConnectionEvent_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetHost_NotifyARCVPNSocketConnectionEvent_ParamsSpec = mojo.internal.bindings.arc.mojom.NetHost_NotifyARCVPNSocketConnectionEvent_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetHost_NotifyARCVPNSocketConnectionEvent_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetHost_NotifyARCVPNSocketConnectionEvent_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetHost_NotifyARCVPNSocketConnectionEvent_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetInstance = mojo.internal.bindings.arc.mojom.NetInstance || {};
mojo.internal.bindings.arc.mojom.NetInstanceSpec = mojo.internal.bindings.arc.mojom.NetInstanceSpec || { $ : {} };
if (mojo.internal.bindings.arc.mojom.NetInstanceSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetInstanceSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetInstanceSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetInstance.$interfaceName = 'arc.mojom.NetInstance';
mojo.internal.bindings.arc.mojom.NetInstance_Init_ParamsSpec = mojo.internal.bindings.arc.mojom.NetInstance_Init_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetInstance_Init_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetInstance_Init_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetInstance_Init_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetInstance_Init_ResponseParamsSpec = mojo.internal.bindings.arc.mojom.NetInstance_Init_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetInstance_Init_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetInstance_Init_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetInstance_Init_ResponseParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetInstance_ScanCompleted_ParamsSpec = mojo.internal.bindings.arc.mojom.NetInstance_ScanCompleted_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetInstance_ScanCompleted_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetInstance_ScanCompleted_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetInstance_ScanCompleted_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetInstance_WifiEnabledStateChanged_ParamsSpec = mojo.internal.bindings.arc.mojom.NetInstance_WifiEnabledStateChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetInstance_WifiEnabledStateChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetInstance_WifiEnabledStateChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetInstance_WifiEnabledStateChanged_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetInstance_DisconnectAndroidVpn_ParamsSpec = mojo.internal.bindings.arc.mojom.NetInstance_DisconnectAndroidVpn_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetInstance_DisconnectAndroidVpn_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetInstance_DisconnectAndroidVpn_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetInstance_DisconnectAndroidVpn_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetInstance_ConfigureAndroidVpn_ParamsSpec = mojo.internal.bindings.arc.mojom.NetInstance_ConfigureAndroidVpn_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetInstance_ConfigureAndroidVpn_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetInstance_ConfigureAndroidVpn_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetInstance_ConfigureAndroidVpn_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetInstance_ActiveNetworksChanged_ParamsSpec = mojo.internal.bindings.arc.mojom.NetInstance_ActiveNetworksChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetInstance_ActiveNetworksChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetInstance_ActiveNetworksChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetInstance_ActiveNetworksChanged_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetInstance_DnsResolutionTest_ParamsSpec = mojo.internal.bindings.arc.mojom.NetInstance_DnsResolutionTest_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetInstance_DnsResolutionTest_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetInstance_DnsResolutionTest_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetInstance_DnsResolutionTest_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetInstance_DnsResolutionTest_ResponseParamsSpec = mojo.internal.bindings.arc.mojom.NetInstance_DnsResolutionTest_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetInstance_DnsResolutionTest_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetInstance_DnsResolutionTest_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetInstance_DnsResolutionTest_ResponseParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetInstance_HttpTest_ParamsSpec = mojo.internal.bindings.arc.mojom.NetInstance_HttpTest_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetInstance_HttpTest_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetInstance_HttpTest_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetInstance_HttpTest_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetInstance_HttpTest_ResponseParamsSpec = mojo.internal.bindings.arc.mojom.NetInstance_HttpTest_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetInstance_HttpTest_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetInstance_HttpTest_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetInstance_HttpTest_ResponseParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetInstance_PingTest_ParamsSpec = mojo.internal.bindings.arc.mojom.NetInstance_PingTest_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetInstance_PingTest_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetInstance_PingTest_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetInstance_PingTest_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetInstance_PingTest_ResponseParamsSpec = mojo.internal.bindings.arc.mojom.NetInstance_PingTest_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetInstance_PingTest_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetInstance_PingTest_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetInstance_PingTest_ResponseParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.NetInstance_SetUpFlag_ParamsSpec = mojo.internal.bindings.arc.mojom.NetInstance_SetUpFlag_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.NetInstance_SetUpFlag_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.NetInstance_SetUpFlag_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.NetInstance_SetUpFlag_ParamsSpec.$ = {};

// External type stubs (from imports)
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.AppCategorySpec = mojo.internal.bindings.arc.mojom.AppCategorySpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.ArcProxyInfoSpec = mojo.internal.bindings.arc.mojom.ArcProxyInfoSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.NetworkDetailsSpec = mojo.internal.bindings.arc.mojom.NetworkDetailsSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.SecurityTypeSpec = mojo.internal.bindings.arc.mojom.SecurityTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.IPAddressSpec = mojo.internal.bindings.network.mojom.IPAddressSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.url = mojo.internal.bindings.url || {};
mojo.internal.bindings.url.mojom = mojo.internal.bindings.url.mojom || {};
mojo.internal.bindings.url.mojom.UrlSpec = mojo.internal.bindings.url.mojom.UrlSpec || { $: mojo.internal.OpaqueStruct.$ };

// Enum: NetworkResult
mojo.internal.bindings.arc.mojom.NetworkResult = {
  SUCCESS: 0,
  FAILURE: 1,
};

// Enum: GetNetworksRequestType
mojo.internal.bindings.arc.mojom.GetNetworksRequestType = {
  CONFIGURED_ONLY: 0,
  VISIBLE_ONLY: 1,
  MinVersion: 1,
};

// Enum: ConnectionStateType
mojo.internal.bindings.arc.mojom.ConnectionStateType = {
  CONNECTED: 0,
  CONNECTING: 1,
  NOT_CONNECTED: 2,
  PORTAL: 3,
  ONLINE: 4,
};

// Enum: EapMethod
mojo.internal.bindings.arc.mojom.EapMethod = {
  kNone: 0,
  kLeap: 1,
  kPeap: 2,
  kTls: 3,
  kTtls: 4,
};

// Enum: EapPhase2Method
mojo.internal.bindings.arc.mojom.EapPhase2Method = {
  kNone: 0,
  kPap: 1,
  kMschap: 2,
  kMschapv2: 3,
};

// Enum: KeyManagement
mojo.internal.bindings.arc.mojom.KeyManagement = {
  kNone: 0,
  kIeee8021X: 1,
  kFtEap: 2,
  kFtPsk: 3,
  kFtSae: 4,
  kWpaEap: 5,
  kWpaEapSha256: 6,
  kWpaPsk: 7,
  kSae: 8,
};

// Enum: IPAddressType
mojo.internal.bindings.arc.mojom.IPAddressType = {
  IPV4: 0,
  IPV6: 1,
};

// Enum: TetheringClientState
mojo.internal.bindings.arc.mojom.TetheringClientState = {
  CONFIRMED: 0,
  NOT_DETECTED: 1,
  SUSPECTED: 2,
};

// Enum: NetworkType
mojo.internal.bindings.arc.mojom.NetworkType = {
  CELLULAR: 0,
  ETHERNET: 1,
  VPN: 2,
  WIFI: 3,
};

// Enum: MeteredOverride
mojo.internal.bindings.arc.mojom.MeteredOverride = {
  kNone: 0,
  kMetered: 1,
  kNotmetered: 2,
};

// Enum: Flag
mojo.internal.bindings.arc.mojom.Flag = {
  UNKNOWN: 0,
  DEPRECATED_ENABLE_ARC_HOST_VPN: 1,
};

// Enum: WifiBand
mojo.internal.bindings.arc.mojom.WifiBand = {
  kUnknown: 0,
  k2Ghz: 1,
  k5Ghz: 2,
  k6Ghz: 3,
  k60Ghz: 4,
};

// Enum: LohsStatus
mojo.internal.bindings.arc.mojom.LohsStatus = {
  kUnknown: 0,
  kSuccess: 1,
  kErrorGeneric: 2,
  kErrorIncompatibleMode: 3,
  kErrorTetheringDisallowed: 4,
  MinVersion: 4,
  MinVersion: 4,
};

// Enum: IpProtocol
mojo.internal.bindings.arc.mojom.IpProtocol = {
  kUnknown: 0,
  kTcp: 1,
  kUdp: 2,
};

// Enum: SocketEvent
mojo.internal.bindings.arc.mojom.SocketEvent = {
  kUnknown: 0,
  kOpen: 1,
  kClose: 2,
};

// Enum: QosCategory
mojo.internal.bindings.arc.mojom.QosCategory = {
  kUnknown: 0,
  kRealtimeInteractive: 1,
  kMultimediaConferencing: 2,
};

// Interface: NetHost
mojo.internal.bindings.arc.mojom.NetHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.arc.mojom.NetHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.NetHost';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.NetHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.NetHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getWifiEnabledState() {
    return this.$.getWifiEnabledState();
  }
  startScan() {
    return this.$.startScan();
  }
  setWifiEnabledState(arg_is_enabled) {
    return this.$.setWifiEnabledState(arg_is_enabled);
  }
  createNetwork(arg_cfg) {
    return this.$.createNetwork(arg_cfg);
  }
  forgetNetwork(arg_guid) {
    return this.$.forgetNetwork(arg_guid);
  }
  updateWifiNetwork(arg_guid, arg_cfg) {
    return this.$.updateWifiNetwork(arg_guid, arg_cfg);
  }
  startConnect(arg_guid) {
    return this.$.startConnect(arg_guid);
  }
  startDisconnect(arg_guid) {
    return this.$.startDisconnect(arg_guid);
  }
  getNetworks(arg_type) {
    return this.$.getNetworks(arg_type);
  }
  androidVpnConnected(arg_cfg) {
    return this.$.androidVpnConnected(arg_cfg);
  }
  androidVpnUpdated(arg_cfg) {
    return this.$.androidVpnUpdated(arg_cfg);
  }
  dEPRECATED_AndroidVpnStateChanged(arg_state) {
    return this.$.dEPRECATED_AndroidVpnStateChanged(arg_state);
  }
  androidVpnDisconnected() {
    return this.$.androidVpnDisconnected();
  }
  setAlwaysOnVpn(arg_vpnPackage, arg_lockdown) {
    return this.$.setAlwaysOnVpn(arg_vpnPackage, arg_lockdown);
  }
  requestPasspointAppApproval(arg_request) {
    return this.$.requestPasspointAppApproval(arg_request);
  }
  addPasspointCredentials(arg_credentials) {
    return this.$.addPasspointCredentials(arg_credentials);
  }
  removePasspointCredentials(arg_properties) {
    return this.$.removePasspointCredentials(arg_properties);
  }
  disconnectHostVpn() {
    return this.$.disconnectHostVpn();
  }
  startLohs(arg_config) {
    return this.$.startLohs(arg_config);
  }
  stopLohs() {
    return this.$.stopLohs();
  }
  notifyAndroidWifiMulticastLockChange(arg_is_held) {
    return this.$.notifyAndroidWifiMulticastLockChange(arg_is_held);
  }
  notifySocketConnectionEvent(arg_msg) {
    return this.$.notifySocketConnectionEvent(arg_msg);
  }
  notifyARCVPNSocketConnectionEvent(arg_msg) {
    return this.$.notifyARCVPNSocketConnectionEvent(arg_msg);
  }
};

mojo.internal.bindings.arc.mojom.NetHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('arc.mojom.NetHost', [
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 20 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 10 },
      { explicit: 11 },
      { explicit: 25 },
      { explicit: 12 },
      { explicit: 26 },
      { explicit: 13 },
      { explicit: 21 },
      { explicit: 14 },
      { explicit: 16 },
      { explicit: 17 },
      { explicit: 18 },
      { explicit: 19 },
      { explicit: 22 },
      { explicit: 23 },
      { explicit: 24 },
    ]);
  }

  getWifiEnabledState() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.NetHost_GetWifiEnabledState_ParamsSpec,
      mojo.internal.bindings.arc.mojom.NetHost_GetWifiEnabledState_ResponseParamsSpec,
      [],
      false);
  }

  startScan() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.arc.mojom.NetHost_StartScan_ParamsSpec,
      null,
      [],
      false);
  }

  setWifiEnabledState(arg_is_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.arc.mojom.NetHost_SetWifiEnabledState_ParamsSpec,
      mojo.internal.bindings.arc.mojom.NetHost_SetWifiEnabledState_ResponseParamsSpec,
      [arg_is_enabled],
      false);
  }

  createNetwork(arg_cfg) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.arc.mojom.NetHost_CreateNetwork_ParamsSpec,
      mojo.internal.bindings.arc.mojom.NetHost_CreateNetwork_ResponseParamsSpec,
      [arg_cfg],
      false);
  }

  forgetNetwork(arg_guid) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.arc.mojom.NetHost_ForgetNetwork_ParamsSpec,
      mojo.internal.bindings.arc.mojom.NetHost_ForgetNetwork_ResponseParamsSpec,
      [arg_guid],
      false);
  }

  updateWifiNetwork(arg_guid, arg_cfg) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.arc.mojom.NetHost_UpdateWifiNetwork_ParamsSpec,
      mojo.internal.bindings.arc.mojom.NetHost_UpdateWifiNetwork_ResponseParamsSpec,
      [arg_guid, arg_cfg],
      false);
  }

  startConnect(arg_guid) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.arc.mojom.NetHost_StartConnect_ParamsSpec,
      mojo.internal.bindings.arc.mojom.NetHost_StartConnect_ResponseParamsSpec,
      [arg_guid],
      false);
  }

  startDisconnect(arg_guid) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.arc.mojom.NetHost_StartDisconnect_ParamsSpec,
      mojo.internal.bindings.arc.mojom.NetHost_StartDisconnect_ResponseParamsSpec,
      [arg_guid],
      false);
  }

  getNetworks(arg_type) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.arc.mojom.NetHost_GetNetworks_ParamsSpec,
      mojo.internal.bindings.arc.mojom.NetHost_GetNetworks_ResponseParamsSpec,
      [arg_type],
      false);
  }

  androidVpnConnected(arg_cfg) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.arc.mojom.NetHost_AndroidVpnConnected_ParamsSpec,
      null,
      [arg_cfg],
      false);
  }

  androidVpnUpdated(arg_cfg) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.arc.mojom.NetHost_AndroidVpnUpdated_ParamsSpec,
      null,
      [arg_cfg],
      false);
  }

  dEPRECATED_AndroidVpnStateChanged(arg_state) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.arc.mojom.NetHost_DEPRECATED_AndroidVpnStateChanged_ParamsSpec,
      null,
      [arg_state],
      false);
  }

  androidVpnDisconnected() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.arc.mojom.NetHost_AndroidVpnDisconnected_ParamsSpec,
      null,
      [],
      false);
  }

  setAlwaysOnVpn(arg_vpnPackage, arg_lockdown) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.arc.mojom.NetHost_SetAlwaysOnVpn_ParamsSpec,
      null,
      [arg_vpnPackage, arg_lockdown],
      false);
  }

  requestPasspointAppApproval(arg_request) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.arc.mojom.NetHost_RequestPasspointAppApproval_ParamsSpec,
      mojo.internal.bindings.arc.mojom.NetHost_RequestPasspointAppApproval_ResponseParamsSpec,
      [arg_request],
      false);
  }

  addPasspointCredentials(arg_credentials) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.arc.mojom.NetHost_AddPasspointCredentials_ParamsSpec,
      null,
      [arg_credentials],
      false);
  }

  removePasspointCredentials(arg_properties) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.arc.mojom.NetHost_RemovePasspointCredentials_ParamsSpec,
      null,
      [arg_properties],
      false);
  }

  disconnectHostVpn() {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.arc.mojom.NetHost_DisconnectHostVpn_ParamsSpec,
      null,
      [],
      false);
  }

  startLohs(arg_config) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.arc.mojom.NetHost_StartLohs_ParamsSpec,
      mojo.internal.bindings.arc.mojom.NetHost_StartLohs_ResponseParamsSpec,
      [arg_config],
      false);
  }

  stopLohs() {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.arc.mojom.NetHost_StopLohs_ParamsSpec,
      null,
      [],
      false);
  }

  notifyAndroidWifiMulticastLockChange(arg_is_held) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.arc.mojom.NetHost_NotifyAndroidWifiMulticastLockChange_ParamsSpec,
      null,
      [arg_is_held],
      false);
  }

  notifySocketConnectionEvent(arg_msg) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.arc.mojom.NetHost_NotifySocketConnectionEvent_ParamsSpec,
      null,
      [arg_msg],
      false);
  }

  notifyARCVPNSocketConnectionEvent(arg_msg) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.arc.mojom.NetHost_NotifyARCVPNSocketConnectionEvent_ParamsSpec,
      null,
      [arg_msg],
      false);
  }

};

mojo.internal.bindings.arc.mojom.NetHost.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.NetHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.NetHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.NetHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('arc.mojom.NetHost', [
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 20 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 10 },
      { explicit: 11 },
      { explicit: 25 },
      { explicit: 12 },
      { explicit: 26 },
      { explicit: 13 },
      { explicit: 21 },
      { explicit: 14 },
      { explicit: 16 },
      { explicit: 17 },
      { explicit: 18 },
      { explicit: 19 },
      { explicit: 22 },
      { explicit: 23 },
      { explicit: 24 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onError: function() { console.log('[GeneratedReceiver] Endpoint Error'); },
      onMessageReceived: (...args) => {
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
           console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
           return;
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      
      // FEEDBACK LOOP: Report the wire truth to the learner
      this.mapOrdinal(header.ordinal, dispatchId);
      
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_GetWifiEnabledState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getWifiEnabledState');
          const result = this.impl.getWifiEnabledState();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_is_enabled' in response) ? response['arg_is_enabled'] : response;
              const resp_obj = { 'arg_is_enabled': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.arc.mojom.NetHost_GetWifiEnabledState_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getWifiEnabledState FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_StartScan_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startScan');
          const result = this.impl.startScan();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_SetWifiEnabledState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setWifiEnabledState');
          const result = this.impl.setWifiEnabledState(params.arg_is_enabled);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_result' in response) ? response['arg_result'] : response;
              const resp_obj = { 'arg_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.arc.mojom.NetHost_SetWifiEnabledState_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] setWifiEnabledState FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_CreateNetwork_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createNetwork');
          const result = this.impl.createNetwork(params.arg_cfg);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_guid' in response) ? response['arg_guid'] : response;
              const resp_obj = { 'arg_guid': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.arc.mojom.NetHost_CreateNetwork_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] createNetwork FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_ForgetNetwork_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.forgetNetwork');
          const result = this.impl.forgetNetwork(params.arg_guid);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_status' in response) ? response['arg_status'] : response;
              const resp_obj = { 'arg_status': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.arc.mojom.NetHost_ForgetNetwork_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] forgetNetwork FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_UpdateWifiNetwork_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateWifiNetwork');
          const result = this.impl.updateWifiNetwork(params.arg_guid, params.arg_cfg);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_status' in response) ? response['arg_status'] : response;
              const resp_obj = { 'arg_status': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.arc.mojom.NetHost_UpdateWifiNetwork_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] updateWifiNetwork FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_StartConnect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startConnect');
          const result = this.impl.startConnect(params.arg_guid);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_status' in response) ? response['arg_status'] : response;
              const resp_obj = { 'arg_status': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.arc.mojom.NetHost_StartConnect_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] startConnect FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_StartDisconnect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startDisconnect');
          const result = this.impl.startDisconnect(params.arg_guid);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_status' in response) ? response['arg_status'] : response;
              const resp_obj = { 'arg_status': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.arc.mojom.NetHost_StartDisconnect_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] startDisconnect FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_GetNetworks_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNetworks');
          const result = this.impl.getNetworks(params.arg_type);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_response' in response) ? response['arg_response'] : response;
              const resp_obj = { 'arg_response': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.arc.mojom.NetHost_GetNetworks_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getNetworks FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_AndroidVpnConnected_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.androidVpnConnected');
          const result = this.impl.androidVpnConnected(params.arg_cfg);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_AndroidVpnUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.androidVpnUpdated');
          const result = this.impl.androidVpnUpdated(params.arg_cfg);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_DEPRECATED_AndroidVpnStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dEPRECATED_AndroidVpnStateChanged');
          const result = this.impl.dEPRECATED_AndroidVpnStateChanged(params.arg_state);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_AndroidVpnDisconnected_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.androidVpnDisconnected');
          const result = this.impl.androidVpnDisconnected();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_SetAlwaysOnVpn_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAlwaysOnVpn');
          const result = this.impl.setAlwaysOnVpn(params.arg_vpnPackage, params.arg_lockdown);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_RequestPasspointAppApproval_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestPasspointAppApproval');
          const result = this.impl.requestPasspointAppApproval(params.arg_request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_response' in response) ? response['arg_response'] : response;
              const resp_obj = { 'arg_response': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.arc.mojom.NetHost_RequestPasspointAppApproval_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] requestPasspointAppApproval FAILED:', e));
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_AddPasspointCredentials_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addPasspointCredentials');
          const result = this.impl.addPasspointCredentials(params.arg_credentials);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_RemovePasspointCredentials_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removePasspointCredentials');
          const result = this.impl.removePasspointCredentials(params.arg_properties);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_DisconnectHostVpn_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.disconnectHostVpn');
          const result = this.impl.disconnectHostVpn();
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_StartLohs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startLohs');
          const result = this.impl.startLohs(params.arg_config);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_status' in response) ? response['arg_status'] : response;
              const resp_obj = { 'arg_status': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.arc.mojom.NetHost_StartLohs_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] startLohs FAILED:', e));
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_StopLohs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stopLohs');
          const result = this.impl.stopLohs();
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_NotifyAndroidWifiMulticastLockChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyAndroidWifiMulticastLockChange');
          const result = this.impl.notifyAndroidWifiMulticastLockChange(params.arg_is_held);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_NotifySocketConnectionEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifySocketConnectionEvent');
          const result = this.impl.notifySocketConnectionEvent(params.arg_msg);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetHost_NotifyARCVPNSocketConnectionEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyARCVPNSocketConnectionEvent');
          const result = this.impl.notifyARCVPNSocketConnectionEvent(params.arg_msg);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.arc.mojom.NetHostReceiver = mojo.internal.bindings.arc.mojom.NetHostReceiver;

mojo.internal.bindings.arc.mojom.NetHostPtr = mojo.internal.bindings.arc.mojom.NetHostRemote;
mojo.internal.bindings.arc.mojom.NetHostRequest = mojo.internal.bindings.arc.mojom.NetHostPendingReceiver;


// Interface: NetInstance
mojo.internal.bindings.arc.mojom.NetInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.arc.mojom.NetInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.NetInstance';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.NetInstancePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.NetInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  init(arg_host_remote) {
    return this.$.init(arg_host_remote);
  }
  scanCompleted() {
    return this.$.scanCompleted();
  }
  wifiEnabledStateChanged(arg_is_enabled) {
    return this.$.wifiEnabledStateChanged(arg_is_enabled);
  }
  disconnectAndroidVpn() {
    return this.$.disconnectAndroidVpn();
  }
  configureAndroidVpn() {
    return this.$.configureAndroidVpn();
  }
  activeNetworksChanged(arg_network) {
    return this.$.activeNetworksChanged(arg_network);
  }
  dnsResolutionTest(arg_transport_name, arg_host_name) {
    return this.$.dnsResolutionTest(arg_transport_name, arg_host_name);
  }
  httpTest(arg_transport_name, arg_url) {
    return this.$.httpTest(arg_transport_name, arg_url);
  }
  pingTest(arg_transport_name, arg_ip_address) {
    return this.$.pingTest(arg_transport_name, arg_ip_address);
  }
  setUpFlag(arg_flag, arg_value) {
    return this.$.setUpFlag(arg_flag, arg_value);
  }
};

mojo.internal.bindings.arc.mojom.NetInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('arc.mojom.NetInstance', [
      { explicit: 6 },
      { explicit: 1 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 11 },
    ]);
  }

  init(arg_host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.NetInstance_Init_ParamsSpec,
      mojo.internal.bindings.arc.mojom.NetInstance_Init_ResponseParamsSpec,
      [arg_host_remote],
      false);
  }

  scanCompleted() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.arc.mojom.NetInstance_ScanCompleted_ParamsSpec,
      null,
      [],
      false);
  }

  wifiEnabledStateChanged(arg_is_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.arc.mojom.NetInstance_WifiEnabledStateChanged_ParamsSpec,
      null,
      [arg_is_enabled],
      false);
  }

  disconnectAndroidVpn() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.arc.mojom.NetInstance_DisconnectAndroidVpn_ParamsSpec,
      null,
      [],
      false);
  }

  configureAndroidVpn() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.arc.mojom.NetInstance_ConfigureAndroidVpn_ParamsSpec,
      null,
      [],
      false);
  }

  activeNetworksChanged(arg_network) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.arc.mojom.NetInstance_ActiveNetworksChanged_ParamsSpec,
      null,
      [arg_network],
      false);
  }

  dnsResolutionTest(arg_transport_name, arg_host_name) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.arc.mojom.NetInstance_DnsResolutionTest_ParamsSpec,
      mojo.internal.bindings.arc.mojom.NetInstance_DnsResolutionTest_ResponseParamsSpec,
      [arg_transport_name, arg_host_name],
      false);
  }

  httpTest(arg_transport_name, arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.arc.mojom.NetInstance_HttpTest_ParamsSpec,
      mojo.internal.bindings.arc.mojom.NetInstance_HttpTest_ResponseParamsSpec,
      [arg_transport_name, arg_url],
      false);
  }

  pingTest(arg_transport_name, arg_ip_address) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.arc.mojom.NetInstance_PingTest_ParamsSpec,
      mojo.internal.bindings.arc.mojom.NetInstance_PingTest_ResponseParamsSpec,
      [arg_transport_name, arg_ip_address],
      false);
  }

  setUpFlag(arg_flag, arg_value) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.arc.mojom.NetInstance_SetUpFlag_ParamsSpec,
      null,
      [arg_flag, arg_value],
      false);
  }

};

mojo.internal.bindings.arc.mojom.NetInstance.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.NetInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.NetInstance',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.NetInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('arc.mojom.NetInstance', [
      { explicit: 6 },
      { explicit: 1 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 11 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onError: function() { console.log('[GeneratedReceiver] Endpoint Error'); },
      onMessageReceived: (...args) => {
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
           console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
           return;
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      
      // FEEDBACK LOOP: Report the wire truth to the learner
      this.mapOrdinal(header.ordinal, dispatchId);
      
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetInstance_Init_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.init');
          const result = this.impl.init(params.arg_host_remote);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const resp_obj = response;
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.arc.mojom.NetInstance_Init_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] init FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetInstance_ScanCompleted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.scanCompleted');
          const result = this.impl.scanCompleted();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetInstance_WifiEnabledStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.wifiEnabledStateChanged');
          const result = this.impl.wifiEnabledStateChanged(params.arg_is_enabled);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetInstance_DisconnectAndroidVpn_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.disconnectAndroidVpn');
          const result = this.impl.disconnectAndroidVpn();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetInstance_ConfigureAndroidVpn_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.configureAndroidVpn');
          const result = this.impl.configureAndroidVpn();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetInstance_ActiveNetworksChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.activeNetworksChanged');
          const result = this.impl.activeNetworksChanged(params.arg_network);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetInstance_DnsResolutionTest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dnsResolutionTest');
          const result = this.impl.dnsResolutionTest(params.arg_transport_name, params.arg_host_name);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_result' in response) ? response['arg_result'] : response;
              const resp_obj = { 'arg_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.arc.mojom.NetInstance_DnsResolutionTest_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] dnsResolutionTest FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetInstance_HttpTest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.httpTest');
          const result = this.impl.httpTest(params.arg_transport_name, params.arg_url);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_result' in response) ? response['arg_result'] : response;
              const resp_obj = { 'arg_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.arc.mojom.NetInstance_HttpTest_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] httpTest FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetInstance_PingTest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.pingTest');
          const result = this.impl.pingTest(params.arg_transport_name, params.arg_ip_address);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_result' in response) ? response['arg_result'] : response;
              const resp_obj = { 'arg_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.arc.mojom.NetInstance_PingTest_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] pingTest FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.NetInstance_SetUpFlag_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setUpFlag');
          const result = this.impl.setUpFlag(params.arg_flag, params.arg_value);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.arc.mojom.NetInstanceReceiver = mojo.internal.bindings.arc.mojom.NetInstanceReceiver;

mojo.internal.bindings.arc.mojom.NetInstancePtr = mojo.internal.bindings.arc.mojom.NetInstanceRemote;
mojo.internal.bindings.arc.mojom.NetInstanceRequest = mojo.internal.bindings.arc.mojom.NetInstancePendingReceiver;


// Specs (at the end to ensure classes are defined for InterfaceProxy)

// Union: NetworkDetails
mojo.internal.Union(
    mojo.internal.bindings.arc.mojom.NetworkDetailsSpec, 'arc.mojom.NetworkDetails', {
      'arg_visible': {
        'ordinal': 0,
        'type': mojo.internal.bindings.arc.mojom.VisibleNetworkDetailsSpec,
        'nullable': false,
      },
      'arg_configured': {
        'ordinal': 1,
        'type': mojo.internal.bindings.arc.mojom.ConfiguredNetworkDetailsSpec,
        'nullable': false,
      },
    });

// Union: ArcProxyInfo
mojo.internal.Union(
    mojo.internal.bindings.arc.mojom.ArcProxyInfoSpec, 'arc.mojom.ArcProxyInfo', {
      'arg_manual_proxy': {
        'ordinal': 0,
        'type': mojo.internal.bindings.arc.mojom.ManualProxyConfigSpec,
        'nullable': false,
      },
      'arg_pac_url_proxy': {
        'ordinal': 1,
        'type': mojo.internal.bindings.arc.mojom.PacUrlProxyConfigSpec,
        'nullable': false,
      },
    });

// Struct: VisibleNetworkDetails
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VisibleNetworkDetailsSpec, 'arc.mojom.VisibleNetworkDetails', [
      mojo.internal.StructField('arg_frequency', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_signal_strength', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_bssid', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ConfiguredNetworkDetails
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ConfiguredNetworkDetailsSpec, 'arc.mojom.ConfiguredNetworkDetails', [
      mojo.internal.StructField('arg_passphrase', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_autoconnect', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_bssid', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PasspointCredentials
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.PasspointCredentialsSpec, 'arc.mojom.PasspointCredentials', [
      mojo.internal.StructField('arg_domains', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_realm', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_home_ois', 16, 0, mojo.internal.Array(mojo.internal.Uint64, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_required_home_ois', 24, 0, mojo.internal.Array(mojo.internal.Uint64, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_roaming_consortium_ois', 32, 0, mojo.internal.Array(mojo.internal.Uint64, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_eap', 40, 0, mojo.internal.bindings.arc.mojom.EapCredentialsSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_metered', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_package_name', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_friendly_name', 64, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_subscription_expiration_time_ms', 72, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 88]]);

// Struct: PasspointRemovalProperties
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.PasspointRemovalPropertiesSpec, 'arc.mojom.PasspointRemovalProperties', [
      mojo.internal.StructField('arg_fqdn', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_package_name', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: EapCredentials
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.EapCredentialsSpec, 'arc.mojom.EapCredentials', [
      mojo.internal.StructField('arg_method', 0, 0, mojo.internal.bindings.arc.mojom.EapMethodSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_phase2_method', 4, 0, mojo.internal.bindings.arc.mojom.EapPhase2MethodSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_anonymous_identity', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_identity', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_password', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_key_management', 32, 0, mojo.internal.bindings.arc.mojom.KeyManagementSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_use_system_cas', 36, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_use_proactive_key_caching', 36, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_use_login_password', 36, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_ca_certificate_pem', 40, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_client_certificate_pem', 48, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_client_certificate_key', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_subject_match', 64, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_subject_alternative_name_match_list', 72, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_domain_suffix_match_list', 80, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_tls_version_max', 88, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 104]]);

// Struct: IPConfiguration
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.IPConfigurationSpec, 'arc.mojom.IPConfiguration', [
      mojo.internal.StructField('arg_gateway', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_ip_address', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_name_servers', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_routing_prefix', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_type', 28, 0, mojo.internal.bindings.arc.mojom.IPAddressTypeSpec, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: WiFi
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.WiFiSpec, 'arc.mojom.WiFi', [
      mojo.internal.StructField('arg_bssid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_frequency', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_hidden_ssid', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_passpoint', 12, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_rssi', 14, 0, mojo.internal.Int16, 0, false, 0, undefined),
      mojo.internal.StructField('arg_hex_ssid', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_security', 24, 0, mojo.internal.bindings.arc.mojom.SecurityTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_signal_strength', 28, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_fqdn', 32, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: NetworkConfiguration
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetworkConfigurationSpec, 'arc.mojom.NetworkConfiguration', [
      mojo.internal.StructField('arg_connection_state', 0, 0, mojo.internal.bindings.arc.mojom.ConnectionStateTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 4, 0, mojo.internal.bindings.arc.mojom.NetworkTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_guid', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_deprecated_ip_configs', 16, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.IPConfigurationSpec, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_deprecated_mac_address', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_wifi', 32, 0, mojo.internal.bindings.arc.mojom.WiFiSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_deprecated_tethering_client_state', 40, 0, mojo.internal.bindings.arc.mojom.TetheringClientStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_default_network', 44, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_metered', 44, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_network_interface', 48, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_service_name', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_host_mtu', 64, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_host_ipv4_prefix_length', 68, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_host_ipv4_address', 72, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_host_ipv4_gateway', 80, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_host_ipv6_prefix_length', 88, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_arc_ipv4_prefix_length', 92, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_host_ipv6_global_addresses', 96, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_host_ipv6_gateway', 104, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_host_dns_addresses', 112, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_host_search_domains', 120, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_arc_ipv4_address', 128, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_arc_ipv4_gateway', 136, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_arc_network_interface', 144, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_include_routes', 152, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_exclude_routes', 160, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_dns_proxy_addresses', 168, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_link_speed', 176, 0, mojo.internal.bindings.arc.mojom.LinkSpeedSpec, null, true, 0, undefined),
    ],
    [[0, 192]]);

// Struct: LinkSpeed
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.LinkSpeedSpec, 'arc.mojom.LinkSpeed', [
      mojo.internal.StructField('arg_uplink_speed_kbps', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_downlink_speed_kbps', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: WifiConfiguration
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.WifiConfigurationSpec, 'arc.mojom.WifiConfiguration', [
      mojo.internal.StructField('arg_ssid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_frequency', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_signal_strength', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_bssid', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_security', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_guid', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_hexssid', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_details', 48, 0, mojo.internal.bindings.arc.mojom.NetworkDetailsSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_eap', 64, 0, mojo.internal.bindings.arc.mojom.EapCredentialsSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_metered_override', 72, 0, mojo.internal.bindings.arc.mojom.MeteredOverrideSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_http_proxy', 80, 0, mojo.internal.bindings.arc.mojom.ArcProxyInfoSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_static_ipv4_config', 96, 0, mojo.internal.bindings.arc.mojom.StaticIpv4ConfigurationSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_domains', 104, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_dns_servers', 112, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_bssid_allowlist', 120, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
    ],
    [[0, 136]]);

// Struct: StaticIpv4Configuration
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.StaticIpv4ConfigurationSpec, 'arc.mojom.StaticIpv4Configuration', [
      mojo.internal.StructField('arg_ipv4_addr', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_gateway_ipv4_addr', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_prefix_length', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PacUrlProxyConfig
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.PacUrlProxyConfigSpec, 'arc.mojom.PacUrlProxyConfig', [
      mojo.internal.StructField('arg_pac_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ManualProxyConfig
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ManualProxyConfigSpec, 'arc.mojom.ManualProxyConfig', [
      mojo.internal.StructField('arg_host', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_port', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_exclusion_list', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: GetNetworksResponseType
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.GetNetworksResponseTypeSpec, 'arc.mojom.GetNetworksResponseType', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.arc.mojom.NetworkResultSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_networks', 8, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.NetworkConfigurationSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AndroidVpnConfiguration
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AndroidVpnConfigurationSpec, 'arc.mojom.AndroidVpnConfiguration', [
      mojo.internal.StructField('arg_app_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_app_label', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_session_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_tunnel_chrome_traffic', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_mtu', 28, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_ipv4_gateway', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_split_include', 40, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_split_exclude', 48, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_nameservers', 56, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_domains', 64, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_http_proxy', 72, 0, mojo.internal.bindings.arc.mojom.ArcProxyInfoSpec, null, true, 0, undefined),
    ],
    [[0, 96]]);

// Struct: ArcDnsResolutionTestResult
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcDnsResolutionTestResultSpec, 'arc.mojom.ArcDnsResolutionTestResult', [
      mojo.internal.StructField('arg_is_successful', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_response_code', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_duration_ms', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ArcHttpTestResult
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcHttpTestResultSpec, 'arc.mojom.ArcHttpTestResult', [
      mojo.internal.StructField('arg_is_successful', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_status_code', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_response_header_fields', 8, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_duration_ms', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ArcPingTestResult
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcPingTestResultSpec, 'arc.mojom.ArcPingTestResult', [
      mojo.internal.StructField('arg_is_successful', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_os_errno', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_duration_ms', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: LohsConfig
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.LohsConfigSpec, 'arc.mojom.LohsConfig', [
      mojo.internal.StructField('arg_band', 0, 0, mojo.internal.bindings.arc.mojom.WifiBandSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_security_type', 4, 0, mojo.internal.bindings.arc.mojom.SecurityTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_hexssid', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_passphrase', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PasspointApprovalRequest
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.PasspointApprovalRequestSpec, 'arc.mojom.PasspointApprovalRequest', [
      mojo.internal.StructField('arg_package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_app_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_friendly_name', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_subscription_expiration_time_ms', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: PasspointApprovalResponse
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.PasspointApprovalResponseSpec, 'arc.mojom.PasspointApprovalResponse', [
      mojo.internal.StructField('arg_allowed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SocketConnectionEvent
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.SocketConnectionEventSpec, 'arc.mojom.SocketConnectionEvent', [
      mojo.internal.StructField('arg_src_addr', 0, 0, mojo.internal.bindings.network.mojom.IPAddressSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_dst_addr', 8, 0, mojo.internal.bindings.network.mojom.IPAddressSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_src_port', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_dst_port', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_proto', 24, 0, mojo.internal.bindings.arc.mojom.IpProtocolSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_event', 28, 0, mojo.internal.bindings.arc.mojom.SocketEventSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_app_category', 32, 0, mojo.internal.bindings.arc.mojom.AppCategorySpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_qos_category', 36, 0, mojo.internal.bindings.arc.mojom.QosCategorySpec, null, false, 0, undefined),
    ],
    [[0, 48]]);
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_GetWifiEnabledState_ParamsSpec, 'arc.mojom.NetHost_GetWifiEnabledState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_GetWifiEnabledState_ResponseParamsSpec, 'arc.mojom.NetHost_GetWifiEnabledState_ResponseParams', [
      mojo.internal.StructField('arg_is_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_StartScan_ParamsSpec, 'arc.mojom.NetHost_StartScan_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_SetWifiEnabledState_ParamsSpec, 'arc.mojom.NetHost_SetWifiEnabledState_Params', [
      mojo.internal.StructField('arg_is_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_SetWifiEnabledState_ResponseParamsSpec, 'arc.mojom.NetHost_SetWifiEnabledState_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_CreateNetwork_ParamsSpec, 'arc.mojom.NetHost_CreateNetwork_Params', [
      mojo.internal.StructField('arg_cfg', 0, 0, mojo.internal.bindings.arc.mojom.WifiConfigurationSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_CreateNetwork_ResponseParamsSpec, 'arc.mojom.NetHost_CreateNetwork_ResponseParams', [
      mojo.internal.StructField('arg_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_ForgetNetwork_ParamsSpec, 'arc.mojom.NetHost_ForgetNetwork_Params', [
      mojo.internal.StructField('arg_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_ForgetNetwork_ResponseParamsSpec, 'arc.mojom.NetHost_ForgetNetwork_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.arc.mojom.NetworkResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_UpdateWifiNetwork_ParamsSpec, 'arc.mojom.NetHost_UpdateWifiNetwork_Params', [
      mojo.internal.StructField('arg_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_cfg', 8, 0, mojo.internal.bindings.arc.mojom.WifiConfigurationSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_UpdateWifiNetwork_ResponseParamsSpec, 'arc.mojom.NetHost_UpdateWifiNetwork_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.arc.mojom.NetworkResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_StartConnect_ParamsSpec, 'arc.mojom.NetHost_StartConnect_Params', [
      mojo.internal.StructField('arg_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_StartConnect_ResponseParamsSpec, 'arc.mojom.NetHost_StartConnect_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.arc.mojom.NetworkResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_StartDisconnect_ParamsSpec, 'arc.mojom.NetHost_StartDisconnect_Params', [
      mojo.internal.StructField('arg_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_StartDisconnect_ResponseParamsSpec, 'arc.mojom.NetHost_StartDisconnect_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.arc.mojom.NetworkResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_GetNetworks_ParamsSpec, 'arc.mojom.NetHost_GetNetworks_Params', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.arc.mojom.GetNetworksRequestTypeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_GetNetworks_ResponseParamsSpec, 'arc.mojom.NetHost_GetNetworks_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.arc.mojom.GetNetworksResponseTypeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_AndroidVpnConnected_ParamsSpec, 'arc.mojom.NetHost_AndroidVpnConnected_Params', [
      mojo.internal.StructField('arg_cfg', 0, 0, mojo.internal.bindings.arc.mojom.AndroidVpnConfigurationSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_AndroidVpnUpdated_ParamsSpec, 'arc.mojom.NetHost_AndroidVpnUpdated_Params', [
      mojo.internal.StructField('arg_cfg', 0, 0, mojo.internal.bindings.arc.mojom.AndroidVpnConfigurationSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_DEPRECATED_AndroidVpnStateChanged_ParamsSpec, 'arc.mojom.NetHost_DEPRECATED_AndroidVpnStateChanged_Params', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.arc.mojom.ConnectionStateTypeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_AndroidVpnDisconnected_ParamsSpec, 'arc.mojom.NetHost_AndroidVpnDisconnected_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_SetAlwaysOnVpn_ParamsSpec, 'arc.mojom.NetHost_SetAlwaysOnVpn_Params', [
      mojo.internal.StructField('arg_vpnPackage', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_lockdown', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_RequestPasspointAppApproval_ParamsSpec, 'arc.mojom.NetHost_RequestPasspointAppApproval_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.arc.mojom.PasspointApprovalRequestSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_RequestPasspointAppApproval_ResponseParamsSpec, 'arc.mojom.NetHost_RequestPasspointAppApproval_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.arc.mojom.PasspointApprovalResponseSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_AddPasspointCredentials_ParamsSpec, 'arc.mojom.NetHost_AddPasspointCredentials_Params', [
      mojo.internal.StructField('arg_credentials', 0, 0, mojo.internal.bindings.arc.mojom.PasspointCredentialsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_RemovePasspointCredentials_ParamsSpec, 'arc.mojom.NetHost_RemovePasspointCredentials_Params', [
      mojo.internal.StructField('arg_properties', 0, 0, mojo.internal.bindings.arc.mojom.PasspointRemovalPropertiesSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_DisconnectHostVpn_ParamsSpec, 'arc.mojom.NetHost_DisconnectHostVpn_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_StartLohs_ParamsSpec, 'arc.mojom.NetHost_StartLohs_Params', [
      mojo.internal.StructField('arg_config', 0, 0, mojo.internal.bindings.arc.mojom.LohsConfigSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_StartLohs_ResponseParamsSpec, 'arc.mojom.NetHost_StartLohs_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.arc.mojom.LohsStatusSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_StopLohs_ParamsSpec, 'arc.mojom.NetHost_StopLohs_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_NotifyAndroidWifiMulticastLockChange_ParamsSpec, 'arc.mojom.NetHost_NotifyAndroidWifiMulticastLockChange_Params', [
      mojo.internal.StructField('arg_is_held', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_NotifySocketConnectionEvent_ParamsSpec, 'arc.mojom.NetHost_NotifySocketConnectionEvent_Params', [
      mojo.internal.StructField('arg_msg', 0, 0, mojo.internal.bindings.arc.mojom.SocketConnectionEventSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetHost_NotifyARCVPNSocketConnectionEvent_ParamsSpec, 'arc.mojom.NetHost_NotifyARCVPNSocketConnectionEvent_Params', [
      mojo.internal.StructField('arg_msg', 0, 0, mojo.internal.bindings.arc.mojom.SocketConnectionEventSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetInstance_Init_ParamsSpec, 'arc.mojom.NetInstance_Init_Params', [
      mojo.internal.StructField('arg_host_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.NetHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetInstance_Init_ResponseParamsSpec, 'arc.mojom.NetInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetInstance_ScanCompleted_ParamsSpec, 'arc.mojom.NetInstance_ScanCompleted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetInstance_WifiEnabledStateChanged_ParamsSpec, 'arc.mojom.NetInstance_WifiEnabledStateChanged_Params', [
      mojo.internal.StructField('arg_is_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetInstance_DisconnectAndroidVpn_ParamsSpec, 'arc.mojom.NetInstance_DisconnectAndroidVpn_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetInstance_ConfigureAndroidVpn_ParamsSpec, 'arc.mojom.NetInstance_ConfigureAndroidVpn_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetInstance_ActiveNetworksChanged_ParamsSpec, 'arc.mojom.NetInstance_ActiveNetworksChanged_Params', [
      mojo.internal.StructField('arg_network', 0, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.NetworkConfigurationSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetInstance_DnsResolutionTest_ParamsSpec, 'arc.mojom.NetInstance_DnsResolutionTest_Params', [
      mojo.internal.StructField('arg_transport_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_host_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetInstance_DnsResolutionTest_ResponseParamsSpec, 'arc.mojom.NetInstance_DnsResolutionTest_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.arc.mojom.ArcDnsResolutionTestResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetInstance_HttpTest_ParamsSpec, 'arc.mojom.NetInstance_HttpTest_Params', [
      mojo.internal.StructField('arg_transport_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetInstance_HttpTest_ResponseParamsSpec, 'arc.mojom.NetInstance_HttpTest_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.arc.mojom.ArcHttpTestResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetInstance_PingTest_ParamsSpec, 'arc.mojom.NetInstance_PingTest_Params', [
      mojo.internal.StructField('arg_transport_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_ip_address', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetInstance_PingTest_ResponseParamsSpec, 'arc.mojom.NetInstance_PingTest_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.arc.mojom.ArcPingTestResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.NetInstance_SetUpFlag_ParamsSpec, 'arc.mojom.NetInstance_SetUpFlag_Params', [
      mojo.internal.StructField('arg_flag', 0, 0, mojo.internal.bindings.arc.mojom.FlagSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_value', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

