//此js用于保存本地存储时，用到的key值

var storageKeyName = (function(mod) {

	mod.key = 0; //0,开发;1,测试云；2外网
	mod.pay = 0; //0,单个商家接口;1,多商家接口
	var exLog = console.log;
	// console.log = function(hint, object) {
	// 	if(mod.key === 0) {
	// 		var argus = hint;
	// 		if(typeof(object)!=='undefined') {
	// 			argus = hint + JSON.stringify(object);
	// 		}
	// 		exLog.apply(this, [argus]);
	// 	}
	// }
	switch(mod.key) {
		case 0: //开发
			mod.SCHOOLID = 100005;//学校ID
			// mod.INTERFACE_SUP = 'http://develop.jiaobaowang.net/sup/'; //系统接口
			// mod.INTERFACE_PERSON = 'http://develop.jiaobaowang.net/hr/'; //系统接口
			// mod.INTERFACE_SUP = 'http://139.129.252.49:8080/sup2/'; //系统接口
			// mod.INTERFACE_PERSON = 'http://139.129.252.49:8080/hr/'; //系统接口
			// mod.INTERFACE_OA = 'http://jbyj.jiaobaowang.net/SchoolOARestService/';//oa接口
			
			
			
			
			// mod.INTERFACE_SSO_SKIN = 'http://nwifapp.jiaobaowang.net/sup/api/skin/'; //单点登录,供PC外皮及APP用户登录,管理
			// mod.INTERFACE_SSO_HR = 'http://nwifapp.jiaobaowang.net/sup/api/hr/'; //单点登录,供人事系统使用
			// mod.INTERFACE_SSO_SUB = 'http://nwifapp.jiaobaowang.net/sup/api/sub/'; //单点登录,供各子系统用
			// mod.INTERFACE_HR_SUB = 'http://nwifapp.jiaobaowang.net/testhr/api/sub/'; //人事接口,供子系统用
			// mod.INTERFACE_HR_SKIN = 'http://nwifapp.jiaobaowang.net/testhr/api/skin/'; //人事接口,供APP或PC注册及外皮用
			// mod.INTERFACE_OA = 'http://192.168.0.32:8080/oasubapi/sub/api/';//oa接口
			
			
			// mod.INTERFACE_SSO_SKIN = 'http://192.168.0.32:8080/suptohr/api/skin/'; //单点登录,供PC外皮及APP用户登录,管理
			// mod.INTERFACE_SSO_HR = 'http://192.168.0.32:8080/suptohr/api/hr/'; //单点登录,供人事系统使用
			// mod.INTERFACE_SSO_SUB = 'http://192.168.0.32:8080/suptosub/api/sub/'; //单点登录,供各子系统用
			// mod.INTERFACE_HR_SUB = 'http://192.168.0.32:8080/hrtosub/api/sub/'; //人事接口,供子系统用
			// mod.INTERFACE_HR_SKIN = 'http://192.168.0.32:8080/hrtosup/api/skin/'; //人事接口,供APP或PC注册及外皮用
			// mod.INTERFACE_OA = 'http://192.168.0.32:8081/oasubapi/sub/api/';//oa接口
			
			//联测
			// mod.INTERFACE_SSO_SKIN = 'http://nwifapp.jiaobaowang.net/suptohr/api/skin/'; //单点登录,供PC外皮及APP用户登录,管理
			// mod.INTERFACE_SSO_HR = 'http://nwifapp.jiaobaowang.net/suptohr/api/hr/'; //单点登录,供人事系统使用
			// mod.INTERFACE_SSO_SUB = 'http://nwifapp.jiaobaowang.net/suptosub/api/sub/'; //单点登录,供各子系统用
			// mod.INTERFACE_HR_SUB = 'http://nwifapp.jiaobaowang.net/testhrtosub/api/sub/'; //人事接口,供子系统用
			// mod.INTERFACE_HR_SKIN = 'http://nwifapp.jiaobaowang.net/testhrtosup/api/skin/'; //人事接口,供APP或PC注册及外皮用
			// mod.INTERFACE_OA = 'http://nwifapp.jiaobaowang.net/oasubapi/sub/api/';//oa接口
			// mod.INTERFACE_BASESUB = 'http://nwifapp.jiaobaowang.net/testbaseapi/api/Data/';//统一信息接口
			// mod.INTERFACE_EXAMINATION = 'http://139.129.252.49:8180/stuzy/api/paper/';//考务系统接口
			
			//云测 
			mod.INTERFACE_SSO_SKIN = 'http://nwifapp.jiaobaowang.net/suptohr/api/skin/'; //单点登录,供PC外皮及APP用户登录,管理  单点对人事及登录皮肤接口
			mod.INTERFACE_SSO_HR = 'http://nwifapp.jiaobaowang.net/suptohr/api/hr/'; //单点登录,供人事系统使用                  单点对人事及登录皮肤接口
			mod.INTERFACE_SSO_SUB = 'http://nwifapp.jiaobaowang.net/suptosub/api/sub/'; //单点登录,供各子系统用 			     单点对子系统接口
			mod.INTERFACE_HR_SUB = 'http://nwifapp.jiaobaowang.net/hrtosub/api/sub/'; //人事接口,供子系统用 				     人事对子系统接口
			mod.INTERFACE_HR_SKIN = 'http://nwifapp.jiaobaowang.net/hrtosup/api/skin/'; //人事接口,供APP或PC注册及外皮用        人事对单点及登录皮肤接口
			mod.INTERFACE_OA = 'http://nwifapp.jiaobaowang.net/oasubapi/sub/api/';//oa接口
			mod.INTERFACE_BASESUB = 'http://nwifapp.jiaobaowang.net/baseapi/api/Data/';//统一信息接口:考务用
			mod.INTERFACE_EXAMINATION = 'http://nwifapp.jiaobaowang.net/stuzy/api/paper/';//考务系统接口
			
			
			// mod.INTERFACE_SSO_SKIN = 'http://139.129.252.49:8080/sup2/api/skin/'; //单点登录,供PC外皮及APP用户登录,管理
			// mod.INTERFACE_SSO_HR = 'http://139.129.252.49:8080/sup2/api/hr/'; //单点登录,供人事系统使用
			// mod.INTERFACE_SSO_SUB = 'http://139.129.252.49:8080/sup2/api/sub/'; //单点登录,供各子系统用
			// mod.INTERFACE_HR_SUB = 'http://139.129.252.49:8080/hr/api/sub/'; //人事接口,供子系统用
			// mod.INTERFACE_HR_SKIN = 'http://139.129.252.49:8080/hr/api/skin/'; //人事接口,供APP或PC注册及外皮用
			// mod.INTERFACE_OA = 'http://jbyj.jiaobaowang.net/SchoolOARestService/';//oa接口
			
			
			
			
			mod.TEACHERIMG = 'http://jsypay.jiaobaowang.net/jsyadmin/upuserimg.ashx?userid='; //老师上传头像
			mod.ANDROIDUPDATEURL='http://192.168.1.121:8081/app/versionCode.xml';//安卓升级地址
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
			mod.PLATFORMCODE = 'PT0002'; //平台代码 联测PT0001  云测PT0002
			mod.APPCODE = 'schapp#'; //应用系统代码
			mod.MENULIST = 'menuList'; //获取菜单列表
			mod.MOREMENU = 'moremenu'; //更多菜单列表
			break;
		case 1: //云测试
			mod.SCHOOLID = 0;//学校ID
			mod.INTERFACEKONG = 'https://jbyj.jiaobaowang.net:8443/SchoolCommunicationService/';//孔工接口
			mod.TEACHERIMG = 'https://zhxy.jiaobaowang.net:8515/schadminwebadmin/upuserimg.ashx?userid='; //老师上传头像
			mod.ANDROIDUPDATEURL='http://zhxy.jiaobaowang.net:8015/appupdate/xxt/versionCode.xml';//安卓升级地址
			if(mod.pay==0) {//单商家
				mod.WXPAYSERVER='http://jsypay.jiaobaowang.net/jsypaym/wxpay/sys/AppServer.aspx';//微信支付地址
				mod.SEARCHPAYSESULT='http://jsypay.jiaobaowang.net/jsypaym/wxpay/sys/PcQRCode.aspx';//获取支付结果的地址
			}else if(mod.pay==1){//多商家
				mod.WXPAYSERVER='http://jsypay.jiaobaowang.net/jsypaym/wxpay/sys/AppServer.aspx';//微信支付地址
				mod.SEARCHPAYSESULT='http://jsypay.jiaobaowang.net/jsypaym/wxpay/sys/PcQRCode.aspx';//获取支付结果的地址
			}
			//---开发---end---
			//---七牛空间和接口---开发---start---
			mod.QNPB = 'https://qn-educds.jiaobaowang.net/'; //公开空间域名
			mod.QNGETUPLOADTOKEN = 'https://jbyc.jiaobaowang.net:8504/Api/QiNiu/GetUpLoadToKen';
			mod.QNGETUPTOKENHEADIMGE = 'https://jbyc.jiaobaowang.net:8504/Api/QiNiu/GetUpLoadToKen'; //获取上传个人头像，群头像，资料头像到七牛的token的url
			mod.QNGETUPTOKENFILE = 'https://jbyc.jiaobaowang.net:8504/Api/QiNiu/GetUpLoadToKen'; //获取上传文件（云存储）到七牛的token的url
			mod.QNGETDOWNTOKENFILE = 'http://114.215.222.186:8004/Api/QiNiu/GetAccess'; //获取下载文件（云存储）的token的url，url+七牛文件url
			mod.QNGETTOKENDELETE = 'http://114.215.222.186:8004/Api/QiNiu/Delete'; //获取批量（或者一个）删除七牛文件的token的url
			//	---七牛空间和接口---开发---end---
			break;
		case 2: //正式
			mod.SCHOOLID = 0;//学校ID
			mod.INTERFACEKONG = 'https://zyja.zhuxue101.net/SchoolCommunicationService/';//孔工接口
			mod.TEACHERIMG = 'https://boss.zhuxue101.net/upuserimg.ashx?userid='; //老师上传头像
			mod.ANDROIDUPDATEURL='http://boss.zhuxue101.net:8002/xiaoxuntong/versionCode.xml';//安卓升级地址
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
			break;
		default:
			break;
	}
	
	//模块权限
	mod.SCHNOTICEADD='#schInfo:schNotice:index:add'//学校通--新建
	mod.SCHNOTICESCH='#schInfo:schNotice:index:sch'//学校通知--可发全校
	mod.SCHNOTICEGRD='#schInfo:schNotice:index:allGrd'//学校通知--可发年级
	mod.SCHNOTICECLS='#schInfo:schNotice:index:allCls'//学校通知可发班级
	
	
	mod.CATALOG = 'catalog';//滑动菜单对象
	mod.PRDLIST = 'prdlist';//滑动菜单对象
	mod.CATALOGOBJ = 'catalogObj';//滑动菜单选择值对象
	
	mod.BADGENUMBER = 'badgeNumber'//app角标
	mod.PUBLICPARAMETER = 'publicParameter'//共用参数
	mod.ISFIRST = 'isFitst'; //是否是第一次登陆
	mod.ICONNUM = 0; //角标数量
	mod.PERSONALINFO = 'personalInfo1111'; //个人信息，登录成功后返回值
	mod.SHAKEHAND = 'ShakeHand'; //公钥，登录时，返回的握手信息，
	mod.AUTOLOGIN = 'autoLogin'; //登录信息
	mod.DOCUMENTSPATH = 'DOCUMENTSPATH'; //记录document的地址
	mod.SEHISTORY = 'seHistory'; //科教历史记录
	mod.SECITY = 'seCity'; //科教订制的城市
	mod.SHOWCITY = 'showCity'; //展现订制的城市
	mod.FOCUSEPERSEN = "foucusPersen"; //求知关注的人
	mod.FOCUSEQUESTION = "focusQuestion"; //求知关注的问题
	mod.SHOWFOCUSEPERSEN = "showfoucusPersen"; //展现关注的人
	mod.FOCUSECOURSES = "focusCourses"; //关注的课程
	mod.COURSELASTTIME = "courseLastTime";
	mod.SHOWTYPE = "showType";
	mod.COURSETYPE = "courseType";
	mod.ISSHOWDETAILREADY = "isDetailReady"; //预加载是否完成
	mod.VIEWCANCLICK = 'viewCanClick';
	mod.SCIEDUREADED='sciedu-readed';//科教已读
	mod.CUSTOMREQUESTTIME='customer-request-time';

	mod.VIDEOSIZE = -1;//视频大小限制 -1为不限制   30 * 1024 * 1024 =30M
	mod.VIDEOLENGTH = 301; //视频时长限制 -1为不限制

	mod.MAINHOMEWORKURLTEACHER = mod.MAINHOMEWORKURL + 'TeacherService.svc/'; //老师作业url
	mod.MAINHOMEWORKURLSTUDENT = mod.MAINHOMEWORKURL + 'StudentService.svc/'; //学生作业url
	mod.WAITING = '加载中...'; //
	mod.UPLOADING = '上传中...';
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
	//---七牛---end---

	//---默认图片---start---
	mod.DEFAULTPERSONALHEADIMAGE = '../../img/utils/default_personalimage.png'; //默认的个人头像
	mod.DEFAULTSCIEDUIMAGELOAD = '/img/utils/default_load_2.gif'; //科教首页，懒加载显示加载中的图片
	mod.DEFAULTIMAGELOAD = '/img/utils/default_load_2_1.gif';
	//---默认图片---end---

	//---Activity的code---start---
	mod.CODERECORDVIDEO = 0; //录像
	mod.CODEPLAYVIDEO = 1; //播放视频
	//---Activity的code---end---

	return mod;

})(storageKeyName || {});