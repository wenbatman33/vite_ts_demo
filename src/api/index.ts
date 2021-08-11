import axios from '@/axiosSetting';

export const mockTest = (payload:unknown) => axios.get('/live/hotlive',{ params: payload });
// 用户登录
export const login = (payload:unknown) => axios.post('/users/login', payload);
// 用户注册
export const register = (payload:unknown) => axios.post('/users/reg', payload);
// 获取注册验证码
export const getRegCode = (payload:unknown) => axios.post('/users/code', payload);
// 获取找回密码验证码
export const getForgotCode = (payload:unknown) => axios.post('/users/forget/code', payload);
// 找回密码
export const resetPass = (payload:unknown) => axios.post('/users/reset/pass', payload);
// 公告列表
export const noticeList = (payload:unknown) => axios.get('/notice/list', { params: payload });
// 公告详情
export const noticeDetail = (payload:unknown) => axios.get('/notice/detail', { params: payload });
// 热门主播
export const hotNanchour = (payload:unknown) => axios.get('/live/hotnanchour', { params: payload });
// 热门直播
// export const hotLive = (payload:unknown) => axios.get('/live/hotlive', { params: payload });
export const hotLive = (payload:unknown) => axios.get('/live/hotlive', { params: payload });
// 最新直播
export const newLive = (payload:unknown) => axios.get('/live/newlive', { params: payload });
// 创建开播
export const createRoom = (payload:unknown) => axios.post('/live/createroom', payload);
// 创建开播 V2
export const createRoomV2 = (payload:unknown) => axios.post('/live/v2/create', payload);
// 关播
export const stopRoom = (payload:unknown) => axios.post('/live/stoproom', payload);
// 推荐直播列表
export const recommend = (payload:unknown) => axios.get('/live/recommend', { params: payload });
// 推荐直播列表
export const recommendV2 = (payload:unknown) => axios.get('/live/v2/recommend', { params: payload });
// 赛程列表
export const scheduleList = (payload:unknown) => axios.get('/event/schedule/list', { params: payload });
// 主播赛程列表
export const anchorScheduleList = (payload:unknown) => axios.get('/event/anchor/list', { params: payload });
// 直播分类
export const classList = (payload:unknown) => axios.get('/live/class', { params: payload });
// 直播分类列表
export const liveClassList = (payload:unknown) => axios.get('/users/live/class', { params: payload });
// 赛事观看預約
export const appointment = (payload:unknown) => axios.post('/event/appointment/watch', payload);
// 批次預約
export const competitionBooking = (payload:unknown) => axios.post('/competition/booking/batch', payload);
// 进入直播间
export const enterRoom = (payload:unknown) => axios.get('/live/room', { params: payload });
// 礼物列表
export const giftlist = (payload:unknown) => axios.get('/live/giftlist', { params: payload });
// 背包送禮 香蕉
export const sendGift = (payload:unknown) => axios.post('/live/sendgift', payload);
// 赠送礼物
export const sendGiftBackpack = (payload:unknown) => axios.post('/live/sendgift/backpack', payload);

// 直播間禮物列表  20210331 新增
export const giftlistV2 = (payload:unknown) => axios.get('/gift/list', { params: payload });
// 送禮 20210331 新增
export const giftSend = (payload:unknown) => axios.post('/gift/send', payload);

// 打赏排行榜
export const topList = (payload:unknown) => axios.get('/live/top', { params: payload });
// 站内信
export const inboxDataList = (payload:unknown) => axios.get('/users/inbox', { params: payload });
// 刪除站内信
export const inboxReaded = (payload:unknown) => axios.post('/users/readinbox', payload);
// 推薦紀錄，顯示用戶推薦領取獎勵的紀錄
export const inviteList = (payload:unknown) => axios.get('/users/invite/list', { params: payload });
// 刪除站内信
export const inboxDelete = (payload:unknown) => axios.post('/users/inbox/del', payload);
// 轮播图
export const slideList = (payload:unknown) => axios.get('/slide', { params: payload });
// 等级列表
export const levelList = (payload:unknown) => axios.get('/live/level_list', { params: payload });
//
export const liveInfo = (payload:unknown) => axios.get('/live/liveinfo', { params: payload });
// 富豪排行榜
export const richList = (payload:unknown) => axios.get('/leaderboard/zillionaire', { params: payload });
// 明星排行榜
export const starList = (payload:unknown) => axios.get('/leaderboard/star', { params: payload });

