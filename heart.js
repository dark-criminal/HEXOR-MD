const _0x5d435c=_0x31ea;(function(_0x18d2b2,_0x2c47fe){const _0x141b35=_0x31ea,_0x2a4a3b=_0x18d2b2();while(!![]){try{const _0x4c4353=parseInt(_0x141b35(0x11e))/0x1*(-parseInt(_0x141b35(0x170))/0x2)+parseInt(_0x141b35(0x199))/0x3*(-parseInt(_0x141b35(0x149))/0x4)+-parseInt(_0x141b35(0x188))/0x5+-parseInt(_0x141b35(0x14c))/0x6*(-parseInt(_0x141b35(0x195))/0x7)+parseInt(_0x141b35(0x15b))/0x8*(-parseInt(_0x141b35(0x12c))/0x9)+-parseInt(_0x141b35(0x13c))/0xa+-parseInt(_0x141b35(0x142))/0xb*(-parseInt(_0x141b35(0x163))/0xc);if(_0x4c4353===_0x2c47fe)break;else _0x2a4a3b['push'](_0x2a4a3b['shift']());}catch(_0x278f9f){_0x2a4a3b['push'](_0x2a4a3b['shift']());}}}(_0x4502,0x3d7cb),require(_0x5d435c(0x17b)),require(_0x5d435c(0x126)));const {default:WASocket,DisconnectReason,downloadContentFromMessage,makeInMemoryStore,useSingleFileAuthState,jidDecode,delay,MessageType,jidNormalizedUser,generateWAMessageFromContent,makeWALegacySocket,useSingleFileLegacyAuthState,DEFAULT_CONNECTION_CONFIG,DEFAULT_LEGACY_CONNECTION_CONFIG}=require(_0x5d435c(0x17f)),fs=require('fs'),chalk=require(_0x5d435c(0x19a)),pino=require('pino'),yargs=require(_0x5d435c(0x18e)),path=require(_0x5d435c(0x159)),qrcode=require('qrcode'),{Boom}=require(_0x5d435c(0x158)),{Collection,Simple}=require(_0x5d435c(0x11a)),Welcome=require('./lib/handler/EventHandler'),{serialize,WAConnection}=Simple,FileType=require(_0x5d435c(0x13f)),Commands=new Collection(),cfonts=require(_0x5d435c(0x146)),mongoose=require(_0x5d435c(0x197));Commands[_0x5d435c(0x12f)]=prefa;const user=require('./lib/models/user'),express=require(_0x5d435c(0x134)),axios=require(_0x5d435c(0x190)),session='./tokens/test.json',{QuickDB}=require(_0x5d435c(0x179));global['db']=new QuickDB();const Auth=require('./lib/typings/authstore'),{join}=require(_0x5d435c(0x159)),{fetchLatestBaileysVersion}=require('@darkcriminal/baileys'),readCommands=()=>{const _0x31d25e=_0x5d435c;let _0x20e94d=path[_0x31d25e(0x140)](__dirname,_0x31d25e(0x143)),_0x1be444={};try{let _0x2b89f0=fs['readdirSync'](_0x20e94d)[_0x31d25e(0x17c)](_0x344531=>_0x344531['endsWith'](_0x31d25e(0x18a)));for(const _0x5ba76f of _0x2b89f0){const _0x479735=require(path[_0x31d25e(0x140)](_0x20e94d,_0x5ba76f)),_0x22ed69=Array['isArray'](_0x479735)?_0x479735:[_0x479735];_0x22ed69[_0x31d25e(0x16a)](_0x1a61bd=>{const _0x3f437f=_0x31d25e;let _0x17ef43=_0x1a61bd['category']?_0x1a61bd[_0x3f437f(0x19d)][_0x3f437f(0x121)]():_0x3f437f(0x13a);!_0x1be444[_0x17ef43]&&(_0x1be444[_0x17ef43]=[]),_0x1be444[_0x17ef43][_0x3f437f(0x172)](_0x1a61bd),Commands[_0x3f437f(0x198)](_0x1a61bd[_0x3f437f(0x135)],_0x1a61bd);});}Commands['list']=_0x1be444;}catch(_0x355e98){console[_0x31d25e(0x192)](_0x355e98);}},store=makeInMemoryStore({'logger':pino()['child']({'level':_0x5d435c(0x11d),'stream':_0x5d435c(0x169)})});readCommands();function _0x4502(){const _0x2775f6=['set','204ZTqmsY','chalk','json','Welcome','category','remoteJid','send','Server\x20running\x20on\x20PORT\x20','writeFileSync','./lib/typings','HEXTER-MD','then','silent','46ecSiJS','Firefox','listMessage','toLowerCase','server','bind','connection.update','invalid','./settings','user\x20added','username','log','info','asSticker','29349xqtrLB','badSession','decodeJid','prefix','user','save','Restart\x20Required,\x20Restarting...','packname','express','name','split','author','msg','Connection\x20Status\x20:\x20','misc','[SERVER\x20STARTED]','5034290yctKrQ','concat','creds.update','file-type','join','status@broadcast','12519177zeYmNW','./plugins/','94751150234@s.whatsapp.net','replace','cfonts','BAE5','connect','5188kItFFE','94714831387@s.whatsapp.net','message','6aHEMsy','sender','Unknown\x20DisconnectReason:\x20','🧛‍♂️','audio','mtype','parse','categories','statusCode','sendMessage','sticker','loggedOut','@hapi/boom','path','unlink','848jEjGXy','ext','downloadAndSaveMediaMessage','94776115376@s.whatsapp.net','restartRequired','messages','105.0.1343.42','94704461999@s.whatsapp.net','12dSuIwL','94719500964@s.whatsapp.net','length','94701469704@s.whatsapp.net','listen','getFile','store','forEach','image','fromBuffer','end','key','Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again','2404NpHxWt','contacts.update','push','Connection\x20TimedOut,\x20Reconnecting...','startsWith','mimetype','downloadMediaMessage','Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Close\x20Current\x20Session\x20First','Connection\x20Lost\x20from\x20Server,\x20reconnecting...','quick.db','autoread','./lib/handler/MessageHandler','filter','promises','🦹‍♂️','@darkcriminal/baileys','findOne','status','messages.upsert','notify','video','test','connectionLost','group-participants.update','1435375DvZMxd','close','.js','Connection\x20closed,\x20reconnecting....','sendFile','from','yargs','image/webp','axios','updateOne','error','logout','timedOut','2753814AxDGsK','buttonsMessage','mongoose'];_0x4502=function(){return _0x2775f6;};return _0x4502();}function _0x31ea(_0x1401f8,_0x22607b){const _0x450273=_0x4502();return _0x31ea=function(_0x31ea14,_0x2147dd){_0x31ea14=_0x31ea14-0x11a;let _0x2b57da=_0x450273[_0x31ea14];return _0x2b57da;},_0x31ea(_0x1401f8,_0x22607b);}const PORT=port,app=express();let QR_GENERATE=_0x5d435c(0x125),status;const connect=async()=>{const _0x310ae7=_0x5d435c;await mongoose[_0x310ae7(0x148)](mongodb);const {getAuthFromDatabase:_0x353985}=new Auth(sessionId),{saveState:_0x37da95,state:_0x7d0a4c,clearState:_0x4679d2}=await _0x353985();let {version:_0x10f112,isLatest:_0xc5ddb1}=await fetchLatestBaileysVersion(),_0x5bb163={'printQRInTerminal':!![],'browser':[_0x310ae7(0x11b),_0x310ae7(0x11f),_0x310ae7(0x161)],'patchMessageBeforeSending':_0x5c4037=>{const _0x19316f=_0x310ae7,_0x5ad051=!!(_0x5c4037[_0x19316f(0x196)]||_0x5c4037['templateMessage']||_0x5c4037[_0x19316f(0x120)]);return _0x5ad051&&(_0x5c4037={'viewOnceMessage':{'message':{'messageContextInfo':{'deviceListMetadataVersion':0x2,'deviceListMetadata':{}},..._0x5c4037}}}),_0x5c4037;},'logger':pino({'level':_0x310ae7(0x11d)}),'defautQueryTimeoutMs':undefined,'auth':_0x7d0a4c,'version':_0x10f112};const _0x4bf76f=new WAConnection(WASocket(_0x5bb163));await console['log'](_0x310ae7(0x13b)),store[_0x310ae7(0x123)](_0x4bf76f['ev']),_0x4bf76f['ev']['on'](_0x310ae7(0x13e),()=>{_0x37da95();}),_0x4bf76f['ev']['on'](_0x310ae7(0x124),async _0x57bf3b=>{const _0x38d345=_0x310ae7,{lastDisconnect:_0x4cefbc,connection:_0x4eb25e,qr:_0xdbca6e}=_0x57bf3b;status=_0x4eb25e;_0x4eb25e&&await console[_0x38d345(0x12a)](_0x38d345(0x139)+_0x4eb25e);if(_0x4eb25e==_0x38d345(0x189)){let _0x1cf914=new Boom(_0x4cefbc?.['error'])?.['output'][_0x38d345(0x154)];if(_0x1cf914===DisconnectReason[_0x38d345(0x12d)])console['log'](_0x38d345(0x16f)),_0x4bf76f['logout']();else{if(_0x1cf914===DisconnectReason['connectionClosed'])console[_0x38d345(0x129)](_0x38d345(0x18b)),connect();else{if(_0x1cf914===DisconnectReason[_0x38d345(0x186)])console[_0x38d345(0x129)](_0x38d345(0x178)),connect();else{if(_0x1cf914===DisconnectReason['connectionReplaced'])console[_0x38d345(0x129)](_0x38d345(0x177)),_0x4bf76f[_0x38d345(0x193)]();else{if(_0x1cf914===DisconnectReason[_0x38d345(0x157)])_0x4679d2(),console[_0x38d345(0x129)]('Device\x20Logged\x20Out,\x20Please\x20Scan\x20Again\x20And\x20Run.'),process['exit']();else{if(_0x1cf914===DisconnectReason[_0x38d345(0x15f)])console[_0x38d345(0x129)](_0x38d345(0x132)),connect();else{if(_0x1cf914===DisconnectReason[_0x38d345(0x194)])console[_0x38d345(0x129)](_0x38d345(0x173)),connect();else _0x4bf76f[_0x38d345(0x16d)](_0x38d345(0x14e)+_0x1cf914+'|'+_0x4eb25e);}}}}}}}_0xdbca6e&&(QR_GENERATE=_0xdbca6e);}),_0x4bf76f['ev']['on'](_0x310ae7(0x187),async _0x54d59d=>{Welcome(_0x4bf76f,_0x54d59d);}),_0x4bf76f['ev']['on'](_0x310ae7(0x182),async _0x43831a=>{const _0x5dcdb8=_0x310ae7;m=serialize(_0x4bf76f,_0x43831a[_0x5dcdb8(0x160)][0x0]);if(!m[_0x5dcdb8(0x14b)])return;if(m['key']&&m[_0x5dcdb8(0x16e)][_0x5dcdb8(0x19e)]==_0x5dcdb8(0x141))return;if(m[_0x5dcdb8(0x16e)]['id'][_0x5dcdb8(0x174)](_0x5dcdb8(0x147))&&m['key']['id'][_0x5dcdb8(0x165)]==0x10)return;const _0x5de426=m['message']['conversation']?.[_0x5dcdb8(0x121)]();global[_0x5dcdb8(0x17a)]===!![]&&await _0x4bf76f['readMessages']([m[_0x5dcdb8(0x16e)]]),require(_0x5dcdb8(0x17b))(_0x4bf76f,m,Commands,_0x43831a),m[_0x5dcdb8(0x14d)]=='94786802371@s.whatsapp.net'&&await _0x4bf76f[_0x5dcdb8(0x155)](m[_0x5dcdb8(0x18d)],{'react':{'text':'👨‍💻','key':m[_0x5dcdb8(0x16e)]}}),m[_0x5dcdb8(0x14d)]=='94769659498@s.whatsapp.net'&&await _0x4bf76f['sendMessage'](m[_0x5dcdb8(0x18d)],{'react':{'text':_0x5dcdb8(0x17e),'key':m[_0x5dcdb8(0x16e)]}}),m[_0x5dcdb8(0x14d)]=='94755228896@s.whatsapp.net'&&await _0x4bf76f[_0x5dcdb8(0x155)](m[_0x5dcdb8(0x18d)],{'react':{'text':_0x5dcdb8(0x14f),'key':m['key']}}),m['sender']==_0x5dcdb8(0x164)&&await _0x4bf76f['sendMessage'](m[_0x5dcdb8(0x18d)],{'react':{'text':'🥷','key':m[_0x5dcdb8(0x16e)]}}),m['sender']==_0x5dcdb8(0x166)&&await _0x4bf76f['sendMessage'](m['from'],{'react':{'text':'🖤','key':m[_0x5dcdb8(0x16e)]}}),m[_0x5dcdb8(0x14d)]==_0x5dcdb8(0x144)&&await _0x4bf76f[_0x5dcdb8(0x155)](m[_0x5dcdb8(0x18d)],{'react':{'text':'💖','key':m['key']}}),m[_0x5dcdb8(0x14d)]==_0x5dcdb8(0x15e)&&await _0x4bf76f['sendMessage'](m['from'],{'react':{'text':'🐛','key':m[_0x5dcdb8(0x16e)]}}),m[_0x5dcdb8(0x14d)]==_0x5dcdb8(0x14a)&&await _0x4bf76f[_0x5dcdb8(0x155)](m[_0x5dcdb8(0x18d)],{'react':{'text':_0x5dcdb8(0x14f),'key':m['key']}}),m[_0x5dcdb8(0x14d)]==_0x5dcdb8(0x162)&&await _0x4bf76f[_0x5dcdb8(0x155)](m[_0x5dcdb8(0x18d)],{'react':{'text':'🐸','key':m[_0x5dcdb8(0x16e)]}});}),_0x4bf76f['decodeJid']=_0x45f6e6=>{const _0x3a2f0e=_0x310ae7;if(!_0x45f6e6)return _0x45f6e6;if(/:\d+@/gi[_0x3a2f0e(0x185)](_0x45f6e6)){let _0x35ca7d=jidDecode(_0x45f6e6)||{};return _0x35ca7d[_0x3a2f0e(0x130)]&&_0x35ca7d[_0x3a2f0e(0x122)]&&_0x35ca7d['user']+'@'+_0x35ca7d['server']||_0x45f6e6;}else return _0x45f6e6;},_0x4bf76f['ev']['on'](_0x310ae7(0x171),async _0x227dc5=>{const _0xde43e1=_0x310ae7;for(let _0x15d8d2 of _0x227dc5){let _0x3ef273=_0x4bf76f[_0xde43e1(0x12e)](_0x15d8d2['id']);user['findOne']({'id':_0x3ef273})[_0xde43e1(0x11c)](_0x29dfaa=>{const _0x34fa94=_0xde43e1;!_0x29dfaa?(new user({'id':_0x3ef273,'name':_0x15d8d2[_0x34fa94(0x183)]})[_0x34fa94(0x131)](),console[_0x34fa94(0x129)](_0x34fa94(0x127))):user[_0x34fa94(0x191)]({'id':_0x3ef273},{'name':_0x15d8d2['notify']});});}}),_0x4bf76f['sendText']=(_0x3ebfa8,_0x5dac75,_0x51b2db='',_0x259d20)=>_0x4bf76f[_0x310ae7(0x155)](_0x3ebfa8,{'text':_0x5dac75,..._0x259d20},{'quoted':_0x51b2db}),_0x4bf76f[_0x310ae7(0x18c)]=async(_0x3a4d15,_0x1c8abb,_0x437bd2='',_0x2bece9='',_0x3e3910='',_0x4e7f2f={})=>{const _0x8690f=_0x310ae7;let _0x24dacb=await _0x4bf76f[_0x8690f(0x168)](_0x1c8abb,!![]),{mime:_0x52d8ae,ext:_0x4e0e3c,res:_0x443e78,data:_0x27a7b3,filename:_0x30faf4}=_0x24dacb;if(_0x443e78&&_0x443e78[_0x8690f(0x181)]!==0xc8||file['length']<=0x10000)try{throw{'json':JSON[_0x8690f(0x152)](file['toString']())};}catch(_0x1f4081){if(_0x1f4081[_0x8690f(0x19b)])throw _0x1f4081[_0x8690f(0x19b)];}let _0x51c977='',_0x51de50=_0x52d8ae,_0x3b1f0a=_0x30faf4;if(_0x4e7f2f['asDocument'])_0x51c977='document';if(_0x4e7f2f[_0x8690f(0x12b)]||/webp/['test'](_0x52d8ae)){let {writeExif:_0xc5bb25}=require('./lib/exif'),_0x39dadf={'mimetype':_0x52d8ae,'data':_0x27a7b3};_0x3b1f0a=await _0xc5bb25(_0x39dadf,{'packname':_0x4e7f2f[_0x8690f(0x133)]?_0x4e7f2f[_0x8690f(0x133)]:global[_0x8690f(0x133)],'author':_0x4e7f2f[_0x8690f(0x137)]?_0x4e7f2f[_0x8690f(0x137)]:global[_0x8690f(0x137)],'categories':_0x4e7f2f[_0x8690f(0x153)]?_0x4e7f2f[_0x8690f(0x153)]:[]}),await fs[_0x8690f(0x17d)][_0x8690f(0x15a)](_0x30faf4),_0x51c977=_0x8690f(0x156),_0x51de50=_0x8690f(0x18f);}else{if(/image/[_0x8690f(0x185)](_0x52d8ae))_0x51c977=_0x8690f(0x16b);else{if(/video/[_0x8690f(0x185)](_0x52d8ae))_0x51c977=_0x8690f(0x184);else{if(/audio/[_0x8690f(0x185)](_0x52d8ae))_0x51c977=_0x8690f(0x150);else _0x51c977='document';}}}return await _0x4bf76f[_0x8690f(0x155)](_0x3a4d15,{[_0x51c977]:{'url':_0x3b1f0a},'caption':_0x2bece9,'mimetype':_0x51de50,'fileName':_0x437bd2,..._0x4e7f2f},{'quoted':_0x3e3910,..._0x4e7f2f}),fs[_0x8690f(0x17d)][_0x8690f(0x15a)](_0x3b1f0a);},_0x4bf76f[_0x310ae7(0x15d)]=async(_0x1feef9,_0x1115c0,_0x3241f3=!![])=>{const _0x4057d=_0x310ae7;let _0x5537d1=_0x1feef9['msg']?_0x1feef9[_0x4057d(0x138)]:_0x1feef9,_0x42a3bf=(_0x1feef9[_0x4057d(0x138)]||_0x1feef9)[_0x4057d(0x175)]||'',_0x14de41=_0x1feef9[_0x4057d(0x151)]?_0x1feef9[_0x4057d(0x151)][_0x4057d(0x145)](/Message/gi,''):_0x42a3bf[_0x4057d(0x136)]('/')[0x0];const _0x824cfa=await downloadContentFromMessage(_0x5537d1,_0x14de41);let _0x45cc13=Buffer['from']([]);for await(const _0x27f064 of _0x824cfa){_0x45cc13=Buffer['concat']([_0x45cc13,_0x27f064]);}let _0x47f4b0=await FileType[_0x4057d(0x16c)](_0x45cc13);return trueFileName=_0x3241f3?_0x1115c0+'.'+_0x47f4b0[_0x4057d(0x15c)]:_0x1115c0,await fs[_0x4057d(0x1a1)](trueFileName,_0x45cc13),trueFileName;},_0x4bf76f[_0x310ae7(0x176)]=async _0x42ff73=>{const _0x33d0ac=_0x310ae7;let _0x48a5cc=(_0x42ff73[_0x33d0ac(0x138)]||_0x42ff73)['mimetype']||'',_0x51b8af=_0x42ff73[_0x33d0ac(0x151)]?_0x42ff73[_0x33d0ac(0x151)]['replace'](/Message/gi,''):_0x48a5cc[_0x33d0ac(0x136)]('/')[0x0];const _0x3bf4cf=await downloadContentFromMessage(_0x42ff73,_0x51b8af);let _0x279674=Buffer[_0x33d0ac(0x18d)]([]);for await(const _0x4c8a8f of _0x3bf4cf){_0x279674=Buffer[_0x33d0ac(0x13d)]([_0x279674,_0x4c8a8f]);}return _0x279674;},_0x4bf76f[_0x310ae7(0x128)]=async _0x488e2d=>{const _0xf700e8=_0x310ae7;let _0xd5ce3=await user[_0xf700e8(0x180)]({'id':_0x488e2d});return!_0xd5ce3?unme=_0xf700e8(0x130):unme=_0xd5ce3[_0xf700e8(0x135)],unme;};};connect(),app['get']('/',async(_0x36ab58,_0x56137a)=>{const _0x1fae1e=_0x5d435c;_0x56137a[_0x1fae1e(0x19f)](_0x1fae1e(0x19c));}),app[_0x5d435c(0x167)](PORT,()=>{const _0x415e95=_0x5d435c;console[_0x415e95(0x129)](_0x415e95(0x1a0)+PORT);});