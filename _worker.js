// 部署完成后在网址后面加上这个，获取自建节点和机场聚合节点，/?token=auto或/auto或

let mytoken = ''; //可以随便取，或者uuid生成，https://1024tools.com/uuid
let BotToken =''; //可以为空，或者@BotFather中输入/start，/newbot，并关注机器人
let ChatID =''; //可以为空，或者@userinfobot中获取，/start
let TG = 1; //小白勿动， 开发者专用，1 为推送所有的访问信息，0 为不推送订阅转换后端的访问信息与异常访问
let FileName = '%E5%86%A0%E5%B8%8C%E7%9A%84%E5%85%AC%E7%9B%8A%E7%A0%96%E7%BA%BF';
let SUBUpdateTime = 6; //自定义订阅更新时间，单位小时
let total = 99;//TB
let timestamp = 4102329600000;//2099-12-31

//节点链接 + 订阅链接
let MainData = `
trojan://ab4bdba2-8653-4708-9162-c5c7ab04f567@hk1.ce8a8dc2-008f-5ee5-1cc8-50d5c2e7291d.6df03129.the-best-airport.com:443?allowInsecure=1&peer=new.download.the-best-airport.com&sni=new.download.the-best-airport.com&type=tcp#🇭🇰香港IPLC砖线
trojan://ab4bdba2-8653-4708-9162-c5c7ab04f567@hk2.ce8a8dc2-008f-5ee5-1cc8-50d5c2e7291d.24ba0f77.the-best-airport.com:443?allowInsecure=1&peer=new.download.the-best-airport.com&sni=new.download.the-best-airport.com&type=tcp#🇭🇰香港IPLC砖线
trojan://ab4bdba2-8653-4708-9162-c5c7ab04f567@hk3.ce8a8dc2-008f-5ee5-1cc8-50d5c2e7291d.0d1f6a51.the-best-airport.com:443?allowInsecure=1&peer=new.download.the-best-airport.com&sni=new.download.the-best-airport.com&type=tcp#🇭🇰香港IPLC砖线
trojan://ab4bdba2-8653-4708-9162-c5c7ab04f567@hk4.ce8a8dc2-008f-5ee5-1cc8-50d5c2e7291d.66dc3db5.the-best-airport.com:443?allowInsecure=1&peer=new.download.the-best-airport.com&sni=new.download.the-best-airport.com&type=tcp#🇭🇰香港IPLC砖线
trojan://ab4bdba2-8653-4708-9162-c5c7ab04f567@hk5.ce8a8dc2-008f-5ee5-1cc8-50d5c2e7291d.52629f87.the-best-airport.com:443?allowInsecure=1&peer=new.download.the-best-airport.com&sni=new.download.the-best-airport.com&type=tcp#🇭🇰香港IPLC砖线
trojan://ab4bdba2-8653-4708-9162-c5c7ab04f567@hk6.ce8a8dc2-008f-5ee5-1cc8-50d5c2e7291d.7817bed2.the-best-airport.com:443?allowInsecure=1&peer=new.download.the-best-airport.com&sni=new.download.the-best-airport.com&type=tcp#🇭🇰香港IPLC砖线
trojan://ab4bdba2-8653-4708-9162-c5c7ab04f567@hk7.ce8a8dc2-008f-5ee5-1cc8-50d5c2e7291d.8fb10e3d.the-best-airport.com:443?allowInsecure=1&peer=new.download.the-best-airport.com&sni=new.download.the-best-airport.com&type=tcp#🇭🇰香港IPLC砖线
trojan://ab4bdba2-8653-4708-9162-c5c7ab04f567@hk8.ce8a8dc2-008f-5ee5-1cc8-50d5c2e7291d.b12b4427.the-best-airport.com:443?allowInsecure=1&peer=new.download.the-best-airport.com&sni=new.download.the-best-airport.com&type=tcp#🇭🇰香港IPLC砖线
trojan://ab4bdba2-8653-4708-9162-c5c7ab04f567@us1.ce8a8dc2-008f-5ee5-1cc8-50d5c2e7291d.36a8c922.the-best-airport.com:443?allowInsecure=1&peer=new.download.the-best-airport.com&sni=new.download.the-best-airport.com&type=tcp#🇺🇸美国IPLC砖线
trojan://ab4bdba2-8653-4708-9162-c5c7ab04f567@us2.ce8a8dc2-008f-5ee5-1cc8-50d5c2e7291d.2f6cd430.the-best-airport.com:443?allowInsecure=1&peer=new.download.the-best-airport.com&sni=new.download.the-best-airport.com&type=tcp#🇺🇸美国IPLC砖线
trojan://ab4bdba2-8653-4708-9162-c5c7ab04f567@us3.ce8a8dc2-008f-5ee5-1cc8-50d5c2e7291d.47253001.the-best-airport.com:443?allowInsecure=1&peer=new.download.the-best-airport.com&sni=new.download.the-best-airport.com&type=tcp#🇺🇸美国IPLC砖线
trojan://ab4bdba2-8653-4708-9162-c5c7ab04f567@us4.ce8a8dc2-008f-5ee5-1cc8-50d5c2e7291d.30d6a0d0.the-best-airport.com:443?allowInsecure=1&peer=new.download.the-best-airport.com&sni=new.download.the-best-airport.com&type=tcp#🇺🇸美国IPLC砖线
trojan://ab4bdba2-8653-4708-9162-c5c7ab04f567@us5.ce8a8dc2-008f-5ee5-1cc8-50d5c2e7291d.6fe0e22c.the-best-airport.com:443?allowInsecure=1&peer=new.download.the-best-airport.com&sni=new.download.the-best-airport.com&type=tcp#🇺🇸美国IPLC砖线
trojan://ab4bdba2-8653-4708-9162-c5c7ab04f567@us6.ce8a8dc2-008f-5ee5-1cc8-50d5c2e7291d.617e6ac3.the-best-airport.com:443?allowInsecure=1&peer=new.download.the-best-airport.com&sni=new.download.the-best-airport.com&type=tcp#🇺🇸美国IPLC砖线
trojan://ab4bdba2-8653-4708-9162-c5c7ab04f567@us7.ce8a8dc2-008f-5ee5-1cc8-50d5c2e7291d.85860b8f.the-best-airport.com:443?allowInsecure=1&peer=new.download.the-best-airport.com&sni=new.download.the-best-airport.com&type=tcp#🇺🇸美国IPLC砖线
trojan://ab4bdba2-8653-4708-9162-c5c7ab04f567@us8.ce8a8dc2-008f-5ee5-1cc8-50d5c2e7291d.f73b4cdf.the-best-airport.com:443?allowInsecure=1&peer=new.download.the-best-airport.com&sni=new.download.the-best-airport.com&type=tcp#🇺🇸美国IPLC砖线

`