// 主播 人气主播榜
export const livePopular = (payload:unknown) => axios.get('/contribution/live/popular', { params: payload });
// 主播 超级明星榜
export const liveSuperStar = (payload:unknown) => axios.get('/contribution/live/superstar', { params: payload });
// 用户 富豪贡献榜
export const userRich = (payload:unknown) => axios.get('/contribution/user/rich', { params: payload });
// 用户 超級明星榜
export const userSuperStar = (payload:unknown) => axios.get('/contribution/user/superstar', { params: payload });

// 举报
export const report = (payload:unknown) => axios.post('/live/report', payload);
// 关注
export const setattent = (payload:unknown) => axios.post('/users/setattent', payload);
// 设置/取消管理员
export const setadmin = (payload:unknown) => axios.post('/live/setadmin', payload);
// 禁言
export const shutup = (payload:unknown) => axios.post('/live/shutup', payload);
// 禁止访问
export const kicking = (payload:unknown) => axios.post('/live/kicking', payload);
// ip禁言
export const shutupip = (payload:unknown) => axios.post('/live/shutupip', payload);
// ip禁止访问
export const kickingip = (payload:unknown) => axios.post('/live/kickingip', payload);
// 聊天室歷史紀錄
export const chatRecord = (payload:unknown) => axios.get('/live/char/record', { params: payload });
// 修改昵称
export const editNicename = (payload:unknown) => axios.post('/user/nicename', payload);
// 修改资料
export const editinfo = (payload:unknown) => axios.post('/user/editinfo', payload);
// 驗證更換email驗證碼
export const verifyEmail = (payload:unknown) => axios.post('/verify/email', payload);
// 發送更換email驗證碼
export const verifyEmailSms = (payload:unknown) => axios.post('/verify/email/sms', payload);
// 手機號碼更換發送驗證碼 第一步
export const verifyMobile = (payload:unknown) => axios.post('/verify/mobile', payload);
// 手機號碼更換發送驗證碼 第二步
export const verifyMobileSms = (payload:unknown) => axios.post('/verify/mobile/sms', payload);
// 手機號碼更換發送驗證碼 第三步
export const verifyMobileBind = (payload:unknown) => axios.post('/verify/mobile/bind', payload);

// 赛事直播预约
export const appointmentLive = (payload:unknown) => axios.post('/event/appointment/live', payload);
// 关注直播列表
export const followsList = (payload:unknown) => axios.get('/user/follows/list', { params: payload });
// 关注直播列表 v2
export const followsListV2 = (payload:unknown) => axios.get('/user/follows/list/v2', { params: payload });
// 今日直播赛事列表(今日直播)
export const todaylive = (payload:unknown) => axios.get('/event/today/live', { params: payload });
// 热门赛事（正在直播）
export const nowLive = (payload:unknown) => axios.get('/event/hot', { params: payload });
// 获取管理员列表
export const adminList = (payload:unknown) => axios.get('/live/admin/list', { params: payload });

// 主播角色获取管理员列表
export const adminListByHost = (payload:unknown) => axios.get('/live/room/manager', { params: payload });
// 用户名添加管理员
export const addAdminListByHost = (payload:unknown) => axios.post('/live/manager', payload);

// 用暱稱搜尋用戶
export const userNameSearch = (payload:unknown) => axios.get('/user/name/search', { params: payload });

// 主播角色获取u禁封成员列表
export const banListByHost = (payload:unknown) => axios.get('/users/ban/list', { params: payload });
// 获取管理员列表
export const banCancelByHost = (payload:unknown) => axios.post('/users/ban/cancel', payload);

