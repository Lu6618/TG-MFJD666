export default {
    async fetch(request, env) {
        const userAgentHeader = request.headers.get('User-Agent');
        const userAgent = userAgentHeader ? userAgentHeader.toLowerCase() : "null";

        const crawlerUserAgents = [
            'googlebot', 'bingbot', 'slurp', 'duckduckbot', 'baiduspider',
            'yandexbot', 'sogou', 'exabot', 'facebookexternalhit', 'facebot',
            'alexa', 'ia_archiver', 'twitterbot', 'applebot', 'petalbot'
        ];

        const isCrawler = crawlerUserAgents.some(crawler => userAgent.includes(crawler));

        // 添加到开头的变量定义
        let mytoken = 'auto'; //可以随便取，或者uuid生成，https://1024tools.com/uuid
        let BotToken = ''; //可以为空，或者@BotFather中输入/start，/newbot，并关注机器人
        let ChatID = ''; //可以为空，或者@userinfobot中获取，/start
        let TG = 0; //小白勿动， 开发者专用，1 为推送所有的访问信息，0 为不推送订阅转换后端的访问信息与异常访问
        let FileName = 'CF-Workers-SUB';
        let SUBUpdateTime = 6; //自定义订阅更新时间，单位小时
        let total = 99; //TB
        let timestamp = 4102329600000; //2099-12-31

        const url = new URL(request.url);
        const token = url.searchParams.get('token');
        mytoken = env.TOKEN || mytoken;
        BotToken = env.TGTOKEN || BotToken;
        ChatID = env.TGID || ChatID;
        TG = env.TG || TG;
        subconverter = env.SUBAPI || subconverter;
        subconfig = env.SUBCONFIG || subconfig;
        FileName = env.SUBNAME || FileName;
        MainData = env.LINK || MainData;

        if (env.LINKSUB) urls = await ADD(env.LINKSUB);

        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);
        const timeTemp = Math.ceil(currentDate.getTime() / 1000);
        const fakeToken = await MD5MD5(`${mytoken}${timeTemp}`);

        let UD = Math.floor(((timestamp - Date.now()) / timestamp * total * 1099511627776) / 2);
        total = total * 1099511627776;
        let expire = Math.floor(timestamp / 1000);
        SUBUpdateTime = env.SUBUPTIME || SUBUpdateTime;

        let 重新汇总所有链接 = await ADD(MainData + '\n' + urls.join('\n'));
        let 自建节点 = "";
        let 订阅链接 = "";

        for (let x of 重新汇总所有链接) {
            if (x.toLowerCase().startsWith('http')) {
                订阅链接 += x + '\n';
            } else {
                自建节点 += x + '\n';
            }
        }

        MainData = 自建节点;
        urls = await ADD(订阅链接);

        if (!(token == mytoken || token == fakeToken || url.pathname == ("/" + mytoken) || url.pathname.includes("/" + mytoken + "?"))) {
            if (TG == 1 && url.pathname !== "/" && url.pathname !== "/favicon.ico") await sendMessage(`#异常访问 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgent}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
            const envKey = env.URL302 ? 'URL302' : (env.URL ? 'URL' : null);
            if (envKey) {
                const URLs = await ADD(env[envKey]);
                const URL = URLs[Math.floor(Math.random() * URLs.length)];
                return envKey === 'URL302' ? Response.redirect(URL, 302) : fetch(new Request(URL, request));
            }
            return new Response(await nginx(), {
                status: 200,
                headers: {
                    'Content-Type': 'text/html; charset=UTF-8',
                },
            });
        } else {
            await sendMessage(`#获取订阅 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
            let 订阅格式 = 'base64';
            if (userAgent.includes('null') || userAgent.includes('subconverter') || userAgent.includes('nekobox') || userAgent.includes(('CF-Workers-SUB').toLowerCase())) {
                订阅格式 = 'base64';
            } else if (userAgent.includes('clash') || (url.searchParams.has('clash') && !userAgent.includes('subconverter'))) {
                订阅格式 = 'clash';
            } else if (userAgent.includes('sing-box') || userAgent.includes('singbox') || ((url.searchParams.has('sb') || url.searchParams.has('singbox')) && !userAgent.includes('subconverter'))) {
                订阅格式 = 'singbox';
            }

            let subconverterUrl;
            let 订阅转换URL = `${url.origin}/${await MD5MD5(fakeToken)}?token=${fakeToken}`;

            let req_data = MainData;

            const controller = new AbortController();

            const timeout = setTimeout(() => {
                controller.abort();
            }, 2000);

            let 追加UA = 'v2rayn';
            if (url.searchParams.has('clash')) {
                追加UA = 'clash';
            } else if (url.searchParams.has('singbox')) {
                追加UA = 'singbox';
            }

            try {
                const responses = await Promise.allSettled(urls.map(url =>
                    fetch(url, {
                        method: 'get',
                        headers: {
                            'Accept': 'text/html,application/xhtml+xml,application/xml;',
                            'User-Agent': `${追加UA} cmliu/CF-Workers-SUB ${userAgentHeader}`
                        },
                        signal: controller.signal
                    }).then(response => {
                        if (response.ok) {
                            return response.text().then(content => {
                                if (content.includes('dns') && content.includes('proxies') && content.includes('proxy-groups')) {
                                    订阅转换URL += "|" + url;
                                } else if (content.includes('dns') && content.includes('outbounds') && content.includes('inbounds')) {
                                    订阅转换URL += "|" + url;
                                } else {
                                    return content;
                                }
                            });
                        } else {
                            return "";
                        }
                    })
                ));

                for (const response of responses) {
                    if (response.status === 'fulfilled' && response.value) {
                        const content = response.value;
                        req_data += base64Decode(content) + '\n';
                    }
                }

            } catch (error) {
                //console.error(error);
            } finally {
                clearTimeout(timeout);
            }

            const utf8Encoder = new TextEncoder();
            const encodedData = utf8Encoder.encode(req_data);
            const text = String.fromCharCode.apply(null, encodedData);

            const uniqueLines = new Set(text.split('\n'));
            const result = [...uniqueLines].join('\n');

            const base64Data = btoa(result);

            if (订阅格式 == 'base64' || token == fakeToken) {
                if (isCrawler) {
                    return Response.redirect('https://t.me/MFJD666', 302);
                }
                return new Response(base64Data, {
                    headers: {
                        "content-type": "text/plain; charset=utf-8",
                        "Profile-Update-Interval": `${SUBUpdateTime}`,
                        "Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
                    }
                });
            } else if (订阅格式 == 'clash') {
                subconverterUrl = `https://${subconverter}/sub?target=clash&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
            } else if (订阅格式 == 'singbox') {
                subconverterUrl = `https://${subconverter}/sub?target=singbox&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
            }

            if (isCrawler) {
                return Response.redirect('https://t.me/MFJD666', 302);
            }

            return fetch(subconverterUrl, {
                headers: {
                    "Profile-Update-Interval": `${SUBUpdateTime}`,
                    "Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
                }
            });
        }
    },
};