let urls = [];
let subconverter = "subapi-loadbalancing.pages.dev"; //在线订阅转换后端，目前使用CM的订阅转换功能。支持自建psub 可自行搭建https://github.com/bulianglin/psub
let subconfig = "https://raw.githubusercontent.com/cmliu/ACL4SSR/main/Clash/config/ACL4SSR_Online_MultiCountry.ini"; //订阅配置文件
let subProtocol = 'https';

export default {
	async fetch (request,env) {
		const userAgentHeader = request.headers.get('User-Agent');
		const userAgent = userAgentHeader ? userAgentHeader.toLowerCase() : "null";
		const url = new URL(request.url);
		const token = url.searchParams.get('token');
		mytoken = env.TOKEN || mytoken;
		BotToken = env.TGTOKEN || BotToken;
		ChatID = env.TGID || ChatID; 
		TG =  env.TG || TG; 
		subconverter = env.SUBAPI || subconverter;
		if( subconverter.includes("http://") ){
			subconverter = subconverter.split("//")[1];
			subProtocol = 'http';
		} else {
			subconverter = subconverter.split("//")[1] || subconverter;
		}
		subconfig = env.SUBCONFIG || subconfig;
		FileName = env.SUBNAME || FileName;
		MainData = env.LINK || MainData;
		if(env.LINKSUB) urls = await ADD(env.LINKSUB);

		const currentDate = new Date();
		currentDate.setHours(0, 0, 0, 0); 
		const timeTemp = Math.ceil(currentDate.getTime() / 1000);
		const fakeToken = await MD5MD5(`${mytoken}${timeTemp}`);
		//console.log(`${fakeUserID}\n${fakeHostName}`); // 打印fakeID

		let UD = Math.floor(((timestamp - Date.now())/timestamp * total * 1099511627776 )/2);
		total = total * 1099511627776 ;
		UD = 102400;//就是上传下载都跑了1024字节
       total = 108890104436224;//就是总流量大小是2048字节
		let expire= Math.floor(timestamp / 1000) ;
		SUBUpdateTime = env.SUBUPTIME || SUBUpdateTime;

		let 重新汇总所有链接 = await ADD(MainData + '\n' + urls.join('\n'));
		let 自建节点 ="";
		let 订阅链接 ="";
		for (let x of 重新汇总所有链接) {
			if (x.toLowerCase().startsWith('http')) {
				订阅链接 += x + '\n';
			} else {
				自建节点 += x + '\n';
			}
		}
		MainData = 自建节点;
		urls = await ADD(订阅链接);

		if ( !(token == mytoken || token == fakeToken || url.pathname == ("/"+ mytoken) || url.pathname.includes("/"+ mytoken + "?")) ) {
			if ( TG == 1 && url.pathname !== "/" && url.pathname !== "/favicon.ico" ) await sendMessage(`#异常访问 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgent}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			const envKey = env.URL302 ? 'URL302' : (env.URL ? 'URL' : null);
			if (envKey) {
				const URLs = await ADD(env[envKey]);
				const URL = URLs[Math.floor(Math.random() * URLs.length)];
				return envKey === 'URL302' ? Response.redirect(URL, 302) : fetch(new Request(URL, request));
			}
			return new Response(await nginx(), { 
				status: 200 ,
				headers: {
					'Content-Type': 'text/html; charset=UTF-8',
				},
			});
		} else {
			await sendMessage(`#获取订阅 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			let 订阅格式 = 'base64';
			if (userAgent.includes('null') || userAgent.includes('subconverter') || userAgent.includes('nekobox') || userAgent.includes(('CF-Workers-SUB').toLowerCase())){
				订阅格式 = 'base64';
			} else if (userAgent.includes('clash') || ( url.searchParams.has('clash') && !userAgent.includes('subconverter'))){
				订阅格式 = 'clash';
			} else if (userAgent.includes('sing-box') || userAgent.includes('singbox') || ( (url.searchParams.has('sb') || url.searchParams.has('singbox')) && !userAgent.includes('subconverter'))){
				订阅格式 = 'singbox';
			} else if (userAgent.includes('surge') || ( url.searchParams.has('surge') && !userAgent.includes('subconverter'))){
				订阅格式 = 'surge';
			}

			let subconverterUrl ;
			let 订阅转换URL = `${url.origin}/${await MD5MD5(fakeToken)}?token=${fakeToken}`;
			//console.log(订阅转换URL);
			let req_data = MainData;
			// 创建一个AbortController对象，用于控制fetch请求的取消
			const controller = new AbortController();
	
			const timeout = setTimeout(() => {
				controller.abort(); // 取消所有请求
			}, 2000); // 2秒后触发
	

			let 追加UA = 'v2rayn';
			if (url.searchParams.has('clash')){
				追加UA = 'clash';
			} else if(url.searchParams.has('singbox')){
				追加UA = 'singbox';
			} else if(url.searchParams.has('surge')){
				追加UA = 'surge';
			}
			
			try {
				const responses = await Promise.allSettled(urls.map(url =>
					fetch(url, {
						method: 'get',
						headers: {
							'Accept': 'text/html,application/xhtml+xml,application/xml;',
							'User-Agent': `${追加UA} cmliu/CF-Workers-SUB ${userAgentHeader}`
						},
						signal: controller.signal // 将AbortController的信号量添加到fetch请求中，以便于需要时可以取消请求
					}).then(response => {
						if (response.ok) {
							return response.text().then(content => {
								// 这里可以顺便做内容检查
								if (content.includes('dns') && content.includes('proxies') && content.includes('proxy-groups')) {
									//console.log("clashsub: " + url);
									订阅转换URL += "|" + url;
								} else if (content.includes('dns') && content.includes('outbounds') && content.includes('inbounds')){
									//console.log("singboxsub: " + url);
									订阅转换URL += "|" + url;
								} else {
									//console.log("未识别" + url);
									return content; // 保证链式调用中的下一个then可以接收到文本内容
								}
								//console.log(content);
							});
						} else {
							return ""; // 如果response.ok为false，返回空字符串
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
				// 无论成功或失败，最后都清除设置的超时定时器
				clearTimeout(timeout);
			}

			//修复中文错误
			const utf8Encoder = new TextEncoder();
			const encodedData = utf8Encoder.encode(req_data);
			const text = String.fromCharCode.apply(null, encodedData);
			
			//去重
			const uniqueLines = new Set(text.split('\n'));
			const result = [...uniqueLines].join('\n');
			console.log(result);
			
			const base64Data = btoa(result);

			if (订阅格式 == 'base64' || token == fakeToken){
				return new Response(base64Data ,{
					headers: { 
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
					}
				});
			} else if (订阅格式 == 'clash'){
				subconverterUrl = `${subProtocol}://${subconverter}/sub?target=clash&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'singbox'){
				subconverterUrl = `${subProtocol}://${subconverter}/sub?target=singbox&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'surge'){
				subconverterUrl = `${subProtocol}://${subconverter}/sub?target=surge&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			}
			console.log(订阅转换URL);
			try {
				const subconverterResponse = await fetch(subconverterUrl);
				
				if (!subconverterResponse.ok) {
					return new Response(base64Data ,{
						headers: { 
							"content-type": "text/plain; charset=utf-8",
							"Profile-Update-Interval": `${SUBUpdateTime}`,
							"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
						}
					});
					//throw new Error(`Error fetching subconverterUrl: ${subconverterResponse.status} ${subconverterResponse.statusText}`);
				}
				let subconverterContent = await subconverterResponse.text();
				if (订阅格式 == 'clash') subconverterContent =await clashFix(subconverterContent);
				return new Response(subconverterContent, {
					headers: { 
						"Content-Disposition": `attachment; filename*=utf-8''${encodeURIComponent(FileName)}; filename=${FileName}`,
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,

					},
				});
			} catch (error) {
				return new Response(base64Data ,{
					headers: { 
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
					}
				});
			}
		}
	}
};

async function ADD(envadd) {
	var addtext = envadd.replace(/[	"'|\r\n]+/g, ',').replace(/,+/g, ',');  // 将空格、双引号、单引号和换行符替换为逗号
	//console.log(addtext);
	if (addtext.charAt(0) == ',') addtext = addtext.slice(1);
	if (addtext.charAt(addtext.length -1) == ',') addtext = addtext.slice(0, addtext.length - 1);
	const add = addtext.split(',');
	//console.log(add);
	return add ;
}

async function nginx() {
	const text = `
	<!DOCTYPE html>
	<html>
	<head>
	<title>Welcome to nginx!</title>
	<style>
		body {
			width: 35em;
			margin: 0 auto;
			font-family: Tahoma, Verdana, Arial, sans-serif;
		}
	</style>
	</head>
	<body>
	<h1>Welcome to nginx!</h1>
	<p>If you see this page, the nginx web server is successfully installed and
	working. Further configuration is required.</p>
	
	<p>For online documentation and support please refer to
	<a href="http://nginx.org/">nginx.org</a>.<br/>
	Commercial support is available at
	<a href="http://nginx.com/">nginx.com</a>.</p>
	
	<p><em>Thank you for using nginx.</em></p>
	</body>
	</html>
	`
	return text ;
}

async function sendMessage(type, ip, add_data = "") {
	if ( BotToken !== '' && ChatID !== ''){
		let msg = "";
		const response = await fetch(`http://ip-api.com/json/${ip}?lang=zh-CN`);
		if (response.status == 200) {
			const ipInfo = await response.json();
			msg = `${type}\nIP: ${ip}\n国家: ${ipInfo.country}\n<tg-spoiler>城市: ${ipInfo.city}\n组织: ${ipInfo.org}\nASN: ${ipInfo.as}\n${add_data}`;
		} else {
			msg = `${type}\nIP: ${ip}\n<tg-spoiler>${add_data}`;
		}
	
		let url = "https://api.telegram.org/bot"+ BotToken +"/sendMessage?chat_id=" + ChatID + "&parse_mode=HTML&text=" + encodeURIComponent(msg);
		return fetch(url, {
			method: 'get',
			headers: {
				'Accept': 'text/html,application/xhtml+xml,application/xml;',
				'Accept-Encoding': 'gzip, deflate, br',
				'User-Agent': 'Mozilla/5.0 Chrome/90.0.4430.72'
			}
		});
	}
}

function base64Decode(str) {
	const bytes = new Uint8Array(atob(str).split('').map(c => c.charCodeAt(0)));
	const decoder = new TextDecoder('utf-8');
	return decoder.decode(bytes);
}

async function MD5MD5(text) {
	const encoder = new TextEncoder();
  
	const firstPass = await crypto.subtle.digest('MD5', encoder.encode(text));
	const firstPassArray = Array.from(new Uint8Array(firstPass));
	const firstHex = firstPassArray.map(b => b.toString(16).padStart(2, '0')).join('');

	const secondPass = await crypto.subtle.digest('MD5', encoder.encode(firstHex.slice(7, 27)));
	const secondPassArray = Array.from(new Uint8Array(secondPass));
	const secondHex = secondPassArray.map(b => b.toString(16).padStart(2, '0')).join('');
  
	return secondHex.toLowerCase();
}

function clashFix(content) {
	if(content.includes('wireguard') && !content.includes('remote-dns-resolve')){
		let lines;
		if (content.includes('\r\n')){
			lines = content.split('\r\n');
		} else {
			lines = content.split('\n');
		}
	
		let result = "";
		for (let line of lines) {
			if (line.includes('type: wireguard')) {
				const 备改内容 = `, mtu: 1280, udp: true`;
				const 正确内容 = `, mtu: 1280, remote-dns-resolve: true, udp: true`;
				result += line.replace(new RegExp(备改内容, 'g'), 正确内容) + '\n';
			} else {
				result += line + '\n';
			}
		}

		content = result;
	}
	return content;
}

// 添加爬虫 User-Agent 判断和重定向逻辑
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const userAgent = request.headers.get('User-Agent')

  // 定义需要重定向的爬虫 User-Agent 列表
  const redirectUserAgents = ['TelegramBot', 'Twitterbot', 'Discordbot', 'Slackbot']

  // 检查 User-Agent 是否在需要重定向的列表中
  if (redirectUserAgents.some(ua => userAgent.includes(ua))) {
    return Response.redirect('https://t.me/MFJD666', 301)
  }

  // 如果不是需要重定向的爬虫 User-Agent，则将请求传递给原始服务器
  return fetch(request)
}