// 获取管理员列表
export const resignationAdmin = (payload:unknown) => axios.post('/live/admin/list/resignation', payload);
// 获取黑名单列表
export const blackList = (payload:unknown) => axios.get('/users/black/list', { params: payload });
// 获取蕉币红包充值金额列表
export const rechargeList = (payload:unknown) => axios.post('/charge/rules', payload);
// 支付宝充值
export const alipay = (payload:unknown) => axios.post('/charge/alipay', payload);
// 房间公告列表
export const roomNotice = (payload:unknown) => axios.get('/live/room_notice', { params: payload });
// 在直播間顯示該主播有預約的賽事
export const roomAppointment = (payload:unknown) => axios.get('/room/appointment', { params: payload });
// 上传图片
export const uploadFile = (payload:unknown) => axios.post('/upload/file', payload);
// 获取个人资料
export const getUserinfo = (payload:unknown) => axios.get('/user/info', { params: payload });
// 弹幕消息
export const sendbarrage = (payload:unknown) => axios.post('/live/sendbarrage', payload);
// 红包列表
export const redList = (payload:unknown) => axios.post('/live/redlist', payload);
// 发红包
export const sendred = (payload:unknown) => axios.post('/live/sendred', payload);
// 抢红包
export const robRed = (payload:unknown) => axios.post('/live/robred', payload);
// 充值记录
export const chargeList = (payload:unknown) => axios.get('/user/charge/list', { params: payload });
// 消费记录
export const expensesList = (payload:unknown) => axios.get('/user/expenses/list', { params: payload });
// 打赏记录
export const rewardList = (payload:unknown) => axios.get('/user/reward/list', { params: payload });
// 直播记录
export const liveRecord = (payload:unknown) => axios.get('/user/live/record', { params: payload });
// 直播收益
export const liveIncome = (payload:unknown) => axios.get('/user/live/income', { params: payload });
// 直播收益
export const liveIncomeDetail = (payload:unknown) => axios.get('/user/live/income/detail', { params: payload });
// 添加房间公告
export const addRoomNotice = (payload:unknown) => axios.post('/live/room/add_notice', payload);
// 修改房间標題
export const changRoomTitle = (payload:unknown) => axios.post('/live/room/edit_title', payload);
// 页面管理
export const portalManager = (payload:unknown) => axios.get('/portal/index', { params: payload });
// 我的背包
export const knapsack = (payload:unknown) => axios.get('/user/knapsack', { params: payload });
// 背包礼物赠送
export const sendKnapGift = (payload:unknown) => axios.post('/live/knapsack/sendgift', payload);
// 修改密码
export const editpwd = (payload:unknown) => axios.post('/user/editpwd', payload);
//
export const getconfig = (payload:unknown) => axios.get('/home/getconfig', { params: payload });
// 搜索（直播间）
export const searchLiveRoom = (payload:unknown) => axios.get('/home/search', { params: payload });
// 主播认证
export const anchorauth = (payload:unknown) => axios.post('/user/auth', payload);

// 取得登入獎勵
export const bonusGet = (payload:unknown) => axios.post('/bonus/get', payload);
// 新手任務列表
export const taskBasic = (payload:unknown) => axios.get('/user/task/basic', { params: payload });
// 每日任務列表
export const taskDay = (payload:unknown) => axios.get('/user/task/day', { params: payload });
// 限時登入列表
export const taskLimit = (payload:unknown) => axios.get('/user/task/limit/login', { params: payload });
// 取得限時登入獎勵
export const getBonusTaskLimit = (payload:unknown) => axios.post('/bonus/limit/login', payload);
// 充值任務，包含，首充任務，累積充值
export const taskPayment = (payload:unknown) => axios.get('/user/task/payment', { params: payload });
// 取得充值任務獎勵，包含，首充任務，累積充值
export const getTaskPayment = (payload:unknown) => axios.post('/user/task/payment/award', payload);

