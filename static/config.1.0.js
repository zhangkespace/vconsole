window.g = {
    // ------------------- URL配置 --------------------
    // 接口服务地址URL
    apiUrl: "http://xxydyl.n.xhis.com.cn",

    // 医院信息URl
    hospitalInfoUrl: "http://ai.xhis.com.cn/InfoShow/Index.aspx?hospitalId=0b69814f-8442-4c05-a3de-892fb445ce9b",

    // 预约平台跳转地址
    transferUrl: "http://www.baidu.com",

    // 预约挂号URL，若不配置则设置为""
    appointRegisterUrl: "",

    // 当日挂号URL，若不配置则设置为""
    currentRegisterUrl: "",

    // 候诊查询URL，若不配置则设置为""
    waittingDiagUrl: "",

    // 我的挂号URL，若不配置则设置为""
    myRegisterUrl: "",

    // ------------------ 门诊模块功能配置 ------------
    outpatientConfig: {

        // 是否允许建卡
        allowCreatedCard: true,

        // 建卡成功提示文案，若配置为""，则显示默认提示文案
        newCardSuccessTips: "创建成功，请到窗口激活",

        // 是否显示缴费功能
        personalPay: true,

        // 是否展示预约挂号功能
        appointRegister: true,

        // 是否展示当日挂号功能
        currentRegister: true,

        // 挂号提交前的提示文案
        registerSubmitTips: {
            
            // 当日挂号
            current: "注：完成支付后，可以在【我的挂号】页面查看挂号信息，如无法就诊，请提前取消预约。",

            // 预约挂号
            appoint: "注：请于30分钟内到【我的挂号】页面支付，如无法就诊，请提前取消预约。"
        },

        // 是否展示我的挂号功能
        myRegister: true,

        // 是否支持分时段模式(只对预约挂号有效)
        timeRange: true,

        // 挂号预约详细时间段间隔（分钟），支持任意正整数
        appointDetailTimeSpeed: 10,
        
        // 预约挂号是否可在我的挂号列表支付
        payAvailable: true,

        // 当日挂号上午预约截止时间
        amLastAppointTime: "11:30",

        // 当日挂号下午预约截止时间
        pmLastAppointTime: "17:30",

        // 预约挂号完成是否展示预约密码弹窗
        showPassword: false,

        // 是否支持社保卡
        sociaSecuCard: true,

        // 门诊/住院是否显示电子票据功能
        invoice: false,

        // 是否显示候诊查询功能
        waittingDiag: true,

        //是否显示核酸检测功能
        nucleicAcidTest: true,

        //核酸检测是否可预约
        nucleicAcidTestAppoint: true,

        //核酸检测预约成功后的提示
        nucleicAcidTestAppointSuccessTips: "请在30分钟内完成支付，超过30分钟未支付系统自动取消订单",

        //报告结果提示
        reportDetailTips: "注：报告最终结果以医院打印的纸质报告为准，本页面显示内容仅供参考",
        
    },

    // ------------  住院模块功能配置 ------------------
    hospitalConfig: {

        // 是否展示自助入院功能
        selfHelpInHos: true,

        // 是否展示结算信息查询功能
        settleInfo: true,

    },
}