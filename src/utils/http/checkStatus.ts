const errorMsgList = {
	errMsg400: '请求错误(400)',
	errMsg401: '用户没有权限（令牌、用户名、密码错误）!',
	errMsg403: '用户得到授权，但是访问是被禁止的。!',
	errMsg404: '网络请求错误,未找到该资源!',
	errMsg405: '网络请求错误,请求方法未允许!',
	errMsg408: '网络请求超时!',
	errMsg500: '服务器错误,请联系管理员!',
	errMsg501: '网络未实现!',
	errMsg502: '网络错误!',
	errMsg503: '服务不可用，服务器暂时过载或维护!',
	errMsg504: '网络超时!',
	errMsg505: 'http版本不支持该请求!'
}

export const checkStatus = (status: number) => {
	let errMessage = ''
	switch (status) {
    case 400:
      errMessage = errorMsgList.errMsg400
      break;
    case 401:
      errMessage = errorMsgList.errMsg401
      break;
    case 403:
      errMessage = errorMsgList.errMsg403
      break;
    case 404:
      errMessage = errorMsgList.errMsg404
      break;
    case 405:
      errMessage = errorMsgList.errMsg405
      break;
    case 408:
      errMessage = errorMsgList.errMsg408
      break;
    case 500:
      errMessage = errorMsgList.errMsg500;
      break;
    case 501:
      errMessage = errorMsgList.errMsg501
      break;
    case 502:
      errMessage = errorMsgList.errMsg502
      break;
    case 503:
      errMessage = errorMsgList.errMsg503
      break;
    case 504:
      errMessage = errorMsgList.errMsg504
      break;
    case 505:
      errMessage = errorMsgList.errMsg505
      break;
    default:
  }
  return errMessage
}