// 取得登入獎勵列表
export const bonusList = (payload:unknown) => axios.get('/bonus/list', { params: payload });
// 取得頭像獎勵
export const getBonusAvatar = (payload:unknown) => axios.get('/user/bonus/avatar', { params: payload });
// 取得綁定手機獎勵
export const getBonusPhone = (payload:unknown) => axios.get('/user/bonus/bind/phone', { params: payload });
// 取得註冊獎勵
export const getBonusRegister = (payload:unknown) => axios.get('/user/bonus/register', { params: payload });
// 取得每日任務獎勵
export const getBonusDay = (payload:unknown) => axios.get('/user/task/day/award', { params: payload });
// 檢查主播有無值播中資訊
export const checkLive = (payload:unknown) => axios.get('/live/check', { params: payload });
// 取得用戶銀行卡資訊
export const userBank = (payload:unknown) => axios.get('/user/bankcard', { params: payload });
// 綁定與更換銀行卡
export const userBankBind = (payload:unknown) => axios.post('/user/bankcard/bind', payload);
// 取得銀行卡驗證碼
export const userBankSms = (payload:unknown) => axios.get('/user/bankcard/sms', { params: payload });
// 主播提現
export const liveWithdraw = (payload:unknown) => axios.post('/live/withdraw', payload);
// ----------------------------------------------------------------------------------------------------------
// 背包列表
export const backpack = (payload:unknown) => axios.get('/backpack', { params: payload });
// 主播提現
export const packageUse = (payload:unknown) => axios.post('/live/use/package', payload);
// ----------------------------------------------------------------------------------------------------------
export const getUserNotification = (payload:unknown) => axios.get('/user/notification');
// 聖誕節活動----------------------------------------------------------------------------------------------------------
// 取得聖誕節活動抽獎次數
export const xmaxBonusCount = (payload:unknown) => axios.get('/event/xmax/bonus/count', { params: payload });
// 購買聖誕節活動抽獎次數
export const xmaxBonusBuy = (payload:unknown) => axios.post('/event/xmax/bonus/buy', payload);
// 抽聖誕節活動轉盤獎項
export const playXmaxBonus = (payload:unknown) => axios.get('/event/xmax/bonus', { params: payload });
// ----------------------------------------------------------------------------------------------------------
// 新年活動----------------------------------------------------------------------------------------------------------
// 取得新年活動基本訊息
export const newyearInfo = (payload:unknown) => axios.get('/event/newyear', { params: payload });
// 骰新年活動骰子
export const newyearBonus = (payload:unknown) => axios.post('/event/newyear/bonus', payload);
// 購買新年活動骰子次數
export const newyearBonusBuy = (payload:unknown) => axios.post('/event/newyear', payload);

// 新年活動排行榜
export const newyearLeaderboard = (payload:unknown) => axios.get('/event/newyear/leaderboard', { params: payload });
// 取得新年活動獎勵列表
export const newyearRemain = (payload:unknown) => axios.get('/event/newyear/remain', { params: payload });
// 骰新年活動骰子獎勵兌換
export const newyearExchange = (payload:unknown) => axios.post('/event/newyear/exchange', payload);
// ----------------------------------------------------------------------------------------------------------
// 購買五萬元大禮包
export const newyear5million = (payload:unknown) => axios.post('/event/newyear/5million', payload);
// ----------------------------------------------------------------------------------------------------------
// 活動分類
export const eventCategory = (payload:unknown) => axios.get('/event/category', { params: payload });
export const event = (payload:unknown) => axios.get('/event', { params: payload });
// ----------------------------------------------------------------------------------------------------------
// 門興Coming 活動
// 活動資訊
export const eventMocheng = (payload:unknown) => axios.get('/event/mocheng', { params: payload });
// 取得抽獎次數
export const eventMochengBonusInfo = (payload:unknown) => axios.get('/event/mocheng/bonus/info', { params: payload });
// 抽獎
export const eventMochengBonus = (payload:unknown) => axios.get('/event/mocheng/bonus', { params: payload });
// 購買德甲門興抽獎次數
export const eventMochengBonusBuy = (payload:unknown) => axios.post('/event/mocheng/bonus/buy', payload);

