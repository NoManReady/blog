import { Toast } from 'vant'

export const xhrErrorMsgHandler = (res) => {
  let _response = res.response
  let _message = null
  let _code = null
  if (!_response) {
    if (!res.isCancel) {
      try {
        if (res.message.indexOf('timeout') > -1) {
          _message = '请求超时'
          _code = 9000
        } else {
          _message = '请求失败，请检查网络连通性！'
          _code = 9001
        }
      } catch (e) {

      }
    } else {
      _message = res.message
      _code = 9002
    }
  } else {
    _code = _response.status
    switch (_code) {
      case 404:
        _message = '404,错误请求'
        break
      case 403:
      case 401:
        let _location = window.location
        saveToSession(
          'APP_DEFAULT_PATH', router.currentRoute.fullPath
        )
        setTimeout(() => {
          window.location.href = _location.protocol + '//' + _location.host
        }, 300)
        _message = '禁止访问'
        break
      case 408:
        _message = '请求超时'
        break
      case 500:
        _message = '服务器内部错误'
        break
      case 501:
        _message = '功能未实现'
        break
      case 503:
        _message = '服务不可用'
        break
      case 504:
        _message = '网关错误'
        break
      default:
        _message = _response.message || '未知错误'
        _code = 599
    }
  }
  if (process.env.NODE_ENV !== 'production' && _message) {
    Toast({
      message: _message,
      type: 'fail',
      duration: 2000,
      forbidClick: true
    })
  }
  return { msg: _message, code: _code }
}

/**
 * 开发输出log
 * @param {消息} msg
 */
export const log = msg => {
  if (process.env.NODE_ENV === 'development' && console && console.log) {
    console.log(msg)
  }
}