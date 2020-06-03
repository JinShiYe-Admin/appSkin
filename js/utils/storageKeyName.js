//此js用于保存本地存储时，用到的key值

var storageKeyName = (function(mod) {

	mod.key = 2; //1:山东开发 2:广西开发 3:联测 4:云测 5:正式
	
	switch(mod.key) {
		case 1: //山东开发
			mod.PLATFORMCODE = 'PT0001'; //平台代码
			mod.APPCODE = 'schapp#'; //应用系统代码
			mod.INTERFACE_SSO_SKIN = 'http://develop309.jiaobaowang.net/suptohr/api/skin/'; //单点登录,供PC外皮及APP用户登录,管理
			mod.INTERFACE_SSO_HR = 'http://develop309.jiaobaowang.net/suptohr/api/hr/'; //单点登录,供人事系统使用
			mod.INTERFACE_SSO_SUB = 'http://develop309.jiaobaowang.net/suptosub/api/sub/'; //单点登录,供各子系统用
			mod.INTERFACE_HR_SUB = 'http://develop309.jiaobaowang.net/hrtosub/api/sub/'; //人事接口,供子系统用
			mod.INTERFACE_HR_SKIN = 'http://develop309.jiaobaowang.net/hrtosup/api/skin/'; //人事接口,供APP或PC注册及外皮用
			mod.INTERFACE_OA = 'http://develop309.jiaobaowang.net:8081/oasubapi/sub/api/';//oa接口(孔)
			mod.INTERFACE_ITEM = 'http://develop309.jiaobaowang.net:8081/imsubapi/sub/api/';//物品管理接口(孔)
			mod.INTERFACE_BASESUB = 'http://develop309.jiaobaowang.net/baseapi/api/Data/';//统一信息接口:考务、家校互动用(顾)
			mod.INTERFACE_EXAMINATION = '? 需连广西开发环境';//考务系统接口(蒙)
			mod.INTERFACE_WORK = '? 需连广西开发环境';//学生考勤系统接口(阮)
			mod.INTERFACE_PROGRAMME = 'http://develop309.jiaobaowang.net:8081/notesubapi/sub/api/';//日程（孔)
			mod.INTERFACE_ATTENDAND = 'http://develop309.jiaobaowang.net:8081/attendsubapi/sub/api/';//教师考勤（孔)
			mod.INTERFACE_STUXWSUB = '? 需连广西开发环境';//学生行为（阮)
			mod.INTERFACE_STUPYSUB = '? 需连广西开发环境';//学生评语（阮)
			mod.INTERFACE_DORM = '? 需连广西开发环境';//学生宿舍（阮)
			break;
		case 2: //广西开发
			mod.PLATFORMCODE = 'PT0036'; //平台代码
			mod.APPCODE = 'schapp#'; //应用系统代码
			mod.INTERFACE_SSO_SKIN = 'http://139.129.252.49:8080/suptohr/api/skin/'; //单点登录,供PC外皮及APP用户登录,管理
			mod.INTERFACE_SSO_HR = 'http://139.129.252.49:8080/suptohr/api/hr/'; //单点登录,供人事系统使用
			mod.INTERFACE_SSO_SUB = 'http://139.129.252.49:8080/suptosub/api/sub/'; //单点登录,供各子系统用
			mod.INTERFACE_HR_SUB = 'http://139.129.252.49:8080/hrtosub/api/sub/'; //人事接口,供子系统用
			mod.INTERFACE_HR_SKIN = 'http://139.129.252.49:8080/hrtosup/api/skin/'; //人事接口,供APP或PC注册及外皮用
			mod.INTERFACE_OA = '? 需连山东开发环境';//oa接口(孔)
			mod.INTERFACE_ITEM = '? 需连山东开发环境';//物品管理接口(孔)
			mod.INTERFACE_BASESUB = 'http://139.129.252.49:8080/testbaseapi/api/Data/';//统一信息接口:考务、家校互动用(顾)
			mod.INTERFACE_EXAMINATION = 'http://139.129.252.49:8080/stuzy/api/paper/';//考务系统接口(蒙)  貌似没菜单，疫情期间在家，都用的联测
			mod.INTERFACE_WORK = 'http://139.129.252.49:8080/stukqsubapi/attendance/';//学生考勤系统接口(阮) 貌似没菜单，疫情期间在家，都用的联测
			mod.INTERFACE_PROGRAMME = '? 需连山东开发环境';//日程（孔)
			mod.INTERFACE_ATTENDAND = '? 需连山东开发环境';//教师考勤（孔)
			mod.INTERFACE_STUXWSUB = 'http://139.129.252.49:8080/stuxwsubapi/behavior/';//学生行为（阮) 
			mod.INTERFACE_STUPYSUB = 'http://139.129.252.49:8080/stuxwsubapi/comment/';//学生评语（阮)
			mod.INTERFACE_DORM = 'http://139.129.252.49:8080/stusssubapi/api/app/';//学生宿舍（阮)
			break;
		case 3: //联测
			mod.PLATFORMCODE = 'PT0001'; //平台代码
			mod.APPCODE = 'schapp#'; //应用系统代码
			mod.INTERFACE_SSO_SKIN = 'http://nwifapp.jiaobaowang.net/suptohr/api/skin/'; //单点登录,供PC外皮及APP用户登录,管理
			mod.INTERFACE_SSO_HR = 'http://nwifapp.jiaobaowang.net/suptohr/api/hr/'; //单点登录,供人事系统使用
			mod.INTERFACE_SSO_SUB = 'http://nwifapp.jiaobaowang.net/suptosub/api/sub/'; //单点登录,供各子系统用
			mod.INTERFACE_HR_SUB = 'http://nwifapp.jiaobaowang.net/testhrtosub/api/sub/'; //人事接口,供子系统用
			mod.INTERFACE_HR_SKIN = 'http://nwifapp.jiaobaowang.net/testhrtosup/api/skin/'; //人事接口,供APP或PC注册及外皮用
			mod.INTERFACE_OA = 'http://develop309.jiaobaowang.net/oasubapi/sub/api/';//oa接口(孔)
			mod.INTERFACE_ITEM = 'http://develop309.jiaobaowang.net/imsubapi/sub/api/';//物品管理接口(孔)  http://115.28.11.115:8080/imsubapi/sub/api/
			mod.INTERFACE_BASESUB = 'http://nwifapp.jiaobaowang.net/testbaseapi/api/Data/';//统一信息接口:考务、家校用(顾)
			mod.INTERFACE_EXAMINATION = 'http://139.129.252.49:8180/stuzy/api/paper/';//考务系统接口(蒙)
			mod.INTERFACE_WORK = 'http://139.129.252.49:8180/stukqsubapi/attendance/';//学生考勤系统接口(阮)
			mod.INTERFACE_PROGRAMME = 'http://develop309.jiaobaowang.net/notesubapi/sub/api/';//日程（孔)
			mod.INTERFACE_ATTENDAND = 'http://develop309.jiaobaowang.net/attendsubapi/sub/api/';//教师考勤（孔)
			mod.INTERFACE_STUXWSUB = 'http://139.129.252.49:8180/stuxwsubapi/';//学生行为（阮) 
			mod.INTERFACE_STUPYSUB = 'http://139.129.252.49:8180/stuxwsubapi/';//学生评语（阮)
			mod.INTERFACE_DORM = '??';//学生宿舍（阮)
			break;
		case 4: //云测
			mod.PLATFORMCODE = 'PT0002'; //平台代码
			mod.APPCODE = 'schapp#'; //应用系统代码
			mod.INTERFACE_SSO_SKIN = 'http://nwifapp.jiaobaowang.net/suptohr/api/skin/'; //单点登录,供PC外皮及APP用户登录,管理  单点对人事及登录皮肤接口
			mod.INTERFACE_SSO_HR = 'http://nwifapp.jiaobaowang.net/suptohr/api/hr/'; //单点登录,供人事系统使用                  单点对人事及登录皮肤接口
			mod.INTERFACE_SSO_SUB = 'http://nwifapp.jiaobaowang.net/suptosub/api/sub/'; //单点登录,供各子系统用 			     单点对子系统接口
			mod.INTERFACE_HR_SUB = 'http://nwifapp.jiaobaowang.net/hrtosub/api/sub/'; //人事接口,供子系统用 				     人事对子系统接口
			mod.INTERFACE_HR_SKIN = 'http://nwifapp.jiaobaowang.net/hrtosup/api/skin/'; //人事接口,供APP或PC注册及外皮用        人事对单点及登录皮肤接口
			mod.INTERFACE_OA = 'http://nwifapp.jiaobaowang.net/oasubapi/sub/api/';//oa接口(孔)
			mod.INTERFACE_ITEM = 'http://nwifapp.jiaobaowang.net/imsubapi/sub/api/';//物品管理接口(孔)
			mod.INTERFACE_BASESUB = 'http://nwifapp.jiaobaowang.net/baseapi/api/Data/';//统一信息接口:考务、家校用(顾)
			mod.INTERFACE_EXAMINATION = 'http://nwifapp.jiaobaowang.net/stuzy/api/paper/';//考务系统接口(蒙)
			mod.INTERFACE_WORK = 'http://nwifapp.jiaobaowang.net/stukqsubapi/attendance/';//学生考勤系统接口(阮)
			mod.INTERFACE_PROGRAMME = 'http://nwifapp.jiaobaowang.net/tecrcsubapi/sub/api/';//日程（孔)
			mod.INTERFACE_ATTENDAND = 'http://nwifapp.jiaobaowang.net/tecgpskqsubapi/sub/api/';//教师考勤（孔)
			mod.INTERFACE_STUXWSUB = 'http://nwifapp.jiaobaowang.net/stuxwsubapi/';//学生行为（阮) 
			mod.INTERFACE_STUPYSUB = 'http://nwifapp.jiaobaowang.net/stuxwsubapi/';//学生评语（阮)
			mod.INTERFACE_DORM = '??';//学生宿舍（阮)
			break;
		case 5://正式
			mod.PLATFORMCODE = 'PT0001'; //平台代码
			mod.APPCODE = 'schapp#'; //应用系统代码
			mod.INTERFACE_SSO_SKIN = 'http://www.108800.com/suptohr/api/skin/'; //单点登录,供PC外皮及APP用户登录,管理  单点对人事及登录皮肤接口
			mod.INTERFACE_SSO_HR = 'http://www.108800.com/suptohr/api/hr/'; //单点登录,供人事系统使用                  单点对人事及登录皮肤接口
			mod.INTERFACE_SSO_SUB = 'http://www.108800.com/suptosub/api/sub/'; //单点登录,供各子系统用 			     单点对子系统接口
			mod.INTERFACE_HR_SUB = 'http://apps.108800.com/hrtosub/api/sub/'; //人事接口,供子系统用 				     人事对子系统接口
			mod.INTERFACE_HR_SKIN = 'http://apps.108800.com/hrtosup/api/skin/'; //人事接口,供APP或PC注册及外皮用        人事对单点及登录皮肤接口
			mod.INTERFACE_OA = 'http://apps.108800.com/oasubapi/sub/api/';//oa接口(孔)
			mod.INTERFACE_ITEM = 'http://apps.108800.com/imsubapi/sub/api/';//物品管理接口(孔)
			mod.INTERFACE_BASESUB = 'http://apps.108800.com/baseapi/api/Data/';//统一信息接口:考务、家校用(顾)
			mod.INTERFACE_EXAMINATION = 'http://apps.108800.com/stuzy/api/paper/';//考务系统接口(蒙)
			mod.INTERFACE_WORK = 'http://apps.108800.com/stukqsubapi/attendance/';//学生考勤系统接口(阮)
			mod.INTERFACE_PROGRAMME = 'http://apps.108800.com/tecrcsubapi/sub/api/';//日程（孔)
			mod.INTERFACE_ATTENDAND = 'http://apps.108800.com/tecgpskqsubapi/sub/api/';//教师考勤（孔)
			mod.INTERFACE_STUXWSUB = 'http://apps.108800.com/stuxwsubapi/';//学生行为（阮) 
			mod.INTERFACE_STUPYSUB = 'http://apps.108800.com/stuxwsubapi/';//学生评语（阮)
			mod.INTERFACE_DORM = '??';//学生宿舍（阮)
			break;
		default:
			break;
	}
	
	mod.SCHOOLID = 100005;//学校ID
	mod.ANDROIDUPDATEURL='http://www.jiaobao.net/dl/jiaobaoxiaoyuan/versionCode.xml';//安卓升级地址
	mod.IOSUPDATEURL='http://itunes.apple.com/lookup?id=1281905607';//IOS升级地址
	
	
	
	
	
	
	
	
	mod.pay = 0; //0,单个商家接口;1,多商家接口
	// var exLog = console.log;
	// console.log = function(hint, object) {
	// 	if(mod.key === 0) {
	// 		var argus = hint;
	// 		if(typeof(object)!=='undefined') {
	// 			argus = hint + JSON.stringify(object);
	// 		}
	// 		exLog.apply(this, [argus]);
	// 	}
	// }
	
	mod.ALIPAYSERVER='http://192.168.1.121:8081/app/versionCode.xml';//支付宝支付地址
	if(mod.pay==0) {//单商家
		mod.WXPAYSERVER='http://jsypay.jiaobaowang.net/jsypaym/wxpay/sys/AppServer.aspx';//微信支付地址
		mod.SEARCHPAYSESULT='http://jsypay.jiaobaowang.net/jsypaym/wxpay/sys/PcQRCode.aspx';//获取支付结果的地址
	}else if(mod.pay==1){//多商家
		mod.WXPAYSERVER='http://jsypay.jiaobaowang.net/jsypaym/wxpay/sys/AppServer.aspx';//微信支付地址
		mod.SEARCHPAYSESULT='http://jsypay.jiaobaowang.net/jsypaym/wxpay/sys/PcQRCode.aspx';//获取支付结果的地址
	}
	//---七牛空间和接口---开发---start---
	mod.QNPB = 'https://qn-educds.jiaobaowang.net/'; //公开空间域名
	mod.QNGETUPLOADTOKEN = 'https://jbyc.jiaobaowang.net:8504/Api/QiNiu/GetUpLoadToKen';
	mod.QNGETUPTOKENHEADIMGE = 'https://jbyc.jiaobaowang.net:8504/Api/QiNiu/GetUpLoadToKen'; //获取上传个人头像，群头像，资料头像到七牛的token的url
	mod.QNGETUPTOKENFILE = 'https://jbyc.jiaobaowang.net:8504/Api/QiNiu/GetUpLoadToKen'; //获取上传文件（云存储）到七牛的token的url
	mod.QNGETDOWNTOKENFILE = 'http://114.215.222.186:8004/Api/QiNiu/GetAccess'; //获取下载文件（云存储）的token的url，url+七牛文件url
	mod.QNGETTOKENDELETE = 'http://114.215.222.186:8004/Api/QiNiu/Delete'; //获取批量（或者一个）删除七牛文件的token的url
	//	---七牛空间和接口---开发---end---
	mod.MENULIST = 'menuList'; //获取菜单列表
	mod.MOREMENU = 'moremenu'; //更多菜单列表
	
	
	mod.BADGENUMBER = 'badgeNumber'//app角标
	mod.PUBLICPARAMETER = 'publicParameter'//共用参数
	mod.ISFIRST = 'isFitst'; //是否是第一次登陆
	mod.PERSONALINFO = 'personalInfo1111'; //个人信息，登录成功后返回值
	mod.SHAKEHAND = 'ShakeHand'; //公钥，登录时，返回的握手信息，
	mod.AUTOLOGIN = 'autoLogin'; //登录信息
	 

	mod.VIDEOSIZE = -1;//视频大小限制 -1为不限制   30 * 1024 * 1024 =30M
	mod.VIDEOLENGTH = 301; //视频时长限制 -1为不限制

	mod.SIGNKEY = 'jsy309'; //签名密钥
	//---七牛---start---
	//七牛上传空间key值
	//资源平台
	mod.QNPUBZYKEY = "jsy8004";
	//教宝云作业
	mod.QNPUBJBYZYKEY = "zy309309!";
	//教宝云盘
	mod.QNPUBJBYPKEY = "jbyp@2017";
	//教宝云用户管理
	mod.QUPUBJBMANKEY = "jbman456";
	//家校圈
	mod.QNPUBJXQKEY = "jxq789!@";
	//求知
	mod.QNPUBQZKEY = "qz123qwe";
	//校讯通
	mod.QNPUBXXT = "jsy@180526";
	
	mod.STOREAPPID='wxf9b41cac260dd423';

	//七牛存储子空间（文件二级文件名）
	mod.QNPUBSPACE = "pb"; //七牛公开空间
	mod.QNPRISPACE = "pv"; //七牛私有空间
	mod.XXTNOTICE = 'notice/'; //笔校讯通、通知
	mod.QNAPPID = 4; 
	//---七牛---end---


	//---Activity的code---start---
	mod.CODERECORDVIDEO = 0; //录像
	mod.CODEPLAYVIDEO = 1; //播放视频
	//---Activity的code---end---

	return mod;

})(storageKeyName || {});