// ----------------------------------------------------------------------------------------------------------
// 登入拍手抽手機 活動
// 抽獎
export const eventSendPhoneBonus = () => axios.get('/event/sendphone/bonus');
// ----------------------------------------------------------------------------------------------------------
// 直播間/競猜資訊API
export const guessList = (payload:unknown) => axios.get('/guess/list', { params: payload });
// 直播間/競猜資訊API
export const guessRecommend = (payload:unknown) => axios.get('/guess/recommend', { params: payload });
// 主播建立競猜活動
export const guessAdd = (payload:unknown) => axios.post('/guess/add', payload);
// 個人/主播/競猜中心/競猜明細API
export const guessAnchorDetail = (payload:unknown) => axios.get('/guess/anchor/detail', { params: payload });
// 個人/主播/競猜中心/競猜明細API
export const guessAnchorList = (payload:unknown) => axios.get('/guess/anchor/list', { params: payload });
// 直播間/用戶競猜下注API
export const guessBet = (payload:unknown) => axios.post('/guess/bet', payload);
// 個人/用戶/競猜紀錄/爆擊
export const guessCombo = (payload:unknown) => axios.post('/guess/combo', payload);
// 個人/主播/競猜中心：主播結束競猜
export const guessEnd = (payload:unknown) => axios.post('/guess/end', payload);
// GuessGameHistoryForUser 個人/用戶/競猜紀錄
export const guessHistory = (payload:unknown) => axios.get('/guess/history', { params: payload });
// 個人/用戶/競猜紀錄/領獎
export const guessReceive = (payload:unknown) => axios.post('/guess/receive', payload);
// 個人/主播/競猜中心：主播取消競猜
export const guessCancel = (payload:unknown) => axios.post('/guess/cancel', payload);
// ----------------------------------------------------------------------------------------------------------
// 文章分類列表
export const articleClass = (payload:unknown) => axios.get('/article/class', { params: payload });
// 分類底下的文章
export const articleClassList = (payload:unknown) => axios.get('/article/class/list', { params: payload });
// 文章內容
export const articleInfo = (payload:unknown) => axios.get('/article/info', { params: payload });
// 文章留言列表
export const articleMessageList = (payload:unknown) => axios.get('/article/message/list', { params: payload });
// 文章搜尋
export const articleSearch = (payload:unknown) => axios.get('/article/search', { params: payload });
// 主題頁資訊
export const articleTopic = (payload:unknown) => axios.get('/article/topic', { params: payload });
// 主題底下的文章
export const articleTopicList = (payload:unknown) => axios.get('/article/topic/list', { params: payload });
// 精選主題
export const articleTopicSpecial = (payload:unknown) => axios.get('/article/topic/special', { params: payload });
// Like 文章
export const articleLike = (payload:unknown) => axios.post('/article/like', payload);
// 文章留言
export const articleMessage = (payload:unknown) => axios.post('/article/message', payload);
// Like 留言
export const articleMessageLike = (payload:unknown) => axios.post('/article/message/like', payload);
// ----------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------
// 歐洲杯 活動
// 頁面資訊
export const event010Info = () => axios.get('/event/010/info');
// 任務列表
export const event010List = () => axios.get('/event/010/list');
// 領取點數
export const event010Received = (payload:unknown) => axios.post('/event/010/received', payload);
// 擲骰子
export const event010Dice = (payload:unknown) => axios.post('/event/010/dice', payload);
// 玩轉盤
export const event010Turntable = (payload:unknown) => axios.post('/event/010/turntable', payload);
// 問卷調查
// 取得問卷列表
export const questionnaires = () => axios.get('/questionnaires');
// 取得指定問卷
export const questionnaire = (payload:unknown) => axios.get('/questionnaire', { params: payload });
// 送出問卷
export const questionnairePost = (payload:unknown) => axios.post('/questionnaire', payload);
// ----------------------------------------------------------------------------------------------------------
// 拼圖 活動
// 拼圖活動 直播間內拼圖顯示與領取API
export const event011Get = (payload:unknown) => axios.get('/event/011/get', { params: payload });
// 拼圖活動 直播間內拼圖顯示與領取API
export const event011Receive = (payload:unknown) => axios.post('/event/011/receive', payload);
// 拼圖活動 頁面API
export const event011Info = (payload:unknown) => axios.get('/event/011/info', { params: payload });
// ----------------------------------------------------------------------------------------------------------
// 每日任務分享直播
export const roomShare = (payload:unknown) => axios.post('/room/share', payload);
// ----------------------------------------------------------------------------------------------------------
// 取得貼圖可購買方案
export const stickerProgram = (payload:unknown) => axios.get('/sticker/program', { params: payload });
// 購買貼圖方案
export const stickerBuy = (payload:unknown) => axios.post('/sticker/buy', payload);

// ----------------------------------------------------------------------------------------------------------
// 直播間相關賽事
export const liveRoomLike = (payload:unknown) => axios.get('/live/room/like', { params: payload });
// ----------------------------------------------------------------------------------------------------------
// 賽事活動API
export const competitionCollaboration = (payload:unknown) => axios.get('/competition/get_collaboration', { params: payload });
// ----------------------------------------------------------------------------------------------------------
// 競猜資訊API for 東奧
export const guessOlympicList = (payload:unknown) => axios.get('/guess/olympic/list', { params: payload });
