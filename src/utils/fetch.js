import { Toast } from 'vant'
import axios from 'axios'
import store, { SET_LOADING } from '@/store'
import { log, xhrErrorMsgHandler } from '@/utils'
// 加载最小时间
const MINI_TIME = 300
// 超时时间
let TIME_OUT_MAX = 30000
// 环境value
let _dev = process.env.NODE_ENV !== 'production'
// 请求接口host
let _apiHost = 'https://v1.alapi.cn/api'
// 请求组（判断当前请求数）
let _requests = []
let _toast = null
/**
 * 添加请求，显示loading
 * @param {请求配置} config
 */
function pushRequest(config) {
  log(`${config.url}--begin`)
  _requests.push(config)
  store.commit('SET_LOADING')
  if (!_toast) {
    _toast = Toast.loading({
      duration: 0,
      forbidClick: true,
      loadingType: 'spinner',
      message: config.loadingText || '加载中'
    })
  }
}

/**
 * 移除请求，无请求时关闭loading
 * @param {请求配置} config
 */
function popRequest(config) {
  log(`${config.url}--end`)
  let _index = _requests.findIndex(r => {
    return r === config
  })
  if (_index > -1) {
    _requests.splice(_index, 1)
  }
  if (!_requests.length) {
    store.commit('SET_LOADING', false)
    if (_toast) {
      _toast.clear()
      _toast = null
    }
  }
}

// 全局设置axios
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.baseURL = _apiHost
/**
 * 请求地址，请求数据，是否静默，请求方法
 */
export default (url, data = {}, setting = {}) => {
  if (setting.timeout === 0) {
    setting.timeout = Infinity
  }
  setting = Object.assign(
    { isSilence: false, timeout: TIME_OUT_MAX, method: 'GET' },
    setting
  )
  let _opts = { method: setting.method, url }
  let _data = Object.assign({}, data)
  for (let _key in _data.params || {}) {
    if (_data.params.hasOwnProperty(_key)) {
      typeof _data.params[_key] === 'string'
        ? _data.params[_key].trim()
        : _data.params[_key]
    }
  }
  let _timer = null
  if (setting.method.toLocaleUpperCase() === 'POST') {
    _opts.data = _data
  } else {
    _opts.params = _data
  }

  const CancelToken = axios.CancelToken
  const source = CancelToken.source()
  const _promise = new Promise((resolve, reject) => {
    const _instance = axios.create({
      timeout: setting.timeout,
      cancelToken: source.token
    })
    let _random = {
      stamp: (new Date()).getTime(),
      url: `${_apiHost + url}--${setting.method}`,
      loadingText: setting.text
    }
    if (!setting.isSilence) {
      _timer = setTimeout(() => {
        pushRequest(_random)
      }, MINI_TIME)
    }
    _instance(_opts)
      .then(res => {
        let responseData = res.data || {}
        clearTimeout(_timer)
        if (!setting.isSilence) {
          popRequest(_random)
        }
        if (responseData.code === 200) {
          resolve(responseData.data)
        } else {
          Toast({
            message: responseData.msg || '接口出错',
            type: 'fail',
            duration: 2000,
            forbidClick: true
          })
          reject()
        }
      })
      .catch(res => {
        // 用户取消请求
        res.isCancel = axios.isCancel(res)
        clearTimeout(_timer)
        if (!setting.isSilence) {
          popRequest(_random)
        }
        res.localError = xhrErrorMsgHandler(res).msg
        reject(res)
      })
  })
  _promise.cancel = (fn = null) => {
    return Promise.resolve(typeof (fn) === 'function' ? fn() : fn).then(d => {
      return source.cancel(d) || d
    })
  }
  return _promise
}
