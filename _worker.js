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
ss://YWVzLTI1Ni1nY206YzFmOGU2OTdiYjcxNWE4OQ==@46.29.162.155:65142#%E5%AE%9A%E6%9C%9F%E9%87%8D%E7%BD%AE%E9%93%BE%E6%8E%A5%20%20%E5%85%B3%E6%B3%A8%E9%A2%91%E9%81%93%E4%BB%A5%E9%98%B2%E5%A4%B1%E8%81%94
ss://YWVzLTI1Ni1nY206YW1hem9uc2tyMDU=@34.216.37.235:80/?plugin=none;obfs=plain;proto=origin;udp=1#%E7%A6%81%E6%AD%A2%E6%90%AC%E8%BF%90%20%20%20%20TG%E9%A2%91%E9%81%93%40MFJD666
ss://YWVzLTEyOC1nY206OTk5NmFiMTEtMmIyNi00NjY3LTgzMTUtZjBkMWU0NDY0YTc4@gd2.chuanping.wang:10571#🇭🇰香港IPLC砖线
ss://YWVzLTEyOC1nY206OTk5NmFiMTEtMmIyNi00NjY3LTgzMTUtZjBkMWU0NDY0YTc4@gd3.chuanping.wang:10556#🇭🇰香港IPLC砖线
ss://YWVzLTEyOC1nY206OTk5NmFiMTEtMmIyNi00NjY3LTgzMTUtZjBkMWU0NDY0YTc4@gd2.chuanping.wang:10574#🇭🇰香港IPLC砖线
ss://YWVzLTEyOC1nY206OTk5NmFiMTEtMmIyNi00NjY3LTgzMTUtZjBkMWU0NDY0YTc4@gd2.chuanping.wang:10572#🇼🇸台湾IPLC砖线
ss://YWVzLTEyOC1nY206OTk5NmFiMTEtMmIyNi00NjY3LTgzMTUtZjBkMWU0NDY0YTc4@gd3.chuanping.wang:10517#🇭🇰香港IPLC砖线
ss://YWVzLTEyOC1nY206OTk5NmFiMTEtMmIyNi00NjY3LTgzMTUtZjBkMWU0NDY0YTc4@gd3.chuanping.wang:10559#🇸🇬新加坡IPLC砖线
ss://YWVzLTEyOC1nY206OTk5NmFiMTEtMmIyNi00NjY3LTgzMTUtZjBkMWU0NDY0YTc4@gd3.chuanping.wang:10522#🇸🇬新加坡IPLC砖线
ss://YWVzLTEyOC1nY206OTk5NmFiMTEtMmIyNi00NjY3LTgzMTUtZjBkMWU0NDY0YTc4@gd3.chuanping.wang:10524#🇸🇬新加坡IPLC砖线
ss://YWVzLTEyOC1nY206OTk5NmFiMTEtMmIyNi00NjY3LTgzMTUtZjBkMWU0NDY0YTc4@gd1.chuanping.wang:10521#🇼🇸台湾IPLC砖线
ss://YWVzLTEyOC1nY206OTk5NmFiMTEtMmIyNi00NjY3LTgzMTUtZjBkMWU0NDY0YTc4@gd3.chuanping.wang:10516#🇼🇸台湾IPLC砖线
ss://YWVzLTEyOC1nY206OTk5NmFiMTEtMmIyNi00NjY3LTgzMTUtZjBkMWU0NDY0YTc4@gd1.chuanping.wang:10522#🇯🇵日本IPLC砖线
ss://YWVzLTEyOC1nY206OTk5NmFiMTEtMmIyNi00NjY3LTgzMTUtZjBkMWU0NDY0YTc4@gd1.chuanping.wang:10524#🇯🇵日本IPLC砖线
ss://YWVzLTEyOC1nY206OTk5NmFiMTEtMmIyNi00NjY3LTgzMTUtZjBkMWU0NDY0YTc4@gd3.chuanping.wang:10557#🇺🇸美国IPLC砖线
ss://YWVzLTEyOC1nY206OTk5NmFiMTEtMmIyNi00NjY3LTgzMTUtZjBkMWU0NDY0YTc4@gd3.chuanping.wang:10521#🇺🇸美国IPLC砖线
ss://YWVzLTEyOC1nY206OTk5NmFiMTEtMmIyNi00NjY3LTgzMTUtZjBkMWU0NDY0YTc4@gd1.chuanping.wang:10597#🇯🇵日本IPLC砖线
ss://YWVzLTEyOC1nY206OTk5NmFiMTEtMmIyNi00NjY3LTgzMTUtZjBkMWU0NDY0YTc4@gd1.chuanping.wang:10599#🇺🇸美国IPLC砖线
ss://YWVzLTEyOC1nY206OTk5NmFiMTEtMmIyNi00NjY3LTgzMTUtZjBkMWU0NDY0YTc4@gd1.chuanping.wang:10596#🇸🇬新加坡IPLC砖线
hysteria2://040a0977-c3c9-48a9-b859-425f7341924d@163.123.192.140:443/?insecure=1&sni=www.bing.com#🇺🇸美国IPLC砖线
hysteria2://040a0977-c3c9-48a9-b859-425f7341924d@163.123.192.112:443/?insecure=1&sni=www.bing.com#🇺🇸美国IPLC砖线
hysteria2://040a0977-c3c9-48a9-b859-425f7341924d@205.178.183.125:443/?insecure=1&sni=www.bing.com#🇯🇵日本IPLC砖线
hysteria2://040a0977-c3c9-48a9-b859-425f7341924d@138.2.31.176:443/?insecure=1&sni=www.bing.com#🇯🇵日本IPLC砖线
hysteria2://040a0977-c3c9-48a9-b859-425f7341924d@54.179.4.150:443/?insecure=1&sni=www.bing.com#🇸🇬新加坡IPLC砖线
hysteria2://040a0977-c3c9-48a9-b859-425f7341924d@52.77.246.162:443/?insecure=1&sni=www.bing.com#🇸🇬新加坡IPLC砖线
hysteria2://040a0977-c3c9-48a9-b859-425f7341924d@108.181.23.249:443/?insecure=1&sni=www.bing.com#🇺🇸美国IPLC砖线
hysteria2://040a0977-c3c9-48a9-b859-425f7341924d@108.181.23.33:443/?insecure=1&sni=www.bing.com#🇺🇸美国IPLC砖线
hysteria2://040a0977-c3c9-48a9-b859-425f7341924d@208.87.243.35:443/?insecure=1&sni=www.bing.com#🇺🇸美国IPLC砖线
hysteria2://040a0977-c3c9-48a9-b859-425f7341924d@208.87.243.147:443/?insecure=1&sni=www.bing.com#🇺🇸美国IPLC砖线
hysteria2://040a0977-c3c9-48a9-b859-425f7341924d@132.226.171.133:443/?insecure=1&sni=www.bing.com#🇰🇷韩国IPLC砖线
hysteria2://040a0977-c3c9-48a9-b859-425f7341924d@152.70.234.101:443/?insecure=1&sni=www.bing.com#🇰🇷韩国IPLC砖线
hysteria2://040a0977-c3c9-48a9-b859-425f7341924d@193.122.106.44:443/?insecure=1&sni=www.bing.com#🇰🇷韩国IPLC砖线
hysteria2://040a0977-c3c9-48a9-b859-425f7341924d@150.230.253.68:443/?insecure=1&sni=www.bing.com#🇰🇷韩国IPLC砖线
hysteria2://040a0977-c3c9-48a9-b859-425f7341924d@158.180.80.119:443/?insecure=1&sni=www.bing.com#🇰🇷韩国IPLC砖线
vless://040a0977-c3c9-48a9-b859-425f7341924d@163.123.192.186:443?type=tcp&encryption=none&security=tls&flow=xtls-rprx-vision&sni=yfus1.xn--4gq62f52gppi29k.com&headerType=none&host=&path=&fp=chrome#🇺🇸美国IPLC砖线
vless://040a0977-c3c9-48a9-b859-425f7341924d@148.59.74.251:443?type=tcp&encryption=none&security=tls&flow=xtls-rprx-vision&sni=yfus2.xn--4gq62f52gppi29k.com&headerType=none&host=&path=&fp=chrome#🇺🇸美国IPLC砖线
vless://040a0977-c3c9-48a9-b859-425f7341924d@178.173.236.238:443?type=tcp&encryption=none&security=tls&flow=xtls-rprx-vision&sni=downloadhk.xn--4gq62f52gppi29k.com&headerType=none&host=&path=&fp=safari#🇭🇰香港IPLC砖线
vless://040a0977-c3c9-48a9-b859-425f7341924d@146.56.171.215:443?type=tcp&encryption=none&security=tls&flow=xtls-rprx-vision&sni=b295-23ap29-6bh.xn--4gq62f52gppi29k.com&headerType=none&host=&path=&fp=ios#🇰🇷韩国IPLC砖线
vless://040a0977-c3c9-48a9-b859-425f7341924d@193.122.116.235:443?type=tcp&encryption=none&security=tls&flow=xtls-rprx-vision&sni=b295-23ap29-6bh.xn--4gq62f52gppi29k.com&headerType=none&host=&path=&fp=chrome#🇰🇷韩国IPLC砖线
vless://040a0977-c3c9-48a9-b859-425f7341924d@3bd9.55dca.e048.f65-fef1f.yfjcs.com:443?type=tcp&encryption=none&security=tls&flow=xtls-rprx-vision&sni=yfhk1.xn--4gq62f52gppi29k.com&headerType=none&host=&path=&fp=safari#🇭🇰香港IPLC砖线
vless://040a0977-c3c9-48a9-b859-425f7341924d@3bd9.55dca.e048.f65-fef1f.yfjcs.com:443?type=tcp&encryption=none&security=tls&flow=xtls-rprx-vision&sni=yfhk1.xn--4gq62f52gppi29k.com&headerType=none&host=&path=&fp=firefox#🇭🇰香港IPLC砖线
vless://040a0977-c3c9-48a9-b859-425f7341924d@185.176.24.87:443?type=ws&encryption=none&security=tls&sni=k7us1.yfjc.sbs&path=%2Fyfjc%2Fkus1&host=k7us1.yfjc.sbs&fp=chrome#🇺🇸美国IPLC砖线
vless://040a0977-c3c9-48a9-b859-425f7341924d@89.116.161.168:443?type=ws&encryption=none&security=tls&sni=k6us2.yfjc.sbs&path=%2Fyfjc%2Fkus2&host=k6us2.yfjc.sbs&fp=ios#🇺🇸美国IPLC砖线
vless://040a0977-c3c9-48a9-b859-425f7341924d@13.250.41.175:443?type=tcp&encryption=none&security=tls&flow=xtls-rprx-vision&sni=yfsg.xn--4gq62f52gppi29k.com&headerType=none&host=&path=&fp=safari#🇸🇬新加坡IPLC砖线
vless://040a0977-c3c9-48a9-b859-425f7341924d@3bd9.55dba.e048.f65-fef1f.yfjcs.com:443?type=tcp&encryption=none&security=tls&flow=xtls-rprx-vision&sni=tw1.liangxinjichang.top&headerType=none&host=&path=&fp=chrome#🇼🇸台湾IPLC砖线
vless://040a0977-c3c9-48a9-b859-425f7341924d@152.70.126.104:443?type=tcp&encryption=none&security=tls&flow=xtls-rprx-vision&sni=b295-23us129-6bh.xn--4gq62f52gppi29k.com&headerType=none&host=&path=&fp=chrome#🇺🇸美国IPLC砖线
vless://040a0977-c3c9-48a9-b859-425f7341924d@152.70.147.168:443?type=tcp&encryption=none&security=tls&flow=xtls-rprx-vision&sni=767w1-45dc0-9ocf2.xn--4gq62f52gppi29k.com&headerType=none&host=&path=&fp=safari#🇺🇸美国IPLC砖线
vless://040a0977-c3c9-48a9-b859-425f7341924d@108.181.22.195:443?type=tcp&encryption=none&security=tls&flow=xtls-rprx-vision&sni=yfus.xn--4gq62f52gppi29k.com&headerType=none&host=&path=&fp=safari#🇺🇸美国IPLC砖线
vless://040a0977-c3c9-48a9-b859-425f7341924d@108.181.23.61:443?type=tcp&encryption=none&security=tls&flow=xtls-rprx-vision&sni=yfus.xn--4gq62f52gppi29k.com&headerType=none&host=&path=&fp=ios#🇺🇸美国IPLC砖线
vless://040a0977-c3c9-48a9-b859-425f7341924d@162.159.58.35:443?type=ws&encryption=none&security=tls&sni=&path=%2Fyfjc%2Fhk1&host=yhk1.yfjc.sbs&fp=chrome#🇭🇰香港IPLC砖线
vless://040a0977-c3c9-48a9-b859-425f7341924d@188.42.145.72:443?type=ws&encryption=none&security=tls&sni=&path=%2Fyfjc%2Fhk1&host=yhk2.yfjc.sbs&fp=chrome#🇭🇰香港IPLC砖线
vless://040a0977-c3c9-48a9-b859-425f7341924d@162.159.58.35:443?type=ws&encryption=none&security=tls&sni=&path=%2Fyfjc%2Fjp1&host=yfjcjp1.yfjc.sbs&fp=chrome#🇯🇵日本IPLC砖线
vless://040a0977-c3c9-48a9-b859-425f7341924d@162.159.58.35:443?type=ws&encryption=none&security=tls&sni=&path=%2Fyfjc%2Fjp1&host=yfjcjp2.yfjc.sbs&fp=chrome#🇯🇵日本IPLC砖线
vless://YXV0bzpGNjY1MDNBNy00NzQ5LTQzRUQtQTk4My05NDcwMTk0RDk4REJAanAzLnNwZWVkLW1pdGNlLnRvcDoxMDAwOA?remarks=%F0%9F%87%AF%F0%9F%87%B5%E6%97%A5%E6%9C%AC%20IPLC%E7%A0%96%E7%BA%BF&obfs=none&tls=1&peer=s0.awsstatic.com&xtls=2&pbk=dR1QmDjsiujobG0AxdPdsom9gNkgf8qnJglB49-XclM&sid=01fc5e98a68e5e7b
vless://YXV0bzpGNjY1MDNBNy00NzQ5LTQzRUQtQTk4My05NDcwMTk0RDk4REJAanAxLnNwZWVkLW1pdGNlLnRvcDoxMDAwNg?remarks=%F0%9F%87%AF%F0%9F%87%B5%E6%97%A5%E6%9C%AC%20IPLC%E7%A0%96%E7%BA%BF&obfs=none&tls=1&peer=s0.awsstatic.com&xtls=2&pbk=dR1QmDjsiujobG0AxdPdsom9gNkgf8qnJglB49-XclM&sid=01fc5e98a68e5e7b
vless://YXV0bzpGNjY1MDNBNy00NzQ5LTQzRUQtQTk4My05NDcwMTk0RDk4REJAanA1LnNwZWVkLW1pdGNlLnRvcDoxMDAxMA?remarks=%F0%9F%87%AF%F0%9F%87%B5%E6%97%A5%E6%9C%AC%20IPLC%E7%A0%96%E7%BA%BF&obfs=none&tls=1&peer=s0.awsstatic.com&xtls=2&pbk=dR1QmDjsiujobG0AxdPdsom9gNkgf8qnJglB49-XclM&sid=01fc5e98a68e5e7b
vless://YXV0bzpGNjY1MDNBNy00NzQ5LTQzRUQtQTk4My05NDcwMTk0RDk4REJAanA2LnNwZWVkLW1pdGNlLnRvcDoxMDA0MQ?remarks=%F0%9F%87%AF%F0%9F%87%B5%E6%97%A5%E6%9C%AC%20IPLC%E7%A0%96%E7%BA%BF&obfs=none&tls=1&peer=s0.awsstatic.com&xtls=2&pbk=dR1QmDjsiujobG0AxdPdsom9gNkgf8qnJglB49-XclM&sid=01fc5e98a68e5e7b
vless://YXV0bzpGNjY1MDNBNy00NzQ5LTQzRUQtQTk4My05NDcwMTk0RDk4REJAanA3LnNwZWVkLW1pdGNlLnRvcDoxMDA0Mg?remarks=%F0%9F%87%AF%F0%9F%87%B5%E6%97%A5%E6%9C%AC%20IPLC%E7%A0%96%E7%BA%BF&obfs=none&tls=1&peer=s0.awsstatic.com&xtls=2&pbk=dR1QmDjsiujobG0AxdPdsom9gNkgf8qnJglB49-XclM&sid=01fc5e98a68e5e7b
vless://YXV0bzpGNjY1MDNBNy00NzQ5LTQzRUQtQTk4My05NDcwMTk0RDk4REJAanAyLnNwZWVkLW1pdGNlLnRvcDoxMDAwNw?remarks=%F0%9F%87%AF%F0%9F%87%B5%E6%97%A5%E6%9C%AC%20IPLC%E7%A0%96%E7%BA%BF&obfs=none&tls=1&peer=s0.awsstatic.com&xtls=2&pbk=dR1QmDjsiujobG0AxdPdsom9gNkgf8qnJglB49-XclM&sid=01fc5e98a68e5e7b
vless://YXV0bzpGNjY1MDNBNy00NzQ5LTQzRUQtQTk4My05NDcwMTk0RDk4REJAanA0LnNwZWVkLW1pdGNlLnRvcDoxMDAwOQ?remarks=%F0%9F%87%AF%F0%9F%87%B5%E6%97%A5%E6%9C%AC%20IPLC%E7%A0%96%E7%BA%BF&obfs=none&tls=1&peer=s0.awsstatic.com&xtls=2&pbk=dR1QmDjsiujobG0AxdPdsom9gNkgf8qnJglB49-XclM&sid=01fc5e98a68e5e7b
vless://YXV0bzpGNjY1MDNBNy00NzQ5LTQzRUQtQTk4My05NDcwMTk0RDk4REJAc2c1LnNwZWVkLW1pdGNlLnRvcDoxMDAxNQ?remarks=%F0%9F%87%B8%F0%9F%87%AC%E6%96%B0%E5%8A%A0%E5%9D%A1%20IPLC%E7%A0%96%E7%BA%BF&obfs=none&tls=1&peer=s0.awsstatic.com&xtls=2&pbk=dR1QmDjsiujobG0AxdPdsom9gNkgf8qnJglB49-XclM&sid=01fc5e98a68e5e7b
vless://YXV0bzpGNjY1MDNBNy00NzQ5LTQzRUQtQTk4My05NDcwMTk0RDk4REJAc2c2LnNwZWVkLW1pdGNlLnRvcDoxMDA0NQ?remarks=%F0%9F%87%B8%F0%9F%87%AC%E6%96%B0%E5%8A%A0%E5%9D%A1%20IPLC%E7%A0%96%E7%BA%BF&obfs=none&tls=1&peer=s0.awsstatic.com&xtls=2&pbk=dR1QmDjsiujobG0AxdPdsom9gNkgf8qnJglB49-XclM&sid=01fc5e98a68e5e7b
vless://YXV0bzpGNjY1MDNBNy00NzQ5LTQzRUQtQTk4My05NDcwMTk0RDk4REJAc2c3LnNwZWVkLW1pdGNlLnRvcDoxMDA0Ng?remarks=%F0%9F%87%B8%F0%9F%87%AC%E6%96%B0%E5%8A%A0%E5%9D%A1%20IPLC%E7%A0%96%E7%BA%BF&obfs=none&tls=1&peer=s0.awsstatic.com&xtls=2&pbk=dR1QmDjsiujobG0AxdPdsom9gNkgf8qnJglB49-XclM&sid=01fc5e98a68e5e7b
vless://YXV0bzpGNjY1MDNBNy00NzQ5LTQzRUQtQTk4My05NDcwMTk0RDk4REJAc2cxLnNwZWVkLW1pdGNlLnRvcDoxMDAxMQ?remarks=%F0%9F%87%B8%F0%9F%87%AC%E6%96%B0%E5%8A%A0%E5%9D%A1%20IPLC%E7%A0%96%E7%BA%BF&obfs=none&tls=1&peer=s0.awsstatic.com&xtls=2&pbk=dR1QmDjsiujobG0AxdPdsom9gNkgf8qnJglB49-XclM&sid=01fc5e98a68e5e7b
vless://YXV0bzpGNjY1MDNBNy00NzQ5LTQzRUQtQTk4My05NDcwMTk0RDk4REJAc2czLnNwZWVkLW1pdGNlLnRvcDoxMDAxMw?remarks=%F0%9F%87%B8%F0%9F%87%AC%E6%96%B0%E5%8A%A0%E5%9D%A1%20IPLC%E7%A0%96%E7%BA%BF&obfs=none&tls=1&peer=s0.awsstatic.com&xtls=2&pbk=dR1QmDjsiujobG0AxdPdsom9gNkgf8qnJglB49-XclM&sid=01fc5e98a68e5e7b
vless://YXV0bzpGNjY1MDNBNy00NzQ5LTQzRUQtQTk4My05NDcwMTk0RDk4REJAa3IzLnNwZWVkLW1pdGNlLnRvcDoxMDAxOA?remarks=%F0%9F%87%B0%F0%9F%87%B7%E9%9F%A9%E5%9B%BD%20IPLC%E7%A0%96%E7%BA%BF&obfs=none&tls=1&peer=s0.awsstatic.com&xtls=2&pbk=dR1QmDjsiujobG0AxdPdsom9gNkgf8qnJglB49-XclM&sid=01fc5e98a68e5e7b
vless://YXV0bzpGNjY1MDNBNy00NzQ5LTQzRUQtQTk4My05NDcwMTk0RDk4REJAa3I0LnNwZWVkLW1pdGNlLnRvcDoxMDAxNQ?remarks=%F0%9F%87%B0%F0%9F%87%B7%E9%9F%A9%E5%9B%BD%20IPLC%E7%A0%96%E7%BA%BF&obfs=none&tls=1&peer=s0.awsstatic.com&xtls=2&pbk=dR1QmDjsiujobG0AxdPdsom9gNkgf8qnJglB49-XclM&sid=01fc5e98a68e5e7b
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
		UD = 10240000000000;//就是上传下载都跑了1024字节
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