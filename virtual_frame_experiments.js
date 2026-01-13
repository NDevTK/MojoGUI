(async function () {

    if (location.hostname != 'localhost') return;

    // Visual Log Helper
    const logDiv = document.createElement('div');
    logDiv.style.position = 'fixed';
    logDiv.style.bottom = '10px';
    logDiv.style.right = '10px';
    logDiv.style.width = '400px';
    logDiv.style.height = '300px';
    logDiv.style.backgroundColor = 'rgba(0,0,0,0.8)';
    logDiv.style.color = '#0f0';
    logDiv.style.fontFamily = 'monospace';
    logDiv.style.fontSize = '12px';
    logDiv.style.overflow = 'auto';
    logDiv.style.zIndex = '9999';
    logDiv.style.padding = '10px';
    logDiv.style.border = '1px solid #0f0';
    document.body.appendChild(logDiv);

    function log(msg, ...args) {
        console.log(msg, ...args);
        const line = document.createElement('div');
        line.textContent = msg + (args.length ? ' ' + JSON.stringify(args) : '');
        logDiv.appendChild(line);
        logDiv.scrollTop = logDiv.scrollHeight;
    }

    log('[VirtualFrame] Starting experiment...');

    // 1. Wait for Mojo + MojoBindings
    const ensureEnvironment = async () => {
        return new Promise(resolve => {
            const timer = setInterval(() => {
                if (window.mojo && window.mojo.internal && window.MojoBindings) {
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    };
    await ensureEnvironment();
    log('[VirtualFrame] Environment ready. Loading bindings...');

    // 2. Load Bindings
    try {
        await window.MojoBindings.loadBinding('content_common_frame.mojom.js');
        await window.MojoBindings.loadBinding('content_common_navigation_client.mojom.js');
        await window.MojoBindings.loadBinding('content_common_frame_messages.mojom.js');
        // Load dependencies explicitly to be safe
        await window.MojoBindings.loadBinding('services_network_public_mojom_permissions_policy_permissions_policy.mojom.js');
        log('[VirtualFrame] Bindings loaded.');
    } catch (e) {
        log('[VirtualFrame] Failed to load bindings (continuing anyway...):', e);
    }

    // --- Manual Spec Definitions ---

    // PageState: NativeStruct_Data (Header + Array<Uint8>)
    if (!mojo.internal.bindings.content.mojom.PageStateSpec ||
        mojo.internal.bindings.content.mojom.PageStateSpec.$ === mojo.internal.OpaqueStruct.$) {
        log('[VirtualFrame] Defining manual PageStateSpec...');
        mojo.internal.bindings.content.mojom.PageStateSpec = { $: {} };
        mojo.internal.Struct(
            mojo.internal.bindings.content.mojom.PageStateSpec.$,
            'PageState',
            [
                mojo.internal.StructField(
                    'data', 0, 0,
                    mojo.internal.Array(mojo.internal.Uint8, false),
                    null, false, 0
                ),
            ],
            [[0, 16]]
        );
    }

    // DidCommitProvisionalLoadParamsSpec
    const DidCommitParamsSpec = { $: {} };
    mojo.internal.Struct(
        DidCommitParamsSpec.$,
        'DidCommitProvisionalLoadParams',
        [
            // Group 1: 8-byte primitives (Offsets 0, 8, 16)
            mojo.internal.StructField('item_sequence_number', 0, 0, mojo.internal.Int64, -1, false, 0),
            mojo.internal.StructField('document_sequence_number', 8, 0, mojo.internal.Int64, -1, false, 0),
            mojo.internal.StructField('post_id', 16, 0, mojo.internal.Int64, -1, false, 0),

            // Group 2: 4-byte primitives (Offsets 24, 28, 32, 36)
            // Order: transition, http_status_code, insecure_request_policy, request_id
            mojo.internal.StructField('transition', 24, 0, mojo.internal.Int32, 0, false, 0),
            mojo.internal.StructField('http_status_code', 28, 0, mojo.internal.Int32, 0, false, 0),
            mojo.internal.StructField('insecure_request_policy', 32, 0, mojo.internal.Int32, 0, false, 0),
            mojo.internal.StructField('request_id', 36, 0, mojo.internal.Int32, 0, false, 0),

            // Group 3: Bools (Offset 40)
            mojo.internal.StructField('should_update_history', 40, 0, mojo.internal.Bool, false, false, 0),
            mojo.internal.StructField('did_create_new_entry', 40, 1, mojo.internal.Bool, false, false, 0),
            mojo.internal.StructField('url_is_unreachable', 40, 2, mojo.internal.Bool, false, false, 0),
            mojo.internal.StructField('is_overriding_user_agent', 40, 3, mojo.internal.Bool, false, false, 0),
            mojo.internal.StructField('history_list_was_cleared', 40, 4, mojo.internal.Bool, false, false, 0),
            mojo.internal.StructField('has_potentially_trustworthy_unique_origin', 40, 5, mojo.internal.Bool, false, false, 0),

            // Group 4: Pointers (Start 48). All 8-byte aligned.
            mojo.internal.StructField('navigation_api_key', 48, 0, mojo.internal.String, null, false, 0),
            mojo.internal.StructField('url', 56, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0),
            mojo.internal.StructField('referrer', 64, 0, mojo.internal.bindings.blink.mojom.ReferrerSpec.$, null, false, 0),
            mojo.internal.StructField('contents_mime_type', 72, 0, mojo.internal.String, null, false, 0),
            mojo.internal.StructField('method', 80, 0, mojo.internal.String, null, false, 0),
            mojo.internal.StructField('previous_page_state', 88, 0, mojo.internal.bindings.content.mojom.PageStateSpec.$, null, true, 0),
            mojo.internal.StructField('page_state', 96, 0, mojo.internal.bindings.content.mojom.PageStateSpec.$, null, false, 0),
            mojo.internal.StructField('origin', 104, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, false, 0),
            mojo.internal.StructField('initiator_base_url', 112, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0),
            mojo.internal.StructField('permissions_policy_header', 120, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.ParsedPermissionsPolicyDeclarationSpec.$, false), null, false, 0),
            mojo.internal.StructField('document_policy_header', 128, 0, mojo.internal.Map(mojo.internal.Int32, mojo.internal.bindings.blink.mojom.PolicyValueSpec.$, false), null, false, 0),
            mojo.internal.StructField('insecure_navigations_set', 136, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0),
            mojo.internal.StructField('navigation_token', 144, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0),
            mojo.internal.StructField('embedding_token', 152, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0),
            mojo.internal.StructField('unload_start', 160, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, true, 0),
            mojo.internal.StructField('unload_end', 168, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, true, 0),
            mojo.internal.StructField('commit_navigation_start', 176, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, false, 0),
            mojo.internal.StructField('commit_navigation_end', 184, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, true, 0),
            mojo.internal.StructField('commit_reply_sent', 192, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, false, 0),
        ],
        [[0, 200]] // Fixed Size: 200 bytes (Calculated from field sizes)
    );

    log('[VirtualFrame] Patching DidCommitProvisionalLoadParamsSpec, Size: 200');
    mojo.internal.bindings.content.mojom.DidCommitProvisionalLoadParamsSpec = DidCommitParamsSpec;

    // --- Handshake Logic ---

    try {
        const frameHostRemote = mojo.internal.bindings.content.mojom.FrameHost.getRemote();
        log('[VirtualFrame] FrameHost remote obtained:', frameHostRemote);

        const urlSpec = { url: "https://www.google.com" };
        const originSpec = { scheme: "https", host: "www.google.com", port: 443, nonce: null };
        const pageStateVal = { data: [] };
        const navToken = { high: BigInt(123), low: BigInt(456) };
        const timeTicks = { internalValue: BigInt(Date.now() * 1000) };

        const params = {
            item_sequence_number: BigInt(1),
            document_sequence_number: BigInt(1),
            navigation_api_key: "key",
            url: urlSpec,
            referrer: { url: { url: "" }, policy: 1 },
            transition: 0,
            should_update_history: false,
            contents_mime_type: "text/html",
            did_create_new_entry: true,
            method: "GET",
            post_id: BigInt(-1),
            http_status_code: 200,
            url_is_unreachable: false,
            previous_page_state: null,
            page_state: pageStateVal,
            is_overriding_user_agent: false,
            history_list_was_cleared: false,
            origin: originSpec,
            initiator_base_url: null,
            permissions_policy_header: [],
            document_policy_header: new Map(),
            insecure_request_policy: 0,
            insecure_navigations_set: [],
            has_potentially_trustworthy_unique_origin: false,
            request_id: 1,
            navigation_token: navToken,
            embedding_token: null,
            unload_start: null,
            unload_end: null,
            commit_navigation_start: timeTicks,
            commit_navigation_end: null,
            commit_reply_sent: timeTicks
        };

        log('[VirtualFrame] Calling DidCommitProvisionalLoad...');
        // log('Params:', params);

        const brokerPipe = Mojo.createMessagePipe();
        const interfaceParams = {
            arg_browser_interface_broker_receiver: new mojo.internal.bindings.blink.mojom.BrowserInterfaceBrokerPendingReceiver(brokerPipe.handle0)
        };

        await frameHostRemote.didCommitProvisionalLoad(params, interfaceParams);

        log('[VirtualFrame] SUCCESS: Handshake message sent!');
        window.generatedBrokerHandle = brokerPipe.handle1;

    } catch (e) {
        log('[VirtualFrame] FATAL ERROR:', e);
    }

})();

